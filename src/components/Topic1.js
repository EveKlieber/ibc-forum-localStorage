import { CommentsContext } from "../context/CommentsContext";
import { useContext, useEffect } from "react";
import AddComment from "./AddComment";
import Comment from "./Comment";
import { v4 as uuid } from "uuid";

const Topic1 = () => {
  const [comments, setComments] = useContext(CommentsContext);

  const current = new Date();

  const commentsData = [
    {
      userName: "Maximlilian",
      date: current,
      id: uuid(),
      commentTitle: "biking",
      message: "i love biking",
      type: "topic1",
    },
    {
      userName: "Sepp",
      date: current,
      id: uuid(),
      commentTitle: "shimano",
      message: "is too expensive",
      type: "topic1",
    },
    {
      userName: "Lisa",
      date: current,
      id: uuid(),
      commentTitle: "margura",
      message: "best parts",
      type: "topic1",
    },
    {
      userName: "Denise",
      date: current,
      id: uuid(),
      commentTitle: "sram",
      message: "i love sram",
      type: "topic1",
    },
  ];

  useEffect(() => {
    const getComments = () => {
      let topic1Comments = JSON.parse(localStorage.getItem("topic1")) || [];
      if (topic1Comments.length === 0) {
        topic1Comments.push(
          ...commentsData.filter((com) => com.type === "topic1"),
        );
        console.log("topic1Comments", topic1Comments)
        localStorage.setItem("topic1", JSON.stringify(topic1Comments));
      }
    };
    getComments();
  });


    const getStored = () => {
      let topic1Comments = JSON.parse(localStorage.getItem("topic1")) || [];
      if (topic1Comments.length === 0) {
        topic1Comments.push({
          ...commentsData.filter((com) => com.type === "topic1"),
        });
        localStorage.setItem("topic1", JSON.stringify(topic1Comments));
      }
    };
    getStored();
 

  console.log("comments", comments);
  return (
    <div className="topic-container">
      <h2>welcome at tech talk !</h2>
      <div className="comments">
        {comments
          .filter((topicComment) => topicComment.type === "topic1")
          .map((comment) => {
            return <Comment key={comment.id} comment={comment} />;
          })}
      </div>
      <AddComment type={"topic1"} />
    </div>
  );
};

export default Topic1;
