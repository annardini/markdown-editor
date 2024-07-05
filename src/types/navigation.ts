import type { Component } from "react";

export type NavigationConfig = {
  links: (NavigationLink | NavigationDropdown)[];
  logo?: Component<any>;
}

export type NavigationLink = {
  label: string;
  href: string;
  type: "link",
}

export type NavigationDropdownLink = {
  description?: string;
} & Omit<NavigationLink, "type">;

export type NavigationDropdown = {
  label: string;
  links: NavigationDropdownLink[];
  type: "dropdown",
}
