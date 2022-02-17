import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
export default function HeaderBar() {


  return (
    <>
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
    </>
  );
}