import { useQuery } from "react-query"
import { useMainModuleDispatch, MAIN_MODULE_ACTION, useMainModuleState } from "..";
import Network from "../../network";

export default function useText() {
    const dispatch = useMainModuleDispatch();
    const {} = useMainModuleState();

    const { isFetching, data, error } = useQuery('get-config', Network.getConfig, {
        staleTime: Infinity,
        onSuccess: (data) => {
            dispatch({
                type: MAIN_MODULE_ACTION.FETCH_CONFIG_SUCCESS,
                payload: {
                    text: data
                }
            })
        }
    })

    return {
        serverTime: (data?.serverTime || 0)*1000 || Date.now(),
        isLoading: isFetching,
        error,
    }
}
