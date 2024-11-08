import React, { useContext, useState } from 'react';
import './Our.scss';
import { FaShoppingBag } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import mainContext from '../../../Context/Context';
import { basketc } from '../../../Context/Basketc';
import ShopDetail from './../../../Pages/Client/ShopDetail/ShopDetail';
import Product from './../../../Pages/Admin/Product/Product';
import toast from 'react-hot-toast';

function Our() {
  const { addBasket, decrease, increase } = useContext(basketc);
  const { product, currentUser } = useContext(mainContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    console.log('Opening modal for product:', product);
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
          {product.slice(0, 4).map((products, index) => (
            <div key={index} className="card"  >
              <a href={'/shopdetail/' + products._id}>
                <img src={products.img} alt={products.name} />
              </a>
              <div className='overlay'>
                <FaShoppingBag className='icon' onClick={() => {
                  if (currentUser) {

                    addBasket(products)
                  } else {
                    toast.error('First login please')
                  }
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
                <img src={selectedProduct.img} alt={selectedProduct.name} />
              </div>
              <div className='firstdes'>
                <div className='des1'>
                  <div>
                    <p>{selectedProduct.title}</p>
                  </div>
                </div>
                <div className='des2'>
                  <h6>{selectedProduct.name}</h6>
                  <p className='price'>£{selectedProduct.price}</p>
                  <p>{selectedProduct.description}</p>
                </div>
                <div className='des3'>
                  <div className='span'>
                    <span onClick={() => {
                      if (currentUser) {

                        decrease(selectedProduct)

                      } else {
                        toast.error('First login please')
                      }
                    }

                    }>-</span>
                    <span>{selectedProduct.count}</span>
                    <span onClick={() => {
                      if (currentUser) {

                        increase(selectedProduct)

                      } else {
                        toast.error('First login please')
                      }

                    } }>+</span>
                </div>
                <div>
                  <button onClick={() => {
                    if (currentUser) {

                      addBasket(selectedProduct)

                    } else {
                      toast.error('First login please')
                    }
                  }} >Add to cart</button>
                </div>
              </div>
              <hr />
              <div className='des4'>
                <div>
                  <p>Category:  <span> {selectedProduct.category.title} </span></p>
                </div>
                <div>
                  <p>Tags:
                    {selectedProduct.tags?.map((tag, index) => (
                      <span className='sp' key={index}>{tag.title}</span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}
    </section >
  );
}

export default Our;
