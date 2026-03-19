# Node Training Repository

Hands-on training material for modern JavaScript, Node.js internals, Express + TypeScript APIs, testing, auth, and API docs.

## Learning Goals

- Practice modern JavaScript syntax and patterns.
- Understand Node.js runtime behavior (event loop, streams, workers).
- Build layered APIs with Express + TypeScript.
- Practice API authentication, testing, and documentation workflows.
- Understand CommonJS vs ESM trade-offs in TypeScript projects.

## Repository Modules

### Module 1 - Modern JavaScript and TypeScript

Focus: language fundamentals and TypeScript basics.

Highlights:

- ES6+ syntax: arrow functions, destructuring, spread/rest.
- Async examples: promises and async/await.
- Class/object/function practice files.
- TypeScript mini-project in `Module1/typescript`.
- Exercise brief in `Module1/dataFetcher/ReadME.md`.

Run TypeScript mini-project:

```bash
cd Module1/typescript
npm install
npm run build
npm run start
```

### Module 2 - Node.js Runtime Concepts

Focus: how Node executes and scales I/O and CPU work.

Highlights:

- `blockingVsAsync.js` - sync vs async file operations.
- `event-loop-demo.js` - microtasks/macrotasks ordering.
- `stream-example.js` - stream large file over HTTP.
- `worker-thread-demo/` - offload CPU-bound work with workers.

Run examples:

```bash
cd Module2
node event-loop-demo.js
node stream-example.js
node worker-thread-demo/main.js
```

### Module 3

Reserved for future training content.

### Module 4 - Express + TypeScript API (`Module4/express-ts-esm`)

Focus: layered API architecture with TypeScript.

Architecture:

- `routes -> controllers -> services -> repositories`
- `middleware` for request pipeline concerns

Main endpoints:

- `GET /users`
- `GET /users/:id`
- `POST /users`

Current runtime setup (important):

- Full ESM in Node (`"type": "module"`)
- TypeScript Node ESM mode (`"module": "NodeNext"`, `"moduleResolution": "NodeNext"`)
- Dev runner uses `tsx` (not `ts-node/esm` loader)

Run module:

```bash
cd Module4/express-ts-esm
npm install
npm run dev
```

Build module:

```bash
npm run build
```

Start without watch:

```bash
npm run start
```

### Module 5 - REST API Basics (`Module5/rest-api`)

Focus: build a simple layered REST API with validation.

Highlights:

- Layered structure: `routes -> controllers -> services -> repositories`.
- Item-focused API under `/items`.
- Zod request validation middleware.
- TypeScript + Express dev workflow with `tsx`.

Run module:

```bash
cd Module5/rest-api
npm install
npm run dev
```

Build and run once:

```bash
npm run build
npm run start
```

### Module 6 - Zod Validation Patterns (`Module6/zod-validation`)

Focus: compare Zod `parse`, `safeParse`, and middleware-based validation.

Highlights:

- Direct validation endpoint examples.
- Structured error/data response with `safeParse`.
- Reusable validation middleware pattern.
- User payload schema practice.

Main endpoints:

- `POST /zod-test`
- `POST /zod-test-safe`
- `POST /zod-test-middleware`

Run module:

```bash
cd Module6/zod-validation
npm install
npm run dev
```

### Module 7 - DB Integration with Prisma (`Module7/db-integration`)

Focus: PostgreSQL integration using Express, Prisma v7, and the Prisma PG adapter.

Highlights:

- CRUD endpoints for `users` and related `posts`.
- Prisma schema + migrations in `prisma/`.
- Prisma runtime adapter via `@prisma/adapter-pg`.
- Env-based DB connection using `DATABASE_URL`.

Run module:

```bash
cd Module7/db-integration
npm install
npx prisma generate
npm run migrate
npm run dev
```

Seed sample data:

```bash
cd Module7/db-integration
npm run seed
```

Main endpoints:

