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
                <><FaLinkedin size={30} />
                linkedin </>
              ),  
        href: 'https://www.linkedin.com/in/cletus-obosi-ab2382262',
                },

                {
                    id:2,
          child: (
                        <><FaGithub size={30} />
                        github </>
                      ),  
                href: 'https://github.com/EDDYDEV5',
                        },
                        {
                            id:3,
                              child: (
                                <><HiOutlineMail size={30} />
                                mail </>
                              ),  
                        href: 'mailto:cletusobosi5@gmail.com',
                                },
                                {
                                    id:4,
                                      child: (
                                        <><BsTwitterX size={30} />
                                        twitter </>
                                      ),  
                                href: 'https://twitter.com/eddieobosi',
                                        },
                

    ];



    return (
    <div className=' flex-col h-36 bg-slate-500'>
<ul className='flex w-full justify-center px-4 py-5 items-center border-t-4 border-amber-400 text-xl'>

{links.map(({id, child, href}) => (
 <li key={id} className=' tracking-wide px-5'>
 <a href={href} className='flex flex-col items-center w-full text-sm capitalize font-tektur text-white '>
{child}
</a>
</li>
) )}
</ul>
<p className='text-white text-lg tracking-widest text-center pt-2'>&copy;Copyright-<span className='font-protestguerrilla'>EDDYDEV</span> {getCurrentYear()}</p>
    </div>
  )
}

export default SocialLinks