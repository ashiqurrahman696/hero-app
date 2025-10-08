import { FaGooglePlay } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";

const Stats = () => {
    return (
        <div className="bg-linear-to-br from-[#632ee3] to-[#9f62f2] text-white px-4 py-10 text-center">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold mb-10">Trusted by Millions, Built for You</h2>
                <div className="grid md:grid-cols-3 gap-5">
                    <div className="space-y-2">
                        <p className="text-sm opacity-50">Total Downloads</p>
                        <h3 className="text-4xl font-bold flex items-center justify-center gap-6">
                            <span>29.6M</span>
                            <MdOutlineFileDownload />
                        </h3>
                        <p className="text-sm opacity-50">21% More Than Last Month</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm opacity-50">Total Reviews</p>
                        <h3 className="text-4xl font-bold flex items-center justify-center gap-6">
                            <span>906K</span>
                            <IoIosStar />
                        </h3>
                        <p className="text-sm opacity-50">46% More Than Last Month</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm opacity-50">Active Apps</p>
                        <h3 className="text-4xl font-bold flex items-center justify-center gap-6">
                            <span>132+</span>
                            <FaGooglePlay />
                        </h3>
                        <p className="text-sm opacity-50">31 More Will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;