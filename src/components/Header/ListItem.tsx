"use client";

import type { NavigationDropdownLink } from "@/types";
import Link from "next/link";
import React from "react";
import {
  NavigationMenuLink
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  NavigationDropdownLink & { className?: string }
>(({ label, href, description, className }, ref) => {
  return (
    <li>
      <Link
        href={href as string}
        title={label}
        legacyBehavior
        passHref
        ref={ref}
      >
        <NavigationMenuLink className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        )}>
          <div className="text-sm font-medium leading-none">{label}</div>
          {description && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {description}
            </p>
          )}
        </NavigationMenuLink>
      </Link>
    </li>
  );
});

export default ListItem;
