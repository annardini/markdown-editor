import type { Field } from "./fields";

export type GlobalConfig = {
  slug: string;
  overridePath?: string;
  label: string;
  fields: Field[];
}
