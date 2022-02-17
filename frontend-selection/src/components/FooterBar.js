import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function FooterBar() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          backgroundColor: `#1a2027`,
          color: 'white',
          paddingY: 1.5,
        }}
      >
        <Grid container justifyContent="center">
          <a style={{color:'white', fontSize:12}} href="https://www.flaticon.com/free-icons/color-palette" title="color palette icons">Favicon created by Freepik - Flaticon</a>
        </Grid>
      </Box>
    </>
  );
}