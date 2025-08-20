import { useState } from "react";
import "./index.css"

export default function CommentBox() {
  const [comments, setComments] = useState([]);
  console.log(comments)
  const [input, setInput] = useState("");       

  const handleAddComment = () => {
    if (input.trim() === "") return;
    setComments([...comments, input]);
    setInput("");
  };

  return (
    <div className="comment-box">
      <h2>Comments</h2>

      <div className="input-area">
        <input
          type="text"
          placeholder="Write a comment..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddComment}>Post</button>
      </div>

      <ul className="comment-list">
        {comments.map((comment, index) => (
          <li key={index} className="comment">
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
}
