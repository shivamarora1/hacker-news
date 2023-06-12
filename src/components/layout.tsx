// ! improve style
import React from "react";
import Head from "next/head";
import Link from "next/link";

import Nav from "./nav";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Head>
        <title>Hacker News</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div id="container">
        <header>
          <h1>
            <Link
              href="/"
              title="Hacker News is a social news website focusing on computer science and entrepreneurship."
            >
              Hacker News
            </Link>
          </h1>
        </header>
        <Nav />
        <div id="main">{children}</div>
        <footer>
        </footer>
      </div>
      <style jsx>
        {`
          #container {
            width: 95%;
            max-width: 800px;
            margin: auto;
          }
          #main {
            background-color: #fff;
            border-radius: 5px;
            overflow: hidden;
          }
          header {
            background-color: #000;
            padding: 10px 20px;
          }
          h1 {
            font-size: 30px;
            font-weight: bold;
            margin: 0;
            position: relative;
            left: -3px;
          }
        `}
      </style>
      <style jsx global>
        {`
          h1 a {
            color: #fff;
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
}
