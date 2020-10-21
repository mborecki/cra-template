import socketIOClient from "socket.io-client";
import React, { useContext } from "react";

export default function createSocket(url: string, options: SocketIOClient.ConnectOpts = { transports: ['websocket'] }) {
    const socket = socketIOClient(url, options);
    const context = React.createContext<SocketIOClient.Socket>(socket);

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
