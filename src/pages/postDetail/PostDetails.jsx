import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { httpRequest } from "../../utils/request";
import PostCard from "../../components/post/Post";
import { postMapper } from "../../mappers/postInfo.mappers";
import CommentSection from "../../components/commentSection/CommentSection";

import postDetailStyle from "./postDetails.module.css";
import { getKarmaPoint } from "../../services/redditUserAccountData.service";

const PostDetails = () => {
  const [detailData, setDetailData] = useState({});
  const [karmaPoint, setKarmaPoint] = useState({});
  const { pathname } = useLocation();

  const { postDetailBoxCCS } = postDetailStyle;

  useEffect(() => {
    httpRequest("get", `${process.env.REACT_APP_REDDIT_BASE_URL}${pathname}.json`).then(
      ({ data }) => setDetailData(data)
    );

    getKarmaPoint().then((data) => setKarmaPoint(data));
  }, []);

  return (
    <div className={postDetailBoxCCS}>
      {detailData.length ? (
        <Fragment>
          <PostCard postObj={postMapper(detailData[0].data)[0]} userKarma={karmaPoint} />
          <CommentSection
            commenents={detailData[1].data.children}
            postName={postMapper(detailData[0].data)[0].postName}
          />
        </Fragment>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default PostDetails;
