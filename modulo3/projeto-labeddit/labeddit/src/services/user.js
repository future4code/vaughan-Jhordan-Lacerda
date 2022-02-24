import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeedPage } from "../routes/cordinator";

export const login = (body, navigate) => {
  console.log(body);

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
