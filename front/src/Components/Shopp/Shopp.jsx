// // // import React, { useState } from 'react'
// // // import './Shopp.scss'
// // // import { FiList } from "react-icons/fi";
// // // import { FiGrid } from "react-icons/fi";
// // // import { FaAngleRight } from "react-icons/fa6";

// // // function Shopp() {
// // //   const [column, setColumn] = useState(true)
// // //   const [showFilter, setShowFilter] = useState(false);

// // //   const toggleFilter = () => {
// // //     setShowFilter(!showFilter);
// // //   };
// // //   return (
// // //     <>
// // //       <section id={`${column ? "Shopp" : "Shopp2"}`}>
// // //         <div className='shopp'>
// // //           <div className='fd'>
// // //             <div className='fdb'>
// // //               <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
// // //                 <span><astra-woo-filter-icon /></span>
// // //                 Filter
// // //               </button>
// // //             </div>
// // //             <div className='fdbf'>
// // //               <div className='fdf'>
// // //                 <form className='form' action="">
// // //                   <select name="prooduct" id="products">
// // //                     <option>Default sorting</option>
// // //                     <option value="populary">Sort by popularity </option>
// // //                     <option value="populary">Sort by average rating </option>
// // //                     <option value="populary">Sort by latest </option>
// // //                     <option value="populary">Sort by price:low to high popularity </option>
// // //                     <option value="populary">Sort by price:high to low popularity </option>
// // //                   </select>
// // //                 </form>
// // //               </div>
// // //               <div className='fbb'>
// // //                 <FiGrid className='gr' onClick={() => {
// // //                   setColumn(true)
// // //                 }} />
// // //                 <FiList className='li' onClick={() => {
// // //                   setColumn(false)
// // //                 }} />
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div>
// // //             {
// // //               column ? <div class="container">
// // //                 <div class="card">
// // //                   <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
// // //                   <div className='p3'>
// // //                     <p>Essential Oil
// // //                     </p>
// // //                     <p>
// // //                       Almond Oil
// // //                     </p>
// // //                     <p>
// // //                       £120.00</p>
// // //                   </div>
// // //                 </div>
// // //                 <div class="card">
// // //                   <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
// // //                   <div className='p3'>
// // //                     <p>Essential Oil
// // //                     </p>
// // //                     <p>
// // //                       Almond Oil
// // //                     </p>
// // //                     <p>
// // //                       £120.00</p>
// // //                   </div>
// // //                 </div>
// // //                 <div class="card">
// // //                   <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
// // //                   <div className='p3'>
// // //                     <p>Essential Oil
// // //                     </p>
// // //                     <p>
// // //                       Almond Oil
// // //                     </p>
// // //                     <p>
// // //                       £120.00</p>
// // //                   </div>
// // //                 </div>
// // //                 <div class="card">
// // //                   <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
// // //                   <div className='p3'>
// // //                     <p>Essential Oil
// // //                     </p>
// // //                     <p>
// // //                       Almond Oil
// // //                     </p>
// // //                     <p>
// // //                       £120.00</p>
// // //                   </div>
// // //                 </div>
// // //                 <div class="card">
// // //                   <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
// // //                   <div className='p3'>
// // //                     <p>Essential Oil
// // //                     </p>
// // //                     <p>
// // //                       Almond Oil
// // //                     </p>
// // //                     <p>
// // //                       £120.00</p>
// // //                   </div>
// // //                 </div>
// // //                 <div class="card">
// // //                   <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
// // //                   <div className='p3'>
// // //                     <p>Essential Oil
// // //                     </p>
// // //                     <p>
// // //                       Almond Oil
// // //                     </p>
// // //                     <p>
// // //                       £120.00</p>
// // //                   </div>
// // //                 </div>
// // //                 <div class="card">
// // //                   <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
// // //                   <div className='p3'>
// // //                     <p>Essential Oil
// // //                     </p>
// // //                     <p>
// // //                       Almond Oil
// // //                     </p>
// // //                     <p>
// // //                       £120.00</p>
// // //                   </div>
// // //                 </div>
// // //                 <div class="card">
// // //                   <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
// // //                   <div className='p3'>
// // //                     <p>Essential Oil
// // //                     </p>
// // //                     <p>
// // //                       Almond Oil
// // //                     </p>
// // //                     <p>
// // //                       £120.00</p>
// // //                   </div>
// // //                 </div>
// // //                 <div class="card">
// // //                   <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
// // //                   <div className='p3'>
// // //                     <p>Essential Oil
// // //                     </p>
// // //                     <p>
// // //                       Almond Oil
// // //                     </p>
// // //                     <p>
// // //                       £120.00</p>
// // //                   </div>
// // //                 </div>


