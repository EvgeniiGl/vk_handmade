import axios, { AxiosInstance, AxiosResponse } from 'axios';

// const env = process.env.NODE_ENV !== 'production' ? 'ords' : 'dev';

const fetchClient = (baseURL=null) => {
    const defaultOptions = {
        baseURL:!baseURL?``:baseURL,
        headers: {
            'Content-Type': 'application/json',
        },
    };
    // Create instance
    let instance;
    instance = axios.create(defaultOptions);
    return instance;
};

export default class http {

     static get = async (uri, baseUrl=null)=> {
        const instance = fetchClient(baseUrl);
        try {
            return await instance.get(uri);
        } catch (e) {
            return e;
        }
    };

     static post = async (uri, data, baseUrl=null) => {
        const instance = fetchClient(baseUrl);
        console.log(uri, data);
        try {
            return await instance.post(uri, data);
        } catch (e) {
            return e;
        }
    };

}
