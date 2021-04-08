var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
};

// node_modules/ramda/src/F.js
var require_F = __commonJS((exports, module) => {
  var F = function() {
    return false;
  };
  module.exports = F;
});

// node_modules/ramda/src/T.js
var require_T = __commonJS((exports, module) => {
  var T = function() {
    return true;
  };
  module.exports = T;
});

// node_modules/ramda/src/__.js
var require__ = __commonJS((exports, module) => {
  module.exports = {
    "@@functional/placeholder": true
  };
});

// node_modules/ramda/src/internal/_isPlaceholder.js
var require_isPlaceholder = __commonJS((exports, module) => {
  function _isPlaceholder(a) {
    return a != null && typeof a === "object" && a["@@functional/placeholder"] === true;
  }
  module.exports = _isPlaceholder;
});

// node_modules/ramda/src/internal/_curry1.js
var require_curry1 = __commonJS((exports, module) => {
  var _isPlaceholder = require_isPlaceholder();
  function _curry1(fn) {
    return function f1(a) {
      if (arguments.length === 0 || _isPlaceholder(a)) {
        return f1;
      } else {
        return fn.apply(this, arguments);
      }
    };
  }
  module.exports = _curry1;
});

// node_modules/ramda/src/internal/_curry2.js
var require_curry2 = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var _isPlaceholder = require_isPlaceholder();
  function _curry2(fn) {
    return function f2(a, b) {
      switch (arguments.length) {
        case 0:
          return f2;
        case 1:
          return _isPlaceholder(a) ? f2 : _curry1(function(_b) {
            return fn(a, _b);
          });
        default:
          return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function(_a) {
            return fn(_a, b);
          }) : _isPlaceholder(b) ? _curry1(function(_b) {
            return fn(a, _b);
          }) : fn(a, b);
      }
    };
  }
  module.exports = _curry2;
});

// node_modules/ramda/src/add.js
var require_add = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var add2 = /* @__PURE__ */ _curry2(function add3(a, b) {
    return Number(a) + Number(b);
  });
  module.exports = add2;
});

// node_modules/ramda/src/internal/_concat.js
var require_concat = __commonJS((exports, module) => {
  function _concat(set1, set2) {
    set1 = set1 || [];
    set2 = set2 || [];
    var idx;
    var len1 = set1.length;
    var len2 = set2.length;
    var result = [];
    idx = 0;
    while (idx < len1) {
      result[result.length] = set1[idx];
      idx += 1;
    }
    idx = 0;
    while (idx < len2) {
      result[result.length] = set2[idx];
      idx += 1;
    }
    return result;
  }
  module.exports = _concat;
});

// node_modules/ramda/src/internal/_arity.js
var require_arity = __commonJS((exports, module) => {
  function _arity(n, fn) {
    switch (n) {
      case 0:
        return function() {
          return fn.apply(this, arguments);
        };
      case 1:
        return function(a0) {
          return fn.apply(this, arguments);
        };
      case 2:
        return function(a0, a1) {
          return fn.apply(this, arguments);
        };
      case 3:
        return function(a0, a1, a2) {
          return fn.apply(this, arguments);
        };
      case 4:
        return function(a0, a1, a2, a3) {
          return fn.apply(this, arguments);
        };
      case 5:
        return function(a0, a1, a2, a3, a4) {
          return fn.apply(this, arguments);
        };
      case 6:
        return function(a0, a1, a2, a3, a4, a5) {
          return fn.apply(this, arguments);
        };
      case 7:
        return function(a0, a1, a2, a3, a4, a5, a6) {
          return fn.apply(this, arguments);
        };
      case 8:
        return function(a0, a1, a2, a3, a4, a5, a6, a7) {
          return fn.apply(this, arguments);
        };
      case 9:
        return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
          return fn.apply(this, arguments);
        };
      case 10:
        return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          return fn.apply(this, arguments);
        };
      default:
        throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
    }
  }
  module.exports = _arity;
});

// node_modules/ramda/src/internal/_curryN.js
var require_curryN = __commonJS((exports, module) => {
  var _arity = require_arity();
  var _isPlaceholder = require_isPlaceholder();
  function _curryN(length, received, fn) {
    return function() {
      var combined = [];
      var argsIdx = 0;
      var left = length;
      var combinedIdx = 0;
      while (combinedIdx < received.length || argsIdx < arguments.length) {
        var result;
        if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
          result = received[combinedIdx];
        } else {
          result = arguments[argsIdx];
          argsIdx += 1;
        }
        combined[combinedIdx] = result;
        if (!_isPlaceholder(result)) {
          left -= 1;
        }
        combinedIdx += 1;
      }
      return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
    };
  }
  module.exports = _curryN;
});

// node_modules/ramda/src/curryN.js
var require_curryN2 = __commonJS((exports, module) => {
  var _arity = require_arity();
  var _curry1 = require_curry1();
  var _curry2 = require_curry2();
  var _curryN = require_curryN();
  var curryN = /* @__PURE__ */ _curry2(function curryN2(length, fn) {
    if (length === 1) {
      return _curry1(fn);
    }
    return _arity(length, _curryN(length, [], fn));
  });
  module.exports = curryN;
});

// node_modules/ramda/src/addIndex.js
var require_addIndex = __commonJS((exports, module) => {
  var _concat = require_concat();
  var _curry1 = require_curry1();
  var curryN = require_curryN2();
  var addIndex = /* @__PURE__ */ _curry1(function addIndex2(fn) {
    return curryN(fn.length, function() {
      var idx = 0;
      var origFn = arguments[0];
      var list = arguments[arguments.length - 1];
      var args = Array.prototype.slice.call(arguments, 0);
      args[0] = function() {
        var result = origFn.apply(this, _concat(arguments, [idx, list]));
        idx += 1;
        return result;
      };
      return fn.apply(this, args);
    });
  });
  module.exports = addIndex;
});

// node_modules/ramda/src/internal/_curry3.js
var require_curry3 = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var _curry2 = require_curry2();
  var _isPlaceholder = require_isPlaceholder();
  function _curry3(fn) {
    return function f3(a, b, c) {
      switch (arguments.length) {
        case 0:
          return f3;
        case 1:
          return _isPlaceholder(a) ? f3 : _curry2(function(_b, _c) {
            return fn(a, _b, _c);
          });
        case 2:
          return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function(_a, _c) {
            return fn(_a, b, _c);
          }) : _isPlaceholder(b) ? _curry2(function(_b, _c) {
            return fn(a, _b, _c);
          }) : _curry1(function(_c) {
            return fn(a, b, _c);
          });
        default:
          return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) {
            return fn(_a, _b, c);
          }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function(_a, _c) {
            return fn(_a, b, _c);
          }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) {
            return fn(a, _b, _c);
          }) : _isPlaceholder(a) ? _curry1(function(_a) {
            return fn(_a, b, c);
          }) : _isPlaceholder(b) ? _curry1(function(_b) {
            return fn(a, _b, c);
          }) : _isPlaceholder(c) ? _curry1(function(_c) {
            return fn(a, b, _c);
          }) : fn(a, b, c);
      }
    };
  }
  module.exports = _curry3;
});

// node_modules/ramda/src/adjust.js
var require_adjust = __commonJS((exports, module) => {
  var _concat = require_concat();
  var _curry3 = require_curry3();
  var adjust = /* @__PURE__ */ _curry3(function adjust2(idx, fn, list) {
    if (idx >= list.length || idx < -list.length) {
      return list;
    }
    var start = idx < 0 ? list.length : 0;
    var _idx = start + idx;
    var _list = _concat(list);
    _list[_idx] = fn(list[_idx]);
    return _list;
  });
  module.exports = adjust;
});

// node_modules/ramda/src/internal/_isArray.js
var require_isArray = __commonJS((exports, module) => {
  module.exports = Array.isArray || function _isArray(val) {
    return val != null && val.length >= 0 && Object.prototype.toString.call(val) === "[object Array]";
  };
});

// node_modules/ramda/src/internal/_isTransformer.js
var require_isTransformer = __commonJS((exports, module) => {
  function _isTransformer(obj) {
    return obj != null && typeof obj["@@transducer/step"] === "function";
  }
  module.exports = _isTransformer;
});

// node_modules/ramda/src/internal/_dispatchable.js
var require_dispatchable = __commonJS((exports, module) => {
  var _isArray = require_isArray();
  var _isTransformer = require_isTransformer();
  function _dispatchable(methodNames, xf, fn) {
    return function() {
      if (arguments.length === 0) {
        return fn();
      }
      var args = Array.prototype.slice.call(arguments, 0);
      var obj = args.pop();
      if (!_isArray(obj)) {
        var idx = 0;
        while (idx < methodNames.length) {
          if (typeof obj[methodNames[idx]] === "function") {
            return obj[methodNames[idx]].apply(obj, args);
          }
          idx += 1;
        }
        if (_isTransformer(obj)) {
          var transducer = xf.apply(null, args);
          return transducer(obj);
        }
      }
      return fn.apply(this, arguments);
    };
  }
  module.exports = _dispatchable;
});

// node_modules/ramda/src/internal/_reduced.js
var require_reduced = __commonJS((exports, module) => {
  function _reduced(x) {
    return x && x["@@transducer/reduced"] ? x : {
      "@@transducer/value": x,
      "@@transducer/reduced": true
    };
  }
  module.exports = _reduced;
});

// node_modules/ramda/src/internal/_xfBase.js
var require_xfBase = __commonJS((exports, module) => {
  module.exports = {
    init: function() {
      return this.xf["@@transducer/init"]();
    },
    result: function(result) {
      return this.xf["@@transducer/result"](result);
    }
  };
});

// node_modules/ramda/src/internal/_xall.js
var require_xall = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _reduced = require_reduced();
  var _xfBase = require_xfBase();
  var XAll = /* @__PURE__ */ function() {
    function XAll2(f, xf) {
      this.xf = xf;
      this.f = f;
      this.all = true;
    }
    XAll2.prototype["@@transducer/init"] = _xfBase.init;
    XAll2.prototype["@@transducer/result"] = function(result) {
      if (this.all) {
        result = this.xf["@@transducer/step"](result, true);
      }
      return this.xf["@@transducer/result"](result);
    };
    XAll2.prototype["@@transducer/step"] = function(result, input) {
      if (!this.f(input)) {
        this.all = false;
        result = _reduced(this.xf["@@transducer/step"](result, false));
      }
      return result;
    };
    return XAll2;
  }();
  var _xall = /* @__PURE__ */ _curry2(function _xall2(f, xf) {
    return new XAll(f, xf);
  });
  module.exports = _xall;
});

// node_modules/ramda/src/all.js
var require_all = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xall = require_xall();
  var all = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["all"], _xall, function all2(fn, list) {
    var idx = 0;
    while (idx < list.length) {
      if (!fn(list[idx])) {
        return false;
      }
      idx += 1;
    }
    return true;
  }));
  module.exports = all;
});

// node_modules/ramda/src/max.js
var require_max = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var max = /* @__PURE__ */ _curry2(function max2(a, b) {
    return b > a ? b : a;
  });
  module.exports = max;
});

// node_modules/ramda/src/internal/_map.js
var require_map = __commonJS((exports, module) => {
  function _map(fn, functor) {
    var idx = 0;
    var len = functor.length;
    var result = Array(len);
    while (idx < len) {
      result[idx] = fn(functor[idx]);
      idx += 1;
    }
    return result;
  }
  module.exports = _map;
});

// node_modules/ramda/src/internal/_isString.js
var require_isString = __commonJS((exports, module) => {
  function _isString(x) {
    return Object.prototype.toString.call(x) === "[object String]";
  }
  module.exports = _isString;
});

// node_modules/ramda/src/internal/_isArrayLike.js
var require_isArrayLike = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var _isArray = require_isArray();
  var _isString = require_isString();
  var _isArrayLike = /* @__PURE__ */ _curry1(function isArrayLike(x) {
    if (_isArray(x)) {
      return true;
    }
    if (!x) {
      return false;
    }
    if (typeof x !== "object") {
      return false;
    }
    if (_isString(x)) {
      return false;
    }
    if (x.nodeType === 1) {
      return !!x.length;
    }
    if (x.length === 0) {
      return true;
    }
    if (x.length > 0) {
      return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
    }
    return false;
  });
  module.exports = _isArrayLike;
});

// node_modules/ramda/src/internal/_xwrap.js
var require_xwrap = __commonJS((exports, module) => {
  var XWrap = /* @__PURE__ */ function() {
    function XWrap2(fn) {
      this.f = fn;
    }
    XWrap2.prototype["@@transducer/init"] = function() {
      throw new Error("init not implemented on XWrap");
    };
    XWrap2.prototype["@@transducer/result"] = function(acc) {
      return acc;
    };
    XWrap2.prototype["@@transducer/step"] = function(acc, x) {
      return this.f(acc, x);
    };
    return XWrap2;
  }();
  function _xwrap(fn) {
    return new XWrap(fn);
  }
  module.exports = _xwrap;
});

// node_modules/ramda/src/bind.js
var require_bind = __commonJS((exports, module) => {
  var _arity = require_arity();
  var _curry2 = require_curry2();
  var bind = /* @__PURE__ */ _curry2(function bind2(fn, thisObj) {
    return _arity(fn.length, function() {
      return fn.apply(thisObj, arguments);
    });
  });
  module.exports = bind;
});

// node_modules/ramda/src/internal/_reduce.js
var require_reduce = __commonJS((exports, module) => {
  var _isArrayLike = require_isArrayLike();
  var _xwrap = require_xwrap();
  var bind = require_bind();
  function _arrayReduce(xf, acc, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      acc = xf["@@transducer/step"](acc, list[idx]);
      if (acc && acc["@@transducer/reduced"]) {
        acc = acc["@@transducer/value"];
        break;
      }
      idx += 1;
    }
    return xf["@@transducer/result"](acc);
  }
  function _iterableReduce(xf, acc, iter) {
    var step = iter.next();
    while (!step.done) {
      acc = xf["@@transducer/step"](acc, step.value);
      if (acc && acc["@@transducer/reduced"]) {
        acc = acc["@@transducer/value"];
        break;
      }
      step = iter.next();
    }
    return xf["@@transducer/result"](acc);
  }
  function _methodReduce(xf, acc, obj, methodName) {
    return xf["@@transducer/result"](obj[methodName](bind(xf["@@transducer/step"], xf), acc));
  }
  var symIterator = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
  function _reduce(fn, acc, list) {
    if (typeof fn === "function") {
      fn = _xwrap(fn);
    }
    if (_isArrayLike(list)) {
      return _arrayReduce(fn, acc, list);
    }
    if (typeof list["fantasy-land/reduce"] === "function") {
      return _methodReduce(fn, acc, list, "fantasy-land/reduce");
    }
    if (list[symIterator] != null) {
      return _iterableReduce(fn, acc, list[symIterator]());
    }
    if (typeof list.next === "function") {
      return _iterableReduce(fn, acc, list);
    }
    if (typeof list.reduce === "function") {
      return _methodReduce(fn, acc, list, "reduce");
    }
    throw new TypeError("reduce: list must be array or iterable");
  }
  module.exports = _reduce;
});

// node_modules/ramda/src/internal/_xmap.js
var require_xmap = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _xfBase = require_xfBase();
  var XMap = /* @__PURE__ */ function() {
    function XMap2(f, xf) {
      this.xf = xf;
      this.f = f;
    }
    XMap2.prototype["@@transducer/init"] = _xfBase.init;
    XMap2.prototype["@@transducer/result"] = _xfBase.result;
    XMap2.prototype["@@transducer/step"] = function(result, input) {
      return this.xf["@@transducer/step"](result, this.f(input));
    };
    return XMap2;
  }();
  var _xmap = /* @__PURE__ */ _curry2(function _xmap2(f, xf) {
    return new XMap(f, xf);
  });
  module.exports = _xmap;
});

// node_modules/ramda/src/internal/_has.js
var require_has = __commonJS((exports, module) => {
  function _has(prop, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  module.exports = _has;
});

// node_modules/ramda/src/internal/_isArguments.js
var require_isArguments = __commonJS((exports, module) => {
  var _has = require_has();
  var toString = Object.prototype.toString;
  var _isArguments = /* @__PURE__ */ function() {
    return toString.call(arguments) === "[object Arguments]" ? function _isArguments2(x) {
      return toString.call(x) === "[object Arguments]";
    } : function _isArguments2(x) {
      return _has("callee", x);
    };
  }();
  module.exports = _isArguments;
});

// node_modules/ramda/src/keys.js
var require_keys = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var _has = require_has();
  var _isArguments = require_isArguments();
  var hasEnumBug = !/* @__PURE__ */ {
    toString: null
  }.propertyIsEnumerable("toString");
  var nonEnumerableProps = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
  var hasArgsEnumBug = /* @__PURE__ */ function() {
    "use strict";
    return arguments.propertyIsEnumerable("length");
  }();
  var contains = function contains2(list, item) {
    var idx = 0;
    while (idx < list.length) {
      if (list[idx] === item) {
        return true;
      }
      idx += 1;
    }
    return false;
  };
  var keys = typeof Object.keys === "function" && !hasArgsEnumBug ? /* @__PURE__ */ _curry1(function keys2(obj) {
    return Object(obj) !== obj ? [] : Object.keys(obj);
  }) : /* @__PURE__ */ _curry1(function keys2(obj) {
    if (Object(obj) !== obj) {
      return [];
    }
    var prop, nIdx;
    var ks = [];
    var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
    for (prop in obj) {
      if (_has(prop, obj) && (!checkArgsLength || prop !== "length")) {
        ks[ks.length] = prop;
      }
    }
    if (hasEnumBug) {
      nIdx = nonEnumerableProps.length - 1;
      while (nIdx >= 0) {
        prop = nonEnumerableProps[nIdx];
        if (_has(prop, obj) && !contains(ks, prop)) {
          ks[ks.length] = prop;
        }
        nIdx -= 1;
      }
    }
    return ks;
  });
  module.exports = keys;
});

// node_modules/ramda/src/map.js
var require_map2 = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _map = require_map();
  var _reduce = require_reduce();
  var _xmap = require_xmap();
  var curryN = require_curryN2();
  var keys = require_keys();
  var map = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["fantasy-land/map", "map"], _xmap, function map2(fn, functor) {
    switch (Object.prototype.toString.call(functor)) {
      case "[object Function]":
        return curryN(functor.length, function() {
          return fn.call(this, functor.apply(this, arguments));
        });
      case "[object Object]":
        return _reduce(function(acc, key) {
          acc[key] = fn(functor[key]);
          return acc;
        }, {}, keys(functor));
      default:
        return _map(fn, functor);
    }
  }));
  module.exports = map;
});

// node_modules/ramda/src/internal/_isInteger.js
var require_isInteger = __commonJS((exports, module) => {
  module.exports = Number.isInteger || function _isInteger(n) {
    return n << 0 === n;
  };
});

// node_modules/ramda/src/nth.js
var require_nth = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _isString = require_isString();
  var nth = /* @__PURE__ */ _curry2(function nth2(offset, list) {
    var idx = offset < 0 ? list.length + offset : offset;
    return _isString(list) ? list.charAt(idx) : list[idx];
  });
  module.exports = nth;
});

// node_modules/ramda/src/paths.js
var require_paths = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _isInteger = require_isInteger();
  var nth = require_nth();
  var paths = /* @__PURE__ */ _curry2(function paths2(pathsArray, obj) {
    return pathsArray.map(function(paths3) {
      var val = obj;
      var idx = 0;
      var p;
      while (idx < paths3.length) {
        if (val == null) {
          return;
        }
        p = paths3[idx];
        val = _isInteger(p) ? nth(p, val) : val[p];
        idx += 1;
      }
      return val;
    });
  });
  module.exports = paths;
});

// node_modules/ramda/src/path.js
var require_path = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var paths = require_paths();
  var path = /* @__PURE__ */ _curry2(function path2(pathAr, obj) {
    return paths([pathAr], obj)[0];
  });
  module.exports = path;
});

// node_modules/ramda/src/prop.js
var require_prop = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var path = require_path();
  var prop = /* @__PURE__ */ _curry2(function prop2(p, obj) {
    return path([p], obj);
  });
  module.exports = prop;
});

// node_modules/ramda/src/pluck.js
var require_pluck = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var map = require_map2();
  var prop = require_prop();
  var pluck = /* @__PURE__ */ _curry2(function pluck2(p, list) {
    return map(prop(p), list);
  });
  module.exports = pluck;
});

// node_modules/ramda/src/reduce.js
var require_reduce2 = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var _reduce = require_reduce();
  var reduce = /* @__PURE__ */ _curry3(_reduce);
  module.exports = reduce;
});

// node_modules/ramda/src/allPass.js
var require_allPass = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var curryN = require_curryN2();
  var max = require_max();
  var pluck = require_pluck();
  var reduce = require_reduce2();
  var allPass = /* @__PURE__ */ _curry1(function allPass2(preds) {
    return curryN(reduce(max, 0, pluck("length", preds)), function() {
      var idx = 0;
      var len = preds.length;
      while (idx < len) {
        if (!preds[idx].apply(this, arguments)) {
          return false;
        }
        idx += 1;
      }
      return true;
    });
  });
  module.exports = allPass;
});

// node_modules/ramda/src/always.js
var require_always = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var always = /* @__PURE__ */ _curry1(function always2(val) {
    return function() {
      return val;
    };
  });
  module.exports = always;
});

// node_modules/ramda/src/and.js
var require_and = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var and = /* @__PURE__ */ _curry2(function and2(a, b) {
    return a && b;
  });
  module.exports = and;
});

// node_modules/ramda/src/internal/_xany.js
var require_xany = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _reduced = require_reduced();
  var _xfBase = require_xfBase();
  var XAny = /* @__PURE__ */ function() {
    function XAny2(f, xf) {
      this.xf = xf;
      this.f = f;
      this.any = false;
    }
    XAny2.prototype["@@transducer/init"] = _xfBase.init;
    XAny2.prototype["@@transducer/result"] = function(result) {
      if (!this.any) {
        result = this.xf["@@transducer/step"](result, false);
      }
      return this.xf["@@transducer/result"](result);
    };
    XAny2.prototype["@@transducer/step"] = function(result, input) {
      if (this.f(input)) {
        this.any = true;
        result = _reduced(this.xf["@@transducer/step"](result, true));
      }
      return result;
    };
    return XAny2;
  }();
  var _xany = /* @__PURE__ */ _curry2(function _xany2(f, xf) {
    return new XAny(f, xf);
  });
  module.exports = _xany;
});

// node_modules/ramda/src/any.js
var require_any = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xany = require_xany();
  var any = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["any"], _xany, function any2(fn, list) {
    var idx = 0;
    while (idx < list.length) {
      if (fn(list[idx])) {
        return true;
      }
      idx += 1;
    }
    return false;
  }));
  module.exports = any;
});

// node_modules/ramda/src/anyPass.js
var require_anyPass = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var curryN = require_curryN2();
  var max = require_max();
  var pluck = require_pluck();
  var reduce = require_reduce2();
  var anyPass = /* @__PURE__ */ _curry1(function anyPass2(preds) {
    return curryN(reduce(max, 0, pluck("length", preds)), function() {
      var idx = 0;
      var len = preds.length;
      while (idx < len) {
        if (preds[idx].apply(this, arguments)) {
          return true;
        }
        idx += 1;
      }
      return false;
    });
  });
  module.exports = anyPass;
});

// node_modules/ramda/src/ap.js
var require_ap = __commonJS((exports, module) => {
  var _concat = require_concat();
  var _curry2 = require_curry2();
  var _reduce = require_reduce();
  var map = require_map2();
  var ap = /* @__PURE__ */ _curry2(function ap2(applyF, applyX) {
    return typeof applyX["fantasy-land/ap"] === "function" ? applyX["fantasy-land/ap"](applyF) : typeof applyF.ap === "function" ? applyF.ap(applyX) : typeof applyF === "function" ? function(x) {
      return applyF(x)(applyX(x));
    } : _reduce(function(acc, f) {
      return _concat(acc, map(f, applyX));
    }, [], applyF);
  });
  module.exports = ap;
});

// node_modules/ramda/src/internal/_aperture.js
var require_aperture = __commonJS((exports, module) => {
  function _aperture(n, list) {
    var idx = 0;
    var limit = list.length - (n - 1);
    var acc = new Array(limit >= 0 ? limit : 0);
    while (idx < limit) {
      acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
      idx += 1;
    }
    return acc;
  }
  module.exports = _aperture;
});

// node_modules/ramda/src/internal/_xaperture.js
var require_xaperture = __commonJS((exports, module) => {
  var _concat = require_concat();
  var _curry2 = require_curry2();
  var _xfBase = require_xfBase();
  var XAperture = /* @__PURE__ */ function() {
    function XAperture2(n, xf) {
      this.xf = xf;
      this.pos = 0;
      this.full = false;
      this.acc = new Array(n);
    }
    XAperture2.prototype["@@transducer/init"] = _xfBase.init;
    XAperture2.prototype["@@transducer/result"] = function(result) {
      this.acc = null;
      return this.xf["@@transducer/result"](result);
    };
    XAperture2.prototype["@@transducer/step"] = function(result, input) {
      this.store(input);
      return this.full ? this.xf["@@transducer/step"](result, this.getCopy()) : result;
    };
    XAperture2.prototype.store = function(input) {
      this.acc[this.pos] = input;
      this.pos += 1;
      if (this.pos === this.acc.length) {
        this.pos = 0;
        this.full = true;
      }
    };
    XAperture2.prototype.getCopy = function() {
      return _concat(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
    };
    return XAperture2;
  }();
  var _xaperture = /* @__PURE__ */ _curry2(function _xaperture2(n, xf) {
    return new XAperture(n, xf);
  });
  module.exports = _xaperture;
});

// node_modules/ramda/src/aperture.js
var require_aperture2 = __commonJS((exports, module) => {
  var _aperture = require_aperture();
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xaperture = require_xaperture();
  var aperture = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xaperture, _aperture));
  module.exports = aperture;
});

// node_modules/ramda/src/append.js
var require_append = __commonJS((exports, module) => {
  var _concat = require_concat();
  var _curry2 = require_curry2();
  var append = /* @__PURE__ */ _curry2(function append2(el, list) {
    return _concat(list, [el]);
  });
  module.exports = append;
});

// node_modules/ramda/src/apply.js
var require_apply = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var apply = /* @__PURE__ */ _curry2(function apply2(fn, args) {
    return fn.apply(this, args);
  });
  module.exports = apply;
});

// node_modules/ramda/src/values.js
var require_values = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var keys = require_keys();
  var values = /* @__PURE__ */ _curry1(function values2(obj) {
    var props = keys(obj);
    var len = props.length;
    var vals = [];
    var idx = 0;
    while (idx < len) {
      vals[idx] = obj[props[idx]];
      idx += 1;
    }
    return vals;
  });
  module.exports = values;
});

// node_modules/ramda/src/applySpec.js
var require_applySpec = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var apply = require_apply();
  var curryN = require_curryN2();
  var max = require_max();
  var pluck = require_pluck();
  var reduce = require_reduce2();
  var keys = require_keys();
  var values = require_values();
  function mapValues(fn, obj) {
    return keys(obj).reduce(function(acc, key) {
      acc[key] = fn(obj[key]);
      return acc;
    }, {});
  }
  var applySpec = /* @__PURE__ */ _curry1(function applySpec2(spec) {
    spec = mapValues(function(v) {
      return typeof v == "function" ? v : applySpec2(v);
    }, spec);
    return curryN(reduce(max, 0, pluck("length", values(spec))), function() {
      var args = arguments;
      return mapValues(function(f) {
        return apply(f, args);
      }, spec);
    });
  });
  module.exports = applySpec;
});

// node_modules/ramda/src/applyTo.js
var require_applyTo = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var applyTo = /* @__PURE__ */ _curry2(function applyTo2(x, f) {
    return f(x);
  });
  module.exports = applyTo;
});

// node_modules/ramda/src/ascend.js
var require_ascend = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var ascend = /* @__PURE__ */ _curry3(function ascend2(fn, a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
  module.exports = ascend;
});

// node_modules/ramda/src/assoc.js
var require_assoc = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var assoc6 = /* @__PURE__ */ _curry3(function assoc7(prop, val, obj) {
    var result = {};
    for (var p in obj) {
      result[p] = obj[p];
    }
    result[prop] = val;
    return result;
  });
  module.exports = assoc6;
});

// node_modules/ramda/src/isNil.js
var require_isNil = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var isNil = /* @__PURE__ */ _curry1(function isNil2(x) {
    return x == null;
  });
  module.exports = isNil;
});

// node_modules/ramda/src/assocPath.js
var require_assocPath = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var _has = require_has();
  var _isArray = require_isArray();
  var _isInteger = require_isInteger();
  var assoc6 = require_assoc();
  var isNil = require_isNil();
  var assocPath = /* @__PURE__ */ _curry3(function assocPath2(path, val, obj) {
    if (path.length === 0) {
      return val;
    }
    var idx = path[0];
    if (path.length > 1) {
      var nextObj = !isNil(obj) && _has(idx, obj) ? obj[idx] : _isInteger(path[1]) ? [] : {};
      val = assocPath2(Array.prototype.slice.call(path, 1), val, nextObj);
    }
    if (_isInteger(idx) && _isArray(obj)) {
      var arr = [].concat(obj);
      arr[idx] = val;
      return arr;
    } else {
      return assoc6(idx, val, obj);
    }
  });
  module.exports = assocPath;
});

// node_modules/ramda/src/nAry.js
var require_nAry = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var nAry = /* @__PURE__ */ _curry2(function nAry2(n, fn) {
    switch (n) {
      case 0:
        return function() {
          return fn.call(this);
        };
      case 1:
        return function(a0) {
          return fn.call(this, a0);
        };
      case 2:
        return function(a0, a1) {
          return fn.call(this, a0, a1);
        };
      case 3:
        return function(a0, a1, a2) {
          return fn.call(this, a0, a1, a2);
        };
      case 4:
        return function(a0, a1, a2, a3) {
          return fn.call(this, a0, a1, a2, a3);
        };
      case 5:
        return function(a0, a1, a2, a3, a4) {
          return fn.call(this, a0, a1, a2, a3, a4);
        };
      case 6:
        return function(a0, a1, a2, a3, a4, a5) {
          return fn.call(this, a0, a1, a2, a3, a4, a5);
        };
      case 7:
        return function(a0, a1, a2, a3, a4, a5, a6) {
          return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
        };
      case 8:
        return function(a0, a1, a2, a3, a4, a5, a6, a7) {
          return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
        };
      case 9:
        return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
          return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
        };
      case 10:
        return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
        };
      default:
        throw new Error("First argument to nAry must be a non-negative integer no greater than ten");
    }
  });
  module.exports = nAry;
});

// node_modules/ramda/src/binary.js
var require_binary = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var nAry = require_nAry();
  var binary = /* @__PURE__ */ _curry1(function binary2(fn) {
    return nAry(2, fn);
  });
  module.exports = binary;
});

// node_modules/ramda/src/internal/_isFunction.js
var require_isFunction = __commonJS((exports, module) => {
  function _isFunction(x) {
    var type = Object.prototype.toString.call(x);
    return type === "[object Function]" || type === "[object AsyncFunction]" || type === "[object GeneratorFunction]" || type === "[object AsyncGeneratorFunction]";
  }
  module.exports = _isFunction;
});

// node_modules/ramda/src/liftN.js
var require_liftN = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _reduce = require_reduce();
  var ap = require_ap();
  var curryN = require_curryN2();
  var map = require_map2();
  var liftN = /* @__PURE__ */ _curry2(function liftN2(arity, fn) {
    var lifted = curryN(arity, fn);
    return curryN(arity, function() {
      return _reduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
    });
  });
  module.exports = liftN;
});

// node_modules/ramda/src/lift.js
var require_lift = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var liftN = require_liftN();
  var lift = /* @__PURE__ */ _curry1(function lift2(fn) {
    return liftN(fn.length, fn);
  });
  module.exports = lift;
});

// node_modules/ramda/src/both.js
var require_both = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _isFunction = require_isFunction();
  var and = require_and();
  var lift = require_lift();
  var both = /* @__PURE__ */ _curry2(function both2(f, g) {
    return _isFunction(f) ? function _both() {
      return f.apply(this, arguments) && g.apply(this, arguments);
    } : lift(and)(f, g);
  });
  module.exports = both;
});

// node_modules/ramda/src/curry.js
var require_curry = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var curryN = require_curryN2();
  var curry11 = /* @__PURE__ */ _curry1(function curry12(fn) {
    return curryN(fn.length, fn);
  });
  module.exports = curry11;
});

// node_modules/ramda/src/call.js
var require_call = __commonJS((exports, module) => {
  var curry11 = require_curry();
  var call = /* @__PURE__ */ curry11(function call2(fn) {
    return fn.apply(this, Array.prototype.slice.call(arguments, 1));
  });
  module.exports = call;
});

// node_modules/ramda/src/internal/_makeFlat.js
var require_makeFlat = __commonJS((exports, module) => {
  var _isArrayLike = require_isArrayLike();
  function _makeFlat(recursive) {
    return function flatt(list) {
      var value, jlen, j;
      var result = [];
      var idx = 0;
      var ilen = list.length;
      while (idx < ilen) {
        if (_isArrayLike(list[idx])) {
          value = recursive ? flatt(list[idx]) : list[idx];
          j = 0;
          jlen = value.length;
          while (j < jlen) {
            result[result.length] = value[j];
            j += 1;
          }
        } else {
          result[result.length] = list[idx];
        }
        idx += 1;
      }
      return result;
    };
  }
  module.exports = _makeFlat;
});

