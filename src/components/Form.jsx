import { useFormik } from "formik";
import { useContext } from "react";
import { FormContext } from "../Context";
import { validationSchema } from "../schemas";
import Progres from "./Progres";
import Button from "./Button";
export default function Form() {
  const { step, lang, setStep } = useContext(FormContext);

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
  function handelPrev() {
    step > 1 && setStep((prev) => prev - 1);
  }
  function handelNext() {
    switch (step) {
      case 1:
        !errors.email && setStep((prev) => prev + 1);
        break;
      case 2:
        !errors.password && setStep((prev) => prev + 1);
        break;
      default:
        setStep(step);
        break;
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="absolute top-[35%]">
        {step === 1 && (
          <>
            <label
              className="cursor-pointer text-xl w-full px-2 flex gap-2 justify-around items-center"
              htmlFor="email"
            >
              {lang === "EN" ? "Email" : "الأيميل"}
              <input
                className={`outline-none w-[350px] h-10 ps-2 ${
                  errors.email && touched.email && "iput-error" //error border style
                }`}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                placeholder={lang === "EN" ? "Your email" : "الأيميل"}
                id="email"
                autoFocus
              />
            </label>
            {/* error massage */}
            {errors.email && touched.email && (
              <p className="text-red-500 ms-16">{errors.email}</p>
            )}
          </>
        )}

        {step === 2 && (
          <>
            <label
              className="cursor-pointer text-xl w-full px-2 flex gap-2 justify-around items-center"
              htmlFor="password"
            >
              {lang === "EN" ? "Password" : "الباسورد"}
              <input
                className={`outline-none w-[350px] h-10 ps-2 ${
                  errors.password && touched.password && "iput-error"
                }`}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                placeholder={lang === "EN" ? "Password" : "الباسورد"}
                id="password"
                autoFocus
              />
            </label>
            {errors.password && touched.password && (
              <p className="text-red-500 ms-16">{errors.password}</p>
            )}
          </>
        )}

        {step === 3 && (
          <p className="bg-white font-medium text-xl p-5">
            {lang === "EN" ? "You can submit now" : "يمكنك التسجيل الان"}
          </p>
        )}
      </form>

      <Progres />

      <div className="w-full px-4 absolute bottom-2 flex justify-between">
        <Button
          value={lang === "EN" ? "Prev" : "السابق"}
          onClick={handelPrev}
        />
        {step === 3 ? (
          <Button value={lang === "EN" ? "Submit" : "تسجيل"} />
        ) : (
          <Button
            value={lang === "EN" ? "Next" : "التالي"}
            onClick={handelNext}
          />
        )}
      </div>
    </>
  );
}
