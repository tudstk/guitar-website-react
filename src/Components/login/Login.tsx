import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage, FormikHelpers, } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Label from "./Label";
import * as Yup from "yup";

import Navbar from "../navbar/Navbar";

interface LoginValues{
    email:string;
    password:string;
}

const loginSchema = Yup.object().shape({
    email:Yup.string().email("Invalid email"),
    password:Yup.string(),
});

const Login = () => {

    const loginForm = async (values: LoginValues, formik: FormikHelpers<LoginValues>) => {
        console.log(values);
        const { email, password } = values;
    };
    return(
        <div className="overflow-x-hidden overflow-y-hidden">
            <Navbar/>
            <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={loginForm}
            >
            {(formik) => (
                <div className="bg-div-gray flex flex-col justify-center items-center w-screen h-screen">
                    <Form className="bg-navbar-black text-slate-300 mx-0 w-72 md:w-96 p-6 flex flex-col shadow-sm rounded-md max-w-full">
                        <h2 className="text-center text-2xl font-bold">
                        Login
                        </h2>
                        <div className="my-2 flex flex-col">
                            <Label text="Email" htmlFor="email" />
                            <Field
                                id="email"
                                className="bg-navbar-black-2 border-label-border p-2 border-2 rounded-sm"
                                name="email"
                            ></Field>
                            <ErrorMessage
                                component="div"
                                className="text-red-300"
                                name="email"
                            />
                        </div>
                        <div className="my-2 flex flex-col">
                            <Label text="Password" htmlFor="password" />
                            <Field
                                id="password"
                                className="p-2 border-2 border-label-border bg-navbar-black-2"
                                name="password"
                            ></Field>
                            <ErrorMessage
                                component="div"
                                className="text-red-300"
                                name="password"
                            />
                        </div>
                        <button
                            disabled={!formik.isValid || !formik.dirty}
                            type="submit"
                            className="disabled:opacity-50 my-2 px-4 py-2 bg-blue-700 text-white transition-all duration-300"
                            >
                            Log in
                        </button>
                        <div className="flex flex-col">
                            <h5 className="opacity-80">
                                Don't have an account?
                            </h5>
                            <Link to="/signup" className="hover:text-slate-100"> Sign up here!</Link>
                        </div>
                    </Form>
                </div>
            )}
            </Formik>
          
        </div>
    );
};

export default Login;
