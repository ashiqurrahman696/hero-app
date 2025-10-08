import { Link } from "react-router";
import appError from "../assets/App-Error.png"

const AppNotFound = () => {
    return (
        <div className="bg-neutral-100 px-4 py-10 text-[#001931]">
            <div className="w-full max-w-7xl mx-auto space-y-4">
                <img src={appError} className="mx-auto" />
                <h2 className="text-5xl font-bold text-center">OOPS!! APP NOT FOUND</h2>
                <p className="text-center text-[#627382]">The App you are requesting is not found on our system. Please try another apps.</p>
                <div className="text-center">
                    <Link to="/" className="btn text-white bg-linear-to-br from-[#632ee3] to-[#9f62f2] rounded-md px-8 py-6">
                        <span className="text-lg">Go Back!</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AppNotFound;