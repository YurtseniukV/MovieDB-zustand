import {IMovie} from "../models/IMovie.ts";

type MovieStore = {
    movies: IMovie[];
    cart: IMovie[];
    setMovies: (movies: IMovie[]) => void;
    addToCart: (movie: IMovie) => void;
    removeFromCart: (id: number) => void;
}

