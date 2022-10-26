import React from 'react';
// import './App.css';
import SpookyStreet from './SpookyStreet'
import HousePorch from './HousePorch'
import Homepage from './Homepage'
import { Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react";


function App() {
  const [houses, setHouses] = useState([])
  const [houseIndex, setHouseIndex] = useState(0)
  const [ghostLoc, setGhostLoc] = useState(0)
  const [currentPorch, setCurrentPorch] = useState({})

  useEffect(() => {
    fetch('http://localhost:3001/houses')
      .then(r => r.json())
      .then(h => setHouses(h))
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="spookystreet"
          element=
          {<SpookyStreet
            houses={houses}
            setHouses={setHouses}
            houseIndex={houseIndex}
            setHouseIndex={setHouseIndex}
            ghostLoc={ghostLoc}
            setGhostLoc={setGhostLoc}
            setCurrentPorch={setCurrentPorch}
          />}
            />
            <Route path="/porch" element={
            <HousePorch 
            currentPorch={currentPorch}
            />} />
      </Routes>
    </div>
  );
}

export default App;