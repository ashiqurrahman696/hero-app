import { LuDownload } from "react-icons/lu";
import demo1 from "../assets/demo-app (1).webp";
import { FaStar } from "react-icons/fa";

const MyInstallation = () => {
    return (
        <div className="bg-neutral-100 px-4 py-10 text-[#001931]">
            <div className="w-full max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-3">Your Installed Apps</h2>
                <p className="text-center text-[#627382] mb-10">Explore All Trending Apps on the Market developed by us</p>
                <div className="flex max-sm:flex-col justify-between items-center gap-3 mb-10">
                    <h4 className="text-2xl font-semibold">1 Apps Found</h4>
                    <select className="select bg-neutral-100">
                        <option>Sort by Download Count</option>
                        <option>High-Low</option>
                        <option>Low-High</option>
                    </select>
                </div>
                <div className="space-y-5">
                    <div className="bg-base-100 p-4 rounded flex max-sm:flex-col items-center gap-4">
                        <img src={demo1} alt="Demo app" className="w-20 rounded" />
                        <div className="flex justify-between items-center max-sm:flex-col gap-4 w-full">
                            <div>
                                <h6 className="text-lg mb-3">Pomocat - Cute Pomodoro Timer</h6>
                                <div className="flex gap-4 flex-wrap">
                                    <div className="flex items-center gap-1 text-[#00d390] ">
                                        <LuDownload />
                                        <span>9M</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-[#ff8811] ">
                                        <FaStar />
                                        <span>5</span>
                                    </div>
                                    <p className="text-[#627382]">258 MB</p>
                                </div>
                            </div>
                            <button className="btn bg-[#00d390] text-white rounded-md">Uninstall</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyInstallation;