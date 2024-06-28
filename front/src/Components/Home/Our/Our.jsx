

// import React, { useState } from 'react';
// import './Our.scss';
// import { Link } from 'react-router-dom';
// import { FaShoppingBag } from "react-icons/fa";
// import { IoEyeSharp } from "react-icons/io5";


// const products = [
//   {
//     imgSrc: "https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/lemon-tea-bag-300x300.jpg",
//     category: "tea",
//     name: "Cinnamon Tea",
//     price: "$56.00"
//   },
//   {
//     imgSrc: "https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/lemon-tea-bag-300x300.jpg",
//     category: "tea",
//     name: "Cinnamon Tea",
//     price: "$56.00"
//   },
//   {
//     imgSrc: "https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/lemon-tea-bag-300x300.jpg",
//     category: "tea",
//     name: "Cinnamon Tea",
//     price: "$56.00"
//   },
//   {
//     imgSrc: "https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/lemon-tea-bag-300x300.jpg",
//     category: "tea",
//     name: "Cinnamon Tea",
//     price: "$56.00"
//   },

// ];

// function Our() {


//   return (
//     <section id='our'>
//       <div className='container'>
//         <div className='our'>
//           <h2>Our Recent Products!</h2>
//         </div>
//         <div className="productC">
//           {products.map((product, index) => (
//             <div key={index} className="card">
//               <Link to={"shopdetail"}>
//                 <img src={product.imgSrc} alt={product.name} />
//               </Link>
//               <div className='overlay'>
//                 <FaShoppingBag className='icon' />
             
//                 <IoEyeSharp className='icon' />
//               </div>
//               <div className='card-desc'>
//                 <p>{product.category}</p>
//                 <h6>{product.name}</h6>
//                 <p>{product.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div>
      
       
//       </div>
//     </section>
//   );
// }

// export default Our;
import React, { useState } from 'react';
import './Our.scss';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const products = [
  {
    imgSrc: "https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/lemon-tea-bag-300x300.jpg",
    category: "tea",
    name: "Cinnamon Tea",
    price: "$56.00",
    description:"    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam dolore nemo quia! Nulla quas similique saepe reiciendis possimus assumenda nam error officiis, vero quis esse dolore. Nulla quisquam esse ex.",

  },
  {
    imgSrc: "https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/lemon-tea-bag-300x300.jpg",
    category: "tea",
    name: "Cinnamon Tea",
    price: "$56.00",
    description:"    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam dolore nemo quia! Nulla quas similique saepe reiciendis possimus assumenda nam error officiis, vero quis esse dolore. Nulla quisquam esse ex.",

  },
  {
    imgSrc: "https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/lemon-tea-bag-300x300.jpg",
    category: "tea",
    name: "Cinnamon Tea",
    price: "$56.00",
    description:"    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam dolore nemo quia! Nulla quas similique saepe reiciendis possimus assumenda nam error officiis, vero quis esse dolore. Nulla quisquam esse ex.",
  },
  {
    imgSrc: "https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/lemon-tea-bag-300x300.jpg",
    category: "tea",
    name: "Cinnamon Tea",
    price: "$56.00",
    description:"    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam dolore nemo quia! Nulla quas similique saepe reiciendis possimus assumenda nam error officiis, vero quis esse dolore. Nulla quisquam esse ex.",

  },
];

function Our() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id='our'>
      <div className='container'>
        <div className='our'>
          <h2>Our Recent Products!</h2>
        </div>
        <div className="productC">
          {products.map((product, index) => (
            <div key={index} className="card">
              <Link to={"shopdetail"}>
                <img src={product.imgSrc} alt={product.name} />
              </Link>
              <div className='overlay'>
                <FaShoppingBag className='icon' />
                <IoEyeSharp className='icon' onClick={() => openModal(product)} />
              </div>
              <div className='card-desc'>
                <p>{product.category}</p>
                <h6>{product.name}</h6>
                <p>{product.price}</p>
              
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>

            <div className='first'>
                    <div className='firstimg'>
                    <img src={selectedProduct.imgSrc} alt={selectedProduct.name} />
                    </div>
                    <div className='firstdes'>
                        <div className='des1'>
                            <div>
                            <p>{selectedProduct.category}</p>
                            </div>
                          
                        </div>
                        <div className='des2'>
                        <h6>{selectedProduct.name}</h6>
                        <p>{selectedProduct.price}</p> 
                            <p>{selectedProduct.description}</p> 
                        </div>
                        <div className='des3'>
                            <div className='span'>
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                            <div>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    
                        <hr />
                        <div className='des4'>
                            <div>
                                <p>category:</p>
                            </div>
                            <div>
                                <p>tags:</p>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Our;
