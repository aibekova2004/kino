import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";
import {Link} from "react-router-dom";
import Logo from "../../img/movie.jpg"
import {LanguageContext} from "../../context";

const MovieVideo = ({personId}) => {
    const [movieVideo,setMovieVideo] = useState([])
    const {dark} = useContext(LanguageContext)
    const video  = (key) => {
        axios(`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${key}&language=en-US`)
            .then((res) => {
                setMovieVideo(res.data.cast)
            })
    }

    useEffect(() => {
        video(API_KEY)
    }, [])
    console.log(movieVideo)
    return (
        <div id="movieVideo">
            <div className="container">
                <div className="movieVideo">
                    {
                        movieVideo.map((el) => {
                            return (
                                <div className="movieVideo--card">
                                  <Link to={`/movie/movie_details/${personId}`}>
                                      {el.poster_path ? <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} width={140} alt="img"/>
                                         : <img src={Logo} width={150} alt="img"/>}
                                  </Link>
                                    <h4 style={{
                                        color: dark === true ? "white" : "black"
                                    }}>{el.title}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default MovieVideo;