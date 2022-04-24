import Layout from "components/Layout";
import type { NextPage } from "next";
import styles from "styles/index.module.scss";

const Home: NextPage = () => {
  return (
    <Layout title="test">
      <main>
        <h1>hello</h1>
      </main>
    </Layout>
  );
};

export default Home;
