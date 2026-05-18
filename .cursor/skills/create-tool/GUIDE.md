# Create Tool — Extended Guide

Loaded only when you need deeper context on tool creation.

## Tool Design Checklist

### Naming
- [ ] Verb-oriented name (readFile, searchCodebase, runCommand)
- [ ] Unique within the project
- [ ] Consistent with existing naming

### Input Schema (Zod)
- [ ] All required fields marked
- [ ] No `any` types
- [ ] Descriptive descriptions
- [ ] Defaults for optional fields

### Execution
- [ ] Single responsibility
- [ ] Errors handled explicitly
- [ ] No secrets logged
- [ ] Timeouts for external calls

### Output
- [ ] Serializable (no functions, symbols)
- [ ] Structured (text, resource, image)
- [ ] Error results use error content type

## Common Tool Templates

### Read Tool
```typescript
import { z } from "zod";

const schema = z.object({ path: z.string() });

server.tool("readFile", "Read a file", schema, async ({ path }) => {
  const content = await Bun.file(path).text();
  return { content: [{ type: "text", text: content }] };
});
```

### Search Tool
```typescript
const schema = z.object({ query: z.string(), path: z.string().optional() });

server.tool("search", "Search for pattern", schema, async ({ query, path }) => {
  const results = await searchFiles(query, { path });
  return { content: [{ type: "text", text: JSON.stringify(results) }] };
});
```

### Write Tool
```typescript
const schema = z.object({
  path: z.string(),
  content: z.string(),
  append: z.boolean().optional()
});

server.tool("writeFile", "Write content to a file", schema, async ({ path, content, append }) => {
  const file = Bun.file(path);
  if (append) {
    await file.append(content);
  } else {
    await Bun.write(path, content);
  }
  return { content: [{ type: "text", text: `Written to ${path}` }] };
});
```
