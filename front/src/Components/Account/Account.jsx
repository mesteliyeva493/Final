import React, { useContext, useState } from 'react';
import './Account.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import mainContext from '../../Context/Context';
import { jwtDecode } from 'jwt-decode'
import bcrypt from 'bcryptjs'
import toast from 'react-hot-toast'
import axios from 'axios';
function Account() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { users, setCurrentUser, setError } = useContext(mainContext)
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required('Please Enter Your Password'),
      email: Yup.string().email('Invalid email address').required('Please Enter Your Gmail'),
    }),
    onSubmit: async (values, { setFieldError }) => {

      const target = users.find((user) => user.email === values.email);
      if (target) {
        const match = await bcrypt.compare(values.password, target.password);
        if (match) {

          await axios.post('http://localhost:5050/users/login', values).then(res => {
            localStorage.setItem('token', res.data.token)
           
            const token = localStorage.getItem('token')
            if (token) {
              const decode = jwtDecode(token)
              setCurrentUser(decode)
            }
            if (target.role === 'admin' || target.role === 'super-admin') {
              navigate('/admin');
            } else {
              navigate('/')
            }
            const upperCase = target.username[0].toUpperCase()
            const username = upperCase + target.username.slice(1)
            toast.success(` Welcome back, ${username} `)


          }).catch(err => {
            setError(err)
          })
          formik.resetForm();
        } else {
          setFieldError('password', 'Incorrect Password,Please Enter Correct Password')

        }
      } else {
        setFieldError('email', 'Email Not Found,Please Enter Correct Email');

      }

    }
  })

  return (
    <section id='Account'>
      <div className='account'>
        <form className='forma' onSubmit={formik.handleSubmit}>
          <h3>Login</h3>
          <input
            placeholder='Email Address*'
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          <div className="password-input-container">
            <input
              placeholder='Password*'
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <button className='hideshow' type="button" onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
          {/*       
          <div className='check'>
            <label htmlFor="check">
              <input id="check" name='check' className='checkk' type="checkbox" />
              Remember me
            </label>
          </div> */}
          <div className='iba'>
            <button type="submit">Log in</button>
            <a className='lost'>Lost your password?</a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Account;
