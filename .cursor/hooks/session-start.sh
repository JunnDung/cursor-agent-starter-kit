#!/bin/bash
# .cursor/hooks/session-start.sh
# Fires when a Cursor agent session begins

TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "unknown")
CWD=$(pwd)

echo "[$TIMESTAMP] Session started"
echo "  Branch: $BRANCH"
echo "  Working dir: $CWD"

# Optional: load project context
if [ -f .cursor/hooks/.session-context ]; then
  echo "  Context: $(cat .cursor/hooks/.session-context)"
fi
