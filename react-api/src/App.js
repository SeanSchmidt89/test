import React, { useState } from "react";
import MovieList from "./comps/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  async function starWarsMovies() {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch("https://swapi.dev/api/fil");
      
      if(!response.ok){
        throw new Error('Error loading the content')
      }
      
      const data = await response.json();

      const newList = data.results.map((result) => {
        return {
          id: result.episode_id,
          title: result.title,
          openingText: result.opening_crawl,
          director: result.director,
          release_date: result.release_date,
        };
      });
      setMovies(newList);
    } catch (error) {
      console.log(error.message)
      setError(error.message);
    }
    setIsLoading(false);
  }

  return (
    <div className="App">
      <h1>hi</h1>
      <button onClick={starWarsMovies}>movies</button>
      {movies.length > 0 && <MovieList movies={movies} />}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
