import React, { useContext, useState } from 'react'
import './Order.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Select } from 'antd';
import axios from 'axios';
import toast from 'react-hot-toast';
import mainContext from '../../../Context/Context';

function Order() {
  const { orders, getOneOrder, deleteOrder, setOrders } = useContext(mainContext)
  const [loading, setLoading] = useState(false)
  return (
   <section id='Order'>
  
      <div className="productTableParag">
      </div>
      {
        loading ? <p className='d-flex align-items-center justify-content-center'>Loading...</p> : <TableContainer component={Paper}
        className="table-container">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#

                </TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Total Price</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index}
                  </TableCell>
                  <TableCell  align="right" >{item.firstName} {item.lastName}</TableCell>
                  <TableCell  align="right">{item.email}</TableCell>
                  <TableCell align="right" >${item.totalPrice}</TableCell>
                  <TableCell  align="right">

                    <Select

                      defaultValue={item.status}
                      style={{
                        width: 120,
                      }}
                      onChange={async (value) => {
                        try {
                          setLoading(true)
                          await axios.put(`http://localhost:5050/orders/status/${item._id}`, { status: value }).then(res => {
                            setOrders([...orders.filter(i => i._id !== item._id), res.data])
                            toast.success('Successfully Updated')
                            setLoading(false)

                          }).finally(() => {
                            setLoading(false)

                          })
                        } catch (error) {
                          console.error('Error updating order status:', error.response.data);
                        }
                      }}
                      options={[
                        {
                          value: 'Pending',
                          label: 'Pending',
                        },
                        {
                          value: 'Accept',
                          label: 'Accept',
                        },
                        {
                          value: 'Reject',
                          label: 'Reject',
                        },

                      ]}
                    />
                  </TableCell>
                  <TableCell align="right" >
                    <Button onClick={() => {
                      deleteOrder(item._id)
                    }} variant='contained' color='error'>
                       Delete
                    </Button>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
 
   </section>
  )
}

export default Order