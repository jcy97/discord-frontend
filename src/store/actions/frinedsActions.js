import { openAlertMessage } from "./alertActions";
import * as api from "../../api";

export const friendsActions = {
  SET_FRIENDS: "FRIENDS.SET_FRIENDS",
  SET_PENDING_FRIENDS_INVITATIONS: "FRIENDS.SET_PENDING_FRINEDS_INVITATIONS",
  SET_ONLINE_USERS: "FRINEDS.SET_ONLINE_USERS",
};

/*
1. 리덕스로 상태관리하는 컴포넌트로부터 export 할 때 connect 함수에 사용된다.
2. mapActionToProps에 디스패치를 담아 connect에 넘겨진다.
3. mapActionToProps는 getActions를 내부적으로 호출해서 사용할 수 있는 액션 리스트를 가져온다.
   한마디로 이 액션이 어떤 상태관리 처리 함수들을 갖고 있는지 알려준다.
4. 그 후 컴포넌트에 props으로 액션이 가지고 있는 메서드들을 넘겨줘서 컴포넌트 이벤트로 상태가 디스패치 되도록 한다.
*/
export const getActions = (dispatch) => {
  return {
    sendFriendInvitation: (data, closeDialogHandler) =>
      dispatch(sendFriendInvitation(data, closeDialogHandler)),
    acceptFriendInvitation: (data) => dispatch(acceptFriendInvitation(data)),
    rejectFriendInvitation: (data) => dispatch(rejectFriendInvitation(data)),
  };
};

export const setPendingFriendsInvitations = (pendingFriendsInvitations) => {
  return {
    type: friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
    pendingFriendsInvitations,
  };
};

export const setFriends = (friends) => {
  return {
    type: friendsActions.SET_FRIENDS,
    friends,
  };
};

export const setOnlineUsers = (onlineUsers) => {
  return {
    type: friendsActions.SET_ONLINE_USERS,
    onlineUsers,
  };
};

const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await api.sendFriendInvitation(data);

    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage("초대가 발송되었습니다."));
      closeDialogHandler();
    }
  };
};

const acceptFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await api.acceptFriendInvitation(data);
    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage("초대를 수락하였습니다."));
    }
  };
};
const rejectFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await api.rejectFriendInvitation(data);
    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage("초대를 거부하였습니다."));
    }
  };
};
