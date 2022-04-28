import axios from "axios";
import {useCallback, useEffect, useState} from "react";

const useFetch = (updateFunction) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

    const sendRequest = useCallback(async (fetchObj) => {
      try {
        const fetchedData = await axios({
          url: fetchObj.url,
          method: fetchObj.method,
          data: fetchObj.data ? fetchObj.data : null,
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log(fetchedData.data.data)
        updateFunction(fetchedData.data.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }, [updateFunction]);


  return { isLoading, error, sendRequest};
};

export default useFetch;
