import {
  A,
  P,
  S,
  T,
  U,
  q
} from "./chunk-ABGJYFXF.js";
import {
  constants_exports
} from "./chunk-TQUWFIKU.js";
import "./chunk-ELN4VAZN.js";
import "./chunk-OPAFF7F5.js";
import "./chunk-J32WSRGE.js";

// node_modules/.pnpm/starknetkit@1.1.9_starknet@6.8.0/node_modules/starknetkit/dist/index-25202aca.js
var g = Object.defineProperty;
var o = (M, e, t) => e in M ? g(M, e, { enumerable: true, configurable: true, writable: true, value: t }) : M[e] = t;
var N = (M, e, t) => (o(M, typeof e != "symbol" ? e + "" : e, t), t);
var l = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iYmxhY2siPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTkuODc5IDcuNTE5YzEuMTcxLTEuMDI1IDMuMDcxLTEuMDI1IDQuMjQyIDAgMS4xNzIgMS4wMjUgMS4xNzIgMi42ODcgMCAzLjcxMi0uMjAzLjE3OS0uNDMuMzI2LS42Ny40NDItLjc0NS4zNjEtMS40NS45OTktMS40NSAxLjgyN3YuNzVNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6bS05IDUuMjVoLjAwOHYuMDA4SDEydi0uMDA4eiIgLz4KPC9zdmc+";
var h = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0id2hpdGUiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTkuODc5IDcuNTE5YzEuMTcxLTEuMDI1IDMuMDcxLTEuMDI1IDQuMjQyIDAgMS4xNzIgMS4wMjUgMS4xNzIgMi42ODcgMCAzLjcxMi0uMjAzLjE3OS0uNDMuMzI2LS42Ny40NDItLjc0NS4zNjEtMS40NS45OTktMS40NSAxLjgyN3YuNzVNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6bS05IDUuMjVoLjAwOHYuMDA4SDEydi0uMDA4eiIgLz4KPC9zdmc+Cg==";
var L = class extends T {
  constructor({ options: t }) {
    super();
    N(this, "_wallet");
    N(this, "_options");
    this._options = t;
  }
  available() {
    return this.ensureWallet(), this._wallet !== void 0;
  }
  async ready() {
    return this.ensureWallet(), this._wallet ? await this._wallet.isPreauthorized() : false;
  }
  async chainId() {
    if (this.ensureWallet(), !this._wallet)
      throw new P();
    const t = await this._wallet.provider.getChainId();
    return BigInt(t);
  }
  async onAccountsChanged(t) {
    let i;
    if (typeof t == "string" ? i = t : i = t[0], i) {
      const n = await this.chainId();
      this.emit("change", { account: i, chainId: n });
    } else
      this.emit("disconnect");
  }
  onNetworkChanged(t) {
    switch (t) {
      case "SN_MAIN":
        this.emit("change", {
          chainId: BigInt(constants_exports.StarknetChainId.SN_MAIN)
        });
        break;
      case "SN_SEPOLIA":
        this.emit("change", {
          chainId: BigInt(constants_exports.StarknetChainId.SN_SEPOLIA)
        });
        break;
      case "mainnet-alpha":
        this.emit("change", {
          chainId: BigInt(constants_exports.StarknetChainId.SN_MAIN)
        });
        break;
      case "sepolia-alpha":
        this.emit("change", {
          chainId: BigInt(constants_exports.StarknetChainId.SN_SEPOLIA)
        });
        break;
      default:
        this.emit("change", {});
        break;
    }
  }
  async connect() {
    if (this.ensureWallet(), !this._wallet)
      throw new U();
    let t;
    try {
      t = await this._wallet.enable({ starknetVersion: "v5" });
      const { provider: a } = this._options;
      a && Object.assign(this._wallet.account, {
        provider: a
      });
    } catch {
      throw new A();
    }
    if (!this._wallet.isConnected || !t)
      throw new A();
    this._wallet.on("accountsChanged", async (a) => {
      await this.onAccountsChanged(a);
    }), this._wallet.on("networkChanged", (a) => {
      this.onNetworkChanged(a);
    }), await this.onAccountsChanged(t);
    const i = this._wallet.account.address, n = await this.chainId();
    return this.emit("connect", { account: i, chainId: n }), {
      account: i,
      chainId: n
    };
  }
  async disconnect() {
    var _a;
    if (this.ensureWallet(), q(), !this.available())
      throw new U();
    if (!((_a = this._wallet) == null ? void 0 : _a.isConnected))
      throw new S();
  }
  async account() {
    if (this.ensureWallet(), !this._wallet || !this._wallet.account)
      throw new P();
    return this._wallet.account;
  }
  get id() {
    return this._options.id;
  }
  get name() {
    if (!this._wallet)
      throw new P();
    return this._wallet.name;
  }
  get icon() {
    var _a;
    return this._options.icon ? this._options.icon : ((_a = this._wallet) == null ? void 0 : _a.icon) ? {
      dark: this._wallet.icon,
      light: this._wallet.icon
    } : {
      dark: h,
      light: l
    };
  }
  get wallet() {
    if (!this._wallet)
      throw new P();
    return this._wallet;
  }
  ensureWallet() {
    const i = z(globalThis).filter((n) => n.id === this._options.id)[0];
    if (i) {
      const { provider: n } = this._options;
      n && Object.assign(i, {
        provider: n
      }), this._wallet = i;
    }
  }
};
function z(M) {
  return Object.values(
    Object.getOwnPropertyNames(M).reduce((e, t) => {
      if (t.startsWith("starknet")) {
        const i = M[t];
        A2(i) && !e[i.id] && (e[i.id] = i);
      }
      return e;
    }, {})
  );
}
function A2(M) {
  try {
    return M && [
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
    ].every((e) => e in M);
  } catch {
  }
  return false;
}
export {
  L as InjectedConnector
};
//# sourceMappingURL=starknetkit_injected.js.map