// node_modules/ramda/src/internal/_forceReduced.js
var require_forceReduced = __commonJS((exports, module) => {
  function _forceReduced(x) {
    return {
      "@@transducer/value": x,
      "@@transducer/reduced": true
    };
  }
  module.exports = _forceReduced;
});

// node_modules/ramda/src/internal/_flatCat.js
var require_flatCat = __commonJS((exports, module) => {
  var _forceReduced = require_forceReduced();
  var _isArrayLike = require_isArrayLike();
  var _reduce = require_reduce();
  var _xfBase = require_xfBase();
  var preservingReduced = function(xf) {
    return {
      "@@transducer/init": _xfBase.init,
      "@@transducer/result": function(result) {
        return xf["@@transducer/result"](result);
      },
      "@@transducer/step": function(result, input) {
        var ret = xf["@@transducer/step"](result, input);
        return ret["@@transducer/reduced"] ? _forceReduced(ret) : ret;
      }
    };
  };
  var _flatCat = function _xcat(xf) {
    var rxf = preservingReduced(xf);
    return {
      "@@transducer/init": _xfBase.init,
      "@@transducer/result": function(result) {
        return rxf["@@transducer/result"](result);
      },
      "@@transducer/step": function(result, input) {
        return !_isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
      }
    };
  };
  module.exports = _flatCat;
});

// node_modules/ramda/src/internal/_xchain.js
var require_xchain = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _flatCat = require_flatCat();
  var map = require_map2();
  var _xchain = /* @__PURE__ */ _curry2(function _xchain2(f, xf) {
    return map(f, _flatCat(xf));
  });
  module.exports = _xchain;
});

// node_modules/ramda/src/chain.js
var require_chain = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _makeFlat = require_makeFlat();
  var _xchain = require_xchain();
  var map = require_map2();
  var chain = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["fantasy-land/chain", "chain"], _xchain, function chain2(fn, monad) {
    if (typeof monad === "function") {
      return function(x) {
        return fn(monad(x))(x);
      };
    }
    return _makeFlat(false)(map(fn, monad));
  }));
  module.exports = chain;
});

// node_modules/ramda/src/clamp.js
var require_clamp = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var clamp = /* @__PURE__ */ _curry3(function clamp2(min, max, value) {
    if (min > max) {
      throw new Error("min must not be greater than max in clamp(min, max, value)");
    }
    return value < min ? min : value > max ? max : value;
  });
  module.exports = clamp;
});

// node_modules/ramda/src/internal/_cloneRegExp.js
var require_cloneRegExp = __commonJS((exports, module) => {
  function _cloneRegExp(pattern) {
    return new RegExp(pattern.source, (pattern.global ? "g" : "") + (pattern.ignoreCase ? "i" : "") + (pattern.multiline ? "m" : "") + (pattern.sticky ? "y" : "") + (pattern.unicode ? "u" : ""));
  }
  module.exports = _cloneRegExp;
});

// node_modules/ramda/src/type.js
var require_type = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var type = /* @__PURE__ */ _curry1(function type2(val) {
    return val === null ? "Null" : val === void 0 ? "Undefined" : Object.prototype.toString.call(val).slice(8, -1);
  });
  module.exports = type;
});

// node_modules/ramda/src/internal/_clone.js
var require_clone = __commonJS((exports, module) => {
  var _cloneRegExp = require_cloneRegExp();
  var type = require_type();
  function _clone(value, refFrom, refTo, deep) {
    var copy = function copy2(copiedValue) {
      var len = refFrom.length;
      var idx = 0;
      while (idx < len) {
        if (value === refFrom[idx]) {
          return refTo[idx];
        }
        idx += 1;
      }
      refFrom[idx + 1] = value;
      refTo[idx + 1] = copiedValue;
      for (var key in value) {
        copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
      }
      return copiedValue;
    };
    switch (type(value)) {
      case "Object":
        return copy({});
      case "Array":
        return copy([]);
      case "Date":
        return new Date(value.valueOf());
      case "RegExp":
        return _cloneRegExp(value);
      default:
        return value;
    }
  }
  module.exports = _clone;
});

// node_modules/ramda/src/clone.js
var require_clone2 = __commonJS((exports, module) => {
  var _clone = require_clone();
  var _curry1 = require_curry1();
  var clone = /* @__PURE__ */ _curry1(function clone2(value) {
    return value != null && typeof value.clone === "function" ? value.clone() : _clone(value, [], [], true);
  });
  module.exports = clone;
});

// node_modules/ramda/src/comparator.js
var require_comparator = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var comparator = /* @__PURE__ */ _curry1(function comparator2(pred) {
    return function(a, b) {
      return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
    };
  });
  module.exports = comparator;
});

// node_modules/ramda/src/not.js
var require_not = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var not = /* @__PURE__ */ _curry1(function not2(a) {
    return !a;
  });
  module.exports = not;
});

// node_modules/ramda/src/complement.js
var require_complement = __commonJS((exports, module) => {
  var lift = require_lift();
  var not = require_not();
  var complement = /* @__PURE__ */ lift(not);
  module.exports = complement;
});

// node_modules/ramda/src/internal/_pipe.js
var require_pipe = __commonJS((exports, module) => {
  function _pipe(f, g) {
    return function() {
      return g.call(this, f.apply(this, arguments));
    };
  }
  module.exports = _pipe;
});

// node_modules/ramda/src/internal/_checkForMethod.js
var require_checkForMethod = __commonJS((exports, module) => {
  var _isArray = require_isArray();
  function _checkForMethod(methodname, fn) {
    return function() {
      var length = arguments.length;
      if (length === 0) {
        return fn();
      }
      var obj = arguments[length - 1];
      return _isArray(obj) || typeof obj[methodname] !== "function" ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
    };
  }
  module.exports = _checkForMethod;
});

// node_modules/ramda/src/slice.js
var require_slice = __commonJS((exports, module) => {
  var _checkForMethod = require_checkForMethod();
  var _curry3 = require_curry3();
  var slice = /* @__PURE__ */ _curry3(/* @__PURE__ */ _checkForMethod("slice", function slice2(fromIndex, toIndex, list) {
    return Array.prototype.slice.call(list, fromIndex, toIndex);
  }));
  module.exports = slice;
});

// node_modules/ramda/src/tail.js
var require_tail = __commonJS((exports, module) => {
  var _checkForMethod = require_checkForMethod();
  var _curry1 = require_curry1();
  var slice = require_slice();
  var tail = /* @__PURE__ */ _curry1(/* @__PURE__ */ _checkForMethod("tail", /* @__PURE__ */ slice(1, Infinity)));
  module.exports = tail;
});

// node_modules/ramda/src/pipe.js
var require_pipe2 = __commonJS((exports, module) => {
  var _arity = require_arity();
  var _pipe = require_pipe();
  var reduce = require_reduce2();
  var tail = require_tail();
  function pipe() {
    if (arguments.length === 0) {
      throw new Error("pipe requires at least one argument");
    }
    return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
  }
  module.exports = pipe;
});

// node_modules/ramda/src/reverse.js
var require_reverse = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var _isString = require_isString();
  var reverse = /* @__PURE__ */ _curry1(function reverse2(list) {
    return _isString(list) ? list.split("").reverse().join("") : Array.prototype.slice.call(list, 0).reverse();
  });
  module.exports = reverse;
});

// node_modules/ramda/src/compose.js
var require_compose = __commonJS((exports, module) => {
  var pipe = require_pipe2();
  var reverse = require_reverse();
  function compose2() {
    if (arguments.length === 0) {
      throw new Error("compose requires at least one argument");
    }
    return pipe.apply(this, reverse(arguments));
  }
  module.exports = compose2;
});

// node_modules/ramda/src/composeK.js
var require_composeK = __commonJS((exports, module) => {
  var chain = require_chain();
  var compose2 = require_compose();
  var map = require_map2();
  function composeK() {
    if (arguments.length === 0) {
      throw new Error("composeK requires at least one argument");
    }
    var init = Array.prototype.slice.call(arguments);
    var last = init.pop();
    return compose2(compose2.apply(this, map(chain, init)), last);
  }
  module.exports = composeK;
});

// node_modules/ramda/src/internal/_pipeP.js
var require_pipeP = __commonJS((exports, module) => {
  function _pipeP(f, g) {
    return function() {
      var ctx = this;
      return f.apply(ctx, arguments).then(function(x) {
        return g.call(ctx, x);
      });
    };
  }
  module.exports = _pipeP;
});

// node_modules/ramda/src/pipeP.js
var require_pipeP2 = __commonJS((exports, module) => {
  var _arity = require_arity();
  var _pipeP = require_pipeP();
  var reduce = require_reduce2();
  var tail = require_tail();
  function pipeP() {
    if (arguments.length === 0) {
      throw new Error("pipeP requires at least one argument");
    }
    return _arity(arguments[0].length, reduce(_pipeP, arguments[0], tail(arguments)));
  }
  module.exports = pipeP;
});

// node_modules/ramda/src/composeP.js
var require_composeP = __commonJS((exports, module) => {
  var pipeP = require_pipeP2();
  var reverse = require_reverse();
  function composeP() {
    if (arguments.length === 0) {
      throw new Error("composeP requires at least one argument");
    }
    return pipeP.apply(this, reverse(arguments));
  }
  module.exports = composeP;
});

// node_modules/ramda/src/head.js
var require_head = __commonJS((exports, module) => {
  var nth = require_nth();
  var head = /* @__PURE__ */ nth(0);
  module.exports = head;
});

// node_modules/ramda/src/internal/_identity.js
var require_identity = __commonJS((exports, module) => {
  function _identity(x) {
    return x;
  }
  module.exports = _identity;
});

// node_modules/ramda/src/identity.js
var require_identity2 = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var _identity = require_identity();
  var identity2 = /* @__PURE__ */ _curry1(_identity);
  module.exports = identity2;
});

// node_modules/ramda/src/pipeWith.js
var require_pipeWith = __commonJS((exports, module) => {
  var _arity = require_arity();
  var _curry2 = require_curry2();
  var head = require_head();
  var _reduce = require_reduce();
  var tail = require_tail();
  var identity2 = require_identity2();
  var pipeWith = /* @__PURE__ */ _curry2(function pipeWith2(xf, list) {
    if (list.length <= 0) {
      return identity2;
    }
    var headList = head(list);
    var tailList = tail(list);
    return _arity(headList.length, function() {
      return _reduce(function(result, f) {
        return xf.call(this, f, result);
      }, headList.apply(this, arguments), tailList);
    });
  });
  module.exports = pipeWith;
});

// node_modules/ramda/src/composeWith.js
var require_composeWith = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var pipeWith = require_pipeWith();
  var reverse = require_reverse();
  var composeWith = /* @__PURE__ */ _curry2(function composeWith2(xf, list) {
    return pipeWith.apply(this, [xf, reverse(list)]);
  });
  module.exports = composeWith;
});

// node_modules/ramda/src/internal/_arrayFromIterator.js
var require_arrayFromIterator = __commonJS((exports, module) => {
  function _arrayFromIterator(iter) {
    var list = [];
    var next;
    while (!(next = iter.next()).done) {
      list.push(next.value);
    }
    return list;
  }
  module.exports = _arrayFromIterator;
});

// node_modules/ramda/src/internal/_includesWith.js
var require_includesWith = __commonJS((exports, module) => {
  function _includesWith(pred, x, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      if (pred(x, list[idx])) {
        return true;
      }
      idx += 1;
    }
    return false;
  }
  module.exports = _includesWith;
});

// node_modules/ramda/src/internal/_functionName.js
var require_functionName = __commonJS((exports, module) => {
  function _functionName(f) {
    var match = String(f).match(/^function (\w*)/);
    return match == null ? "" : match[1];
  }
  module.exports = _functionName;
});

// node_modules/ramda/src/internal/_objectIs.js
var require_objectIs = __commonJS((exports, module) => {
  function _objectIs(a, b) {
    if (a === b) {
      return a !== 0 || 1 / a === 1 / b;
    } else {
      return a !== a && b !== b;
    }
  }
  module.exports = typeof Object.is === "function" ? Object.is : _objectIs;
});

// node_modules/ramda/src/internal/_equals.js
var require_equals = __commonJS((exports, module) => {
  var _arrayFromIterator = require_arrayFromIterator();
  var _includesWith = require_includesWith();
  var _functionName = require_functionName();
  var _has = require_has();
  var _objectIs = require_objectIs();
  var keys = require_keys();
  var type = require_type();
  function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
    var a = _arrayFromIterator(aIterator);
    var b = _arrayFromIterator(bIterator);
    function eq(_a, _b) {
      return _equals(_a, _b, stackA.slice(), stackB.slice());
    }
    return !_includesWith(function(b2, aItem) {
      return !_includesWith(eq, aItem, b2);
    }, b, a);
  }
  function _equals(a, b, stackA, stackB) {
    if (_objectIs(a, b)) {
      return true;
    }
    var typeA = type(a);
    if (typeA !== type(b)) {
      return false;
    }
    if (a == null || b == null) {
      return false;
    }
    if (typeof a["fantasy-land/equals"] === "function" || typeof b["fantasy-land/equals"] === "function") {
      return typeof a["fantasy-land/equals"] === "function" && a["fantasy-land/equals"](b) && typeof b["fantasy-land/equals"] === "function" && b["fantasy-land/equals"](a);
    }
    if (typeof a.equals === "function" || typeof b.equals === "function") {
      return typeof a.equals === "function" && a.equals(b) && typeof b.equals === "function" && b.equals(a);
    }
    switch (typeA) {
      case "Arguments":
      case "Array":
      case "Object":
        if (typeof a.constructor === "function" && _functionName(a.constructor) === "Promise") {
          return a === b;
        }
        break;
      case "Boolean":
      case "Number":
      case "String":
        if (!(typeof a === typeof b && _objectIs(a.valueOf(), b.valueOf()))) {
          return false;
        }
        break;
      case "Date":
        if (!_objectIs(a.valueOf(), b.valueOf())) {
          return false;
        }
        break;
      case "Error":
        return a.name === b.name && a.message === b.message;
      case "RegExp":
        if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
          return false;
        }
        break;
    }
    var idx = stackA.length - 1;
    while (idx >= 0) {
      if (stackA[idx] === a) {
        return stackB[idx] === b;
      }
      idx -= 1;
    }
    switch (typeA) {
      case "Map":
        if (a.size !== b.size) {
          return false;
        }
        return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
      case "Set":
        if (a.size !== b.size) {
          return false;
        }
        return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
      case "Arguments":
      case "Array":
      case "Object":
      case "Boolean":
      case "Number":
      case "String":
      case "Date":
      case "Error":
      case "RegExp":
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "ArrayBuffer":
        break;
      default:
        return false;
    }
    var keysA = keys(a);
    if (keysA.length !== keys(b).length) {
      return false;
    }
    var extendedStackA = stackA.concat([a]);
    var extendedStackB = stackB.concat([b]);
    idx = keysA.length - 1;
    while (idx >= 0) {
      var key = keysA[idx];
      if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
        return false;
      }
      idx -= 1;
    }
    return true;
  }
  module.exports = _equals;
});

// node_modules/ramda/src/equals.js
var require_equals2 = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _equals = require_equals();
  var equals = /* @__PURE__ */ _curry2(function equals2(a, b) {
    return _equals(a, b, [], []);
  });
  module.exports = equals;
});

// node_modules/ramda/src/internal/_indexOf.js
var require_indexOf = __commonJS((exports, module) => {
  var equals = require_equals2();
  function _indexOf(list, a, idx) {
    var inf, item;
    if (typeof list.indexOf === "function") {
      switch (typeof a) {
        case "number":
          if (a === 0) {
            inf = 1 / a;
            while (idx < list.length) {
              item = list[idx];
              if (item === 0 && 1 / item === inf) {
                return idx;
              }
              idx += 1;
            }
            return -1;
          } else if (a !== a) {
            while (idx < list.length) {
              item = list[idx];
              if (typeof item === "number" && item !== item) {
                return idx;
              }
              idx += 1;
            }
            return -1;
          }
          return list.indexOf(a, idx);
        case "string":
        case "boolean":
        case "function":
        case "undefined":
          return list.indexOf(a, idx);
        case "object":
          if (a === null) {
            return list.indexOf(a, idx);
          }
      }
    }
    while (idx < list.length) {
      if (equals(list[idx], a)) {
        return idx;
      }
      idx += 1;
    }
    return -1;
  }
  module.exports = _indexOf;
});

// node_modules/ramda/src/internal/_includes.js
var require_includes = __commonJS((exports, module) => {
  var _indexOf = require_indexOf();
  function _includes(a, list) {
    return _indexOf(list, a, 0) >= 0;
  }
  module.exports = _includes;
});

// node_modules/ramda/src/internal/_quote.js
var require_quote = __commonJS((exports, module) => {
  function _quote(s) {
    var escaped = s.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
    return '"' + escaped.replace(/"/g, '\\"') + '"';
  }
  module.exports = _quote;
});

// node_modules/ramda/src/internal/_toISOString.js
var require_toISOString = __commonJS((exports, module) => {
  var pad = function pad2(n) {
    return (n < 10 ? "0" : "") + n;
  };
  var _toISOString = typeof Date.prototype.toISOString === "function" ? function _toISOString2(d) {
    return d.toISOString();
  } : function _toISOString2(d) {
    return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds()) + "." + (d.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
  };
  module.exports = _toISOString;
});

// node_modules/ramda/src/internal/_complement.js
var require_complement2 = __commonJS((exports, module) => {
  function _complement(f) {
    return function() {
      return !f.apply(this, arguments);
    };
  }
  module.exports = _complement;
});

// node_modules/ramda/src/internal/_filter.js
var require_filter = __commonJS((exports, module) => {
  function _filter(fn, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
    while (idx < len) {
      if (fn(list[idx])) {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  }
  module.exports = _filter;
});

// node_modules/ramda/src/internal/_isObject.js
var require_isObject = __commonJS((exports, module) => {
  function _isObject(x) {
    return Object.prototype.toString.call(x) === "[object Object]";
  }
  module.exports = _isObject;
});

// node_modules/ramda/src/internal/_xfilter.js
var require_xfilter = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _xfBase = require_xfBase();
  var XFilter = /* @__PURE__ */ function() {
    function XFilter2(f, xf) {
      this.xf = xf;
      this.f = f;
    }
    XFilter2.prototype["@@transducer/init"] = _xfBase.init;
    XFilter2.prototype["@@transducer/result"] = _xfBase.result;
    XFilter2.prototype["@@transducer/step"] = function(result, input) {
      return this.f(input) ? this.xf["@@transducer/step"](result, input) : result;
    };
    return XFilter2;
  }();
  var _xfilter = /* @__PURE__ */ _curry2(function _xfilter2(f, xf) {
    return new XFilter(f, xf);
  });
  module.exports = _xfilter;
});

// node_modules/ramda/src/filter.js
var require_filter2 = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _filter = require_filter();
  var _isObject = require_isObject();
  var _reduce = require_reduce();
  var _xfilter = require_xfilter();
  var keys = require_keys();
  var filter = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["filter"], _xfilter, function(pred, filterable) {
    return _isObject(filterable) ? _reduce(function(acc, key) {
      if (pred(filterable[key])) {
        acc[key] = filterable[key];
      }
      return acc;
    }, {}, keys(filterable)) : _filter(pred, filterable);
  }));
  module.exports = filter;
});

// node_modules/ramda/src/reject.js
var require_reject = __commonJS((exports, module) => {
  var _complement = require_complement2();
  var _curry2 = require_curry2();
  var filter = require_filter2();
  var reject = /* @__PURE__ */ _curry2(function reject2(pred, filterable) {
    return filter(_complement(pred), filterable);
  });
  module.exports = reject;
});

// node_modules/ramda/src/internal/_toString.js
var require_toString = __commonJS((exports, module) => {
  var _includes = require_includes();
  var _map = require_map();
  var _quote = require_quote();
  var _toISOString = require_toISOString();
  var keys = require_keys();
  var reject = require_reject();
  function _toString(x, seen) {
    var recur = function recur2(y) {
      var xs = seen.concat([x]);
      return _includes(y, xs) ? "<Circular>" : _toString(y, xs);
    };
    var mapPairs = function(obj, keys2) {
      return _map(function(k) {
        return _quote(k) + ": " + recur(obj[k]);
      }, keys2.slice().sort());
    };
    switch (Object.prototype.toString.call(x)) {
      case "[object Arguments]":
        return "(function() { return arguments; }(" + _map(recur, x).join(", ") + "))";
      case "[object Array]":
        return "[" + _map(recur, x).concat(mapPairs(x, reject(function(k) {
          return /^\d+$/.test(k);
        }, keys(x)))).join(", ") + "]";
      case "[object Boolean]":
        return typeof x === "object" ? "new Boolean(" + recur(x.valueOf()) + ")" : x.toString();
      case "[object Date]":
        return "new Date(" + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ")";
      case "[object Null]":
        return "null";
      case "[object Number]":
        return typeof x === "object" ? "new Number(" + recur(x.valueOf()) + ")" : 1 / x === -Infinity ? "-0" : x.toString(10);
      case "[object String]":
        return typeof x === "object" ? "new String(" + recur(x.valueOf()) + ")" : _quote(x);
      case "[object Undefined]":
        return "undefined";
      default:
        if (typeof x.toString === "function") {
          var repr = x.toString();
          if (repr !== "[object Object]") {
            return repr;
          }
        }
        return "{" + mapPairs(x, keys(x)).join(", ") + "}";
    }
  }
  module.exports = _toString;
});

// node_modules/ramda/src/toString.js
var require_toString2 = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var _toString = require_toString();
  var toString = /* @__PURE__ */ _curry1(function toString2(val) {
    return _toString(val, []);
  });
  module.exports = toString;
});

// node_modules/ramda/src/concat.js
var require_concat2 = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _isArray = require_isArray();
  var _isFunction = require_isFunction();
  var _isString = require_isString();
  var toString = require_toString2();
  var concat = /* @__PURE__ */ _curry2(function concat2(a, b) {
    if (_isArray(a)) {
      if (_isArray(b)) {
        return a.concat(b);
      }
      throw new TypeError(toString(b) + " is not an array");
    }
    if (_isString(a)) {
      if (_isString(b)) {
        return a + b;
      }
      throw new TypeError(toString(b) + " is not a string");
    }
    if (a != null && _isFunction(a["fantasy-land/concat"])) {
      return a["fantasy-land/concat"](b);
    }
    if (a != null && _isFunction(a.concat)) {
      return a.concat(b);
    }
    throw new TypeError(toString(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
  });
  module.exports = concat;
});

// node_modules/ramda/src/cond.js
var require_cond = __commonJS((exports, module) => {
  var _arity = require_arity();
  var _curry1 = require_curry1();
  var map = require_map2();
  var max = require_max();
  var reduce = require_reduce2();
  var cond = /* @__PURE__ */ _curry1(function cond2(pairs) {
    var arity = reduce(max, 0, map(function(pair) {
      return pair[0].length;
    }, pairs));
    return _arity(arity, function() {
      var idx = 0;
      while (idx < pairs.length) {
        if (pairs[idx][0].apply(this, arguments)) {
          return pairs[idx][1].apply(this, arguments);
        }
        idx += 1;
      }
    });
  });
  module.exports = cond;
});

// node_modules/ramda/src/constructN.js
var require_constructN = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var curry11 = require_curry();
  var nAry = require_nAry();
  var constructN = /* @__PURE__ */ _curry2(function constructN2(n, Fn) {
    if (n > 10) {
      throw new Error("Constructor with greater than ten arguments");
    }
    if (n === 0) {
      return function() {
        return new Fn();
      };
    }
    return curry11(nAry(n, function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
      switch (arguments.length) {
        case 1:
          return new Fn($0);
        case 2:
          return new Fn($0, $1);
        case 3:
          return new Fn($0, $1, $2);
        case 4:
          return new Fn($0, $1, $2, $3);
        case 5:
          return new Fn($0, $1, $2, $3, $4);
        case 6:
          return new Fn($0, $1, $2, $3, $4, $5);
        case 7:
          return new Fn($0, $1, $2, $3, $4, $5, $6);
        case 8:
          return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
        case 9:
          return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
        case 10:
          return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
      }
    }));
  });
  module.exports = constructN;
});

// node_modules/ramda/src/construct.js
var require_construct = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var constructN = require_constructN();
  var construct = /* @__PURE__ */ _curry1(function construct2(Fn) {
    return constructN(Fn.length, Fn);
  });
  module.exports = construct;
});

// node_modules/ramda/src/contains.js
var require_contains = __commonJS((exports, module) => {
  var _includes = require_includes();
  var _curry2 = require_curry2();
  var contains = /* @__PURE__ */ _curry2(_includes);
  module.exports = contains;
});

// node_modules/ramda/src/converge.js
var require_converge = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _map = require_map();
  var curryN = require_curryN2();
  var max = require_max();
  var pluck = require_pluck();
  var reduce = require_reduce2();
  var converge = /* @__PURE__ */ _curry2(function converge2(after, fns) {
    return curryN(reduce(max, 0, pluck("length", fns)), function() {
      var args = arguments;
      var context = this;
      return after.apply(context, _map(function(fn) {
        return fn.apply(context, args);
      }, fns));
    });
  });
  module.exports = converge;
});

// node_modules/ramda/src/internal/_xreduceBy.js
var require_xreduceBy = __commonJS((exports, module) => {
  var _curryN = require_curryN();
  var _has = require_has();
  var _xfBase = require_xfBase();
  var XReduceBy = /* @__PURE__ */ function() {
    function XReduceBy2(valueFn, valueAcc, keyFn, xf) {
      this.valueFn = valueFn;
      this.valueAcc = valueAcc;
      this.keyFn = keyFn;
      this.xf = xf;
      this.inputs = {};
    }
    XReduceBy2.prototype["@@transducer/init"] = _xfBase.init;
    XReduceBy2.prototype["@@transducer/result"] = function(result) {
      var key;
      for (key in this.inputs) {
        if (_has(key, this.inputs)) {
          result = this.xf["@@transducer/step"](result, this.inputs[key]);
          if (result["@@transducer/reduced"]) {
            result = result["@@transducer/value"];
            break;
          }
        }
      }
      this.inputs = null;
      return this.xf["@@transducer/result"](result);
    };
    XReduceBy2.prototype["@@transducer/step"] = function(result, input) {
      var key = this.keyFn(input);
      this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
      this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
      return result;
    };
    return XReduceBy2;
  }();
  var _xreduceBy = /* @__PURE__ */ _curryN(4, [], function _xreduceBy2(valueFn, valueAcc, keyFn, xf) {
    return new XReduceBy(valueFn, valueAcc, keyFn, xf);
  });
  module.exports = _xreduceBy;
});

// node_modules/ramda/src/reduceBy.js
var require_reduceBy = __commonJS((exports, module) => {
  var _clone = require_clone();
  var _curryN = require_curryN();
  var _dispatchable = require_dispatchable();
  var _has = require_has();
  var _reduce = require_reduce();
  var _xreduceBy = require_xreduceBy();
  var reduceBy = /* @__PURE__ */ _curryN(4, [], /* @__PURE__ */ _dispatchable([], _xreduceBy, function reduceBy2(valueFn, valueAcc, keyFn, list) {
    return _reduce(function(acc, elt) {
      var key = keyFn(elt);
      acc[key] = valueFn(_has(key, acc) ? acc[key] : _clone(valueAcc, [], [], false), elt);
      return acc;
    }, {}, list);
  }));
  module.exports = reduceBy;
});

// node_modules/ramda/src/countBy.js
var require_countBy = __commonJS((exports, module) => {
  var reduceBy = require_reduceBy();
  var countBy = /* @__PURE__ */ reduceBy(function(acc, elem) {
    return acc + 1;
  }, 0);
  module.exports = countBy;
});

// node_modules/ramda/src/dec.js
var require_dec = __commonJS((exports, module) => {
  var add2 = require_add();
  var dec = /* @__PURE__ */ add2(-1);
  module.exports = dec;
});

// node_modules/ramda/src/defaultTo.js
var require_defaultTo = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var defaultTo = /* @__PURE__ */ _curry2(function defaultTo2(d, v) {
    return v == null || v !== v ? d : v;
  });
  module.exports = defaultTo;
});

// node_modules/ramda/src/descend.js
var require_descend = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var descend = /* @__PURE__ */ _curry3(function descend2(fn, a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa > bb ? -1 : aa < bb ? 1 : 0;
  });
  module.exports = descend;
});

// node_modules/ramda/src/internal/_Set.js
var require_Set = __commonJS((exports, module) => {
  var _includes = require_includes();
  var _Set = /* @__PURE__ */ function() {
    function _Set2() {
      this._nativeSet = typeof Set === "function" ? new Set() : null;
      this._items = {};
    }
    _Set2.prototype.add = function(item) {
      return !hasOrAdd(item, true, this);
    };
    _Set2.prototype.has = function(item) {
      return hasOrAdd(item, false, this);
    };
    return _Set2;
  }();
  function hasOrAdd(item, shouldAdd, set2) {
    var type = typeof item;
    var prevSize, newSize;
    switch (type) {
      case "string":
      case "number":
        if (item === 0 && 1 / item === -Infinity) {
          if (set2._items["-0"]) {
            return true;
          } else {
            if (shouldAdd) {
              set2._items["-0"] = true;
            }
            return false;
          }
        }
        if (set2._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set2._nativeSet.size;
            set2._nativeSet.add(item);
            newSize = set2._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set2._nativeSet.has(item);
          }
        } else {
          if (!(type in set2._items)) {
            if (shouldAdd) {
              set2._items[type] = {};
              set2._items[type][item] = true;
            }
            return false;
          } else if (item in set2._items[type]) {
            return true;
          } else {
            if (shouldAdd) {
              set2._items[type][item] = true;
            }
            return false;
          }
        }
      case "boolean":
        if (type in set2._items) {
          var bIdx = item ? 1 : 0;
          if (set2._items[type][bIdx]) {
            return true;
          } else {
            if (shouldAdd) {
              set2._items[type][bIdx] = true;
            }
            return false;
          }
        } else {
          if (shouldAdd) {
            set2._items[type] = item ? [false, true] : [true, false];
          }
          return false;
        }
      case "function":
        if (set2._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set2._nativeSet.size;
            set2._nativeSet.add(item);
            newSize = set2._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set2._nativeSet.has(item);
          }
        } else {
          if (!(type in set2._items)) {
            if (shouldAdd) {
              set2._items[type] = [item];
            }
            return false;
          }
          if (!_includes(item, set2._items[type])) {
            if (shouldAdd) {
              set2._items[type].push(item);
            }
            return false;
          }
          return true;
        }
      case "undefined":
        if (set2._items[type]) {
          return true;
        } else {
          if (shouldAdd) {
            set2._items[type] = true;
          }
          return false;
        }
      case "object":
        if (item === null) {
          if (!set2._items["null"]) {
            if (shouldAdd) {
              set2._items["null"] = true;
            }
            return false;
          }
          return true;
        }
      default:
        type = Object.prototype.toString.call(item);
        if (!(type in set2._items)) {
          if (shouldAdd) {
            set2._items[type] = [item];
          }
          return false;
        }
        if (!_includes(item, set2._items[type])) {
          if (shouldAdd) {
            set2._items[type].push(item);
          }
          return false;
        }
        return true;
    }
  }
  module.exports = _Set;
});

// node_modules/ramda/src/difference.js
var require_difference = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _Set = require_Set();
  var difference = /* @__PURE__ */ _curry2(function difference2(first, second) {
    var out = [];
    var idx = 0;
    var firstLen = first.length;
    var secondLen = second.length;
    var toFilterOut = new _Set();
    for (var i = 0; i < secondLen; i += 1) {
      toFilterOut.add(second[i]);
    }
    while (idx < firstLen) {
      if (toFilterOut.add(first[idx])) {
        out[out.length] = first[idx];
      }
      idx += 1;
    }
    return out;
  });
  module.exports = difference;
});

// node_modules/ramda/src/differenceWith.js
var require_differenceWith = __commonJS((exports, module) => {
  var _includesWith = require_includesWith();
  var _curry3 = require_curry3();
  var differenceWith = /* @__PURE__ */ _curry3(function differenceWith2(pred, first, second) {
    var out = [];
    var idx = 0;
    var firstLen = first.length;
    while (idx < firstLen) {
      if (!_includesWith(pred, first[idx], second) && !_includesWith(pred, first[idx], out)) {
        out.push(first[idx]);
      }
      idx += 1;
    }
    return out;
  });
  module.exports = differenceWith;
});

// node_modules/ramda/src/dissoc.js
var require_dissoc = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var dissoc = /* @__PURE__ */ _curry2(function dissoc2(prop, obj) {
    var result = {};
    for (var p in obj) {
      result[p] = obj[p];
    }
    delete result[prop];
    return result;
  });
  module.exports = dissoc;
});

// node_modules/ramda/src/remove.js
var require_remove = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var remove = /* @__PURE__ */ _curry3(function remove2(start, count, list) {
    var result = Array.prototype.slice.call(list, 0);
    result.splice(start, count);
    return result;
  });
  module.exports = remove;
});

// node_modules/ramda/src/update.js
var require_update = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var adjust = require_adjust();
  var always = require_always();
  var update = /* @__PURE__ */ _curry3(function update2(idx, x, list) {
    return adjust(idx, always(x), list);
  });
  module.exports = update;
});

