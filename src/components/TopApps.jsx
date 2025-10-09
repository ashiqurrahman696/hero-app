import { Link } from "react-router";
import useApps from "../hooks/useApps";
import AppCard from "./AppCard";

const TopApps = () => {
    const {apps} = useApps();
    const featured = apps.slice(0, 8);
    
    return (
        <div className="bg-neutral-100 px-4 py-10 text-[#001931]">
            <div className="w-full max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-3">Trending Apps</h2>
                <p className="text-center text-[#627382] mb-10">Explore All Trending Apps on the Market developed by us</p>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10">
                    {featured.map(app => <AppCard key={app.id} app={app} />)}
                </div>
                <div className="text-center">
                    <Link to="/apps" className="btn text-white bg-linear-to-br from-[#632ee3] to-[#9f62f2] rounded-md px-8 py-6">
                        <span className="text-lg">Show All</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopApps;