import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Post from "../../components/post/Post";
import { postMapper } from "../../mappers/postInfo.mappers";
import { getRedditOauthToken } from "../../service/redditAuthentication";
import { getRedditData } from "../../service/redditUserAccountData";
import { httpRequest } from "../../utils/request";

import homeStyle from "./home.module.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [redditData, setRedditData] = useState({});
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { postBoxCCS } = homeStyle;

  useEffect(() => {
    httpRequest("get", process.env.REACT_APP_REDDIT_ALL_POST_URL).then(({ data: { data } }) =>
      setPosts(postMapper(data))
    );

    const oauthCode = searchParams.get("code");
    if (oauthCode) {
      searchParams.delete("code");
      getRedditOauthToken(oauthCode);
      getRedditData().then((data) => setRedditData(data));
    }
  }, []);

  const handlePostClick = (postDetailUrl) => {
    navigate(postDetailUrl);
  };
  console.log("redditData :>> ", redditData);
  return (
    <div>
      <Header totalKarma={redditData?.totalKarma} />
      <div className={postBoxCCS}>
        {posts.length
          ? posts.map((post, index) => (
              <Post key={index} postObj={{ ...post, handlePostClick }} redditData={redditData} />
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default Home;
