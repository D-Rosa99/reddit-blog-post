import React from "react";

import postStyle from "./post.module.css";

const Post = ({ postObj }) => {
  const { title, content, karmaPoints } = postObj;
  const { postCardCCS } = postStyle;

  return (
    <div className={postCardCCS}>
      <div>
        <h3>{karmaPoints}</h3>
      </div>
      <div>
        <h2>{title}</h2>
        <img style={{ width: "100%" }} src={content} alt={title} />
      </div>
    </div>
  );
};

export default Post;
