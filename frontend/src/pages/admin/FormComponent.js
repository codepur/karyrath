import React from 'react'
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import instance from  "../../components/instance";

const initial = {
	name:"",
	bannerHeading: "",
	bannerDes: "",
	whatHeading: "",
	whatSubHeading:"",
	whatDes: "",
	whyHeading: "",
	whyDes: "",
	howHeading: "",
	howDes: "",
	howSubHeading:"",
	content:""
}
export default function FormComponent(props) {
    const [payload, setPayload] = useState(initial);
    const {
        name,
        bannerHeading,
        bannerDes,
        whatHeading,
        whatDes,
        whatSubHeading,
        whyHeading,
        whyDes,
        howHeading,
        howDes,
        howSubHeading,
        content,
    } = payload;

    const [selectedFile, setSelectedFile] = useState();
    const handleChange = (e) => {
        setPayload((prev) => ({ ...prev, [e.target.name]: e.target.value, }));
    }
    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // const formdata = new FormData();
        payload.slug = name;
        axios.post(`${instance}service/create-service`, { "payload": payload })
            .then((response) => {
                if (response.data && response.data.success === true) {
                    setPayload(initial);
                    toast.success(response.data.message, {
                        position: "top-right",
                        style: {
                            padding: "16px",
                            color: "#3c5f4b",
                            marginRight: "25px",
                        },
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });

    }
    return (
        <>  
            <h2 className="mb-6">Add Services</h2>
            <form >
                <div id="name" className="flex items-center gap-4 border-b mb-6">
                    <div className="form-group flex-[70%] ">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full py-2 px-2"
                            name="name"
                            value={name}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
                <div id="bannerHeading" className="flex items-center gap-4 border-b mb-6">
                    <div className="form-group flex-[70%] ">
                        <input
                            type="text"
                            placeholder="Fill Banner Heading"
                            className="w-full py-2 px-2"
                            name="bannerHeading"
                            value={bannerHeading}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
                <div id="bannerDes" className="form-group border-b mb-6">
                    <textarea
                        placeholder="Fill Banner Description"
                        className="w-full py-3 px-2"
                        name="bannerDes"
                        value={bannerDes}
                        onChange={(e) => handleChange(e)}
                    ></textarea>
                </div>
                {/* what */}
                <div id="whatHeading" className="flex items-center gap-4 border-b mb-6">
                    <div className="form-group flex-[70%]">
                        <input
                            type="text"
                            placeholder="Fill What Heading"
                            className="w-full py-2 px-2"
                            name="whatHeading"
                            value={whatHeading}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
                <div id="whatSubHeading" className="form-group border-b mb-6">
                    <input
                        placeholder="Fill What Sub Description"
                        className="w-full py-3 px-2"
                        name="whatSubHeading"
                        value={whatSubHeading}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div id="whatDes" className="form-group border-b mb-6">
                    <textarea
                        placeholder="Fill What Description"
                        className="w-full py-3 px-2"
                        name="whatDes"
                        value={whatDes}
                        onChange={(e) => handleChange(e)}
                    ></textarea>
                </div>
                {/* why */}
                <div id="whyHeading" className="flex items-center gap-4 border-b mb-6">
                    <div className="form-group flex-[70%]">
                        <input
                            type="text"
                            placeholder="Fill Why Heading"
                            className="w-full py-2 px-2"
                            name="whyHeading"
                            value={whyHeading}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    {/* <div className="form-group px-4 cursor-pointer">
							<label htmlFor="" className="cursor-pointer">
								{photo ? photo.name : "Upload Photo"}
								<input
									type="file"
									hidden
									accept="image/*"
									value={photo}
									onChange={(e) => changeHandler(e)}
								/>
							</label>
						</div> */}
                </div>
                <div id="whyDes" className="form-group border-b mb-6">
                    <textarea
                        placeholder="Fill Why Description"
                        className="w-full py-3 px-2"
                        name="whyDes"
                        value={whyDes}
                        onChange={(e) => handleChange(e)}
                    ></textarea>
                </div>
                {/* How */}
                <div id="howHeading" className="flex items-center gap-4 border-b mb-6">
                    <div className="form-group flex-[70%]">
                        <input
                            type="text"
                            placeholder="Fill How Heading"
                            className="w-full py-2 px-2"
                            name="howHeading"
                            value={howHeading}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
                <div id="howSubHeading" className="form-group border-b mb-6">
                    <input
                        placeholder="Fill How Sub Heading"
                        className="w-full py-3 px-2"
                        name="howSubHeading"
                        value={howSubHeading}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div id="howDes" className="form-group border-b mb-6">
                    <textarea
                        placeholder="Fill How Description"
                        className="w-full py-3 px-2"
                        name="howDes"
                        value={howDes}
                        onChange={(e) => handleChange(e)}
                    ></textarea>
                </div>
                {/* content */}
                <div id="content" className="form-group border-b mb-6">
                    <textarea
                        placeholder="content"
                        className="w-full py-3 px-2"
                        name="content"
                        value={content}
                        onChange={(e) => handleChange(e)}
                    ></textarea>
                </div>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={(e) => handleSubmit(e)}>
                    Add Services
                </button>
            </form>
        </>
    )
}
