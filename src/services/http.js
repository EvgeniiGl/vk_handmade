import axios from 'axios';

// const baseURL = 'http://localhost/liftlab/www/some/ajax/'
const baseURL = 'http://151.237.175.72:8085/some/ajax/'


const fetchClient = axios.create({
    baseURL: baseURL,
});

export default class httpApiVk {

    static get = async (uri, queryParams) => {
        try {
            return await fetchClient.get(uri, {params: queryParams});
        } catch (e) {
            return e;
        }
    }

    static post = async (uri, data) => {
        // const instance = fetchClient();
        // console.log(uri, data);
        try {
            return await fetchClient.post(uri, JSON.stringify(data));
        } catch (e) {
            return e;
        }
    };

}