import { MdCode, MdInfo, MdLock, MdSecurity } from "react-icons/md";

const About = () => {
  return (
    <>
      <div
        className="border-y-2 border-gray-400"
        id="about"
      >
        <section>
          <div className="py-16 bg-gray-950 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="font-heading mb-4 bg-green-200 text-green-800 px-4 py-2 rounded-lg md:w-fit md:mx-auto text-xl font-bold tracking-widest uppercase title-font text-center">
                  Why Choose Our Password Manager?
                </h2>
                <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-200 sm:text-4xl text-center">
                  Secure. Reliable. Easy-to-Use.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray-400 lg:mx-auto text-center">
                  Our password manager is designed to keep your sensitive data
                  safe, organized, and easily accessible. With top-notch
                  security features and a user-friendly interface, managing your
                  passwords has never been easier.
                </p>
              </div>

              <div className="mt-10">
                <div className="grid grid-cols-4 gap-8 p-8 md:p-16">
                  <div className="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-gray-300 rounded-xl text-gray-300">
                    <span className="absolute -top-6 p-3 border-2 border-gray-300 rounded-full bg-gray-800 text-gray-400">
                      <MdLock size={25} />
                    </span>
                    <h2 className="my-1 gradient-red text-center uppercase tracking-wide text-gray-400">
                      Advanced Security
                    </h2>
                    <p className="py-2 text-center text-sm">
                      Your data is protected using industry-standard encryption
                      and other robust security measures to ensure
                      confidentiality and safety.
                    </p>
                  </div>

                  <div className="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-gray-300 rounded-xl text-gray-300">
                    <span className="absolute -top-6 p-3 border-2 border-gray-300 rounded-full bg-gray-800 text-gray-400">
                      <MdSecurity size={25} />
                    </span>
                    <h2 className="my-1 gradient-red text-center uppercase tracking-wide text-gray-400">
                      Secure & Private
                    </h2>
                    <p className="py-2 text-center text-sm">
                      We value your privacy. Your data is stored locally and
                      never shared with third parties, ensuring full
                      confidentiality.
                    </p>
                  </div>

                  <div className="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-gray-300 rounded-xl text-gray-300">
                    <span className="absolute -top-6 p-3 border-2 border-gray-300 rounded-full bg-gray-800 text-gray-400">
                      <MdInfo size={25} />
                    </span>
                    <h2 className="my-1 gradient-red text-center uppercase tracking-wide text-gray-400">
                      Easy-to-Use Interface
                    </h2>
                    <p className="py-2 text-center text-sm">
                      Manage your passwords, secure notes, and other sensitive
                      data easily with our clean, intuitive interface.
                    </p>
                  </div>

                  <div className="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-gray-300 rounded-xl text-gray-300">
                    <span className="absolute -top-6 p-3 border-2 border-gray-300 rounded-full bg-gray-800 text-gray-400">
                      <MdCode size={25} />
                    </span>
                    <h2 className="my-1 gradient-red text-center uppercase tracking-wide text-gray-400">
                      Cross-Platform Support
                    </h2>
                    <p className="py-2 text-center text-sm">
                      Access your passwords from any device—whether you&lsquo;re
                      on a mobile, tablet, or desktop—our app works seamlessly
                      across platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
