import mongoose, { Schema, model, models } from "mongoose";
import type { LegalReference } from "@/lib/types";

const LocalizedTextSchema = new Schema(
  { ro: String, en: String },
  { _id: false }
);

const LegalReferenceSchema = new Schema<LegalReference>(
  {
    id: { type: String, required: true, unique: true },
    type: {
      type: String,
      required: true,
      enum: [
        "lege",
        "decret",
        "ordonanta",
        "regulament",
        "tratat",
        "registru",
        "procedura",
        "directiva",
        "constitutie",
        "alt",
      ],
    },
    number: String,
    year: { type: Number, required: true },
    issuedBy: { type: LocalizedTextSchema, required: true },
    title: { type: LocalizedTextSchema, required: true },
    excerpt: LocalizedTextSchema,
    href: String,
    countryCode: { type: String, default: "RO" },
    published: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collection: "legal_references",
  }
);

LegalReferenceSchema.index({ year: 1 });
LegalReferenceSchema.index({ type: 1 });
LegalReferenceSchema.index({ published: 1 });

export const LegalReferenceModel =
  (models.LegalReference as mongoose.Model<LegalReference>) ??
  model<LegalReference>("LegalReference", LegalReferenceSchema);
