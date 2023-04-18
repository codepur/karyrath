import React from "react";
import { BsCalculator } from "react-icons/bs";
import { BiHeadphone } from "react-icons/bi";
import { MdBiotech } from "react-icons/md";
import { TbEqualNot } from "react-icons/tb";
import { HiLightBulb } from "react-icons/hi";
import { Link } from "react-router-dom";
function Service() {
	const data = [
		{
			title: "Finance & Accounting",
			icons: <BsCalculator />,
			description:
				"Accounting and accounts payable clerks, senior accountants, controllers, and more",
		},
		{
			title: "Customer Support",
			icons: <BiHeadphone />,
			description:
				"Accounting and accounts payable clerks, senior accountants, controllers, and more",
		},
		{
			title: "Technology",
			icons: <MdBiotech />,
			description:
				"Accounting and accounts payable clerks, senior accountants, controllers, and more",
		},
		{
			title: "Marketing & Creative",
			icons: <HiLightBulb />,
			description:
				"Accounting and accounts payable clerks, senior accountants, controllers, and more",
		},
		{
			title: "Legal",
			icons: <TbEqualNot />,
			description:
				"Accounting and accounts payable clerks, senior accountants, controllers, and more",
		},
	];
	return (
		<section className="service-wrapper py-8">
			<h3 className="center">
				Whether you need to find top talent, your next great job opportunity or a consulting
				solution for managing your business and resourcing challenges, we can help.
			</h3>
			<div className="grid-3 card-container">
				{data.map((val, index) => {
					return (
						<div className="Card shadow-lg p-6 h-full border-y border-purple-900" key={index}>
							<div className="card-body flex items-center gap-2 mb-3">
								<p className="text-purple-900 text-[40px]"> {val.icons}</p>
								<h3 className="tracking-tighter">{val.title}</h3>
							</div>
							<div className="card-footer">
								<p>{val.description}</p>
							</div>
						</div>
					);
				})}
			</div>

			<div className="service-btn text-center pt-8">
				<Link to="/" className="cta">
					Find An Office
				</Link>
			</div>
		</section>
	);
}

export default Service;
