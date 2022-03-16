import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const getPostComments = (params, setState) => {
    const token = localStorage.getItem("token");

    axios.get(`${BASE_URL}/posts/${params.id}/comments`, { headers: { Authorization: token } })
    .then((res) => {
        setState(res.data)
    })
    .catch((err) => {
        console.log(err.response)
    })
}

export const createNewComment = (body, params) => {
    const token = localStorage.getItem("token");

    axios.post(`${BASE_URL}/posts/${params.id}/comments`, body, { headers: { Authorization: token } })
    .then((res) => {
        alert(res.data)
    })
    .catch((err) => {
        console.log(err.data)
    })
}