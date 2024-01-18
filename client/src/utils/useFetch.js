import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [pending, setPending] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      let jsonResponse = await response.json();
      if (jsonResponse.length > 0 && data.length <= 0) setData(jsonResponse);
    };
    fetchData();

    //   return () => {};
  }, [data, url]);
  return { data };
}

export default useFetch;
