import { Link } from "react-router";
import Menu from "./Menu";
import { FaGithub } from "react-icons/fa6";
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div className="bg-base-100 py-2 border-b border-[#e9e9e9] sticky top-0 z-10">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <Menu/>
                        </ul>
                    </div>
                    <Link to="/" className="flex items-center gap-1">
                        <img src={logo} alt="logo" className="w-10" />
                        <span className="font-semibold text-2xl bg-linear-to-br from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text max-sm:hidden">HERO.IO</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Menu/>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link target="_blank" to="https://github.com/ashiqurrahman696" className="btn text-white bg-linear-to-br from-[#632ee3] to-[#9f62f2] rounded-md">
                        <FaGithub size={20} />
                        <span className="text-lg">Contribute</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;