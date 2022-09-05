import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage, FormikHelpers, } from "formik";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Label from "./Label";
import * as Yup from "yup";

import Navbar from "../navbar/Navbar";

interface SignUpValues{
    firstName:string;
    lastName:string;
    phoneNumber:string;
    email:string;
    password:string;
    confirmPassword:string;
}

const SignUpSchema = Yup.object().shape({
    firstName:Yup.string().required("Required"),
    lastName:Yup.string().required("Required"),
    phoneNumber:Yup.string().min(10, "Too short").max(15,"Too long").required("Required"),
    email:Yup.string().email("Invalid email").required("Required"),
    password:Yup.string().min(8, "Too short!").max(28, "Too long!").required("Required"),
    confirmPassword:Yup.string().min(8, "Too short!").max(28, "Too long!").required("Required"),
});

const SignUp = () => {
    let navigate = useNavigate();
    const SignUpForm = async (values: SignUpValues, formik: FormikHelpers<SignUpValues>) => {
        console.log(values);
        navigate('/address');
        // const { firstName, lastName, phoneNumber, email, password, confirmPassword } = values;
    };
    return(
        <div className="overflow-x-hidden overflow-y-hidden">
            <Formik
            initialValues={{firstName:"",lastName:"",phoneNumber:"", email: "", password: "", confirmPassword:""}}
            validationSchema={SignUpSchema}
            onSubmit={SignUpForm}
            >
            {(formik) => (
                <div className="bg-div-gray flex flex-col justify-center items-center w-screen md:h-screen">
                    <Form className="mx-0 w-72 my-8 md:w-120 bg-gray-50 p-6 flex flex-col shadow-sm rounded-md max-w-full">
                        <h2 className="text-center text-2xl font-bold">
                        Sign Up
                        </h2>
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="my-2 flex flex-col">
                                <Label text="First Name" required={true} htmlFor="firstName" />
                                <Field
                                    id="firstName"
                                    className="p-2 border-2 border-gray-400 rounded-sm"
                                    name="firstName"
                                ></Field>
                                <ErrorMessage
                                    component="div"
                                    className="text-red-700"
                                    name="firstName"
                                />
                            </div>
                            <div className="my-2 flex flex-col">
                                <Label text="Last Name" required={true} htmlFor="lastName" />
                                <Field
                                    id="lastName"
                                    className="p-2 border-2 border-gray-400 rounded-sm"
                                    name="lastName"
                                ></Field>
                                <ErrorMessage
                                    component="div"
                                    className="text-red-700"
                                    name="lastName"
                                />
                            </div>
                        </div>
                        <div className="my-2 flex flex-col">
                            <Label text="Phone Number" required={true} htmlFor="phoneNumber" />
                            <Field
                                id="phoneNumber"
                                className="p-2 border-2 border-gray-400 rounded-sm"
                                name="phoneNumber"
                            ></Field>
                            <ErrorMessage
                                component="div"
                                className="text-red-700"
                                name="phoneNumber"
                            />
                        </div>
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
                        <div className="my-2 flex flex-col">
                            <Label text="Confirm Password" required={true} htmlFor="confirmPassword" />
                            <Field
                                id="confirmPassword"
                                className="p-2 border-2 border-gray-400"
                                name="confirmPassword"
                            ></Field>
                            <ErrorMessage
                                component="div"
                                className="text-red-700"
                                name="confirmPassword"
                            />
                        </div>
                        <button
                            disabled={!formik.isValid || !formik.dirty}
                            type="submit"
                            className="disabled:opacity-50 my-2 px-4 py-2 bg-blue-700 text-white transition-all duration-300"
                            >
                            Next
                        </button>
                        <div className="flex flex-col">
                            <h5 className="opacity-80">
                                Already have an account?
                            </h5>
                            <Link to="/login"> Log in here!</Link>
                        </div>
                    </Form>
                </div>
            )}
            </Formik>
          
        </div>
    );
};

export default SignUp;
