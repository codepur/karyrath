import React from "react";

function Location() {
	const data = [
		{
			title: "New York City",
			image: require("../images/location/pic1.jpg"),
		},
		{
			title: "Chikago",
			image: require("../images/location/pic4.jpg"),
		},
		{
			title: "San Fransisko",
			image: require("../images/location/pic3.jpg"),
		},
		{
			title: "Los Angeles",
			image: require("../images/location/pic4.jpg"),
		},
	];

	return (
		<section className="location-wrapper py-8">
			<h2 className="center">Contact us at our location</h2>
			<div className="grid-4">
				{data.map((val, index) => {
					return (
						<div className="location-card relative" key={index}>
							<img
								src={val.image}
								alt={val.title}
								className="hover min-w-[12rem] min-h-[12rem] object-cover rounded-md"
							/>
							<div className="card-body absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
								<p className=" text-white scale-150 hover:scale-50 transition-all cursor-pointer">
									{val.title}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Location;
