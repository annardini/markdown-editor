import type { Field } from "./fields";

export type CollectionConfig = {
  slug: string;
  overridePath?: string;
  useAsFilename?: string;
  labels: {
    singular: string;
    plural: string;
  },
  admin?: CollectionAdmin;
  fields: Field[];
}

export type CollectionAdmin = {
  useAsTitle?: string;
  defaultColumns?: string[];
  group?: string;
}
