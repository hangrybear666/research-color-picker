import React, { useState, useEffect } from 'react'
import colorService from './services/colors'
import HeaderBar from './components/HeaderBar';
import FooterBar from './components/FooterBar';
import TableItems from './components/TableItems';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
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
    <Container
      className="outer-container"
      maxWidth="lg"
      >
      <HeaderBar/>
      <Paper elevation={8} sx={{
        backgroundColor: 'rgb(220, 220, 220)',
        border: '1px solid grey',
        borderRadius:0,
        paddingX:2,
        paddingBottom:2,
        paddingTop:2
      }}>
      <TableItems data={colors}/>
      </Paper>
      <FooterBar/>
    </Container>
  );
}

export default App;
