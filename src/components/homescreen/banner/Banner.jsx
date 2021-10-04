import React, { useEffect, useState } from 'react'
import "./banner.scss"
import axios from '../../../axios'
import requests from '../../../api_config/request'
const Banner = () => {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetch_movie_banner(){
            const request = await axios.get(requests.fetchTrending)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ])
            return request;
        }
        fetch_movie_banner();
    },[])
    const truncate = (string , n) => {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string
    }
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition : "center center"
            }}>

            <div className="banner__contents">
                <h1 className="banner__tittle">
                    {movie?.original_title || movie?.title || movie?.original_name}
                    </h1>
                <div className="banner__buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    {truncate(movie?.overview, 150)}
                    
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
