import axios from "axios";
import { useEffect, useState } from "react";
import { useCallback } from "react/cjs/react.production.min";

const useFetch = (updateFunction) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const sendRequest = useCallback(
    async (fetchObj) => {
      try {
        const fetchedData = await axios({
          url: fetchObj.url,
          method: fetchObj.method,
          data: fetchObj.data ? fetchObj.data : null,
          headers: {
            "Content-Type": "application/json",
          },
        });

        setIsLoading(false);
        console.log(fetchedData);
        updateFunction(...fetchedData.data);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    },
    [updateFunction]
  );

  return { isLoading, error, sendRequest };
};

export default useFetch;
