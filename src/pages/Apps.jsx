import AppCard from "../components/AppCard";
import useApps from "../hooks/useApps";

const Apps = () => {
    const {apps, loading, error} = useApps();
    return (
        <div className="bg-neutral-100 px-4 py-10 text-[#001931]">
            <div className="w-full max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-3">Our All Applications</h2>
                <p className="text-center text-[#627382] mb-10">Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className="flex max-sm:flex-col justify-between items-center gap-3 mb-10">
                    <h4 className="text-2xl font-semibold">({apps.length}) Apps Found</h4>
                    <label className="input bg-transparent">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" placeholder="Search" />
                    </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10">
                    {apps.map(app => <AppCard key={app.id} app={app} />)}
                </div>
            </div>
        </div>
    );
};

export default Apps;