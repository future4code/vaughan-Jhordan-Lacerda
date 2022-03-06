import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const submitNewPost = (body) => {
    const token = localStorage.getItem("token");

  axios
    .post(`${BASE_URL}/posts`, body,{ headers: { Authorization: token } })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response);
    });
};
