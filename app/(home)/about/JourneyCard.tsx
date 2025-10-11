import React from "react";

interface ProcessBlockProps {
  children?: React.ReactNode;
  position?: "left" | "right";
  year: string;
}

const JourneyCard: React.FC<ProcessBlockProps> = ({
  children,
  position = "left",
  year,
}) => {
  return (
    <div
      className={`relative flex flex-col md:flex-row items-center justify-${
        position === "left" ? "start" : "end"
      } w-full`}
    >
      {position === "right" && (
        <>
          <div className="hidden md:flex w-1/2 justify-end pr-8 lg:pr-16 relative">
            <div
              className={`flex items-center gap-4 text-brand text-3xl font-bold`}
            >
              <span className="text-5xl font-anton">{year}</span>
            </div>
          </div>
          <div
            className={`hidden md:block w-4 h-4 rounded-full border-4 border-brand bg-white absolute left-1/2 -translate-x-1/2 z-10 shadow-md`}
          ></div>
        </>
      )}

      <div
        className={`relative md:w-1/2 p-6 rounded-lg shadow-xl  flex flex-col gap-2 ${
          position === "right" ? "md:ml-8 lg:ml-16" : "md:mr-8 lg:mr-16"
        } text-left`}
      >
        <div
          className={`md:hidden flex items-center gap-4 mb-4 text-brand text-2xl font-bold`}
        >
          <span className="text-4xl font-anton">{year}</span>
        </div>
        {children}
      </div>

      {position === "left" && (
        <>
          <div
            className={`hidden md:block w-4 h-4 rounded-full border-4 border-brand bg-white absolute left-1/2 -translate-x-1/2 z-10 shadow-md`}
          ></div>
          <div className="hidden md:flex w-1/2 justify-start pl-8 lg:pl-16 relative">
            <div
              className={`flex items-center gap-4 text-brand text-3xl font-bold`}
            >
              <span className="text-5xl font-anton">{year}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default JourneyCard;
