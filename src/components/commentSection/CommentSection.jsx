import React, { useState } from "react";

const CommentSection = () => {
  const [comment, setComment] = useState("");

  return (
    <div>
      <form>
        <label>Comment as .</label>
        <input
          type={"text"}
          placeholder="What are your thoughts?"
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />
      </form>
    </div>
  );
};

export default CommentSection;
