import {io, ManagerOptions, Socket, SocketOptions} from "socket.io-client";
import React, { useContext } from "react";

export default function createSocket(url: string, options: Partial<ManagerOptions & SocketOptions> = { transports: ['websocket'] }) {
    const socket = io(url, options);
    const context = React.createContext<Socket>(socket);

    const SocketProvider: React.FunctionComponent = ({ children }) => {
        return (
            <context.Provider value={socket}>
                {children}
            </context.Provider>
        )
    }
    const useSocket = () => {
        return useContext(context);
    }

    return {
        SocketProvider,
        useSocket
    }
}
