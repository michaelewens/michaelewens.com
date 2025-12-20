# How to Edit Research Items (Papers)

All research papers are stored in a single file and can be easily edited.

## File Location
Edit in: **`client/src/lib/data.ts`** (lines 46-264)

## Paper Structure
Each paper is an object with the following fields:

```javascript
{
  id: "p1",                          // Unique identifier (e.g., "p1", "p2", etc.)
  title: "Paper Title",               // Full title of the paper
  authors: ["Author 1", "Author 2"], // Array of author names
  journal: "Journal Name",            // Name of the journal (optional)
  journalUrl: "https://...",         // Link to the journal (optional)
  year: 2025,                         // Publication year (number)
  status: "Published",                // "Published", "Forthcoming", or "Working Paper"
  abstract: "Paper summary...",      // Brief description of the paper
  pdfUrl: "https://...",             // Link to the PDF
  codeUrl: "https://...",            // Link to code/repository (optional)
  slidesUrl: "https://...",          // Link to presentation slides (optional)
  tags: ["Tag1", "Tag2"]             // Array of research tags
}
```

## Common Edits

### Change the Title
```javascript
// Before
title: "Old Title",

// After
title: "New Title",
```

### Update the Journal
```javascript
journal: "Journal of Finance",
journalUrl: "https://example.com/doi",
```

### Add Code or Slides URL
```javascript
codeUrl: "https://github.com/michaelewens/repo-name",
slidesUrl: "https://example.com/slides.pdf",
```

### Change Publication Status
```javascript
status: "Forthcoming",  // or "Working Paper" or "Published"
```

### Update Authors
```javascript
authors: ["Michael Ewens", "New Author Name"],
```

### Add or Change Tags
```javascript
tags: ["Venture Capital", "Entrepreneurship", "New Topic"],
```

## Optional Fields
Some fields are optional (can be left out):
- `journal` and `journalUrl` - Only needed for published papers
- `codeUrl` - Only if code/data is available
- `slidesUrl` - Only if slides exist

If a field is optional and doesn't exist, just leave it out. For example:
```javascript
{
  id: "p5",
  title: "Working Paper Title",
  authors: ["Author Name"],
  year: 2025,
  status: "Working Paper",
  abstract: "Abstract text",
  pdfUrl: "https://...",
  tags: ["Tag1"]
  // No journal, codeUrl, or slidesUrl because this is a working paper
}
```

## Example: Editing a Paper

Original paper:
```javascript
{
  id: "p3",
  title: "Regulatory Costs of Being Public: Evidence from Bunching Estimation",
  authors: ["Michael Ewens", "Kairong Xiao", "Ting Xu"],
  journal: "Journal of Financial Economics",
  year: 2023,
  status: "Published",
  abstract: "We estimate the regulatory costs of being a public company using bunching estimation techniques.",
  pdfUrl: "https://osf.io/preprints/socarxiv/pdv8n/",
  tags: ["Regulation", "IPO", "Public Markets"]
}
```

To add a code repository:
```javascript
{
  id: "p3",
  title: "Regulatory Costs of Being Public: Evidence from Bunching Estimation",
  authors: ["Michael Ewens", "Kairong Xiao", "Ting Xu"],
  journal: "Journal of Financial Economics",
  year: 2023,
  status: "Published",
  abstract: "We estimate the regulatory costs of being a public company using bunching estimation techniques.",
  pdfUrl: "https://osf.io/preprints/socarxiv/pdv8n/",
  codeUrl: "https://github.com/michaelewens/regulatory-costs",  // Added this line
  tags: ["Regulation", "IPO", "Public Markets"]
}
```

## Adding a New Paper

To add a new paper, add a new object to the `papers` array in `data.ts`:

```javascript
{
  id: "p20",  // Use the next available ID number
  title: "Your New Paper Title",
  authors: ["Your Name", "Co-Author"],
  journal: "Journal Name",
  journalUrl: "https://example.com/doi",
  year: 2025,
  status: "Published",
  abstract: "Your paper abstract goes here...",
  pdfUrl: "https://link-to-pdf.pdf",
  codeUrl: "https://github.com/username/repo",
  slidesUrl: "https://link-to-slides.pdf",
  tags: ["Research", "Topic", "Area"]
}
```

## Finding a Specific Paper
Papers are listed in the order they appear in the file. To find a paper you want to edit:
1. Search for the paper title in `data.ts`
2. Or search for the paper ID (e.g., "p3", "p15")
