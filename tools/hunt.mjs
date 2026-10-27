// Business Hunter: finds businesses with no website listed on Google.
// Runs in GitHub Actions. Needs the repo secret GOOGLE_PLACES_KEY.
// Usage: QUERY="barber" AREA="Gladstone, MO" MAX=60 node tools/hunt.mjs
import { writeFileSync } from "node:fs";

const KEY = process.env.GOOGLE_PLACES_KEY;
const QUERY = (process.env.QUERY || "barber").trim();
const AREA = (process.env.AREA || "Kansas City, MO").trim();
const MAX = Math.min(Number(process.env.MAX) || 60, 60); // Google returns at most 60 per search

if (!KEY) {
  console.error("Missing GOOGLE_PLACES_KEY. Add it under Settings → Secrets and variables → Actions.");
  process.exit(1);
}

const FIELDS = [
  "places.id", "places.displayName", "places.formattedAddress", "places.nationalPhoneNumber",
  "places.websiteUri", "places.businessStatus", "places.primaryTypeDisplayName",
  "places.googleMapsUri", "places.regularOpeningHours.weekdayDescriptions", "nextPageToken",
].join(",");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const all = [];
let pageToken;
do {
  const body = { textQuery: `${QUERY} in ${AREA}`, pageSize: 20 };
  if (pageToken) body.pageToken = pageToken;
  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Goog-Api-Key": KEY, "X-Goog-FieldMask": FIELDS },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    console.error(`Google said ${res.status}: ${await res.text()}`);
    process.exit(1);
  }
  const data = await res.json();
  all.push(...(data.places || []));
  pageToken = data.nextPageToken;
  if (pageToken) await sleep(2000); // the next page takes a moment to become ready
} while (pageToken && all.length < MAX);

const leads = all
  .filter((p) => p.businessStatus === "OPERATIONAL" || !p.businessStatus)
  .filter((p) => !p.websiteUri) // no website on their Google listing
  .map((p) => ({
    id: p.id,
    name: p.displayName?.text || "",
    category: p.primaryTypeDisplayName?.text || QUERY,
    address: p.formattedAddress || "",
    phone: p.nationalPhoneNumber || "",
    hours: p.regularOpeningHours?.weekdayDescriptions || [],
    maps: p.googleMapsUri || "",
  }));

const out = { query: QUERY, area: AREA, searchedAt: new Date().toISOString(), checked: all.length, leads };
writeFileSync("leads.json", JSON.stringify(out, null, 2));
console.log(`Checked ${all.length} businesses for "${QUERY}" in ${AREA}. ${leads.length} have no website listed.`);
