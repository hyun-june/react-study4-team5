import { styled } from "@mui/material/styles";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { useChatStore } from "../store/useChatStore";
import { getAi } from "../utils/apis/geminiAPI";
import TryIcon from "@mui/icons-material/Try";

const FloatingWrapper = styled(Box)({
  position: "fixed",
  bottom: 30,
  right: 30,
});

const FloatingButton = styled(Button)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1em",
  borderRadius: 30,
  background: `
      radial-gradient(circle at top left, #5befaaff, transparent 70%),
      radial-gradient(circle at top right, #eb66ffff, transparent 70%),
      radial-gradient(circle at bottom left, #a7eb32ff, transparent 70%),
      radial-gradient(circle at bottom right, #ffcc00, transparent 70%),
      #ffffff
    `,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  width: 70,
  height: 70,
  minWidth: 0,
  color: "#ffffffff",
  fontWeight: "bold",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",

  "&:hover": {
    transform: "scale(0.95)",
  },

  [theme.breakpoints.down("sm")]: {
    width: 60,
    height: 60,
    padding: "0.5em",
    bottom: 0,
    right: 0,
    borderRadius: 26,
  },
}));

const AiChatBox = styled(Box)(({ theme }) => ({
  boxShadow:
    "-4px -4px 8px rgba(100, 100, 100, 0.1), 4px 4px 10px rgba(100, 100, 100, 0.1)",
  borderRadius: 30,
  overflow: "visible",
  position: "absolute",
  maxWidth: 400,
  maxHeight: 400,
  height: 400,
  top: -420,
  right: 10,
  display: "flex",
  flexDirection: "column",
  zIndex: 9999999,
  backgroundColor: "white",

  [theme.breakpoints.down("sm")]: {
    maxWidth: 380,
    maxHeight: 400,
    top: -420,
    right: -5,
  },
}));

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
  margin: "1em",
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
  backgroundColor: "#f1f0f5",
  borderRadius: 10,
  padding: "5px 15px",
  maxWidth: "90%",
  textWrap: "wrap",
  display: "flex",
  width: "max-content",
});

const UserChatMessage = styled(Typography)({
  backgroundColor: "var(--main-point-green)",
  borderRadius: 10,
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
            <AiChatMessage>
              안녕하세요! 😊 <br />
              오늘의 여행, 어디로 떠나고 싶으신가요? <br />
              궁금한 점을 말씀해 주세요.
            </AiChatMessage>
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
      <FloatingButton onClick={handleToggle}>
        <TryIcon
          sx={{
            width: { xs: "32px", sm: "36px" },
            height: { xs: "32px", sm: "36px" },
            transform: "scaleX(-1)",
          }}
        />
      </FloatingButton>
    </FloatingWrapper>
  );
};

export default FloatingAiButton;
