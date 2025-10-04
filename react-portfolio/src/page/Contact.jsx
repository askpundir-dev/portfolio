import contactImage from "../assets/images/contact-me.svg";
import "./Contact.css";

export default function Contact({ isDarkMode }) {
  // 🔹 Handles form submission for Netlify
  // This prevents page reload, collects form data, and sends it to Netlify using fetch().
  const handleSubmit = async (e) => {
    e.preventDefault(); // Stop default form submission behavior

    const formData = new FormData(e.target); // Collect all form field values

    try {
      // 🔹 Send data to Netlify using encoded body
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(), // Convert FormData into encoded string
      });

      alert("Message sent successfully!"); // Show success alert
      e.target.reset(); // Clear form fields
    } catch (error) {
      alert("Something went wrong, please try again.", error); // Handle any error
    }
  };

  return (
    <section
      className={`contact-section flex flex-col items-center gap-5 relative ${
        isDarkMode ? "dark" : "light"
      }`}
    >
      <h2 className="lets-connect">Let's Connect</h2>

      {/* 🔹 Hidden Netlify Form
          This is only for Netlify bots to detect your form fields at build time.
          It doesn’t show on the page but ensures Netlify knows your field names. */}
      <form name="contactMe" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

      <div className="md:flex md:items-center w-full">
        {/* 🔹 Left-side Image Section */}
        <div className="image-container absolute left-1/2 top-1/2 -translate-1/2 md:translate-0 z-0 md:static md:w-1/2 md:p-5 w-[100%] h-auto">
          <img
            className="max-w-full max-h-full"
            src={contactImage}
            alt="contact"
          />
        </div>

        {/* 🔹 Right-side Form Section */}
        <div className="form-container px-4 py-3 md:px-10 md:py-4 md:w-1/2">
          <form
            name="contactMe"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="border px-5 py-7 lg:p-9 rounded-[6px] relative z-50"
          >
            {/* Required by Netlify — identifies which form this is */}
            <input type="hidden" name="form-name" value="contactMe" />

            {/* ======================= */}
            {/* Name Input Field */}
            {/* ======================= */}
            <div className="relative name-input-container mb-5">
              <label
                htmlFor="username-address-icon"
                className="block mb-2 text-sm font-medium cursor-pointer text-gray-900 dark:text-white"
              >
                Your Name
              </label>

              <div className="relative">
                {/* SVG icon inside the input */}
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 18a8 8 0 1 1 12 0H4Z"
                    />
                  </svg>
                </div>

                <input
                  name="name"
                  type="text"
                  id="username-address-icon"
                  required
                  className="block w-full ps-10 p-2.5 text-sm text-white bg-[#364153] rounded-lg border-gray-600 placeholder-gray-400"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            {/* ======================= */}
            {/* Email Input Field */}
            {/* ======================= */}
            <div className="relative email-input-container mb-5">
              <label
                htmlFor="email-address-icon"
                className="block mb-2 text-sm font-medium cursor-pointer text-gray-900 dark:text-white"
              >
                Your Email
              </label>

              <div className="relative">
                {/* SVG icon inside the input */}
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 4.27V12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4.27l-8 5.33L1 4.27ZM1 4l9 6 9-6"
                    />
                  </svg>
                </div>

                <input
                  type="email"
                  name="email"
                  id="email-address-icon"
                  required
                  className="block w-full ps-10 p-2.5 text-sm text-white bg-[#364153] rounded-lg border-gray-600 placeholder-gray-400"
                  placeholder="example123@gmail.com"
                />
              </div>
            </div>

            {/* ======================= */}
            {/* Message Textarea Field */}
            {/* ======================= */}
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

            {/* ======================= */}
            {/* Submit Button */}
            {/* ======================= */}
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
