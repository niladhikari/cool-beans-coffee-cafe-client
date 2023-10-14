import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Logo from "./Logo";


const Root = () => {
    return (
        <div>
            <Logo></Logo>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;