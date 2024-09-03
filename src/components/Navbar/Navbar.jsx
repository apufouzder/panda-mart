import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartLight, PiUser } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [userOpen, setUserOpen] = useState(false);



    return (
        <>
            <div className="relative bg-white border-b-2">
                <div className="mx-auto container px-4 md:px-0">
                    <div className="flex justify-between items-center border-gray-100 py-6 md:space-x-10">
                        <div className="flex justify-start ">
                            <Link href="/">
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                    alt=""
                                />
                            </Link>
                        </div>

                        <nav className="hidden md:flex space-x-10">
                            <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">Home</Link>
                            <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">Products</Link>
                            <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">About</Link>
                            <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">Contact</Link>
                        </nav>

                        <div className="flex items-center gap-4 relative">
                            <div className={`flex z-50 items-center relative ${searchOpen ? 'block' : 'hidden'}`}>
                                <input type="text" className={`border rounded-md px-2 py-1 focus:outline-none w-[18rem]`} />
                                <span className="absolute right-2 cursor-pointer text-xl text-black"><IoSearchOutline /></span>
                            </div>
                            <span onClick={() => setSearchOpen(!searchOpen)} className="cursor-pointer text-2xl text-black"><IoSearchOutline /></span>
                            {/* <span className="text-xl"><FaShoppingCart /></span> */}
                            <button className=" relative transition duration-150 ease-in-out" aria-label="Cart">
                                <span className="text-2xl text-black"><PiShoppingCartLight /></span>
                                <span className="absolute p-1 object-right-top -top-4 left-2">
                                    <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                                        2
                                    </div>
                                </span>
                            </button>

                            <span onClick={() => setUserOpen(!userOpen)} className="text-2xl text-black cursor-pointer"><PiUser /></span>

                            <div className={`${userOpen ? 'block' : 'hidden'} absolute right-0 top-14 w-60 border rounded p-4 flex flex-col gap-4 items-center z-50 bg-white shadow-md`}>
                                <img className="w-16 rounded-full border-4 border-red-300"
                                    src="https://randomuser.me/api/portraits/women/21.jpg" alt="" />
                                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Profile</a>
                                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Account</a>
                            </div>

                            <button
                                type="button"
                                className="bg-white rounded-md text-black focus:outline-none border-0 md:hidden"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="text-2xl text-black"><MdMenu /></span>
                            </button>
                        </div>
                    </div>
                </div>
                {/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: ""
      To: ""
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  */}

                <div className={
                    open ? "block scale-100 ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        : "hidden scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                }>
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <button
                                        type="button"
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <span className="text-2xl text-black"><RxCross2 /></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <>
                            <div className="flex flex-col gap-3 p-4">
                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Home</a>
                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Products</a>
                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">About</a>
                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Contact</a>
                            </div>
                        </>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;