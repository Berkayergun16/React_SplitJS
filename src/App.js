//* Pages
import Dashboard from "Pages/Dashboard";
import Login from "Pages/Login";

//* Graphql
import { useGetUsersQuery } from "./generated/graphql.tsx";

function App() {
  const { data, loading, error, refetch } = useGetUsersQuery({});


  
  
  return (
    <div>
      <Dashboard  />
     {/* <Login data={data} /> */}
    </div>
  );
}

export default App;
