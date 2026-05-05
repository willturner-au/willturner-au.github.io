#!/bin/bash
# ============================================================
# Simplexity Matrix Label Update — May 2026
# Updates quadrant labels across index.html, advisory.html,
# about.html, and book.html
#
# OLD LABELS → NEW LABELS (from brand strategy doc):
#   "Flow"               → "Fluent"
#   "The Penny Drop"     → "Focus"     (top-right quadrant label)
#   "The Danger Zone"    → "Fog"
#   "The Overwhelmed Leader" → "Frozen"
#
# ALSO UPDATES:
#   SVG <desc> accessibility text
#   SVG comments
#   Arrow comment (Danger Zone → Penny Drop becomes Fog → Focus)
#   JSON-LD structured data (index.html only)
#
# Run from the root of your local repo:
#   bash update_matrix_labels.sh
# ============================================================

set -e

PAGES=("index.html" "advisory.html" "about.html" "book.html")

for FILE in "${PAGES[@]}"; do
  if [ ! -f "$FILE" ]; then
    echo "⚠️  $FILE not found — skipping"
    continue
  fi

  echo "✏️  Updating $FILE..."

  # ── 1. SVG <desc> accessibility text ──────────────────────
  sed -i '' \
    's|Top-left: Flow (unconscious simplicity)\. Top-right: The Penny Drop (conscious simplicity) \&mdash; the destination\. Bottom-left: The Danger Zone (unconscious complexity) \&mdash; the starting point\. Bottom-right: The Overwhelmed Leader (conscious complexity)|Top-left: Fluent (unconscious simplicity). Top-right: Focus (conscious simplicity) \&mdash; the destination. Bottom-left: Fog (unconscious complexity) \&mdash; the starting point. Bottom-right: Frozen (conscious complexity)|g' \
    "$FILE"

  # ── 2. SVG comments ────────────────────────────────────────
  sed -i '' \
    's|<!-- Top-left: Flow (unconscious simple) \&mdash; dim -->|<!-- Top-left: Fluent (unconscious simple) \&mdash; dim -->|g' \
    "$FILE"

  sed -i '' \
    's|<!-- Top-right: The Penny Drop (conscious simple) \&mdash; highlighted destination -->|<!-- Top-right: Focus (conscious simple) \&mdash; highlighted destination -->|g' \
    "$FILE"

  sed -i '' \
    's|<!-- Bottom-left: The Danger Zone (unconscious complex) \&mdash; highlighted start -->|<!-- Bottom-left: Fog (unconscious complex) \&mdash; highlighted start -->|g' \
    "$FILE"

  sed -i '' \
    's|<!-- Bottom-right: Overwhelmed Leader (conscious complex) \&mdash; dim -->|<!-- Bottom-right: Frozen (conscious complex) \&mdash; dim -->|g' \
    "$FILE"

  # ── 3. SVG section comments ────────────────────────────────
  sed -i '' \
    's|<!-- Top-left: Flow -->|<!-- Top-left: Fluent -->|g' \
    "$FILE"

  sed -i '' \
    's|<!-- Top-right: The Penny Drop -->|<!-- Top-right: Focus -->|g' \
    "$FILE"

  sed -i '' \
    's|<!-- Bottom-left: The Danger Zone -->|<!-- Bottom-left: Fog -->|g' \
    "$FILE"

  sed -i '' \
    's|<!-- Bottom-right: Overwhelmed Leader -->|<!-- Bottom-right: Frozen -->|g' \
    "$FILE"

  # ── 4. SVG visible text labels ─────────────────────────────
  # Top-left: Flow → Fluent
  sed -i '' \
    's|text-anchor="middle">Flow</text>|text-anchor="middle">Fluent</text>|g' \
    "$FILE"

  # Top-right: The Penny Drop → Focus
  sed -i '' \
    's|text-anchor="middle">The Penny Drop</text>|text-anchor="middle">Focus</text>|g' \
    "$FILE"

  # Bottom-left: The Danger Zone → Fog
  sed -i '' \
    's|text-anchor="middle">The Danger Zone</text>|text-anchor="middle">Fog</text>|g' \
    "$FILE"

  # Bottom-right: The Overwhelmed Leader → Frozen
  sed -i '' \
    's|text-anchor="middle">The Overwhelmed Leader</text>|text-anchor="middle">Frozen</text>|g' \
    "$FILE"

  # ── 5. Arrow comment ───────────────────────────────────────
  sed -i '' \
    's|<!-- Arrow: bottom-left .* (Danger Zone .* Penny Drop)|<!-- Arrow: bottom-left \&rarr; top-right (Fog \&rarr; Focus) \&mdash; upward diagonal|g' \
    "$FILE"

  echo "   ✅ Done"
done

# ── 6. JSON-LD structured data — index.html only ───────────
echo "✏️  Updating JSON-LD in index.html..."

sed -i '' \
  's|The Danger Zone (unconscious complexity), The Overwhelmed Leader (conscious complexity), The Penny Drop (conscious simplicity, the destination), and Flow (unconscious simplicity, mastery)|Fog (unconscious complexity), Frozen (conscious complexity), Focus (conscious simplicity, the destination), and Fluent (unconscious simplicity, mastery)|g' \
  index.html

echo "   ✅ JSON-LD updated"

echo ""
echo "🎉 All done. Quadrant labels updated across 4 pages:"
echo "   Flow        →  Fluent"
echo "   The Penny Drop  →  Focus"
echo "   The Danger Zone →  Fog"
echo "   The Overwhelmed Leader → Frozen"
echo ""
echo "Review the changes with: git diff"
echo "Then commit and push:"
echo "   git add -A && git commit -m 'Update Simplexity Matrix quadrant labels to Fog/Frozen/Focus/Fluent' && git push"
