#!/bin/bash
# .cursor/hooks/stop-session.sh
# Fires when an agent task completes

TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

echo "[$TIMESTAMP] Task completed"
echo ""
echo "Reminder: Run 'Use .cursor/skills/aar/SKILL.md' for after-action review"
