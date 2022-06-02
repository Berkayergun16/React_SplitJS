import {useState, setState, useEffect} from 'react'
import Split from 'react-split'
import "../Dashboard.css"
import { useSelector, useDispatch } from "react-redux";
import { setDrag } from 'store/Drag/DragSlice';

const TopSplit = ({LeftComp,RightComp}) => {
  const dispatch = useDispatch();
  const [sizes, setSizes] = useState(localStorage.getItem("split-sizes") ? JSON.parse(localStorage.getItem("split-sizes")) : [50,50]);



  const DragSize = (sizes) => {
    localStorage.setItem("split-sizes", JSON.stringify(sizes));
    dispatch(setDrag(sizes));
    setSizes(sizes);
  }
 
  return (
    <Split
    className="split-horizontal"
    sizes={sizes}
    onDragEnd={DragSize}
>
    <div>{LeftComp}</div>
    <div className=''>{RightComp}</div>
</Split>
  )
}

export default TopSplit