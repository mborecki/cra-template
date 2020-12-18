import makeStore from "@mborecki/react-create-store";
import reducer from "./reducer";

const CONFIG_MODULE_LS_KEY = 'page_config'

export type MainModuleState = {
    isLoading: boolean,
}

const initMainModuleState = {
    isLoading: false
}

export enum MAIN_MODULE_ACTION {
    FETCH_CONFIG,
    FETCH_CONFIG_SUCCESS
}

export type MainModuleAction = {
    type: MAIN_MODULE_ACTION,
    payload?: any
}

const [
    MainModuleProvider,
    useMainModuleDispatch,
    useMainModuleState
] = makeStore(reducer, initMainModuleState, CONFIG_MODULE_LS_KEY)


export {
    MainModuleProvider,
    useMainModuleDispatch,
    useMainModuleState
}
