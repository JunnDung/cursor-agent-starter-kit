# MCP Server Setup Guide

This guide covers how to configure MCP (Model Context Protocol) servers in Cursor IDE and Cursor CLI.

## Overview

MCP servers extend Cursor's capabilities by connecting to external tools and data sources. You can configure them for:
- Project-specific tools (database, APIs, file system)
- Cloud services (Supabase, GitHub, Vercel)
- Custom MCP servers built for your stack

## Cursor Settings (GUI)

1. Go to **Cursor Settings > Features > MCP**.
2. Click **Add New MCP Server**.
3. Set the transport type (**stdio** or **HTTP**).
4. Enter a name and configuration.
5. Save and reload Cursor.

## `.cursor/mcp.json` (Project-Level Config)

Create `.cursor/mcp.json` in your project root:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "."]
    }
  }
}
```

**Commit this file** to share MCP setup with your team. Add to `.gitignore` only for project-specific secrets.

## `~/.cursor/mcp.json` (Global Config)

On macOS: `~/.cursor/mcp.json`
On Windows: `%USERPROFILE%\.cursor\mcp.json`

Global servers apply to all Cursor projects.

## MCP Server Types

### stdio (Local Command)

```json
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "@some/mcp-server"],
      "env": {
        "API_KEY": "your-key"
      }
    }
  }
}
```

### HTTP (Remote Server)

```json
{
  "mcpServers": {
    "remote-server": {
      "url": "https://mcp.example.com/"
    }
  }
}
```

## Common MCP Servers

### Supabase

```json
{
  "mcpServers": {
    "supabase-mcp": {
      "command": "npx",
      "args": ["-y", "@supabase/mcp-server-supabase"],
      "env": {
        "SUPABASE_ACCESS_TOKEN": "your-token"
      }
    }
  }
}
```

### GitHub

```json
{
  "mcpServers": {
    "github-mcp": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your-token"
      }
    }
  }
}
```

### Filesystem (allowed paths)

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/allowed/path"],
      "env": {
        "LOG_LEVEL": "debug"
      }
    }
  }
}
```

## Smithery.ai Integration

Smithery.ai distributes MCP servers via npm. Add via Smithery CLI:

```json
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": [
        "-y", "@smithery/cli@latest", "run",
        "server-package-name",
        "--config", "{\"key\":\"value\"}"
      ]
    }
  }
}
```

Replace `server-package-name` with the Smithery identifier and include required API keys in the config.

## Cursor CLI

Check available MCP servers:

```bash
cursor agent mcp list
```

List tools from a specific server:

```bash
cursor agent mcp list-tools <server-name>
```

Add MCP server via CLI:

```bash
cursor agent mcp add <server-name> -- <command> [args...]
```

## Inspector Debugging

To debug MCP server issues:

1. Check server logs in Cursor console (View > Toggle Developer Tools).
2. Verify the command is runnable standalone: run the command directly in terminal.
3. For network servers, verify the URL is reachable.
4. For auth issues, confirm environment variables are set correctly.

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Server not loading | Reload Cursor window (Cmd/Ctrl+Shift+P > "Reload Window") |
| Auth errors | Check environment variables in `env` block |
| Permission denied | Verify the command is executable and in PATH |
| Timeout | Increase timeout in server config if needed |
| Stale tools | Restart the MCP server |

## Custom MCP Server Development

To build a custom MCP server:

1. Use the [MCP SDK](https://modelcontextprotocol.io/) (TypeScript or Python).
2. Follow the MCP specification for tool/schema definitions.
3. Test locally with `node dist/index.js` before adding to `mcp.json`.
4. Consider deploying to Smithery.ai for distribution.

## Environment Variables

Never commit real secrets. Use placeholder patterns:

```json
{
  "mcpServers": {
    "my-server": {
      "command": "npx",
      "args": ["-y", "@my/mcp-server"],
      "env": {
        "API_KEY": "${API_KEY}"
      }
    }
  }
}
```

Document required env vars in your project's `docs/mcp-setup.md`.

## See also

- [Cursor MCP Docs](https://cursor.com/docs/cli/mcp)
- [MCP Specification](https://modelcontextprotocol.io/)
- [Smithery.ai](https://smithery.ai/) - MCP server marketplace
- [Awesome MCP Servers](https://mcpservers.org/)
