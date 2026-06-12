#!/bin/bash
# .cursor/hooks/post-tool-audit.sh
# Post-tool hook that logs tool usage

TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
AUDIT_LOG=".cursor/hooks/audit.log"

# Extract tool info from input
INPUT=$(cat)

# Append to audit log (simple append — consider log rotation for production)
{
  echo "---"
  echo "Time: $TIMESTAMP"
  echo "Input: $INPUT"
} >> "$AUDIT_LOG" 2>/dev/null

echo '{"continue":true}'
