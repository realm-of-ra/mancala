import {
  s
} from "./chunk-5PXFP6GF.js";
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

// node_modules/.pnpm/starknetkit@1.1.9_starknet@6.8.0/node_modules/starknetkit/dist/index-70f373da.js
var b = Object.defineProperty;
var y = (e, n, t) => n in e ? b(e, n, { enumerable: true, configurable: true, writable: true, value: t }) : e[n] = t;
var l = (e, n, t) => (y(e, typeof n != "symbol" ? n + "" : n, t), t);
var d = "f2e613881f7a0e811295cdd57999e31b";
var u = `<svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="8" fill="#FF875B" />
    <path
      d="M18.316 8H13.684C13.5292 8 13.4052 8.1272 13.4018 8.28531C13.3082 12.7296 11.0323 16.9477 7.11513 19.9355C6.99077 20.0303 6.96243 20.2085 7.05335 20.3369L9.76349 24.1654C9.85569 24.2957 10.0353 24.3251 10.1618 24.2294C12.6111 22.3734 14.5812 20.1345 16 17.6529C17.4187 20.1345 19.389 22.3734 21.8383 24.2294C21.9646 24.3251 22.1443 24.2957 22.2366 24.1654L24.9467 20.3369C25.0375 20.2085 25.0092 20.0303 24.885 19.9355C20.9676 16.9477 18.6918 12.7296 18.5983 8.28531C18.5949 8.1272 18.4708 8 18.316 8Z"
      fill="white"
    />
  </svg>`;
var R = () => Object.keys(localStorage).some(
  (e) => e === "walletconnect" || e.startsWith("wc@2:")
);
var _ = () => {
  if (R()) {
    delete localStorage.walletconnect;
    for (const e in localStorage)
      e.startsWith("wc@2:") && delete localStorage[e];
  }
};
var j = () => {
  var _a;
  return (window == null ? void 0 : window.starknet_argentX) ? (_a = window == null ? void 0 : window.starknet_argentX) == null ? void 0 : _a.isInAppBrowser : false;
};
var O = class extends T {
  constructor(t = {}) {
    super();
    l(this, "_wallet", null);
    l(this, "_options");
    this._options = t;
  }
  available() {
    return true;
  }
  async ready() {
    return await this.ensureWallet(), this._wallet ? this._wallet.isPreauthorized() : false;
  }
  get id() {
    return "argentMobile";
  }
  get name() {
    return "Argent (mobile)";
  }
  get icon() {
    return {
      dark: u,
      light: u
    };
  }
  get wallet() {
    if (!this._wallet)
      throw new P();
    return this._wallet;
  }
  async connect() {
    if (await this.ensureWallet(), !this._wallet)
      throw new U();
    const t = this._wallet.account, o = await this.chainId();
    return {
      account: t.address,
      chainId: o
    };
  }
  async disconnect() {
    var _a;
    if (await this._wallet.disable(), _(), !this.available() && !this._wallet)
      throw new U();
    if (!((_a = this._wallet) == null ? void 0 : _a.isConnected))
      throw new S();
    this._wallet = null;
  }
  async account() {
    if (!this._wallet || !this._wallet.account)
      throw new P();
    return this._wallet.account;
  }
  async chainId() {
    if (!this._wallet || !this.wallet.account || !this._wallet.provider)
      throw new P();
    const t = await this._wallet.provider.getChainId();
    return BigInt(t);
  }
  // needed, methods required by starknet-react. Otherwise an exception is throwd
  async initEventListener(t) {
    if (!this._wallet)
      throw new P();
    this._wallet.on("accountsChanged", t);
  }
  // needed, methods required by starknet-react. Otherwise an exception is throwd
  async removeEventListener(t) {
    if (!this._wallet)
      throw new P();
    this._wallet.off("accountsChanged", t), this._wallet = null;
  }
  async ensureWallet() {
    const { getStarknetWindowObject: t } = await import("./index-00451f1a-2CCPIANK.js"), {
      chainId: o,
      projectId: r,
      dappName: g,
      description: p,
      url: C,
      icons: f,
      provider: m,
      rpcUrl: I
    } = this._options, s2 = s(), v = I ?? (!o || o === constants_exports.NetworkName.SN_MAIN ? s2.mainnet : s2.testnet), N = {
      chainId: o ?? constants_exports.NetworkName.SN_MAIN,
      name: g,
      projectId: r ?? d,
      description: p,
      url: C,
      icons: f,
      provider: m,
      rpcUrl: v
    };
    r === d && (console.log("========= NOTICE ========="), console.log(
      "While your application will continue to function, we highly recommended"
    ), console.log("signing up for your own API keys."), console.log(
      "Go to WalletConnect Cloud (https://cloud.walletconnect.com) and create a new account."
    ), console.log(
      "Once your account is created, create a new project and collect the Project ID"
    ), console.log("=========================="));
    const i = await t(N);
    if (!i)
      throw new A();
    this._wallet = i;
    const c = this._wallet;
    await c.enable(), c.client.on("session_delete", () => {
      _(), this._wallet = null, q(), document.dispatchEvent(new Event("wallet_disconnected"));
    });
  }
};

export {
  _,
  j,
  O
};
//# sourceMappingURL=chunk-NS6I2LM4.js.map
