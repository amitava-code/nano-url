import { useState } from 'react'

import './App.css'

const dummyUrls = [
  {
    _id:"1",
    originalUrl:"https://www.google.com",
    shortCode:'KIDJOO'
  },
  {

    _id:"2",
    originalUrl:"https://www.google.com",
    shortCode:'KIDJOO'

  }
]

function App(){


  const [urls, SetUrls ] = useState(dummyUrls)
  const [ inputValue, SetInputValue ] = useState("")
  const [ currentUrl, setCurrentUrl ] = useState(null)



  return (
    <main className='p-10 flex flex-col gap-4'> 
      <div  className='w-full max-w-4xl p-2'></div>
      <div  className='w-full max-w-4xl p-2'></div>
      <div  className='w-full max-w-4xl p-2 flex flex-col gap-2'></div>
      {
        urls.map(url=>{
          return(
            <div className='border border-neutral-200 p-2 flex gap-8 justify-evenly'>
              <p> {url.shortCode} </p>
              <p className='truncate'> {url.originalUrl} </p>
              <div className='flex gap-2'></div>
              <button className='p-2 rounded bg-amber-600 text-white cursor-pointer'>COPY</button>
              <button className='p-2 rounded bg-amber-600 text-white cursor-pointer'>DELETE</button>

            </div>
          )
        })
      }
    </main>
  )
}

export default App