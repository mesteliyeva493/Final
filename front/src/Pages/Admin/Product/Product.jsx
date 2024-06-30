import React, { useContext } from 'react'
import './Product.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import mainContext from '../../../Context/Context';
import { Button } from '@mui/material';
function Product() {
    const { product,deletetProduct } = useContext(mainContext);

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="right">image</TableCell>
                            <TableCell align="right">name</TableCell>
                            <TableCell align="right">title</TableCell>
                            <TableCell align="right">price</TableCell>
                            <TableCell align="right">Delete</TableCell>
                            <TableCell align="right">Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {product.map((item, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {index}
                                </TableCell>
                                <TableCell align="right"><img width={100} height={100} src={item.img} alt="" /></TableCell>
                                <TableCell align="right">{item.name}</TableCell>
                                <TableCell align="right">{item.title}</TableCell>
                                <TableCell align="right">{item.price}</TableCell>
                                <TableCell align="right">  <Button onClick={()=>{
                                    deletetProduct(item._id)
                                }}>Delete</Button></TableCell>

                                <TableCell align="right"><Button>Edit</Button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>




        </>
    )
}

export default Product