
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'tailwindcss/tailwind.css'; 

function App() {
  

  return (
    <>
      
      <h1 className = 'bg-blue-950 rounded-lg text-white p-5 mb-4' >
        {/* So in jsx className is already a reserved keyword so we use className in jsx
        And for loop is also a reserve keword so we use HTMLfor in jsx */}
        {/* Here we have included the bg color with its intensity, text color and rounded large and adding of 5px and mb is for margin*/}

      Ankit Jain
        
      </h1>




{/* So we are adding a tailwind card here and here we are closing eah tag, we have to do that in jsx including the img teext */}
{/* Tailwind is responsive by default */}
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
    </>
  )
}

export default App
