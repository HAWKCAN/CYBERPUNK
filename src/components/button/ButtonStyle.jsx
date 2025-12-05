import { Link } from "react-router-dom";

export default function ButtonStyle({ to, onClick, type, name }) {
  if (to) {
    return (
      <div className="cyber-btn w-[200px] h-[70px] hover:bg-black/60 hover:border-white bg-white/60 border-4">
        <Link
          className="w-full h-full flex justify-center items-center font-bold text-[25px]  text-black hover:text-white"
          to={to}
        >
          {name}
        </Link>
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className="cyber-btn w-[200px] h-[70px] hover:bg-black/60 hover:border-white bg-white/60 border-4"
    >
      <div className="w-full h-full flex justify-center items-center font-bold text-[25px] text-black hover:text-white">
        {name}
      </div>
    </button>
  );
}
