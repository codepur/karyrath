import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
	const data = {
		about: [
			{ name: "About", path: "/" },
			{ name: "Career", path: "/" },
			{ name: "Contact", path: "/" },
			{ name: "Media", path: "/" },
		],
		resources: [
			{ name: "Employees", path: "/" },
			{ name: "invoice", path: "/" },
			{ name: "Job Seekers", path: "/" },
			{ name: "Signin", path: "/" },
		],
		legal: [
			{ name: "Fraud", path: "/" },
			{ name: "Government Policy", path: "/" },
			{ name: "Privacy Policy", path: "/" },
			{ name: "Tern of use", path: "/" },
		],
		specification: [
			{ name: "Finance", path: "/" },
			{ name: "Technology", path: "/" },
			{ name: "Market", path: "/" },
			{ name: "Legal", path: "/" },
		],
	};
	return (
		<FooterWrapper className="grid-4 place-content-center px-12 py-8">
			<div className="col flex justify-center">
				<ul>
					<h3>About us</h3>
					{data.about.map((val, index) => {
						return (
							<li key={index}>
								<Link to={val.path}>{val.name}</Link>
							</li>
						);
					})}
				</ul>
			</div>

			<div className="col flex justify-center">
				<ul>
					<h3>Resources</h3>
					{data.resources.map((val, index) => {
						return (
							<li key={index}>
								<Link to={val.path}>{val.name}</Link>
							</li>
						);
					})}
				</ul>
			</div>

			<div className="col flex justify-center">
				<ul>
					<h3>Legal</h3>
					{data.legal.map((val, index) => {
						return (
							<li key={index}>
								<Link to={val.path}>{val.name}</Link>
							</li>
						);
					})}
				</ul>
			</div>

			<div className="col flex justify-center">
				<ul>
					<h3>Our Specifications</h3>
					{data.specification.map((val, index) => {
						return (
							<li key={index}>
								<Link to={val.path}>{val.name}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</FooterWrapper>
	);
}

const FooterWrapper = styled.footer`
	h3 {
		font-weight: semi-bold;
	}
	h3,
	li {
		line-height: 2.5rem;
	}
`;
export default Footer;
