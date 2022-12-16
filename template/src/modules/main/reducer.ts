import { MainModuleState, MainModuleAction, MAIN_MODULE_ACTION } from ".";

export default function UserReducer(state: MainModuleState, action: MainModuleAction): MainModuleState {
    const { type, payload } = action;
    console.log('action:', { type, payload });
    switch (type) {
        case MAIN_MODULE_ACTION.FETCH_CONFIG:
            return {
                ...state,
                isLoading: true
            }
        case MAIN_MODULE_ACTION.FETCH_CONFIG_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
    }

    return state;
}
