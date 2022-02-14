import axios from "axios";
import { BASE_URL } from "./Constants/urls";

export default function ResetButton () {
    const clear = () => {
        const url = `${BASE_URL}/:jhordan/clear`

        axios.put(url)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return <button onClick={clear}>Limpar swipes e matches</button>
}