import BlogLayout from "../components/layouts/BlogLayout";
import PageLayout from "../components/layouts/PageLayout";

export function renderLayout(props, state) {
  const { Component } = props;
  const { postData } = state;
  const { layout } = postData;

  if (!layout || !props.router) return;

  switch (layout) {
    case "blog":
      return (
        <BlogLayout>
          <Component {...props} postData={postData} />
        </BlogLayout>
      );
    case "post":
    case "page":
    default:
      return (
        <PageLayout>
          <Component {...props} />
          {/* Put styled-jsx here */}
        </PageLayout>
      );
  }
}
