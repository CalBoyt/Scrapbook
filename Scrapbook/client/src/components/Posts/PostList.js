import React, { useState, useEffect } from "react";
import { Post } from "./Post";
import { getAllPosts } from "../../Managers/PostManager";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    getAllPosts().then(allPosts => setPosts(allPosts)); 
  };

  useEffect(() => {
    getPosts();
  }, []); 
  return (
    <>
    <div className="bg-success bg-opacity-25">
    <h1 className="pt-5 text-danger">All Posts</h1>
    <div className="container ">
      <div className="row justify-content-center">
        <div className="cards-column row justify-content-center">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default PostList;