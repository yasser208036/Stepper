import "./App.css";
import { useContext } from "react";
// import Button from "./components/Button";
// import Input from "./components/Input";
import { FormContext } from "./Context";
// import Progres from "./components/Progres";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

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

        {/* <div className="absolute top-[35%]">
          {step === 1 && (
            <Input
              placeholder={lang === "EN" ? "Name" : "الاسم"}
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          )}

          {step === 2 && (
            <Input
              placeholder={lang === "EN" ? "Password" : "الباسورد"}
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          )}

          {step === 3 && (
            <p className="bg-white font-medium text-xl p-5">
              {lang === "EN" ? "You can submit now" : "يمكنك التسجيل الان"}
            </p>
          )}
        </div> */}

        <Form />
      </div>
    </div>
  );
}

export default App;
