import Icon from "./components/Icon";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h2>
      <Icon
        name="flower"
        svgClassNames="w-8 h-8 md:w-10 md:h-10 animate-spin-slow"
        parentClassNames="text-xl md:text-2xl gap-2"
      >
        {title}
      </Icon>
    </h2>
  );
};

export default SectionTitle;
