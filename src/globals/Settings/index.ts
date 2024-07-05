import type { GlobalConfig } from "@/types";

const Settings: GlobalConfig = {
  slug: "Settings",
  label: "Settings",
  fields: [
    {
      name: "url",
      label: "URL",
      type: "text",
    },
  ],
}

export default Settings;
