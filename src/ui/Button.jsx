import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type }) {
  const base =
    "duration-250 cursor-pointer rounded-full bg-yellow-400  font-semibold uppercase text-stone-800 transition-colors hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed inline-block";

  const styles = {
    primary: base + " px-4 py-3 sm:px-6 sm:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "duration-250 cursor-pointer rounded-full border-2 border-stone-300  font-semibold uppercase text-stone-800 transition-colors hover:bg-stone-300 focus:bg-stone-300 focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed inline-block px-4 py-2.5 md:px-5 md:py-3.5 hover:text-stone-800",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
