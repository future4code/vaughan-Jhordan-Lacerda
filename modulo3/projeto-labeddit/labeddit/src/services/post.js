import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToLogin } from "../routes/cordinator";

export const submitNewPost = (body) => {
  const token = localStorage.getItem("token");

  axios
    .post(`${BASE_URL}/posts`, body, { headers: { Authorization: token } })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const getPosts = (setState, navigate) => {
  const token = localStorage.getItem("token");

  axios
    .get(`${BASE_URL}/posts`, { headers: { Authorization: token } })
    .then((res) => {
      setState(res.data);
    })
    .catch((err) => {
      if (
        err.response.data ===
        "Falha na autenticação. Token expirado ou não inserido no campo 'Authorization' dos headers "
      ) {
        goToLogin(navigate);
        alert("Login expirado");
      }
    });
};
