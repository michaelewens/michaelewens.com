# How to Edit the Latest Updates Scrolling Links

The scrolling "LATEST" updates appear at the top of the home page in a marquee (scrolling) format.

## File Location
Edit in: **`client/src/pages/Home.tsx`** (lines 106-146)

## What to Change
The scrolling ticker contains updates separated by bullet points (•). Each update follows this format:

```
[Month Year] Your update text here.
```

## Example Current Updates
- `[Oct 2024] New working paper "The Microstructure of Decentralized Exchanges" is now available.`
- `[Sep 2024] Presenting at NBER Asset Pricing meeting.`
- `[Aug 2024] Accepted to Journal of Finance: "Asset Pricing in Information-Rich Markets".`

## How to Edit

1. Find this section in `Home.tsx`:
```jsx
<span className="font-mono text-sm text-muted-foreground inline-flex items-center">
  [Oct 2024] New working paper "The Microstructure of
  Decentralized Exchanges" is now available.
</span>
<span className="text-primary">•</span>
```

2. Replace the date and text with your new update

3. Keep the structure exactly the same:
   - Use `[Month Year]` format for the date
   - Each update is wrapped in a `<span>` tag
   - Separate updates with `<span className="text-primary">•</span>` (bullet point)

## Important Note
The ticker automatically repeats the same updates in a loop for seamless scrolling. If you change the updates in the first section (around line 114-128), make sure to also update the duplicate section below it (around line 130-142) to keep them synchronized.

## Example: Adding a New Update
Replace one of the existing `<span>` blocks with:
```jsx
<span className="font-mono text-sm text-muted-foreground inline-flex items-center">
  [January 2025] New research on AI-driven finance launched.
</span>
```
