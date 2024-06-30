
import React, { useContext } from 'react';
import './BasketP.scss';
import { IoIosClose } from "react-icons/io";
import { basketc } from '../../Context/Basketc';
import { Link } from 'react-router-dom';

function BasketP() {
  const { basket, decrease, increase, deletedBasket, calculateSubtotal } = useContext(basketc);

  return (
    <section id='BasketP'>
      <div className='basketp'>
        <div className='basket'>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {basket.map((product) => (
                  <tr key={product.product._id}>
                    <td scope="row"><IoIosClose onClick={() => deletedBasket(product.product._id)} /></td>
                    <td><img src={product.product.img} alt="" /></td>
                    <td>{product.product.title}</td>
                    <td>{product.product.price}</td>
                    <td>
                      <div className='span2'>
                        <span onClick={() => decrease(product)}>-</span>
                        <span>{product.count}</span>
                        <span onClick={() => increase(product)}>+</span>
                      </div>
                    </td>
                    <td>{product.totalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='cardtotal'>
          <div className='list2'>
            <ul className="list-group2">
              <li className="list-group-item2">
                <div className='h5item'>
                  <h2>Cart Totals</h2>
                </div>
              </li>
              <li className="list-group-item2">
                <p>Subtotal</p>
                <span>{calculateSubtotal()}</span>
              </li>
              <li className="list-group-item2">
                <p>Total</p>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </li>
              <li className="list-group-item2">
                <Link  to="/checkout">  <button>Proceed to checkout</button></Link>
               
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BasketP;
