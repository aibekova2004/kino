import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {API_KEY} from "../API/api";
import MovieCard from "../components/MovieCard";

const Search = () => {
    const [film,setFilm] = useState([])
    const {movieName} = useParams()

    const getFilm = (key) => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`)
            .then((res) => {
                setFilm(res.data.results)
                console.log(res.data.results)
            })
    }
    useEffect(() => {
        getFilm(API_KEY)
    },[film])

    console.log(film)

    return (
        <div id="search">
            <div className="container">
                <div className="search">
                    {
                        film.map((el) => {
                            return (
                                <div className="search--card">
                                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`} alt=""/>
                                    <h2>{el.title}</h2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;

// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher