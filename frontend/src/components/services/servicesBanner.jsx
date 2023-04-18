import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
function ServicesBanner() {
	const params = useParams();

	// post form data

	const [job, setJob] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const formSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post("http://localhost:4000/api/formdata/register", {
				job,
				name,
				email,
				message,
			});
			if (data.success) {
				toast.success(data.message);
			}
		} catch (error) {
			toast.error();
		}
	};

	// get single service
	const [singleService, setSingleService] = useState();

	const getSingleService = async () => {
		try {
			const { data } = await axios.get(
				`http://localhost:4000/api/service/get-single-service/${params.slug}`
			);
			if (data?.success) {
				setSingleService(data.singleService);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getSingleService();
	}, []);
	return (
		<ServicesWrapper className="grid-2 items-center p-8 mb-60 lg:mb-0">
			<div className="col">
				<span>Trusted by 500+ Clients</span>
				<h1>{singleService?.bannerHeading}</h1>
				<p className="mt-4">{singleService?.bannerDes}</p>
				<div className="btn mt-4">
					<button className="cta">Explore</button>
				</div>
			</div>
			<div className="col">
				<form onSubmit={formSubmit} className="border shadow-lg p-6 rounded-md ">
					<div className="form-group">
						<select onChange={(e) => setJob(e.target.value)} value={job} required>
							<option value="looking for job">I'm Looking for job</option>
							<option value="virtual assistant">Virtual Assistant</option>
							<option value="non virtual assistant">Non Virtual Assistant</option>
						</select>
					</div>

					<div className="form-group">
						<input
							type="text"
							placeholder="Enter your name"
							onChange={(e) => setName(e.target.value)}
							value={name}
							required
						/>
					</div>

					<div className="form-group">
						<input
							type="email"
							placeholder="Enter your email"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							required
						/>
					</div>

					<div className="form-group">
						<textarea
							placeholder="Tell us the work that you want to persue"
							onChange={(e) => setMessage(e.target.value)}
							value={message}
							required
						></textarea>
					</div>

					<div className="cta text-center">
						<button>Apply Now</button>
					</div>
				</form>
			</div>
		</ServicesWrapper>
	);
}

const ServicesWrapper = styled.section`
	height: 80vh;
	width: 100%;
	.form-group {
		margin-bottom: 2rem;
		input,
		textarea,
		select {
			width: 100%;
			padding: 1rem 0.5rem;
			border-bottom: 1px solid var(--grayColor);
		}
	}
`;

export default ServicesBanner;
