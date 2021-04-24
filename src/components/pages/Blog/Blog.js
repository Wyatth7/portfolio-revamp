import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

// COMPONENTS
import PrimaryHeading from "./../MainPage/Headings/PrimaryHeading/PrimaryHeading";
import SubHeading from "./../MainPage/Headings/SubHeading/SubHeading";

// ICONS
import * as solid from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlogItem from "./BlogItem/BlogItem";
import Ajax from "../../../utils/ajax";

const text =
  "Get my takes, tips, and tricks in software development by reading the articles below.";

const Blog = (props) => {
  const [postData, setPostData] = useState([]);
  const [searchStr, setSearchStr] = useState("");
  const [queryData, setQueryData] = useState([]);
  const [queryErr, setQueryErr] = useState(false);

  const focusSearch = () => {
    document.getElementById("search").focus();
  };

  useEffect(() => {
    let isCancelled = false;
    const data = async () => {
      const posts = await Ajax.getBlogPostList();

      if (!isCancelled) {
        setPostData(posts.data.posts);
      }
    };
    data();

    return () => {
      isCancelled = true;
    };
  }, [setPostData, postData]);

  useEffect(
    (e) => {
      const timeout = setTimeout(async () => {
        try {
          if (searchStr.length === 0) {
            return;
          }

          const posts = await Ajax.queryWithString(searchStr);
          console.log(posts);
          setQueryData(posts.data.posts);
        } catch (err) {
          console.log(err);
          setQueryErr(!queryErr);
        }
      }, 500);

      return () => clearTimeout(timeout);
    },
    [searchStr, setQueryData, setQueryErr, queryErr]
  );

  let queriedPosts;

  if (!queryErr) {
    queriedPosts = (
      <div className="queried-posts">
        {queryData.length > 0
          ? queryData.map((el) => (
              <BlogItem
                key={el._id}
                postId={el._id}
                title={el.blogTitle}
                views={el.views}
                desc={el.description}
              />
            ))
          : null}
      </div>
    );
  } else {
    queriedPosts = (
      <div className="query-err">
        <h1>Could not find any posts with that title.</h1>
      </div>
    );
  }

  return (
    <div className="Blog">
      <Helmet>
        <title>Blog | Wyatt Hardin</title>
      </Helmet>
      <PrimaryHeading heading="Blog" introText={text} />
      <div onClick={focusSearch} className="search-posts">
        <input
          onChange={(e) => setSearchStr(e.target.value)}
          id="search"
          type="text"
          placeholder="Search"
        />
        <FontAwesomeIcon className="search-icon" icon={solid.faSearch} />
      </div>
      <div className="queried-items">{queriedPosts}</div>
      <SubHeading className="subhead-margin" heading="All Posts">
        {postData.length >= 1 ? (
          postData.map((el) => (
            <BlogItem
              key={el._id}
              postId={el._id}
              title={el.blogTitle}
              views={el.views}
              desc={el.description}
            />
          ))
        ) : (
          <p className="no-posts">
            No posts yet, be sure to check back later to read my writings.
          </p>
        )}
      </SubHeading>
    </div>
  );
};

export default Blog;
