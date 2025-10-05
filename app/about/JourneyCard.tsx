interface JourneyBlockProps {
  children?: React.ReactNode;
  position?: "left" | "right";
}

const JourneyCard: React.FC<JourneyBlockProps> = ({
  children,
  position = "left",
}) => {
  return (
    <div
      className={`relative flex flex-col md:flex-row items-center justify-${
        position === "left" ? "start" : "end"
      }`}
    >
      {position === "right" && (
        <div className="hidden md:block w-4 h-4 rounded-full border-brand border-4 bg-white absolute left-1/2 -translate-x-1/2 z-10"></div>
      )}
      <div
        className={`md:w-1/2 text-${
          position === "right" ? "left" : "right"
        } flex flex-col gap-2 ${
          position === "right" ? "md:pl-8 lg:pl-16" : "md:pr-8 lg:pr-16"
        }`}
      >
        {children}
      </div>
      {position === "left" && (
        <div className="hidden md:block w-4 h-4 rounded-full border-brand border-4 bg-white absolute left-1/2 -translate-x-1/2 z-10"></div>
      )}
    </div>
  );
};

export default JourneyCard;
