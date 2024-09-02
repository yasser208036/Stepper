/* eslint-disable react/prop-types */
export default function Button({ value, onClick }) {
  return (
    <button
      className="bg-slate-800 text-white px-4 py-2 rounded-md"
      onClick={onClick}
    >
      {value}
    </button>
  );
}
