import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {createComment, deleteComment } from "../api/apiPost";
import { useParams } from 'react-router-dom';
import "../styles/forms.css";


export const Comments = ({commentarios}) => {
   const params = useParams();
   const { postId } = params;
  const navigate = useNavigate();
  const newComment = {
      "author": "",
      "comment": "",
      updatedAt: new Date().toISOString(),
    };
    
    const [newCommentState, setNewCommentState] = useState(newComment);
    const [ allComments, setAllComments ] = useState([]);

    const handleonSave = async (newComment, postId)=>{
      if(newComment){
        console.log(newComment);
        const savedComment = await createComment(postId, newComment);
        setNewCommentState({ ...newCommentState, savedComment });
      }
    }

    const handleonDelete = async (commentId, postId)=>{
      console.log("eliminando " + commentId);
      if(commentId){
        const res = await deleteComment(commentId, postId);
    
        setAllComments({ ...allComments, res });
      }
    }
    const handleOnChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setNewCommentState({ ...newCommentState, [name]: value });
    };
  return (
    <>  
     <div className="blog-post-comments">
       <form id="create-post-form" className="post-form">
        <div className="input-field">
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={newCommentState.author}
            placeholder="Add your name"
            onChange={handleOnChange}
          />
        </div>
        <div className="input-field">
          <label>Comment</label>
          <textarea
            type="text"
            name="comment"
            value={newCommentState.comment}
            placeholder="Add a new comentary"
            onChange={handleOnChange}
          />
        </div>

        <div className="buttons-container">
          <button type="button" onClick={() => handleonSave(newCommentState, postId)}>
            Comentar
          </button>
        </div>
      </form>
      
    </div>
    {
      commentarios && 
        commentarios.map((comment, index) => {
        return (
          <div className="blog-post-box">
            <div className="comment-box">
              {comment._id} 
            </div>
            <div className="comment-box">
              {comment.author} 
            </div>
            <div className="comment-box">
              {comment.comment} 
            </div>
            <button type="button" onClick={() => handleonDelete(comment._id, postId)}>
              ELIMINAR
            </button>
          </div>
        );
        })
    }
    </>
 
  );
};

export default Comments;
