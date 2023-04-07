import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../API/api";
import {useParams} from "react-router-dom";
import MovieVideo from "../components/MovieVideo";
import {LanguageContext} from "../context";

const ActorDetails = () => {
    const [actorDetails, setActorDetails] = useState({})
    const [bio,setBio] = useState(300)
    const {personId} = useParams()
    const {dark} = useContext(LanguageContext)
    const getActorDetails = (key) => {
        axios(`https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=en-US`)
            .then((res) => {
                setActorDetails(res.data)
            })
    }

    const more = (text) => {
        if (bio === 300) {
            setBio(text.length)
        } else {
            setBio(300)
        }
    }

    useEffect(() => {
        getActorDetails(API_KEY)
    }, [])
    console.log(actorDetails)
    const {profile_path, name, place_of_birth, biography, birthday, also_known_as} = actorDetails
    return (
        <div id="actorDetails" style={{
            background: dark === true ? "black" : "white"
        }}>
            <div className="container">
                <div className="actorDetails">
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt=""/>
                    <div className="actorDetails--info">
                        <h1 style={{
                            color: dark === true ? "white" : "black"
                        }}>{name}</h1>
                        <h3 style={{
                            color: dark === true ? "white" : "black"
                        }}>Дата рождения: {birthday}</h3>
                        <h3 style={{
                            color: dark === true ? "white" : "black"
                        }}>Место рождения: {place_of_birth}</h3>
                        <h4 style={{
                            color: dark === true ? "white" : "black"
                        }}>Также известность как:</h4>
                        <div className="actorDetails--info__about">
                            {
                                also_known_as?.map((el) => {
                                    return (
                                        <p style={{
                                            fontSize: "15px",
                                            margin: "5px 20px 30px 0",
                                            color: dark === true ? "white" : "black"
                                        }}>{el}</p>
                                    )
                                })
                            }
                        </div>
                        <h5 style={{
                             color: dark === true ? "white" : "black"
                        }}>Биография</h5>
                        <p style={{
                             color: dark === true ? "white" : "black"
                        }}>{biography?.slice(0,bio)}</p>
                        <h6 onClick={() => {
                            more(biography)
                        }
                        }>{bio === 300 ? "Читать еще" : "Закрыть"}</h6>
                        <MovieVideo personId ={personId}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActorDetails;