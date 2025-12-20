# How to Edit or Add Teaching Courses

All teaching courses are stored in a single file and displayed in a table on the Teaching page.

## File Location
Edit in: **`client/src/lib/data.ts`** (lines 356-476)

## Course Structure
Each course is an object with the following fields:

```javascript
{
  id: "c1",                     // Unique identifier (e.g., "c1", "c2", etc.)
  title: "Course Title",        // Name of the course
  institution: "University",    // Institution/School name
  level: "MBA",                 // "Undergraduate", "MBA", or "PhD"
  year: "2025–",                // Year or year range (e.g., "2025", "2024–2025", "2024–")
  syllabusUrl: "https://..."    // Link to syllabus PDF (optional)
}
```

## Valid Levels
Only these three values are allowed for the `level` field:
- `"Undergraduate"` - For undergraduate courses
- `"MBA"` - For MBA/Master's level courses
- `"PhD"` - For PhD level courses

## Common Edits

### Change the Course Title
```javascript
// Before
title: "Private Equity Finance",

// After
title: "Advanced Private Equity Analysis",
```

### Update the Institution
```javascript
// Before
institution: "Columbia Business School",

// After
institution: "Harvard Business School",
```

### Change the Course Level
```javascript
// Before
level: "MBA",

// After
level: "PhD",
```

Valid options: `"Undergraduate"`, `"MBA"`, `"PhD"`

### Update the Year
```javascript
// Before
year: "2024–",

// After
year: "2025–",
```

Examples of valid year formats:
- `"2025"` - Single year
- `"2024–2025"` - Year range
- `"2024–"` - Open-ended (course continues)
- `"2020, 2021, 2023"` - Non-consecutive years

### Add or Change a Syllabus URL
```javascript
// Before (no syllabus)
{
  id: "c1",
  title: "Course Title",
  institution: "University",
  level: "MBA",
  year: "2025–"
}

// After (with syllabus)
{
  id: "c1",
  title: "Course Title",
  institution: "University",
  level: "MBA",
  year: "2025–",
  syllabusUrl: "https://example.com/syllabus.pdf"
}
```

### Remove a Syllabus URL
Simply delete the `syllabusUrl` line:
```javascript
// Before
{
  id: "c5",
  title: "Course Title",
  institution: "University",
  level: "MBA",
  year: "2025",
  syllabusUrl: "https://example.com/old-syllabus.pdf"
}

// After
{
  id: "c5",
  title: "Course Title",
  institution: "University",
  level: "MBA",
  year: "2025"
}
```

## Optional Fields
The `syllabusUrl` field is **optional**. If you don't have a syllabus link, simply omit it.

## Adding a New Course

To add a new course, add a new object to the `courses` array in `data.ts`:

```javascript
{
  id: "c20",  // Use the next available ID number
  title: "Your Course Title",
  institution: "Your Institution",
  level: "MBA",  // Use "Undergraduate", "MBA", or "PhD"
  year: "2025–",
  syllabusUrl: "https://example.com/syllabus.pdf"  // Optional
}
```

**Example: Adding a new MBA course**
```javascript
{
  id: "c18",
  title: "Entrepreneurial Finance II",
  institution: "Stanford Graduate School of Business",
  level: "MBA",
  year: "2025–",
  syllabusUrl: "https://example.com/ent-finance-2-syllabus.pdf"
}
```

## Example: Editing a Course

Original course:
```javascript
{
  id: "c1",
  title: "Private Equity Value Creation",
  institution: "Columbia Business School",
  level: "MBA",
  year: "2025–"
}
```

To add a syllabus and update the year:
```javascript
{
  id: "c1",
  title: "Private Equity Value Creation",
  institution: "Columbia Business School",
  level: "MBA",
  year: "2025–2026",
  syllabusUrl: "https://michaelewens.com/courses/pe-value-creation-2025.pdf"
}
```

## Removing a Course

To remove a course, delete the entire course object from the `courses` array:

```javascript
// Before
export const courses: Course[] = [
  { id: "c1", title: "Course A", ... },
  { id: "c2", title: "Course B", ... },  // Remove this one
  { id: "c3", title: "Course C", ... }
];

// After
export const courses: Course[] = [
  { id: "c1", title: "Course A", ... },
  { id: "c3", title: "Course C", ... }
];
```

## How Courses Are Displayed

The Teaching page displays courses in a **table** with these columns:
- **Course Title** - The course name
- **Institution** - The school/university (hidden on mobile)
- **Level** - The course level badge (hidden on mobile)
- **Year** - The year or year range
- **Syllabus** - A download button (only appears if `syllabusUrl` is provided)

## Finding a Specific Course
Courses are listed in the order they appear in the file. To find a course you want to edit:
1. Search for the course title in `data.ts`
2. Or search for the course ID (e.g., "c1", "c15")

## Important Notes
- Each course needs a **unique `id`** (c1, c2, c3, etc.)
- The `level` field must be exactly one of: `"Undergraduate"`, `"MBA"`, or `"PhD"` (case-sensitive)
- The `syllabusUrl` is optional - only include it if you have a PDF syllabus to link to
- Institution names should match exactly as you want them displayed (e.g., "Columbia Business School" vs "Columbia")
- Year formats are flexible - use whatever makes sense for your courses
