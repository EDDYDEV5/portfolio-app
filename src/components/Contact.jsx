import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className=' w-full h-fit bg-gradient-to-bl from-slate-50 to-slate-400 text-red-950 p-4'>
        <div className=' flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-fit'>
            <div className=' pt-20 text-center font-gelasio'>
                <p className=' text-slate-600 font-bold text-4xl inline border-b-4 border-slate-600 capitalize'>contact</p>
                <p className=' text-xl py-6 capitalize text-slate-600'>submit this form below to contact me</p>
            </div>
<div className='flex justify-center items-center text-red-950 font-gelasio'>
    <form action="https://formspree.io/f/xnqepdqy" method='POST' className=' flex flex-col w-full md:w-1/2'>
        <input type="text" required name='name' placeholder='Name' className=' text-xl bg-transparent border-b-4  text-white focus:outline-none capitalize border-slate-600 placeholder:text-slate-50'/>
        <input type="text" required name='email' placeholder='Email address' className=' text-xl my-8 bg-transparent  text-white focus:outline-none capitalize border-b-4 border-slate-600 placeholder:text-slate-50'/>
        <textarea  name="message"  placeholder='Message' className=' py-9 text-xl bg-transparent text-white focus:outline-none capitalize border-b-4  resize-none border-slate-600 placeholder:text-slate-50'></textarea>
        <button className=' text-white capitalize text-lg bg-gradient-to-r from-amber-300 to-amber-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md font-tektur tracking-wide'>get in touch</button>
    </form>
</div>

        </div>
    </div>
  )
}

export default Contact