import { useSelector } from "react-redux";
const Settings = () => {
  const drag = useSelector((state) => state.drag);
  const entries = Object.entries(drag);
  return (
    <div style={{ height: "100%", width: "100%" }} className="bg-amber-300 ">
      <div className="items-center justify-center flex flex-col">
        <h1 className="font-bold text-lg">Settings</h1>
        {entries.map(([key, value]) => {
          const s = key.split("_").filter((x) => x !== "drag");
          return (
            <div>
              <p className="font-bold">{s}</p>
              <p>{value + " "}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Settings;
