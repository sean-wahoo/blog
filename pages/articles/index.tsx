import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";

interface HomeProps {
  posts: any[];
}

export default ({ posts }: HomeProps) => {
  return (
    <div>
      {posts.map(({ url, frontmatter }) => {
        return (
          <div key={url}>
            <Link href={`/articles/${url}`}>
              <a>
                <h1>{frontmatter.title}</h1>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync("content/articles");

  const posts = files.map((name) => {
    const url = name.replace(".md", "");
    const read = fs.readFileSync(`content/articles/${name}`, "utf-8");
    const { data: frontmatter } = matter(read);

    return {
      url,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
};
