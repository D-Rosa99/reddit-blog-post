import { httpRequest } from "../utils/request";
import { getFromLocalStorage } from "../utils/storage";

export const getKarmaPoint = async () => {
  const beareToken = getFromLocalStorage("redditToken")?.access_token;

  if (!beareToken) return {};

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

  return { totalKarma: getUser.data.total_karma };
};

export const getVotesHistory = async () => {
  const beareToken = getFromLocalStorage("redditToken")?.access_token;

  if (!beareToken) return {};

  const paramsObj = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${beareToken}`,
    },
  };

  const { data } = await httpRequest(
    "get",
    `${process.env.REACT_APP_PRIVATE_REDDIT_URL}/api/v1/me`,
    paramsObj
  );

  const getUpvotedHistory = await httpRequest(
    "get",
    `${process.env.REACT_APP_PRIVATE_REDDIT_URL}/user/${data.name}/upvoted`,
    paramsObj
  );

  const getDownvotedHistory = await httpRequest(
    "get",
    `${process.env.REACT_APP_PRIVATE_REDDIT_URL}/user/${data.name}/downvoted`,
    paramsObj
  );

  return {
    upVotedHistoryList: getUpvotedHistory.data.data.children,
    downVotedHistoryList: getDownvotedHistory.data.data.children,
  };
};
