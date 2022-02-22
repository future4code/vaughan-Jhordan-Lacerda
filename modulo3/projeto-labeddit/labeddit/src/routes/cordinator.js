export const goToLogin = (navigate) => {
    navigate("/login");
}

export const goToRegister = (navigate) => {
    navigate("/cadastro");
}

export const goToFeedPage = (navigate) => {
    navigate("/");
}

export const goToPostPage = (navigate, id) => {
    navigate(`/post/${id}`);
}