import React from 'react'
import { FaGithub, FaLinkedin, } from 'react-icons/fa'
import { HiOutlineMail,  } from 'react-icons/hi'
import {BsTwitterX} from 'react-icons/bs'

const SocialLinks = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

    const links = [
        {
            id:1,
              child: (
                <><FaLinkedin size={30} className=' m-1' />
                linkedin </>
              ),  
        href: 'https://www.linkedin.com/in/cletus-obosi-ab2382262',
                },

                {
                    id:2,
          child: (
                        <><FaGithub size={30} className=' m-1'/>
                        github </>
                      ),  
                href: 'https://github.com/EDDYDEV5',
               
                        },
                        {
                            id:3,
                              child: (
                                <><HiOutlineMail size={30} className=' m-1' />
                                mail </>
                              ),  
                        href: 'mailto:cletusobosi5@gmail.com',
                                },
                                {
                                    id:4,
                                      child: (
                                        <><BsTwitterX size={28} className=' m-1' />
                                        twitter </>
                                      ),  
                                href: 'https://twitter.com/eddieobosi',
                                        },
                

    ];



    return (
    <div className=' flex-col h-36 bg-secondary'>
<ul className='flex w-full justify-center py-5 items-center text-xl'>

{links.map(({id, child, href}) => (
 <li key={id} className=' md:px-5 px-1'>
 <a href={href} className='flex flex-col items-center w-full text-sm  capitalize font-gelasio font-medium text-white '>
{child}
</a>
</li>
) )}
</ul>
<p className='text-white text-sm sm:text-lg tracking-widest text-center pt-2 px-1 whitespace-nowrap'>&copy;Copyright-<span className='font-protestguerrilla'>EDDYDEV</span> {getCurrentYear()}</p>
    </div>
  )
}

export default SocialLinks