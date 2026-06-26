import Image from "next/image";

export default function Logo({ className = "" }) {
  return (
    <Image
      src="/assets/logo.png"
      width={1090}
      height={506}
      alt="PUTOPUTO 噗通噗通"
      priority
      className={`h-auto w-[180px] object-contain ${className}`}
    />
  );
}
