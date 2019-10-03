import axios from 'axios';
import jsonp from 'jsonp';

// const env = process.env.NODE_ENV !== 'production' ? 'ords' : 'dev';

// const uriImg = `https://api.vk.com/method/photos.getById?access_token=470c6262470c6262470c62624a476171c74470c470c62621a81abc51a6bc2a2df1c0664`;
const baseURL = 'https://api.vk.com/method/'
const access_token = `470c6262470c6262470c62624a476171c74470c470c62621a81abc51a6bc2a2df1c0664`;
export const handmade_id = `176551026`;
const params =   {
    access_token: access_token,
}

const fetchClient = axios.create({
    baseURL: baseURL,

});

export default class http {

    static get = async (uri, queryParams) => {
        try {
            return await fetchClient.get(uri,{params:Object.assign(queryParams,params)});
        } catch (e) {
            return e;
        }
    }

    static post = async (uri, data) => {
        // const instance = fetchClient();
        console.log(uri, data);
        try {
            return await fetchClient.post(uri, data);
        } catch (e) {
            return e;
        }
    };

    static jsonp = async (uri, queryParams)=>{
        const url = `${baseURL}${uri}?access_token=${access_token}&photos=${queryParams.photos}&extended=0&photo_sizes=0&v=5.101`
        jsonp(url, null, function (err, data) {
            if (err) {
                console.error(err.message);
            } else {
               return data
            }
        });
    }
}
