import { useState } from "react";
import Split from "react-split";
import "../Dashboard.css";
import { useDispatch } from "react-redux";
import { setDragBottom } from "store/Drag/DragSlice";
import { LocalStrogeQuery } from "store/Drag/DragSlice";

const BottomSplit = ({ LeftComp, RightComp }) => {
  const dispatch = useDispatch();
  
  const [sizes, setSizes] = useState(LocalStrogeQuery("split-sizes-bottom"));

  const DragSize = (sizes) => {
    localStorage.setItem("split-sizes-bottom", JSON.stringify(sizes));
    setSizes(sizes);
    dispatch(setDragBottom(sizes));
  };

  return (
    <Split
      className="split-horizontal"
      minSize={400}
      sizes={sizes}
      onDrag={DragSize}
    >
      <div>{LeftComp}</div>
      <div className="p-20 h-2/4 justify-center items-center">{RightComp}</div>
    </Split>
  );
};

export default BottomSplit;
