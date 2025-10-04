import contactImage from "../assets/images/contact-me.svg";
import "./Contact.css";

export default function Contact({ isDarkMode }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      alert("Message sent successfully!");
      e.target.reset();
    } catch (error) {
      alert("Something went wrong, please try again.");
    }
  };

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
            name="contactMe"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="border px-5 py-7 lg:p-9 rounded-[6px] relative z-50"
          >
            <input type="hidden" name="form-name" value="contactMe" />

            <div className="name-input-container mb-5">
              <label
                htmlFor="username-address-icon"
                className="block mb-2 text-sm font-medium cursor-pointer text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <input
                name="name"
                type="text"
                id="username-address-icon"
                required
                className="block w-full ps-10 p-2.5 text-sm text-white bg-[#364153] rounded-lg border-gray-600 placeholder-gray-400"
                placeholder="Enter your name"
              />
            </div>

            <div className="email-input-container mb-5">
              <label
                htmlFor="email-address-icon"
                className="block mb-2 text-sm font-medium cursor-pointer text-gray-900 dark:text-white"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email-address-icon"
                required
                className="block w-full ps-10 p-2.5 text-sm text-white bg-[#364153] rounded-lg border-gray-600 placeholder-gray-400"
                placeholder="example123@gmail.com"
              />
            </div>

            <div className="message-container mb-5">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium cursor-pointer text-gray-900 dark:text-white"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="block p-3 w-full text-sm text-white bg-[#364153] rounded-lg border-gray-600 placeholder-gray-400"
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
