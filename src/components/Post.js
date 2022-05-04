import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import "../styles/blog.css";
import Comments from "../components/Comments";

const Post = ({ post, onEdit, index, onDelete,  id, isDetails  }) => {
  
  const commentarios = post.comments || [];
  return (
    <div className="blog-post">
      <div className="blog-post-image">
        <img
          src={post.imageUrl}
          alt="Blog header image"
          width={250}
          height={250}
        />
      </div>
      <div className="blog-post-details">
        <p>{post.updatedAt && format(new Date(post.updatedAt), 'MMMM dd, yyyy')}</p>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <p>By {post.author}</p>
        { !isDetails && <Link to={`post/${id}`}>READ MORE</Link> }
      </div>
      {
        isDetails &&
        <><div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <Link
            className="blog-post-edit"
            to={`/create-new-post/${id}`}>
            Edit
          </Link>
          <button
            className="blog-post-delete"
            onClick={() => onDelete(id)}
          >
            X
          </button>
        </div>
        <Comments commentarios={commentarios}/>
        </>
     }
    </div>
  );
};

export default Post;
