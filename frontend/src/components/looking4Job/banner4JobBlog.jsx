import React from "react";
import { Link } from "react-router-dom";
function Blog() {
	const data = [
		{
			title: "2022 Salary Guide",
			image: require("../../images/blog/pic1.jpg"),
			description:
				"Accounting and accounts payable clerks, senior accountants, controllers, and more",
			path: "/",
			name: "Find out more",
		},
		{
			title: "2022 High Trend",
			image: require("../../images/blog/pic2.jpg"),
			description:
				"Accounting and accounts payable clerks, senior accountants, controllers, and more",
			path: "/",
			name: "Learn more",
		},
		{
			title: "Search job",
			image: require("../../images/blog/pic3.jpg"),
			description:
				"Accounting and accounts payable clerks, senior accountants, controllers, and more",
			path: "/",
			name: "Search Job",
		},
	];
	return (
		<section className="blog-wrapper py-8">
			<h2 className="center">More from Karyarth</h2>
			<div className="card-container grid-3">
				{data.map((val, index) => {
					return (
						<div className="card shadow-lg p-4" key={index}>
							<img src={val.image} alt="" />
							<div className="card-body">
								<h3>{val.title}</h3>
								<p className="pt-3 text-gray-600">{val.description}</p>
							</div>
							<div className="card-footer text-[#7e1c8c] pt-3">
								<Link to={val.path}>{val.name}</Link>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Blog;
