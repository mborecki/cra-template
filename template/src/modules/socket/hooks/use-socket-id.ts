import { useSocket } from "..";

export default function useSocketId() {
    const socket = useSocket();

    return socket.id;
}
