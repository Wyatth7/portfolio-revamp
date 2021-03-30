import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useParams } from "react-router";
import Ajax from "../../../../utils/ajax";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";

// IMAGES
import blogImg from "./../../../../assets/images/test-blog-img.jpg";
import BodyText from "./BodyText/BodyText";

const BlogPost = (props) => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [postText, setPostText] = useState([]);

  // Send req to server for page data

  useEffect(() => {
    let isCancelled = false;
    const data = async () => {
      const post = await Ajax.getPost(id);
      console.log(post);

      setPostText(post.data.post.textBody.split("  "));

      if (!isCancelled) {
        setPost(post.data.post);
      }
    };
    data();

    return () => {
      isCancelled = true;
    };
  }, [setPost, setPostText, id]);

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
          <div className="post-content">
            {postText.length > 0
              ? postText.map((el) => <BodyText text={el} />)
              : null}
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default withRouter(BlogPost);

const re =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu lobortis elementum nibh tellus molestie. Dolor sed viverra ipsum nunc. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Sem viverra aliquet eget sit amet tellus cras. Sed libero enim sed faucibus turpis in eu. Massa sed elementum tempus egestas sed. Eu turpis egestas pretium aenean. Lacus vestibulum sed arcu non odio euismod lacinia at. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Consequat id porta nibh venenatis cras sed. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Iaculis nunc sed augue lacus viverra. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Mauris nunc congue nisi vitae suscipit tellus. Eu sem integer vitae justo eget magna fermentum. Aliquet bibendum enim facilisis gravida neque convallis a cras. Gravida in fermentum et sollicitudin ac orci phasellus. Sed egestas egestas fringilla phasellus faucibus scelerisque. Tempus iaculis urna id volutpat lacus laoreet non.  Dui vivamus arcu felis bibendum ut tristique et egestas quis. At quis risus sed vulputate. Augue neque gravida in fermentum et sollicitudin ac orci. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Volutpat maecenas volutpat blandit aliquam etiam erat velit. A erat nam at lectus urna duis convallis convallis. Tincidunt dui ut ornare lectus. Velit euismod in pellentesque massa placerat duis ultricies lacus. Odio facilisis mauris sit amet massa. Nec ullamcorper sit amet risus.  Sem viverra aliquet eget sit amet. Aliquam ultrices sagittis orci a scelerisque purus. Duis convallis convallis tellus id interdum velit laoreet. Dignissim sodales ut eu sem integer vitae justo eget magna. Fringilla est ullamcorper eget nulla. In hendrerit gravida rutrum quisque non tellus orci ac. Consectetur libero id faucibus nisl tincidunt eget nullam non. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Volutpat consequat mauris nunc congue nisi. Ut tellus elementum sagittis vitae et leo. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Ut sem nulla pharetra diam. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Faucibus in ornare quam viverra orci. Convallis a cras semper auctor neque. Tellus orci ac auctor augue mauris augue. Lorem sed risus ultricies tristique nulla aliquet enim. Condimentum id venenatis a condimentum vitae. Maecenas sed enim ut sem.";
