import styles from './card.module.css'
// import {Button} from 'react-bootstrap';
// import {ModalUpdatingMovies} from '../modal/ModalUpdatingMovies';

export const Card = ({...props}) => {
	const handleDeleteClick = async () => {
		try {
			await props.onDelete();
		} catch (error) {
			console.error('Error deleting movie:', error);
		}
	};

	console.log(props.id);
	return (
			<div className="styles.card">
				<div className="styles.card__header">
					<img className="styles.card__header__img" src={props.imageUrl} alt={props.title} />
				</div>
				<div className="styles.card__main">
					<h2 className="styles.card__main-titleMovie">{props.title}</h2>
					<h4 className="styles.card__main-country">Country: {props.country}</h4>
					<h4 className="styles.card__main-country">Year: {props.year}</h4>
					<h5 className="styles.card__main-scoreMovie">Score: {props.score}/5</h5>
					<div className="styles.card__main-div">
						<h6 className="styles.card__main-div-genreMovie">
							Genres:
							<ul className="styles.card__main-div-ul">
								<li className="styles.card__main-div-ul-genresList">{props.genresArray.join(', ')}</li>
							</ul>
						</h6>
					</div>
				</div>
				<div className="styles.card__footer">
					<button onClick={handleDeleteClick}>Delete</button>
					{/* <ModalUpdatingMovies allTitle={props.title} id={props.id} /> */}
				</div>
			</div>
	);
};
