import React, { useState } from 'react'
import { FaBars, FaHome, FaTimes, FaFacebook } from "react-icons/fa"
import {Link} from 'react-scroll'

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'projects',
    },
    {
      id: 4,
      link: 'skills',
    },
    {
      id: 6,
      link: 'contact',
    }
  ]


  return (

    <div className='flex justify-between items-center w-full h-20 px-4 text-amber-600 bg-red-950 fixed z-10 border-b-4 border-white'>
  <div>
  <h1 className='text-5xl font-tektur ml-2'>&lt;CO&gt;</h1>
</div>
<ul className=' hidden md:flex'>

{links.map(({ id, link }) => (
  <li key={id} className=' text-xl px-5 cursor-pointer capitalize font-tektur font-bold  hover:text-yellow-400 duration-200 tracking-wide hover:scale-125'>
    <Link to={link} smooth duration={600} >{link}</Link>
  </li>
))}



</ul>
<div onClick={() => setNav(!nav)} className='text-4xl cursor-pointer z-10 pr-4 md:hidden'>

  {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
  </div>

  {nav && (

  <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-red-950'>

  {links.map(({ id, link }) => (

  <li key={id} className='cursor-pointer capitalize font-tektur text-4xl py-8 hover:text-yellow-500'>
<Link onClick={() => setNav(!nav)} to={link} smooth duration={600} >{link}</Link>

  </li>
  ))}
</ul>
)}

</div>  
  )
};

export default Navbar;