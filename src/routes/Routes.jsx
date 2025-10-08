import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import AppDetail from "../pages/AppDetail";
import MyInstallation from "../pages/MyInstallation";
import AppNotFound from "../pages/AppNotFound";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/apps",
                Component: Apps
            },
            {
                path: "/apps/:appId",
                Component: AppDetail,
                errorElement: <AppNotFound/>
            },
            {
                path: "/installation",
                Component: MyInstallation
            },
        ],
    },
]);

export default router;