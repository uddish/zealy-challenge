import { memo, useState, useCallback } from "react";
import ReactionPopover from "../../components/ReactionPopover";
import Reaction from "../../components/Reaction";
import { App } from "./styles";
import cursorIcon from "../../../assets/comment-bubble.png";

function ReactionCanvas() {
  const [reactions, setReactions] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputPosition, setInputPosition] = useState({ x: 0, y: 0 });

  const handleClick = useCallback((e) => {
    setInputPosition({ x: e.clientX, y: e.clientY });
    setInputVisible(true);
  }, []);

  const handleAddReaction = useCallback(
    (emoji, comment) => {
      setReactions([
        ...reactions,
        { emoji, comment, x: inputPosition.x, y: inputPosition.y },
      ]);
      setInputVisible(false);
    },
    [inputPosition.x, inputPosition.y, reactions],
  );

  return (
    <App onClick={handleClick} customCursor={cursorIcon}>
      {reactions.map((reaction, index) => (
        <Reaction key={index} {...reaction} />
      ))}
      <ReactionPopover
        inputVisible={inputVisible}
        handleAddReaction={handleAddReaction}
        xPosition={inputPosition.x}
        yPosition={inputPosition.y}
      />
    </App>
  );
}

export default memo(ReactionCanvas);
