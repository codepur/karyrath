import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import pic2 from "../../images/services/pic2.jpg";
function Why() {
	const params = useParams();
	const [singleService, setSingleService] = useState();

	// get single service
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
		<section className="why-wrapper grid-2 mb-8">
			<div className="col">
				<h2 className="mb-4">{singleService?.whyHeading}</h2>
				<p>{singleService?.whyDes}</p>

				<div className="btn mt-4">
					<button className="cta">Get Free Consultation</button>
				</div>
			</div>
			<div className="col">
				<img src={pic2} className="w-full max-h-[500px]" alt="" />
			</div>
		</section>
	);
}

export default Why;
