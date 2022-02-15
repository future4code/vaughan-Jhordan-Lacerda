import react from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/");
    }

    return (
        <div>
            <h2>Login</h2>
            <input placeholder="E-mail"/>
            <input placeholder="Senha"/>
            <button onClick={goBack}>Voltar</button>
            <button>Entrar</button>
        </div>
        
    )
}