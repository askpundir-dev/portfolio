import NameLogo from "../assets/images/name-logo-white.svg?react";
import LinkedInLogo from "../assets/icons/linkedin.svg?react";
import GitHubLogo from "../assets/icons/github.svg?react";
import EmailLogo from "../assets/icons/email.svg?react";
export default function Footer({ isDarkMode, mailLink }) {
  const year = new Date().getFullYear();
  console.log(year);

  return (
    <footer className="flex flex-col items-center py-5 gap-y-3">
      <a href="/" title="refresh page">
        <NameLogo
          className={`${
            isDarkMode
              ? "hover:text-white text-green-600"
              : "hover:text-green-600 text-black"
          }`}
        />
      </a>

      <ul
        className={`flex items-baseline gap-x-4 px-3 pb-5 ${
          isDarkMode ? "text-white" : "text-gray-700"
        }`}
      >
        <li title="linkedin">
          <a
            href="https://www.linkedin.com/in/abhishek-pundir-366761383/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer noopener"
          >
            {LinkedInLogo && (
              <LinkedInLogo
                className={`rightSectionIcons ${
                  isDarkMode ? "hover:text-pink-700" : "hover:text-black"
                }`}
              />
            )}
          </a>
        </li>
        <li title="github">
          <a
            href="https://github.com/askpundir-dev"
            target="_blank"
            rel="noreferrer noopener"
          >
            {GitHubLogo && (
              <GitHubLogo
                className={`rightSectionIcons ${
                  isDarkMode ? "hover:text-pink-700" : "hover:text-black"
                }`}
              />
            )}
          </a>
        </li>
        <li title="mail">
          <a href={mailLink}>
            {EmailLogo && (
              <EmailLogo
                className={`rightSectionIcons ${
                  isDarkMode ? "hover:text-pink-700" : "hover:text-black"
                }`}
              />
            )}
          </a>
        </li>
      </ul>
      <p className="text-[12px]">Abhishek Pundir &copy; {year}</p>
    </footer>
  );
}
