import { Outlet, useLocation } from "react-router";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

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
                <div className="font-inter flex flex-col min-h-screen">
                    <Navbar />
                    <div className="flex-1 bg-neutral-100">
                        <Outlet />
                    </div>
                    <Footer />
                    <ToastContainer position="top-center"/>
                </div>
            }
        </>
    );
};

export default MainLayout;