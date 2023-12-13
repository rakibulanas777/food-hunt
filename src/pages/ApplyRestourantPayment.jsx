import React from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/Logo.svg";
import avatar from "../assets/profile.png"
import axios from "axios";
import { useUserContext } from "../context/userContext";
const ApplyRestourantPayment = () => {
    const handleOnSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const description = form.description.value;
        const location = form.location.value;
        const cover = image?.url
        const owner = user?.user?._id
        const restourantData = { name, owner, location, cover, description };

        fetch("http://localhost:8000/api/v1/user/ApplyRestourant", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(restourantData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {

                    toast.success(data.message);

                    e.target.reset();
                    navigate("/apply-restourant-payment");

                } else {
                    toast.error(data.message);
                }
            });
    };
    return (
        <div className="ApplyRestourant">
            <div className="w-full mx-auto">
                <form
                    className="ease-in duration-300 w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/80 lg:w-max mx-auto rounded-md px-8 py-5"
                    onSubmit={handleOnSubmit}
                >
                    <button
                        className="bg-[#F54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md w-full rounded-full px-8 py-2 text-xl font-medium text-white mx-auto text-center"
                        type="submit"
                    >
                        pay $10
                    </button>
                </form>
                <ToastContainer />
            </div>
        </div>

    )
}

export default ApplyRestourantPayment