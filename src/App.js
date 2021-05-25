import { useState } from 'react'
import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Player from "./components/player/Player"
import "./app.scss"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Intro />
          <Player /> 
        </div>
    </div>
  );
}

export default App;
