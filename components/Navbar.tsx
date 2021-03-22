import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const pathNameByItem = {
  About: "/",
  Resume: "/resume",
  Projects: "/projects",
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("About");
  const { pathname } = useRouter();
  const inactiveItems = Object.keys(pathNameByItem).filter(
    (item) => item !== activeItem
  );
  const itemsForDisplay = [activeItem].concat(inactiveItems);

  useEffect(() => {
    setActiveItem(
      Object.keys(pathNameByItem).find(
        (item) => pathNameByItem[item] === pathname
      )
    );
    console.log("useEffect");
  }, []);

  const renderItem = (item: string) => {
    const activeItemClassList =
      item === activeItem
        ? "text-xl font-bold border-b-4 md:text-2xl text-green-400 border-green-400 mr-auto "
        : "text-base font-normal md:text-xl mx-2 hover:text-green transition-all duration-300 ease-in-out";

    return (
      <Link key={item} href={pathNameByItem[item] || "/"}>
        <a
          className={activeItemClassList}
          children={item}
          onClick={() => setActiveItem(item)}
        />
      </Link>
    );
  };

  return (
    <div className="flex items-center justify-end px-5 py-3 my-3">
      {itemsForDisplay.map(renderItem)}
    </div>
  );
};

export default Navbar;
