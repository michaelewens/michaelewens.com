# How to Edit the Latest Updates Scrolling Links

The scrolling "LATEST" updates appear at the top of the home page in a marquee (scrolling) format. Each update is **clickable and links to a page** you specify.

## File Location
Edit in: **`client/src/pages/Home.tsx`** (lines 21-37)

## Update Structure
Each update is an object with three fields:

```javascript
{
  id: "u1",                    // Unique identifier (u1, u2, u3, etc.)
  text: "[Month Year] Text",  // The text displayed in the ticker
  url: "/research"            // Where to navigate when clicked
}
```

## Current Updates
```javascript
const updates = [
  {
    id: "u1",
    text: "[Nov 2025] New working paper \"Corporate Hierarchy\" is now available.",
    url: "/research"
  },
  {
    id: "u2",
    text: "[July 2025] Gender Equity in Private Equity report released",
    url: "/research"
  },
  {
    id: "u3",
    text: "[Sept 2025] Forthcoming to Journal of Finance: \"Board Dynamics over the Startup Lifecycle\".",
    url: "/research"
  }
];
```

## How to Edit an Update

1. Open `client/src/pages/Home.tsx`
2. Find the `updates` array (around line 21-37)
3. Edit any of these fields:

### Change the Display Text
```javascript
// Before
text: "[Nov 2025] New working paper \"Corporate Hierarchy\" is now available.",

// After
text: "[December 2025] Breaking news about venture capital.",
```

### Change the URL
```javascript
// Before
url: "/research"

// After (examples)
url: "/data-code"      // Link to Data & Code page
url: "/about"          // Link to About page
url: "/contact"        // Link to Contact page
url: "/"               // Link to Home page
```

## How to Add a New Update

1. Find the `updates` array in `Home.tsx`
2. Add a new object before the closing bracket:

```javascript
const updates = [
  {
    id: "u1",
    text: "[Nov 2025] New working paper \"Corporate Hierarchy\" is now available.",
    url: "/research"
  },
  {
    id: "u2",
    text: "[July 2025] Gender Equity in Private Equity report released",
    url: "/research"
  },
  {
    id: "u3",
    text: "[Sept 2025] Forthcoming to Journal of Finance: \"Board Dynamics over the Startup Lifecycle\".",
    url: "/research"
  },
  {
    id: "u4",          // New update
    text: "[January 2026] My new update here.",
    url: "/research"
  }
];
```

## How to Remove an Update

Simply delete the entire object for that update:

```javascript
// Before
const updates = [
  { id: "u1", text: "...", url: "/research" },
  { id: "u2", text: "...", url: "/research" },  // Remove this one
  { id: "u3", text: "...", url: "/research" }
];

// After
const updates = [
  { id: "u1", text: "...", url: "/research" },
  { id: "u3", text: "...", url: "/research" }
];
```

## Important Notes
- The ticker **automatically creates a loop** - the updates will repeat infinitely as the user scrolls
- Updates are **clickable links** that change color on hover
- Each update needs a **unique `id`** (u1, u2, u3, etc.)
- Use **escaped quotes** in the text field: `\"` instead of `"` if your text contains quotes
- The `url` field should start with `/` for internal pages

## Example: Linking to a Specific Page
```javascript
{
  id: "u5",
  text: "[January 2025] Visit our teaching materials.",
  url: "/teaching"
}
```
