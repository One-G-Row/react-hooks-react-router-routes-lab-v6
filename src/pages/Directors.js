import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((response) => response.json())
      .then((directors) => setDirectors(directors))
      .catch((err) => console.log(err));
  }, []);

  const movieDirectors = directors.map((director) => (
    <article>
      <h2>{director.name}</h2>
      <ul>{director.movies}</ul>
    </article>
  ));

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
        <h1>Directors Page</h1>
      </header>
      <main>
        {/* Director info here! */}
        {movieDirectors}
      </main>
    </>
  );
}

export default Directors;
