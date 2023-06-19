import { Item } from "../types/interface";
const endpointPrefix = "https://hacker-news.firebaseio.com/v0/";
const endpointSuffix = ".json";

const getList = (list: string) =>
  fetch(`${endpointPrefix}${list}${endpointSuffix}`).then((response) => {
    if (!response.ok) {
      throw new Error(`Status code error: ${response.status}`);
    }
    return response.json();
  });

const getItem = (itemId: number): Promise<Item> =>
  fetch(`${endpointPrefix}item/${itemId}${endpointSuffix}`).then((response) => {
    if (!response.ok) {
      throw new Error(
        `Status code error: ${response.status} | itemId: ${itemId}`
      );
    }
    return response.json();
  });

export async function fetchItems(
  page: number,
  itemsPerPage: number,
  pageType: string
): Promise<Item[]> {
  const itemsArr: number[] = await getList(pageType);
  const itemsToProcess: number[] = itemsArr.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );
  const processArrayAsync = async () => {
    const promises = itemsToProcess.map((id) => getItem(id));
    const results = await Promise.all(promises);
    return results;
  };
  return processArrayAsync();
}

export async function fetchItemsWithReplies(itemId: number): Promise<Item> {
  const item = await getItem(itemId);
  for (let i = 0; item.kids && i < item.kids?.length; i++) {
    item.Replies?.push(await fetchItemsWithReplies(item.kids[i]));
  }
  return item;
}
