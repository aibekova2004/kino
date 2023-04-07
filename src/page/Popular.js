import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../API/api";
import {Link} from "react-router-dom";
import {LanguageContext} from "../context";


const Popular = () => {
   const [popular,setPopular] = useState([])
    const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    console.log(language)
    const array = [1,2,3,4,5,6,7,8,9,10]
const [active,setActive] = useState(1)
    const getPopular = (key) => {
       window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${active}`)
            .then((res) => {
                console.log(res.data.results)
                setPopular(res.data.results)
            })
    }
useEffect(() => {
    getPopular(API_KEY)
},[active,language])
    return (
        <div id="popular" style={{
            background: dark === true ? "black" : "white"
        }}>
            <h1 style={{
                color: dark === true ? "white" : "black"
            }}>Popular</h1>
            <div className="container">
                <div className="popular">
                    {
                        popular.map((el) => {
                            return (
                                <div className="popular--card" style={{
                                    background: dark === true ? "white" : "black"
                                }}>
                                    <Link to={`/movie/movie_details/${el.id}`}>
                                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`} alt=""/>
                                    </Link>

                                    <h2 style={{
                                        color: dark === true ? "black" : "white"
                                    }}>{el.title}</h2>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="top--popular">
                    <button onClick={() => setActive(active + 1)}>Next</button>
                    <h1>page: {active}</h1>
                    <button onClick={() => setActive(active - 1)}>Add</button>
                    {/*{*/}
                    {/*    array.map((btn) => (*/}
                    {/*        <button onClick={() => setActive(btn)}>{btn}</button>*/}
                    {/*    ))*/}
                    {/*}*/}
                </div>
            </div>
        </div>
    );
};

export default Popular;