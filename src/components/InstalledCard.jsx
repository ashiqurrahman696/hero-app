import { FaStar } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";

const InstalledCard = ({installed, uninstallApp}) => {
    const {id, image, title, downloads, size, ratingAvg} = installed;
    return (
        <div className="bg-base-100 p-4 rounded flex max-sm:flex-col items-center gap-4">
            <img src={image} alt={title} className="max-sm:w-full w-20 rounded" />
            <div className="flex justify-between items-center max-sm:flex-col gap-4 w-full">
                <div>
                    <h6 className="max-sm:text-center text-lg mb-3">{title}</h6>
                    <div className="flex gap-4 flex-wrap">
                        <div className="flex items-center gap-1 text-[#00d390] ">
                            <LuDownload />
                            <span>{downloads >= 1000000 ? `${downloads / 1000000}M` : `${downloads / 1000}K`}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[#ff8811] ">
                            <FaStar />
                            <span>{ratingAvg}</span>
                        </div>
                        <p className="text-[#627382]">{size} MB</p>
                    </div>
                </div>
                <button onClick={()=>uninstallApp(id)} className="btn bg-[#00d390] text-white rounded-md">Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledCard;