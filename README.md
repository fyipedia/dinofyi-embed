# dinofyi-embed

[![npm](https://img.shields.io/npm/v/dinofyi-embed)](https://www.npmjs.com/package/dinofyi-embed)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/dinofyi-embed)

Embed **DinoFYI** widgets — dinosaurs, glossary terms, interactive tools, and inline elements — on any website. **11 widget types**, zero dependencies, Shadow DOM style isolation, 4 built-in themes (light, dark, sepia, auto), 2 styles (modern, organic), and live data from the [DinoFYI](https://dinofyi.com) database.

Every widget includes a "Powered by DinoFYI" backlink directing readers to the full reference.

> **Try the interactive widget builder at [widget.dinofyi.com](https://widget.dinofyi.com)**

## Quick Start

```html
<!-- Place widget div where you want it to appear -->
<div data-dinofyi="entity" data-slug="dinosaurs" data-theme="light"></div>

<!-- Load the embed script once, anywhere on the page -->
<script src="https://cdn.jsdelivr.net/npm/dinofyi-embed@1/dist/embed.min.js"></script>
```

That's it. The widget fetches data from the DinoFYI API and renders with full style isolation.

## Widget Types

| Type | Usage | Description |
|------|-------|-------------|
| `entity` | `<div data-dinofyi="entity" data-slug="..."></div>` | Entity detail card — species, bird, fish, plant, or dinosaur |
| `glossary` | `<div data-dinofyi="glossary" data-slug="..."></div>` | Glossary term definition with cross-references |
| `guide` | `<div data-dinofyi="guide" data-slug="..."></div>` | Guide summary card with key takeaways |
| `compare` | `<div data-dinofyi="compare" data-slug="..."></div>` | Side-by-side entity comparison |
| `search` | `<div data-dinofyi="search" data-slug="..."></div>` | Search box linking to the full database |
| `iucn-badge` | `<div data-dinofyi="iucn-badge" data-slug="..."></div>` | IUCN conservation status badge with 9 status levels |
| `period-timeline` | `<div data-dinofyi="period-timeline" data-slug="..."></div>` | Geological period bar (Triassic → Jurassic → Cretaceous) |
| `diet-badge` | `<div data-dinofyi="diet-badge" data-slug="..."></div>` | Herbivore/Carnivore/Omnivore icon badge |
| `iucn-inline` | `<div data-dinofyi="iucn-inline" data-slug="..."></div>` | Inline IUCN status colored pill |
| `period-inline` | `<div data-dinofyi="period-inline" data-slug="..."></div>` | Inline geological period colored pill |
| `taxonomy-inline` | `<div data-dinofyi="taxonomy-inline" data-slug="..."></div>` | Italic scientific binomial name |

## Widget Options

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-dinofyi` | entity, compare, glossary, guide, search, [tools] | required | Widget type |
| `data-slug` | e.g. "dinosaurs" | — | Entity slug from the DinoFYI database |
| `data-theme` | light, dark, sepia, auto | light | Visual theme (`auto` follows OS preference) |
| `data-styleVariant` | modern, organic | modern | Widget design style |
| `data-size` | default, compact, large | default | Widget size |
| `data-placeholder` | any string | "Search Dinosaurs..." | Search box placeholder |

## Themes

```html
<!-- Light (default) -->
<div data-dinofyi="entity" data-slug="dinosaurs" data-theme="light"></div>

<!-- Dark -->
<div data-dinofyi="entity" data-slug="dinosaurs" data-theme="dark"></div>

<!-- Sepia -->
<div data-dinofyi="entity" data-slug="dinosaurs" data-theme="sepia"></div>

<!-- Auto — follows OS dark/light preference -->
<div data-dinofyi="entity" data-slug="dinosaurs" data-theme="auto"></div>
```

## Styles

```html
<!-- Modern (default) — clean lines, rounded corners, accent gradients -->
<div data-dinofyi="entity" data-slug="dinosaurs" data-styleVariant="modern"></div>

<!-- Organic — natural curves, earth-tone aesthetics, field-guide look -->
<div data-dinofyi="entity" data-slug="dinosaurs" data-styleVariant="organic"></div>
```

## Web Components (Custom Elements)

As an alternative to `data-*` attributes, you can use native HTML custom elements:

```html
<!-- Custom element form -->
<dinofyi-entity slug="dinosaurs" theme="light"></dinofyi-entity>
<dinofyi-compare slugs="dinosaurs,other-slug"></dinofyi-compare>
<dinofyi-search placeholder="Search Dinosaurs..."></dinofyi-search>

<script src="https://cdn.jsdelivr.net/npm/dinofyi-embed@1/dist/embed.min.js"></script>
```

Use `style-variant` (not `style`) to avoid conflicts with the HTML reserved `style` attribute.

## Examples

### Entity Card

```html
<div data-dinofyi="entity" data-slug="dinosaurs" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/dinofyi-embed@1/dist/embed.min.js"></script>
```

### Side-by-Side Comparison

```html
<div data-dinofyi="compare" data-slugs="dinosaurs,other-slug"></div>
<script src="https://cdn.jsdelivr.net/npm/dinofyi-embed@1/dist/embed.min.js"></script>
```

### Search Box

```html
<div data-dinofyi="search" data-placeholder="Search Dinosaurs..."></div>
<script src="https://cdn.jsdelivr.net/npm/dinofyi-embed@1/dist/embed.min.js"></script>
```

### Glossary Term

```html
<div data-dinofyi="glossary" data-slug="example-term" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/dinofyi-embed@1/dist/embed.min.js"></script>
```

## CDN Options

### jsDelivr (recommended — global CDN, auto-updates with npm)

```html
<script src="https://cdn.jsdelivr.net/npm/dinofyi-embed@1/dist/embed.min.js"></script>
```

### Specific version (production stability)

```html
<script src="https://cdn.jsdelivr.net/npm/dinofyi-embed@1.0.0/dist/embed.min.js"></script>
```

### npm (for bundlers)

```bash
npm install dinofyi-embed
```

```javascript
import 'dinofyi-embed';
```

## Technical Details

- **Shadow DOM**: Complete style isolation — no CSS conflicts with your site
- **Zero dependencies**: No jQuery, React, or any external library
- **2 styles**: Modern (accent gradients) and Organic (natural curves, field-guide aesthetic)
- **4 themes**: Light, Dark, Sepia, Auto (OS preference detection)
- **CORS**: DinoFYI API has CORS enabled for all origins
- **MutationObserver**: Works with dynamically added elements (SPAs)
- **IntersectionObserver**: Lazy loading — widgets only fetch when entering viewport (200px margin)
- **Rich Snippets**: DefinedTerm JSON-LD injected for glossary widgets
- **Bundle size**: Tree-shaken per site — only includes tools available on DinoFYI

## Learn More About Dinosaurs

Visit [dinofyi.com](https://dinofyi.com) — DinoFYI is a comprehensive dinosaurs reference with interactive tools, guides, and developer resources.

- **API docs**: [dinofyi.com/developers/](https://dinofyi.com/developers/)
- **Widget builder**: [widget.dinofyi.com](https://widget.dinofyi.com)
- **npm package**: [npmjs.com/package/dinofyi-embed](https://www.npmjs.com/package/dinofyi-embed)
- **GitHub**: [github.com/fyipedia/dinofyi-embed](https://github.com/fyipedia/dinofyi-embed)

## Nature FYI Family

Part of [FYIPedia](https://fyipedia.com) — open-source developer tools ecosystem. Nature FYI covers species taxonomy, ornithology, marine biology, botany, and paleontology. Hub: [naturefyi.com](https://naturefyi.com).

| Site | Domain | Focus | Package |
|------|--------|-------|---------|
| SpeciesFYI | [speciesfyi.com](https://speciesfyi.com) | Species taxonomy, biodiversity, IUCN conservation status | [npm](https://www.npmjs.com/package/speciesfyi-embed) |
| BirdFYI | [birdfyi.com](https://birdfyi.com) | 11,251 birds, biometrics, conservation, habitats | [npm](https://www.npmjs.com/package/birdfyi-embed) |
| FishFYI | [fishfyi.com](https://fishfyi.com) | 35,729 fish, game fishing, aquarium care, compatibility | [npm](https://www.npmjs.com/package/fishfyi-embed) |
| PlantFYI | [plantfyi.com](https://plantfyi.com) | 379,774 plants, hardiness zones, bloom seasons, gardening | [npm](https://www.npmjs.com/package/plantfyi-embed) |
| **DinoFYI** | [dinofyi.com](https://dinofyi.com) | 6,142 dinosaurs, geological periods, paleontology | **[npm](https://www.npmjs.com/package/dinofyi-embed)** |

## License

MIT — see [LICENSE](./LICENSE).

Built with care by [FYIPedia](https://fyipedia.com).
