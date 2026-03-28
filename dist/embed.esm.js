/* dinofyi-embed v1.0.0 | MIT | https://widget.dinofyi.com */

// src/styles/modern.ts
function getModernCSS() {
  return `
/* Modern: gradient accent header */
.naturefyi-header {
  background: linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 70%, #000));
  border-radius: 12px 12px 0 0;
  padding: 16px 20px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.naturefyi-header-title {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.naturefyi-header-subtitle {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

/* Image/preview area \u2014 for species photos, bird images, plant illustrations */
.naturefyi-img {
  width: 56px;
  height: 56px;
  border-radius: 8px;
  object-fit: cover;
  background: rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.naturefyi-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* Body area */
.naturefyi-body {
  padding: 16px 20px;
}

/* Key-value rows \u2014 spacious */
.naturefyi-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.naturefyi-row:last-child {
  border-bottom: none;
}

.naturefyi-label {
  font-size: 12px;
  font-weight: 500;
  color: var(--muted);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 30%;
}

.naturefyi-value {
  font-size: 13px;
  color: var(--text);
  text-align: right;
  word-break: break-word;
}

/* Section title */
.naturefyi-section-title {
  font-size: 11px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 10px 0;
}

/* Tags \u2014 colored rounded badges */
.naturefyi-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--accent) 12%, transparent);
  color: var(--accent);
  margin: 2px 3px 2px 0;
  letter-spacing: 0.02em;
}

/* Link */
.naturefyi-link {
  font-size: 13px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.naturefyi-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.naturefyi-link svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

/* Footer link row */
.naturefyi-footer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-top: 1px solid var(--border);
  gap: 8px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Card shared: stats row (horizontal flex)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.naturefyi-stats-row { display:flex; gap:12px; padding:10px 18px; border-bottom:1px solid var(--border); }
.naturefyi-stat { text-align:center; flex:1; }
.naturefyi-stat-value { font-size:18px; font-weight:700; color:var(--accent); }
.naturefyi-stat-label { font-size:9px; color:var(--muted); text-transform:uppercase; letter-spacing:0.03em; }

/* Card shared: stats grid (2x2 boxes) */
.naturefyi-stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; padding:10px 18px; border-bottom:1px solid var(--border); }
.naturefyi-stat-box { padding:6px 8px; background:color-mix(in srgb, var(--accent) 8%, var(--bg)); border-radius:8px; }
.naturefyi-stat-box-label { font-size:9px; color:color-mix(in srgb, var(--accent) 80%, var(--text)); text-transform:uppercase; }
.naturefyi-stat-box-value { font-size:13px; font-weight:700; color:var(--text); margin-top:1px; }

/* Card shared: key-value dotted rows */
.naturefyi-kv-rows { padding:10px 18px; border-bottom:1px solid var(--border); }
.naturefyi-kv-row { display:flex; justify-content:space-between; align-items:baseline; padding:4px 0; border-bottom:1px dotted var(--border); }
.naturefyi-kv-row:last-child { border-bottom:none; }
.naturefyi-kv-label { font-size:11px; color:var(--muted); }
.naturefyi-kv-value { font-size:11px; font-weight:600; color:var(--text); }

/* Card shared: pill tags */
.naturefyi-pills { display:flex; flex-wrap:wrap; gap:4px; padding:10px 18px; border-bottom:1px solid var(--border); }
.naturefyi-pill { padding:2px 8px; border-radius:10px; font-size:11px; font-weight:500; background:color-mix(in srgb, var(--accent) 10%, var(--bg)); color:var(--accent); }

/* Card shared: section label */
.naturefyi-section-label { font-size:10px; text-transform:uppercase; letter-spacing:0.05em; color:var(--accent); font-weight:600; margin-bottom:3px; }

/* Card shared: description */
.naturefyi-desc { padding:10px 18px; font-size:14px; color:var(--muted); line-height:1.5; border-bottom:1px solid var(--border); }

/* Card shared: view link */
.naturefyi-view-link { display:block; text-align:center; padding:10px 18px; border-bottom:1px solid var(--border); }
.naturefyi-view-link a { color:var(--link); text-decoration:none; font-size:12px; font-weight:500; display:inline-flex; align-items:center; gap:4px; }
.naturefyi-view-link a:hover { text-decoration:underline; }
.naturefyi-view-link svg { width:12px; height:12px; }

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Card domain: species taxonomy (speciesfyi)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.naturefyi-taxonomy-row { width:100%; padding:14px 18px; display:flex; align-items:center; gap:16px; border-bottom:1px solid var(--border); }
.naturefyi-taxonomy-icon { width:72px; height:72px; border-radius:8px; background:color-mix(in srgb, var(--accent) 15%, var(--bg)); border:2px solid var(--accent); display:flex; flex-direction:column; align-items:center; justify-content:center; flex-shrink:0; overflow:hidden; }
.naturefyi-taxonomy-icon img { width:100%; height:100%; object-fit:cover; }
.naturefyi-taxonomy-rank { font-size:11px; color:var(--muted); font-weight:600; }
.naturefyi-taxonomy-name { font-size:16px; font-weight:700; color:var(--accent); line-height:1; }
.naturefyi-taxonomy-common { font-size:10px; color:var(--muted); }
.naturefyi-taxonomy-info { flex:1; }
.naturefyi-taxonomy-title { font-size:16px; font-weight:700; color:var(--text); margin-bottom:2px; }
.naturefyi-taxonomy-scientific { font-size:11px; color:var(--muted); font-style:italic; }

/* Card domain: conservation status badge */
.naturefyi-conservation-badge { display:inline-flex; align-items:center; gap:4px; padding:3px 8px; border-radius:4px; font-size:11px; font-weight:600; background:color-mix(in srgb, var(--accent) 10%, var(--bg)); color:var(--accent); border:1px solid color-mix(in srgb, var(--accent) 25%, transparent); }

/* Card domain: population/size display */
.naturefyi-population { padding:10px 18px; border-bottom:1px solid var(--border); display:flex; align-items:baseline; gap:8px; }
.naturefyi-population-val { font-size:28px; font-weight:800; color:var(--accent); line-height:1; }
.naturefyi-population-label { font-size:10px; color:var(--muted); text-transform:uppercase; letter-spacing:0.04em; }

/* Card domain: color swatch (plumage, flower color) */
.naturefyi-color-swatch-row { display:flex; gap:4px; padding:8px 18px; border-bottom:1px solid var(--border); flex-wrap:wrap; }
.naturefyi-color-swatch { width:20px; height:20px; border-radius:50%; border:2px solid var(--border); flex-shrink:0; }

/* Card domain: property bar (size, weight, wingspan comparisons) */
.naturefyi-prop-bar-row { padding:6px 18px; border-bottom:1px dotted var(--border); display:flex; align-items:center; gap:10px; }
.naturefyi-prop-bar-row:last-child { border-bottom:none; }
.naturefyi-prop-bar-label { font-size:10px; color:var(--muted); text-transform:uppercase; letter-spacing:0.04em; width:80px; flex-shrink:0; }
.naturefyi-prop-bar-track { flex:1; height:6px; background:var(--surface); border-radius:3px; overflow:hidden; }
.naturefyi-prop-bar-fill { height:100%; background:var(--accent); border-radius:3px; transition:width 0.4s ease; }
.naturefyi-prop-bar-val { font-size:10px; font-weight:600; color:var(--text); width:36px; text-align:right; flex-shrink:0; }

/* Inline widget host \u2014 for badge-style inline rendering */
:host([data-inline]) {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
  `;
}