// node_modules/ramda/src/dissocPath.js
var require_dissocPath = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _isInteger = require_isInteger();
  var _isArray = require_isArray();
  var assoc6 = require_assoc();
  var dissoc = require_dissoc();
  var remove = require_remove();
  var update = require_update();
  var dissocPath = /* @__PURE__ */ _curry2(function dissocPath2(path, obj) {
    switch (path.length) {
      case 0:
        return obj;
      case 1:
        return _isInteger(path[0]) && _isArray(obj) ? remove(path[0], 1, obj) : dissoc(path[0], obj);
      default:
        var head = path[0];
        var tail = Array.prototype.slice.call(path, 1);
        if (obj[head] == null) {
          return obj;
        } else if (_isInteger(head) && _isArray(obj)) {
          return update(head, dissocPath2(tail, obj[head]), obj);
        } else {
          return assoc6(head, dissocPath2(tail, obj[head]), obj);
        }
    }
  });
  module.exports = dissocPath;
});

// node_modules/ramda/src/divide.js
var require_divide = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var divide = /* @__PURE__ */ _curry2(function divide2(a, b) {
    return a / b;
  });
  module.exports = divide;
});

// node_modules/ramda/src/internal/_xdrop.js
var require_xdrop = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _xfBase = require_xfBase();
  var XDrop = /* @__PURE__ */ function() {
    function XDrop2(n, xf) {
      this.xf = xf;
      this.n = n;
    }
    XDrop2.prototype["@@transducer/init"] = _xfBase.init;
    XDrop2.prototype["@@transducer/result"] = _xfBase.result;
    XDrop2.prototype["@@transducer/step"] = function(result, input) {
      if (this.n > 0) {
        this.n -= 1;
        return result;
      }
      return this.xf["@@transducer/step"](result, input);
    };
    return XDrop2;
  }();
  var _xdrop = /* @__PURE__ */ _curry2(function _xdrop2(n, xf) {
    return new XDrop(n, xf);
  });
  module.exports = _xdrop;
});

// node_modules/ramda/src/drop.js
var require_drop = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xdrop = require_xdrop();
  var slice = require_slice();
  var drop = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["drop"], _xdrop, function drop2(n, xs) {
    return slice(Math.max(0, n), Infinity, xs);
  }));
  module.exports = drop;
});

// node_modules/ramda/src/internal/_xtake.js
var require_xtake = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _reduced = require_reduced();
  var _xfBase = require_xfBase();
  var XTake = /* @__PURE__ */ function() {
    function XTake2(n, xf) {
      this.xf = xf;
      this.n = n;
      this.i = 0;
    }
    XTake2.prototype["@@transducer/init"] = _xfBase.init;
    XTake2.prototype["@@transducer/result"] = _xfBase.result;
    XTake2.prototype["@@transducer/step"] = function(result, input) {
      this.i += 1;
      var ret = this.n === 0 ? result : this.xf["@@transducer/step"](result, input);
      return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
    };
    return XTake2;
  }();
  var _xtake = /* @__PURE__ */ _curry2(function _xtake2(n, xf) {
    return new XTake(n, xf);
  });
  module.exports = _xtake;
});

// node_modules/ramda/src/take.js
var require_take = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xtake = require_xtake();
  var slice = require_slice();
  var take = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["take"], _xtake, function take2(n, xs) {
    return slice(0, n < 0 ? Infinity : n, xs);
  }));
  module.exports = take;
});

// node_modules/ramda/src/internal/_dropLast.js
var require_dropLast = __commonJS((exports, module) => {
  var take = require_take();
  function dropLast(n, xs) {
    return take(n < xs.length ? xs.length - n : 0, xs);
  }
  module.exports = dropLast;
});

// node_modules/ramda/src/internal/_xdropLast.js
var require_xdropLast = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _xfBase = require_xfBase();
  var XDropLast = /* @__PURE__ */ function() {
    function XDropLast2(n, xf) {
      this.xf = xf;
      this.pos = 0;
      this.full = false;
      this.acc = new Array(n);
    }
    XDropLast2.prototype["@@transducer/init"] = _xfBase.init;
    XDropLast2.prototype["@@transducer/result"] = function(result) {
      this.acc = null;
      return this.xf["@@transducer/result"](result);
    };
    XDropLast2.prototype["@@transducer/step"] = function(result, input) {
      if (this.full) {
        result = this.xf["@@transducer/step"](result, this.acc[this.pos]);
      }
      this.store(input);
      return result;
    };
    XDropLast2.prototype.store = function(input) {
      this.acc[this.pos] = input;
      this.pos += 1;
      if (this.pos === this.acc.length) {
        this.pos = 0;
        this.full = true;
      }
    };
    return XDropLast2;
  }();
  var _xdropLast = /* @__PURE__ */ _curry2(function _xdropLast2(n, xf) {
    return new XDropLast(n, xf);
  });
  module.exports = _xdropLast;
});

// node_modules/ramda/src/dropLast.js
var require_dropLast2 = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _dropLast = require_dropLast();
  var _xdropLast = require_xdropLast();
  var dropLast = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xdropLast, _dropLast));
  module.exports = dropLast;
});

// node_modules/ramda/src/internal/_dropLastWhile.js
var require_dropLastWhile = __commonJS((exports, module) => {
  var slice = require_slice();
  function dropLastWhile(pred, xs) {
    var idx = xs.length - 1;
    while (idx >= 0 && pred(xs[idx])) {
      idx -= 1;
    }
    return slice(0, idx + 1, xs);
  }
  module.exports = dropLastWhile;
});

// node_modules/ramda/src/internal/_xdropLastWhile.js
var require_xdropLastWhile = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _reduce = require_reduce();
  var _xfBase = require_xfBase();
  var XDropLastWhile = /* @__PURE__ */ function() {
    function XDropLastWhile2(fn, xf) {
      this.f = fn;
      this.retained = [];
      this.xf = xf;
    }
    XDropLastWhile2.prototype["@@transducer/init"] = _xfBase.init;
    XDropLastWhile2.prototype["@@transducer/result"] = function(result) {
      this.retained = null;
      return this.xf["@@transducer/result"](result);
    };
    XDropLastWhile2.prototype["@@transducer/step"] = function(result, input) {
      return this.f(input) ? this.retain(result, input) : this.flush(result, input);
    };
    XDropLastWhile2.prototype.flush = function(result, input) {
      result = _reduce(this.xf["@@transducer/step"], result, this.retained);
      this.retained = [];
      return this.xf["@@transducer/step"](result, input);
    };
    XDropLastWhile2.prototype.retain = function(result, input) {
      this.retained.push(input);
      return result;
    };
    return XDropLastWhile2;
  }();
  var _xdropLastWhile = /* @__PURE__ */ _curry2(function _xdropLastWhile2(fn, xf) {
    return new XDropLastWhile(fn, xf);
  });
  module.exports = _xdropLastWhile;
});

// node_modules/ramda/src/dropLastWhile.js
var require_dropLastWhile2 = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _dropLastWhile = require_dropLastWhile();
  var _xdropLastWhile = require_xdropLastWhile();
  var dropLastWhile = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xdropLastWhile, _dropLastWhile));
  module.exports = dropLastWhile;
});

// node_modules/ramda/src/internal/_xdropRepeatsWith.js
var require_xdropRepeatsWith = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _xfBase = require_xfBase();
  var XDropRepeatsWith = /* @__PURE__ */ function() {
    function XDropRepeatsWith2(pred, xf) {
      this.xf = xf;
      this.pred = pred;
      this.lastValue = void 0;
      this.seenFirstValue = false;
    }
    XDropRepeatsWith2.prototype["@@transducer/init"] = _xfBase.init;
    XDropRepeatsWith2.prototype["@@transducer/result"] = _xfBase.result;
    XDropRepeatsWith2.prototype["@@transducer/step"] = function(result, input) {
      var sameAsLast = false;
      if (!this.seenFirstValue) {
        this.seenFirstValue = true;
      } else if (this.pred(this.lastValue, input)) {
        sameAsLast = true;
      }
      this.lastValue = input;
      return sameAsLast ? result : this.xf["@@transducer/step"](result, input);
    };
    return XDropRepeatsWith2;
  }();
  var _xdropRepeatsWith = /* @__PURE__ */ _curry2(function _xdropRepeatsWith2(pred, xf) {
    return new XDropRepeatsWith(pred, xf);
  });
  module.exports = _xdropRepeatsWith;
});

// node_modules/ramda/src/last.js
var require_last = __commonJS((exports, module) => {
  var nth = require_nth();
  var last = /* @__PURE__ */ nth(-1);
  module.exports = last;
});

// node_modules/ramda/src/dropRepeatsWith.js
var require_dropRepeatsWith = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xdropRepeatsWith = require_xdropRepeatsWith();
  var last = require_last();
  var dropRepeatsWith = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xdropRepeatsWith, function dropRepeatsWith2(pred, list) {
    var result = [];
    var idx = 1;
    var len = list.length;
    if (len !== 0) {
      result[0] = list[0];
      while (idx < len) {
        if (!pred(last(result), list[idx])) {
          result[result.length] = list[idx];
        }
        idx += 1;
      }
    }
    return result;
  }));
  module.exports = dropRepeatsWith;
});

// node_modules/ramda/src/dropRepeats.js
var require_dropRepeats = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var _dispatchable = require_dispatchable();
  var _xdropRepeatsWith = require_xdropRepeatsWith();
  var dropRepeatsWith = require_dropRepeatsWith();
  var equals = require_equals2();
  var dropRepeats = /* @__PURE__ */ _curry1(/* @__PURE__ */ _dispatchable([], /* @__PURE__ */ _xdropRepeatsWith(equals), /* @__PURE__ */ dropRepeatsWith(equals)));
  module.exports = dropRepeats;
});

// node_modules/ramda/src/internal/_xdropWhile.js
var require_xdropWhile = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _xfBase = require_xfBase();
  var XDropWhile = /* @__PURE__ */ function() {
    function XDropWhile2(f, xf) {
      this.xf = xf;
      this.f = f;
    }
    XDropWhile2.prototype["@@transducer/init"] = _xfBase.init;
    XDropWhile2.prototype["@@transducer/result"] = _xfBase.result;
    XDropWhile2.prototype["@@transducer/step"] = function(result, input) {
      if (this.f) {
        if (this.f(input)) {
          return result;
        }
        this.f = null;
      }
      return this.xf["@@transducer/step"](result, input);
    };
    return XDropWhile2;
  }();
  var _xdropWhile = /* @__PURE__ */ _curry2(function _xdropWhile2(f, xf) {
    return new XDropWhile(f, xf);
  });
  module.exports = _xdropWhile;
});

// node_modules/ramda/src/dropWhile.js
var require_dropWhile = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xdropWhile = require_xdropWhile();
  var slice = require_slice();
  var dropWhile = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["dropWhile"], _xdropWhile, function dropWhile2(pred, xs) {
    var idx = 0;
    var len = xs.length;
    while (idx < len && pred(xs[idx])) {
      idx += 1;
    }
    return slice(idx, Infinity, xs);
  }));
  module.exports = dropWhile;
});

// node_modules/ramda/src/or.js
var require_or = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var or = /* @__PURE__ */ _curry2(function or2(a, b) {
    return a || b;
  });
  module.exports = or;
});

// node_modules/ramda/src/either.js
var require_either = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _isFunction = require_isFunction();
  var lift = require_lift();
  var or = require_or();
  var either = /* @__PURE__ */ _curry2(function either2(f, g) {
    return _isFunction(f) ? function _either() {
      return f.apply(this, arguments) || g.apply(this, arguments);
    } : lift(or)(f, g);
  });
  module.exports = either;
});

// node_modules/ramda/src/empty.js
var require_empty = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var _isArguments = require_isArguments();
  var _isArray = require_isArray();
  var _isObject = require_isObject();
  var _isString = require_isString();
  var empty = /* @__PURE__ */ _curry1(function empty2(x) {
    return x != null && typeof x["fantasy-land/empty"] === "function" ? x["fantasy-land/empty"]() : x != null && x.constructor != null && typeof x.constructor["fantasy-land/empty"] === "function" ? x.constructor["fantasy-land/empty"]() : x != null && typeof x.empty === "function" ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === "function" ? x.constructor.empty() : _isArray(x) ? [] : _isString(x) ? "" : _isObject(x) ? {} : _isArguments(x) ? function() {
      return arguments;
    }() : void 0;
  });
  module.exports = empty;
});

// node_modules/ramda/src/takeLast.js
var require_takeLast = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var drop = require_drop();
  var takeLast = /* @__PURE__ */ _curry2(function takeLast2(n, xs) {
    return drop(n >= 0 ? xs.length - n : 0, xs);
  });
  module.exports = takeLast;
});

// node_modules/ramda/src/endsWith.js
var require_endsWith = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var equals = require_equals2();
  var takeLast = require_takeLast();
  var endsWith = /* @__PURE__ */ _curry2(function(suffix, list) {
    return equals(takeLast(suffix.length, list), suffix);
  });
  module.exports = endsWith;
});

// node_modules/ramda/src/eqBy.js
var require_eqBy = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var equals = require_equals2();
  var eqBy = /* @__PURE__ */ _curry3(function eqBy2(f, x, y) {
    return equals(f(x), f(y));
  });
  module.exports = eqBy;
});

// node_modules/ramda/src/eqProps.js
var require_eqProps = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var equals = require_equals2();
  var eqProps = /* @__PURE__ */ _curry3(function eqProps2(prop, obj1, obj2) {
    return equals(obj1[prop], obj2[prop]);
  });
  module.exports = eqProps;
});

// node_modules/ramda/src/evolve.js
var require_evolve = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var evolve = /* @__PURE__ */ _curry2(function evolve2(transformations, object) {
    var result = object instanceof Array ? [] : {};
    var transformation, key, type;
    for (key in object) {
      transformation = transformations[key];
      type = typeof transformation;
      result[key] = type === "function" ? transformation(object[key]) : transformation && type === "object" ? evolve2(transformation, object[key]) : object[key];
    }
    return result;
  });
  module.exports = evolve;
});

// node_modules/ramda/src/internal/_xfind.js
var require_xfind = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _reduced = require_reduced();
  var _xfBase = require_xfBase();
  var XFind = /* @__PURE__ */ function() {
    function XFind2(f, xf) {
      this.xf = xf;
      this.f = f;
      this.found = false;
    }
    XFind2.prototype["@@transducer/init"] = _xfBase.init;
    XFind2.prototype["@@transducer/result"] = function(result) {
      if (!this.found) {
        result = this.xf["@@transducer/step"](result, void 0);
      }
      return this.xf["@@transducer/result"](result);
    };
    XFind2.prototype["@@transducer/step"] = function(result, input) {
      if (this.f(input)) {
        this.found = true;
        result = _reduced(this.xf["@@transducer/step"](result, input));
      }
      return result;
    };
    return XFind2;
  }();
  var _xfind = /* @__PURE__ */ _curry2(function _xfind2(f, xf) {
    return new XFind(f, xf);
  });
  module.exports = _xfind;
});

// node_modules/ramda/src/find.js
var require_find = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xfind = require_xfind();
  var find2 = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["find"], _xfind, function find3(fn, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      if (fn(list[idx])) {
        return list[idx];
      }
      idx += 1;
    }
  }));
  module.exports = find2;
});

// node_modules/ramda/src/internal/_xfindIndex.js
var require_xfindIndex = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _reduced = require_reduced();
  var _xfBase = require_xfBase();
  var XFindIndex = /* @__PURE__ */ function() {
    function XFindIndex2(f, xf) {
      this.xf = xf;
      this.f = f;
      this.idx = -1;
      this.found = false;
    }
    XFindIndex2.prototype["@@transducer/init"] = _xfBase.init;
    XFindIndex2.prototype["@@transducer/result"] = function(result) {
      if (!this.found) {
        result = this.xf["@@transducer/step"](result, -1);
      }
      return this.xf["@@transducer/result"](result);
    };
    XFindIndex2.prototype["@@transducer/step"] = function(result, input) {
      this.idx += 1;
      if (this.f(input)) {
        this.found = true;
        result = _reduced(this.xf["@@transducer/step"](result, this.idx));
      }
      return result;
    };
    return XFindIndex2;
  }();
  var _xfindIndex = /* @__PURE__ */ _curry2(function _xfindIndex2(f, xf) {
    return new XFindIndex(f, xf);
  });
  module.exports = _xfindIndex;
});

// node_modules/ramda/src/findIndex.js
var require_findIndex = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xfindIndex = require_xfindIndex();
  var findIndex = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xfindIndex, function findIndex2(fn, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      if (fn(list[idx])) {
        return idx;
      }
      idx += 1;
    }
    return -1;
  }));
  module.exports = findIndex;
});

// node_modules/ramda/src/internal/_xfindLast.js
var require_xfindLast = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _xfBase = require_xfBase();
  var XFindLast = /* @__PURE__ */ function() {
    function XFindLast2(f, xf) {
      this.xf = xf;
      this.f = f;
    }
    XFindLast2.prototype["@@transducer/init"] = _xfBase.init;
    XFindLast2.prototype["@@transducer/result"] = function(result) {
      return this.xf["@@transducer/result"](this.xf["@@transducer/step"](result, this.last));
    };
    XFindLast2.prototype["@@transducer/step"] = function(result, input) {
      if (this.f(input)) {
        this.last = input;
      }
      return result;
    };
    return XFindLast2;
  }();
  var _xfindLast = /* @__PURE__ */ _curry2(function _xfindLast2(f, xf) {
    return new XFindLast(f, xf);
  });
  module.exports = _xfindLast;
});

// node_modules/ramda/src/findLast.js
var require_findLast = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xfindLast = require_xfindLast();
  var findLast = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xfindLast, function findLast2(fn, list) {
    var idx = list.length - 1;
    while (idx >= 0) {
      if (fn(list[idx])) {
        return list[idx];
      }
      idx -= 1;
    }
  }));
  module.exports = findLast;
});

// node_modules/ramda/src/internal/_xfindLastIndex.js
var require_xfindLastIndex = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _xfBase = require_xfBase();
  var XFindLastIndex = /* @__PURE__ */ function() {
    function XFindLastIndex2(f, xf) {
      this.xf = xf;
      this.f = f;
      this.idx = -1;
      this.lastIdx = -1;
    }
    XFindLastIndex2.prototype["@@transducer/init"] = _xfBase.init;
    XFindLastIndex2.prototype["@@transducer/result"] = function(result) {
      return this.xf["@@transducer/result"](this.xf["@@transducer/step"](result, this.lastIdx));
    };
    XFindLastIndex2.prototype["@@transducer/step"] = function(result, input) {
      this.idx += 1;
      if (this.f(input)) {
        this.lastIdx = this.idx;
      }
      return result;
    };
    return XFindLastIndex2;
  }();
  var _xfindLastIndex = /* @__PURE__ */ _curry2(function _xfindLastIndex2(f, xf) {
    return new XFindLastIndex(f, xf);
  });
  module.exports = _xfindLastIndex;
});

// node_modules/ramda/src/findLastIndex.js
var require_findLastIndex = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xfindLastIndex = require_xfindLastIndex();
  var findLastIndex = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xfindLastIndex, function findLastIndex2(fn, list) {
    var idx = list.length - 1;
    while (idx >= 0) {
      if (fn(list[idx])) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  }));
  module.exports = findLastIndex;
});

// node_modules/ramda/src/flatten.js
var require_flatten = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var _makeFlat = require_makeFlat();
  var flatten = /* @__PURE__ */ _curry1(/* @__PURE__ */ _makeFlat(true));
  module.exports = flatten;
});

// node_modules/ramda/src/flip.js
var require_flip = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var curryN = require_curryN2();
  var flip = /* @__PURE__ */ _curry1(function flip2(fn) {
    return curryN(fn.length, function(a, b) {
      var args = Array.prototype.slice.call(arguments, 0);
      args[0] = b;
      args[1] = a;
      return fn.apply(this, args);
    });
  });
  module.exports = flip;
});

// node_modules/ramda/src/forEach.js
var require_forEach = __commonJS((exports, module) => {
  var _checkForMethod = require_checkForMethod();
  var _curry2 = require_curry2();
  var forEach = /* @__PURE__ */ _curry2(/* @__PURE__ */ _checkForMethod("forEach", function forEach2(fn, list) {
    var len = list.length;
    var idx = 0;
    while (idx < len) {
      fn(list[idx]);
      idx += 1;
    }
    return list;
  }));
  module.exports = forEach;
});

// node_modules/ramda/src/forEachObjIndexed.js
var require_forEachObjIndexed = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var keys = require_keys();
  var forEachObjIndexed = /* @__PURE__ */ _curry2(function forEachObjIndexed2(fn, obj) {
    var keyList = keys(obj);
    var idx = 0;
    while (idx < keyList.length) {
      var key = keyList[idx];
      fn(obj[key], key, obj);
      idx += 1;
    }
    return obj;
  });
  module.exports = forEachObjIndexed;
});

// node_modules/ramda/src/fromPairs.js
var require_fromPairs = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var fromPairs = /* @__PURE__ */ _curry1(function fromPairs2(pairs) {
    var result = {};
    var idx = 0;
    while (idx < pairs.length) {
      result[pairs[idx][0]] = pairs[idx][1];
      idx += 1;
    }
    return result;
  });
  module.exports = fromPairs;
});

// node_modules/ramda/src/groupBy.js
var require_groupBy = __commonJS((exports, module) => {
  var _checkForMethod = require_checkForMethod();
  var _curry2 = require_curry2();
  var reduceBy = require_reduceBy();
  var groupBy = /* @__PURE__ */ _curry2(/* @__PURE__ */ _checkForMethod("groupBy", /* @__PURE__ */ reduceBy(function(acc, item) {
    if (acc == null) {
      acc = [];
    }
    acc.push(item);
    return acc;
  }, null)));
  module.exports = groupBy;
});

// node_modules/ramda/src/groupWith.js
var require_groupWith = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var groupWith = /* @__PURE__ */ _curry2(function(fn, list) {
    var res = [];
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      var nextidx = idx + 1;
      while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
        nextidx += 1;
      }
      res.push(list.slice(idx, nextidx));
      idx = nextidx;
    }
    return res;
  });
  module.exports = groupWith;
});

// node_modules/ramda/src/gt.js
var require_gt = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var gt = /* @__PURE__ */ _curry2(function gt2(a, b) {
    return a > b;
  });
  module.exports = gt;
});

// node_modules/ramda/src/gte.js
var require_gte = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var gte = /* @__PURE__ */ _curry2(function gte2(a, b) {
    return a >= b;
  });
  module.exports = gte;
});

// node_modules/ramda/src/hasPath.js
var require_hasPath = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _has = require_has();
  var isNil = require_isNil();
  var hasPath = /* @__PURE__ */ _curry2(function hasPath2(_path, obj) {
    if (_path.length === 0 || isNil(obj)) {
      return false;
    }
    var val = obj;
    var idx = 0;
    while (idx < _path.length) {
      if (!isNil(val) && _has(_path[idx], val)) {
        val = val[_path[idx]];
        idx += 1;
      } else {
        return false;
      }
    }
    return true;
  });
  module.exports = hasPath;
});

// node_modules/ramda/src/has.js
var require_has2 = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var hasPath = require_hasPath();
  var has = /* @__PURE__ */ _curry2(function has2(prop, obj) {
    return hasPath([prop], obj);
  });
  module.exports = has;
});

// node_modules/ramda/src/hasIn.js
var require_hasIn = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var hasIn = /* @__PURE__ */ _curry2(function hasIn2(prop, obj) {
    return prop in obj;
  });
  module.exports = hasIn;
});

// node_modules/ramda/src/identical.js
var require_identical = __commonJS((exports, module) => {
  var _objectIs = require_objectIs();
  var _curry2 = require_curry2();
  var identical = /* @__PURE__ */ _curry2(_objectIs);
  module.exports = identical;
});

// node_modules/ramda/src/ifElse.js
var require_ifElse = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var curryN = require_curryN2();
  var ifElse2 = /* @__PURE__ */ _curry3(function ifElse3(condition, onTrue, onFalse) {
    return curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
      return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
    });
  });
  module.exports = ifElse2;
});

// node_modules/ramda/src/inc.js
var require_inc = __commonJS((exports, module) => {
  var add2 = require_add();
  var inc = /* @__PURE__ */ add2(1);
  module.exports = inc;
});

// node_modules/ramda/src/includes.js
var require_includes2 = __commonJS((exports, module) => {
  var _includes = require_includes();
  var _curry2 = require_curry2();
  var includes = /* @__PURE__ */ _curry2(_includes);
  module.exports = includes;
});

// node_modules/ramda/src/indexBy.js
var require_indexBy = __commonJS((exports, module) => {
  var reduceBy = require_reduceBy();
  var indexBy = /* @__PURE__ */ reduceBy(function(acc, elem) {
    return elem;
  }, null);
  module.exports = indexBy;
});

// node_modules/ramda/src/indexOf.js
var require_indexOf2 = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _indexOf = require_indexOf();
  var _isArray = require_isArray();
  var indexOf = /* @__PURE__ */ _curry2(function indexOf2(target, xs) {
    return typeof xs.indexOf === "function" && !_isArray(xs) ? xs.indexOf(target) : _indexOf(xs, target, 0);
  });
  module.exports = indexOf;
});

// node_modules/ramda/src/init.js
var require_init = __commonJS((exports, module) => {
  var slice = require_slice();
  var init = /* @__PURE__ */ slice(0, -1);
  module.exports = init;
});

// node_modules/ramda/src/innerJoin.js
var require_innerJoin = __commonJS((exports, module) => {
  var _includesWith = require_includesWith();
  var _curry3 = require_curry3();
  var _filter = require_filter();
  var innerJoin = /* @__PURE__ */ _curry3(function innerJoin2(pred, xs, ys) {
    return _filter(function(x) {
      return _includesWith(pred, x, ys);
    }, xs);
  });
  module.exports = innerJoin;
});

// node_modules/ramda/src/insert.js
var require_insert = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var insert = /* @__PURE__ */ _curry3(function insert2(idx, elt, list) {
    idx = idx < list.length && idx >= 0 ? idx : list.length;
    var result = Array.prototype.slice.call(list, 0);
    result.splice(idx, 0, elt);
    return result;
  });
  module.exports = insert;
});

// node_modules/ramda/src/insertAll.js
var require_insertAll = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var insertAll = /* @__PURE__ */ _curry3(function insertAll2(idx, elts, list) {
    idx = idx < list.length && idx >= 0 ? idx : list.length;
    return [].concat(Array.prototype.slice.call(list, 0, idx), elts, Array.prototype.slice.call(list, idx));
  });
  module.exports = insertAll;
});

// node_modules/ramda/src/uniqBy.js
var require_uniqBy = __commonJS((exports, module) => {
  var _Set = require_Set();
  var _curry2 = require_curry2();
  var uniqBy = /* @__PURE__ */ _curry2(function uniqBy2(fn, list) {
    var set2 = new _Set();
    var result = [];
    var idx = 0;
    var appliedItem, item;
    while (idx < list.length) {
      item = list[idx];
      appliedItem = fn(item);
      if (set2.add(appliedItem)) {
        result.push(item);
      }
      idx += 1;
    }
    return result;
  });
  module.exports = uniqBy;
});

// node_modules/ramda/src/uniq.js
var require_uniq = __commonJS((exports, module) => {
  var identity2 = require_identity2();
  var uniqBy = require_uniqBy();
  var uniq = /* @__PURE__ */ uniqBy(identity2);
  module.exports = uniq;
});

// node_modules/ramda/src/intersection.js
var require_intersection = __commonJS((exports, module) => {
  var _includes = require_includes();
  var _curry2 = require_curry2();
  var _filter = require_filter();
  var flip = require_flip();
  var uniq = require_uniq();
  var intersection = /* @__PURE__ */ _curry2(function intersection2(list1, list2) {
    var lookupList, filteredList;
    if (list1.length > list2.length) {
      lookupList = list1;
      filteredList = list2;
    } else {
      lookupList = list2;
      filteredList = list1;
    }
    return uniq(_filter(flip(_includes)(lookupList), filteredList));
  });
  module.exports = intersection;
});

// node_modules/ramda/src/intersperse.js
var require_intersperse = __commonJS((exports, module) => {
  var _checkForMethod = require_checkForMethod();
  var _curry2 = require_curry2();
  var intersperse = /* @__PURE__ */ _curry2(/* @__PURE__ */ _checkForMethod("intersperse", function intersperse2(separator, list) {
    var out = [];
    var idx = 0;
    var length = list.length;
    while (idx < length) {
      if (idx === length - 1) {
        out.push(list[idx]);
      } else {
        out.push(list[idx], separator);
      }
      idx += 1;
    }
    return out;
  }));
  module.exports = intersperse;
});

// node_modules/ramda/src/internal/_objectAssign.js
var require_objectAssign = __commonJS((exports, module) => {
  var _has = require_has();
  function _objectAssign(target) {
    if (target == null) {
      throw new TypeError("Cannot convert undefined or null to object");
    }
    var output = Object(target);
    var idx = 1;
    var length = arguments.length;
    while (idx < length) {
      var source = arguments[idx];
      if (source != null) {
        for (var nextKey in source) {
          if (_has(nextKey, source)) {
            output[nextKey] = source[nextKey];
          }
        }
      }
      idx += 1;
    }
    return output;
  }
  module.exports = typeof Object.assign === "function" ? Object.assign : _objectAssign;
});

// node_modules/ramda/src/objOf.js
var require_objOf = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var objOf = /* @__PURE__ */ _curry2(function objOf2(key, val) {
    var obj = {};
    obj[key] = val;
    return obj;
  });
  module.exports = objOf;
});

// node_modules/ramda/src/internal/_stepCat.js
var require_stepCat = __commonJS((exports, module) => {
  var _objectAssign = require_objectAssign();
  var _identity = require_identity();
  var _isArrayLike = require_isArrayLike();
  var _isTransformer = require_isTransformer();
  var objOf = require_objOf();
  var _stepCatArray = {
    "@@transducer/init": Array,
    "@@transducer/step": function(xs, x) {
      xs.push(x);
      return xs;
    },
    "@@transducer/result": _identity
  };
  var _stepCatString = {
    "@@transducer/init": String,
    "@@transducer/step": function(a, b) {
      return a + b;
    },
    "@@transducer/result": _identity
  };
  var _stepCatObject = {
    "@@transducer/init": Object,
    "@@transducer/step": function(result, input) {
      return _objectAssign(result, _isArrayLike(input) ? objOf(input[0], input[1]) : input);
    },
    "@@transducer/result": _identity
  };
  function _stepCat(obj) {
    if (_isTransformer(obj)) {
      return obj;
    }
    if (_isArrayLike(obj)) {
      return _stepCatArray;
    }
    if (typeof obj === "string") {
      return _stepCatString;
    }
    if (typeof obj === "object") {
      return _stepCatObject;
    }
    throw new Error("Cannot create transformer for " + obj);
  }
  module.exports = _stepCat;
});

// node_modules/ramda/src/into.js
var require_into = __commonJS((exports, module) => {
  var _clone = require_clone();
  var _curry3 = require_curry3();
  var _isTransformer = require_isTransformer();
  var _reduce = require_reduce();
  var _stepCat = require_stepCat();
  var into = /* @__PURE__ */ _curry3(function into2(acc, xf, list) {
    return _isTransformer(acc) ? _reduce(xf(acc), acc["@@transducer/init"](), list) : _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
  });
  module.exports = into;
});

// node_modules/ramda/src/invert.js
var require_invert = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var _has = require_has();
  var keys = require_keys();
  var invert = /* @__PURE__ */ _curry1(function invert2(obj) {
    var props = keys(obj);
    var len = props.length;
    var idx = 0;
    var out = {};
    while (idx < len) {
      var key = props[idx];
      var val = obj[key];
      var list = _has(val, out) ? out[val] : out[val] = [];
      list[list.length] = key;
      idx += 1;
    }
    return out;
  });
  module.exports = invert;
});

// node_modules/ramda/src/invertObj.js
var require_invertObj = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var keys = require_keys();
  var invertObj = /* @__PURE__ */ _curry1(function invertObj2(obj) {
    var props = keys(obj);
    var len = props.length;
    var idx = 0;
    var out = {};
    while (idx < len) {
      var key = props[idx];
      out[obj[key]] = key;
      idx += 1;
    }
    return out;
  });
  module.exports = invertObj;
});

// node_modules/ramda/src/invoker.js
var require_invoker = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _isFunction = require_isFunction();
  var curryN = require_curryN2();
  var toString = require_toString2();
  var invoker = /* @__PURE__ */ _curry2(function invoker2(arity, method) {
    return curryN(arity + 1, function() {
      var target = arguments[arity];
      if (target != null && _isFunction(target[method])) {
        return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
      }
      throw new TypeError(toString(target) + ' does not have a method named "' + method + '"');
    });
  });
  module.exports = invoker;
});

// node_modules/ramda/src/is.js
var require_is = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var is = /* @__PURE__ */ _curry2(function is2(Ctor, val) {
    return val != null && val.constructor === Ctor || val instanceof Ctor;
  });
  module.exports = is;
});

// node_modules/ramda/src/isEmpty.js
var require_isEmpty = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var empty = require_empty();
  var equals = require_equals2();
  var isEmpty = /* @__PURE__ */ _curry1(function isEmpty2(x) {
    return x != null && equals(x, empty(x));
  });
  module.exports = isEmpty;
});

// node_modules/ramda/src/join.js
var require_join = __commonJS((exports, module) => {
  var invoker = require_invoker();
  var join = /* @__PURE__ */ invoker(1, "join");
  module.exports = join;
});

// node_modules/ramda/src/juxt.js
var require_juxt = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var converge = require_converge();
  var juxt = /* @__PURE__ */ _curry1(function juxt2(fns) {
    return converge(function() {
      return Array.prototype.slice.call(arguments, 0);
    }, fns);
  });
  module.exports = juxt;
});

