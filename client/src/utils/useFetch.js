import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [pending, setPending] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      let jsonResponse = await response.json();

      if (!jsonResponse.ok) {
        setPending(false);
        setError(`Got in error when fetching ${jsonResponse.error}`);
      }

      if (jsonResponse.length > 0 && data.length <= 0) {
        setPending(true);
        setData(jsonResponse);
      }
    };
    fetchData();

    //   return () => {};
  }, [data, url]);
  return { data, error, pending };
}

export default useFetch;
