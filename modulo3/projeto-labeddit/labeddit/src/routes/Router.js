import { BrowserRouter, Route, Routes } from "react-router-dom"
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import PostPage from "../pages/PostPage/PostPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/login" element={<LoginPage/>} />
                <Route exact path="/cadastro" element={<SignUpPage/>} /> 
                <Route exact path="/" element={<FeedPage/>} />
                <Route exact path="/post/:id" element={<PostPage />} />
                <Route exact path="*" element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router