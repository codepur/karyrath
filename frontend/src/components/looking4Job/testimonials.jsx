import React from "react";
import pic1 from "../../images/testimonial/pic1.jpg";
function testimonials() {
	const data = [
		{
			name: "Benny Dyal",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem a enim harum ducimusesse expedita molestiae? Vel quam nostrum magnam fugiat, error eum ullam! Facere, iustosed. Architecto, perferendis quibusdam!",
			rating: "⭐⭐⭐",
			image: require("../../images/testimonial/pic1.jpg"),
		},
		{
			name: "keetan Jain",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem a enim harum ducimusesse expedita molestiae? Vel quam nostrum magnam fugiat, error eum ullam! Facere, iustosed. Architecto, perferendis quibusdam!",
			rating: "⭐⭐⭐⭐",
			image: require("../../images/testimonial/pic2.jpg"),
		},
		{
			name: "Sujee Kenny",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem a enim harum ducimusesse expedita molestiae? Vel quam nostrum magnam fugiat, error eum ullam! Facere, iustosed. Architecto, perferendis quibusdam!",
			rating: "⭐⭐⭐⭐⭐",
			image: require("../../images/testimonial/pic3.jpg"),
		},
	];
	return (
		<section className="testimonial-wrapper my-6">
			<h2 className="mb-8">What our Client's Say</h2>

			<div className="row grid-2">
				<div className="col">
					<h3>Tenny Mike</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem a enim harum ducimus
						esse expedita molestiae? Vel quam nostrum magnam fugiat, error eum ullam! Facere, iusto
						sed. Architecto, perferendis quibusdam!
					</p>
					<img src={pic1} alt="" className="w-full h-[420px] rounded mt-4" />
				</div>

				<div className="col">
					{data.map((val, index) => {
						return (
							<article key={index} className="border-b pb-4 mb-4">
								<h3>{val.name}</h3>
								<p>{val.description}</p>
								<div className="flex justify-between">
									<span>{val.rating}</span>
									<img src={val.image} alt="" className="w-[30px] h-[30px] rounded-full" />
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default testimonials;
