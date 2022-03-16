import react from "react";
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

const Post = (props) => {
  return (
    <div>
      <Grid
        h="226px"
        templateRows="1fr 2fr 1fr"
        templateColumns="repeat(2, 1fr)"
        border="1px"
        borderColor="black"
      >
        <GridItem rowSpan={1} colSpan={2} bg="lightgrey" pl={2} pt={2}>
          <p>Postado por {props.post.username}</p>
          <p>
            <strong>{props.post.title}</strong>
          </p>
        </GridItem>
        <GridItem rowSpan={2} colSpan={2} bg="lightgrey" pl={2} pt={2}>
          <p>{props.post.body}</p>
        </GridItem>
        <GridItem rowSpan={3} rowStart={4} bg="lightgrey" pl={2} pt={2} pb={2}>
          <p>
            {props.isClicked ? (
              <IconButton
                variant="ghost"
                icon={<TiArrowUpThick />}
                boxSize="1.2em"
                onClick={props.click}
              />
            ) : (
              <IconButton
                variant="ghost"
                icon={<TiArrowUpOutline />}
                boxSize="1.2em"
                onClick={props.click}
              />
            )}{" "}
            {props.post.voteSum ? props.post.voteSum : 0}{" "}
            {props.isClicked ? (
              <IconButton
                variant="ghost"
                icon={<TiArrowDownThick />}
                boxSize="1.2em"
                onClick={props.click}
              />
            ) : (
              <IconButton
                variant="ghost"
                icon={<TiArrowDownOutline />}
                boxSize="1.2em"
                onClick={props.click}
              />
            )}
          </p>
        </GridItem>
        <GridItem rowSpan={3} rowStart={4} bg="lightgrey" pl={2} pt={2} pb={2}>
          <p>
            <Icon as={VscComment} boxSize="1.2em" />{" "}
            {props.post.commentCount ? props.post.commentCount : 0} comentários
          </p>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Post;
