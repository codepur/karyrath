import React, { useEffect, useState } from "react";
import bg from "../../images/industries/bg.jpg";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
function IndustriesBanner() {
	const params = useParams();
	const [singleIndustry, setSingleIndustry] = useState("");

	// get single industry

	const getSingleIndustry = async () => {
		try {
			const { data } = await axios.get(
				`http://localhost:4000/api/industry/get-single-industry/${params.slug}`
			);
			if (data?.success) {
				setSingleIndustry(data.singleIndustry);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getSingleIndustry();
	}, []);
	return (
		<IndustryBanner className="flex-center">
			<h1>{singleIndustry.bannerHeading}</h1>
		</IndustryBanner>
	);
}

const IndustryBanner = styled.section`
	background: url(${bg});
	height: 40vh;
	width: 100%;
	background-position: center;
	color: var(--whiteColor);
`;

export default IndustriesBanner;
