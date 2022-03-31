/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../assets/nwlogo.png";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Applications", href: "/studentApplications", current: false },
  { name: "Apply Now", href: "/studentApply", current: true },
  { name: "Offers", href: "/studentOffers", current: false },
  { name: "Get Help", href: "/studentGetHelp", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

var submitData = {
	applicationData: {
		"nwId": "",
		"status": "STARTED",
		"offerLetter": "",
		"faculty_id": "",
		"startDate": 0,
		"endDate": 0,
		"term": "",
		"year": 0,
		"crn": 0,
		"section": 0,
		"creditHour": 0,
		"courseTitle": "",
		"paid": true,
		"unpaid": false,
		"empId": ""
	},
	employerData: {
		"fName": "",
		"lName": "",
		"employerId": "",
		"street": "",
		"city": "",
		"state": "",
		"zipCode": "",
		"phoneNumber": 0,
		"email": "",
		"companyName": ""
	}
}

function updateData(){
	submitData.applicationData.nwId = document.getElementById("userLabel").value;
	console.log(submitData.applicationData.nwId)
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


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
							<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
								<div className="flex items-center justify-between h-16">
									<div className="flex items-center">
										<div className="flex-shrink-0">
											<a href="/">
												<img className="h-12 w-12" src={logo} alt="Workflow" />
											</a>
										</div>
										<div className="hidden md:block">
											<div className="ml-10 flex items-baseline space-x-4">
												{navigation.map((item) => (
													<a
														key={item.name}
														href={item.href}
														className={classNames(
															item.current
																? "bg-white-900 text-white"
																: "text-white-300 hover:bg-white-700 hover:text-white",
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
										<div className="ml-4 flex items-center md:ml-6">
											<button
												type="button"
												className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
											>
												<span className="sr-only">View notifications</span>
												<BellIcon className="h-6 w-6" aria-hidden="true" />
											</button>

											{/* Profile dropdown */}
											<Menu as="div" className="ml-3 relative">
												<div>
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
					<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
						<h1 className="text-3xl font-bold text-nwgreen">Student Internship Application</h1>
					</div>
				</header>
				<main>
					<div className="max-w-7xl mx-auto py-1 sm:px-6 lg:px-8">
						<div className="px-4 py-6 sm:px-0">
							<form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-40">
								<div className="text-nwgreen text-2xl flex justify-center border-b-2 py-2 mb-4">
									{""}
									Internship Details
								</div>
								<div className="mb-2">				{/* Application Inputs */}
									<label id= "userLabel" className="block text-gray-700 text-sm font-normal">
										Username:
									</label>
									<input 
										className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										placeholder="Username"
										name="user"
									/>
									<label id= "offerLabel" className="block text-gray-700 text-sm font-normal">
										Offer Letter:
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										placeholder="Offer Letter"
										name="offer"
									/>
									<label id= "startLabel" className="block text-gray-700 text-sm font-normal">
										Start Date:
									</label>
									<input 
										className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										placeholder="MMDDYY"
										name="start"
									/>
									<label id= "endLabel" className="block text-gray-700 text-sm font-normal">
										End Date:
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										placeholder="MMDDYY"
										name="end"
									/>
									<label id= "termLabel" className="block text-gray-700 text-sm font-normal">
										Term:
									</label>
									<input 
										className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										placeholder="Spring or Fall"
										name="term"
									/>
									<label id= "yearLabel" className="block text-gray-700 text-sm font-normal">
										Year:
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										placeholder="YYYY"
										name="year"
									/>
									<label id= "crnLabel" className="block text-gray-700 text-sm font-normal">
										CRN: 
									</label>
									<input 
										className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										placeholder="CRN"
										name="crn"
									/>
									<label id= "sectionLabel" className="block text-gray-700 text-sm font-normal">
										Section: 
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										placeholder="Section"
										major="section"
									/>
									<label id= "creditLabel" className="block text-gray-700 text-sm font-normal">
										Credit Hours: 
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										placeholder="Credit Hours"
										major="credit"
									/>
									<label id= "courseLabel" className="block text-gray-700 text-sm font-normal">
										Course Title:
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										placeholder="Course Title"
										major="course"
									/>
									<label id= "paidLabel" className="block text-gray-700 text-sm font-normal">
										Paid or Unpaid: 
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										placeholder="This will be a dropdown box"
										major="paid"
									/>
								</div>
								<div className="text-nwgreen text-2xl flex justify-center border-b-2 py-2 mb-4">
									{""}
									Employer Details
								</div>
								<div className="mb-2">
									<label id= "firstLabel" className="block text-gray-700 text-sm font-normal">
										Employer First Name:
									</label>
									<input 
										className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										placeholder="First Name"
										name="first"
									/>
									<label id= "lastLabel" className="block text-gray-700 text-sm font-normal">
										Employer Last Name:
									</label>
									<input 
										className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										placeholder="Last Name"
										name="last"
									/>
									<label id= "companyLabel" className="block text-gray-700 text-sm font-normal">
										Company Name:
									</label>
									<input 
										className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										placeholder="Company Name"
										name="company"
									/>
									<label id= "streetLabel" className="block text-gray-700 text-sm font-normal">
										Street:
									</label>
									<input 
										className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										placeholder="Street"
										name="street"
									/>
									<label id= "cityLabel" className="block text-gray-700 text-sm font-normal">
										City:
									</label>
									<input 
										className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										placeholder="City"
										name="city"
									/>
									<label id= "stateLabel" className="block text-gray-700 text-sm font-normal">
										State:
									</label>
									<input 
										className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										placeholder="State"
										name="state"
									/>
									<label id= "zipLabel" className="block text-gray-700 text-sm font-normal">
										Zip Code:
									</label>
									<input 
										className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										placeholder="Zip Code"
										name="zip"
									/>
									<label id= "phoneLabel" className="block text-gray-700 text-sm font-normal">
										Phone Number:
									</label>
									<input 
										className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										placeholder="Phone Number"
										name="phone"
									/>
									<label id= "emailLabel" className="block text-gray-700 text-sm font-normal">
										Email Address:
									</label>
									<input 
										className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										placeholder="Email Address"
										name="email"
									/>
								</div>
								<div className="flex justify-center items-center">
									<button className="px-4 text- py-2 rounded text-white inline-block shadow-lg bg-nwgreen" onClick={updateData}>
										Submit
									</button>
								</div>
								
							</form>
						</div>
						{/* /End replace */}
					</div>
				</main>
			</div>
		</>
	);
}
