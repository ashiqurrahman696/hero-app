import { getInstalledApps, removeFromInstalledApps } from "../utils/localStorage";
import useApps from "../hooks/useApps";
import { useEffect, useState } from "react";
import InstalledCard from "../components/InstalledCard";
import { toast } from "react-toastify";

const MyInstallation = () => {
    const {apps, loading, error} = useApps();
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState("none")
    useEffect(() => {
        const installedStorage = getInstalledApps();
        const filtered = apps.filter(app => installedStorage.includes(app.id));
        setInstalledApps(filtered);
    }, [apps]);
    useEffect(() => {
        let sorted = [...installedApps];
        if(sortOrder === "high-low"){
            sorted.sort((a, b) => b.downloads - a.downloads)
        }
        if(sortOrder === "low-high"){
            sorted.sort((a, b) => a.downloads - b.downloads)
        }
        setInstalledApps(sorted);
    }, [sortOrder]);
    const uninstallApp = id => {
        const filtered = installedApps.find(app => app.id === id);
        const {title} = filtered;
        removeFromInstalledApps(id);
        setInstalledApps(prev => prev.filter(list => list.id !== id));
        toast(`${title} Un-installed From Your Device`);
    }
    return (
        <div className="bg-neutral-100 px-4 py-10 text-[#001931]">
            <div className="w-full max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-3">Your Installed Apps</h2>
                <p className="text-center text-[#627382] mb-10">Explore All Trending Apps on the Market developed by us</p>
                <div className="flex max-sm:flex-col justify-between items-center gap-3 mb-10">
                    <h4 className="text-2xl font-semibold">{installedApps.length} Apps Found</h4>
                    <select className="select bg-neutral-100" onChange={(e) => setSortOrder(e.target.value)}>
                        <option value="none" disabled selected>Sort by Download Count</option>
                        <option value="high-low">High-Low</option>
                        <option value="low-high">Low-High</option>
                    </select>
                </div>
                <div className="space-y-5">
                    {installedApps.map(installed => <InstalledCard key={installed.id} installed={installed} uninstallApp={uninstallApp} />)}
                </div>
            </div>
        </div>
    );
};

export default MyInstallation;