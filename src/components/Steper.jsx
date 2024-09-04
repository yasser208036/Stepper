import { useContext } from "react";
import Button from "./Button";
import Progres from "./Progres";
import { FormContext } from "../context/MainContext";
import { Formik } from "../context/FormkContext";

export default function Steper() {
  const { step, lang, setStep } = useContext(FormContext);
  const { errors } = useContext(Formik);

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
