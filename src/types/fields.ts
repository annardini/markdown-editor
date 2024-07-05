export type Field = TextField | TextareaField;

export type FieldBase = {
  name: string;
  label?: string;
  required?: boolean;
}

export type TextField = {
  type: "text",
  admin?: {
    hidden?: boolean;
  }
} & FieldBase;

export type TextareaField = {
  type: "textarea",
  admin?: {
    hidden?: boolean;
  }
} & FieldBase;
