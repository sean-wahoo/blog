import Navbar from "components/Navbar";
import Footer from "components/Footer";
import React from "react";
import Head from "next/head";
import styles from "styles/components/layout.module.scss";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
