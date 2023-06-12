import { Item } from "../types/interface";
const endpointPrefix = "https://hacker-news.firebaseio.com/v0/";
const endpointSuffix = ".json";

export const getList = (list: string) =>
  fetch(`${endpointPrefix}${list}${endpointSuffix}`).then((response) => {
    if (!response.ok) {
      throw new Error(`Status code error: ${response.status}`);
    }
    return response.json();
  });
  
export const getItem = (itemId: number): Promise<Item> =>
  fetch(`${endpointPrefix}item/${itemId}${endpointSuffix}`).then((response) => {
    if (!response.ok) {
      throw new Error(`Status code error: ${response.status} | itemId: ${itemId}`);
    }
    return response.json();
  });
