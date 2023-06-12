export interface Item {
  by: string;
  descendants: number;
  deleted: boolean;
  dead: boolean;
  id: number;
  kids?: number[] | null;
  score: number;
  title: string;
  time: number;
  type: string;
  url: string;
  text?: string;
}
