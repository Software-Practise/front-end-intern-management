/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../assets/nwlogo.png";
import TableData from ".././falculty.json";
import { useSate, useEffect } from "react";
import { getAllApplications } from "../../api/apiRequests";
import { searchBar } from "../../components/searchBar";
import $ from "jquery";

// Search Bar Functionality

const user = {
	name: "Tom Cook",
	email: "tom@example.com",
	imageUrl:
		"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
	{ name: "Dashboard", href: "/Admin", current: false },
	{ name: "Applications", href: "/AdminApplicationList", current: false },
	{ name: "Dev Link Page", href: "/", current: true },
];
const userNavigation = [
	{ name: "Your Profile", href: "#" },
	{ name: "Settings", href: "#" },
	{ name: "Sign out", href: "/login" },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

// import all application data
function TestImport() {
	getAllApplications()
		.then((response) => {
			if (response.status === 200) {
				console.log("data", response.data);
				localStorage.setItem("allApplications", JSON.stringify(response.data));
			}
		})
		.catch((err) => {
			console.log("Error", err.message);
		});

	return null;
}

// redirects to application view
function ClickApp(x) {
	console.log("Row Clicked");
	localStorage.removeItem("clickedApp");
	var applications = JSON.parse(localStorage.getItem("allApplications"));
	localStorage.setItem("clickedApp", JSON.stringify(applications[x]));
	window.location.href = "/AdminApplicationList";
}

// Create dynamic table
function DynamicTable() {
	setTimeout(100);
	var testArray = JSON.parse(localStorage.getItem("allApplications"));
	if (testArray != null && testArray.length > 0) {
		{
			/* checks if they are assigned any applications */
		}
		console.log("testArray", testArray);
		console.log("testArray Type", typeof testArray);
		console.log("testArray1", testArray[0]);
		console.log("testArray1 Type", typeof testArray[0]);

		const column = Object.keys(testArray[0]);

		//get table heading data
		const ThData = () => {
			return column.map((data) => {
				return (
					<th key={data} className="m-4 border border-slate-600 ...">
						{data}
					</th>
				);
			});
		};

		//get table row data
		const tdData = () => {
			return testArray.map((data) => {
				return (
					<tr className="rowClass">
						{column.map((v) => {
							return <td className="border border-slate-700 ...">{data[v]}</td>;
						})}
					</tr>
				);
			});
		};
		return (
			<table
				id="testID"
				className="border-collapse mt-3 border border-slate-500 ..."
			>
				<thead>
					<tr>{ThData()}</tr>
				</thead>
				<tbody>{tdData()}</tbody>
			</table>
		);
	} else {
		console.log("TableData:", TableData);
		console.log("TableData1:", TableData[0]);
		const column = Object.keys(TableData[0]);

		//get table heading data
		const ThData = () => {
			return column.map((data) => {
				return (
					<th key={data} className="m-4 border border-slate-600 ...">
						{data}
					</th>
				);
			});
		};

		//get table row data
		const tdData = () => {
			return TableData.map((data) => {
				return (
					<tr className="rowClass hover">
						{column.map((v) => {
							return <td className="border border-slate-700 ...">{data[v]}</td>;
						})}
					</tr>
				);
			});
		};
		return (
			<table
				id="testID"
				className="border-collapse mt-3 border border-slate-500 ..."
			>
				<thead>
					<tr>{ThData()}</tr>
				</thead>
				<tbody>{tdData()}</tbody>
			</table>
		);
	}
}

// Makes rows in dynamic table clickable
$(function () {
	$("#testID")
		.find("tr")
		.on("click", function () {
			ClickApp($(this).index());
		});
});
export default function Example() {
	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
			<div className="min-h-full">
				<Disclosure as="nav" className="bg-nwgreen">
					{({ open }) => (
						<>
							<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ci">
								{" "}
								{/* Padding Left and Right */}
								<div className="flex items-center justify-between h-16">
									{" "}
									{/* Padding inbetween Bell and Nav Buttons */}
									<div className="flex items-center">
										{" "}
										{/* Northwest Logo and Nav Buttons */}
										<div className="flex-shrink-0">
											{" "}
											{/* Northwest Logo */}
											<a href="/">
												<img className="h-12 w-12" src={logo} alt="Workflow" />
											</a>
										</div>
										<div className="hidden md:block">
											{" "}
											{/* Nav Buttons(hides when page is too thin) */}
											<div className="ml-10 flex items-baseline space-x-4">
												{navigation.map((item) => (
													<a
														key={item.name}
														href={item.href}
														className={classNames(
															item.current
																? "bg-gray-900 text-white"
																: "text-white hover:bg-gray-700 hover:text-gray",
															"px-3 py-2 rounded-md text-sm font-medium",
														)}
														aria-current={item.current ? "page" : undefined}
													>
														{item.name}
													</a>
												))}
											</div>
										</div>
									</div>
									<div className="hidden md:block">
										{" "}
										{/* Profile Pic and Bell Icon(Hides when page is too thing) */}
										<div className="ml-4 flex items-center md:ml-6">
											<button
												type="button"
												className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
											>
												{" "}
												{/* Bell Button */}
												<span className="sr-only">View notifications</span>
												<BellIcon className="h-6 w-6" aria-hidden="true" />
											</button>

											<Menu as="div" className="ml-3 relative">
												{" "}
												{/* Profile Dropdown Code */}
												<div>
													{/* Profile Button */}
													<Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
														<span className="sr-only">Open user menu</span>
														<img
															className="h-8 w-8 rounded-full"
															src={user.imageUrl}
															alt=""
														/>
													</Menu.Button>
												</div>
												<Transition
													as={Fragment}
													enter="transition ease-out duration-100"
													enterFrom="transform opacity-0 scale-95"
													enterTo="transform opacity-100 scale-100"
													leave="transition ease-in duration-75"
													leaveFrom="transform opacity-100 scale-100"
													leaveTo="transform opacity-0 scale-95"
												>
													<Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
														{userNavigation.map((item) => (
															<Menu.Item key={item.name}>
																{({ active }) => (
																	<a
																		href={item.href}
																		className={classNames(
																			active ? "bg-gray-100" : "",
																			"block px-4 py-2 text-sm text-gray-700",
																		)}
																	>
																		{item.name}
																	</a>
																)}
															</Menu.Item>
														))}
													</Menu.Items>
												</Transition>
											</Menu>
										</div>
									</div>
									<div className="-mr-2 flex md:hidden">
										{" "}
										{/* 3 Bar Menu Button (Shows when webpage is too thin) */}
										{/* Mobile menu button */}
										<Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
											<span className="sr-only">Open main menu</span>
											{open ? (
												<XIcon className="block h-6 w-6" aria-hidden="true" />
											) : (
												<MenuIcon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											)}
										</Disclosure.Button>
									</div>
								</div>
							</div>

							<Disclosure.Panel className="md:hidden">
								<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
									{navigation.map((item) => (
										<Disclosure.Button
											key={item.name}
											as="a"
											href={item.href}
											className={classNames(
												item.current
													? "bg-gray-900 text-white"
													: "text-gray-300 hover:bg-gray-700 hover:text-white",
												"block px-3 py-2 rounded-md text-base font-medium",
											)}
											aria-current={item.current ? "page" : undefined}
										>
											{item.name}
										</Disclosure.Button>
									))}
								</div>
								<div className="pt-4 pb-3 border-t border-gray-700">
									<div className="flex items-center px-5">
										<div className="flex-shrink-0">
											<img
												className="h-10 w-10 rounded-full"
												src={user.imageUrl}
												alt=""
											/>
										</div>
										<div className="ml-3">
											<div className="text-base font-medium leading-none text-white">
												{user.name}
											</div>
											<div className="text-sm font-medium leading-none text-gray-400">
												{user.email}
											</div>
										</div>
										<button
											type="button"
											className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
										>
											<span className="sr-only">View notifications</span>
											<BellIcon className="h-6 w-6" aria-hidden="true" />
										</button>
									</div>
									<div className="mt-3 px-2 space-y-1">
										{userNavigation.map((item) => (
											<Disclosure.Button
												key={item.name}
												as="a"
												href={item.href}
												className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
											>
												{item.name}
											</Disclosure.Button>
										))}
									</div>
								</div>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>

				<header className="bg-gray-800 shadow">
					{" "}
					{/* Header Below Green Navbar, with "Faculty Dashboard" inside */}
					<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
						<h1 className="text-3xl font-bold text-nwgreen">
							Admin Applications Overview{" "}
						</h1>
					</div>
				</header>
				<main>
					{" "}
					{/* Everything Below "Faculty Dashboard" */}
					<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
						<div className="flex justify-left">
							<div className="mb-3 xl:w-96">
								<searchBar />
							</div>
						</div>
						<div class="max-w-2xl mx-auto"> </div>

						{/* start of table */}
						<div className="px-4 py-6 sm:px-0">
							<div id="table"></div>
							<TestImport />
							<DynamicTable />
						</div>
						{/* /End replace */}
					</div>
				</main>
			</div>
		</>
	);
}
