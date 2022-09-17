import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage, FormikHelpers, } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Label from "./Label";
import * as Yup from "yup";

import Navbar from "../navbar/Navbar";

interface AddressValues{
    street:string;
    details:string;
    city:string;
    country:string;
    zipcode:string;
}

const SignUpSchema = Yup.object().shape({
    street:Yup.string().required("Required"),
    details:Yup.string(),
    city:Yup.string().required("Required"),
    country:Yup.string().required("Required"),
    zipcode:Yup.string().required("Required"),
});

const AddressSave = () => {
    let navigate = useNavigate();
    const AddressFunction = async (values: AddressValues, formik: FormikHelpers<AddressValues>) => {
        console.log(values);
        navigate('/');
        // const { firstName, lastName, phoneNumber, email, password, confirmPassword } = values;
    };
    return(
        <div className="overflow-x-hidden overflow-y-hidden">
            <Formik
            initialValues={{street:"", details:"", city:"", country:"", zipcode:""}}
            validationSchema={SignUpSchema}
            onSubmit={AddressFunction}
            >
            {(formik) => (
                <div className="bg-div-gray flex flex-col justify-center items-center w-screen md:h-screen">
                    <Form className="bg-navbar-black text-slate-300 mx-0 w-72 my-8 md:w-120 p-6 flex flex-col shadow-sm rounded-md max-w-full">
                        <h2 className="text-center text-2xl font-bold">
                        Address
                        </h2>
                        <div className="my-2 flex flex-col">
                            <Label text="Street" required={true} htmlFor="street" />
                             <Field
                                id="street"
                                className="p-2 border-2 bg-navbar-black-2 border-label-border rounded-sm"
                                name="street"
                            ></Field>
                            <ErrorMessage
                                 component="div"
                                className="text-red-300"
                                name="street"
                                />
                            </div>
                        <div className="my-2 flex flex-col">
                            <Label text="Details" htmlFor="details" />
                            <Field
                                id="details"
                                className="p-2 border-2 bg-navbar-black-2 border-label-border rounded-sm"
                                name="details"
                                ></Field>
                            <ErrorMessage
                                component="div"
                                className="text-red-300"
                                name="details"
                               />
                        </div>
                        <div className="my-2 flex flex-col">
                            <Label text="City" required={true} htmlFor="city" />
                            <Field
                                id="city"
                                className="p-2 border-2 bg-navbar-black-2 border-label-border rounded-sm"
                                name="city"
                            ></Field>
                            <ErrorMessage
                                component="div"
                                className="text-red-300"
                                name="city"
                            />
                        </div>
                        <div className="my-2 flex flex-col">
                            <Label text="Country" required={true} htmlFor="country" />
                            <Field
                                id="email"
                                className="p-2 border-2 bg-navbar-black-2 border-label-border rounded-sm"
                                name="country"
                            ></Field>
                            <ErrorMessage
                                component="div"
                                className="text-red-300"
                                name="country"
                            />
                        </div>
                        <div className="my-2 flex flex-col">
                            <Label text="Zip Code" required={true} htmlFor="zipcode" />
                            <Field
                                id="zipcode"
                                className="p-2 border-2 bg-navbar-black-2 border-label-border"
                                name="zipcode"
                            ></Field>
                            <ErrorMessage
                                component="div"
                                className="text-red-300"
                                name="zipcode"
                            />
                        </div>
                        <button
                            disabled={!formik.isValid || !formik.dirty}
                            type="submit"
                            className="disabled:opacity-50 my-2 px-4 py-2 bg-blue-700 text-white transition-all duration-300"
                            >
                            Save
                        </button>
                    </Form>
                </div>
            )}
            </Formik>
          
        </div>
    );
};

export default AddressSave;
