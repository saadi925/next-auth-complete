# NextAuth Starter

A robust authentication solution for Next.js applications, leveraging NextAuth with custom enhancements like RBAC, multi-provider support, and email handling.

## Getting Started
## Installation
```bash
git clone https://github.com/saadi925/next-auth-complete.git
cd next-auth-complete
pnpm install 
```

## Setup & Configuration
```
// .env

DB_URL="postgresql://dbuser:password@localhost:5432/dbname"

AUTH_SECRET="your-secret"

GITHUB_CLIENT_ID="your-secret"
GITHUB_CLIENT_SECRET="your-secret"

GOOGLE_CLIENT_SECRET="your-secret"
GOOGLE_CLIENT_ID="your-secret"

HOST="http://localhost:3000"


GMAIL_SENDER_EMAIL="your_app_gmail"
GMAIL_SENDER_PASSWORD="gmail_apps_password_check_nodemailer"

FACEBOOK_CLIENT_ID="your-secret"
FACEBOOK_CLIENT_SECRET="your-secret"

```
## Adding UI Components
Use the pre-made script to add UI components:
```
pnpm ui:add <component-name>
```

This works just like the add command in the shadcn/ui CLI.

## Adding a New App
Turborepo offers a simple command to add a new app:

```
pnpm turbo gen workspace --name <app-name>
```
This will create a new empty app in the apps directory. To copy an existing app:

```
pnpm turbo gen workspace --name <app-name> --copy
```

[!NOTE]
Remember to run pnpm install after copying an app.

## What's Inside?
This Turborepo includes the following packages/apps:

## Apps
- docs: a Next.js app (With [FumaDocs](https://fumadocs.vercel.app/docs/ui))
- web: another Next.js app


## Packages
- @repo/ui: a shared React component library powered by shadcn/ui and tailwind css
- @repo/eslint-config: ESLint configurations including eslint-config-next and eslint-config-prettier
- @repo/typescript-config: Shared tsconfig.json files

# Utilities 

TypeScript for static type checking
ESLint for code linting
Prettier for code formatting





## Features
 Credential-Based Authentication:

- Sign-in, Sign-up, and Forgot Password functionality.
- Custom email templates for password recovery and account verification using Nodemailer.
OAuth Providers:

- Google and Facebook authentication for seamless social logins.
Role-Based Access Control (RBAC):

- Define user roles and permissions with Prisma for secure access management.
Database Integration:

- Built with Prisma and PostgreSQL for powerful and scalable database interactions.
Schema Validation:

- Validate user inputs and responses using Zod.
Turbo (TypeScript) Integration:

- Type-safe development with TypeScript, ensuring robust and maintainable code.
Customizable UI:

- Tailor the UI components with Shadcn UI, allowing for easy styling adjustments.






## Tools (Additional From Docs):
If you want to add any of these you can follow the links.

Turborepo works with all of your favorite tooling. Below, you'll find guides for the most common tools being used with Turborepo.

- [Docker](https://turbo.build/repo/docs/guides/tools/docker)
- [Prisma](https://turbo.build/repo/docs/guides/tools/prisma)
- [StoryBook](https://turbo.build/repo/docs/guides/tools/storybook)
- [Vitest](https://turbo.build/repo/docs/guides/tools/vitest)
- [Jest](https://turbo.build/repo/docs/guides/tools/jest)
- [Biome](https://turbo.build/repo/docs/guides/tools/biome)