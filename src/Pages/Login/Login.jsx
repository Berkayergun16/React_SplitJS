import { useGetUsersQuery } from "generated/graphql.tsx";
import {
  AutoForm,
  AutoField,
  SubmitField,
  ErrorsField,
} from "uniforms-material";
import { bridge as schema } from "./LoginSchema";
import {  useNavigate } from "react-router-dom";
import Loading from "Components/Loading";




const Login = ({data,refetch}) => {

  const navigate = useNavigate();

  const handleLogin = (model) => {
    const userCheck = data?.users.filter((user) => {
      if (user.username === model.username && user.password === model.password) {
        localStorage.setItem("user", JSON.stringify(user));
        return true;
      }
      return false;
    })
    console.log(userCheck);
    if (userCheck.length > 0) {
      navigate("/dashboard");
    }
   
  }


  return (
    <div className="grid  h-screen w-full  bg-gray-800">
      <div className="ml-auto flex flex-row justify-center items-center text-sm px-5">
        {/* <LanguageSwitcher /> */}
      </div>
      <div className="p-12">
        <div className="max-w-[400px] w-full mx-auto bg-slate-400 p-12 px-12 justify-center rounded-lg">
          <div className="m-5">
            <img
              className="mb-5 bg-cover bg-center"
              src={require("Assets/images/sitelogo.png")}
            />
          </div>

          <div className="flex flex-col">
            <AutoForm schema={schema} onSubmit={handleLogin} >
              <ErrorsField />
              <AutoField name={"username"} />
              <AutoField name={"password"} type={"password"} />
              <div>
                <SubmitField className="w-full" />
              </div>
            </AutoForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
