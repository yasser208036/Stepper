import { useContext } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import { FormContext } from "./Context";
import Progres from "./components/Progres";
import Navbar from "./components/Navbar";

function App() {
  const { steper, setSteper } = useContext(FormContext);
  const { name, setName } = useContext(FormContext);
  const { password, setPassword } = useContext(FormContext);
  const { lang } = useContext(FormContext);

  function handelPrev() {
    steper > 1 && setSteper((prev) => prev - 1);
  }

  function handelNext() {
    switch (steper) {
      case 1:
        name !== "" && setSteper((prev) => prev + 1);
        break;
      case 2:
        password !== "" && setSteper((prev) => prev + 1);
        break;
      default:
        setSteper(steper);
        break;
    }
  }
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
        <div className="absolute top-[35%]">
          {steper === 1 && (
            <Input
              placeholder={lang === "EN" ? "Name" : "الاسم"}
              type="text"
              value={name}
              setFunction={setName}
            />
          )}

          {steper === 2 && (
            <Input
              placeholder={lang === "EN" ? "Password" : "الباسورد"}
              type="password"
              value={password}
              setFunction={setPassword}
            />
          )}

          {steper === 3 && (
            <p className="bg-white font-medium text-xl p-5">
              {lang === "EN" ? "You can submit now" : "يمكنك التسجيل الان"}
            </p>
          )}
        </div>

        <Progres />

        <div className="w-full px-4 absolute bottom-2 flex justify-between">
          <Button
            value={lang === "EN" ? "Prev" : "السابق"}
            onClick={handelPrev}
          />
          {steper === 3 ? (
            <Button value={lang === "EN" ? "Submit" : "تسجيل"} />
          ) : (
            <Button
              value={lang === "EN" ? "Next" : "التالي"}
              onClick={handelNext}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
