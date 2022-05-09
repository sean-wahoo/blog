import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Layout from "components/Layout";
import { useEffect } from "react";
import hljs from "highlight.js";
import styles from "styles/pages/blog-post.module.scss";

interface Params extends ParsedUrlQuery {
  url: string;
}

interface PostReturnProps {
  frontmatter: any;
  content: any;
}

const BlogPost: NextPage<PostReturnProps> = ({ frontmatter, content }) => {
  return (
    <Layout title={frontmatter.title}>
      <article className={styles.post}>
        <h1>{frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: md({
              xhtmlOut: true,
              typographer: true,
              highlight: function (str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                  try {
                    return hljs.highlight(str, { language: lang }).value;
                  } catch (_) {}
                }
                return "";
              },
            }).render(content),
          }}
        />
      </article>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<PostReturnProps, Params> = async ({
  params,
}) => {
  const { url } = params!;
  console.log({ url });
  const name = fs.readFileSync(`content/articles/${url}.md`, "utf-8");
  const { data: frontmatter, content } = matter(name);

  return {
    props: {
      frontmatter,
      content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync("content/articles");
  const paths = files.map((name) => {
    return {
      params: {
        url: name.replace(".md", ""),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default BlogPost;
