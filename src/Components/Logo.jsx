import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to={"/"}>
        <div className="flex items-center justify-center bg-[#775027] p-2">
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
  );
};

export default Logo;
