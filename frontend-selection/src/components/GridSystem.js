import * as React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper';

export default function GridSystem() {

  const GridItem = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <GridItem>xs=12 md-6</GridItem>
        </Grid>
        <Grid item xs={12} md={3} >
          <GridItem>xs=12 md-3</GridItem>
        </Grid>
        <Grid item xs={12} md={3} >
          <GridItem>xs=12 md-3</GridItem>
        </Grid>
        <Grid item xs={12} md={8} >
          <GridItem>xs=12 md-8</GridItem>
        </Grid>
        <Grid item xs={12} md={4} >
          <GridItem>xs=12 md-4</GridItem>
        </Grid>
      </Grid>
    </>
  );
}