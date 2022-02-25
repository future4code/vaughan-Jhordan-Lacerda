import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeedPage } from "../routes/cordinator";

export const login = (body, navigate) => {
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      goToFeedPage(navigate);
    })
    .catch((err) => {
      alert(err.response.data);
    });
};

export const signUp = (body, navigate) => {
  axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      navigate("/");
    })
    .catch((err) => {
      alert(err.response.data);
    });
};