// // //               </div> : <div class="container">
// // //                 <div class="card">
// // //                   <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
// // //                   <div className='p3'>
// // //                     <p>Essential Oil
// // //                     </p>
// // //                     <p>
// // //                       Almond Oil
// // //                     </p>
// // //                     <p>
// // //                       £120.00</p>
// // //                     <p>
// // //                       Essential Oil
// // //                       Almond Oil
// // //                       £120.00
// // //                       Euismod dolorem consectetuer, wisi purus provident tellus asperiores aptent, vero malesuada metus porta laoreet tenetur aliquid laboris etiam lacus distinctio habitasse beatae corporis diamlorem. Volutpat. Primis, mollit corrupti odit.</p>
// // //                   </div>
// // //                 </div>
// // //                 <div class="card">
// // //                   <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
// // //                   <div className='p4'>
// // //                     <p>Essential Oil
// // //                     </p>
// // //                     <p>
// // //                       Almond Oil
// // //                     </p>
// // //                     <p>
// // //                       £120.00</p>
// // //                     <p>
// // //                       Essential Oil
// // //                       Almond Oil
// // //                       £120.00
// // //                       Euismod dolorem consectetuer, wisi purus provident tellus asperiores aptent, vero malesuada metus porta laoreet tenetur aliquid laboris etiam lacus distinctio habitasse beatae corporis diamlorem. Volutpat. Primis, mollit corrupti odit.</p>
// // //                   </div>
// // //                 </div>
// // //                 <div class="card">
// // //                   <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
// // //                   <div className='p3'>
// // //                     <p>Essential Oil
// // //                     </p>
// // //                     <p>
// // //                       Almond Oil
// // //                     </p>
// // //                     <p>
// // //                       £120.00</p>
// // //                     <p>
// // //                       Essential Oil
// // //                       Almond Oil
// // //                       £120.00
// // //                       Euismod dolorem consectetuer, wisi purus provident tellus asperiores aptent, vero malesuada metus porta laoreet tenetur aliquid laboris etiam lacus distinctio habitasse beatae corporis diamlorem. Volutpat. Primis, mollit corrupti odit.</p>
// // //                   </div>
// // //                 </div>
// // //                 <div class="card">
// // //                   <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
// // //                   <div className='p3'>
// // //                     <p>Essential Oil
// // //                     </p>
// // //                     <p>
// // //                       Almond Oil
// // //                     </p>
// // //                     <p>
// // //                       £120.00</p>
// // //                     <p>
// // //                       Essential Oil
// // //                       Almond Oil
// // //                       £120.00
// // //                       Euismod dolorem consectetuer, wisi purus provident tellus asperiores aptent, vero malesuada metus porta laoreet tenetur aliquid laboris etiam lacus distinctio habitasse beatae corporis diamlorem. Volutpat. Primis, mollit corrupti odit.</p>
// // //                   </div>
// // //                 </div>


// // //               </div>
// // //             }
// // //           </div>



// // //         </div>

// // //       </section>
// // //       <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
// // //         <div className="offcanvas-header">
// // //           <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={toggleFilter}></button>
// // //         </div>
// // //         <div className="offcanvas-body">
// // //           <div className='searchin'>
// // //             <input
// // //               placeholder="search products..."
// // //               type="text"
// // //               id="search"
// // //             // value={query}
// // //             // onChange={handleInputChange}
// // //             />
// // //             <button type="submit"><FaAngleRight />
// // //             </button>

// // //           </div>
// // //           <div className='pricefilter'>
// // //             <h5>
// // //               Filter by price
// // //             </h5>
// // //             <div>

// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* <section id='Shopp2'>
// // //         <div className='shopp'>
// // //           <div className='fd'>
// // //             <div className='fdb'>
// // //               <button>
// // //                 <span><astra-woo-filter-icon /></span>
// // //                 Filter
// // //               </button>
// // //             </div>
// // //             <div className='fdbf'>
// // //               <div className='fdf'>
// // //                 <form className='form' action="">
// // //                   <select name="prooduct" id="products">
// // //                     <option>Default sorting</option>
// // //                     <option value="populary">Sort by popularity </option>
// // //                     <option value="populary">Sort by average rating </option>
// // //                     <option value="populary">Sort by latest </option>
// // //                     <option value="populary">Sort by price:low to high popularity </option>
// // //                     <option value="populary">Sort by price:high to low popularity </option>
// // //                   </select>
// // //                 </form>
// // //               </div>
// // //               <div className='fbb'>
// // //                 <FiGrid className='gr' />
// // //                 <FiList className='li' />
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div>