// node_modules/ramda/src/keysIn.js
var require_keysIn = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var keysIn = /* @__PURE__ */ _curry1(function keysIn2(obj) {
    var prop;
    var ks = [];
    for (prop in obj) {
      ks[ks.length] = prop;
    }
    return ks;
  });
  module.exports = keysIn;
});

// node_modules/ramda/src/lastIndexOf.js
var require_lastIndexOf = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _isArray = require_isArray();
  var equals = require_equals2();
  var lastIndexOf = /* @__PURE__ */ _curry2(function lastIndexOf2(target, xs) {
    if (typeof xs.lastIndexOf === "function" && !_isArray(xs)) {
      return xs.lastIndexOf(target);
    } else {
      var idx = xs.length - 1;
      while (idx >= 0) {
        if (equals(xs[idx], target)) {
          return idx;
        }
        idx -= 1;
      }
      return -1;
    }
  });
  module.exports = lastIndexOf;
});

// node_modules/ramda/src/internal/_isNumber.js
var require_isNumber = __commonJS((exports, module) => {
  function _isNumber(x) {
    return Object.prototype.toString.call(x) === "[object Number]";
  }
  module.exports = _isNumber;
});

// node_modules/ramda/src/length.js
var require_length = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var _isNumber = require_isNumber();
  var length = /* @__PURE__ */ _curry1(function length2(list) {
    return list != null && _isNumber(list.length) ? list.length : NaN;
  });
  module.exports = length;
});

// node_modules/ramda/src/lens.js
var require_lens = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var map = require_map2();
  var lens = /* @__PURE__ */ _curry2(function lens2(getter, setter) {
    return function(toFunctorFn) {
      return function(target) {
        return map(function(focus) {
          return setter(focus, target);
        }, toFunctorFn(getter(target)));
      };
    };
  });
  module.exports = lens;
});

// node_modules/ramda/src/lensIndex.js
var require_lensIndex = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var lens = require_lens();
  var nth = require_nth();
  var update = require_update();
  var lensIndex = /* @__PURE__ */ _curry1(function lensIndex2(n) {
    return lens(nth(n), update(n));
  });
  module.exports = lensIndex;
});

// node_modules/ramda/src/lensPath.js
var require_lensPath = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var assocPath = require_assocPath();
  var lens = require_lens();
  var path = require_path();
  var lensPath = /* @__PURE__ */ _curry1(function lensPath2(p) {
    return lens(path(p), assocPath(p));
  });
  module.exports = lensPath;
});

// node_modules/ramda/src/lensProp.js
var require_lensProp = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var assoc6 = require_assoc();
  var lens = require_lens();
  var prop = require_prop();
  var lensProp = /* @__PURE__ */ _curry1(function lensProp2(k) {
    return lens(prop(k), assoc6(k));
  });
  module.exports = lensProp;
});

// node_modules/ramda/src/lt.js
var require_lt = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var lt = /* @__PURE__ */ _curry2(function lt2(a, b) {
    return a < b;
  });
  module.exports = lt;
});

// node_modules/ramda/src/lte.js
var require_lte = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var lte = /* @__PURE__ */ _curry2(function lte2(a, b) {
    return a <= b;
  });
  module.exports = lte;
});

// node_modules/ramda/src/mapAccum.js
var require_mapAccum = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var mapAccum = /* @__PURE__ */ _curry3(function mapAccum2(fn, acc, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
    var tuple = [acc];
    while (idx < len) {
      tuple = fn(tuple[0], list[idx]);
      result[idx] = tuple[1];
      idx += 1;
    }
    return [tuple[0], result];
  });
  module.exports = mapAccum;
});

// node_modules/ramda/src/mapAccumRight.js
var require_mapAccumRight = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var mapAccumRight = /* @__PURE__ */ _curry3(function mapAccumRight2(fn, acc, list) {
    var idx = list.length - 1;
    var result = [];
    var tuple = [acc];
    while (idx >= 0) {
      tuple = fn(tuple[0], list[idx]);
      result[idx] = tuple[1];
      idx -= 1;
    }
    return [tuple[0], result];
  });
  module.exports = mapAccumRight;
});

// node_modules/ramda/src/mapObjIndexed.js
var require_mapObjIndexed = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _reduce = require_reduce();
  var keys = require_keys();
  var mapObjIndexed = /* @__PURE__ */ _curry2(function mapObjIndexed2(fn, obj) {
    return _reduce(function(acc, key) {
      acc[key] = fn(obj[key], key, obj);
      return acc;
    }, {}, keys(obj));
  });
  module.exports = mapObjIndexed;
});

// node_modules/ramda/src/match.js
var require_match = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var match = /* @__PURE__ */ _curry2(function match2(rx, str) {
    return str.match(rx) || [];
  });
  module.exports = match;
});

// node_modules/ramda/src/mathMod.js
var require_mathMod = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _isInteger = require_isInteger();
  var mathMod = /* @__PURE__ */ _curry2(function mathMod2(m, p) {
    if (!_isInteger(m)) {
      return NaN;
    }
    if (!_isInteger(p) || p < 1) {
      return NaN;
    }
    return (m % p + p) % p;
  });
  module.exports = mathMod;
});

// node_modules/ramda/src/maxBy.js
var require_maxBy = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var maxBy = /* @__PURE__ */ _curry3(function maxBy2(f, a, b) {
    return f(b) > f(a) ? b : a;
  });
  module.exports = maxBy;
});

// node_modules/ramda/src/sum.js
var require_sum = __commonJS((exports, module) => {
  var add2 = require_add();
  var reduce = require_reduce2();
  var sum = /* @__PURE__ */ reduce(add2, 0);
  module.exports = sum;
});

// node_modules/ramda/src/mean.js
var require_mean = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var sum = require_sum();
  var mean = /* @__PURE__ */ _curry1(function mean2(list) {
    return sum(list) / list.length;
  });
  module.exports = mean;
});

// node_modules/ramda/src/median.js
var require_median = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var mean = require_mean();
  var median = /* @__PURE__ */ _curry1(function median2(list) {
    var len = list.length;
    if (len === 0) {
      return NaN;
    }
    var width = 2 - len % 2;
    var idx = (len - width) / 2;
    return mean(Array.prototype.slice.call(list, 0).sort(function(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }).slice(idx, idx + width));
  });
  module.exports = median;
});

// node_modules/ramda/src/memoizeWith.js
var require_memoizeWith = __commonJS((exports, module) => {
  var _arity = require_arity();
  var _curry2 = require_curry2();
  var _has = require_has();
  var memoizeWith = /* @__PURE__ */ _curry2(function memoizeWith2(mFn, fn) {
    var cache2 = {};
    return _arity(fn.length, function() {
      var key = mFn.apply(this, arguments);
      if (!_has(key, cache2)) {
        cache2[key] = fn.apply(this, arguments);
      }
      return cache2[key];
    });
  });
  module.exports = memoizeWith;
});

// node_modules/ramda/src/merge.js
var require_merge = __commonJS((exports, module) => {
  var _objectAssign = require_objectAssign();
  var _curry2 = require_curry2();
  var merge = /* @__PURE__ */ _curry2(function merge2(l, r) {
    return _objectAssign({}, l, r);
  });
  module.exports = merge;
});

// node_modules/ramda/src/mergeAll.js
var require_mergeAll = __commonJS((exports, module) => {
  var _objectAssign = require_objectAssign();
  var _curry1 = require_curry1();
  var mergeAll = /* @__PURE__ */ _curry1(function mergeAll2(list) {
    return _objectAssign.apply(null, [{}].concat(list));
  });
  module.exports = mergeAll;
});

// node_modules/ramda/src/mergeWithKey.js
var require_mergeWithKey = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var _has = require_has();
  var mergeWithKey = /* @__PURE__ */ _curry3(function mergeWithKey2(fn, l, r) {
    var result = {};
    var k;
    for (k in l) {
      if (_has(k, l)) {
        result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
      }
    }
    for (k in r) {
      if (_has(k, r) && !_has(k, result)) {
        result[k] = r[k];
      }
    }
    return result;
  });
  module.exports = mergeWithKey;
});

// node_modules/ramda/src/mergeDeepWithKey.js
var require_mergeDeepWithKey = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var _isObject = require_isObject();
  var mergeWithKey = require_mergeWithKey();
  var mergeDeepWithKey = /* @__PURE__ */ _curry3(function mergeDeepWithKey2(fn, lObj, rObj) {
    return mergeWithKey(function(k, lVal, rVal) {
      if (_isObject(lVal) && _isObject(rVal)) {
        return mergeDeepWithKey2(fn, lVal, rVal);
      } else {
        return fn(k, lVal, rVal);
      }
    }, lObj, rObj);
  });
  module.exports = mergeDeepWithKey;
});

// node_modules/ramda/src/mergeDeepLeft.js
var require_mergeDeepLeft = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var mergeDeepWithKey = require_mergeDeepWithKey();
  var mergeDeepLeft = /* @__PURE__ */ _curry2(function mergeDeepLeft2(lObj, rObj) {
    return mergeDeepWithKey(function(k, lVal, rVal) {
      return lVal;
    }, lObj, rObj);
  });
  module.exports = mergeDeepLeft;
});

// node_modules/ramda/src/mergeDeepRight.js
var require_mergeDeepRight = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var mergeDeepWithKey = require_mergeDeepWithKey();
  var mergeDeepRight = /* @__PURE__ */ _curry2(function mergeDeepRight2(lObj, rObj) {
    return mergeDeepWithKey(function(k, lVal, rVal) {
      return rVal;
    }, lObj, rObj);
  });
  module.exports = mergeDeepRight;
});

// node_modules/ramda/src/mergeDeepWith.js
var require_mergeDeepWith = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var mergeDeepWithKey = require_mergeDeepWithKey();
  var mergeDeepWith = /* @__PURE__ */ _curry3(function mergeDeepWith2(fn, lObj, rObj) {
    return mergeDeepWithKey(function(k, lVal, rVal) {
      return fn(lVal, rVal);
    }, lObj, rObj);
  });
  module.exports = mergeDeepWith;
});

// node_modules/ramda/src/mergeLeft.js
var require_mergeLeft = __commonJS((exports, module) => {
  var _objectAssign = require_objectAssign();
  var _curry2 = require_curry2();
  var mergeLeft = /* @__PURE__ */ _curry2(function mergeLeft2(l, r) {
    return _objectAssign({}, r, l);
  });
  module.exports = mergeLeft;
});

// node_modules/ramda/src/mergeRight.js
var require_mergeRight = __commonJS((exports, module) => {
  var _objectAssign = require_objectAssign();
  var _curry2 = require_curry2();
  var mergeRight = /* @__PURE__ */ _curry2(function mergeRight2(l, r) {
    return _objectAssign({}, l, r);
  });
  module.exports = mergeRight;
});

// node_modules/ramda/src/mergeWith.js
var require_mergeWith = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var mergeWithKey = require_mergeWithKey();
  var mergeWith = /* @__PURE__ */ _curry3(function mergeWith2(fn, l, r) {
    return mergeWithKey(function(_, _l, _r) {
      return fn(_l, _r);
    }, l, r);
  });
  module.exports = mergeWith;
});

// node_modules/ramda/src/min.js
var require_min = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var min = /* @__PURE__ */ _curry2(function min2(a, b) {
    return b < a ? b : a;
  });
  module.exports = min;
});

// node_modules/ramda/src/minBy.js
var require_minBy = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var minBy = /* @__PURE__ */ _curry3(function minBy2(f, a, b) {
    return f(b) < f(a) ? b : a;
  });
  module.exports = minBy;
});

// node_modules/ramda/src/modulo.js
var require_modulo = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var modulo = /* @__PURE__ */ _curry2(function modulo2(a, b) {
    return a % b;
  });
  module.exports = modulo;
});

// node_modules/ramda/src/move.js
var require_move = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var move = /* @__PURE__ */ _curry3(function(from, to, list) {
    var length = list.length;
    var result = list.slice();
    var positiveFrom = from < 0 ? length + from : from;
    var positiveTo = to < 0 ? length + to : to;
    var item = result.splice(positiveFrom, 1);
    return positiveFrom < 0 || positiveFrom >= list.length || positiveTo < 0 || positiveTo >= list.length ? list : [].concat(result.slice(0, positiveTo)).concat(item).concat(result.slice(positiveTo, list.length));
  });
  module.exports = move;
});

// node_modules/ramda/src/multiply.js
var require_multiply = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var multiply = /* @__PURE__ */ _curry2(function multiply2(a, b) {
    return a * b;
  });
  module.exports = multiply;
});

// node_modules/ramda/src/negate.js
var require_negate = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var negate = /* @__PURE__ */ _curry1(function negate2(n) {
    return -n;
  });
  module.exports = negate;
});

// node_modules/ramda/src/none.js
var require_none = __commonJS((exports, module) => {
  var _complement = require_complement2();
  var _curry2 = require_curry2();
  var all = require_all();
  var none = /* @__PURE__ */ _curry2(function none2(fn, input) {
    return all(_complement(fn), input);
  });
  module.exports = none;
});

// node_modules/ramda/src/nthArg.js
var require_nthArg = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var curryN = require_curryN2();
  var nth = require_nth();
  var nthArg = /* @__PURE__ */ _curry1(function nthArg2(n) {
    var arity = n < 0 ? 1 : n + 1;
    return curryN(arity, function() {
      return nth(n, arguments);
    });
  });
  module.exports = nthArg;
});

// node_modules/ramda/src/o.js
var require_o = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var o = /* @__PURE__ */ _curry3(function o2(f, g, x) {
    return f(g(x));
  });
  module.exports = o;
});

// node_modules/ramda/src/internal/_of.js
var require_of = __commonJS((exports, module) => {
  function _of(x) {
    return [x];
  }
  module.exports = _of;
});

// node_modules/ramda/src/of.js
var require_of2 = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var _of = require_of();
  var of = /* @__PURE__ */ _curry1(_of);
  module.exports = of;
});

// node_modules/ramda/src/omit.js
var require_omit = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var omit = /* @__PURE__ */ _curry2(function omit2(names, obj) {
    var result = {};
    var index = {};
    var idx = 0;
    var len = names.length;
    while (idx < len) {
      index[names[idx]] = 1;
      idx += 1;
    }
    for (var prop in obj) {
      if (!index.hasOwnProperty(prop)) {
        result[prop] = obj[prop];
      }
    }
    return result;
  });
  module.exports = omit;
});

// node_modules/ramda/src/once.js
var require_once = __commonJS((exports, module) => {
  var _arity = require_arity();
  var _curry1 = require_curry1();
  var once = /* @__PURE__ */ _curry1(function once2(fn) {
    var called = false;
    var result;
    return _arity(fn.length, function() {
      if (called) {
        return result;
      }
      called = true;
      result = fn.apply(this, arguments);
      return result;
    });
  });
  module.exports = once;
});

// node_modules/ramda/src/internal/_assertPromise.js
var require_assertPromise = __commonJS((exports, module) => {
  var _isFunction = require_isFunction();
  var _toString = require_toString();
  function _assertPromise(name, p) {
    if (p == null || !_isFunction(p.then)) {
      throw new TypeError("`" + name + "` expected a Promise, received " + _toString(p, []));
    }
  }
  module.exports = _assertPromise;
});

// node_modules/ramda/src/otherwise.js
var require_otherwise = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _assertPromise = require_assertPromise();
  var otherwise = /* @__PURE__ */ _curry2(function otherwise2(f, p) {
    _assertPromise("otherwise", p);
    return p.then(null, f);
  });
  module.exports = otherwise;
});

// node_modules/ramda/src/over.js
var require_over = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var Identity = function(x) {
    return {
      value: x,
      map: function(f) {
        return Identity(f(x));
      }
    };
  };
  var over = /* @__PURE__ */ _curry3(function over2(lens, f, x) {
    return lens(function(y) {
      return Identity(f(y));
    })(x).value;
  });
  module.exports = over;
});

// node_modules/ramda/src/pair.js
var require_pair = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var pair = /* @__PURE__ */ _curry2(function pair2(fst, snd) {
    return [fst, snd];
  });
  module.exports = pair;
});

// node_modules/ramda/src/internal/_createPartialApplicator.js
var require_createPartialApplicator = __commonJS((exports, module) => {
  var _arity = require_arity();
  var _curry2 = require_curry2();
  function _createPartialApplicator(concat) {
    return _curry2(function(fn, args) {
      return _arity(Math.max(0, fn.length - args.length), function() {
        return fn.apply(this, concat(args, arguments));
      });
    });
  }
  module.exports = _createPartialApplicator;
});

// node_modules/ramda/src/partial.js
var require_partial = __commonJS((exports, module) => {
  var _concat = require_concat();
  var _createPartialApplicator = require_createPartialApplicator();
  var partial = /* @__PURE__ */ _createPartialApplicator(_concat);
  module.exports = partial;
});

// node_modules/ramda/src/partialRight.js
var require_partialRight = __commonJS((exports, module) => {
  var _concat = require_concat();
  var _createPartialApplicator = require_createPartialApplicator();
  var flip = require_flip();
  var partialRight = /* @__PURE__ */ _createPartialApplicator(/* @__PURE__ */ flip(_concat));
  module.exports = partialRight;
});

// node_modules/ramda/src/partition.js
var require_partition = __commonJS((exports, module) => {
  var filter = require_filter2();
  var juxt = require_juxt();
  var reject = require_reject();
  var partition = /* @__PURE__ */ juxt([filter, reject]);
  module.exports = partition;
});

// node_modules/ramda/src/pathEq.js
var require_pathEq = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var equals = require_equals2();
  var path = require_path();
  var pathEq = /* @__PURE__ */ _curry3(function pathEq2(_path, val, obj) {
    return equals(path(_path, obj), val);
  });
  module.exports = pathEq;
});

// node_modules/ramda/src/pathOr.js
var require_pathOr = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var defaultTo = require_defaultTo();
  var path = require_path();
  var pathOr = /* @__PURE__ */ _curry3(function pathOr2(d, p, obj) {
    return defaultTo(d, path(p, obj));
  });
  module.exports = pathOr;
});

// node_modules/ramda/src/pathSatisfies.js
var require_pathSatisfies = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var path = require_path();
  var pathSatisfies = /* @__PURE__ */ _curry3(function pathSatisfies2(pred, propPath, obj) {
    return pred(path(propPath, obj));
  });
  module.exports = pathSatisfies;
});

// node_modules/ramda/src/pick.js
var require_pick = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var pick = /* @__PURE__ */ _curry2(function pick2(names, obj) {
    var result = {};
    var idx = 0;
    while (idx < names.length) {
      if (names[idx] in obj) {
        result[names[idx]] = obj[names[idx]];
      }
      idx += 1;
    }
    return result;
  });
  module.exports = pick;
});

// node_modules/ramda/src/pickAll.js
var require_pickAll = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var pickAll = /* @__PURE__ */ _curry2(function pickAll2(names, obj) {
    var result = {};
    var idx = 0;
    var len = names.length;
    while (idx < len) {
      var name = names[idx];
      result[name] = obj[name];
      idx += 1;
    }
    return result;
  });
  module.exports = pickAll;
});

// node_modules/ramda/src/pickBy.js
var require_pickBy = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var pickBy = /* @__PURE__ */ _curry2(function pickBy2(test, obj) {
    var result = {};
    for (var prop in obj) {
      if (test(obj[prop], prop, obj)) {
        result[prop] = obj[prop];
      }
    }
    return result;
  });
  module.exports = pickBy;
});

// node_modules/ramda/src/pipeK.js
var require_pipeK = __commonJS((exports, module) => {
  var composeK = require_composeK();
  var reverse = require_reverse();
  function pipeK() {
    if (arguments.length === 0) {
      throw new Error("pipeK requires at least one argument");
    }
    return composeK.apply(this, reverse(arguments));
  }
  module.exports = pipeK;
});

// node_modules/ramda/src/prepend.js
var require_prepend = __commonJS((exports, module) => {
  var _concat = require_concat();
  var _curry2 = require_curry2();
  var prepend = /* @__PURE__ */ _curry2(function prepend2(el, list) {
    return _concat([el], list);
  });
  module.exports = prepend;
});

// node_modules/ramda/src/product.js
var require_product = __commonJS((exports, module) => {
  var multiply = require_multiply();
  var reduce = require_reduce2();
  var product = /* @__PURE__ */ reduce(multiply, 1);
  module.exports = product;
});

// node_modules/ramda/src/useWith.js
var require_useWith = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var curryN = require_curryN2();
  var useWith = /* @__PURE__ */ _curry2(function useWith2(fn, transformers) {
    return curryN(transformers.length, function() {
      var args = [];
      var idx = 0;
      while (idx < transformers.length) {
        args.push(transformers[idx].call(this, arguments[idx]));
        idx += 1;
      }
      return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
    });
  });
  module.exports = useWith;
});

// node_modules/ramda/src/project.js
var require_project = __commonJS((exports, module) => {
  var _map = require_map();
  var identity2 = require_identity2();
  var pickAll = require_pickAll();
  var useWith = require_useWith();
  var project = /* @__PURE__ */ useWith(_map, [pickAll, identity2]);
  module.exports = project;
});

// node_modules/ramda/src/propEq.js
var require_propEq = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var equals = require_equals2();
  var propEq = /* @__PURE__ */ _curry3(function propEq2(name, val, obj) {
    return equals(val, obj[name]);
  });
  module.exports = propEq;
});

// node_modules/ramda/src/propIs.js
var require_propIs = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var is = require_is();
  var propIs = /* @__PURE__ */ _curry3(function propIs2(type, name, obj) {
    return is(type, obj[name]);
  });
  module.exports = propIs;
});

// node_modules/ramda/src/propOr.js
var require_propOr = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var pathOr = require_pathOr();
  var propOr = /* @__PURE__ */ _curry3(function propOr2(val, p, obj) {
    return pathOr(val, [p], obj);
  });
  module.exports = propOr;
});

// node_modules/ramda/src/propSatisfies.js
var require_propSatisfies = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var propSatisfies = /* @__PURE__ */ _curry3(function propSatisfies2(pred, name, obj) {
    return pred(obj[name]);
  });
  module.exports = propSatisfies;
});

// node_modules/ramda/src/props.js
var require_props = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var path = require_path();
  var props = /* @__PURE__ */ _curry2(function props2(ps, obj) {
    return ps.map(function(p) {
      return path([p], obj);
    });
  });
  module.exports = props;
});

// node_modules/ramda/src/range.js
var require_range = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _isNumber = require_isNumber();
  var range = /* @__PURE__ */ _curry2(function range2(from, to) {
    if (!(_isNumber(from) && _isNumber(to))) {
      throw new TypeError("Both arguments to range must be numbers");
    }
    var result = [];
    var n = from;
    while (n < to) {
      result.push(n);
      n += 1;
    }
    return result;
  });
  module.exports = range;
});

// node_modules/ramda/src/reduceRight.js
var require_reduceRight = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var reduceRight = /* @__PURE__ */ _curry3(function reduceRight2(fn, acc, list) {
    var idx = list.length - 1;
    while (idx >= 0) {
      acc = fn(list[idx], acc);
      idx -= 1;
    }
    return acc;
  });
  module.exports = reduceRight;
});

// node_modules/ramda/src/reduceWhile.js
var require_reduceWhile = __commonJS((exports, module) => {
  var _curryN = require_curryN();
  var _reduce = require_reduce();
  var _reduced = require_reduced();
  var reduceWhile = /* @__PURE__ */ _curryN(4, [], function _reduceWhile(pred, fn, a, list) {
    return _reduce(function(acc, x) {
      return pred(acc, x) ? fn(acc, x) : _reduced(acc);
    }, a, list);
  });
  module.exports = reduceWhile;
});

// node_modules/ramda/src/reduced.js
var require_reduced2 = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var _reduced = require_reduced();
  var reduced = /* @__PURE__ */ _curry1(_reduced);
  module.exports = reduced;
});

// node_modules/ramda/src/times.js
var require_times = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var times = /* @__PURE__ */ _curry2(function times2(fn, n) {
    var len = Number(n);
    var idx = 0;
    var list;
    if (len < 0 || isNaN(len)) {
      throw new RangeError("n must be a non-negative number");
    }
    list = new Array(len);
    while (idx < len) {
      list[idx] = fn(idx);
      idx += 1;
    }
    return list;
  });
  module.exports = times;
});

// node_modules/ramda/src/repeat.js
var require_repeat = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var always = require_always();
  var times = require_times();
  var repeat = /* @__PURE__ */ _curry2(function repeat2(value, n) {
    return times(always(value), n);
  });
  module.exports = repeat;
});

// node_modules/ramda/src/replace.js
var require_replace = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var replace = /* @__PURE__ */ _curry3(function replace2(regex, replacement, str) {
    return str.replace(regex, replacement);
  });
  module.exports = replace;
});

// node_modules/ramda/src/scan.js
var require_scan = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var scan = /* @__PURE__ */ _curry3(function scan2(fn, acc, list) {
    var idx = 0;
    var len = list.length;
    var result = [acc];
    while (idx < len) {
      acc = fn(acc, list[idx]);
      result[idx + 1] = acc;
      idx += 1;
    }
    return result;
  });
  module.exports = scan;
});

// node_modules/ramda/src/sequence.js
var require_sequence = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var ap = require_ap();
  var map = require_map2();
  var prepend = require_prepend();
  var reduceRight = require_reduceRight();
  var sequence = /* @__PURE__ */ _curry2(function sequence2(of, traversable) {
    return typeof traversable.sequence === "function" ? traversable.sequence(of) : reduceRight(function(x, acc) {
      return ap(map(prepend, x), acc);
    }, of([]), traversable);
  });
  module.exports = sequence;
});

// node_modules/ramda/src/set.js
var require_set = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var always = require_always();
  var over = require_over();
  var set2 = /* @__PURE__ */ _curry3(function set3(lens, v, x) {
    return over(lens, always(v), x);
  });
  module.exports = set2;
});

// node_modules/ramda/src/sort.js
var require_sort = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var sort = /* @__PURE__ */ _curry2(function sort2(comparator, list) {
    return Array.prototype.slice.call(list, 0).sort(comparator);
  });
  module.exports = sort;
});

// node_modules/ramda/src/sortBy.js
var require_sortBy = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var sortBy = /* @__PURE__ */ _curry2(function sortBy2(fn, list) {
    return Array.prototype.slice.call(list, 0).sort(function(a, b) {
      var aa = fn(a);
      var bb = fn(b);
      return aa < bb ? -1 : aa > bb ? 1 : 0;
    });
  });
  module.exports = sortBy;
});

// node_modules/ramda/src/sortWith.js
var require_sortWith = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var sortWith = /* @__PURE__ */ _curry2(function sortWith2(fns, list) {
    return Array.prototype.slice.call(list, 0).sort(function(a, b) {
      var result = 0;
      var i = 0;
      while (result === 0 && i < fns.length) {
        result = fns[i](a, b);
        i += 1;
      }
      return result;
    });
  });
  module.exports = sortWith;
});

// node_modules/ramda/src/split.js
var require_split = __commonJS((exports, module) => {
  var invoker = require_invoker();
  var split = /* @__PURE__ */ invoker(1, "split");
  module.exports = split;
});

// node_modules/ramda/src/splitAt.js
var require_splitAt = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var length = require_length();
  var slice = require_slice();
  var splitAt = /* @__PURE__ */ _curry2(function splitAt2(index, array) {
    return [slice(0, index, array), slice(index, length(array), array)];
  });
  module.exports = splitAt;
});

// node_modules/ramda/src/splitEvery.js
var require_splitEvery = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var slice = require_slice();
  var splitEvery = /* @__PURE__ */ _curry2(function splitEvery2(n, list) {
    if (n <= 0) {
      throw new Error("First argument to splitEvery must be a positive integer");
    }
    var result = [];
    var idx = 0;
    while (idx < list.length) {
      result.push(slice(idx, idx += n, list));
    }
    return result;
  });
  module.exports = splitEvery;
});

// node_modules/ramda/src/splitWhen.js
var require_splitWhen = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var splitWhen = /* @__PURE__ */ _curry2(function splitWhen2(pred, list) {
    var idx = 0;
    var len = list.length;
    var prefix = [];
    while (idx < len && !pred(list[idx])) {
      prefix.push(list[idx]);
      idx += 1;
    }
    return [prefix, Array.prototype.slice.call(list, idx)];
  });
  module.exports = splitWhen;
});

// node_modules/ramda/src/startsWith.js
var require_startsWith = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var equals = require_equals2();
  var take = require_take();
  var startsWith = /* @__PURE__ */ _curry2(function(prefix, list) {
    return equals(take(prefix.length, list), prefix);
  });
  module.exports = startsWith;
});

// node_modules/ramda/src/subtract.js
var require_subtract = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var subtract = /* @__PURE__ */ _curry2(function subtract2(a, b) {
    return Number(a) - Number(b);
  });
  module.exports = subtract;
});

// node_modules/ramda/src/symmetricDifference.js
var require_symmetricDifference = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var concat = require_concat2();
  var difference = require_difference();
  var symmetricDifference = /* @__PURE__ */ _curry2(function symmetricDifference2(list1, list2) {
    return concat(difference(list1, list2), difference(list2, list1));
  });
  module.exports = symmetricDifference;
});

// node_modules/ramda/src/symmetricDifferenceWith.js
var require_symmetricDifferenceWith = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var concat = require_concat2();
  var differenceWith = require_differenceWith();
  var symmetricDifferenceWith = /* @__PURE__ */ _curry3(function symmetricDifferenceWith2(pred, list1, list2) {
    return concat(differenceWith(pred, list1, list2), differenceWith(pred, list2, list1));
  });
  module.exports = symmetricDifferenceWith;
});

// node_modules/ramda/src/takeLastWhile.js
var require_takeLastWhile = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var slice = require_slice();
  var takeLastWhile = /* @__PURE__ */ _curry2(function takeLastWhile2(fn, xs) {
    var idx = xs.length - 1;
    while (idx >= 0 && fn(xs[idx])) {
      idx -= 1;
    }
    return slice(idx + 1, Infinity, xs);
  });
  module.exports = takeLastWhile;
});

// node_modules/ramda/src/internal/_xtakeWhile.js
var require_xtakeWhile = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _reduced = require_reduced();
  var _xfBase = require_xfBase();
  var XTakeWhile = /* @__PURE__ */ function() {
    function XTakeWhile2(f, xf) {
      this.xf = xf;
      this.f = f;
    }
    XTakeWhile2.prototype["@@transducer/init"] = _xfBase.init;
    XTakeWhile2.prototype["@@transducer/result"] = _xfBase.result;
    XTakeWhile2.prototype["@@transducer/step"] = function(result, input) {
      return this.f(input) ? this.xf["@@transducer/step"](result, input) : _reduced(result);
    };
    return XTakeWhile2;
  }();
  var _xtakeWhile = /* @__PURE__ */ _curry2(function _xtakeWhile2(f, xf) {
    return new XTakeWhile(f, xf);
  });
  module.exports = _xtakeWhile;
});

// node_modules/ramda/src/takeWhile.js
var require_takeWhile = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xtakeWhile = require_xtakeWhile();
  var slice = require_slice();
  var takeWhile = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable(["takeWhile"], _xtakeWhile, function takeWhile2(fn, xs) {
    var idx = 0;
    var len = xs.length;
    while (idx < len && fn(xs[idx])) {
      idx += 1;
    }
    return slice(0, idx, xs);
  }));
  module.exports = takeWhile;
});

// node_modules/ramda/src/internal/_xtap.js
var require_xtap = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _xfBase = require_xfBase();
  var XTap = /* @__PURE__ */ function() {
    function XTap2(f, xf) {
      this.xf = xf;
      this.f = f;
    }
    XTap2.prototype["@@transducer/init"] = _xfBase.init;
    XTap2.prototype["@@transducer/result"] = _xfBase.result;
    XTap2.prototype["@@transducer/step"] = function(result, input) {
      this.f(input);
      return this.xf["@@transducer/step"](result, input);
    };
    return XTap2;
  }();
  var _xtap = /* @__PURE__ */ _curry2(function _xtap2(f, xf) {
    return new XTap(f, xf);
  });
  module.exports = _xtap;
});

// node_modules/ramda/src/tap.js
var require_tap = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _dispatchable = require_dispatchable();
  var _xtap = require_xtap();
  var tap = /* @__PURE__ */ _curry2(/* @__PURE__ */ _dispatchable([], _xtap, function tap2(fn, x) {
    fn(x);
    return x;
  }));
  module.exports = tap;
});

// node_modules/ramda/src/internal/_isRegExp.js
var require_isRegExp = __commonJS((exports, module) => {
  function _isRegExp(x) {
    return Object.prototype.toString.call(x) === "[object RegExp]";
  }
  module.exports = _isRegExp;
});

// node_modules/ramda/src/test.js
var require_test = __commonJS((exports, module) => {
  var _cloneRegExp = require_cloneRegExp();
  var _curry2 = require_curry2();
  var _isRegExp = require_isRegExp();
  var toString = require_toString2();
  var test = /* @__PURE__ */ _curry2(function test2(pattern, str) {
    if (!_isRegExp(pattern)) {
      throw new TypeError("\u2018test\u2019 requires a value of type RegExp as its first argument; received " + toString(pattern));
    }
    return _cloneRegExp(pattern).test(str);
  });
  module.exports = test;
});

// node_modules/ramda/src/andThen.js
var require_andThen = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _assertPromise = require_assertPromise();
  var andThen = /* @__PURE__ */ _curry2(function andThen2(f, p) {
    _assertPromise("andThen", p);
    return p.then(f);
  });
  module.exports = andThen;
});

