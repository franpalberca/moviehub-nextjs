import {getMovieDetails} from '@/services/movies.services';
import styles from './movie.module.css';
import {Metadata} from 'next';
import {Movies} from '@/types/movies';
import Button from '@/components/button/button';

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
		<>
		<Button />
		<div className={styles.box}>
			<img className={styles.image} src={movieInfo.imageUrl} alt={movieInfo.title} />
			<div className={styles.info}>
			<h1 className={styles.name}>Name: {movieInfo.title}</h1>
			<h2 className={styles.year}>Year: {movieInfo.year}</h2>
			<h2 className={styles.country}>Country: {movieInfo.country}</h2>
			<p className={styles.description}>Description: {movieInfo.description}</p>
			</div>
		</div>
		</>
	);
};

export default Movie;
