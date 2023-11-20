import {useState,useEffect} from "react";
import './App.css';
import searchIcon from './search.svg';
import MovieCard from "./MovieCard";

//f586af0b

const API_URL = "https://www.omdbapi.com?apikey=f586af0b";

const movie1 = {
        "Title": "Italian Spiderman",
        "Year": "2007",
        "imdbID": "tt2705436",
        "Type": "movie",
        "Poster": "N/A"
    }

const App = () =>{
    const [movies, setMovies] = useState();
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async(title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);  
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() =>{
        searchMovies('Avengers');
    }, []);

    return(
        <div className="app">
            <h1>MoviesSite</h1>

            <div className="search">
                <input placeholder="Search for movies" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} type="text"/>
                <img src={searchIcon} alt="search" onClick={()=>searchMovies(searchTerm)} />
            </div>
        {

            movies?.length > 0
            ? (
                <div className="container">
                    {
                        movies.map((movie)=>(
                            <MovieCard movie = {movie}/>
                        ))
                        }
                </div>
            ): (
                <div className="empty">
                <h2>No movies found</h2>   
            </div>
            )
        }
            

        </div>
    );
}

export default App;