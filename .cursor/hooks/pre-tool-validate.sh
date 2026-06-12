#!/bin/bash
# .cursor/hooks/pre-tool-validate.sh
# Pre-tool hook that blocks dangerous commands

INPUT=$(cat)

# Extract command from various input formats
COMMAND=$(echo "$INPUT" | grep -o '"command":"[^"]*"' | cut -d'"' -f4)
if [ -z "$COMMAND" ]; then
  COMMAND=$(echo "$INPUT" | grep -o '"cmd":"[^"]*"' | cut -d'"' -f4)
fi
if [ -z "$COMMAND" ]; then
  COMMAND=$(echo "$INPUT")
fi

# Block patterns
case "$COMMAND" in
  *rm\ -rf\ /*)
    echo '{"permission":"deny","userMessage":"Blocking rm -rf with absolute path","agentMessage":"Use relative paths only. Check the path carefully."}'
    exit 0
    ;;
  *git\ push\ --force*|*git\ push\ -f*)
    echo '{"permission":"deny","userMessage":"Blocking force push to remote","agentMessage":"Use git push with proper review. Consider --force-with-lease instead."}'
    exit 0
    ;;
  *DROP\ TABLE*|*DROP\ DATABASE*|*TRUNCATE*)
    echo '{"permission":"deny","userMessage":"Blocking destructive database command","agentMessage":"This is destructive. Get explicit user approval before proceeding."}'
    exit 0
    ;;
  *chmod\ 777*|*chmod\ -R\ 777*)
    echo '{"permission":"deny","userMessage":"Blocking overly permissive chmod","agentMessage":"Use appropriate permissions (e.g., 644 for files, 755 for dirs)."}'
    exit 0
    ;;
  *eval\ *|*exec\ *)
    echo '{"permission":"deny","userMessage":"Blocking eval/exec","agentMessage":"Dynamic code execution is blocked for security."}'
    exit 0
    ;;
esac

echo '{"permission":"allow"}'
