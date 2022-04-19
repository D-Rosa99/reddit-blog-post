import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { httpRequest } from "../../utils/request";
import PostCard from "../../components/post/Post";
import { postMapper } from "../../mappers/postInfo.mappers";
import CommentSection from "../../components/commentSection/CommentSection";

import postDetailStyle from "./postDetails.module.css";

const PostDetails = () => {
  const [detailData, setDetailData] = useState({});
  const { pathname } = useLocation();

  const { postDetailBoxCCS } = postDetailStyle;

  useEffect(() => {
    httpRequest("get", `${process.env.REACT_APP_REDDIT_BASE_URL}${pathname}.json`).then(
      ({ data }) => {
        const postSection = postMapper(data[0].data)[0];
        const commentSection = data[1].data.children;

        setDetailData({
          postSection,
          commentSection: { ...commentSection, postName: postSection.postName },
        });
      }
    );
  }, []);

  return (
    <div className={postDetailBoxCCS}>
      {detailData.length ? (
        <Fragment>
          <PostCard postObj={detailData.postSection} redditData={{}} />
          <CommentSection commentObj={detailData.commentSection} />
        </Fragment>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default PostDetails;
