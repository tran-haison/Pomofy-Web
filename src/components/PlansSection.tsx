"use client";
import Image from "next/image";
import { AppStoreButton, GooglePlayButton } from "./StoreButton";

export default function PlansSection() {
  return (
    <section className="pomofy-plans w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-[40px] font-[700]">Plans</h2>
        <p className="text-[16px] font-[400]">
          Choose the perfect plan for your productivity journey. Start free or
          unlock unlimited lifetime customization with Pro.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-10">
        {/* Basic Plan */}
        <div className="bg-white/20 rounded-[30px] shadow-lg p-8 flex flex-col items-start">
          <div className="w-14 h-14 bg-white/50 rounded-[20px] flex items-center justify-center mb-6">
            <Image
              src="/ic-stack.svg"
              alt="Stack Icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>

          <div className="w-full flex flex-row justify-between items-center mb-6">
            <div>
              <h3 className="text-[24px] font-[700]">Basic</h3>
              <p className="text-[14px] font-[400] ">Basic Pomodoro timer</p>
            </div>
            <span className="text-[20px] font-[600]">FREE</span>
          </div>

          <ul className="space-y-5">
            <li className="flex items-center">
              <Image
                src="/ic-check-black.svg"
                alt="Check"
                width={28}
                height={28}
                className="w-7 h-7 mr-3"
              />
              <span className="text-gray-700">Basic timer functionality</span>
            </li>
            <li className="flex items-center">
              <Image
                src="/ic-check-black.svg"
                alt="Check"
                width={28}
                height={28}
                className="w-7 h-7 mr-3"
              />
              <span className="text-gray-700">
                Limited font selection (10 fonts)
              </span>
            </li>
            <li className="flex items-center">
              <Image
                src="/ic-check-black.svg"
                alt="Check"
                width={28}
                height={28}
                className="w-7 h-7 mr-3"
              />
              <span className="text-gray-700">
                Limited background gradients (4 options)
              </span>
            </li>
            <li className="flex items-center">
              <Image
                src="/ic-check-black.svg"
                alt="Check"
                width={28}
                height={28}
                className="w-7 h-7 mr-3"
              />
              <span className="text-gray-700">No custom background images</span>
            </li>
            <li className="flex items-center">
              <Image
                src="/ic-check-black.svg"
                alt="Check"
                width={28}
                height={28}
                className="w-7 h-7 mr-3"
              />
              <span className="text-gray-700">Ad-supported</span>
            </li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="bg-white/20 rounded-[30px] shadow-lg p-8 flex flex-col items-start">
          <div className="w-14 h-14 bg-gradient-to-b from-yellow to-pink rounded-[20px] flex items-center justify-center mb-6">
            <Image
              src="/ic-crown.svg"
              alt="Crown Icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>

          <div className="w-full flex flex-row justify-between items-center mb-6">
            <div>
              <h3 className="text-[24px] font-[700]">Pro (lifetime)</h3>
              <p className="text-[14px] font-[400]">
                Unlimited access to all features
              </p>
            </div>
            <span className="text-[20px] font-[600]">$9.99/∞</span>
          </div>

          <ul className="space-y-5">
            <li className="flex items-center">
              <Image
                src="/ic-check-pink.svg"
                alt="Check"
                width={28}
                height={28}
                className="w-7 h-7 mr-3"
              />
              <span className="text-gray-700">All timer features</span>
            </li>
            <li className="flex items-center">
              <Image
                src="/ic-check-pink.svg"
                alt="Check"
                width={28}
                height={28}
                className="w-7 h-7 mr-3"
              />
              <span className="text-gray-700">1,500+ fonts selection</span>
            </li>
            <li className="flex items-center">
              <Image
                src="/ic-check-pink.svg"
                alt="Check"
                width={28}
                height={28}
                className="w-7 h-7 mr-3"
              />
              <span className="text-gray-700">
                All background gradient options
              </span>
            </li>
            <li className="flex items-center">
              <Image
                src="/ic-check-pink.svg"
                alt="Check"
                width={28}
                height={28}
                className="w-7 h-7 mr-3"
              />
              <span className="text-gray-700">Custom background images</span>
            </li>
            <li className="flex items-center">
              <Image
                src="/ic-check-pink.svg"
                alt="Check"
                width={28}
                height={28}
                className="w-7 h-7 mr-3"
              />
              <span className="text-gray-700">Ad-free</span>
            </li>
            <li className="flex items-center">
              <Image
                src="/ic-check-pink.svg"
                alt="Check"
                width={28}
                height={28}
                className="w-7 h-7 mr-3"
              />
              <span className="text-gray-700">New features included</span>
            </li>
            <li className="flex items-center">
              <Image
                src="/ic-check-pink.svg"
                alt="Check"
                width={28}
                height={28}
                className="w-7 h-7 mr-3"
              />
              <span className="text-gray-700">Priority support</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Download Buttons */}
      <div className="flex flex-row gap-4 justify-center items-center">
        <AppStoreButton />
        <GooglePlayButton />
      </div>
    </section>
  );
}
