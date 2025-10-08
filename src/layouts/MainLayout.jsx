import { Outlet, useLocation } from "react-router";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    const location = useLocation();
        const [loading, setLoading] = useState(true);
        useEffect(() => {
            setLoading(true);
            setTimeout(() => setLoading(false), 100);
        }, [location]);
    return (
        <>
            {loading ? <Loading/> : 
                <div className="font-inter">
                    <Navbar />
                    <Outlet />
                    <Footer />
                </div>
            }
        </>
    );
};

export default MainLayout;