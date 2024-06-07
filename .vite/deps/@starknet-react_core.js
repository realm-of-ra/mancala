import {
  QueryClient,
  QueryClientProvider,
  eventemitter3_default,
  require_jsx_runtime,
  useMutation,
  useQuery,
  useQueryClient,
  z
} from "./chunk-OUD7UKAV.js";
import {
  goerli,
  mainnet,
  sepolia
} from "./chunk-FGLWLMLJ.js";
import {
  BlockTag,
  CairoCustomEnum,
  CallData,
  Contract,
  ContractFactory,
  RpcProvider2,
  cairo_exports,
  constants_exports,
  hash_exports,
  num_exports,
  shortString_exports,
  starknetId_exports,
  uint256_exports
} from "./chunk-TQUWFIKU.js";
import "./chunk-ELN4VAZN.js";
import "./chunk-OPAFF7F5.js";
import {
  require_react
} from "./chunk-T22XXT7L.js";
import {
  __publicField,
  __toESM
} from "./chunk-J32WSRGE.js";

// node_modules/.pnpm/@starknet-react+core@2.8.2_get-starknet-core@3.3.0_react@18.3.1_starknet@6.8.0/node_modules/@starknet-react/core/dist/index.js
var import_react = __toESM(require_react());
var import_react2 = __toESM(require_react());
var import_react3 = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var import_react4 = __toESM(require_react());
var import_react5 = __toESM(require_react());
var import_react6 = __toESM(require_react());
var import_react7 = __toESM(require_react());
var import_react8 = __toESM(require_react());
var import_react9 = __toESM(require_react());
var import_react10 = __toESM(require_react());
var import_react11 = __toESM(require_react());
var import_react12 = __toESM(require_react());
var import_react13 = __toESM(require_react());
var import_react14 = __toESM(require_react());
var import_react15 = __toESM(require_react());
var import_react16 = __toESM(require_react());
var import_react17 = __toESM(require_react());
var Connector = class extends eventemitter3_default {
};
var ConnectorAlreadyConnectedError = class extends Error {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "ConnectorAlreadyConnectedError");
    __publicField(this, "message", "Connector already connected");
  }
};
var ConnectorNotConnectedError = class extends Error {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "ConnectorNotConnectedError");
    __publicField(this, "message", "Connector not connected");
  }
};
var ConnectorNotFoundError = class extends Error {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "ConnectorNotFoundError");
    __publicField(this, "message", "Connector not found");
  }
};
var UserRejectedRequestError = class extends Error {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "UserRejectedRequestError");
    __publicField(this, "message", "User rejected request");
  }
};
var UserNotConnectedError = class extends Error {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "UserNotConnectedError");
    __publicField(this, "message", "User not connected");
  }
};
var UnsupportedAccountInterfaceError = class extends Error {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "UnsupportedAccountInterfaceError");
    __publicField(this, "message", "Unsupported account interface. starknet-react v1 only supports the starknet.js v5 account interface");
  }
};
var WALLET_NOT_FOUND_ICON_LIGHT = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iYmxhY2siPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTkuODc5IDcuNTE5YzEuMTcxLTEuMDI1IDMuMDcxLTEuMDI1IDQuMjQyIDAgMS4xNzIgMS4wMjUgMS4xNzIgMi42ODcgMCAzLjcxMi0uMjAzLjE3OS0uNDMuMzI2LS42Ny40NDItLjc0NS4zNjEtMS40NS45OTktMS40NSAxLjgyN3YuNzVNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6bS05IDUuMjVoLjAwOHYuMDA4SDEydi0uMDA4eiIgLz4KPC9zdmc+";
var WALLET_NOT_FOUND_ICON_DARK = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0id2hpdGUiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTkuODc5IDcuNTE5YzEuMTcxLTEuMDI1IDMuMDcxLTEuMDI1IDQuMjQyIDAgMS4xNzIgMS4wMjUgMS4xNzIgMi42ODcgMCAzLjcxMi0uMjAzLjE3OS0uNDMuMzI2LS42Ny40NDItLjc0NS4zNjEtMS40NS45OTktMS40NSAxLjgyN3YuNzVNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6bS05IDUuMjVoLjAwOHYuMDA4SDEydi0uMDA4eiIgLz4KPC9zdmc+Cg==";
var walletIcons = {
  argentX: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA2NS4xOTUwOCA1Ny43MzU2MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjUuMTk1MDggNTcuNzM1NjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkY4NzVCO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQwLjk4NTkyLDBIMjQuMjA4ODhjLTAuNTYsMC0xLjAxMDAxLDAuNDUxMDItMS4wMjE5NywxLjAxMjAyCgljLTAuMzM4OTksMTUuNzU1LTguNTgyMDMsMzAuNzA4OTgtMjIuNzcwMDIsNDEuMzAwOTljLTAuNDUwMDEsMC4zMzcwMS0wLjU1Mjk4LDAuOTY3OTktMC4yMjQsMS40MjNsOS44MTU5OCwxMy41NzMKCWMwLjMzNDA1LDAuNDYyMDEsMC45ODUwNSwwLjU2NTk4LDEuNDQyOTksMC4yMjY5OWM4Ljg3MTAzLTYuNTc5MDEsMTYuMDA3MDItMTQuNTE3LDIxLjE0NjA2LTIzLjMxNQoJYzUuMTM4LDguNzk4LDEyLjI3Mzk5LDE2LjczNTk5LDIxLjE0NiwyMy4zMTVjMC40NTY5NywwLjMzODk5LDEuMTA3OTcsMC4yMzUwMiwxLjQ0MTk2LTAuMjI2OTlsOS44MTYwNC0xMy41NzMKCWMwLjMyODk4LTAuNDU1MDIsMC4yMjY5OS0xLjA4Ni0wLjIyNC0xLjQyM0M1MC41ODk4NiwzMS43MjEwMSw0Mi4zNDY4OCwxNi43NjcwMyw0Mi4wMDc4OSwxLjAxMjAyCglDNDEuOTk1ODcsMC40NTEwMiw0MS41NDY4OSwwLDQwLjk4NTkyLDAiLz4KPC9zdmc+Cg==",
  braavos: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zMjMuNDQgNDEuMzg4NkMzMjQuMTk4IDQyLjY3MjggMzIzLjE5NSA0NC4yNjAzIDMyMS43MDQgNDQuMjYwM0MyOTEuNTEgNDQuMjYwMyAyNjYuOTY1IDY4LjE2NTYgMjY2LjM4OSA5Ny44NzFDMjU2LjA1IDk1Ljk0MDcgMjQ1LjMzNyA5NS43OTU2IDIzNC43NTQgOTcuNTc4N0MyMzQuMDIzIDY4LjAwOSAyMDkuNTQgNDQuMjYwMyAxNzkuNDQ1IDQ0LjI2MDNDMTc3Ljk1MyA0NC4yNjAzIDE3Ni45NDkgNDIuNjcxNiAxNzcuNzA3IDQxLjM4NjVDMTkyLjMyMyAxNi42MzMgMjE5LjQ4MyAwIDI1MC41NzMgMEMyODEuNjY0IDAgMzA4LjgyNCAxNi42MzM5IDMyMy40NCA0MS4zODg2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzIzMjRfNjE4NjkpIi8+CjxwYXRoIGQ9Ik00MTguNzU2IDIyNi44OTRDNDI2LjM3IDIyOS4yIDQzMy41ODEgMjIyLjUxNyA0MzEuMDM2IDIxNC45NzlDNDA0LjUwNyAxMzYuNDAxIDMxNi41MzUgMTA0LjM1OCAyNTAuMTU5IDEwNC4zNThDMTgzLjY3NCAxMDQuMzU4IDkzLjczOTEgMTM3LjQxOCA2OS4zMDUxIDIxNS4zMzFDNjYuOTU3NCAyMjIuODE4IDc0LjE0NjUgMjI5LjI3NSA4MS42NDc5IDIyNi45NzdMMjQ0LjI1IDE3Ny4xNTFDMjQ3LjU2OSAxNzYuMTM0IDI1MS4xMTYgMTc2LjEyOCAyNTQuNDM5IDE3Ny4xMzVMNDE4Ljc1NiAyMjYuODk0WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzIzMjRfNjE4NjkpIi8+CjxwYXRoIGQ9Ik02OS43MTY1IDIzOS40MjZMMjQ0LjM3IDE4Ni40NTZDMjQ3LjY2OSAxODUuNDU2IDI1MS4xOTEgMTg1LjQ1MyAyNTQuNDkyIDE4Ni40NDhMNDMwLjIzMiAyMzkuNDUyQzQ0NC43NiAyNDMuODMzIDQ1NC43MDEgMjU3LjIxNiA0NTQuNzAxIDI3Mi4zOVY0MzAuNDgxQzQ1NC4wMjggNDY5LjA3IDQxOS4zNjIgNTAwIDM4MC43ODYgNTAwSDMxNi43MTJDMzEwLjM3OSA1MDAgMzA1LjI1IDQ5NC44NzcgMzA1LjI1IDQ4OC41NDNWNDMzLjExNUMzMDUuMjUgNDExLjI4OSAzMTguMTY3IDM5MS41MzUgMzM4LjE1NSAzODIuNzkyQzM2NC45NDkgMzcxLjA3MSAzOTYuNjQ2IDM1NS4yMTggNDAyLjYwOCAzMjMuNDA2QzQwNC41MzIgMzEzLjEzOCAzOTcuODM3IDMwMy4yMzQgMzg3LjU5NSAzMDEuMTk4QzM2MS42OTkgMjk2LjA1MSAzMzIuOTg5IDI5OC4wMzkgMzA4LjcxMSAzMDguODk4QzI4MS4xNSAzMjEuMjI1IDI3My45NCAzNDEuNzMxIDI3MS4yNzEgMzY5LjI3TDI2OC4wMzYgMzk4LjkzOEMyNjcuMDQ3IDQwOC4wMDUgMjU4LjU0NiA0MTQuOTUyIDI0OS40MjkgNDE0Ljk1MkMyMzkuOTk4IDQxNC45NTIgMjMyLjkyNiA0MDcuNzY5IDIzMS45MDMgMzk4LjM4OEwyMjguNzI4IDM2OS4yN0MyMjYuNDQyIDM0NS42ODEgMjIyLjI5OCAzMjIuNzY3IDE5Ny45MTIgMzExLjg2QzE3MC4wOTUgMjk5LjQxOSAxNDIuMTQxIDI5NS4yODcgMTEyLjQwNCAzMDEuMTk4QzEwMi4xNjIgMzAzLjIzNCA5NS40NjcgMzEzLjEzOCA5Ny4zOTEzIDMyMy40MDZDMTAzLjQwNSAzNTUuNDk1IDEzNC44NTQgMzcwLjk4NSAxNjEuODQ0IDM4Mi43OTJDMTgxLjgzMyAzOTEuNTM1IDE5NC43NSA0MTEuMjg5IDE5NC43NSA0MzMuMTE1VjQ4OC41MzNDMTk0Ljc1IDQ5NC44NjcgMTg5LjYyMiA1MDAgMTgzLjI4OSA1MDBIMTE5LjIxNEM4MC42Mzc0IDUwMCA0NS45NzE2IDQ2OS4wNyA0NS4yOTc5IDQzMC40ODFWMjcyLjM0OUM0NS4yOTc5IDI1Ny4xOTQgNTUuMjE0MiAyNDMuODI0IDY5LjcxNjUgMjM5LjQyNloiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl8yMzI0XzYxODY5KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzIzMjRfNjE4NjkiIHgxPSIyNDUuOTg2IiB5MT0iLTI3IiB4Mj0iNDI1LjQ5NiIgeTI9IjUwMi4zNzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y1RDQ1RSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk2MDAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzIzMjRfNjE4NjkiIHgxPSIyNDUuOTg2IiB5MT0iLTI3IiB4Mj0iNDI1LjQ5NiIgeTI9IjUwMi4zNzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y1RDQ1RSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk2MDAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzIzMjRfNjE4NjkiIHgxPSIyNDUuOTg2IiB5MT0iLTI3IiB4Mj0iNDI1LjQ5NiIgeTI9IjUwMi4zNzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y1RDQ1RSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk2MDAiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4="
};
var InjectedConnector = class extends Connector {
  constructor({ options }) {
    super();
    __publicField(this, "_wallet");
    __publicField(this, "_options");
    this._options = options;
  }
  get id() {
    return this._options.id;
  }
  get name() {
    var _a;
    return this._options.name ?? ((_a = this._wallet) == null ? void 0 : _a.name) ?? this._options.id;
  }
  get icon() {
    var _a, _b;
    let defaultIcon = {
      dark: ((_a = this._wallet) == null ? void 0 : _a.icon) || walletIcons[this.id] || WALLET_NOT_FOUND_ICON_DARK,
      light: ((_b = this._wallet) == null ? void 0 : _b.icon) || walletIcons[this.id] || WALLET_NOT_FOUND_ICON_LIGHT
    };
    return this._options.icon ?? defaultIcon;
  }
  available() {
    this.ensureWallet();
    return this._wallet !== void 0;
  }
  async chainId() {
    this.ensureWallet();
    if (!this._wallet) {
      throw new ConnectorNotConnectedError();
    }
    const chainIdHex = await this._wallet.provider.getChainId();
    const chainId = BigInt(chainIdHex);
    return chainId;
  }
  async ready() {
    this.ensureWallet();
    if (!this._wallet)
      return false;
    return await this._wallet.isPreauthorized();
  }
  async connect() {
    this.ensureWallet();
    if (!this._wallet) {
      throw new ConnectorNotFoundError();
    }
    let accounts;
    try {
      accounts = await this._wallet.enable({ starknetVersion: "v5" });
    } catch {
      throw new UserRejectedRequestError();
    }
    if (!this._wallet.isConnected || !accounts) {
      throw new UserRejectedRequestError();
    }
    this._wallet.on("accountsChanged", async (accounts2) => {
      await this.onAccountsChanged(accounts2);
    });
    this._wallet.on("networkChanged", (network) => {
      this.onNetworkChanged(network);
    });
    await this.onAccountsChanged(accounts);
    const account = this._wallet.account.address;
    const chainId = await this.chainId();
    this.emit("connect", { account, chainId });
    return {
      account,
      chainId
    };
  }
  async disconnect() {
    var _a;
    this.ensureWallet();
    if (!this.available()) {
      throw new ConnectorNotFoundError();
    }
    if (!((_a = this._wallet) == null ? void 0 : _a.isConnected)) {
      throw new UserNotConnectedError();
    }
    this.emit("disconnect");
  }
  async account() {
    this.ensureWallet();
    if (!this._wallet || !this._wallet.account) {
      throw new ConnectorNotConnectedError();
    }
    return this._wallet.account;
  }
  ensureWallet() {
    const installed = getAvailableWallets(globalThis);
    const wallet = installed.filter((w) => w.id === this._options.id)[0];
    if (wallet) {
      this._wallet = wallet;
    }
  }
  async onAccountsChanged(accounts) {
    let account;
    if (typeof accounts === "string") {
      account = accounts;
    } else {
      account = accounts[0];
    }
    if (account) {
      const chainId = await this.chainId();
      this.emit("change", { account, chainId });
    } else {
      this.emit("disconnect");
    }
  }
  onNetworkChanged(network) {
    switch (network) {
      case "SN_MAIN":
        this.emit("change", { chainId: mainnet.id });
        break;
      case "SN_GOERLI":
        this.emit("change", { chainId: goerli.id });
        break;
      case "SN_SEPOLIA":
        this.emit("change", { chainId: sepolia.id });
        break;
      case "mainnet-alpha":
        this.emit("change", { chainId: mainnet.id });
        break;
      case "goerli-alpha":
        this.emit("change", { chainId: goerli.id });
        break;
      case "sepolia-alpha":
        this.emit("change", { chainId: sepolia.id });
        break;
      default:
        this.emit("change", {});
        break;
    }
  }
};
function getAvailableWallets(obj) {
  return Object.values(
    Object.getOwnPropertyNames(obj).reduce((wallets, key) => {
      if (key.startsWith("starknet")) {
        const wallet = obj[key];
        if (isWalletObject(wallet) && !wallets[wallet.id]) {
          wallets[wallet.id] = wallet;
        }
      }
      return wallets;
    }, {})
  );
}
function isWalletObject(wallet) {
  try {
    return wallet && [
      // wallet's must have methods/members, see IStarknetWindowObject
      "request",
      "isConnected",
      "provider",
      "enable",
      "isPreauthorized",
      "on",
      "off",
      "version",
      "id",
      "name",
      "icon"
    ].every((key) => key in wallet);
  } catch (err) {
  }
  return false;
}
function argent() {
  return new InjectedConnector({
    options: {
      id: "argentX",
      name: "Argent"
    }
  });
}
function braavos() {
  return new InjectedConnector({
    options: {
      id: "braavos",
      name: "Braavos"
    }
  });
}
function injected({ id }) {
  return new InjectedConnector({
    options: {
      id
    }
  });
}
function useInjectedConnectors({
  recommended,
  includeRecommended = "always",
  order = "alphabetical"
}) {
  const [injectedConnectors, setInjectedConnectors] = (0, import_react.useState)([]);
  const refreshConnectors = (0, import_react.useCallback)(() => {
    const wallets = scanObjectForWallets(window);
    const connectors2 = wallets.map((wallet) => injected({ id: wallet.id }));
    setInjectedConnectors(connectors2);
  }, [setInjectedConnectors]);
  (0, import_react.useEffect)(() => {
    refreshConnectors();
  }, [refreshConnectors]);
  const connectors = (0, import_react.useMemo)(() => {
    return mergeConnectors(injectedConnectors, recommended ?? [], {
      includeRecommended,
      order
    });
  }, [injectedConnectors, recommended, includeRecommended, order]);
  return { connectors };
}
function mergeConnectors(injected2, recommended, {
  includeRecommended,
  order
}) {
  const injectedIds = new Set(injected2.map((connector) => connector.id));
  const allConnectors = [...injected2];
  const shouldAddRecommended = includeRecommended === "always" || includeRecommended === "onlyIfNoConnectors" && injected2.length === 0;
  if (shouldAddRecommended) {
    allConnectors.push(
      ...recommended.filter((connector) => !injectedIds.has(connector.id))
    );
  }
  if (order === "random") {
    return shuffle(allConnectors);
  }
  return allConnectors.sort((a, b) => a.id.localeCompare(b.id));
}
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function scanObjectForWallets(obj) {
  return Object.values(
    Object.getOwnPropertyNames(obj).reduce((wallets, key) => {
      if (key.startsWith("starknet")) {
        const wallet = obj[key];
        if (isWalletObject2(wallet) && !wallets[wallet.id]) {
          wallets[wallet.id] = wallet;
        }
      }
      return wallets;
    }, {})
  );
}
function isWalletObject2(wallet) {
  try {
    return wallet && [
      // wallet's must have methods/members, see IStarknetWindowObject
      "request",
      "isConnected",
      "provider",
      "enable",
      "isPreauthorized",
      "on",
      "off",
      "version",
      "id",
      "name",
      "icon"
    ].every((key) => key in wallet);
  } catch (err) {
  }
  return false;
}
var MockConnector = class extends Connector {
  constructor({
    accounts,
    options
  }) {
    super();
    __publicField(this, "_accounts");
    __publicField(this, "_accountIndex", 0);
    __publicField(this, "_options");
    __publicField(this, "_connected", false);
    __publicField(this, "_chainId", goerli.id);
    if (accounts.mainnet.length === 0 || accounts.goerli.length === 0) {
      throw new Error("MockConnector: accounts must not be empty");
    }
    this._accounts = accounts;
    this._options = options;
  }
  switchChain(chainId) {
    this._chainId = chainId;
    this._accountIndex = 0;
    let account;
    if (this._options.unifiedSwitchAccountAndChain) {
      account = this._account.address;
    }
    this.emit("change", { chainId, account });
    if (this._options.emitChangeAccountOnChainSwitch ?? true) {
      this.switchAccount(this._accountIndex);
    }
  }
  switchAccount(accountIndex) {
    this._accountIndex = accountIndex;
    this.emit("change", { account: this._account.address });
  }
  get id() {
    return this._options.id;
  }
  get name() {
    return this._options.name;
  }
  get icon() {
    return this._options.icon;
  }
  available() {
    return this._options.available ?? true;
  }
  async chainId() {
    return this._chainId;
  }
  async ready() {
    return this._connected;
  }
  async connect() {
    if (this._options.failConnect) {
      throw new UserRejectedRequestError();
    }
    this._connected = true;
    return {
      account: this._account.address,
      chainId: this._chainId
    };
  }
  async disconnect() {
    this._connected = false;
    this.emit("disconnect");
  }
  async account() {
    if (!this.available()) {
      throw new ConnectorNotFoundError();
    }
    if (!this._connected) {
      throw new ConnectorNotConnectedError();
    }
    return this._account;
  }
  get _account() {
    let account;
    if (this._chainId === mainnet.id) {
      account = this._accounts.mainnet[this._accountIndex];
    } else {
      account = this._accounts.goerli[this._accountIndex];
    }
    if (!account) {
      throw new ConnectorNotConnectedError();
    }
    return account;
  }
};
var AccountContext = import_react3.default.createContext(
  void 0
);
function useStarknetAccount() {
  const account = (0, import_react3.useContext)(AccountContext);
  return { account };
}
function AccountProvider({
  account,
  children
}) {
  return (0, import_jsx_runtime.jsx)(AccountContext.Provider, { value: account, children });
}
var defaultQueryClient = new QueryClient();
var StarknetContext = (0, import_react2.createContext)(void 0);
function useStarknet() {
  const state = (0, import_react2.useContext)(StarknetContext);
  if (!state) {
    throw new Error(
      "useStarknet must be used within a StarknetProvider or StarknetConfig"
    );
  }
  return state;
}
function useStarknetManager({
  chains,
  provider,
  explorer,
  connectors = [],
  autoConnect = false
}) {
  const initialChain = chains[0];
  if (initialChain === void 0) {
    throw new Error("Must provide at least one chain.");
  }
  const { chain: defaultChain, provider: defaultProvider } = providerForChain(
    initialChain,
    provider
  );
  const connectorRef = (0, import_react2.useRef)();
  const [state, setState] = (0, import_react2.useState)({
    currentChain: defaultChain,
    currentProvider: defaultProvider,
    connectors
  });
  const updateChainAndProvider = (0, import_react2.useCallback)(
    ({ chainId }) => {
      if (!chainId)
        return;
      for (const chain of chains) {
        if (chain.id === chainId) {
          const { chain: newChain, provider: newProvider } = providerForChain(
            chain,
            provider
          );
          setState((state2) => ({
            ...state2,
            currentChain: newChain,
            currentProvider: newProvider
          }));
          return;
        }
      }
    },
    [setState, chains]
  );
  const handleConnectorChange = (0, import_react2.useCallback)(
    async ({ chainId, account }) => {
      if (chainId) {
        updateChainAndProvider({ chainId });
      }
      if (account && connectorRef.current) {
        const account2 = await connectorRef.current.account();
        setState((state2) => ({
          ...state2,
          currentAccount: account2
        }));
      }
    },
    [updateChainAndProvider, setState, connectorRef]
  );
  const connect = (0, import_react2.useCallback)(
    async ({ connector }) => {
      var _a, _b, _c;
      if (!connector) {
        throw new Error("Must provide a connector.");
      }
      const needsListenerSetup = ((_a = connectorRef.current) == null ? void 0 : _a.id) !== connector.id;
      if (needsListenerSetup) {
        (_b = connectorRef.current) == null ? void 0 : _b.off("change", handleConnectorChange);
      }
      try {
        const { chainId } = await connector.connect();
        const account = await connector.account();
        if (account.address !== ((_c = state.currentAccount) == null ? void 0 : _c.address)) {
          connectorRef.current = connector;
          setState((state2) => ({
            ...state2,
            currentAccount: account
          }));
        }
        if (autoConnect) {
          localStorage.setItem("lastUsedConnector", connector.id);
        }
        if (needsListenerSetup) {
          connector.on("change", handleConnectorChange);
        }
        updateChainAndProvider({ chainId });
      } catch (err) {
        setState((state2) => ({
          ...state2,
          error: new ConnectorNotFoundError()
        }));
        throw err;
      }
    },
    [
      autoConnect,
      setState,
      connectorRef,
      state.currentAccount,
      handleConnectorChange,
      updateChainAndProvider
    ]
  );
  const disconnect = (0, import_react2.useCallback)(async () => {
    setState((state2) => ({
      ...state2,
      currentAccount: void 0,
      currentProvider: defaultProvider,
      currentChain: defaultChain
    }));
    if (autoConnect) {
      localStorage.removeItem("lastUsedConnector");
    }
    if (!connectorRef.current)
      return;
    connectorRef.current.off("change", handleConnectorChange);
    try {
      await connectorRef.current.disconnect();
    } catch {
    }
    connectorRef.current = void 0;
  }, [
    autoConnect,
    setState,
    connectorRef,
    handleConnectorChange,
    defaultProvider,
    defaultChain
  ]);
  (0, import_react2.useEffect)(() => {
    async function tryAutoConnect(connectors2) {
      const lastConnectedConnectorId = localStorage.getItem("lastUsedConnector");
      if (lastConnectedConnectorId === null) {
        return;
      }
      const lastConnectedConnector = connectors2.find(
        (connector) => connector.id === lastConnectedConnectorId
      );
      if (lastConnectedConnector === void 0) {
        return;
      }
      try {
        if (!await lastConnectedConnector.ready()) {
          return;
        }
        connect({ connector: lastConnectedConnector });
      } catch {
      }
    }
    if (autoConnect && !connectorRef.current) {
      tryAutoConnect(connectors);
    }
  }, []);
  return {
    account: state.currentAccount,
    provider: state.currentProvider,
    chain: state.currentChain,
    connector: connectorRef.current,
    explorer,
    connect,
    disconnect,
    connectors,
    chains
  };
}
function StarknetProvider({
  chains,
  provider,
  connectors,
  explorer,
  autoConnect,
  queryClient,
  children
}) {
  const { account, ...state } = useStarknetManager({
    chains,
    provider,
    explorer,
    connectors,
    autoConnect
  });
  return (0, import_jsx_runtime2.jsx)(QueryClientProvider, { client: queryClient ?? defaultQueryClient, children: (0, import_jsx_runtime2.jsx)(StarknetContext.Provider, { value: state, children: (0, import_jsx_runtime2.jsx)(AccountProvider, { account, children }) }) });
}
function providerForChain(chain, factory) {
  const provider = factory(chain);
  if (provider) {
    return { chain, provider };
  }
  throw new Error(`No provider found for chain ${chain.name}`);
}
function starknetChainId(chainId) {
  switch (chainId) {
    case mainnet.id:
      return constants_exports.StarknetChainId.SN_MAIN;
    case goerli.id:
      return constants_exports.StarknetChainId.SN_GOERLI;
    case sepolia.id:
      return constants_exports.StarknetChainId.SN_SEPOLIA;
    default:
      return void 0;
  }
}
function StarknetConfig({ children, ...config }) {
  return (0, import_jsx_runtime3.jsx)(StarknetProvider, { ...config, children });
}
var StarkCompassExplorer = class {
  constructor(chain) {
    __publicField(this, "name", "Stark Compass");
    __publicField(this, "link");
    var _a, _b;
    this.link = ((_b = (_a = chain.explorers) == null ? void 0 : _a["starkCompass"]) == null ? void 0 : _b.toString()) ?? "";
  }
  block(hashOrNumber) {
    return `${this.link}/blocks/${hashOrNumber.hash ?? hashOrNumber.number}`;
  }
  transaction(hash2) {
    return `${this.link}/transactions/${hash2}`;
  }
  contract(address) {
    return `${this.link}/contracts/${address}`;
  }
  class(hash2) {
    return `${this.link}/classes/${hash2}`;
  }
};
var starkcompass = (chain) => {
  return new StarkCompassExplorer(chain);
};
var StarkscanExplorer = class {
  constructor(chain) {
    __publicField(this, "name", "Starkscan");
    __publicField(this, "link");
    var _a, _b;
    this.link = ((_b = (_a = chain.explorers) == null ? void 0 : _a["starkscan"]) == null ? void 0 : _b.toString()) ?? "";
  }
  block(hashOrNumber) {
    return `${this.link}/block/${hashOrNumber.hash ?? hashOrNumber.number}`;
  }
  transaction(hash2) {
    return `${this.link}/tx/${hash2}`;
  }
  contract(address) {
    return `${this.link}/contract/${address}`;
  }
  class(hash2) {
    return `${this.link}/class/${hash2}`;
  }
};
var starkscan = (chain) => {
  return new StarkscanExplorer(chain);
};
var ViewblockExplorer = class {
  constructor(chain) {
    __publicField(this, "name", "Viewblock");
    __publicField(this, "chainParam");
    __publicField(this, "link");
    var _a, _b;
    this.link = ((_b = (_a = chain.explorers) == null ? void 0 : _a["viewblock"]) == null ? void 0 : _b.toString()) ?? "";
    this.chainParam = chain.id === goerli.id ? "?network=goerli" : "";
  }
  block(hashOrNumber) {
    if (hashOrNumber.hash && hashOrNumber.number === void 0) {
      throw new Error(
        `The viewblock explorer doesnt support hashes for blocks. Please provide a hash.`
      );
    }
    return `${this.link}/block/${hashOrNumber.number}${this.chainParam}`;
  }
  transaction(hash2) {
    return `${this.link}/tx/${hash2}${this.chainParam}`;
  }
  contract(address) {
    return `${this.link}/contract/${address}${this.chainParam}`;
  }
  class(hash2) {
    return `${this.link}/class/${hash2}${this.chainParam}`;
  }
};
var viewblock = (chain) => {
  return new ViewblockExplorer(chain);
};
var VoyagerExplorer = class {
  constructor(chain) {
    __publicField(this, "name", "Voyager");
    __publicField(this, "link");
    var _a, _b;
    this.link = ((_b = (_a = chain.explorers) == null ? void 0 : _a["voyager"]) == null ? void 0 : _b.toString()) ?? "";
  }
  block(hashOrNumber) {
    if (hashOrNumber.number !== void 0 && hashOrNumber.hash === void 0) {
      throw new Error(
        "The voyager explorer doesn't support numbers for blocks. Please provide a hash."
      );
    }
    return `${this.link}/block/${hashOrNumber.hash}`;
  }
  transaction(hash2) {
    return `${this.link}/tx/${hash2}`;
  }
  contract(address) {
    return `${this.link}/contract/${address}`;
  }
  class(hash2) {
    return `${this.link}/class/${hash2}`;
  }
};
var voyager = (chain) => {
  return new VoyagerExplorer(chain);
};
function useQuery2(args) {
  const base = useQuery(args);
  return {
    data: base.data,
    error: base.error,
    status: base.status,
    isSuccess: base.isSuccess,
    isError: base.isError,
    isPending: base.isPending,
    fetchStatus: base.fetchStatus,
    isFetching: base.isFetching,
    isLoading: base.isLoading,
    refetch: base.refetch
  };
}
function useMutation2(args) {
  const base = useMutation(args);
  return {
    data: base.data,
    error: base.error,
    reset: base.reset,
    isError: base.isError,
    isIdle: base.isIdle,
    isPending: base.isPending,
    isSuccess: base.isSuccess,
    isPaused: base.isPaused,
    mutate: base.mutate,
    mutateAsync: base.mutateAsync,
    status: base.status,
    variables: base.variables
  };
}
function useConnect(props = {}) {
  const { connector, connectors, connect: connect_, chain } = useStarknet();
  const { mutate, mutateAsync, variables, ...result } = useMutation2({
    mutationKey: [{ entity: "connect", chainId: chain.name }],
    mutationFn: connect_,
    ...props
  });
  const connect = (0, import_react5.useCallback)(
    (args) => mutate(args ?? { connector }),
    [mutate, connector]
  );
  const connectAsync = (0, import_react5.useCallback)(
    (args) => mutateAsync(args ?? { connector }),
    [mutateAsync, connector]
  );
  return {
    connector,
    connectors,
    pendingConnector: variables == null ? void 0 : variables.connector,
    connect,
    connectAsync,
    variables,
    ...result
  };
}
function useAccount({
  onConnect,
  onDisconnect
} = {}) {
  const { account: connectedAccount } = useStarknetAccount();
  const { connectors } = useConnect();
  const [state, setState] = (0, import_react4.useState)({
    status: "disconnected"
  });
  const refreshState = (0, import_react4.useCallback)(async () => {
    if (!connectedAccount) {
      if (!state.isDisconnected && onDisconnect !== void 0) {
        onDisconnect();
      }
      return setState({
        status: "disconnected",
        isDisconnected: true,
        isConnected: false,
        isConnecting: false,
        isReconnecting: false
      });
    }
    for (const connector of connectors) {
      if (!connector.available())
        continue;
      let connAccount;
      try {
        connAccount = await connector.account();
      } catch {
      }
      if (connAccount && (connAccount == null ? void 0 : connAccount.address) === connectedAccount.address) {
        if (state.isDisconnected && onConnect !== void 0) {
          onConnect({ address: connectedAccount.address, connector });
        }
        return setState({
          connector,
          chainId: await connector.chainId(),
          account: connectedAccount,
          address: connectedAccount.address,
          status: "connected",
          isConnected: true,
          isConnecting: false,
          isDisconnected: false,
          isReconnecting: false
        });
      }
    }
    setState({
      connector: void 0,
      chainId: void 0,
      account: connectedAccount,
      address: connectedAccount.address,
      status: "connected",
      isConnected: true,
      isConnecting: false,
      isDisconnected: false,
      isReconnecting: false
    });
  }, [
    setState,
    connectedAccount,
    connectors,
    onConnect,
    onDisconnect,
    state.isDisconnected
  ]);
  (0, import_react4.useEffect)(() => {
    refreshState();
  }, [refreshState]);
  return state;
}
function useContract({
  abi,
  address,
  provider: providedProvider
}) {
  const { provider: currentProvider } = useStarknet();
  const contract = (0, import_react7.useMemo)(() => {
    const provider = providedProvider ? providedProvider : currentProvider;
    if (abi && address && provider) {
      return new Contract(abi, address, provider);
    }
    return void 0;
  }, [abi, address, providedProvider, currentProvider]);
  return { contract };
}
function useBlockNumber({
  blockIdentifier = BlockTag.latest,
  ...props
} = {}) {
  const { provider } = useStarknet();
  return useQuery2({
    queryKey: queryKey({ blockIdentifier }),
    queryFn: queryFn({ provider, blockIdentifier }),
    ...props
  });
}
function queryKey({ blockIdentifier }) {
  return [{ entity: "blockNumber", blockIdentifier }];
}
function queryFn({
  provider,
  blockIdentifier
}) {
  return async function() {
    const block = await provider.getBlock(blockIdentifier);
    return block.block_number;
  };
}
function useInvalidateOnBlock({
  enabled = true,
  queryKey: queryKey10
}) {
  const queryClient = useQueryClient();
  const [prevBlockNumber, setPrevBlockNumber] = (0, import_react8.useState)();
  const { data: blockNumber } = useBlockNumber({
    enabled
  });
  (0, import_react8.useEffect)(() => {
    if (!prevBlockNumber) {
      return setPrevBlockNumber(blockNumber);
    }
    if (blockNumber !== prevBlockNumber) {
      queryClient.invalidateQueries({ queryKey: queryKey10 }, { cancelRefetch: false });
      return setPrevBlockNumber(blockNumber);
    }
  }, [blockNumber, prevBlockNumber]);
}
function useNetwork() {
  const { chain, chains } = useStarknet();
  return { chain, chains };
}
var DEFAULT_FETCH_INTERVAL = 5e3;
function useBalance({
  token,
  address,
  blockIdentifier = BlockTag.latest,
  refetchInterval: refetchInterval_,
  watch = false,
  enabled: enabled_ = true,
  ...props
}) {
  const { chain } = useNetwork();
  const { contract } = useContract({
    abi: balanceABIFragment,
    address: token ?? chain.nativeCurrency.address
  });
  const queryKey_ = (0, import_react6.useMemo)(
    () => queryKey2({ chain, contract, token, address, blockIdentifier }),
    [chain, contract, token, address, blockIdentifier]
  );
  const enabled = (0, import_react6.useMemo)(
    () => Boolean(enabled_ && contract && address),
    [enabled_, contract, address]
  );
  const refetchInterval = refetchInterval_ ?? (blockIdentifier === BlockTag.pending && watch ? DEFAULT_FETCH_INTERVAL : void 0);
  useInvalidateOnBlock({
    enabled: Boolean(enabled && watch),
    queryKey: queryKey_
  });
  return useQuery2({
    queryKey: queryKey_,
    queryFn: queryFn2({ chain, contract, token, address, blockIdentifier }),
    refetchInterval,
    ...props
  });
}
function queryKey2({
  chain,
  contract,
  token,
  address,
  blockIdentifier
}) {
  return [
    {
      entity: "balance",
      chainId: chain == null ? void 0 : chain.name,
      contract,
      token,
      address,
      blockIdentifier
    }
  ];
}
function queryFn2({
  chain,
  token,
  address,
  contract,
  blockIdentifier
}) {
  return async function() {
    if (!address)
      throw new Error("address is required");
    if (!contract)
      throw new Error("contract is required");
    const callArgs = { blockIdentifier };
    let symbolPromise = Promise.resolve(chain.nativeCurrency.symbol);
    if (token) {
      symbolPromise = contract.call("symbol", [], callArgs).then((result) => {
        const s = symbolSchema.parse(result).symbol;
        return shortString_exports.decodeShortString(num_exports.toHex(s));
      });
    }
    let decimalsPromise = Promise.resolve(chain.nativeCurrency.decimals);
    if (token) {
      decimalsPromise = contract.call("decimals", [], callArgs).then((result) => {
        return Number(decimalsSchema.parse(result).decimals);
      });
    }
    const balanceOfPromise = contract.call("balanceOf", CallData.compile({ address }), callArgs).then((result) => {
      return uint256_exports.uint256ToBN(balanceSchema.parse(result).balance);
    });
    const [balanceOf, decimals, symbol] = await Promise.all([
      balanceOfPromise,
      decimalsPromise,
      symbolPromise
    ]);
    const formatted = formatUnits(balanceOf, decimals);
    return {
      value: balanceOf,
      decimals,
      symbol,
      formatted
    };
  };
}
var uint256Schema = z.object({
  low: z.bigint(),
  high: z.bigint()
});
var balanceSchema = z.object({
  balance: uint256Schema
});
var decimalsSchema = z.object({
  decimals: z.bigint()
});
var symbolSchema = z.object({
  symbol: z.bigint()
});
var balanceABIFragment = [
  {
    members: [
      {
        name: "low",
        offset: 0,
        type: "felt"
      },
      {
        name: "high",
        offset: 1,
        type: "felt"
      }
    ],
    name: "Uint256",
    size: 2,
    type: "struct"
  },
  {
    name: "balanceOf",
    type: "function",
    inputs: [
      {
        name: "account",
        type: "felt"
      }
    ],
    outputs: [
      {
        name: "balance",
        type: "Uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "symbol",
        type: "felt"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "decimals",
        type: "felt"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
function formatUnits(value, decimals) {
  let display = value.toString();
  const negative = display.startsWith("-");
  if (negative)
    display = display.slice(1);
  display = display.padStart(decimals, "0");
  let [integer, fraction] = [
    display.slice(0, display.length - decimals),
    display.slice(display.length - decimals)
  ];
  fraction = fraction.replace(/(0+)$/, "");
  return `${negative ? "-" : ""}${integer || "0"}${fraction ? `.${fraction}` : ""}`;
}
function useBlock({
  blockIdentifier = BlockTag.latest,
  ...props
} = {}) {
  const { provider } = useStarknet();
  return useQuery2({
    queryKey: queryKey3({ blockIdentifier }),
    queryFn: queryFn3({ provider, blockIdentifier }),
    ...props
  });
}
function queryKey3({ blockIdentifier }) {
  return [{ entity: "block", blockIdentifier }];
}
function queryFn3({
  provider,
  blockIdentifier
}) {
  return async function() {
    return await provider.getBlock(blockIdentifier);
  };
}
function useContractFactory({
  compiledContract,
  classHash,
  abi
}) {
  const { account } = useAccount();
  const contractFactory = (0, import_react9.useMemo)(() => {
    if (compiledContract && account && classHash) {
      return new ContractFactory({
        compiledContract,
        classHash,
        account,
        abi
      });
    }
    return void 0;
  }, [compiledContract, classHash, account, abi]);
  return { contractFactory };
}
var DEFAULT_FETCH_INTERVAL2 = 5e3;
function useContractRead({
  abi,
  address,
  functionName,
  args,
  blockIdentifier = BlockTag.latest,
  parseArgs,
  parseResult,
  refetchInterval: refetchInterval_,
  watch = false,
  enabled: enabled_ = true,
  ...props
}) {
  const { chain } = useNetwork();
  const { contract } = useContract({ abi, address });
  const queryKey_ = (0, import_react10.useMemo)(
    () => queryKey4({ chain, contract, functionName, args, blockIdentifier }),
    [chain, contract, functionName, args, blockIdentifier]
  );
  const enabled = (0, import_react10.useMemo)(
    () => Boolean(enabled_ && contract && functionName && args),
    [enabled_, contract, functionName, args]
  );
  const refetchInterval = refetchInterval_ ?? (blockIdentifier === BlockTag.pending && watch ? DEFAULT_FETCH_INTERVAL2 : void 0);
  useInvalidateOnBlock({
    enabled: Boolean(enabled && watch),
    queryKey: queryKey_
  });
  return useQuery2({
    queryKey: queryKey_,
    queryFn: queryFn4({
      contract,
      functionName,
      args,
      blockIdentifier,
      parseArgs,
      parseResult
    }),
    refetchInterval,
    ...props
  });
}
function queryKey4({
  chain,
  contract,
  functionName,
  args,
  blockIdentifier
}) {
  return [
    {
      entity: "readContract",
      chainId: chain == null ? void 0 : chain.name,
      contract: contract == null ? void 0 : contract.address,
      functionName,
      args,
      blockIdentifier
    }
  ];
}
function queryFn4({
  contract,
  functionName,
  args,
  blockIdentifier,
  parseArgs,
  parseResult
}) {
  return async function() {
    if (!contract)
      throw new Error("contract is required");
    if (contract.functions[functionName] === void 0) {
      throw new Error(`function ${functionName} not found in contract`);
    }
    return contract.call(functionName, args, {
      parseRequest: parseArgs,
      parseResponse: parseResult,
      blockIdentifier
    });
  };
}
function useContractWrite({
  calls,
  abis,
  options,
  ...props
}) {
  const { account } = useAccount();
  const { mutate, mutateAsync, ...result } = useMutation2({
    mutationKey: mutationKey({ account, calls, abis, options }),
    mutationFn: mutationFn({ account }),
    ...props
  });
  const write = (0, import_react11.useCallback)(
    (args) => {
      return mutate({
        ...args ?? {
          calls,
          abis,
          options
        }
      });
    },
    [mutate, calls, abis, options]
  );
  const writeAsync = (0, import_react11.useCallback)(
    (args) => {
      return mutateAsync({
        ...args ?? {
          calls,
          abis,
          options
        }
      });
    },
    [mutateAsync, calls, abis, options]
  );
  return {
    write,
    writeAsync,
    ...result
  };
}
function mutationKey({
  account,
  calls,
  abis,
  options
}) {
  return [{ entity: "contractWrite", account, calls, abis, options }];
}
function mutationFn({
  account
}) {
  return async function({ calls, abis, options }) {
    if (!account)
      throw new Error("account is required");
    if (!calls || calls.length === 0)
      throw new Error("calls are required");
    return await (account == null ? void 0 : account.execute(calls, abis, options));
  };
}
function useExplorer() {
  const { explorer, chain } = useStarknet();
  if (!explorer)
    throw Error("Explorer is undefined. Try adding it to StarknetConfig.");
  const explorerInstance = explorer(chain);
  if (!explorerInstance)
    throw Error("Explorer Instance is undefined");
  return explorerInstance;
}
function useDeployAccount({
  classHash,
  constructorCalldata,
  addressSalt,
  contractAddress,
  options,
  ...props
}) {
  const { account } = useAccount();
  const { mutate, mutateAsync, ...result } = useMutation2({
    mutationKey: mutationKey2({
      account,
      classHash,
      constructorCalldata,
      addressSalt,
      contractAddress,
      options
    }),
    mutationFn: mutationFn2({
      account,
      classHash,
      constructorCalldata,
      addressSalt,
      contractAddress,
      options
    }),
    ...props
  });
  return {
    deployAccount: mutate,
    deployAccountAsync: mutateAsync,
    ...result
  };
}
function mutationKey2(props) {
  return [{ entity: "deployAccount", ...props }];
}
function mutationFn2({
  account,
  classHash,
  constructorCalldata,
  addressSalt,
  contractAddress,
  options
}) {
  return async function() {
    if (!account)
      throw new Error("account is required");
    if (!classHash)
      throw new Error("classHash is required");
    return await account.deployAccount(
      { classHash, constructorCalldata, addressSalt, contractAddress },
      options
    );
  };
}
function useDisconnect(props = {}) {
  const { disconnect, chain } = useStarknet();
  const { mutate, mutateAsync, ...result } = useMutation2({
    mutationKey: [{ entity: "disconnect", chainId: chain.name }],
    mutationFn: disconnect,
    ...props
  });
  return {
    disconnect: mutate,
    disconnectAsync: mutateAsync,
    ...result
  };
}
function useProvider() {
  const { provider } = useStarknet();
  return { provider };
}
function useSignTypedData({
  domain,
  types,
  message,
  primaryType,
  ...props
}) {
  const { account } = useAccount();
  const { mutate, mutateAsync, ...result } = useMutation2({
    mutationKey: mutationKey3({ domain, types, message, primaryType }),
    mutationFn: mutateFn({ account }),
    ...props
  });
  const signTypedData = (0, import_react12.useCallback)(
    (args) => mutate(
      args ?? {
        domain,
        types,
        message,
        primaryType
      }
    ),
    [mutate, domain, types, message, primaryType]
  );
  const signTypedDataAsync = (0, import_react12.useCallback)(
    (args) => mutateAsync(
      args ?? {
        domain,
        types,
        message,
        primaryType
      }
    ),
    [mutateAsync, domain, types, message, primaryType]
  );
  return {
    signTypedData,
    signTypedDataAsync,
    ...result
  };
}
function mutationKey3({
  domain,
  types,
  message,
  primaryType
}) {
  return [
    {
      entity: "signTypedData",
      domain,
      types,
      message,
      primaryType
    }
  ];
}
function mutateFn({ account }) {
  return function({
    domain,
    types,
    message,
    primaryType
  }) {
    if (!account)
      throw new Error("account is required");
    if (!domain)
      throw new Error("domain is required");
    if (!types)
      throw new Error("types is required");
    if (!message)
      throw new Error("message is required");
    if (!primaryType)
      throw new Error("primaryType is required");
    return account.signMessage({ domain, types, message, primaryType });
  };
}
function useStarkAddress({
  name,
  contract,
  enabled: enabled_ = true,
  ...props
}) {
  const { provider } = useProvider();
  const { chain } = useNetwork();
  const enabled = (0, import_react13.useMemo)(() => Boolean(enabled_ && name), [enabled_, name]);
  return useQuery2({
    queryKey: queryKey5({ name, contract, network: chain.network }),
    queryFn: queryFn5({ name, contract, provider, network: chain.network }),
    enabled,
    ...props
  });
}
function queryKey5({
  name,
  contract,
  network
}) {
  return [{ entity: "addressFromStarkName", name, contract, network }];
}
function queryFn5({
  name,
  contract,
  provider,
  network
}) {
  return async function() {
    if (!name)
      throw new Error("name is required");
    const namingContract = contract ?? StarknetIdNamingContract[network];
    const p = new RpcProvider2(provider);
    const encodedDomain = encodeDomain(name);
    const result = await p.callContract({
      contractAddress: namingContract,
      entrypoint: "domain_to_address",
      calldata: CallData.compile({ domain: encodedDomain, hint: [] })
    });
    if (BigInt(result.result[0]) === BigInt(0))
      throw new Error("Address not found");
    return result.result[0];
  };
}
var StarknetIdNamingContract = {
  goerli: "0x3bab268e932d2cecd1946f100ae67ce3dff9fd234119ea2f6da57d16d29fce",
  sepolia: "0x154bc2e1af9260b9e66af0e9c46fc757ff893b3ff6a85718a810baf1474",
  mainnet: "0x6ac597f8116f886fa1c97a23fa4e08299975ecaf6b598873ca6792b9bbfb678"
};
var encodeDomain = (domain) => {
  if (!domain)
    return ["0"];
  const encoded = [];
  for (const subdomain of domain.replace(".stark", "").split("."))
    encoded.push(starknetId_exports.useEncoded(subdomain).toString(10));
  return encoded;
};
function useStarkName({
  address,
  contract,
  enabled: enabled_ = true,
  ...props
}) {
  const { provider } = useProvider();
  const { chain } = useNetwork();
  const enabled = (0, import_react14.useMemo)(
    () => Boolean(enabled_ && address),
    [enabled_, address]
  );
  return useQuery2({
    queryKey: queryKey6({ address, contract, network: chain.network }),
    queryFn: queryFn6({ address, contract, provider, network: chain.network }),
    enabled,
    ...props
  });
}
function queryKey6({
  address,
  contract,
  network
}) {
  return [{ entity: "starkName", address, contract, network }];
}
function queryFn6({
  address,
  contract,
  provider,
  network
}) {
  return async function() {
    if (!address)
      throw new Error("address is required");
    const namingContract = contract ?? StarknetIdNamingContract2[network];
    const p = new RpcProvider2(provider);
    try {
      const calldata = {
        contractAddress: namingContract,
        entrypoint: "address_to_domain",
        calldata: CallData.compile({
          address,
          hint: []
        })
      };
      const fallbackCalldata = {
        contractAddress: namingContract,
        entrypoint: "address_to_domain",
        calldata: CallData.compile({
          address
        })
      };
      const hexDomain = await executeWithFallback(
        p,
        calldata,
        fallbackCalldata
      );
      const decimalDomain = hexDomain.result.map((element) => BigInt(element)).slice(1);
      const stringDomain = starknetId_exports.useDecoded(decimalDomain);
      if (!stringDomain) {
        throw new Error("Could not get stark name");
      }
      return stringDomain;
    } catch (e) {
      throw new Error("Could not get stark name");
    }
  };
}
var executeWithFallback = async (provider, initialCall, fallbackCall) => {
  try {
    return await provider.callContract(initialCall);
  } catch (initialError) {
    try {
      return await provider.callContract(fallbackCall);
    } catch (fallbackError) {
      throw fallbackError;
    }
  }
};
var StarknetIdNamingContract2 = {
  goerli: "0x3bab268e932d2cecd1946f100ae67ce3dff9fd234119ea2f6da57d16d29fce",
  sepolia: "0x154bc2e1af9260b9e66af0e9c46fc757ff893b3ff6a85718a810baf1474",
  mainnet: "0x6ac597f8116f886fa1c97a23fa4e08299975ecaf6b598873ca6792b9bbfb678"
};
function useWaitForTransaction({
  hash: hash2,
  watch,
  enabled: enabled_ = true,
  ...props
}) {
  const { provider, chain } = useStarknet();
  const queryKey_ = (0, import_react15.useMemo)(() => queryKey7({ chain, hash: hash2 }), [chain, hash2]);
  const enabled = (0, import_react15.useMemo)(() => Boolean(enabled_ && hash2), [enabled_, hash2]);
  useInvalidateOnBlock({
    enabled: Boolean(enabled && watch),
    queryKey: queryKey_
  });
  return useQuery2({
    queryKey: queryKey_,
    queryFn: queryFn7({ provider, hash: hash2 }),
    enabled,
    ...props
  });
}
function queryKey7({ chain, hash: hash2 }) {
  return [
    { entity: "transactionReceipt", chainId: chain == null ? void 0 : chain.name, hash: hash2 }
  ];
}
function queryFn7({
  provider,
  hash: hash2
}) {
  return async function() {
    if (!hash2)
      throw new Error("hash is required");
    return await provider.getTransactionReceipt(hash2);
  };
}
function useStarkProfile({
  address,
  useDefaultPfp = true,
  namingContract,
  identityContract,
  enabled: enabled_ = true,
  ...props
}) {
  const { provider } = useProvider();
  const { chain } = useNetwork();
  if (!StarknetIdcontracts[chain.network])
    throw new Error("Network not supported");
  const { contract: multicallContract } = useContract({
    abi: multicallABI,
    address: StarknetIdcontracts[chain.network]["multicall"]
  });
  const enabled = (0, import_react16.useMemo)(
    () => Boolean(enabled_ && address),
    [enabled_, address]
  );
  return useQuery2({
    queryKey: queryKey8({ address, namingContract, identityContract }),
    queryFn: queryFn8({
      address,
      useDefaultPfp,
      namingContract,
      provider,
      network: chain.network,
      identityContract,
      multicallContract
    }),
    enabled,
    ...props
  });
}
function queryKey8({
  address,
  namingContract,
  identityContract
}) {
  return [
    { entity: "starkprofile", address, namingContract, identityContract }
  ];
}
function queryFn8({
  address,
  useDefaultPfp,
  namingContract,
  identityContract,
  provider,
  network,
  multicallContract
}) {
  return async function() {
    if (!address)
      throw new Error("address is required");
    if (!multicallContract)
      throw new Error("multicallContract is required");
    if (!network)
      throw new Error("network is required");
    const contracts = StarknetIdcontracts[network];
    const identity = identityContract ?? contracts["identity"];
    const naming = namingContract ?? contracts["naming"];
    const { initialCalldata, fallbackCalldata } = getStarkProfileCalldata(
      address,
      naming,
      identity,
      contracts
    );
    const data = await executeMulticallWithFallback(
      multicallContract,
      "aggregate",
      initialCalldata,
      fallbackCalldata
    );
    if (Array.isArray(data)) {
      const name = data[0][0] !== BigInt(0) ? starknetId_exports.useDecoded(data[0].slice(1)) : void 0;
      const twitter = data[2][0] !== BigInt(0) ? data[2][0].toString() : void 0;
      const github = data[3][0] !== BigInt(0) ? data[3][0].toString() : void 0;
      const discord = data[4][0] !== BigInt(0) ? data[4][0].toString() : void 0;
      const proofOfPersonhood = data[5][0] === BigInt(1) ? true : false;
      const profile = data.length === 9 ? data[8].slice(1).map(
        (val) => shortString_exports.decodeShortString(val.toString())
      ).join("") : void 0;
      const profilePicture = profile ? profile.includes("base64") ? JSON.parse(atob(profile.split(",")[1].slice(0, -1))).image : await fetchImageUrl(profile) : useDefaultPfp ? `https://starknet.id/api/identicons/${data[1][0].toString()}` : void 0;
      return {
        name,
        twitter,
        github,
        discord,
        proofOfPersonhood,
        profilePicture,
        profile
      };
    } else {
      throw new Error("Error while fetching data");
    }
  };
}
var hardcoded = (arg) => {
  return new CairoCustomEnum({
    Hardcoded: arg
  });
};
var reference = (call, pos) => {
  return new CairoCustomEnum({
    Reference: cairo_exports.tuple(call, pos)
  });
};
var arrayReference = (call, pos) => {
  return new CairoCustomEnum({
    ArrayReference: cairo_exports.tuple(call, pos)
  });
};
var staticExecution = () => {
  return new CairoCustomEnum({
    Static: {}
  });
};
var notEqual = (call, pos, value) => {
  return new CairoCustomEnum({
    IfNotEqual: cairo_exports.tuple(call, pos, value)
  });
};
var fetchImageUrl = async (url) => {
  try {
    const response = await fetch(parseImageUrl(url));
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    if (data.image) {
      return parseImageUrl(data.image);
    } else {
      return "Image is not set";
    }
  } catch (error) {
    console.error("There was a problem fetching the image URL:", error);
    return "Error fetching data";
  }
};
var parseImageUrl = (url) => {
  return url.startsWith("ipfs://") ? url.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/") : url;
};
var StarknetIdcontracts = {
  goerli: {
    naming: "0x3bab268e932d2cecd1946f100ae67ce3dff9fd234119ea2f6da57d16d29fce",
    identity: "0x783a9097b26eae0586373b2ce0ed3529ddc44069d1e0fbc4f66d42b69d6850d",
    verifier: "0x019e5204152a72891bf8cd0bed8f03593fdb29ceacd14fca587be5d9fcf87c0e",
    verifier_pop: "0x03528caf090179e337931ee669a5b0214041e1bae30d460ff07d2cea2c7a9106",
    verifier_pfp: "0x03cac3228b434259734ee0e4ff445f642206ea11adace7e4f45edd2596748698",
    multicall: "0x034ffb8f4452df7a613a0210824d6414dbadcddce6c6e19bf4ddc9e22ce5f970"
  },
  sepolia: {
    naming: "0x154bc2e1af9260b9e66af0e9c46fc757ff893b3ff6a85718a810baf1474",
    identity: "0x3697660a0981d734780731949ecb2b4a38d6a58fc41629ed611e8defda",
    verifier: "0x60B94fEDe525f815AE5E8377A463e121C787cCCf3a36358Aa9B18c12c4D566",
    verifier_pop: "0x15ae88ae054caa74090b89025c1595683f12edf7a4ed2ad0274de3e1d4a",
    verifier_pfp: "0x9e7bdb8dabd02ea8cfc23b1d1c5278e46490f193f87516ed5ff2dfec02",
    multicall: "0x034ffb8f4452df7a613a0210824d6414dbadcddce6c6e19bf4ddc9e22ce5f970"
  },
  mainnet: {
    naming: "0x6ac597f8116f886fa1c97a23fa4e08299975ecaf6b598873ca6792b9bbfb678",
    identity: "0x05dbdedc203e92749e2e746e2d40a768d966bd243df04a6b712e222bc040a9af",
    verifier: "0x07d14dfd8ee95b41fce179170d88ba1f0d5a512e13aeb232f19cfeec0a88f8bf",
    verifier_pop: "0x0293eb2ba9862f762bd3036586d5755a782bd22e6f5028320f1d0405fd47bff4",
    verifier_pfp: "0x070aaa20ec4a46da57c932d9fd89ca5e6bb9ca3188d3df361a32306aff7d59c7",
    multicall: "0x034ffb8f4452df7a613a0210824d6414dbadcddce6c6e19bf4ddc9e22ce5f970"
  }
};
var executeMulticallWithFallback = async (contract, functionName, initialCalldata, fallbackCalldata) => {
  try {
    return await contract.call(functionName, [initialCalldata]);
  } catch (initialError) {
    try {
      return await contract.call(functionName, [fallbackCalldata]);
    } catch (fallbackError) {
      throw fallbackError;
    }
  }
};
var getStarkProfileCalldata = (address, namingContract, identityContract, contracts) => {
  let initialCalldata = [];
  let fallbackCalldata = [];
  initialCalldata.push({
    execution: staticExecution(),
    to: hardcoded(namingContract),
    selector: hardcoded(hash_exports.getSelectorFromName("address_to_domain")),
    calldata: [hardcoded(address), hardcoded("0")]
  });
  fallbackCalldata.push({
    execution: staticExecution(),
    to: hardcoded(namingContract),
    selector: hardcoded(hash_exports.getSelectorFromName("address_to_domain")),
    calldata: [hardcoded(address)]
  });
  const calls = [
    {
      execution: staticExecution(),
      to: hardcoded(namingContract),
      selector: hardcoded(hash_exports.getSelectorFromName("domain_to_id")),
      calldata: [arrayReference(0, 0)]
    },
    {
      execution: staticExecution(),
      to: hardcoded(identityContract),
      selector: hardcoded(hash_exports.getSelectorFromName("get_verifier_data")),
      calldata: [
        reference(1, 0),
        hardcoded(shortString_exports.encodeShortString("twitter")),
        hardcoded(contracts["verifier"]),
        hardcoded("0")
      ]
    },
    {
      execution: staticExecution(),
      to: hardcoded(identityContract),
      selector: hardcoded(hash_exports.getSelectorFromName("get_verifier_data")),
      calldata: [
        reference(1, 0),
        hardcoded(shortString_exports.encodeShortString("github")),
        hardcoded(contracts["verifier"]),
        hardcoded("0")
      ]
    },
    {
      execution: staticExecution(),
      to: hardcoded(identityContract),
      selector: hardcoded(hash_exports.getSelectorFromName("get_verifier_data")),
      calldata: [
        reference(1, 0),
        hardcoded(shortString_exports.encodeShortString("discord")),
        hardcoded(contracts["verifier"]),
        hardcoded("0")
      ]
    },
    {
      execution: staticExecution(),
      to: hardcoded(identityContract),
      selector: hardcoded(hash_exports.getSelectorFromName("get_verifier_data")),
      calldata: [
        reference(1, 0),
        hardcoded(shortString_exports.encodeShortString("proof_of_personhood")),
        hardcoded(contracts["verifier_pop"]),
        hardcoded("0")
      ]
    },
    // PFP
    {
      execution: staticExecution(),
      to: hardcoded(identityContract),
      selector: hardcoded(hash_exports.getSelectorFromName("get_verifier_data")),
      calldata: [
        reference(1, 0),
        hardcoded(shortString_exports.encodeShortString("nft_pp_contract")),
        hardcoded(contracts["verifier_pfp"]),
        hardcoded("0")
      ]
    },
    {
      execution: staticExecution(),
      to: hardcoded(identityContract),
      selector: hardcoded(
        hash_exports.getSelectorFromName("get_extended_verifier_data")
      ),
      calldata: [
        reference(1, 0),
        hardcoded(shortString_exports.encodeShortString("nft_pp_id")),
        hardcoded("2"),
        hardcoded(contracts["verifier_pfp"]),
        hardcoded("0")
      ]
    },
    {
      execution: notEqual(6, 0, 0),
      to: reference(6, 0),
      selector: hardcoded(hash_exports.getSelectorFromName("tokenURI")),
      calldata: [reference(7, 1), reference(7, 2)]
    }
  ];
  initialCalldata.push(...calls);
  fallbackCalldata.push(...calls);
  return { initialCalldata, fallbackCalldata };
};
var multicallABI = [
  {
    type: "impl",
    name: "ComposableMulticallImpl",
    interface_name: "composable_multicall::IComposableMulticall"
  },
  {
    type: "enum",
    name: "composable_multicall::Execution",
    variants: [
      { name: "Static", type: "()" },
      {
        name: "IfEqual",
        type: "(core::integer::u32, core::integer::u32, core::felt252)"
      },
      {
        name: "IfNotEqual",
        type: "(core::integer::u32, core::integer::u32, core::felt252)"
      }
    ]
  },
  {
    type: "enum",
    name: "composable_multicall::DynamicFelt",
    variants: [
      { name: "Hardcoded", type: "core::felt252" },
      { name: "Reference", type: "(core::integer::u32, core::integer::u32)" }
    ]
  },
  {
    type: "enum",
    name: "composable_multicall::DynamicCalldata",
    variants: [
      { name: "Hardcoded", type: "core::felt252" },
      { name: "Reference", type: "(core::integer::u32, core::integer::u32)" },
      {
        name: "ArrayReference",
        type: "(core::integer::u32, core::integer::u32)"
      }
    ]
  },
  {
    type: "struct",
    name: "composable_multicall::DynamicCall",
    members: [
      { name: "execution", type: "composable_multicall::Execution" },
      { name: "to", type: "composable_multicall::DynamicFelt" },
      { name: "selector", type: "composable_multicall::DynamicFelt" },
      {
        name: "calldata",
        type: "core::array::Array::<composable_multicall::DynamicCalldata>"
      }
    ]
  },
  {
    type: "struct",
    name: "core::array::Span::<core::felt252>",
    members: [
      { name: "snapshot", type: "@core::array::Array::<core::felt252>" }
    ]
  },
  {
    type: "interface",
    name: "composable_multicall::IComposableMulticall",
    items: [
      {
        type: "function",
        name: "aggregate",
        inputs: [
          {
            name: "calls",
            type: "core::array::Array::<composable_multicall::DynamicCall>"
          }
        ],
        outputs: [
          { type: "core::array::Array::<core::array::Span::<core::felt252>>" }
        ],
        state_mutability: "view"
      }
    ]
  },
  {
    type: "event",
    name: "composable_multicall::contract::ComposableMulticall::Event",
    kind: "enum",
    variants: []
  }
];
function useEstimateFees({
  calls,
  options,
  watch = false,
  enabled: enabled_ = true,
  ...props
}) {
  const { account } = useAccount();
  const queryKey_ = (0, import_react17.useMemo)(
    () => queryKey9({ calls, options }),
    [calls, options]
  );
  const enabled = (0, import_react17.useMemo)(() => Boolean(enabled_ && calls), [enabled_, calls]);
  useInvalidateOnBlock({
    enabled: Boolean(enabled && watch),
    queryKey: queryKey_
  });
  return useQuery2({
    queryKey: queryKey_,
    queryFn: queryFn9({
      account,
      calls,
      options
    }),
    ...props
  });
}
function queryKey9({ calls, options }) {
  return [
    {
      entity: "estimateInvokeFee",
      calls,
      options
    }
  ];
}
function queryFn9({
  account,
  calls,
  options
}) {
  return async function() {
    if (!account)
      throw new Error("account is required");
    if (!calls || calls.length === 0)
      throw new Error("calls are required");
    return account == null ? void 0 : account.estimateInvokeFee(calls, options);
  };
}
function jsonRpcProvider({
  rpc
}) {
  return function(chain) {
    const config = rpc(chain);
    if (!config)
      return null;
    const chainId = starknetChainId(chain.id);
    const provider = new RpcProvider2({ ...config, chainId });
    return provider;
  };
}
function publicProvider() {
  return jsonRpcProvider({
    rpc: (chain) => {
      const rpcs = chain.rpcUrls.public.http;
      const nodeUrl = rpcs[Math.floor(Math.random() * rpcs.length)];
      if (!nodeUrl)
        return null;
      return { nodeUrl };
    }
  });
}
function alchemyProvider({ apiKey }) {
  return jsonRpcProvider({
    rpc: (chain) => {
      var _a;
      const baseHttpUrl = (_a = chain.rpcUrls["alchemy"]) == null ? void 0 : _a.http[0];
      if (!baseHttpUrl)
        return null;
      const nodeUrl = `${baseHttpUrl}/${apiKey}`;
      return { nodeUrl };
    }
  });
}
function blastProvider({ apiKey }) {
  return jsonRpcProvider({
    rpc: (chain) => {
      var _a;
      const baseHttpUrl = (_a = chain.rpcUrls["blast"]) == null ? void 0 : _a.http[0];
      if (!baseHttpUrl)
        return null;
      const nodeUrl = `${baseHttpUrl}/${apiKey}`;
      return { nodeUrl };
    }
  });
}
function infuraProvider({ apiKey }) {
  return jsonRpcProvider({
    rpc: (chain) => {
      var _a;
      const baseHttpUrl = (_a = chain.rpcUrls["infura"]) == null ? void 0 : _a.http[0];
      if (!baseHttpUrl)
        return null;
      const nodeUrl = `${baseHttpUrl}/${apiKey}`;
      return { nodeUrl };
    }
  });
}
function lavaProvider({ apiKey }) {
  return jsonRpcProvider({
    rpc: (chain) => {
      var _a;
      const baseHttpUrl = (_a = chain.rpcUrls["lava"]) == null ? void 0 : _a.http[0];
      if (!baseHttpUrl)
        return null;
      const nodeUrl = `${baseHttpUrl}/${apiKey}`;
      return { nodeUrl };
    }
  });
}
function nethermindProvider({ apiKey }) {
  return jsonRpcProvider({
    rpc: (chain) => {
      var _a;
      const baseHttpUrl = (_a = chain.rpcUrls["nethermind"]) == null ? void 0 : _a.http[0];
      if (!baseHttpUrl)
        return null;
      const nodeUrl = `${baseHttpUrl}/?apikey=${apiKey}`;
      return { nodeUrl };
    }
  });
}
function reddioProvider({ apiKey }) {
  return jsonRpcProvider({
    rpc: (chain) => {
      var _a;
      const baseHttpUrl = (_a = chain.rpcUrls["reddio"]) == null ? void 0 : _a.http[0];
      if (!baseHttpUrl)
        return null;
      const nodeUrl = `${baseHttpUrl}/${apiKey}`;
      return { nodeUrl };
    }
  });
}
export {
  Connector,
  ConnectorAlreadyConnectedError,
  ConnectorNotConnectedError,
  ConnectorNotFoundError,
  InjectedConnector,
  MockConnector,
  AccountProvider as OverrideAccount,
  StarkCompassExplorer,
  StarknetConfig,
  StarkscanExplorer,
  UnsupportedAccountInterfaceError,
  UserNotConnectedError,
  UserRejectedRequestError,
  ViewblockExplorer,
  VoyagerExplorer,
  alchemyProvider,
  argent,
  blastProvider,
  braavos,
  infuraProvider,
  injected,
  jsonRpcProvider,
  lavaProvider,
  nethermindProvider,
  publicProvider,
  reddioProvider,
  starkcompass,
  starknetChainId,
  starkscan,
  useAccount,
  useBalance,
  useBlock,
  useBlockNumber,
  useConnect,
  useContract,
  useContractFactory,
  useContractRead,
  useContractWrite,
  useDeployAccount,
  useDisconnect,
  useEstimateFees,
  useExplorer,
  useInjectedConnectors,
  useInvalidateOnBlock,
  useNetwork,
  useProvider,
  useSignTypedData,
  useStarkAddress,
  useStarkName,
  useStarkProfile,
  useWaitForTransaction,
  viewblock,
  voyager
};
//# sourceMappingURL=@starknet-react_core.js.map
