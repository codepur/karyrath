import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
	Home,
	About,
	Login,
	SingleService,
	Industries,
	SingleIndustry,
	AdminDashboard,
	Services,
	Looking4Job,
} from "./pages";
import { Footer, Header, AdminProtectedRoute } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormComponent from "./pages/admin/FormComponent";
function App() {
	return (
		<BrowserRouter>
			<Header />
			<ToastContainer />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/looking4job" element={<Looking4Job />} />
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />
				<Route path="/services" element={<Services />} />
				<Route path="/singleservice/:slug" element={<SingleService />} />
				<Route path="/industries" element={<Industries />} />
				<Route path="/singleindustry/:slug" element={<SingleIndustry />} />
				{/* admin */}
				<Route path="/dashboard" element={<AdminDashboard />} />
				<Route path="/dashboard/edit-service" element={<FormComponent  editdata={"edit-service"}/>} />
				<Route path="/dashboard/edit-industry" element={<FormComponent editdata={"edit-industry"}/>} />
				{/* <Route path="/dashboard" element={<AdminProtectedRoute />}>
					<Route path="admin" element={<AdminDashboard />} />
				</Route> */}
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
