import React, { useState } from 'react';
import './Our.scss'
import { Link } from 'react-router-dom'
import { FaShoppingBag } from "react-icons/fa";
// import { IoEyeSharp } from "react-icons/io5";
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };
function Our() {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    return (
        <section id='our'>
            <div className='container'>
                <div className='our'>
                    <h2>Our Recent Products!</h2>
                </div>
                <div className="productC">
                    <div className="card">

                        <Link to={"shopdetail"}>
                            <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/lemon-tea-bag-300x300.jpg" alt="" /></Link>
                            <div className='overlay'>
                                <FaShoppingBag className='icon' />
                                {/* <IoEyeSharp className='icon'onClick={handleOpen} /> */}
                             

                            </div>
                        <div className='card-desc'>
                            <p>tea</p>
                            <h6>Cinnamon Tea</h6>
                            <p>$56.00</p>
                        </div>
                    </div>
                    {/* <div className="card">
                        <Link to={"shopdetail"}>
                            <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/lemon-tea-bag-300x300.jpg" alt="" /></Link>
                            <div className='overlay'>
                                <FaShoppingBag className='icon' />
                                <IoEyeSharp className='icon' />
                            </div>
                        <div className='card-desc'>
                            <p>tea</p>
                            <h6>Cinnamon Tea</h6>
                            <p>$56.00</p>
                        </div>
                    </div> */}
                    {/* <div className="card">
                        <Link to={"shopdetail"}>
                            <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/lemon-tea-bag-300x300.jpg" alt="" /></Link>
                            <div className='overlay'>
                                <FaShoppingBag className='icon' />
                                <IoEyeSharp className='icon' />
                            </div>
                        <div className='card-desc'>
                            <p>tea</p>
                            <h6>Cinnamon Tea</h6>
                            <p>$56.00</p>
                        </div>
                    </div> */}
                    {/* <div className="card">
                        <Link to={"shopdetail"}>
                            <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/lemon-tea-bag-300x300.jpg" alt="" /></Link>
                            <div className='overlay'>
                                <FaShoppingBag className='icon' />
                                <IoEyeSharp className='icon' />
                            </div>
                        <div className='card-desc'>
                            <p>tea</p>
                            <h6>Cinnamon Tea</h6>
                            <p>$56.00</p>
                        </div>
                    </div> */}
                </div>
            </div>
            <div>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}
    </div>
        </section>
    )
}

export default Our
