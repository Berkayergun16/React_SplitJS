// import Split from "react-split-grid";
import NoMatch from "Components/NoMatch";
import Split from "react-split";
import "./Dashboard.css";
import Login from "./Login";
const Dashboard = () => {
  return (
    <>
      {/* <Split className="split" direction="horizontal">
        <div className="bg-slate-500 h-screen">asdsadsa</div>
        <div className="bg-slate-400">asdsadsa</div>
        <Split className="split" direction="horizontal">
          <div className="bg-slate-500 h-screen">asdsadsa</div>
          <div className="bg-slate-400">asdsadsa</div>
        </Split>
      </Split> */}
      <Split className="split"    sizes={[25, 75]}
    minSize={100}
    expandToMin={false}
    gutterSize={10}
    gutterAlign="center"
    snapOffset={30}
    dragInterval={1}
    direction="vertical"
    cursor="col-resize">
      <div className="bg-slate-500 h-screen">asdsadsa</div>
          <div className="bg-slate-400">asdsadsa</div>
      </Split>
    </>
  );
};

export default Dashboard;
