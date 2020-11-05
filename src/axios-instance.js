import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://blog-hon-media.firebaseio.com/'
});

export default instance;
