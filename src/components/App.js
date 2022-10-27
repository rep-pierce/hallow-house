import React from 'react';
// import './App.css';
import SpookyStreet from './SpookyStreet'
import HousePorch from './HousePorch'
import Homepage from './Homepage'
import GameOver from './GameOver'
import AvatarPage from './AvatarPage';
import { Route, Routes} from "react-router-dom"
import { useEffect, useState } from "react";


function App() {
  const [houses, setHouses] = useState([])
  const [houseIndex, setHouseIndex] = useState(0)
  const [ghostLoc, setGhostLoc] = useState(0)
  const [avatars, setAvatar] = useState([])
  const [selectedAvatar, setSelectedAvatar] = useState("")
  const [name, setName] = useState("")
  const [image, setImage] = useState("")


  useEffect(() => {
    fetch('http://localhost:3001/houses')
      .then(r => r.json())
      .then(h => setHouses(h))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3001/avatars')
      .then(r => r.json())
      .then(setAvatar)
  }, [])




  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="spookystreet"
          element=
          {<SpookyStreet
          selectedAvatar={selectedAvatar}
            houses={houses}
            setHouses={setHouses}
            houseIndex={houseIndex}
            setHouseIndex={setHouseIndex}
            ghostLoc={ghostLoc}
            setGhostLoc={setGhostLoc}
            avatars={avatars}
          />}
            />
            <Route path="/porch" element={<HousePorch />} />
            <Route path="/GameOver" element={<GameOver />} />
            <Route path="/GameOver" element={<GameOver />} />
            <Route path="/AvatarPage" 
            element={<AvatarPage
            avatars={avatars} 
            setSelectedAvatar={setSelectedAvatar}
            setName={setName}
            setImage={setImage}
            name={name}
            image={image}
            setAvatar={setAvatar}
            />
            } />
      </Routes>
    </div>
  );
}

export default App;