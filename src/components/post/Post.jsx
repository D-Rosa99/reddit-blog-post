import React, { useEffect, useState } from "react";
import {
  BsShift,
  BsChatSquareText,
  BsGift,
  BsThreeDots,
  BsBookmark,
  BsShare,
  BsShiftFill,
} from "react-icons/bs";
import { getVotesHistory } from "../../services/redditUserAccountData.service";
import { voteAction } from "../../services/redditActions.service";
import MediaSource from "../mediaSource/MediaSource";

import postStyle from "./post.module.css";
import { votesFormat } from "../../utils/general";

const Post = ({ postObj, userKarma }) => {
  const [score, setScore] = useState(postObj.votePoints);
  const [voteDir, setVoteDir] = useState(0);

  const {
    title,
    content,
    votePoints,
    redditUser,
    authorUserName,
    totalComments,
    contentType,
    postDetail,
    handlePostClick,
    postName,
  } = postObj;

  const {
    postCardCCS,
    upButtonsCCS,
    downButtonsCCS,
    arrowIconCCS,
    postContentCCS,
    boxActionCCS,
    fillUpArrowIconCCS,
    fillDownArrowIconCCS,
  } = postStyle;

  useEffect(() => {
    if (userKarma?.totalKarma) {
      getVotesHistory().then((data) => {
        if (checkMatchVotedHistory(data?.upVotedHistoryList)) setVoteDir(1);
        else if (checkMatchVotedHistory(data?.downVotedHistoryList)) setVoteDir(-1);
      });
    }
  }, []);

  const checkMatchVotedHistory = (votedHistory) => {
    if (!votedHistory?.length) return false;

    return votedHistory.some((post) => {
      return post.data.title === title;
    });
  };

  const handleVoteClick = (voteDir) => {
    if (!userKarma?.totalKarma) {
      alert("You need to log in to vote");
      return;
    }

    switch (voteDir) {
      case "up":
        voteAction(1, postName);
        setVoteDir(1);
        setScore(votePoints + 1);
        break;

      case "down":
        voteAction(-1, postName);
        setVoteDir(-1);
        setScore(votePoints - 1);
        break;

      default:
        voteAction(0, postName);
        setVoteDir(0);
        setScore(votePoints);
        break;
    }
  };

  return (
    <div className={postCardCCS}>
      <div>
        <button className={upButtonsCCS}>
          {voteDir > 0 ? (
            <BsShiftFill
              onClick={() => handleVoteClick("neutral")}
              className={`${fillUpArrowIconCCS} ${arrowIconCCS}`}
            />
          ) : (
            <BsShift onClick={() => handleVoteClick("up")} className={arrowIconCCS} />
          )}
        </button>
        <h3>{votesFormat(score)}</h3>
        <button className={downButtonsCCS}>
          {voteDir < 0 ? (
            <BsShiftFill
              onClick={() => handleVoteClick("neutral")}
              className={`${fillDownArrowIconCCS} ${arrowIconCCS}`}
            />
          ) : (
            <BsShift onClick={() => handleVoteClick("down")} className={arrowIconCCS} />
          )}
        </button>
      </div>
      <div className={postContentCCS} onClick={() => handlePostClick(postDetail)}>
        <div>
          <span>
            {redditUser} . Posted by u/{authorUserName}
          </span>
          <h2>{title}</h2>
          <MediaSource contentType={contentType} src={content} />
        </div>
        <div className={boxActionCCS}>
          <div>
            <BsChatSquareText />
            <span>{totalComments} Comments</span>
          </div>
          <div>
            <BsGift />
            <span>Award</span>
          </div>
          <div>
            <BsShare />
            <span>Share</span>
          </div>
          <div>
            <BsBookmark />
            <span>Save</span>
          </div>
          <BsThreeDots />
        </div>
      </div>
    </div>
  );
};

export default Post;
