import React, { useState, useEffect } from 'react'
import colorService from './services/colors'
import './App.css';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import BackgroundBox from './components/BackgroundBox';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ColorPicker from './components/ColorPicker';
import Button from '@mui/material/Button';
import SubmitButton from './components/SubmitButton';
import Notification from './components/Notification';
import ColorDisplay from './components/ColorDisplay';
import HeaderBar from './components/HeaderBar';
import FooterBar from './components/FooterBar';




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
  const [colorsSubmitted, setColorsSubmitted] = useState(false)
  const [colorType, setColorType] = useState("primary")
  const [errorMessage, setErrorMessage] = useState(null)
  const [notificationMsg, setNotificationMsg] = useState(null)

  const hook = () => {
    colorService
      .getAll()
      .then(response => {
        /**
         * colors queried from json-server
         * this allows heroku to boot up the json-server while users are using the selection
         */
      })
  }
  useEffect(hook, [])

  const processSubmit = (e) => {
    e.preventDefault();
    let validationSuccess = false
    if (primaryColor && secondaryColor && tertiaryColor) {
      if (primaryColor.length === 7 && secondaryColor.length === 7 && tertiaryColor.length === 7) {
        validationSuccess = true
      }
    }
    if (validationSuccess) {
      const newEntry = {
        colorPrimary: primaryColor,
        colorSecondary: secondaryColor,
        colorTertiary: tertiaryColor,
        timestamp: Date.now()
      }
      colorService
      .create(newEntry)
      .then(addedColor => {
        if (!addedColor.error) {
            setColorsSubmitted(true)
            setDisplayPrimary(false)
            setDisplaySecondary(false)
            setDisplayTertiary(false)
            // console.log("new entry added: ", newEntry)
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
      <HeaderBar/>
      <Paper elevation={8} sx={{
        backgroundColor: 'rgb(220, 220, 220)',
        border: '1px solid grey',
        borderRadius:0,
        paddingX:2,
        paddingBottom:5,
        paddingTop:0.1
      }}>

        <Typography variant="h6" sx={{display: colorsSubmitted ? 'none' : '', marginY:1}}>
          Please choose your <u>{colorType}</u> color
        </Typography>
        <Typography variant="h6" sx={{display: colorsSubmitted ? '' : 'none', marginY:1}}>
          Thank you for your participation.
        </Typography>
        <Notification message={notificationMsg} type="success"/>
        <form onSubmit={processSubmit}>
          <ColorPicker display={displayPrimary} color={primaryColor} onChange={setPrimaryColor}/>
          <ColorPicker display={displaySecondary} color={secondaryColor} onChange={setSecondaryColor}/>
          <ColorPicker display={displayTertiary} color={tertiaryColor} onChange={setTertiaryColor}/>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            columnSpacing={4}
            sx={{
              marginTop: '25px',
              marginBottom: '10px'
            }}
            >
              <Grid item xs={4}>
                <BackgroundBox
                  type="primary"
                  colorsSubmitted={colorsSubmitted}
                  color={primaryColor}
                  onClick={handleClick}
                  active={colorType}/>
              </Grid>
              <Grid item xs={4}>
                <BackgroundBox
                  type="secondary"
                  colorsSubmitted={colorsSubmitted}
                  color={secondaryColor}
                  onClick={handleClick}
                  active={colorType}/>
              </Grid>
              <Grid item xs={4}>
                <BackgroundBox
                  type="tertiary"
                  colorsSubmitted={colorsSubmitted}
                  color={tertiaryColor}
                  onClick={handleClick}
                  active={colorType}/>
              </Grid>

              <Grid item xs={12}>
                <SubmitButton colorsSubmitted={colorsSubmitted}/>
                <ColorDisplay colorsSubmitted={colorsSubmitted} colors={[primaryColor,secondaryColor,tertiaryColor]} />
                <Notification colorsSubmitted={colorsSubmitted} message={errorMessage} type="error"/>
              </Grid>
            </Grid>
          </form>

      </Paper>
      <FooterBar/>
    </Container>
  );
}

export default App;
