#!/bin/bash
# .cursor/hooks/session-end.sh
# Fires when a Cursor agent session ends

TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

echo "[$TIMESTAMP] Session ended"

# Count changes made this session
if [ -d .git ]; then
  CHANGED=$(git diff --stat HEAD 2>/dev/null | tail -1)
  if [ -n "$CHANGED" ]; then
    echo "  Changes: $CHANGED"
  fi
fi
