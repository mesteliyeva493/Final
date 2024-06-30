import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './Addlogo.scss'; 
import mainContext from '../../../Context/Context';

function Addlogo() {
    const { data, setData } = useContext(mainContext);
    
    const formik = useFormik({
        initialValues: {
            img: '',
        },
        validationSchema: Yup.object({
            img: Yup.string()
                .url('Invalid URL')
                .required('Image URL is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const res = await axios.post("http://localhost:5050/logo", values);
                setData([...data, res.data]);
                resetForm();  
            } catch (error) {
                console.error('Error adding logo', error);
            }
        }
    });

    return (
        <div className="form-container"> 
              <h1>Add Logo</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="img">Image URL</label>
                    <input
                        id="img"
                        name="img"
                        type="url"
                        placeholder="Enter image URL"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.img}
                        className={formik.touched.img && formik.errors.img ? 'error-input' : ''}
                    />
                    {formik.touched.img && formik.errors.img ? (
                        <div className="error-message">{formik.errors.img}</div>
                    ) : null}
                </div>

                <button type="submit" className="submit-button">Add</button>
            </form>
        </div>
    );
}

export default Addlogo;
