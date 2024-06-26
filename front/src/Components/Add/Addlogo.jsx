import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import mainContext from '../../Context/Context';

function Addlogo() {
    const { data, setData } = useContext(mainContext)
    const formik = useFormik({
        initialValues: {
          img: '',
        },
        validationSchema: Yup.object({
          img: Yup.string()
            .url()
            .required('invalid img'),
        }),
    
    
        onSubmit: async (values) => {
          await axios.post("http://localhost:5050/logo", values).then((res) => {
            setData([...data, res.data])
          })
        }
    
      });
  return (
    <>
       <form onSubmit={formik.handleSubmit}>
              <input
                placeholder='img'
                id="img"
                name="img"
                type="url"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.img}
              />
              {formik.touched.img && formik.errors.img ? (
                <div>{formik.errors.img}</div>
              ) : null}
              <button type="submit">Add</button>
            </form>
    </>
  )
}

export default Addlogo