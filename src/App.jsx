import { useState } from 'react'
import {Title} from './components/Title/Title'
import {Contador} from './components/Contador/Contador'
import newYear from './assets/newYear.jpg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
     <div className='App' style={{backgroundImage:(`url(${newYear})`)}}>
      <div className='container'>
        <Title title={'Contagem Regressiva'} />
        <div className='contagem-regressiva'>
         <Contador title={'Dias'} number={2}></Contador>
         <Contador title={'Horas'} number={2}></Contador>
         <Contador title={'Minutos'} number={2}></Contador>
         <Contador title={'Segundos'} number={2}></Contador>
        </div>
      </div>
        
      

     </div>
  )
}

export default App
