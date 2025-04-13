import {IMovie} from "../models/IMovie.ts";
import {IMovieResponse} from "../models/IMovieResponse";
import {create} from "zustand";
import {axiosInstance} from "../services/api.services"


interface MovieStore {
    movies: IMovie[];
    setMovies: (movies: IMovie[]) => void;
    movieDetail: IMovie | null;
    setMovieDetail: (movieDetail: IMovie) => void;
    fetchMovies: () => Promise<void>;
    fetchMovieDetail: (id: number) => Promise<void>;
}

export const useMovieStore = create<MovieStore>((set) => ({
    movies: [],
    movieDetail: null,
    setMovies: (movies) => set(() => ({movies})),
    setMovieDetail: (movieDetail) => set(() => ({movieDetail})),

    fetchMovies: async () => {
        try {
            const response = await axiosInstance.get<IMovieResponse>('discover/movie');
            console.log(response)
            set({movies: response.data.results});
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    },

    fetchMovieDetail: async (id) => {
        try {
            const response = await axiosInstance.get<IMovie>(`/movie/${id}`);
            set({movieDetail: response.data});
        } catch (error) {
            console.error('Error fetching movie details:', error);
        }
    },
}));