import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import mainContext from '../../Context/Context';

function Addcard() {
    const { data, setData } = useContext(mainContext)
    const formik = useFormik({
        initialValues: {
            icon: '',
            title: '',
            description: ''

        },
        validationSchema: Yup.object({
            icon: Yup.string()
                .url()
                .required('invalid img'),
            title: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            description: Yup.string()
                .required('Required'),
        }),


        onSubmit: async (values) => {
            await axios.post("http://localhost:5050/card", values).then((res) => {
                setData([...data, res.data])
            })
        }

    });
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <input
                    placeholder='icon'
                    id="icon"
                    name="icon"
                    type="url"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.img}
                />
                {formik.touched.title && formik.errors.title ? (
                    <div>{formik.errors.title}</div>
                ) : null}
                <input
                    placeholder='title'
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                />
                {formik.touched.title && formik.errors.title ? (
                    <div>{formik.errors.title}</div>
                ) : null}
                <input
                    placeholder='description'
                    id="description"
                    name="description"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                />
                {formik.touched.description && formik.errors.description ? (
                    <div>{formik.errors.description}</div>
                ) : null}
                <button type="submit">Add</button>
            </form>

        </>
    )
}

export default Addcard