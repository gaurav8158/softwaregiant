import { useState } from "react";
import Link from "next/link";
import List from "./List";
import Image from "next/image";
import Mainlogo from "../../../Public/Homepage/mainlogo.png";
import { MobileDrawer } from "./MobileDrawer";
const Page = () => {
  return (
    <header className="bg-[#1F1F1F] text-[#FFFFFF] ">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="text-lg ml-4 md:ml-0 font-bold">
          <Link href="/">
            <Image src={Mainlogo} alt="main_logo" width={50} height={50} />
          </Link>
        </div>
        <List />
        <div>
          <MobileDrawer />
        </div>
      </nav>
    </header>
  );
};

export default Page;
