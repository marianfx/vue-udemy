import axios from 'axios';

const instance = axios.create({
    baseURL: "https://identitytoolkit.googleapis.com/v1"
});

// these defaults apply on this instance; same settings as global
// instance.defaults.headers.common["Some-Header"] = 'Some header value'

export default instance