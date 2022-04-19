import { httpRequest } from "../utils/request";
import { getFromLocalStorage } from "../utils/storage";

export const getRedditData = async () => {
  const beareToken = getFromLocalStorage("redditToken").access_token;

  const paramsObj = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${beareToken}`,
    },
  };

  const getUser = await httpRequest(
    "get",
    `${process.env.REACT_APP_PRIVATE_REDDIT_URL}/api/v1/me`,
    paramsObj
  );

  const getUpvotedHistory = await httpRequest(
    "get",
    `${process.env.REACT_APP_PRIVATE_REDDIT_URL}/user/${getUser.data.name}/upvoted`,
    paramsObj
  );

  const getDownvotedHistory = await httpRequest(
    "get",
    `${process.env.REACT_APP_PRIVATE_REDDIT_URL}/user/${getUser.data.name}/downvoted`,
    paramsObj
  );

  return {
    totalKarma: getUser.data.total_karma,
    upVotedHistoryList: getUpvotedHistory.data.data.children,
    downVotedHistoryList: getDownvotedHistory.data.data.children,
  };
};
