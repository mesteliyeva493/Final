  // import React, { useContext } from 'react';
  // import './Product.scss';
  // import Table from '@mui/material/Table';
  // import TableBody from '@mui/material/TableBody';
  // import TableCell from '@mui/material/TableCell';
  // import TableContainer from '@mui/material/TableContainer';
  // import TableHead from '@mui/material/TableHead';
  // import TableRow from '@mui/material/TableRow';
  // import Paper from '@mui/material/Paper';
  // import mainContext from '../../../Context/Context';
  // import { Button } from '@mui/material';

  // function Product() {
  //   const { product, deletetProduct } = useContext(mainContext);

  //   return (
  //     <section id='Product'>
  //       <TableContainer component={Paper} className="table-container">
  //         <Table sx={{ minWidth: 800 }} aria-label="simple table">
  //           <TableHead>
  //             <TableRow>
  //               <TableCell>#</TableCell>
  //               <TableCell align="right">Image</TableCell>
  //               <TableCell align="right">Name</TableCell>
  //               <TableCell align="right">Title</TableCell>
  //               <TableCell align="right">Price</TableCell>
  //               <TableCell align="right">Delete</TableCell>
  //               <TableCell align="right">Edit</TableCell>
  //             </TableRow>
  //           </TableHead>
  //           <TableBody>
  //             {product.map((item, index) => (
  //               <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
  //                 <TableCell component="th" scope="row">
  //                   {index + 1}
  //                 </TableCell>
  //                 <TableCell align="right">
  //                   <img width={100} height={100} src={item.img} alt="" />
  //                 </TableCell>
  //                 <TableCell align="right">{item.name}</TableCell>
  //                 <TableCell align="right">{item.title}</TableCell>
  //                 <TableCell align="right">{item.price}</TableCell>
  //                 <TableCell align="right">
  //                   <Button onClick={() => deletetProduct(item._id)}>Delete</Button>
  //                 </TableCell>
  //                 <TableCell align="right">
  //                   <Button>Edit</Button>
  //                 </TableCell>
  //               </TableRow>
  //             ))}
  //           </TableBody>
  //         </Table>
  //       </TableContainer>
  //     </section>
  //   );
  // }

  // export default Product;



  import React, { useState, useContext } from 'react';
import './Product.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import mainContext from '../../../Context/Context';

function Product() {
  const { product, deleteProduct, updateProduct } = useContext(mainContext);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);

  const openEditModal = (item) => {
    setEditedProduct({ ...item });
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditedProduct(null);
    setEditModalOpen(false);
  };

  const handleSave = () => {
    // Example save logic
    console.log("Saving:", editedProduct);

    // Update product in context or API
    updateProduct(editedProduct);

    // Close the modal
    closeEditModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <section id='Product'>
      <TableContainer component={Paper} className="table-container">
        <Table sx={{ minWidth: 800 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Delete</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.map((item, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">
                  <img width={100} height={100} src={item.img} alt="" />
                </TableCell>
                <TableCell align="right">{item.name}</TableCell>
                <TableCell align="right">{item.title}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => deleteProduct(item._id)}>Delete</Button>
                </TableCell>
                <TableCell align="right">
                  <Button onClick={() => openEditModal(item)}>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Modal */}
      <Dialog open={editModalOpen} onClose={closeEditModal}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            value={editedProduct ? editedProduct.name : ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Title"
            name="title"
            value={editedProduct ? editedProduct.title : ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            name="price"
            value={editedProduct ? editedProduct.price : ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
          <Button onClick={closeEditModal} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
}

export default Product;




