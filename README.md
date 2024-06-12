<div align="center">
  <img src="/assets/banner.jpeg"></img>
</div>

# RoR: Mancala

Mancala is a classic strategy board game reimagined as a decentralized, on-chain experience. Built with Cairo smart contracts on the Dojo game engine, it leverages blockchain technology for secure gameplay and global state. The project's MIT and CC0 licenses foster open-source development and maximum accessibility.

## Prerequisites

- [Dojo onchain game engine](https://book.dojoengine.org)
- [Node](https://nodejs.org/en/download/package-manager)

## Project Structure

- client
- contracts

## Setup

Install dojo via

`curl -L https://install.dojoengine.org | bash`

Make sure install the same version within the `Scarb.toml` file. Currently this is `0.6.0`

Mancala uses a pnpm as a package manager. So you will need pnpm installed also.

`npm install -g pnpm`

### Client Setup

- **Dependencies:** Navigate to client directory and install deps
  ```bash
  cd client && pnpm install && pnpm dev
  ```

### Contracts, Katana and Indexing

For local setup and execution on Katana, follow these steps:

1. **Navigate to Contracts Directory:**
   ```bash
   cd contracts
   ```
2. **Build Contracts:**
   ```bash
   sozo build
   ```
3. **Run Katana:**
   ```bash
   katana --disable-fee
   ```
4. **Apply Migrations:**
   ```bash
   sozo migrate
   ```
5. **Run Indexer (in another cli window):**
   ```bash
   torii --world <WORLD ADDRESS>
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://okhaimie.com"><img src="https://avatars.githubusercontent.com/u/57156589?v=4?s=100" width="100px;" alt="okhai.stark ( Tony Stark )"/><br /><sub><b>okhai.stark ( Tony Stark )</b></sub></a><br /><a href="#code-okhaimie-dev" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/supreme2580"><img src="https://avatars.githubusercontent.com/u/100731397?v=4?s=100" width="100px;" alt="Supreme Labs"/><br /><sub><b>Supreme Labs</b></sub></a><br /><a href="#code-supreme2580" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
