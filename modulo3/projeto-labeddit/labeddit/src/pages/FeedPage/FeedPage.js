import react, { useEffect, useState } from "react";
import { UseProtectedPage } from "../../hook/useProtectedPage";
import {
  ListPostContainer,
  ScreenContainer,
} from "./styled";
import { FeedForm } from "./FeedForm";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import {
  Grid,
  GridItem,
  IconButton,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { VscComment } from "react-icons/vsc";
import {
  TiArrowUpOutline,
  TiArrowUpThick,
  TiArrowDownOutline,
  TiArrowDownThick,
} from "react-icons/ti";
import { goToLogin, goToPostPage } from "../../routes/cordinator";
import { useNavigate } from "react-router-dom";
import Post from "../../components/PostList/Post";

const FeedPage = () => {
  const [arrPosts, setArrPosts] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getPosts();
  }, [arrPosts]);

  UseProtectedPage();

  const getPosts = () => {
    const token = localStorage.getItem("token");

    axios
      .get(`${BASE_URL}/posts`, { headers: { Authorization: token } })
      .then((res) => {
        setArrPosts(res.data);
      })
      .catch((err) => {
        if (
          err.response.data ===
          "Falha na autenticação. Token expirado ou não inserido no campo 'Authorization' dos headers "
        ) {
          goToLogin(navigate);
          alert("Login expirado");
        }
      });
  };

  const click = () => {
    setIsClicked(!isClicked);
  };

  const listPost = arrPosts.map((post) => {
    return (
      <ListPostContainer key={post.id} onClick={() => goToPostPage(navigate, post.id)}>
        <Post post={post} click={click}/>
        <hr />
      </ListPostContainer>
    );
  });

  return (
    <ScreenContainer>
      <FeedForm />
      {listPost}
    </ScreenContainer>
  );
};

export default FeedPage;
