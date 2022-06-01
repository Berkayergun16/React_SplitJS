import {useState, setState} from 'react'
import Split from 'react-split'
import "../Dashboard.css"
import { useSelector, useDispatch } from "react-redux";
import { setDrag } from 'store/Drag/DragSlice';

const HorizontalSplit = ({LeftComp,RightComp}) => {

  const draggable = useSelector(state => state.drag);
  const dispatch = useDispatch();
  console.log(draggable)
  const [sizes, setSizes] = useState([50,50])

  const DragSize = (sizes) => {
    
    dispatch(setDrag(sizes));
    setSizes(sizes);
    localStorage.setItem("split-sizes", JSON.stringify(sizes));
  }


  return (
    <Split
    className="split-horizontal"
    minSize={50}
    maxSize={950}
    onDragEnd={DragSize}
    
  

>
    <div>{LeftComp}</div>
    <div className='p-20 h-2/4 justify-center items-center'>{RightComp}</div>
</Split>
  )
}

export default HorizontalSplit