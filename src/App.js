//* Packages
import { Routes, Route } from "react-router-dom";
import { useGetUsersQuery } from "generated/graphql.tsx";
//* Pages
import Dashboard from "Pages/Dashboard";
import Login from "Pages/Login/Login";
//* Components
import Loading from "Components/Loading";
import Register from "Pages/Login/Register";
import Error from "Components/Error/Error";



function App() {
  const { data, loading, error, refetch } = useGetUsersQuery({});
  if (loading) return <Loading />;
  else if (error) return <Error />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login data={data} refetch={refetch} />} />
        <Route
          path="/dashboard"
          element={<Dashboard data={data} refetch={refetch} />}
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
