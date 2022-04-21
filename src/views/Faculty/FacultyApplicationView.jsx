/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../assets/nwlogo.png";
import { getEmployerInformation } from "../../api/apiRequests";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "/Faculty", current: false },
  { name: "Applications", href: "/FacultyApplicationList", current: false },
  { name: "My Interns", href: "/FacultyInternsList", current: false },
  { name: "Get Help", href: "/FacultyGetHelp", current: false }
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "/login" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ImportEmployerInfo(){

	var clickedApp = JSON.parse(localStorage.getItem("clickedApp"));
	var empId = clickedApp["empId"];

	getEmployerInformation(empId).then((response) => {
		if(response.status === 200){
			console.log("data", response.data);
			localStorage.setItem("employerData", JSON.stringify(response.data));
		}
	}).catch(err => {
		console.log("Error", err.message);
	})
	
	return null;
}

//object."key name" and possibly .value to retrieve it

// Window.onload = function ReadLocalStorage(){ 

// 	document.getElementById("studentIdDiv").innerHTML = "Student ID: " + nwId;

// 	// if concat doesnt work: `id: ${id}`
// }

window.onload = function PushDataToView(){

	// pull clickedApp from local storage and into variables
	var clickedApp = JSON.parse(localStorage.getItem("clickedApp"));
	console.log("clickedApp Pull", clickedApp);

	if (clickedApp == null){
		console.log("clickedApp is null")
		return;
	}

	var nwId = clickedApp["nwId"];
	var appId = clickedApp["appId"]; // ar[key] to get the value
	var creditHr = clickedApp["creditHour"];
	var empId = clickedApp["empId"];
	var startDate = clickedApp["startDate"];
	var endDate = clickedApp["endDate"];
	var facId = clickedApp["faculty_id"];
	var paid = clickedApp["paid"];
	var status = clickedApp["status"];




	// pass var content to the view
	const nwIdDiv = document.getElementById("nwIdDiv"); 
	nwIdDiv.textContent = 'Student ID: ' + nwId;

	//const creditHrDiv = document.getElementById(""); 
	//creditHrDiv.textContent = 'Credit Hours: ' + creditHr;

	const empIdDiv = document.getElementById("employerIdDiv");
	empIdDiv.textContent = 'Employer ID: ' + empId;

	const dateDiv = document.getElementById("dateDiv");
	dateDiv.textContent = 'Start Date: ' + startDate + ' End Date: ' + endDate;
	
	const appIdDiv = document.getElementById("appIdDiv"); 
	appIdDiv.textContent = 'Application ID: ' + appId;

	const statusDiv = document.getElementById("statusDiv"); 
	statusDiv.textContent = 'Application Status: ' + status;

	const facIdDiv = document.getElementById("facIdDiv"); 
	facIdDiv.textContent = 'Student Advisor ID: ' + facId;

	const paidDiv = document.getElementById("paidDiv");
	paidDiv.textContent = 'Paid Internship: ' + paid;

	//nwIdDiv.innerHTML = `<span>Replacement HTML</span>`;

	// pull employer info from local storage and into variables
	ImportEmployerInfo();
	var employer = JSON.parse(localStorage.getItem("employerData"));
	console.log("employer info test ar, might fail pull", employer)
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
							<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ci">				{/* Padding Left and Right */}
								<div className="flex items-center justify-between h-16">				{/* Padding inbetween Bell and Nav Buttons */}
									
									<div className="flex items-center">				{/* Northwest Logo and Nav Buttons */}
										<div className="flex-shrink-0">				{/* Northwest Logo */}
											<a href="/">
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
            <h1 className="text-3xl font-bold text-nwgreen">Faculty Application View </h1>
          </div>
        </header>
        <main>        {/* Everything Below "Faculty Dashboard" */}

		  <ImportEmployerInfo/>

          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

            <div className="px-4 py-6 sm:px-0">       {/* Everything Below Button */}

			<div className="border-8 border-double border-nwgreen rounded-md h-96">       {/* Everything inside the dashed border */}
			    <div className="flex flex-row h-1/2">					{/* Top Row */}
				  <div className="p-1 border-b border-r border-solid basis-1/2"> 				{/* Top Left Box */}
				    <div> <b> Student Information </b> </div>

					<div id="nwIdDiv"> Student ID: (should get replaced when page loads)  </div> 
					<div id="majorDiv"> Major: </div>
					<div id="gradDateDiv"> Est Graduation Date: </div>
					<div id="creditsDiv"> Credits Needed to Graduate: </div>

			      </div>
			      <div className="p-1 border-b border-l border-solid basis-1/2">				{/* Top Right Box */} 
			        <div> <b> Status of Application </b> </div>

					<div id="appIdDiv"> Application ID:  </div>
					<div id="facIdDiv"> Faculty ID: </div>
					<div id="statusDiv"> Status (approved/rejected): </div>



			      </div>
				</div>
				<div className="">					{/* Bottom Row */}
				  <div className="p-1 border-t border-r border-solid basis"> 				{/* Bottom Left Box */}
				    <div> <b> Internship Information </b> </div>

					<div id="companyDiv"> Company: (name) Location: (location) </div>
					<div id="employerIdDiv"> Employer ID: </div>
					<div id="paidDiv"> Paid or Unpaid: </div>
					<div id="dateDiv"> Start Date: (mm/dd/yy)    End Date: (mm/dd/yy) </div>
					<div id="employerContact"> Supervisor Contact: </div>

			      </div>
				</div>
				
              </div>

            </div>
			<button className="px-4 text- py-2 rounded text-white inline-block shadow-lg bg-nwgreen">
				Approve Application
				{/*Functionality needed: change "status" field of application to approved */}
				{/*Functionality needed}
				{/*Functionality needed: send email to student notifying them of status change */}
			</button>
			<button className="px-4 text- py-2 rounded text-white inline-block shadow-lg bg-nwgreen">
				Reject Application
				{/*Functionality needed: change "status" field of application to approved */}
				{/*Functionality needed: send email to student notifying them of status change */}
			</button>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}
