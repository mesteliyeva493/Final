import React, { useState } from 'react';
import './Account.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Account() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Please Enter your username'),
      password: Yup.string()
        .required('Please Enter your password')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
      email: Yup.string().email('Invalid email address').required('Please Enter your email'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section id='Account'>
      <div className='account'>
        <form className='forma' onSubmit={formik.handleSubmit}>
          <h3>Login</h3>
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
          <div className='check'>
            <label htmlFor="check">
              <input id="check" name='check' className='checkk' type="checkbox" />
              Remember me
            </label>
          </div>
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