// src/styles/organic.ts
function getOrganicCSS() {
  return `
/* Organic: lighter gradient header with softer corners */
.naturefyi-header {
  background: linear-gradient(135deg, color-mix(in srgb, var(--accent) 85%, #fff), var(--accent));
  border-radius: 16px 16px 0 0;
  padding: 16px 20px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.naturefyi-header-title {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.naturefyi-header-subtitle {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
}

/* Image/preview area \u2014 softer corners for organic feel */
.naturefyi-img {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  object-fit: cover;
  background: rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.naturefyi-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

/* Body area \u2014 warmer surface */
.naturefyi-body {
  padding: 16px 20px;
  background: color-mix(in srgb, var(--accent) 5%, var(--surface));
}

/* Key-value rows \u2014 spacious */
.naturefyi-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.naturefyi-row:last-child {
  border-bottom: none;
}

.naturefyi-label {
  font-size: 12px;
  font-weight: 500;
  color: var(--muted);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 30%;
}

.naturefyi-value {
  font-size: 14px;
  color: var(--text);
  text-align: right;
  word-break: break-word;
}

/* Section title */
.naturefyi-section-title {
  font-size: 11px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 10px 0;
}

/* Tags \u2014 colored rounded badges with extra rounding for organic feel */
.naturefyi-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 16px;
  background: color-mix(in srgb, var(--accent) 12%, transparent);
  color: var(--accent);
  margin: 2px 3px 2px 0;
  letter-spacing: 0.02em;
}

/* Link */
.naturefyi-link {
  font-size: 13px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.naturefyi-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.naturefyi-link svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

/* Footer link row */
.naturefyi-footer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-top: 1px solid var(--border);
  gap: 8px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Card shared: stats row (horizontal flex)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.naturefyi-stats-row { display:flex; gap:12px; padding:10px 18px; border-bottom:1px solid var(--border); background:color-mix(in srgb, var(--accent) 5%, var(--surface)); }
.naturefyi-stat { text-align:center; flex:1; }
.naturefyi-stat-value { font-size:18px; font-weight:700; color:var(--accent); }
.naturefyi-stat-label { font-size:9px; color:var(--muted); text-transform:uppercase; letter-spacing:0.03em; }

/* Card shared: stats grid (2x2 boxes) \u2014 warmer tint */
.naturefyi-stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; padding:10px 18px; border-bottom:1px solid var(--border); }
.naturefyi-stat-box { padding:6px 8px; background:color-mix(in srgb, var(--accent) 8%, var(--bg)); border-radius:12px; }
.naturefyi-stat-box-label { font-size:9px; color:color-mix(in srgb, var(--accent) 80%, var(--text)); text-transform:uppercase; }
.naturefyi-stat-box-value { font-size:13px; font-weight:700; color:var(--text); margin-top:1px; }

/* Card shared: key-value dotted rows */
.naturefyi-kv-rows { padding:10px 18px; border-bottom:1px solid var(--border); }
.naturefyi-kv-row { display:flex; justify-content:space-between; align-items:baseline; padding:4px 0; border-bottom:1px dotted var(--border); }
.naturefyi-kv-row:last-child { border-bottom:none; }
.naturefyi-kv-label { font-size:11px; color:var(--muted); }
.naturefyi-kv-value { font-size:11px; font-weight:600; color:var(--text); }

/* Card shared: pill tags \u2014 rounder for organic feel */
.naturefyi-pills { display:flex; flex-wrap:wrap; gap:4px; padding:10px 18px; border-bottom:1px solid var(--border); }
.naturefyi-pill { padding:2px 10px; border-radius:14px; font-size:11px; font-weight:500; background:color-mix(in srgb, var(--accent) 10%, var(--bg)); color:var(--accent); }

/* Card shared: section label */
.naturefyi-section-label { font-size:10px; text-transform:uppercase; letter-spacing:0.05em; color:var(--accent); font-weight:600; margin-bottom:3px; }

/* Card shared: description */
.naturefyi-desc { padding:10px 18px; font-size:14px; color:var(--muted); line-height:1.5; border-bottom:1px solid var(--border); }

/* Card shared: view link */
.naturefyi-view-link { display:block; text-align:center; padding:10px 18px; border-bottom:1px solid var(--border); }
.naturefyi-view-link a { color:var(--link); text-decoration:none; font-size:12px; font-weight:500; display:inline-flex; align-items:center; gap:4px; }
.naturefyi-view-link a:hover { text-decoration:underline; }
.naturefyi-view-link svg { width:12px; height:12px; }

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Card domain: species taxonomy (speciesfyi)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.naturefyi-taxonomy-row { width:100%; padding:14px 18px; display:flex; align-items:center; gap:16px; border-bottom:1px solid var(--border); }
.naturefyi-taxonomy-icon { width:72px; height:72px; border-radius:16px; background:color-mix(in srgb, var(--accent) 15%, var(--bg)); border:2px solid var(--accent); display:flex; flex-direction:column; align-items:center; justify-content:center; flex-shrink:0; overflow:hidden; }
.naturefyi-taxonomy-icon img { width:100%; height:100%; object-fit:cover; }
.naturefyi-taxonomy-rank { font-size:11px; color:var(--muted); font-weight:600; }
.naturefyi-taxonomy-name { font-size:16px; font-weight:700; color:var(--accent); line-height:1; }
.naturefyi-taxonomy-common { font-size:10px; color:var(--muted); }
.naturefyi-taxonomy-info { flex:1; }
.naturefyi-taxonomy-title { font-size:16px; font-weight:700; color:var(--text); margin-bottom:2px; }
.naturefyi-taxonomy-scientific { font-size:11px; color:var(--muted); font-style:italic; }

/* Card domain: conservation status badge \u2014 rounded for organic */
.naturefyi-conservation-badge { display:inline-flex; align-items:center; gap:4px; padding:3px 10px; border-radius:12px; font-size:11px; font-weight:600; background:color-mix(in srgb, var(--accent) 10%, var(--bg)); color:var(--accent); border:1px solid color-mix(in srgb, var(--accent) 25%, transparent); }

/* Card domain: population/size display */
.naturefyi-population { padding:10px 18px; border-bottom:1px solid var(--border); display:flex; align-items:baseline; gap:8px; }
.naturefyi-population-val { font-size:28px; font-weight:800; color:var(--accent); line-height:1; }
.naturefyi-population-label { font-size:10px; color:var(--muted); text-transform:uppercase; letter-spacing:0.04em; }

/* Card domain: color swatch (plumage, flower color) */
.naturefyi-color-swatch-row { display:flex; gap:4px; padding:8px 18px; border-bottom:1px solid var(--border); flex-wrap:wrap; }
.naturefyi-color-swatch { width:20px; height:20px; border-radius:50%; border:2px solid var(--border); flex-shrink:0; }

/* Card domain: property bar (size, weight, wingspan comparisons) \u2014 rounded */
.naturefyi-prop-bar-row { padding:6px 18px; border-bottom:1px dotted var(--border); display:flex; align-items:center; gap:10px; }
.naturefyi-prop-bar-row:last-child { border-bottom:none; }
.naturefyi-prop-bar-label { font-size:10px; color:var(--muted); text-transform:uppercase; letter-spacing:0.04em; width:80px; flex-shrink:0; }
.naturefyi-prop-bar-track { flex:1; height:7px; background:color-mix(in srgb, var(--accent) 5%, var(--surface)); border-radius:4px; overflow:hidden; }
.naturefyi-prop-bar-fill { height:100%; background:var(--accent); border-radius:4px; transition:width 0.4s ease; }
.naturefyi-prop-bar-val { font-size:10px; font-weight:600; color:var(--text); width:36px; text-align:right; flex-shrink:0; }

/* Organic: copy button \u2014 softer style */
.naturefyi-copy-btn {
  background: color-mix(in srgb, var(--accent) 8%, var(--copy-bg));
  color: var(--text);
  border: none;
  border-radius: 8px;
  padding: 4px 10px;
  font-size: 11px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: background 0.15s;
  font-family: inherit;
}

.naturefyi-copy-btn:hover {
  background: color-mix(in srgb, var(--accent) 15%, var(--copy-hover));
}

.naturefyi-copy-btn svg {
  width: 11px;
  height: 11px;
}

/* Inline widget host \u2014 for badge-style inline rendering */
:host([data-inline]) {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
  `;
}

// src/themes.ts
function getStyleCSS(style) {
  switch (style) {
    case "organic":
      return getOrganicCSS();
    case "modern":
    default:
      return getModernCSS();
  }
}
function getThemeCSS(accent, style = "modern") {
  return `
:host {
  display: block;
  --site-accent: ${accent};
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Size variants
   compact=280px, default=420px, large=720px
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.naturefyi-widget {
  box-sizing: border-box;
  min-width: 240px;
  max-width: 420px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
  line-height: 1.6;
  transition: border-color 0.2s;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}

.naturefyi-widget:hover {
  border-color: color-mix(in srgb, var(--accent) 40%, var(--border));
}

.naturefyi-widget[data-size="compact"] {
  max-width: 280px;
  font-size: 13px;
}

.naturefyi-widget[data-size="default"] {
  max-width: 420px;
}

.naturefyi-widget[data-size="large"] {
  max-width: 720px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Light theme (default)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.naturefyi-widget[data-theme="light"] {
  --bg: #fff;
  --text: #1e293b;
  --border: #e2e8f0;
  --accent: var(--site-accent);
  --muted: #64748b;
  --surface: #f8fafc;
  --badge-bg: #f1f5f9;
  --badge-text: #374151;
  --link: var(--site-accent);
  --copy-bg: #f3f4f6;
  --copy-hover: #e5e7eb;
  --input-bg: #ffffff;
  --input-border: #d1d5db;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Dark theme
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.naturefyi-widget[data-theme="dark"] {
  --bg: #1a1a1a;
  --text: #f3f4f6;
  --border: #374151;
  --accent: var(--site-accent);
  --muted: #9ca3af;
  --surface: #111827;
  --badge-bg: #374151;
  --badge-text: #d1d5db;
  --link: color-mix(in srgb, var(--site-accent) 80%, #fff);
  --copy-bg: #374151;
  --copy-hover: #4b5563;
  --input-bg: #111111;
  --input-border: #4b5563;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Sepia theme
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.naturefyi-widget[data-theme="sepia"] {
  --bg: #f5f0e8;
  --text: #3d3529;
  --border: #d4c5a9;
  --accent: var(--site-accent);
  --muted: #8b7d6b;
  --surface: #ede8df;
  --badge-bg: #e8e0d0;
  --badge-text: #5c4f3d;
  --link: color-mix(in srgb, var(--site-accent) 70%, #3d3529);
  --copy-bg: #e8e0d0;
  --copy-hover: #ddd4c0;
  --input-bg: #f5f0e8;
  --input-border: #c4b49a;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(61, 53, 41, 0.12);
}

.naturefyi-widget *, .naturefyi-widget *::before, .naturefyi-widget *::after {
  box-sizing: border-box;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Loading state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.naturefyi-loading {
  padding: 20px 16px;
  text-align: center;
  color: var(--muted);
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.naturefyi-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: naturefyi-spin 0.7s linear infinite;
  display: inline-block;
  flex-shrink: 0;
}

@keyframes naturefyi-spin {
  to { transform: rotate(360deg); }
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Error state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.naturefyi-error {
  padding: 16px;
  color: var(--muted);
  font-size: 13px;
  text-align: center;
}

.naturefyi-error p {
  margin: 0 0 8px 0;
}

.naturefyi-error a {
  color: var(--link);
  text-decoration: none;
}

.naturefyi-error a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Badge (generic)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.naturefyi-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 4px;
  background: var(--badge-bg);
  color: var(--badge-text);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Search inputs
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.naturefyi-search-wrap {
  padding: 12px 16px;
}

.naturefyi-search-form {
  display: flex;
  gap: 8px;
}

.naturefyi-search-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--input-border);
  border-radius: 6px;
  background: var(--input-bg);
  color: var(--text);
  font-size: 13px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s;
}

.naturefyi-search-input:focus {
  border-color: var(--input-focus);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
}

.naturefyi-search-input::placeholder {
  color: var(--muted);
}

.naturefyi-search-btn {
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.15s;
  white-space: nowrap;
}

.naturefyi-search-btn:hover {
  opacity: 0.9;
}

/* Search results list */
.naturefyi-search-results {
  padding: 0 16px 12px;
}

.naturefyi-result-item {
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.naturefyi-result-item:last-child {
  border-bottom: none;
}

.naturefyi-result-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 3px 0;
}

.naturefyi-result-meta {
  font-size: 11px;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Powered by footer
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.naturefyi-powered {
  display: block;
  text-align: center;
  padding: 8px 16px;
  font-size: 11px;
  color: var(--muted);
  border-top: 1px solid var(--border);
}

.naturefyi-powered a {
  color: var(--link);
  text-decoration: none;
  font-weight: 500;
}

.naturefyi-powered a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Copy button (base \u2014 overridden in organic)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.naturefyi-copy-btn {
  background: var(--copy-bg);
  color: var(--text);
  border: none;
  border-radius: 5px;
  padding: 4px 9px;
  font-size: 11px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: background 0.15s;
  font-family: inherit;
}

.naturefyi-copy-btn:hover {
  background: var(--copy-hover);
}

.naturefyi-copy-btn svg {
  width: 11px;
  height: 11px;
}

${getStyleCSS(style)}
  `;
}

// src/shadow.ts
function createShadow(el, config) {
  const widgetStyle = el.dataset.style || "modern";
  const shadow = el.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = getThemeCSS(config.accent, widgetStyle);
  shadow.appendChild(style);
  return shadow;
}
function resolveTheme(el) {
  const raw = el.dataset.theme || "light";
  if (raw === "auto") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return raw;
}
function createWidgetRoot(shadow, el, extraClass) {
  const theme = resolveTheme(el);
  const size = el.dataset.size || "default";
  const div = document.createElement("div");
  div.className = ["naturefyi-widget", extraClass].filter(Boolean).join(" ");
  div.setAttribute("data-theme", theme);
  div.setAttribute("data-size", size);
  shadow.appendChild(div);
  if (el.dataset.theme === "auto") {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      div.setAttribute("data-theme", e.matches ? "dark" : "light");
    });
  }
  return div;
}
function renderLoading(container) {
  container.innerHTML = `
    <div class="naturefyi-loading">
      <span class="naturefyi-spinner"></span>
      Loading\u2026
    </div>
  `;
}
function renderError(container, message, config) {
  container.innerHTML = `
    <div class="naturefyi-error">
      <p>${message}</p>
      <a href="https://${config.domain}" target="_blank" rel="noopener">
        Visit ${config.name}
      </a>
    </div>
  `;
}
var externalLinkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
function poweredByHTML(config) {
  return `<span class="naturefyi-powered">Powered by <a href="https://${config.domain}" target="_blank" rel="noopener">${config.name}</a></span>`;
}

