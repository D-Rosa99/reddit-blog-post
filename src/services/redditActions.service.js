import { httpRequest } from "../utils/request";
import { getFromLocalStorage } from "../utils/storage";

export const voteAction = (voteDirection, voteId) => {
  const beareToken = getFromLocalStorage("redditToken").access_token;

  const paramsObj = new URLSearchParams();
  paramsObj.append("dir", voteDirection);
  paramsObj.append("id", voteId);

  const headerObj = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${beareToken}`,
    },
  };

  httpRequest("post", `${process.env.REACT_APP_PRIVATE_REDDIT_URL}/api/vote`, paramsObj, headerObj);
};

export const commentAction = (name, text) => {
  const beareToken = getFromLocalStorage("redditToken").access_token;

  const paramsObj = new URLSearchParams();
  paramsObj.append("parent", name);
  paramsObj.append("text", text);

  const headerObj = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${beareToken}`,
    },
  };

  return httpRequest(
    "post",
    `${process.env.REACT_APP_PRIVATE_REDDIT_URL}/api/comment`,
    paramsObj,
    headerObj
  );
};
