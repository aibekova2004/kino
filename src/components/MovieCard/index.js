import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {LanguageContext} from "../../context";

const MovieCard = ({el,id}) => {
    const {dark} = useContext(LanguageContext)
    return (
        <div key={el.id} className="popular--card">
            <Link to={`/movie/movie_details/${el.id}`}>
                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`} alt="img"/>
            </Link>
            <h2>{el}</h2>
        </div>
    );
};


export default MovieCard;