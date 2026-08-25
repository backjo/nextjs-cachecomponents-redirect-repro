# Repro: `redirect()` dropped on client navigation with `cacheComponents`

```bash
npm install
npm run build && npm start
```

Open http://localhost:3000 and click each link.

| Link | Build output | Click | Direct visit |
| --- | --- | --- | --- |
| `/redirect-blocking` | `ƒ` | **does nothing** | redirects |
| `/redirect-suspense` | `◐` | redirects | redirects |
| `/blocking-layout/redirect-suspense` | `◐` | redirects | redirects |
| `/dynamic-layout/redirect-suspense` | `ƒ` | **does nothing** | redirects |

Every route runs the same `headers()` + `redirect("/target")`. Only routes that
build as `ƒ (Dynamic)` drop the redirect, and only on client-side navigation.

Set `cacheComponents: false` in `next.config.mjs` and all four work.
Does not reproduce under `next dev` — production build only.
