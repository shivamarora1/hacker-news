import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { Item } from "../types/interface";
import { getList, getItem } from "../helpers/fetch";
import NewsContainer from "@/components/news-container";

export const PageSize: number = 30;

export const getServerSideProps: GetServerSideProps<{
  items: Item[];
  page: number;
}> = async (context) => {
  const { query } = context;
  var page = parseInt(query.p as string, 10);
  const itemsPerPage = PageSize;

  page = page ? page : 0;
  const itemsArr: number[] = await getList("topstories");
  const itemsToProcess: number[] = itemsArr.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );
  const processArrayAsync = async () => {
    const promises = itemsToProcess.map((id) => getItem(id));
    const results = await Promise.all(promises);
    return results;
  };
  const items: Item[] = await processArrayAsync();
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
