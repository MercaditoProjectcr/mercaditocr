import axios from 'axios';
const API = 'http://container_api:5000/api';
const token = window.localStorage.getItem('__edus_token__');
const headers = { 
    'content-type': 'application/json',
    'x-token': process.env.REACT_APP_API_TOKEN,
    Authorization: `Bearer ${token}`
}

const handleErrors = (error) => {
    if (error.response) {
        console.log('Error response', error.response); 
    } else if (error.request) { 
        console.log('Error request', error.request);
    } else {
        console.log('Error message', error.message);
    }
    console.log('Error config', error.config);
    return {
        error: true
    }
}

export const getAllUsers = async () => {
    try{
        const options = {
            headers,
            method: 'get',
            url: `${API}/users`
        }
    const fecthResult = await axios(options);
    return fecthResult.data;
    } catch (error) {
        return handleErrors(error);
    }
}

export default { getAllUsers }
