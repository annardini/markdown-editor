import type { CollectionConfig } from "@/types";

const Posts: CollectionConfig = {
  slug: "posts",
  labels: {
    singular: "Post",
    plural: "Posts",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title"],
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "summary",
      label: "Summary",
      type: "textarea",
      required: true,
    },
  ],
}

export default Posts;
