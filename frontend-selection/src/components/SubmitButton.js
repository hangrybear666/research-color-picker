import * as React from 'react';
import Button from '@mui/material/Button';

export default function SubmitButton({ colorsSubmitted }) {
  const displayBtn = colorsSubmitted ? 'none' : ''
  return (
    <>
      <Button
        type="submit"
        variant="outlined"
        color="success"
        sx={{
          border: '2px solid',
          width: '100%',
          display: displayBtn,
          marginTop: 5,
          boxShadow: '1px 1px 1px #2e7d32',
          '&:hover': { border: '2px solid', boxShadow: '1px 2px 2px #2e7d32'}
        }}>submit</Button>
    </>
  );
}