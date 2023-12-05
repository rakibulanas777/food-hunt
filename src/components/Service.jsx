import React from 'react'
import { FaPlay, FaSearch } from 'react-icons/fa'
import sheff from '../assets/sheef.png'
const Service = () => {
    return (
        <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
            <div className="container mx-auto py-[2vh]">
                <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center">
                    <img src={sheff} className="h-[32rem] mx-auto justify-end" alt="" />
                    <div className=" w-[32rem] flex flex-col space-y-6">
                        <div className=" text-2xl md:text-3xl font-bold text-[#2E2E2E] lg:text-4xl">
                            We are  <span className="text-[#F54748]">more </span> than

                            <span className="text-[#FDC55E]"> multiple </span> service
                        </div>
                        <div className="lg:text-lg text-[#191919] md:text-base text-sm">
                            This is a type of resturent which typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food
                        </div>

                        <div className="flex gap-8 items-center">
                            <button className="bg-[#F54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">
                                about us
                            </button>

                        </div>
                    </div>



                </div>
            </div>

        </div>
    )
}

export default Service