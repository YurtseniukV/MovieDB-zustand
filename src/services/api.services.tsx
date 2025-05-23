import axios from 'axios';
export const axiosInstance = axios.create({
baseURL:'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`,
        Accept: 'application/json',
    },
})