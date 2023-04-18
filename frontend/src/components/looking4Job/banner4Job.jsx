import React from "react";
import bg2 from "../../images/bg-2.jpg";
import styled from "styled-components";
function looking4Job() {
	return (
		<Banner4Job>
			<div className="left pl-16 pt-16 text-white">
				<h1>Find New Opportunities Faster</h1>
				<h3>01.Start your job search below</h3>
				<h3>02. Filter by remote roles, location, specialization and more </h3>
				<h3>03.Apply!</h3>
			</div>
		</Banner4Job>
	);
}

const Banner4Job = styled.section`
	background: url(${bg2});
	height: 50vh;
	width: 100%;
	background-size: cover;
	background-position: top center
	color: var(--whiteColor);
`;

export default looking4Job;
