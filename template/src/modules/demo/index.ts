import makeStore from "../../utils/create-store";
import reducer from "./reducer";

const DEMO_MODULE_LS_KEY = 'demo-module'

export type DemoModuleState = {
    isLoading: boolean,
    text: string,
}

const initDemoModuleState = {
    isLoading: false,
    text: 'init-text'
}

export enum DEMO_MODULE_ACTION {
    FETCH,
    FETCH_SUCCESS
}

export type DemoModuleAction = {
    type: DEMO_MODULE_ACTION,
    payload?: any
}

const [
    DemoModuleProvider,
    useDemoModuleDispatch,
    useDemoModuleState
] = makeStore(reducer, initDemoModuleState, DEMO_MODULE_LS_KEY)


export {
    DemoModuleProvider,
    useDemoModuleDispatch,
    useDemoModuleState
}
