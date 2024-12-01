import { useState } from "react";
import { FcAbout, FcContacts } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdPassword } from "react-icons/md";

const Navbar = () => {
  // State to control mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // Function to close the mobile menu when a link is clicked
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-green-800 flex justify-between items-center px-8 h-12 top-0 fixed z-10 w-full">
        {/* Logo */}
        <div className="logo text-2xl font-extrabold">
          Password<span className="text-green-500">Hub</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-between gap-1 font-semibold">
          <li>
            <a
              href="#passwords"
              className="border-4 border-transparent p-2 py-1 rounded-md hover:border-green-400 shadow-sm hover:shadow-green-400"
            >
              My Passwords
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="border-4 border-transparent p-2 py-1 rounded-md hover:border-green-400 shadow-sm hover:shadow-green-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="border-4 border-transparent p-2 py-1 rounded-md hover:border-green-400 shadow-sm hover:shadow-green-400"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <GiHamburgerMenu
            size={24}
            className="text-white cursor-pointer"
            onClick={toggleMenu} // Toggle mobile menu visibility
          />
        </div>
      </nav>

      {/* Mobile Menu - Ensure it is displayed above content */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } fixed top-12 left-0 right-0 bg-green-950 text-white py-4 z-50`}
      >
        <ul className="flex flex-col gap-4 px-8">
          <li>
            <a
              href="#passwords"
              className="flex items-center gap-2 p-2 hover:bg-green-700 rounded-md"
              onClick={closeMenu} // Close menu when link is clicked
            >
              <MdPassword
                size={24}
                className="text-green-400"
              />
              My Passwords
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="flex items-center gap-2 p-2 hover:bg-green-700 rounded-md"
              onClick={closeMenu} // Close menu when link is clicked
            >
              <FcAbout size={24} />
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="flex items-center gap-2 p-2 hover:bg-green-700 rounded-md"
              onClick={closeMenu} // Close menu when link is clicked
            >
              <FcContacts size={24} />
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
