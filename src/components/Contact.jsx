import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className=' w-full h-fit bg-amber-600 text-red-950 p-4'>
        <div className=' flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-fit'>
            <div className=' pt-20 text-center'>
                <p className=' text-red-950 font-bold text-4xl inline border-b-4 border-red-950 capitalize'>contact</p>
                <p className=' py-6 capitalize font-semibold text-lg'>submit this form below to contact me</p>
            </div>
<div className='flex justify-center items-center'>
    <form action="https://getform.io/f/657ea483-cbc6-45cf-97cf-3f7d0f5a40e8" method='POST' className=' flex flex-col w-full md:w-1/2'>
        <input type="text" required name='name' placeholder='enter your name here...' className=' p-2 bg-transparent border-4 rounded-md text-red-950 focus:outline-none capitalize border-red-950 placeholder:text-white'/>
        <input type="text" required name='email' placeholder='enter your email here...' className=' p-2 my-2 bg-transparent rounded-md text-red-950 focus:outline-none capitalize border-4 border-red-950 placeholder:text-white'/>
        <textarea name="message" rows="8" placeholder='enter message here...' className=' p-2 bg-transparent rounded-md text-white text-lg focus:outline-none capitalize border-4 border-red-950 placeholder:text-white'></textarea>
        <button className=' text-white capitalize text-lg bg-red-950 px-6 py-3 my-8 mx-auto flex items-center rounded-md font-tektur tracking-wide'> lets talk</button>
    </form>
</div>

        </div>
    </div>
  )
}

export default Contact