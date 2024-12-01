import { useEffect, useRef, useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { FaClipboardCheck, FaRegClipboard } from "react-icons/fa";
import { MdAddModerator, MdDeleteForever } from "react-icons/md";
import { TbUserEdit } from "react-icons/tb";
import { VscClearAll } from "react-icons/vsc";
import { v4 as uuidv4 } from "uuid";
import Loader from "./Loader";

const Manager = () => {
  const [form, setForm] = useState({ url: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const [copiedText, setCopiedText] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState({}); // Object to track visibility for each password
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  // Handle changes in form inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrorMessage("");
  };

  // Load passwords from localStorage on component mount
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  // Save password to localStorage
  const savePassword = () => {
    if (!form.url || !form.username || !form.password) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    // Ensure URL starts with https:// if not provided
    let url = form.url.trim();

    // Remove any trailing slashes from the URL
    url = url.replace(/\/$/, "");

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url; // Prepend https:// if missing
    }

    // Add the new password entry to the array and update localStorage
    const updatedPasswordArray = [
      ...passwordArray,
      { ...form, url, id: uuidv4() },
    ];
    setPasswordArray(updatedPasswordArray);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswordArray));

    // Reset the form fields after saving
    setForm({ url: "", username: "", password: "" });
  };

  // Function to format URL for display by removing both 'https://' and 'www.'
  const formatUrlForDisplay = (url) => {
    // Remove 'https://' or 'http://' and 'www.'
    return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  };

  // Toggle password visibility
  const handleTogglePassword = (id) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle visibility for the specific password ID
    }));
  };

  const deletePassword = (id, url) => {
    let delConfirm = confirm(
      `Are you sure to delete credentials for Website: ${url}?`
    );
    if (delConfirm) {
      const updatedPasswordArray = passwordArray.filter(
        (item) => item.id !== id
      );
      setPasswordArray(updatedPasswordArray);
      localStorage.setItem("passwords", JSON.stringify(updatedPasswordArray));
    }
  };

  const editPassword = (id) => {
    const updatedPasswordArray = passwordArray.filter((item) => item.id !== id);
    setForm(passwordArray.find((item) => item.id === id));
    setPasswordArray(updatedPasswordArray);
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const copyText = (text, id) => {
    navigator.clipboard.writeText(text); // Copy the text to clipboard
    setCopiedText({ text, id }); // Store both the text and the id
    setTimeout(() => {
      setCopiedText(null); // Reset after 2 seconds
    }, 2000);
  };

  const clearPasswords = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to clear all passwords?"
    );
    if (isConfirmed) {
      localStorage.removeItem("passwords");
      setPasswordArray([]);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Simulate loading
    }, 2000);
  }, []);

  return (
    <>
      <div className="absolute z-[-2] h-[150vh] w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <div
        ref={formRef}
        id="passwords"
        className="mx-auto max-w-4xl text-center pt-16 min-h-screen"
      >
        <h1 className="text-4xl font-extrabold my-4">
          Password<span className="text-green-500">Hub</span>
        </h1>
        <p className="text-green-400">
          Simplify Security, Strengthen Your Peace of Mind.
        </p>

        <div className="flex flex-col p-4 gap-8 items-center my-4">
          <input
            placeholder="Enter Website URL"
            className="rounded-lg border-2 border-green-500 w-full text-black p-4 py-1 hover:border-green-300 outline-green-500"
            type="text"
            value={form.url}
            onChange={handleChange}
            name="url"
            id="url"
            required
            autoFocus
            autoComplete="off"
          />
          <div className="flex flex-col md:flex-row w-full justify-between gap-8">
            <div className="w-full md:w-1/2 py-1.5">
              <input
                placeholder="Enter Username"
                className="rounded-lg border-2 border-green-500 text-black p-4 py-1 w-full hover:border-green-300 outline-green-500"
                type="text"
                value={form.username}
                onChange={handleChange}
                name="username"
                id="username"
                required
                autoComplete="off"
              />
            </div>
            <div className="relative w-full md:w-1/2 py-1.5">
              <input
                placeholder="Enter Password"
                className="rounded-lg border-2 border-green-500 w-full text-black p-4 py-1 hover:border-green-300 outline-green-600"
                type={passwordVisibility[form.url] ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                name="password"
                id="password"
                required
                autoComplete="off"
              />
              <span
                className="text-green-950 absolute right-0 cursor-pointer py-1.5 mx-1.5"
                onClick={() => handleTogglePassword(form.url)} // Toggle visibility for the specific password
              >
                {passwordVisibility[form.url] ? (
                  <BiSolidHide size={25} />
                ) : (
                  <BiSolidShow size={25} />
                )}
              </span>
            </div>
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

          <button
            className="flex justify-center items-center align-middle bg-green-800 p-4 py-1.5 rounded-full w-fit gap-2 border-4 border-green-900 hover:bg-green-950 hover:text-gray-00 hover:border-green-400"
            onClick={savePassword}
          >
            <MdAddModerator size={20} />
            Add Password
          </button>
        </div>

        <div className="passwords">
          <h2 className="m-4 text-green-500 font-semibold text-2xl border-b-2 p-2 border-green-500">
            Your Passwords
          </h2>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {passwordArray.length === 0 && (
                <div className="text-sm py-4">Add Passwords to Show.</div>
              )}
              {passwordArray.length !== 0 && (
                <div className="overflow-x-auto">
                  <table className="table-auto w-full text-green-500 p-2 rounded-sm overflow-hidden">
                    <thead>
                      <tr className="bg-green-800 text-white border-2 border-green-700">
                        <th className="py-2 px-4">URL</th>
                        <th className="py-2 px-4">Username</th>
                        <th className="py-2 px-4">Password</th>
                        <th className="py-2 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {passwordArray.map((item) => {
                        return (
                          <tr
                            className="border-2 border-green-700"
                            key={item.id}
                          >
                            <td className="py-2 px-4">
                              <div className="flex flex-row justify-center items-center gap-1">
                                <a
                                  href={item.url}
                                  className="hover:text-green-400"
                                  target="_blank"
                                >
                                  {formatUrlForDisplay(item.url)}
                                </a>
                                <span
                                  onClick={() => copyText(item.url, item.id)}
                                  className="cursor-pointer hover:text-green-400"
                                >
                                  {copiedText?.id === item.id &&
                                  copiedText.text === item.url ? (
                                    <FaClipboardCheck size={20} />
                                  ) : (
                                    <FaRegClipboard size={20} />
                                  )}
                                </span>
                              </div>
                            </td>

                            <td className="py-2 border-2 border-green-700">
                              <div className="flex flex-row justify-center items-center gap-1">
                                {item.username}
                                <span
                                  onClick={() =>
                                    copyText(item.username, item.id)
                                  } // Pass id along with the text
                                  className="cursor-pointer hover:text-green-400"
                                >
                                  {copiedText?.id === item.id &&
                                  copiedText.text === item.username ? (
                                    <FaClipboardCheck size={20} />
                                  ) : (
                                    <FaRegClipboard size={20} />
                                  )}
                                </span>
                              </div>
                            </td>

                            <td className="py-2 border-2 border-green-700">
                              <div className="flex flex-row justify-center items-center gap-1">
                                {passwordVisibility[item.id]
                                  ? item.password
                                  : "*****"}{" "}
                                {/* Show password if visible */}
                                <span
                                  onClick={() => handleTogglePassword(item.id)} // Toggle visibility for the specific password
                                  className="cursor-pointer hover:text-green-400"
                                >
                                  {passwordVisibility[item.id] ? (
                                    <BiSolidHide size={20} />
                                  ) : (
                                    <BiSolidShow size={20} />
                                  )}
                                </span>
                                <span
                                  onClick={() =>
                                    copyText(item.password, item.id)
                                  }
                                  className="cursor-pointer hover:text-green-400"
                                >
                                  {copiedText?.id === item.id &&
                                  copiedText.text === item.password ? (
                                    <FaClipboardCheck size={20} />
                                  ) : (
                                    <FaRegClipboard size={20} />
                                  )}
                                </span>
                              </div>
                            </td>

                            <td className="py-2">
                              <div className="flex flex-row items-center justify-evenly ">
                                <span
                                  className="cursor-pointer text-sky-500 hover:text-sky-600"
                                  onClick={() => editPassword(item.id)}
                                >
                                  <TbUserEdit size={24} />
                                </span>
                                <span
                                  className="cursor-pointer text-red-600 hover:text-red-700"
                                  onClick={() =>
                                    deletePassword(item.id, item.url)
                                  }
                                >
                                  <MdDeleteForever size={24} />
                                </span>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>

                  <div className="m-4 flex justify-center items-center">
                    <button
                      onClick={clearPasswords}
                      className="flex justify-center items-center bg-red-800 p-4 py-1.5 rounded-full gap-2 border-4 border-red-900 hover:bg-red-950 hover:border-red-400"
                    >
                      <VscClearAll size={24} />
                      Clear All Passwords
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
