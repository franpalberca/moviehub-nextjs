import { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {ModalCreationMoviesStyles} from './modalCreationMovies.styles';
import {createMovie} from '../../api';
import {useAuth0} from '@auth0/auth0-react'
import { useUserContext } from '../../context/userContext';

const urlMovies = import.meta.env.VITE_API_MOVIES;

export const ModalCreationMovies = ({getToken}: {getToken: () => Promise<string>}) => {
	const [show, setShow] = useState(false);
	const [title, setTitle] = useState('');
	const [year, setYear] = useState('');
	const [country, setCountry] = useState('');
	const [score, setScore] = useState<number>(0);
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleRatingClick = (value: number) => {
		setScore(value);
	};

	const handleCategoryClick = (category: string) => {
		if (selectedCategories.includes(category)) {
			setSelectedCategories((prevCategories) => prevCategories.filter((c) => c !== category));
		} else {
			setSelectedCategories((prevCategories) => [...prevCategories, category]);
		}
	};

	const userData = useUserContext();


	const handleAcceptClick = async () => {
		try {
			const movieData = new FormData();
			movieData.append('title', title);
			movieData.append('year', year);
			movieData.append('country', country);
			movieData.append('score', score.toString());
			movieData.append('genres', selectedCategories.join(','));
			if (selectedFile) {
				movieData.append('image', selectedFile);
			}

			const response = await createMovie(`${urlMovies}/${userData?.id}`, movieData, getToken);

			console.log('Movie created successfully', response);

			setTitle('');
			setYear('');
			setCountry('');
			setScore(0);
			setSelectedCategories([]);
			setSelectedFile(null);
			setShow(false);
		} catch (error) {
			console.error('Error al crear la película:', error);
		}
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0] || null;
		setSelectedFile(file);
	};

	return (
		<ModalCreationMoviesStyles>
			<Button variant="primary" onClick={handleShow} className="addButton">
				+
			</Button>
			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
				}}>
				<Modal className="position-absolute" show={show} onHide={handleClose}>
					<Modal.Header>
						<Modal.Title>Create a New Movie</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div>
							<label>Title:</label>
							<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
						</div>
						<br />
						<div>
							<label>Year:</label>
							<input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
						</div>
						<br />
						<div>
							<label>Country:</label>
							<input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
						</div>
						<br />
						<div>
							<label>Rating:</label>
							{[1, 2, 3, 4, 5].map((value) => (
								<FontAwesomeIcon
									key={value}
									icon={faStar}
									style={{
										color: score >= value ? '#e4e70d' : '#ccc',
										cursor: 'pointer',
									}}
									onClick={() => handleRatingClick(value)}
								/>
							))}
						</div>
						<br />
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(3, 1fr)',
								gap: '10px',
							}}>
							<label>Genres:</label>
							{['Action', 'Comedy', 'Terror', 'Adventure', 'Sci-Fi', 'Documentary', 'Drama', 'Fantasy', 'Musical', 'Thriller'].map((category) => (
								<div key={category}>
									<input type="checkbox" checked={selectedCategories.includes(category)} onChange={() => handleCategoryClick(category)} />
									{category}
								</div>
							))}
						</div>
						<div>
							<label>Upload Image:</label>
							<input type="file" accept="image/*" onChange={handleFileChange} />
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={handleAcceptClick}>
							Accept
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</ModalCreationMoviesStyles>
	);
};
