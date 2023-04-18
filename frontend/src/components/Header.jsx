import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { HiLocationMarker } from "react-icons/hi";
import { GiSandsOfTime } from "react-icons/gi";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { GrFormClose } from "react-icons/gr";
import { FaIndustry } from "react-icons/fa";
import { FaServicestack } from "react-icons/fa";

function Header() {
	const [bar, setbar] = useState(false);
	const barHandler = () => {
		setbar(!bar);
	};

	const data = [
		{ name: "services", path: "/services", icons: <FaServicestack /> },
		{ name: "Location", path: "/", icons: <HiLocationMarker /> },
		{ name: "Time", path: "/", icons: <GiSandsOfTime /> },
		{ name: "industry", path: "/industries", icons: <FaIndustry /> },
	];
	return (
		<HeaderWrapper className="flex justify-between items-center py-6 px-6 shadow-md">
			<div className="logo">
				<Link to="/">Karyarth</Link>
			</div>

			<ul className={`flex gap-4 ${bar && "mobile"}`}>
				{data.map((val, index) => {
					return (
						<li key={index}>
							<Link to={val.path} className="flex items-center gap-2">
								<span className="hidden md:block">{val.icons}</span>
								<span>{val.name}</span>
							</Link>
						</li>
					);
				})}
			</ul>
			<div className="hamberger" onClick={barHandler}>
				{bar ? <HiBars3CenterLeft className="bar" /> : <GrFormClose className="bar" />}
			</div>
		</HeaderWrapper>
	);
}

const HeaderWrapper = styled.header`
	.bar {
		font-size: 2rem;
		cursor: pointer;
	}
	.hamberger {
		display: none;
	}
	.mobile {
		margin-top: -50rem;
	}

	.logo {
		color: var(--primaryColor);
	}

	span {
		&:nth-child(1) {
			color: var(--primaryColor);
		}
	}
	@media screen and (max-width: 768px) {
		ul {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: absolute;
			top: 10%;
			right: 0%;
			z-index: 10;
			background: var(--primaryColor);
			width: 50%;
			height: 20rem;
			transition: all 0.5s ease;
			border-radius: 20px;

			li {
				line-height: 3rem;
				color: var(--whiteColor);
			}
		}
		.hamberger {
			display: block;
		}
	}
`;

export default Header;
