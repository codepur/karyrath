import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import pic3 from "../../images/industries/pic3.jpg";
function IWhy() {
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
	const data = [
		{
			title: "Flexibility",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quos exercitationem dolorumsunt! In ducimus, quaerat optio",
		},
		{
			title: "Efficiency",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quos exercitationem dolorumsunt! In ducimus, quaerat optio",
		},
		{
			title: "sustainable",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quos exercitationem dolorumsunt! In ducimus, quaerat optio",
		},
	];
	return (
		<section className="why-wrapper">
			<div className="heading mb-8 text-center">
				<h2>{singleIndustry.whyHeading}</h2>
				<p>{singleIndustry.whyHeadingDes}</p>
			</div>

			<div className="row grid-2">
				<div className="col">
					<img src={pic3} alt="" className="w-full h-full rounded-md" />
				</div>
				<div className="col">
					{data.map((val, index) => {
						return (
							<article className="border p-4" key={index}>
								<h3>{val.title}</h3>
								<p>{val.description}</p>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default IWhy;
