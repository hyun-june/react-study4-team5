import styled from "@emotion/styled";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { useChatStore } from "../store/useChatStore";
import { getAi } from "../utils/apis/geminiAPI";

const FloatingWrapper = styled(Box)({
  position: "fixed",
  bottom: 30,
  right: 30,
});

const FloatingButton = styled(Button)({
  border: "1px solid gray",
  padding: "1em",
  borderRadius: 50,
  backgroundColor: "white",
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
  boxShadow:
    "-4px -4px 8px rgba(100, 100, 100, 0.1), 4px 4px 10px rgba(100, 100, 100, 0.1)",
  borderRadius: 30,
  overflow: "visible",
  position: "absolute",
  top: -400,
  width: 300,
  maxWidth: 300,
  height: 400,
  right: 10,
  display: "flex",
  flexDirection: "column",
  // padding: 10,
  zIndex: 999,
  backgroundColor: "white",
});

const AiChatInner = styled(Box)({
  flex: 1,
  margin: "1em",
  padding: "0.5em",
  display: "flex",
  flexDirection: "column",
  gap: 5,
  overflowY: "auto",
  overflowX: "hidden",
});

const AiChatInputBox = styled(Box)({
  position: "relative",
  margin: "0.5em",
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

const AiChatMessage = styled(Typography)({
  backgroundColor: "blue",
  color: "white",
  borderRadius: 10,
  padding: "5px 15px",
  maxWidth: "90%",
  textWrap: "wrap",
  display: "flex",
  width: "max-content",
});

const UserChatMessage = styled(Typography)({
  backgroundColor: "gray",
  color: "white",
  borderRadius: 10,
  padding: "0 10px",
  alignSelf: "flex-end",
  padding: "5px 15px",
  maxWidth: "90%",
  width: "max-content",
});

const FloatingAiButton = () => {
  const { messages, addMessage } = useChatStore();
  const [isOpen, setIsOpen] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const chatRef = useRef(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMessage = async (newMessage) => {
    if (!newMessage.trim()) return;

    addMessage("user", newMessage);

    setNewMessage("");
    try {
      const aiData = await getAi(newMessage);
      addMessage("ai", aiData);
    } catch (error) {
      addMessage("ai", "잠시 후 다시 시도해주세요.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      handleMessage(newMessage);
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <FloatingWrapper>
      {isOpen && (
        <AiChatBox>
          <AiChatInner ref={chatRef}>
            {messages.map(({ type, text }, index) =>
              type === "user" ? (
                <UserChatMessage key={index}>{text}</UserChatMessage>
              ) : (
                <AiChatMessage key={index}>{text}</AiChatMessage>
              )
            )}
          </AiChatInner>
          <AiChatInputBox>
            <AiChatInput
              size="small"
              onChange={(e) => setNewMessage(e.target.value)}
              value={newMessage}
              onKeyDown={handleKeyDown}
            />
            <AiChatButton onClick={() => handleMessage(newMessage)}>
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
