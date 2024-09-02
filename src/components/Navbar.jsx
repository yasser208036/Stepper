import { useContext } from "react";
import { FormContext } from "../Context";
import { RiArrowDropDownLine } from "react-icons/ri";

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
              <a onClick={() => setLang("EN")}>EN</a>
              <a onClick={() => setLang("AR")}>AR</a>
            </div>
          </div>
        </li>
      </ul>
    </header>
  );
}
