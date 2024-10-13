import { useState } from 'react';
import { Button } from 'antd';
import axios from 'axios';
import './MovieDataBase.css';

function MovieDataBase() {
  const [movies, setMovies] = useState([]);

  const [query, setQuery] = useState('');

  async function searchMovies(event) {
    event.preventDefault();

    const API_KEY = 'f7455edce462776797bf6c8e78f2d653';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      console.log('Error fecthing data base');
    }
  }

  return (
    <div className="app">
      <h1>Movie Database</h1>
      <form>
        <input
          type="text"
          className="input"
          placeholder="Search for a movie...."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <Button type="primary" onClick={searchMovies}>
          Search
        </Button>
      </form>

      <div className="movie-list">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview.substring(0, 150)}...</p>
            <p>
              <strong>Release Date: {movie.release_date}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieDataBase;
