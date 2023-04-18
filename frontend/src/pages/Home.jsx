import React from "react";
import { Banner, Selection, Service, Location, Blog } from "../components";

function Home() {
	return (
		<>
			<Banner />
			<main>
				<Selection />
				<Service />
				<Location />
				<Blog />
			</main>
		</>
	);
}

export default Home;
