/* eslint-disable react/prop-types */
export default function Input({ placeholder, type, value, setFunction }) {
  return (
    <label
      htmlFor={placeholder}
      className="cursor-pointer text-xl w-full px-2 flex justify-around items-center"
    >
      {placeholder}:
      <input
        className="outline-none w-[350px] h-10 ps-2 capitalize"
        type={type}
        id={placeholder}
        value={value}
        placeholder={placeholder}
        autoFocus
        onChange={(e) => setFunction(e.target.value)}
      />
    </label>
  );
}
