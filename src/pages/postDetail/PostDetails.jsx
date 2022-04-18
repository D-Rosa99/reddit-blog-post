import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { httpRequest } from "../../utils/request";
import PostCard from "../../components/post/Post";
import { postMapper } from "../../mappers/postInfo.mappers";
import CommentSection from "../../components/commentSection/CommentSection";

import postDetailStyle from "./postDetails.module.css";

const PostDetails = () => {
  const [postInfo, setPostInfo] = useState([]);
  const { pathname } = useLocation();

  const { postDetailBoxCCS } = postDetailStyle;

  useEffect(() => {
    httpRequest("get", `${process.env.REACT_APP_REDDIT_BASE_URL}${pathname}.json`).then(
      ({ data }) => {
        setPostInfo(data);
      }
    );
  }, []);

  return (
    <div className={postDetailBoxCCS}>
      {postInfo.length ? (
        <Fragment>
          <PostCard postObj={postMapper(postInfo[0].data)[0]} />
          <CommentSection />
        </Fragment>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default PostDetails;
