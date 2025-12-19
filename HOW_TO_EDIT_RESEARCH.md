Here is how you edit the "Selected Research" listing in `client/src/lib/data.ts`.

Find the `papers` array (lines 50-98). This list contains all your papers.

To change which ones appear on the homepage:
1.  **Reorder the list**: The homepage automatically shows the first 2 papers in this list. Simply cut and paste the paper object you want to feature to the top of the array.

For example, to make the "Global Supply Chains" paper appear first, move its entire block (lines 75-85) to line 51, before the "Asset Pricing" paper.

To add a **new paper**:
Copy this template and paste it at the top of the `papers` array:

```typescript
{
  id: "new-paper-id",
  title: "Your New Paper Title",
  authors: ["Alex Sterling", "Co-Author"],
  year: 2025,
  status: "Working Paper", // or "Published", "Forthcoming"
  abstract: "Your abstract goes here...",
  pdfUrl: "/path/to/paper.pdf",
  tags: ["Topic 1", "Topic 2"]
},
```

Would you like me to make a specific change for you?