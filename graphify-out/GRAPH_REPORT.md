# Graph Report - .  (2026-05-03)

## Corpus Check
- 46 files · ~115,927 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 95 nodes · 46 edges · 18 communities detected
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.76)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]

## God Nodes (most connected - your core abstractions)
1. `README` - 5 edges
2. `Improvement Plan` - 4 edges
3. `CustomCursor` - 3 edges
4. `Magnetic` - 3 edges
5. `TextReveal` - 2 edges
6. `CodeAvatar` - 2 edges
7. `Hero Section Component` - 1 edges
8. `About Section Component` - 1 edges
9. `Skills Section Component` - 1 edges
10. `Projects Section Component` - 1 edges

## Surprising Connections (you probably didn't know these)
- `README` --references--> `TextReveal`  [EXTRACTED]
  README.md → src/components/ui/TextReveal.tsx
- `README` --references--> `Parallax`  [EXTRACTED]
  README.md → src/components/ui/Parallax.tsx
- `README` --references--> `CodeAvatar`  [EXTRACTED]
  README.md → src/components/ui/CodeAvatar.tsx
- `README` --references--> `CustomCursor`  [EXTRACTED]
  README.md → src/components/ui/CustomCursor.tsx
- `Improvement Plan` --references--> `CustomCursor`  [EXTRACTED]
  improvement_plan.md → src/components/ui/CustomCursor.tsx

## Hyperedges (group relationships)
- **Page Sections Using GSAP Animations** — src_components_Hero_tsx, src_components_About_tsx, src_components_Skills_tsx, src_components_Projects_tsx, src_components_Experience_tsx, src_components_Contact_tsx [INFERRED 0.85]
- **Components Using next-intl for Internationalization** — src_components_Hero_tsx, src_components_About_tsx, src_components_Skills_tsx, src_components_Projects_tsx, src_components_Contact_tsx, src_components_Navbar_tsx, src_components_Experience_tsx, src_app_locale_layout_tsx [INFERRED 0.90]
- **Shared UI Components** — src_components_ui_SectionHeading_tsx, src_components_ui_Card_tsx, src_components_ui_Tag_tsx [INFERRED 0.80]
- **Reusable UI Components** — button, icon_button, custom_cursor, magnetic, text_reveal, parallax, code_avatar, smooth_scroll, entry_loader, command_center, language_switcher [EXTRACTED 1.00]
- **ScrollTrigger Consumers** — text_reveal, parallax, code_avatar [EXTRACTED 1.00]
- **GSAP Animation Users** — custom_cursor, magnetic, text_reveal, parallax, code_avatar, entry_loader, command_center [EXTRACTED 1.00]

## Communities

### Community 0 - "Community 0"
Cohesion: 0.31
Nodes (9): CodeAvatar, CustomCursor, Improvement Plan, LanguageSwitcher, Magnetic, Parallax, README, SmoothScroll (+1 more)

### Community 1 - "Community 1"
Cohesion: 0.29
Nodes (6): About Section Component, Contact Section Component, Experience Section Component, Hero Section Component, Projects Section Component, Skills Section Component

### Community 19 - "Community 19"
Cohesion: 1.0
Nodes (2): Button, IconButton

### Community 20 - "Community 20"
Cohesion: 1.0
Nodes (2): Next.js Logo, Vercel Logo

### Community 38 - "Community 38"
Cohesion: 1.0
Nodes (1): Navigation Bar Component

### Community 39 - "Community 39"
Cohesion: 1.0
Nodes (1): Next-intl Providers Wrapper

### Community 40 - "Community 40"
Cohesion: 1.0
Nodes (1): Section Heading UI Component

### Community 41 - "Community 41"
Cohesion: 1.0
Nodes (1): Card UI Component

### Community 42 - "Community 42"
Cohesion: 1.0
Nodes (1): Tag UI Component

### Community 43 - "Community 43"
Cohesion: 1.0
Nodes (1): EntryLoader

### Community 44 - "Community 44"
Cohesion: 1.0
Nodes (1): CommandCenter

### Community 45 - "Community 45"
Cohesion: 1.0
Nodes (1): Type Definitions

### Community 46 - "Community 46"
Cohesion: 1.0
Nodes (1): Content Data

### Community 47 - "Community 47"
Cohesion: 1.0
Nodes (1): i18n Request Config

### Community 48 - "Community 48"
Cohesion: 1.0
Nodes (1): i18n Navigation

### Community 49 - "Community 49"
Cohesion: 1.0
Nodes (1): File Icon

### Community 50 - "Community 50"
Cohesion: 1.0
Nodes (1): Globe Icon

### Community 51 - "Community 51"
Cohesion: 1.0
Nodes (1): Window Icon

## Knowledge Gaps
- **27 isolated node(s):** `Hero Section Component`, `About Section Component`, `Skills Section Component`, `Projects Section Component`, `Contact Section Component` (+22 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 19`** (2 nodes): `Button`, `IconButton`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 20`** (2 nodes): `Next.js Logo`, `Vercel Logo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 38`** (1 nodes): `Navigation Bar Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 39`** (1 nodes): `Next-intl Providers Wrapper`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 40`** (1 nodes): `Section Heading UI Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (1 nodes): `Card UI Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 42`** (1 nodes): `Tag UI Component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 43`** (1 nodes): `EntryLoader`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (1 nodes): `CommandCenter`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 45`** (1 nodes): `Type Definitions`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 46`** (1 nodes): `Content Data`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 47`** (1 nodes): `i18n Request Config`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 48`** (1 nodes): `i18n Navigation`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 49`** (1 nodes): `File Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 50`** (1 nodes): `Globe Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 51`** (1 nodes): `Window Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `Hero Section Component`, `About Section Component`, `Skills Section Component` to the rest of the system?**
  _27 weakly-connected nodes found - possible documentation gaps or missing edges._