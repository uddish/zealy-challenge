import React, { memo } from "react";
import { Container, Comment } from "./styles";

function Reaction({ emoji, comment, x, y }) {
  const style = {
    position: "absolute",
    left: x,
    top: y,
  };

  return (
    <Container style={style}>
      <span>{emoji}</span>
      {comment && <Comment>{comment}</Comment>}
    </Container>
  );
}

export default memo(Reaction);
