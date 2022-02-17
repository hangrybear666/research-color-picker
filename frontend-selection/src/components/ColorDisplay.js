
import React, { useState } from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function ColorDisplay({ colorsSubmitted, colors }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [primaryColorApiUrl, setPrimaryColorApiUrl] = useState(undefined);
  const [secondaryColorApiUrl, setSecondaryColorApiUrl] = useState(undefined);
  const [tertiaryColorApiUrl, setTertiaryColorApiUrl] = useState(undefined);

  const displayChosenColors =  colorsSubmitted ? '' : 'none'

  if (colorsSubmitted) {
    if (!primaryColorApiUrl && !secondaryColorApiUrl && !tertiaryColorApiUrl) {
      console.log("all URLs to colorAPI generated")
      const colorApiBaseUrl = `https://www.thecolorapi.com/id?format=html&hex=`
      const primaryColorHex = colors[0].substring(1)
      const secondaryColorHex = colors[1].substring(1)
      const tertiaryColorHex = colors[2].substring(1)
      setPrimaryColorApiUrl(colorApiBaseUrl.concat(primaryColorHex))
      setSecondaryColorApiUrl(colorApiBaseUrl.concat(secondaryColorHex))
      setTertiaryColorApiUrl(colorApiBaseUrl.concat(tertiaryColorHex))
    }
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Grid container justifyContent="center" sx={{ display: displayChosenColors }}>
        <Button
          aria-describedby={id}
          variant="outlined"
          color="primary"
          size="medium"
          onClick={handleClick}
          sx={{
            border: 2,
            '&:hover': { border: '2px solid', boxShadow: '1px 2px 2px #1976d2'},
            marginTop: 5
          }}>
          Show selected colors
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Typography
            sx={{ p: 2, borderLeft: `20px solid ${colors[0]}`}}>primary: {colors[0]}
            <Link rel="noreferrer" target="_blank" href={primaryColorApiUrl}> Info</Link>
          </Typography>
          <Divider/>
          <Typography
            sx={{ p: 2, borderLeft: `15px solid ${colors[1]}`}}>secondary: {colors[1]}
            <Link rel="noreferrer" target="_blank" href={secondaryColorApiUrl}> Info</Link>
          </Typography>
          <Divider/>
          <Typography
            sx={{ p: 2, borderLeft: `10px solid ${colors[2]}`}}>tertiary: {colors[2]}
            <Link rel="noreferrer" target="_blank" href={tertiaryColorApiUrl}> Info</Link>
          </Typography>
        </Popover>
      </Grid>
    </div>
  );
}

