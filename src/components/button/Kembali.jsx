import { Link } from "react-router-dom";
export default function Kembali({ to }) {
  return (
    <Link to={to}>
      <p
        className="text-white absolute top-10 left-10 transform hover:scale-110 transition-all duration-200 
             hover:text-[#00C8FF] hover:drop-shadow-[0_0_8px_#00C8FF]"
      >
        {" "}
        Kembali
      </p>
    </Link>
  );
}
