import { NavLink } from "react-router";

const Menu = () => {
    return (
        <>
            <li className="font-semibold"><NavLink to="/"><span>Home</span></NavLink></li>
            <li className="font-semibold"><NavLink to="/apps"><span>Apps</span></NavLink></li>
            <li className="font-semibold"><NavLink to="/installation"><span>Installation</span></NavLink></li>
        </>
    );
};

export default Menu;