import react from "react";
import { Grid, GridItem, IconButton, Stack } from "@chakra-ui/react";
import { TiArrowDownOutline, TiArrowUpOutline } from "react-icons/ti";

export const CommentList = (props) => {
  return (
    <Grid h="226px" templateRows="1fr 2fr 1fr" border="1px" borderColor="black">
      <GridItem rowSpan={1} bg="lightgrey">
        Comentado por: {props.comment.userId}
      </GridItem>
      <GridItem rowSpan={2} bg="lightgrey">
        <p>{props.comment.body}</p>
      </GridItem>
      <GridItem rowSpan={3} rowStart={4} bg="lightgrey" pl={2} pt={2} pb={2}>
        <p>
          {
            <IconButton
              variant="ghost"
              icon={<TiArrowUpOutline />}
              boxSize="1.2em"
            />
          }
          {props.comment.voteSum ? props.comment.voteSum : 0}
          {
            <IconButton
              variant="ghost"
              icon={<TiArrowDownOutline />}
              boxSize="1.2em"
            />
          }
        </p>
      </GridItem>
    </Grid>
  );
};
