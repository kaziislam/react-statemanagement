import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {

    const [movies, setMovies] = useState([
        {
            "name": "Thomas",
            "price": "$109",
            "id": "1",
        },
        {
            "name": "Isaac",
            "price": "$17.95",
            "id": "2",
        },
        {
            "name": "Stephen",
            "price": "$34.99",
            "id": "3",
        },
        {
            "name": "Chelsea",
            "price": "$126.95",
            "id": "4",
        },
        {
            "name": "Kyle",
            "price": "$190.99",
            "id": "5",
        },
        {
            "name": "Ava",
            "price": "$174.99",
            "id": "6",
        },
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}