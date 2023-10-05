'use client';
import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import styles from './modalCreationMovies.module.css';
import {createMovie} from '@/services/movies.services';
import {useUser} from '@auth0/nextjs-auth0/client'
import { useRouter } from 'next/navigation';

const urlMovies = process.env.NEXT_PUBLIC_API_MOVIES;

export const ModalCreationMovies = () => {
	const [showModal, setShowModal] = useState(false);
	const [title, setTitle] = useState('');
	const [year, setYear] = useState('');
	const [country, setCountry] = useState('');
	const [score, setScore] = useState<number>(0);
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [descriptionMovie, setDescriptionMovie] = useState('');

	const {user} = useUser()
	const router = useRouter()
	
	const handleShowModal = () => {
		setShowModal(true);
	};
	const handleCloseModal = () => {
		setShowModal(false);
	};

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

			const response = await createMovie(`${urlMovies}/${user?.email}`, movieData);
			console.log('Movie created successfully', response);
			setTitle('');
			setYear('');
			setCountry('');
			setScore(0);
			setSelectedCategories([]);
			setSelectedFile(null);
			setShowModal(false);
		} catch (error) {
			console.error('Error al crear la película:', error);
		}
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0] || null;
		setSelectedFile(file);
	};

	return (
		<>
			<button onClick={handleShowModal} className={styles.button}>
				+
			</button>
			{showModal && (
				<div className={styles.modal__show}>
					<div className={styles.modal__content}>
						<div className={styles.header}>
							<div>Create a New Movie</div>
						</div>
						<div className={styles.body}>
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
									<label>Description</label>
									<textarea onChange={(e) => setDescriptionMovie(e.target.value)} />
								</div>
							<div>
								<label>Upload Image:</label>
								<input type="file" accept="image/*" onChange={handleFileChange} />
							</div>
						</div>
						<div className={styles.footer}>
							<button className={styles.button} onClick={handleCloseModal}>
								Close
							</button>
							<button className={styles.button} onClick={handleAcceptClick}>
								Accept
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
