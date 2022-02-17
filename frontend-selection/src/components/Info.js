import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

export default function Info() {
  return (
    <Tooltip title={
      <Typography
        sx={{
          color: 'white'
        }}>
        This is an anonymous survey for an university course at the Academy of Fine Arts, Nuremberg
      </Typography>
    }>
      <IconButton
        color="primary" sx={{
        marginBottom: '5px'
      }}>
        <InfoOutlinedIcon sx={{ fontSize: 28 }} />
      </IconButton>
    </Tooltip>
  );
}