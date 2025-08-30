export default function Button({ children, onClick, variant = "primary" }) {
  const base =
    "px-5 py-2 rounded-lg font-semibold transition-colors focus:outline-none";

  const styles = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}
