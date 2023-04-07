import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";
import logo from "../../img/user.png"
import Slider from "react-slick";
import {Link} from "react-router-dom";
import {LanguageContext} from "../../context";


const Actors = ({movieId}) => {

    const [actors,setActors] = useState([])
    const {dark} = useContext(LanguageContext)
const getActors = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`)
            .then((res) => {
                setActors(res.data.cast)
            })
}
useEffect(() => {
    getActors(API_KEY)
},[])
    console.log(actors)
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div id="actors" style={{
            background: dark === true ? "black" : "white"
        }}>
            <div className="container">
                <h1>В главных ролях</h1>
                <div className="actors">
                    <Slider {...settings}>
                        {
                            actors.map((el) => {
                                return (
                                    <div className="actors--card">
                                        <Link to={`/person/person_details/${el.id}`}>
                                        {el.profile_path ? <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} alt="img"/>
                                            : <img src={logo} width="180px" alt="img"/>}
                                        </Link>
                                        <h4>{el.name}</h4>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Actors;

