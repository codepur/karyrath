import React from "react";
import pic1 from "../images/selection/pic1.jpg";
function Selection() {
	return (
		<section className="selection-wrapper">
			<h2 className="center">The Choice is Your We got you Covered</h2>
			<div className="row flex gap-4 items-center">
				<div className="col flex-1 hidden lg:block ">
					<img src={pic1} alt="" />
				</div>
				<div className="col flex-1">
					<div className="hire shadow-lg py-8 px-4">
						<h3>Hire Remote Talent</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ducimus</p>
					</div>
					<div className="direct shadow-lg py-8 px-4">
						<h3>Try Best Way to hire online</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ducimus</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Selection;
