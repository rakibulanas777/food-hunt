import React from "react";
import header from "../assets/banner.png";
import { FaSearch } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";

const Header = () => {
    return (
        <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
            <div className="container mx-auto py-[2vh]">
                <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center">
                    <div className="left_part w-[32rem] flex flex-col space-y-6">
                        <div className=" text-4xl md:text-5xl font-bold text-[#2E2E2E] lg:text-6xl">
                            We're <span className="text-[#F54748]">Serious</span> For{" "}
                            <br className=" hidden lg:block" />{" "}
                            <span className="text-[#F54748]">Food</span> &{" "}
                            <span className="text-[#FDC55E]">Delivery.</span>
                        </div>
                        <div className="lg:text-xl text-[#191919] md:text-lg text-base">
                            Best cooks and best delivery guys all at your service. Hot tasty
                            food will reach you in 60 minutes.
                        </div>
                        <div className="flex rounded-full py-2 px-4 justify-between items-center bg-white shadow-md">
                            <div className="flex items-center">
                                <FaSearch size={22} className="cursor-pointer" />
                                <input
                                    type="text"
                                    placeholder="Search food"
                                    className="text-[#191919] w-full border-none outline-none py-2 px-4"
                                />
                            </div>
                            <div className="h-10 w-10 relative bg-[#FDC55E] rounded-full">
                                <FaSearch
                                    size={15}
                                    className="cursor-pointer text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                />
                            </div>
                        </div>
                        <div className="flex gap-8 items-center">
                            <button className="bg-[#F54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">
                                explore more
                            </button>
                            <div className="flex gap-4 items-center">
                                <div className="h-14 w-14 shadow-md cursor-pointer relative bg-white rounded-full">
                                    <FaPlay
                                        size={18}
                                        className="cursor-pointer text-[#F54748] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    />
                                </div>
                                <div className="lg:text-xl text-[#191919] md:text-lg text-base cursor-pointer">
                                    Watch Video
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={header} className="h-[28rem] mx-auto justify-end" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Header;
