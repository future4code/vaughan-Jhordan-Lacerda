import react from "react";
import { useNavigate } from "react-router-dom";

export default function ApplicationFormPage() {
    const navigate = useNavigate()

    const goToListTripPage = () => {
        navigate("/trips/list")
    }

    return (
        <div>
            <p>ApplicationFormPage</p>
            <p>Inscreva-se para uma viagem</p>
            <button onClick={goToListTripPage}>Voltar</button>
            <button>Enviar</button>
        </div>
        
    )
}