const Footer = () => {
  return (
    <footer className="mx-auto text-center font-roboto flex flex-col gap-6 py-4">
      <div className="flex flex-col gap-2">
        <p className="text-lg md:text-xl">Have idea in Mind ? </p>
        <a
          href={"mailto:muhammadhamasmunawar@gmail.com"}
          className="font-anton hover:underline hover:cursor-pointer text-xl md:text-2xl lg:text-4xl"
        >
          muhammadhamasmunawar@gmail.com
        </a>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl">
          Inspired By{" "}
          <a
            href="https://www.me.toinfinite.dev/"
            className="underline font-bold"
          >
            Tajmirul
          </a>
        </p>
        <p className="text-xl">
          Rebuild By <span className="underline font-bold">Hamas Munawar</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
