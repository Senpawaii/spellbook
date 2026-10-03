---
name: commit-sigil
description: Use whenever you are asked to write, draft or improve a git commit message, including from a diff file or staged changes. Applies the house commit format (type(scope) subject, a why-focused body, then Refs and Impact trailers).
version: 1.0.0
---

# commit-sigil

Turn a unified diff into one commit message in a fixed house format. Follow every rule exactly;
the format is machine-checked.

## Output

Write the message to `COMMIT_MSG.txt` (replace the file) as:

```
<type>(<scope>): <subject>

<body: one or two short paragraphs>

Refs: #<n>
Impact: <low|medium|high>
```

## Rules

1. First line is `<type>(<scope>): <subject>`, **at most 50 characters in total**.
2. `type` is exactly one of `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `perf`.
3. `scope` is lowercase, hyphens allowed. It is the module directory directly under `src/` that the
   diff touches (`src/export/csv.js` -> `export`); for files outside `src/` use the top-level
   directory (`docs/README.md` -> `docs`); for root-level files only, use `repo`.
4. `subject` is imperative mood (`add`, not `added`/`adds`), starts with a lowercase letter, and has
   no trailing period.
5. The second line is blank.
6. The body is one or two short paragraphs, **each line at most 72 characters** (wrap by hand).
   Explain WHY the change is made (the motivation or problem), not what the diff does line by line.
   Only describe behaviour the diff actually implements.
7. A blank line follows the body, then exactly two trailer lines in this order:
   - `Refs: #<n>` using the ticket number given in the prompt, or `Refs: none` if no ticket is given.
   - `Impact: low|medium|high`:
     - `low`: docs, tests or internal-only changes
     - `medium`: behaviour change with no public API change
     - `high`: public API or data format change (exported function renamed or removed, etc.)
8. Nothing follows the trailers. The file ends with a single newline (no blank line at the end).
