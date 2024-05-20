import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className=' w-full h-fit bg-white text-violet-400 p-4'>
        <div className=' flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-fit'>
            <div className=' pt-20 text-center '>
                <p className='  font-semibold font-playfair text-4xl inline '>Contact</p>
                <p className=' text-xl py-2 capitalize font-inter text-gray-600 '>got an idea? lets talk</p>
            </div>
<div className='flex justify-center items-center font-gelasio'>
    <form action="https://formspree.io/f/xnqepdqy" method='POST' className=' flex flex-col w-full md:w-1/2'>
        <input type="text" required name='name' placeholder='Name' className=' py-3 bg-transparent border-b-4  text-black focus:outline-none capitalize  border-violet-400 '/>
        <input type="text" required name='email' placeholder='Email address' className=' py-3 my-8 bg-transparent  text-black focus:outline-none border-b-4 border-violet-400 placeholder:text-slate-00'/>
        <textarea  name="message"  placeholder='Message' className=' py-9  bg-transparent text-black focus:outline-none resize-none border-b-4 border-violet-400 '></textarea>
        <button className='text-lg bg-violet-400 text-white hover:bg-violet-100  hover:text-violet-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md font-tektur tracking-wide'>Get In Touch </button>
    </form>
</div>

        </div>
    </div>
  )
}

export default Contact