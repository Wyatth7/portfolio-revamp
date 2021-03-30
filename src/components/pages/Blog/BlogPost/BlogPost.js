import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useParams } from "react-router";
import Ajax from "../../../../assets/ajax";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";

// IMAGES
import blogImg from "./../../../../assets/images/test-blog-img.jpg";

const BlogPost = (props) => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  // Send req to server for page data

  useEffect(() => {
    let isCancelled = false;
    const data = async () => {
      const post = await Ajax.getPost(id);
      console.log(post);

      if (!isCancelled) {
        setPost(post.data.post);
      }
    };
    data();

    return () => {
      isCancelled = true;
    };
  }, [setPost, id]);

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <div className="BlogPost">
      <FontAwesomeIcon
        onClick={goBack}
        className="back-icon"
        icon={solid.faArrowLeft}
      />
      {post ? (
        <React.Fragment>
          <div className="post-title">
            <h1>{post.blogTitle}</h1>
          </div>
          <div className="author">
            <p className="auth-name">
              <span>{post.author}</span> / <span>{post.dateAdded}</span>
            </p>
            <p className="art-views">
              <span>{post.views}</span> views
            </p>
          </div>
          <div className="img">
            <img src={blogImg} alt="Class Room" />
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default withRouter(BlogPost);
