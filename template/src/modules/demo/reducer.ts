import { DemoModuleState, DemoModuleAction, DEMO_MODULE_ACTION } from ".";

export default function UserReducer(state: DemoModuleState, action: DemoModuleAction): DemoModuleState {
    switch (action.type) {
        case DEMO_MODULE_ACTION.FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                text: action.payload.text
            }
    }

    return state;
}
