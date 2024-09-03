import { useContext } from "react";
import { FormContext } from "../Context";
export default function Progres() {
  const { step, lang } = useContext(FormContext);
  return (
    <>
      <ul className="progres h-fit absolute bottom-[30%] flex justify-between w-96">
        <li className={`circle ${step === 1 && "active"}`}>1</li>
        <li className={`circle ${step === 2 && "active"}`}>2</li>
        <li className={`circle ${step === 3 && "active"}`}>3</li>
      </ul>
      <ul className="w-full flex justify-around absolute bottom-1/4">
        <li className="text-blue-500">
          {lang === "EN" ? "Step 1: Name" : "الخطوة 1: الأسم"}
        </li>
        <li className="text-blue-500">
          {lang === "EN" ? "Step 2: Password" : "الخطوة 2: الباسورد"}
        </li>
        <li className="text-blue-500">
          {lang === "EN" ? "Step 3: Submit" : "الخطوة 3: تسجيل"}
        </li>
      </ul>
    </>
  );
}
