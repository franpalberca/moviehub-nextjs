import { Movies } from "@/types/movies"

const API_MOVIES= process.env.API_MOVIES

export const getAllMovies = async () => {
    const response = await fetch(`${API_MOVIES}`)
    const {results} = await response.json()
    return results as Movies[]
}