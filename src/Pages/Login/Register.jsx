import AddUser from "Components/AddUser/AddUser";
import BackButton from "Components/BackButton/BackButton";
import Logo from "Components/Logo/Logo";
import { ToastContainer } from "react-toastify";

const Register = () => {
  return (
    <div className="grid  h-screen w-full  bg-gray-800">
      <div className="ml-auto flex flex-row justify-center items-center text-sm px-5">
        <ToastContainer />
      </div>
      <div>
        <div className=" text-center">
          <BackButton route={""} />
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
