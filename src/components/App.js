import React from 'react';
// import './App.css';
import SpookyStreet from './SpookyStreet'
import HousePorch from './HousePorch'
import Homepage from './Homepage'
import GameOver from './GameOver'
import AvatarPage from './AvatarPage';
import { Route, Routes} from "react-router-dom"
import { useEffect, useState } from "react";
import music from "../song.mp3"


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
  const [direcs1, showDirecs1] = useState(false)
  const [direcs2, showDirecs2] = useState(false)
  const [direcs3, showDirecs3] = useState(false)
  const [direcs4, showDirecs4] = useState(false)
  const [playing, isPlaying] = useState(false)
  const [color, setColor]  = useState("green")

  useEffect(() => {
    fetch('http://localhost:3001/houses')
      .then(r => r.json())
      .then(h => setHouses(h))
  }, [])

  const song = new Audio(music)
    useEffect(() => {
    fetch('http://localhost:3001/avatars')
      .then(r => r.json())
      .then(setAvatar)
  }, [])


  function handleSongClick(){
    if (!playing) {
      song.play()
      isPlaying(true)
    }
    else if (playing) {
      console.log('can you see me')
      song.pause()
      isPlaying(false)
    }}


  return (
    <div className="App">

      <Routes>
        <Route
          path="/"
          element={<Homepage
            direcs1={direcs1}
            showDirecs1={showDirecs1}
            direcs2={direcs2}
            showDirecs2={showDirecs2}
            handleSongClick={handleSongClick}
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
            direcs1={direcs1}
            showDirecs1={showDirecs1}
            direcs2={direcs2}
            showDirecs2={showDirecs2}
            showDirecs3={showDirecs3}
            direcs4={direcs4}
            color={color}
            setColor={setColor}
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
            direcs3={direcs3}
            showDirecs3={showDirecs3}
            showDirecs4={showDirecs4}
            color={color}
            setColor= {setColor}
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
