import react from "react";
import { useNavigate } from "react-router-dom";

export default function TripDetailsPage() {
    const navigate = useNavigate();

    const goToAdminHomePage = () => {
        navigate("/admin/trips/list")
    }

    return (
        <div>
            <h1>Nome da Viagem</h1>
            <p>Nome:</p>
            <p>Descrição:</p>
            <p>Planeta:</p>
            <p>Duração:</p>
            <p>Data:</p>

            <button onClick={goToAdminHomePage}>Voltar</button>

            <h2>Candidatos Pendentes</h2>
            <p>card com as informações do candidato</p>
            <button>Aprovar</button>
            <button>Reprovar</button>

            <h2>Candidatos Aprovados</h2>
            <ul>
                <li>Nome dos candidatos aprovados</li>
            </ul>


        </div>
    )
}