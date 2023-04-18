import React from "react";
import styled from "styled-components";
import bg1 from "../images/bg1.jpg";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Banner() {
	const [auth] = useAuth();
	console.log(auth);
	return (
		<BannerWrapper>
			<div className="banner-card-1 shadow-lg p-3 text-center">
				<h1>Find Your Best Hire</h1>
				<div className="btn my-8">
					<Link to="/services" className="cta ">
						Request Staff
					</Link>
				</div>
			</div>

			<div className="banner-card-2 shadow-lg p-3 text-center">
				<h1>Find Your Next Job</h1>
				<div className="btn my-8">
					<Link to="/looking4job" className="cta ">
						Request Staff
					</Link>
				</div>
			</div>
		</BannerWrapper>
	);
}

export default Banner;

const BannerWrapper = styled.section`
	position: relative;
	height: 70vh;
	width: 100%;
	background-size: cover;
	background-position: center;
	background-image: url(${bg1});
	h1 {
		margin: 0 1rem;
	}
	.banner-card-1 {
		position: absolute;
		top: 20%;
		left: 2%;
		background: var(--whiteColor);
		color: var(--primaryColor);
		border-radius: 10px;
		border: 3px dotted var(--primaryColor);
	}

	.banner-card-2 {
		position: absolute;
		top: 20%;
		right: 2%;
		background: var(--whiteColor);
		color: var(--primaryColor);
		border-radius: 10px;
		border: 3px dotted var(--primaryColor);
	}
`;
