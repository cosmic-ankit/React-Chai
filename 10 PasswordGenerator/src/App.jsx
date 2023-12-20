import { useCallback, useEffect, useState, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [cap, setCap] = useState(false)
  const [pass, setPass] = useState("")

  const generatePassword = useCallback(() => {

    // Now here in str i am creating a pool of characters which are allowed in the password, later on i will select the character from this str only
    let str = "abcdefghijklmnopqrstuvwxyz"

    let genpass = "";
    if (num) str += '123456789';
    if (cap) str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (char) str += '!@#$%^&*()_+=-.~';

    for (var i = 0; i < length; i++) {
      let index = Math.floor((Math.random() * str.length)); // It will create the random number
      // We will use this random number as a random index in str and take it out and add within the password
      genpass = genpass + str[index];

    }

    setPass(genpass);


  }, [length, num, char, cap, setPass])
  //We are also adding setPass because it also memorize the func whenever it runs and the result of it

  useEffect(() => { generatePassword() }, [length, num, char, cap])

  // It will run generatePassword after all th components get mounted and whenever there is a change in the dependency

  const passwordRef = useRef(null)
  // The default element given to useRef is null


  const copyTheText = useCallback(() => {
    //Using useCallback to optimize the function here

    passwordRef.current?.select(); // Here we are using UseRef to select the password whenever the button is clicked so that it will appear that pass is copying

    window.navigator.clipboard.writeText(pass);
 // This function will help us to access the clipboard and write the text in it

  
  },[pass]);

  return (
    <>

      <div className='w-full max-w-xl shadow-md rounded-xl bg-gray-700 mx-auto px-6 py-6 my-8 text-orange-500'>

        <h1 className='text-center text-white text-4xl mb-4'>Password Generation</h1>

        {/* Creating the div which will hold the input and the button */}
        <div className='flex shadow rounded-lg overflow-hidden mb-4" '>
          <input

            type='text'
            placeholder='Password' // The text that will be written on the input by default
            value={pass} // the value in input will become pass which is a generated password
            className="outline-none w-full py-1 px-3"
            readOnly  // That means we wont be able to type within the box
            ref={passwordRef} //Giving ref to the input so that we can manipulate its dom


          ></input>

          <button type='button' className='  outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
             onClick = {()=>{copyTheText()}}
            >
            {/* Shrink 0 class will tell how the element will shrink in flex */}

            Copy
          </button>

        </div>

        <div className='flex text-sm gap-x-6 mt-6 '>

          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={74}
              value={length} // The value of the slider will be equal to the length
              className='cursor-pointer' // This class will change the cursor to pointer when on the slider

              onChange={(e) => {
                console.log(e.target.value);
                setLength(e.target.value)
              }}
            // Now this is a arrow function, we have passed the e as an event object in it which will target the "value" and set the length using useState
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type='checkbox'
              defaultValue={num}
              onChange={() => setNum((prev) => !prev)}
              id="numberInput"
            //React allow to use the previous state value when updating the state. This is achieved by providing a function as an argument to the state updater function.
            // As react take the changes in packets, if we wanna avoid doing it we can use the current or prev value and change it to let react know something important is changed
            />
            <label htmlFor="numberInput">Numbers</label>

          </div>

          <div className="flex items-center gap-x-1">
            <input
              type='checkbox'
              defaultValue={char}
              onChange={() => setChar((prev) => !prev)}
              id="characterInput"
            />
            <label htmlFor="characterInput">Characters</label>

          </div>

          <div className="flex items-center gap-x-1">
            <input
              type='checkbox'
              defaultValue={cap}
              onChange={() => setCap((prev) => !prev)}
              id="capitalInput"
            />
            <label htmlFor="capitalInput">Capital</label>

          </div>

        </div>


      </div>
      bxz
    </>
  )
}

export default App
