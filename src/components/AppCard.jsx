import { FaStar } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";

const AppCard = ({app}) => {
    const {id, image, title, downloads, ratingAvg} = app;
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="px-3 pt-3">
                <img
                    src={image}
                    alt={title}
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between w-full">
                    <div className="flex items-center bg-[#f1f5e8] text-[#00d390] py-1 px-2 rounded">
                        <LuDownload />
                        <span>{downloads >= 1000000 ? `${downloads/1000000}M` : `${downloads/1000}K`}</span>
                    </div>
                    <div className="flex items-center bg-[#fff0e1] text-[#ff8811] py-1 px-2 rounded">
                        <FaStar />
                        <span>{ratingAvg}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;