// node_modules/ramda/src/toLower.js
var require_toLower = __commonJS((exports, module) => {
  var invoker = require_invoker();
  var toLower = /* @__PURE__ */ invoker(0, "toLowerCase");
  module.exports = toLower;
});

// node_modules/ramda/src/toPairs.js
var require_toPairs = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var _has = require_has();
  var toPairs = /* @__PURE__ */ _curry1(function toPairs2(obj) {
    var pairs = [];
    for (var prop in obj) {
      if (_has(prop, obj)) {
        pairs[pairs.length] = [prop, obj[prop]];
      }
    }
    return pairs;
  });
  module.exports = toPairs;
});

// node_modules/ramda/src/toPairsIn.js
var require_toPairsIn = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var toPairsIn = /* @__PURE__ */ _curry1(function toPairsIn2(obj) {
    var pairs = [];
    for (var prop in obj) {
      pairs[pairs.length] = [prop, obj[prop]];
    }
    return pairs;
  });
  module.exports = toPairsIn;
});

// node_modules/ramda/src/toUpper.js
var require_toUpper = __commonJS((exports, module) => {
  var invoker = require_invoker();
  var toUpper = /* @__PURE__ */ invoker(0, "toUpperCase");
  module.exports = toUpper;
});

// node_modules/ramda/src/transduce.js
var require_transduce = __commonJS((exports, module) => {
  var _reduce = require_reduce();
  var _xwrap = require_xwrap();
  var curryN = require_curryN2();
  var transduce = /* @__PURE__ */ curryN(4, function transduce2(xf, fn, acc, list) {
    return _reduce(xf(typeof fn === "function" ? _xwrap(fn) : fn), acc, list);
  });
  module.exports = transduce;
});

// node_modules/ramda/src/transpose.js
var require_transpose = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var transpose = /* @__PURE__ */ _curry1(function transpose2(outerlist) {
    var i = 0;
    var result = [];
    while (i < outerlist.length) {
      var innerlist = outerlist[i];
      var j = 0;
      while (j < innerlist.length) {
        if (typeof result[j] === "undefined") {
          result[j] = [];
        }
        result[j].push(innerlist[j]);
        j += 1;
      }
      i += 1;
    }
    return result;
  });
  module.exports = transpose;
});

// node_modules/ramda/src/traverse.js
var require_traverse = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var map = require_map2();
  var sequence = require_sequence();
  var traverse = /* @__PURE__ */ _curry3(function traverse2(of, f, traversable) {
    return typeof traversable["fantasy-land/traverse"] === "function" ? traversable["fantasy-land/traverse"](f, of) : sequence(of, map(f, traversable));
  });
  module.exports = traverse;
});

// node_modules/ramda/src/trim.js
var require_trim = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var ws = "	\n\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
  var zeroWidth = "\u200B";
  var hasProtoTrim = typeof String.prototype.trim === "function";
  var trim = !hasProtoTrim || /* @__PURE__ */ ws.trim() || !/* @__PURE__ */ zeroWidth.trim() ? /* @__PURE__ */ _curry1(function trim2(str) {
    var beginRx = new RegExp("^[" + ws + "][" + ws + "]*");
    var endRx = new RegExp("[" + ws + "][" + ws + "]*$");
    return str.replace(beginRx, "").replace(endRx, "");
  }) : /* @__PURE__ */ _curry1(function trim2(str) {
    return str.trim();
  });
  module.exports = trim;
});

// node_modules/ramda/src/tryCatch.js
var require_tryCatch = __commonJS((exports, module) => {
  var _arity = require_arity();
  var _concat = require_concat();
  var _curry2 = require_curry2();
  var tryCatch = /* @__PURE__ */ _curry2(function _tryCatch(tryer, catcher) {
    return _arity(tryer.length, function() {
      try {
        return tryer.apply(this, arguments);
      } catch (e) {
        return catcher.apply(this, _concat([e], arguments));
      }
    });
  });
  module.exports = tryCatch;
});

// node_modules/ramda/src/unapply.js
var require_unapply = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var unapply = /* @__PURE__ */ _curry1(function unapply2(fn) {
    return function() {
      return fn(Array.prototype.slice.call(arguments, 0));
    };
  });
  module.exports = unapply;
});

// node_modules/ramda/src/unary.js
var require_unary = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var nAry = require_nAry();
  var unary = /* @__PURE__ */ _curry1(function unary2(fn) {
    return nAry(1, fn);
  });
  module.exports = unary;
});

// node_modules/ramda/src/uncurryN.js
var require_uncurryN = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var curryN = require_curryN2();
  var uncurryN = /* @__PURE__ */ _curry2(function uncurryN2(depth, fn) {
    return curryN(depth, function() {
      var currentDepth = 1;
      var value = fn;
      var idx = 0;
      var endIdx;
      while (currentDepth <= depth && typeof value === "function") {
        endIdx = currentDepth === depth ? arguments.length : idx + value.length;
        value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
        currentDepth += 1;
        idx = endIdx;
      }
      return value;
    });
  });
  module.exports = uncurryN;
});

// node_modules/ramda/src/unfold.js
var require_unfold = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var unfold = /* @__PURE__ */ _curry2(function unfold2(fn, seed) {
    var pair = fn(seed);
    var result = [];
    while (pair && pair.length) {
      result[result.length] = pair[0];
      pair = fn(pair[1]);
    }
    return result;
  });
  module.exports = unfold;
});

// node_modules/ramda/src/union.js
var require_union = __commonJS((exports, module) => {
  var _concat = require_concat();
  var _curry2 = require_curry2();
  var compose2 = require_compose();
  var uniq = require_uniq();
  var union = /* @__PURE__ */ _curry2(/* @__PURE__ */ compose2(uniq, _concat));
  module.exports = union;
});

// node_modules/ramda/src/uniqWith.js
var require_uniqWith = __commonJS((exports, module) => {
  var _includesWith = require_includesWith();
  var _curry2 = require_curry2();
  var uniqWith = /* @__PURE__ */ _curry2(function uniqWith2(pred, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
    var item;
    while (idx < len) {
      item = list[idx];
      if (!_includesWith(pred, item, result)) {
        result[result.length] = item;
      }
      idx += 1;
    }
    return result;
  });
  module.exports = uniqWith;
});

// node_modules/ramda/src/unionWith.js
var require_unionWith = __commonJS((exports, module) => {
  var _concat = require_concat();
  var _curry3 = require_curry3();
  var uniqWith = require_uniqWith();
  var unionWith = /* @__PURE__ */ _curry3(function unionWith2(pred, list1, list2) {
    return uniqWith(pred, _concat(list1, list2));
  });
  module.exports = unionWith;
});

// node_modules/ramda/src/unless.js
var require_unless = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var unless = /* @__PURE__ */ _curry3(function unless2(pred, whenFalseFn, x) {
    return pred(x) ? x : whenFalseFn(x);
  });
  module.exports = unless;
});

// node_modules/ramda/src/unnest.js
var require_unnest = __commonJS((exports, module) => {
  var _identity = require_identity();
  var chain = require_chain();
  var unnest = /* @__PURE__ */ chain(_identity);
  module.exports = unnest;
});

// node_modules/ramda/src/until.js
var require_until = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var until = /* @__PURE__ */ _curry3(function until2(pred, fn, init) {
    var val = init;
    while (!pred(val)) {
      val = fn(val);
    }
    return val;
  });
  module.exports = until;
});

// node_modules/ramda/src/valuesIn.js
var require_valuesIn = __commonJS((exports, module) => {
  var _curry1 = require_curry1();
  var valuesIn = /* @__PURE__ */ _curry1(function valuesIn2(obj) {
    var prop;
    var vs = [];
    for (prop in obj) {
      vs[vs.length] = obj[prop];
    }
    return vs;
  });
  module.exports = valuesIn;
});

// node_modules/ramda/src/view.js
var require_view = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var Const = function(x) {
    return {
      value: x,
      "fantasy-land/map": function() {
        return this;
      }
    };
  };
  var view = /* @__PURE__ */ _curry2(function view2(lens, x) {
    return lens(Const)(x).value;
  });
  module.exports = view;
});

// node_modules/ramda/src/when.js
var require_when = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var when = /* @__PURE__ */ _curry3(function when2(pred, whenTrueFn, x) {
    return pred(x) ? whenTrueFn(x) : x;
  });
  module.exports = when;
});

// node_modules/ramda/src/where.js
var require_where = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var _has = require_has();
  var where = /* @__PURE__ */ _curry2(function where2(spec, testObj) {
    for (var prop in spec) {
      if (_has(prop, spec) && !spec[prop](testObj[prop])) {
        return false;
      }
    }
    return true;
  });
  module.exports = where;
});

// node_modules/ramda/src/whereEq.js
var require_whereEq = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var equals = require_equals2();
  var map = require_map2();
  var where = require_where();
  var whereEq = /* @__PURE__ */ _curry2(function whereEq2(spec, testObj) {
    return where(map(equals, spec), testObj);
  });
  module.exports = whereEq;
});

// node_modules/ramda/src/without.js
var require_without = __commonJS((exports, module) => {
  var _includes = require_includes();
  var _curry2 = require_curry2();
  var flip = require_flip();
  var reject = require_reject();
  var without = /* @__PURE__ */ _curry2(function(xs, list) {
    return reject(flip(_includes)(xs), list);
  });
  module.exports = without;
});

// node_modules/ramda/src/xor.js
var require_xor = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var xor = /* @__PURE__ */ _curry2(function xor2(a, b) {
    return Boolean(!a ^ !b);
  });
  module.exports = xor;
});

// node_modules/ramda/src/xprod.js
var require_xprod = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var xprod = /* @__PURE__ */ _curry2(function xprod2(a, b) {
    var idx = 0;
    var ilen = a.length;
    var j;
    var jlen = b.length;
    var result = [];
    while (idx < ilen) {
      j = 0;
      while (j < jlen) {
        result[result.length] = [a[idx], b[j]];
        j += 1;
      }
      idx += 1;
    }
    return result;
  });
  module.exports = xprod;
});

// node_modules/ramda/src/zip.js
var require_zip = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var zip = /* @__PURE__ */ _curry2(function zip2(a, b) {
    var rv = [];
    var idx = 0;
    var len = Math.min(a.length, b.length);
    while (idx < len) {
      rv[idx] = [a[idx], b[idx]];
      idx += 1;
    }
    return rv;
  });
  module.exports = zip;
});

// node_modules/ramda/src/zipObj.js
var require_zipObj = __commonJS((exports, module) => {
  var _curry2 = require_curry2();
  var zipObj = /* @__PURE__ */ _curry2(function zipObj2(keys, values) {
    var idx = 0;
    var len = Math.min(keys.length, values.length);
    var out = {};
    while (idx < len) {
      out[keys[idx]] = values[idx];
      idx += 1;
    }
    return out;
  });
  module.exports = zipObj;
});

// node_modules/ramda/src/zipWith.js
var require_zipWith = __commonJS((exports, module) => {
  var _curry3 = require_curry3();
  var zipWith = /* @__PURE__ */ _curry3(function zipWith2(fn, a, b) {
    var rv = [];
    var idx = 0;
    var len = Math.min(a.length, b.length);
    while (idx < len) {
      rv[idx] = fn(a[idx], b[idx]);
      idx += 1;
    }
    return rv;
  });
  module.exports = zipWith;
});

// node_modules/ramda/src/thunkify.js
var require_thunkify = __commonJS((exports, module) => {
  var curryN = require_curryN2();
  var _curry1 = require_curry1();
  var thunkify = /* @__PURE__ */ _curry1(function thunkify2(fn) {
    return curryN(fn.length, function createThunk() {
      var fnArgs = arguments;
      return function invokeThunk() {
        return fn.apply(this, fnArgs);
      };
    });
  });
  module.exports = thunkify;
});

// node_modules/ramda/src/index.js
var require_src = __commonJS((exports, module) => {
  module.exports = {};
  module.exports.F = require_F();
  module.exports.T = require_T();
  module.exports.__ = require__();
  module.exports.add = require_add();
  module.exports.addIndex = require_addIndex();
  module.exports.adjust = require_adjust();
  module.exports.all = require_all();
  module.exports.allPass = require_allPass();
  module.exports.always = require_always();
  module.exports.and = require_and();
  module.exports.any = require_any();
  module.exports.anyPass = require_anyPass();
  module.exports.ap = require_ap();
  module.exports.aperture = require_aperture2();
  module.exports.append = require_append();
  module.exports.apply = require_apply();
  module.exports.applySpec = require_applySpec();
  module.exports.applyTo = require_applyTo();
  module.exports.ascend = require_ascend();
  module.exports.assoc = require_assoc();
  module.exports.assocPath = require_assocPath();
  module.exports.binary = require_binary();
  module.exports.bind = require_bind();
  module.exports.both = require_both();
  module.exports.call = require_call();
  module.exports.chain = require_chain();
  module.exports.clamp = require_clamp();
  module.exports.clone = require_clone2();
  module.exports.comparator = require_comparator();
  module.exports.complement = require_complement();
  module.exports.compose = require_compose();
  module.exports.composeK = require_composeK();
  module.exports.composeP = require_composeP();
  module.exports.composeWith = require_composeWith();
  module.exports.concat = require_concat2();
  module.exports.cond = require_cond();
  module.exports.construct = require_construct();
  module.exports.constructN = require_constructN();
  module.exports.contains = require_contains();
  module.exports.converge = require_converge();
  module.exports.countBy = require_countBy();
  module.exports.curry = require_curry();
  module.exports.curryN = require_curryN2();
  module.exports.dec = require_dec();
  module.exports.defaultTo = require_defaultTo();
  module.exports.descend = require_descend();
  module.exports.difference = require_difference();
  module.exports.differenceWith = require_differenceWith();
  module.exports.dissoc = require_dissoc();
  module.exports.dissocPath = require_dissocPath();
  module.exports.divide = require_divide();
  module.exports.drop = require_drop();
  module.exports.dropLast = require_dropLast2();
  module.exports.dropLastWhile = require_dropLastWhile2();
  module.exports.dropRepeats = require_dropRepeats();
  module.exports.dropRepeatsWith = require_dropRepeatsWith();
  module.exports.dropWhile = require_dropWhile();
  module.exports.either = require_either();
  module.exports.empty = require_empty();
  module.exports.endsWith = require_endsWith();
  module.exports.eqBy = require_eqBy();
  module.exports.eqProps = require_eqProps();
  module.exports.equals = require_equals2();
  module.exports.evolve = require_evolve();
  module.exports.filter = require_filter2();
  module.exports.find = require_find();
  module.exports.findIndex = require_findIndex();
  module.exports.findLast = require_findLast();
  module.exports.findLastIndex = require_findLastIndex();
  module.exports.flatten = require_flatten();
  module.exports.flip = require_flip();
  module.exports.forEach = require_forEach();
  module.exports.forEachObjIndexed = require_forEachObjIndexed();
  module.exports.fromPairs = require_fromPairs();
  module.exports.groupBy = require_groupBy();
  module.exports.groupWith = require_groupWith();
  module.exports.gt = require_gt();
  module.exports.gte = require_gte();
  module.exports.has = require_has2();
  module.exports.hasIn = require_hasIn();
  module.exports.hasPath = require_hasPath();
  module.exports.head = require_head();
  module.exports.identical = require_identical();
  module.exports.identity = require_identity2();
  module.exports.ifElse = require_ifElse();
  module.exports.inc = require_inc();
  module.exports.includes = require_includes2();
  module.exports.indexBy = require_indexBy();
  module.exports.indexOf = require_indexOf2();
  module.exports.init = require_init();
  module.exports.innerJoin = require_innerJoin();
  module.exports.insert = require_insert();
  module.exports.insertAll = require_insertAll();
  module.exports.intersection = require_intersection();
  module.exports.intersperse = require_intersperse();
  module.exports.into = require_into();
  module.exports.invert = require_invert();
  module.exports.invertObj = require_invertObj();
  module.exports.invoker = require_invoker();
  module.exports.is = require_is();
  module.exports.isEmpty = require_isEmpty();
  module.exports.isNil = require_isNil();
  module.exports.join = require_join();
  module.exports.juxt = require_juxt();
  module.exports.keys = require_keys();
  module.exports.keysIn = require_keysIn();
  module.exports.last = require_last();
  module.exports.lastIndexOf = require_lastIndexOf();
  module.exports.length = require_length();
  module.exports.lens = require_lens();
  module.exports.lensIndex = require_lensIndex();
  module.exports.lensPath = require_lensPath();
  module.exports.lensProp = require_lensProp();
  module.exports.lift = require_lift();
  module.exports.liftN = require_liftN();
  module.exports.lt = require_lt();
  module.exports.lte = require_lte();
  module.exports.map = require_map2();
  module.exports.mapAccum = require_mapAccum();
  module.exports.mapAccumRight = require_mapAccumRight();
  module.exports.mapObjIndexed = require_mapObjIndexed();
  module.exports.match = require_match();
  module.exports.mathMod = require_mathMod();
  module.exports.max = require_max();
  module.exports.maxBy = require_maxBy();
  module.exports.mean = require_mean();
  module.exports.median = require_median();
  module.exports.memoizeWith = require_memoizeWith();
  module.exports.merge = require_merge();
  module.exports.mergeAll = require_mergeAll();
  module.exports.mergeDeepLeft = require_mergeDeepLeft();
  module.exports.mergeDeepRight = require_mergeDeepRight();
  module.exports.mergeDeepWith = require_mergeDeepWith();
  module.exports.mergeDeepWithKey = require_mergeDeepWithKey();
  module.exports.mergeLeft = require_mergeLeft();
  module.exports.mergeRight = require_mergeRight();
  module.exports.mergeWith = require_mergeWith();
  module.exports.mergeWithKey = require_mergeWithKey();
  module.exports.min = require_min();
  module.exports.minBy = require_minBy();
  module.exports.modulo = require_modulo();
  module.exports.move = require_move();
  module.exports.multiply = require_multiply();
  module.exports.nAry = require_nAry();
  module.exports.negate = require_negate();
  module.exports.none = require_none();
  module.exports.not = require_not();
  module.exports.nth = require_nth();
  module.exports.nthArg = require_nthArg();
  module.exports.o = require_o();
  module.exports.objOf = require_objOf();
  module.exports.of = require_of2();
  module.exports.omit = require_omit();
  module.exports.once = require_once();
  module.exports.or = require_or();
  module.exports.otherwise = require_otherwise();
  module.exports.over = require_over();
  module.exports.pair = require_pair();
  module.exports.partial = require_partial();
  module.exports.partialRight = require_partialRight();
  module.exports.partition = require_partition();
  module.exports.path = require_path();
  module.exports.paths = require_paths();
  module.exports.pathEq = require_pathEq();
  module.exports.pathOr = require_pathOr();
  module.exports.pathSatisfies = require_pathSatisfies();
  module.exports.pick = require_pick();
  module.exports.pickAll = require_pickAll();
  module.exports.pickBy = require_pickBy();
  module.exports.pipe = require_pipe2();
  module.exports.pipeK = require_pipeK();
  module.exports.pipeP = require_pipeP2();
  module.exports.pipeWith = require_pipeWith();
  module.exports.pluck = require_pluck();
  module.exports.prepend = require_prepend();
  module.exports.product = require_product();
  module.exports.project = require_project();
  module.exports.prop = require_prop();
  module.exports.propEq = require_propEq();
  module.exports.propIs = require_propIs();
  module.exports.propOr = require_propOr();
  module.exports.propSatisfies = require_propSatisfies();
  module.exports.props = require_props();
  module.exports.range = require_range();
  module.exports.reduce = require_reduce2();
  module.exports.reduceBy = require_reduceBy();
  module.exports.reduceRight = require_reduceRight();
  module.exports.reduceWhile = require_reduceWhile();
  module.exports.reduced = require_reduced2();
  module.exports.reject = require_reject();
  module.exports.remove = require_remove();
  module.exports.repeat = require_repeat();
  module.exports.replace = require_replace();
  module.exports.reverse = require_reverse();
  module.exports.scan = require_scan();
  module.exports.sequence = require_sequence();
  module.exports.set = require_set();
  module.exports.slice = require_slice();
  module.exports.sort = require_sort();
  module.exports.sortBy = require_sortBy();
  module.exports.sortWith = require_sortWith();
  module.exports.split = require_split();
  module.exports.splitAt = require_splitAt();
  module.exports.splitEvery = require_splitEvery();
  module.exports.splitWhen = require_splitWhen();
  module.exports.startsWith = require_startsWith();
  module.exports.subtract = require_subtract();
  module.exports.sum = require_sum();
  module.exports.symmetricDifference = require_symmetricDifference();
  module.exports.symmetricDifferenceWith = require_symmetricDifferenceWith();
  module.exports.tail = require_tail();
  module.exports.take = require_take();
  module.exports.takeLast = require_takeLast();
  module.exports.takeLastWhile = require_takeLastWhile();
  module.exports.takeWhile = require_takeWhile();
  module.exports.tap = require_tap();
  module.exports.test = require_test();
  module.exports.andThen = require_andThen();
  module.exports.times = require_times();
  module.exports.toLower = require_toLower();
  module.exports.toPairs = require_toPairs();
  module.exports.toPairsIn = require_toPairsIn();
  module.exports.toString = require_toString2();
  module.exports.toUpper = require_toUpper();
  module.exports.transduce = require_transduce();
  module.exports.transpose = require_transpose();
  module.exports.traverse = require_traverse();
  module.exports.trim = require_trim();
  module.exports.tryCatch = require_tryCatch();
  module.exports.type = require_type();
  module.exports.unapply = require_unapply();
  module.exports.unary = require_unary();
  module.exports.uncurryN = require_uncurryN();
  module.exports.unfold = require_unfold();
  module.exports.union = require_union();
  module.exports.unionWith = require_unionWith();
  module.exports.uniq = require_uniq();
  module.exports.uniqBy = require_uniqBy();
  module.exports.uniqWith = require_uniqWith();
  module.exports.unless = require_unless();
  module.exports.unnest = require_unnest();
  module.exports.until = require_until();
  module.exports.update = require_update();
  module.exports.useWith = require_useWith();
  module.exports.values = require_values();
  module.exports.valuesIn = require_valuesIn();
  module.exports.view = require_view();
  module.exports.when = require_when();
  module.exports.where = require_where();
  module.exports.whereEq = require_whereEq();
  module.exports.without = require_without();
  module.exports.xor = require_xor();
  module.exports.xprod = require_xprod();
  module.exports.zip = require_zip();
  module.exports.zipObj = require_zipObj();
  module.exports.zipWith = require_zipWith();
  module.exports.thunkify = require_thunkify();
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS((exports, module) => {
  /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
  var buffer = require("buffer");
  var Buffer2 = buffer.Buffer;
  function copyProps(src, dst) {
    for (var key in src) {
      dst[key] = src[key];
    }
  }
  if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
    module.exports = buffer;
  } else {
    copyProps(buffer, exports);
    exports.Buffer = SafeBuffer;
  }
  function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer2(arg, encodingOrOffset, length);
  }
  SafeBuffer.prototype = Object.create(Buffer2.prototype);
  copyProps(Buffer2, SafeBuffer);
  SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === "number") {
      throw new TypeError("Argument must not be a number");
    }
    return Buffer2(arg, encodingOrOffset, length);
  };
  SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== "number") {
      throw new TypeError("Argument must be a number");
    }
    var buf = Buffer2(size);
    if (fill !== void 0) {
      if (typeof encoding === "string") {
        buf.fill(fill, encoding);
      } else {
        buf.fill(fill);
      }
    } else {
      buf.fill(0);
    }
    return buf;
  };
  SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== "number") {
      throw new TypeError("Argument must be a number");
    }
    return Buffer2(size);
  };
  SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== "number") {
      throw new TypeError("Argument must be a number");
    }
    return buffer.SlowBuffer(size);
  };
});

// node_modules/jws/lib/data-stream.js
var require_data_stream = __commonJS((exports, module) => {
  var Buffer2 = require_safe_buffer().Buffer;
  var Stream = require("stream");
  var util = require("util");
  function DataStream(data2) {
    this.buffer = null;
    this.writable = true;
    this.readable = true;
    if (!data2) {
      this.buffer = Buffer2.alloc(0);
      return this;
    }
    if (typeof data2.pipe === "function") {
      this.buffer = Buffer2.alloc(0);
      data2.pipe(this);
      return this;
    }
    if (data2.length || typeof data2 === "object") {
      this.buffer = data2;
      this.writable = false;
      process.nextTick(function() {
        this.emit("end", data2);
        this.readable = false;
        this.emit("close");
      }.bind(this));
      return this;
    }
    throw new TypeError("Unexpected data type (" + typeof data2 + ")");
  }
  util.inherits(DataStream, Stream);
  DataStream.prototype.write = function write(data2) {
    this.buffer = Buffer2.concat([this.buffer, Buffer2.from(data2)]);
    this.emit("data", data2);
  };
  DataStream.prototype.end = function end(data2) {
    if (data2)
      this.write(data2);
    this.emit("end", data2);
    this.emit("close");
    this.writable = false;
    this.readable = false;
  };
  module.exports = DataStream;
});

// node_modules/buffer-equal-constant-time/index.js
var require_buffer_equal_constant_time = __commonJS((exports, module) => {
  "use strict";
  var Buffer2 = require("buffer").Buffer;
  var SlowBuffer = require("buffer").SlowBuffer;
  module.exports = bufferEq;
  function bufferEq(a, b) {
    if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) {
      return false;
    }
    var c = 0;
    for (var i = 0; i < a.length; i++) {
      c |= a[i] ^ b[i];
    }
    return c === 0;
  }
  bufferEq.install = function() {
    Buffer2.prototype.equal = SlowBuffer.prototype.equal = function equal(that) {
      return bufferEq(this, that);
    };
  };
  var origBufEqual = Buffer2.prototype.equal;
  var origSlowBufEqual = SlowBuffer.prototype.equal;
  bufferEq.restore = function() {
    Buffer2.prototype.equal = origBufEqual;
    SlowBuffer.prototype.equal = origSlowBufEqual;
  };
});

// node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js
var require_param_bytes_for_alg = __commonJS((exports, module) => {
  "use strict";
  function getParamSize(keySize) {
    var result = (keySize / 8 | 0) + (keySize % 8 === 0 ? 0 : 1);
    return result;
  }
  var paramBytesForAlg = {
    ES256: getParamSize(256),
    ES384: getParamSize(384),
    ES512: getParamSize(521)
  };
  function getParamBytesForAlg(alg) {
    var paramBytes = paramBytesForAlg[alg];
    if (paramBytes) {
      return paramBytes;
    }
    throw new Error('Unknown algorithm "' + alg + '"');
  }
  module.exports = getParamBytesForAlg;
});

