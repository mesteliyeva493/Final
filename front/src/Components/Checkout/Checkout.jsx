
import React, { useContext, useState } from "react";
import './Checkout.scss';
import { HiLockClosed } from "react-icons/hi2";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import mainContext from "../../Context/Context";
import { basketc } from "../../Context/Basketc";
import { loadStripe } from '@stripe/stripe-js';

import axios from 'axios';
import toast from 'react-hot-toast';
const Checkout = () => {
  const { currentUser, setOrders, orders } = useContext(mainContext)
  const { basket } = useContext(basketc)
  const [activeAccordion, setActiveAccordion] = useState(null);
  const handleAccordionChange = (index) => {
    setActiveAccordion(index);
  };
  let basketTotalPrice = 0


  const formik = useFormik({
    initialValues: {
      userId: null,
      items: [],
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      house: '',
      apartment: '',
      town: '',
      state: '',
      post: '',
      phone: '',
      company: '',
      status: 'Pending'

    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      company: Yup.string()
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      house: Yup.string().required('House number and street are required'),
      apartment: Yup.string(),
      town: Yup.string().required('Town/City is required'),
      country: Yup.string().required('Country is required'),
      state: Yup.string().required('State/Country is required'),
      post: Yup.string().required('Postcode/ZIP is required'),
      phone: Yup.string().required('Phone number is required'),


    }),
    onSubmit: async (values) => {
      const basketItems = basket.map((item) => item);
      const postedProduct = {
        userId: currentUser ? currentUser.id : null,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        country: values.country,
        house: values.house,
        apartment: values.apartment,
        town: values.town,
        state: values.state,
        post: values.post,
        phone: values.phone,
        company: values.company,
        items: basketItems,
        totalPrice: basketTotalPrice,
      }
      const publishKey = 'pk_test_51PXpTxRrOUR7xvjhs41vUodqiFR61xejZwmMoisbg5tX8SqznFQfTWz1ZxkCXtmVWb8RjfRImy2LiY88DnXqFERf00IMOKs3AK'
      const productsContent = {
        products: basket
      };
      const stripe = await loadStripe(publishKey);
      const res = await axios.post('http://localhost:5050/payment', productsContent);

      await axios.post('http://localhost:5050/orders', postedProduct).then(res => {
        setOrders([...orders, res.data])
        localStorage.setItem('basket', JSON.stringify([]))
      })

      const result = await stripe.redirectToCheckout({
        sessionId: res.data.id,
      });
      if (result.error) {
        throw new Error(result.error.message);
      } else {
        toast.success('Payment successful!');

      }
    },
  });
  return (
    <section id='Checkout'>
      <div className='checkout'>
        <form onSubmit={formik.handleSubmit} className='customer'>
          <div className='one'>
            <div className='h5p'>
              <div className='h5r'>
                <div>
                  <h5>Customer information</h5>
                </div>
                <hr />
              </div>
              <div>
                <p>Already have an account?
                  <Link to="/login"> login</Link></p>
              </div>
            </div>
            <div className='naem'>
              <input
                className='naemm'
                placeholder=" Email*"
                type="text"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}

              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
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
                    type="text"
                    id="firstName"
                    name="firstName"

                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}

                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                  ) : null}


                </div>
                <div className='fll'>
                  <input
                    className='fl'
                    placeholder="Last Name*"
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div>{formik.errors.lastName}</div>
                  ) : null}


                </div>
              </div>
              <div className='coco'>
                <div className='co1'>
                  <input
                    className='cc'
                    placeholder="Company name*"
                    type="text"
                    id="company"
                    name="company"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.company}
                  />
                  {formik.touched.company && formik.errors.company ? (
                    <div>{formik.errors.company}</div>
                  ) : null}
                </div>
                <div className='co2'>
                  <select className='cc2'
                    id="country"
                    name="country"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.country}>
                    <option hidden selected>Country</option>
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
                      type="text"
                      id="house"

                      name="house"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.house} />
                    {formik.touched.house && formik.errors.house ? (
                      <div>{formik.errors.house}</div>
                    ) : null}
                  </div>
                  <div className='apart'>
                    <input
                      className='ap'
                      placeholder="Apartment, suite, unit, etc. (optional)*"
                      type="text"
                      id="apartment"
                      name="apartment"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.apartment} />
                    {formik.touched.apartment && formik.errors.apartment ? (
                      <div>{formik.errors.apartment}</div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className='tsp'>
                <div className='tosp'>
                  <div className='town'>
                    <input
                      className='to'
                      placeholder="Town/City*"
                      type="text"
                      id="town"
                      name="town"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.town} />
                    {formik.touched.town && formik.errors.town ? (
                      <div>{formik.errors.town}</div>
                    ) : null}
                  </div>
                  <div className='state'>
                    <input
                      className='st'
                      placeholder="State/Country*"
                      type="text"
                      id="state"
                      name="state"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.state} />
                    {formik.touched.town && formik.errors.town ? (
                      <div>{formik.errors.town}</div>
                    ) : null}
                  </div>
                  <div className='post'>
                    <input
                      className='po'
                      placeholder="Postcode/ZIP*"
                      type="text" id="post" name="post" required
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.post} />
                    {formik.touched.post && formik.errors.post ? (
                      <div>{formik.errors.post}</div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className='phone'>
                <div className='telephone'>
                  <input
                    className='to'
                    placeholder="Phone*"
                    type="number"
                    id="phone"
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone} />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div>{formik.errors.phone}</div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="buttonpayment mt-3">
            <button type="submit" className="pay">
              <div>
                <HiLockClosed />
              </div>
              Place Order </button>
          </div>
        </form>


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
                {
                  basket?.map((item, index) => {
                    basketTotalPrice += item.totalPrice
                    return <li key={index} class="list-group-item">
                      <div className="plist2">
                        <div className="imp">
                          <div className="impimage">
                            <img src={item.product.img} alt="" />
                          </div>
                          <div className="p2">
                            <p> {item.product.title} </p>
                            <p> ×{item.count}</p>
                          </div>
                        </div>
                        <div className="productp">
                          <p>£{item.totalPrice}</p>
                        </div>
                      </div>
                    </li>
                  })
                }
                <li class="list-group-item">
                  <div className="plist3">
                    <p>Subtotal</p>
                    <p>£{basketTotalPrice}
                    </p>
                  </div>


                </li>
                {/* <li class="list-group-item">
                <div className="plist4">
                    <p>Shipping</p>
                    <p>Flat rate: £8.00
                    </p>
                  </div>
                </li> */}
                <li class="list-group-item">
                  <div className="plist5">
                    <p>Total</p>
                    <p>£{basketTotalPrice}
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
