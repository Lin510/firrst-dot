import mongoose, { Schema, model, models } from "mongoose";
import type { Theme } from "@/lib/types";

const LocalizedTextSchema = new Schema(
  { ro: String, en: String },
  { _id: false }
);

const ThemeSchema = new Schema<Theme>(
  {
    slug: { type: String, required: true, unique: true },
    label: { type: LocalizedTextSchema, required: true },
    description: LocalizedTextSchema,
    color: String,
  },
  {
    timestamps: true,
    collection: "themes",
  }
);

export const ThemeModel =
  (models.Theme as mongoose.Model<Theme>) ??
  model<Theme>("Theme", ThemeSchema);