// node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js
var require_ecdsa_sig_formatter = __commonJS((exports, module) => {
  "use strict";
  var Buffer2 = require_safe_buffer().Buffer;
  var getParamBytesForAlg = require_param_bytes_for_alg();
  var MAX_OCTET = 128;
  var CLASS_UNIVERSAL = 0;
  var PRIMITIVE_BIT = 32;
  var TAG_SEQ = 16;
  var TAG_INT = 2;
  var ENCODED_TAG_SEQ = TAG_SEQ | PRIMITIVE_BIT | CLASS_UNIVERSAL << 6;
  var ENCODED_TAG_INT = TAG_INT | CLASS_UNIVERSAL << 6;
  function base64Url(base64) {
    return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function signatureAsBuffer(signature) {
    if (Buffer2.isBuffer(signature)) {
      return signature;
    } else if (typeof signature === "string") {
      return Buffer2.from(signature, "base64");
    }
    throw new TypeError("ECDSA signature must be a Base64 string or a Buffer");
  }
  function derToJose(signature, alg) {
    signature = signatureAsBuffer(signature);
    var paramBytes = getParamBytesForAlg(alg);
    var maxEncodedParamLength = paramBytes + 1;
    var inputLength = signature.length;
    var offset = 0;
    if (signature[offset++] !== ENCODED_TAG_SEQ) {
      throw new Error('Could not find expected "seq"');
    }
    var seqLength = signature[offset++];
    if (seqLength === (MAX_OCTET | 1)) {
      seqLength = signature[offset++];
    }
    if (inputLength - offset < seqLength) {
      throw new Error('"seq" specified length of "' + seqLength + '", only "' + (inputLength - offset) + '" remaining');
    }
    if (signature[offset++] !== ENCODED_TAG_INT) {
      throw new Error('Could not find expected "int" for "r"');
    }
    var rLength = signature[offset++];
    if (inputLength - offset - 2 < rLength) {
      throw new Error('"r" specified length of "' + rLength + '", only "' + (inputLength - offset - 2) + '" available');
    }
    if (maxEncodedParamLength < rLength) {
      throw new Error('"r" specified length of "' + rLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
    }
    var rOffset = offset;
    offset += rLength;
    if (signature[offset++] !== ENCODED_TAG_INT) {
      throw new Error('Could not find expected "int" for "s"');
    }
    var sLength = signature[offset++];
    if (inputLength - offset !== sLength) {
      throw new Error('"s" specified length of "' + sLength + '", expected "' + (inputLength - offset) + '"');
    }
    if (maxEncodedParamLength < sLength) {
      throw new Error('"s" specified length of "' + sLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
    }
    var sOffset = offset;
    offset += sLength;
    if (offset !== inputLength) {
      throw new Error('Expected to consume entire buffer, but "' + (inputLength - offset) + '" bytes remain');
    }
    var rPadding = paramBytes - rLength, sPadding = paramBytes - sLength;
    var dst = Buffer2.allocUnsafe(rPadding + rLength + sPadding + sLength);
    for (offset = 0; offset < rPadding; ++offset) {
      dst[offset] = 0;
    }
    signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);
    offset = paramBytes;
    for (var o = offset; offset < o + sPadding; ++offset) {
      dst[offset] = 0;
    }
    signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);
    dst = dst.toString("base64");
    dst = base64Url(dst);
    return dst;
  }
  function countPadding(buf, start, stop) {
    var padding = 0;
    while (start + padding < stop && buf[start + padding] === 0) {
      ++padding;
    }
    var needsSign = buf[start + padding] >= MAX_OCTET;
    if (needsSign) {
      --padding;
    }
    return padding;
  }
  function joseToDer(signature, alg) {
    signature = signatureAsBuffer(signature);
    var paramBytes = getParamBytesForAlg(alg);
    var signatureBytes = signature.length;
    if (signatureBytes !== paramBytes * 2) {
      throw new TypeError('"' + alg + '" signatures must be "' + paramBytes * 2 + '" bytes, saw "' + signatureBytes + '"');
    }
    var rPadding = countPadding(signature, 0, paramBytes);
    var sPadding = countPadding(signature, paramBytes, signature.length);
    var rLength = paramBytes - rPadding;
    var sLength = paramBytes - sPadding;
    var rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;
    var shortLength = rsBytes < MAX_OCTET;
    var dst = Buffer2.allocUnsafe((shortLength ? 2 : 3) + rsBytes);
    var offset = 0;
    dst[offset++] = ENCODED_TAG_SEQ;
    if (shortLength) {
      dst[offset++] = rsBytes;
    } else {
      dst[offset++] = MAX_OCTET | 1;
      dst[offset++] = rsBytes & 255;
    }
    dst[offset++] = ENCODED_TAG_INT;
    dst[offset++] = rLength;
    if (rPadding < 0) {
      dst[offset++] = 0;
      offset += signature.copy(dst, offset, 0, paramBytes);
    } else {
      offset += signature.copy(dst, offset, rPadding, paramBytes);
    }
    dst[offset++] = ENCODED_TAG_INT;
    dst[offset++] = sLength;
    if (sPadding < 0) {
      dst[offset++] = 0;
      signature.copy(dst, offset, paramBytes);
    } else {
      signature.copy(dst, offset, paramBytes + sPadding);
    }
    return dst;
  }
  module.exports = {
    derToJose,
    joseToDer
  };
});

// node_modules/jwa/index.js
var require_jwa = __commonJS((exports, module) => {
  var bufferEqual = require_buffer_equal_constant_time();
  var Buffer2 = require_safe_buffer().Buffer;
  var crypto = require("crypto");
  var formatEcdsa = require_ecdsa_sig_formatter();
  var util = require("util");
  var MSG_INVALID_ALGORITHM = '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".';
  var MSG_INVALID_SECRET = "secret must be a string or buffer";
  var MSG_INVALID_VERIFIER_KEY = "key must be a string or a buffer";
  var MSG_INVALID_SIGNER_KEY = "key must be a string, a buffer or an object";
  var supportsKeyObjects = typeof crypto.createPublicKey === "function";
  if (supportsKeyObjects) {
    MSG_INVALID_VERIFIER_KEY += " or a KeyObject";
    MSG_INVALID_SECRET += "or a KeyObject";
  }
  function checkIsPublicKey(key) {
    if (Buffer2.isBuffer(key)) {
      return;
    }
    if (typeof key === "string") {
      return;
    }
    if (!supportsKeyObjects) {
      throw typeError(MSG_INVALID_VERIFIER_KEY);
    }
    if (typeof key !== "object") {
      throw typeError(MSG_INVALID_VERIFIER_KEY);
    }
    if (typeof key.type !== "string") {
      throw typeError(MSG_INVALID_VERIFIER_KEY);
    }
    if (typeof key.asymmetricKeyType !== "string") {
      throw typeError(MSG_INVALID_VERIFIER_KEY);
    }
    if (typeof key.export !== "function") {
      throw typeError(MSG_INVALID_VERIFIER_KEY);
    }
  }
  function checkIsPrivateKey(key) {
    if (Buffer2.isBuffer(key)) {
      return;
    }
    if (typeof key === "string") {
      return;
    }
    if (typeof key === "object") {
      return;
    }
    throw typeError(MSG_INVALID_SIGNER_KEY);
  }
  function checkIsSecretKey(key) {
    if (Buffer2.isBuffer(key)) {
      return;
    }
    if (typeof key === "string") {
      return key;
    }
    if (!supportsKeyObjects) {
      throw typeError(MSG_INVALID_SECRET);
    }
    if (typeof key !== "object") {
      throw typeError(MSG_INVALID_SECRET);
    }
    if (key.type !== "secret") {
      throw typeError(MSG_INVALID_SECRET);
    }
    if (typeof key.export !== "function") {
      throw typeError(MSG_INVALID_SECRET);
    }
  }
  function fromBase64(base64) {
    return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function toBase64(base64url) {
    base64url = base64url.toString();
    var padding = 4 - base64url.length % 4;
    if (padding !== 4) {
      for (var i = 0; i < padding; ++i) {
        base64url += "=";
      }
    }
    return base64url.replace(/\-/g, "+").replace(/_/g, "/");
  }
  function typeError(template) {
    var args = [].slice.call(arguments, 1);
    var errMsg = util.format.bind(util, template).apply(null, args);
    return new TypeError(errMsg);
  }
  function bufferOrString(obj) {
    return Buffer2.isBuffer(obj) || typeof obj === "string";
  }
  function normalizeInput(thing) {
    if (!bufferOrString(thing))
      thing = JSON.stringify(thing);
    return thing;
  }
  function createHmacSigner(bits) {
    return function sign(thing, secret) {
      checkIsSecretKey(secret);
      thing = normalizeInput(thing);
      var hmac = crypto.createHmac("sha" + bits, secret);
      var sig = (hmac.update(thing), hmac.digest("base64"));
      return fromBase64(sig);
    };
  }
  function createHmacVerifier(bits) {
    return function verify(thing, signature, secret) {
      var computedSig = createHmacSigner(bits)(thing, secret);
      return bufferEqual(Buffer2.from(signature), Buffer2.from(computedSig));
    };
  }
  function createKeySigner(bits) {
    return function sign(thing, privateKey) {
      checkIsPrivateKey(privateKey);
      thing = normalizeInput(thing);
      var signer = crypto.createSign("RSA-SHA" + bits);
      var sig = (signer.update(thing), signer.sign(privateKey, "base64"));
      return fromBase64(sig);
    };
  }
  function createKeyVerifier(bits) {
    return function verify(thing, signature, publicKey) {
      checkIsPublicKey(publicKey);
      thing = normalizeInput(thing);
      signature = toBase64(signature);
      var verifier = crypto.createVerify("RSA-SHA" + bits);
      verifier.update(thing);
      return verifier.verify(publicKey, signature, "base64");
    };
  }
  function createPSSKeySigner(bits) {
    return function sign(thing, privateKey) {
      checkIsPrivateKey(privateKey);
      thing = normalizeInput(thing);
      var signer = crypto.createSign("RSA-SHA" + bits);
      var sig = (signer.update(thing), signer.sign({
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
        saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
      }, "base64"));
      return fromBase64(sig);
    };
  }
  function createPSSKeyVerifier(bits) {
    return function verify(thing, signature, publicKey) {
      checkIsPublicKey(publicKey);
      thing = normalizeInput(thing);
      signature = toBase64(signature);
      var verifier = crypto.createVerify("RSA-SHA" + bits);
      verifier.update(thing);
      return verifier.verify({
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
        saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
      }, signature, "base64");
    };
  }
  function createECDSASigner(bits) {
    var inner = createKeySigner(bits);
    return function sign() {
      var signature = inner.apply(null, arguments);
      signature = formatEcdsa.derToJose(signature, "ES" + bits);
      return signature;
    };
  }
  function createECDSAVerifer(bits) {
    var inner = createKeyVerifier(bits);
    return function verify(thing, signature, publicKey) {
      signature = formatEcdsa.joseToDer(signature, "ES" + bits).toString("base64");
      var result = inner(thing, signature, publicKey);
      return result;
    };
  }
  function createNoneSigner() {
    return function sign() {
      return "";
    };
  }
  function createNoneVerifier() {
    return function verify(thing, signature) {
      return signature === "";
    };
  }
  module.exports = function jwa(algorithm) {
    var signerFactories = {
      hs: createHmacSigner,
      rs: createKeySigner,
      ps: createPSSKeySigner,
      es: createECDSASigner,
      none: createNoneSigner
    };
    var verifierFactories = {
      hs: createHmacVerifier,
      rs: createKeyVerifier,
      ps: createPSSKeyVerifier,
      es: createECDSAVerifer,
      none: createNoneVerifier
    };
    var match = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/i);
    if (!match)
      throw typeError(MSG_INVALID_ALGORITHM, algorithm);
    var algo = (match[1] || match[3]).toLowerCase();
    var bits = match[2];
    return {
      sign: signerFactories[algo](bits),
      verify: verifierFactories[algo](bits)
    };
  };
});

// node_modules/jws/lib/tostring.js
var require_tostring = __commonJS((exports, module) => {
  var Buffer2 = require("buffer").Buffer;
  module.exports = function toString(obj) {
    if (typeof obj === "string")
      return obj;
    if (typeof obj === "number" || Buffer2.isBuffer(obj))
      return obj.toString();
    return JSON.stringify(obj);
  };
});

// node_modules/jws/lib/sign-stream.js
var require_sign_stream = __commonJS((exports, module) => {
  var Buffer2 = require_safe_buffer().Buffer;
  var DataStream = require_data_stream();
  var jwa = require_jwa();
  var Stream = require("stream");
  var toString = require_tostring();
  var util = require("util");
  function base64url(string, encoding) {
    return Buffer2.from(string, encoding).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function jwsSecuredInput(header, payload, encoding) {
    encoding = encoding || "utf8";
    var encodedHeader = base64url(toString(header), "binary");
    var encodedPayload = base64url(toString(payload), encoding);
    return util.format("%s.%s", encodedHeader, encodedPayload);
  }
  function jwsSign(opts) {
    var header = opts.header;
    var payload = opts.payload;
    var secretOrKey = opts.secret || opts.privateKey;
    var encoding = opts.encoding;
    var algo = jwa(header.alg);
    var securedInput = jwsSecuredInput(header, payload, encoding);
    var signature = algo.sign(securedInput, secretOrKey);
    return util.format("%s.%s", securedInput, signature);
  }
  function SignStream(opts) {
    var secret = opts.secret || opts.privateKey || opts.key;
    var secretStream = new DataStream(secret);
    this.readable = true;
    this.header = opts.header;
    this.encoding = opts.encoding;
    this.secret = this.privateKey = this.key = secretStream;
    this.payload = new DataStream(opts.payload);
    this.secret.once("close", function() {
      if (!this.payload.writable && this.readable)
        this.sign();
    }.bind(this));
    this.payload.once("close", function() {
      if (!this.secret.writable && this.readable)
        this.sign();
    }.bind(this));
  }
  util.inherits(SignStream, Stream);
  SignStream.prototype.sign = function sign() {
    try {
      var signature = jwsSign({
        header: this.header,
        payload: this.payload.buffer,
        secret: this.secret.buffer,
        encoding: this.encoding
      });
      this.emit("done", signature);
      this.emit("data", signature);
      this.emit("end");
      this.readable = false;
      return signature;
    } catch (e) {
      this.readable = false;
      this.emit("error", e);
      this.emit("close");
    }
  };
  SignStream.sign = jwsSign;
  module.exports = SignStream;
});

// node_modules/jws/lib/verify-stream.js
var require_verify_stream = __commonJS((exports, module) => {
  var Buffer2 = require_safe_buffer().Buffer;
  var DataStream = require_data_stream();
  var jwa = require_jwa();
  var Stream = require("stream");
  var toString = require_tostring();
  var util = require("util");
  var JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
  function isObject(thing) {
    return Object.prototype.toString.call(thing) === "[object Object]";
  }
  function safeJsonParse(thing) {
    if (isObject(thing))
      return thing;
    try {
      return JSON.parse(thing);
    } catch (e) {
      return void 0;
    }
  }
  function headerFromJWS(jwsSig) {
    var encodedHeader = jwsSig.split(".", 1)[0];
    return safeJsonParse(Buffer2.from(encodedHeader, "base64").toString("binary"));
  }
  function securedInputFromJWS(jwsSig) {
    return jwsSig.split(".", 2).join(".");
  }
  function signatureFromJWS(jwsSig) {
    return jwsSig.split(".")[2];
  }
  function payloadFromJWS(jwsSig, encoding) {
    encoding = encoding || "utf8";
    var payload = jwsSig.split(".")[1];
    return Buffer2.from(payload, "base64").toString(encoding);
  }
  function isValidJws(string) {
    return JWS_REGEX.test(string) && !!headerFromJWS(string);
  }
  function jwsVerify(jwsSig, algorithm, secretOrKey) {
    if (!algorithm) {
      var err = new Error("Missing algorithm parameter for jws.verify");
      err.code = "MISSING_ALGORITHM";
      throw err;
    }
    jwsSig = toString(jwsSig);
    var signature = signatureFromJWS(jwsSig);
    var securedInput = securedInputFromJWS(jwsSig);
    var algo = jwa(algorithm);
    return algo.verify(securedInput, signature, secretOrKey);
  }
  function jwsDecode(jwsSig, opts) {
    opts = opts || {};
    jwsSig = toString(jwsSig);
    if (!isValidJws(jwsSig))
      return null;
    var header = headerFromJWS(jwsSig);
    if (!header)
      return null;
    var payload = payloadFromJWS(jwsSig);
    if (header.typ === "JWT" || opts.json)
      payload = JSON.parse(payload, opts.encoding);
    return {
      header,
      payload,
      signature: signatureFromJWS(jwsSig)
    };
  }
  function VerifyStream(opts) {
    opts = opts || {};
    var secretOrKey = opts.secret || opts.publicKey || opts.key;
    var secretStream = new DataStream(secretOrKey);
    this.readable = true;
    this.algorithm = opts.algorithm;
    this.encoding = opts.encoding;
    this.secret = this.publicKey = this.key = secretStream;
    this.signature = new DataStream(opts.signature);
    this.secret.once("close", function() {
      if (!this.signature.writable && this.readable)
        this.verify();
    }.bind(this));
    this.signature.once("close", function() {
      if (!this.secret.writable && this.readable)
        this.verify();
    }.bind(this));
  }
  util.inherits(VerifyStream, Stream);
  VerifyStream.prototype.verify = function verify() {
    try {
      var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);
      var obj = jwsDecode(this.signature.buffer, this.encoding);
      this.emit("done", valid, obj);
      this.emit("data", valid);
      this.emit("end");
      this.readable = false;
      return valid;
    } catch (e) {
      this.readable = false;
      this.emit("error", e);
      this.emit("close");
    }
  };
  VerifyStream.decode = jwsDecode;
  VerifyStream.isValid = isValidJws;
  VerifyStream.verify = jwsVerify;
  module.exports = VerifyStream;
});

// node_modules/jws/index.js
var require_jws = __commonJS((exports) => {
  var SignStream = require_sign_stream();
  var VerifyStream = require_verify_stream();
  var ALGORITHMS = [
    "HS256",
    "HS384",
    "HS512",
    "RS256",
    "RS384",
    "RS512",
    "PS256",
    "PS384",
    "PS512",
    "ES256",
    "ES384",
    "ES512"
  ];
  exports.ALGORITHMS = ALGORITHMS;
  exports.sign = SignStream.sign;
  exports.verify = VerifyStream.verify;
  exports.decode = VerifyStream.decode;
  exports.isValid = VerifyStream.isValid;
  exports.createSign = function createSign(opts) {
    return new SignStream(opts);
  };
  exports.createVerify = function createVerify(opts) {
    return new VerifyStream(opts);
  };
});

// node_modules/jsonwebtoken/decode.js
var require_decode = __commonJS((exports, module) => {
  var jws = require_jws();
  module.exports = function(jwt2, options) {
    options = options || {};
    var decoded = jws.decode(jwt2, options);
    if (!decoded) {
      return null;
    }
    var payload = decoded.payload;
    if (typeof payload === "string") {
      try {
        var obj = JSON.parse(payload);
        if (obj !== null && typeof obj === "object") {
          payload = obj;
        }
      } catch (e) {
      }
    }
    if (options.complete === true) {
      return {
        header: decoded.header,
        payload,
        signature: decoded.signature
      };
    }
    return payload;
  };
});

// node_modules/jsonwebtoken/lib/JsonWebTokenError.js
var require_JsonWebTokenError = __commonJS((exports, module) => {
  var JsonWebTokenError = function(message, error) {
    Error.call(this, message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.name = "JsonWebTokenError";
    this.message = message;
    if (error)
      this.inner = error;
  };
  JsonWebTokenError.prototype = Object.create(Error.prototype);
  JsonWebTokenError.prototype.constructor = JsonWebTokenError;
  module.exports = JsonWebTokenError;
});

// node_modules/jsonwebtoken/lib/NotBeforeError.js
var require_NotBeforeError = __commonJS((exports, module) => {
  var JsonWebTokenError = require_JsonWebTokenError();
  var NotBeforeError = function(message, date) {
    JsonWebTokenError.call(this, message);
    this.name = "NotBeforeError";
    this.date = date;
  };
  NotBeforeError.prototype = Object.create(JsonWebTokenError.prototype);
  NotBeforeError.prototype.constructor = NotBeforeError;
  module.exports = NotBeforeError;
});

// node_modules/jsonwebtoken/lib/TokenExpiredError.js
var require_TokenExpiredError = __commonJS((exports, module) => {
  var JsonWebTokenError = require_JsonWebTokenError();
  var TokenExpiredError = function(message, expiredAt) {
    JsonWebTokenError.call(this, message);
    this.name = "TokenExpiredError";
    this.expiredAt = expiredAt;
  };
  TokenExpiredError.prototype = Object.create(JsonWebTokenError.prototype);
  TokenExpiredError.prototype.constructor = TokenExpiredError;
  module.exports = TokenExpiredError;
});

// node_modules/ms/index.js
var require_ms = __commonJS((exports, module) => {
  var s = 1e3;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var w = d * 7;
  var y = d * 365.25;
  module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) {
      return parse(val);
    } else if (type === "number" && isFinite(val)) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
  };
  function parse(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
      return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch (type) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return n * y;
      case "weeks":
      case "week":
      case "w":
        return n * w;
      case "days":
      case "day":
      case "d":
        return n * d;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return n * h;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return n * m;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return n * s;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return n;
      default:
        return void 0;
    }
  }
  function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
      return Math.round(ms / d) + "d";
    }
    if (msAbs >= h) {
      return Math.round(ms / h) + "h";
    }
    if (msAbs >= m) {
      return Math.round(ms / m) + "m";
    }
    if (msAbs >= s) {
      return Math.round(ms / s) + "s";
    }
    return ms + "ms";
  }
  function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
      return plural(ms, msAbs, d, "day");
    }
    if (msAbs >= h) {
      return plural(ms, msAbs, h, "hour");
    }
    if (msAbs >= m) {
      return plural(ms, msAbs, m, "minute");
    }
    if (msAbs >= s) {
      return plural(ms, msAbs, s, "second");
    }
    return ms + " ms";
  }
  function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
  }
});

// node_modules/jsonwebtoken/lib/timespan.js
var require_timespan = __commonJS((exports, module) => {
  var ms = require_ms();
  module.exports = function(time, iat) {
    var timestamp = iat || Math.floor(Date.now() / 1e3);
    if (typeof time === "string") {
      var milliseconds = ms(time);
      if (typeof milliseconds === "undefined") {
        return;
      }
      return Math.floor(timestamp + milliseconds / 1e3);
    } else if (typeof time === "number") {
      return timestamp + time;
    } else {
      return;
    }
  };
});

// node_modules/jsonwebtoken/node_modules/semver/semver.js
var require_semver = __commonJS((exports, module) => {
  exports = module.exports = SemVer;
  var debug;
  if (typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG)) {
    debug = function() {
      var args = Array.prototype.slice.call(arguments, 0);
      args.unshift("SEMVER");
      console.log.apply(console, args);
    };
  } else {
    debug = function() {
    };
  }
  exports.SEMVER_SPEC_VERSION = "2.0.0";
  var MAX_LENGTH = 256;
  var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
  var MAX_SAFE_COMPONENT_LENGTH = 16;
  var re = exports.re = [];
  var src = exports.src = [];
  var R15 = 0;
  var NUMERICIDENTIFIER = R15++;
  src[NUMERICIDENTIFIER] = "0|[1-9]\\d*";
  var NUMERICIDENTIFIERLOOSE = R15++;
  src[NUMERICIDENTIFIERLOOSE] = "[0-9]+";
  var NONNUMERICIDENTIFIER = R15++;
  src[NONNUMERICIDENTIFIER] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
  var MAINVERSION = R15++;
  src[MAINVERSION] = "(" + src[NUMERICIDENTIFIER] + ")\\.(" + src[NUMERICIDENTIFIER] + ")\\.(" + src[NUMERICIDENTIFIER] + ")";
  var MAINVERSIONLOOSE = R15++;
  src[MAINVERSIONLOOSE] = "(" + src[NUMERICIDENTIFIERLOOSE] + ")\\.(" + src[NUMERICIDENTIFIERLOOSE] + ")\\.(" + src[NUMERICIDENTIFIERLOOSE] + ")";
  var PRERELEASEIDENTIFIER = R15++;
  src[PRERELEASEIDENTIFIER] = "(?:" + src[NUMERICIDENTIFIER] + "|" + src[NONNUMERICIDENTIFIER] + ")";
  var PRERELEASEIDENTIFIERLOOSE = R15++;
  src[PRERELEASEIDENTIFIERLOOSE] = "(?:" + src[NUMERICIDENTIFIERLOOSE] + "|" + src[NONNUMERICIDENTIFIER] + ")";
  var PRERELEASE = R15++;
  src[PRERELEASE] = "(?:-(" + src[PRERELEASEIDENTIFIER] + "(?:\\." + src[PRERELEASEIDENTIFIER] + ")*))";
  var PRERELEASELOOSE = R15++;
  src[PRERELEASELOOSE] = "(?:-?(" + src[PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + src[PRERELEASEIDENTIFIERLOOSE] + ")*))";
  var BUILDIDENTIFIER = R15++;
  src[BUILDIDENTIFIER] = "[0-9A-Za-z-]+";
  var BUILD = R15++;
  src[BUILD] = "(?:\\+(" + src[BUILDIDENTIFIER] + "(?:\\." + src[BUILDIDENTIFIER] + ")*))";
  var FULL = R15++;
  var FULLPLAIN = "v?" + src[MAINVERSION] + src[PRERELEASE] + "?" + src[BUILD] + "?";
  src[FULL] = "^" + FULLPLAIN + "$";
  var LOOSEPLAIN = "[v=\\s]*" + src[MAINVERSIONLOOSE] + src[PRERELEASELOOSE] + "?" + src[BUILD] + "?";
  var LOOSE = R15++;
  src[LOOSE] = "^" + LOOSEPLAIN + "$";
  var GTLT = R15++;
  src[GTLT] = "((?:<|>)?=?)";
  var XRANGEIDENTIFIERLOOSE = R15++;
  src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + "|x|X|\\*";
  var XRANGEIDENTIFIER = R15++;
  src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + "|x|X|\\*";
  var XRANGEPLAIN = R15++;
  src[XRANGEPLAIN] = "[v=\\s]*(" + src[XRANGEIDENTIFIER] + ")(?:\\.(" + src[XRANGEIDENTIFIER] + ")(?:\\.(" + src[XRANGEIDENTIFIER] + ")(?:" + src[PRERELEASE] + ")?" + src[BUILD] + "?)?)?";
  var XRANGEPLAINLOOSE = R15++;
  src[XRANGEPLAINLOOSE] = "[v=\\s]*(" + src[XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + src[XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + src[XRANGEIDENTIFIERLOOSE] + ")(?:" + src[PRERELEASELOOSE] + ")?" + src[BUILD] + "?)?)?";
  var XRANGE = R15++;
  src[XRANGE] = "^" + src[GTLT] + "\\s*" + src[XRANGEPLAIN] + "$";
  var XRANGELOOSE = R15++;
  src[XRANGELOOSE] = "^" + src[GTLT] + "\\s*" + src[XRANGEPLAINLOOSE] + "$";
  var COERCE = R15++;
  src[COERCE] = "(?:^|[^\\d])(\\d{1," + MAX_SAFE_COMPONENT_LENGTH + "})(?:\\.(\\d{1," + MAX_SAFE_COMPONENT_LENGTH + "}))?(?:\\.(\\d{1," + MAX_SAFE_COMPONENT_LENGTH + "}))?(?:$|[^\\d])";
  var LONETILDE = R15++;
  src[LONETILDE] = "(?:~>?)";
  var TILDETRIM = R15++;
  src[TILDETRIM] = "(\\s*)" + src[LONETILDE] + "\\s+";
  re[TILDETRIM] = new RegExp(src[TILDETRIM], "g");
  var tildeTrimReplace = "$1~";
  var TILDE = R15++;
  src[TILDE] = "^" + src[LONETILDE] + src[XRANGEPLAIN] + "$";
  var TILDELOOSE = R15++;
  src[TILDELOOSE] = "^" + src[LONETILDE] + src[XRANGEPLAINLOOSE] + "$";
  var LONECARET = R15++;
  src[LONECARET] = "(?:\\^)";
  var CARETTRIM = R15++;
  src[CARETTRIM] = "(\\s*)" + src[LONECARET] + "\\s+";
  re[CARETTRIM] = new RegExp(src[CARETTRIM], "g");
  var caretTrimReplace = "$1^";
  var CARET = R15++;
  src[CARET] = "^" + src[LONECARET] + src[XRANGEPLAIN] + "$";
  var CARETLOOSE = R15++;
  src[CARETLOOSE] = "^" + src[LONECARET] + src[XRANGEPLAINLOOSE] + "$";
  var COMPARATORLOOSE = R15++;
  src[COMPARATORLOOSE] = "^" + src[GTLT] + "\\s*(" + LOOSEPLAIN + ")$|^$";
  var COMPARATOR = R15++;
  src[COMPARATOR] = "^" + src[GTLT] + "\\s*(" + FULLPLAIN + ")$|^$";
  var COMPARATORTRIM = R15++;
  src[COMPARATORTRIM] = "(\\s*)" + src[GTLT] + "\\s*(" + LOOSEPLAIN + "|" + src[XRANGEPLAIN] + ")";
  re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], "g");
  var comparatorTrimReplace = "$1$2$3";
  var HYPHENRANGE = R15++;
  src[HYPHENRANGE] = "^\\s*(" + src[XRANGEPLAIN] + ")\\s+-\\s+(" + src[XRANGEPLAIN] + ")\\s*$";
  var HYPHENRANGELOOSE = R15++;
  src[HYPHENRANGELOOSE] = "^\\s*(" + src[XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + src[XRANGEPLAINLOOSE] + ")\\s*$";
  var STAR = R15++;
  src[STAR] = "(<|>)?=?\\s*\\*";
  for (var i = 0; i < R15; i++) {
    debug(i, src[i]);
    if (!re[i]) {
      re[i] = new RegExp(src[i]);
    }
  }
  exports.parse = parse;
  function parse(version, options) {
    if (!options || typeof options !== "object") {
      options = {
        loose: !!options,
        includePrerelease: false
      };
    }
    if (version instanceof SemVer) {
      return version;
    }
    if (typeof version !== "string") {
      return null;
    }
    if (version.length > MAX_LENGTH) {
      return null;
    }
    var r = options.loose ? re[LOOSE] : re[FULL];
    if (!r.test(version)) {
      return null;
    }
    try {
      return new SemVer(version, options);
    } catch (er) {
      return null;
    }
  }
  exports.valid = valid;
  function valid(version, options) {
    var v = parse(version, options);
    return v ? v.version : null;
  }
  exports.clean = clean;
  function clean(version, options) {
    var s = parse(version.trim().replace(/^[=v]+/, ""), options);
    return s ? s.version : null;
  }
  exports.SemVer = SemVer;
  function SemVer(version, options) {
    if (!options || typeof options !== "object") {
      options = {
        loose: !!options,
        includePrerelease: false
      };
    }
    if (version instanceof SemVer) {
      if (version.loose === options.loose) {
        return version;
      } else {
        version = version.version;
      }
    } else if (typeof version !== "string") {
      throw new TypeError("Invalid Version: " + version);
    }
    if (version.length > MAX_LENGTH) {
      throw new TypeError("version is longer than " + MAX_LENGTH + " characters");
    }
    if (!(this instanceof SemVer)) {
      return new SemVer(version, options);
    }
    debug("SemVer", version, options);
    this.options = options;
    this.loose = !!options.loose;
    var m = version.trim().match(options.loose ? re[LOOSE] : re[FULL]);
    if (!m) {
      throw new TypeError("Invalid Version: " + version);
    }
    this.raw = version;
    this.major = +m[1];
    this.minor = +m[2];
    this.patch = +m[3];
    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError("Invalid major version");
    }
    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError("Invalid minor version");
    }
    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError("Invalid patch version");
    }
    if (!m[4]) {
      this.prerelease = [];
    } else {
      this.prerelease = m[4].split(".").map(function(id) {
        if (/^[0-9]+$/.test(id)) {
          var num = +id;
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num;
          }
        }
        return id;
      });
    }
    this.build = m[5] ? m[5].split(".") : [];
    this.format();
  }
  SemVer.prototype.format = function() {
    this.version = this.major + "." + this.minor + "." + this.patch;
    if (this.prerelease.length) {
      this.version += "-" + this.prerelease.join(".");
    }
    return this.version;
  };
  SemVer.prototype.toString = function() {
    return this.version;
  };
  SemVer.prototype.compare = function(other) {
    debug("SemVer.compare", this.version, this.options, other);
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    return this.compareMain(other) || this.comparePre(other);
  };
  SemVer.prototype.compareMain = function(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
  };
  SemVer.prototype.comparePre = function(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    if (this.prerelease.length && !other.prerelease.length) {
      return -1;
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1;
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0;
    }
    var i2 = 0;
    do {
      var a = this.prerelease[i2];
      var b = other.prerelease[i2];
      debug("prerelease compare", i2, a, b);
      if (a === void 0 && b === void 0) {
        return 0;
      } else if (b === void 0) {
        return 1;
      } else if (a === void 0) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i2);
  };
  SemVer.prototype.inc = function(release, identifier) {
    switch (release) {
      case "premajor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc("pre", identifier);
        break;
      case "preminor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc("pre", identifier);
        break;
      case "prepatch":
        this.prerelease.length = 0;
        this.inc("patch", identifier);
        this.inc("pre", identifier);
        break;
      case "prerelease":
        if (this.prerelease.length === 0) {
          this.inc("patch", identifier);
        }
        this.inc("pre", identifier);
        break;
      case "major":
        if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
          this.major++;
        }
        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break;
      case "minor":
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++;
        }
        this.patch = 0;
        this.prerelease = [];
        break;
      case "patch":
        if (this.prerelease.length === 0) {
          this.patch++;
        }
        this.prerelease = [];
        break;
      case "pre":
        if (this.prerelease.length === 0) {
          this.prerelease = [0];
        } else {
          var i2 = this.prerelease.length;
          while (--i2 >= 0) {
            if (typeof this.prerelease[i2] === "number") {
              this.prerelease[i2]++;
              i2 = -2;
            }
          }
          if (i2 === -1) {
            this.prerelease.push(0);
          }
        }
        if (identifier) {
          if (this.prerelease[0] === identifier) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = [identifier, 0];
            }
          } else {
            this.prerelease = [identifier, 0];
          }
        }
        break;
      default:
        throw new Error("invalid increment argument: " + release);
    }
    this.format();
    this.raw = this.version;
    return this;
  };
  exports.inc = inc;
  function inc(version, release, loose, identifier) {
    if (typeof loose === "string") {
      identifier = loose;
      loose = void 0;
    }
    try {
      return new SemVer(version, loose).inc(release, identifier).version;
    } catch (er) {
      return null;
    }
  }
  exports.diff = diff;
  function diff(version1, version2) {
    if (eq(version1, version2)) {
      return null;
    } else {
      var v1 = parse(version1);
      var v2 = parse(version2);
      var prefix = "";
      if (v1.prerelease.length || v2.prerelease.length) {
        prefix = "pre";
        var defaultResult = "prerelease";
      }
      for (var key in v1) {
        if (key === "major" || key === "minor" || key === "patch") {
          if (v1[key] !== v2[key]) {
            return prefix + key;
          }
        }
      }
      return defaultResult;
    }
  }
  exports.compareIdentifiers = compareIdentifiers;
  var numeric = /^[0-9]+$/;
  function compareIdentifiers(a, b) {
    var anum = numeric.test(a);
    var bnum = numeric.test(b);
    if (anum && bnum) {
      a = +a;
      b = +b;
    }
    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
  }
  exports.rcompareIdentifiers = rcompareIdentifiers;
  function rcompareIdentifiers(a, b) {
    return compareIdentifiers(b, a);
  }
  exports.major = major;
  function major(a, loose) {
    return new SemVer(a, loose).major;
  }
  exports.minor = minor;
  function minor(a, loose) {
    return new SemVer(a, loose).minor;
  }
  exports.patch = patch;
  function patch(a, loose) {
    return new SemVer(a, loose).patch;
  }
  exports.compare = compare;
  function compare(a, b, loose) {
    return new SemVer(a, loose).compare(new SemVer(b, loose));
  }
  exports.compareLoose = compareLoose;
  function compareLoose(a, b) {
    return compare(a, b, true);
  }
  exports.rcompare = rcompare;
  function rcompare(a, b, loose) {
    return compare(b, a, loose);
  }
  exports.sort = sort;
  function sort(list, loose) {
    return list.sort(function(a, b) {
      return exports.compare(a, b, loose);
    });
  }
  exports.rsort = rsort;
  function rsort(list, loose) {
    return list.sort(function(a, b) {
      return exports.rcompare(a, b, loose);
    });
  }
  exports.gt = gt;
  function gt(a, b, loose) {
    return compare(a, b, loose) > 0;
  }
  exports.lt = lt;
  function lt(a, b, loose) {
    return compare(a, b, loose) < 0;
  }
  exports.eq = eq;
  function eq(a, b, loose) {
    return compare(a, b, loose) === 0;
  }
  exports.neq = neq;
  function neq(a, b, loose) {
    return compare(a, b, loose) !== 0;
  }
  exports.gte = gte;
  function gte(a, b, loose) {
    return compare(a, b, loose) >= 0;
  }
  exports.lte = lte;
  function lte(a, b, loose) {
    return compare(a, b, loose) <= 0;
  }
  exports.cmp = cmp;
  function cmp(a, op, b, loose) {
    switch (op) {
      case "===":
        if (typeof a === "object")
          a = a.version;
        if (typeof b === "object")
          b = b.version;
        return a === b;
      case "!==":
        if (typeof a === "object")
          a = a.version;
        if (typeof b === "object")
          b = b.version;
        return a !== b;
      case "":
      case "=":
      case "==":
        return eq(a, b, loose);
      case "!=":
        return neq(a, b, loose);
      case ">":
        return gt(a, b, loose);
      case ">=":
        return gte(a, b, loose);
      case "<":
        return lt(a, b, loose);
      case "<=":
        return lte(a, b, loose);
      default:
        throw new TypeError("Invalid operator: " + op);
    }
  }
  exports.Comparator = Comparator;
  function Comparator(comp, options) {
    if (!options || typeof options !== "object") {
      options = {
        loose: !!options,
        includePrerelease: false
      };
    }
    if (comp instanceof Comparator) {
      if (comp.loose === !!options.loose) {
        return comp;
      } else {
        comp = comp.value;
      }
    }
    if (!(this instanceof Comparator)) {
      return new Comparator(comp, options);
    }
    debug("comparator", comp, options);
    this.options = options;
    this.loose = !!options.loose;
    this.parse(comp);
    if (this.semver === ANY) {
      this.value = "";
    } else {
      this.value = this.operator + this.semver.version;
    }
    debug("comp", this);
  }
  var ANY = {};
  Comparator.prototype.parse = function(comp) {
    var r = this.options.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
    var m = comp.match(r);
    if (!m) {
      throw new TypeError("Invalid comparator: " + comp);
    }
    this.operator = m[1];
    if (this.operator === "=") {
      this.operator = "";
    }
    if (!m[2]) {
      this.semver = ANY;
    } else {
      this.semver = new SemVer(m[2], this.options.loose);
    }
  };
  Comparator.prototype.toString = function() {
    return this.value;
  };
  Comparator.prototype.test = function(version) {
    debug("Comparator.test", version, this.options.loose);
    if (this.semver === ANY) {
      return true;
    }
    if (typeof version === "string") {
      version = new SemVer(version, this.options);
    }
    return cmp(version, this.operator, this.semver, this.options);
  };
  Comparator.prototype.intersects = function(comp, options) {
    if (!(comp instanceof Comparator)) {
      throw new TypeError("a Comparator is required");
    }
    if (!options || typeof options !== "object") {
      options = {
        loose: !!options,
        includePrerelease: false
      };
    }
    var rangeTmp;
    if (this.operator === "") {
      rangeTmp = new Range(comp.value, options);
      return satisfies(this.value, rangeTmp, options);
    } else if (comp.operator === "") {
      rangeTmp = new Range(this.value, options);
      return satisfies(comp.semver, rangeTmp, options);
    }
    var sameDirectionIncreasing = (this.operator === ">=" || this.operator === ">") && (comp.operator === ">=" || comp.operator === ">");
    var sameDirectionDecreasing = (this.operator === "<=" || this.operator === "<") && (comp.operator === "<=" || comp.operator === "<");
    var sameSemVer = this.semver.version === comp.semver.version;
    var differentDirectionsInclusive = (this.operator === ">=" || this.operator === "<=") && (comp.operator === ">=" || comp.operator === "<=");
    var oppositeDirectionsLessThan = cmp(this.semver, "<", comp.semver, options) && ((this.operator === ">=" || this.operator === ">") && (comp.operator === "<=" || comp.operator === "<"));
    var oppositeDirectionsGreaterThan = cmp(this.semver, ">", comp.semver, options) && ((this.operator === "<=" || this.operator === "<") && (comp.operator === ">=" || comp.operator === ">"));
    return sameDirectionIncreasing || sameDirectionDecreasing || sameSemVer && differentDirectionsInclusive || oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
  };
  exports.Range = Range;
  function Range(range, options) {
    if (!options || typeof options !== "object") {
      options = {
        loose: !!options,
        includePrerelease: false
      };
    }
    if (range instanceof Range) {
      if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
        return range;
      } else {
        return new Range(range.raw, options);
      }
    }
    if (range instanceof Comparator) {
      return new Range(range.value, options);
    }
    if (!(this instanceof Range)) {
      return new Range(range, options);
    }
    this.options = options;
    this.loose = !!options.loose;
    this.includePrerelease = !!options.includePrerelease;
    this.raw = range;
    this.set = range.split(/\s*\|\|\s*/).map(function(range2) {
      return this.parseRange(range2.trim());
    }, this).filter(function(c) {
      return c.length;
    });
    if (!this.set.length) {
      throw new TypeError("Invalid SemVer Range: " + range);
    }
    this.format();
  }
  Range.prototype.format = function() {
    this.range = this.set.map(function(comps) {
      return comps.join(" ").trim();
    }).join("||").trim();
    return this.range;
  };
  Range.prototype.toString = function() {
    return this.range;
  };
  Range.prototype.parseRange = function(range) {
    var loose = this.options.loose;
    range = range.trim();
    var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
    range = range.replace(hr, hyphenReplace);
    debug("hyphen replace", range);
    range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
    debug("comparator trim", range, re[COMPARATORTRIM]);
    range = range.replace(re[TILDETRIM], tildeTrimReplace);
    range = range.replace(re[CARETTRIM], caretTrimReplace);
    range = range.split(/\s+/).join(" ");
    var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
    var set2 = range.split(" ").map(function(comp) {
      return parseComparator(comp, this.options);
    }, this).join(" ").split(/\s+/);
    if (this.options.loose) {
      set2 = set2.filter(function(comp) {
        return !!comp.match(compRe);
      });
    }
    set2 = set2.map(function(comp) {
      return new Comparator(comp, this.options);
    }, this);
    return set2;
  };
  Range.prototype.intersects = function(range, options) {
    if (!(range instanceof Range)) {
      throw new TypeError("a Range is required");
    }
    return this.set.some(function(thisComparators) {
      return thisComparators.every(function(thisComparator) {
        return range.set.some(function(rangeComparators) {
          return rangeComparators.every(function(rangeComparator) {
            return thisComparator.intersects(rangeComparator, options);
          });
        });
      });
    });
  };
  exports.toComparators = toComparators;
  function toComparators(range, options) {
    return new Range(range, options).set.map(function(comp) {
      return comp.map(function(c) {
        return c.value;
      }).join(" ").trim().split(" ");
    });
  }
  function parseComparator(comp, options) {
    debug("comp", comp, options);
    comp = replaceCarets(comp, options);
    debug("caret", comp);
    comp = replaceTildes(comp, options);
    debug("tildes", comp);
    comp = replaceXRanges(comp, options);
    debug("xrange", comp);
    comp = replaceStars(comp, options);
    debug("stars", comp);
    return comp;
  }
  function isX(id) {
    return !id || id.toLowerCase() === "x" || id === "*";
  }
  function replaceTildes(comp, options) {
    return comp.trim().split(/\s+/).map(function(comp2) {
      return replaceTilde(comp2, options);
    }).join(" ");
  }
  function replaceTilde(comp, options) {
    var r = options.loose ? re[TILDELOOSE] : re[TILDE];
    return comp.replace(r, function(_, M, m, p, pr) {
      debug("tilde", comp, _, M, m, p, pr);
      var ret;
      if (isX(M)) {
        ret = "";
      } else if (isX(m)) {
        ret = ">=" + M + ".0.0 <" + (+M + 1) + ".0.0";
      } else if (isX(p)) {
        ret = ">=" + M + "." + m + ".0 <" + M + "." + (+m + 1) + ".0";
      } else if (pr) {
        debug("replaceTilde pr", pr);
        ret = ">=" + M + "." + m + "." + p + "-" + pr + " <" + M + "." + (+m + 1) + ".0";
      } else {
        ret = ">=" + M + "." + m + "." + p + " <" + M + "." + (+m + 1) + ".0";
      }
      debug("tilde return", ret);
      return ret;
    });
  }
  function replaceCarets(comp, options) {
    return comp.trim().split(/\s+/).map(function(comp2) {
      return replaceCaret(comp2, options);
    }).join(" ");
  }
  function replaceCaret(comp, options) {
    debug("caret", comp, options);
    var r = options.loose ? re[CARETLOOSE] : re[CARET];
    return comp.replace(r, function(_, M, m, p, pr) {
      debug("caret", comp, _, M, m, p, pr);
      var ret;
      if (isX(M)) {
        ret = "";
      } else if (isX(m)) {
        ret = ">=" + M + ".0.0 <" + (+M + 1) + ".0.0";
      } else if (isX(p)) {
        if (M === "0") {
          ret = ">=" + M + "." + m + ".0 <" + M + "." + (+m + 1) + ".0";
        } else {
          ret = ">=" + M + "." + m + ".0 <" + (+M + 1) + ".0.0";
        }
      } else if (pr) {
        debug("replaceCaret pr", pr);
        if (M === "0") {
          if (m === "0") {
            ret = ">=" + M + "." + m + "." + p + "-" + pr + " <" + M + "." + m + "." + (+p + 1);
          } else {
            ret = ">=" + M + "." + m + "." + p + "-" + pr + " <" + M + "." + (+m + 1) + ".0";
          }
        } else {
          ret = ">=" + M + "." + m + "." + p + "-" + pr + " <" + (+M + 1) + ".0.0";
        }
      } else {
        debug("no pr");
        if (M === "0") {
          if (m === "0") {
            ret = ">=" + M + "." + m + "." + p + " <" + M + "." + m + "." + (+p + 1);
          } else {
            ret = ">=" + M + "." + m + "." + p + " <" + M + "." + (+m + 1) + ".0";
          }
        } else {
          ret = ">=" + M + "." + m + "." + p + " <" + (+M + 1) + ".0.0";
        }
      }
      debug("caret return", ret);
      return ret;
    });
  }
  function replaceXRanges(comp, options) {
    debug("replaceXRanges", comp, options);
    return comp.split(/\s+/).map(function(comp2) {
      return replaceXRange(comp2, options);
    }).join(" ");
  }
  function replaceXRange(comp, options) {
    comp = comp.trim();
    var r = options.loose ? re[XRANGELOOSE] : re[XRANGE];
    return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
      debug("xRange", comp, ret, gtlt, M, m, p, pr);
      var xM = isX(M);
      var xm = xM || isX(m);
      var xp = xm || isX(p);
      var anyX = xp;
      if (gtlt === "=" && anyX) {
        gtlt = "";
      }
      if (xM) {
        if (gtlt === ">" || gtlt === "<") {
          ret = "<0.0.0";
        } else {
          ret = "*";
        }
      } else if (gtlt && anyX) {
        if (xm) {
          m = 0;
        }
        p = 0;
        if (gtlt === ">") {
          gtlt = ">=";
          if (xm) {
            M = +M + 1;
            m = 0;
            p = 0;
          } else {
            m = +m + 1;
            p = 0;
          }
        } else if (gtlt === "<=") {
          gtlt = "<";
          if (xm) {
            M = +M + 1;
          } else {
            m = +m + 1;
          }
        }
        ret = gtlt + M + "." + m + "." + p;
      } else if (xm) {
        ret = ">=" + M + ".0.0 <" + (+M + 1) + ".0.0";
      } else if (xp) {
        ret = ">=" + M + "." + m + ".0 <" + M + "." + (+m + 1) + ".0";
      }
      debug("xRange return", ret);
      return ret;
    });
  }
  function replaceStars(comp, options) {
    debug("replaceStars", comp, options);
    return comp.trim().replace(re[STAR], "");
  }
  function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {
    if (isX(fM)) {
      from = "";
    } else if (isX(fm)) {
      from = ">=" + fM + ".0.0";
    } else if (isX(fp)) {
      from = ">=" + fM + "." + fm + ".0";
    } else {
      from = ">=" + from;
    }
    if (isX(tM)) {
      to = "";
    } else if (isX(tm)) {
      to = "<" + (+tM + 1) + ".0.0";
    } else if (isX(tp)) {
      to = "<" + tM + "." + (+tm + 1) + ".0";
    } else if (tpr) {
      to = "<=" + tM + "." + tm + "." + tp + "-" + tpr;
    } else {
      to = "<=" + to;
    }
    return (from + " " + to).trim();
  }
  Range.prototype.test = function(version) {
    if (!version) {
      return false;
    }
    if (typeof version === "string") {
      version = new SemVer(version, this.options);
    }
    for (var i2 = 0; i2 < this.set.length; i2++) {
      if (testSet(this.set[i2], version, this.options)) {
        return true;
      }
    }
    return false;
  };
  function testSet(set2, version, options) {
    for (var i2 = 0; i2 < set2.length; i2++) {
      if (!set2[i2].test(version)) {
        return false;
      }
    }
    if (version.prerelease.length && !options.includePrerelease) {
      for (i2 = 0; i2 < set2.length; i2++) {
        debug(set2[i2].semver);
        if (set2[i2].semver === ANY) {
          continue;
        }
        if (set2[i2].semver.prerelease.length > 0) {
          var allowed = set2[i2].semver;
          if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
            return true;
          }
        }
      }
      return false;
    }
    return true;
  }
  exports.satisfies = satisfies;
  function satisfies(version, range, options) {
    try {
      range = new Range(range, options);
    } catch (er) {
      return false;
    }
    return range.test(version);
  }
  exports.maxSatisfying = maxSatisfying;
  function maxSatisfying(versions, range, options) {
    var max = null;
    var maxSV = null;
    try {
      var rangeObj = new Range(range, options);
    } catch (er) {
      return null;
    }
    versions.forEach(function(v) {
      if (rangeObj.test(v)) {
        if (!max || maxSV.compare(v) === -1) {
          max = v;
          maxSV = new SemVer(max, options);
        }
      }
    });
    return max;
  }
  exports.minSatisfying = minSatisfying;
  function minSatisfying(versions, range, options) {
    var min = null;
    var minSV = null;
    try {
      var rangeObj = new Range(range, options);
    } catch (er) {
      return null;
    }
    versions.forEach(function(v) {
      if (rangeObj.test(v)) {
        if (!min || minSV.compare(v) === 1) {
          min = v;
          minSV = new SemVer(min, options);
        }
      }
    });
    return min;
  }
  exports.minVersion = minVersion;
  function minVersion(range, loose) {
    range = new Range(range, loose);
    var minver = new SemVer("0.0.0");
    if (range.test(minver)) {
      return minver;
    }
    minver = new SemVer("0.0.0-0");
    if (range.test(minver)) {
      return minver;
    }
    minver = null;
    for (var i2 = 0; i2 < range.set.length; ++i2) {
      var comparators = range.set[i2];
      comparators.forEach(function(comparator) {
        var compver = new SemVer(comparator.semver.version);
        switch (comparator.operator) {
          case ">":
            if (compver.prerelease.length === 0) {
              compver.patch++;
            } else {
              compver.prerelease.push(0);
            }
            compver.raw = compver.format();
          case "":
          case ">=":
            if (!minver || gt(minver, compver)) {
              minver = compver;
            }
            break;
          case "<":
          case "<=":
            break;
          default:
            throw new Error("Unexpected operation: " + comparator.operator);
        }
      });
    }
    if (minver && range.test(minver)) {
      return minver;
    }
    return null;
  }
  exports.validRange = validRange;
  function validRange(range, options) {
    try {
      return new Range(range, options).range || "*";
    } catch (er) {
      return null;
    }
  }
  exports.ltr = ltr;
  function ltr(version, range, options) {
    return outside(version, range, "<", options);
  }
  exports.gtr = gtr;
  function gtr(version, range, options) {
    return outside(version, range, ">", options);
  }
  exports.outside = outside;
  function outside(version, range, hilo, options) {
    version = new SemVer(version, options);
    range = new Range(range, options);
    var gtfn, ltefn, ltfn, comp, ecomp;
    switch (hilo) {
      case ">":
        gtfn = gt;
        ltefn = lte;
        ltfn = lt;
        comp = ">";
        ecomp = ">=";
        break;
      case "<":
        gtfn = lt;
        ltefn = gte;
        ltfn = gt;
        comp = "<";
        ecomp = "<=";
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (satisfies(version, range, options)) {
      return false;
    }
    for (var i2 = 0; i2 < range.set.length; ++i2) {
      var comparators = range.set[i2];
      var high = null;
      var low = null;
      comparators.forEach(function(comparator) {
        if (comparator.semver === ANY) {
          comparator = new Comparator(">=0.0.0");
        }
        high = high || comparator;
        low = low || comparator;
        if (gtfn(comparator.semver, high.semver, options)) {
          high = comparator;
        } else if (ltfn(comparator.semver, low.semver, options)) {
          low = comparator;
        }
      });
      if (high.operator === comp || high.operator === ecomp) {
        return false;
      }
      if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
        return false;
      } else if (low.operator === ecomp && ltfn(version, low.semver)) {
        return false;
      }
    }
    return true;
  }
  exports.prerelease = prerelease;
  function prerelease(version, options) {
    var parsed = parse(version, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
  }
  exports.intersects = intersects;
  function intersects(r1, r2, options) {
    r1 = new Range(r1, options);
    r2 = new Range(r2, options);
    return r1.intersects(r2);
  }
  exports.coerce = coerce;
  function coerce(version) {
    if (version instanceof SemVer) {
      return version;
    }
    if (typeof version !== "string") {
      return null;
    }
    var match = version.match(re[COERCE]);
    if (match == null) {
      return null;
    }
    return parse(match[1] + "." + (match[2] || "0") + "." + (match[3] || "0"));
  }
});

