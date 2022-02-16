import React, { useState } from 'react'
import colorService from './services/colors'
import './App.css';

function App() {
  /**
   * State of the App is maintained here
   */
  const [primaryColor, setPrimaryColor] = useState(undefined)
  const [secondaryColor, setSecondaryColor] = useState(undefined)
  const [tertiaryColor, setTertiaryColor] = useState(undefined)
  const [errorMessage, setErrorMessage] = useState(null)
  const [notificationMsg, setNotificationMsg] = useState(null)

  const processSubmit = (e) => {
    e.preventDefault();
    let selectionComplete = false
    if (primaryColor && secondaryColor && tertiaryColor) {
      if (primaryColor.length === 7 && secondaryColor.length === 7 && tertiaryColor.length === 7)
      selectionComplete = true
    }
    console.log(` selection complete: ${selectionComplete}
    primary color: "${primaryColor}"
    secondary color: "${secondaryColor}"
    tertiary color: "${tertiaryColor}"`)
    if (selectionComplete) {
      const newEntry = {
        colorPrimary: primaryColor,
        colorSecondary: secondaryColor,
        colorTertiary: tertiaryColor,
        timestamp: Date.now()
      }
      console.log(newEntry)
      colorService
        .create(newEntry)
        .then(addedColor => {
          if (!addedColor.error) {
            const message = `Your color selection has been saved!`
            notifyUser(message, false)
          } else {
            notifyUser(addedColor.error,true)
          }
        }).catch(error => {
          const message = error.message
          notifyUser(message, true)
        })

    }

  }

  const primaryColorSelectionListener = (e) => {
    if (e.target.value) {
      if (e.target.value.trim().length !== 0) {
        setPrimaryColor("#".concat(e.target.value.trim()))
      }
    }
  }

  const secondaryColorSelectionListener = (e) => {
    if (e.target.value) {
      if (e.target.value.trim().length !== 0) {
        setSecondaryColor("#".concat(e.target.value.trim()))
      }
    }
  }

  const tertiaryColorSelectionListener = (e) => {
    if (e.target.value) {
      if (e.target.value.trim().length !== 0) {
        setTertiaryColor("#".concat(e.target.value.trim()))
      }
    }
  }

  /**
   * helper function for sending perishable notifications to the user
   * @param {string} message
   * @param {boolean} isError
   */
   const notifyUser = (message, isError) => {
    if (isError) {
      setErrorMessage(message)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    } else {
      setNotificationMsg(message)
      setTimeout(() => {
        setNotificationMsg(null)
      }, 5000)
    }
  }

  return (
    <div className="outer-container">
      <h3>Please choose a color</h3>
        <form onSubmit={processSubmit}>
          <div style={{whiteSpace:"pre"}}>
              primary color:  <input onChange={primaryColorSelectionListener}/>
          </div>
          <div style={{whiteSpace:"pre"}}>
              secondary color:  <input onChange={secondaryColorSelectionListener}/>
          </div>
          <div style={{whiteSpace:"pre"}}>
              tertiary color:  <input onChange={tertiaryColorSelectionListener}/>
          </div>
          <div>
              <button type="submit" >choose</button>
          </div>
          {/* <a href="https://www.flaticon.com/free-icons/color-palette" title="color palette icons">Color palette icons created by Freepik - Flaticon</a> */}
      </form>
    </div>
  );
}

export default App;
