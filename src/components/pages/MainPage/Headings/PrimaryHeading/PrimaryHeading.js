import React, {useCallback, useEffect, useState} from "react";
import useFetch from "../../../../../custom-hooks/useFetch";

const PrimaryHeading = (props) => {
  const [pageData, setPageData] = useState({});
  
  const updatePageData = useCallback((responseData) => {
    setPageData(responseData);
  }, [setPageData])
  
  const {isLoading, error, sendRequest} = useFetch(updatePageData);
  
  useEffect( () => {
      sendRequest({
        url: props.url,
        method: "GET"
      })
  }, [sendRequest]);
  
  // const { response, isLoading } = useFetch({
  //   method: "GET",
  //   url: props.url,
  // });

  return (
    <div className="PrimaryHeading headings">
      {pageData ? (
        <>
          <h1>{pageData.pageTitle}</h1>
          <p>{pageData.pageText}</p>
        </>
      ) : null}
    </div>
  );
};

export default PrimaryHeading;
