import { useGetUsersQuery } from "generated/graphql.tsx";
import {
  AutoForm,
  AutoField,
  SubmitField,
  ErrorsField,
} from "uniforms-material";
import { bridge as schema } from "./LoginSchema";
import { useNavigate } from "react-router-dom";
import Loading from "Components/Loading";
import AddUser from "Components/AddUser/AddUser";
import BackButton from "Components/BackButton/BackButton";
import Logo from "Components/Logo/Logo";

const Register = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="grid  h-screen w-full  bg-gray-800">
      <div className="ml-auto flex flex-row justify-center items-center text-sm px-5">
        {/* <LanguageSwitcher /> */}
      </div>
      <div>
        <div className=" text-center">
          <BackButton handleClick={handleClick} />
        </div>
        <div className="max-w-[400px] w-full mx-auto bg-slate-400 pt-6  justify-center rounded-lg">
          <Logo />

          <div className="flex flex-col py-5">
            <AddUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