// node_modules/jsonwebtoken/lib/psSupported.js
var require_psSupported = __commonJS((exports, module) => {
  var semver = require_semver();
  module.exports = semver.satisfies(process.version, "^6.12.0 || >=8.0.0");
});

// node_modules/jsonwebtoken/verify.js
var require_verify = __commonJS((exports, module) => {
  var JsonWebTokenError = require_JsonWebTokenError();
  var NotBeforeError = require_NotBeforeError();
  var TokenExpiredError = require_TokenExpiredError();
  var decode = require_decode();
  var timespan = require_timespan();
  var PS_SUPPORTED = require_psSupported();
  var jws = require_jws();
  var PUB_KEY_ALGS = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512"];
  var RSA_KEY_ALGS = ["RS256", "RS384", "RS512"];
  var HS_ALGS = ["HS256", "HS384", "HS512"];
  if (PS_SUPPORTED) {
    PUB_KEY_ALGS.splice(3, 0, "PS256", "PS384", "PS512");
    RSA_KEY_ALGS.splice(3, 0, "PS256", "PS384", "PS512");
  }
  module.exports = function(jwtString, secretOrPublicKey, options, callback) {
    if (typeof options === "function" && !callback) {
      callback = options;
      options = {};
    }
    if (!options) {
      options = {};
    }
    options = Object.assign({}, options);
    var done;
    if (callback) {
      done = callback;
    } else {
      done = function(err, data2) {
        if (err)
          throw err;
        return data2;
      };
    }
    if (options.clockTimestamp && typeof options.clockTimestamp !== "number") {
      return done(new JsonWebTokenError("clockTimestamp must be a number"));
    }
    if (options.nonce !== void 0 && (typeof options.nonce !== "string" || options.nonce.trim() === "")) {
      return done(new JsonWebTokenError("nonce must be a non-empty string"));
    }
    var clockTimestamp = options.clockTimestamp || Math.floor(Date.now() / 1e3);
    if (!jwtString) {
      return done(new JsonWebTokenError("jwt must be provided"));
    }
    if (typeof jwtString !== "string") {
      return done(new JsonWebTokenError("jwt must be a string"));
    }
    var parts = jwtString.split(".");
    if (parts.length !== 3) {
      return done(new JsonWebTokenError("jwt malformed"));
    }
    var decodedToken;
    try {
      decodedToken = decode(jwtString, {complete: true});
    } catch (err) {
      return done(err);
    }
    if (!decodedToken) {
      return done(new JsonWebTokenError("invalid token"));
    }
    var header = decodedToken.header;
    var getSecret;
    if (typeof secretOrPublicKey === "function") {
      if (!callback) {
        return done(new JsonWebTokenError("verify must be called asynchronous if secret or public key is provided as a callback"));
      }
      getSecret = secretOrPublicKey;
    } else {
      getSecret = function(header2, secretCallback) {
        return secretCallback(null, secretOrPublicKey);
      };
    }
    return getSecret(header, function(err, secretOrPublicKey2) {
      if (err) {
        return done(new JsonWebTokenError("error in secret or public key callback: " + err.message));
      }
      var hasSignature = parts[2].trim() !== "";
      if (!hasSignature && secretOrPublicKey2) {
        return done(new JsonWebTokenError("jwt signature is required"));
      }
      if (hasSignature && !secretOrPublicKey2) {
        return done(new JsonWebTokenError("secret or public key must be provided"));
      }
      if (!hasSignature && !options.algorithms) {
        options.algorithms = ["none"];
      }
      if (!options.algorithms) {
        options.algorithms = ~secretOrPublicKey2.toString().indexOf("BEGIN CERTIFICATE") || ~secretOrPublicKey2.toString().indexOf("BEGIN PUBLIC KEY") ? PUB_KEY_ALGS : ~secretOrPublicKey2.toString().indexOf("BEGIN RSA PUBLIC KEY") ? RSA_KEY_ALGS : HS_ALGS;
      }
      if (!~options.algorithms.indexOf(decodedToken.header.alg)) {
        return done(new JsonWebTokenError("invalid algorithm"));
      }
      var valid;
      try {
        valid = jws.verify(jwtString, decodedToken.header.alg, secretOrPublicKey2);
      } catch (e) {
        return done(e);
      }
      if (!valid) {
        return done(new JsonWebTokenError("invalid signature"));
      }
      var payload = decodedToken.payload;
      if (typeof payload.nbf !== "undefined" && !options.ignoreNotBefore) {
        if (typeof payload.nbf !== "number") {
          return done(new JsonWebTokenError("invalid nbf value"));
        }
        if (payload.nbf > clockTimestamp + (options.clockTolerance || 0)) {
          return done(new NotBeforeError("jwt not active", new Date(payload.nbf * 1e3)));
        }
      }
      if (typeof payload.exp !== "undefined" && !options.ignoreExpiration) {
        if (typeof payload.exp !== "number") {
          return done(new JsonWebTokenError("invalid exp value"));
        }
        if (clockTimestamp >= payload.exp + (options.clockTolerance || 0)) {
          return done(new TokenExpiredError("jwt expired", new Date(payload.exp * 1e3)));
        }
      }
      if (options.audience) {
        var audiences = Array.isArray(options.audience) ? options.audience : [options.audience];
        var target = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
        var match = target.some(function(targetAudience) {
          return audiences.some(function(audience) {
            return audience instanceof RegExp ? audience.test(targetAudience) : audience === targetAudience;
          });
        });
        if (!match) {
          return done(new JsonWebTokenError("jwt audience invalid. expected: " + audiences.join(" or ")));
        }
      }
      if (options.issuer) {
        var invalid_issuer = typeof options.issuer === "string" && payload.iss !== options.issuer || Array.isArray(options.issuer) && options.issuer.indexOf(payload.iss) === -1;
        if (invalid_issuer) {
          return done(new JsonWebTokenError("jwt issuer invalid. expected: " + options.issuer));
        }
      }
      if (options.subject) {
        if (payload.sub !== options.subject) {
          return done(new JsonWebTokenError("jwt subject invalid. expected: " + options.subject));
        }
      }
      if (options.jwtid) {
        if (payload.jti !== options.jwtid) {
          return done(new JsonWebTokenError("jwt jwtid invalid. expected: " + options.jwtid));
        }
      }
      if (options.nonce) {
        if (payload.nonce !== options.nonce) {
          return done(new JsonWebTokenError("jwt nonce invalid. expected: " + options.nonce));
        }
      }
      if (options.maxAge) {
        if (typeof payload.iat !== "number") {
          return done(new JsonWebTokenError("iat required when maxAge is specified"));
        }
        var maxAgeTimestamp = timespan(options.maxAge, payload.iat);
        if (typeof maxAgeTimestamp === "undefined") {
          return done(new JsonWebTokenError('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        }
        if (clockTimestamp >= maxAgeTimestamp + (options.clockTolerance || 0)) {
          return done(new TokenExpiredError("maxAge exceeded", new Date(maxAgeTimestamp * 1e3)));
        }
      }
      if (options.complete === true) {
        var signature = decodedToken.signature;
        return done(null, {
          header,
          payload,
          signature
        });
      }
      return done(null, payload);
    });
  };
});

// node_modules/lodash.includes/index.js
var require_lodash = __commonJS((exports, module) => {
  var INFINITY = 1 / 0;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var MAX_INTEGER = 17976931348623157e292;
  var NAN = 0 / 0;
  var argsTag = "[object Arguments]";
  var funcTag = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var stringTag = "[object String]";
  var symbolTag = "[object Symbol]";
  var reTrim = /^\s+|\s+$/g;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  var freeParseInt = parseInt;
  function arrayMap(array, iteratee) {
    var index = -1, length = array ? array.length : 0, result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
    while (fromRight ? index-- : ++index < length) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }
  function baseIndexOf(array, value, fromIndex) {
    if (value !== value) {
      return baseFindIndex(array, baseIsNaN, fromIndex);
    }
    var index = fromIndex - 1, length = array.length;
    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }
  function baseIsNaN(value) {
    return value !== value;
  }
  function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objectToString = objectProto.toString;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  var nativeKeys = overArg(Object.keys, Object);
  var nativeMax = Math.max;
  function arrayLikeKeys(value, inherited) {
    var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
    var length = result.length, skipIndexes = !!length;
    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  function includes(collection, value, fromIndex, guard) {
    collection = isArrayLike(collection) ? collection : values(collection);
    fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
    var length = collection.length;
    if (fromIndex < 0) {
      fromIndex = nativeMax(length + fromIndex, 0);
    }
    return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
  }
  function isArguments(value) {
    return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
  }
  var isArray = Array.isArray;
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }
  function isFunction(value) {
    var tag = isObject(value) ? objectToString.call(value) : "";
    return tag == funcTag || tag == genTag;
  }
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == "object" || type == "function");
  }
  function isObjectLike(value) {
    return !!value && typeof value == "object";
  }
  function isString(value) {
    return typeof value == "string" || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
  }
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
  }
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
      var sign = value < 0 ? -1 : 1;
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }
  function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
  }
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, "");
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  function values(object) {
    return object ? baseValues(object, keys(object)) : [];
  }
  module.exports = includes;
});

// node_modules/lodash.isboolean/index.js
var require_lodash2 = __commonJS((exports, module) => {
  var boolTag = "[object Boolean]";
  var objectProto = Object.prototype;
  var objectToString = objectProto.toString;
  function isBoolean(value) {
    return value === true || value === false || isObjectLike(value) && objectToString.call(value) == boolTag;
  }
  function isObjectLike(value) {
    return !!value && typeof value == "object";
  }
  module.exports = isBoolean;
});

// node_modules/lodash.isinteger/index.js
var require_lodash3 = __commonJS((exports, module) => {
  var INFINITY = 1 / 0;
  var MAX_INTEGER = 17976931348623157e292;
  var NAN = 0 / 0;
  var symbolTag = "[object Symbol]";
  var reTrim = /^\s+|\s+$/g;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  var objectProto = Object.prototype;
  var objectToString = objectProto.toString;
  function isInteger(value) {
    return typeof value == "number" && value == toInteger(value);
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == "object" || type == "function");
  }
  function isObjectLike(value) {
    return !!value && typeof value == "object";
  }
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
  }
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
      var sign = value < 0 ? -1 : 1;
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }
  function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
  }
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, "");
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  module.exports = isInteger;
});

// node_modules/lodash.isnumber/index.js
var require_lodash4 = __commonJS((exports, module) => {
  var numberTag = "[object Number]";
  var objectProto = Object.prototype;
  var objectToString = objectProto.toString;
  function isObjectLike(value) {
    return !!value && typeof value == "object";
  }
  function isNumber(value) {
    return typeof value == "number" || isObjectLike(value) && objectToString.call(value) == numberTag;
  }
  module.exports = isNumber;
});

// node_modules/lodash.isplainobject/index.js
var require_lodash5 = __commonJS((exports, module) => {
  var objectTag = "[object Object]";
  function isHostObject(value) {
    var result = false;
    if (value != null && typeof value.toString != "function") {
      try {
        result = !!(value + "");
      } catch (e) {
      }
    }
    return result;
  }
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  var funcProto = Function.prototype;
  var objectProto = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objectCtorString = funcToString.call(Object);
  var objectToString = objectProto.toString;
  var getPrototype = overArg(Object.getPrototypeOf, Object);
  function isObjectLike(value) {
    return !!value && typeof value == "object";
  }
  function isPlainObject(value) {
    if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  module.exports = isPlainObject;
});

// node_modules/lodash.isstring/index.js
var require_lodash6 = __commonJS((exports, module) => {
  var stringTag = "[object String]";
  var objectProto = Object.prototype;
  var objectToString = objectProto.toString;
  var isArray = Array.isArray;
  function isObjectLike(value) {
    return !!value && typeof value == "object";
  }
  function isString(value) {
    return typeof value == "string" || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
  }
  module.exports = isString;
});

// node_modules/lodash.once/index.js
var require_lodash7 = __commonJS((exports, module) => {
  var FUNC_ERROR_TEXT = "Expected a function";
  var INFINITY = 1 / 0;
  var MAX_INTEGER = 17976931348623157e292;
  var NAN = 0 / 0;
  var symbolTag = "[object Symbol]";
  var reTrim = /^\s+|\s+$/g;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  var objectProto = Object.prototype;
  var objectToString = objectProto.toString;
  function before(n, func) {
    var result;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    n = toInteger(n);
    return function() {
      if (--n > 0) {
        result = func.apply(this, arguments);
      }
      if (n <= 1) {
        func = void 0;
      }
      return result;
    };
  }
  function once(func) {
    return before(2, func);
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == "object" || type == "function");
  }
  function isObjectLike(value) {
    return !!value && typeof value == "object";
  }
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
  }
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
      var sign = value < 0 ? -1 : 1;
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }
  function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
  }
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, "");
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  module.exports = once;
});

