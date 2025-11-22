import {
  Box,
  CircularProgress,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { useGetExchangeRateQuery } from "../hooks/useGetExchangeRate";
import { today } from "../constants/todayDate";
import { styled } from "@mui/material/styles";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const ConverterContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#ffffff",
  paddingTop: "3rem",
});

const ConverterBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 16,
  marginBottom: "4rem",
  borderRadius: "30px",
  padding: "0.3rem",
  border: "1px solid #cfcfcfff",
  backgroundColor: "#efefefff",
  boxShadow: "0 0 3px rgba(0, 0, 0, 0.1)",
});

const ConverterTitle = styled(Typography)({
  fontFamily: "Pretendard",
  fontSize: "2rem",
  fontWeight: "800",
});

const InfoText = styled(Typography)({
  fontFamily: "Pretendard",
  fontWeight: "500",
  color: "rgba(141, 184, 89, 1)",
  marginTop: "0.625rem",
  marginBottom: "1.625rem",
});

const CurrencyBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.3rem",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const ForeignBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  padding: "2rem",
  borderRadius: "24px",
  gap: "0.5rem",
});

const CurrencySelect = styled(Select)({
  height: "3rem",
  width: "14rem",
  backgroundColor: "#ffffff",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  fontFamily: "Pretendard",

  "&:hover": {
    borderColor: "#90cb47ff",
  },
  "&.Mui-focused": {
    borderColor: "#90cb47ff",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiSelect-select": {
    padding: "16px",
    fontSize: "16px",
    fontWeight: "500",
    color: "#333333",
  },
  "& .MuiSelect-icon": {
    color: "#90cb47ff",
    fontSize: "28px",
  },
});

const KoreaBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  padding: "2rem",
  borderRadius: "24px",
});

const KoreaCurrencyBox = styled(Box)({
  disabled: "flex",
  gap: 8,
  alignItems: "center",
  width: "13rem",
  paddingTop: "0.6rem",
  paddingBottom: "1.4rem",
  paddingInline: "0.5rem",
  display: "flex",
  fontFamily: "Pretendard",
  fontWeight: "500",
});

const KoreaFlag = styled(Box)({
  height: "1.5rem",
});

const AmountInput = styled(TextField)({
  height: "3rem",
  width: "14rem",
  backgroundColor: "#ffffff",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  fontFamily: "Pretendard",

  "&:hover": {
    borderColor: "#90cb47ff",
  },
  "&.Mui-focused": {
    borderColor: "#90cb47ff",
  },
  "& .MuiOutlinedInput-root": {
    height: "100%",
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "16px",
    fontSize: "16px",
    fontWeight: "500",
    color: "#333333",
  },
});

const ArrowBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "white",
  padding: "0.625rem",
  borderRadius: "50px",
  border: "0.3rem solid #efefefff",
  color: "#90cb47ff",
  [theme.breakpoints.down("sm")]: {
    transform: "rotate(90deg)",
  },
}));

const CurrencyInfoBox = styled(Box)({
  display: "flex",
  fontFamily: "Pretendard",
  fontWeight: "500",
  paddingBottom: "0.875rem",
});

const NoDataText = styled(Typography)({
  fontFamily: "Pretendard",
  color: "#f04747ff",
  fontWeight: "700",
  textAlign: "center",
  marginBottom: "0.5rem",
});

const TimeInfo = styled(Typography)(({ theme }) => ({
  fontFamily: "Pretendard",
  color: "#595959ff",
  fontSize: "0.875rem",
  fontWeight: "400",
  textAlign: "center",
  marginBottom: "0.5rem",
  whiteSpace: "normal",
  wordBreak: "keep-all",
  [theme.breakpoints.down("sm")]: {
    width: "200px",
  },
}));

const CurrencyConverter = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [foreignAmount, setForeignAmount] = useState("");
  const [krwAmount, setKrwAmount] = useState("");

  const { data, isLoading, isError, error } = useGetExchangeRateQuery(today);

  const exchangeList = Array.isArray(data?.data) ? data.data : [];

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    calculateToKrw(foreignAmount, e.target.value);
  };

  const handleForeignAmountChange = (e) => {
    const value = e.target.value;
    setForeignAmount(value);
    calculateToKrw(value, selectedCountry);
  };

  const handleKrwAmountChange = (e) => {
    const value = e.target.value;
    setKrwAmount(value);
    calculateToForeign(value, selectedCountry);
  };

  const calculateToKrw = (amount, country) => {
    if (!amount || !country || !data?.data) {
      setKrwAmount("");
      return;
    }

    const currency = data.data.find((item) => item.cur_nm === country);
    if (!currency) return;

    const rate = parseFloat(currency.bkpr.replace(/,/g, ""));
    const result = amount * rate;
    setKrwAmount(result.toFixed(2));
  };

  const calculateToForeign = (amount, country) => {
    if (!amount || !country || !data?.data) {
      setForeignAmount("");
      return;
    }

    const currency = data.data.find((item) => item.cur_nm === country);
    if (!currency) return;

    const rate = parseFloat(currency.bkpr.replace(/,/g, ""));
    const result = amount / rate;
    setForeignAmount(result.toFixed(2));
  };

  if (isLoading) {
    return (
      <ConverterContainer>
        <ConverterTitle>환율 계산기</ConverterTitle>
        <InfoText>환율 정보를 불러오는 중입니다...</InfoText>

        <Box sx={{ padding: "8rem" }}>
          <CircularProgress sx={{ color: "#90cb47ff" }} />
        </Box>
      </ConverterContainer>
    );
  }

  if (isError) {
    return (
      <ConverterContainer>
        <ConverterTitle>환율 계산기</ConverterTitle>
        <InfoText>{error}</InfoText>
      </ConverterContainer>
    );
  }

  return (
    <ConverterContainer>
      <ConverterTitle>환율 계산기</ConverterTitle>
      <InfoText>여행 준비 중이신가요? 환율 먼저 확인해보세요!</InfoText>
      <ConverterBox>
        <CurrencyBox>
          <ForeignBox>
            <CurrencySelect
              value={selectedCountry}
              onChange={handleCountryChange}
              displayEmpty
              MenuProps={{
                PaperProps: {
                  sx: {
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    marginTop: "8px",
                    "& .MuiMenuItem-root": {
                      padding: "12px 16px",
                      fontSize: "14px",
                      "&:hover": {
                        backgroundColor: "#f0f4ff",
                      },
                      "&.Mui-selected": {
                        backgroundColor: "#e3ebff",
                        "&:hover": {
                          backgroundColor: "#d4e2ff",
                        },
                      },
                    },
                  },
                },
              }}
            >
              <MenuItem value="" disabled>
                통화 선택
              </MenuItem>
              {Array.isArray(data?.data) && data.data.length > 0 ? (
                data.data.map((country) => (
                  <MenuItem key={country.cur_unit} value={country.cur_nm}>
                    {country.cur_nm} ({country.cur_unit})
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>환율 정보를 불러오지 못했습니다.</MenuItem>
              )}
            </CurrencySelect>
            <AmountInput
              type="number"
              value={foreignAmount}
              onChange={handleForeignAmountChange}
              placeholder="외화 금액 입력"
            />
          </ForeignBox>

          <ArrowBox>
            <DoubleArrowIcon />
          </ArrowBox>
          <KoreaBox>
            <KoreaCurrencyBox>
              <KoreaFlag
                component="img"
                src="https://em-content.zobj.net/source/toss-face/381/flag-south-korea_1f1f0-1f1f7.png"
              />
              대한민국 원 (KRW)
            </KoreaCurrencyBox>
            <AmountInput
              type="number"
              value={krwAmount}
              onChange={handleKrwAmountChange}
              placeholder="원화 금액 입력"
            />
          </KoreaBox>
        </CurrencyBox>

        {exchangeList.length > 0 ? (
          selectedCountry ? (
            <CurrencyInfoBox>
              1 {selectedCountry} ={" "}
              {exchangeList.find((c) => c.cur_nm === selectedCountry)?.bkpr} 원
            </CurrencyInfoBox>
          ) : (
            <TimeInfo>
              ※ 오전 11시 이전에는 당일이 아닌 전날 기준 데이터를 사용합니다.
            </TimeInfo>
          )
        ) : (
          <NoDataText>
            환율 정보를 불러오지 못했습니다 :(
            <br />
            다시 시도해주세요.
          </NoDataText>
        )}
      </ConverterBox>
    </ConverterContainer>
  );
};

export default CurrencyConverter;
