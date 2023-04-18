import React from "react";
function extra() {
	const data = [
		{
			image: require("../../images/services/pic3.jpg"),
			heading: "Start your search",
			des: "Apply or upload your resume to work with our local talent solutions experts. And have hiring managers reach out to you through our online hiring platform, Robert Half Direct. Never miss your dream job with our app, your always-on search assistant.",
		},
		{
			image: require("../../images/services/pic3.jpg"),
			heading: "Get personalized job recommendations",
			des: "Get recommended jobs that match your skills and preferences so you can stop worrying about missing the right opportunity",
		},
		{
			image: require("../../images/services/pic3.jpg"),
			heading: "We’re in your corner",
			des: "Our talent solutions experts advocate on your behalf with hiring managers so they understand why you’re the best choice for their open role. We also handle your pay negotiations.",
		},
	];
	return (
		<section className="extra-wrapper py-8">
			<div className="heading mb-6">
				<h2>Double your job search options with Robert Half</h2>
				<p>
					Extend your job search and find the right role for you, whether it’s on-site or remote
					work. Unlike job boards or other staffing firms, Robert Half gives you two ways to advance
					your career. Our local talent solutions specialists promote you to employers, and you can
					also communicate one-on-one with hiring managers through Robert Half Direct, our online
					hiring platform.
				</p>
			</div>

			<div className="row grid-3">
				{data.map((val, index) => {
					return (
						<div className="col h-full flex flex-col items-center text-center" key={index}>
							<img src={val.image} alt="" className="w-[120px] rounded-full mb-4" />
							<h3>{val.heading}</h3>
							<p>{val.des}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default extra;
