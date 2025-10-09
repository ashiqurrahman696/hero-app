import { Link } from "react-router";
import error404 from "../assets/error-404.png"
import NotFoundBtns from "../components/NotFoundBtns";

const PageNotFound = () => {
    return (
        <div className="bg-neutral-100 px-4 py-10 text-[#001931]">
            <div className="w-full max-w-7xl mx-auto space-y-4">
                <img src={error404} className="mx-auto" />
                <h2 className="text-5xl font-bold text-center">Oops, page not found!</h2>
                <p className="text-center text-[#627382]">The page you are looking for is not available.</p>
                <NotFoundBtns/>
            </div>
        </div>
    );
};

export default PageNotFound;