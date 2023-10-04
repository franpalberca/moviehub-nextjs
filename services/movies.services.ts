import {Movies} from '@/types/movies';

const API_MOVIES = process.env.NEXT_PUBLIC_API_MOVIES;

export const getAllMovies = async () => {
	const response = await fetch(`${API_MOVIES}`);
	const results = await response.json();
	return results as Movies[];
};

const urlMovies = process.env.NEXT_PUBLIC_API_MOVIES;


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


export const updateMovie = async (movieId, formData) => {
	try {
		const response = await fetch(`/api/movies/${movieId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		});

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		return response.json();
	} catch (error) {
		console.error('Error updating movie:', error);
		throw error;
	}
};

export const deleteMovie = async (movieId) => {
	try {
		const response = await fetch(`/api/movies/${movieId}`, {
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
