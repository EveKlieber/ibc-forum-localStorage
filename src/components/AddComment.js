import { CommentsContext } from "../context/CommentsContext";
import { useState, useContext } from "react";
import { v4 as uuid } from "uuid";

const AddComment = (props) => {
  const current = new Date();
  const date = `${current.getDate()}:${current.getHours()}:${current.getMinutes()}`;

  const [comments, setComments] = useContext(CommentsContext);
  const [newComment, setNewComment] = useState({
    userName: "",
    commentTitle: "",
    message: "",
    type: props.type, // kommt von Topic1 type{"topic2"}
    date: date,
    id: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const { userName, commentTitle, message, id } = newComment;

    let toStorage = JSON.parse(localStorage.getItem(props.type)) || []; // wenn null, undefined dann nimm []

    toStorage.push(newComment);
    localStorage.setItem(props.type, JSON.stringify(toStorage));  // props type wird key.
    setComments([
      ...comments,
      {
        userName: userName,
        commentTitle: commentTitle,
        message: message,
        id: id,
        type: props.type,
        date: date,
      },
    ]);
    e.target.reset();
  };

  return (
    <form onSubmit={onSubmit} className="messageform">
      <label>UserName:</label>
      <input
        onChange={(e) => {
          setNewComment({ ...newComment, userName: e.target.value });
        }}
        type="text"
        required
        placeholder="Enter your UserName"
      />
      <label>Comment Title:</label>
      <input
        onChange={(e) => {
          setNewComment({ ...newComment, commentTitle: e.target.value });
        }}
        type="text"
        required
        placeholder="Enter the title of your comment"
      />

      <label>Your Message:</label>
      <textarea
        onChange={(e) => {
          setNewComment({ ...newComment, message: e.target.value, id: uuid() });
        }}
        name=""
        id=""
        cols="30"
        rows="10"
        placeholer="Enter your message"
        required
      ></textarea>
      <button type="submit">Add your comment</button>
    </form>
  );
};
export default AddComment;
