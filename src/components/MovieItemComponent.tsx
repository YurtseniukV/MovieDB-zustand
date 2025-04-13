import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useMovieStore} from '../store/useMovieStore';
import styled from "styled-components";

const MovieDetailContainer = styled.div`
    padding: 20px;
    background-color: #f4f4f4;
    width: 70%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;

`;

const MovieTitle = styled.h2`
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 20px;
`;

const MovieOverview = styled.p`
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
`;
const MovieImg = styled.img`
    width: 40%;
    border-radius: 10%;

`
const MovieInfo = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const MovieDetail: React.FC = () => {
    const {movieDetail, fetchMovieDetail} = useMovieStore();
    const {id} = useParams<{ id: string }>();

    useEffect(() => {
        if (id) {
            fetchMovieDetail(Number(id));
        }
    }, [id, fetchMovieDetail]);

    if (!movieDetail) {
        return <div>Loading...</div>;
    }

    return (
        <MovieDetailContainer> <MovieImg src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
                                         alt={movieDetail.title}>
        </MovieImg>
            <MovieInfo>
                <MovieTitle>{movieDetail.title}</MovieTitle>
                <MovieOverview>{movieDetail.overview}
                </MovieOverview>
                <h3>Release date : <i>{movieDetail.release_date}</i></h3>
            </MovieInfo>

        </MovieDetailContainer>
    );
};

export default MovieDetail;
