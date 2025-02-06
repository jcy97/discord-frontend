import store from "../../store/store";
import { setMessages } from "../../store/actions/chatActions";
export const updateDirectChatHistoryIfActive = (data) => {
  const { participants, messages } = data;

  // 현재 활성화된 대화에 있는 사용자의 id와 토큰을 찾는다.
  const receiverId = store.getState().chat.chosenChatDetails?.id;
  const userId = store.getState().auth.userDetails._id;

  if (receiverId && userId) {
    const usersInConversation = [receiverId, userId];

    updateChatHistoryIfSameConversationActive({
      participants,
      usersInConversation,
      messages,
    });
  }
};

const updateChatHistoryIfSameConversationActive = ({
  participants,
  usersInConversation,
  messages,
}) => {
  const result = participants.every(function (participantId) {
    return usersInConversation.includes(participantId);
  });

  if (result) {
    store.dispatch(setMessages(messages));
  }
};
