import { useEffect } from "react";
import { useMovieStore } from "../store/useMovieStore";
import {Link} from "react-router-dom";
import styled from "styled-components";

const MovieListContainer = styled.div`
    padding: 30px;
    background-color: #f8f9fa;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

const MovieItemContainer = styled.div`
    background-color: #fff;
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
    position: relative;

    &:hover {
        background: rgba(114, 255, 81, 0.18);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 400px;
    width: 100%;
`;

const MovieTitle = styled.h3`
    font-size: 1.2rem;
    color: #343a40;
    margin-bottom: 10px;
    font-weight: 600;
    line-height: 1.2;
`;

const MovieDescription = styled.p`
    font-size: 0.7rem;
    color: #495057;
    margin: 15px 0;
    line-height: 1.4;
    max-height: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
  
`;

const MovieLink = styled(Link)`
    color: #007bff;
    text-decoration: none;
    font-weight: 500;
    margin-top: 10px;
    font-size: 1rem;
    &:hover {
        text-decoration: underline;
        color: #044494;
    }
`;
const RatingBadge = styled.div`
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: rgb(237, 228, 12);
    color: white;
    padding: 5px 10px;
    font-size: 1rem;
    border-radius: 12px;
    font-weight: bold;
`;


const MovieListComponent = () => {
    const { movies, fetchMovies } = useMovieStore();

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    return (
        <MovieListContainer>
            <div className="movie-list">
                {movies.map((movie) => (
                    <MovieItemContainer key={movie.id}>
                        <RatingBadge>{movie.vote_average}</RatingBadge>
                        <MovieTitle>{movie.title}</MovieTitle>
                        <MovieDescription>{movie.overview}</MovieDescription>
                        <MovieLink to={`/movie/${movie.id}`}>Show details</MovieLink>
                    </MovieItemContainer>
                ))}
            </div>
        </MovieListContainer>
    );
};

export default MovieListComponent;