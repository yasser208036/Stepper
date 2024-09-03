import { createContext, useState } from "react";

export const FormContext = createContext();
// eslint-disable-next-line react/prop-types
export default function Context({ children }) {
  const [step, setStep] = useState(1);
  const [lang, setLang] = useState("EN");

  const values = {
    step,
    setStep,
    lang,
    setLang,
  };
  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
}
