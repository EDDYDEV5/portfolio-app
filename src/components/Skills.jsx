import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import reactimage from '../assets/reactimage.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'


const Skills = () => {
const techs =
[
    {
        id:1,
        src: html,
        title: 'HTML'
    },
    {
        id:2,
        src: css,
        title: 'CSS'
    },
    {
        id:3,
        src: js,
        title: 'JAVASCRIPT'
    },
    {
        id:4,
        src: reactimage,
        title: 'REACT'
    },
    {
        id:5,
        src: tailwind,
        title: 'TAILWIND'
    },
    {
        id:6,
        src: github,
        title: 'GITHUB'
    },
];


  return (
    <div name="skills" className=' bg-amber-600 w-full h-fit'>
        
<div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-fit pt-20 text-red-950 text-center'>
    <div className=' pt-20'>
        <p className=' text-4xl font-bold inline border-b-4 border-red-950 capitalize p-2'>skills</p>
    </div>


<div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
    {techs.map(({id, src, title}) => (
 <div key={id} className=' shadow-md shadow-red-700 hover:scale-105 duration-200 py-2 rounded-lg'>
 <img src={src} alt="" className=' w-20 mx-auto' />
 <p className=' mt-4 font-bold'>{title}</p>
</div>

    ))}   
</div>

</div>
    </div>
  )
}

export default Skills