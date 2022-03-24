import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../api/apiRequests";

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
		try {
			userLogin(JSON.stringify(values)).then((response) => {
				if (response.status === 200) {
					console.log("response", response);
					setUser(response.data.access_token);

					// Store User in local storage
					localStorage.setItem("user", response.data.access_token);
					localStorage.setItem("userAccess", response.data.access_token);
					localStorage.setItem("userRefresh", response.data.refresh_token);
					console.log("Response Data", response.data);
					//navigate("/");
				}
			});
		} catch (error) {
			console.log("ERROR", error.message);
			window.alert("Invalid Login");
		}

		//navigate("/");
	};

	const handleChange = (e) => {
		setValues((values) => ({
			...values,
			[e.target.name]: e.target.value,
		}));
	};

	if (user) {
		return <div>{navigate("/")}</div>;
	}

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
						{/* Northwest Email Text Block */}
						<label className="block text-gray-700 text-sm font-normal mb-2">
							{" "}
							{/* Email Input Label */}
							Northwest Email
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="email"
							placeholder="Email"
							name="nwId"
							onChange={handleChange}
						/>{" "}
						{/* Email Input Block */}
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
