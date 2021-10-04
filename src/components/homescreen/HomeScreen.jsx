import React from 'react'
import { NavBar,Banner,Row } from '..'
import requests from '../../api_config/request'
import './homescreen.scss'

const HomeScreen = () => {
    return (
        <div className="homescreen">
    <NavBar/>
    <Banner />
    <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginal} isLarge={true}/> 
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/> 
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/> 
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/> 
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/> 
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/> 

        </div>
    )
}

export default HomeScreen
