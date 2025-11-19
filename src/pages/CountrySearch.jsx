import { useEffect, useState } from "react";
import { getCountryInfo } from "../utils/apis/countries";
import { useLocation } from "react-router-dom";

export default function CountrySearch() {
  // const [keyword, setKeyword] = useState("");
  const [country, setCountry] = useState(null);
  const location = useLocation();

  const query = new URLSearchParams(location.search)
  const keyword = query.get("name");

  useEffect(()=>{
    if (!keyword) return;

    const fetchCountry = async()=>{
      const data = await getCountryInfo(keyword);
      setCountry(data);
    }
    fetchCountry();
  }, [keyword]);

  if (!keyword) return <p>검색어를 입력하세요</p>
  if (!country) return <p>검색결과가 없습니다</p>
  // const handleSearch = async () => {
  //   if (!keyword.trim()) return;
  //   const data = await getCountryInfo(keyword);
  //   setCountry(data);
  //   console.log("검색결과", data);
  // };

  return (
    <div>
      {/* <input
        placeholder="나라 이름 검색"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
      {country && ( */}
        <div>
          <h2>나라: {country.name.common}</h2>
          <p>수도: {country.capital}</p>
          <p>인구: {country.population}</p>

          <h3>통화:</h3>
          <div>
            {Object.values(country.currencies).map((currency) => (
              <p key={currency.name}>
                {currency.name} : ({currency.symbol})
              </p>
            ))}
          </div>
        </div>
      {/* )} */}
    </div>
  );
}
