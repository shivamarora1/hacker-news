import NewsItem from "./news-item";
import { Item } from "@/types/interface";
import { PageSize } from "@/pages/[[...type]]";
import Link from "next/link";
import { useRouter } from "next/router";
interface Props {
  items: Item[];
  page: number;
}

export default function NewsContainer({ items, page }: Props) {
  const router = useRouter();
  return (
    <>
      <ul>
        {items.map((item: Item, i: number) => (
          <NewsItem item={item} itemIdx={getItemIdx(page, i)} key={item.id} />
        ))}
      </ul>
      <div>
        <Link href={{ pathname: router.asPath, query: { p: page + 1 } }}>
          More...
        </Link>
      </div>
      <style jsx>
        {`
          div {
            color: grey;
            padding: 5px;
            font-weight: 400;
          }
        `}
      </style>
    </>
  );
}

function getItemIdx(page: number, origIdx: number): number {
  return page * PageSize + origIdx + 1;
}
