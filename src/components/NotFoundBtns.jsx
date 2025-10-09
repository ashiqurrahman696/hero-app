import { Link } from "react-router";

const NotFoundBtns = () => {
    return (
        <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/" className="btn text-white bg-linear-to-br from-[#632ee3] to-[#9f62f2] rounded-md px-8 py-6">
                <span className="text-lg">Go to Home</span>
            </Link>
            <Link to="/apps" className="btn btn-outline text-violet-700 border border-y-violet-700 hover:bg-linear-to-br hover:from-[#632ee3] hover:to-[#9f62f2] hover:text-white hover:border-0 rounded-md px-8 py-6">
                <span className="text-lg">Browse Apps</span>
            </Link>
        </div>
    );
};

export default NotFoundBtns;