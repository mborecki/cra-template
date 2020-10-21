import { useCallback } from "react";
import { useSocket } from "..";

export default function useSendPing() {
    const socket = useSocket();

    return useCallback(() => {
        socket.send({
            type: 'ping'
        })
    }, [socket])
}
