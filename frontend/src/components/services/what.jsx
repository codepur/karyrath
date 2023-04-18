import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function What() {
	const params = useParams();
	const [singleService, setSingleService] = useState();

	// get single service
	const getSingleService = async () => {
		try {
			const { data } = await axios.get(
				`http://localhost:4000/api/service/get-single-service/${params.slug}`
			);
			if (data?.success) {
				setSingleService(data.singleService);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getSingleService();
	}, []);
	const data = [
		{
			title: "Inbox Management",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reprehenderit distinctioblanditiis maxime molestias dolores, architecto repellat necessitatibus quam, fugiat odio",
		},
		{
			title: "Inbound Management",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reprehenderit distinctioblanditiis maxime molestias dolores, architecto repellat necessitatibus quam, fugiat odio",
		},
		{
			title: "Logistic Card",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reprehenderit distinctioblanditiis maxime molestias dolores, architecto repellat necessitatibus quam, fugiat odio",
		},
		{
			title: "IClient Relationship",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reprehenderit distinctioblanditiis maxime molestias dolores, architecto repellat necessitatibus quam, fugiat odio",
		},
		{
			title: "Calender Management",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reprehenderit distinctioblanditiis maxime molestias dolores, architecto repellat necessitatibus quam, fugiat odio",
		},
		{
			title: "Expense Tracking",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reprehenderit distinctioblanditiis maxime molestias dolores, architecto repellat necessitatibus quam, fugiat odio",
		},
		{
			title: "Record Maintance",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reprehenderit distinctioblanditiis maxime molestias dolores, architecto repellat necessitatibus quam, fugiat odio",
		},
		{
			title: "Query Management",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reprehenderit distinctioblanditiis maxime molestias dolores, architecto repellat necessitatibus quam, fugiat odio",
		},
	];
	return (
		<section className="what-wrapper">
			<h2>{singleService?.whatHeading}</h2>
			<div className="card-container grid-4 mt-8">
				{data.map((val, index) => {
					return (
						<div className="card" key={index}>
							<div className="card-body">
								<h3>{val.title}</h3>
								<p>{val.description}</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default What;
