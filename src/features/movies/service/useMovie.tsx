import { useMutation, useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"

interface IParams {
    page?: number
}

export const useMovie = () => {
    const getMovies = (params?: IParams) => useQuery({
        queryKey: ["movie-key", params],
        queryFn: ()=> api.get("/discover/movie", {params: {...params, without_genres: "10749, 99, 27" }}).then(res => res.data)
    })

    const createMovie = useMutation({
        mutationFn: (data: any)=> api.post("/discover/movie", data)
    })

    const movieId = (id?: number) => useQuery({
        queryKey: ["movie", id],
        queryFn: () => api.get(`/movie/${id}`).then(res => res.data),
    });

    return {getMovies, createMovie, movieId}
}