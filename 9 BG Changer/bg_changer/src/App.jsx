import { useState } from "react"


function App() {
  const [col, setcol] = useState('white')

  return (
    <div className="h-screen w-full" style={{ backgroundColor: col }}>

      <div className="fixed flex bottom-20 px-4 flex-wrap justify-center inset-x-0" >
        <div className="fixed flex flex-wrap justify-center px-8 py-3 rounded-full gap-8 bottom-10 shadow-xl" style={{ border: '3px solid white', backgroundColor: 'white' }}>
          <button className=" background-red px-6 py-2 rounded-lg outline-none shadow-lg text-white" onClick={() => { setcol('Red') }} style={{ backgroundColor: 'red' }}>Red</button>

          <button className=" background-black px-6 py-2 rounded-lg outline-none shadow-lg 
          text-white" onClick={() => { setcol('black') }} style={{ backgroundColor: 'black' }}>Black</button>

          <button className=" background-green px-6 py-2 rounded-lg outline-none shadow-lg text-white" onClick={() => { setcol('green') }} style={{ backgroundColor: 'green' }}>Green</button>

          <button className=" background-orange px-6 py-2 rounded-lg outline-none shadow-lg text-white" onClick={() => { setcol('orange') }} style={{ backgroundColor: 'orange' }}>Orange</button>

          <button className=" background-purple px-6 py-2 rounded-lg outline-none shadow-lg text-white" onClick={() => { setcol('purple') }} style={{ backgroundColor: 'purple' }}>Purple</button>


         
         
        </div>


      </div>

    </div>
  )
}

export default App



// ************* About OnClick *************

/* So onclick except a function in argument but we cant give a reference of a function in it. It expect us to define a function in it and then  it will run it.

 * So if we declare 
 onClick = {setColor("Blue")}

 It will give a error because in argument onClick will recieve the return value of setClick function as it will execute directly.

 * onClick expect us to define a function in it. so the correct way is

 onClick = {() => setColor("red")}

 So we have defined a call back function in it which call the setColor function
*/
