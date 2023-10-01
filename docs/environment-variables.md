## Environment variables

Environment variables are separated in the repository according to the [Nx documentation](https://nx.dev/recipes/tips-n-tricks/define-environment-variables#define-environment-variables)

The following `.env` files may exist (relative to the root of the repository):

- `.env`
- `.local.env`
- `.develop.env`
- ~~`.production.env`~~ (only added in the host provider, never locally)
- `apps/[app-name]/.local.env`.
- `apps/[app-name]/.develop.env`.
- ~~`apps/[app-name]/.production.env`~~.

The lower in the list, the higher the important of declaration, meaning the field in `.env` can be overwritten in `local.env`.

## Typing

Types for the environment variables may be defined in `.d.ts` declaration file and added to the `include` list of types file of the same-level `tsconfig.json`.

Here is a template for such a declaration file (for instance `env.d.ts`):
```typescript
declare global {
    namespace NodeJS {
        type ProcessEnv = Partial<{
            NODE_ENV: 'development' | 'production',
            GITHUB_XYZ_TOKEN: string
        }>
    }
}
```

It should now be possible to use the env variables with `process.env`.

## Docker

To provide your environment variables to your docker container, you must use the `.local.env` env file at the same level as the `Dockerfile` used.
You can also opt to add/change/remove the env file(s) used in the `Dockerfile`.
