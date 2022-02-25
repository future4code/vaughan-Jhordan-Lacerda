import { UseProtectedPage } from "../../hook/useProtectedPage"

const FeedPage = () => {
    UseProtectedPage();
    return(
        <div>
            <p>FeedPage</p>
        </div>
    )
}

export default FeedPage