import React from 'react'
import { Link, NavLink} from "react-router-dom";

function Navbar() {



  return <>
        <nav>
            <div className="container">
                <div className="topNav flex items-center pt-8">
                    <div className="brandLogo mr-auto w-1/4">
                        <Link className='text-2xl font-bold' to="/booksy-app">Booksy</Link>
                    </div>

                    <div className="hidden sm:block searchArea mx-auto w-2/4">
                        <div className='relative'>
                        <input type="search" className='bg-[#F5F7F8] p-3 w-full rounded-md' placeholder='Search by author, title, name' id="searchInput" />
                        <i class="fas fa-search absolute top-1/2 -translate-y-1/2 right-4"></i>
                        </div>
                    </div>

                    <div className="sittings flex ml-auto w-full justify-end sm:w-1/4">
                        <div className="heart mx-1 p-1 w-10 h-10 rounded-full flex justify-center items-center text-gray-600 font-semibold"><i class="far fa-heart"></i></div>
                        <div className="porfile mx-1 p-1 w-10 h-10 rounded-full flex justify-center items-center text-gray-100 bg-[#413B89] font-semibold">0</div>
                        <div className="lang mx-1 p-1 w-10 h-10 rounded-full flex justify-center items-center text-gray-600 font-semibold">EN</div>
                    </div>
                </div>
                <div className="bottomNav pt-5">
                    <ul className='navItem flex sm:flex-row justify-center flex-col'>
                        <li className='relative'><NavLink to="/booksy-app" className='text-lg mx-1 p-2 text-gray-500 font-semibold'>Home</NavLink></li>
                        <li className='relative'><NavLink to="/Bestseller" className='text-lg mx-1 p-2  text-gray-500 font-semibold'>Bestseller</NavLink></li>
                        <li className='relative'><NavLink to="/Category" className='text-lg mx-1 p-2  text-gray-500 font-semibold'>Category</NavLink></li>
                        <li className='relative'><NavLink to="/Findstore" className='text-lg mx-1 p-2  text-gray-500 font-semibold'>Find a store</NavLink></li>
                        <li className='relative'><NavLink to="/Blog" className='text-lg mx-1 p-2  text-gray-500 font-semibold'>Blog</NavLink></li>
                    </ul>
                </div>

            </div>
        </nav>
  </>
}

export default Navbar