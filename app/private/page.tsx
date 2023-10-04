'use client';
import {useEffect, useState} from 'react';
import {Card} from '@/components/card/card';
import {deleteMovie, getAllMovies, updateMovie} from '@/services/movies.services';
import {useUser} from '@auth0/nextjs-auth0/client';
import styles from './private.module.css';
import { Movies } from '@/types/movies';
import { useRouter } from 'next/navigation';

const Private = () => {
	const urlMovies = process.env.VITE_API_MOVIES;
	const [movies, setMovies] = useState([]);
	let url = '';
	const {user} = useUser();
	if (user) {
		url = `${urlMovies}/${user.id}`;
	}

	useEffect(() => {
		async function fetchDataMovies() {
			const moviesData = await getAllMovies();
			setMovies(moviesData.movies);
		}

		fetchDataMovies();
	}, []);

	const handleUpdateMovie = async (movieId: string) => {
		const movieUrl = `${urlMovies}`;
		try {
			await updateMovie(movieUrl, movieId);
			setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== movieId));
		} catch (error) {
			console.error('Error updating movie:', error);
		}
	};

	const handleDeleteMovie = async (movieId: string) => {
		console.log(movieId)
		// const movieUrl = `${urlMovies}`;
		try {
			await deleteMovie(movieId);
			setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== movieId));
		} catch (error) {
			console.error('Error deleting movie:', error);
		}
	};

	useEffect(() => {
		console.log('Movies updated', movies);
	}, [movies]);
	return (
		<>
			<h1 className={styles.title}>My Movies</h1>
			<div className={styles.movie__grid}>
				{movies.map((movie: Movies) => (
					<Card
						key={movie.id}
						id={movie.id}
						imageUrl={movie.imageUrl}
						title={movie.title}
						country={movie.country}
						year={movie.year}
						score={movie.score}
						genresArray={movie.genresArray}
						onDelete={() => handleDeleteMovie(movie.id)}
						onModify={() => handleUpdateMovie(movie.id)}
					/>
				))}
			</div>
		</>
	);
};

export default Private;
