import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
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
                href={link.href}
                className={router.pathname === link.href ? "active" : ""}
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
