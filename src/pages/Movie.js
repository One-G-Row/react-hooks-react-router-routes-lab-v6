import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie({ movies }) {
  const [movieData, setMovieData] = useState({});
  const params = useParams();
  const movieId = params.id;

  console.log(movieId);
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then((response) => response.json())
      .then((data) => setMovieData(data))
      .catch((err) => console.log(err));
  }, [movieId]);

  if (!movieData.title) {
    return <h1>Loading...</h1>;
  }
  const moviesMap = movies.map((movie) =>
    (<h1>{movie.title}</h1>)(<p>{movie.time}</p>)(<span>{movie.genres}</span>)
  );

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        {moviesMap}
        <h1>{movieData}</h1>
      </main>
    </>
  );
}

export default Movie;
