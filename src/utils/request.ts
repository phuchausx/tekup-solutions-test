import axios from "axios";

const request = axios.create({
   baseURL: 'https://json-server-tekup.herokuapp.com/api/',
})

export const get = async (path: string, options = {}) => {
   const response = await request.get(path, options);
   return response.data;
}

export default request;