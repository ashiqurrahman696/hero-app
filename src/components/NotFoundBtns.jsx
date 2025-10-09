import { Link, useNavigate } from "react-router";

const NotFoundBtns = () => {
    const navigate = useNavigate();
    return (
        <div className="text-center">
            <button onClick={() => navigate(-1)} className="btn text-white bg-linear-to-br from-[#632ee3] to-[#9f62f2] rounded-md px-8 py-6">
                <span className="text-lg">Go Back!</span>
            </button>
        </div>
    );
};

export default NotFoundBtns;