import styles from './card.module.css'
// import {ModalUpdatingMovies} from '../modal/ModalUpdatingMovies';

export const Card = ({...props}) => {
	const handleDeleteClick = async () => {
		try {
			await props.onDelete();
		} catch (error) {
			console.error('Error deleting movie:', error);
		}
	};

	return (
			<div className={styles.card}>
				<div className={styles.card__header}>
					<img className={styles.card__header__img} src={props.imageUrl} alt={props.title} />
				</div>
				<div className={styles.card__main}>
					<h2 className={styles.card__main__titleMovie}>{props.title}</h2>
					<h4 className={styles.card__main__country}>Country: {props.country}</h4>
					<h4 className={styles.card__main__year}>Year: {props.year}</h4>
					<h5 className={styles.card__main__scoreMovie}>Score: {props.score}/5</h5>
					<div className={styles.card__main__div}>
						<h5 className={styles.card__main__div__genreMovie}>
							Genres:
							<ul className={styles.card__main__div__ul}>
								<li className={styles.card__main__div__ul__genresList}>{props.genresArray.join(', ')}</li>
							</ul>
						</h5>
					</div>
                    </div>
				<div className={styles.card__footer}>
					<button className={styles.button} onClick={handleDeleteClick}>Delete</button>
					{/* <ModalUpdatingMovies allTitle={props.title} id={props.id} /> */}
				</div>
			</div>
	);
};
