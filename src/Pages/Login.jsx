import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../api/apiRequests";

function clearStorage(){
	localStorage.clear();
}

window.onload = clearStorage();

function Login() {
	const [values, setValues] = useState({
		nwId: "",
		password: "",
	});
	const [user, setUser] = useState();

	useEffect(() => {
		const loggedInUserAccess = localStorage.getItem("userAccess");
		if (loggedInUserAccess) {
			const foundUser = loggedInUserAccess;
			console.log("Logged in user", loggedInUserAccess);
			setUser(foundUser);
		}
	}, []);

	let navigate = useNavigate();
	const handleSubmit = () => {
		console.log(JSON.stringify(values));
		// navigate("/admin");
		var isError = false;

		userLogin(JSON.stringify(values)).then((response) => {
			if (response.status === 200) {
				console.log("response", response);
				setUser(response.data.access_token);

				// Store User in local storage
				localStorage.setItem("userId", values.nwId);
				localStorage.setItem("userAccess", response.data.access_token);
				localStorage.setItem("userRefresh", response.data.refresh_token);
				localStorage.setItem("userRole", response.data.role);
				console.log("Response Data", response.data);

				var role = localStorage.getItem("userRole");
				if(role === "ROLE_FACULTY"){
					navigate("/Faculty");
				}
				else if(role === "ROLE_ADMIN"){
					navigate("/admin")
				}
				else if(role === "ROLE_USER"){
					navigate("/studentApplications")
				}
				else{
					navigate("/login")
				}
			}
		}).catch(err => {
			console.log("ERROR", err.message);
			window.alert("Invalid Login");
			isError = true;
		});
		console.log(localStorage.getItem("userRole"));
	};

	const handleChange = (e) => {
		setValues((values) => ({
			...values,
			[e.target.name]: e.target.value,
		}));
	};

	const handleRedirect = (role) => {
		if(role === "ROLE_FACULTY"){
			navigate("/Faculty");
		}
		else if(role === "ROLE_ADMIN"){
			navigate("/admin")
		}
		else if(role === "ROLE_USER"){
			navigate("/studentApplications")
		}
		else{
			navigate("/login")
		}
	}

	// if (user) {
	// 	return <div>{navigate("/")}</div>;
	// }

	return (
		<div className="flex bg-nwgreen items-center justify-center p-12">
			{" "}
			{/* Page Background */}
			<div className="w-full max-w-md">
				<form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-40">
					{" "}
					{/* Login block */}
					<div className="text-nwgreen text-2xl flex justify-center border-b-2 py-2 mb-4">
						{" "}
						{/* Northwest Login Text */}
						Northwest Login
					</div>
					<div className="mb-4">
						{" "}
						{/* Northwest Username Text Block */}
						<label className="block text-gray-700 text-sm font-normal mb-2">
							{" "}
							{/* Username Input Label */}
							Northwest Username
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Username"
							name="nwId"
							onChange={handleChange}
						/>{" "}
						{/* Username Input Block */}
					</div>
					<div className="mb-6">
						{" "}
						{/* Northwest Password Text Block */}
						<label className="block text-gray-700 text-sm font-normal mb-2">
							{" "}
							{/* Password Input Label */}
							Password
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
						/>{" "}
						{/* Password Input Block */}
					</div>
					<div className="flex justify-center items-center">
						{" "}
						{/* Sign In Button Block */}
						<button
							type="button"
							className="px-4 text- py-2 rounded text-white inline-block shadow-lg bg-nwgreen "
							onClick={handleSubmit}
						>
							Sign In
						</button>{" "}
						{/* Sign In Button */}
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;