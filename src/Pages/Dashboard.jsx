// import Split from "react-split-grid";
import AddUser from "Components/AddUser/AddUser";
import Loading from "Components/Loading";
import NoMatch from "Components/NoMatch";
import Settings from "Components/Settings/Settings";
import UsersTable from "Components/UsersTable/UsersTable";
import { useGetUsersQuery } from "generated/graphql.tsx";
import Split from "react-split";
import { setDragVertical } from "store/Drag/DragSlice";
import "./Dashboard.css";
import Login from "Pages/Login/Login.jsx";
import TopSplit from "./Split/TopSplit";
import BottomSplit from "./Split/BottomSplit";
import { useDispatch } from "react-redux";
import { useState } from "react";
const Dashboard = ({data,refetch}) => {
  const dispatch = useDispatch();
  const [sizes, setSizes] = useState(localStorage.getItem("split-sizes-vertical") ? JSON.parse(localStorage.getItem("split-sizes-vertical")) : [50,50]);


    const DragSize = (sizes) => {
     
      localStorage.setItem("split-sizes-vertical", JSON.stringify(sizes));
      dispatch(setDragVertical(sizes));
      setSizes(sizes);
    }





  return (
    <Split
      className="split h-screen"
      direction="vertical"
      minSize={150}
      sizes={sizes}
      onDragEnd={DragSize}
     
    >
      <div className=" ">
        <TopSplit
          LeftComp={ <UsersTable data={data} refetch={refetch} />}
          RightComp={<Settings />}
        />
      </div>
      <div className=" ">
        <BottomSplit LeftComp={ <AddUser refetch={refetch} />} RightComp={<Loading />} />
      </div>
    </Split>
  );
};
export default Dashboard;
