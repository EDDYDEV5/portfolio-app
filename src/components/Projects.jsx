import React from 'react'
import design from '../assets/design.png.png'

const Projects = () => {
const portfolios = [
    {
        id: 1,
        src: design
    },
    {
        id: 2,
        src: design
    },
    {
        id: 3,
        src: design
    },
    {
        id: 4,
        src: design
    },
    {
        id: 5,
        src: design
    },
    {
        id: 6,
        src: design
    },
]


  return (
    <div name="projects" className=' bg-amber-600 w-full text-red-950 md:h-fit pt-20'>
    <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit'>
        <div className=' pb-8 text-center'>
            <p className=' capitalize font-bold text-4xl inline border-b-4 border-red-950 '>projects</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

{portfolios.map(({id, src}) => (
 
 <div key={id} className=' shadow-md shadow-red-700 rounded-lg '>
     <img src={src} alt="" className=' rounded-md duration-200 hover:scale-105'/>
     <div className='flex items-center justify-center font-bold text-lg'>
         <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:text-white capitalize'>demo </button >
         <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:text-white capitalize' >code </button>
     </div>
 </div>



))
}

</div>
    </div>
    </div>
  )
}

export default Projects