import React from 'react'
import { FaGithub, FaLinkedin, } from 'react-icons/fa'
import { HiOutlineMail,  } from 'react-icons/hi'
import {BsTwitterX} from 'react-icons/bs'

const SocialLinks = () => {
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
    <div className=' flex-col'>
<ul className='flex w-full justify-center px-4 bg-red-950 h-20 items-center border-t-4 border-emerald-50 text-xl'>

{links.map(({id, child, href}) => (
 <li key={id} className=' tracking-wide bg-red-950 text-sm px-5'>
 <a href={href} className='flex flex-col items-center w-full text capitalize font-tektur text-white '>
{child}
</a>
</li>
) )}

   
</ul>
    </div>
  )
}

export default SocialLinks