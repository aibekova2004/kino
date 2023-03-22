import React,{useState,useEffect} from 'react';
import axios from "axios"
import {API__KEY} from "../API/api";


const TopRated = () => {
    const [topRated,setTopRated] = useState([])

    const getTopRated = () => {
        axios (`https://api.themoviedb.org/3/movie/top_rated?api_key=${API__KEY}&language=en-US&page=1`)
            .then((res) => {
                console.log(res.data.results)
                setTopRated(res.data.results)
            })
    }
    useEffect(() => {
        getTopRated(API__KEY)
    },[topRated])
    return (
        <div id="top_rated">
            <h1>TopRated</h1>
            <div className="container">
                <div className="top_rated">
                    {
                        topRated.map((el) => {
                            return (
                                <div className="top_rated--card">
                                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`} alt=""/>
                                    <h2>{el.original_title}</h2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default TopRated;