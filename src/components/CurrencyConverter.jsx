import { Box, MenuItem, Select, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import { useGetExchangeRateQuery } from "../hooks/useGetExchangeRate";
import { today } from "../constants/todayDate";
import { styled } from "@mui/material/styles";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const ConverterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  marginBlock: "1rem",
  padding: 24,
  borderRadius: "30px",
  boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
  [theme.breakpoints.up("xs")]: {
    marginInline: "2rem",
  },
  [theme.breakpoints.up("sm")]: {
    marginInline: "3rem",
  },
  [theme.breakpoints.up("md")]: {
    marginInline: "6rem",
  },
  [theme.breakpoints.up("lg")]: {
    marginInline: "12rem",
  },
  [theme.breakpoints.up("xl")]: {
    marginInline: "15rem",
  },
}));

const CurrencyBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 40,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const ForeignBox = styled(Box)({ display: "flex", flexDirection: "column" });

const CurrencyConverter = () => {
  const [selectedCountry, setSelectedCountry] = useState("유로");
  const [foreignAmount, setForeignAmount] = useState("");
  const [krwAmount, setKrwAmount] = useState("");

  const { data } = useGetExchangeRateQuery(today);

  console.log(data);

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

  return (
    <ConverterContainer>
      <Typography>환율 계산기</Typography>
      <CurrencyBox>
        <ForeignBox>
          <Select
            value={selectedCountry}
            onChange={handleCountryChange}
            displayEmpty
          >
            <MenuItem value="" disabled>
              통화 선택
            </MenuItem>
            {data?.data.map((country) => (
              <MenuItem key={country.cur_unit} value={country.cur_nm}>
                {country.cur_nm} ({country.cur_unit})
              </MenuItem>
            ))}
          </Select>
          <TextField
            type="number"
            value={foreignAmount}
            onChange={handleForeignAmountChange}
            placeholder="외화 금액 입력"
          />
        </ForeignBox>

        <DoubleArrowIcon />

        <Box>
          <Box>대한민국 원 (KRW)</Box>
          <TextField
            type="number"
            value={krwAmount}
            onChange={handleKrwAmountChange}
            placeholder="원화 금액 입력"
          />
        </Box>
      </CurrencyBox>

      {selectedCountry && (
        <Box>
          환율: 1 {selectedCountry} ={" "}
          {data?.data
            .find((c) => c.cur_nm === selectedCountry)
            ?.bkpr.replace(/,/g, "")}{" "}
          KRW
        </Box>
      )}
    </ConverterContainer>
  );
};

export default CurrencyConverter;
