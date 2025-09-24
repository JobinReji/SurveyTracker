import { FaPowerOff } from "react-icons/fa6";
import logo from "../assets/Impeerical_logo_nb.png";

export default function Header() {
  return (
    <header className="flex justify-center w-full">
      <div className="w-[10%] px-[1.5%]">
        <img src={logo} alt="Logo" className="" />
      </div>
      <div className="w-[90%] bg-[#364979] rounded-bl-3xl flex justify-center items-center">
        <h1 className="absolute left-1/2 -translate-x-1/2 text-white font-bold text-xl">
          Innovative - Survey Tracker
        </h1>
        <div className="ml-auto px-4">
          <div
            className="bg-white p-1.5 rounded-full cursor-pointer"
            title="Logout"
          >
            <FaPowerOff />
          </div>
        </div>
      </div>
    </header>
  );
}
