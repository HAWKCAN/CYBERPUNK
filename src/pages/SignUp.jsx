import { ButtonStyle, Input , Kembali} from "../components";
export default function SignUp() {
  return (
    <div className="bg-cover min-h-screen w-dvw bg-[url(back3.jpg)] bg-bottom flex justify-center items-center">
      <div className="border-2 relative bg-black/30 grid gird-rows-[1fr_1fr] justify-center items-center  border-[#ffffff] rounded-[20px] w-[900px] h-[600px]">
        <Kembali />
        <h1 className="text-[#ffffff] text-center text-[35px]">SIGN UP</h1>
        <form
          method="post"
          action=""
          className="flex flex-col justify-center items-center gap-15"
        >
          <Input name="USERNAME" />
          <Input name="PASSWORD" />
          <Input name="CONFIRM PASSWORD" />
          <Input name="GENDER PASSWORD" />

          <ButtonStyle name="PILIH SIDE" to={"/Side"} />
        </form>
      </div>
    </div>
  );
}
