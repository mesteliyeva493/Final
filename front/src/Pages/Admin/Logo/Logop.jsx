import React, { useContext } from 'react'
import './Logop.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import mainContext from '../../../Context/Context';
function Logop() {
    const { logo, deletetLogo } = useContext(mainContext);
  return (
    <>

<section id='Logo'>
      <TableContainer component={Paper} className="table-container">
        <Table sx={{ minWidth: 800 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Delete</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {logo.map((item, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">
                  <img width={100} height={100} src={item.img} alt="" />
                </TableCell>
                <TableCell align="right">
                  <Button onClick={() => deletetLogo(item._id)}>Delete</Button>
                </TableCell>
                <TableCell align="right">
                  <Button>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
    
    
    
    </>
  )
}

export default Logop