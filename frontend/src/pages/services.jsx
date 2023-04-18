import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import pic1 from "../images/services/pic1.jpg";
function Services() {
	const [services, setServices] = useState();
	// get all services
	const getServices = async () => {
		try {
			const { data } = await axios.get("http://localhost:4000/api/service/get-services");
			if (data?.success) {
				setServices(data.services);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getServices();
	}, []);
	return (
		<main>
			<section className="services-wrapper my-8">
				<h1 className="text-center">What are you looking for?</h1>
				<div className="grid-3 mt-6">
					{services?.map((val, index) => {
						return (
							<Link to={`/singleservice/${val.slug}`}>
								<div
									className="card border border-[#7e1c8c] rounded-md p-4 hover:shadow-lg transition-all"
									key={index}
								>
									<div className="flex items-center gap-4 mb-4">
										<img src={pic1} alt={val.name} className="w-[50px] h-[50px] rounded-full" />
										<h3>{val.name}</h3>
									</div>

									<div className="card-body">
										<p>{val.bannerDes}</p>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</section>
		</main>
	);
}

export default Services;
