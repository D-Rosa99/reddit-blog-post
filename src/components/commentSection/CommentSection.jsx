import React, { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";

import commentSectionStyle from "./commentSection.module.css";

const CommentSection = () => {
  const [comment, setComment] = useState("");

  const { commentSectionCSS, textAreaBoxCCS, commentLabelBoxCSS, commentButtonCSS } =
    commentSectionStyle;

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
      <Button className={commentButtonCSS} disabled={comment.length < 1} variant="contained">
        Comment
      </Button>
    </div>
  );
};

export default CommentSection;
