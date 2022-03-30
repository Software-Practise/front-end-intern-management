/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../assets/nwlogo.png";
import React from 'react';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';

/* User Information */
const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

/* Nav Bar Buttons */
const navigation = [
  { name: "Dashboard", href: "/Faculty", current: false },
  { name: "Applications", href: "/FacultyApplicationList", current: false },
  { name: "My Interns", href: "/FacultyInternsList", current: false },
  { name: "Get Help", href: "/FacultyGetHelp", current: false }
];

/* User Buttons */
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

/* Interns Status Data */
let waitApproval = 100
let actionNeededIntern = 200
let waitDepHead = 300
let numApproved = 400

const statusData = [
	{name: 'Waiting for Approval', students: waitApproval, fill: 'gold'},
	{name: 'Action needed from Intern', students: actionNeededIntern, fill: 'darkorange'},
	{name: 'Waiting for Dep Head', students: waitDepHead, fill: 'navy'},
	{name: 'Approved', students: numApproved, fill: 'green'}
];

/* Interns Semester Data */
let currInterns = 100
let prevInterns = 300

const semesterData = [
	{name: 'Current Semester', students: currInterns, fill: 'green'},
	{name: 'Last Semester', students: prevInterns, fill: 'darkorange'}
]

/* Interns State Data */
let inStateInterns = 400
let outStateInterns = 150

const internStateData = [
	{name: 'In-State Interns', students: inStateInterns, fill: 'green'},
	{name: 'Out of State Interns', students: outStateInterns, fill: 'darkorange'}
]

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
	  {/* Nav Bar */}
      <Disclosure as="nav" className="bg-nwgreen">				
					{({ open }) => (
						<>
							<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ci">				{/* Padding Left and Right */}
								<div className="flex items-center justify-between h-16">				{/* Padding inbetween Bell and Nav Buttons */}
									
									<div className="flex items-center">				{/* Northwest Logo and Nav Buttons */}
										<div className="flex-shrink-0">				{/* Northwest Logo */}
											<a href="/Faculty">
												<img src={logo} className="h-12 w-12" alt="Workflow" />
											</a>
										</div>
										<div className="hidden md:block">				{/* Nav Buttons(hides when page is too thin) */}
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

									<div className="hidden md:block">				{/* Profile Pic and Bell Icon(Hides when page is too thing) */}
										<div className="ml-4 flex items-center md:ml-6">
											<button
												type="button"
												className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
											>				{/* Bell Button */}
												<span className="sr-only">View notifications</span>
												<BellIcon className="h-6 w-6" aria-hidden="true" />
											</button>

											<Menu as="div" className="ml-3 relative">				{/* Profile Dropdown Code */}
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
									<div className="-mr-2 flex md:hidden">				{/* 3 Bar Menu Button (Shows when webpage is too thin) */}
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

        <header className="bg-gray-800 shadow">       {/* Header Below Green Navbar, with "Faculty Dashboard" inside */}
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-nwgreen">Faculty Dashboard</h1>
          </div>
        </header>
        <main>        {/* Everything Below "Faculty Dashboard" */}
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">       {/* Everything Below Button */}

              <div className="border-8 border-double border-nwgreen rounded-md h-full">       {/* Everything inside the double border */}
			    <div className="flex flex-row h-1/2">					{/* Top Row */}
				  <div className="p-1 border-b border-r border-solid basis-1/2"> 				{/* Top Left Box */}
				    <div> <b> Number of Your Interns! </b> </div>
					<div> (Insert Number Here)</div>
			      </div>
			      <div className="p-1 border-b border-l border-solid basis-1/2">				{/* Top Right Box */} 
			        <div> <b> Intern Statuses </b> </div>
					<PieChart width={500} height={200}>
                      <Pie data={statusData} dataKey="students" outerRadius={75} fill="#FFF"/>
					  <Legend layout="vertical" width={200} iconSize={10} verticalAlign="center" align="right" scaleToFit={true}/>
					  <Tooltip/>
                    </PieChart>
			      </div>
				</div>
				<div className="flex flex-row h-1/2">					{/* Bottom Row */}
				  <div className="p-1 border-t border-r border-solid basis-1/2"> 				{/* Bottom Left Box */}
				    <div> <b> Interns This Semester vs Last Semester </b> </div>
					<PieChart width={500} height={200}>
					  <Pie data={semesterData} dataKey="students" outerRadius={75} fill="#FFF"/>
					  <Legend layout="vertical" width={200} iconSize={10} verticalAlign="center" align="right" scaleToFit={true}/>
					  <Tooltip/>
					</PieChart>
			      </div>
			      <div className="p-1 border-t border-l border-solid basis-1/2">				{/* Bottom Right Box */} 
			        <div> <b> Interns In-State vs Out Of State </b> </div>
					<PieChart width={500} height={200}>
					  <Pie data={internStateData} dataKey="students" outerRadius={75} fill="#FFF"/>
					  <Legend layout="vertical" width={200} iconSize={10} verticalAlign="center" align="right" scaleToFit={true}/>
					  <Tooltip/>
					</PieChart>
			      </div>
				</div>
				
				
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}
