import { IoSend } from "react-icons/io5";

const Contact = () => {
  return (
    <div name="contact" className=' w-full h-fit bg-white text-violet-400 pb-2'>
        <div className='border border-violet-400 rounded my-2  flex flex-col p-4 justify-center h-fit'>
            <div className=' text-center '>
                <p className=' tracking-wider  font-semibold  text-4xl inline font-bebas '>Contact</p>
                <p className=' text-lg py-2 capitalize font-gelasio text-gray-600 '>got an idea? lets talk</p>
            </div>
<div className='flex justify-center items-center font-gelasio'>
    <form action="https://formspree.io/f/xnqepdqy" method='POST' className=' flex flex-col w-full sm:w-1/2 px-4'>
        <input type="text" required name='name' placeholder='Name' className=' rounded p-2 bg-transparent border text-black focus:outline-none capitalize  border-violet-400 '/>
        <input type="text" required name='email' placeholder='Email address' className=' rounded p-2 my-8 bg-transparent  text-black focus:outline-none border border-violet-400 placeholder:text-slate-00'/>
        <textarea  name="message"  placeholder='Message' className=' py-9 px-2  bg-transparent text-black focus:outline-none resize-none border rounded border-violet-400 '></textarea>
        <button className='text-lg bg-violet-400 text-white hover:bg-violet-100  hover:text-violet-600 py-2 my-8 rounded-md flex items-center justify-between font-gelasio px-6 w-32'>Send<IoSend /></button>
    </form>
</div>

        </div>
    </div>
  )
}

export default Contact