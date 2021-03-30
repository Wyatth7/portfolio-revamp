import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

// COMPONENTS
import PrimaryHeading from "./../MainPage/Headings/PrimaryHeading/PrimaryHeading";
import SubHeading from "./../MainPage/Headings/SubHeading/SubHeading";

// ICONS
import * as solid from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlogItem from "./BlogItem/BlogItem";
import Ajax from "../../../assets/ajax";

const text = "Follow along with my development journey by reading my posts. ";

const Blog = (props) => {
  const [postData, setPostData] = useState([]);

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

  return (
    <div className="Blog">
      <Helmet>
        <title>Blog | Wyatt Hardin</title>
      </Helmet>
      <PrimaryHeading heading="Blog" introText={text} />
      <div onClick={focusSearch} className="search-posts">
        <input id="search" type="text" placeholder="Search" />
        <FontAwesomeIcon className="search-icon" icon={solid.faSearch} />
      </div>
      <SubHeading className="subhead-margin" heading="All Posts">
        {postData.length >= 1
          ? postData.map((el) => (
              <BlogItem
                key={el._id}
                postId={el._id}
                title={el.blogTitle}
                views={el.views}
                desc={el.description}
              />
            ))
          : null}
        {/* <BlogItem
          postId="1"
          title="University and modern day programming"
          views="30"
          desc="A students input on the current state of programming taught in college."
        /> */}
      </SubHeading>
    </div>
  );
};

export default Blog;
