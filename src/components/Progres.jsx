import { useContext } from "react";
import { FormContext } from "../Context";
export default function Progres() {
  const { steper } = useContext(FormContext);
  return (
    <>
      <ul className="progres h-fit absolute bottom-[30%] flex justify-between w-96">
        <li className={`circle ${steper === 1 && "active"}`}>1</li>
        <li className={`circle ${steper === 2 && "active"}`}>2</li>
        <li className={`circle ${steper === 3 && "active"}`}>3</li>
      </ul>
      <ul className="w-full flex justify-around absolute bottom-1/4">
        <li className="text-blue-500">Step 1: Name</li>
        <li className="text-blue-500">Step 2: Password</li>
        <li className="text-blue-500">Step 3: Submit</li>
      </ul>
    </>
  );
}
