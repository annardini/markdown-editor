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
import type { NavigationConfig } from "@/types";
import ListItem from "./ListItem";
import { cn } from "@/lib/utils";

const MobileNav: React.FC<{ navigation: NavigationConfig }> = ({
  navigation,
}) => {
  return (
    <NavigationMenu className="max-w-none w-full block">
      <NavigationMenuList className="w-full gap-4 flex-col justify-start items-start">
        {navigation?.links?.map((link, i) => {
          if (link?.type === "link")
            return (
              <NavigationMenuItem className="block w-full" key={i}>
                <Link
                  href={link?.href}
                  title={link?.label}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "w-full justify-start"
                    )}
                  >
                    {link?.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );

          if (link?.type === "dropdown" && link?.links?.length) {
            return (
              <NavigationMenuItem className="block w-full" key={i}>
                <NavigationMenuTrigger className="w-full justify-between">
                  {link?.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-full gap-3 p-4 md:grid-cols-2">
                    {link?.links?.map((sublink, j) => (
                      <ListItem
                        {...sublink}
                        className="w-full justify-start"
                        key={j}
                      />
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

export default MobileNav;
