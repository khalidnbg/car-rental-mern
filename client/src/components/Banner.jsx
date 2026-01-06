import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-start items-center justify-between px-8 md:pl-14 pt-10 bg-linear-to-r from-[#0558fe] to-[#A9CFFF] mx-3 max-w-6xl md:mx-auto rounded-2xl overflow-hidden">
      <div className="text-white">
        <h2 className="text-3xl font-medium">Do You Own a Luxury Car ?</h2>
        <p className="mt-2">
          Join our exclusive club and rent luxury cars at affordable rates.
        </p>
        <p className="max-w-130">
          We take care of insurance, driver verification and secure payments -
          so you can earn passive income, stress-free
        </p>

        <button className="px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary rounded-lg text-sm mt-4 cursor-pointer">
          List Your Car
        </button>
      </div>

      <img src={assets.banner_car_image} alt="car" />
    </div>
  );
};

export default Banner;
