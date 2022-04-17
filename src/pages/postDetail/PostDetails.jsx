import React, { useEffect, useState } from "react";
import { httpRequest } from "../../utils/request";
import PostCard from "../../components/post";
import { postMapper } from "../../utils/mapper";

const PostDetails = () => {
  const [postInfo, setPostInfo] = useState([]);

  useEffect(() => {
    console.log("entro aqui");
    httpRequest(
      "get",
      "https://www.reddit.com/r/aww/comments/80o0xo/puppy_spends_a_day_at_the_beach.json"
    ).then(({ data }) => {
      setPostInfo(data);
    });
  }, []);

  return (
    <div>
      {postInfo.length ? <PostCard postObj={postMapper(postInfo[0].data)} /> : "Hello World"}
    </div>
  );
};

export default PostDetails;
