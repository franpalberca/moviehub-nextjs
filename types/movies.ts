import { Genres } from "./genres";
import { Users } from "./users";

export interface Movies {
	id: string;
	title: string;
	year: number;
	country: string;
	score: number;
	genres: Genres[];
	genresArray: string[];
	createdAt: Date;
	updatedAt: Date;
	Users?: Users | null;
	usersId?: string | null;
	imageUrl?: string | null;
	imageId?: string | null;
}
