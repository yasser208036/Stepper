/* eslint-disable react/prop-types */
export default function Input({ placeholder, type, value, onChange }) {
  return (
    <label
      htmlFor={placeholder}
      className="cursor-pointer text-xl w-full px-2 flex gap-2 justify-around items-center"
    >
      {placeholder}:
      <input
        className="outline-none w-[350px] h-10 ps-2 capitalize"
        type={type}
        id={placeholder}
        value={value}
        placeholder={placeholder}
        autoFocus
        onChange={() => onChange}
      />
    </label>
  );
}
