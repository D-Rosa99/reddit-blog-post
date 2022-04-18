import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Post from "../../components/post/Post";
import { postMapper } from "../../mappers/postInfo.mappers";
import { httpRequest } from "../../utils/request";

import homeStyle from "./home.module.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const { postBoxCCS } = homeStyle;

  useEffect(() => {
    httpRequest("get", process.env.REACT_APP_REDDIT_ALL_POST_URL).then(({ data: { data } }) =>
      setPosts(postMapper(data))
    );
  }, []);

  const handlePostClick = (postDetailUrl) => {
    navigate(postDetailUrl);
  };

  return (
    <div className={postBoxCCS}>
      {posts.length
        ? posts.map((post, index) => <Post key={index} postObj={{ ...post, handlePostClick }} />)
        : "Loading..."}
    </div>
  );
};

export default Home;
