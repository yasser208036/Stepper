import { FieldArray, Form, FormikProvider, useFormik } from "formik";
import { validation } from "../schemas";
// import { useState } from "react";

export default function NewForm() {
  // const [count, setcount] = useState(1);
  const formik = useFormik({
    initialValues: {
      name: "",
      phones: [""],
    },
    validationSchema: validation,
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });
  const { values, errors, touched, handleChange, handleBlur } = formik;

  return (
    <FormikProvider value={formik}>
      <Form className="m-auto w-96">
        {/* حقل الاسم */}
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`outline-none w-full h-10 ${
            errors.name && touched.name && "border border-red-500"
          }`}
        />
        {errors.name && touched.name && (
          <p className="text-red-500">{errors.name}</p>
        )}

        {/* إدارة الحقول الديناميكية باستخدام FieldArray */}
        <FieldArray name="phones">
          {({ push, remove }) => (
            <div>
              {values.phones.map((phone, index) => (
                <div key={index} className="mt-4">
                  <label htmlFor={`phones[${index}]`}>
                    Phone number {index + 1}
                  </label>
                  <input
                    type="text"
                    id={`phones[${index}]`}
                    name={`phones[${index}]`}
                    value={phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`outline-none w-full h-10 ${
                      errors.phones &&
                      errors.phones[index] &&
                      touched.phones &&
                      touched.phones[index] &&
                      "border border-red-500"
                    }`}
                  />
                  {errors.phones &&
                    errors.phones[index] &&
                    touched.phones &&
                    touched.phones[index] && (
                      <p className="text-red-500">{errors.phones[index]}</p>
                    )}

                  {/* زر لحذف رقم الهاتف */}
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="text-red-500 mt-2"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => push("")} // إضافة حقل هاتف جديد
                className="bg-blue-500 text-white px-4 py-2 mt-4"
              >
                Add more phone numbers
              </button>
            </div>
          )}
        </FieldArray>

        <button
          type="submit"
          className="block bg-green-500 mx-auto my-5 text-white px-3 py-2 rounded-md"
        >
          Submit
        </button>
      </Form>
    </FormikProvider>
  );
}
