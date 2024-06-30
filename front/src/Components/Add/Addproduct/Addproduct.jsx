import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './Addproduct.scss'; 

import mainContext from '../../../Context/Context';

function Addproduct() {
  const { data, setData } = useContext(mainContext);

  const formik = useFormik({
    initialValues: {
      img: '',
      name: '',
      title: '',
      price: '',
      description: '',
      category: '',
      tags: '',
    },
    validationSchema: Yup.object({
      img: Yup.string()
        .url('Invalid URL')
        .required('Image URL is required'),
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Name is required'),
      title: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Title is required'),
      price: Yup.number()
        .typeError('Price must be a number')
        .required('Price is required'),
      description: Yup.string()
        .required('Description is required'),
      category: Yup.string()
        .required('Category is required'),
      tags: Yup.string()
        .matches(/^[\w\s]+(?:,[\w\s]*)*$/, 'Tags must be alphanumeric and separated by commas')
        .required('Tags are required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const tagsArray = values.tags.split(',').map(tag => tag.trim());
        const productData = { ...values, tags: tagsArray };

        const res = await axios.post("http://localhost:5050/product", productData);
        setData([...data, res.data]);
        resetForm(); 
      } catch (error) {
        console.error('Error adding product', error);
      }
    }
  });

  return (
    <div className="add-product-container">
      <h1>Add Product</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="img">Image URL</label>
          <input
            id="img"
            name="img"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.img}
          />
          {formik.touched.img && formik.errors.img ? (
            <div className="error-message">{formik.errors.img}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error-message">{formik.errors.name}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="error-message">{formik.errors.title}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price ? (
            <div className="error-message">{formik.errors.price}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="error-message">{formik.errors.description}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <input
            id="category"
            name="category"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
          />
          {formik.touched.category && formik.errors.category ? (
            <div className="error-message">{formik.errors.category}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="tags">Tags (comma separated)</label>
          <input
            id="tags"
            name="tags"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tags}
          />
          {formik.touched.tags && formik.errors.tags ? (
            <div className="error-message">{formik.errors.tags}</div>
          ) : null}
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default Addproduct;
