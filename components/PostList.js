import Link from "next/link";
import "twin.macro";

export default function PostList({ posts }) {
  if (posts === "undefined") return null;

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <li key={post.slug}>
                <Link href={{ pathname: `/post/${post.slug}` }}>
                  <a tw="text-black hover:text-indigo-500  cursor-pointer">
                    {post.frontmatter.title}
                  </a>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
