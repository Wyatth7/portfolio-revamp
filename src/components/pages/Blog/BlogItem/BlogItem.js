import React from "react";
import { NavLink } from "react-router-dom";

const BlogItem = (props) => {
  return (
    <NavLink to={`/blog/${props.postId}`} className="BlogItem">
      <div className="title-views">
        <h3>{props.title}</h3>
        <p>{props.views} views</p>
      </div>
      <div className="post-desc">
        <p>{props.desc}</p>
      </div>
    </NavLink>
  );
};

export default BlogItem;
