/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
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
  { name: "Applications", href: "#", current: true },
  { name: "Apply Now", href: "#", current: false },
  { name: "Review", href: "#", current: false },
  { name: "Offers", href: "#", current: false },
  { name: "Get Help", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

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
                      <img className="h-12 w-12" src={logo} alt="Workflow" />
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
                              "px-3 py-2 rounded-md text-sm font-medium"
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
                                      "block px-4 py-2 text-sm text-gray-700"
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
                        "block px-3 py-2 rounded-md text-base font-medium"
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
            <h1 className="text-3xl font-bold text-nwgreen">Student Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-nwgreen rounded-lg h-96" />
              <table class = "border-collapse mt-3 border border-slate-500 ...">
                <thead>
                  <tr>
                    <th class="m-4 border border-slate-600 ...">Employer Name</th>
                    <th class="m-4 border border-slate-600 ...">Supervisor First Name</th>
                    <th class="m-4 border border-slate-600 ...">Supervisor Last Name</th>
                    <th class="m-4 border border-slate-600 ...">Supervisor Position</th>
                    <th class="m-4 border border-slate-600 ...">Supervisor Email</th>
                    <th class="m-4 border border-slate-600 ...">Supervisor Phone Number</th>
                    <th class="m-4 border border-slate-600 ...">Employer Street</th>
                    <th class="m-4 border border-slate-600 ...">Employer City</th>
                    <th class="m-4 border border-slate-600 ...">Employer State</th>
                    <th class="m-4 border border-slate-600 ...">Employer Zip Code</th>
                    <th class="m-4 border border-slate-600 ...">Position Offered(y/n)</th>
                    <th class="m-4 border border-slate-600 ...">Pay</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-slate-700 ...">Northwest Missouri State University</td>
                    <td class="border border-slate-700 ...">Benjamin</td>
                    <td class="border border-slate-700 ...">Weddle</td>
                    <td class="border border-slate-700 ...">Office Assistant</td>
                    <td class="border border-slate-700 ...">s530058@nwmissouri.edu</td>
                    <td class="border border-slate-700 ...">(660) 562-1214</td>
                    <td class="border border-slate-700 ...">800 University Drive</td>
                    <td class="border border-slate-700 ...">Maryville</td>
                    <td class="border border-slate-700 ...">MO</td>
                    <td class="border border-slate-700 ...">64468</td>
                    <td class="border border-slate-700 ...">Y</td>
                    <td class="border border-slate-700 ...">$1850</td>
                  </tr>
                  <tr>
                  <td class="border border-slate-700 ...">Northwest Missouri State University</td>
                    <td class="border border-slate-700 ...">Benjamin</td>
                    <td class="border border-slate-700 ...">Weddle</td>
                    <td class="border border-slate-700 ...">Office Assistant</td>
                    <td class="border border-slate-700 ...">s530058@nwmissouri.edu</td>
                    <td class="border border-slate-700 ...">(660) 562-1214</td>
                    <td class="border border-slate-700 ...">800 University Drive</td>
                    <td class="border border-slate-700 ...">Maryville</td>
                    <td class="border border-slate-700 ...">MO</td>
                    <td class="border border-slate-700 ...">64468</td>
                    <td class="border border-slate-700 ...">Y</td>
                    <td class="border border-slate-700 ...">$1850</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}
