import "katex/dist/katex.min.css";
import { graphql } from "gatsby";
import React from "react";
import { Label } from "../components/label";
import { Layout } from "../layout";

const Template = ({ data }) => {
  const page = data.markdownRemark;

  return (
    <Layout>
      <div className="px-12 pt-24 pb-6 lg:px-32 lg:py-12 border-purple-500">
        <h1 className="text-4xl text-gray-800 text-center mb-10">
          {page.frontmatter.title}
        </h1>

        <div className="flex flex-col text-xs md:flex-row space-y-5 md:space-y-0 justify-between align-middle">
          <div>
            <p className="mb-2">Status:</p>
            <Label
              name={page.frontmatter.status.name}
              color={page.frontmatter.status.color}
            />
          </div>

          <div>
            <p className="mb-2">Tags:</p>
            {page.frontmatter.tags.map((tag) => (
              <Label name={tag.name} color={tag.color} key={tag.name} />
            ))}
          </div>

          <div>
            <p className="mb-2">Publication date:</p>
            <time>{page.frontmatter.publish_date.start}</time>
          </div>
        </div>
      </div>

      <div
        className="prose prose-purple self-center px-5"
        dangerouslySetInnerHTML={{ __html: page.html }}
      />
    </Layout>
  );
};

export default Template;

export const query = graphql`
  query PageContents($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        publish_date {
          start(fromNow: true)
        }
        tags {
          name
          color
        }
        status {
          name
          color
        }
      }
      html
    }
  }
`;
