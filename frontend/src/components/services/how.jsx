import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import pic3 from "../../images/services/pic3.jpg";
function How() {
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
			title: "MultiTasking Experts",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reprehenderit distinctioblanditiis maxime molestias dolores, architecto repellat necessitatibus quam, fugiat odio",
		},
		{
			title: "efficiency",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reprehenderit distinctioblanditiis maxime molestias dolores, architecto repellat necessitatibus quam, fugiat odio",
		},
		{
			title: "Save Time",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reprehenderit distinctioblanditiis maxime molestias dolores, architecto repellat necessitatibus quam, fugiat odio",
		},
	];
	return (
		<section className="how-wrapper grid-2 my-12">
			<div className="col">
				<img src={pic3} className="h-full w-full" alt="" />
			</div>
			<div className="col">
				<h2 className="mb-4">{singleService?.howHeading}</h2>
				<div className="card-containe grid-2">
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
				<div className="btn mt-4">
					<button className="cta">Get Free Consultancy</button>
				</div>
			</div>
		</section>
	);
}

export default How;
