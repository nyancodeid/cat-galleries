// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"assets/css/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = E;
exports.hydrate = H;
exports.h = exports.createElement = h;
exports.Fragment = y;
exports.createRef = p;
exports.Component = d;
exports.cloneElement = I;
exports.createContext = L;
exports.toChildArray = b;
exports._unmount = A;
exports.options = exports.isValidElement = void 0;
var n,
    l,
    u,
    i,
    t,
    o,
    f,
    r = {},
    e = [],
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
exports.isValidElement = l;
exports.options = n;

function s(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function a(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function h(n, l, u) {
  var i,
      t = arguments,
      o = {};

  for (i in l) "key" !== i && "ref" !== i && (o[i] = l[i]);

  if (arguments.length > 3) for (u = [u], i = 3; i < arguments.length; i++) u.push(t[i]);
  if (null != u && (o.children = u), "function" == typeof n && null != n.defaultProps) for (i in n.defaultProps) void 0 === o[i] && (o[i] = n.defaultProps[i]);
  return v(n, o, l && l.key, l && l.ref);
}

function v(l, u, i, t) {
  var o = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: null,
    __c: null,
    constructor: void 0
  };
  return n.vnode && n.vnode(o), o;
}

function p() {
  return {};
}

function y(n) {
  return n.children;
}

function d(n, l) {
  this.props = n, this.context = l;
}

function m(n, l) {
  if (null == l) return n.__ ? m(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? m(n) : null;
}

function w(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return w(n);
  }
}

function g(l) {
  (!l.__d && (l.__d = !0) && 1 === u.push(l) || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(k);
}

function k() {
  var n, l, i, t, o, f, r;

  for (u.sort(function (n, l) {
    return l.__v.__b - n.__v.__b;
  }); n = u.pop();) n.__d && (i = void 0, t = void 0, f = (o = (l = n).__v).__e, (r = l.__P) && (i = [], t = T(r, o, s({}, o), l.__n, void 0 !== r.ownerSVGElement, null, i, null == f ? m(o) : f), $(i, o), t != f && w(o)));
}

function _(n, l, u, i, t, o, f, c, s) {
  var h,
      v,
      p,
      y,
      d,
      w,
      g,
      k = u && u.__k || e,
      _ = k.length;
  if (c == r && (c = null != o ? o[0] : _ ? m(u, 0) : null), h = 0, l.__k = b(l.__k, function (u) {
    if (null != u) {
      if (u.__ = l, u.__b = l.__b + 1, null === (p = k[h]) || p && u.key == p.key && u.type === p.type) k[h] = void 0;else for (v = 0; v < _; v++) {
        if ((p = k[v]) && u.key == p.key && u.type === p.type) {
          k[v] = void 0;
          break;
        }

        p = null;
      }

      if (y = T(n, u, p = p || r, i, t, o, f, c, s), (v = u.ref) && p.ref != v && (g || (g = []), p.ref && g.push(p.ref, null, u), g.push(v, u.__c || y, u)), null != y) {
        if (null == w && (w = y), null != u.__d) y = u.__d, u.__d = null;else if (o == p || y != c || null == y.parentNode) {
          n: if (null == c || c.parentNode !== n) n.appendChild(y);else {
            for (d = c, v = 0; (d = d.nextSibling) && v < _; v += 2) if (d == y) break n;

            n.insertBefore(y, c);
          }

          "option" == l.type && (n.value = "");
        }
        c = y.nextSibling, "function" == typeof l.type && (l.__d = y);
      }
    }

    return h++, u;
  }), l.__e = w, null != o && "function" != typeof l.type) for (h = o.length; h--;) null != o[h] && a(o[h]);

  for (h = _; h--;) null != k[h] && A(k[h], k[h]);

  if (g) for (h = 0; h < g.length; h++) z(g[h], g[++h], g[++h]);
}

function b(n, l, u) {
  if (null == u && (u = []), null == n || "boolean" == typeof n) l && u.push(l(null));else if (Array.isArray(n)) for (var i = 0; i < n.length; i++) b(n[i], l, u);else u.push(l ? l("string" == typeof n || "number" == typeof n ? v(null, n, null, null) : null != n.__e || null != n.__c ? v(n.type, n.props, n.key, null) : n) : n);
  return u;
}

function x(n, l, u, i, t) {
  var o;

  for (o in u) o in l || P(n, o, null, u[o], i);

  for (o in l) t && "function" != typeof l[o] || "value" === o || "checked" === o || u[o] === l[o] || P(n, o, l[o], u[o], i);
}

function C(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === c.test(l) ? u + "px" : null == u ? "" : u;
}

function P(n, l, u, i, t) {
  var o, f, r, e, c;
  if (t ? "className" === l && (l = "class") : "class" === l && (l = "className"), "key" === l || "children" === l) ;else if ("style" === l) {
    if (o = n.style, "string" == typeof u) o.cssText = u;else {
      if ("string" == typeof i && (o.cssText = "", i = null), i) for (f in i) u && f in u || C(o, f, "");
      if (u) for (r in u) i && u[r] === i[r] || C(o, r, u[r]);
    }
  } else "o" === l[0] && "n" === l[1] ? (e = l !== (l = l.replace(/Capture$/, "")), c = l.toLowerCase(), l = (c in n ? c : l).slice(2), u ? (i || n.addEventListener(l, N, e), (n.l || (n.l = {}))[l] = u) : n.removeEventListener(l, N, e)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && !t && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u ? n.removeAttribute(l) : n.setAttribute(l, u));
}

function N(l) {
  this.l[l.type](n.event ? n.event(l) : l);
}

function T(l, u, i, t, o, f, r, e, c) {
  var a,
      h,
      v,
      p,
      m,
      w,
      g,
      k,
      x,
      C,
      P = u.type;
  if (void 0 !== u.constructor) return null;
  (a = n.__b) && a(u);

  try {
    n: if ("function" == typeof P) {
      if (k = u.props, x = (a = P.contextType) && t[a.__c], C = a ? x ? x.props.value : a.__ : t, i.__c ? g = (h = u.__c = i.__c).__ = h.__E : ("prototype" in P && P.prototype.render ? u.__c = h = new P(k, C) : (u.__c = h = new d(k, C), h.constructor = P, h.render = D), x && x.sub(h), h.props = k, h.state || (h.state = {}), h.context = C, h.__n = t, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != P.getDerivedStateFromProps && (h.__s == h.state && (h.__s = s({}, h.__s)), s(h.__s, P.getDerivedStateFromProps(k, h.__s))), p = h.props, m = h.state, v) null == P.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && null == h.__e && null != h.componentWillReceiveProps && h.componentWillReceiveProps(k, C), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(k, h.__s, C)) {
          for (h.props = k, h.state = h.__s, h.__d = !1, h.__v = u, u.__e = i.__e, u.__k = i.__k, h.__h.length && r.push(h), a = 0; a < u.__k.length; a++) u.__k[a] && (u.__k[a].__ = u);

          break n;
        }

        null != h.componentWillUpdate && h.componentWillUpdate(k, h.__s, C), null != h.componentDidUpdate && h.__h.push(function () {
          h.componentDidUpdate(p, m, w);
        });
      }
      h.context = C, h.props = k, h.state = h.__s, (a = n.__r) && a(u), h.__d = !1, h.__v = u, h.__P = l, a = h.render(h.props, h.state, h.context), u.__k = b(null != a && a.type == y && null == a.key ? a.props.children : a), null != h.getChildContext && (t = s(s({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (w = h.getSnapshotBeforeUpdate(p, m)), _(l, u, i, t, o, f, r, e, c), h.base = u.__e, h.__h.length && r.push(h), g && (h.__E = h.__ = null), h.__e = null;
    } else u.__e = j(i.__e, u, i, t, o, f, r, c);

    (a = n.diffed) && a(u);
  } catch (l) {
    n.__e(l, u, i);
  }

  return u.__e;
}

function $(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}

function j(n, l, u, i, t, o, f, c) {
  var s,
      a,
      h,
      v,
      p,
      y = u.props,
      d = l.props;
  if (t = "svg" === l.type || t, null == n && null != o) for (s = 0; s < o.length; s++) if (null != (a = o[s]) && (null === l.type ? 3 === a.nodeType : a.localName === l.type)) {
    n = a, o[s] = null;
    break;
  }

  if (null == n) {
    if (null === l.type) return document.createTextNode(d);
    n = t ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type), o = null;
  }

  if (null === l.type) null != o && (o[o.indexOf(n)] = null), y !== d && (n.data = d);else if (l !== u) {
    if (null != o && (o = e.slice.call(n.childNodes)), h = (y = u.props || r).dangerouslySetInnerHTML, v = d.dangerouslySetInnerHTML, !c) {
      if (y === r) for (y = {}, p = 0; p < n.attributes.length; p++) y[n.attributes[p].name] = n.attributes[p].value;
      (v || h) && (v && h && v.__html == h.__html || (n.innerHTML = v && v.__html || ""));
    }

    x(n, d, y, t, c), l.__k = l.props.children, v || _(n, l, u, i, "foreignObject" !== l.type && t, o, f, r, c), c || ("value" in d && void 0 !== d.value && d.value !== n.value && (n.value = null == d.value ? "" : d.value), "checked" in d && void 0 !== d.checked && d.checked !== n.checked && (n.checked = d.checked));
  }
  return n;
}

function z(l, u, i) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, i);
  }
}

function A(l, u, i) {
  var t, o, f;

  if (n.unmount && n.unmount(l), (t = l.ref) && z(t, null, u), i || "function" == typeof l.type || (i = null != (o = l.__e)), l.__e = l.__d = null, null != (t = l.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    t.base = t.__P = null;
  }

  if (t = l.__k) for (f = 0; f < t.length; f++) t[f] && A(t[f], u, i);
  null != o && a(o);
}

function D(n, l, u) {
  return this.constructor(n, u);
}

function E(l, u, i) {
  var t, f, c;
  n.__ && n.__(l, u), f = (t = i === o) ? null : i && i.__k || u.__k, l = h(y, null, [l]), c = [], T(u, (t ? u : i || u).__k = l, f || r, r, void 0 !== u.ownerSVGElement, i && !t ? [i] : f ? null : e.slice.call(u.childNodes), c, i || r, t), $(c, l);
}

function H(n, l) {
  E(n, l, o);
}

function I(n, l) {
  return l = s(s({}, n.props), l), arguments.length > 2 && (l.children = e.slice.call(arguments, 2)), v(n.type, l, l.key || n.key, l.ref || n.ref);
}

function L(n) {
  var l = {},
      u = {
    __c: "__cC" + f++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var i,
          t = this;
      return this.getChildContext || (i = [], this.getChildContext = function () {
        return l[u.__c] = t, l;
      }, this.shouldComponentUpdate = function (l) {
        n.value !== l.value && i.some(function (n) {
          n.context = l.value, g(n);
        });
      }, this.sub = function (n) {
        i.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          i.splice(i.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Consumer.contextType = u, u;
}

exports.options = n = {
  __e: function (n, l) {
    for (var u; l = l.__;) if ((u = l.__c) && !u.__) try {
      if (u.constructor && null != u.constructor.getDerivedStateFromError) u.setState(u.constructor.getDerivedStateFromError(n));else {
        if (null == u.componentDidCatch) continue;
        u.componentDidCatch(n);
      }
      return g(u.__E = u);
    } catch (l) {
      n = l;
    }

    throw n;
  }
}, exports.isValidElement = l = function (n) {
  return null != n && void 0 === n.constructor;
}, d.prototype.setState = function (n, l) {
  var u;
  u = this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(u, this.props)), n && s(u, n), null != n && this.__v && (this.__e = !1, l && this.__h.push(l), g(this));
}, d.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), g(this));
}, d.prototype.render = y, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, o = r, f = 0;
},{}],"components/image.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageLazy = void 0;

