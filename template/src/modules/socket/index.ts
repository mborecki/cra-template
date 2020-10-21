import createSocket from "./create-socket";
import useSocketId from "./hooks/use-socket-id";
import useOnPongMessage from './hooks/use-on-pong-message';
import useSendPing from './hooks/use-send-ping';

const WS_URL = "ws://localhost:8081";
// const WS_URL = "ws://ogt-game.test-mborecki.online";

const {
    SocketProvider,
    useSocket
} = createSocket(WS_URL);

export {
    SocketProvider,
    useSocket,
    useSocketId
}

export {
    useOnPongMessage,
    useSendPing
}
