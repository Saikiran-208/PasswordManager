import React from 'react'

const Navbar = () => {
  return (
    <nav className=" bg-slate-800 ">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

    <div className="logo font-bold text-white">
      <span className='text-green-500'>&lt;</span>
      Pass
      <span className='text-green-500'>OP/&gt;</span>
      </div>
      {/* <ul>
        <li className="flex gap-4 text-white">
            <a className='hover:font-bold' href='/'>Home</a>
            <a className='hover:font-bold' href='/about'>About</a>
            <a className='hover:font-bold' href='/contact'>Contact</a>
        </li>
      </ul> */}
      <button className="text-white bg-green-700 my-5 rounded-full flex justify-between items-center">
        <img className=" invert w-10 p-1  " src="icons/github.svg" alt="github" />
        <span className='font-bold px-2'>GitHub</span>
      </button>
      </div>
    </nav>
  )
}

export default Navbar