// src/api.ts
var CACHE_TTL_MS = 5 * 60 * 1e3;
function cacheKey(url) {
  return `naturefyi_embed_${url}`;
}
function getFromCache(url) {
  try {
    const raw = sessionStorage.getItem(cacheKey(url));
    if (!raw) return null;
    const entry = JSON.parse(raw);
    if (Date.now() - entry.ts > CACHE_TTL_MS) {
      sessionStorage.removeItem(cacheKey(url));
      return null;
    }
    return entry.data;
  } catch (e) {
    return null;
  }
}
function setInCache(url, data) {
  try {
    const entry = { data, ts: Date.now() };
    sessionStorage.setItem(cacheKey(url), JSON.stringify(entry));
  } catch (e) {
  }
}
async function fetchAPI(baseUrl, path, params) {
  const base = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
  const relativePath = path.startsWith("/") ? path.slice(1) : path;
  const url = new URL(relativePath, base);
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }
  const urlStr = url.toString();
  const cached = getFromCache(urlStr);
  if (cached !== null) return cached;
  const response = await fetch(urlStr, {
    headers: { Accept: "application/json" }
  });
  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${urlStr}`);
  }
  const data = await response.json();
  setInCache(urlStr, data);
  return data;
}

// src/cards/shared.ts
function esc(s) {
  if (!s) return "";
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function statsRow(label, value) {
  if (value === null || value === void 0 || value === "") return "";
  return `<div class="naturefyi-kv-row"><span class="naturefyi-kv-label">${esc(label)}</span><span class="naturefyi-kv-value">${esc(String(value))}</span></div>`;
}
function pills(items) {
  if (!items || !items.length) return "";
  return `<div class="naturefyi-pills">${items.map((i) => `<span class="naturefyi-pill">${esc(i)}</span>`).join("")}</div>`;
}
function viewLink(url, label, config) {
  return `<a href="${esc(url)}" target="_blank" rel="noopener" class="naturefyi-view-link" style="color:${config.accent}">${esc(label)} \u2197</a>`;
}
function badge(text, bg, fg = "#fff") {
  return `<span class="naturefyi-badge" style="background:${bg};color:${fg}">${esc(text)}</span>`;
}
function description(text, maxLen = 200) {
  if (!text) return "";
  const truncated = text.length > maxLen ? text.slice(0, maxLen) + "..." : text;
  return `<p class="naturefyi-desc">${esc(truncated)}</p>`;
}
function valueBar(value, max, color, label = "") {
  const percent = value / max * 100;
  const barHtml = `<div class="naturefyi-value-bar"><div class="naturefyi-bar-fill" style="width:${percent}%;background:${color}"></div></div>`;
  const labelHtml = label ? `<span class="naturefyi-bar-label">${esc(label)}</span>` : "";
  return `<div class="naturefyi-bar-wrapper">${labelHtml}${barHtml}</div>`;
}
function formatNumber(value, units = "") {
  if (value === null || value === void 0) return "";
  return `${value.toLocaleString()}${units ? " " + units : ""}`;
}

// src/compute/iucn.ts
var IUCN_COLORS = {
  LC: { bg: "#22c55e", text: "#fff", label: "Least Concern" },
  NT: { bg: "#84cc16", text: "#fff", label: "Near Threatened" },
  VU: { bg: "#eab308", text: "#fff", label: "Vulnerable" },
  EN: { bg: "#f97316", text: "#fff", label: "Endangered" },
  CR: { bg: "#dc2626", text: "#fff", label: "Critically Endangered" },
  EW: { bg: "#7f1d1d", text: "#fff", label: "Extinct in Wild" },
  EX: { bg: "#1e293b", text: "#fff", label: "Extinct" },
  DD: { bg: "#64748b", text: "#fff", label: "Data Deficient" },
  NE: { bg: "#94a3b8", text: "#fff", label: "Not Evaluated" }
};
var UNKNOWN_STATUS = { bg: "#94a3b8", text: "#fff", label: "Unknown" };
function statusToColor(status) {
  const entry = IUCN_COLORS[status.toUpperCase()];
  if (!entry) return { bg: UNKNOWN_STATUS.bg, text: UNKNOWN_STATUS.text };
  return { bg: entry.bg, text: entry.text };
}
function statusToLabel(status) {
  var _a, _b;
  return (_b = (_a = IUCN_COLORS[status.toUpperCase()]) == null ? void 0 : _a.label) != null ? _b : "Unknown";
}

// src/cards/species-card.ts
function trendArrow(trend) {
  if (!trend) return "";
  const t = String(trend).toLowerCase();
  if (t === "increasing") return `<span style="color:#22c55e" title="Increasing">\u2191</span>`;
  if (t === "stable") return `<span style="color:#eab308" title="Stable">\u2192</span>`;
  if (t === "declining" || t === "decreasing") return `<span style="color:#ef4444" title="Declining">\u2193</span>`;
  return `<span style="color:#94a3b8" title="Unknown">?</span>`;
}
function renderSpeciesCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const name = esc(String((_b = (_a = data.common_name) != null ? _a : data.name) != null ? _b : ""));
  const scientificName = esc(String(
    (_d = (_c = data.genus && typeof data.genus === "object" ? data.genus.name : null) != null ? _c : data.scientific_name) != null ? _d : ""
  ));
  const slug = String((_e = data.slug) != null ? _e : "");
  const entityUrl = typeof data.url === "string" && data.url ? data.url.startsWith("http") ? data.url : `https://${config.domain}${data.url}` : `https://${config.domain}/species/${esc(slug)}/`;
  const conservation = String((_g = (_f = data.conservation_status) != null ? _f : data.iucn_status) != null ? _g : "");
  const iucnColors = conservation ? statusToColor(conservation) : null;
  const iucnLabel = conservation ? statusToLabel(conservation) : "";
  const lifespan = data.average_lifespan_years != null ? formatNumber(Number(data.average_lifespan_years), "years") : "";
  const length = data.average_length_m != null ? formatNumber(Number(data.average_length_m), "m") : "";
  const weight = data.average_weight_kg != null ? formatNumber(Number(data.average_weight_kg), "kg") : "";
  const population = data.population_estimate != null ? String(data.population_estimate) : "";
  const trend = String((_h = data.population_trend) != null ? _h : "");
  const diet = esc(String((_i = data.diet) != null ? _i : ""));
  const habitat = String((_k = (_j = data.habitat) != null ? _j : data.habitat_description) != null ? _k : "");
  const iucnBadge = iucnColors ? `<span class="naturefyi-badge" style="background:${iucnColors.bg};color:${iucnColors.text}">${esc(conservation)} ${esc(iucnLabel)}</span>` : "";
  return `
    <div class="naturefyi-species-card">
      <div class="naturefyi-card-header" style="border-left:3px solid ${config.accent};padding-left:10px;margin-bottom:8px;">
        <div style="font-size:1rem;font-weight:600;">${name}</div>
        ${scientificName ? `<div style="font-size:0.85rem;color:#64748b;font-style:italic;">${scientificName}</div>` : ""}
      </div>

      <div class="naturefyi-badges" style="margin:8px 0;display:flex;flex-wrap:wrap;gap:4px;">
        ${iucnBadge}
        ${diet ? badge(diet, "#6b7280") : ""}
      </div>

      ${lifespan ? statsRow("Lifespan", lifespan) : ""}
      ${length ? statsRow("Length", length) : ""}
      ${weight ? statsRow("Weight", weight) : ""}

      ${population ? `<div class="naturefyi-kv-row">
            <span class="naturefyi-kv-label">Population</span>
            <span class="naturefyi-kv-value">${esc(population)} ${trendArrow(trend)}</span>
          </div>` : ""}

      ${habitat ? description(habitat, 200) : ""}

      <div class="naturefyi-actions" style="margin-top:8px;">
        ${viewLink(entityUrl, `View on ${config.name}`, config)}
      </div>
    </div>
    ${poweredByHTML(config)}
  `;
}

// src/cards/bird-card.ts
function trendArrow2(trend) {
  if (!trend) return "";
  const t = String(trend).toLowerCase();
  if (t === "increasing") return `<span style="color:#22c55e" title="Increasing">\u2191</span>`;
  if (t === "stable") return `<span style="color:#eab308" title="Stable">\u2192</span>`;
  if (t === "declining" || t === "decreasing") return `<span style="color:#ef4444" title="Declining">\u2193</span>`;
  return `<span style="color:#94a3b8" title="Unknown">?</span>`;
}
function renderBirdCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const name = esc(String((_b = (_a = data.common_name) != null ? _a : data.name) != null ? _b : ""));
  const scientificName = esc(String((_c = data.scientific_name) != null ? _c : ""));
  const slug = String((_d = data.slug) != null ? _d : "");
  const entityUrl = typeof data.url === "string" && data.url ? data.url.startsWith("http") ? data.url : `https://${config.domain}${data.url}` : `https://${config.domain}/bird/${esc(slug)}/`;
  const conservation = String((_f = (_e = data.conservation_status) != null ? _e : data.iucn_status) != null ? _f : "");
  const iucnColors = conservation ? statusToColor(conservation) : null;
  const iucnLabel = conservation ? statusToLabel(conservation) : "";
  const wingspan = data.wingspan_cm != null ? formatNumber(Number(data.wingspan_cm), "cm") : "";
  const weight = data.weight_g != null ? formatNumber(Number(data.weight_g), "g") : "";
  const length = data.length_cm != null ? formatNumber(Number(data.length_cm), "cm") : "";
  const habitat = esc(String((_g = data.habitat) != null ? _g : ""));
  const geoRange = data.geographic_range;
  const geoItems = Array.isArray(geoRange) ? geoRange : typeof geoRange === "string" && geoRange ? [geoRange] : [];
  const xenoCantoId = data.xeno_canto_id != null ? String(data.xeno_canto_id) : "";
  const population = data.population_estimate != null ? String(data.population_estimate) : "";
  const trend = String((_h = data.population_trend) != null ? _h : "");
  const iucnBadge = iucnColors ? `<span class="naturefyi-badge" style="background:${iucnColors.bg};color:${iucnColors.text}">${esc(conservation)} ${esc(iucnLabel)}</span>` : "";
  return `
    <div class="naturefyi-bird-card">
      <div class="naturefyi-card-header" style="border-left:3px solid ${config.accent};padding-left:10px;margin-bottom:8px;">
        <div style="font-size:1rem;font-weight:600;">${name}</div>
        ${scientificName ? `<div style="font-size:0.85rem;color:#64748b;font-style:italic;">${scientificName}</div>` : ""}
      </div>

      <div class="naturefyi-badges" style="margin:8px 0;display:flex;flex-wrap:wrap;gap:4px;">
        ${iucnBadge}
      </div>

      ${wingspan ? statsRow("Wingspan", wingspan) : ""}
      ${weight ? statsRow("Weight", weight) : ""}
      ${length ? statsRow("Length", length) : ""}

      ${habitat ? statsRow("Habitat", habitat) : ""}
      ${geoItems.length > 0 ? `<div style="margin:6px 0;">${pills(geoItems)}</div>` : ""}

      ${xenoCantoId ? `<div style="margin:6px 0;">
            <a href="https://xeno-canto.org/${esc(xenoCantoId)}" target="_blank" rel="noopener"
               class="naturefyi-view-link" style="color:${config.accent};font-size:0.85rem;">
              \u{1F50A} Listen on Xeno-canto \u2197
            </a>
          </div>` : ""}

      ${population ? `<div class="naturefyi-kv-row">
            <span class="naturefyi-kv-label">Population</span>
            <span class="naturefyi-kv-value">${esc(population)} ${trendArrow2(trend)}</span>
          </div>` : ""}

      <div class="naturefyi-actions" style="margin-top:8px;">
        ${viewLink(entityUrl, `View on ${config.name}`, config)}
      </div>
    </div>
    ${poweredByHTML(config)}
  `;
}

