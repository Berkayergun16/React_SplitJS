import { useGetUsersQuery } from "generated/graphql.tsx";
import {
  AutoForm,
  AutoField,
  SubmitField,
  ErrorsField,
} from "uniforms-material";
import { bridge as schema } from "./LoginSchema";
import { useNavigate, Link, NavLink } from "react-router-dom";
import Loading from "Components/Loading";
import Logo from "Components/Logo/Logo";

const Login = ({ data, refetch }) => {
  const navigate = useNavigate();

  const handleLogin = (model) => {
   
    const userCheck = data?.users.filter((user) => {
      if (
        user.username === model.username &&
        user.password === model.password
      ) {
        localStorage.setItem("user", JSON.stringify(user));
        return true;
      }
      return false;
    });
    console.log(data?.users);
    if (userCheck.length > 0) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="grid  h-screen w-full  bg-gray-800">
      <div className="ml-auto flex flex-row justify-center items-center text-sm px-5">
        {/* <LanguageSwitcher /> */}
      </div>
      <div className="p-12">
        <div className="max-w-[400px] w-full mx-auto bg-slate-400 p-12 px-12 justify-center rounded-lg">
          <Logo />

          <div className="flex flex-col">
            {refetch && (
              <AutoForm schema={schema} onSubmit={handleLogin}>
                <ErrorsField />
                <AutoField name={"username"} />
                <AutoField name={"password"} type={"password"} />
                <div>
                  <SubmitField className="w-full" />
                </div>
              </AutoForm>
            )}
          </div>
          <Link className="text-center font-bold" to={"register"}>
            <p>Register</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
