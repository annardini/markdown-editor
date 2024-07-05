import type { CollectionConfig } from "@/types";

const Authors: CollectionConfig = {
  slug: "authors",
  useAsFilename: "name",
  labels: {
    singular: "Author",
    plural: "Authors",
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name"],
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
  ],
}

export default Authors;
