import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (fetchObj) => {
  const [response, setResponse] = useState({ data: null, success: false });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const func = async () => {
      try {
        const fetchedData = await axios({
          url: fetchObj.url,
          method: fetchObj.method,
          data: fetchObj.data ? fetchObj.data : null,
          headers: {
            "Content-Type": "application/json",
          },
        });

        setResponse({ data: { ...fetchedData.data.data }, success: true });
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    func();
  }, [fetchObj]);

  return { response, isLoading };
};

export default useFetch;
