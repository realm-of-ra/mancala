import {
  Contract,
  RpcProvider2,
  shortString_exports
} from "./chunk-TQUWFIKU.js";
import {
  __publicField
} from "./chunk-J32WSRGE.js";

// node_modules/.pnpm/@dojoengine+core@0.6.125_starknet@6.8.0_typescript@5.4.5_zod@3.23.8/node_modules/@dojoengine/core/dist/index.js
var Provider = class {
  /**
   * Constructor: Initializes the Provider with a given world address.
   *
   * @param {string} worldAddress - The address of the world.
   */
  constructor(worldAddress) {
    // Store the address of the world.
    __publicField(this, "worldAddress");
    this.worldAddress = worldAddress;
  }
  /**
   * Retrieves the stored world address.
   *
   * @returns {string} - The address of the world.
   */
  getWorldAddress() {
    return this.worldAddress;
  }
};
var NO_OP = (_message, ..._optionalParams) => {
};
var ConsoleLogger = class {
  constructor(options) {
    __publicField(this, "info");
    __publicField(this, "warn");
    __publicField(this, "error");
    const { level } = options || {};
    this.error = console.error.bind(console);
    if (level === "none") {
      this.error = NO_OP;
      this.warn = NO_OP;
      this.info = NO_OP;
    }
    if (level === "error") {
      this.warn = NO_OP;
      this.info = NO_OP;
      return;
    }
    this.warn = console.warn.bind(console);
    if (level === "warn") {
      this.info = NO_OP;
      return;
    }
    this.info = console.log.bind(console);
  }
};
var WorldEntryPoints = ((WorldEntryPoints2) => {
  WorldEntryPoints2["get"] = "entity";
  WorldEntryPoints2["set"] = "set_entity";
  WorldEntryPoints2["entities"] = "entities";
  WorldEntryPoints2["execute"] = "execute";
  WorldEntryPoints2["registerSystem"] = "register_system";
  WorldEntryPoints2["registerComponent"] = "register_model";
  WorldEntryPoints2["model"] = "model";
  WorldEntryPoints2["system"] = "system";
  WorldEntryPoints2["metadataUri"] = "metadata_uri";
  WorldEntryPoints2["setMetadataUri"] = "set_metadata_uri";
  WorldEntryPoints2["registerModel"] = "register_model";
  WorldEntryPoints2["deployContract"] = "deploy_contract";
  WorldEntryPoints2["upgradeContract"] = "upgrade_contract";
  WorldEntryPoints2["uuid"] = "uuid";
  WorldEntryPoints2["emit"] = "emit";
  WorldEntryPoints2["entityIds"] = "entity_ids";
  WorldEntryPoints2["setExecutor"] = "set_executor";
  WorldEntryPoints2["executor"] = "executor";
  WorldEntryPoints2["base"] = "base";
  WorldEntryPoints2["deleteEntity"] = "delete_entity";
  WorldEntryPoints2["isOwner"] = "is_owner";
  WorldEntryPoints2["grantOwner"] = "grant_owner";
  WorldEntryPoints2["revokeOwner"] = "revoke_owner";
  WorldEntryPoints2["isWriter"] = "is_writer";
  WorldEntryPoints2["grantWriter"] = "grant_writer";
  WorldEntryPoints2["revokeWriter"] = "revoke_writer";
  return WorldEntryPoints2;
})(WorldEntryPoints || {});
var LOCAL_KATANA = "http://localhost:5050";
var LOCAL_RELAY = "";
var LOCAL_TORII = "http://localhost:8080";
var KATANA_PREFUNDED_ADDRESS = "0x6162896d1d7ab204c7ccac6dd5f8e9e7c25ecd5ae4fcb4ad32e57786bb46e03";
var KATANA_PREFUNDED_PRIVATE_KEY = "0x1800000000300000180000000000030000000000003006001800006600";
var KATANA_CLASS_HASH = "0x05400e90f7e0ae78bd02c77cd75527280470e2fe19c54970dd79dc37a9d3645c";
var KATANA_ETH_CONTRACT_ADDRESS = "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";
var getContractByName = (manifest, name) => {
  return manifest.contracts.find((contract) => {
    const nameParts = contract.name.split("::");
    return nameParts[nameParts.length - 1] === name || contract.name === name;
  });
};
var parseModelName = (model) => {
  const acronyms = /* @__PURE__ */ new Set(["ERC"]);
  return model.name.split("::").pop().split("_").map((part) => {
    if (acronyms.has(part.toUpperCase())) {
      return part.toUpperCase();
    }
    if (!isNaN(parseInt(part))) {
      return part;
    }
    return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
  }).join("");
};
var createModelTypedData = (name, model) => {
  const typesFromSchema = (name2, schema, types) => {
    Object.entries(schema).forEach(([key, value]) => {
      let typeName = value == null ? void 0 : value.constructor.name;
      switch (typeName) {
        case "Object":
          typesFromSchema(key, value, types);
          break;
        case "BigInt":
          types[name2].push({ name: key, type: "felt" });
          break;
        case "String":
          types[name2].push({ name: key, type: "shortstring" });
          break;
        case "Number":
          types[name2].push({ name: key, type: "u128" });
          break;
        case "Boolean":
          types[name2].push({ name: key, type: "bool" });
          break;
        default:
          throw new Error(`Unsupported type: ${typeName}`);
      }
    });
    return types;
  };
  return {
    types: typesFromSchema("Model", model, {
      StarknetDomain: [
        { name: "name", type: "shortstring" },
        { name: "version", type: "shortstring" },
        { name: "chainId", type: "shortstring" },
        { name: "revision", type: "shortstring" }
      ],
      OffchainMessage: [
        { name: "model", type: "shortstring" },
        { name, type: "Model" }
      ],
      Model: []
    }),
    primaryType: "OffchainMessage",
    domain: {
      name: "Dojo",
      version: "1",
      chainId: "1",
      revision: "1"
    },
    message: {
      model: name,
      [name]: Object.fromEntries(
        Object.entries(model).map(([k, v]) => {
          if (typeof v == "bigint") {
            return [k, "0x" + v.toString(16)];
          }
          return [k, v];
        })
      )
    }
  };
};
var DojoProvider = class extends Provider {
  /**
   * Constructor: Initializes the DojoProvider with the given world address, manifest and URL.
   *
   * @param {string} world_address - Address of the world.
   * @param {string} [url=LOCAL_KATANA] - RPC URL (defaults to LOCAL_KATANA).
   */
  constructor(manifest, url = LOCAL_KATANA, logLevel = "none") {
    super(manifest.world.address);
    __publicField(this, "provider");
    __publicField(this, "contract");
    __publicField(this, "manifest");
    __publicField(this, "logger");
    this.provider = new RpcProvider2({
      nodeUrl: url
    });
    this.contract = new Contract(
      manifest.world.abi,
      this.getWorldAddress(),
      this.provider
    );
    this.manifest = manifest;
    this.logger = new ConsoleLogger({ level: logLevel });
  }
  /**
   * Retrieves a single entity's details.
   *
   * @param {string} model - The component to query.
   * @param {Array<string>} keys - The keys to query.
   * @param {number} [offset=0] - Starting offset (defaults to 0).
   * @param {number} [length=0] - Length to retrieve (defaults to 0).
   * @returns {Promise<Array<bigint>>} - A promise that resolves to an array of bigints representing the entity's details.
   */
  async entity(model, keys, offset = 0, length = 0, layout) {
    try {
      return await this.contract.call("entity", [
        shortString_exports.encodeShortString(model),
        keys.length,
        ...keys,
        offset,
        length,
        layout.length,
        layout
      ]);
    } catch (error) {
      this.logger.error("Error occured: ", error);
      throw error;
    }
  }
  /**
   * Retrieves multiple entities' details.
   *
   * @param {string} model - The component to query.
   * @param {number} index - The index to query.
   * @param {Array<string>} values - The values to query.
   * @param {number} valuesLength - The values length to query.
   * @param {Array<number>} valuesLayout - The values layout to query.
   */
  async entities(model, index, values, valuesLength, valuesLayout) {
    try {
      return await this.contract.call("entities", [
        shortString_exports.encodeShortString(model),
        index,
        values,
        valuesLength,
        valuesLayout
      ]);
    } catch (error) {
      this.logger.error("Error occured: ", error);
      throw error;
    }
  }
  /**
   * Retrieves a models
   *
   * @param {string} name - Name of the model.
   * @returns {Promise<bigint>} - A promise that resolves to a bigint representing the model's details.
   */
  async model(name) {
    try {
      return await this.contract.call("model", [
        shortString_exports.encodeShortString(name)
      ]);
    } catch (error) {
      this.logger.error("Error occured: ", error);
      throw error;
    }
  }
  /**
   * Executes a function with the given parameters.
   * This function is a wrapper around the Starknet.js Account.execute function, but is more convenient to use.
   *
   * ```ts
   * await provider.execute(signer, contract, system, call_data);
   * ```
   * @param {Account} account - The account to use.
   * @param {string} contract - The contract to execute.
   * @param {string} call - The function to call.
   * @param {num.BigNumberish[]} call_data - The call data for the function.
   * @param {InvocationsDetails | undefined} transactionDetails - The transactionDetails allow to override maxFee & version
   * @returns {Promise<InvokeFunctionResponse>} - A promise that resolves to the response of the function execution.
   */
  async execute(account, contract_name, call, calldata, transactionDetails) {
    var _a;
    try {
      const nonce = await (account == null ? void 0 : account.getNonce());
      return await (account == null ? void 0 : account.execute(
        [
          {
            contractAddress: (_a = getContractByName(
              this.manifest,
              contract_name
            )) == null ? void 0 : _a.address,
            entrypoint: call,
            calldata
          }
        ],
        void 0,
        {
          maxFee: 0,
          // TODO: Update this value as needed.
          ...transactionDetails,
          nonce
        }
      ));
    } catch (error) {
      this.logger.error("Error occured: ", error);
      throw error;
    }
  }
  /**
   * Executes a multicall.
   * This function is a wrapper around the Starknet.js Account.execute function, but allows for executing multiple calls at once.
   *
   * ```ts
   * await provider.executeMulti(account, calls);
   * ```
   * @param {Account} account - The account to use.
   * @param {AllowArray<Call>} calls - The calls to execute.
   * @param {InvocationsDetails | undefined} transactionDetails - The transactionDetails allow to override maxFee & version
   * @returns {Promise<InvokeFunctionResponse>} - A promise that resolves to the response of the function execution.
   */
  async executeMulti(account, calls, transactionDetails) {
    try {
      const nonce = await (account == null ? void 0 : account.getNonce());
      return await (account == null ? void 0 : account.execute(calls, void 0, {
        maxFee: 0,
        // TODO: Update this value as needed.
        ...transactionDetails,
        nonce
      }));
    } catch (error) {
      this.logger.error("Error occured: ", error);
      throw error;
    }
  }
  /**
   * Retrieves current uuid from the world contract.
   *
   * @returns {Promise<number>} - A promise that resolves to the world uuid
   * @throws {Error} - Throws an error if the call fails.
   *
   * @example
   * const uuid = await provider.uuid();
   * console.log(uuid);
   * // => 6
   *
   */
  async uuid() {
    try {
      const result = await this.provider.callContract({
        contractAddress: this.getWorldAddress(),
        entrypoint: "uuid",
        calldata: []
      });
      if (result && result.length === 1) {
        return parseInt(result[0]);
      }
      throw new Error("Contract did not return expected uuid");
    } catch (error) {
      this.logger.error(`Failed to fetch uuid: ${error}`);
      throw new Error(`Failed to fetch uuid: ${error}`);
    }
  }
  /**
   * Calls a function with the given parameters.
   *
   * @param {string} contract_name - The contract to call.
   * @param {string} call - The function to call.
   * @returns {Promise<CallContractResponse>} - A promise that resolves to the response of the function call.
   */
  async call(contract_name, call, calldata) {
    var _a;
    try {
      return await this.provider.callContract({
        contractAddress: (_a = getContractByName(this.manifest, contract_name)) == null ? void 0 : _a.address,
        entrypoint: call,
        calldata
      });
    } catch (error) {
      this.logger.error(`Failed to call: ${error}`);
      throw new Error(`Failed to call: ${error}`);
    }
  }
  /**
   * Calls a function with the given parameters and return parsed results.
   *
   * @param {string} contract_name - The contract to call.
   * @param {string} call - The function to call.
   * @returns {Promise<Result>} - A promise that resolves to the response of the function call.
   */
  async callContract(contract_name, call, calldata) {
    try {
      const contractInfos = getContractByName(
        this.manifest,
        contract_name
      );
      const contract = new Contract(
        contractInfos.abi,
        contractInfos.address,
        this.provider
      );
      return await contract.call(call, calldata);
    } catch (error) {
      this.logger.error(`Failed to callContract: ${error}`);
      throw new Error(`Failed to callContract: ${error}`);
    }
  }
};
function createDojoConfig({ manifest, ...config }) {
  return {
    rpcUrl: config.rpcUrl ?? LOCAL_KATANA,
    toriiUrl: config.toriiUrl ?? LOCAL_TORII,
    relayUrl: config.relayUrl ?? LOCAL_RELAY,
    masterAddress: config.masterAddress ?? KATANA_PREFUNDED_ADDRESS,
    masterPrivateKey: config.masterPrivateKey ?? KATANA_PREFUNDED_PRIVATE_KEY,
    accountClassHash: config.accountClassHash ?? KATANA_CLASS_HASH,
    feeTokenAddress: config.feeTokenAddress ?? KATANA_ETH_CONTRACT_ADDRESS,
    manifest
  };
}

export {
  WorldEntryPoints,
  LOCAL_KATANA,
  LOCAL_RELAY,
  LOCAL_TORII,
  KATANA_PREFUNDED_ADDRESS,
  KATANA_PREFUNDED_PRIVATE_KEY,
  KATANA_CLASS_HASH,
  KATANA_ETH_CONTRACT_ADDRESS,
  getContractByName,
  parseModelName,
  createModelTypedData,
  DojoProvider,
  createDojoConfig
};
//# sourceMappingURL=chunk-REUMKYAQ.js.map