// src/compute/water.ts
var WATER_TYPES = {
  freshwater: { color: "#3b82f6", label: "Freshwater", icon: "\u{1F4A7}" },
  saltwater: { color: "#06b6d4", label: "Saltwater", icon: "\u{1F30A}" },
  brackish: { color: "#14b8a6", label: "Brackish", icon: "\u{1FAE7}" }
};
var UNKNOWN = { color: "#94a3b8", label: "Unknown", icon: "\u2753" };
function normalise(raw) {
  const s = raw.toLowerCase().trim();
  if (s === "freshwater" || s === "fresh") return "freshwater";
  if (s === "saltwater" || s === "marine" || s === "ocean" || s === "sea") return "saltwater";
  if (s === "brackish" || s === "estuarine" || s === "estuary") return "brackish";
  return null;
}
function waterTypeToColor(waterType) {
  const key = normalise(waterType);
  return key ? WATER_TYPES[key].color : UNKNOWN.color;
}
function waterTypeLabel(waterType) {
  const key = normalise(waterType);
  return key ? WATER_TYPES[key].label : UNKNOWN.label;
}

// src/cards/fish-card.ts
function careLevelColor(level) {
  const l = (level || "").toLowerCase();
  if (l === "easy" || l === "beginner") return "#22c55e";
  if (l === "moderate" || l === "intermediate") return "#eab308";
  if (l === "difficult" || l === "expert" || l === "advanced") return "#ef4444";
  return "#6b7280";
}
function renderFishCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const name = esc(String((_b = (_a = data.common_name) != null ? _a : data.name) != null ? _b : ""));
  const scientificName = esc(String((_c = data.scientific_name) != null ? _c : ""));
  const slug = String((_d = data.slug) != null ? _d : "");
  const entityUrl = typeof data.url === "string" && data.url ? data.url.startsWith("http") ? data.url : `https://${config.domain}${data.url}` : `https://${config.domain}/fish/${esc(slug)}/`;
  const waterType = String((_e = data.water_type) != null ? _e : "");
  const waterColor = waterType ? waterTypeToColor(waterType) : "";
  const waterLabel = waterType ? waterTypeLabel(waterType) : "";
  const conservation = String((_g = (_f = data.conservation_status) != null ? _f : data.iucn_status) != null ? _g : "");
  const iucnColors = conservation ? statusToColor(conservation) : null;
  const iucnLabel = conservation ? statusToLabel(conservation) : "";
  const isGameFish = data.is_game_fish === true;
  const mercury = esc(String((_h = data.mercury_level) != null ? _h : ""));
  const iucnBadge = iucnColors ? `<span class="naturefyi-badge" style="background:${iucnColors.bg};color:${iucnColors.text}">${esc(conservation)} ${esc(iucnLabel)}</span>` : "";
  const waterBadge = waterType ? `<span class="naturefyi-badge" style="background:${waterColor};color:#fff">\u{1F30A} ${esc(waterLabel)}</span>` : "";
  let modeHtml = "";
  if (isGameFish) {
    const fightRating = data.fight_rating != null ? Number(data.fight_rating) : null;
    const worldRecord = esc(String((_i = data.world_record) != null ? _i : ""));
    const bestBait = Array.isArray(data.best_bait) ? data.best_bait : [];
    const fishingMethods = Array.isArray(data.fishing_methods) ? data.fishing_methods : [];
    modeHtml = `
      ${fightRating != null ? valueBar(fightRating, 10, config.accent, `Fight Rating: ${fightRating}/10`) : ""}
      ${worldRecord ? statsRow("World Record", worldRecord) : ""}
      ${bestBait.length > 0 ? `<div style="margin:6px 0;"><span class="naturefyi-kv-label" style="display:block;margin-bottom:4px;">Best Bait</span>${pills(bestBait)}</div>` : ""}
      ${fishingMethods.length > 0 ? `<div style="margin:6px 0;"><span class="naturefyi-kv-label" style="display:block;margin-bottom:4px;">Fishing Methods</span>${pills(fishingMethods)}</div>` : ""}
    `;
  } else {
    const tankSize = data.min_tank_liters != null ? `${Number(data.min_tank_liters)} L` : "";
    const tempRange = esc(String((_j = data.temperature_range) != null ? _j : ""));
    const phRange = esc(String((_k = data.ph_range) != null ? _k : ""));
    const careLevel = String((_l = data.care_level) != null ? _l : "");
    const temperament = esc(String((_m = data.temperament) != null ? _m : ""));
    modeHtml = `
      ${tankSize ? statsRow("Min Tank Size", tankSize) : ""}
      ${tempRange ? statsRow("Temperature", tempRange) : ""}
      ${phRange ? statsRow("pH Range", phRange) : ""}
      ${careLevel ? `<div class="naturefyi-kv-row"><span class="naturefyi-kv-label">Care Level</span><span class="naturefyi-kv-value">${badge(esc(careLevel), careLevelColor(careLevel))}</span></div>` : ""}
      ${temperament ? statsRow("Temperament", temperament) : ""}
    `;
  }
  return `
    <div class="naturefyi-fish-card">
      <div class="naturefyi-card-header" style="border-left:3px solid ${config.accent};padding-left:10px;margin-bottom:8px;">
        <div style="font-size:1rem;font-weight:600;">${name}</div>
        ${scientificName ? `<div style="font-size:0.85rem;color:#64748b;font-style:italic;">${scientificName}</div>` : ""}
      </div>

      <div class="naturefyi-badges" style="margin:8px 0;display:flex;flex-wrap:wrap;gap:4px;">
        ${waterBadge}
        ${iucnBadge}
        ${mercury ? badge(`Mercury: ${mercury}`, "#78716c") : ""}
      </div>

      ${modeHtml}

      <div class="naturefyi-actions" style="margin-top:8px;">
        ${viewLink(entityUrl, `View on ${config.name}`, config)}
      </div>
    </div>
    ${poweredByHTML(config)}
  `;
}

// src/compute/hardiness.ts
var HARDINESS_ZONES = [
  { zone: 1, color: "#6366f1", minF: -60, maxF: -50, tempRange: "-60 to -50 \xB0F" },
  { zone: 2, color: "#818cf8", minF: -50, maxF: -40, tempRange: "-50 to -40 \xB0F" },
  { zone: 3, color: "#60a5fa", minF: -40, maxF: -30, tempRange: "-40 to -30 \xB0F" },
  { zone: 4, color: "#38bdf8", minF: -30, maxF: -20, tempRange: "-30 to -20 \xB0F" },
  { zone: 5, color: "#34d399", minF: -20, maxF: -10, tempRange: "-20 to -10 \xB0F" },
  { zone: 6, color: "#4ade80", minF: -10, maxF: 0, tempRange: "-10 to 0 \xB0F" },
  { zone: 7, color: "#a3e635", minF: 0, maxF: 10, tempRange: "0 to 10 \xB0F" },
  { zone: 8, color: "#facc15", minF: 10, maxF: 20, tempRange: "10 to 20 \xB0F" },
  { zone: 9, color: "#fb923c", minF: 20, maxF: 30, tempRange: "20 to 30 \xB0F" },
  { zone: 10, color: "#f97316", minF: 30, maxF: 40, tempRange: "30 to 40 \xB0F" },
  { zone: 11, color: "#ef4444", minF: 40, maxF: 50, tempRange: "40 to 50 \xB0F" },
  { zone: 12, color: "#dc2626", minF: 50, maxF: 60, tempRange: "50 to 60 \xB0F" },
  { zone: 13, color: "#b91c1c", minF: 60, maxF: 70, tempRange: "60 to 70 \xB0F" }
];
var ZONE_MAP = new Map(
  HARDINESS_ZONES.map((z) => [z.zone, z])
);
function parseZone(raw) {
  if (typeof raw === "number") return Number.isInteger(raw) ? raw : Math.floor(raw);
  const s = String(raw).trim().toLowerCase();
  const stripped = s.replace(/[ab]$/, "");
  const rangePart = stripped.split("-")[0];
  const n = parseInt(rangePart, 10);
  return isNaN(n) ? null : n;
}
function zoneToColor(zone) {
  var _a, _b;
  const n = parseZone(zone);
  if (n === null) return "#94a3b8";
  return (_b = (_a = ZONE_MAP.get(n)) == null ? void 0 : _a.color) != null ? _b : "#94a3b8";
}
function zoneToTemp(zone) {
  const n = parseZone(zone);
  if (n === null) return null;
  const entry = ZONE_MAP.get(n);
  if (!entry) return null;
  return { minF: entry.minF, maxF: entry.maxF, tempRange: entry.tempRange };
}

// src/compute/bloom.ts
var MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var MONTH_NAMES_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
function monthsToCalendar(activeMonths) {
  const activeSet = new Set(activeMonths);
  return MONTH_NAMES.map((name, i) => {
    const month = i + 1;
    return {
      month,
      name,
      short: MONTH_NAMES_SHORT[i],
      active: activeSet.has(month)
    };
  });
}

