import React from "react";
import useFetch from "../../../../../custom-hooks/useFetch";

const PrimaryHeading = (props) => {
  const { response, isLoading } = useFetch({
    method: "GET",
    url: props.url,
  });

  return (
    <div className="PrimaryHeading headings">
      {response.data ? (
        <>
          <h1>{response.data.pageTitle}</h1>
          <p>{response.data.pageText}</p>
        </>
      ) : null}
    </div>
  );
};

export default PrimaryHeading;
