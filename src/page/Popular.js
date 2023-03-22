import React,{useState,useEffect} from 'react';
import axios from "axios";
import {API_KEY} from "../API/api";

const Popular = () => {
   const [popular,setPopular] = useState([])

    const getPopular = (key) => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
            .then((res) => {
                console.log(res.data.results)
                setPopular(res.data.results)
            })
    }
useEffect(() => {
    getPopular(API_KEY)
},[popular])
    return (
        <div id="popular">
            <h1>Popular</h1>
            <div className="container">
                <div className="popular">
                    {
                        popular.map((el) => {
                            return (
                                <div className="popular--card">
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

export default Popular;