// src/cards/plant-card.ts
function sunIcon(requirement) {
  const r = (requirement || "").toLowerCase();
  if (r.includes("full")) return '<span title="Full Sun">\u2600\uFE0F</span>';
  if (r.includes("partial") || r.includes("part")) return '<span title="Partial Sun">\u{1F324}\uFE0F</span>';
  if (r.includes("shade") || r.includes("low")) return '<span title="Shade">\u{1F311}</span>';
  return "";
}
function waterIcon(requirement) {
  const r = (requirement || "").toLowerCase();
  if (r.includes("high") || r.includes("moist")) return '<span title="High Water">\u{1F4A7}\u{1F4A7}\u{1F4A7}</span>';
  if (r.includes("moderate") || r.includes("medium")) return '<span title="Moderate Water">\u{1F4A7}\u{1F4A7}</span>';
  if (r.includes("low") || r.includes("drought")) return '<span title="Low Water">\u{1F4A7}</span>';
  return '<span title="Water">\u{1F4A7}</span>';
}
function renderBloomDots(months, accent) {
  const calendar = monthsToCalendar(months);
  const dots = calendar.map((m) => {
    const bg = m.active ? accent : "#e2e8f0";
    const textColor = m.active ? "#fff" : "#94a3b8";
    return `<span title="${esc(m.name)}" style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:${bg};color:${textColor};font-size:0.6rem;font-weight:600;">${esc(m.short.charAt(0))}</span>`;
  }).join("");
  return `<div style="display:flex;gap:2px;flex-wrap:wrap;">${dots}</div>`;
}
function renderPlantCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const scientificName = esc(String((_a = data.scientific_name) != null ? _a : ""));
  const commonName = esc(String((_c = (_b = data.common_name) != null ? _b : data.name) != null ? _c : ""));
  const slug = String((_d = data.slug) != null ? _d : "");
  const entityUrl = typeof data.url === "string" && data.url ? data.url.startsWith("http") ? data.url : `https://${config.domain}${data.url}` : `https://${config.domain}/plant/${esc(slug)}/`;
  const growthForm = esc(String((_e = data.growth_form) != null ? _e : ""));
  const hardinessZone = String((_f = data.hardiness_zone) != null ? _f : "");
  const zoneColor = hardinessZone ? zoneToColor(hardinessZone) : "";
  const zoneTemp = hardinessZone ? zoneToTemp(hardinessZone) : null;
  const sunReq = String((_g = data.sun_requirement) != null ? _g : "");
  const waterReq = String((_h = data.water_requirement) != null ? _h : "");
  const bloomSeason = data.bloom_season;
  const bloomMonths = Array.isArray(data.bloom_months) ? data.bloom_months : typeof bloomSeason === "string" && bloomSeason ? [] : [];
  const flowerColor = esc(String((_i = data.flower_color) != null ? _i : ""));
  const maxHeight = data.max_height_m != null ? Number(data.max_height_m) : null;
  const maxSpread = data.max_spread_m != null ? Number(data.max_spread_m) : null;
  const edibility = esc(String((_j = data.edibility) != null ? _j : ""));
  const medicinal = esc(String((_k = data.medicinal_uses) != null ? _k : ""));
  return `
    <div class="naturefyi-plant-card">
      <div class="naturefyi-card-header" style="border-left:3px solid ${config.accent};padding-left:10px;margin-bottom:8px;">
        ${scientificName ? `<div style="font-size:1rem;font-weight:600;font-style:italic;">${scientificName}</div>` : ""}
        ${commonName ? `<div style="font-size:0.85rem;color:#64748b;">${commonName}</div>` : ""}
      </div>

      <div class="naturefyi-badges" style="margin:8px 0;display:flex;flex-wrap:wrap;gap:4px;">
        ${growthForm ? badge(growthForm, "#6b7280") : ""}
        ${hardinessZone ? `<span class="naturefyi-badge" style="background:${zoneColor};color:#fff" title="${zoneTemp ? esc(zoneTemp.tempRange) : ""}">Zone ${esc(hardinessZone)}</span>` : ""}
      </div>

      <div style="margin:6px 0;display:flex;gap:12px;align-items:center;font-size:0.85rem;">
        ${sunReq ? `<span>${sunIcon(sunReq)} ${esc(sunReq)}</span>` : ""}
        ${waterReq ? `<span>${waterIcon(waterReq)} ${esc(waterReq)}</span>` : ""}
      </div>

      ${bloomMonths.length > 0 ? `<div style="margin:8px 0;">
            <span class="naturefyi-kv-label" style="display:block;margin-bottom:4px;">Bloom Season</span>
            ${renderBloomDots(bloomMonths, config.accent)}
          </div>` : typeof bloomSeason === "string" && bloomSeason ? statsRow("Bloom Season", bloomSeason) : ""}

      ${flowerColor ? `<div class="naturefyi-kv-row">
            <span class="naturefyi-kv-label">Flower Color</span>
            <span class="naturefyi-kv-value">
              <span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${esc(flowerColor)};border:1px solid rgba(0,0,0,0.15);vertical-align:middle;margin-right:4px;"></span>
              ${flowerColor}
            </span>
          </div>` : ""}

      ${maxHeight != null || maxSpread != null ? statsRow("Size", `${maxHeight != null ? maxHeight + " m tall" : ""}${maxHeight != null && maxSpread != null ? " \xD7 " : ""}${maxSpread != null ? maxSpread + " m spread" : ""}`) : ""}

      ${edibility ? statsRow("Edibility", edibility) : ""}
      ${medicinal ? statsRow("Medicinal Uses", medicinal) : ""}

      <div class="naturefyi-actions" style="margin-top:8px;">
        ${viewLink(entityUrl, `View on ${config.name}`, config)}
      </div>
    </div>
    ${poweredByHTML(config)}
  `;
}

// src/compute/period.ts
var PERIODS = [
  { name: "Triassic", start: 252, end: 201, color: "#ef4444", era: "Mesozoic" },
  { name: "Jurassic", start: 201, end: 145, color: "#3b82f6", era: "Mesozoic" },
  { name: "Cretaceous", start: 145, end: 66, color: "#22c55e", era: "Mesozoic" }
];
var MESOZOIC_START = 252;
var MESOZOIC_END = 66;
var MESOZOIC_SPAN = MESOZOIC_START - MESOZOIC_END;
function periodToColor(periodName) {
  var _a;
  const match = PERIODS.find(
    (p) => p.name.toLowerCase() === periodName.toLowerCase()
  );
  return (_a = match == null ? void 0 : match.color) != null ? _a : "#94a3b8";
}
function periodPosition(ageMa) {
  const clamped = Math.min(MESOZOIC_START, Math.max(MESOZOIC_END, ageMa));
  return (MESOZOIC_START - clamped) / MESOZOIC_SPAN;
}
function geologicalTimeline() {
  return PERIODS.map((p) => ({
    ...p,
    posStart: periodPosition(p.start),
    posEnd: periodPosition(p.end)
  }));
}

// src/cards/dino-card.ts
function dietBadge(diet) {
  const d = (diet || "").toLowerCase();
  if (d.includes("herbi")) return `<span class="naturefyi-badge" style="background:#22c55e;color:#fff">\u{1F33F} Herbivore</span>`;
  if (d.includes("carni")) return `<span class="naturefyi-badge" style="background:#ef4444;color:#fff">\u{1F9B7} Carnivore</span>`;
  if (d.includes("omni")) return `<span class="naturefyi-badge" style="background:#f59e0b;color:#fff">\u{1F37D}\uFE0F Omnivore</span>`;
  return diet ? badge(diet, "#6b7280") : "";
}
function renderTimeline(periodName) {
  const timeline = geologicalTimeline();
  const bars = timeline.map((p) => {
    const width = (p.posEnd - p.posStart) * 100;
    const isActive = p.name.toLowerCase() === (periodName || "").toLowerCase();
    const opacity = isActive ? "1" : "0.4";
    return `<div style="width:${width}%;height:12px;background:${p.color};opacity:${opacity};position:relative;" title="${p.name} (${p.start}\u2013${p.end} Ma)"></div>`;
  }).join("");
  let markerHtml = "";
  const match = timeline.find((p) => p.name.toLowerCase() === (periodName || "").toLowerCase());
  if (match) {
    const pos = (match.posStart + match.posEnd) / 2 * 100;
    markerHtml = `<div style="position:absolute;left:${pos}%;top:-3px;width:8px;height:8px;border-radius:50%;background:#1e293b;border:2px solid #fff;transform:translateX(-50%);box-shadow:0 1px 3px rgba(0,0,0,0.3);"></div>`;
  }
  const labels = timeline.map((p) => {
    const width = (p.posEnd - p.posStart) * 100;
    return `<span style="width:${width}%;text-align:center;font-size:0.6rem;color:#64748b;">${p.name}<br>${p.start}\u2013${p.end} Ma</span>`;
  }).join("");
  return `
    <div style="margin:8px 0;">
      <div style="display:flex;border-radius:4px;overflow:hidden;position:relative;">
        ${bars}
        ${markerHtml}
      </div>
      <div style="display:flex;margin-top:2px;">${labels}</div>
    </div>
  `;
}
function renderDinoCard(data, config) {
  var _a, _b, _c, _d, _e, _f;
  const name = esc(String((_a = data.name) != null ? _a : ""));
  const slug = String((_b = data.slug) != null ? _b : "");
  const entityUrl = typeof data.url === "string" && data.url ? data.url.startsWith("http") ? data.url : `https://${config.domain}${data.url}` : `https://${config.domain}/dinosaur/${esc(slug)}/`;
  const period = String((_c = data.period) != null ? _c : "");
  const periodColor = period ? periodToColor(period.split(" ")[0]) : "#94a3b8";
  const diet = String((_d = data.diet) != null ? _d : "");
  const lengthM = data.length_m != null ? formatNumber(Number(data.length_m), "m") : "";
  const weightKg = data.weight_kg != null ? formatNumber(Number(data.weight_kg), "kg") : "";
  const heightM = data.height_m != null ? formatNumber(Number(data.height_m), "m") : "";
  const discoveryYear = data.discovery_year != null ? String(data.discovery_year) : "";
  const discoveryLocation = esc(String((_e = data.discovery_location) != null ? _e : ""));
  const namedBy = esc(String((_f = data.named_by) != null ? _f : ""));
  return `
    <div class="naturefyi-dino-card">
      <div class="naturefyi-card-header" style="border-left:3px solid ${config.accent};padding-left:10px;margin-bottom:8px;">
        <div style="font-size:1rem;font-weight:600;">${name}</div>
      </div>

      <div class="naturefyi-badges" style="margin:8px 0;display:flex;flex-wrap:wrap;gap:4px;">
        ${period ? `<span class="naturefyi-badge" style="background:${periodColor};color:#fff">${esc(period)}</span>` : ""}
        ${dietBadge(diet)}
      </div>

      ${lengthM ? statsRow("Length", lengthM) : ""}
      ${weightKg ? statsRow("Weight", weightKg) : ""}
      ${heightM ? statsRow("Height", heightM) : ""}

      ${period ? renderTimeline(period.split(" ")[0]) : ""}

      ${discoveryYear ? statsRow("Discovered", discoveryYear) : ""}
      ${discoveryLocation ? statsRow("Location", discoveryLocation) : ""}
      ${namedBy ? statsRow("Named by", namedBy) : ""}

      <div class="naturefyi-actions" style="margin-top:8px;">
        ${viewLink(entityUrl, `View on ${config.name}`, config)}
      </div>
    </div>
    ${poweredByHTML(config)}
  `;
}

// src/widgets/entity.ts
function escapeHTML(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function initEntityWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "naturefyi-entity-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "naturefyi-entity-widget");
  renderLoading(container);
  fetchAPI(config.apiBase, `${config.entitySlug}/${slug}/`).then((data) => {
    var _a2;
    let html;
    switch (config.site) {
      case "speciesfyi":
        html = renderSpeciesCard(data, config);
        break;
      case "birdfyi":
        html = renderBirdCard(data, config);
        break;
      case "fishfyi":
        html = renderFishCard(data, config);
        break;
      case "plantfyi":
        html = renderPlantCard(data, config);
        break;
      case "dinofyi":
        html = renderDinoCard(data, config);
        break;
      default:
        {
          const name = String((_a2 = data.name) != null ? _a2 : slug);
          const entityUrl = typeof data.url === "string" && data.url ? data.url.startsWith("http") ? data.url : `https://${config.domain}${data.url}` : `https://${config.domain}/${config.entitySlug}/${escapeHTML(slug)}/`;
          html = `
              <div class="naturefyi-entity-fallback">
                <div style="font-size:1rem;font-weight:600;margin-bottom:8px;">${escapeHTML(name)}</div>
                <a href="${escapeHTML(entityUrl)}" target="_blank" rel="noopener"
                   class="naturefyi-view-link" style="color:${config.accent}">
                  View on ${escapeHTML(config.name)} \u2197
                </a>
              </div>
            `;
        }
        break;
    }
    container.innerHTML = html;
  }).catch(() => {
    renderError(container, `${escapeHTML(config.entityName.slice(0, -1))} "${escapeHTML(slug)}" not found.`, config);
  });
}

