import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Post from "../../components/post/Post";
import { postMapper } from "../../mappers/postInfo.mappers";
import { getRedditOauthToken } from "../../services/redditAuthentication.service";
import { getKarmaPoint } from "../../services/redditUserAccountData.service";
import { httpRequest } from "../../utils/request";

import homeStyle from "./home.module.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [userKarma, setUserKarma] = useState({});
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
      getKarmaPoint().then((data) => setUserKarma(data));
    }
  }, []);

  const handlePostClick = (postDetailUrl) => {
    navigate(postDetailUrl);
  };

  return (
    <div>
      <Header totalKarma={userKarma?.totalKarma} />
      <div className={postBoxCCS}>
        {posts.length
          ? posts.map((post) => (
              <Post
                key={post.postName}
                postObj={{ ...post, handlePostClick }}
                userKarma={userKarma}
              />
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default Home;
