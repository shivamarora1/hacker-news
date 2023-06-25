import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Nav() {
  const [tab, setTab] = useState("Top");

  function changeTab(tabName: string) {
    return () => {
      setTab(tabName);
      console.log(tab);
    };
  }

  const router = useRouter();
  const tabs = [
    { label: "Top", href: "/" },
    { label: "Best", href: "/beststories" },
    { label: "Newest", href: "/newstories" },
    { label: "Show", href: "/showstories" },
    { label: "Ask", href: "/askstories" },
    { label: "Jobs", href: "/jobstories" },
  ];

  return (
    <>
      <nav>
        <ul>
          {tabs.map((link, index) => (
            <li key={index}>
              <Link
                onClick={changeTab(link.label)}
                href={link.href}
                data-custom={tab}
                className={tab === link.label ? "active" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <style jsx>
        {`
          nav {
            font-size: 14px;
            background-color: #333;
            padding: 0 10px;
          }
          li {
            display: inline-block;
          }
        `}
      </style>
      <style jsx global>
        {`
          nav a {
            display: block;
            color: #fff;
            padding: 10px;
          }
          nav a:hover,
          nav .active {
            text-decoration: none;
            color: #fff;
            background-color: #111;
          }
        `}
      </style>
    </>
  );
}
