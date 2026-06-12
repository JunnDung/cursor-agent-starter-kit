# Cursor Hooks Guide

Hooks let you intercept and control agent actions at key lifecycle points.

## Overview

Hooks are configured in `.cursor/hooks.json` at the project level or `~/.cursor/hooks.json` globally. They fire during specific agent events — before a shell command, after a file edit, at session start/end, and more.

## Configuration

Create `.cursor/hooks.json` in your project root:

```json
{
  "version": 1,
  "hooks": {
    "sessionStart": [
      {
        "command": "./hooks/session-init.sh"
      }
    ],
    "sessionEnd": [
      {
        "command": "./hooks/session-end.sh"
      }
    ],
    "preToolUse": [
      {
        "command": "./hooks/validate-tool.sh",
        "matcher": "Shell|Write|Edit"
      }
    ],
    "postToolUse": [
      {
        "command": "./hooks/audit-tool.sh"
      }
    ],
    "stop": [
      {
        "command": "./hooks/stop.sh"
      }
    ]
  }
}
```

## Hook Events Reference

| Hook | When it fires | Use case |
|---|---|---|
| `sessionStart` | Agent session begins | Load context, check environment |
| `sessionEnd` | Agent session ends | Save session summary, update memory |
| `preToolUse` | Before any tool runs | Block dangerous commands, validate input |
| `postToolUse` | After any tool completes | Audit log, auto-format |
| `postToolUseFailure` | After a tool fails | Alert, collect debug info |
| `preCompact` | Before context compaction | Snapshot session for AAR |
| `beforeShellExecution` | Before shell command | Block `rm -rf`, enforce test runner |
| `afterShellExecution` | After shell command | Capture output, verify results |
| `beforeReadFile` | Before reading a file | Redact sensitive content |
| `afterFileEdit` | After editing a file | Auto-format, lint check |
| `beforeSubmitPrompt` | Before prompt is sent | Validate prompt content |
| `subagentStart` | Subagent task starts | Log, track |
| `subagentStop` | Subagent task ends | Log, collect results |
| `stop` | Agent task completes | Final audit, commit suggestion |

## Built-in Hooks

This project includes ready-to-use hooks in `.cursor/hooks/`:

### `session-start.sh` — Session initialization

```bash
#!/bin/bash
# .cursor/hooks/session-start.sh
echo "[$(date)] Session started: $(git rev-parse --abbrev-ref HEAD)"
```

### `session-end.sh` — Session cleanup

```bash
#!/bin/bash
# .cursor/hooks/session-end.sh
echo "[$(date)] Session ended"
# Update memory with session summary
```

### `pre-tool-validate.sh` — Block dangerous commands

```bash
#!/bin/bash
# .cursor/hooks/pre-tool-validate.sh
# Blocks: rm -rf, destructive git, secret-exposing commands
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | grep -o '"command":"[^"]*"' | cut -d'"' -f4)

case "$COMMAND" in
  *rm\ -rf*|*git\ push\ --force*|*--force-with-lease*)
    echo '{"permission":"deny","userMessage":"Dangerous command blocked","agentMessage":"Command denied"}'
    exit 0
    ;;
esac
echo '{"permission":"allow"}'
```

### `post-tool-audit.sh` — Audit tool usage

```bash
#!/bin/bash
# .cursor/hooks/post-tool-audit.sh
TIMESTAMP=$(date +%s)
cat >> .cursor/hooks/audit.log
echo "---"
echo "Tool: $CURSOR_HOOK_TOOL_NAME"
echo "Input: $CURSOR_HOOK_TOOL_INPUT"
echo "Time: $TIMESTAMP"
```

### `stop-session.sh` — Session summary

```bash
#!/bin/bash
# .cursor/hooks/stop-session.sh
# Called when agent task completes
echo "[$(date)] Task completed"
# Can trigger: git commit suggestion, memory update, report generation
```

## preToolUse Response Format

For `preToolUse` hooks, output JSON to stdout:

```json
// Allow
{"permission": "allow"}

// Deny
{"permission": "deny", "userMessage": "Why blocked", "agentMessage": "Guidance for agent"}

// Deny (Cursor native format)
{"decision": "deny", "reason": "Why blocked"}

// Allow with modification
{"permission": "allow", "modifiedCommand": "safe alternative"}
```

## Matcher Syntax

Use regex patterns to filter which tools trigger a hook:

| Matcher | Matches |
|---|---|
| `Shell` | Shell/Bash commands |
| `Read` | File read operations |
| `Write\|Edit` | File write or edit operations |
| `.*` | All tools |
| `Grep\|Search` | Search operations |

## Hook Output Location

Hook output appears in Cursor's Output panel: View > Output > Hooks

## Security Hooks (Recommended)

Add `.cursor/hooks/security-validate.sh` to block dangerous patterns:

```bash
#!/bin/bash
INPUT=$(cat)
# Block commands containing hardcoded secrets
if echo "$INPUT" | grep -qiE '(api[_-]?key|password|secret|token)\s*=\s*["\x27][a-zA-Z0-9]{8,}'; then
  echo '{"permission":"deny","userMessage":"Possible hardcoded secret detected","agentMessage":"Use environment variables instead"}'
  exit 0
fi
echo '{"permission":"allow"}'
```

## GitHub Actions Integration

For CI enforcement, combine hooks with GitHub Actions:

```yaml
# .github/workflows/hooks-validate.yml
- name: Validate hooks
  run: |
    # Ensure all hooks are executable
    find .cursor/hooks -type f -executable | while read f; do
      echo "Valid hook: $f"
    done
```

## Troubleshooting

| Problem | Solution |
|---|---|
| Hook not firing | Check `.cursor/hooks.json` is valid JSON |
| Permission denied | Make hooks executable: `chmod +x .cursor/hooks/*.sh` |
| Hook hangs | Add timeout: `"timeoutSec": 10` |
| No output | Check Output panel: View > Output > Hooks |
| JSON parse error | Ensure hook outputs valid JSON only |

## See Also

- [Cursor Hooks Docs](https://cursor.com/docs/hooks.md)
- [Third Party Hooks](https://cursor.com/docs/reference/third-party-hooks)
- [GitButler Hooks Deep Dive](https://blog.gitbutler.com/cursor-hooks-deep-dive)
- [cross-platform-hooks](https://github.com/schalkneethling/cross-platform-hooks) — enforces test runner
