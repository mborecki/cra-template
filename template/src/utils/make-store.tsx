import React, { useReducer } from "react";

export default function createStore<T, A>(userReducer: (state: T, action: A) => T, initState: T, localStorageKey?: string)
    : [
        (props: React.PropsWithChildren<any>) => JSX.Element,
        () => React.Dispatch<A>,
        () => T
    ] {
    const dispathContext: React.Context<React.Dispatch<A>> = React.createContext((value: A) => { });
    const storeContext: React.Context<T> = React.createContext(initState);

    if (localStorageKey) {
        try {
            initState = JSON.parse(window.localStorage.getItem(localStorageKey) || '') || initState
        } catch { }
    }

    const reducer = (state: T, action: A): T => {
        const newState = userReducer(state, action);
        if (localStorageKey) {
            localStorage.setItem(localStorageKey, JSON.stringify(newState))
        }

        return newState;
    }

    const StoreProvider = ({ children }: React.PropsWithChildren<{}>) => {
        const [store, dispatch] = useReducer(reducer, initState);

        return (
            <dispathContext.Provider value={dispatch} >
                <storeContext.Provider value={store}>
                    {children}
                </ storeContext.Provider>
            </ dispathContext.Provider>
        )
    }

    function useDispatch() {
        return React.useContext(dispathContext);
    }

    function useStore() {
        return React.useContext(storeContext);
    }

    return [StoreProvider, useDispatch, useStore]
}
