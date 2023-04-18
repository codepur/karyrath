import React from "react";
import { How, ServicesBanner, Testimonials, What, Why } from "../components";
function singleService() {
	return (
		<>
			<ServicesBanner />;
			<main>
				<Why />
				<What />
				<How />
				<Testimonials />
			</main>
		</>
	);
}

export default singleService;
