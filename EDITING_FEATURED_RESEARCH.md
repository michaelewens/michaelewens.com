# How to Edit Featured Research on the Home Page

The home page displays a "Selected Research" section featuring your most recent papers.

## File Location
Edit in: **`client/src/lib/data.ts`** (line 2)

## What Controls Featured Research
There is a single constant that controls how many papers appear on the home page:

```javascript
export const FEATURED_COUNT = 2;
```

## How It Works
- The home page automatically displays the **first N papers** from the research list
- Papers are displayed in the order they appear in the `papers` array in `data.ts`
- By default, `FEATURED_COUNT = 2`, so the top 2 papers are featured

## How to Change the Number of Featured Papers

1. Open `client/src/lib/data.ts`
2. Find the line: `export const FEATURED_COUNT = 2;`
3. Change the `2` to your desired number:
   - `FEATURED_COUNT = 3;` will show 3 papers
   - `FEATURED_COUNT = 1;` will show 1 paper
   - `FEATURED_COUNT = 5;` will show 5 papers

## How to Change Which Papers Are Featured

The papers are featured in the order they appear in the `papers` array. To change which papers are featured:

1. Rearrange the order of papers in the `papers` array in `client/src/lib/data.ts`
2. Move your desired papers to the top of the list
3. The top `FEATURED_COUNT` papers will automatically be featured on the home page

## Example
If `FEATURED_COUNT = 2` and your `papers` array starts like this:
```javascript
export const papers: Paper[] = [
  { id: "p1", title: "Paper 1", ... },
  { id: "p2", title: "Paper 2", ... },
  { id: "p3", title: "Paper 3", ... },
  ...
];
```

Then only "Paper 1" and "Paper 2" will appear in the "Selected Research" section on the home page.
