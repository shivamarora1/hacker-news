import Link from "next/link";
import { Item } from "@/types/interface";
import Domain from "./domain";
import SubText from "./sub-text";
interface Props {
  item: Item;
  itemIdx: number;
}

export default function NewsItem({ item, itemIdx }: Props) {
  return (
    <>
      <li key={item.id}>
        <div className="topHeading">
          <span className="index">{itemIdx}.</span>{" "} 
          {item.url ? (
            <a href={item.url}>{item.title}</a>
          ) : (
            <Link href={`/item/${item.id}`} prefetch={false}>
              {item.title}
            </Link>
          )}{" "}
          <Domain url={item.url} />
        </div>
        <SubText
          score={item.score}
          by={item.by}
          time={item.time}
          kids={item.kids}
        />
      </li>
      <style jsx>{`
        li {
          margin: 10px 5px;
        }
        .index{
            color: grey;
        }
      `}</style>
    </>
  );
}
