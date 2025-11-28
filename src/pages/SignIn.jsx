import { ButtonStyle , Input} from "../components";
export default function SignIn() {
  return (
    <div className="bg-cover min-h-screen w-dvw bg-[url(back2.png)] flex justify-center items-center">
      <div className="border-2 bg-black/30 grid gird-rows-[1fr_1fr] justify-center items-center border-[#ffffff] rounded-[20px] w-[900px] h-[600px]">
        <h1 className="text-[#ffffff] text-center text-[35px]">SIGN UP</h1>
        <div className="flex flex-col gap-15">
          {" "}
          <Input />
          <Input />
          <Input />{" "}
        </div>
        <ButtonStyle name="SUBMIT" />
      </div>
    </div>
  );
}
