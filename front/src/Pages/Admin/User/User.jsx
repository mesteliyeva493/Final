import { useContext } from "react";
import './User.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

import mainContext from "../../../Context/Context";

function User() {
    const { users, deleteUser, currentUser } = useContext(mainContext)

  return (
    <section id='User'>
    <TableContainer component={Paper} className="table-container">
      <Table sx={{ minWidth: 800 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>  
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right" style={{display:currentUser && currentUser.role=='super-admin'? "":"none"}}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>

              <TableCell align="right">{item.username}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell style={{display:currentUser && currentUser.role=='super-admin'? "":"none"}} align="right">
                <Button onClick={()=>{
                    deleteUser(item._id)
                }}>Delete</Button>
              </TableCell>
          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </section>
  )
}

export default User