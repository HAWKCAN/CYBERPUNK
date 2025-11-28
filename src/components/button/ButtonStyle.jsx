import { Link } from "react-router-dom";

export default function ButtonStyle({ to, onClick, type, name }) {
  if (to) {
    return (
      <div className="w-[200px] h-[70px] rounded-[15px] bg-linear-to-t from-[#FF00FF] to-[#00C8FF]">
        <Link
          className=" w-full h-full flex justify-center items-center rounded-md bg-white/0 text-white"
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
      className="w-[200px] h-[70px] rounded-[15px] bg-linear-to-t from-[#FF00FF] to-[#00C8FF]"
    >
      <div className="w-full h-full flex justify-center items-center rounded-md bg-white/0 text-white">
        {name}
      </div>
    </button>
  );
}
