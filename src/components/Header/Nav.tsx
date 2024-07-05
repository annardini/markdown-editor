"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { NavigationConfig } from "@/types";
import ListItem from "./ListItem";

const Nav: React.FC<{ navigation: NavigationConfig }> = ({ navigation }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigation?.links?.map((link, i) => {
          if (link?.type === "link")
            return (
              <NavigationMenuItem key={i}>
                <Link
                  href={link?.href}
                  title={link?.label}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {link?.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );

          if (link?.type === "dropdown" && link?.links?.length) {
            return (
              <NavigationMenuItem key={i}>
                <NavigationMenuTrigger>{link?.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {link?.links?.map((sublink, j) => (
                      <ListItem {...sublink} key={j} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          return null;
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Nav;
