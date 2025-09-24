import { FaPowerOff } from "react-icons/fa6";
import logo from "../assets/Impeerical_logo_nb.png";

export default function Header() {
  return (
    <header className="flex justify-center w-full">
      <div className="sm:w-[10%] w-[20%] px-[1.5%] sm:py-0 py-[3%]">
        <img src={logo} alt="Logo" className="" />
      </div>
      <div className="sm:w-[90%] w-[80%] bg-[#364979] rounded-bl-3xl flex justify-center items-center">
        <h1 className="absolute left-1/2 -translate-x-1/2 text-white font-bold sm:text-xl text-md">
          Innovative - Survey Tracker
        </h1>
        <div className="ml-auto px-4">
          <div
            className="bg-white sm:p-1.5 p-1 rounded-full cursor-pointer"
            title="Logout"
          >
            <FaPowerOff />
          </div>
        </div>
      </div>
    </header>
  );
}
