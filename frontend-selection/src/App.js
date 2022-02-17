import React, { useState } from 'react'
import colorService from './services/colors'
import './App.css';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import BackgroundBox from './components/BackgroundBox';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ColorPicker from './components/ColorPicker';
import Button from '@mui/material/Button';
import SubmitButton from './components/SubmitButton';
import Notification from './components/Notification';


function App() {
  /**
   * State of the App is maintained here
   */
  const [primaryColor, setPrimaryColor] = useState(undefined)
  const [secondaryColor, setSecondaryColor] = useState(undefined)
  const [tertiaryColor, setTertiaryColor] = useState(undefined)
  const [displayPrimary, setDisplayPrimary] = useState(true)
  const [displaySecondary, setDisplaySecondary] = useState(false)
  const [displayTertiary, setDisplayTertiary] = useState(false)
  const [selectionIsValid, setSelectionIsValid] = useState(false)
  const [colorType, setColorType] = useState("primary")
  const [errorMessage, setErrorMessage] = useState(null)
  const [notificationMsg, setNotificationMsg] = useState(null)

  const processSubmit = (e) => {
    e.preventDefault();
    let validationSuccess = false
    if (primaryColor && secondaryColor && tertiaryColor) {
      console.log("first if reached")
      if (primaryColor.length === 7 && secondaryColor.length === 7 && tertiaryColor.length === 7) {
        console.log("second if reached")
        setSelectionIsValid(true)
        validationSuccess = true
      }
    }
    console.log(` validationSuccess: ${validationSuccess}
    primary color: "${primaryColor}"
    secondary color: "${secondaryColor}"
    tertiary color: "${tertiaryColor}"`)
    if (validationSuccess) {
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

    } else {
      console.log("first")
      const message = `Please select three colors before submitting.`
      notifyUser(message, true)
    }
  }

  const handleClick = (type) => {
    setColorType(type)

    switch (type) {
      case "primary":
        setDisplayPrimary(true)
        setDisplaySecondary(false)
        setDisplayTertiary(false)
        break;
      case "secondary":
        setDisplayPrimary(false)
        setDisplaySecondary(true)
        setDisplayTertiary(false)
        break;
      case "tertiary":
        setDisplayPrimary(false)
        setDisplaySecondary(false)
        setDisplayTertiary(true)
        break;
      default:
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
    <Container
      className="outer-container"
      maxWidth="md"
      >
      <Box
        sx={{
          width: '100%',
          backgroundColor: `#1a2027`,
          color: 'white',
          paddingY: 0.5,
        }}
      >
        <Grid container justifyContent="center">
          <h2>Favorite Colors</h2>
        </Grid>
      </Box>
      <Paper elevation={8} sx={{
        backgroundColor: 'rgb(220, 220, 220)',
        border: '1px solid grey',
        borderRadius:0,
        paddingX:2,
        paddingBottom:5,
        paddingTop:0.1
      }}>

        <h4>Please choose your <u>{colorType}</u> color</h4>
        <form onSubmit={processSubmit}>
          <ColorPicker display={displayPrimary} color={primaryColor} onChange={setPrimaryColor}/>
          <ColorPicker display={displaySecondary} color={secondaryColor} onChange={setSecondaryColor}/>
          <ColorPicker display={displayTertiary} color={tertiaryColor} onChange={setTertiaryColor}/>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={4}
            sx={{
              marginTop: '25px',
              marginBottom: '10px'
            }}
            >
              <Grid item xs={4}>
                <BackgroundBox  type="primary" color={primaryColor} onClick={handleClick} active={colorType}/>
              </Grid>
              <Grid item xs={4}>
                <BackgroundBox item xs={4} type="secondary" color={secondaryColor} onClick={handleClick} active={colorType}/>
              </Grid>
              <Grid item xs={4}>
                <BackgroundBox item xs={4} type="tertiary" color={tertiaryColor} onClick={handleClick} active={colorType}/>
              </Grid>

              <Grid item xs={12}>
                <SubmitButton selectionIsValid={selectionIsValid}/>
                <Notification message={errorMessage} type="error"/>
                <Notification message={notificationMsg} type="success"/>
              </Grid>
            </Grid>
          </form>


        {/* <a href="https://www.flaticon.com/free-icons/color-palette" title="color palette icons">Color palette icons created by Freepik - Flaticon</a> */}
      </Paper>
    </Container>
  );
}

export default App;