// src/widgets/compare.ts
function escapeHTML2(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function formatCellValue(val) {
  if (val === null || val === void 0 || val === "") return "\u2014";
  return escapeHTML2(String(val));
}
var SITES_WITH_COMPARISONS = /* @__PURE__ */ new Set(["speciesfyi", "birdfyi", "plantfyi", "dinofyi"]);
function initCompareWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "naturefyi-compare-widget");
  if (!SITES_WITH_COMPARISONS.has(config.site)) {
    const siteUrl = `https://${config.domain}`;
    container.innerHTML = `
      <div class="naturefyi-compare-unavailable" style="padding:12px;text-align:center;">
        <div style="font-size:0.9rem;color:#64748b;margin-bottom:8px;">
          Comparison not available for fish. Try the compatibility checker at ${escapeHTML2(config.domain)}
        </div>
        <a class="naturefyi-view-link" href="${escapeHTML2(siteUrl)}" target="_blank" rel="noopener"
           style="color:${config.accent}">
          View on ${escapeHTML2(config.name)} ${externalLinkIcon}
        </a>
      </div>
      ${poweredByHTML(config)}
    `;
    return;
  }
  if (!slug) {
    container.innerHTML = `
      <div class="naturefyi-error">
        <p>Missing data-slug attribute.</p>
        <a href="https://${config.domain}" target="_blank" rel="noopener">Visit ${escapeHTML2(config.name)}</a>
      </div>
    `;
    return;
  }
  renderLoading(container);
  fetchAPI(config.apiBase, `comparisons/${slug}/`).then((data) => {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    const nameA = (_c = (_b = (_a2 = data.entity_a) == null ? void 0 : _a2.name) != null ? _b : data.name_a) != null ? _c : "Item A";
    const nameB = (_f = (_e = (_d = data.entity_b) == null ? void 0 : _d.name) != null ? _e : data.name_b) != null ? _f : "Item B";
    const title = (_g = data.title) != null ? _g : `${nameA} vs ${nameB}`;
    const rows = (_h = data.rows) != null ? _h : [];
    const keyDiffs = (_i = data.key_differences) != null ? _i : [];
    const summary = (_j = data.summary) != null ? _j : "";
    const compareUrl = data.url ? data.url.startsWith("http") ? data.url : `https://${config.domain}${data.url}` : `https://${config.domain}/compare/${escapeHTML2(slug)}/`;
    const urlA = ((_k = data.entity_a) == null ? void 0 : _k.url) ? data.entity_a.url.startsWith("http") ? data.entity_a.url : `https://${config.domain}${data.entity_a.url}` : ((_l = data.entity_a) == null ? void 0 : _l.slug) ? `https://${config.domain}/${config.entitySlug}/${escapeHTML2(data.entity_a.slug)}/` : `https://${config.domain}`;
    const urlB = ((_m = data.entity_b) == null ? void 0 : _m.url) ? data.entity_b.url.startsWith("http") ? data.entity_b.url : `https://${config.domain}${data.entity_b.url}` : ((_n = data.entity_b) == null ? void 0 : _n.slug) ? `https://${config.domain}/${config.entitySlug}/${escapeHTML2(data.entity_b.slug)}/` : `https://${config.domain}`;
    container.innerHTML = `
        <div class="naturefyi-compare-card">
          <div class="naturefyi-compare-title" style="font-size:1rem;font-weight:600;margin-bottom:10px;">
            ${escapeHTML2(title)}
          </div>

          ${summary ? `<div class="naturefyi-compare-summary" style="font-size:0.85rem;color:#475569;margin-bottom:10px;line-height:1.4;">
                 ${escapeHTML2(summary)}
               </div>` : ""}

          <div class="naturefyi-compare-scroll" style="overflow-x:auto;">
            <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
              <thead>
                <tr>
                  <th style="text-align:left;padding:6px 8px;border-bottom:2px solid ${config.accent};color:#64748b;font-weight:600;width:35%;">Property</th>
                  <th style="text-align:left;padding:6px 8px;border-bottom:2px solid ${config.accent};font-weight:600;width:32.5%;">
                    <a href="${escapeHTML2(urlA)}" target="_blank" rel="noopener"
                       style="color:${config.accent};text-decoration:none;">${escapeHTML2(nameA)} \u2197</a>
                  </th>
                  <th style="text-align:left;padding:6px 8px;border-bottom:2px solid ${config.accent};font-weight:600;width:32.5%;">
                    <a href="${escapeHTML2(urlB)}" target="_blank" rel="noopener"
                       style="color:${config.accent};text-decoration:none;">${escapeHTML2(nameB)} \u2197</a>
                  </th>
                </tr>
              </thead>
              <tbody>
                ${rows.map(
      (row, i) => `
                  <tr style="background:${i % 2 === 0 ? "transparent" : "#f8fafc"};">
                    <td style="padding:5px 8px;color:#64748b;font-weight:500;">${escapeHTML2(row.label)}</td>
                    <td style="padding:5px 8px;">${formatCellValue(row.value_a)}</td>
                    <td style="padding:5px 8px;">${formatCellValue(row.value_b)}</td>
                  </tr>`
    ).join("")}
              </tbody>
            </table>
          </div>

          ${keyDiffs.length > 0 ? `<div class="naturefyi-key-diffs" style="margin-top:10px;padding:8px;background:#f0fdf4;border-radius:6px;border-left:3px solid #10b981;">
                 <div style="font-size:0.75rem;font-weight:600;color:#059669;margin-bottom:4px;text-transform:uppercase;letter-spacing:0.05em;">Key Differences</div>
                 <ul style="margin:0;padding-left:16px;font-size:0.8rem;color:#374151;">
                   ${keyDiffs.map((d) => `<li style="margin:2px 0;">${escapeHTML2(d)}</li>`).join("")}
                 </ul>
               </div>` : ""}

          <div class="naturefyi-actions" style="margin-top:10px;">
            <a class="naturefyi-view-link" href="${escapeHTML2(compareUrl)}" target="_blank" rel="noopener"
               style="color:${config.accent}">
              Full comparison on ${escapeHTML2(config.name)} ${externalLinkIcon}
            </a>
          </div>
        </div>
        ${poweredByHTML(config)}
      `;
  }).catch(() => {
    const siteUrl = `https://${config.domain}`;
    container.innerHTML = `
        <div class="naturefyi-compare-unavailable" style="padding:12px;text-align:center;">
          <div style="font-size:0.9rem;color:#64748b;margin-bottom:8px;">
            Comparison not available via API. View on ${escapeHTML2(config.name)}.
          </div>
          <a class="naturefyi-view-link" href="${escapeHTML2(siteUrl)}" target="_blank" rel="noopener"
             style="color:${config.accent}">
            Visit ${escapeHTML2(config.name)} ${externalLinkIcon}
          </a>
        </div>
        ${poweredByHTML(config)}
      `;
  });
}

// src/rich-snippets.ts
function injectDefinedTerm(data, domain, siteName) {
  if (document.querySelector('script[data-naturefyi-snippet="term"]')) return;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: data.name,
    description: data.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: `${siteName} Glossary`,
      url: `https://${domain}/glossary/`
    }
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-naturefyi-snippet", "term");
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}
function injectArticle(data, domain, siteName) {
  if (document.querySelector('script[data-naturefyi-snippet="article"]')) return;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.name,
    description: data.description,
    url: data.url || `https://${domain}/`,
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: `https://${domain}/`
    }
  };
  if (data.datePublished) {
    jsonLd["datePublished"] = data.datePublished;
  }
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-naturefyi-snippet", "article");
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

// src/widgets/glossary.ts
function escapeHTML3(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function renderGlossary(container, data, config) {
  var _a, _b, _c, _d, _e, _f;
  const name = (_b = (_a = data.name) != null ? _a : data.term) != null ? _b : data.slug;
  const categoryLabel = (_d = (_c = data.category_name) != null ? _c : data.category) != null ? _d : "";
  const extended = (_f = (_e = data.extended_definition) != null ? _e : data.extended_description) != null ? _f : "";
  const termUrl = `https://${config.domain}/glossary/${escapeHTML3(data.slug)}/`;
  const glossaryUrl = `https://${config.domain}/glossary/`;
  const relatedPills = data.related_terms && data.related_terms.length > 0 ? data.related_terms.map(
    (rt) => `<a class="naturefyi-pill naturefyi-pill--link"
                  href="https://${config.domain}/glossary/${escapeHTML3(rt.slug)}/"
                  target="_blank" rel="noopener">${escapeHTML3(rt.name)}</a>`
  ).join("") : "";
  container.innerHTML = `
    <div class="naturefyi-glossary-card">
      <div class="naturefyi-glossary-header">
        <div style="font-size:1rem;font-weight:600;">${escapeHTML3(name)}</div>
        ${categoryLabel ? `<span class="naturefyi-badge" style="background:${config.accent};color:#fff;margin-top:4px;display:inline-block;">
               ${escapeHTML3(categoryLabel)}
             </span>` : ""}
      </div>

      <div class="naturefyi-glossary-definition" style="margin:10px 0;font-size:0.9rem;line-height:1.5;">
        ${escapeHTML3(data.definition)}
      </div>

      ${extended ? `<div class="naturefyi-glossary-extended" style="margin-bottom:8px;font-size:0.85rem;color:#64748b;line-height:1.5;">
             ${escapeHTML3(extended)}
           </div>` : ""}

      ${relatedPills ? `<div class="naturefyi-pills" style="margin:8px 0;">
             ${relatedPills}
           </div>` : ""}

      <div class="naturefyi-actions" style="margin-top:10px;display:flex;flex-wrap:wrap;gap:8px;">
        <a class="naturefyi-view-link" href="${termUrl}" target="_blank" rel="noopener"
           style="color:${config.accent}">
          ${escapeHTML3(name)} ${externalLinkIcon}
        </a>
        <a class="naturefyi-view-link" href="${glossaryUrl}" target="_blank" rel="noopener"
           style="color:${config.accent}">
          Full glossary on ${escapeHTML3(config.name)} ${externalLinkIcon}
        </a>
      </div>
    </div>
    ${poweredByHTML(config)}
  `;
}
function initGlossaryWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "naturefyi-glossary-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "naturefyi-glossary-widget");
  renderLoading(container);
  fetchAPI(config.apiBase, `glossary/${slug}/`).then((data) => {
    var _a2, _b;
    renderGlossary(container, data, config);
    if (el.dataset.noSnippet !== "true") {
      const name = (_b = (_a2 = data.name) != null ? _a2 : data.term) != null ? _b : data.slug;
      injectDefinedTerm(
        { name, definition: data.definition },
        config.domain,
        config.name
      );
    }
  }).catch(() => {
    renderError(
      container,
      `Unable to load glossary term "${escapeHTML3(slug)}". Please try again later.`,
      config
    );
  });
}

