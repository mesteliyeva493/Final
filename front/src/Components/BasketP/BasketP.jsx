// import React from 'react'
// import './BasketP.scss';
// import { IoIosClose } from "react-icons/io";

// function BasketP() {
//   return (
//     <section id='BasketP'>
//       <div className='basketp'>
//         <div className='basket'>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th scope="col"></th>
//                 <th scope="col"></th>
//                 <th scope="col">Product</th>
//                 <th scope="col">Price</th>
//                 <th scope="col">Quantity</th>
//                 <th scope="col">Subtotal</th>

//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td scope="row"><IoIosClose />
//                 </td>
//                 <td>
//                   <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic06-free-img-300x300.jpg" alt="" />
//                 </td>
//                 <td> <a href=""></a>Ayurvedic Soap</td>
//                 <td>£120.00</td>
//                 <td>
//                   <div className='span2'>
//                     <span>-</span>
//                     <span>1</span>
//                     <span>+</span>
//                   </div>
//                 </td>
//                 <td>£120.00</td>
//               </tr>


//             </tbody>
//           </table>
//         </div>
//         <div className='cardtotal'>
//           <div className='list2'>

//             <ul class="list-group2">
//               <li class="list-group-item2">
//                 <div className='h5item'>
//                   <h2>Cart Totals</h2>
//                 </div>
//               </li>
//               <li class="list-group-item2">
//                 <p>Subtotal</p>
//                 <span>120.00</span>
//               </li>
//               <li class="list-group-item2">
//                 <p>Total</p>
//                 <span>128.00</span>

//               </li>
//               <li class="list-group-item2">
//                 <button>
//                   Proceed to checkout
//                 </button>
//               </li>

//             </ul>
//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default BasketP
import React, { useContext } from 'react';
import './BasketP.scss';
import { IoIosClose } from "react-icons/io";
import { basketc } from '../../Context/Basketc';

function BasketP() {
  const {basket,decrease,increase,deletedBasket}=useContext(basketc)
  console.log(basket)
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
            

{basket.map((products) => (
                  <tr key={products.product.id}>
                    <td scope="row"><IoIosClose onClick={()=>{
                      deletedBasket(products._id)
                    }}/></td>
                    <td>
                      <img src={products.product.img} alt="" />
                    </td>
                    <td>{products.product.title}</td>
                    <td>{products.product.price}</td>
                    <td>
                      <div className='span2'>
                        <span onClick={() => decrease(products)}>-</span>
                        <span>{products.count}</span>
                        <span onClick={() => increase(products)}>+</span>
                      </div>
                    </td>
                    <td>{products.totalPrice}</td>
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
                <span>120.00</span>
              </li>
              <li className="list-group-item2">
                <p>Total</p>
                <span>128.00</span>
              </li>
              <li className="list-group-item2">
                <button>
                  Proceed to checkout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BasketP;
