import axios from "axios";

const endPoint = "https://jsonplaceholder.typicode.com"

export const getTodos = async () => {
    const url = `${endPoint}/todos`;
    const response = await axios.get(url);
    return response;
}


export const  getUser = async () => {
    const url = `${endPoint}/users`;
    const response = await axios.get(url);
    return response;
}


export const deleteUser = async (id) => {
    const url = `${endPoint}/users/${id}`;
    const response = await axios.delete(url);
    return response;
}


export const AddPost = async () => {
    const url = `${endPoint}/posts`;
    const response = await axios.get(url);
    return response;
}


export const postApi = async () => {
    const url = `${endPoint}/posts`;
    const response = await axios.post(url, payload);
    return response;
}

export const putApi = async (payload) => {
    const url = `${endPoint}/posts/${payload.id}`;
    const response = await axios.put(url, payload);
    return response;
}

export const deletePostApi = async (id) => {
    const url = `${endPoint}/posts/${id}`;
    const response = await axios.delete(url);
    return response;
}
