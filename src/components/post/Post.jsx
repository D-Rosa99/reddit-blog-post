import React from "react";
import {
  BsShift,
  BsChatSquareText,
  BsGift,
  BsThreeDots,
  BsBookmark,
  BsShare,
} from "react-icons/bs";
import MediaSource from "../mediaSource/MediaSource";

import postStyle from "./post.module.css";

const Post = ({ postObj }) => {
  const {
    title,
    content,
    votePoints,
    redditUser,
    authorUserName,
    totalComments,
    contentType,
    postDetail,
    handlePostClick,
  } = postObj;

  const { postCardCCS, upButtonsCCS, downButtonsCCS, arrowIconCCS, postContentCCS, boxActionCCS } =
    postStyle;

  return (
    <div className={postCardCCS}>
      <div>
        <button className={upButtonsCCS}>
          <BsShift className={arrowIconCCS} />
        </button>
        <h3>{votePoints}</h3>
        <button className={downButtonsCCS}>
          <BsShift className={arrowIconCCS} />
        </button>
      </div>
      <div className={postContentCCS} onClick={() => handlePostClick(postDetail)}>
        <div>
          <span>
            {redditUser} . Posted by u/{authorUserName}
          </span>
          <h2>{title}</h2>
          <MediaSource contentType={contentType} src={content} />
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