import { BsTwitterX } from 'react-icons/bs';
import logo from '../assets/logo.png';
import { Link } from 'react-router';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#001931] text-white">
            <footer className="footer md:grid-cols-4 gap-6 justify-between py-10 max-w-7xl mx-auto px-6">
                <aside>
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="w-10" />
                        <p className="font-semibold">HERO.IO</p>
                    </div>
                    <p>
                        Your trusted destination for discovering and downloading the best mobile applications. Explore our curated collection of innovative apps.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Newsroom</a>
                    <a className="link link-hover">Leadership</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
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
            </footer>
            <hr className="max-w-7xl mx-auto text-[#2e4256]" />
            <div className="footer sm:footer-horizontal footer-center p-10">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by HERO.IO</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;