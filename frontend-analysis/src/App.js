import React, { useState, useEffect } from 'react'
import colorService from './services/colors'
import './App.css';

function App() {

  const [colors, setColors] = useState([])

  const hook = () => {
    colorService
      .getAll()
      .then(response => {
        setColors(response)
      })
  }
  useEffect(hook, [])

  return (
    <div className="outer-container">
      <h3>Color Analysis</h3>
      <ul>
        {colors.map(color => {
          const timestamp = Number(color.timestamp)
          const date = new Date(timestamp)
          const displayDate = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} ${date.getHours()}h ${date.getMinutes()}m ${date.getSeconds()}s`
          return (
            <li key={color.id}>{color.colorPrimary} {color.colorSecondary} {color.colorTertiary} {displayDate}</li>
            )
          })}
      </ul>
    </div>
  );
}

export default App;
