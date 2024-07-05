import type { CollectionConfig } from "./collections"
import type { GlobalConfig } from "./globals";
import type { NavigationConfig } from "./navigation";

export type Config = {
  github: {
    owner: string;
    repo: string;
    access_token: string;
  },
  navigation: NavigationConfig;
  collections: CollectionConfig[];
  globals: GlobalConfig[];
}
