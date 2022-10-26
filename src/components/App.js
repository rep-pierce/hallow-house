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
  const [width, setWidth] = useState("400")
  const [energy, setEnergy] = useState("100")
  const [candies, setCandies] = useState([])

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
            width={width}
            setWidth={setWidth}
            energy={energy}
            setEnergy={setEnergy}
            candies={candies}
            setCandies={setCandies}
          />}
            />
            <Route path="/porch" element={<HousePorch />} />
      </Routes>
    </div>
  );
}

export default App;