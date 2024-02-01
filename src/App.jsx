import { useState } from 'react'
import {Title} from './components/Title/Title'
import {Contador} from './components/Contador/Contador'
import newYear from './assets/newYear.jpg'
import './App.css'
import userCountDown from './hooks/userCountDown'


function App() {
  const [day, hour, minute, second] = userCountDown('Jan 1, 2025 00:00')

  return (
     <div className='App' style={{backgroundImage:(`url('https://s1.1zoom.me/b5050/257/Fireworks_523615_1920x1080.jpg')`)}}>
      <div className='container'>
        <Title title={'Contagem Regressiva'} />
        <div className='contagem-regressiva'>
         <Contador title={'Dias'} number={day}></Contador>
         <Contador title={'Horas'} number={hour}></Contador>
         <Contador title={'Minutos'} number={minute}></Contador>
         <Contador title={'Segundos'} number={second}></Contador>
        </div>
      </div>
        
      

     </div>
  )
}

export default App
