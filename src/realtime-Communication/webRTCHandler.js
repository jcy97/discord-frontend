import store from "../store/store";
import { setLocalStream } from "../store/actions/roomActions";

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
