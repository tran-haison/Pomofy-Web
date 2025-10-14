"use client";
import Image from "next/image";
import { AppStoreButton, GooglePlayButton } from "./StoreButton";

export default function HeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Left Section - Branding and Call to Action */}
      <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left mb-10 lg:mb-0">
        <div className="flex items-center justify-center">
          <Image
            src="/img-logo-icon.svg"
            alt="Pomofy Logo"
            width={60}
            height={60}
            className="w-15 h-15"
          />
        </div>
        <h1 className="text-[60px] font-[800]">Pomofy</h1>
        <div className="flex flex-col items-center lg:items-start text-[20px] font-[400] mb-6 max-w-md">
          <p>Focus, your way.</p>
          <p>Best customizable Pomodoro timer.</p>
        </div>
        <div className="flex flex-row gap-4 items-center w-full justify-center sm:justify-start">
          <AppStoreButton />
          <GooglePlayButton />
        </div>
      </div>

      {/* Center Section - Phone Image */}
      <div className="w-full lg:w-1/3 flex justify-center items-center mb-10 lg:mb-0 px-10 lg:px-4">
        <Image
          src="/img-phone.svg"
          alt="Pomofy App Phone Mockup"
          width={430}
          height={877}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Right Section - Features List */}
      <div className="w-full lg:w-1/3 flex flex-col items-center">
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <Image
              src="/ic-timer.svg"
              alt="Timer Icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-[20px] font-[600]">CUSTOMIZABLE TIMER</span>
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="/ic-lock.svg"
              alt="Focus Lock Icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-[20px] font-[600]">
              BLOCK DISTRACTING APPS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
