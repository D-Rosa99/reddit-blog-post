import React, { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import { commentAction } from "../../services/redditActions.service";

import commentSectionStyle from "./commentSection.module.css";

const CommentSection = (props) => {
  const { postName } = props;
  const [comment, setComment] = useState("");

  const { commentSectionCSS, textAreaBoxCCS, commentLabelBoxCSS, commentButtonCSS } =
    commentSectionStyle;

  const handleSubmit = async () => {
    const { data } = await commentAction(postName, comment);
    if (data.success) {
      alert("Message sent successfully");
    }
    setComment("");
  };

  return (
    <div className={commentSectionCSS}>
      <div className={commentLabelBoxCSS}>
        <span>Comment as .</span>
      </div>
      <TextareaAutosize
        className={textAreaBoxCCS}
        aria-label="minimum height"
        minRows={10}
        placeholder="What are your thoughts?"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <Button
        className={commentButtonCSS}
        disabled={comment.length < 1}
        variant="contained"
        onClick={handleSubmit}
      >
        Comment
      </Button>
    </div>
  );
};

export default CommentSection;
