import { Link, NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center justify-around bg-[#775027] p-2">
      <div>
        <Link to={"/"}>
          <div className="flex items-center justify-center ">
            <img
              className="w-14 md:w-20"
              src="https://i.ibb.co/4FxHwLg/logo1.png"
              alt=""
            />
            <img
              className="w-14 md:w-20 text-white"
              src="https://i.ibb.co/cQXTgGW/19.png"
              alt=""
            />
          </div>
        </Link>
      </div>
      <div className=" flex gap-4 text-white" >
        <NavLink to={"/users"}>User</NavLink>
        <NavLink to={"/signup"}>SignUp</NavLink>
        <NavLink to={"/signin"}>SignIn</NavLink>
      </div>
    </div>
  );
};

export default Logo;
