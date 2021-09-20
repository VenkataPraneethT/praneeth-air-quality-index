import { APP_CONFIG } from '../config/app.config';
let socket;

export const initiateSocket = () => {
  socket = new WebSocket(APP_CONFIG.SOCKET_SERVER_URL);
};

export const subscribe = (callback) => {
  if (!socket) {
    initiateSocket();
  }

  socket.onmessage = (event) => {
    return callback(null, JSON.parse(event.data));
  };
};
