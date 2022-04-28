import React, { useEffect, useState, useCallback } from "react";
import useFetch from "../../../../../custom-hooks/useFetch";

const PrimaryHeading = (props) => {
  const { url } = props;
  const [pageText, setPageText] = useState({});

  const updatePageText = useCallback(
    (textObj) => {
      console.log(textObj);
      setPageText(textObj);
    },
    [setPageText]
  );

  const { isLoading, error, sendRequest: fetchData } = useFetch(updatePageText);

  useEffect(() => {
    fetchData({ url, method: "GET" });
  }, [url, fetchData]);

  // const { response, isLoading, func } = useFetch({
  //   method: "GET",
  //   url: props.url,
  // });

  // useEffect(() => {
  //   if (isLoading) {
  //     func();
  //   }
  // }, [func, isLoading]);

  return (
    <div className="PrimaryHeading headings">
      {error ? (
        <div>There was an error</div>
      ) : pageText.data ? (
        <>
          <h1>{pageText.data.pageTitle}</h1>
          <p>{pageText.data.pageText}</p>
        </>
      ) : null}
    </div>
  );
};

export default PrimaryHeading;
