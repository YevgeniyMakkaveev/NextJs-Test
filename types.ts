export interface IPost  {
userId: number;
id: number;
title: string;
body: string;
}
export type IPostRes = {
  posts: IPost[]
}