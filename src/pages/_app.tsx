import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import '../../public/css/style.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
