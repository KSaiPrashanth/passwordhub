import { FaDiscord, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="text-white p-8 bottom-0 border-[0.5px] border-green-900 rounded-s-md bg-gray-950">
        <div className="text-center">
          <div className="logo text-3xl font-extrabold mb-5">
            Password<span className="text-green-500">Hub</span>
          </div>

          <span className="block text-sm text-center text-gray-500">
            &copy; 2024 PasswordHub™. All Rights Reserved. Built with{" "}
            <a
              href="https://react.dev"
              className="text-purple-600 hover:underline"
            >
              React
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com"
              className="text-purple-600 hover:underline"
            >
              Tailwind CSS
            </a>
            .
          </span>

          <ul
            className="flex justify-center mt-5 space-x-5"
            id="contact"
          >
            <li>
              <a
                href="/"
                className="text-gray-500 hover:text-sky-400"
              >
                <FaFacebook size={20} />
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-500 hover:text-rose-400"
              >
                <FaInstagram size={20} />
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-500 hover:text-gray-400"
              >
                <FaXTwitter size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ksaiprashanth/passwordhub"
                className="text-gray-500 hover:text-gray-400"
                target="_blank"
              >
                <FaGithub size={20} />
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-500 hover:text-purple-400"
              >
                <FaDiscord size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
