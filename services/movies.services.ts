import {Movies} from '@/types/movies';

const API_MOVIES = process.env.NEXT_PUBLIC_API_MOVIES;

export const getAllMovies = async (userEmail: string | null | undefined) => {
	const response = await fetch(`${API_MOVIES}/${userEmail}`);
	return (await response.json()) as Movies[];
	// const results = await response.json();
	// return results as Movies[];
};

export const createMovie = async (urlMovies: string, movieData: FormData) => {
	try {
		const response = await fetch(urlMovies, {
			method: 'POST',
			body: movieData,
		});

		if (response.ok) {
			return response.json();
		} else {
			throw new Error('No response at server');
		}
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const getMovieDetails = async (movieId: string) => {
	const response = await fetch(`http:localhost:8080/movie/${movieId}/`);
	const results = await response.json();
	return results as Movies;
};

export const updateMovie = async (movieId: string, formData: any) => {
	console.log(formData);
	const movieData = new FormData();
	movieData.append('title', formData.title);
	movieData.append('year', formData.year);
	movieData.append('country', formData.country);
	movieData.append('description', formData.description);
	// movieData.append('score', formData.scoreMovie);
	// movieData.append('genres', formData.selectedCategories);
	console.log(movieData);
	try {
		const response = await fetch(`${movieId}`, {
			method: 'PUT',
			// headers: {
			// 	'Content-Type': 'application/json',
			// },
			body: movieData,
		});

		// if (!response.ok) {
		// 	throw new Error('Network response was not ok');
		// }

		return response.json();
	} catch (error) {
		console.error('Error updating movie:', error);
		throw error;
	}
};

export const deleteMovie = async (movieId: string) => {
	try {
		const response = await fetch(`http://localhost:8080/movies/${movieId}`, {
			method: 'DELETE',
		});

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		return response.json();
	} catch (error) {
		console.error('Error deleting movie:', error);
		throw error;
	}
};
