import mongoose, { Schema, model, models } from "mongoose";
import type { Regime } from "@/lib/types";

const LocalizedTextSchema = new Schema(
  { ro: String, en: String },
  { _id: false }
);

const RegimeSchema = new Schema<Regime>(
  {
    id: { type: String, required: true, unique: true },
    label: { type: LocalizedTextSchema, required: true },
    description: LocalizedTextSchema,
    startYear: { type: Number, required: true },
    endYear: Number,
    color: String,
  },
  {
    timestamps: true,
    collection: "regimes",
  }
);

RegimeSchema.index({ startYear: 1 });

export const RegimeModel =
  (models.Regime as mongoose.Model<Regime>) ??
  model<Regime>("Regime", RegimeSchema);
