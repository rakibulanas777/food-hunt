import React from 'react'
import logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='py-3 px-10 sm:px-4 md:px-6 lg:px-6'>
            <div className="container mx-auto flex items-center justify-between">
                <img src={logo} alt="" className="logo cursor-pointer" />
                <div className="right_navbar flex gap-8 items-center">
                    <a href="" className=" text-[#191919] text-xl font-medium">Today special offers</a>
                    <a href="" className=" text-[#191919] text-xl font-medium">Why FoodHut</a>
                    <Link to="/menu" className=" text-[#191919] text-xl font-medium">Our Menu</Link>
                    <a href="" className=" text-[#191919] text-xl font-medium">Our Popular food</a>
                    <Link to="/login">
                        <button className="bg-[#F54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">login</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Navbar