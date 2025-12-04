import { Link } from "react-router-dom";

export default function Button({ children, disabled, to }) {
  const className =
    "duration-250 cursor-pointer rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase text-stone-800 transition-colors hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed inline-block";

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}
