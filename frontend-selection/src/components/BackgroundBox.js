import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit'
import { Grid } from '@mui/material';


export default function BackgroundBox({ colorsSubmitted, type, color, onClick, active }) {
  const border = active === type ? '4px solid #333333' : '3px dashed #333333'
  const displayEditBtn = colorsSubmitted ? 'none' : ''
  return (
    <Box
      sx={{
        height: '150px',
        backgroundColor: `${color}`,
        '&:hover': {
          opacity: [0.85],
        },
        p: 2,
        border: border,
        boxShadow: '1px 2px 2px black'
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
          onClick={() => onClick(type)}
          variant="outlined"
          size="medium"
          sx={{
            paddingX:1.5,
            paddingY:0.5,
            color: 'black',
            border: '2px dashed black',
            borderRadius: 0,
            display: displayEditBtn,
            '&:hover': {
              border: '2px dashed white',
              color: 'white'
            }
          }}
          startIcon={<EditIcon/>}>
            Edit
          </Button>
      </Grid>
    </Box>
  );
}