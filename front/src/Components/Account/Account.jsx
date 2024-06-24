import React from 'react'
import './Account.scss'
import { useFormik } from 'formik';
import * as Yup from 'yup';
function Account() {
  const formik = useFormik({
    initialValues: {
      Username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Please Enter your username'),
      password: Yup
        .string()
        .required('Please Enter your password')
        .matches(
          "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
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

          <input
            placeholder='Password*'
            id="password"
            name="password"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
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
  )
}

export default Account