var _preact = require("preact");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ImageLazy =
/*#__PURE__*/
function (_Component) {
  _inherits(ImageLazy, _Component);

  function ImageLazy() {
    var _this;

    _classCallCheck(this, ImageLazy);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageLazy).call(this));
    _this.state = {
      src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      dataSrc: false,
      loaded: false
    };
    return _this;
  }

  _createClass(ImageLazy, [{
    key: "inview",
    value: function inview(entries, observer) {
      var _this2 = this;

      entries.forEach(function (entry) {
        if (entry.intersectionRatio) {
          entry.target.addEventListener('load', _this2.loading.bind(_this2));
          entry.target.src = entry.target.getAttribute("data-src");
          observer.unobserve(entry.target);
        }
      });
    }
  }, {
    key: "loading",
    value: function loading(event) {
      if (event.target.complete) this.setState({
        loaded: true
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        dataSrc: this.props.gallery.url,
        loaded: false
      });
      var observer = new IntersectionObserver(this.inview.bind(this));
      observer.observe(this.element);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return (0, _preact.h)("img", {
        width: this.props.gallery.width,
        height: this.props.gallery.height,
        src: this.state.src,
        "data-src": this.state.dataSrc,
        ref: function ref(element) {
          return _this3.element = element;
        }
      });
    }
  }]);

  return ImageLazy;
}(_preact.Component);

