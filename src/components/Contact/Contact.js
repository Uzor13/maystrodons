import React, {useState, useContext} from 'react';
import Nav from "../Hero/Nav/Nav";
import Logo from "../../assets/img/MAYSTRODONS.svg";
import {useFormik} from "formik";
import {DataContext} from "../../context/Data/DataContext";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";


const Contact = () => {

    const {addContact, message} = useContext(DataContext)

    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.message) {
            errors.message = 'Required';
        }
        return errors;
    };

    const [show, setShow] = useState(false);
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },
        validate,
        onSubmit: values => {
            addContact({
                name: values.name,
                email: values.email,
                message: values.message
            })
        }
    })

    return (
        <div className="contact">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Maystrodons - Contact</title>
            </Helmet>
            <>
                <Nav show={show} setShow={setShow}/>
                <header>
                    <div className="outer-nav">
                        <Link to="/" className="nav-brand">
                            <img src={Logo} className="logo" alt=""/>
                            <h1 style={{fontSize: "20px"}}>MAYSTRODONS</h1>
                        </Link>
                        <div className="cta-nav">
                            <i className="fas fa-bars" onClick={() => setShow(true)}/>
                        </div>
                    </div>
                </header>
            </>
            <div className="contact-form">
                <h1 className="contact-title">REACH OUT TO US FOR ANY INQUIRY</h1>
                {message && <p>{message}</p>}
                <form className="" onSubmit={formik.handleSubmit}>
                    <div className="mb-3 mt-5">
                        <input type="text" placeholder="Full Name*" name="name" value={formik.values.name}
                               onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        {formik.touched.name && formik.errors.name ?
                            <div className="text-danger form-text">{formik.errors.name}</div> : null}
                    </div>
                    <div className="mb-3">
                        <input type="email" placeholder="Email Address*" name="email" value={formik.values.email}
                               onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        {formik.touched.email && formik.errors.email ?
                            <div className="text-danger form-text">{formik.errors.email}</div> : null}
                    </div>
                    <div className="mb-3">
                        <textarea placeholder="Write a message*" id="message" rows="3" value={formik.values.message}
                                  onChange={formik.handleChange} name="message" onBlur={formik.handleBlur}/>
                        {formik.touched.message && formik.errors.message ?
                            <div className="text-danger form-text">{formik.errors.message}</div> : null}
                    </div>
                    <button type="submit" className="">Send Message</button>
                </form>
            </div>

        </div>

    );
};

export default Contact;
