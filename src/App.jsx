import "./App.css";
import { useContext } from "react";
import { FormContext } from "./context/MainContext";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Steper from "./components/Steper";

function App() {
  const { lang } = useContext(FormContext);
  return (
    <div className="container h-screen mx-auto">
      <Navbar />
      <div
        style={{ direction: lang === "EN" ? "ltr" : "rtl" }}
        className=" mx-auto mt-20 relative flex flex-col items-center rounded-md bg-gray-50 w-[500px] h-[400px]"
      >
        <h1 className="text-xl mt-10 font-semibold">
          {lang === "EN" ? "Log in" : "تسجيل الدخول"}
        </h1>
        <Form />
        <Steper />
      </div>
    </div>
  );
}

export default App;
