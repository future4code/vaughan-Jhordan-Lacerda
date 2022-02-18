import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../Hook/useForm";

export default function LoginPage() {
  const { form, onChange} = useForm({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const onSubmitLogin = (event) => {
    event.preventDefault();
    const url = `${BASE_URL}/login`;

    axios
      .post(url, form)
      .then((res) => {
        alert("Login realizado com sucesso");
        localStorage.setItem("token", res.data.token);
        navigate("/admin/trips/list");
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.message);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmitLogin}>
        <input
          name={"email"}
          placeholder="E-mail"
          value={form.email}
          onChange={onChange}
          required
          type={"email"}
        />
        <input
          name={"password"}
          placeholder="Senha"
          type={"password"}
          value={form.password}
          onChange={onChange}
          required
        />
        <button onClick={goBack}>Voltar</button>
        <button>Entrar</button>
      </form>
    </div>
  );
}
