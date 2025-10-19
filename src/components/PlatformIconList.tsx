import { type IconType } from "react-icons";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone, MdGamepad } from "react-icons/md";
import { SiAtari, SiCommodore, SiSega } from "react-icons/si";
import { BsNintendoSwitch, BsGlobe } from "react-icons/bs";

import { type Platform } from "@/types";

type PlatformIconListProps = {
  platforms: Platform[];
};

export default function PlatformIconList({ platforms }: PlatformIconListProps) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    nintendo: BsNintendoSwitch,
    atari: SiAtari,
    "commodore-amiga": SiCommodore,
    sega: SiSega,
    "3do": MdGamepad,
    "neo-geo": MdGamepad,
    web: BsGlobe,
  };

  return (
    <ul className="flex flex-wrap gap-4">
      {platforms.map((platform) => {
        const Icon = iconMap[platform.slug];
        return Icon ? (
          <Icon key={platform.id} size={18} className="text-gray-500" />
        ) : null;
      })}
    </ul>
  );
}
