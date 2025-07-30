"use client";

export default function Footer() {
  return (
    <footer className="w-full py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo and Brand - Center on mobile, center on desktop */}
        <div className="flex items-center space-x-2 order-1 md:order-2">
          <span className="text-black font-[700] text-[16px]">Pomofy</span>
        </div>

        {/* Copyright - Bottom on mobile, left on desktop */}
        <div className="text-gray-700 text-[14px] font-[400] order-2 md:order-1">
          © 2025 Pomofy. All rights reserved.
        </div>

        {/* Links - Bottom on mobile, right on desktop */}
        <div className="flex items-center space-x-4 text-[14px] font-[400] text-gray-700 transition-colors order-3">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms-conditions" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
