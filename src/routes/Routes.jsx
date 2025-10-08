import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import AppDetail from "../pages/AppDetail";
import MyInstallation from "../pages/MyInstallation";

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
                Component: AppDetail
            },
            {
                path: "/installation",
                Component: MyInstallation
            },
        ],
    },
]);

export default router;