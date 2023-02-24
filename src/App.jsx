import { useState } from 'react'
import Form from './components/Form'
import Intro from './components/Intro'

function App() {

  return (
    <div className='w-full md:w-[1200px] mx-auto h-full md:h-screen font-Poppins'>
      <div className="px-8 py-5 grid grid-cols-1 md:grid-cols-2 md:gap-10 h-full">

      <Intro />

      <Form />

      </div>
    </div>
  )
}

export default App