// node_modules/jsonwebtoken/sign.js
var require_sign = __commonJS((exports, module) => {
  var timespan = require_timespan();
  var PS_SUPPORTED = require_psSupported();
  var jws = require_jws();
  var includes = require_lodash();
  var isBoolean = require_lodash2();
  var isInteger = require_lodash3();
  var isNumber = require_lodash4();
  var isPlainObject = require_lodash5();
  var isString = require_lodash6();
  var once = require_lodash7();
  var SUPPORTED_ALGS = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "none"];
  if (PS_SUPPORTED) {
    SUPPORTED_ALGS.splice(3, 0, "PS256", "PS384", "PS512");
  }
  var sign_options_schema = {
    expiresIn: {isValid: function(value) {
      return isInteger(value) || isString(value) && value;
    }, message: '"expiresIn" should be a number of seconds or string representing a timespan'},
    notBefore: {isValid: function(value) {
      return isInteger(value) || isString(value) && value;
    }, message: '"notBefore" should be a number of seconds or string representing a timespan'},
    audience: {isValid: function(value) {
      return isString(value) || Array.isArray(value);
    }, message: '"audience" must be a string or array'},
    algorithm: {isValid: includes.bind(null, SUPPORTED_ALGS), message: '"algorithm" must be a valid string enum value'},
    header: {isValid: isPlainObject, message: '"header" must be an object'},
    encoding: {isValid: isString, message: '"encoding" must be a string'},
    issuer: {isValid: isString, message: '"issuer" must be a string'},
    subject: {isValid: isString, message: '"subject" must be a string'},
    jwtid: {isValid: isString, message: '"jwtid" must be a string'},
    noTimestamp: {isValid: isBoolean, message: '"noTimestamp" must be a boolean'},
    keyid: {isValid: isString, message: '"keyid" must be a string'},
    mutatePayload: {isValid: isBoolean, message: '"mutatePayload" must be a boolean'}
  };
  var registered_claims_schema = {
    iat: {isValid: isNumber, message: '"iat" should be a number of seconds'},
    exp: {isValid: isNumber, message: '"exp" should be a number of seconds'},
    nbf: {isValid: isNumber, message: '"nbf" should be a number of seconds'}
  };
  function validate(schema, allowUnknown, object, parameterName) {
    if (!isPlainObject(object)) {
      throw new Error('Expected "' + parameterName + '" to be a plain object.');
    }
    Object.keys(object).forEach(function(key) {
      var validator = schema[key];
      if (!validator) {
        if (!allowUnknown) {
          throw new Error('"' + key + '" is not allowed in "' + parameterName + '"');
        }
        return;
      }
      if (!validator.isValid(object[key])) {
        throw new Error(validator.message);
      }
    });
  }
  function validateOptions(options) {
    return validate(sign_options_schema, false, options, "options");
  }
  function validatePayload(payload) {
    return validate(registered_claims_schema, true, payload, "payload");
  }
  var options_to_payload = {
    audience: "aud",
    issuer: "iss",
    subject: "sub",
    jwtid: "jti"
  };
  var options_for_objects = [
    "expiresIn",
    "notBefore",
    "noTimestamp",
    "audience",
    "issuer",
    "subject",
    "jwtid"
  ];
  module.exports = function(payload, secretOrPrivateKey, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = {};
    } else {
      options = options || {};
    }
    var isObjectPayload = typeof payload === "object" && !Buffer.isBuffer(payload);
    var header = Object.assign({
      alg: options.algorithm || "HS256",
      typ: isObjectPayload ? "JWT" : void 0,
      kid: options.keyid
    }, options.header);
    function failure(err) {
      if (callback) {
        return callback(err);
      }
      throw err;
    }
    if (!secretOrPrivateKey && options.algorithm !== "none") {
      return failure(new Error("secretOrPrivateKey must have a value"));
    }
    if (typeof payload === "undefined") {
      return failure(new Error("payload is required"));
    } else if (isObjectPayload) {
      try {
        validatePayload(payload);
      } catch (error) {
        return failure(error);
      }
      if (!options.mutatePayload) {
        payload = Object.assign({}, payload);
      }
    } else {
      var invalid_options = options_for_objects.filter(function(opt) {
        return typeof options[opt] !== "undefined";
      });
      if (invalid_options.length > 0) {
        return failure(new Error("invalid " + invalid_options.join(",") + " option for " + typeof payload + " payload"));
      }
    }
    if (typeof payload.exp !== "undefined" && typeof options.expiresIn !== "undefined") {
      return failure(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
    }
    if (typeof payload.nbf !== "undefined" && typeof options.notBefore !== "undefined") {
      return failure(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
    }
    try {
      validateOptions(options);
    } catch (error) {
      return failure(error);
    }
    var timestamp = payload.iat || Math.floor(Date.now() / 1e3);
    if (options.noTimestamp) {
      delete payload.iat;
    } else if (isObjectPayload) {
      payload.iat = timestamp;
    }
    if (typeof options.notBefore !== "undefined") {
      try {
        payload.nbf = timespan(options.notBefore, timestamp);
      } catch (err) {
        return failure(err);
      }
      if (typeof payload.nbf === "undefined") {
        return failure(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
      }
    }
    if (typeof options.expiresIn !== "undefined" && typeof payload === "object") {
      try {
        payload.exp = timespan(options.expiresIn, timestamp);
      } catch (err) {
        return failure(err);
      }
      if (typeof payload.exp === "undefined") {
        return failure(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
      }
    }
    Object.keys(options_to_payload).forEach(function(key) {
      var claim = options_to_payload[key];
      if (typeof options[key] !== "undefined") {
        if (typeof payload[claim] !== "undefined") {
          return failure(new Error('Bad "options.' + key + '" option. The payload already has an "' + claim + '" property.'));
        }
        payload[claim] = options[key];
      }
    });
    var encoding = options.encoding || "utf8";
    if (typeof callback === "function") {
      callback = callback && once(callback);
      jws.createSign({
        header,
        privateKey: secretOrPrivateKey,
        payload,
        encoding
      }).once("error", callback).once("done", function(signature) {
        callback(null, signature);
      });
    } else {
      return jws.sign({header, payload, secret: secretOrPrivateKey, encoding});
    }
  };
});

// node_modules/jsonwebtoken/index.js
var require_jsonwebtoken = __commonJS((exports, module) => {
  module.exports = {
    decode: require_decode(),
    verify: require_verify(),
    sign: require_sign(),
    JsonWebTokenError: require_JsonWebTokenError(),
    NotBeforeError: require_NotBeforeError(),
    TokenExpiredError: require_TokenExpiredError()
  };
});

// node_modules/node-fetch/lib/index.js
var require_lib = __commonJS((exports, module) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {value: true});
  function _interopDefault(ex) {
    return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
  }
  var Stream = _interopDefault(require("stream"));
  var http = _interopDefault(require("http"));
  var Url = _interopDefault(require("url"));
  var https = _interopDefault(require("https"));
  var zlib = _interopDefault(require("zlib"));
  var Readable = Stream.Readable;
  var BUFFER = Symbol("buffer");
  var TYPE = Symbol("type");
  var Blob = class {
    constructor() {
      this[TYPE] = "";
      const blobParts = arguments[0];
      const options = arguments[1];
      const buffers = [];
      let size = 0;
      if (blobParts) {
        const a = blobParts;
        const length = Number(a.length);
        for (let i = 0; i < length; i++) {
          const element = a[i];
          let buffer;
          if (element instanceof Buffer) {
            buffer = element;
          } else if (ArrayBuffer.isView(element)) {
            buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
          } else if (element instanceof ArrayBuffer) {
            buffer = Buffer.from(element);
          } else if (element instanceof Blob) {
            buffer = element[BUFFER];
          } else {
            buffer = Buffer.from(typeof element === "string" ? element : String(element));
          }
          size += buffer.length;
          buffers.push(buffer);
        }
      }
      this[BUFFER] = Buffer.concat(buffers);
      let type = options && options.type !== void 0 && String(options.type).toLowerCase();
      if (type && !/[^\u0020-\u007E]/.test(type)) {
        this[TYPE] = type;
      }
    }
    get size() {
      return this[BUFFER].length;
    }
    get type() {
      return this[TYPE];
    }
    text() {
      return Promise.resolve(this[BUFFER].toString());
    }
    arrayBuffer() {
      const buf = this[BUFFER];
      const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
      return Promise.resolve(ab);
    }
    stream() {
      const readable = new Readable();
      readable._read = function() {
      };
      readable.push(this[BUFFER]);
      readable.push(null);
      return readable;
    }
    toString() {
      return "[object Blob]";
    }
    slice() {
      const size = this.size;
      const start = arguments[0];
      const end = arguments[1];
      let relativeStart, relativeEnd;
      if (start === void 0) {
        relativeStart = 0;
      } else if (start < 0) {
        relativeStart = Math.max(size + start, 0);
      } else {
        relativeStart = Math.min(start, size);
      }
      if (end === void 0) {
        relativeEnd = size;
      } else if (end < 0) {
        relativeEnd = Math.max(size + end, 0);
      } else {
        relativeEnd = Math.min(end, size);
      }
      const span = Math.max(relativeEnd - relativeStart, 0);
      const buffer = this[BUFFER];
      const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
      const blob = new Blob([], {type: arguments[2]});
      blob[BUFFER] = slicedBuffer;
      return blob;
    }
  };
  Object.defineProperties(Blob.prototype, {
    size: {enumerable: true},
    type: {enumerable: true},
    slice: {enumerable: true}
  });
  Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
    value: "Blob",
    writable: false,
    enumerable: false,
    configurable: true
  });
  function FetchError(message, type, systemError) {
    Error.call(this, message);
    this.message = message;
    this.type = type;
    if (systemError) {
      this.code = this.errno = systemError.code;
    }
    Error.captureStackTrace(this, this.constructor);
  }
  FetchError.prototype = Object.create(Error.prototype);
  FetchError.prototype.constructor = FetchError;
  FetchError.prototype.name = "FetchError";
  var convert;
  try {
    convert = require("encoding").convert;
  } catch (e) {
  }
  var INTERNALS = Symbol("Body internals");
  var PassThrough = Stream.PassThrough;
  function Body(body) {
    var _this = this;
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$size = _ref.size;
    let size = _ref$size === void 0 ? 0 : _ref$size;
    var _ref$timeout = _ref.timeout;
    let timeout = _ref$timeout === void 0 ? 0 : _ref$timeout;
    if (body == null) {
      body = null;
    } else if (isURLSearchParams(body)) {
      body = Buffer.from(body.toString());
    } else if (isBlob(body))
      ;
    else if (Buffer.isBuffer(body))
      ;
    else if (Object.prototype.toString.call(body) === "[object ArrayBuffer]") {
      body = Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
      body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof Stream)
      ;
    else {
      body = Buffer.from(String(body));
    }
    this[INTERNALS] = {
      body,
      disturbed: false,
      error: null
    };
    this.size = size;
    this.timeout = timeout;
    if (body instanceof Stream) {
      body.on("error", function(err) {
        const error = err.name === "AbortError" ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, "system", err);
        _this[INTERNALS].error = error;
      });
    }
  }
  Body.prototype = {
    get body() {
      return this[INTERNALS].body;
    },
    get bodyUsed() {
      return this[INTERNALS].disturbed;
    },
    arrayBuffer() {
      return consumeBody.call(this).then(function(buf) {
        return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
      });
    },
    blob() {
      let ct = this.headers && this.headers.get("content-type") || "";
      return consumeBody.call(this).then(function(buf) {
        return Object.assign(new Blob([], {
          type: ct.toLowerCase()
        }), {
          [BUFFER]: buf
        });
      });
    },
    json() {
      var _this2 = this;
      return consumeBody.call(this).then(function(buffer) {
        try {
          return JSON.parse(buffer.toString());
        } catch (err) {
          return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, "invalid-json"));
        }
      });
    },
    text() {
      return consumeBody.call(this).then(function(buffer) {
        return buffer.toString();
      });
    },
    buffer() {
      return consumeBody.call(this);
    },
    textConverted() {
      var _this3 = this;
      return consumeBody.call(this).then(function(buffer) {
        return convertBody(buffer, _this3.headers);
      });
    }
  };
  Object.defineProperties(Body.prototype, {
    body: {enumerable: true},
    bodyUsed: {enumerable: true},
    arrayBuffer: {enumerable: true},
    blob: {enumerable: true},
    json: {enumerable: true},
    text: {enumerable: true}
  });
  Body.mixIn = function(proto) {
    for (const name of Object.getOwnPropertyNames(Body.prototype)) {
      if (!(name in proto)) {
        const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
        Object.defineProperty(proto, name, desc);
      }
    }
  };
  function consumeBody() {
    var _this4 = this;
    if (this[INTERNALS].disturbed) {
      return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
    }
    this[INTERNALS].disturbed = true;
    if (this[INTERNALS].error) {
      return Body.Promise.reject(this[INTERNALS].error);
    }
    let body = this.body;
    if (body === null) {
      return Body.Promise.resolve(Buffer.alloc(0));
    }
    if (isBlob(body)) {
      body = body.stream();
    }
    if (Buffer.isBuffer(body)) {
      return Body.Promise.resolve(body);
    }
    if (!(body instanceof Stream)) {
      return Body.Promise.resolve(Buffer.alloc(0));
    }
    let accum = [];
    let accumBytes = 0;
    let abort = false;
    return new Body.Promise(function(resolve, reject) {
      let resTimeout;
      if (_this4.timeout) {
        resTimeout = setTimeout(function() {
          abort = true;
          reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, "body-timeout"));
        }, _this4.timeout);
      }
      body.on("error", function(err) {
        if (err.name === "AbortError") {
          abort = true;
          reject(err);
        } else {
          reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, "system", err));
        }
      });
      body.on("data", function(chunk) {
        if (abort || chunk === null) {
          return;
        }
        if (_this4.size && accumBytes + chunk.length > _this4.size) {
          abort = true;
          reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, "max-size"));
          return;
        }
        accumBytes += chunk.length;
        accum.push(chunk);
      });
      body.on("end", function() {
        if (abort) {
          return;
        }
        clearTimeout(resTimeout);
        try {
          resolve(Buffer.concat(accum, accumBytes));
        } catch (err) {
          reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, "system", err));
        }
      });
    });
  }
  function convertBody(buffer, headers) {
    if (typeof convert !== "function") {
      throw new Error("The package `encoding` must be installed to use the textConverted() function");
    }
    const ct = headers.get("content-type");
    let charset = "utf-8";
    let res, str;
    if (ct) {
      res = /charset=([^;]*)/i.exec(ct);
    }
    str = buffer.slice(0, 1024).toString();
    if (!res && str) {
      res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
    }
    if (!res && str) {
      res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
      if (!res) {
        res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
        if (res) {
          res.pop();
        }
      }
      if (res) {
        res = /charset=(.*)/i.exec(res.pop());
      }
    }
    if (!res && str) {
      res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
    }
    if (res) {
      charset = res.pop();
      if (charset === "gb2312" || charset === "gbk") {
        charset = "gb18030";
      }
    }
    return convert(buffer, "UTF-8", charset).toString();
  }
  function isURLSearchParams(obj) {
    if (typeof obj !== "object" || typeof obj.append !== "function" || typeof obj.delete !== "function" || typeof obj.get !== "function" || typeof obj.getAll !== "function" || typeof obj.has !== "function" || typeof obj.set !== "function") {
      return false;
    }
    return obj.constructor.name === "URLSearchParams" || Object.prototype.toString.call(obj) === "[object URLSearchParams]" || typeof obj.sort === "function";
  }
  function isBlob(obj) {
    return typeof obj === "object" && typeof obj.arrayBuffer === "function" && typeof obj.type === "string" && typeof obj.stream === "function" && typeof obj.constructor === "function" && typeof obj.constructor.name === "string" && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
  }
  function clone(instance) {
    let p1, p2;
    let body = instance.body;
    if (instance.bodyUsed) {
      throw new Error("cannot clone body after it is used");
    }
    if (body instanceof Stream && typeof body.getBoundary !== "function") {
      p1 = new PassThrough();
      p2 = new PassThrough();
      body.pipe(p1);
      body.pipe(p2);
      instance[INTERNALS].body = p1;
      body = p2;
    }
    return body;
  }
  function extractContentType(body) {
    if (body === null) {
      return null;
    } else if (typeof body === "string") {
      return "text/plain;charset=UTF-8";
    } else if (isURLSearchParams(body)) {
      return "application/x-www-form-urlencoded;charset=UTF-8";
    } else if (isBlob(body)) {
      return body.type || null;
    } else if (Buffer.isBuffer(body)) {
      return null;
    } else if (Object.prototype.toString.call(body) === "[object ArrayBuffer]") {
      return null;
    } else if (ArrayBuffer.isView(body)) {
      return null;
    } else if (typeof body.getBoundary === "function") {
      return `multipart/form-data;boundary=${body.getBoundary()}`;
    } else if (body instanceof Stream) {
      return null;
    } else {
      return "text/plain;charset=UTF-8";
    }
  }
  function getTotalBytes(instance) {
    const body = instance.body;
    if (body === null) {
      return 0;
    } else if (isBlob(body)) {
      return body.size;
    } else if (Buffer.isBuffer(body)) {
      return body.length;
    } else if (body && typeof body.getLengthSync === "function") {
      if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || body.hasKnownLength && body.hasKnownLength()) {
        return body.getLengthSync();
      }
      return null;
    } else {
      return null;
    }
  }
  function writeToStream(dest, instance) {
    const body = instance.body;
    if (body === null) {
      dest.end();
    } else if (isBlob(body)) {
      body.stream().pipe(dest);
    } else if (Buffer.isBuffer(body)) {
      dest.write(body);
      dest.end();
    } else {
      body.pipe(dest);
    }
  }
  Body.Promise = global.Promise;
  var invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
  var invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
  function validateName(name) {
    name = `${name}`;
    if (invalidTokenRegex.test(name) || name === "") {
      throw new TypeError(`${name} is not a legal HTTP header name`);
    }
  }
  function validateValue(value) {
    value = `${value}`;
    if (invalidHeaderCharRegex.test(value)) {
      throw new TypeError(`${value} is not a legal HTTP header value`);
    }
  }
  function find2(map, name) {
    name = name.toLowerCase();
    for (const key in map) {
      if (key.toLowerCase() === name) {
        return key;
      }
    }
    return void 0;
  }
  var MAP = Symbol("map");
  var Headers = class {
    constructor() {
      let init = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
      this[MAP] = Object.create(null);
      if (init instanceof Headers) {
        const rawHeaders = init.raw();
        const headerNames = Object.keys(rawHeaders);
        for (const headerName of headerNames) {
          for (const value of rawHeaders[headerName]) {
            this.append(headerName, value);
          }
        }
        return;
      }
      if (init == null)
        ;
      else if (typeof init === "object") {
        const method = init[Symbol.iterator];
        if (method != null) {
          if (typeof method !== "function") {
            throw new TypeError("Header pairs must be iterable");
          }
          const pairs = [];
          for (const pair of init) {
            if (typeof pair !== "object" || typeof pair[Symbol.iterator] !== "function") {
              throw new TypeError("Each header pair must be iterable");
            }
            pairs.push(Array.from(pair));
          }
          for (const pair of pairs) {
            if (pair.length !== 2) {
              throw new TypeError("Each header pair must be a name/value tuple");
            }
            this.append(pair[0], pair[1]);
          }
        } else {
          for (const key of Object.keys(init)) {
            const value = init[key];
            this.append(key, value);
          }
        }
      } else {
        throw new TypeError("Provided initializer must be an object");
      }
    }
    get(name) {
      name = `${name}`;
      validateName(name);
      const key = find2(this[MAP], name);
      if (key === void 0) {
        return null;
      }
      return this[MAP][key].join(", ");
    }
    forEach(callback) {
      let thisArg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
      let pairs = getHeaders(this);
      let i = 0;
      while (i < pairs.length) {
        var _pairs$i = pairs[i];
        const name = _pairs$i[0], value = _pairs$i[1];
        callback.call(thisArg, value, name, this);
        pairs = getHeaders(this);
        i++;
      }
    }
    set(name, value) {
      name = `${name}`;
      value = `${value}`;
      validateName(name);
      validateValue(value);
      const key = find2(this[MAP], name);
      this[MAP][key !== void 0 ? key : name] = [value];
    }
    append(name, value) {
      name = `${name}`;
      value = `${value}`;
      validateName(name);
      validateValue(value);
      const key = find2(this[MAP], name);
      if (key !== void 0) {
        this[MAP][key].push(value);
      } else {
        this[MAP][name] = [value];
      }
    }
    has(name) {
      name = `${name}`;
      validateName(name);
      return find2(this[MAP], name) !== void 0;
    }
    delete(name) {
      name = `${name}`;
      validateName(name);
      const key = find2(this[MAP], name);
      if (key !== void 0) {
        delete this[MAP][key];
      }
    }
    raw() {
      return this[MAP];
    }
    keys() {
      return createHeadersIterator(this, "key");
    }
    values() {
      return createHeadersIterator(this, "value");
    }
    [Symbol.iterator]() {
      return createHeadersIterator(this, "key+value");
    }
  };
  Headers.prototype.entries = Headers.prototype[Symbol.iterator];
  Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
    value: "Headers",
    writable: false,
    enumerable: false,
    configurable: true
  });
  Object.defineProperties(Headers.prototype, {
    get: {enumerable: true},
    forEach: {enumerable: true},
    set: {enumerable: true},
    append: {enumerable: true},
    has: {enumerable: true},
    delete: {enumerable: true},
    keys: {enumerable: true},
    values: {enumerable: true},
    entries: {enumerable: true}
  });
  function getHeaders(headers) {
    let kind = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "key+value";
    const keys = Object.keys(headers[MAP]).sort();
    return keys.map(kind === "key" ? function(k) {
      return k.toLowerCase();
    } : kind === "value" ? function(k) {
      return headers[MAP][k].join(", ");
    } : function(k) {
      return [k.toLowerCase(), headers[MAP][k].join(", ")];
    });
  }
  var INTERNAL = Symbol("internal");
  function createHeadersIterator(target, kind) {
    const iterator = Object.create(HeadersIteratorPrototype);
    iterator[INTERNAL] = {
      target,
      kind,
      index: 0
    };
    return iterator;
  }
  var HeadersIteratorPrototype = Object.setPrototypeOf({
    next() {
      if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
        throw new TypeError("Value of `this` is not a HeadersIterator");
      }
      var _INTERNAL = this[INTERNAL];
      const target = _INTERNAL.target, kind = _INTERNAL.kind, index = _INTERNAL.index;
      const values = getHeaders(target, kind);
      const len = values.length;
      if (index >= len) {
        return {
          value: void 0,
          done: true
        };
      }
      this[INTERNAL].index = index + 1;
      return {
        value: values[index],
        done: false
      };
    }
  }, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
  Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
    value: "HeadersIterator",
    writable: false,
    enumerable: false,
    configurable: true
  });
  function exportNodeCompatibleHeaders(headers) {
    const obj = Object.assign({__proto__: null}, headers[MAP]);
    const hostHeaderKey = find2(headers[MAP], "Host");
    if (hostHeaderKey !== void 0) {
      obj[hostHeaderKey] = obj[hostHeaderKey][0];
    }
    return obj;
  }
  function createHeadersLenient(obj) {
    const headers = new Headers();
    for (const name of Object.keys(obj)) {
      if (invalidTokenRegex.test(name)) {
        continue;
      }
      if (Array.isArray(obj[name])) {
        for (const val of obj[name]) {
          if (invalidHeaderCharRegex.test(val)) {
            continue;
          }
          if (headers[MAP][name] === void 0) {
            headers[MAP][name] = [val];
          } else {
            headers[MAP][name].push(val);
          }
        }
      } else if (!invalidHeaderCharRegex.test(obj[name])) {
        headers[MAP][name] = [obj[name]];
      }
    }
    return headers;
  }
  var INTERNALS$1 = Symbol("Response internals");
  var STATUS_CODES = http.STATUS_CODES;
  var Response = class {
    constructor() {
      let body = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      let opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      Body.call(this, body, opts);
      const status = opts.status || 200;
      const headers = new Headers(opts.headers);
      if (body != null && !headers.has("Content-Type")) {
        const contentType = extractContentType(body);
        if (contentType) {
          headers.append("Content-Type", contentType);
        }
      }
      this[INTERNALS$1] = {
        url: opts.url,
        status,
        statusText: opts.statusText || STATUS_CODES[status],
        headers,
        counter: opts.counter
      };
    }
    get url() {
      return this[INTERNALS$1].url || "";
    }
    get status() {
      return this[INTERNALS$1].status;
    }
    get ok() {
      return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
    }
    get redirected() {
      return this[INTERNALS$1].counter > 0;
    }
    get statusText() {
      return this[INTERNALS$1].statusText;
    }
    get headers() {
      return this[INTERNALS$1].headers;
    }
    clone() {
      return new Response(clone(this), {
        url: this.url,
        status: this.status,
        statusText: this.statusText,
        headers: this.headers,
        ok: this.ok,
        redirected: this.redirected
      });
    }
  };
  Body.mixIn(Response.prototype);
  Object.defineProperties(Response.prototype, {
    url: {enumerable: true},
    status: {enumerable: true},
    ok: {enumerable: true},
    redirected: {enumerable: true},
    statusText: {enumerable: true},
    headers: {enumerable: true},
    clone: {enumerable: true}
  });
  Object.defineProperty(Response.prototype, Symbol.toStringTag, {
    value: "Response",
    writable: false,
    enumerable: false,
    configurable: true
  });
  var INTERNALS$2 = Symbol("Request internals");
  var parse_url = Url.parse;
  var format_url = Url.format;
  var streamDestructionSupported = "destroy" in Stream.Readable.prototype;
  function isRequest(input) {
    return typeof input === "object" && typeof input[INTERNALS$2] === "object";
  }
  function isAbortSignal(signal) {
    const proto = signal && typeof signal === "object" && Object.getPrototypeOf(signal);
    return !!(proto && proto.constructor.name === "AbortSignal");
  }
  var Request = class {
    constructor(input) {
      let init = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      let parsedURL;
      if (!isRequest(input)) {
        if (input && input.href) {
          parsedURL = parse_url(input.href);
        } else {
          parsedURL = parse_url(`${input}`);
        }
        input = {};
      } else {
        parsedURL = parse_url(input.url);
      }
      let method = init.method || input.method || "GET";
      method = method.toUpperCase();
      if ((init.body != null || isRequest(input) && input.body !== null) && (method === "GET" || method === "HEAD")) {
        throw new TypeError("Request with GET/HEAD method cannot have body");
      }
      let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;
      Body.call(this, inputBody, {
        timeout: init.timeout || input.timeout || 0,
        size: init.size || input.size || 0
      });
      const headers = new Headers(init.headers || input.headers || {});
      if (inputBody != null && !headers.has("Content-Type")) {
        const contentType = extractContentType(inputBody);
        if (contentType) {
          headers.append("Content-Type", contentType);
        }
      }
      let signal = isRequest(input) ? input.signal : null;
      if ("signal" in init)
        signal = init.signal;
      if (signal != null && !isAbortSignal(signal)) {
        throw new TypeError("Expected signal to be an instanceof AbortSignal");
      }
      this[INTERNALS$2] = {
        method,
        redirect: init.redirect || input.redirect || "follow",
        headers,
        parsedURL,
        signal
      };
      this.follow = init.follow !== void 0 ? init.follow : input.follow !== void 0 ? input.follow : 20;
      this.compress = init.compress !== void 0 ? init.compress : input.compress !== void 0 ? input.compress : true;
      this.counter = init.counter || input.counter || 0;
      this.agent = init.agent || input.agent;
    }
    get method() {
      return this[INTERNALS$2].method;
    }
    get url() {
      return format_url(this[INTERNALS$2].parsedURL);
    }
    get headers() {
      return this[INTERNALS$2].headers;
    }
    get redirect() {
      return this[INTERNALS$2].redirect;
    }
    get signal() {
      return this[INTERNALS$2].signal;
    }
    clone() {
      return new Request(this);
    }
  };
  Body.mixIn(Request.prototype);
  Object.defineProperty(Request.prototype, Symbol.toStringTag, {
    value: "Request",
    writable: false,
    enumerable: false,
    configurable: true
  });
  Object.defineProperties(Request.prototype, {
    method: {enumerable: true},
    url: {enumerable: true},
    headers: {enumerable: true},
    redirect: {enumerable: true},
    clone: {enumerable: true},
    signal: {enumerable: true}
  });
  function getNodeRequestOptions(request) {
    const parsedURL = request[INTERNALS$2].parsedURL;
    const headers = new Headers(request[INTERNALS$2].headers);
    if (!headers.has("Accept")) {
      headers.set("Accept", "*/*");
    }
    if (!parsedURL.protocol || !parsedURL.hostname) {
      throw new TypeError("Only absolute URLs are supported");
    }
    if (!/^https?:$/.test(parsedURL.protocol)) {
      throw new TypeError("Only HTTP(S) protocols are supported");
    }
    if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
      throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");
    }
    let contentLengthValue = null;
    if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
      contentLengthValue = "0";
    }
    if (request.body != null) {
      const totalBytes = getTotalBytes(request);
      if (typeof totalBytes === "number") {
        contentLengthValue = String(totalBytes);
      }
    }
    if (contentLengthValue) {
      headers.set("Content-Length", contentLengthValue);
    }
    if (!headers.has("User-Agent")) {
      headers.set("User-Agent", "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)");
    }
    if (request.compress && !headers.has("Accept-Encoding")) {
      headers.set("Accept-Encoding", "gzip,deflate");
    }
    let agent = request.agent;
    if (typeof agent === "function") {
      agent = agent(parsedURL);
    }
    if (!headers.has("Connection") && !agent) {
      headers.set("Connection", "close");
    }
    return Object.assign({}, parsedURL, {
      method: request.method,
      headers: exportNodeCompatibleHeaders(headers),
      agent
    });
  }
  function AbortError(message) {
    Error.call(this, message);
    this.type = "aborted";
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
  AbortError.prototype = Object.create(Error.prototype);
  AbortError.prototype.constructor = AbortError;
  AbortError.prototype.name = "AbortError";
  var PassThrough$1 = Stream.PassThrough;
  var resolve_url = Url.resolve;
  function fetch3(url, opts) {
    if (!fetch3.Promise) {
      throw new Error("native promise missing, set fetch.Promise to your favorite alternative");
    }
    Body.Promise = fetch3.Promise;
    return new fetch3.Promise(function(resolve, reject) {
      const request = new Request(url, opts);
      const options = getNodeRequestOptions(request);
      const send = (options.protocol === "https:" ? https : http).request;
      const signal = request.signal;
      let response = null;
      const abort = function abort2() {
        let error = new AbortError("The user aborted a request.");
        reject(error);
        if (request.body && request.body instanceof Stream.Readable) {
          request.body.destroy(error);
        }
        if (!response || !response.body)
          return;
        response.body.emit("error", error);
      };
      if (signal && signal.aborted) {
        abort();
        return;
      }
      const abortAndFinalize = function abortAndFinalize2() {
        abort();
        finalize();
      };
      const req = send(options);
      let reqTimeout;
      if (signal) {
        signal.addEventListener("abort", abortAndFinalize);
      }
      function finalize() {
        req.abort();
        if (signal)
          signal.removeEventListener("abort", abortAndFinalize);
        clearTimeout(reqTimeout);
      }
      if (request.timeout) {
        req.once("socket", function(socket) {
          reqTimeout = setTimeout(function() {
            reject(new FetchError(`network timeout at: ${request.url}`, "request-timeout"));
            finalize();
          }, request.timeout);
        });
      }
      req.on("error", function(err) {
        reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, "system", err));
        finalize();
      });
      req.on("response", function(res) {
        clearTimeout(reqTimeout);
        const headers = createHeadersLenient(res.headers);
        if (fetch3.isRedirect(res.statusCode)) {
          const location = headers.get("Location");
          const locationURL = location === null ? null : resolve_url(request.url, location);
          switch (request.redirect) {
            case "error":
              reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
              finalize();
              return;
            case "manual":
              if (locationURL !== null) {
                try {
                  headers.set("Location", locationURL);
                } catch (err) {
                  reject(err);
                }
              }
              break;
            case "follow":
              if (locationURL === null) {
                break;
              }
              if (request.counter >= request.follow) {
                reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
                finalize();
                return;
              }
              const requestOpts = {
                headers: new Headers(request.headers),
                follow: request.follow,
                counter: request.counter + 1,
                agent: request.agent,
                compress: request.compress,
                method: request.method,
                body: request.body,
                signal: request.signal,
                timeout: request.timeout,
                size: request.size
              };
              if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
                reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
                finalize();
                return;
              }
              if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === "POST") {
                requestOpts.method = "GET";
                requestOpts.body = void 0;
                requestOpts.headers.delete("content-length");
              }
              resolve(fetch3(new Request(locationURL, requestOpts)));
              finalize();
              return;
          }
        }
        res.once("end", function() {
          if (signal)
            signal.removeEventListener("abort", abortAndFinalize);
        });
        let body = res.pipe(new PassThrough$1());
        const response_options = {
          url: request.url,
          status: res.statusCode,
          statusText: res.statusMessage,
          headers,
          size: request.size,
          timeout: request.timeout,
          counter: request.counter
        };
        const codings = headers.get("Content-Encoding");
        if (!request.compress || request.method === "HEAD" || codings === null || res.statusCode === 204 || res.statusCode === 304) {
          response = new Response(body, response_options);
          resolve(response);
          return;
        }
        const zlibOptions = {
          flush: zlib.Z_SYNC_FLUSH,
          finishFlush: zlib.Z_SYNC_FLUSH
        };
        if (codings == "gzip" || codings == "x-gzip") {
          body = body.pipe(zlib.createGunzip(zlibOptions));
          response = new Response(body, response_options);
          resolve(response);
          return;
        }
        if (codings == "deflate" || codings == "x-deflate") {
          const raw = res.pipe(new PassThrough$1());
          raw.once("data", function(chunk) {
            if ((chunk[0] & 15) === 8) {
              body = body.pipe(zlib.createInflate());
            } else {
              body = body.pipe(zlib.createInflateRaw());
            }
            response = new Response(body, response_options);
            resolve(response);
          });
          return;
        }
        if (codings == "br" && typeof zlib.createBrotliDecompress === "function") {
          body = body.pipe(zlib.createBrotliDecompress());
          response = new Response(body, response_options);
          resolve(response);
          return;
        }
        response = new Response(body, response_options);
        resolve(response);
      });
      writeToStream(req, request);
    });
  }
  fetch3.isRedirect = function(code) {
    return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
  };
  fetch3.Promise = global.Promise;
  module.exports = exports = fetch3;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.default = exports;
  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.FetchError = FetchError;
});

// src/data/post.js
var import_ramda = __toModule(require_src());
var {assoc, curry} = import_ramda.default;
var post = curry((config, type, data2) => fetch(config.url("data"), {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${config.token()}`
  },
  body: JSON.stringify(assoc("type", type, data2))
}).then((res) => res.json()));

// src/data/query.js
var import_ramda2 = __toModule(require_src());
var {assoc: assoc2, compose, curry: curry2, identity, ifElse} = import_ramda2.default;
var query = curry2((config, type, q, options = {}) => {
  const selector = compose(assoc2("type", type))(q);
  const body = compose(ifElse(() => options.limit, assoc2("limit", options.limit), identity), ifElse(() => options.use_index, assoc2("use_index", options.use_index), identity))({selector});
  return fetch(config.url("data") + "/_query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${config.token()}`
    },
    body: JSON.stringify(body)
  }).then((res) => res.json());
});

// src/data/get.js
var import_ramda3 = __toModule(require_src());
var {assoc: assoc3, curry: curry3} = import_ramda3.default;
var get = curry3((config, type, id) => fetch(config.url("data") + "/" + id, {
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${config.token()}`
  }
}).then((res) => res.json()));

// src/data/put.js
var import_ramda4 = __toModule(require_src());
var {assoc: assoc4, curry: curry4} = import_ramda4.default;
var put = curry4((config, type, id, data2) => fetch(config.url("data") + "/" + id, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${config.token()}`
  },
  body: JSON.stringify(assoc4("type", type, data2))
}).then((res) => res.json()));

// src/data/delete.js
var import_ramda5 = __toModule(require_src());
var {assoc: assoc5, curry: curry5} = import_ramda5.default;
var del = curry5((config, type, id) => fetch(config.url("data") + "/" + id, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${config.token()}`
  }
}).then((res) => res.json()));

// src/data/index.js
var import_ramda6 = __toModule(require_src());
var {curry: curry6} = import_ramda6.default;
var data = curry6((config, type) => Object.freeze({
  post: post(config, type),
  query: query(config, type),
  get: get(config, type),
  put: put(config, type),
  delete: del(config, type),
  validate: (data2) => {
    return config.data[type](data2);
  }
}));

// src/cache/index.js
var import_ramda10 = __toModule(require_src());

// src/cache/get.js
var import_ramda7 = __toModule(require_src());
var {curry: curry7} = import_ramda7.default;
var get2 = curry7((config, type, id) => fetch(`${config.url("cache")}/${type}-${id}`, {
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${config.token()}`
  }
}).then((res) => res.json()));

// src/cache/set.js
var import_ramda8 = __toModule(require_src());
var {curry: curry8} = import_ramda8.default;
var set = curry8((config, type, key, value) => fetch(`${config.url("cache")}`, {
  method: "POST",
  header: {
    "Content-Type": "application/json",
    authorization: `Bearer ${config.token()}`
  },
  body: JSON.stringify({
    key,
    value
  })
}).then((res) => res.json()));

// src/cache/delete.js
var import_ramda9 = __toModule(require_src());
var {curry: curry9} = import_ramda9.default;
var del2 = curry9((config, type, key) => fetch(`${config.url("cache")}/${type}-${key}`, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${config.token()}`
  }
}));

// src/cache/index.js
var {curry: curry10} = import_ramda10.default;
var cache = curry10((config, type) => Object.freeze({
  get: get2(config, type),
  set: set(config, type),
  delete: del2(config, type)
}));

// src/search/add.js
var import_ramda11 = __toModule(require_src());
var add = import_ramda11.default.curry((config, type, key, doc) => fetch(`${config.url("search")}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${config.token()}`
  },
  body: JSON.stringify({
    key: `${type}-${key}`,
    doc: {
      type,
      ...doc
    }
  })
}).then((res) => res.json()));

// src/search/find.js
var import_ramda12 = __toModule(require_src());
var find = import_ramda12.default.curry((config, type, criteria) => fetch(`${config.url("search")}/_query`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${config.token()}`
  },
  body: JSON.stringify({
    query: criteria,
    filter: {type}
  })
}));

// src/search/get.js
var import_ramda13 = __toModule(require_src());
var get3 = import_ramda13.default.curry((config, type, key) => fetch(`${config.url("search")}/${type}-${key}`, {
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${config.token()}`
  }
}).then((res) => res.json()));

// src/search/index.js
var import_ramda14 = __toModule(require_src());
var search = import_ramda14.default.curry((config, type) => Object.freeze({
  add: add(config, type),
  find: find(config, type),
  get: get3(config, type)
}));

// src/config.js
var import_jsonwebtoken = __toModule(require_jsonwebtoken());
var createConnection = (connection) => {
  const hyper2 = new URL(connection);
  return Object.freeze({
    url: (svc) => hyper2.hostname === "localhost" ? `http://${hyper2.host}/${svc}${hyper2.pathname}` : `https://${hyper2.host}/${svc}${hyper2.pathname}`,
    token: () => import_jsonwebtoken.default.sign({sub: hyper2.username}, hyper2.password)
  });
};

// src/index.js
var import_node_fetch = __toModule(require_lib());
globalThis.fetch = import_node_fetch.default;
var hyper = (s) => {
  let c = createConnection(s);
  return Object.freeze({
    data: data(c),
    cache: cache(c),
    search: search(c)
  });
};
export {
  hyper
};
