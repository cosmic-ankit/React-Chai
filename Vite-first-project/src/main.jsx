import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


function TestFunction()
{
  return (
<>
     <h1>Hello Ankit</h1>
     Yes it is working
</>
  )
}



/*

So what we have done here is that we have created a function and then we have render it in the index.html, afterall all components are functionsso it should work as well and it does

* <TestFunction /> -> In the custop react that we have created we were rendering there using a function and giving the element that we created as an argument. But here we give function like

<TestFunction /> 

Now where do that syntax comes from, it comes from the bundler that viet use in a background. In this syntax bundler convert the elements present in the function in the form of a tree. That blunder is a babble


*/


// Lets see if we can directly render a variable in the index html too 

// const ExampleVar = "This is a variable"

const VarExample = (
  <h1>
    This is a h1 tag
    <a>This is anchor</a>
  </h1>
)


//  Now lets take a React Element and see if we can render it or nor


/*
const ReactElement = 
{
    type:'a', // It stores which kind of element that is returned

    //Props stored the properties of the element
    props : 
    {
        target : '_blank',
        href: 'http://google.com',
    },

    // It includes the children of the element
    children : "Click on this Google link"
    }


    ReactElement wont work because we have directly created the tree in it and have given the name of the key and object by ourseleves which isnt a correct syntax that react uses in a background

*/

// Now react element wasnt working because we were not giving the key and value with the name that recat accept. So now we are going to create another React element but we will write it in a syntax that react accept. We are going to use craeteElement of react to do so

const BanaoReactElement = React.createElement(
  'a', // The first argument is the tag
  {href: 'http://github.com/cosmic-ankit', target: '_blank'},// The second argument is the object that holds the properties and its values (attributes)
  'Click on the github link', // This is a third argument
  VarExample
)

ReactDOM.createRoot(document.getElementById('root')).render
(
  

    // {/* <TestFunction/> */}
    // {/* {TestFunction()} // Trying to call a function without jsx syntax and it works too */}
    // {/* {ExampleVar} // It works too so we can directly add variabele in the func too, it also accept the variable not only the func   */}
    // {/* {VarExample}  It will work too*/}

    // {/* {ReactElement} */}
    BanaoReactElement 


 
)
