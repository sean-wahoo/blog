import "styles/globals.css";
//import "styles/highlights/atom-one-dark.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
