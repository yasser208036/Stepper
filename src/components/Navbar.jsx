import { useContext } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FormContext } from "../context/MainContext";

export default function Navbar() {
  const { lang, setLang } = useContext(FormContext);
  return (
    <header className="bg-gray-50 h-14 flex justify-end items-center px-3">
      <ul>
        <li>
          <div className="relative dropdown mr-16">
            <button className="flex items-center bg-slate-800 text-white px-4 py-2 rounded-md">
              {lang}
              <RiArrowDropDownLine style={{ fontSize: "25px" }} />
            </button>
            <div className="dropdown-content hidden absolute right-0 bg-gray-100 min-w-40 shadow-md z-10">
              <span onClick={() => setLang("EN")}>EN</span>
              <span onClick={() => setLang("AR")}>AR</span>
            </div>
          </div>
        </li>
      </ul>
    </header>
  );
}
