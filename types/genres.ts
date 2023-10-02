import { Movies } from "./movies";

export interface Genres {
    id: string;
    genre: string;
    createdAt: Date;
    updatedAt: Date;
    Movies?: Movies | null;
    moviesId?: string | null;
  }