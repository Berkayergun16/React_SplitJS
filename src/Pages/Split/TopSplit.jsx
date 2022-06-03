import { useState } from "react";
import Split from "react-split";
import "../Dashboard.css";
import { useDispatch } from "react-redux";
import { setDrag } from "store/Drag/DragSlice";
import { LocalStrogeQuery } from "store/Drag/DragSlice";

const TopSplit = ({ LeftComp, RightComp }) => {
  const dispatch = useDispatch();
  
  const [sizes, setSizes] = useState(LocalStrogeQuery("split-sizes"));

  const DragSize = (sizes) => {
    localStorage.setItem("split-sizes", JSON.stringify(sizes));
    dispatch(setDrag(sizes));
    setSizes(sizes);
  };

  return (
    <Split
      className="split-horizontal"
      sizes={sizes}
      onDrag={DragSize}
      minSize={400}
    >
      <div>{LeftComp}</div>
      <div className="">{RightComp}</div>
    </Split>
  );
};

export default TopSplit;
