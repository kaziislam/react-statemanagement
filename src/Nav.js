import React, {useContext} from "react";
import { MovieContext } from "./MovieContext";
import './Nav.css';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <nav className="nav">
        <div className="left">
          <h3>John Doe</h3>
        </div>
        <div className="right">
          <p>List of Movies: {movies.length}</p>
        </div>
      </nav>
    );
}

export default Nav;