// src/lib/sanity.js
// ─────────────────────────────────────────────────────────
// Replace YOUR_PROJECT_ID with your real Sanity project ID
// from https://sanity.io/manage → your project → Project ID
// ─────────────────────────────────────────────────────────

export const SANITY_PROJECT_ID = "ccpcgj7p"; 
export const SANITY_DATASET    = "production";

/** Fetch data from Sanity using GROQ — no extra package needed */
export async function sanityFetch(query) {
  const encoded = encodeURIComponent(query);
  const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2023-01-01/data/query/${SANITY_DATASET}?query=${encoded}`;
  const res  = await fetch(url);
  if (!res.ok) throw new Error(`Sanity fetch failed: ${res.status}`);
  const json = await res.json();
  return json.result;
}

/** Build a CDN image URL from a Sanity asset reference */
export function sanityImgUrl(ref, width = 800) {
  // ref format: "image-XXXXXXXX-WxH-ext"
  const parts = ref.split("-");          // ["image", id, "WxH", "ext"]
  const ext   = parts[parts.length - 1]; // "jpg"
  const dims  = parts[parts.length - 2]; // "1200x800"
  const id    = parts.slice(1, -2).join("-"); // handles IDs with hyphens
  return `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${id}-${dims}.${ext}?w=${width}&auto=format`;
}