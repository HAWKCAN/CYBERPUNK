import { ButtonStyle } from "../components";
export default function Dashboard() {
  return (
    <div className=" flex flex-col h-dvh  justify-end">
     
      <div className="ml-50 mb-30 flex flex-rows gap-15 ">
        {" "}
        <ButtonStyle
          to="SignIn"
          name="SIGN IN"
          className=" 
        "
        />{" "}
        <ButtonStyle
          to="/SignUp"
          name="SIGN UP"
          className=" 
        "
        />
      </div>
    </div>
  );
}
