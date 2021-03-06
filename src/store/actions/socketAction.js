// redux websocket types
export const MESSAGE = 'REDUX_WEBSOCKET::MESSAGE';
export const OPEN = 'REDUX_WEBSOCKET::OPEN';
export const ERROR = 'REDUX_WEBSOCKET::ERROR';
export const BROKEN = 'REDUX_WEBSOCKET::BROKEN';
export const BEGIN_RECONNECT = 'REDUX_WEBSOCKET::BEGIN_RECONNECT';
export const CLOSED = 'REDUX_WEBSOCKET::CLOSED';

export const CONNECT_SOCKET = 'CONNECT_SOCKET';

export const connectSocket = () => ({ type: CONNECT_SOCKET });
