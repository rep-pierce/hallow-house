import React from 'react';
// import './App.css';
import SpookyStreet from './components/SpookyStreet'
import HousePorch from './components/HousePorch'
import Homepage from './components/Homepage'
import GameOver from './components/GameOver'
import AvatarPage from './components/AvatarPage';
import { Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react";
import music from "./WAC.wav"


function App() {
  const [houses, setHouses] = useState([])
  const [houseIndex, setHouseIndex] = useState(0)
  const [ghostLoc, setGhostLoc] = useState(0)
  const [avatars, setAvatar] = useState([])
  const [selectedAvatar, setSelectedAvatar] = useState("")
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [width, setWidth] = useState("500")
  const [energy, setEnergy] = useState("100")
  const [candies, setCandies] = useState([])
  const [currentPorch, setCurrentPorch] = useState({})
  const [playing, isPlaying] = useState(false)
  const [color, setColor] = useState("green")

  useEffect(() => {
    fetch('https://myhallowhouseapi.herokuapp.com/houses')
      .then(r => r.json())
      .then(h => setHouses(h))
  }, [])


  useEffect(() => {
    fetch('https://myhallowhouseapi.herokuapp.com/avatars')
      .then(r => r.json())
      .then(setAvatar)
  }, [])

  const [song] = useState(new Audio(music))

  function handleSongClick(e) {
    console.log(e)
    if (playing === false) {
      song.play()
      isPlaying(true)
    }
    else if (playing === true) {
      song.pause()
      isPlaying(false)
    }
  }

  return (
    <div className="App">

      <Routes>
        <Route
          path="/"
          element={<Homepage
            handleSongClick={handleSongClick}
            playing={playing}
          />}
        />
        <Route
          path="spookystreet"
          element={<SpookyStreet
            selectedAvatar={selectedAvatar}
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
            setCurrentPorch={setCurrentPorch}
            color={color}
            setColor={setColor}
            playing={playing}
            handleSongClick={handleSongClick}
          />}
        />

        <Route
          path="/porch"
          element={<HousePorch
            width={width}
            setWidth={setWidth}
            energy={energy}
            setEnergy={setEnergy}
            candies={candies}
            setCandies={setCandies}
            currentPorch={currentPorch}
            color={color}
            setColor={setColor}
            playing={playing}
            handleSongClick={handleSongClick}
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
            playing={playing}
            handleSongClick={handleSongClick}
          />
          } />
      </Routes>
    </div>
  );
}

export default App;
