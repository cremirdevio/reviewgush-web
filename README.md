This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Code Linting and Formatting

## Commit Convention

Your commit message should be structured as follows:

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit contains the following structural elements, to communicate intent:

1. **fix**: a commit of the type fix patches a bug in your codebase (this correlates with `PATCH` in Semantic Versioning).

1. **feat**: a commit of the type feat introduces a new feature to the codebase (this correlates with `MINOR` in Semantic Versioning).

1. **BREAKING CHANGE**: a commit that has a footer BREAKING CHANGE:, or appends a `!` after the _type/scope_, introduces a breaking API change (correlating with `MAJOR` in Semantic Versioning). A BREAKING CHANGE can be part of commits of any _type_.

1. types other than `fix:` and `feat:` are allowed, for example `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, and others.

1. footers other than BREAKING CHANGE: `description` may be provided and follow a convention similar to git trailer format.

Check this out for more information [https://www.conventionalcommits.org/en/v1.0.0/#specification](https://www.conventionalcommits.org/en/v1.0.0/#specification)
