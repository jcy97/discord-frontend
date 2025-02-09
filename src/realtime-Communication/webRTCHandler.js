import store from "../store/store";
import { setLocalStream, setRemoteStreams } from "../store/actions/roomActions";
import Peer from "simple-peer";
import * as socketConnection from "./socketConnection";

const getConfiguration = () => {
  const turnIceServers = null;

  if (turnIceServers) {
    // TODO Turn 서버 이용 로직 구현 필요
  } else {
    console.warn("STUN 서버만을 사용하고 있습니다.");
    return {
      iceServers: [
        {
          //구글 스턴 서버를 사용
          urls: "stun:stun.l.google.com:19032",
        },
      ],
    };
  }
};

const audioOnlyConstraints = {
  audio: true,
  video: false,
};
const defaultConstraints = {
  video: true,
  audio: true,
};

export const getLocalStreamPreview = (audioOnly = false, callbackFunc) => {
  const constraints = audioOnly ? audioOnlyConstraints : defaultConstraints;
  console.log(constraints);
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      store.dispatch(setLocalStream(stream));
      callbackFunc();
    })
    .catch((error) => {
      console.log(error);
      console.log("로컬 스트림에 액세스 할 수 없습니다.");
    });
};

let peers = {};
//시그널링을 위한 피어 연결 수행
export const prepareNewPeerConnection = (connUserSocketId, isInitiator) => {
  const localStream = store.getState().room.localStream;
  if (isInitiator) {
    console.log("새로운 피어 커넥션을 시작자로써 준비합니다.");
  } else {
    console.log("새로운 피어 커넥션을 참여자로써 준비합니다.");
  }
  //simple-peer 사용 부분
  peers[connUserSocketId] = new Peer({
    initiator: isInitiator,
    config: getConfiguration(),
    stream: localStream,
  });

  // webScket의 on이 아니라 simple-peer에서 처리하는 별도의 On
  peers[connUserSocketId].on("signal", (data) => {
    const signalData = {
      signal: data,
      connUserSocketId: connUserSocketId,
    };
    //시그널링 데이터 교환
    socketConnection.signalPeerData(signalData);

    //TODO
    // 시그널링 데이터 전달
    //socketConnection.signalPeerData(signalData);
  });
  peers[connUserSocketId].on("stream", (remoteStream) => {
    //TODO
    // 신규 원격 스트림 정보를 스토어에 저장
    console.log("원격 스트림 정보가 다른 유저로부터 도착했습니다");
    remoteStream.connUserSocketId = connUserSocketId;
    addNewRemoteStream(remoteStream);
  });
};

export const handleSignalingData = (data) => {
  const { connUserSocketId, signal } = data;
  //시그널 데이터를 받으면, 시그널 설정
  if (peers[connUserSocketId]) {
    peers[connUserSocketId].signal(signal);
  }
};

const addNewRemoteStream = (remoteStream) => {
  const remoteStreams = store.getState().room.remoteStreams;
  const newRemoteStreams = [...remoteStreams, remoteStream];

  store.dispatch(setRemoteStreams(newRemoteStreams));
};

// 모든 연결 죽이기
export const closeAllConnections = () => {
  Object.entries(peers).forEach((mappedObject) => {
    const connUserSocketId = mappedObject[0];
    if (peers[connUserSocketId]) {
      peers[connUserSocketId].destroy();
      delete peers[connUserSocketId];
    }
  });
};
// 참여자가 방 나갈 때 연결 죽이기
export const handleParticipantLeftRoom = (data) => {
  const { connUserSocketId } = data;
  if (peers[connUserSocketId]) {
    peers[connUserSocketId].destroy();
    delete peers[connUserSocketId];
  }

  const remoteStreams = store.getState().room.remoteStreams;
  const newRemoteStreams = remoteStreams.filter(
    (remoteStream) => remoteStream.connUserSocketId !== connUserSocketId
  );

  store.dispatch(setRemoteStreams(newRemoteStreams));
};
export const switchOutgoingTracks = (stream) => {
  for (let socket_id in peers) {
    for (let index in peers[socket_id].streams[0].getTracks()) {
      for (let index2 in stream.getTracks()) {
        if (
          peers[socket_id].streams[0].getTracks()[index].kind ===
          stream.getTracks()[index2].kind
        ) {
          peers[socket_id].replaceTrack(
            peers[socket_id].streams[0].getTracks()[index],
            stream.getTracks()[index2],
            peers[socket_id].streams[0]
          );
          break;
        }
      }
    }
  }
};
