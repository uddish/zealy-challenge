import React, { memo } from "react";
import { Container, Comment, Emoji } from "./styles";

function Reaction({ emoji, comment, x, y }) {
  const style = {
    position: "absolute",
    left: x,
    top: y,
  };

  return (
    <Container style={style}>
      <Emoji>{emoji}</Emoji>
      {comment && <Comment>{comment}</Comment>}
    </Container>
  );
}

export default memo(Reaction);
