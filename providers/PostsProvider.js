import React, { useContext } from "react";

const PostsContext = React.createContext({
  allPosts: [],
});

export const PostsProvider = ({ children, ...props }) => {
  return (
    <PostsContext.Provider value={props}>{children}</PostsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostsContext);

  if (context === undefined || context === null) {
    throw new Error("usePosts must be used within a PostsProvider");
  }

  return context;
};

export default {
  usePosts,
  PostsProvider,
};
