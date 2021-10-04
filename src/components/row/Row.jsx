import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import "./row.scss"
const Row = ({title, fetchUrl, isLarge = false}) => {

const [movies, setMovie] = useState([])
const base_img_url = 'https://image.tmdb.org/t/p/original/'
useEffect(() => {
    async function fetch_movie_data(){
        const request = await axios.get(fetchUrl)
        setMovie(request.data.results)
        return request
    }
    fetch_movie_data()
},[fetchUrl])
    return (
        <div className="row">
            <h1>{`${movies.length ? title : ''}`}</h1>
            <div className="poster__container">
            {movies.map(movie => (
                <img 
                className={`row__poster ${isLarge && 'row__poster__large'}`} 
                key={movie.id} src={`${base_img_url}${isLarge ? movie?.poster_path : movie?.backdrop_path}`} 
                alt={movie?.title || movie?.original_title} />
            ))}
            </div>
        </div>
    )
}

export default Row
