import * as React from 'react';
import Button from '@mui/material/Button';

export default function SubmitButton({ selectionIsValid }) {
  const display = selectionIsValid ? 'none' : ''
  return (
    <>
      <Button
        type="submit"
        variant="outlined"
        color="success"
        sx={{
          border: '2px solid',
          width: '100%',
          display: display,
          boxShadow: '1px 2px 2px green'
        }}>submit</Button>
        <h3></h3>
    </>
  );
}