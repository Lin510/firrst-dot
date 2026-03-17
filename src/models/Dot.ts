import mongoose, { Schema, model, models } from "mongoose";
import type { DotRecord } from "@/lib/types";

const LocalizedTextSchema = new Schema(
  { ro: String, en: String },
  { _id: false }
);

const PerspectiveBlockSchema = new Schema(
  {
    title: { type: LocalizedTextSchema, required: true },
    body: { type: LocalizedTextSchema, required: true },
  },
  { _id: false }
);

const SourceLinkSchema = new Schema(
  {
    label: { type: LocalizedTextSchema, required: true },
    href: { type: String, required: true },
  },
  { _id: false }
);

const DotSchema = new Schema<DotRecord>(
  {
    id: { type: String, required: true, unique: true },
    slug: {
      ro: String,
      en: String,
    },

    title: { type: LocalizedTextSchema, required: true },
    periodLabel: { type: LocalizedTextSchema, required: true },
    sortYear: { type: Number, required: true },
    endYear: Number,

    shortLine: { type: LocalizedTextSchema, required: true },
    coolingLabel: { type: LocalizedTextSchema },
    summary: { type: LocalizedTextSchema, required: true },

    thesis: { type: LocalizedTextSchema, required: true },
    antithesis: { type: LocalizedTextSchema, required: true },
    synthesis: { type: LocalizedTextSchema, required: true },

    factualLayer: { type: [LocalizedTextSchema], default: [] },
    legalLayer: { type: [LocalizedTextSchema], default: [] },
    systemLayer: { type: [LocalizedTextSchema], default: [] },

    systemView: { type: PerspectiveBlockSchema, required: true },
    rebelView: { type: PerspectiveBlockSchema, required: true },

    whyItMatters: { type: LocalizedTextSchema, required: true },
    consequences: { type: [LocalizedTextSchema], default: [] },

    themeSlugs: { type: [String], default: [] },
    legalRefIds: { type: [String], default: [] },
    sourceIds: { type: [String], default: [] },
    regimeId: { type: String, default: null },

    tags: { type: [String], default: [] },
    relatedIds: { type: [String], default: [] },

    sources: { type: [SourceLinkSchema], default: [] },

    published: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collection: "dots",
  }
);

DotSchema.index({ sortYear: 1 });
DotSchema.index({ tags: 1 });
DotSchema.index({ themeSlugs: 1 });
DotSchema.index({ regimeId: 1 });
DotSchema.index({ published: 1 });

export const Dot = (models.Dot as mongoose.Model<DotRecord>) ?? model<DotRecord>("Dot", DotSchema);
