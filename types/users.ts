import { Movies } from "./movies";

export interface Users {
    id: string;
    name: string;
    email: string;
    nickname: string;
    picture: string;
    movies: Movies[];
    moviesArray: string[];
    createdAt: Date;
    updatedAt: Date;
  }