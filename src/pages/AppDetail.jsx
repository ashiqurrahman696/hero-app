import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png"
import { Bar, BarChart, CartesianGrid, ComposedChart, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const AppDetail = () => {
    const {appId} = useParams();
    const {apps, loading, error} = useApps();
    const singleApp = apps.find(app => app.id === Number(appId));
    if(loading) return <p>Loading...</p>
    const {image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings} = singleApp;
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className="bg-neutral-100 px-4 py-10 text-[#001931]">
            <div className="w-full max-w-7xl mx-auto">
                <div className="flex items-center gap-5">
                    <img src={image} alt={title} className="bg-base-100 size-[350px] shadow-md" />
                    <div className="space-y-4 w-full">
                        <h3 className="text-3xl font-bold">{title}</h3>
                        <p className="text-[#627382]">Developed by <span className="bg-linear-to-br from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text font-semibold">{companyName}</span></p>
                        <hr className="text-[#c4c9ce]" />
                        <div className="flex gap-8">
                            <div className="space-y-2">
                                <img src={downloadIcon} alt="download icon" />
                                <p>Downloads</p>
                                <h2 className="text-5xl font-extrabold">{downloads >= 1000000 ? `${downloads / 1000000}M` : `${downloads / 1000}K`}</h2>
                            </div>
                            <div className="space-y-2">
                                <img src={ratingIcon} alt="download icon" />
                                <p>Average Ratings</p>
                                <h2 className="text-5xl font-extrabold">{ratingAvg}</h2>
                            </div>
                            <div className="space-y-2">
                                <img src={reviewIcon} alt="download icon" />
                                <p>Total Reviews</p>
                                <h2 className="text-5xl font-extrabold">{reviews/1000}K</h2>
                            </div>
                        </div>
                        <button className="btn bg-[#00d390] text-white rounded-md">Install Now ({size} MB)</button>
                    </div>
                </div>
                <hr className="text-[#c4c9ce] my-6" />
                <div className="h-100">
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                            layout="vertical"
                            width={500}
                            height={300}
                            data={ratings}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" scale="band" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" fill="#ff8811" activeBar={<Rectangle fill="#ffaa22" stroke="blue" />} />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
                <hr className="text-[#c4c9ce] my-6" />
                <h4 className="text-2xl font-semibold mb-5">Description</h4>
                <p className="text-[#627382] whitespace-pre-wrap">{description}</p>
            </div>
        </div>
    );
};

export default AppDetail;