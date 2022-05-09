import Layout from "components/Layout";
import type { NextPage } from "next";
import styles from "styles/pages/index.module.scss";

const Home: NextPage = () => {
  return (
    <Layout title="test">
      <main className={styles.main}>
        <h1>hello</h1>
        <h4>by sean reichel</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit
          et, cumque nam sequi laudantium id tenetur deserunt enim,
          exercitationem autem officiis esse minus nemo illum mollitia quos
          delectus. Molestiae.{" "}
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quasi
          aut iste voluptas velit vel minima exercitationem perspiciatis
          reiciendis nobis fugiat aperiam, commodi porro earum. Minus, vitae?
          Sit, harum non!{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          quos maiores facere iste optio, tempora dolorem! In, at quod dolores,
          iusto, assumenda aliquam hic aspernatur ad ratione excepturi officiis
          quas.
        </p>
      </main>
    </Layout>
  );
};

export default Home;
