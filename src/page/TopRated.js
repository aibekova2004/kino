import React, {useState, useEffect, useContext} from 'react';
import axios from "axios"
import {API_KEY} from "../API/api";
import {Link} from "react-router-dom";
import {LanguageContext} from "../context";


const TopRated = () => {
    const [topRated,setTopRated] = useState([])
    const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    console.log(language)
    const [active,setActive] = useState(1)
    const array = [1,2,3,4,5,6,7,8,10]
    const getTopRated = (key) => {
        window.scroll(0,0)
        axios (`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${active}`)
            .then((res) => {
                console.log(res.data.results)
                setTopRated(res.data.results)
            })
    }
    useEffect(() => {
        getTopRated(API_KEY)
    },[language])
    return (
        <div id="top_rated" style={{
            background: dark === true ? "black" : "white"
        }}>
            <h1 style={{
                color: dark === true ? "white" : "black"
            }}>TopRated</h1>
            <div className="container">
                <div className="top_rated">
                    {
                        topRated.map((el) => {
                            return (
                                <div className="top_rated--card" style={{
                                    background: dark === true ? "white" : "black"
                                }}>
                                    <Link to={`/movie/movie_details/${el.id}`}>
                                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`} alt="img"/>
                                    </Link>
                                    <h2 style={{
                                        color: dark === true ? "black" : "white"
                                    }}>{el.title}</h2>
                                </div>
                            )
                        })
                    }
                </div>
               <div className="top--pages">
                   {/*{*/}
                   {/*    array.map((btn) => (*/}
                   {/*        <button onClick={() => setActive(btn)}>{btn}</button>*/}
                   {/*    ))*/}
                   {/*}*/}
                   <button onClick={() => setActive(active - 1)}>Delete</button>
                   <h3 style={{
                       textAlign: "center",
                       color: "white"
                   }}>Page:{active}{active ? active === -0 : setActive(1)}</h3>
                   <button onClick={() => setActive(active + 1)}>Next</button>
               </div>
            </div>
        </div>
    );
};

export default TopRated;
