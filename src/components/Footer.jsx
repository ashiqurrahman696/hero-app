import { BsTwitterX } from 'react-icons/bs';
import logo from '../assets/logo.png';
import { Link } from 'react-router';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#001931] text-white">
            <div className="footer justify-between sm:footer-horizontal  py-10 max-w-7xl mx-auto">
                <aside className="flex items-center">
                    <img src={logo} alt="Logo" className="w-10" />
                    <p className="font-semibold">HERO.IO</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Social links</h6>
                    <div className="flex gap-4">
                        <div className="bg-white text-black rounded-full p-1">
                            <Link to="https://x.com">
                                <BsTwitterX />
                            </Link>
                        </div>
                        <div className="bg-white text-black rounded-full p-1">
                            <Link to="https://linkedin.com">
                                <FaLinkedinIn />
                            </Link>
                        </div>
                        <div className="text-white">
                            <Link to="https://facebook.com">
                                <FaFacebook size={22} />
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
            <hr className="max-w-7xl mx-auto text-[#2e4256]" />
            <div className="footer sm:footer-horizontal footer-center p-10">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;