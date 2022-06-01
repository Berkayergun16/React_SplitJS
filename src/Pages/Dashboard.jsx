// import Split from "react-split-grid";
import AddUser from "Components/AddUser/AddUser";
import Loading from "Components/Loading";
import NoMatch from "Components/NoMatch";
import Settings from "Components/Settings/Settings";
import UsersTable from "Components/UsersTable/UsersTable";
import { useGetUsersQuery } from "generated/graphql.tsx";
import Split from "react-split";

import "./Dashboard.css";
import Login from "Pages/Login/Login.jsx";
import HorizontalSplit from "./Split/HorizontalSplit";
const Dashboard = ({data,refetch}) => {

  return (
    <Split
      className="split h-"
      direction="vertical"
      onDragEnd={(sizes) => {
        alert(sizes);
        localStorage.setItem("split-sizes", JSON.stringify(sizes));
      }}
    >
      <div className=" ">
        <HorizontalSplit
          LeftComp={ <UsersTable data={data} refetch={refetch} />}
          RightComp={<Settings />}
        />
      </div>
      <div className=" ">
        <HorizontalSplit LeftComp={ <AddUser refetch={refetch} />} RightComp={<Loading />} />
      </div>
    </Split>
  );
};
export default Dashboard;
