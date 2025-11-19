import styled from "@emotion/styled";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const FloatingWrapper = styled(Box)({
  position: "fixed",
  bottom: 30,
  right: 30,
});

const FloatingButton = styled(Button)({
  border: "1px solid gray",
  padding: "1em",
  borderRadius: 50,

  color: "black",
  width: 50,
  height: 50,
  minWidth: 0,

  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
});

const AiChatBox = styled(Box)({
  border: "1px solid red",
  borderRadius: 30,
  overflow: "visible",
  position: "absolute",
  top: -340,
  width: 200,
  height: 300,
  right: 10,
  backgroundColor: "beige",
  display: "flex",
  flexDirection: "column",
  padding: 10,
});

const AiChatInner = styled(Box)({
  flex: 1,
  borderRadius: 30,
  padding: "1em",
});

const AiChatInputBox = styled(Box)({
  position: "relative",
});

const AiChatInput = styled(TextField)({
  borderRadius: 30,
  padding: 0,
  border: "1px solid gray",

  backgroundColor: "white",
  width: "100%",

  "& .MuiInputBase-root": {
    lineHeight: 1.2,
    fontSize: 12,
    paddingRight: 30,
  },

  "&.MuiOutlinedInput-input": {
    padding: 0,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },

    "&.Mui-focused fieldset": {
      border: "none",
    },

    "&:hover fieldset": {
      border: "none",
    },
  },
});

const AiChatButton = styled(Button)({
  position: "absolute",
  right: 5,
  top: 5,
  backgroundColor: "unset",
  color: "unset",
  border: "none",
  boxShadow: "none",

  padding: 0,
  margin: 0,
  minWidth: "unset",

  "&:hover": {
    backgroundColor: "unset",
    boxShadow: "none",
  },
  "&.Mui-focusVisible": {
    outline: "none",
  },

  "& .MuiButton-label": {
    fontSize: "unset",
    fontWeight: "unset",
    textTransform: "unset",
  },
});

const FloatingAiButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  const handleMessage = (message) => {
    console.log(message);
  };
  return (
    <FloatingWrapper>
      {isOpen && (
        <AiChatBox>
          <AiChatInner>dd</AiChatInner>
          <AiChatInputBox>
            <AiChatInput
              size="small"
              onChange={(e) => setMessage(e.target.value)}
            />
            <AiChatButton onClick={() => handleMessage(message)}>
              <ArrowCircleUpIcon />
            </AiChatButton>
          </AiChatInputBox>
        </AiChatBox>
      )}
      <FloatingButton onClick={handleToggle}>AI</FloatingButton>
    </FloatingWrapper>
  );
};

export default FloatingAiButton;
