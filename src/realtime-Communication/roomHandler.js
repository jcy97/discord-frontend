import { setOpenRoom, setRoomDetails } from "../store/actions/roomActions";
import store from "../store/store";
import * as socketConnection from "./socketConnection";
export const createNewRoom = () => {
  //채팅방 열림 여부를 true로 설정
  store.dispatch(setOpenRoom(true, true));
  socketConnection.createNewRoom();
};

export const newRoomCreated = (data) => {
  const [roomDetails] = data;
  store.dispatch(setRoomDetails(roomDetails));
};
