import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from '../components/Post';
import { getPostById } from "../api/apiPost";


export const DetailPostPage = ({onDelete}) => {
  const params = useParams();
  const { postId } = params;
  const [post, setPost] = useState({});

 
  useEffect(() => {
    const fetchPost = async () => {
      const res = await getPostById(postId);
      console.log(res); //see all properties
      setPost(res);
    };
    fetchPost();
  }, [postId]);
  
  return (
    <><Post
      id={post._id}
      post={post}
      isDetails={true}
      onDelete={onDelete} />
    </>
  );
};
