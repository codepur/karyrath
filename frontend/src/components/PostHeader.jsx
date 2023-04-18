import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Header() {
	const data = [
		{ name: "Jobseaker", path: "/" },
		{ name: "Business", path: "/" },
		{ name: "Blog", path: "/" },
	];
	return (
		<PostHeaderWrapper className="flex justify-between items-center py-4 px-4 bg-gray-400">
			<ul className="flex gap-4 ">
				{data.map((val, index) => {
					return (
						<li key={index}>
							<Link to={val.path} className="flex items-center gap-2">
								{val.name}
							</Link>
						</li>
					);
				})}
				<li></li>
			</ul>
		</PostHeaderWrapper>
	);
}

const PostHeaderWrapper = styled.header``;

export default Header;
