"use client";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="pomofy-features w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-[40px] font-[700]">Features</h2>
        <p className="text-[16px] font-[400]">
          Pomofy - the most customizable Pomodoro timer for your productivity
          needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 md:px-0">
        {/* Card 1: 1,500+ Fonts */}
        <div className="bg-white/20 rounded-[30px] shadow-lg p-6">
          <div className="bg-white/50 rounded-[20px] flex items-center justify-center mb-10 w-14 h-14">
            <Image
              src="/ic-font.svg"
              alt="Fonts Icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
          <h3 className="font-[600] text-[20px] mb-2">Text Customization</h3>
          <p className="text-[14px] font-[400]">
            Select over 1,500 fonts for your timer text, with different colors and sizes
          </p>
        </div>

        {/* Card 2: Custom Background */}
        <div className="bg-white/20 rounded-[30px] shadow-lg p-6">
          <div className="bg-white/50 rounded-[20px] flex items-center justify-center mb-10 w-14 h-14">
            <Image
              src="/ic-background.svg"
              alt="Background Icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
          <h3 className="font-[600] text-[20px] mb-2">Background Customization</h3>
          <p className="text-[14px] font-[400]">
            Personalize your background with colors, gradients and images
          </p>
        </div>

        {/* Card 3: Focus Lock */}
        <div className="bg-white/20 rounded-[30px] shadow-lg p-6">
          <div className="bg-white/50 rounded-[20px] flex items-center justify-center mb-10 w-14 h-14">
            <Image
              src="/ic-lock.svg"
              alt="Focus Lock Icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
          <h3 className="font-[600] text-[20px] mb-2">Focus Lock</h3>
          <p className="text-[14px] font-[400]">
            Block apps during your focus sessions, minimizing distractions
          </p>
        </div>
      </div>
    </section>
  );
}
