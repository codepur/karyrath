import axios from "axios";
import React, { useContext, useEffect, useState,createContext  } from "react";
const AuthContext = createContext();

function Authprovider({ children }) {
	const [auth, setAuth] = useState({ user: null });

	// jwt verification

	axios.defaults.headers.common["authorization"] = auth.token;
	useEffect(() => {
		const data = localStorage.getItem("auth");
		if (data) {
			const parseData = JSON.parse(data);
			setAuth({ user: parseData.user, token: parseData.token });
		}
	}, []);

	return (
		<AuthContext.Provider value={[auth, setAuth]}>
			<>{children}</>
		</AuthContext.Provider>
	);
}

const useAuth = () => useContext(AuthContext);

export { Authprovider, useAuth };
