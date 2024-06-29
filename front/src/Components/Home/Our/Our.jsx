
import React, { useContext, useState } from 'react';
import './Our.scss';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import mainContext from '../../../Context/Context';
import { basketc } from '../../../Context/Basketc';



function Our() {
  const {addBasket}=useContext(basketc)
  const {product}=useContext(mainContext)
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
          {product.slice(0,4).map((products, index) => (
            <div key={index} className="card">
              {/* <Link to={`/${products._id}`} >
               
              </Link> */}
               <img src={products.img} alt={products.name} />
              <div className='overlay'>
                <FaShoppingBag className='icon' onClick={()=>{
                  addBasket(products)
                }} />
                <IoEyeSharp className='icon' onClick={() => openModal(products)} />
              </div>
              <div className='card-desc'>
                <p>{products.title}</p>
                <h6>{products.name}</h6>
                <p>${products.price}</p>
    
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
                        <img src={detail.img}alt="" />
                    </div>
                    <div className='firstdes'>
                        <div className='des1'>
                            <div>
                                <p>{detail.title}</p>
                            </div>
                            
                        </div>
                        <div className='des2'>
                            <h6>{detail.name}</h6>
                            <p className='price'>£{detail.price     }</p>
                            <p>{detail.description}</p>
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
                                <p>category:{detail.category}</p>
                            </div>
                            <div>
                                <p>tags:{detail.tags}</p>
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