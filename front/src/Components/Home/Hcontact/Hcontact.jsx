import React from 'react'
import './Hcontact.scss'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { useFormik } from 'formik';
import * as Yup from 'yup';


function Hcontact() {
  const formik = useFormik({
    initialValues: {
      Name: '',
      Subject: '',
      Message: '',
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      Subject: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      Subject: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <section id='Hcontact'>
      <div className='hcontact'>
        <div className='us'>
          <div className='usone'>
            <div>
              <p >Author Labpriosam Ipsum</p>
              <hr />
            </div>
            <div>
              <h5> Contact Us For  All Your  Health Related Queries!
              </h5>
              <p className='pl'>Sunt hic! Libero malesuada! Id praesent libero do, conubia cras distinctio corrupti asperiores feugiat aptent dictumst molestie mus elit quaerat. Habitant bitasse turpis congue nostrum.</p>
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
              placeholder='Your Name'
              id="Name"
              name="Name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Name}
            />
            {formik.touched.Name && formik.errors.Name ? (
              <div>{formik.errors.Name}</div>
            ) : null}

            <input
              placeholder='Your Subject'
              id="subject"
              name="subject"
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
              id="message"
              name="message"
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

export default Hcontact