import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './PostsSlice';

const Post = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts({ limit: 5 }));
  }, [dispatch]);

  return <div>post..</div>;
};

export default Post;
