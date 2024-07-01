import React from 'react'
import './Contact.scss'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import axios from 'axios';


function Contact() {
  const formik = useFormik({
    initialValues: {
      Email: '',
      Subject: '',
      Message: '',
    },
    validationSchema: Yup.object({
      Email: Yup.string()
        .required('Required'),
      Subject: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      Message: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      await axios.post('http://localhost:5050/contact', values).then(() => {
        toast.success('Your Message Successfully Sended')
        formik.resetForm()

      })
    },
  });
  return (
    <section id='Contact'>
      <div className='contact'>
        <div className='us'>
          <div className='usone'>
            <div className='if' >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.421312723393!2d49.85149987583545!3d40.377354071446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d077c61fef3%3A0xfa4594c97092ca01!2sAF%20Business%20House!5e0!3m2!1sen!2saz!4v1715852391365!5m2!1sen!2saz"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className='ustwo'>
            <div className='iconcontact'>
              <div className='iconC'>
                <BsFillTelephoneFill />
              </div>
              <div className='iconcontact5'>
                <h5>Phone</h5>
                <p>+00 11 222 333444, +00 11 222 333422</p>
              </div>
            </div>
            <div className='iconcontact'>
              <div className='iconC'>
                <MdEmail />
              </div>
              <div className='iconcontact5'>
                <h5>Email</h5>
                <p>ayurveda@example.com | ayurved@example.com
                </p>
                <div>

                </div>
              </div>
            </div>
            <div className='iconcontact'>
              <div className='iconC'>
                <IoLocationSharp />
              </div>
              <div className='iconcontact5'>
                <h5>
                  Address</h5>
                <p> 123 Fifth Avenue, New York, NY 10160, USA

                </p>
              </div>
            </div>
          </div>
        </div>


        <div className='book'>
          <form onSubmit={formik.handleSubmit}>
            <input
              placeholder='Your Email'
              id="Email"
              name="Email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Email}
            />
            {formik.touched.Email && formik.errors.Email ? (
              <div>{formik.errors.Email}</div>
            ) : null}

            <input
              placeholder='Your Subject'
              id="Subject"
              name="Subject"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Subject}
            />
            {formik.touched.Subject && formik.errors.Subject ? (
              <div>{formik.errors.Subject}</div>
            ) : null}


            <textarea
              placeholder='Your Message'
              id="Message"
              name="Message"
              type="text"
              rows={5}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Message}
            />
            {formik.touched.Message && formik.errors.Message ? (
              <div>{formik.errors.Message}</div>
            ) : null}

            <button type="submit">Book An Appointment</button>
          </form>

        </div>

      </div>

    </section>
  )
}

export default Contact


