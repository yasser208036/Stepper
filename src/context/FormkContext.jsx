/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { createContext } from "react";
import { validationSchema } from "../schemas";

export const Formik = createContext();
export default function FormkContext({ children }) {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  const val = {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  };
  return <Formik.Provider value={val}>{children}</Formik.Provider>;
}
