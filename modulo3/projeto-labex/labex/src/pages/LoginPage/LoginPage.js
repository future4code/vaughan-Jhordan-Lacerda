import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitLogin = () => {
    const url = `${BASE_URL}/login`;

    const body = {
      email: email,
      password: password,
    };

    axios.post(url, body)
    .then((res) => {
        alert("Login realizado com sucesso")
        localStorage.setItem("token", res.data.token)
        navigate("/admin/trips/list")
    })
    .catch((err) => {
        console.log(err.response)
        alert(err.response.data.message)
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        placeholder="E-mail"
        type={"email"}
        value={email}
        onChange={onChangeEmail}
      />
      <input
        placeholder="Senha"
        type={"password"}
        value={password}
        onChange={onChangePassword}
      />
      <button onClick={goBack}>Voltar</button>
      <button onClick={onSubmitLogin}>Entrar</button>
    </div>
  );
}
