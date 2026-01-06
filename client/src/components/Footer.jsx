import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-32 mt-60 text-sm text-gray-500">
      <div className="flex flex-wrap items-start justify-between gap-8 pb-6 border-b border-borderColor">
        <div className="">
          <img src={assets.logo} alt="logo" className="h-8 md:h-9" />
          <p className="max-w-80 mt-3">
            RentEase is your trusted car rental service, offering a wide range
            of vehicles to suit your needs. Experience convenience, reliability,
            and exceptional customer service with us.
          </p>

          <div className="flex items-center gap-3 mt-6">
            {/* Instagram */}
            <a href="#">
              <img
                src={assets.instagram_logo}
                alt="Instagram"
                className="h-5 w-5"
              />
            </a>
            {/* Facebook */}
            <a href="#">
              <img
                src={assets.facebook_logo}
                alt="Facebook"
                className="h-5 w-5"
              />
            </a>
            {/* Twitter */}
            <a href="#">
              <img
                src={assets.twitter_logo}
                alt="Twitter"
                className="h-5 w-5"
              />
            </a>
            {/* Gmail */}
            <a href="#">
              <img src={assets.gmail_logo} alt="Gmail" className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-base font-medium text-gray-800 uppercase">
            Quick Links
          </p>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Brows cars</a>
            </li>
            <li>
              <a href="#">List your car</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-base font-medium text-gray-800 uppercase">
            Resources
          </p>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Terms Of Services</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Insurance</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-base font-medium text-gray-800 uppercase">
            Contact
          </p>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm">
            <li>123, Main Street, Cityville, Country</li>
            <li>San Francisco, CA 94102</li>
            <li>+1 (555) 123-4567</li>
            <li>info@example.com</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>
          © {new Date().getFullYear()}{" "}
          <a href="https://prebuiltui.com">PrebuiltUI</a>. All rights reserved.
        </p>
        <ul className="flex items-center gap-3">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li> | </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li> | </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
