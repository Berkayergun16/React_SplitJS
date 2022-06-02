import {useState, setState, useEffect} from 'react'
import Split from 'react-split'
import "../Dashboard.css"
import { useSelector, useDispatch } from "react-redux";
import { setDragBottom } from 'store/Drag/DragSlice';

const BottomSplit = ({LeftComp,RightComp}) => {
  const dispatch = useDispatch();
  const [sizes, setSizes] = useState(localStorage.getItem("split-sizes-bottom") ? JSON.parse(localStorage.getItem("split-sizes-bottom")) : [50,50]);



  const DragSize = (sizes) => {
    localStorage.setItem("split-sizes-bottom", JSON.stringify(sizes));
    setSizes(sizes);
    dispatch(setDragBottom(sizes));
  }
 
  return (
    <Split
    className="split-horizontal"
  
    sizes={sizes}
    onDragEnd={DragSize}
>
    <div>{LeftComp}</div>
    <div className='p-20 h-2/4 justify-center items-center'>{RightComp}</div>
</Split>
  )
}

export default BottomSplit