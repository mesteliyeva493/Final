
import React, { useState } from "react";
import './Checkout.scss';
import { HiLockClosed } from "react-icons/hi2";
import ListGroup from 'react-bootstrap/ListGroup';

const Checkout = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionChange = (index) => {
    setActiveAccordion(index);
  };

  return (
    <section id='Checkout'>
      <div className='checkout'>
        <div className='customer'>
          <div className='one'>
            <div className='h5p'>
              <div className='h5r'>
                <div>
                  <h5>Customer information</h5>
                </div>
                <hr />
              </div>
              <div>
                <p>Already have an account? <a href="">Log in</a></p>
              </div>
            </div>
            <div className='naem'>
              <input
                className='naemm'
                placeholder="Username or Email*"
                type="text" id="usernameOrEmail" name="usernameOrEmail" required />
            </div>
          </div>

          <div className='two'>
            <div className='twone'>
              <div>
                <h5>Billing details</h5>
              </div>
              <hr />
            </div>
            <div className='twoform'>
              <div className='fl'>
                <div className='flf'>
                  <input
                    className='fl'
                    placeholder="First Name*"
                    type="text" id="first" name="first" required />
                </div>
                <div className='fll'>
                  <input
                    className='fl'
                    placeholder="Last Name*"
                    type="text" id="last" name="last" required />
                </div>
              </div>
              <div className='coco'>
                <div className='co1'>
                  <input
                    className='cc'
                    placeholder="Company name*"
                    type="text" id="company" name="company" required />
                </div>
                <div className='co2'>
                  <select className='cc2' name="country" id="country">
                    <option>Country</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Azerbaijan">France</option>
                    <option value="Azerbaijan">China</option>
                    <option value="Azerbaijan">Australia</option>
                    <option value="Azerbaijan">Brazil</option>

                  </select>
                </div>
              </div>
              <div className='hoap'>
                <div className='ha'>
                  <div className='house'>
                    <input
                      className='ho'
                      placeholder="House number and street house*"
                      type="text" id="house" name="house" required />
                  </div>
                  <div className='apart'>
                    <input
                      className='ap'
                      placeholder="Apartment, suite, unit, etc. (optional)*"
                      type="text" id="apartment" name="apartment" />
                  </div>
                </div>
              </div>
              <div className='tsp'>
                <div className='tosp'>
                  <div className='town'>
                    <input
                      className='to'
                      placeholder="Town/City*"
                      type="text" id="town" name="town" required />
                  </div>
                  <div className='state'>
                    <input
                      className='st'
                      placeholder="State/Country*"
                      type="text" id="state" name="state" required />
                  </div>
                  <div className='post'>
                    <input
                      className='po'
                      placeholder="Postcode/ZIP*"
                      type="text" id="post" name="post" required />
                  </div>
                </div>
              </div>
              <div className='phone'>
                <div className='telephone'>
                  <input
                    className='to'
                    placeholder="Phone*"
                    type="number" id="phone" name="phone" required />
                </div>
              </div>
            </div>
          </div>
          <div className='three'>
            <hr />
            <div className='note'>
              <textarea id="note" name="note" placeholder='Notes about your order, e.g., special notes for delivery'></textarea>
            </div>
          </div>
          <div className='payment'>
            <div className="accordion-container">
              <div className="accordion-item">
                <input
                  type="radio"
                  name="accordion"
                  id="accordion-1"
                  onChange={() => handleAccordionChange(1)}
                  checked={activeAccordion === 1}
                />
                <label htmlFor="accordion-1">ACash on delivery</label>
                {activeAccordion === 1 && (
                  <div className="accordion-content">
                    <p>Pay with cash upon delivery.</p>
                  </div>
                )}
              </div>
              <div className="accordion-item">
                <input
                  type="radio"
                  name="accordion"
                  id="accordion-2"
                  onChange={() => handleAccordionChange(2)}
                  checked={activeAccordion === 2}
                />
                <label htmlFor="accordion-2">
                  <div className="paypal">
                    <div>
                      PayPal <img src="	https://www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png" alt="" /></div>
                    <div>
                      <p>What is Paypal?</p>
                    </div>

                  </div>
                </label>
                {activeAccordion === 2 && (
                  <div className="accordion-content">
                    <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.

                      .</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="buttonpayment">
            <button className="pay">
              <div>
                <HiLockClosed />
              </div>
              Place Order £228.00</button>
          </div>
        </div>

        <div className='yourorder'>
          <div className="order">
            <div>
              <h5>Your Order</h5>
            </div>
            <div className="ordertable">
              <ul class="list-group">
                <li class="list-group-item">
                  <div className="plist">
                    <p>Product</p>
                    <p>Subtotal</p>
                  </div>
                </li>
                <li class="list-group-item">
                  <div className="plist2">
                    <div className="imp">
                      <div className="impimage">
                        <img src="https://websitedemos.net/ayurveda-04/wp-content/uploads/sites/189/2018/04/pic44-free-img-300x300.jpg" alt="" />
                      </div>
                      <div className="p2">
                        <p> Beardoil </p>
                        <p> ×1</p>
                      </div>
                    </div>
                    <div className="productp">
                      <p>£155.00</p>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div className="plist3">
                    <p>Subtotal</p>
                    <p>£155.00
                    </p>
                  </div>


                </li>
                <li class="list-group-item">
                <div className="plist4">
                    <p>Shipping</p>
                    <p>Flat rate: £8.00
                    </p>
                  </div>
                </li>
                <li class="list-group-item">
                <div className="plist5">
                    <p>Total</p>
                    <p>£163.00
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Checkout;
