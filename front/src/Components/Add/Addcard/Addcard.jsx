import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './Addcard.scss'; 

import mainContext from '../../../Context/Context';

function Addcard() {
    const { data, setData } = useContext(mainContext);
    
    const formik = useFormik({
        initialValues: {
            icon: '',
            title: '',
            description: ''
        },
        validationSchema: Yup.object({
            icon: Yup.string()
                .url('Invalid URL')
                .required('Icon URL is required'),
            title: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Title is required'),
            description: Yup.string()
                .required('Description is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const res = await axios.post("http://localhost:5050/card", values);
                setData([...data, res.data]);
                resetForm(); 
            } catch (error) {
                console.error('Error adding card', error);
            }
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} className="form-container">
                  <h1>Add Card</h1>
            <div className="form-group">
                <label htmlFor="icon">Icon URL</label>
                <input
                    id="icon"
                    name="icon"
                    type="url"
                    placeholder="Enter icon URL"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.icon}
                    className={`form-control ${formik.touched.icon && formik.errors.icon ? 'error-input' : ''}`}
                />
                {formik.touched.icon && formik.errors.icon ? (
                    <div className="error-message">{formik.errors.icon}</div>
                ) : null}
            </div>

            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Enter title"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                    className={`form-control ${formik.touched.title && formik.errors.title ? 'error-input' : ''}`}
                />
                {formik.touched.title && formik.errors.title ? (
                    <div className="error-message">{formik.errors.title}</div>
                ) : null}
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    name="description"
                    type="text"
                    placeholder="Enter description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                    className={`form-control ${formik.touched.description && formik.errors.description ? 'error-input' : ''}`}
                />
                {formik.touched.description && formik.errors.description ? (
                    <div className="error-message">{formik.errors.description}</div>
                ) : null}
            </div>

            <button type="submit" className="submit-button">Add</button>
        </form>
    );
}

export default Addcard;
