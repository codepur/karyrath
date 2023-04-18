import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import pic2 from "../../images/industries/pic2.jpg";
function IWhat() {
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
			description:
				"repudiandae pariatur eos voluptate dignissimos beatae. Corrupti sequiaccusantium sint omnis nisi quibusdam placeat id.",
		},
		{
			description:
				"repudiandae pariatur eos voluptate dignissimos beatae. Corrupti sequiaccusantium sint omnis nisi quibusdam placeat id.",
		},
		{
			description:
				"repudiandae pariatur eos voluptate dignissimos beatae. Corrupti sequiaccusantium sint omnis nisi quibusdam placeat id.",
		},
		{
			description:
				"repudiandae pariatur eos voluptate dignissimos beatae. Corrupti sequiaccusantium sint omnis nisi quibusdam placeat id.",
		},
	];
	return (
		<section className="iWhat-wrapper my-8">
			<div className="heading text-center mb-12">
				<h2>{singleIndustry.whatHeading}</h2>
				<p>{singleIndustry.whatHeadingDes}</p>
			</div>
			<div className="row grid-2">
				<div className="col">
					<h3>{singleIndustry.whatSubHeading}</h3>
					<p>{singleIndustry.whatSubHeadingDes}</p>
				</div>
				<div className="col">
					<img src={pic2} alt="" className="max-h-[300px] w-full rounded-md" />
				</div>
			</div>

			{/* new row */}
			<div className="card-container grid-4 my-8">
				{data.map((val, index) => {
					return (
						<div className="card border p-4" key={index}>
							<p>{val.description}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default IWhat;
