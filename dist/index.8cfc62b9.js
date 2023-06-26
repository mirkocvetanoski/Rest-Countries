// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2mNKm":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"6rimH":[function(require,module,exports) {
var _constantsJs = require("./constants.js");
var _renderJs = require("./render.js");
var _themeJs = require("./theme.js");
var _mainJs = require("./main.js");
// Selectors
const body = document.querySelector("body");
const header = document.querySelector(".header");
const countriesContainer = document.querySelector(".countries__container");
let countryContainer = document.querySelector(".country__container");
let countriesCards = document.querySelectorAll(".country__card");
const search = document.querySelector(".input__search");
const logo = document.getElementById("logo");
const searchIcon = document.getElementById("search__icon");
const regionSelect = document.querySelector(".select__region");
const changeMode = document.querySelector(".background__mode-btn");
const modeSvg = document.querySelector(".dark__mode-svg");
let errorMessage = document.querySelector(".error");
let noFound = document.querySelector(".no__found");
// Init
const init = function() {
    const mode = localStorage.getItem("mode");
    if (mode === "Light Mode") _themeJs.elementsMode(header, body, changeMode, modeSvg, countriesCards, search, searchIcon, regionSelect);
    _mainJs.renderingCountries(_constantsJs.link, body, errorMessage, countriesContainer);
    search.focus();
};
// Event listeners
// Enter button on laptop
document.addEventListener("keydown", (e)=>{
    if (e.key === "Enter" && search.value) _mainJs.searchingForCountry(search.value, body, countriesContainer, errorMessage, search);
    if (e.key === "Enter" && !search.value) {
        _renderJs.removeCountries();
        _mainJs.renderingCountries(_constantsJs.link, body, countriesContainer, errorMessage);
        _renderJs.deleteError();
    }
});
// Search icon
document.addEventListener("click", (e)=>{
    if (e.target === searchIcon && search.value) _mainJs.searchingForCountry(search.value, body, countriesContainer, errorMessage, search);
    if (e.target === searchIcon && !search.value) {
        _renderJs.removeCountries();
        _mainJs.renderingCountries(_constantsJs.link, body, errorMessage, countriesContainer);
        _renderJs.deleteError();
    }
    // Clear  the input field
    search.value = "";
});
// Logo
logo.addEventListener("click", (e)=>{
    location.reload();
});
// Esc button - unfocus the input
window.addEventListener("keydown", (e)=>{
    if (e.key === "Escape") search.blur();
});
// Change the region
regionSelect.addEventListener("change", ()=>{
    _renderJs.removeCountries();
    _renderJs.deleteError();
    _mainJs.renderingRegion(body, errorMessage, countriesContainer, regionSelect);
});
// Change the mode
setTimeout(()=>{
    changeMode.addEventListener("click", (e)=>{
        countriesCards = document.querySelectorAll(".country__card");
        setTimeout(()=>{
            _themeJs.elementsMode(header, body, changeMode, modeSvg, countriesCards, search, searchIcon, regionSelect);
            noFound = document.querySelector(".no__found");
            _themeJs.errorMode(body, noFound);
            const mode = e.target.textContent;
            if (e.target.textContent === "Dark Mode") localStorage.removeItem("mode");
            if (e.target.textContent === "Light Mode") localStorage.setItem("mode", `${mode}`);
        }, 300);
    });
}, 700);
window.addEventListener("click", (e)=>{
    if (e.target.closest("div").classList.contains("country__card")) {
        // Open details html file
        window.location.href = "details.html";
        // Get the name of the country clicked and set it in local storage
        const country = e.target.closest("div").children[1].textContent;
        localStorage.setItem("country", `${country}`);
    }
});
// Call init function
init();

},{"./constants.js":"8eIVP","./render.js":"jb02e","./theme.js":"cjU0c","./main.js":"adjPd"}],"8eIVP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "link", ()=>link);
parcelHelpers.export(exports, "errMessage", ()=>errMessage);
parcelHelpers.export(exports, "noFoundMessage", ()=>noFoundMessage);
// API
const API = `https://restcountries.com/v3.1/all`;
// Render Error
const error = `<h1 class="error">Failed to fetch. Please try again! 🙂</h1>`;
const noCountryFound = `<h1 class="no__found">No country found with that name. Please try again! 🙂</h1>`;
const link = API;
const errMessage = error;
const noFoundMessage = noCountryFound;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jb02e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderingHTML", ()=>renderingHTML);
parcelHelpers.export(exports, "renderingLightHTML", ()=>renderingLightHTML);
parcelHelpers.export(exports, "renderingHTMLDetailed", ()=>renderingHTMLDetailed);
parcelHelpers.export(exports, "renderingError", ()=>renderingError);
parcelHelpers.export(exports, "deleteError", ()=>deleteError);
parcelHelpers.export(exports, "removeCountries", ()=>removeCountries);
var _constantsJs = require("./constants.js");
// Render HTML
// Dark Mode
const renderHTML = function(country) {
    return html = `
      <div class="country__card">
          <img src="${country.flags.png}" alt="Country Flag" />
          <h3>${country.name.common}</h3>
          <p id="population">Population: <span>${country.population.toLocaleString("en-US")}</span></p>
          <p>Region: <span>${country.region}</span></p>
          <p>Capital: <span>${country.capital}</span></p>
      </div>`;
};
// Light mode
const renderLightHTML = function(country) {
    return html = `
      <div class="country__card light__mode--countries-card">
          <img src="${country.flags.png}" alt="Country Flag" />
          <h3>${country.name.common}</h3>
          <p id="population">Population: <span>${country.population.toLocaleString("en-US")}</span></p>
          <p>Region: <span>${country.region}</span></p>
          <p>Capital: <span>${country.capital}</span></p>
      </div>`;
};
// Render HTML Detailed
const renderHTMLDetailed = function(country) {
    return html = `
        <button class="back__button">&larr; Back</button>
        <div class="country__card-detailed">
          <div>
            <img src="${country.flags.png}" alt="Country Flag" />
          </div>
          <div>
            <h3>${country.name.common}</h3>
            <p>Native Name: <span>${Object.values(country.name.nativeName)[0].common}</span></p>
            <p id="population">Population: <span>${country.population.toLocaleString("en-US")}</span></p>
            <p>Region: <span>${country.region}</span></p>
            <p>Sub Region: <span>${country.subregion}</span></p>
            <p>Capital: <span>${country.capital}</span></p>     
            <p id='borders'>Border Countries: </p>
          </div>
          <div>
            <p>Top Level Domain: <span>${country.tld[0]}</span></p>
            <p>Currencies: <span>${Object.values(country.currencies)[0].name}</span></p>
            <p>Langugages: <span>${[
        ...Object.values(country.languages), 
    ]}</span></p>     
          </div>
        </div>`;
};
// Render Error
const renderError = function(body) {
    body.innerHTML = _constantsJs.errMessage;
    errorMessage = document.querySelector(".error");
    if (localStorage.getItem("mode") === "Light Mode") {
        body.classList.add("light__mode-body");
        errorMessage.classList.add("light__mode-error");
    }
};
// Clear error messages
const removeError = function() {
    if (document.querySelector(".no__found")) document.querySelector(".no__found").remove();
};
// Remove countries cards
const removeCards = function() {
    countriesCards = document.querySelectorAll(".country__card").forEach((card)=>card.remove());
};
const renderingHTML = renderHTML;
const renderingLightHTML = renderLightHTML;
const renderingHTMLDetailed = renderHTMLDetailed;
const renderingError = renderError;
const deleteError = removeError;
const removeCountries = removeCards;

},{"./constants.js":"8eIVP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cjU0c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "elementsMode", ()=>elementsMode);
parcelHelpers.export(exports, "elementsModeDetailed", ()=>elementsModeDetailed);
parcelHelpers.export(exports, "errorMode", ()=>errorMode);
// Chainging mode colors
const modeColors = function(header, body, changeMode, modeSvg, countries, search, searchIcon, regionSelect) {
    header.classList.toggle("light__mode-header");
    body.classList.toggle("light__mode-body");
    if (modeSvg.classList.contains("dark__mode-svg")) changeMode.textContent = "Light Mode";
    if (modeSvg.classList.contains("light__mode-svg")) changeMode.textContent = "Dark Mode";
    modeSvg.classList.toggle("light__mode-svg");
    countries && countries.forEach((card)=>{
        card.classList.toggle("light__mode--countries-card");
    });
    search.classList.toggle("light__mode-input");
    searchIcon.classList.toggle("light__mode-input");
    regionSelect.classList.toggle("light__mode-region");
};
const modeColorsDetailed = function(header, body, modeSvg, changeMode, country) {
    header.classList.toggle("light__mode-header");
    body.classList.toggle("light__mode-body");
    if (modeSvg.classList.contains("dark__mode-svg")) changeMode.textContent = "Light Mode";
    if (modeSvg.classList.contains("light__mode-svg")) changeMode.textContent = "Dark Mode";
    modeSvg.classList.toggle("light__mode-svg");
    country.classList.toggle("country__card-detailed-light");
    document.querySelectorAll(".border").forEach((el)=>el.classList.toggle("country__card-detailed-light"));
    document.querySelector(".back__button").classList.toggle("country__card-detailed-light");
};
// Determining error messages color
const errorColor = function(body, noFound) {
    if (noFound && body.classList.contains("light__mode-body")) noFound.style.color = "var(--light-mode-text)";
    if (noFound && !body.classList.contains("light__mode-body")) noFound.style.color = "var(--dark-mode-text)";
};
const elementsMode = modeColors;
const elementsModeDetailed = modeColorsDetailed;
const errorMode = errorColor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"adjPd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderingCountries", ()=>renderingCountries);
parcelHelpers.export(exports, "renderingCountryDetailed", ()=>renderingCountryDetailed);
parcelHelpers.export(exports, "searchingForCountry", ()=>searchingForCountry);
parcelHelpers.export(exports, "changingRegion", ()=>changingRegion);
parcelHelpers.export(exports, "renderingRegion", ()=>renderingRegion);
var _renderJs = require("./render.js");
var _themeJs = require("./theme.js");
var _constantsJs = require("./constants.js");
// Fetch the API and add all countries to the container
const renderCountries = async function(url, body, errorMessage, countriesContainer) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const mode = localStorage.getItem("mode");
        mode === "Light Mode" ? data.forEach((country)=>{
            const html = _renderJs.renderingLightHTML(country);
            countriesContainer.insertAdjacentHTML("beforeend", html);
        }) : data.forEach((country)=>{
            const html = _renderJs.renderingHTML(country);
            countriesContainer.insertAdjacentHTML("beforeend", html);
        });
    } catch (err) {
        _renderJs.renderingError(body);
    }
};
// Fetch the API add country to container
const renderCountryDetailed = async function(url, header, body, modeSvg, changeMode, country, errorMessage) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // Get the country from local storage
        const countryLocalStorage = localStorage.getItem("country");
        const mode = localStorage.getItem("mode");
        data.forEach((country)=>{
            if (countryLocalStorage === country.name.common) {
                const html = _renderJs.renderingHTMLDetailed(country);
                countryContainer.insertAdjacentHTML("beforeend", html);
                // Add borders one by one
                const borders = document.getElementById("borders");
                country.borders ? [
                    ...Object.values(country.borders)
                ].forEach((el)=>borders.insertAdjacentHTML("beforeend", `<span class='border'>${el}</span>`)) : borders.insertAdjacentHTML("beforeend", `<span class='border'>Island</span>`);
            }
        });
        if (mode === "Light Mode") {
            country = document.querySelector(".country__card-detailed");
            _themeJs.elementsModeDetailed(header, body, modeSvg, changeMode, country);
        }
    } catch (err) {
        _renderJs.renderingError(body);
    }
};
// Search country
const searchForCountry = async function(query, body, countriesContainer, errorMessage, search) {
    try {
        // Clean inner HTML
        _renderJs.removeCountries();
        _renderJs.deleteError();
        const response = await fetch(_constantsJs.link);
        const data = await response.json();
        const foundCountries = [];
        data.forEach((country)=>{
            if (country.name.common.toLowerCase().includes(query.toLowerCase())) {
                const html = _renderJs.renderingHTML(country);
                countriesContainer.insertAdjacentHTML("beforeend", html);
                foundCountries.push(country);
            }
        });
        if (foundCountries.length === 0) countriesContainer.insertAdjacentHTML("beforeend", _constantsJs.noFoundMessage);
        countriesCards = document.querySelectorAll(".country__card");
        if (body.classList.contains("light__mode-body")) countriesCards.forEach((card)=>{
            card.classList.add("light__mode--countries-card");
        });
        noFound = document.querySelector(".no__found");
        _themeJs.errorMode(body, noFound);
        // Clear  the input field
        search.value = "";
    } catch (err) {
        _renderJs.renderingError(body);
    }
};
// Change the region
const changeRegion = async function(region, body, errorMessage, countriesContainer, regionSelect) {
    try {
        const response = await fetch(_constantsJs.link);
        const data = await response.json();
        data.forEach((country)=>{
            if (region === country.region) {
                const html = _renderJs.renderingHTML(country);
                countriesContainer.insertAdjacentHTML("beforeend", html);
            }
        });
    } catch (err) {
        _renderJs.renderingError(body);
    }
    // Change mode of cards
    countriesCards = document.querySelectorAll(".country__card");
    if (regionSelect.classList.contains("light__mode-region")) countriesCards.forEach((card)=>{
        card.classList.toggle("light__mode--countries-card");
    });
};
// Render region
const renderRegion = function(body, errorMessage, countriesContainer, regionSelect) {
    if (regionSelect.value === "All") renderingCountries(_constantsJs.link, body, errorMessage, countriesContainer);
    if (regionSelect.value === "Africa") changeRegion(regionSelect.value, body, errorMessage, countriesContainer, regionSelect);
    if (regionSelect.value === "Americas") changeRegion(regionSelect.value, body, errorMessage, countriesContainer, regionSelect);
    if (regionSelect.value === "Asia") changeRegion(regionSelect.value, body, errorMessage, countriesContainer, regionSelect);
    if (regionSelect.value === "Europe") changeRegion(regionSelect.value, body, errorMessage, countriesContainer, regionSelect);
    if (regionSelect.value === "Oceania") changeRegion(regionSelect.value, body, errorMessage, countriesContainer, regionSelect);
};
const renderingCountries = renderCountries;
const renderingCountryDetailed = renderCountryDetailed;
const searchingForCountry = searchForCountry;
const changingRegion = changeRegion;
const renderingRegion = renderRegion;

},{"./render.js":"jb02e","./theme.js":"cjU0c","./constants.js":"8eIVP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["2mNKm","6rimH"], "6rimH", "parcelRequire94c2")

//# sourceMappingURL=index.8cfc62b9.js.map
