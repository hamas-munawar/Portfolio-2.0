import * as LucideIcons from "lucide-react";
import React from "react";

// Define the correct type for a Lucide React component
// This confirms to TypeScript that the variable holds a valid functional component.
type LucideIconComponent = React.FC<LucideIcons.LucideProps>;

interface ProcessBlockProps {
  children?: React.ReactNode;
  position?: "left" | "right";
  stepNumber: number;
  iconName: keyof typeof LucideIcons;
}

const ProcessCard: React.FC<ProcessBlockProps> = ({
  children,
  position = "left",
  stepNumber,
  iconName,
}) => {
  const IconComponent = LucideIcons[iconName] as LucideIconComponent;
  const FinalIconComponent = (IconComponent ||
    LucideIcons.HelpCircle) as LucideIconComponent;

  return (
    <div
      className={`relative flex flex-col md:flex-row items-center justify-${
        position === "left" ? "start" : "end"
      } w-full`}
    >
      {/* --- Right-aligned cards (Icon & Step Number on the left) --- */}
      {position === "right" && (
        <>
          {/* Step Number & Icon Container (Desktop) */}
          <div className="hidden md:flex w-1/2 justify-end pr-8 lg:pr-16 relative">
            <div
              className={`flex items-center gap-4 text-brand text-3xl font-bold`}
            >
              <span className="text-5xl font-anton">
                {stepNumber < 10 ? `0${stepNumber}` : stepNumber}
              </span>
              <div
                className={`flex items-center justify-center p-2 rounded-full border-2 border-brand shadow-lg`}
              >
                <FinalIconComponent size={32} />
              </div>
            </div>
          </div>
          {/* Timeline Dot */}
          <div
            className={`hidden md:block w-4 h-4 rounded-full border-4 border-brand bg-white absolute left-1/2 -translate-x-1/2 z-10 shadow-md`}
          ></div>
        </>
      )}

      {/* --- The actual content card (Omitted for brevity) --- */}
      <div
        className={`relative md:w-1/2 p-6 rounded-lg shadow-xl  flex flex-col gap-2
                    ${
                      position === "right"
                        ? "md:ml-8 lg:ml-16"
                        : "md:mr-8 lg:mr-16"
                    }
                    text-left`}
      >
        {/* Mobile: Step Number & Icon at the top of the card */}
        <div
          className={`md:hidden flex items-center gap-4 mb-4 text-brand text-2xl font-bold`}
        >
          <div
            className={`flex items-center justify-center p-2 rounded-full border-2 border-brand shadow-lg`}
          >
            <FinalIconComponent size={24} />
          </div>
          <span className="text-4xl font-anton">
            {stepNumber < 10 ? `0${stepNumber}` : stepNumber}
          </span>
        </div>
        {children}
      </div>

      {/* --- Left-aligned cards (Icon & Step Number on the right) --- */}
      {position === "left" && (
        <>
          {/* Timeline Dot */}
          <div
            className={`hidden md:block w-4 h-4 rounded-full border-4 border-brand bg-white absolute left-1/2 -translate-x-1/2 z-10 shadow-md`}
          ></div>
          {/* Step Number & Icon Container (Desktop) */}
          <div className="hidden md:flex w-1/2 justify-start pl-8 lg:pl-16 relative">
            <div
              className={`flex items-center gap-4 text-brand text-3xl font-bold`}
            >
              <div
                className={`flex items-center justify-center p-2 rounded-full border-2 border-brand shadow-lg`}
              >
                <FinalIconComponent size={32} />
              </div>
              <span className="text-5xl font-anton">
                {stepNumber < 10 ? `0${stepNumber}` : stepNumber}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProcessCard;
