import { httpRequest } from "../utils/request";
import { setLocalStorage } from "../utils/storage";

export const getRedditOauthToken = async (code) => {
  try {
    const paramsObj = new URLSearchParams();
    paramsObj.append("grant_type", "authorization_code");
    paramsObj.append("code", code);
    paramsObj.append("redirect_uri", process.env.REACT_APP_HOME_PAGE);

    const headerObj = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      auth: {
        username: process.env.REACT_APP_CLIENT_ID,
        password: process.env.REACT_APP_CLIENT_SECRET,
      },
    };

    const { data } = await httpRequest(
      "post",
      `${process.env.REACT_APP_REDDIT_BASE_URL}api/v1/access_token`,
      paramsObj,
      headerObj
    );

    if (data.error) {
      throw data;
    } else {
      setLocalStorage(data, "redditToken");
    }
  } catch (error) {
    alert("Sorry, something went wrong during logIn process");
  }
};
