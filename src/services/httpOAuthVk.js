import axios from 'axios';

// const env = process.env.NODE_ENV !== 'production' ? 'ords' : 'dev';

// const uriImg = `https://api.vk.com/method/photos.getById?access_token=470c6262470c6262470c62624a476171c74470c470c62621a81abc51a6bc2a2df1c0664`;
const baseURL = 'https://oauth.vk.com/authorize';

// https://oauth.vk.com/authorize?client_id=470c6262470c6262470c62624a476171c74470c470c62621a81abc51a6bc2a2df1c0664&display=page&redirect_uri=http://localhost:10888&scope=messages&response_type=token&v=5.101&state=123456

// https://oauth.vk.com/authorize?client_id=7148453&group_ids=176551026&display=page&redirect_uri=http://localhost:10888&scope=messages&response_type=token&v=5.101

// https://oauth.vk.com/authorize?client_id=1&display=page&redirect_uri=http://example.com/callback&scope=friends&response_type=token&v=5.101&state=123456

const params = {
    client_id: "7148453",
    group_ids: "176551026",
    display: "page",
    redirect_uri: "http://localhost:10888/",
    scope: "wall",
    response_type: 'token',
    v: '5.101',
}

const fetchClient = axios.create({
    baseURL: baseURL,
});

export default class httpOAuthVk {

    static get = async (uri='', queryParams = {}) => {
        try {
            return await fetchClient.get(uri, {params: Object.assign(queryParams, params)});
        } catch (e) {
            return e;
        }
    }

    // static post = async (uri, data) => {
    //     // const instance = fetchClient();
    //     console.log(uri, data);
    //     try {
    //         return await fetchClient.post(uri, data);
    //     } catch (e) {
    //         return e;
    //     }
    // };

    // static jsonp = async (uri, queryParams, fn) => {
    //     const url = `${baseURL}${uri}?access_token=${access_token}&photos=${queryParams.photos}&extended=0&photo_sizes=0&v=5.101`;
    //     await jsonp(url, null, fn);
    // }
}
