import { useQuery } from "react-query"
import makeRequest from "../../../utils/network/make-request"
import { useDemoModuleDispatch, DEMO_MODULE_ACTION, useDemoModuleState } from "..";


function getText() {
    return makeRequest('/data.json').then(data => {
        return data.data.text
    });
}

export default function useText() {

    const dispatch = useDemoModuleDispatch();
    const { text } = useDemoModuleState();

    const { isFetching, data, error } = useQuery('demo-query', getText, {
        onSuccess: (data) => {
            dispatch({
                type: DEMO_MODULE_ACTION.FETCH_SUCCESS,
                payload: {
                    text: data
                }
            })
        }
    })

    return {
        text: error ? text : data,
        error,
        isLoading: isFetching
    }
}