// // //           </div>
// // //         </div>
// // //       </section> */}
// // //     </>
// // //   )
// // // }

// // // export default Shopp


// // import React, { useContext, useState } from 'react';
// // import { Range, getTrackBackground } from 'react-range';
// // import { FiList, FiGrid } from 'react-icons/fi';
// // import { FaAngleRight } from 'react-icons/fa';
// // import './Shopp.scss';
// // import mainContext from './../../Context/Context';

// // function Shopp() {
// //   const { searchingData } = useContext(mainContext)
// //   const [column, setColumn] = useState(true);
// //   const [showFilter, setShowFilter] = useState(false);
// //   const [value, setValue] = useState([0, 100]);

// //   const toggleFilter = () => {
// //     setShowFilter(!showFilter);
// //   };

// //   const handleChange = (newValue) => {
// //     setValue(newValue);
// //   };

// //   const MIN = 0;
// //   const MAX = 1000;

// //   return (
// //     <>
// //       <section id={`${column ? 'Shopp' : 'Shopp2'}`}>
// //         <div className='shopp'>
// //           <div className='fd'>
// //             <div className='fdb'>
// //               <button
// //                 className='btn btn-primary'
// //                 type='button'
// //                 data-bs-toggle='offcanvas'
// //                 data-bs-target='#offcanvasScrolling'
// //                 aria-controls='offcanvasScrolling'
// //               >
// //                 <span><astra-woo-filter-icon /></span>
// //                 Filter
// //               </button>
// //             </div>
// //             <div className='fdbf'>
// //               <div className='fdf'>
// //                 <form className='form' action=''>
// //                   <select name='prooduct' id='products'>
// //                     <option>Default sorting</option>
// //                     <option value='populary'>Sort by popularity</option>
// //                     <option value='rating'>Sort by average rating</option>
// //                     <option value='latest'>Sort by latest</option>
// //                     <option value='low-to-high'>Sort by price: low to high</option>
// //                     <option value='high-to-low'>Sort by price: high to low</option>
// //                   </select>
// //                 </form>
// //               </div>
// //               <div className='fbb'>
// //                 <FiGrid className='gr' onClick={() => setColumn(true)} />
// //                 <FiList className='li' onClick={() => setColumn(false)} />
// //               </div>
// //             </div>
// //           </div>

// //           <div>
// //             {column ? (
// //               <div className='container'>
// //                 {Array.from({ length: 9 }).map((_, index) => (
// //                   <div className='card' key={index}>
// //                     <img
// //                       src='https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg'
// //                       alt=''
// //                     />
// //                     <div className='p3'>
// //                       <p>Essential Oil</p>
// //                       <p>Almond Oil</p>
// //                       <p>£120.00</p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             ) : (
// //               <div className='container'>
// //                 {Array.from({ length: 4 }).map((_, index) => (
// //                   <div className='card' key={index}>
// //                     <img
// //                       src='https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg'
// //                       alt=''
// //                     />
// //                     <div className='p4'>
// //                       <p>Essential Oil</p>
// //                       <p>Almond Oil</p>
// //                       <p>£120.00</p>
// //                       <p>
// //                         Essential Oil Almond Oil £120.00 Euismod dolorem
// //                         consectetuer, wisi purus provident tellus asperiores
// //                         aptent, vero malesuada metus porta laoreet tenetur
// //                         aliquid laboris etiam lacus distinctio habitasse beatae
// //                         corporis diamlorem. Volutpat. Primis, mollit corrupti
// //                         odit.
// //                       </p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </section>
// //       <div
// //         className='offcanvas offcanvas-start'
// //         data-bs-scroll='true'
// //         data-bs-backdrop='false'
// //         tabIndex='-1'
// //         id='offcanvasScrolling'
// //         aria-labelledby='offcanvasScrollingLabel'
// //       >
// //         <div className='offcanvas-header'>
// //           <button
// //             type='button'
// //             className='btn-close text-reset'
// //             data-bs-dismiss='offcanvas'
// //             aria-label='Close'
// //             onClick={toggleFilter}
// //           ></button>
// //         </div>
// //         <div className='offcanvas-body'>
// //           <div className='searchin'>
// //             <input
// //               placeholder='search products...'
// //               type='text'
// //               id='search'
// //               onChange={searchingData} 


