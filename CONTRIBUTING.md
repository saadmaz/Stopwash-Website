# Contributing

Thanks for helping build [stopwash.lk](https://stopwash.lk). This guide covers how changes move from an idea to production.

The source code is publicly visible, but it is proprietary: see [LICENSE](LICENSE). Code contributions are accepted from STOPWASH team members and invited collaborators only. Anyone is welcome to report a bug or suggest a change by opening an issue.

## Workflow

1. **Open or pick an issue.** Use the bug report or change request template so the problem and expected result are clear.
2. **Branch from `main`.** Use a short, descriptive name with a type prefix:

   | Prefix     | Use for                              |
   | ---------- | ------------------------------------ |
   | `feat/`    | New pages, sections or capabilities  |
   | `fix/`     | Bug fixes                            |
   | `content/` | Copy, photography or blog posts      |
   | `style/`   | Visual or design changes             |
   | `chore/`   | Dependencies, tooling, configuration |
   | `docs/`    | Documentation                        |

   Example: `feat/booking-widget`, `content/monsoon-care-post`.

3. **Make the change** and run the checks locally:

   ```sh
   bun run lint && bun run typecheck && bun run test && bun run build
   ```

4. **Open a pull request** into `main` and complete the checklist in the template. CI must pass before merging.
5. **Squash and merge** once reviewed. Delete the branch afterwards.

`main` is always deployable. Never push directly to `main`, and never force-push to it.

## Commit messages

Follow [Conventional Commits](https://www.conventionalcommits.org):

```
<type>(<optional scope>): <summary in the imperative mood>
```

| Type       | Meaning                                                 |
| ---------- | ------------------------------------------------------- |
| `feat`     | A new feature                                           |
| `fix`      | A bug fix                                               |
| `style`    | Visual or formatting change with no behaviour change    |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `content`  | Copy, imagery or blog content                           |
| `docs`     | Documentation only                                      |
| `test`     | Adding or updating tests                                |
| `chore`    | Build, tooling or dependency changes                    |

Examples:

```
feat(locations): add embedded map for Katubedda
fix(contact): keep the form state after a failed submission
content(blog): publish monsoon car-care tips
```

## Code standards

- **TypeScript strict mode.** No `any` without a written reason.
- **Content in data, not markup.** Copy, contact details, services and locations belong in `src/data/site.ts`.
- **Use the design tokens.** Colours, type and spacing come from `src/styles.css`. Don't hard-code new colour values in components.
- **Accessibility.** Every image needs meaningful `alt` text (or `alt=""` if decorative). Interactive elements must be keyboard-reachable with a visible focus state. Keep text contrast at WCAG AA or better.
- **New pages** must set `head: () => pageHead({...})` and be added to the sitemap.
- **Secrets.** Never commit API keys, tokens or passwords. Use Cloudflare secrets (`npx wrangler secret put`) if one is ever needed.

## Releases

Releases follow [Semantic Versioning](https://semver.org):

- **Major:** A redesign or a breaking change to forms or data.
- **Minor:** New pages, sections or features.
- **Patch:** Fixes, copy and small visual changes.

To cut a release:

1. Move the `Unreleased` entries in `CHANGELOG.md` under a new version heading with today's date.
2. Bump `version` in `package.json`.
3. Commit as `chore(release): vX.Y.Z`, then tag and push:

   ```sh
   git tag -a vX.Y.Z -m "vX.Y.Z"
   git push origin main --follow-tags
   ```

4. Publish a GitHub release for the tag using the changelog entry as the notes.

## Questions

Contact [hello@stopwash.lk](mailto:hello@stopwash.lk).
