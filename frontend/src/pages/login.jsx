import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/authContext";

function Login() {
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	const navigate = useNavigate();
	const [auth, setAuth] = useAuth();
	// login handler
	const loginHandler = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post("http://localhost:4000/api/auth/login", {
				email,
				password,
			});
			if (data?.success) {
				toast.success(data.message);
				localStorage.setItem("auth", JSON.stringify(data));
				setAuth({ ...auth, user: data.user, token: data.token });
				navigate("/dashboard");
			}
		} catch (error) {
			toast.error("Something went wrong in Login", error);
		}
	};
	return (
		<section className="login-wrapper flex-center h-screen">
			<form action="" onSubmit={loginHandler} className="border p-4 h-[50%] w-[50%] flex-center">
				<h2>Login</h2>
				<div className="form-group w-[90%] my-6">
					<input
						type="text"
						placeholder="Type Your Email"
						className="border w-full py-3 pl-2"
						onChange={(e) => setemail(e.target.value)}
						value={email}
						required
					/>
				</div>

				<div className="form-group w-[90%] my-6">
					<input
						type="text"
						placeholder="Password"
						className="border w-full py-3 pl-2"
						onChange={(e) => setpassword(e.target.value)}
						value={password}
						required
					/>
				</div>

				<button className="cta">Login</button>
			</form>
		</section>
	);
}

export default Login;
