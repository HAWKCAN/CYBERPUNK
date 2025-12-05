import { ButtonStyle , Input} from "../components";
import { Link } from "react-router-dom";
export default function SignIn() {
  return (
    <div className="bg-cover min-h-screen w-dvw bg-[url(back3.jpg)] bg-bottom flex justify-center items-center">
      <div className="border-2 relative bg-black/30 grid gird-rows-[1fr_1fr] justify-center items-center  border-[#ffffff] rounded-[20px] w-[900px] h-[600px]">
        <Link
          to="/"
          className="text-white absolute top-10 left-10 transform hover:scale-110 transition-all duration-200 
             hover:text-[#00C8FF] hover:drop-shadow-[0_0_8px_#00C8FF]"
        >
          Kembali
        </Link>

        <h1 className="text-[#ffffff] text-center text-[35px]">SIGN IN</h1>
        <form
          method="post"
          action=""
          className="flex flex-col justify-center items-center gap-15"
        >
          <Input name="USERNAME" />
          <Input name="PASSWORD" />

          <ButtonStyle name="SUBMIT" />
        </form>
      </div>
    </div>
  );
}
