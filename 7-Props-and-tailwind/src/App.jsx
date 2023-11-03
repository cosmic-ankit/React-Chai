
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'tailwindcss/tailwind.css'; 
import Card from './Components/Card';
import Content from './Components/Content';


function App() {
  
  
 let myObj = {
  Raja :"Maharana",
  RSurname : "Pratap"
}



  
  return (
    <>
      
      <h1 className = 'bg-blue-950 rounded-lg text-white p-5 mb-4 ' >
        {/* So in jsx className is already a reserved keyword so we use className in jsx
        And for loop is also a reserve keword so we use HTMLfor in jsx */}
        {/* Here we have included the bg color with its intensity, text color and rounded large and adding of 5px and mb is for margin*/}

      Ankit Jain
        
      </h1>

{/* So we are adding a tailwind card here and here we are closing eah tag, we have to do that in jsx including the img teext */}
{/* Tailwind is responsive by default */}

{/* Adding the compnent here */}
<Card BtnName= "Ankit" title = "First card" myObj = {myObj}  />

 {/* That is how we can pass the props  */}

 <Content DirectlyUsing = "First Content"/>


<Card BtnName = "Jain" title = "Second Card" myObj = {myObj} />
{/* // we can pass arrays with same method*/}
 <Content /> 
 {/* Here we are gonna use the default value */}
    

    {/* 
    We can directly pass array and object in props like
    
    <Card ankit= [1,2,3]> -> NOt Possible
    <card ankit= {"name" : "Chai"}> - > Not possible

    But we can pass them by adding them in a variable and then passing that variable
*/}
    </>
  )
}

export default App;
