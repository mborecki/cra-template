import Axios from 'axios';

/**
 * Axios instance to comunicate with local PHP backend
 */
const APIClient = Axios.create({
    baseURL: '/api/',
    withCredentials: true
})

type GetConfigResponse = {
    serverTime: number
}

function getConfig(): Promise<GetConfigResponse> {
    return APIClient.get('/config')
        .then((response) => {
            return {
                serverTime: response.data.time
            }
        });
}


const Network = {
    getConfig
}

export default Network;
