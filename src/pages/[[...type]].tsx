import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { Item } from "../types/interface";
import { fetchItems } from "../helpers/fetch";
import { useRouter } from "next/router";
import NewsContainer from "@/components/news-container";

export const PageSize: number = 30;

export const getServerSideProps: GetServerSideProps<{
  items: Item[];
  page: number;
}> = async (context) => {
  const { query } = context;
  var page = parseInt(query.p as string, 10);
  const itemsPerPage = PageSize;

  var pageType = "topstories";
  if (query.type && Array.isArray(query.type) && query.type.length > 0) {
    pageType = query.type[0];
  }
  page = page ? page : 0;
  const items: Item[] = await fetchItems(page, PageSize, pageType);
  return { props: { items, page } };
};

export default function Home({
  items,
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <NewsContainer items={items} page={page} />
    </>
  );
}
