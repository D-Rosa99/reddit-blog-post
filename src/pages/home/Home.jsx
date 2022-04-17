import React, { useEffect, useState } from "react";
import Post from "../../components/post";
import { postMapper } from "../../utils/mapper";
import { httpRequest } from "../../utils/request";

import homeStyle from "./home.module.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { postBoxCCS } = homeStyle;

  const REDDIT_ALL_POST_URL = "https://www.reddit.com/r/all.json";

  useEffect(() => {
    httpRequest("get", REDDIT_ALL_POST_URL).then(({ data: { data } }) =>
      setPosts(postMapper(data))
    );
  }, [posts]);

  return (
    <div className={postBoxCCS}>
      {posts.length && posts.map((post, index) => <Post key={index} postObj={post} />)}
    </div>
  );
};

export default Home;
