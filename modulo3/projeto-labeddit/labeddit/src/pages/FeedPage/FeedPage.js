import react, { useEffect, useState } from "react";
import { UseProtectedPage } from "../../hook/useProtectedPage";
import {
  ListPostContainer,
  ScreenContainer,
} from "./styled";
import { FeedForm } from "./FeedForm";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { goToLogin, goToPostPage } from "../../routes/cordinator";
import { useNavigate } from "react-router-dom";
import Post from "../../components/Post/Post";
import { getPosts } from "../../services/post";

const FeedPage = () => {
  const [arrPosts, setArrPosts] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getPosts(setArrPosts, navigate);
  }, [arrPosts]);

  UseProtectedPage();

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
