import { FaStar } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { Link } from "react-router";

const AppCard = ({app}) => {
    const {id, image, title, downloads, ratingAvg} = app;
    return (
        <Link to={`/apps/${id}`} className="card bg-base-100 shadow-sm">
            <figure className="px-3 pt-3">
                <img
                    src={image}
                    alt={title}
                    className="rounded-xl" />
            </figure>
            <div className="card-body text-center pt-2">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between w-full">
                    <div className="flex items-center bg-[#f1f5e8] text-[#00d390] py-1 px-2 rounded gap-1.5">
                        <LuDownload />
                        <span>{downloads >= 1000000 ? `${downloads/1000000}M` : `${downloads/1000}K`}</span>
                    </div>
                    <div className="flex items-center bg-[#fff0e1] text-[#ff8811] py-1 px-2 rounded gap-1.5">
                        <FaStar />
                        <span>{ratingAvg}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;