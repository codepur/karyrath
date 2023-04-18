import React, { useState } from "react";
import { FaUserInjured } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { ImEye } from "react-icons/im";
import { SiEditorconfig } from "react-icons/si";
import { IoLogOutOutline } from "react-icons/io5";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";

import Edit from "./Edit";
import Add from "./Add";



function AdminDashboard() {
	const [auth] = useAuth();
	
	const data = [
		{
			link: "Overview",
			path: "/",
			icon: <BsFillGrid3X3GapFill />,
		},
		{
			link: "View Service",
			path: "/services",
			icon: <ImEye />,
		},
		{   
			link: "Edit Service",
			path: "/dashboard/edit-service",
			icon: <SiEditorconfig />,
		},
		{
			link: "View Industry",
			path: "/industries",
			icon: <ImEye />,
		},
		{
			link: "Edit Industry",
			path: "/dashboard/edit-industry",
			icon: <SiEditorconfig />,
		},
		{
			link: "Logout",
			path: "/",
			icon: <IoLogOutOutline />,
		},
	];
    
const [edit,setEdit] = useState()
const [editdata,setEditData] = useState("") 
const handleEdit = (temp)=>{
   if(temp === 'Edit Service')
   {
     setEditData("Edit Service")
   }
   else if (temp === "Edit Industry")
   { 
	 setEditData("Edit Service")
   } 
}	

	return (
		<section className="admin-dashboard flex gap-6 p-10">
			<div className="col flex-[20%] shadow-lg p-4 border">
				<figure className="flex-center">
					<span className="text-[5rem] mb-6">
						<FaUserInjured />
					</span>
					<h2> {auth?.user?.username}</h2>
				</figure>

				<aside className="my-16 flex justify-center">
					<ul>
						{data.map((val, index) => {
							return (
								<li className="mb-12" key={index}>
									<Link to={val.path} className="flex items-center gap-2 text-[1.3rem]">
										<span>{val.icon}</span>
										<span className="hidden md:block">{val.link}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</aside>
			</div>
			<div className="col flex-[80%]">
				{!edit&&<Add />}
				{edit&&<Edit editdata={editdata}/>}
			</div>
		</section>
	);
}

export default AdminDashboard;
