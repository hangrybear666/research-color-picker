import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TableItems({ data }) {

  return (
    <TableContainer component={ Paper }>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right" sx={{borderRight:`50px solid #222222`, color: '#222222', fontWeight: 'bold'}}>Primary Color</TableCell>
            <TableCell align="right" sx={{borderRight:`35px solid #444444`, color: '#444444', fontWeight: 'bold'}}>Secondary Color</TableCell>
            <TableCell align="right" sx={{borderRight:`20px solid #666666`, color: '#666666', fontWeight: 'bold'}}>Tertiary Color</TableCell>
            <TableCell align="right">Submitted at</TableCell>
            <TableCell align="right">Submitted by</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
            const timestamp = Number(row.timestamp)
            const date = new Date(timestamp)
            const displayDate = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} ${date.getHours()}h ${date.getMinutes()}m ${date.getSeconds()}s`
            console.log(displayDate)
            return (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  {row.id}
                </TableCell>
                <TableCell sx={{ color: row.colorPrimary, borderRight:`50px solid ${row.colorPrimary} !IMPORTANT`, fontWeight: 'bold'}} align="right">{row.colorPrimary}</TableCell>
                <TableCell sx={{ color: row.colorSecondary, borderRight:`35px solid ${row.colorSecondary} !IMPORTANT`, fontWeight: 'bold'}} align="right">{row.colorSecondary}</TableCell>
                <TableCell sx={{ color: row.colorTertiary, borderRight:`20px solid ${row.colorTertiary} !IMPORTANT` , fontWeight: 'bold'}} align="right">{row.colorTertiary}</TableCell>
                <TableCell align="right">{displayDate}</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
          )}
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}