import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import About from "../../Pages/About/About";
import Archive from "../../Pages/Archive/Archive";
import Categories from "../../Pages/Categories/Categories";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home";
import Portfolio from "../../Pages/Portfolio/Portfolio";
import Resources from "../../Pages/Resources/Resources";
import CookiePolicy from "../../Pages/Shared/Footer/Legal/CookiePolicy";
import PrivacyPolicy from "../../Pages/Shared/Footer/Legal/PrivacyPolicy";
import TermsOfUse from "../../Pages/Shared/Footer/Legal/TermsOfUse";
import Login from "../../Pages/Shared/Login/Login";
import Register from "../../Pages/Shared/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/archive',
                element: <Archive></Archive>
            },
            {
                path: '/resources',
                element: <Resources></Resources>
            },
            {
                path: '/portfolio',
                element: <Portfolio></Portfolio>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/termsOfUse',
                element: <TermsOfUse></TermsOfUse>
            },
            {
                path: '/privacyPolicy',
                element: <PrivacyPolicy></PrivacyPolicy>
            },
            {
                path: '/cookiePolicy',
                element: <CookiePolicy></CookiePolicy>
            }
        ]
    }
])
