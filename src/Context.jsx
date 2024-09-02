import { createContext, useState } from "react";

export const FormContext = createContext();
// eslint-disable-next-line react/prop-types
export default function Context({ children }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [steper, setSteper] = useState(1);

  const values = { name, setName, password, setPassword, steper, setSteper };
  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
}
