import { FaArrowRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import Header from "./Header";
import Select from "react-select";
import { useState } from "react";

export default function MainPage() {
  const states = [
    { value: "delhi", label: "Delhi" },
    { value: "karnataka", label: "Karnataka" },
    { value: "goa", label: "Goa" },
  ];

  const city = [
    { value: "delhi", label: "Delhi" },
    { value: "bangalore", label: "Bangalore" },
    { value: "panaji", label: "Panaji" },
  ];

  const typeOfCity = [
    { value: "metro", label: "Metro" },
    { value: "urban", label: "Urban" },
    { value: "rural", label: "Rural" },
  ];

  const typeOfInstitute = [
    { value: "school", label: "School" },
    { value: "college", label: "College" },
    { value: "coaching", label: "Coaching Center" },
  ];

  const typeOfTests = [
    { value: "written", label: "Written" },
    { value: "online", label: "Online" },
    { value: "oral", label: "Oral" },
  ];

  const dropdowns = [
    { label: "State", options: states },
    { label: "City", options: city },
    { label: "Type of City", options: typeOfCity },
    { label: "Type of Institute", options: typeOfInstitute },
    { label: "Type of Tests", options: typeOfTests },
  ];

  const tableHeaders = [
    { text: "S.No.", style: "w-[4%] py-2" },
    { text: "ID", style: "w-[4%] py-2" },
    { text: "Name of the Institute/ Organization", style: "w-[14%] py-2" },
    { text: "Types of Institute", style: "w-[10%] py-2" },
    { text: "City", style: "w-[8%] py-2" },
    { text: "Type of city", style: "w-[10%] py-2" },
    { text: "State", style: "w-[8%] py-2" },
    { text: "Type of Diagnostic Test", style: "w-[8%] py-2" },
    { text: "Phase 1", style: "w-[8%] py-2" },
    { text: "Phase 2", style: "w-[8%] py-2" },
    { text: "Phase 3", style: "w-[8%] py-2" },
  ];

  function InProgressTag() {
    const [hovered, setHovered] = useState(false);

    return (
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`
        relative py-1 px-2 w-full flex justify-center items-center rounded-md font-bold text-xs cursor-pointer
        overflow-hidden transition-all duration-300 ease-in-out
        ${
          hovered
            ? "bg-[#c87dfa] text-[#500a7f]"
            : "bg-amber-400/50 text-[#B5971D]"
        }
      `}
        style={{ height: "24px" }}
      >
        <span
          className={`absolute left-0 w-full flex justify-center items-center transition-transform duration-300`}
          style={{
            transform: hovered ? "translateY(-130%)" : "translateY(0%)",
          }}
        >
          In Progress
        </span>
        <span
          className={`absolute left-0 w-full flex gap-1 justify-center items-center transition-transform duration-300`}
          style={{
            transform: hovered ? "translateY(0%)" : "translateY(130%)",
          }}
        >
          Resume <FaPlay />
        </span>
      </button>
    );
  }

  const completed = (
    <span className="bg-lime-600/50 py-1 px-2 w-full flex justify-center items-center rounded-md text-[#5D8E17] font-bold text-xs cursor-not-allowed">
      Completed
    </span>
  );
  const inProgress = InProgressTag();
  const na = (
    <span className="bg-orange-500/50 py-1 w-full flex justify-center items-center rounded-md text-[#EE6C27] font-bold text-xs cursor-not-allowed">
      NA
    </span>
  );
  const start = (
    <button className="bg-sky-800/50 py-1 w-full flex justify-center items-center rounded-md text-[#02548E] font-bold text-xs cursor-pointer">
      Start
    </button>
  );

  const tableData = [
    {
      sno: 1,
      id: "1001",
      name: "Apollo",
      institute: "Hospital - Private",
      city: "Delhi NCR",
      typeOfCity: "Tier 1",
      state: "Delhi / Haryana / UP",
      test: "Pathology",
      phase1: completed,
      phase2: inProgress,
      phase3: "",
    },
    {
      sno: 2,
      id: "1002",
      name: "Fortis Healthcare",
      institute: "Lab - Standalone",
      city: "Mumbai",
      typeOfCity: "Tier 1",
      state: "Maharashtra",
      test: "Pathology",
      phase1: completed,
      phase2: completed,
      phase3: start,
    },
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      fontSize: "12px",
      color: "#364979", // text color in control
      boxShadow: state.isFocused ? "0 0 0 1px #364979" : base.boxShadow,
    }),
    singleValue: (base) => ({
      ...base,
      color: "#364979", // selected value color
      fontWeight: "bold",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#364979", // arrow color
      "&:hover": {
        color: "#364979",
      },
    }),
    menu: (base) => ({
      ...base,
      fontSize: "12px",
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 9999,
    }),
    option: (base, state) => ({
      ...base,
      color: state.isFocused ? "#fff" : "#364979",
      backgroundColor: state.isFocused ? "#364979" : "#fff",
      cursor: "pointer",
    }),
  };

  function DisplayBox({
    phase,
    completedTxt,
    targetTxt,
    commonTxt = "Achieved/ Target",
    circleColor,
    bgColor,
  }) {
    return (
      <div
        className={`flex items-center w-[22%] rounded-md overflow-hidden`}
        style={{ backgroundColor: bgColor }}
      >
        <div
          className={` text-white font-bold flex items-center justify-center px-3 rounded-r-full h-full`}
          style={{ backgroundColor: circleColor }}
        >
          {phase}
        </div>
        <div className="flex flex-col text-center flex-1 py-2">
          <div className="text-white font-bold text-lg">
            {completedTxt.toLocaleString()} / {targetTxt.toLocaleString()}
          </div>
          <div className={`text-xs font-bold`} style={{ color: circleColor }}>
            {commonTxt}
          </div>
        </div>
      </div>
    );
  }
  return (
    <section className="bg-[#E8E8F1] h-screen w-screen flex flex-col">
      <Header />
      <main className="flex-1 min-h-0 flex flex-col">
        <section className="flex w-full">
          <div className="w-[30%] flex justify-center">
            <button className="flex items-center gap-2 py-2 px-6 bg-[#93a6d7] text-[#364979] font-semibold rounded-md my-4 cursor-pointer shadow-md hover:shadow-[#646464] transform transition-all duration-150 hover:-translate-y-1 active:translate-y-0 active:scale-95 active:shadow-sm">
              Start Survey (Phase 1)
              <span className="p-2 rounded-full bg-[#364979]">
                <FaArrowRight className="text-[#93a6d7]" />
              </span>
            </button>
          </div>
          <div className="w-[70%] flex justify-around items-center">
            <DisplayBox
              phase={"P1"}
              completedTxt={2000}
              targetTxt={30000}
              circleColor={"#01497c"}
              bgColor={"#749DBF"}
            />
            <DisplayBox
              phase={"P2"}
              completedTxt={2000}
              targetTxt={30000}
              circleColor={"#5D8E17"}
              bgColor={"#A2BB83"}
            />
            <DisplayBox
              phase={"P3"}
              completedTxt={2000}
              targetTxt={30000}
              circleColor={"#017B99"}
              bgColor={"#74B1C4"}
            />
          </div>
        </section>
        <section className="flex justify-around">
          {dropdowns.map((dropdown, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-sm text-[#364979]"
            >
              <label className="whitespace-nowrap font-bold">
                {dropdown.label}:
              </label>
              <Select
                options={dropdown.options}
                className="w-36"
                styles={customStyles}
                menuPortalTarget={document.body}
              />
            </div>
          ))}
        </section>
        <section className="flex-1 min-h-0 p-3">
          <hr className="border-t-4 border-[#364979] rounded-full mx-1" />
          <div className="w-full h-full border-2 border-t-0 border-gray-300 rounded-md bg-white px-2">
            <div className="w-full h-full text-sm overflow-auto">
              <table className="w-full text-center">
                <thead className="text-[#364979] sticky top-0 z-10 bg-white shadow-[0_2px_0_0_#017B99]">
                  <tr>
                    {tableHeaders.map((header, i) => (
                      <th key={i} className={header.style}>
                        {header.text}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-b border-b-[#C8C8C8]">
                      <td className="py-2">{row.sno}</td>
                      <td className="py-2">{row.id}</td>
                      <td className="py-2">{row.name}</td>
                      <td className="py-2">{row.institute}</td>
                      <td className="py-2">{row.city}</td>
                      <td className="py-2">{row.typeOfCity}</td>
                      <td className="py-2">{row.state}</td>
                      <td className="py-2">{row.test}</td>
                      <td className="py-2 px-2">{row.phase1}</td>
                      <td className="py-2 px-2">{row.phase2}</td>
                      <td className="py-2 px-2">{row.phase3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
