import { LuDownload } from "react-icons/lu";
import demo1 from "../assets/demo-app (1).webp";
import { FaStar } from "react-icons/fa";
import { getInstalledApps } from "../utils/localStorage";
import useApps from "../hooks/useApps";
import { useEffect, useState } from "react";
import InstalledCard from "../components/InstalledCard";

const MyInstallation = () => {
    const {apps, loading, error} = useApps();
    const [installedApps, setInstalledApps] = useState([]);
    useEffect(() => {
        const installedStorage = getInstalledApps();
        const filtered = apps.filter(app => installedStorage.includes(app.id));
        setInstalledApps(filtered);
    }, [apps]);
    return (
        <div className="bg-neutral-100 px-4 py-10 text-[#001931]">
            <div className="w-full max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-3">Your Installed Apps</h2>
                <p className="text-center text-[#627382] mb-10">Explore All Trending Apps on the Market developed by us</p>
                <div className="flex max-sm:flex-col justify-between items-center gap-3 mb-10">
                    <h4 className="text-2xl font-semibold">{installedApps.length} Apps Found</h4>
                    <select className="select bg-neutral-100">
                        <option>Sort by Download Count</option>
                        <option>High-Low</option>
                        <option>Low-High</option>
                    </select>
                </div>
                <div className="space-y-5">
                    {installedApps.map(installed => <InstalledCard key={installed.id} installed={installed} />)}
                </div>
            </div>
        </div>
    );
};

export default MyInstallation;