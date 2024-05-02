import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((response) => response.json())
      .then((actors) => setActors(actors))
      .catch((err) => console.log(err));
  }, []);

  const mapActors = actors.map((actor) => (
    <article>
      <h2>{actor.name}</h2>
      <ul>
        <li>{actor.movies}</li>
      </ul>
    </article>
  ));

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
        <h1>Actor's Page</h1>
      </header>
      <main>
        {/* Actor info here! */}
        {mapActors}
      </main>
    </>
  );
}

export default Actors;
