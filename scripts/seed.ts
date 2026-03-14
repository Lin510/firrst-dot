/**
 * Seed script for prrimul-punct MongoDB database.
 *
 * Usage:
 *   npx tsx scripts/seed.ts
 *
 * Idempotent: uses upsert on each record so it can be run multiple times safely.
 */

import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

// Load env from project root
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

// ─── Models ─────────────────────────────────────────────────────
import "../src/models/Regime";
import "../src/models/Theme";
import "../src/models/LegalReference";
import "../src/models/Source";
import "../src/models/Dot";

// ─── Seed data ───────────────────────────────────────────────────
import { seedRegimes } from "../src/data/fallback/regimes";
import { seedThemes } from "../src/data/fallback/themes";
import { seedLegalReferences } from "../src/data/fallback/legalReferences";
import { seedDots } from "../src/data/fallback/dots";

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = "prrimul_punct";

if (!MONGODB_URI) {
  console.error("❌  MONGODB_URI is not set in .env.local");
  process.exit(1);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyModel = mongoose.Model<any>;

async function upsertById(
  model: AnyModel,
  records: Array<{ id: string }>,
  label: string
): Promise<void> {
  let inserted = 0;
  let updated = 0;
  for (const record of records) {
    const result = await model.updateOne(
      { id: record.id },
      { $set: record },
      { upsert: true }
    );
    if (result.upsertedCount > 0) inserted++;
    else updated++;
  }
  console.log(
    `  ✓ ${label}: ${inserted} inserted, ${updated} updated (${records.length} total)`
  );
}

async function upsertBySlug(
  model: AnyModel,
  records: Array<{ slug: string }>,
  label: string
): Promise<void> {
  let inserted = 0;
  let updated = 0;
  for (const record of records) {
    const result = await model.updateOne(
      { slug: record.slug },
      { $set: record },
      { upsert: true }
    );
    if (result.upsertedCount > 0) inserted++;
    else updated++;
  }
  console.log(
    `  ✓ ${label}: ${inserted} inserted, ${updated} updated (${records.length} total)`
  );
}

async function seed(): Promise<void> {
  console.log("🌱  Connecting to MongoDB…");

  await mongoose.connect(MONGODB_URI as string, { dbName: DB_NAME });
  console.log(`   Connected → ${DB_NAME}\n`);

  const RegimeModel = mongoose.model("Regime");
  const ThemeModel = mongoose.model("Theme");
  const LegalReferenceModel = mongoose.model("LegalReference");
  const DotModel = mongoose.model("Dot");

  console.log("📦  Seeding collections…");

  await upsertById(RegimeModel, seedRegimes, "regimes");

  await upsertBySlug(ThemeModel, seedThemes, "themes");

  await upsertById(LegalReferenceModel, seedLegalReferences, "legal_references");

  await upsertById(DotModel, seedDots, "dots");

  console.log("\n✅  Seed complete.");
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error("❌  Seed failed:", err);
  process.exit(1);
});
