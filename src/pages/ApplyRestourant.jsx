// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/Logo.svg";
import avatar from "../assets/profile.png"
import axios from "axios";
import { useUserContext } from "../context/userContext";
// import { useUserContext } from "../context/userContext";
const ApplyRestourant = () => {
    const navigate = useNavigate();
    const { user } = useUserContext();
    const [postImage, setPostImage] = useState({ profileImage: "" })

    const [image, setImage] = useState({});
    const [uploading, setUploading] = useState(false);
    const handleImage = async (e) => {
        const file = e.target.files[0];
        let formData = new FormData();
        formData.append("image", file);
        console.log([...formData]);
        setUploading(true);
        try {
            const { data } = await axios.post("http://localhost:8000/api/v1/user/upload-image", formData);
            // console.log("Image Upload", data);
            setUploading(false);
            setImage({
                url: data.url,
                public_id: data.public_id,
            });
        } catch (error) {
            console.log(error);
        }
    };

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
                    navigate("/");

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
                    <label htmlFor="file-upload" className='custom-file-upload'>
                        <img src={image?.url || avatar} className="h-32 cursor-pointer mx-auto w-32 bg-contain rounded-full" alt="" />
                    </label>
                    <label className="block text-center text-gray-900 text-base  mb-2" htmlFor="name">
                        Cover photo
                    </label>
                    <input
                        type="file"
                        lable="Image"
                        name="myFile"
                        id='file-upload'
                        className=" hidden"
                        accept='.jpeg, .png, .jpg'
                        onChange={handleImage}
                    />
                    <div className="mb-3">
                        <label className="block text-gray-900 text-sm  mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow-sm bg-white appearance-none border sm:w-[20rem] rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                            name="name"
                            id="name"
                            type="text"
                            placeholder="name"
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            className="block text-gray-900 text-sm  mb-2"
                            htmlFor="location"
                        >
                            Location
                        </label>
                        <input
                            className="shadow-sm sm:w-[20rem] bg-white appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                            id="location"
                            type="test"
                            name="location"
                            placeholder="location"
                        />
                    </div>

                    <div className="mb-3">
                        <label
                            className="block text-gray-900 text-sm  mb-2"
                            htmlFor="description"
                        >
                            Description
                        </label>
                        <textarea className="textarea shadow-sm appearance-none border bg-white rounded w-full py-2 px-3 sm:w-[20rem] text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline textarea-bordered  h-24" id="description"
                            name="description" placeholder="Description"></textarea>


                    </div>




                    <button
                        className="bg-[#F54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md w-full rounded-full px-8 py-2 text-xl font-medium text-white mx-auto text-center"
                        type="submit"
                    >
                        Apply restourant
                    </button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default ApplyRestourant;

