---
name: release-notes
description: Use when asked to write or update release notes or a changelog entry from a list of commits or pull requests.
version: 1.0.0
---

# release-notes

Turn a list of commits into one release-notes entry in a fixed house format. Follow every rule
exactly; the format is machine-checked.

## Input

One commit per line: `<type>: <summary> (#<pr>) by <author>`. A `!` after the type (`feat!:`) marks
a breaking change.

## Output format

Write the entry to `RELEASE_NOTES.md` (replace the file) as:

```
## <version> (<YYYY-MM-DD>)

### Breaking changes

- <Summary> (#<pr>) by @<author>

### Features

- <Summary> (#<pr>) by @<author>

### Fixes

- <Summary> (#<pr>) by @<author>
```

## Rules

1. The date is today's date in the local timezone (run `date +%F` if unsure).
2. Sections appear in this order: `Breaking changes`, `Features`, `Fixes`. **Omit a section that
   would be empty.**
3. Placement: `feat!`/`fix!` (any type with `!`) go under **Breaking changes**; `feat` under
   **Features**; `fix` under **Fixes**.
4. Every other type (`chore`, `docs`, `refactor`, `test`, `ci`, ...) is left out entirely.
5. Within a section, order bullets by PR number, ascending.
6. Summary: the commit summary with the first letter capitalized and any trailing period removed.
   Do not reword it otherwise.
7. One blank line between a heading and its bullets, and between sections. The file ends with a
   single newline.
