import { useEffect, useState } from "react";
import Moviecard from "../components/MovieCard.js";
import NavBar from "../components/NavBar";
import Movie from "./Movie";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then((movies) => setMovies(movies))
      .catch((err) => console.log("response error"));
  }, []);

  const moviesList = movies.map((movie) => {
    return <Moviecard key={movie.id} title={movie} />;
  });
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Info goes here! */}
        <h1>Home Page</h1>
        <Movie movies={movies} />
      </main>
    </>
  );
}

export default Home;