// //             />
// //             <button type='submit'>
// //               <FaAngleRight />
// //             </button>
// //           </div>
// //           <div className='pricefilter'>
// //             <h5>Filter by price</h5>
// //             <div className='price-range-slider'>
// //               <p className='range-value'>
// //                 <input
// //                   type='text'
// //                   id='amount'
// //                   value={`$${value[0]} - $${value[1]}`}
// //                   readOnly
// //                 />
// //               </p>
// //               <Range
// //                 values={value}
// //                 step={10}
// //                 min={MIN}
// //                 max={MAX}
// //                 onChange={handleChange}
// //                 renderTrack={({ props, children }) => (
// //                   <div
// //                     {...props}
// //                     style={{
// //                       ...props.style,
// //                       height: '4px',
// //                       width: '250px',
// //                       background: getTrackBackground({
// //                         values: value,
// //                         colors: ['#ccc', '#7a9a10', '#ccc'],
// //                         min: MIN,
// //                         max: MAX,
// //                       }),
// //                       borderRadius: '2px',
// //                     }}
// //                   >
// //                     {children}
// //                   </div>
// //                 )}
// //                 renderThumb={({ props }) => (
// //                   <div
// //                     {...props}
// //                     style={{
// //                       ...props.style,
// //                       height: '20px',
// //                       width: '20px',
// //                       borderRadius: '50%',
// //                       backgroundColor: '#7a9a10',
// //                       border: '1px solid #CCC',
// //                     }}
// //                   >
// //                   </div>
// //                 )}
// //               />
// //               <div className='resap'>
// //                 <button className='reset'> Reset</button>
// //                 <button className='apply'>Apply</button>
// //               </div>
// //             </div>
// //             <div className='cat'>
// //               <div>
// //                 <h5>Product Categories
// //                 </h5>
// //               </div>
// //               <div className='productlist'>
// //                 <ul>
// //                   <li><a href="">Essential Oil</a><p>(4)</p></li>
// //                   <li><a href="">soap</a><p>(4)</p></li>
// //                   <li><a href="">tea</a><p>(4)</p></li>
// //                 </ul>
// //               </div>
// //             </div>
// //             <div className='recently'>
// //               <div>
// //                 <h5>Recently Viewed Products</h5>
// //               </div>
// //               <div className='recent'>
// //                 <div className='recentimg'>
// //                   <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg" alt="" />
// //                 </div>
// //                 <div className='recentdes'>
// //                   <p>
// //                     Ayurvedic Soap

// //                   </p>
// //                   <p> £32.00</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default Shopp;


