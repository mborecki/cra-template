import React from "react";
import { useState, useCallback, useEffect, useMemo } from "react";
import useConfig from "./use-config";

function _useNow() {

    const {serverTime} = useConfig();

    const serverDeltaTime = useMemo(() => {
        return serverTime - Date.now();
    }, [serverTime]);

    const [serverNow, setGlobalNow] = useState(Date.now() + serverDeltaTime);

    useEffect(() => {
        const id = window.setInterval(() => {
            setGlobalNow(Date.now() + serverDeltaTime);
        }, 500);

        return () => {
            window.clearInterval(id);
        }
    }, [setGlobalNow, serverDeltaTime]);

    const setDelta = useCallback((delta: number) => {
        localStorage.setItem('admin-delta-time', String(delta))
        _setDelta(delta);
    }, [])

    const [delta, _setDelta] = useState(() => {
        const parsed = parseInt(localStorage.getItem('admin-delta-time') || '0');
        return isNaN(parsed) ? serverDeltaTime : parsed;
    });

    const now = useMemo(() => {
        return serverNow + delta;
    }, [serverNow, delta]);

    const reset = useCallback(() => {
        setDelta(serverDeltaTime);
        localStorage.removeItem('admin-delta-time');
    }, [setDelta, serverDeltaTime]);

    return {
        now,
        serverNow,
        setDelta,
        reset
    }
}

type TimeState = {
    now: number,
    serverNow: number,
    setDelta: (v: number) => void,
    reset: () => void
}

const initValue = {
    now: Date.now(),
    serverNow: Date.now(),
    setDelta: (v: number) => {},
    reset: () => {}
}

const timeContext = React.createContext<TimeState>(initValue)

function TimeProvider({ children }: React.PropsWithChildren<{}>) {
    return <timeContext.Provider value={_useNow()}>{children}</timeContext.Provider>
}

function useNow() {
    return React.useContext(timeContext)
}

export {TimeProvider};

export default useNow;
