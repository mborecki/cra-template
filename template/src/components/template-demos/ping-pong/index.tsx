import React, { useCallback, useState } from "react";
import { useOnPongMessage, useSendPing } from "../../../modules/socket";

type Props = {};

/**
 * Socket comunication demo
 */
const PingPong: React.FunctionComponent<Props> = () => {
    const sendPing = useSendPing();

    const [pong, setPong] = useState<String>('');

    const onClick = useCallback(() => {
        sendPing();
    }, [sendPing])

    const onPong = useCallback(() => {

        setPong((new Date()).toISOString());
    }, [setPong]);

    useOnPongMessage(onPong);

    return (<>

        <button onClick={onClick}>PING!</button>

        {pong && <p>Last pong: {pong}</p>}

    </>)
}

export default PingPong;
