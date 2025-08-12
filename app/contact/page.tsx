"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoIosSend } from "react-icons/io";

const ContactPage = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.5,
    });

    tl.from(".slide-up", {
      opacity: 0,
      y: 40,
      stagger: 0.025,
    });
  });

  return (
    <section
      id="contact"
      className="min-h-screen grid place-content-center gap-16"
    >
      <h3 className="slide-up text-center font-anton text-5xl">
        Let's Connect
      </h3>
      <form className="text-white-cool flex flex-col gap-12 w-screen max-w-[720] mx-auto px-4">
        <div className="slide-up relative flex flex-col gap-2">
          <input
            type="text"
            id="fullName"
            className="px-4 py-4 peer w-full h-10 placeholder-transparent focus:outline-none border-b-2 border-gray-medium focus:border-brand"
            placeholder=" "
          />
          <label
            htmlFor="fullName"
            className="px-2 absolute left-0 -top-4 text-gray-medium text-base transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-white-whisper peer-placeholder-shown:top-1 peer-focus:-top-6 peer-focus:px-0 peer-focus:text-brand"
          >
            Full Name
          </label>
        </div>
        <div className="slide-up grid md:grid-cols-2 gap-8 md:gap-4">
          <div className="relative flex flex-col gap-2">
            <input
              type="text"
              id="phoneNo"
              className="px-4 py-4 peer w-full h-10 placeholder-transparent focus:outline-none border-b-2 border-gray-medium focus:border-brand"
              placeholder=" "
            />
            <label
              htmlFor="phoneNo"
              className="px-2 absolute left-0 -top-4 text-gray-medium text-base transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-white-whisper peer-placeholder-shown:top-1 peer-focus:-top-6 peer-focus:px-0 peer-focus:text-brand"
            >
              Phone No (Optional)
            </label>
          </div>
          <div className="relative flex flex-col gap-2">
            <input
              type="text"
              id="howHeard"
              className="px-4 py-4 peer w-full h-10 placeholder-transparent focus:outline-none border-b-2 border-gray-medium focus:border-brand"
              placeholder=" "
            />
            <label
              htmlFor="howHeard"
              className="px-2 absolute left-0 -top-4 text-gray-medium text-base transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-white-whisper peer-placeholder-shown:top-1 peer-focus:-top-6 peer-focus:px-0 peer-focus:text-brand"
            >
              How you heard about me (Optional)
            </label>
          </div>
        </div>
        <div className="slide-up relative flex flex-col gap-2">
          <input
            type="text"
            id="subject"
            className="px-4 py-4 peer w-full h-10 placeholder-transparent focus:outline-none border-b-2 border-gray-medium focus:border-brand"
            placeholder=" "
          />
          <label
            htmlFor="subject"
            className="px-2 absolute left-0 -top-4 text-gray-medium text-base transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-white-whisper peer-placeholder-shown:top-1 peer-focus:-top-6 peer-focus:px-0 peer-focus:text-brand"
          >
            Subject
          </label>
        </div>
        <div className="slide-up relative flex flex-col gap-2">
          <textarea
            id="subject"
            rows={1}
            className="px-4 py-4 peer w-full placeholder-transparent focus:outline-none border-b-2 border-gray-medium focus:border-brand"
            placeholder=" "
          ></textarea>
          <label
            htmlFor="subject"
            className="px-2 absolute left-0 -top-4 text-gray-medium text-base transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-white-whisper peer-placeholder-shown:top-1 peer-focus:-top-6 peer-focus:px-0 peer-focus:text-brand"
          >
            Message
          </label>
        </div>
        <div className="slide-up flex gap-8 items-baseline">
          <div className="relative flex flex-col grow gap-2">
            <input
              type="email"
              id="email"
              className="px-4 py-4 peer w-full h-10 placeholder-transparent focus:outline-none border-b-2 border-gray-medium focus:border-brand"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="px-2 absolute left-0 -top-4 text-gray-medium text-base transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-white-whisper peer-placeholder-shown:top-1 peer-focus:-top-6 peer-focus:px-0 peer-focus:text-brand"
            >
              Email
            </label>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-brand hover:cursor-pointer text-gray-jet flex gap-4 items-center text-xl outline-none"
          >
            Send
            <IoIosSend className="text-2xl" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactPage;
