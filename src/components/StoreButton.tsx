"use client";
import Image from "next/image";
import React from "react";

type StoreButtonProps = {
  href: string;
  icon: string;
  alt: string;
  label: string;
  sublabel: string;
};

export default function StoreButton({
  href,
  icon,
  alt,
  label,
  sublabel,
}: StoreButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-row items-center justify-center gap-2 bg-black text-white rounded-full px-4 lg:px-7 py-2 hover:bg-black/90 transition-colors w-full lg:w-auto"
      style={{ textDecoration: "none" }}
    >
      <Image src={icon} alt={alt} width={24} height={24} className="w-6 h-6" />
      <div className="flex flex-col items-start">
        <span className="text-[10px] font-[400] text-start h-3">{sublabel}</span>
        <span className="text-[14px] font-[700] text-start h-5">{label}</span>
      </div>
    </a>
  );
}

export const AppStoreButton = () => (
  <StoreButton
    href="https://apps.apple.com/app/id6748651874"
    icon="/ic-apple.svg"
    alt="App Store"
    sublabel="DOWNLOAD ON THE"
    label="App Store"
  />
);

export const GooglePlayButton = () => (
  <StoreButton
    href="https://play.google.com/store/apps/details?id=com.nosiah.studio.pomofy"
    icon="/ic-google.svg"
    alt="Google Play"
    sublabel="GET IT ON"
    label="Google Play"
  />
);