// src/widgets/guide.ts
function escapeHTML4(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function initGuideWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "naturefyi-guide-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "naturefyi-guide-widget");
  renderLoading(container);
  fetchAPI(config.apiBase, `guides/${slug}/`).then((guide) => {
    var _a2, _b, _c, _d, _e, _f, _g, _h;
    const guideUrl = guide.url ? guide.url.startsWith("http") ? guide.url : `https://${config.domain}${guide.url}` : `https://${config.domain}/guides/${escapeHTML4(guide.slug)}/`;
    const summary = (_d = (_c = (_b = (_a2 = guide.summary) != null ? _a2 : guide.subtitle) != null ? _b : guide.description) != null ? _c : guide.excerpt) != null ? _d : "";
    const readingTime = (_e = guide.reading_time_minutes) != null ? _e : null;
    const seriesName = (_f = guide.series_name) != null ? _f : null;
    const datePublished = (_h = (_g = guide.date_published) != null ? _g : guide.published_at) != null ? _h : null;
    const toc = guide.toc && guide.toc.length > 0 ? guide.toc.slice(0, 5) : null;
    container.innerHTML = `
        <div class="naturefyi-guide-card">
          <div class="naturefyi-guide-badges" style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px;">
            ${seriesName ? `<span class="naturefyi-badge" style="background:${config.accent};color:#fff;">${escapeHTML4(seriesName)}</span>` : ""}
            ${readingTime != null ? `<span class="naturefyi-badge" style="background:#f1f5f9;color:#475569;border:1px solid #e2e8f0;">
                   ${escapeHTML4(String(readingTime))} min read
                 </span>` : ""}
          </div>

          <div class="naturefyi-guide-title" style="font-size:1rem;font-weight:600;margin-bottom:8px;">
            ${escapeHTML4(guide.title)}
          </div>

          ${summary ? `<div class="naturefyi-guide-summary" style="font-size:0.875rem;color:#475569;line-height:1.5;margin-bottom:8px;">
                 ${escapeHTML4(summary)}
               </div>` : ""}

          ${toc ? `<div class="naturefyi-guide-toc" style="margin:8px 0;padding:8px;background:#f8fafc;border-radius:6px;border-left:3px solid ${config.accent};">
                 <div style="font-size:0.75rem;font-weight:600;color:#64748b;margin-bottom:4px;text-transform:uppercase;letter-spacing:0.05em;">Contents</div>
                 <ol style="margin:0;padding-left:16px;font-size:0.8rem;color:#475569;">
                   ${toc.map(
      (entry) => `<li style="margin:2px 0;">${escapeHTML4(entry.title)}</li>`
    ).join("")}
                 </ol>
               </div>` : ""}

          <div class="naturefyi-actions" style="margin-top:10px;">
            <a class="naturefyi-view-link" href="${escapeHTML4(guideUrl)}" target="_blank" rel="noopener"
               style="color:${config.accent}">
              Read guide on ${escapeHTML4(config.name)} ${externalLinkIcon}
            </a>
          </div>
        </div>
        ${poweredByHTML(config)}
      `;
    if (el.dataset.noSnippet !== "true") {
      injectArticle(
        {
          name: guide.title,
          description: summary,
          url: guideUrl,
          ...datePublished ? { datePublished } : {}
        },
        config.domain,
        config.name
      );
    }
  }).catch(() => {
    renderError(container, `Guide "${escapeHTML4(slug)}" not found.`, config);
  });
}

// src/widgets/search.ts
function escapeHTML5(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var TYPE_LABELS = {
  species: "Species",
  bird: "Bird",
  fish: "Fish",
  plant: "Plant",
  dinosaur: "Dinosaur",
  glossary: "Glossary",
  guide: "Guide",
  faq: "FAQ"
};
var SEARCH_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
function initSearchWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const placeholder = (_a = dataset.placeholder) != null ? _a : `Search ${config.entityName}...`;
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "naturefyi-search-widget");
  let isOpen = false;
  let query = "";
  let results = [];
  let selectedIndex = -1;
  let debounceTimer = null;
  container.innerHTML = `
    <div class="naturefyi-search-wrap">
      <div class="naturefyi-search-form" style="position:relative;display:flex;align-items:center;">
        <span class="naturefyi-search-icon" aria-hidden="true"
              style="position:absolute;left:10px;color:#94a3b8;pointer-events:none;">${SEARCH_ICON}</span>
        <input
          class="naturefyi-search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="${escapeHTML5(placeholder)}"
          aria-label="Search ${escapeHTML5(config.name)}"
          aria-autocomplete="list"
          aria-expanded="false"
          role="combobox"
          style="width:100%;padding:8px 10px 8px 32px;border:1px solid #e2e8f0;border-radius:6px;font-size:0.875rem;outline:none;background:#fff;color:#1e293b;box-sizing:border-box;"
        >
      </div>
      <div class="naturefyi-search-dropdown" role="listbox" hidden
           style="margin-top:4px;border:1px solid #e2e8f0;border-radius:6px;background:#fff;box-shadow:0 4px 16px rgba(0,0,0,0.1);max-height:280px;overflow-y:auto;"></div>
    </div>
    ${poweredByHTML(config)}
  `;
  const input = container.querySelector(".naturefyi-search-input");
  const dropdown = container.querySelector(".naturefyi-search-dropdown");
  function getAllItems() {
    return Array.from(dropdown.querySelectorAll(".naturefyi-search-result-item"));
  }
  function setSelectedIndex(idx) {
    const items = getAllItems();
    items.forEach((item, i) => {
      const anchor = item;
      if (i === idx) {
        anchor.style.background = `${config.accent}15`;
        anchor.style.outline = `2px solid ${config.accent}`;
        anchor.style.outlineOffset = "-2px";
      } else {
        anchor.style.background = "";
        anchor.style.outline = "";
      }
    });
    selectedIndex = idx;
  }
  function openDropdown() {
    isOpen = true;
    dropdown.hidden = false;
    input.setAttribute("aria-expanded", "true");
  }
  function closeDropdown() {
    isOpen = false;
    dropdown.hidden = true;
    input.setAttribute("aria-expanded", "false");
    selectedIndex = -1;
  }
  function renderDropdown() {
    var _a2, _b, _c, _d;
    if (results.length === 0) {
      dropdown.innerHTML = `
        <div style="padding:12px 14px;font-size:0.85rem;color:#64748b;">
          No results for <strong>${escapeHTML5(query)}</strong>
        </div>
      `;
      return;
    }
    let html = "";
    for (const item of results) {
      const typeLabel = item.type ? (_a2 = TYPE_LABELS[item.type]) != null ? _a2 : item.type : null;
      const desc = (_d = (_c = (_b = item.description) != null ? _b : item.excerpt) != null ? _c : item.subtitle) != null ? _d : "";
      const href = item.url ? item.url.startsWith("http") ? item.url : `https://${config.domain}${item.url}` : `https://${config.domain}/${config.entitySlug}/${escapeHTML5(item.slug)}/`;
      html += `
        <a
          class="naturefyi-search-result-item"
          href="${escapeHTML5(href)}"
          target="_blank"
          rel="noopener"
          role="option"
          tabindex="-1"
          style="display:block;padding:8px 14px;text-decoration:none;color:inherit;border-bottom:1px solid #f1f5f9;transition:background 0.1s;"
        >
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
            <span style="font-size:0.875rem;font-weight:500;color:#1e293b;">${escapeHTML5(item.name)}</span>
            ${typeLabel ? `<span style="font-size:0.7rem;padding:1px 6px;border-radius:10px;background:${config.accent}20;color:${config.accent};white-space:nowrap;flex-shrink:0;font-weight:500;">${escapeHTML5(typeLabel)}</span>` : ""}
          </div>
          ${desc ? `<div style="font-size:0.75rem;color:#64748b;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escapeHTML5(desc)}</div>` : ""}
        </a>
      `;
    }
    dropdown.innerHTML = html;
  }
  async function doSearch(q) {
    var _a2;
    if (!q.trim()) {
      closeDropdown();
      return;
    }
    const searchUrl = `https://${config.domain}/api/v1/search/?q=${encodeURIComponent(q)}&limit=10`;
    try {
      const response = await fetch(searchUrl, {
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error(`Search failed: ${response.status}`);
      const data = await response.json();
      results = (_a2 = data.results) != null ? _a2 : [];
    } catch (e) {
      results = [];
    }
    renderDropdown();
    openDropdown();
    setSelectedIndex(-1);
  }
  input.addEventListener("input", () => {
    query = input.value;
    if (debounceTimer !== null) {
      clearTimeout(debounceTimer);
    }
    if (!query.trim()) {
      closeDropdown();
      return;
    }
    debounceTimer = setTimeout(() => {
      void doSearch(query);
    }, 300);
  });
  input.addEventListener("keydown", (e) => {
    if (!isOpen) return;
    const items = getAllItems();
    const total = items.length;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(selectedIndex < total - 1 ? selectedIndex + 1 : 0);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : total - 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && items[selectedIndex]) {
        items[selectedIndex].click();
      } else {
        const siteSearchUrl = `https://${config.domain}${config.searchPath}?q=${encodeURIComponent(query)}`;
        window.open(siteSearchUrl, "_blank", "noopener");
      }
    } else if (e.key === "Escape") {
      closeDropdown();
      input.blur();
    }
  });
  document.addEventListener("click", (e) => {
    if (!isOpen) return;
    if (!el.contains(e.target)) {
      closeDropdown();
    }
  });
  input.addEventListener("focus", () => {
    input.style.borderColor = config.accent;
    input.style.boxShadow = `0 0 0 2px ${config.accent}30`;
  });
  input.addEventListener("blur", () => {
    input.style.borderColor = "#e2e8f0";
    input.style.boxShadow = "";
  });
}

// src/tools/iucn-badge.ts
function escapeHTML6(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function renderBadge(status, showLabel, config) {
  const colors = statusToColor(status);
  const label = statusToLabel(status);
  const code = status.toUpperCase();
  return `
    <div class="naturefyi-iucn-badge" style="display:inline-flex;align-items:center;gap:6px;">
      <span style="display:inline-flex;align-items:center;justify-content:center;padding:2px 8px;border-radius:4px;background:${colors.bg};color:${colors.text};font-size:0.8rem;font-weight:700;letter-spacing:0.05em;">
        ${escapeHTML6(code)}
      </span>
      ${showLabel ? `<span style="font-size:0.85rem;color:#374151;">${escapeHTML6(label)}</span>` : ""}
    </div>
    ${poweredByHTML(config)}
  `;
}
function initIUCNBadge(el, config) {
  var _a, _b;
  const dataset = el.dataset;
  const status = (_a = dataset.status) != null ? _a : "";
  const slug = (_b = dataset.slug) != null ? _b : "";
  const showLabel = dataset.showLabel !== "false";
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "naturefyi-iucn-badge-widget");
  if (status) {
    container.innerHTML = renderBadge(status, showLabel, config);
    return;
  }
  if (slug) {
    renderLoading(container);
    fetchAPI(config.apiBase, `${config.entitySlug}/${slug}/`).then((data) => {
      var _a2, _b2;
      const fetchedStatus = String((_b2 = (_a2 = data.conservation_status) != null ? _a2 : data.iucn_status) != null ? _b2 : "NE");
      container.innerHTML = renderBadge(fetchedStatus, showLabel, config);
    }).catch(() => {
      renderError(container, `Could not load status for "${escapeHTML6(slug)}".`, config);
    });
    return;
  }
  renderError(container, "Missing data-status or data-slug attribute.", config);
}

