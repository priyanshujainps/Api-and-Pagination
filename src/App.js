import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { useEffect, useState } from "react";

function App() {
const [pokemons, setPokemons] = useState([]);

const [limit, setlimit] = useState(14);
useEffect(() => {
  fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit="+limit)
  .then(response=>response.json())
  .then(data=>setPokemons(data.results));
});
useEffect(() => {
  const handleScroll = event => {
    setlimit(limit+4);
  };
  window.addEventListener('scroll', handleScroll);
}, []);
  return (
    <div  >
      <Router>
        <div>Starting components</div>

        <Link to="/home"> Home</Link>
        <br />
        <Link to="/about"> About</Link>

        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>

      <ul>
        {pokemons.map(poke=>{
          return (<>

            <li >{poke.name}</li>
            <li >{poke.url}</li>

          </>
            )
        })}
      </ul>

    </div>
  );
}

export default App;
