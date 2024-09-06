import { FieldArray, Form, FormikProvider, useFormik } from "formik";
import { validation } from "../schemas";
import { useState } from "react";
export default function NewForm() {
  const [countryCod, setCountryCode] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      phones: [
        {
          countryCode: countryCod,
          number: "",
        },
      ],
    },
    validationSchema: validation,
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });
  const { values, errors, touched, handleChange, handleBlur, setFieldValue } =
    formik;
  const formatPhoneNum = (value) => {
    const phoneNum = value.replace(/[^\d]/g, "");
    if (phoneNum.length < 4) return phoneNum;
    if (phoneNum.length < 7) {
      return `(${phoneNum.slice(0, 3)}) ${phoneNum.slice(3)}`;
    }
    return `(${phoneNum.slice(0, 3)}) ${phoneNum.slice(3, 6)}-${phoneNum.slice(
      6,
      10
    )}`;
  };
  const handelCountryCode = (countryCode) => {
    setCountryCode(countryCode);
    values.phones.forEach((phone, i) =>
      setFieldValue(`phones[${i}].countryCode`, countryCode)
    );
  };
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" className="m-auto w-96">
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Type your name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`ps-3 capitalize outline-none w-full h-10 ${
            errors.name && touched.name ? "border-red-500" : "border-blue-500"
          }`}
        />
        {errors.name && touched.name && (
          <p className="text-red-500">{errors.name}</p>
        )}
        <FieldArray name="phones">
          {({ push, remove }) => (
            <div>
              <div className="p-4 ">
                <label htmlFor="countryCode">Country code :</label>
                <select
                  className="ms-4 border border-blue-500 outline-none p-2 rounded-md"
                  name=""
                  id="countryCode"
                  onChange={(e) => handelCountryCode(e.target.value)}
                >
                  <option value="">Select country code</option>
                  <option value="+20">Egypt</option>
                  <option value="+966">Saudi Arabia</option>
                  <option value="+971">United Arab Emirates</option>
                </select>
              </div>
              {values.phones.map((phone, index) => (
                <div key={index}>
                  <label htmlFor={`phones[${index}]`}>
                    Phone number {index + 1}
                  </label>
                  <div className="w-full flex justify-between">
                    <input
                      type="text"
                      name={`phones[${index}].countryCode`}
                      value={phone.countryCode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`ps-3 outline-none w-[15%] h-10 
                        ${
                          errors.phones &&
                          errors.phones[index] &&
                          errors.phones[index].countryCode &&
                          touched.phones &&
                          touched.phones[index] &&
                          touched.phones[index].countryCode
                            ? "border-red-500"
                            : "border-blue-500"
                        }`}
                      placeholder="+20"
                      readOnly
                    />
                    <input
                      type="text"
                      name={`phones[${index}].number`}
                      id={`phones[${index}]`}
                      value={formatPhoneNum(phone.number)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Type your phone number"
                      className={`ps-3 outline-none w-3/4 h-10 
                      ${
                        errors.phones &&
                        errors.phones[index] &&
                        errors.phones[index].number &&
                        touched.phones &&
                        touched.phones[index] &&
                        touched.phones[index].number
                          ? "border-red-500"
                          : "border-blue-500"
                      }`}
                    />
                  </div>
                  <div className="h-7">
                    {errors.phones &&
                      errors.phones[index] &&
                      touched.phones &&
                      touched.phones[index] && (
                        <div className="flex relative">
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
                  </div>
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
                    countryCode: countryCod,
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
