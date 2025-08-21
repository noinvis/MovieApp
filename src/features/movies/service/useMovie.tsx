import { useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"

interface IParams {
  page?: number | string
  without_genres?: string,
  with_genres?: string,
  sort_by?: string,
  release_date_gte?: string,
  release_date_lte?: string
}

export const useMovie = () => {
    const getMovies = (params?: IParams) => useQuery({
        queryKey: ["movie-key", params],
        queryFn: ()=> api.get("/discover/movie", {params: {...params, without_genres: "10749, 99, 27" }}).then(res => res.data)
    })

    const movieId = (id?: number) => useQuery({
        queryKey: ["movie", id],
        queryFn: () => api.get(`/movie/${id}`).then(res => res.data),
    });

    const getMovieItems = (id: number, path: string) => 
        useQuery({
            queryKey: ["movie-key", id, path],
            queryFn: () => api.get(`/movie/${id}/${path}`).then((res) => res.data)
        })

    return {getMovies, movieId, getMovieItems}
}