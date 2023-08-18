import { useState } from "react"
import Link from "next/link"
import { ConnectButton } from "web3uikit"

function NavBar() {
    const [navbar, setNavbar] = useState(false)
    return (
        <div>
            <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
                <div className="justify-between px-3 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link href="/">
                                <img src="/ape.png" width={30} height={30} alt="ape" />
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <img src="/close.svg" width={30} height={30} alt="logo" />
                                    ) : (
                                        <img
                                            src="/menu.svg"
                                            width={30}
                                            height={30}
                                            alt="logo"
                                            className="focus:border-none active:border-none"
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
                                navbar ? "p-12 md:p-0 block" : "hidden"
                            }`}
                        >
                            <ul className="h-screen md:h-auto items-center justify-center md:flex">
                                <li className="pb-2 text-xl  py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-blue-900  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                                    <a href="#buy" onClick={() => setNavbar(!navbar)}>
                                        Buy
                                    </a>
                                </li>
                                <li className="pb-2 text-xl  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-900  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                                    <a href="#audit" onClick={() => setNavbar(!navbar)}>
                                        Audit
                                    </a>
                                </li>
                                <li className="pb-2 text-xl  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-900  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                                    <a href="#frens" onClick={() => setNavbar(!navbar)}>
                                        Frens
                                    </a>
                                </li>
                                <li className="pb-2 text-xl  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-900  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                                    <a href="#roadmap" onClick={() => setNavbar(!navbar)}>
                                        Roadmap
                                    </a>
                                </li>
                                <li className="pb-2 text-xl  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-900  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                                    <a href="#community" onClick={() => setNavbar(!navbar)}>
                                        Community
                                    </a>
                                </li>
                                <li className="pb-2 text-xl  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-900  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                                    <a href="#staking" onClick={() => setNavbar(!navbar)}>
                                        Staking
                                    </a>
                                </li>
                                <li className="pb-2 text-xl  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-900  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                                    <a href="#punks" onClick={() => setNavbar(!navbar)}>
                                        Punks
                                    </a>
                                </li>
                                <li className="pb-2 text-xl  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-900  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                                    <a
                                        href="https://twitter.com/degenfrog"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        <img
                                            src="/frog.png"
                                            width={30}
                                            height={30}
                                            alt="frog"
                                            className="focus:border-none active:border-none m-auto"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="sticky top-0 right-0">
                        <div className="flex justify-center">
                            <ConnectButton moralisAuth={false} />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar
