import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

api.interceptors.request.use((config) => {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmEwZjY5YmQwZDg0NjAxODVhOWU1NmEyMzA1MzJmZCIsIm5iZiI6MTc1NTE1Njg4Ny4zNzEsInN1YiI6IjY4OWQ5MTk3YWZjNjhhZTM1NDI2OTAwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._zt_XdshOkqwOk4p3bJdQYLwvH7K_SINeX7yVTv0o8o"

    config.headers.Authorization = `Bearer ${token}`

    return config
})