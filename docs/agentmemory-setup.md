# Agent Memory Setup Guide

This guide covers how to set up persistent cross-session memory using agentmemory.

## What is agentmemory?

agentmemory is a persistent memory engine for AI coding agents. It runs as a background server that automatically captures, compresses, and indexes agent activity — eliminating the need to re-explain your project at the start of every session.

Key features:
- **BM25 + vector + graph hybrid search** — 95.2% R@5 retrieval accuracy
- **Privacy filter** — strips API keys, secrets, PEM files, JWT tokens before storage
- **Cross-agent** — Claude Code, Cursor, Gemini CLI, Codex, Windsurf share the same memory
- **Auto-capture** — 12 lifecycle hooks capture everything without manual effort
- **Zero external DB** — built on SQLite via iii-engine

## Two Installation Options

### Option A: Project-Level (Recommended for Team)

This installs agentmemory into the project itself so the entire team gets shared memory.

#### Step 1: Install agentmemory

```bash
npm install --save-dev @agentmemory/agentmemory
```

#### Step 2: Add MCP config

Create `.cursor/mcp.json` in your project root:

```json
{
  "mcpServers": {
    "agentmemory": {
      "command": "npx",
      "args": ["-y", "@agentmemory/agentmemory"],
      "env": {
        "AGENTMEMORY_URL": "http://localhost:3111"
      }
    }
  }
}
```

**Commit `.cursor/mcp.json`** so the team shares the same MCP setup.

#### Step 3: Start the memory server

```bash
# In a separate terminal (or as a background process):
npx @agentmemory/agentmemory
```

For persistent background startup:

```bash
# macOS/Linux (use a process manager like pm2):
pm2 start npx --name agentmemory -- @agentmemory/agentmemory

# Windows:
# Use Task Scheduler or a .bat file with: start /b npx @agentmemory/agentmemory
```

#### Step 4: Restart Cursor

Reload Cursor window: `Cmd/Ctrl+Shift+P` > "Reload Window"

### Option B: Global Installation (Recommended for Personal Use)

Install agentmemory once on your machine, it works for all projects.

#### Step 1: Install globally

```bash
npm install -g @agentmemory/agentmemory
```

#### Step 2: Configure global MCP

Add to `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "agentmemory": {
      "command": "npx",
      "args": ["-y", "@agentmemory/mcp"],
      "env": {
        "AGENTMEMORY_URL": "http://localhost:3111"
      }
    }
  }
}
```

#### Step 3: Start the memory server

```bash
# In a terminal:
npx @agentmemory/agentmemory

# Or use the CLI:
agentmemory serve
```

## Available MCP Tools

Once connected, agentmemory provides these tools:

| Tool | Description |
|---|---|
| `memory_recall` | Search memory by natural language query |
| `memory_save` | Save a specific observation |
| `smart_search` | BM25 + vector hybrid search |
| `patterns` | Find recurring patterns in memory |
| `consolidate` | Compress and deduplicate memories |
| `governance_delete` | Remove specific memory entries |
| `sentinel` | Privacy audit of stored memories |
| `git_snapshot` | Version, rollback, diff memory state |

## Memory Architecture

agentmemory uses a 4-layer memory model:

1. **Working** — current session context
2. **Episodic** — session transcripts, compressed
3. **Semantic** — facts, decisions, preferences (vector indexed)
4. **Procedural** — patterns, skills, workflows

## Privacy

Before any observation is stored, agentmemory automatically strips:
- API keys and tokens
- Passwords and secrets
- PEM private keys
- JWT tokens
- `<sensitive>` tags

All data stays local by default. No cloud sync unless configured.

## Troubleshooting

| Problem | Solution |
|---|---|
| Tools not appearing | Reload Cursor window |
| Connection refused | Start the server: `npx @agentmemory/agentmemory` |
| Port 3111 in use | Set `AGENTMEMORY_PORT=3112` in mcp.json env |
| Empty search results | Run more sessions — memory builds over time |
| Slow search | Use `smart_search` instead of `memory_recall` |

## Viewer

Open the real-time memory viewer at: `http://localhost:3113`

## Next Steps

1. Start using Cursor normally — agentmemory auto-captures
2. After a few sessions, try `memory_recall` to test retrieval
3. Run `sentinel` to audit what memories have been stored
4. Check `memory/preferences.md` and `memory/decisions.md` — agentmemory can auto-update these

## See Also

- [agentmemory GitHub](https://github.com/rohitg00/agentmemory)
- [agentmemory npm](https://www.npmjs.com/package/@agentmemory/agentmemory)
- [iii engine docs](https://github.com/rohitg00/iii-engine) — underlying storage layer
- [Memorix](https://github.com/AVIDS2/memorix) — alternative cross-agent memory
