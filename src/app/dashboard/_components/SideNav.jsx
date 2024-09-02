"use client"
import { FileClock, Home, Settings } from "lucide-react";
import Image from "next/image";
import logo from "../../../../public/logo.svg"
import { usePathname } from "next/navigation";

const Sidenav = () => {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];
  const path = usePathname();
  return (
    <div className="h-screen p-5 shadow-sm border bg-white">
      <div className="flex justify-center">
        <Image src={logo} alt="logo" loading="lazy" width={120} height={100} />
      </div>
      <hr className="my-6 border" />
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <div
            key={index}
            className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer ${
              path == menu.path && "bg-primary text-white"
            }`}
          >
            <menu.icon className="w-6 h-6" />
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidenav;
