import React, { Context } from "react";

export default function makeStore<T, A>(userReducer: (state: T, action: A) => T, initState: T, localStorageKey?: string)
    : [React.FunctionComponent, () => React.Dispatch<A>, () => T] {
    const dispathContext: Context<React.Dispatch<A>> = React.createContext((value: A) => {});
    const storeContext: Context<T> = React.createContext(initState);

    if (localStorageKey) {
        try {
            initState = JSON.parse(window.localStorage.getItem(localStorageKey) || '') || initState
        } catch { }
    }

    const reducer = (state: T, action: A) => {
        const newState = userReducer(state, action);
        if (localStorageKey) {
            localStorage.setItem(localStorageKey, JSON.stringify(newState))
        }

        console.log({ action, state, newState });

        return newState;
    }

    const StoreProvider: React.FunctionComponent = ({ children }) => {
        const [store, dispatch] = React.useReducer(reducer, initState)


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