- `GET /`
- `GET /users`
- `GET /users/:id`
- `POST /users`
- `PUT /users/:id`
- `DELETE /users/:id`

### Module 8 - REST API Auth (`Module8/rest-api-auth`)

Focus: add authentication and route protection to a layered REST API.

Highlights:

- Item CRUD routes under `/items`.
- Auth routes for register/login/profile under `/auth`.
- Password hashing with `bcrypt`.
- JWT token generation and verification middleware.
- Env-based settings (`PORT`, `JWT_SECRET`).

Main endpoints:

- `POST /auth/register`
- `POST /auth/login`
- `GET /auth/profile` (protected)
- `GET /items`
- `GET /items/:id`
- `POST /items`
- `PUT /items/:id`
- `DELETE /items/:id`

Run module:

```bash
cd Module8/rest-api-auth
npm install
npm run dev
```

Env setup:

- Copy values from `src/env.example` into a local `.env`.

### Module 9 - Express Test Lab (`Module9/express-test-lab`)

Focus: test Express APIs and utility functions with unit and integration tests.

Highlights:

- Integration tests for API routes using `supertest`.
- Unit tests for utility functions using `vitest`.
- Coverage reporting with `vitest --coverage`.

Main endpoints:

- `GET /users`
- `POST /users`

Run module:

```bash
cd Module9/express-test-lab
npm install
npm run dev
```

Run tests:

```bash
npm test
npm run test:coverage
```

### Module 11 - REST API Documentation (`Module11/rest-api-doc`)

Focus: generate and serve API documentation for an Express REST API.

Highlights:

- Item CRUD routes under `/items`.
- Swagger UI from JSDoc annotations at `/api-docs`.
- Swagger UI from OpenAPI YAML file at `/api-docs/yaml`.

Main endpoints:

- `GET /items`
- `GET /items/:id`
- `POST /items`
- `PUT /items/:id`
- `DELETE /items/:id`
- `GET /api-docs`
- `GET /api-docs/yaml`

Run module:

```bash
cd Module11/rest-api-doc
npm install
npm run dev
```

## Postman Collection

- Collection file: `PostmanCollection/v1/Node Training.postman_collection.json`
- This collection is shared across modules.
- Import it in Postman via **Import -> File**, then run the target module before sending requests.

## TypeScript Import Rule (Important)

This repository demonstrates both common setups. Module 4 is currently using full ESM.

- **CommonJS runtime** (`module: CommonJS`) can use extensionless imports in TS:
  - `import { x } from "./file"`
- **Node ESM runtime** (`type: module` + `NodeNext`) requires explicit extensions for relative imports at runtime:
  - usually `import { x } from "./file.js"` in TS source

If imports fail with "Cannot find module", check your module system config (`tsconfig.json` + `package.json`) first.

## Troubleshooting

- If you see `Cannot find module ...` in Module 4, verify relative imports include `.js` in TS files.
- If you see Node loader experimental warnings, use `npm run dev` (tsx-based) instead of custom `node --loader ts-node/esm` commands.
- After changing scripts or config, stop and restart the dev server.
- If you see `Cannot find module '.prisma/client/default'` in Module 7, regenerate Prisma client with `npx prisma generate` and ensure `prisma/schema.prisma` uses `provider = "prisma-client-js"` for the `generator client`.
- If you see `SASL: ... client password must be a string`, verify `DATABASE_URL` in `.env` is set correctly and loaded before creating the PostgreSQL `Pool`.
- If Module 8 auth requests fail with token errors, check `JWT_SECRET` and ensure you pass `Authorization: Bearer <token>`.
- If Module 9 tests fail after API changes, update both integration tests in `tests/integration` and route logic in `src/routes`.

## Training Workflow

1. Read module objective.
2. Run the example.
3. Change one thing and rerun.
4. Explain the behavior difference.

## Notes

- Content is intentionally simple and training-focused.
- Some file names are intentionally kept as-is to match classroom demos.
