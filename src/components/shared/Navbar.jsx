import React from 'react'
import logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../context/userContext'
const Navbar = () => {
    const { user } = useUserContext()

    return (
        <>
            {
                user?.user.isVerified === false && (<div className="bg-red-500 py-3 px-4 text-white" >
                    <Link to="/verifyotp">please verify</Link>
                </div>)
            }

            <div className='py-3 px-10 sm:px-4 md:px-6 lg:px-6'>

                <div className="container mx-auto flex items-center justify-between">
                    <img src={logo} alt="" className="logo cursor-pointer" />
                    <div className="right_navbar flex gap-8 items-center">
                        <a href="" className=" text-[#191919] text-xl font-medium">Today special offers</a>
                        <a href="" className=" text-[#191919] text-xl font-medium">Why FoodHut</a>
                        <Link to="/menu" className=" text-[#191919] text-xl font-medium">Our Menu</Link>
                        <Link to="/addfood" className=" text-[#191919] text-xl font-medium">Add Food</Link>
                        <a href="" className=" text-[#191919] text-xl font-medium">Our Popular food</a>
                        {
                            user ? (<div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={user?.user?.profileImage} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><Link to={`/myrestourant/${user?.user._id}`}>Settings</Link></li>
                                    {
                                        user?.user?.role === 'admin' && <li><Link to={`/allrestourant/${user?.user._id}`}>All restourant</Link></li>
                                    }

                                    <li ><button
                                        onClick={() => {
                                            // message.success("Logout Successfully");
                                            localStorage.clear();
                                            location.reload();
                                            navigate("/");
                                        }}>Logout</button></li>
                                </ul>
                            </div>) : (<Link to="/login">
                                <button className="bg-[#F54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">login</button>
                            </Link>)
                        }

                    </div>
                </div>

            </div></>
    )
}

export default Navbar