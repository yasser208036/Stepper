import { FieldArray, Form, FormikProvider, useFormik } from "formik";
import { validation } from "../schemas";
export default function NewForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      phones: [
        {
          countryCode: "",
          number: "",
        },
      ],
    },
    validationSchema: validation,
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });
  const { values, errors, touched, handleChange, handleBlur } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" className="m-auto w-96">
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
        <FieldArray name="phones">
          {({ push, remove }) => (
            <div>
              {values.phones.map((phone, index) => (
                <div key={index} className="mt-4">
                  <label htmlFor={`phones[${index}]`}>
                    Phone number {index + 1}
                  </label>
                  <div className="w-full">
                    <input
                      type="text"
                      name={`phones[${index}].countryCode`}
                      value={phone.countryCode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`outline-none w-1/4 h-10 
                        ${
                          errors.phones &&
                          errors.phones[index] &&
                          errors.phones[index].countryCode &&
                          touched.phones &&
                          touched.phones[index] &&
                          touched.phones[index].countryCode &&
                          "border border-red-500"
                        }`}
                      placeholder="+20"
                    />
                    <input
                      type="text"
                      name={`phones[${index}].number`}
                      id={`phones[${index}]`}
                      value={phone.number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`outline-none w-3/4 h-10 
                      ${
                        errors.phones &&
                        errors.phones[index] &&
                        errors.phones[index].number &&
                        touched.phones &&
                        touched.phones[index] &&
                        touched.phones[index].number &&
                        "border border-red-500"
                      }`}
                    />
                  </div>

                  {errors.phones &&
                    errors.phones[index] &&
                    touched.phones &&
                    touched.phones[index] && (
                      <div className="flex relative h-7">
                        {errors.phones[index].countryCode &&
                          touched.phones[index].countryCode && (
                            <p className="text-red-500 absolute left-0">
                              {errors.phones[index].countryCode}
                            </p>
                          )}
                        {errors.phones[index].number &&
                          touched.phones[index].number && (
                            <p className="text-red-500 absolute right-0">
                              {errors.phones[index].number}
                            </p>
                          )}
                      </div>
                    )}
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="text-red-500 border border-red-500 mt-3"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  push({
                    countryCode: "",
                    number: "",
                  })
                }
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
