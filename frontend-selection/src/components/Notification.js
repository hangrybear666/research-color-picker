import React from 'react'
import MuiAlert from '@mui/material/Alert';

const Notification = ({ message, type }) => {

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={5} ref={ref} variant="filled" {...props} />;
  })

  if (message === null) {
    return null
  }

  return (
    <>
      <Alert severity={type}>{message}</Alert>
    </>
  )
}

export default Notification