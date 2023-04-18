import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { Outlet, useNavigate } from "react-router-dom";

function AdminProtectedRoute() {
	const navigate = useNavigate();
	const [auth] = useAuth();
	const [ok, setOk] = useState();
	useEffect(() => {
		const authCheck = async () => {
			const res = await axios.get("http://localhost:4000/api/auth/admin-protected-route");
			if (res.data.ok) {
				setOk(true);
			} else {
				setOk(false);
			}
		};
		auth.token && authCheck();
	}, [auth]);

	return <>{auth.user ? <Outlet /> : navigate("/login")}</>;
}
export default AdminProtectedRoute;
