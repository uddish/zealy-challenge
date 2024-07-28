import styled, { css, keyframes } from "styled-components";

const popoverEnter = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const popoverExit = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.5);
  }
`;

export const ReactionPopOver = styled.div`
  z-index: 2;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 20px;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  ${({ xPosition, yPosition }) =>
    css`
      left: ${xPosition}px;
      top: ${yPosition}px;
    `};
  ${({ inputVisible }) =>
    inputVisible &&
    css`
      display: flex;
      animation: ${popoverEnter} 0.1s ease-in-out;
    `};
  ${({ inputVisible }) =>
    !inputVisible &&
    css`
      display: none;
      animation: ${popoverExit} 0.1s ease-in-out;
    `};
`;

export const EmojiButton = styled.button`
  padding: 5px;
  font-size: 20px;
  height: 36px;
  width: 36px;
  &:hover {
    background-color: #f0f0f0;
    border-radius: 50%;
  }
  border: none;
  background-color: transparent;
  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: #f0f0f0;
      border-radius: 50%;
    `};
`;

export const StyledInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5px;
`;

export const EmojiContainer = styled.div`
  display: flex;
  align-self: center;
`;

export const StyledButton = styled.img`
  height: 20px;
  width: 20px;
  margin-left: 5px;
  cursor: pointer;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
