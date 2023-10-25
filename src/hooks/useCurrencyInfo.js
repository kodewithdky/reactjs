import { useState, useEffect } from "react";

 async function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/a47e38acc63bc65592ca48f6/latest/${currency}`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
