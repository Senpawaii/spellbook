# spellbook

My AI agent skills, benchmarked with [grimoire-lab](https://github.com/Senpawaii/grimoire-lab).

## Layout

```
skills/
  <skill-name>/
    SKILL.md              # frontmatter: name, description, version (semver)
    grimoire.bench.yaml   # benchmark suite for this skill
    fixtures/             # task inputs for the suite (optional)
```

Releases are git tags named `<skill-name>@<version>`, e.g. `my-skill@1.0.0`.

## Workflow

```sh
grimoire new my-skill --dir skills                  # scaffold a skill and its suite
grimoire bench skills/my-skill                      # skill vs no skill
grimoire bench skills/my-skill --against 1.0.0      # working tree vs tag my-skill@1.0.0
grimoire bench skills/my-skill --against HEAD~1     # vs the previous commit
grimoire report                                     # latest run
```

Results go to `.grimoire/` (gitignored).

To use a skill in a project, copy `skills/<name>` to that project's `.claude/skills/<name>`.
