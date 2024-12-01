import { TbLoaderQuarter } from "react-icons/tb";

const Loader = () => {
  return (
    <>
      <div className="gap-4 w-full flex items-center justify-center">
        <div className="w-32 h-32  text-green-600 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-green-600 rounded-full">
          <TbLoaderQuarter />
        </div>
      </div>
    </>
  );
};

export default Loader;
