'use client';
import {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import styles from './modalCreationMovies.module.css';
import {getMovieDetails, updateMovie} from '@/services/movies.services';
import {Movies} from '@/types/movies';
import {useForm} from 'react-hook-form';

const urlMovies = process.env.NEXT_PUBLIC_API_MOVIES;

export const ModalUpdatingMovies = ({...props}: Movies) => {
	const {id, title, year, country, description} = props;
	const [showModal, setShowModal] = useState(false);
	// const [titleMovie, setTitleMovie] = useState(title);
	// const [yearMovie, setYearMovie] = useState(year);
	// const [countryMovie, setCountryMovie] = useState(country);
	const [scoreMovie, setScoreMovie] = useState<number>(0);
	// const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	// const [descriptionMovie, setDescriptionMovie] = useState(description);
	const [movieData, setMovieData] = useState({title, year, country, description});
	const {register, handleSubmit} = useForm<Movies>();

	const handleShowModal = () => {
		setShowModal(true);
	};
	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleRatingClick = (value: number) => {
		setScoreMovie(value);
	};

	// const handleCategoryClick = (category: string) => {
	// 	if (selectedCategories.includes(category)) {
	// 		setSelectedCategories((prevCategories) => prevCategories.filter((c) => c !== category));
	// 	} else {
	// 		setSelectedCategories((prevCategories) => [...prevCategories, category]);
	// 	}
	// };

	useEffect(() => {
		if (showModal) {
			const url = id;
			getMovieDetails(url).then((movie) => {
				console.log(movie);
				if (movie) {
					setMovieData({
						title: movie.title,
						year: movie.year,
						country: movie.country,
						description: movie.description,
					});
				} else {
					console.log('Movie not found');
				}
				return movie;
			});
		}
	}, [showModal, id]);

	const handleAcceptClick = handleSubmit((data: any) => {
		const updateData = {...data};
		console.log(updateData);
		updateMovie(`${urlMovies}/${id}`, updateData);
		setShowModal(false)
		// try {
		// 	const movieData = new FormData();
		// 	movieData.append('title', titleMovie);
		// 	movieData.append('year', yearMovie.toString());
		// 	movieData.append('country', countryMovie);
		// 	movieData.append('score', scoreMovie.toString());
		// 	movieData.append('genres', selectedCategories.join(','));
		// 	const response = await updateMovie(`${urlMovies}/${id}`, movieData);
		// 	console.log(movieData);

		// 	console.log('Movie updated successfully', response);

		// 	setTitleMovie(movieData.title);
		// 	setYearMovie(movieData.year);
		// 	setCountryMovie(movieData.country);
		// 	setScoreMovie(movieData.score);
		// 	setSelectedCategories([]);
		// 	setShowModal(false);
		// 	setDescriptionMovie(movieData.description);
		// } catch (error) {
		// 	console.error('Error updating movie:', error);
		// }
	});

	return (
		<>
			<button onClick={handleShowModal} className={styles.button}>
				Modify
			</button>
			{showModal && (
				<div className={styles.modal__show}>
					<div className={styles.modal__content}>
						<div className={styles.header}>
							<div>Modify Movie</div>
						</div>
						<form onSubmit={handleAcceptClick}>
							<div className={styles.body}>
								<div>
									<label>Title:</label>
									<input {...register('title')} type="text" defaultValue={title} onChange={(e) => setMovieData({...movieData, title: e.target.value})} />
								</div>
								<br />
								<div>
									<label>Year:</label>
									<input {...register('year')} type="number" defaultValue={year} onChange={(e) => setMovieData({...movieData, year: parseInt(e.target.value, 10)})} />
								</div>
								<br />
								<div>
									<label>Country:</label>
									<input {...register('country')} type="text" defaultValue={country} onChange={(e) => setMovieData({...movieData, country: e.target.value})} />
								</div>
								<br />
								{/* <div>
									<label>Rating:</label>
									{[1, 2, 3, 4, 5].map((value) => (
										<FontAwesomeIcon
											key={value}
											icon={faStar}
											style={{
												color: score >= value ? '#e4e70d' : '#ccc',
												cursor: 'pointer',
											}}
											{...register('score')}
											onClick={() => handleRatingClick(value)}
										/>
									))}
								</div> */}
								<br />
								{/* <div
									style={{
										display: 'grid',
										gridTemplateColumns: 'repeat(3, 1fr)',
										gap: '10px',
									}}>
									<label>Genres:</label>
									{['Action', 'Comedy', 'Terror', 'Adventure', 'Sci-Fi', 'Documentary', 'Drama', 'Fantasy', 'Musical', 'Thriller'].map((category) => (
										<div key={category}>
											<input {...register('genres')} type="checkbox" checked={selectedCategories.includes(category)} onChange={() => handleCategoryClick(category)} />
											{category}
										</div>
									))}
								</div> */}
								<div>
									<label>Description</label>
									<textarea {...register('description')} onChange={(e) => setMovieData({...movieData, description: e.target.value})} />
								</div>
							</div>

							<div className={styles.footer}>
								<button className={styles.button} onClick={handleCloseModal}>
									Close
								</button>
								<button className={styles.button} type="submit">
									Accept
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);
};
