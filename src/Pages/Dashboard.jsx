// import Split from "react-split-grid";
import AddUser from "Components/AddUser/AddUser";
import Settings from "Components/Settings/Settings";
import UsersTable from "Components/UsersTable/UsersTable";
import Split from "react-split";
import { setDragVertical } from "store/Drag/DragSlice";
import "./Dashboard.css";
import TopSplit from "./Split/TopSplit";
import BottomSplit from "./Split/BottomSplit";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Info from "Components/info/Info.jsx";
import { LocalStrogeQuery } from "store/Drag/DragSlice";

const Dashboard = ({ refetch }) => {
  const dispatch = useDispatch();
  const [sizes, setSizes] = useState(LocalStrogeQuery("split-sizes-vertical"));

  const DragSize = (sizes) => {
    localStorage.setItem("split-sizes-vertical", JSON.stringify(sizes));
    dispatch(setDragVertical(sizes));
    setSizes(sizes);
  };

  return (
    <Split
      className="split h-screen"
      direction="vertical"
      minSize={230}
      sizes={sizes}
      onDrag={DragSize}
    >
      <div className=" ">
        <TopSplit LeftComp={<UsersTable />} RightComp={<Settings />} />
      </div>
      <div className=" ">
        <BottomSplit
          LeftComp={<AddUser refetch={refetch} />}
          RightComp={<Info />}
        />
      </div>
    </Split>
  );
};
export default Dashboard;