import React, { useContext, useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { FiList, FiGrid } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa';
import './Shopp.scss';
import mainContext from './../../Context/Context';
import { FaShoppingBag } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
function Shopp() {
  const { searchingData } = useContext(mainContext);
  const [column, setColumn] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [value, setValue] = useState([0, 100]);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const MIN = 0;
  const MAX = 1000;
const products = [
  {
    id: 1,
    name: 'Essential Oil',
    type: 'Almond Oil',
    price: '£120.00',
    imgSrc: 'https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg',
    description: 'Euismod dolorem consectetuer, wisi purus provident tellus asperiores aptent, vero malesuada metus porta laoreet tenetur aliquid laboris etiam lacus distinctio habitasse beatae corporis diamlorem. Volutpat. Primis, mollit corrupti odit.'
  },
  {
    id: 2,
    name: 'Essential Oil',
    type: 'Rose Oil',
    price: '£110.00',
    imgSrc: 'https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/essential-olive-oil-300x300.jpg',
    description: 'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.'
  },
  {
    id: 3,
    name: 'Essential Oil',
    type: 'Rose Oil',
    price: '£110.00',
    imgSrc: 'https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/essential-olive-oil-300x300.jpg',
    description: 'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.'
  },
  {
    id: 4,
    name: 'Essential Oil',
    type: 'Rose Oil',
    price: '£110.00',
    imgSrc: 'https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/essential-olive-oil-300x300.jpg',
    description: 'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.'
  },
  {
    id: 5,
    name: 'Essential Oil',
    type: 'Rose Oil',
    price: '£110.00',
    imgSrc: 'https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/essential-olive-oil-300x300.jpg',
    description: 'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.'
  },
  {
    id: 6,
    name: 'Essential Oil',
    type: 'Rose Oil',
    price: '£110.00',
    imgSrc: 'https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/essential-olive-oil-300x300.jpg',
    description: 'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.'
  },
  {
    id: 7,
    name: 'Essential Oil',
    type: 'Rose Oil',
    price: '£110.00',
    imgSrc: 'https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/essential-olive-oil-300x300.jpg',
    description: 'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.'
  },
  {
    id: 8,
    name: 'Essential Oil',
    type: 'Rose Oil',
    price: '£110.00',
    imgSrc: 'https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/essential-olive-oil-300x300.jpg',
    description: 'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.'
  },
  {
    id: 9,
    name: 'Essential Oil',
    type: 'Rose Oil',
    price: '£110.00',
    imgSrc: 'https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/essential-olive-oil-300x300.jpg',
    description: 'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.'
  }
];
;

  return (
    <>
      <section id={column ? 'Shopp' : 'Shopp2'}>
        <div className='shopp'>
          <div className='fd'>
            <div className='fdb'>
              <button
                className='btn btn-primary'
                type='button'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasScrolling'
                aria-controls='offcanvasScrolling'
              >
                <span><astra-woo-filter-icon /></span>
                Filter
              </button>
            </div>
            <div className='fdbf'>
              <div className='fdf'>
                <form className='form' action=''>
                  <select name='product' id='products'>
                    <option>Default sorting</option>
                    <option value='popularity'>Sort by popularity</option>
                    <option value='rating'>Sort by average rating</option>
                    <option value='latest'>Sort by latest</option>
                    <option value='low-to-high'>Sort by price: low to high</option>
                    <option value='high-to-low'>Sort by price: high to low</option>
                  </select>
                </form>
              </div>
              <div className='fbb'>
                <FiGrid className='gr' onClick={() => setColumn(true)} />
                <FiList className='li' onClick={() => setColumn(false)} />
              </div>
            </div>
          </div>

          <div>
            {column ? (
              <div className='container'>
                {products.map((product) => (
                  <div className='card' key={product.id}>
                    <img src={product.imgSrc} alt='' />
                    <div className='overlay'>
                <FaShoppingBag className='icon' />
                <IoEyeSharp className='icon' onClick={() => openModal(product)} />
              </div>
                    <div className='p3'>
                      <p>{product.name}</p>
                      <p>{product.type}</p>
                      <p>{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className='container'>
                {products.map((product) => (
                  <div className='card' key={product.id}>
                    <img src={product.imgSrc} alt='' />
                    <div className='overlay'>
                <FaShoppingBag className='icon' />
                <IoEyeSharp className='icon' onClick={() => openModal(product)} />
              </div>
                    <div className='p4'>
                      <p>{product.name}</p>
                      <p>{product.type}</p>
                      <p>{product.price}</p>
                      <p>{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <div
        className='offcanvas offcanvas-start'
        data-bs-scroll='true'
        data-bs-backdrop='false'
        tabIndex='-1'
        id='offcanvasScrolling'
        aria-labelledby='offcanvasScrollingLabel'
      >
        <div className='offcanvas-header'>
          <button
            type='button'
            className='btn-close text-reset'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
            onClick={toggleFilter}
          ></button>
        </div>
        <div className='offcanvas-body'>
          <div className='searchin'>
            <input
              placeholder='search products...'
              type='text'
              id='search'
              onChange={searchingData}
            />
            <button type='submit'>
              <FaAngleRight />
            </button>
          </div>
          <div className='pricefilter'>
            <h5>Filter by price</h5>
            <div className='price-range-slider'>
              <p className='range-value'>
                <input
                  type='text'
                  id='amount'
                  value={`$${value[0]} - $${value[1]}`}
                  readOnly
                />
              </p>
              <Range
                values={value}
                step={10}
                min={MIN}
                max={MAX}
                onChange={handleChange}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '4px',
                      width: '250px',
                      background: getTrackBackground({
                        values: value,
                        colors: ['#ccc', '#7a9a10', '#ccc'],
                        min: MIN,
                        max: MAX,
                      }),
                      borderRadius: '2px',
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '20px',
                      width: '20px',
                      borderRadius: '50%',
                      backgroundColor: '#7a9a10',
                      border: '1px solid #CCC',
                    }}
                  />
                )}
              />
              <div className='resap'>
                <button className='reset'> Reset</button>
                <button className='apply'>Apply</button>
              </div>
            </div>
            <div className='cat'>
              <h5>Product Categories</h5>
              <ul className='productlist'>
                  <li>
                    <a href=''>category</a>
                    <p>(4)</p>
                    </li>
              </ul>
            </div>
            <div className='recently'>
              <h5>Recently Viewed Products</h5>
              <div className='recent'>
                <div className='recentimg'>
                  <img
                    src='https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic43-free-img-300x300.jpg'
                    alt=''
                  />
                </div>
                <div className='recentdes'>
                  <p>Ayurvedic Soap</p>
                  <p>£32.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shopp;