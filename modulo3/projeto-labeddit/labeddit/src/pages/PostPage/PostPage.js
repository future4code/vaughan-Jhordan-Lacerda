import { Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../../components/Post/Post";
import { UseProtectedPage } from "../../hook/useProtectedPage";
import { getPostComments } from "../../services/comment";
import { getPosts } from "../../services/post";
import CommentForm from "./CommentForm";
import { CommentList } from "./CommentList";
import { PostContainer, ScreenContainer } from "./styled";

const PostPage = () => {
  const [comments, setComments] = useState([]);
  const [arrPosts, setArrPosts] = useState([]);
  const params = useParams();

  UseProtectedPage()

  useEffect(() => {
    getPostComments(params, setComments);
    getPosts(setArrPosts);
  }, [comments]);

  const commentList = comments.map((comment) => {
    return (
      <CommentList comment={comment} key={comment.id}/>
    );
  });

  return (
    <ScreenContainer>
      <PostContainer>
        <Stack spacing={5}>
          <Post post={comments} />
          <CommentForm />
          {commentList}
        </Stack>
      </PostContainer>
    </ScreenContainer>
  );
};

export default PostPage;
