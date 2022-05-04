const Comment = (props) => {


  console.log("props", props)


  
  return (
    <div className="comment">
      <h3>{props.comment.userName}</h3>
      <h5>{props.comment.commentTitle}</h5>
      <p>{props.comment.message}</p>
      <p className="date">{props.comment.date}</p>
      <button onClick={() => props.onDelete(props.comment.id)}>delete</button>
    </div>
  );
};

export default Comment;
