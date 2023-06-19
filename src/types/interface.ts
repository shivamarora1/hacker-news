export interface Item {
  by: string;
  descendants: number;
  deleted: boolean;
  dead: boolean;
  id: number;
  kids?: number[] | null;
  title: string;
  score: number;
  time: number;
  type: string;
  url: string;
  text?: string;
  Replies?: Item[] | null;
}


