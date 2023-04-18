import React from "react";
import { IndustriesBanner, IWhat, IWhy } from "../components";

function SingleIndustry() {
	return (
		<>
			<IndustriesBanner />
			<main>
				<IWhat />
				<IWhy />
			</main>
		</>
	);
}

export default SingleIndustry;
