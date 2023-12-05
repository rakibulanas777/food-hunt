import React from 'react'
import { FaHeart, FaStar } from 'react-icons/fa'

const NewFoods = () => {
    return (
        <div className='py-3 px-10 sm:px-4 md:px-6 lg:px-4'>
            <div className="container mx-auto py-[2vh]">
                <div className=" text-2xl md:text-3xl font-bold text-center text-[#2E2E2E] lg:text-4xl">
                    New added  <span className="text-[#F54748]">foods </span>



                </div>
                <div className="grid py-6 grid-cols-4 gap-5">
                    <div className="food-card flex flex-col cursor-pointer items-center  p-5">
                        <div className="relative mb-3">
                            {/* <Link to={`/${curElem._id}`}> */}

                            <img src='https://i.ibb.co/YkKPM85/i5.png' />

                            {/* </Link> */}
                            <div className="absolute top-2 left-2">
                                <button className="shadow-sm   text-white bg-red-500 hover:bg-red-700  cursor-pointer p-5  rounded-full  relative" >
                                    <FaHeart className="absolute text-xl font-medium top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 " />
                                </button>
                            </div>
                            <div className="absolute bottom-2 right-2">
                                <button className="shadow-sm border-4 border-white text-white bg-[#FDC55E]   cursor-pointer p-3 h-14 w-14 text-xl font-bold  rounded-full  relative" >
                                    <div className="absolute text-xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
                                        $10
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="flex mb-4 gap-4 items-center">
                            <p className=" text-[#F54748] text-xl text-center font-bold">Kebab</p>


                            <div className="flex text-sm space-x-2 cursor-pointer">
                                <span className=" font-normal text-[#FDC55E]">4.3 </span>
                                <FaStar size={16} className="text-[#FDC55E]" />
                                <span className="  font-medium">(4)</span>
                            </div>
                        </div>



                        <button
                            className=" bg-[#F54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white"

                        >
                            order now
                        </button>


                    </div>
                    <div className="food-card flex flex-col cursor-pointer items-center  p-5">
                        <div className="relative mb-3">
                            {/* <Link to={`/${curElem._id}`}> */}

                            <img src='https://i.ibb.co/YkKPM85/i5.png' />

                            {/* </Link> */}
                            <div className="absolute top-2 left-2">
                                <button className="shadow-sm   text-white bg-red-500 hover:bg-red-700  cursor-pointer p-5  rounded-full  relative" >
                                    <FaHeart className="absolute text-xl font-medium top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 " />
                                </button>
                            </div>
                            <div className="absolute bottom-2 right-2">
                                <button className="shadow-sm border-4 border-white text-white bg-[#FDC55E]   cursor-pointer p-3 h-14 w-14 text-xl font-bold  rounded-full  relative" >
                                    <div className="absolute text-xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
                                        $10
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="flex mb-4 gap-4 items-center">
                            <p className=" text-[#F54748] text-xl text-center font-bold">Kebab</p>


                            <div className="flex text-sm space-x-2 cursor-pointer">
                                <span className=" font-normal text-[#FDC55E]">4.3 </span>
                                <FaStar size={16} className="text-[#FDC55E]" />
                                <span className="  font-medium">(4)</span>
                            </div>
                        </div>



                        <button
                            className=" bg-[#F54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white"

                        >
                            order now
                        </button>


                    </div>
                    <div className="food-card flex flex-col cursor-pointer items-center  p-5">
                        <div className="relative mb-3">
                            {/* <Link to={`/${curElem._id}`}> */}

                            <img src='https://i.ibb.co/YkKPM85/i5.png' />

                            {/* </Link> */}
                            <div className="absolute top-2 left-2">
                                <button className="shadow-sm   text-white bg-red-500 hover:bg-red-700  cursor-pointer p-5  rounded-full  relative" >
                                    <FaHeart className="absolute text-xl font-medium top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 " />
                                </button>
                            </div>
                            <div className="absolute bottom-2 right-2">
                                <button className="shadow-sm border-4 border-white text-white bg-[#FDC55E]   cursor-pointer p-3 h-14 w-14 text-xl font-bold  rounded-full  relative" >
                                    <div className="absolute text-xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
                                        $10
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="flex mb-4 gap-4 items-center">
                            <p className=" text-[#F54748] text-xl text-center font-bold">Kebab</p>


                            <div className="flex text-sm space-x-2 cursor-pointer">
                                <span className=" font-normal text-[#FDC55E]">4.3 </span>
                                <FaStar size={16} className="text-[#FDC55E]" />
                                <span className="  font-medium">(4)</span>
                            </div>
                        </div>



                        <button
                            className=" bg-[#F54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white"

                        >
                            order now
                        </button>


                    </div>
                    <div className="food-card flex flex-col cursor-pointer items-center  p-5">
                        <div className="relative mb-3">
                            {/* <Link to={`/${curElem._id}`}> */}

                            <img src='https://i.ibb.co/YkKPM85/i5.png' />

                            {/* </Link> */}
                            <div className="absolute top-2 left-2">
                                <button className="shadow-sm   text-white bg-red-500 hover:bg-red-700  cursor-pointer p-5  rounded-full  relative" >
                                    <FaHeart className="absolute text-xl font-medium top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 " />
                                </button>
                            </div>
                            <div className="absolute bottom-2 right-2">
                                <button className="shadow-sm border-4 border-white text-white bg-[#FDC55E]   cursor-pointer p-3 h-14 w-14 text-xl font-bold  rounded-full  relative" >
                                    <div className="absolute text-xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
                                        $10
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="flex mb-4 gap-4 items-center">
                            <p className=" text-[#F54748] text-xl text-center font-bold">Kebab</p>


                            <div className="flex text-sm space-x-2 cursor-pointer">
                                <span className=" font-normal text-[#FDC55E]">4.3 </span>
                                <FaStar size={16} className="text-[#FDC55E]" />
                                <span className="  font-medium">(4)</span>
                            </div>
                        </div>



                        <button
                            className=" bg-[#F54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white"

                        >
                            order now
                        </button>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewFoods
