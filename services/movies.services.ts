import {Movies} from '@/types/movies';

const API_MOVIES = process.env.NEXT_PUBLIC_API_MOVIES;

export const getAllMovies = async () => {
	const response = await fetch(`${API_MOVIES}`);
	const results = await response.json();
    console.log(results);
	return results as Movies[];
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
