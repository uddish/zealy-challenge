import React, { memo, useCallback, useState } from "react";
import {
  ReactionPopOver,
  EmojiButton,
  StyledInput,
  EmojiContainer,
  StyledButton,
  FormContainer,
} from "./styles";
import arrow from "../../../assets/arrow.png";

function ReactionPopover(props) {
  const { inputVisible, handleAddReaction, xPosition, yPosition } = props;
  const [emoji, setEmoji] = useState("");
  const [comment, setComment] = useState("");

  const selectEmoji = useCallback((emoji) => {
    setEmoji(emoji);
  }, []);

  const onCommentChange = useCallback((e) => {
    setComment(e.target.value);
  }, []);

  const setReaction = useCallback(() => {
    setEmoji("");
    setComment("");
    handleAddReaction(emoji, comment);
  }, [comment, emoji, handleAddReaction]);

  return (
    <ReactionPopOver
      inputVisible={inputVisible}
      xPosition={xPosition}
      yPosition={yPosition}
      onClick={(e) => e.stopPropagation()}
    >
      <EmojiContainer>
        <EmojiButton
          onClick={() => selectEmoji("👍")}
          isSelected={emoji === "👍"}
        >
          👍
        </EmojiButton>
        <EmojiButton
          onClick={() => selectEmoji("👎")}
          isSelected={emoji === "👎"}
        >
          👎
        </EmojiButton>
        <EmojiButton
          onClick={() => selectEmoji("🙂")}
          isSelected={emoji === "🙂"}
        >
          🙂
        </EmojiButton>
        <EmojiButton
          onClick={() => selectEmoji("🙏")}
          isSelected={emoji === "🙏"}
        >
          🙏
        </EmojiButton>
        <EmojiButton
          onClick={() => selectEmoji("❤️")}
          isSelected={emoji === "❤️"}
        >
          ❤️
        </EmojiButton>
      </EmojiContainer>
      <FormContainer>
        <StyledInput
          onChange={onCommentChange}
          placeholder="Add a comment..."
        />
        <StyledButton src={arrow} onClick={setReaction}></StyledButton>
      </FormContainer>
    </ReactionPopOver>
  );
}

export default memo(ReactionPopover);
