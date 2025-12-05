import { ButtonStyle, Input, Kembali } from "../components";
export default function Police() {
  return (
    <div className=" w-dvw h-dvh flex justify-center items-center bg-black/80 text-white text-4xl font-bold">
      <div className="absolute top-0 left-0 m-5">
        {" "}
        <ButtonStyle name="Logout" onClick="Logout" to="/" />{" "}
      </div>
      POLICE PAGE
    </div>
  );
}
