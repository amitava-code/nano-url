import { useState } from 'react'
import axios from 'axios'

import './App.css'
import { useEffect } from 'react'

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


  async function fetchUrls(){

    try{

    const response = await axios.get('http://localhost:5173/api/url/get-me')

    const responseData = response.data

    SetUrls(responseData.data.urls)

    console.log(responseData)


    } catch(err){
      console.log( 'Failed to fetch URLs:',err)
    }


  }



  useEffect(() => {
    fetchUrls()
  }, [])





  return (
    <main className='p-10 flex flex-col gap-4'> 
      <div  className='w-full max-w-4xl p-2'></div>
      <div  className='w-full max-w-4xl p-2'></div>
      <div  className='w-full max-w-4xl p-2 flex flex-col gap-2'></div>
      {
        urls.map(url=>{
          return(
            <div className='border border-neutral-200 p-2 flex gap-8 justify-evenly'>
              <a href={`http://localhost:3000/api/url/${url.shortCode}`} target='_blank'> {url.shortCode} </a>
              <p className='truncate'> {url.originalUrl} </p>
              <p>{url.clicks}</p>
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