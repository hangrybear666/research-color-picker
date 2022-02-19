import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit'
import { Grid } from '@mui/material';


export default function BackgroundBox({ colorsSubmitted, type, color, onClick, active }) {
  const border = active === type ? '4px solid black' : '2px dashed #333333'
  const displayEditBtn = colorsSubmitted ? 'none' : ''
  return (
    <Box
      onClick={() => onClick(type)}
      sx={{
        minHeight: '50px',
        height: {xs: '100%', md: '10vh', lg: '15vh'},
        backgroundColor: `${color}`,
        '&:hover': {
          opacity: [0.85],
        },
        p: 2,
        border: border,
        boxShadow: 3
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100%' }}
      >
        <Button
          value={type}
          variant="text"
          size="large"
          sx={{
            color: 'black',
            display: displayEditBtn,
            '&:hover': {
              backgroundColor: 'transparent'
            }
          }}
          startIcon={<EditIcon/>}>
            Edit
          </Button>
      </Grid>
    </Box>
  );
}