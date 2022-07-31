import React from "react";
import posts from "../helpers/posts";
import Post from "./Post";
import { v4 as uuidv4 } from "uuid";

const instagramMock = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post key={uuidv4()} post={post} />
      ))}
    </div>
  );
};

export default instagramMock;
