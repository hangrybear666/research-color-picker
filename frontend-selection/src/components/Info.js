import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import ClickAwayListener from '@mui/material/ClickAwayListener';

export default function Info() {
  const [open, setOpen] = React.useState(false)

  const handleTooltipClose = () => {
    setOpen(false);
  }

  const handleTooltipOpen = () => {
    setOpen(true);
  }

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={
        <Typography
          sx={{
            color: 'white'
          }}>
          This is an anonymous survey for a university course at the Academy of Fine Arts, Nuremberg
        </Typography>
      }>
        <IconButton
          onClick={handleTooltipOpen}
          color="primary" sx={{
          marginBottom: '5px'
        }}>
          <InfoOutlinedIcon sx={{ fontSize: 28 }} />
        </IconButton>
      </Tooltip>
    </ClickAwayListener>
  );
}