import React from "react";
import { Banner4Job, Banner4JobBlog, Extra, Testimonials } from "../components";
function looking4Job() {
	return (
		<div className="looking4job-wrapper">
			<Banner4Job />
			<main>
				<Extra />
				<Testimonials />
				<Banner4JobBlog />
			</main>
		</div>
	);
}
export default looking4Job;
