import "./chunk-J32WSRGE.js";

// node_modules/.pnpm/@dojoengine+torii-wasm@0.6.125/node_modules/@dojoengine/torii-wasm/pkg/torii_client_wasm.js
import * as wasm2 from "/Users/victoromorogbe/Desktop/mancala/client/node_modules/.pnpm/@dojoengine+torii-wasm@0.6.125/node_modules/@dojoengine/torii-wasm/pkg/torii_client_wasm_bg.wasm";

// node_modules/.pnpm/@dojoengine+torii-wasm@0.6.125/node_modules/@dojoengine/torii-wasm/pkg/torii_client_wasm_bg.js
var wasm;
function __wbg_set_wasm(val) {
  wasm = val;
}
var heap = new Array(128).fill(void 0);
heap.push(void 0, null, true, false);
function getObject(idx) {
  return heap[idx];
}
var heap_next = heap.length;
function dropObject(idx) {
  if (idx < 132)
    return;
  heap[idx] = heap_next;
  heap_next = idx;
}
function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}
function addHeapObject(obj) {
  if (heap_next === heap.length)
    heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}
var lTextDecoder = typeof TextDecoder === "undefined" ? (0, module.require)("util").TextDecoder : TextDecoder;
var cachedTextDecoder = new lTextDecoder("utf-8", { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
var cachedUint8Memory0 = null;
function getUint8Memory0() {
  if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
    cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8Memory0;
}
var WASM_VECTOR_LEN = 0;
var lTextEncoder = typeof TextEncoder === "undefined" ? (0, module.require)("util").TextEncoder : TextEncoder;
var cachedTextEncoder = new lTextEncoder("utf-8");
var encodeString = typeof cachedTextEncoder.encodeInto === "function" ? function(arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function(arg, view) {
  const buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === void 0) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr2 = malloc(buf.length, 1) >>> 0;
    getUint8Memory0().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len, 1) >>> 0;
  const mem = getUint8Memory0();
  let offset = 0;
  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 127)
      break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
    const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);
    offset += ret.written;
    ptr = realloc(ptr, len, offset, 1) >>> 0;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
function isLikeNone(x) {
  return x === void 0 || x === null;
}
var cachedInt32Memory0 = null;
function getInt32Memory0() {
  if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
    cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }
  return cachedInt32Memory0;
}
var CLOSURE_DTORS = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((state) => {
  wasm.__wbindgen_export_2.get(state.dtor)(state.a, state.b);
});
var cachedUint32Memory0 = null;
function getUint32Memory0() {
  if (cachedUint32Memory0 === null || cachedUint32Memory0.byteLength === 0) {
    cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
  }
  return cachedUint32Memory0;
}
function passArrayJsValueToWasm0(array, malloc) {
  const ptr = malloc(array.length * 4, 4) >>> 0;
  const mem = getUint32Memory0();
  for (let i = 0; i < array.length; i++) {
    mem[ptr / 4 + i] = addHeapObject(array[i]);
  }
  WASM_VECTOR_LEN = array.length;
  return ptr;
}
function createClient(initialModelsToSync, config) {
  const ptr0 = passArrayJsValueToWasm0(initialModelsToSync, wasm.__wbindgen_malloc);
  const len0 = WASM_VECTOR_LEN;
  const ret = wasm.createClient(ptr0, len0, addHeapObject(config));
  return takeObject(ret);
}
var ClientFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_client_free(ptr >>> 0));
var Client = class _Client {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_Client.prototype);
    obj.__wbg_ptr = ptr;
    ClientFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    ClientFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_client_free(ptr);
  }
  /**
  * @param {number} limit
  * @param {number} offset
  * @returns {Promise<any>}
  */
  getEntities(limit, offset) {
    const ret = wasm.client_getEntities(this.__wbg_ptr, limit, offset);
    return takeObject(ret);
  }
  /**
  * @param {string} model
  * @param {any[]} keys
  * @param {number} limit
  * @param {number} offset
  * @returns {Promise<any>}
  */
  getEntitiesByKeys(model, keys, limit, offset) {
    const ptr0 = passStringToWasm0(model, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArrayJsValueToWasm0(keys, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.client_getEntitiesByKeys(this.__wbg_ptr, ptr0, len0, ptr1, len1, limit, offset);
    return takeObject(ret);
  }
  /**
  * Retrieves the model value of an entity. Will fetch from remote if the requested entity is not one of the entities that are being synced.
  * @param {string} model
  * @param {any[]} keys
  * @returns {Promise<any>}
  */
  getModelValue(model, keys) {
    const ptr0 = passStringToWasm0(model, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArrayJsValueToWasm0(keys, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.client_getModelValue(this.__wbg_ptr, ptr0, len0, ptr1, len1);
    return takeObject(ret);
  }
  /**
  * Register new entities to be synced.
  * @param {(EntityModel)[]} models
  * @returns {Promise<void>}
  */
  addModelsToSync(models) {
    const ptr0 = passArrayJsValueToWasm0(models, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.client_addModelsToSync(this.__wbg_ptr, ptr0, len0);
    return takeObject(ret);
  }
  /**
  * Remove the entities from being synced.
  * @param {(EntityModel)[]} models
  * @returns {Promise<void>}
  */
  removeModelsToSync(models) {
    const ptr0 = passArrayJsValueToWasm0(models, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.client_removeModelsToSync(this.__wbg_ptr, ptr0, len0);
    return takeObject(ret);
  }
  /**
  * Register a callback to be called every time the specified synced entity's value changes.
  * @param {EntityModel} model
  * @param {Function} callback
  */
  onSyncModelChange(model, callback) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.client_onSyncModelChange(retptr, this.__wbg_ptr, addHeapObject(model), addHeapObject(callback));
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      if (r1) {
        throw takeObject(r0);
      }
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @param {(string)[] | undefined} ids
  * @param {Function} callback
  * @returns {Promise<void>}
  */
  onEntityUpdated(ids, callback) {
    var ptr0 = isLikeNone(ids) ? 0 : passArrayJsValueToWasm0(ids, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    const ret = wasm.client_onEntityUpdated(this.__wbg_ptr, ptr0, len0, addHeapObject(callback));
    return takeObject(ret);
  }
  /**
  * @param {any} message
  * @param {Signature} signature
  * @returns {Promise<Uint8Array>}
  */
  publishMessage(message, signature) {
    const ret = wasm.client_publishMessage(this.__wbg_ptr, addHeapObject(message), addHeapObject(signature));
    return takeObject(ret);
  }
};
var IntoUnderlyingByteSourceFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_intounderlyingbytesource_free(ptr >>> 0));
var IntoUnderlyingSinkFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_intounderlyingsink_free(ptr >>> 0));
var IntoUnderlyingSourceFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_intounderlyingsource_free(ptr >>> 0));
var PipeOptionsFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_pipeoptions_free(ptr >>> 0));
var QueuingStrategyFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_queuingstrategy_free(ptr >>> 0));
var ReadableStreamGetReaderOptionsFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_readablestreamgetreaderoptions_free(ptr >>> 0));

// node_modules/.pnpm/@dojoengine+torii-wasm@0.6.125/node_modules/@dojoengine/torii-wasm/pkg/torii_client_wasm.js
__wbg_set_wasm(wasm2);
export {
  Client,
  createClient
};
//# sourceMappingURL=@dojoengine_torii-client.js.map
