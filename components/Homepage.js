import React, { useMemo } from "react";
import Link from "next/link";
import { usePosts } from "../providers/PostsProvider";
import Blob from "../components/home-hero/blob";
import HeroCard from "./ScreenCard";

const Homepage = () => {
  const { allPosts = [] } = usePosts();
  const posts = useMemo(() => allPosts.filter((item) => item.type === "post"), [
    allPosts,
  ]);
  const pages = useMemo(() => allPosts.filter((item) => item.type === "page"), [
    allPosts,
  ]);
  return (
    <>
      <Blob />
      <HeroCard align="start">
        <div className="prose md:prose-xl  py-10" id="experiments">
          <h2>Experiments</h2>
          <p>Things I built because they&apos;re fun to play with.</p>
          <ul>
            {pages.map((item) => {
              return (
                <li key={item.fullUrlPath || item.urlPath}>
                  <Link href={item.fullUrlPath || item.urlPath}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="prose prose-xl  py-12" id="blog">
          <h2>Quick hits</h2>
          <p>Short blog posts, usually about how to do 1 specific thing.</p>
          <ul>
            {posts.map((item) => {
              return (
                <li key={item.fullUrlPath || item.urlPath}>
                  <Link href={item.fullUrlPath || item.urlPath}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </HeroCard>
    </>
  );
};

export default Homepage;
