import { useContext } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import { FormContext } from "./Context";
import Progres from "./components/Progres";

function App() {
  const { steper, setSteper } = useContext(FormContext);
  const { name, setName } = useContext(FormContext);
  const { password, setPassword } = useContext(FormContext);

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
    <div className="container h-screen mx-auto flex justify-center items-center">
      <div className=" relative flex flex-col justify-center items-center rounded-md bg-gray-50 w-[500px] h-[500px]">
        {steper === 1 && (
          <Input
            placeholder="Name"
            type="text"
            value={name}
            setFunction={setName}
          />
        )}

        {steper === 2 && (
          <Input
            placeholder="Password"
            type="password"
            value={password}
            setFunction={setPassword}
          />
        )}

        {steper === 3 && (
          <p className="bg-white font-medium text-xl p-5">You can submit now</p>
        )}

        <Progres />

        <div className="w-full px-4 absolute bottom-2 flex justify-between">
          <Button value="Prev" onClick={handelPrev} />
          {steper === 3 ? (
            <Button value="Submit" />
          ) : (
            <Button value="Next" onClick={handelNext} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
