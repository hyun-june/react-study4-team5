import { styled } from "@mui/material/styles";
import { getWeatherByCity } from "../utils/apis/weatherAPI";
import { Box, Button, FormGroup, TextField } from "@mui/material";
import { useLoginStore } from "../store/useLoginStore";
import { useEffect, useState } from "react";
import { getAi } from "../utils/apis/geminiAPI";
import HttpsIcon from "@mui/icons-material/Https";
import PersonIcon from "@mui/icons-material/Person";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from "react-router";

import { useToastStore } from "../store/useToastStore";
// import { getWeatherApi } from "../utils/apis/weatherAPI";

const LoginInputGroup = styled(FormGroup)(({ theme }) => ({
  gap: 30,
  position: "relative",
  justifyContent: "center",
  width: "50%",
  zIndex: 10,
}));

const LoginInputWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "blue",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40%",
  backGroundColor: "rgba(0,0,0,0.6)",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const LoginInputIcon = styled(Box)({
  display: "flex",
  alignItems: "center",
  position: "relative",
});

const LoginInput = styled(TextField)({
  width: "100%",
  color: "white",

  "& .MuiInputBase-input": {
    fontSize: 16,
    color: "white",
    paddingInline: 30,
    borderBottom: "1px solid white",
    "&:focus": {
      borderBottom: "none",
      outline: "none",
    },
  },
  "& .MuiInput-root": {
    "&:hover:not(.Mui-disabled):before": {
      borderBottom: "1px solid var(--main-point-green)",
    },

    "&:after": {
      borderBottom: "1px solid var(--main-point-green)",
    },
  },

  "& .MuiInputLabel-root": {
    fontSize: 14,
  },

  "& .MuiInputAdornment-root": {
    margin: 0,
  },
});

const LoginButton = styled(Button)({
  borderRadius: 20,
  color: "white",
  backgroundColor: "var(--main-point-green)",
});

const Login = () => {
  const navigate = useNavigate();
  const { login } = useLoginStore();
  const { setToast } = useToastStore();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // const getWeather = async () => {
  //   const data = await getWeatherApi();
  // };

  // getWeather();
  const getWeatherCity = async () => {
    const data = await getWeatherByCity();
    // console.log(data);
  };
  getWeatherCity();

  const handleLogin = () => {
    if (!id.trim())
      return setToast({ type: "warn", msg: "아이디를 입력해주세요" });

    if (!password.trim())
      return setToast({ type: "warn", msg: "비밀번호를 입력해주세요" });

    setToast({ type: "success", msg: "로그인 성공" });
    login(id, password);
    navigate("/");
    // setTimeout(() => {}, 2000);
  };
  useEffect(() => {
    getAi();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        backgroundImage:
          "url(https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg)",
      }}
    >
      <LoginInputWrapper>
        <LoginInputGroup>
          <LoginInputIcon>
            <LoginInput
              onChange={(e) => setId(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon
                        sx={{ position: "absolute", left: 0, color: "white" }}
                      />
                    </InputAdornment>
                  ),
                },
              }}
              variant="standard"
            />
          </LoginInputIcon>

          <LoginInputIcon>
            <LoginInput
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <HttpsIcon
                        sx={{ position: "absolute", left: 0, color: "white" }}
                      />
                    </InputAdornment>
                  ),
                },
              }}
              variant="standard"
            />
          </LoginInputIcon>

          <LoginButton onClick={handleLogin}>Login</LoginButton>
        </LoginInputGroup>
      </LoginInputWrapper>
    </Box>
  );
};

export default Login;
