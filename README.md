# uOttawa Software Engineering Students' Association (SESA)

This is the repository for the main SESA website.

## Getting Started

First, make sure that Corepack (included with Node.js) is enabled (if you're on Windows, run this command in a terminal as admin):

```sh
corepack enable
corepack prepare pnpm@latest --activate
```

Then, install the dependencies:

```sh
pnpm install
```

Then build packages:

```sh
pnpm build
```

Then start development server:

```sh
pnpm dev --filter web
```

> [!NOTE]
> You will need to store your environment variables under `apps/web/.env`

Open [http://localhost:3000](http://localhost:3000) to see the website.

## License

This project is licensed under the GNU Affero General Public License, Version 3.0
([LICENSE](LICENSE) or <https://www.gnu.org/licenses/agpl-3.0.en.html>).
