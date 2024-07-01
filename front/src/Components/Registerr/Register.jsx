import React, { useContext, useState } from 'react';
import './Register.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import mainContext from '../../Context/Context';
import toast from 'react-hot-toast'
import axios from "axios";
function Registerr() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const { users, setUsers, setError } = useContext(mainContext)
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: '',
      confirmPassword: '',
      role: 'client'
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Email Required').required("Required"),
      username: Yup.string().required("Required"),
      password: Yup.string().required('Password is required').matches(passwordRegex, 'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character (!@#$%^&*)'),
      confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }),
    onSubmit: async (values) => {
      const emailExists = users.some(user => user.email === values.email);
      if (emailExists) {
        toast.error('Email already exists. Please use a different email address.');
      } else if (values.confirmPassword !== values.password) {
        toast.error('Passwords do not match');
      } else {
        await axios.post('http://localhost:5050/users/register', values).then(res => {
          setUsers([...users, res.data])
          formik.resetForm()
          toast.success('You Successfully Registered');
          navigate('/login')
        }).catch(err => {
          setError(err)
        })
      }
    }
  })

  return (
    <section id='Register'>
      <div className='register'>
        <form className='forma' onSubmit={formik.handleSubmit}>
          <h3>Register</h3>
          <input
            placeholder='Username*'
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <div>{formik.errors.username}</div>
          ) : null}

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
          <div className="password-input-container">
            <input
              placeholder='Confirm Password*'
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            <button className='hideshow' type="button" onClick={toggleConfirmPasswordVisibility}>
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div>{formik.errors.confirmPassword}</div>
          ) : null}

          <div className='iba'>
            <button type="submit">Register</button>
  
            <Link to="/login"> login</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Registerr;
