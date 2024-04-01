import { Outlet } from "react-router-dom";
import Navber from "./navbar/Navbar";
import Banner from "./banner/Banner";

const Header = () => {
    return (
        <div className="bg-[#f9fafc] w-full min-h-screen">
            <Navber><Outlet /></Navber>
            <Banner />
        </div>
    );
};

export default Header;