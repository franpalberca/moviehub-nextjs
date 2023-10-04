import { getMovieDetails } from '@/services/movies.services'
import styles from './movie.module.css'
import { Metadata } from "next"
import { Movies } from '@/types/movies'

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const movie = await getMovieDetails(params.id)
    return {
        title: `${movie.title} Page`,
        description: movie.title
    }
}

const Movie = async ({params}: Props) => {
  const movie: Movies = await getMovieDetails(params.id)
  return (
    <div className={styles.information}>
        <img src={movie.imageUrl} alt={movie.title}/>
        <h1>Name: {movie.title}</h1>
        <h2>Year: {movie.year}</h2>
        <h2>Country: {movie.country}</h2>
    </div>
  )
}

export default Movie