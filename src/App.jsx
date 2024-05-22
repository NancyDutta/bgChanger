import { useState } from 'react'
import './index.css'

function App() {
  const [color,setcolor]=useState("brown");

  return (
    <>
<div className="w-screen h-screen duration-200" style={{backgroundColor: color}}></div>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "red"}} onClick={()=>setcolor("red")}>red</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "blue"}} onClick={()=>setcolor("blue")}>blue</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "green"}} onClick={()=>setcolor("green")}>green</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "black"}} onClick={()=>setcolor("black")}>black</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "yellow"}} onClick={()=>setcolor("yellow")}>yellow</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "pink"}} onClick={()=>setcolor("pink")}>pink</button>
      </div>
    </div>   
    </>
  )
}

export default App