exports.ImageLazy = ImageLazy;
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"components/galleries.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Galleries = void 0;

var _preact = require("preact");

var _image = require("./image");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Galleries =
/*#__PURE__*/
function (_Component) {
  _inherits(Galleries, _Component);

  function Galleries() {
    var _this;

    _classCallCheck(this, Galleries);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Galleries).call(this));
    _this.state = {
      galleries: []
    };
    return _this;
  } // Lifecycle: Called whenever our component is created


  _createClass(Galleries, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var galleries = [];

      var random = function random(min, max) {
        return Math.round(Math.random() * (max - min) + min);
      };

      var cdnImage = function cdnImage(uri) {
        return "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?url=".concat(encodeURIComponent(uri), "&container=focus");
      };

      for (var index = 0; index < 25; index++) {
        var size = {
          width: random(200, 400),
          height: random(200, 400)
        };
        galleries.push(_objectSpread({
          url: cdnImage("https://placekitten.com/".concat(size.width, "/").concat(size.height))
        }, size));
      }

      this.setState({
        galleries: galleries
      });
    }
  }, {
    key: "render",
    value: function render() {
      var renderedDOM = this.state.galleries.map(function (gallery, index) {
        return (0, _preact.h)(_image.ImageLazy, {
          gallery: gallery
        });
      });
      return (0, _preact.h)("div", {
        class: "galleries-wrap"
      }, renderedDOM);
    }
  }]);

  return Galleries;
}(_preact.Component);

exports.Galleries = Galleries;
},{"preact":"../node_modules/preact/dist/preact.module.js","./image":"components/image.jsx"}],"main.jsx":[function(require,module,exports) {
"use strict";

require("./assets/css/style.scss");

var _preact = require("preact");

var _galleries = require("./components/galleries");

(0, _preact.render)((0, _preact.h)(_galleries.Galleries, null), document.getElementById('galleries'));
},{"./assets/css/style.scss":"assets/css/style.scss","preact":"../node_modules/preact/dist/preact.module.js","./components/galleries":"components/galleries.jsx"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "36713" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.jsx"], null)
//# sourceMappingURL=/main.65f60760.js.map