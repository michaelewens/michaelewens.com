#!/usr/bin/env bash
# Compile the local CV (cv/ewens_cv2026.tex) and publish it to the website
# at client/public/ewens_cv.pdf. Run from anywhere.
#
#   ./script/publish-cv.sh
#
# The cv/ folder is gitignored — only the rendered PDF is tracked in the repo.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CV_DIR="$REPO_ROOT/cv"
SRC="ewens_cv2026.tex"
DEST="$REPO_ROOT/client/public/ewens_cv.pdf"

if [[ ! -d "$CV_DIR" ]]; then
  echo "error: $CV_DIR does not exist" >&2
  exit 1
fi
if [[ ! -f "$CV_DIR/$SRC" ]]; then
  echo "error: $CV_DIR/$SRC not found" >&2
  exit 1
fi

cd "$CV_DIR"
echo "Compiling $SRC..."
pdflatex -interaction=nonstopmode -halt-on-error "$SRC" > /dev/null
# Second pass for cross-references / page numbers.
pdflatex -interaction=nonstopmode -halt-on-error "$SRC" > /dev/null

OUT_PDF="${SRC%.tex}.pdf"
if [[ ! -f "$OUT_PDF" ]]; then
  echo "error: $OUT_PDF not produced" >&2
  exit 1
fi

cp "$OUT_PDF" "$DEST"
echo "Published $OUT_PDF -> $DEST"
