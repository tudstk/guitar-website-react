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
    email:Yup.string().email("Invalid email").required("Required"),
    password:Yup.string().min(8, "Too short!").max(28, "Too long!").required("Required"),
});

const Login = () => {

    const loginForm = async (values: LoginValues, formik: FormikHelpers<LoginValues>) => {
        console.log(values);
        const { email, password } = values;
    };
    return(
        <>
        
            <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={loginForm}
            >
            {(formik) => (
                <div className="bg-div-gray flex flex-col justify-center items-center w-screen h-screen">
                    <Form className="mx-0 md:w-96 bg-gray-50 p-6 flex flex-col shadow-sm rounded-md max-w-full">
                        <h2 className="text-center text-2xl font-bold">
                        Login
                        </h2>
                        <div className="my-2 flex flex-col">
                            <Label text="Email" required={true} htmlFor="email" />
                            <Field
                                id="email"
                                className="p-2 border-2 border-gray-400 rounded-sm"
                                name="email"
                            ></Field>
                            <ErrorMessage
                                component="div"
                                className="text-red-700"
                                name="email"
                            />
                        </div>
                        <div className="my-2 flex flex-col">
                            <Label text="Password" required={true} htmlFor="password" />
                            <Field
                                id="password"
                                className="p-2 border-2 border-gray-400"
                                name="password"
                            ></Field>
                            <ErrorMessage
                                component="div"
                                className="text-red-700"
                                name="password"
                            />
                        </div>
                        <button
                            disabled={!formik.isValid || !formik.dirty}
                            type="submit"
                            className="disabled:opacity-50 my-2 px-4 py-2 bg-blue-700 text-white transition-all duration-300"
                            >
                            Submit
                        </button>
                        <div className="flex flex-row">
                            <h5 className="opacity-80">
                                Don't have an account?
                            </h5>
                            <Link to="/cart"> Sign up here!</Link>
                        </div>
                    </Form>
                </div>
            )}
            </Formik>
          
        </>
    );
};

export default Login;
