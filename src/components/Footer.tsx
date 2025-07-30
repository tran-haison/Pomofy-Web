"use client";

export default function Footer() {
  return (
    <footer className="w-full py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="text-gray-700 text-[14px] font-[400]">
          © 2025 Pomofy. All rights reserved.
        </div>

        <div className="flex items-center space-x-4 text-[14px] font-[400] text-gray-700 transition-colors">
          <a href="/support" className="hover:underline">
            Support
          </a>
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
