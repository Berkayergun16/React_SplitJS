//* Pages
import Dashboard from "Pages/Dashboard";
import Login from "Pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import { useGetUsersQuery } from "generated/graphql.tsx";
import Loading from "Components/Loading";
function App() {
  const { data, loading, error ,refetch} = useGetUsersQuery({});
  if(loading) return <Loading/>
  else if(error) return <div>Error</div>
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login data={data} refetch={refetch} />} />
        <Route path="/dashboard" element={<Dashboard data={data} refetch={refetch} />} />
      </Routes>
    </div>
  );
}

export default App;
