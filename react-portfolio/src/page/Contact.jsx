import contactImage from "../assets/images/contact-me.svg";

import "./Contact.css";

export default function Contact({ isDarkMode }) {
  return (
    <section
      className={`contact-section flex flex-col items-center gap-5 relative ${
        isDarkMode ? "dark" : "light"
      }`}
    >
      <h2 className="lets-connect">Let's Connect</h2>
      <div className="md:flex md:items-center w-full">
        <div className="image-container absolute left-1/2 top-1/2 -translate-1/2 md:translate-0 z-0 md:static md:w-1/2 md:p-5 w-[100%] h-auto">
          <img
            className="max-w-full max-h-full"
            src={contactImage}
            alt="contact"
          />
        </div>
        <div className="form-container px-4 py-3 md:px-10 md:py-4 md:w-1/2">
          <form
            method="POST"
            name="contactMe"
            data-netlify="true"
            className="border px-5 py-7 lg:p-9 rounded-[6px] relative z-50"
          >
            <input type="hidden" name="form-name" value="contactMe" />

            <div className="name-input-container mb-5">
              <label
                for="username-address-icon"
                className="block mb-2 text-sm font-medium
              cursor-pointer text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-4 h-4 text-gray-400"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <input
                  name="name"
                  type="text"
                  id="username-address-icon"
                  className="block w-full ps-10 p-2.5 text-sm  text-white bg-[#364153] rounded-lg  border-gray-600 placeholder-gray-400"
                  placeholder="enter your name"
                />
              </div>
            </div>
            <div className="email-input-container mb-5">
              <label
                for="email-address-icon"
                className="block mb-2 text-sm font-medium
              cursor-pointer text-gray-900 dark:text-white"
              >
                Your Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email-address-icon"
                  className="block w-full ps-10 p-2.5 text-sm  text-white bg-[#364153] rounded-lg  border-gray-600 placeholder-gray-400"
                  placeholder="example123@gmail.com"
                />
              </div>
            </div>

            <div className="message-container mb-5">
              <label
                for="message"
                className="block mb-2 text-sm font-medium
              cursor-pointer text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="block p-3 w-full text-sm  text-white bg-[#364153] rounded-lg  border-gray-600 placeholder-gray-400"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className="button-container mt-7 mb-0 h-10">
              <button
                type="submit"
                className="border w-full rounded-[6px] bg-[#00b6d1] text-white font-bold h-full hover:opacity-80"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
