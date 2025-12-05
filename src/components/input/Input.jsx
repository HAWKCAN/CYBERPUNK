// import { Link } from "react-router-dom";

export default function Input({name}) {
 
  return (
<div className="relative">
  <input
    className="w-[350px] rounded-md h-[40px] text-center text-[20px] text-white bg-black/50 border-2 border-[#00C8FF] shadow-[0_0_30px_#00C8FF] backdrop-blur-xl"
    placeholder={name}
  />

</div>

  );
}
