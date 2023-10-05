import {getMovieDetails} from '@/services/movies.services';
import styles from './movie.module.css';
import {Metadata} from 'next';
import {Movies} from '@/types/movies';

type Props = {
	params: {
		movieID: string;
	};
};

export async function generateMetadata(props: Props): Promise<Metadata> {
	const {params} = props;
	const movieInfo = await getMovieDetails(params.movieID);
	return {
		title: `${movieInfo.title} Page`,
		description: movieInfo.title,
	};
}

const Movie = async (props: Props) => {
	const {params} = props;
	const movieInfo: Movies = await getMovieDetails(params.movieID);

	return (
		<div className={styles.information}>
			<img src={movieInfo.imageUrl} alt={movieInfo.title} />
			<h1>Name: {movieInfo.title}</h1>
			<h2>Year: {movieInfo.year}</h2>
			<h2>Country: {movieInfo.country}</h2>
			<p>Description: {movieInfo.description}</p>
		</div>
	);
};

export default Movie;
