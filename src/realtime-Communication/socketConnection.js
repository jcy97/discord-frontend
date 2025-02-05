import { io } from "socket.io-client";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  const jwtToken = userDetails.token;

  // 올바르게 io() 호출
  socket = io("http://localhost:5002", {
    auth: {
      token: jwtToken,
    },
  });

  socket.on("connect", () => {
    console.log("웹소켓 서버 연결 성공");
    console.log(socket.id);
  });
};
