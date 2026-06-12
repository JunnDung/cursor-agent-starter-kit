# Hướng dẫn tiếng Việt

## Đây là repo gì?

`cursor-agent-starter-kit` là một template giúp bạn dùng Cursor hiệu quả hơn khi xây dựng AI Agent hoặc dự án phần mềm.

Repo này cung cấp:

- rules cho Cursor
- file `AGENTS.md` và `CLAUDE.md` (cross-tool)
- agent role có thể tái sử dụng
- workflow làm việc
- skill cho các tác vụ lặp lại
- memory lưu quyết định và preference
- task tracking đơn giản
- templates và examples
- hướng dẫn bằng tiếng Việt
- After-Action Review (AAR) skill cho phản ánh session
- MCP setup guide
- troubleshooting guide
- CLI reference

## Cách dùng nhanh

Mở repo bằng Cursor, sau đó hỏi:

```txt
Read AGENTS.md and summarize how this project is organized.
```

Khi muốn làm feature mới:

```txt
Use workflows/plan.md to plan the feature first.
Then use agents/implementer.md to implement it with minimal changes.
```

Khi muốn review code:

```txt
Use agents/code-reviewer.md and .cursor/skills/code-review/SKILL.md to review the latest changes.
```

Khi muốn debug:

```txt
Use agents/bug-fixer.md and .cursor/skills/debug-bug/SKILL.md to find and fix this bug.
```

Khi muốn tạo agent mới:

```txt
Use .cursor/skills/create-agent/SKILL.md to create a new agent role.
```

## Vì sao repo này hữu ích?

AI coding agents thường mắc lỗi:

- đoán sai yêu cầu
- sửa quá nhiều file
- over-engineer
- bỏ qua test
- không nhớ quyết định cũ
- không verify trước khi nói xong

Repo này giúp Cursor làm việc có quy trình hơn: có rules rõ ràng, có workflow chuẩn, có memory để nhớ, và có skill cho các tác vụ lặp lại.

## Cấu trúc repo

```txt
.cursor/rules/     Cursor rules (11 files)
.cursor/skills/    Skills cho tác vụ cụ thể (7 skills)
.github/workflows/  GitHub Actions CI
agents/            Agent roles
workflows/         Workflows làm việc
memory/            Memory cho project
tasks/             Backlog và task tracking
templates/          Templates để copy
examples/          Ví dụ agent
docs/              Tài liệu (MCP setup, troubleshooting, CLI ref, tiếng Việt)
```

## Setup

```bash
npm install
npm run init
npm run validate        # kiểm tra skill structure
npm run generate:skill  # tạo skill mới (interactive)
```

## Docs mới

- `docs/mcp-setup.md` — Hướng dẫn cài đặt MCP server
- `docs/troubleshooting.md` — Giải quyết vấn đề thường gặp
- `docs/cli-reference.md` — Tham chiếu CLI đầy đủ

## Nguyên tắc cốt lõi

1. **Đọc trước khi sửa** — inspect existing files trước khi edit
2. **Simplicity first** — viết code tối thiểu giải quyết được vấn đề
3. **Surgical changes** — chỉ sửa những file cần thiết
4. **Verify trước khi done** — chạy test, liệt kê check cần chạy
5. **Cập nhật memory** — ghi lại quyết định để lần sau nhớ
