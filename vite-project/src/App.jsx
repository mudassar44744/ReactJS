import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Template, { Header,Footer } from './Components/Template'
import PropsEvents from './Components/PropsEvents'

function App() {
  const [count, setCount] = useState(0)
  let data = [{
    id : 1,
    name : "mudassar",
    age : 30
  },
  {
    id : 2,
    name : "muqaddas",
    age : 32
  }
  ]
  return (
    <>
    {/* <ul>
     {data.map((item)=>{ 
      return (     
    <li key={item.id}>
     <Template data={item} content={
      <p>This is content</p>
     } 
     >
      <span>This is text of children</span>
     </Template>
    </li> 
     )})} 
    </ul> */}
    <PropsEvents/>
    </>
  )
}


export default App


