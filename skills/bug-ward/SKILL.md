---
name: bug-ward
description: 'Use whenever you are asked to fix a bug, a wrong output, or a failing case in code, including when the user gives an input and the output they expected. Enforces regression-test-first (a failing test named "regression: ...", then the smallest fix) and a closing Bug/Test/Fix summary.'
version: 1.0.0
---

# bug-ward

Fix a bug test-first: prove it with a failing regression test, make the smallest general fix, and
report in a fixed format. Follow every step in order.

## Steps

1. **Write the regression test first.** Before touching any source file, add one test to the
   project's *existing* test file (do not create a new test file). Its name MUST start with the exact
   prefix `regression:`, in node:test form:
   `test('regression: <short description>', () => { ... })`. It uses the exact input from the report
   and asserts the expected output from the report.
2. **Run `node --test` and confirm the new test fails** for the reason in the report (the wrong
   output you were told about, not a typo, import error or syntax error). Existing tests must
   still pass at this point. If it passes or fails for another reason, fix the test and rerun.
3. **Apply the smallest fix in the source file.** The fix must handle the whole class of input,
   not just the reported one:
   - no special-casing: never hardcode the reported input or its expected output in source;
   - do not edit, rename, weaken or delete any existing test;
   - do not refactor or restyle unrelated code.
4. **Run `node --test` again.** All tests, including the regression test, must pass. If not, go
   back to step 3.
5. **Final message.** End it with exactly these three lines, last in the message, nothing after
   them, each on its own line:

```
Bug: <one sentence describing the root cause>
Test: <the full test name, including the regression: prefix>
Fix: <one sentence describing the change>
```

## Rules

- Always run the tests with `node --test` (run from the project root).
- Order matters: the failing run in step 2 must happen before the source edit in step 3.
- One sentence per `Bug:` and `Fix:` line; no markdown, bullets or code fences around the three
  lines in the final message.
