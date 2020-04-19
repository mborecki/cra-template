import axios from 'axios';

export default function makeRequest(url: string) {
    return axios.get(url)
}
