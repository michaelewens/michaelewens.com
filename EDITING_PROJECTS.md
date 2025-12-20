# How to Edit or Add Ongoing Projects

All ongoing projects are stored in a single file and displayed on the Projects page with a title, description, and link.

## File Location
Edit in: **`client/src/lib/data.ts`** (lines 495-556)

## Project Structure
Each project is an object with the following fields:

```javascript
{
  id: "proj1",               // Unique identifier (e.g., "proj1", "proj2", etc.)
  title: "Project Title",    // Name of the project
  description: "...",        // Detailed description of the project
  url: "https://...",        // Link to the project website or resource
  imageUrl: "https://..."    // Image URL (optional - currently not displayed)
}
```

## Common Edits

### Change the Project Title
```javascript
// Before
title: "Gender Equity in Private Equity",

// After
title: "Women Leaders in Private Equity",
```

### Update the Description
```javascript
// Before
description: "We are building a comprehensive database of private equity professionals, their demographics and career trajectories.",

// After
description: "A comprehensive initiative to document and analyze gender representation in the private equity industry, with focus on career progression and barriers to advancement.",
```

### Change the Project URL
```javascript
// Before
url: "https://genderequityinpe.com/",

// After
url: "https://www.myproject.org/",
```

## Adding a New Project

To add a new project, add a new object to the `projectItems` array in `data.ts`:

```javascript
{
  id: "proj11",              // Use the next available ID number
  title: "Your Project Title",
  description: "Your detailed project description here.",
  url: "https://example.com"
}
```

**Example: Adding a new project**
```javascript
{
  id: "proj11",
  title: "Startup Ecosystem Initiative",
  description: "Research project examining startup ecosystems in emerging markets and their impact on economic development.",
  url: "https://startup-ecosystem-initiative.org/"
}
```

## Example: Editing a Project

Original project:
```javascript
{
  id: "proj5",
  title: "Workshop on Entrepreneurial Finance and Innovation (WEFI)",
  description: "A virtual workshop (held on Mondays) featuring research in entrepreneurial finance and innovation.",
  url: "https://workshop-efi.com/"
}
```

To update the description:
```javascript
{
  id: "proj5",
  title: "Workshop on Entrepreneurial Finance and Innovation (WEFI)",
  description: "A virtual workshop series (held on Mondays) featuring cutting-edge research in entrepreneurial finance, innovation, and private equity. Co-organized with leading academics from top business schools.",
  url: "https://workshop-efi.com/"
}
```

## Removing a Project

To remove a project, delete the entire project object from the `projectItems` array:

```javascript
// Before
export const projectItems: ProjectItem[] = [
  { id: "proj1", title: "Project A", ... },
  { id: "proj2", title: "Project B", ... },  // Remove this one
  { id: "proj3", title: "Project C", ... }
];

// After
export const projectItems: ProjectItem[] = [
  { id: "proj1", title: "Project A", ... },
  { id: "proj3", title: "Project C", ... }
];
```

## How Projects Are Displayed

The Projects page displays projects in a **card layout** with:
- **Project Number** - A numbered placeholder on the left (01, 02, 03, etc.)
- **Title** - The project name
- **Description** - The detailed description text
- **Visit Project Button** - A clickable link that opens the project URL

Projects display with an image placeholder on the left (responsive: stacked on mobile) and content on the right.

## Optional Fields

The `imageUrl` field is **optional**. Currently, projects display with a numbered placeholder instead of images. The `imageUrl` field can be used in future updates if you want to add actual images.

## Finding a Specific Project

Projects are listed in the order they appear in the file. To find a project you want to edit:
1. Search for the project title in `data.ts`
2. Or search for the project ID (e.g., "proj1", "proj5")

## Important Notes

- Each project needs a **unique `id`** (proj1, proj2, proj3, etc.)
- The `url` field should be a complete URL starting with `https://` or `http://`
- The `url` can also be an email link: `mailto:email@example.com`
- Project descriptions should be clear and concise (1-2 paragraphs)
- The `imageUrl` field is optional and not currently used for display
- Titles should be descriptive and match the actual project name
- Projects are displayed in the order they appear in the data file

## Changing the Order of Projects

To reorder projects, simply change their position in the `projectItems` array. The first project in the list will appear first on the page.

```javascript
// Before
export const projectItems: ProjectItem[] = [
  { id: "proj1", title: "Project A", ... },  // Appears first
  { id: "proj2", title: "Project B", ... },  // Appears second
  { id: "proj3", title: "Project C", ... }   // Appears third
];

// After (Project C now appears first)
export const projectItems: ProjectItem[] = [
  { id: "proj3", title: "Project C", ... },  // Appears first
  { id: "proj1", title: "Project A", ... },  // Appears second
  { id: "proj2", title: "Project B", ... }   // Appears third
];
```
