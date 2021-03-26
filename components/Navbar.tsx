import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const activeItemClassName =
  "text-xl font-bold border-b-4 md:text-2xl text-green-400 border-green-400 mr-auto";
const inactiveItemClassName =
  "text-base font-normal md:text-xl mx-2 hover:text-green transition-all duration-300 ease-in-out";

const pathNameByItem = {
  About: "/",
  Resume: "/resume",
  Projects: "/projects",
};

const items = Object.keys(pathNameByItem);

const reorderItems = (items: string[], activeItem: string) => {
  const isInactiveItem = (item: string) => item !== activeItem;
  const inactiveItems = items.filter(isInactiveItem);
  return [activeItem, ...inactiveItems];
};

const preventDefaultOn = (isPrevented: boolean) => (event: React.UIEvent) => {
  if (isPrevented) {
    event.preventDefault();
  }
};

const Navbar = () => {
  const router = useRouter();

  const isActiveItem = (item: string) =>
    pathNameByItem[item] === router.pathname;

  const activeItem = items.find(isActiveItem);

  const [itemsForDisplay, setItemsForDisplay] = useState(() =>
    reorderItems(items, activeItem)
  );

  useEffect(
    () => setItemsForDisplay((items) => reorderItems(items, activeItem)),
    [activeItem]
  );

  const renderItem = (item: string) => {
    const itemClassName = isActiveItem(item)
      ? activeItemClassName
      : inactiveItemClassName;

    return (
      <Link key={item} href={pathNameByItem[item]}>
        <a
          className={itemClassName}
          children={item}
          onClick={preventDefaultOn(isActiveItem(item))}
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
