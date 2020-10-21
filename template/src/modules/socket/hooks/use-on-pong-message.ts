import { useEffect, useCallback } from "react";
import { useSocket } from "..";

export default function useOnPongMessage(callback: () => void) {
    const socket = useSocket();

    const wrapper = useCallback(({type}: any) => {
        if (type === 'pong') {
            callback();
        }
    }, [callback]);

    useEffect(() => {
        socket.on('message', wrapper);

        return () => {
            socket.off('message', wrapper);
        }
    }, [wrapper, socket]);
}
