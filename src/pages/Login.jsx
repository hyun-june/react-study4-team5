import styled from "@emotion/styled";
import { getWeatherByCity } from "../utils/apis/weatherAPI";
import { Box, Button, FormGroup, TextField } from "@mui/material";
import { useLoginStore } from "../store/useLoginStore";
import { useState } from "react";
// import { getWeatherApi } from "../utils/apis/weatherAPI";

const LoginInputGroup = styled(FormGroup)({
  gap: 15,
});

const LoginInput = styled(TextField)({
  "& .MuiInputBase-input": {
    fontSize: 16,
  },

  "& .MuiInputLabel-root": {
    fontSize: 14,
  },
});

const LoginButton = styled(Button)({
  border: "1px solid black",
});

const Login = () => {
  const { login } = useLoginStore();
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
    login(id, password);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <LoginInputGroup>
        <LoginInput
          label="ID"
          size="small"
          onChange={(e) => setId(e.target.value)}
        />
        <LoginInput
          label="PASSWORD"
          size="small"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton onClick={handleLogin}>Login</LoginButton>
      </LoginInputGroup>
    </Box>
  );
};

export default Login;
