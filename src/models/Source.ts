import mongoose, { Schema, model, models } from "mongoose";
import type { Source } from "@/lib/types";

const LocalizedTextSchema = new Schema(
  { ro: String, en: String },
  { _id: false }
);

const SourceSchema = new Schema<Source>(
  {
    id: { type: String, required: true, unique: true },
    type: {
      type: String,
      required: true,
      enum: ["carte", "articol", "arhiva", "statistica", "raport", "jurnal", "document", "alt"],
    },
    title: { type: LocalizedTextSchema, required: true },
    author: String,
    year: Number,
    publisher: LocalizedTextSchema,
    excerpt: LocalizedTextSchema,
    href: String,
    published: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collection: "sources",
  }
);

SourceSchema.index({ type: 1 });
SourceSchema.index({ year: 1 });

export const SourceModel =
  (models.Source as mongoose.Model<Source>) ??
  model<Source>("Source", SourceSchema);