// src/tools/period-timeline.ts
function escapeHTML7(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function initPeriodTimeline(el, config) {
  var _a;
  const dataset = el.dataset;
  const periodName = (_a = dataset.period) != null ? _a : "";
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "naturefyi-period-timeline-widget");
  const timeline = geologicalTimeline();
  const bars = timeline.map((p) => {
    const width = (p.posEnd - p.posStart) * 100;
    const isActive = p.name.toLowerCase() === periodName.toLowerCase();
    const opacity = isActive ? "1" : "0.4";
    return `<div style="width:${width}%;height:20px;background:${p.color};opacity:${opacity};position:relative;" title="${escapeHTML7(p.name)} (${p.start}\u2013${p.end} Ma)"></div>`;
  }).join("");
  let markerHtml = "";
  const match = timeline.find((p) => p.name.toLowerCase() === periodName.toLowerCase());
  if (match) {
    const pos = (match.posStart + match.posEnd) / 2 * 100;
    markerHtml = `<div style="position:absolute;left:${pos}%;top:50%;width:12px;height:12px;border-radius:50%;background:#1e293b;border:2px solid #fff;transform:translate(-50%,-50%);box-shadow:0 1px 4px rgba(0,0,0,0.3);z-index:1;"></div>`;
  }
  const labels = timeline.map((p) => {
    const width = (p.posEnd - p.posStart) * 100;
    return `<span style="width:${width}%;text-align:center;font-size:0.7rem;color:#64748b;line-height:1.3;">${escapeHTML7(p.name)}<br><span style="font-size:0.6rem;">${p.start}\u2013${p.end} Ma</span></span>`;
  }).join("");
  container.innerHTML = `
    <div class="naturefyi-period-timeline" style="padding:4px 0;">
      <div style="display:flex;border-radius:6px;overflow:hidden;position:relative;">
        ${bars}
        ${markerHtml}
      </div>
      <div style="display:flex;margin-top:4px;">${labels}</div>
    </div>
    ${poweredByHTML(config)}
  `;
}

// src/tools/diet-badge.ts
function escapeHTML8(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
var DIETS = {
  herbivore: { icon: "\u{1F33F}", label: "Herbivore", bg: "#22c55e", text: "#fff" },
  carnivore: { icon: "\u{1F9B7}", label: "Carnivore", bg: "#ef4444", text: "#fff" },
  omnivore: { icon: "\u{1F37D}\uFE0F", label: "Omnivore", bg: "#f59e0b", text: "#fff" }
};
function initDietBadge(el, config) {
  var _a;
  const dataset = el.dataset;
  const diet = ((_a = dataset.diet) != null ? _a : "").toLowerCase().trim();
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "naturefyi-diet-badge-widget");
  if (!diet) {
    renderError(container, "Missing data-diet attribute.", config);
    return;
  }
  const info = DIETS[diet];
  if (!info) {
    renderError(container, `Unknown diet type: "${escapeHTML8(diet)}". Use herbivore, carnivore, or omnivore.`, config);
    return;
  }
  container.innerHTML = `
    <div class="naturefyi-diet-badge" style="display:inline-flex;align-items:center;gap:6px;">
      <span style="display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:6px;background:${info.bg};color:${info.text};font-size:0.85rem;font-weight:600;">
        ${info.icon} ${escapeHTML8(info.label)}
      </span>
    </div>
    ${poweredByHTML(config)}
  `;
}

// src/inline/iucn-inline.ts
function escapeHTML9(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function initIUCNInline(el, config) {
  var _a;
  const dataset = el.dataset;
  const status = ((_a = dataset.status) != null ? _a : "").toUpperCase();
  const shadow = createShadow(el, config);
  const hostStyle = document.createElement("style");
  hostStyle.textContent = `:host { display: inline-flex; vertical-align: baseline; }`;
  shadow.appendChild(hostStyle);
  const wrapper = document.createElement("span");
  if (!status) {
    wrapper.textContent = "[?]";
    shadow.appendChild(wrapper);
    return;
  }
  const colors = statusToColor(status);
  const label = statusToLabel(status);
  wrapper.innerHTML = `<span style="display:inline-flex;align-items:center;gap:3px;padding:1px 6px;border-radius:10px;background:${colors.bg};color:${colors.text};font-size:0.75rem;font-weight:600;line-height:1.4;white-space:nowrap;">[${escapeHTML9(status)}] ${escapeHTML9(label)}</span>`;
  shadow.appendChild(wrapper);
}

// src/inline/period-inline.ts
function escapeHTML10(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function initPeriodInline(el, config) {
  var _a;
  const dataset = el.dataset;
  const period = (_a = dataset.period) != null ? _a : "";
  const shadow = createShadow(el, config);
  const hostStyle = document.createElement("style");
  hostStyle.textContent = `:host { display: inline-flex; vertical-align: baseline; }`;
  shadow.appendChild(hostStyle);
  const wrapper = document.createElement("span");
  if (!period) {
    wrapper.textContent = "[?]";
    shadow.appendChild(wrapper);
    return;
  }
  const color = periodToColor(period);
  wrapper.innerHTML = `<span style="display:inline-flex;align-items:center;padding:1px 6px;border-radius:10px;background:${color};color:#fff;font-size:0.75rem;font-weight:600;line-height:1.4;white-space:nowrap;">${escapeHTML10(period)}</span>`;
  shadow.appendChild(wrapper);
}

// src/inline/taxonomy-inline.ts
function escapeHTML11(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function initTaxonomyInline(el, config) {
  var _a, _b;
  const dataset = el.dataset;
  const name = (_a = dataset.name) != null ? _a : "";
  const author = (_b = dataset.author) != null ? _b : "";
  const isExtinct = dataset.extinct === "true";
  const shadow = createShadow(el, config);
  const hostStyle = document.createElement("style");
  hostStyle.textContent = `:host { display: inline-flex; vertical-align: baseline; }`;
  shadow.appendChild(hostStyle);
  const wrapper = document.createElement("span");
  if (!name) {
    wrapper.textContent = "[?]";
    shadow.appendChild(wrapper);
    return;
  }
  const prefix = isExtinct ? "\u2020" : "";
  const authorSuffix = author ? ` <span style="font-style:normal;font-weight:400;color:#64748b;">${escapeHTML11(author)}</span>` : "";
  wrapper.innerHTML = `<span style="font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:inherit;color:inherit;">${prefix ? `<span style="font-style:normal;">${prefix}</span>\u200A` : ""}${escapeHTML11(name)}</span>${authorSuffix}`;
  shadow.appendChild(wrapper);
}

// src/_entry_dinofyi.ts
function initWidget(el, type, config) {
  const widgetStyle = el.dataset.style || "modern";
  void widgetStyle;
  switch (type) {
    case "entity":
      initEntityWidget(el, config);
      break;
    case "compare":
      initCompareWidget(el, config);
      break;
    case "glossary":
      initGlossaryWidget(el, config);
      break;
    case "guide":
      initGuideWidget(el, config);
      break;
    case "search":
      initSearchWidget(el, config);
      break;
    case "iucn-badge":
      initIUCNBadge(el, config);
      break;
    case "period-timeline":
      initPeriodTimeline(el, config);
      break;
    case "diet-badge":
      initDietBadge(el, config);
      break;
    case "iucn-inline":
      initIUCNInline(el, config);
      break;
    case "period-inline":
      initPeriodInline(el, config);
      break;
    case "taxonomy-inline":
      initTaxonomyInline(el, config);
      break;
    default:
      break;
  }
}
function lazyInit(el, callback) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(el);
          callback();
        }
      });
    }, { rootMargin: "200px" });
    observer.observe(el);
  } else {
    callback();
  }
}
function processElement(el, config) {
  if (el.shadowRoot) return;
  const dataKey = config.attribute.replace("data-", "");
  const camelKey = dataKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const widgetType = el.dataset[camelKey];
  if (!widgetType) return;
  lazyInit(el, () => {
    if (!el.shadowRoot) initWidget(el, widgetType, config);
  });
}
function initAll(config) {
  document.querySelectorAll(`[${config.attribute}]`).forEach((el) => processElement(el, config));
}
(function bootstrap() {
  const config = '{"site":"dinofyi","name":"DinoFYI","domain":"dinofyi.com","accent":"#F97316","attribute":"data-dinofyi","apiBase":"https://dinofyi.com/api/v1/","searchPath":"/search/","entityName":"Dinosaurs","entitySlug":"dinosaurs"}';
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initAll(config));
  } else {
    initAll(config);
  }
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        var _a;
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        const el = node;
        if (el.hasAttribute(config.attribute)) processElement(el, config);
        (_a = el.querySelectorAll) == null ? void 0 : _a.call(el, `[${config.attribute}]`).forEach((child) => processElement(child, config));
      });
    });
  });
  observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
})();
function makeWidgetElement(widgetType, initFn, domainAttrs) {
  const observed = [...domainAttrs, "theme", "style-variant", "size"];
  return class extends HTMLElement {
    static get observedAttributes() {
      return observed;
    }
    connectedCallback() {
      if (this.shadowRoot) return;
      this._syncDataAttrs();
      initFn(this, '{"site":"dinofyi","name":"DinoFYI","domain":"dinofyi.com","accent":"#F97316","attribute":"data-dinofyi","apiBase":"https://dinofyi.com/api/v1/","searchPath":"/search/","entityName":"Dinosaurs","entitySlug":"dinosaurs"}');
    }
    attributeChangedCallback(_name, oldVal, newVal) {
      if (oldVal === newVal || !this.shadowRoot) return;
      const shadow = this.shadowRoot;
      while (shadow.firstChild) shadow.firstChild.remove();
      this._syncDataAttrs();
      initFn(this, '{"site":"dinofyi","name":"DinoFYI","domain":"dinofyi.com","accent":"#F97316","attribute":"data-dinofyi","apiBase":"https://dinofyi.com/api/v1/","searchPath":"/search/","entityName":"Dinosaurs","entitySlug":"dinosaurs"}');
    }
    _syncDataAttrs() {
      const attrKey = '{"site":"dinofyi","name":"DinoFYI","domain":"dinofyi.com","accent":"#F97316","attribute":"data-dinofyi","apiBase":"https://dinofyi.com/api/v1/","searchPath":"/search/","entityName":"Dinosaurs","entitySlug":"dinosaurs"}'.attribute.replace("data-", "");
      this.dataset[attrKey] = widgetType;
      for (const a of domainAttrs) {
        const val = this.getAttribute(a);
        if (val !== null) this.dataset[a] = val;
      }
      const theme = this.getAttribute("theme");
      if (theme !== null) this.dataset.theme = theme;
      const styleVariant = this.getAttribute("style-variant");
      if (styleVariant !== null) this.dataset.style = styleVariant;
      const size = this.getAttribute("size");
      if (size !== null) this.dataset.size = size;
    }
  };
}
(function registerElements() {
  if (typeof customElements === "undefined") return;
  const site = '{"site":"dinofyi","name":"DinoFYI","domain":"dinofyi.com","accent":"#F97316","attribute":"data-dinofyi","apiBase":"https://dinofyi.com/api/v1/","searchPath":"/search/","entityName":"Dinosaurs","entitySlug":"dinosaurs"}'.site;
  const defs = [
    [`${site}-entity`, initEntityWidget, ["slug"]],
    [`${site}-compare`, initCompareWidget, ["slugs"]],
    [`${site}-glossary`, initGlossaryWidget, ["slug", "letter"]],
    [`${site}-guide`, initGuideWidget, ["slug"]],
    [`${site}-search`, initSearchWidget, ["placeholder", "query"]],
    [`${site}-iucn-badge`, initIUCNBadge, ["slug", "value"]],
    [`${site}-period-timeline`, initPeriodTimeline, ["slug", "value"]],
    [`${site}-diet-badge`, initDietBadge, ["slug", "value"]]
  ];
  for (const [tagName, initFn, attrs] of defs) {
    if (!customElements.get(tagName)) {
      const widgetType = tagName.slice(site.length + 1);
      customElements.define(tagName, makeWidgetElement(widgetType, initFn, attrs));
    }
  }
})();
