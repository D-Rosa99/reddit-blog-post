import React from "react";
import {
  BsShift,
  BsChatSquareText,
  BsGift,
  BsThreeDots,
  BsBookmark,
  BsShare,
} from "react-icons/bs";

import postStyle from "./post.module.css";

const Post = ({ postObj }) => {
  const { title, content, karmaPoints, redditUser, authorUserName, totalComments, contentType } =
    postObj;

  const { postCardCCS, upButtonsCCS, downButtonsCCS, arrowIconCCS, postContentCCS, boxActionCCS } =
    postStyle;

  return (
    <div className={postCardCCS}>
      <div>
        <button className={upButtonsCCS}>
          <BsShift className={arrowIconCCS} />
        </button>
        <h3>{karmaPoints}</h3>
        <button className={downButtonsCCS}>
          <BsShift className={arrowIconCCS} />
        </button>
      </div>
      <div className={postContentCCS}>
        *****************************{contentType}***************************
        <div>
          <span>
            {redditUser} . Posted by u/{authorUserName}
          </span>
          <h2>{title}</h2>
          <img style={{ width: "100%" }} src={content} alt={title} />
        </div>
        <div className={boxActionCCS}>
          <div>
            <BsChatSquareText />
            <span>{totalComments} Comments</span>
          </div>
          <div>
            <BsGift />
            <span>Award</span>
          </div>
          <div>
            <BsShare />
            <span>Share</span>
          </div>
          <div>
            <BsBookmark />
            <span>Save</span>
          </div>
          <BsThreeDots />
        </div>
      </div>
    </div>
  );
};

export default Post;
