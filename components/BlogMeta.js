import React, { Component } from "react";
import TagBlock from "../components/Tags";
import ReadingProgress from "../components/ReadingProgress";
import { articleSEO } from "../utils/seo";
import { formatDisplayDate } from "../utils/formatters";

export default class BlogMeta extends Component {
  renderProgressBar = (postData) => {
    return postData.hideProgressBar ? null : <ReadingProgress />;
  };

  render() {
    const { postData } = this.props.data;
    const { formattedPublishDate } = postData;

    return (
      <div className="pb-20">
        {this.renderProgressBar(postData)}
        <h1>{postData.title}</h1>
        <small className="post-date text-lg text-gray-700">
          {formatDisplayDate(formattedPublishDate)}
        </small>
        <TagBlock tags={postData.tags} />
        {articleSEO(postData)}
      </div>
    );
  }
}
