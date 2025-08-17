import { useState } from 'react'


function App() {
  const [val, setVal] = useState("Card");
  const [showHide,setShowHide] = useState("Hide")
  const [mouse,setMouse] = useState(false)

  return (
    <>
      <div className="bg-blue-600 h-screen flex flex-col items-center justify-center">
        
        <div className=' h-90 w-90 flex justify-around items-center flex-col'>
          <div className="bg-white h-50 w-60 font-bold flex justify-center items-center text-6xl font-mono text-blue-600 rounded-2xl">{val}</div>
          <button className={`font-extrabold text- text-white px-8 py-2 border-t-2 border-b-2  ${mouse ?"hover:border-b-1 hover:border-t-4" : null }  rounded-2xl`}
          
          onMouseDown={()=>{
            setMouse(!mouse)
          }}
          onMouseUp={()=>{
            setMouse(!mouse)
          }}


          onClick={() => {
            if(val=="Card"){
              setVal("")
              setShowHide("Show")
            }
            else{
              setVal("Card")
              setShowHide("Hide")
            }
          }}
          
          > {showHide}</button>
        </div>
        <div className='text-white font-mono'>Click the button to hide/Show the text</div>
      </div>
    </>
  )
}

export default App
