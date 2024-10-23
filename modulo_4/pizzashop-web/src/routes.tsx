import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/auth/sign-in";
import { AuthLayout } from "./pages/_layouts/auth";
import { Dashboard } from "./pages/auth/app/dashboard";
import { AppLayout } from "./pages/_layouts/app";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [{ path: '/desboard', element: <Dashboard /> }],
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [{ path: '/sign-in', element: <SignIn /> }],
    },
]);