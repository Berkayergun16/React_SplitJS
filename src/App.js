import { useGetUsersQuery } from "./generated/graphql.tsx";

function App() {
  const { data, loading, error, refetch } = useGetUsersQuery({});
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! </div>;
  }
console.log(data)
  return (
    <div className="App">
      {refetch && <button onClick={() => refetch()}>Refetch</button>}
     
    </div>
  );
}

export default App;
