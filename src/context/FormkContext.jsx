/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { createContext, useContext } from "react";
import { validationSchema } from "../schemas";
import { FormContext } from "./MainContext";

export const Formik = createContext();
export default function FormkContext({ children }) {
  const { setStep } = useContext(FormContext);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values, actions) => {
        alert(`
          Email: ${values.email}
          Pasword: ${values.password}
          `);
        actions.resetForm();
        setStep(1); // reset step after form submission
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
