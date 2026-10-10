function bg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Xg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Id = { exports: {} },
  Xo = {},
  Od = { exports: {} },
  $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pi = Symbol.for("react.element"),
  Zg = Symbol.for("react.portal"),
  Jg = Symbol.for("react.fragment"),
  qg = Symbol.for("react.strict_mode"),
  ey = Symbol.for("react.profiler"),
  ty = Symbol.for("react.provider"),
  ny = Symbol.for("react.context"),
  ry = Symbol.for("react.forward_ref"),
  iy = Symbol.for("react.suspense"),
  oy = Symbol.for("react.memo"),
  sy = Symbol.for("react.lazy"),
  ec = Symbol.iterator;
function ay(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ec && e[ec]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var zd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Bd = Object.assign,
  Ud = {};
function vr(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Ud),
    (this.updater = n || zd));
}
vr.prototype.isReactComponent = {};
vr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
vr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function $d() {}
$d.prototype = vr.prototype;
function vl(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Ud),
    (this.updater = n || zd));
}
var xl = (vl.prototype = new $d());
xl.constructor = vl;
Bd(xl, vr.prototype);
xl.isPureReactComponent = !0;
var tc = Array.isArray,
  Wd = Object.prototype.hasOwnProperty,
  wl = { current: null },
  Hd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kd(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Wd.call(t, r) && !Hd.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Pi,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: wl.current,
  };
}
function ly(e, t) {
  return {
    $$typeof: Pi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Sl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Pi;
}
function uy(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var nc = /\/+/g;
function Ss(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? uy("" + e.key)
    : t.toString(36);
}
function ro(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Pi:
          case Zg:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Ss(s, 0) : r),
      tc(i)
        ? ((n = ""),
          e != null && (n = e.replace(nc, "$&/") + "/"),
          ro(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Sl(i) &&
            (i = ly(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(nc, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), tc(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + Ss(o, a);
      s += ro(o, t, n, l, i);
    }
  else if (((l = ay(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      ((o = o.value), (l = r + Ss(o, a++)), (s += ro(o, t, n, l, i)));
  else if (o === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return s;
}
function Vi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ro(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function cy(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Le = { current: null },
  io = { transition: null },
  fy = {
    ReactCurrentDispatcher: Le,
    ReactCurrentBatchConfig: io,
    ReactCurrentOwner: wl,
  };
function Gd() {
  throw Error("act(...) is not supported in production builds of React.");
}
$.Children = {
  map: Vi,
  forEach: function (e, t, n) {
    Vi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Vi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Vi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Sl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
$.Component = vr;
$.Fragment = Jg;
$.Profiler = ey;
$.PureComponent = vl;
$.StrictMode = qg;
$.Suspense = iy;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fy;
$.act = Gd;
$.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Bd({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = wl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Wd.call(t, l) &&
        !Hd.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Pi, type: e.type, key: i, ref: o, props: r, _owner: s };
};
$.createContext = function (e) {
  return (
    (e = {
      $$typeof: ny,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ty, _context: e }),
    (e.Consumer = e)
  );
};
$.createElement = Kd;
$.createFactory = function (e) {
  var t = Kd.bind(null, e);
  return ((t.type = e), t);
};
$.createRef = function () {
  return { current: null };
};
$.forwardRef = function (e) {
  return { $$typeof: ry, render: e };
};
$.isValidElement = Sl;
$.lazy = function (e) {
  return { $$typeof: sy, _payload: { _status: -1, _result: e }, _init: cy };
};
$.memo = function (e, t) {
  return { $$typeof: oy, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function (e) {
  var t = io.transition;
  io.transition = {};
  try {
    e();
  } finally {
    io.transition = t;
  }
};
$.unstable_act = Gd;
$.useCallback = function (e, t) {
  return Le.current.useCallback(e, t);
};
$.useContext = function (e) {
  return Le.current.useContext(e);
};
$.useDebugValue = function () {};
$.useDeferredValue = function (e) {
  return Le.current.useDeferredValue(e);
};
$.useEffect = function (e, t) {
  return Le.current.useEffect(e, t);
};
$.useId = function () {
  return Le.current.useId();
};
$.useImperativeHandle = function (e, t, n) {
  return Le.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function (e, t) {
  return Le.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function (e, t) {
  return Le.current.useLayoutEffect(e, t);
};
$.useMemo = function (e, t) {
  return Le.current.useMemo(e, t);
};
$.useReducer = function (e, t, n) {
  return Le.current.useReducer(e, t, n);
};
$.useRef = function (e) {
  return Le.current.useRef(e);
};
$.useState = function (e) {
  return Le.current.useState(e);
};
$.useSyncExternalStore = function (e, t, n) {
  return Le.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function () {
  return Le.current.useTransition();
};
$.version = "18.3.1";
Od.exports = $;
var P = Od.exports;
const Qd = Xg(P),
  dy = bg({ __proto__: null, default: Qd }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hy = P,
  py = Symbol.for("react.element"),
  my = Symbol.for("react.fragment"),
  gy = Object.prototype.hasOwnProperty,
  yy = hy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  vy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yd(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  (n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref));
  for (r in t) gy.call(t, r) && !vy.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: py,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: yy.current,
  };
}
Xo.Fragment = my;
Xo.jsx = Yd;
Xo.jsxs = Yd;
Id.exports = Xo;
var E = Id.exports,
  aa = {},
  bd = { exports: {} },
  Ge = {},
  Xd = { exports: {} },
  Zd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, I) {
    var v = A.length;
    A.push(I);
    e: for (; 0 < v; ) {
      var y = (v - 1) >>> 1,
        N = A[y];
      if (0 < i(N, I)) ((A[y] = I), (A[v] = N), (v = y));
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var I = A[0],
      v = A.pop();
    if (v !== I) {
      A[0] = v;
      e: for (var y = 0, N = A.length, F = N >>> 1; y < F; ) {
        var O = 2 * (y + 1) - 1,
          B = A[O],
          z = O + 1,
          j = A[z];
        if (0 > i(B, v))
          z < N && 0 > i(j, B)
            ? ((A[y] = j), (A[z] = v), (y = z))
            : ((A[y] = B), (A[O] = v), (y = O));
        else if (z < N && 0 > i(j, v)) ((A[y] = j), (A[z] = v), (y = z));
        else break e;
      }
    }
    return I;
  }
  function i(A, I) {
    var v = A.sortIndex - I.sortIndex;
    return v !== 0 ? v : A.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    x = !1,
    w = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(A) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= A)
        (r(u), (I.sortIndex = I.expirationTime), t(l, I));
      else break;
      I = n(u);
    }
  }
  function C(A) {
    if (((w = !1), m(A), !x))
      if (n(l) !== null) ((x = !0), fn(T));
      else {
        var I = n(u);
        I !== null && ue(C, I.startTime - A);
      }
  }
  function T(A, I) {
    ((x = !1), w && ((w = !1), p(k), (k = -1)), (g = !0));
    var v = d;
    try {
      for (
        m(I), f = n(l);
        f !== null && (!(f.expirationTime > I) || (A && !de()));
      ) {
        var y = f.callback;
        if (typeof y == "function") {
          ((f.callback = null), (d = f.priorityLevel));
          var N = y(f.expirationTime <= I);
          ((I = e.unstable_now()),
            typeof N == "function" ? (f.callback = N) : f === n(l) && r(l),
            m(I));
        } else r(l);
        f = n(l);
      }
      if (f !== null) var F = !0;
      else {
        var O = n(u);
        (O !== null && ue(C, O.startTime - I), (F = !1));
      }
      return F;
    } finally {
      ((f = null), (d = v), (g = !1));
    }
  }
  var M = !1,
    D = null,
    k = -1,
    U = 5,
    V = -1;
  function de() {
    return !(e.unstable_now() - V < U);
  }
  function dt() {
    if (D !== null) {
      var A = e.unstable_now();
      V = A;
      var I = !0;
      try {
        I = D(!0, A);
      } finally {
        I ? St() : ((M = !1), (D = null));
      }
    } else M = !1;
  }
  var St;
  if (typeof h == "function")
    St = function () {
      h(dt);
    };
  else if (typeof MessageChannel < "u") {
    var Ot = new MessageChannel(),
      In = Ot.port2;
    ((Ot.port1.onmessage = dt),
      (St = function () {
        In.postMessage(null);
      }));
  } else
    St = function () {
      S(dt, 0);
    };
  function fn(A) {
    ((D = A), M || ((M = !0), St()));
  }
  function ue(A, I) {
    k = S(function () {
      A(e.unstable_now());
    }, I);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || g || ((x = !0), fn(T));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (U = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (A) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = d;
      }
      var v = d;
      d = I;
      try {
        return A();
      } finally {
        d = v;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, I) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var v = d;
      d = A;
      try {
        return I();
      } finally {
        d = v;
      }
    }),
    (e.unstable_scheduleCallback = function (A, I, v) {
      var y = e.unstable_now();
      switch (
        (typeof v == "object" && v !== null
          ? ((v = v.delay), (v = typeof v == "number" && 0 < v ? y + v : y))
          : (v = y),
        A)
      ) {
        case 1:
          var N = -1;
          break;
        case 2:
          N = 250;
          break;
        case 5:
          N = 1073741823;
          break;
        case 4:
          N = 1e4;
          break;
        default:
          N = 5e3;
      }
      return (
        (N = v + N),
        (A = {
          id: c++,
          callback: I,
          priorityLevel: A,
          startTime: v,
          expirationTime: N,
          sortIndex: -1,
        }),
        v > y
          ? ((A.sortIndex = v),
            t(u, A),
            n(l) === null &&
              A === n(u) &&
              (w ? (p(k), (k = -1)) : (w = !0), ue(C, v - y)))
          : ((A.sortIndex = N), t(l, A), x || g || ((x = !0), fn(T))),
        A
      );
    }),
    (e.unstable_shouldYield = de),
    (e.unstable_wrapCallback = function (A) {
      var I = d;
      return function () {
        var v = d;
        d = I;
        try {
          return A.apply(this, arguments);
        } finally {
          d = v;
        }
      };
    }));
})(Zd);
Xd.exports = Zd;
var xy = Xd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wy = P,
  He = xy;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Jd = new Set(),
  Jr = {};
function Nn(e, t) {
  (lr(e, t), lr(e + "Capture", t));
}
function lr(e, t) {
  for (Jr[e] = t, e = 0; e < t.length; e++) Jd.add(t[e]);
}
var Nt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  la = Object.prototype.hasOwnProperty,
  Sy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  rc = {},
  ic = {};
function Py(e) {
  return la.call(ic, e)
    ? !0
    : la.call(rc, e)
      ? !1
      : Sy.test(e)
        ? (ic[e] = !0)
        : ((rc[e] = !0), !1);
}
function Cy(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ty(e, t, n, r) {
  if (t === null || typeof t > "u" || Cy(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function je(e, t, n, r, i, o, s) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s));
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new je(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ce[t] = new je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ce[e] = new je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ce[e] = new je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new je(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ce[e] = new je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ce[e] = new je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ce[e] = new je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ce[e] = new je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Pl = /[\-:]([a-z])/g;
function Cl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Pl, Cl);
    Ce[t] = new je(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Pl, Cl);
    Ce[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Pl, Cl);
  Ce[t] = new je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ce[e] = new je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ce.xlinkHref = new je(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ce[e] = new je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Tl(e, t, n, r) {
  var i = Ce.hasOwnProperty(t) ? Ce[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ty(t, n, i, r) && (n = null),
    r || i === null
      ? Py(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _t = wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Fi = Symbol.for("react.element"),
  zn = Symbol.for("react.portal"),
  Bn = Symbol.for("react.fragment"),
  El = Symbol.for("react.strict_mode"),
  ua = Symbol.for("react.profiler"),
  qd = Symbol.for("react.provider"),
  eh = Symbol.for("react.context"),
  kl = Symbol.for("react.forward_ref"),
  ca = Symbol.for("react.suspense"),
  fa = Symbol.for("react.suspense_list"),
  Ml = Symbol.for("react.memo"),
  Ut = Symbol.for("react.lazy"),
  th = Symbol.for("react.offscreen"),
  oc = Symbol.iterator;
function Cr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (oc && e[oc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ie = Object.assign,
  Ps;
function Lr(e) {
  if (Ps === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ps = (t && t[1]) || "";
    }
  return (
    `
` +
    Ps +
    e
  );
}
var Cs = !1;
function Ts(e, t) {
  if (!e || Cs) return "";
  Cs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];
      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    ((Cs = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Lr(e) : "";
}
function Ey(e) {
  switch (e.tag) {
    case 5:
      return Lr(e.type);
    case 16:
      return Lr("Lazy");
    case 13:
      return Lr("Suspense");
    case 19:
      return Lr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Ts(e.type, !1)), e);
    case 11:
      return ((e = Ts(e.type.render, !1)), e);
    case 1:
      return ((e = Ts(e.type, !0)), e);
    default:
      return "";
  }
}
function da(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Bn:
      return "Fragment";
    case zn:
      return "Portal";
    case ua:
      return "Profiler";
    case El:
      return "StrictMode";
    case ca:
      return "Suspense";
    case fa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case eh:
        return (e.displayName || "Context") + ".Consumer";
      case qd:
        return (e._context.displayName || "Context") + ".Provider";
      case kl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ml:
        return (
          (t = e.displayName || null),
          t !== null ? t : da(e.type) || "Memo"
        );
      case Ut:
        ((t = e._payload), (e = e._init));
        try {
          return da(e(t));
        } catch {}
    }
  return null;
}
function ky(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return da(t);
    case 8:
      return t === El ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function nn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function nh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function My(e) {
  var t = nh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          ((r = "" + s), o.call(this, s));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function _i(e) {
  e._valueTracker || (e._valueTracker = My(e));
}
function rh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = nh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function xo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ha(e, t) {
  var n = t.checked;
  return ie({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function sc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = nn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function ih(e, t) {
  ((t = t.checked), t != null && Tl(e, "checked", t, !1));
}
function pa(e, t) {
  ih(e, t);
  var n = nn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? ma(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ma(e, t.type, nn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function ac(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function ma(e, t, n) {
  (t !== "number" || xo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var jr = Array.isArray;
function nr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + nn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ga(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return ie({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function lc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (jr(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: nn(n) };
}
function oh(e, t) {
  var n = nn(t.value),
    r = nn(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function uc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function sh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ya(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? sh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Ii,
  ah = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ii = Ii || document.createElement("div"),
          Ii.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ii.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function qr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ry = ["Webkit", "ms", "Moz", "O"];
Object.keys(zr).forEach(function (e) {
  Ry.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (zr[t] = zr[e]));
  });
});
function lh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (zr.hasOwnProperty(e) && zr[e])
      ? ("" + t).trim()
      : t + "px";
}
function uh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = lh(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i));
    }
}
var Dy = ie(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function va(e, t) {
  if (t) {
    if (Dy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function xa(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var wa = null;
function Rl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Sa = null,
  rr = null,
  ir = null;
function cc(e) {
  if ((e = Ei(e))) {
    if (typeof Sa != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = ts(t)), Sa(e.stateNode, e.type, t));
  }
}
function ch(e) {
  rr ? (ir ? ir.push(e) : (ir = [e])) : (rr = e);
}
function fh() {
  if (rr) {
    var e = rr,
      t = ir;
    if (((ir = rr = null), cc(e), t)) for (e = 0; e < t.length; e++) cc(t[e]);
  }
}
function dh(e, t) {
  return e(t);
}
function hh() {}
var Es = !1;
function ph(e, t, n) {
  if (Es) return e(t, n);
  Es = !0;
  try {
    return dh(e, t, n);
  } finally {
    ((Es = !1), (rr !== null || ir !== null) && (hh(), fh()));
  }
}
function ei(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ts(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var Pa = !1;
if (Nt)
  try {
    var Tr = {};
    (Object.defineProperty(Tr, "passive", {
      get: function () {
        Pa = !0;
      },
    }),
      window.addEventListener("test", Tr, Tr),
      window.removeEventListener("test", Tr, Tr));
  } catch {
    Pa = !1;
  }
function Ay(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Br = !1,
  wo = null,
  So = !1,
  Ca = null,
  Ny = {
    onError: function (e) {
      ((Br = !0), (wo = e));
    },
  };
function Ly(e, t, n, r, i, o, s, a, l) {
  ((Br = !1), (wo = null), Ay.apply(Ny, arguments));
}
function jy(e, t, n, r, i, o, s, a, l) {
  if ((Ly.apply(this, arguments), Br)) {
    if (Br) {
      var u = wo;
      ((Br = !1), (wo = null));
    } else throw Error(R(198));
    So || ((So = !0), (Ca = u));
  }
}
function Ln(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function mh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function fc(e) {
  if (Ln(e) !== e) throw Error(R(188));
}
function Vy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ln(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return (fc(i), e);
        if (o === r) return (fc(i), t);
        o = o.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) ((n = i), (r = o));
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          ((s = !0), (n = i), (r = o));
          break;
        }
        if (a === r) {
          ((s = !0), (r = i), (n = o));
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            ((s = !0), (n = o), (r = i));
            break;
          }
          if (a === r) {
            ((s = !0), (r = o), (n = i));
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function gh(e) {
  return ((e = Vy(e)), e !== null ? yh(e) : null);
}
function yh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = yh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var vh = He.unstable_scheduleCallback,
  dc = He.unstable_cancelCallback,
  Fy = He.unstable_shouldYield,
  _y = He.unstable_requestPaint,
  fe = He.unstable_now,
  Iy = He.unstable_getCurrentPriorityLevel,
  Dl = He.unstable_ImmediatePriority,
  xh = He.unstable_UserBlockingPriority,
  Po = He.unstable_NormalPriority,
  Oy = He.unstable_LowPriority,
  wh = He.unstable_IdlePriority,
  Zo = null,
  yt = null;
function zy(e) {
  if (yt && typeof yt.onCommitFiberRoot == "function")
    try {
      yt.onCommitFiberRoot(Zo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ut = Math.clz32 ? Math.clz32 : $y,
  By = Math.log,
  Uy = Math.LN2;
function $y(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((By(e) / Uy) | 0)) | 0);
}
var Oi = 64,
  zi = 4194304;
function Vr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Co(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Vr(a)) : ((o &= s), o !== 0 && (r = Vr(o)));
  } else ((s = n & ~i), s !== 0 ? (r = Vr(s)) : o !== 0 && (r = Vr(o)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - ut(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
  return r;
}
function Wy(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Hy(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;
  ) {
    var s = 31 - ut(o),
      a = 1 << s,
      l = i[s];
    (l === -1
      ? (!(a & n) || a & r) && (i[s] = Wy(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a));
  }
}
function Ta(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Sh() {
  var e = Oi;
  return ((Oi <<= 1), !(Oi & 4194240) && (Oi = 64), e);
}
function ks(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ci(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ut(t)),
    (e[t] = n));
}
function Ky(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - ut(n),
      o = 1 << i;
    ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o));
  }
}
function Al(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ut(n),
      i = 1 << r;
    ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
  }
}
var G = 0;
function Ph(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Ch,
  Nl,
  Th,
  Eh,
  kh,
  Ea = !1,
  Bi = [],
  Yt = null,
  bt = null,
  Xt = null,
  ti = new Map(),
  ni = new Map(),
  Wt = [],
  Gy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function hc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Yt = null;
      break;
    case "dragenter":
    case "dragleave":
      bt = null;
      break;
    case "mouseover":
    case "mouseout":
      Xt = null;
      break;
    case "pointerover":
    case "pointerout":
      ti.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ni.delete(t.pointerId);
  }
}
function Er(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Ei(t)), t !== null && Nl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Qy(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return ((Yt = Er(Yt, e, t, n, r, i)), !0);
    case "dragenter":
      return ((bt = Er(bt, e, t, n, r, i)), !0);
    case "mouseover":
      return ((Xt = Er(Xt, e, t, n, r, i)), !0);
    case "pointerover":
      var o = i.pointerId;
      return (ti.set(o, Er(ti.get(o) || null, e, t, n, r, i)), !0);
    case "gotpointercapture":
      return (
        (o = i.pointerId),
        ni.set(o, Er(ni.get(o) || null, e, t, n, r, i)),
        !0
      );
  }
  return !1;
}
function Mh(e) {
  var t = vn(e.target);
  if (t !== null) {
    var n = Ln(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = mh(n)), t !== null)) {
          ((e.blockedOn = t),
            kh(e.priority, function () {
              Th(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function oo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ka(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((wa = r), n.target.dispatchEvent(r), (wa = null));
    } else return ((t = Ei(n)), t !== null && Nl(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function pc(e, t, n) {
  oo(e) && n.delete(t);
}
function Yy() {
  ((Ea = !1),
    Yt !== null && oo(Yt) && (Yt = null),
    bt !== null && oo(bt) && (bt = null),
    Xt !== null && oo(Xt) && (Xt = null),
    ti.forEach(pc),
    ni.forEach(pc));
}
function kr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ea ||
      ((Ea = !0),
      He.unstable_scheduleCallback(He.unstable_NormalPriority, Yy)));
}
function ri(e) {
  function t(i) {
    return kr(i, e);
  }
  if (0 < Bi.length) {
    kr(Bi[0], e);
    for (var n = 1; n < Bi.length; n++) {
      var r = Bi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Yt !== null && kr(Yt, e),
      bt !== null && kr(bt, e),
      Xt !== null && kr(Xt, e),
      ti.forEach(t),
      ni.forEach(t),
      n = 0;
    n < Wt.length;
    n++
  )
    ((r = Wt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Wt.length && ((n = Wt[0]), n.blockedOn === null); )
    (Mh(n), n.blockedOn === null && Wt.shift());
}
var or = _t.ReactCurrentBatchConfig,
  To = !0;
function by(e, t, n, r) {
  var i = G,
    o = or.transition;
  or.transition = null;
  try {
    ((G = 1), Ll(e, t, n, r));
  } finally {
    ((G = i), (or.transition = o));
  }
}
function Xy(e, t, n, r) {
  var i = G,
    o = or.transition;
  or.transition = null;
  try {
    ((G = 4), Ll(e, t, n, r));
  } finally {
    ((G = i), (or.transition = o));
  }
}
function Ll(e, t, n, r) {
  if (To) {
    var i = ka(e, t, n, r);
    if (i === null) (_s(e, t, r, Eo, n), hc(e, r));
    else if (Qy(i, e, t, n, r)) r.stopPropagation();
    else if ((hc(e, r), t & 4 && -1 < Gy.indexOf(e))) {
      for (; i !== null; ) {
        var o = Ei(i);
        if (
          (o !== null && Ch(o),
          (o = ka(e, t, n, r)),
          o === null && _s(e, t, r, Eo, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else _s(e, t, r, null, n);
  }
}
var Eo = null;
function ka(e, t, n, r) {
  if (((Eo = null), (e = Rl(r)), (e = vn(e)), e !== null))
    if (((t = Ln(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = mh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Eo = e), null);
}
function Rh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Iy()) {
        case Dl:
          return 1;
        case xh:
          return 4;
        case Po:
        case Oy:
          return 16;
        case wh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Kt = null,
  jl = null,
  so = null;
function Dh() {
  if (so) return so;
  var e,
    t = jl,
    n = t.length,
    r,
    i = "value" in Kt ? Kt.value : Kt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (so = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ao(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ui() {
  return !0;
}
function mc() {
  return !1;
}
function Qe(e) {
  function t(n, r, i, o, s) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ui
        : mc),
      (this.isPropagationStopped = mc),
      this
    );
  }
  return (
    ie(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ui));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ui));
      },
      persist: function () {},
      isPersistent: Ui,
    }),
    t
  );
}
var xr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Vl = Qe(xr),
  Ti = ie({}, xr, { view: 0, detail: 0 }),
  Zy = Qe(Ti),
  Ms,
  Rs,
  Mr,
  Jo = ie({}, Ti, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Fl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Mr &&
            (Mr && e.type === "mousemove"
              ? ((Ms = e.screenX - Mr.screenX), (Rs = e.screenY - Mr.screenY))
              : (Rs = Ms = 0),
            (Mr = e)),
          Ms);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Rs;
    },
  }),
  gc = Qe(Jo),
  Jy = ie({}, Jo, { dataTransfer: 0 }),
  qy = Qe(Jy),
  ev = ie({}, Ti, { relatedTarget: 0 }),
  Ds = Qe(ev),
  tv = ie({}, xr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  nv = Qe(tv),
  rv = ie({}, xr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  iv = Qe(rv),
  ov = ie({}, xr, { data: 0 }),
  yc = Qe(ov),
  sv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  av = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  lv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function uv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = lv[e]) ? !!t[e] : !1;
}
function Fl() {
  return uv;
}
var cv = ie({}, Ti, {
    key: function (e) {
      if (e.key) {
        var t = sv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ao(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? av[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fl,
    charCode: function (e) {
      return e.type === "keypress" ? ao(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ao(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  fv = Qe(cv),
  dv = ie({}, Jo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  vc = Qe(dv),
  hv = ie({}, Ti, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fl,
  }),
  pv = Qe(hv),
  mv = ie({}, xr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  gv = Qe(mv),
  yv = ie({}, Jo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  vv = Qe(yv),
  xv = [9, 13, 27, 32],
  _l = Nt && "CompositionEvent" in window,
  Ur = null;
Nt && "documentMode" in document && (Ur = document.documentMode);
var wv = Nt && "TextEvent" in window && !Ur,
  Ah = Nt && (!_l || (Ur && 8 < Ur && 11 >= Ur)),
  xc = " ",
  wc = !1;
function Nh(e, t) {
  switch (e) {
    case "keyup":
      return xv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Lh(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Un = !1;
function Sv(e, t) {
  switch (e) {
    case "compositionend":
      return Lh(t);
    case "keypress":
      return t.which !== 32 ? null : ((wc = !0), xc);
    case "textInput":
      return ((e = t.data), e === xc && wc ? null : e);
    default:
      return null;
  }
}
function Pv(e, t) {
  if (Un)
    return e === "compositionend" || (!_l && Nh(e, t))
      ? ((e = Dh()), (so = jl = Kt = null), (Un = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ah && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Cv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Sc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Cv[e.type] : t === "textarea";
}
function jh(e, t, n, r) {
  (ch(r),
    (t = ko(t, "onChange")),
    0 < t.length &&
      ((n = new Vl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var $r = null,
  ii = null;
function Tv(e) {
  Hh(e, 0);
}
function qo(e) {
  var t = Hn(e);
  if (rh(t)) return e;
}
function Ev(e, t) {
  if (e === "change") return t;
}
var Vh = !1;
if (Nt) {
  var As;
  if (Nt) {
    var Ns = "oninput" in document;
    if (!Ns) {
      var Pc = document.createElement("div");
      (Pc.setAttribute("oninput", "return;"),
        (Ns = typeof Pc.oninput == "function"));
    }
    As = Ns;
  } else As = !1;
  Vh = As && (!document.documentMode || 9 < document.documentMode);
}
function Cc() {
  $r && ($r.detachEvent("onpropertychange", Fh), (ii = $r = null));
}
function Fh(e) {
  if (e.propertyName === "value" && qo(ii)) {
    var t = [];
    (jh(t, ii, e, Rl(e)), ph(Tv, t));
  }
}
function kv(e, t, n) {
  e === "focusin"
    ? (Cc(), ($r = t), (ii = n), $r.attachEvent("onpropertychange", Fh))
    : e === "focusout" && Cc();
}
function Mv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return qo(ii);
}
function Rv(e, t) {
  if (e === "click") return qo(t);
}
function Dv(e, t) {
  if (e === "input" || e === "change") return qo(t);
}
function Av(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ft = typeof Object.is == "function" ? Object.is : Av;
function oi(e, t) {
  if (ft(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!la.call(t, i) || !ft(e[i], t[i])) return !1;
  }
  return !0;
}
function Tc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ec(e, t) {
  var n = Tc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Tc(n);
  }
}
function _h(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? _h(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Ih() {
  for (var e = window, t = xo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = xo(e.document);
  }
  return t;
}
function Il(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Nv(e) {
  var t = Ih(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    _h(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Il(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        ((r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Ec(n, o)));
        var s = Ec(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Lv = Nt && "documentMode" in document && 11 >= document.documentMode,
  $n = null,
  Ma = null,
  Wr = null,
  Ra = !1;
function kc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ra ||
    $n == null ||
    $n !== xo(r) ||
    ((r = $n),
    "selectionStart" in r && Il(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Wr && oi(Wr, r)) ||
      ((Wr = r),
      (r = ko(Ma, "onSelect")),
      0 < r.length &&
        ((t = new Vl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = $n))));
}
function $i(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Wn = {
    animationend: $i("Animation", "AnimationEnd"),
    animationiteration: $i("Animation", "AnimationIteration"),
    animationstart: $i("Animation", "AnimationStart"),
    transitionend: $i("Transition", "TransitionEnd"),
  },
  Ls = {},
  Oh = {};
Nt &&
  ((Oh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Wn.animationend.animation,
    delete Wn.animationiteration.animation,
    delete Wn.animationstart.animation),
  "TransitionEvent" in window || delete Wn.transitionend.transition);
function es(e) {
  if (Ls[e]) return Ls[e];
  if (!Wn[e]) return e;
  var t = Wn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Oh) return (Ls[e] = t[n]);
  return e;
}
var zh = es("animationend"),
  Bh = es("animationiteration"),
  Uh = es("animationstart"),
  $h = es("transitionend"),
  Wh = new Map(),
  Mc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function an(e, t) {
  (Wh.set(e, t), Nn(t, [e]));
}
for (var js = 0; js < Mc.length; js++) {
  var Vs = Mc[js],
    jv = Vs.toLowerCase(),
    Vv = Vs[0].toUpperCase() + Vs.slice(1);
  an(jv, "on" + Vv);
}
an(zh, "onAnimationEnd");
an(Bh, "onAnimationIteration");
an(Uh, "onAnimationStart");
an("dblclick", "onDoubleClick");
an("focusin", "onFocus");
an("focusout", "onBlur");
an($h, "onTransitionEnd");
lr("onMouseEnter", ["mouseout", "mouseover"]);
lr("onMouseLeave", ["mouseout", "mouseover"]);
lr("onPointerEnter", ["pointerout", "pointerover"]);
lr("onPointerLeave", ["pointerout", "pointerover"]);
Nn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Nn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Nn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Nn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Nn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Fr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Fv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));
function Rc(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), jy(r, t, void 0, e), (e.currentTarget = null));
}
function Hh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          (Rc(i, a, u), (o = l));
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          (Rc(i, a, u), (o = l));
        }
    }
  }
  if (So) throw ((e = Ca), (So = !1), (Ca = null), e);
}
function Z(e, t) {
  var n = t[ja];
  n === void 0 && (n = t[ja] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Kh(t, e, 2, !1), n.add(r));
}
function Fs(e, t, n) {
  var r = 0;
  (t && (r |= 4), Kh(n, e, r, t));
}
var Wi = "_reactListening" + Math.random().toString(36).slice(2);
function si(e) {
  if (!e[Wi]) {
    ((e[Wi] = !0),
      Jd.forEach(function (n) {
        n !== "selectionchange" && (Fv.has(n) || Fs(n, !1, e), Fs(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Wi] || ((t[Wi] = !0), Fs("selectionchange", !1, t));
  }
}
function Kh(e, t, n, r) {
  switch (Rh(t)) {
    case 1:
      var i = by;
      break;
    case 4:
      i = Xy;
      break;
    default:
      i = Ll;
  }
  ((n = i.bind(null, t, n, e)),
    (i = void 0),
    !Pa ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1));
}
function _s(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = vn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  ph(function () {
    var u = o,
      c = Rl(n),
      f = [];
    e: {
      var d = Wh.get(e);
      if (d !== void 0) {
        var g = Vl,
          x = e;
        switch (e) {
          case "keypress":
            if (ao(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = fv;
            break;
          case "focusin":
            ((x = "focus"), (g = Ds));
            break;
          case "focusout":
            ((x = "blur"), (g = Ds));
            break;
          case "beforeblur":
          case "afterblur":
            g = Ds;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = gc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = qy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = pv;
            break;
          case zh:
          case Bh:
          case Uh:
            g = nv;
            break;
          case $h:
            g = gv;
            break;
          case "scroll":
            g = Zy;
            break;
          case "wheel":
            g = vv;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = iv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = vc;
        }
        var w = (t & 4) !== 0,
          S = !w && e === "scroll",
          p = w ? (d !== null ? d + "Capture" : null) : d;
        w = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var C = m.stateNode;
          if (
            (m.tag === 5 &&
              C !== null &&
              ((m = C),
              p !== null && ((C = ei(h, p)), C != null && w.push(ai(h, C, m)))),
            S)
          )
            break;
          h = h.return;
        }
        0 < w.length &&
          ((d = new g(d, x, null, n, c)), f.push({ event: d, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          d &&
            n !== wa &&
            (x = n.relatedTarget || n.fromElement) &&
            (vn(x) || x[Lt]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          g
            ? ((x = n.relatedTarget || n.toElement),
              (g = u),
              (x = x ? vn(x) : null),
              x !== null &&
                ((S = Ln(x)), x !== S || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((g = null), (x = u)),
          g !== x)
        ) {
          if (
            ((w = gc),
            (C = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = vc),
              (C = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (S = g == null ? d : Hn(g)),
            (m = x == null ? d : Hn(x)),
            (d = new w(C, h + "leave", g, n, c)),
            (d.target = S),
            (d.relatedTarget = m),
            (C = null),
            vn(c) === u &&
              ((w = new w(p, h + "enter", x, n, c)),
              (w.target = m),
              (w.relatedTarget = S),
              (C = w)),
            (S = C),
            g && x)
          )
            t: {
              for (w = g, p = x, h = 0, m = w; m; m = On(m)) h++;
              for (m = 0, C = p; C; C = On(C)) m++;
              for (; 0 < h - m; ) ((w = On(w)), h--);
              for (; 0 < m - h; ) ((p = On(p)), m--);
              for (; h--; ) {
                if (w === p || (p !== null && w === p.alternate)) break t;
                ((w = On(w)), (p = On(p)));
              }
              w = null;
            }
          else w = null;
          (g !== null && Dc(f, d, g, w, !1),
            x !== null && S !== null && Dc(f, S, x, w, !0));
        }
      }
      e: {
        if (
          ((d = u ? Hn(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var T = Ev;
        else if (Sc(d))
          if (Vh) T = Dv;
          else {
            T = Mv;
            var M = kv;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (T = Rv);
        if (T && (T = T(e, u))) {
          jh(f, T, n, c);
          break e;
        }
        (M && M(e, d, u),
          e === "focusout" &&
            (M = d._wrapperState) &&
            M.controlled &&
            d.type === "number" &&
            ma(d, "number", d.value));
      }
      switch (((M = u ? Hn(u) : window), e)) {
        case "focusin":
          (Sc(M) || M.contentEditable === "true") &&
            (($n = M), (Ma = u), (Wr = null));
          break;
        case "focusout":
          Wr = Ma = $n = null;
          break;
        case "mousedown":
          Ra = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Ra = !1), kc(f, n, c));
          break;
        case "selectionchange":
          if (Lv) break;
        case "keydown":
        case "keyup":
          kc(f, n, c);
      }
      var D;
      if (_l)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        Un
          ? Nh(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      (k &&
        (Ah &&
          n.locale !== "ko" &&
          (Un || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Un && (D = Dh())
            : ((Kt = c),
              (jl = "value" in Kt ? Kt.value : Kt.textContent),
              (Un = !0))),
        (M = ko(u, k)),
        0 < M.length &&
          ((k = new yc(k, e, null, n, c)),
          f.push({ event: k, listeners: M }),
          D ? (k.data = D) : ((D = Lh(n)), D !== null && (k.data = D)))),
        (D = wv ? Sv(e, n) : Pv(e, n)) &&
          ((u = ko(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new yc("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = D))));
    }
    Hh(f, t);
  });
}
function ai(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ko(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    (i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = ei(e, n)),
      o != null && r.unshift(ai(e, o, i)),
      (o = ei(e, t)),
      o != null && r.push(ai(e, o, i))),
      (e = e.return));
  }
  return r;
}
function On(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Dc(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = ei(n, o)), l != null && s.unshift(ai(n, l, a)))
        : i || ((l = ei(n, o)), l != null && s.push(ai(n, l, a)))),
      (n = n.return));
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var _v = /\r\n?/g,
  Iv = /\u0000|\uFFFD/g;
function Ac(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      _v,
      `
`,
    )
    .replace(Iv, "");
}
function Hi(e, t, n) {
  if (((t = Ac(t)), Ac(e) !== t && n)) throw Error(R(425));
}
function Mo() {}
var Da = null,
  Aa = null;
function Na(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var La = typeof setTimeout == "function" ? setTimeout : void 0,
  Ov = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Nc = typeof Promise == "function" ? Promise : void 0,
  zv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Nc < "u"
        ? function (e) {
            return Nc.resolve(null).then(e).catch(Bv);
          }
        : La;
function Bv(e) {
  setTimeout(function () {
    throw e;
  });
}
function Is(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(i), ri(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  ri(t);
}
function Zt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Lc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var wr = Math.random().toString(36).slice(2),
  gt = "__reactFiber$" + wr,
  li = "__reactProps$" + wr,
  Lt = "__reactContainer$" + wr,
  ja = "__reactEvents$" + wr,
  Uv = "__reactListeners$" + wr,
  $v = "__reactHandles$" + wr;
function vn(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Lt] || n[gt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Lc(e); e !== null; ) {
          if ((n = e[gt])) return n;
          e = Lc(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Ei(e) {
  return (
    (e = e[gt] || e[Lt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Hn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function ts(e) {
  return e[li] || null;
}
var Va = [],
  Kn = -1;
function ln(e) {
  return { current: e };
}
function J(e) {
  0 > Kn || ((e.current = Va[Kn]), (Va[Kn] = null), Kn--);
}
function Y(e, t) {
  (Kn++, (Va[Kn] = e.current), (e.current = t));
}
var rn = {},
  De = ln(rn),
  Ie = ln(!1),
  kn = rn;
function ur(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Oe(e) {
  return ((e = e.childContextTypes), e != null);
}
function Ro() {
  (J(Ie), J(De));
}
function jc(e, t, n) {
  if (De.current !== rn) throw Error(R(168));
  (Y(De, t), Y(Ie, n));
}
function Gh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(R(108, ky(e) || "Unknown", i));
  return ie({}, n, r);
}
function Do(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rn),
    (kn = De.current),
    Y(De, e),
    Y(Ie, Ie.current),
    !0
  );
}
function Vc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  (n
    ? ((e = Gh(e, t, kn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      J(Ie),
      J(De),
      Y(De, e))
    : J(Ie),
    Y(Ie, n));
}
var Et = null,
  ns = !1,
  Os = !1;
function Qh(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
function Wv(e) {
  ((ns = !0), Qh(e));
}
function un() {
  if (!Os && Et !== null) {
    Os = !0;
    var e = 0,
      t = G;
    try {
      var n = Et;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Et = null), (ns = !1));
    } catch (i) {
      throw (Et !== null && (Et = Et.slice(e + 1)), vh(Dl, un), i);
    } finally {
      ((G = t), (Os = !1));
    }
  }
  return null;
}
var Gn = [],
  Qn = 0,
  Ao = null,
  No = 0,
  Xe = [],
  Ze = 0,
  Mn = null,
  kt = 1,
  Mt = "";
function pn(e, t) {
  ((Gn[Qn++] = No), (Gn[Qn++] = Ao), (Ao = e), (No = t));
}
function Yh(e, t, n) {
  ((Xe[Ze++] = kt), (Xe[Ze++] = Mt), (Xe[Ze++] = Mn), (Mn = e));
  var r = kt;
  e = Mt;
  var i = 32 - ut(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var o = 32 - ut(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    ((o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (kt = (1 << (32 - ut(t) + i)) | (n << i) | r),
      (Mt = o + e));
  } else ((kt = (1 << o) | (n << i) | r), (Mt = e));
}
function Ol(e) {
  e.return !== null && (pn(e, 1), Yh(e, 1, 0));
}
function zl(e) {
  for (; e === Ao; )
    ((Ao = Gn[--Qn]), (Gn[Qn] = null), (No = Gn[--Qn]), (Gn[Qn] = null));
  for (; e === Mn; )
    ((Mn = Xe[--Ze]),
      (Xe[Ze] = null),
      (Mt = Xe[--Ze]),
      (Xe[Ze] = null),
      (kt = Xe[--Ze]),
      (Xe[Ze] = null));
}
var $e = null,
  Ue = null,
  ee = !1,
  lt = null;
function bh(e, t) {
  var n = Je(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Fc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), ($e = e), (Ue = Zt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), ($e = e), (Ue = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Mn !== null ? { id: kt, overflow: Mt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            ($e = e),
            (Ue = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Fa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function _a(e) {
  if (ee) {
    var t = Ue;
    if (t) {
      var n = t;
      if (!Fc(e, t)) {
        if (Fa(e)) throw Error(R(418));
        t = Zt(n.nextSibling);
        var r = $e;
        t && Fc(e, t)
          ? bh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ee = !1), ($e = e));
      }
    } else {
      if (Fa(e)) throw Error(R(418));
      ((e.flags = (e.flags & -4097) | 2), (ee = !1), ($e = e));
    }
  }
}
function _c(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  $e = e;
}
function Ki(e) {
  if (e !== $e) return !1;
  if (!ee) return (_c(e), (ee = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Na(e.type, e.memoizedProps))),
    t && (t = Ue))
  ) {
    if (Fa(e)) throw (Xh(), Error(R(418)));
    for (; t; ) (bh(e, t), (t = Zt(t.nextSibling)));
  }
  if ((_c(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ue = Zt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ue = null;
    }
  } else Ue = $e ? Zt(e.stateNode.nextSibling) : null;
  return !0;
}
function Xh() {
  for (var e = Ue; e; ) e = Zt(e.nextSibling);
}
function cr() {
  ((Ue = $e = null), (ee = !1));
}
function Bl(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
var Hv = _t.ReactCurrentBatchConfig;
function Rr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Gi(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Ic(e) {
  var t = e._init;
  return t(e._payload);
}
function Zh(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) (t(p, h), (h = h.sibling));
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      (h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling));
    return p;
  }
  function i(p, h) {
    return ((p = tn(p, h)), (p.index = 0), (p.sibling = null), p);
  }
  function o(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function s(p) {
    return (e && p.alternate === null && (p.flags |= 2), p);
  }
  function a(p, h, m, C) {
    return h === null || h.tag !== 6
      ? ((h = Ks(m, p.mode, C)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function l(p, h, m, C) {
    var T = m.type;
    return T === Bn
      ? c(p, h, m.props.children, C, m.key)
      : h !== null &&
          (h.elementType === T ||
            (typeof T == "object" &&
              T !== null &&
              T.$$typeof === Ut &&
              Ic(T) === h.type))
        ? ((C = i(h, m.props)), (C.ref = Rr(p, h, m)), (C.return = p), C)
        : ((C = mo(m.type, m.key, m.props, null, p.mode, C)),
          (C.ref = Rr(p, h, m)),
          (C.return = p),
          C);
  }
  function u(p, h, m, C) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = Gs(m, p.mode, C)), (h.return = p), h)
      : ((h = i(h, m.children || [])), (h.return = p), h);
  }
  function c(p, h, m, C, T) {
    return h === null || h.tag !== 7
      ? ((h = Cn(m, p.mode, C, T)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function f(p, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return ((h = Ks("" + h, p.mode, m)), (h.return = p), h);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Fi:
          return (
            (m = mo(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = Rr(p, null, h)),
            (m.return = p),
            m
          );
        case zn:
          return ((h = Gs(h, p.mode, m)), (h.return = p), h);
        case Ut:
          var C = h._init;
          return f(p, C(h._payload), m);
      }
      if (jr(h) || Cr(h))
        return ((h = Cn(h, p.mode, m, null)), (h.return = p), h);
      Gi(p, h);
    }
    return null;
  }
  function d(p, h, m, C) {
    var T = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return T !== null ? null : a(p, h, "" + m, C);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Fi:
          return m.key === T ? l(p, h, m, C) : null;
        case zn:
          return m.key === T ? u(p, h, m, C) : null;
        case Ut:
          return ((T = m._init), d(p, h, T(m._payload), C));
      }
      if (jr(m) || Cr(m)) return T !== null ? null : c(p, h, m, C, null);
      Gi(p, m);
    }
    return null;
  }
  function g(p, h, m, C, T) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return ((p = p.get(m) || null), a(h, p, "" + C, T));
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case Fi:
          return (
            (p = p.get(C.key === null ? m : C.key) || null),
            l(h, p, C, T)
          );
        case zn:
          return (
            (p = p.get(C.key === null ? m : C.key) || null),
            u(h, p, C, T)
          );
        case Ut:
          var M = C._init;
          return g(p, h, m, M(C._payload), T);
      }
      if (jr(C) || Cr(C)) return ((p = p.get(m) || null), c(h, p, C, T, null));
      Gi(h, C);
    }
    return null;
  }
  function x(p, h, m, C) {
    for (
      var T = null, M = null, D = h, k = (h = 0), U = null;
      D !== null && k < m.length;
      k++
    ) {
      D.index > k ? ((U = D), (D = null)) : (U = D.sibling);
      var V = d(p, D, m[k], C);
      if (V === null) {
        D === null && (D = U);
        break;
      }
      (e && D && V.alternate === null && t(p, D),
        (h = o(V, h, k)),
        M === null ? (T = V) : (M.sibling = V),
        (M = V),
        (D = U));
    }
    if (k === m.length) return (n(p, D), ee && pn(p, k), T);
    if (D === null) {
      for (; k < m.length; k++)
        ((D = f(p, m[k], C)),
          D !== null &&
            ((h = o(D, h, k)),
            M === null ? (T = D) : (M.sibling = D),
            (M = D)));
      return (ee && pn(p, k), T);
    }
    for (D = r(p, D); k < m.length; k++)
      ((U = g(D, p, k, m[k], C)),
        U !== null &&
          (e && U.alternate !== null && D.delete(U.key === null ? k : U.key),
          (h = o(U, h, k)),
          M === null ? (T = U) : (M.sibling = U),
          (M = U)));
    return (
      e &&
        D.forEach(function (de) {
          return t(p, de);
        }),
      ee && pn(p, k),
      T
    );
  }
  function w(p, h, m, C) {
    var T = Cr(m);
    if (typeof T != "function") throw Error(R(150));
    if (((m = T.call(m)), m == null)) throw Error(R(151));
    for (
      var M = (T = null), D = h, k = (h = 0), U = null, V = m.next();
      D !== null && !V.done;
      k++, V = m.next()
    ) {
      D.index > k ? ((U = D), (D = null)) : (U = D.sibling);
      var de = d(p, D, V.value, C);
      if (de === null) {
        D === null && (D = U);
        break;
      }
      (e && D && de.alternate === null && t(p, D),
        (h = o(de, h, k)),
        M === null ? (T = de) : (M.sibling = de),
        (M = de),
        (D = U));
    }
    if (V.done) return (n(p, D), ee && pn(p, k), T);
    if (D === null) {
      for (; !V.done; k++, V = m.next())
        ((V = f(p, V.value, C)),
          V !== null &&
            ((h = o(V, h, k)),
            M === null ? (T = V) : (M.sibling = V),
            (M = V)));
      return (ee && pn(p, k), T);
    }
    for (D = r(p, D); !V.done; k++, V = m.next())
      ((V = g(D, p, k, V.value, C)),
        V !== null &&
          (e && V.alternate !== null && D.delete(V.key === null ? k : V.key),
          (h = o(V, h, k)),
          M === null ? (T = V) : (M.sibling = V),
          (M = V)));
    return (
      e &&
        D.forEach(function (dt) {
          return t(p, dt);
        }),
      ee && pn(p, k),
      T
    );
  }
  function S(p, h, m, C) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Bn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Fi:
          e: {
            for (var T = m.key, M = h; M !== null; ) {
              if (M.key === T) {
                if (((T = m.type), T === Bn)) {
                  if (M.tag === 7) {
                    (n(p, M.sibling),
                      (h = i(M, m.props.children)),
                      (h.return = p),
                      (p = h));
                    break e;
                  }
                } else if (
                  M.elementType === T ||
                  (typeof T == "object" &&
                    T !== null &&
                    T.$$typeof === Ut &&
                    Ic(T) === M.type)
                ) {
                  (n(p, M.sibling),
                    (h = i(M, m.props)),
                    (h.ref = Rr(p, M, m)),
                    (h.return = p),
                    (p = h));
                  break e;
                }
                n(p, M);
                break;
              } else t(p, M);
              M = M.sibling;
            }
            m.type === Bn
              ? ((h = Cn(m.props.children, p.mode, C, m.key)),
                (h.return = p),
                (p = h))
              : ((C = mo(m.type, m.key, m.props, null, p.mode, C)),
                (C.ref = Rr(p, h, m)),
                (C.return = p),
                (p = C));
          }
          return s(p);
        case zn:
          e: {
            for (M = m.key; h !== null; ) {
              if (h.key === M)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  (n(p, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = p),
                    (p = h));
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            ((h = Gs(m, p.mode, C)), (h.return = p), (p = h));
          }
          return s(p);
        case Ut:
          return ((M = m._init), S(p, h, M(m._payload), C));
      }
      if (jr(m)) return x(p, h, m, C);
      if (Cr(m)) return w(p, h, m, C);
      Gi(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = Ks(m, p.mode, C)), (h.return = p), (p = h)),
        s(p))
      : n(p, h);
  }
  return S;
}
var fr = Zh(!0),
  Jh = Zh(!1),
  Lo = ln(null),
  jo = null,
  Yn = null,
  Ul = null;
function $l() {
  Ul = Yn = jo = null;
}
function Wl(e) {
  var t = Lo.current;
  (J(Lo), (e._currentValue = t));
}
function Ia(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function sr(e, t) {
  ((jo = e),
    (Ul = Yn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (_e = !0), (e.firstContext = null)));
}
function et(e) {
  var t = e._currentValue;
  if (Ul !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Yn === null)) {
      if (jo === null) throw Error(R(308));
      ((Yn = e), (jo.dependencies = { lanes: 0, firstContext: e }));
    } else Yn = Yn.next = e;
  return t;
}
var xn = null;
function Hl(e) {
  xn === null ? (xn = [e]) : xn.push(e);
}
function qh(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Hl(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    jt(e, r)
  );
}
function jt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var $t = !1;
function Kl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ep(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function Rt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), K & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      jt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Hl(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    jt(e, n)
  );
}
function lo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Al(e, n));
  }
}
function Oc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (o === null ? (i = o = s) : (o = o.next = s), (n = n.next));
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Vo(e, t, n, r) {
  var i = e.updateQueue;
  $t = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    ((l.next = null), s === null ? (o = u) : (s.next = u), (s = l));
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    ((s = 0), (c = u = l = null), (a = o));
    do {
      var d = a.lane,
        g = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            w = a;
          switch (((d = t), (g = n), w.tag)) {
            case 1:
              if (((x = w.payload), typeof x == "function")) {
                f = x.call(g, f, d);
                break e;
              }
              f = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = w.payload),
                (d = typeof x == "function" ? x.call(g, f, d) : x),
                d == null)
              )
                break e;
              f = ie({}, f, d);
              break e;
            case 2:
              $t = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        ((g = {
          eventTime: g,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (l = f)) : (c = c.next = g),
          (s |= d));
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        ((d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null));
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((s |= i.lane), (i = i.next));
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    ((Dn |= s), (e.lanes = s), (e.memoizedState = f));
  }
}
function zc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(R(191, i));
        i.call(r);
      }
    }
}
var ki = {},
  vt = ln(ki),
  ui = ln(ki),
  ci = ln(ki);
function wn(e) {
  if (e === ki) throw Error(R(174));
  return e;
}
function Gl(e, t) {
  switch ((Y(ci, t), Y(ui, e), Y(vt, ki), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ya(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ya(t, e)));
  }
  (J(vt), Y(vt, t));
}
function dr() {
  (J(vt), J(ui), J(ci));
}
function tp(e) {
  wn(ci.current);
  var t = wn(vt.current),
    n = ya(t, e.type);
  t !== n && (Y(ui, e), Y(vt, n));
}
function Ql(e) {
  ui.current === e && (J(vt), J(ui));
}
var te = ln(0);
function Fo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var zs = [];
function Yl() {
  for (var e = 0; e < zs.length; e++)
    zs[e]._workInProgressVersionPrimary = null;
  zs.length = 0;
}
var uo = _t.ReactCurrentDispatcher,
  Bs = _t.ReactCurrentBatchConfig,
  Rn = 0,
  re = null,
  me = null,
  ye = null,
  _o = !1,
  Hr = !1,
  fi = 0,
  Kv = 0;
function Te() {
  throw Error(R(321));
}
function bl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ft(e[n], t[n])) return !1;
  return !0;
}
function Xl(e, t, n, r, i, o) {
  if (
    ((Rn = o),
    (re = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (uo.current = e === null || e.memoizedState === null ? bv : Xv),
    (e = n(r, i)),
    Hr)
  ) {
    o = 0;
    do {
      if (((Hr = !1), (fi = 0), 25 <= o)) throw Error(R(301));
      ((o += 1),
        (ye = me = null),
        (t.updateQueue = null),
        (uo.current = Zv),
        (e = n(r, i)));
    } while (Hr);
  }
  if (
    ((uo.current = Io),
    (t = me !== null && me.next !== null),
    (Rn = 0),
    (ye = me = re = null),
    (_o = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function Zl() {
  var e = fi !== 0;
  return ((fi = 0), e);
}
function mt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ye === null ? (re.memoizedState = ye = e) : (ye = ye.next = e), ye);
}
function tt() {
  if (me === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = me.next;
  var t = ye === null ? re.memoizedState : ye.next;
  if (t !== null) ((ye = t), (me = e));
  else {
    if (e === null) throw Error(R(310));
    ((me = e),
      (e = {
        memoizedState: me.memoizedState,
        baseState: me.baseState,
        baseQueue: me.baseQueue,
        queue: me.queue,
        next: null,
      }),
      ye === null ? (re.memoizedState = ye = e) : (ye = ye.next = e));
  }
  return ye;
}
function di(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Us(e) {
  var t = tt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = me,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      ((i.next = o.next), (o.next = s));
    }
    ((r.baseQueue = i = o), (n.pending = null));
  }
  if (i !== null) {
    ((o = i.next), (r = r.baseState));
    var a = (s = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((Rn & c) === c)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (re.lanes |= c),
          (Dn |= c));
      }
      u = u.next;
    } while (u !== null && u !== o);
    (l === null ? (s = r) : (l.next = a),
      ft(r, t.memoizedState) || (_e = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do ((o = i.lane), (re.lanes |= o), (Dn |= o), (i = i.next));
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function $s(e) {
  var t = tt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do ((o = e(o, s.action)), (s = s.next));
    while (s !== i);
    (ft(o, t.memoizedState) || (_e = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o));
  }
  return [o, r];
}
function np() {}
function rp(e, t) {
  var n = re,
    r = tt(),
    i = t(),
    o = !ft(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (_e = !0)),
    (r = r.queue),
    Jl(sp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ye !== null && ye.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      hi(9, op.bind(null, n, r, i, t), void 0, null),
      ve === null)
    )
      throw Error(R(349));
    Rn & 30 || ip(n, t, i);
  }
  return i;
}
function ip(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function op(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), ap(t) && lp(e));
}
function sp(e, t, n) {
  return n(function () {
    ap(t) && lp(e);
  });
}
function ap(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ft(e, n);
  } catch {
    return !0;
  }
}
function lp(e) {
  var t = jt(e, 1);
  t !== null && ct(t, e, 1, -1);
}
function Bc(e) {
  var t = mt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: di,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Yv.bind(null, re, e)),
    [t.memoizedState, e]
  );
}
function hi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function up() {
  return tt().memoizedState;
}
function co(e, t, n, r) {
  var i = mt();
  ((re.flags |= e),
    (i.memoizedState = hi(1 | t, n, void 0, r === void 0 ? null : r)));
}
function rs(e, t, n, r) {
  var i = tt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (me !== null) {
    var s = me.memoizedState;
    if (((o = s.destroy), r !== null && bl(r, s.deps))) {
      i.memoizedState = hi(t, n, o, r);
      return;
    }
  }
  ((re.flags |= e), (i.memoizedState = hi(1 | t, n, o, r)));
}
function Uc(e, t) {
  return co(8390656, 8, e, t);
}
function Jl(e, t) {
  return rs(2048, 8, e, t);
}
function cp(e, t) {
  return rs(4, 2, e, t);
}
function fp(e, t) {
  return rs(4, 4, e, t);
}
function dp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function hp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    rs(4, 4, dp.bind(null, t, e), n)
  );
}
function ql() {}
function pp(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function mp(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function gp(e, t, n) {
  return Rn & 21
    ? (ft(n, t) || ((n = Sh()), (re.lanes |= n), (Dn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (_e = !0)), (e.memoizedState = n));
}
function Gv(e, t) {
  var n = G;
  ((G = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Bs.transition;
  Bs.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((G = n), (Bs.transition = r));
  }
}
function yp() {
  return tt().memoizedState;
}
function Qv(e, t, n) {
  var r = en(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    vp(e))
  )
    xp(t, n);
  else if (((n = qh(e, t, n, r)), n !== null)) {
    var i = Ne();
    (ct(n, e, r, i), wp(n, t, r));
  }
}
function Yv(e, t, n) {
  var r = en(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (vp(e)) xp(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), ft(a, s))) {
          var l = t.interleaved;
          (l === null
            ? ((i.next = i), Hl(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = qh(e, t, i, r)),
      n !== null && ((i = Ne()), ct(n, e, r, i), wp(n, t, r)));
  }
}
function vp(e) {
  var t = e.alternate;
  return e === re || (t !== null && t === re);
}
function xp(e, t) {
  Hr = _o = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function wp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Al(e, n));
  }
}
var Io = {
    readContext: et,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useInsertionEffect: Te,
    useLayoutEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useMutableSource: Te,
    useSyncExternalStore: Te,
    useId: Te,
    unstable_isNewReconciler: !1,
  },
  bv = {
    readContext: et,
    useCallback: function (e, t) {
      return ((mt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: et,
    useEffect: Uc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        co(4194308, 4, dp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return co(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return co(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = mt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = mt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Qv.bind(null, re, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = mt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Bc,
    useDebugValue: ql,
    useDeferredValue: function (e) {
      return (mt().memoizedState = e);
    },
    useTransition: function () {
      var e = Bc(!1),
        t = e[0];
      return ((e = Gv.bind(null, e[1])), (mt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = re,
        i = mt();
      if (ee) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), ve === null)) throw Error(R(349));
        Rn & 30 || ip(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Uc(sp.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        hi(9, op.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = mt(),
        t = ve.identifierPrefix;
      if (ee) {
        var n = Mt,
          r = kt;
        ((n = (r & ~(1 << (32 - ut(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = fi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = Kv++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Xv = {
    readContext: et,
    useCallback: pp,
    useContext: et,
    useEffect: Jl,
    useImperativeHandle: hp,
    useInsertionEffect: cp,
    useLayoutEffect: fp,
    useMemo: mp,
    useReducer: Us,
    useRef: up,
    useState: function () {
      return Us(di);
    },
    useDebugValue: ql,
    useDeferredValue: function (e) {
      var t = tt();
      return gp(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = Us(di)[0],
        t = tt().memoizedState;
      return [e, t];
    },
    useMutableSource: np,
    useSyncExternalStore: rp,
    useId: yp,
    unstable_isNewReconciler: !1,
  },
  Zv = {
    readContext: et,
    useCallback: pp,
    useContext: et,
    useEffect: Jl,
    useImperativeHandle: hp,
    useInsertionEffect: cp,
    useLayoutEffect: fp,
    useMemo: mp,
    useReducer: $s,
    useRef: up,
    useState: function () {
      return $s(di);
    },
    useDebugValue: ql,
    useDeferredValue: function (e) {
      var t = tt();
      return me === null ? (t.memoizedState = e) : gp(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = $s(di)[0],
        t = tt().memoizedState;
      return [e, t];
    },
    useMutableSource: np,
    useSyncExternalStore: rp,
    useId: yp,
    unstable_isNewReconciler: !1,
  };
function st(e, t) {
  if (e && e.defaultProps) {
    ((t = ie({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Oa(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ie({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var is = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ln(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      i = en(e),
      o = Rt(r, i);
    ((o.payload = t),
      n != null && (o.callback = n),
      (t = Jt(e, o, i)),
      t !== null && (ct(t, e, i, r), lo(t, e, i)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      i = en(e),
      o = Rt(r, i);
    ((o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Jt(e, o, i)),
      t !== null && (ct(t, e, i, r), lo(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ne(),
      r = en(e),
      i = Rt(n, r);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = Jt(e, i, r)),
      t !== null && (ct(t, e, r, n), lo(t, e, r)));
  },
};
function $c(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !oi(n, r) || !oi(i, o)
        : !0
  );
}
function Sp(e, t, n) {
  var r = !1,
    i = rn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = et(o))
      : ((i = Oe(t) ? kn : De.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? ur(e, i) : rn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = is),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Wc(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && is.enqueueReplaceState(t, t.state, null));
}
function za(e, t, n, r) {
  var i = e.stateNode;
  ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), Kl(e));
  var o = t.contextType;
  (typeof o == "object" && o !== null
    ? (i.context = et(o))
    : ((o = Oe(t) ? kn : De.current), (i.context = ur(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Oa(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && is.enqueueReplaceState(i, i.state, null),
      Vo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308));
}
function hr(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Ey(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ws(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ba(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Jv = typeof WeakMap == "function" ? WeakMap : Map;
function Pp(e, t, n) {
  ((n = Rt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (zo || ((zo = !0), (Xa = r)), Ba(e, t));
    }),
    n
  );
}
function Cp(e, t, n) {
  ((n = Rt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Ba(e, t);
      }));
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        (Ba(e, t),
          typeof r != "function" &&
            (qt === null ? (qt = new Set([this])) : qt.add(this)));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Hc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Jv();
    var i = new Set();
    r.set(t, i);
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
  i.has(n) || (i.add(n), (e = d0.bind(null, e, t, n)), t.then(e, e));
}
function Kc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Gc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Rt(-1, 1)), (t.tag = 2), Jt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var qv = _t.ReactCurrentOwner,
  _e = !1;
function Ae(e, t, n, r) {
  t.child = e === null ? Jh(t, null, n, r) : fr(t, e.child, n, r);
}
function Qc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    sr(t, i),
    (r = Xl(e, t, n, r, o, i)),
    (n = Zl()),
    e !== null && !_e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Vt(e, t, i))
      : (ee && n && Ol(t), (t.flags |= 1), Ae(e, t, r, i), t.child)
  );
}
function Yc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !au(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Tp(e, t, o, r, i))
      : ((e = mo(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : oi), n(s, r) && e.ref === t.ref)
    )
      return Vt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = tn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Tp(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (oi(o, r) && e.ref === t.ref)
      if (((_e = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (_e = !0);
      else return ((t.lanes = e.lanes), Vt(e, t, i));
  }
  return Ua(e, t, n, r, i);
}
function Ep(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Y(Xn, Be),
        (Be |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Y(Xn, Be),
          (Be |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        Y(Xn, Be),
        (Be |= r));
    }
  else
    (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Y(Xn, Be),
      (Be |= r));
  return (Ae(e, t, i, n), t.child);
}
function kp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ua(e, t, n, r, i) {
  var o = Oe(n) ? kn : De.current;
  return (
    (o = ur(t, o)),
    sr(t, i),
    (n = Xl(e, t, n, r, o, i)),
    (r = Zl()),
    e !== null && !_e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Vt(e, t, i))
      : (ee && r && Ol(t), (t.flags |= 1), Ae(e, t, n, i), t.child)
  );
}
function bc(e, t, n, r, i) {
  if (Oe(n)) {
    var o = !0;
    Do(t);
  } else o = !1;
  if ((sr(t, i), t.stateNode === null))
    (fo(e, t), Sp(t, n, r), za(t, n, r, i), (r = !0));
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = et(u))
      : ((u = Oe(n) ? kn : De.current), (u = ur(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Wc(t, s, r, u)),
      ($t = !1));
    var d = t.memoizedState;
    ((s.state = d),
      Vo(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || Ie.current || $t
        ? (typeof c == "function" && (Oa(t, n, c, r), (l = t.memoizedState)),
          (a = $t || $c(t, n, a, r, d, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((s = t.stateNode),
      ep(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : st(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = et(l))
        : ((l = Oe(n) ? kn : De.current), (l = ur(t, l))));
    var g = n.getDerivedStateFromProps;
    ((c =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && Wc(t, s, r, l)),
      ($t = !1),
      (d = t.memoizedState),
      (s.state = d),
      Vo(t, r, s, i));
    var x = t.memoizedState;
    a !== f || d !== x || Ie.current || $t
      ? (typeof g == "function" && (Oa(t, n, g, r), (x = t.memoizedState)),
        (u = $t || $c(t, n, u, r, d, x, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, x, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, x, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (s.props = r),
        (s.state = x),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return $a(e, t, n, r, o, i);
}
function $a(e, t, n, r, i, o) {
  kp(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return (i && Vc(t, n, !1), Vt(e, t, o));
  ((r = t.stateNode), (qv.current = t));
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = fr(t, e.child, null, o)), (t.child = fr(t, null, a, o)))
      : Ae(e, t, a, o),
    (t.memoizedState = r.state),
    i && Vc(t, n, !0),
    t.child
  );
}
function Mp(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? jc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && jc(e, t.context, !1),
    Gl(e, t.containerInfo));
}
function Xc(e, t, n, r, i) {
  return (cr(), Bl(i), (t.flags |= 256), Ae(e, t, n, r), t.child);
}
var Wa = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ha(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Rp(e, t, n) {
  var r = t.pendingProps,
    i = te.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Y(te, i & 1),
    e === null)
  )
    return (
      _a(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = as(s, r, 0, null)),
              (e = Cn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ha(n)),
              (t.memoizedState = Wa),
              e)
            : eu(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return e0(e, t, s, r, a, i, n);
  if (o) {
    ((o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = tn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = tn(a, o)) : ((o = Cn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Ha(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Wa),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = tn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function eu(e, t) {
  return (
    (t = as({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Qi(e, t, n, r) {
  return (
    r !== null && Bl(r),
    fr(t, e.child, null, n),
    (e = eu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function e0(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ws(Error(R(422)))), Qi(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = as({ mode: "visible", children: r.children }, i, 0, null)),
          (o = Cn(o, i, s, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && fr(t, e.child, null, s),
          (t.child.memoizedState = Ha(s)),
          (t.memoizedState = Wa),
          o);
  if (!(t.mode & 1)) return Qi(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (o = Error(R(419))),
      (r = Ws(o, r, void 0)),
      Qi(e, t, s, r)
    );
  }
  if (((a = (s & e.childLanes) !== 0), _e || a)) {
    if (((r = ve), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), jt(e, i), ct(r, e, i, -1)));
    }
    return (su(), (r = Ws(Error(R(421)))), Qi(e, t, s, r));
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = h0.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ue = Zt(i.nextSibling)),
      ($e = t),
      (ee = !0),
      (lt = null),
      e !== null &&
        ((Xe[Ze++] = kt),
        (Xe[Ze++] = Mt),
        (Xe[Ze++] = Mn),
        (kt = e.id),
        (Mt = e.overflow),
        (Mn = t)),
      (t = eu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Zc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Ia(e.return, t, n));
}
function Hs(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Dp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ae(e, t, r.children, n), (r = te.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Zc(e, n, t);
        else if (e.tag === 19) Zc(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((Y(te, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          ((e = n.alternate),
            e !== null && Fo(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Hs(t, !1, i, n, o));
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Fo(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        Hs(t, !0, n, null, o);
        break;
      case "together":
        Hs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function fo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Vt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Dn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = tn(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function t0(e, t, n) {
  switch (t.tag) {
    case 3:
      (Mp(t), cr());
      break;
    case 5:
      tp(t);
      break;
    case 1:
      Oe(t.type) && Do(t);
      break;
    case 4:
      Gl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      (Y(Lo, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Y(te, te.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Rp(e, t, n)
            : (Y(te, te.current & 1),
              (e = Vt(e, t, n)),
              e !== null ? e.sibling : null);
      Y(te, te.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Dp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Y(te, te.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Ep(e, t, n));
  }
  return Vt(e, t, n);
}
var Ap, Ka, Np, Lp;
Ap = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Ka = function () {};
Np = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    ((e = t.stateNode), wn(vt.current));
    var o = null;
    switch (n) {
      case "input":
        ((i = ha(e, i)), (r = ha(e, r)), (o = []));
        break;
      case "select":
        ((i = ie({}, i, { value: void 0 })),
          (r = ie({}, r, { value: void 0 })),
          (o = []));
        break;
      case "textarea":
        ((i = ga(e, i)), (r = ga(e, r)), (o = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Mo);
    }
    va(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Jr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else (n || (o || (o = []), o.push(u, n)), (n = l));
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (o = o || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Jr.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && Z("scroll", e),
                    o || a === l || (o = []))
                  : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Lp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Dr(e, t) {
  if (!ee)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ee(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function n0(e, t, n) {
  var r = t.pendingProps;
  switch ((zl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (Ee(t), null);
    case 1:
      return (Oe(t.type) && Ro(), Ee(t), null);
    case 3:
      return (
        (r = t.stateNode),
        dr(),
        J(Ie),
        J(De),
        Yl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ki(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), lt !== null && (qa(lt), (lt = null)))),
        Ka(e, t),
        Ee(t),
        null
      );
    case 5:
      Ql(t);
      var i = wn(ci.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Np(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return (Ee(t), null);
        }
        if (((e = wn(vt.current)), Ki(t))) {
          ((r = t.stateNode), (n = t.type));
          var o = t.memoizedProps;
          switch (((r[gt] = t), (r[li] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (Z("cancel", r), Z("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              Z("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Fr.length; i++) Z(Fr[i], r);
              break;
            case "source":
              Z("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (Z("error", r), Z("load", r));
              break;
            case "details":
              Z("toggle", r);
              break;
            case "input":
              (sc(r, o), Z("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!o.multiple }),
                Z("invalid", r));
              break;
            case "textarea":
              (lc(r, o), Z("invalid", r));
          }
          (va(n, o), (i = null));
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Hi(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Hi(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Jr.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  Z("scroll", r);
            }
          switch (n) {
            case "input":
              (_i(r), ac(r, o, !0));
              break;
            case "textarea":
              (_i(r), uc(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Mo);
          }
          ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = sh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[gt] = t),
            (e[li] = r),
            Ap(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((s = xa(n, r)), n)) {
              case "dialog":
                (Z("cancel", e), Z("close", e), (i = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (Z("load", e), (i = r));
                break;
              case "video":
              case "audio":
                for (i = 0; i < Fr.length; i++) Z(Fr[i], e);
                i = r;
                break;
              case "source":
                (Z("error", e), (i = r));
                break;
              case "img":
              case "image":
              case "link":
                (Z("error", e), Z("load", e), (i = r));
                break;
              case "details":
                (Z("toggle", e), (i = r));
                break;
              case "input":
                (sc(e, r), (i = ha(e, r)), Z("invalid", e));
                break;
              case "option":
                i = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ie({}, r, { value: void 0 })),
                  Z("invalid", e));
                break;
              case "textarea":
                (lc(e, r), (i = ga(e, r)), Z("invalid", e));
                break;
              default:
                i = r;
            }
            (va(n, i), (a = i));
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? uh(e, l)
                  : o === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && ah(e, l))
                    : o === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && qr(e, l)
                        : typeof l == "number" && qr(e, "" + l)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Jr.hasOwnProperty(o)
                          ? l != null && o === "onScroll" && Z("scroll", e)
                          : l != null && Tl(e, o, l, s));
              }
            switch (n) {
              case "input":
                (_i(e), ac(e, r, !1));
                break;
              case "textarea":
                (_i(e), uc(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + nn(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? nr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      nr(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Mo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (Ee(t), null);
    case 6:
      if (e && t.stateNode != null) Lp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = wn(ci.current)), wn(vt.current), Ki(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[gt] = t),
            (o = r.nodeValue !== n) && ((e = $e), e !== null))
          )
            switch (e.tag) {
              case 3:
                Hi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Hi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[gt] = t),
            (t.stateNode = r));
      }
      return (Ee(t), null);
    case 13:
      if (
        (J(te),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ee && Ue !== null && t.mode & 1 && !(t.flags & 128))
          (Xh(), cr(), (t.flags |= 98560), (o = !1));
        else if (((o = Ki(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(R(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(R(317));
            o[gt] = t;
          } else
            (cr(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Ee(t), (o = !1));
        } else (lt !== null && (qa(lt), (lt = null)), (o = !0));
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || te.current & 1 ? ge === 0 && (ge = 3) : su())),
          t.updateQueue !== null && (t.flags |= 4),
          Ee(t),
          null);
    case 4:
      return (
        dr(),
        Ka(e, t),
        e === null && si(t.stateNode.containerInfo),
        Ee(t),
        null
      );
    case 10:
      return (Wl(t.type._context), Ee(t), null);
    case 17:
      return (Oe(t.type) && Ro(), Ee(t), null);
    case 19:
      if ((J(te), (o = t.memoizedState), o === null)) return (Ee(t), null);
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Dr(o, !1);
        else {
          if (ge !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Fo(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Dr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (Y(te, (te.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          o.tail !== null &&
            fe() > pr &&
            ((t.flags |= 128), (r = !0), Dr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Fo(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Dr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !ee)
            )
              return (Ee(t), null);
          } else
            2 * fe() - o.renderingStartTime > pr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Dr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = fe()),
          (t.sibling = null),
          (n = te.current),
          Y(te, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ee(t), null);
    case 22:
    case 23:
      return (
        ou(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Be & 1073741824 && (Ee(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ee(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function r0(e, t) {
  switch ((zl(t), t.tag)) {
    case 1:
      return (
        Oe(t.type) && Ro(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        dr(),
        J(Ie),
        J(De),
        Yl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Ql(t), null);
    case 13:
      if ((J(te), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(R(340));
        cr();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (J(te), null);
    case 4:
      return (dr(), null);
    case 10:
      return (Wl(t.type._context), null);
    case 22:
    case 23:
      return (ou(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Yi = !1,
  Me = !1,
  i0 = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function bn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        le(e, t, r);
      }
    else n.current = null;
}
function Ga(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var Jc = !1;
function o0(e, t) {
  if (((Da = To), (e = Ih()), Il(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, o.nodeType);
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (g = f.firstChild) !== null;
            )
              ((d = f), (f = g));
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (a = s),
                d === o && ++c === r && (l = s),
                (g = f.nextSibling) !== null)
              )
                break;
              ((f = d), (d = f.parentNode));
            }
            f = g;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Aa = { focusedElem: e, selectionRange: n }, To = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (L = e));
    else
      for (; L !== null; ) {
        t = L;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var w = x.memoizedProps,
                    S = x.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : st(t.type, w),
                      S,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (C) {
          le(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (L = e));
          break;
        }
        L = t.return;
      }
  return ((x = Jc), (Jc = !1), x);
}
function Kr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        ((i.destroy = void 0), o !== void 0 && Ga(t, n, o));
      }
      i = i.next;
    } while (i !== r);
  }
}
function os(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Qa(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function jp(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), jp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[gt], delete t[li], delete t[ja], delete t[Uv], delete t[$v])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Vp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function qc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Vp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ya(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Mo)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ya(e, t, n), e = e.sibling; e !== null; )
      (Ya(e, t, n), (e = e.sibling));
}
function ba(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ba(e, t, n), e = e.sibling; e !== null; )
      (ba(e, t, n), (e = e.sibling));
}
var we = null,
  at = !1;
function zt(e, t, n) {
  for (n = n.child; n !== null; ) (Fp(e, t, n), (n = n.sibling));
}
function Fp(e, t, n) {
  if (yt && typeof yt.onCommitFiberUnmount == "function")
    try {
      yt.onCommitFiberUnmount(Zo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Me || bn(n, t);
    case 6:
      var r = we,
        i = at;
      ((we = null),
        zt(e, t, n),
        (we = r),
        (at = i),
        we !== null &&
          (at
            ? ((e = we),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : we.removeChild(n.stateNode)));
      break;
    case 18:
      we !== null &&
        (at
          ? ((e = we),
            (n = n.stateNode),
            e.nodeType === 8
              ? Is(e.parentNode, n)
              : e.nodeType === 1 && Is(e, n),
            ri(e))
          : Is(we, n.stateNode));
      break;
    case 4:
      ((r = we),
        (i = at),
        (we = n.stateNode.containerInfo),
        (at = !0),
        zt(e, t, n),
        (we = r),
        (at = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          ((o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Ga(n, t, s),
            (i = i.next));
        } while (i !== r);
      }
      zt(e, t, n);
      break;
    case 1:
      if (
        !Me &&
        (bn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          le(n, t, a);
        }
      zt(e, t, n);
      break;
    case 21:
      zt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Me = (r = Me) || n.memoizedState !== null), zt(e, t, n), (Me = r))
        : zt(e, t, n);
      break;
    default:
      zt(e, t, n);
  }
}
function ef(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new i0()),
      t.forEach(function (r) {
        var i = p0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function it(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((we = a.stateNode), (at = !1));
              break e;
            case 3:
              ((we = a.stateNode.containerInfo), (at = !0));
              break e;
            case 4:
              ((we = a.stateNode.containerInfo), (at = !0));
              break e;
          }
          a = a.return;
        }
        if (we === null) throw Error(R(160));
        (Fp(o, s, i), (we = null), (at = !1));
        var l = i.alternate;
        (l !== null && (l.return = null), (i.return = null));
      } catch (u) {
        le(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (_p(t, e), (t = t.sibling));
}
function _p(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((it(t, e), pt(e), r & 4)) {
        try {
          (Kr(3, e, e.return), os(3, e));
        } catch (w) {
          le(e, e.return, w);
        }
        try {
          Kr(5, e, e.return);
        } catch (w) {
          le(e, e.return, w);
        }
      }
      break;
    case 1:
      (it(t, e), pt(e), r & 512 && n !== null && bn(n, n.return));
      break;
    case 5:
      if (
        (it(t, e),
        pt(e),
        r & 512 && n !== null && bn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          qr(i, "");
        } catch (w) {
          le(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && o.type === "radio" && o.name != null && ih(i, o),
              xa(a, s));
            var u = xa(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === "style"
                ? uh(i, f)
                : c === "dangerouslySetInnerHTML"
                  ? ah(i, f)
                  : c === "children"
                    ? qr(i, f)
                    : Tl(i, c, f, u);
            }
            switch (a) {
              case "input":
                pa(i, o);
                break;
              case "textarea":
                oh(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? nr(i, !!o.multiple, g, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? nr(i, !!o.multiple, o.defaultValue, !0)
                      : nr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[li] = o;
          } catch (w) {
            le(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((it(t, e), pt(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        ((i = e.stateNode), (o = e.memoizedProps));
        try {
          i.nodeValue = o;
        } catch (w) {
          le(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (it(t, e), pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ri(t.containerInfo);
        } catch (w) {
          le(e, e.return, w);
        }
      break;
    case 4:
      (it(t, e), pt(e));
      break;
    case 13:
      (it(t, e),
        pt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (ru = fe())),
        r & 4 && ef(e));
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Me = (u = Me) || c), it(t, e), (Me = u)) : it(t, e),
        pt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (L = e, c = e.child; c !== null; ) {
            for (f = L = c; L !== null; ) {
              switch (((d = L), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Kr(4, d, d.return);
                  break;
                case 1:
                  bn(d, d.return);
                  var x = d.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    ((r = d), (n = d.return));
                    try {
                      ((t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount());
                    } catch (w) {
                      le(r, n, w);
                    }
                  }
                  break;
                case 5:
                  bn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    nf(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (L = g)) : nf(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                ((i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = lh("display", s))));
              } catch (w) {
                le(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (w) {
                le(e, e.return, w);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (c === f && (c = null), (f = f.return));
          }
          (c === f && (c = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (it(t, e), pt(e), r & 4 && ef(e));
      break;
    case 21:
      break;
    default:
      (it(t, e), pt(e));
  }
}
function pt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Vp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (qr(i, ""), (r.flags &= -33));
          var o = qc(e);
          ba(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = qc(e);
          Ya(e, a, s);
          break;
        default:
          throw Error(R(161));
      }
    } catch (l) {
      le(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function s0(e, t, n) {
  ((L = e), Ip(e));
}
function Ip(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var i = L,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Yi;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Me;
        a = Yi;
        var u = Me;
        if (((Yi = s), (Me = l) && !u))
          for (L = i; L !== null; )
            ((s = L),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? rf(i)
                : l !== null
                  ? ((l.return = s), (L = l))
                  : rf(i));
        for (; o !== null; ) ((L = o), Ip(o), (o = o.sibling));
        ((L = i), (Yi = a), (Me = u));
      }
      tf(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (L = o)) : tf(e);
  }
}
function tf(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Me || os(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Me)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : st(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && zc(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                zc(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && ri(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Me || (t.flags & 512 && Qa(t));
      } catch (d) {
        le(t, t.return, d);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (L = n));
      break;
    }
    L = t.return;
  }
}
function nf(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (L = n));
      break;
    }
    L = t.return;
  }
}
function rf(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            os(4, t);
          } catch (l) {
            le(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              le(t, i, l);
            }
          }
          var o = t.return;
          try {
            Qa(t);
          } catch (l) {
            le(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Qa(t);
          } catch (l) {
            le(t, s, l);
          }
      }
    } catch (l) {
      le(t, t.return, l);
    }
    if (t === e) {
      L = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (L = a));
      break;
    }
    L = t.return;
  }
}
var a0 = Math.ceil,
  Oo = _t.ReactCurrentDispatcher,
  tu = _t.ReactCurrentOwner,
  qe = _t.ReactCurrentBatchConfig,
  K = 0,
  ve = null,
  he = null,
  Pe = 0,
  Be = 0,
  Xn = ln(0),
  ge = 0,
  pi = null,
  Dn = 0,
  ss = 0,
  nu = 0,
  Gr = null,
  Fe = null,
  ru = 0,
  pr = 1 / 0,
  Tt = null,
  zo = !1,
  Xa = null,
  qt = null,
  bi = !1,
  Gt = null,
  Bo = 0,
  Qr = 0,
  Za = null,
  ho = -1,
  po = 0;
function Ne() {
  return K & 6 ? fe() : ho !== -1 ? ho : (ho = fe());
}
function en(e) {
  return e.mode & 1
    ? K & 2 && Pe !== 0
      ? Pe & -Pe
      : Hv.transition !== null
        ? (po === 0 && (po = Sh()), po)
        : ((e = G),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Rh(e.type))),
          e)
    : 1;
}
function ct(e, t, n, r) {
  if (50 < Qr) throw ((Qr = 0), (Za = null), Error(R(185)));
  (Ci(e, n, r),
    (!(K & 2) || e !== ve) &&
      (e === ve && (!(K & 2) && (ss |= n), ge === 4 && Ht(e, Pe)),
      ze(e, r),
      n === 1 && K === 0 && !(t.mode & 1) && ((pr = fe() + 500), ns && un())));
}
function ze(e, t) {
  var n = e.callbackNode;
  Hy(e, t);
  var r = Co(e, e === ve ? Pe : 0);
  if (r === 0)
    (n !== null && dc(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && dc(n), t === 1))
      (e.tag === 0 ? Wv(of.bind(null, e)) : Qh(of.bind(null, e)),
        zv(function () {
          !(K & 6) && un();
        }),
        (n = null));
    else {
      switch (Ph(r)) {
        case 1:
          n = Dl;
          break;
        case 4:
          n = xh;
          break;
        case 16:
          n = Po;
          break;
        case 536870912:
          n = wh;
          break;
        default:
          n = Po;
      }
      n = Kp(n, Op.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Op(e, t) {
  if (((ho = -1), (po = 0), K & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (ar() && e.callbackNode !== n) return null;
  var r = Co(e, e === ve ? Pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Uo(e, r);
  else {
    t = r;
    var i = K;
    K |= 2;
    var o = Bp();
    (ve !== e || Pe !== t) && ((Tt = null), (pr = fe() + 500), Pn(e, t));
    do
      try {
        c0();
        break;
      } catch (a) {
        zp(e, a);
      }
    while (!0);
    ($l(),
      (Oo.current = o),
      (K = i),
      he !== null ? (t = 0) : ((ve = null), (Pe = 0), (t = ge)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ta(e)), i !== 0 && ((r = i), (t = Ja(e, i)))), t === 1)
    )
      throw ((n = pi), Pn(e, 0), Ht(e, r), ze(e, fe()), n);
    if (t === 6) Ht(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !l0(i) &&
          ((t = Uo(e, r)),
          t === 2 && ((o = Ta(e)), o !== 0 && ((r = o), (t = Ja(e, o)))),
          t === 1))
      )
        throw ((n = pi), Pn(e, 0), Ht(e, r), ze(e, fe()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          mn(e, Fe, Tt);
          break;
        case 3:
          if (
            (Ht(e, r), (r & 130023424) === r && ((t = ru + 500 - fe()), 10 < t))
          ) {
            if (Co(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              (Ne(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = La(mn.bind(null, e, Fe, Tt), t);
            break;
          }
          mn(e, Fe, Tt);
          break;
        case 4:
          if ((Ht(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - ut(r);
            ((o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o));
          }
          if (
            ((r = i),
            (r = fe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * a0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = La(mn.bind(null, e, Fe, Tt), r);
            break;
          }
          mn(e, Fe, Tt);
          break;
        case 5:
          mn(e, Fe, Tt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return (ze(e, fe()), e.callbackNode === n ? Op.bind(null, e) : null);
}
function Ja(e, t) {
  var n = Gr;
  return (
    e.current.memoizedState.isDehydrated && (Pn(e, t).flags |= 256),
    (e = Uo(e, t)),
    e !== 2 && ((t = Fe), (Fe = n), t !== null && qa(t)),
    e
  );
}
function qa(e) {
  Fe === null ? (Fe = e) : Fe.push.apply(Fe, e);
}
function l0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!ft(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Ht(e, t) {
  for (
    t &= ~nu,
      t &= ~ss,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - ut(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function of(e) {
  if (K & 6) throw Error(R(327));
  ar();
  var t = Co(e, 0);
  if (!(t & 1)) return (ze(e, fe()), null);
  var n = Uo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ta(e);
    r !== 0 && ((t = r), (n = Ja(e, r)));
  }
  if (n === 1) throw ((n = pi), Pn(e, 0), Ht(e, t), ze(e, fe()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    mn(e, Fe, Tt),
    ze(e, fe()),
    null
  );
}
function iu(e, t) {
  var n = K;
  K |= 1;
  try {
    return e(t);
  } finally {
    ((K = n), K === 0 && ((pr = fe() + 500), ns && un()));
  }
}
function An(e) {
  Gt !== null && Gt.tag === 0 && !(K & 6) && ar();
  var t = K;
  K |= 1;
  var n = qe.transition,
    r = G;
  try {
    if (((qe.transition = null), (G = 1), e)) return e();
  } finally {
    ((G = r), (qe.transition = n), (K = t), !(K & 6) && un());
  }
}
function ou() {
  ((Be = Xn.current), J(Xn));
}
function Pn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ov(n)), he !== null))
    for (n = he.return; n !== null; ) {
      var r = n;
      switch ((zl(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Ro());
          break;
        case 3:
          (dr(), J(Ie), J(De), Yl());
          break;
        case 5:
          Ql(r);
          break;
        case 4:
          dr();
          break;
        case 13:
          J(te);
          break;
        case 19:
          J(te);
          break;
        case 10:
          Wl(r.type._context);
          break;
        case 22:
        case 23:
          ou();
      }
      n = n.return;
    }
  if (
    ((ve = e),
    (he = e = tn(e.current, null)),
    (Pe = Be = t),
    (ge = 0),
    (pi = null),
    (nu = ss = Dn = 0),
    (Fe = Gr = null),
    xn !== null)
  ) {
    for (t = 0; t < xn.length; t++)
      if (((n = xn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          ((o.next = i), (r.next = s));
        }
        n.pending = r;
      }
    xn = null;
  }
  return e;
}
function zp(e, t) {
  do {
    var n = he;
    try {
      if (($l(), (uo.current = Io), _o)) {
        for (var r = re.memoizedState; r !== null; ) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        _o = !1;
      }
      if (
        ((Rn = 0),
        (ye = me = re = null),
        (Hr = !1),
        (fi = 0),
        (tu.current = null),
        n === null || n.return === null)
      ) {
        ((ge = 1), (pi = t), (he = null));
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Pe),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Kc(s);
          if (g !== null) {
            ((g.flags &= -257),
              Gc(g, s, a, o, t),
              g.mode & 1 && Hc(o, u, t),
              (t = g),
              (l = u));
            var x = t.updateQueue;
            if (x === null) {
              var w = new Set();
              (w.add(l), (t.updateQueue = w));
            } else x.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (Hc(o, u, t), su());
              break e;
            }
            l = Error(R(426));
          }
        } else if (ee && a.mode & 1) {
          var S = Kc(s);
          if (S !== null) {
            (!(S.flags & 65536) && (S.flags |= 256),
              Gc(S, s, a, o, t),
              Bl(hr(l, a)));
            break e;
          }
        }
        ((o = l = hr(l, a)),
          ge !== 4 && (ge = 2),
          Gr === null ? (Gr = [o]) : Gr.push(o),
          (o = s));
        do {
          switch (o.tag) {
            case 3:
              ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
              var p = Pp(o, l, t);
              Oc(o, p);
              break e;
            case 1:
              a = l;
              var h = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (qt === null || !qt.has(m))))
              ) {
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var C = Cp(o, a, t);
                Oc(o, C);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      $p(n);
    } catch (T) {
      ((t = T), he === n && n !== null && (he = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Bp() {
  var e = Oo.current;
  return ((Oo.current = Io), e === null ? Io : e);
}
function su() {
  ((ge === 0 || ge === 3 || ge === 2) && (ge = 4),
    ve === null || (!(Dn & 268435455) && !(ss & 268435455)) || Ht(ve, Pe));
}
function Uo(e, t) {
  var n = K;
  K |= 2;
  var r = Bp();
  (ve !== e || Pe !== t) && ((Tt = null), Pn(e, t));
  do
    try {
      u0();
      break;
    } catch (i) {
      zp(e, i);
    }
  while (!0);
  if (($l(), (K = n), (Oo.current = r), he !== null)) throw Error(R(261));
  return ((ve = null), (Pe = 0), ge);
}
function u0() {
  for (; he !== null; ) Up(he);
}
function c0() {
  for (; he !== null && !Fy(); ) Up(he);
}
function Up(e) {
  var t = Hp(e.alternate, e, Be);
  ((e.memoizedProps = e.pendingProps),
    t === null ? $p(e) : (he = t),
    (tu.current = null));
}
function $p(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = r0(n, t)), n !== null)) {
        ((n.flags &= 32767), (he = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ge = 6), (he = null));
        return;
      }
    } else if (((n = n0(n, t, Be)), n !== null)) {
      he = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      he = t;
      return;
    }
    he = t = e;
  } while (t !== null);
  ge === 0 && (ge = 5);
}
function mn(e, t, n) {
  var r = G,
    i = qe.transition;
  try {
    ((qe.transition = null), (G = 1), f0(e, t, n, r));
  } finally {
    ((qe.transition = i), (G = r));
  }
  return null;
}
function f0(e, t, n, r) {
  do ar();
  while (Gt !== null);
  if (K & 6) throw Error(R(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var o = n.lanes | n.childLanes;
  if (
    (Ky(e, o),
    e === ve && ((he = ve = null), (Pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      bi ||
      ((bi = !0),
      Kp(Po, function () {
        return (ar(), null);
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ((o = qe.transition), (qe.transition = null));
    var s = G;
    G = 1;
    var a = K;
    ((K |= 4),
      (tu.current = null),
      o0(e, n),
      _p(n, e),
      Nv(Aa),
      (To = !!Da),
      (Aa = Da = null),
      (e.current = n),
      s0(n),
      _y(),
      (K = a),
      (G = s),
      (qe.transition = o));
  } else e.current = n;
  if (
    (bi && ((bi = !1), (Gt = e), (Bo = i)),
    (o = e.pendingLanes),
    o === 0 && (qt = null),
    zy(n.stateNode),
    ze(e, fe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (zo) throw ((zo = !1), (e = Xa), (Xa = null), e);
  return (
    Bo & 1 && e.tag !== 0 && ar(),
    (o = e.pendingLanes),
    o & 1 ? (e === Za ? Qr++ : ((Qr = 0), (Za = e))) : (Qr = 0),
    un(),
    null
  );
}
function ar() {
  if (Gt !== null) {
    var e = Ph(Bo),
      t = qe.transition,
      n = G;
    try {
      if (((qe.transition = null), (G = 16 > e ? 16 : e), Gt === null))
        var r = !1;
      else {
        if (((e = Gt), (Gt = null), (Bo = 0), K & 6)) throw Error(R(331));
        var i = K;
        for (K |= 4, L = e.current; L !== null; ) {
          var o = L,
            s = o.child;
          if (L.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (L = u; L !== null; ) {
                  var c = L;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kr(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) ((f.return = c), (L = f));
                  else
                    for (; L !== null; ) {
                      c = L;
                      var d = c.sibling,
                        g = c.return;
                      if ((jp(c), c === u)) {
                        L = null;
                        break;
                      }
                      if (d !== null) {
                        ((d.return = g), (L = d));
                        break;
                      }
                      L = g;
                    }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var S = w.sibling;
                    ((w.sibling = null), (w = S));
                  } while (w !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) ((s.return = o), (L = s));
          else
            e: for (; L !== null; ) {
              if (((o = L), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Kr(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                ((p.return = o.return), (L = p));
                break e;
              }
              L = o.return;
            }
        }
        var h = e.current;
        for (L = h; L !== null; ) {
          s = L;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) ((m.return = s), (L = m));
          else
            e: for (s = h; L !== null; ) {
              if (((a = L), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      os(9, a);
                  }
                } catch (T) {
                  le(a, a.return, T);
                }
              if (a === s) {
                L = null;
                break e;
              }
              var C = a.sibling;
              if (C !== null) {
                ((C.return = a.return), (L = C));
                break e;
              }
              L = a.return;
            }
        }
        if (
          ((K = i), un(), yt && typeof yt.onPostCommitFiberRoot == "function")
        )
          try {
            yt.onPostCommitFiberRoot(Zo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((G = n), (qe.transition = t));
    }
  }
  return !1;
}
function sf(e, t, n) {
  ((t = hr(n, t)),
    (t = Pp(e, t, 1)),
    (e = Jt(e, t, 1)),
    (t = Ne()),
    e !== null && (Ci(e, 1, t), ze(e, t)));
}
function le(e, t, n) {
  if (e.tag === 3) sf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        sf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (qt === null || !qt.has(r)))
        ) {
          ((e = hr(n, e)),
            (e = Cp(t, e, 1)),
            (t = Jt(t, e, 1)),
            (e = Ne()),
            t !== null && (Ci(t, 1, e), ze(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function d0(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Ne()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ve === e &&
      (Pe & n) === n &&
      (ge === 4 || (ge === 3 && (Pe & 130023424) === Pe && 500 > fe() - ru)
        ? Pn(e, 0)
        : (nu |= n)),
    ze(e, t));
}
function Wp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = zi), (zi <<= 1), !(zi & 130023424) && (zi = 4194304))
      : (t = 1));
  var n = Ne();
  ((e = jt(e, t)), e !== null && (Ci(e, t, n), ze(e, n)));
}
function h0(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Wp(e, n));
}
function p0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  (r !== null && r.delete(t), Wp(e, n));
}
var Hp;
Hp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ie.current) _e = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((_e = !1), t0(e, t, n));
      _e = !!(e.flags & 131072);
    }
  else ((_e = !1), ee && t.flags & 1048576 && Yh(t, No, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (fo(e, t), (e = t.pendingProps));
      var i = ur(t, De.current);
      (sr(t, n), (i = Xl(null, t, r, e, i, n)));
      var o = Zl();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Oe(r) ? ((o = !0), Do(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Kl(t),
            (i.updater = is),
            (t.stateNode = i),
            (i._reactInternals = t),
            za(t, r, e, n),
            (t = $a(null, t, r, !0, o, n)))
          : ((t.tag = 0), ee && o && Ol(t), Ae(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (fo(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = g0(r)),
          (e = st(r, e)),
          i)
        ) {
          case 0:
            t = Ua(null, t, r, e, n);
            break e;
          case 1:
            t = bc(null, t, r, e, n);
            break e;
          case 11:
            t = Qc(null, t, r, e, n);
            break e;
          case 14:
            t = Yc(null, t, r, st(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : st(r, i)),
        Ua(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : st(r, i)),
        bc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Mp(t), e === null)) throw Error(R(387));
        ((r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          ep(e, t),
          Vo(t, r, null, n));
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ((i = hr(Error(R(423)), t)), (t = Xc(e, t, r, n, i)));
            break e;
          } else if (r !== i) {
            ((i = hr(Error(R(424)), t)), (t = Xc(e, t, r, n, i)));
            break e;
          } else
            for (
              Ue = Zt(t.stateNode.containerInfo.firstChild),
                $e = t,
                ee = !0,
                lt = null,
                n = Jh(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((cr(), r === i)) {
            t = Vt(e, t, n);
            break e;
          }
          Ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        tp(t),
        e === null && _a(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Na(r, i) ? (s = null) : o !== null && Na(r, o) && (t.flags |= 32),
        kp(e, t),
        Ae(e, t, s, n),
        t.child
      );
    case 6:
      return (e === null && _a(t), null);
    case 13:
      return Rp(e, t, n);
    case 4:
      return (
        Gl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = fr(t, null, r, n)) : Ae(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : st(r, i)),
        Qc(e, t, r, i, n)
      );
    case 7:
      return (Ae(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Ae(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Ae(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          Y(Lo, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (ft(o.value, s)) {
            if (o.children === i.children && !Ie.current) {
              t = Vt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      ((l = Rt(-1, n & -n)), (l.tag = 2));
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        (c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l));
                      }
                    }
                    ((o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Ia(o.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(R(341));
                ((s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Ia(s, n, t),
                  (s = o.sibling));
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    ((o.return = s.return), (s = o));
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        (Ae(e, t, i.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        sr(t, n),
        (i = et(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ae(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = st(r, t.pendingProps)),
        (i = st(r.type, i)),
        Yc(e, t, r, i, n)
      );
    case 15:
      return Tp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : st(r, i)),
        fo(e, t),
        (t.tag = 1),
        Oe(r) ? ((e = !0), Do(t)) : (e = !1),
        sr(t, n),
        Sp(t, r, i),
        za(t, r, i, n),
        $a(null, t, r, !0, e, n)
      );
    case 19:
      return Dp(e, t, n);
    case 22:
      return Ep(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function Kp(e, t) {
  return vh(e, t);
}
function m0(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Je(e, t, n, r) {
  return new m0(e, t, n, r);
}
function au(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function g0(e) {
  if (typeof e == "function") return au(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === kl)) return 11;
    if (e === Ml) return 14;
  }
  return 2;
}
function tn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Je(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function mo(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) au(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Bn:
        return Cn(n.children, i, o, t);
      case El:
        ((s = 8), (i |= 8));
        break;
      case ua:
        return (
          (e = Je(12, n, t, i | 2)),
          (e.elementType = ua),
          (e.lanes = o),
          e
        );
      case ca:
        return ((e = Je(13, n, t, i)), (e.elementType = ca), (e.lanes = o), e);
      case fa:
        return ((e = Je(19, n, t, i)), (e.elementType = fa), (e.lanes = o), e);
      case th:
        return as(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case qd:
              s = 10;
              break e;
            case eh:
              s = 9;
              break e;
            case kl:
              s = 11;
              break e;
            case Ml:
              s = 14;
              break e;
            case Ut:
              ((s = 16), (r = null));
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Je(s, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = o),
    t
  );
}
function Cn(e, t, n, r) {
  return ((e = Je(7, e, r, t)), (e.lanes = n), e);
}
function as(e, t, n, r) {
  return (
    (e = Je(22, e, r, t)),
    (e.elementType = th),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ks(e, t, n) {
  return ((e = Je(6, e, null, t)), (e.lanes = n), e);
}
function Gs(e, t, n) {
  return (
    (t = Je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function y0(e, t, n, r, i) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ks(0)),
    (this.expirationTimes = ks(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ks(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function lu(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new y0(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Je(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Kl(o),
    e
  );
}
function v0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: zn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Gp(e) {
  if (!e) return rn;
  e = e._reactInternals;
  e: {
    if (Ln(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Oe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Oe(n)) return Gh(e, n, t);
  }
  return t;
}
function Qp(e, t, n, r, i, o, s, a, l) {
  return (
    (e = lu(n, r, !0, e, i, o, s, a, l)),
    (e.context = Gp(null)),
    (n = e.current),
    (r = Ne()),
    (i = en(n)),
    (o = Rt(r, i)),
    (o.callback = t ?? null),
    Jt(n, o, i),
    (e.current.lanes = i),
    Ci(e, i, r),
    ze(e, r),
    e
  );
}
function ls(e, t, n, r) {
  var i = t.current,
    o = Ne(),
    s = en(i);
  return (
    (n = Gp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Rt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Jt(i, t, s)),
    e !== null && (ct(e, i, s, o), lo(e, i, s)),
    s
  );
}
function $o(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function af(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function uu(e, t) {
  (af(e, t), (e = e.alternate) && af(e, t));
}
function x0() {
  return null;
}
var Yp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function cu(e) {
  this._internalRoot = e;
}
us.prototype.render = cu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  ls(e, t, null, null);
};
us.prototype.unmount = cu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (An(function () {
      ls(null, e, null, null);
    }),
      (t[Lt] = null));
  }
};
function us(e) {
  this._internalRoot = e;
}
us.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Eh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Wt.length && t !== 0 && t < Wt[n].priority; n++);
    (Wt.splice(n, 0, e), n === 0 && Mh(e));
  }
};
function fu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function cs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function lf() {}
function w0(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = $o(s);
        o.call(u);
      };
    }
    var s = Qp(t, r, e, 0, null, !1, !1, "", lf);
    return (
      (e._reactRootContainer = s),
      (e[Lt] = s.current),
      si(e.nodeType === 8 ? e.parentNode : e),
      An(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = $o(l);
      a.call(u);
    };
  }
  var l = lu(e, 0, !1, null, null, !1, !1, "", lf);
  return (
    (e._reactRootContainer = l),
    (e[Lt] = l.current),
    si(e.nodeType === 8 ? e.parentNode : e),
    An(function () {
      ls(t, l, n, r);
    }),
    l
  );
}
function fs(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = $o(s);
        a.call(l);
      };
    }
    ls(t, s, e, i);
  } else s = w0(n, t, e, i, r);
  return $o(s);
}
Ch = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Vr(t.pendingLanes);
        n !== 0 &&
          (Al(t, n | 1), ze(t, fe()), !(K & 6) && ((pr = fe() + 500), un()));
      }
      break;
    case 13:
      (An(function () {
        var r = jt(e, 1);
        if (r !== null) {
          var i = Ne();
          ct(r, e, 1, i);
        }
      }),
        uu(e, 1));
  }
};
Nl = function (e) {
  if (e.tag === 13) {
    var t = jt(e, 134217728);
    if (t !== null) {
      var n = Ne();
      ct(t, e, 134217728, n);
    }
    uu(e, 134217728);
  }
};
Th = function (e) {
  if (e.tag === 13) {
    var t = en(e),
      n = jt(e, t);
    if (n !== null) {
      var r = Ne();
      ct(n, e, t, r);
    }
    uu(e, t);
  }
};
Eh = function () {
  return G;
};
kh = function (e, t) {
  var n = G;
  try {
    return ((G = e), t());
  } finally {
    G = n;
  }
};
Sa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((pa(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ts(r);
            if (!i) throw Error(R(90));
            (rh(r), pa(r, i));
          }
        }
      }
      break;
    case "textarea":
      oh(e, n);
      break;
    case "select":
      ((t = n.value), t != null && nr(e, !!n.multiple, t, !1));
  }
};
dh = iu;
hh = An;
var S0 = { usingClientEntryPoint: !1, Events: [Ei, Hn, ts, ch, fh, iu] },
  Ar = {
    findFiberByHostInstance: vn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  P0 = {
    bundleType: Ar.bundleType,
    version: Ar.version,
    rendererPackageName: Ar.rendererPackageName,
    rendererConfig: Ar.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: _t.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = gh(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Ar.findFiberByHostInstance || x0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xi.isDisabled && Xi.supportsFiber)
    try {
      ((Zo = Xi.inject(P0)), (yt = Xi));
    } catch {}
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = S0;
Ge.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!fu(t)) throw Error(R(200));
  return v0(e, t, null, n);
};
Ge.createRoot = function (e, t) {
  if (!fu(e)) throw Error(R(299));
  var n = !1,
    r = "",
    i = Yp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = lu(e, 1, !1, null, null, n, !1, r, i)),
    (e[Lt] = t.current),
    si(e.nodeType === 8 ? e.parentNode : e),
    new cu(t)
  );
};
Ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return ((e = gh(t)), (e = e === null ? null : e.stateNode), e);
};
Ge.flushSync = function (e) {
  return An(e);
};
Ge.hydrate = function (e, t, n) {
  if (!cs(t)) throw Error(R(200));
  return fs(null, e, t, !0, n);
};
Ge.hydrateRoot = function (e, t, n) {
  if (!fu(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Yp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Qp(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Lt] = t.current),
    si(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i));
  return new us(t);
};
Ge.render = function (e, t, n) {
  if (!cs(t)) throw Error(R(200));
  return fs(null, e, t, !1, n);
};
Ge.unmountComponentAtNode = function (e) {
  if (!cs(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (An(function () {
        fs(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Lt] = null));
        });
      }),
      !0)
    : !1;
};
Ge.unstable_batchedUpdates = iu;
Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!cs(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return fs(e, t, n, !1, r);
};
Ge.version = "18.3.1-next-f1338f8080-20240426";
function bp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bp);
    } catch (e) {
      console.error(e);
    }
}
(bp(), (bd.exports = Ge));
var C0 = bd.exports,
  uf = C0;
((aa.createRoot = uf.createRoot), (aa.hydrateRoot = uf.hydrateRoot));
/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function mi() {
  return (
    (mi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    mi.apply(null, arguments)
  );
}
var Qt;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(Qt || (Qt = {}));
const cf = "popstate";
function T0(e) {
  e === void 0 && (e = {});
  function t(i, o) {
    let {
      pathname: s = "/",
      search: a = "",
      hash: l = "",
    } = jn(i.location.hash.substr(1));
    return (
      !s.startsWith("/") && !s.startsWith(".") && (s = "/" + s),
      el(
        "",
        { pathname: s, search: a, hash: l },
        (o.state && o.state.usr) || null,
        (o.state && o.state.key) || "default",
      )
    );
  }
  function n(i, o) {
    let s = i.document.querySelector("base"),
      a = "";
    if (s && s.getAttribute("href")) {
      let l = i.location.href,
        u = l.indexOf("#");
      a = u === -1 ? l : l.slice(0, u);
    }
    return a + "#" + (typeof o == "string" ? o : Xp(o));
  }
  function r(i, o) {
    du(
      i.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(o) +
        ")",
    );
  }
  return k0(t, n, r, e);
}
function pe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function du(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function E0() {
  return Math.random().toString(36).substr(2, 8);
}
function ff(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function el(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    mi(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? jn(t) : t,
      { state: n, key: (t && t.key) || r || E0() },
    )
  );
}
function Xp(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function jn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function k0(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    a = Qt.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(mi({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = Qt.Pop;
    let S = c(),
      p = S == null ? null : S - u;
    ((u = S), l && l({ action: a, location: w.location, delta: p }));
  }
  function d(S, p) {
    a = Qt.Push;
    let h = el(w.location, S, p);
    (n && n(h, S), (u = c() + 1));
    let m = ff(h, u),
      C = w.createHref(h);
    try {
      s.pushState(m, "", C);
    } catch (T) {
      if (T instanceof DOMException && T.name === "DataCloneError") throw T;
      i.location.assign(C);
    }
    o && l && l({ action: a, location: w.location, delta: 1 });
  }
  function g(S, p) {
    a = Qt.Replace;
    let h = el(w.location, S, p);
    (n && n(h, S), (u = c()));
    let m = ff(h, u),
      C = w.createHref(h);
    (s.replaceState(m, "", C),
      o && l && l({ action: a, location: w.location, delta: 0 }));
  }
  function x(S) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
      h = typeof S == "string" ? S : Xp(S);
    return (
      (h = h.replace(/ $/, "%20")),
      pe(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          h,
      ),
      new URL(h, p)
    );
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(S) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(cf, f),
        (l = S),
        () => {
          (i.removeEventListener(cf, f), (l = null));
        }
      );
    },
    createHref(S) {
      return t(i, S);
    },
    createURL: x,
    encodeLocation(S) {
      let p = x(S);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: d,
    replace: g,
    go(S) {
      return s.go(S);
    },
  };
  return w;
}
var df;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(df || (df = {}));
function M0(e, t, n) {
  return (n === void 0 && (n = "/"), R0(e, t, n));
}
function R0(e, t, n, r) {
  let i = typeof t == "string" ? jn(t) : t,
    o = qp(i.pathname || "/", n);
  if (o == null) return null;
  let s = Zp(e);
  D0(s);
  let a = null,
    l = U0(o);
  for (let u = 0; a == null && u < s.length; ++u) a = O0(s[u], l);
  return a;
}
function Zp(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let i = (o, s, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    l.relativePath.startsWith("/") &&
      (pe(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Tn([r, l.relativePath]),
      c = n.concat(l);
    (o.children &&
      o.children.length > 0 &&
      (pe(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      Zp(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: _0(u, o.index), routesMeta: c }));
  };
  return (
    e.forEach((o, s) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
      else for (let l of Jp(o.path)) i(o, s, l);
    }),
    t
  );
}
function Jp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = Jp(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? o : [o, l].join("/")))),
    i && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function D0(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : I0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const A0 = /^:[\w-]+$/,
  N0 = 3,
  L0 = 2,
  j0 = 1,
  V0 = 10,
  F0 = -2,
  hf = (e) => e === "*";
function _0(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(hf) && (r += F0),
    t && (r += L0),
    n
      .filter((i) => !hf(i))
      .reduce((i, o) => i + (A0.test(o) ? N0 : o === "" ? j0 : V0), r)
  );
}
function I0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function O0(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    o = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      f = z0(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c,
      ),
      d = l.route;
    if (!f) return null;
    (Object.assign(i, f.params),
      s.push({
        params: i,
        pathname: Tn([o, f.pathname]),
        pathnameBase: H0(Tn([o, f.pathnameBase])),
        route: d,
      }),
      f.pathnameBase !== "/" && (o = Tn([o, f.pathnameBase])));
  }
  return s;
}
function z0(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = B0(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: d, isOptional: g } = c;
      if (d === "*") {
        let w = a[f] || "";
        s = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const x = a[f];
      return (
        g && !x ? (u[d] = void 0) : (u[d] = (x || "").replace(/%2F/g, "/")),
        u
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function B0(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    du(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (i += "\\/*$")
        : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function U0(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      du(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function qp(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function $0(e, t) {
  t === void 0 && (t = "/");
  let {
      pathname: n,
      search: r = "",
      hash: i = "",
    } = typeof e == "string" ? jn(e) : e,
    o;
  return (
    n
      ? ((n = nm(n)),
        n.startsWith("/") ? (o = pf(n.substring(1), "/")) : (o = pf(n, t)))
      : (o = t),
    { pathname: o, search: K0(r), hash: G0(i) }
  );
}
function pf(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Qs(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function W0(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function em(e, t) {
  let n = W0(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function tm(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = jn(e))
    : ((i = mi({}, e)),
      pe(
        !i.pathname || !i.pathname.includes("?"),
        Qs("?", "pathname", "search", i),
      ),
      pe(
        !i.pathname || !i.pathname.includes("#"),
        Qs("#", "pathname", "hash", i),
      ),
      pe(!i.search || !i.search.includes("#"), Qs("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    a;
  if (s == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; ) (d.shift(), (f -= 1));
      i.pathname = d.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = $0(i, a),
    u = s && s !== "/" && s.endsWith("/"),
    c = (o || s === ".") && n.endsWith("/");
  return (!l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l);
}
const nm = (e) => e.replace(/\/\/+/g, "/"),
  Tn = (e) => nm(e.join("/")),
  H0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  K0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  G0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Q0(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const rm = ["post", "put", "patch", "delete"];
new Set(rm);
const Y0 = ["get", ...rm];
new Set(Y0);
/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gi() {
  return (
    (gi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gi.apply(null, arguments)
  );
}
const hu = P.createContext(null),
  b0 = P.createContext(null),
  Mi = P.createContext(null),
  ds = P.createContext(null),
  Vn = P.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  im = P.createContext(null);
function Ri() {
  return P.useContext(ds) != null;
}
function hs() {
  return (Ri() || pe(!1), P.useContext(ds).location);
}
function om(e) {
  P.useContext(Mi).static || P.useLayoutEffect(e);
}
function It() {
  let { isDataRoute: e } = P.useContext(Vn);
  return e ? l1() : X0();
}
function X0() {
  Ri() || pe(!1);
  let e = P.useContext(hu),
    { basename: t, future: n, navigator: r } = P.useContext(Mi),
    { matches: i } = P.useContext(Vn),
    { pathname: o } = hs(),
    s = JSON.stringify(em(i, n.v7_relativeSplatPath)),
    a = P.useRef(!1);
  return (
    om(() => {
      a.current = !0;
    }),
    P.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = tm(u, JSON.parse(s), o, c.relative === "path");
        (e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Tn([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c));
      },
      [t, r, s, o, e],
    )
  );
}
function Z0(e, t) {
  return J0(e, t);
}
function J0(e, t, n, r) {
  Ri() || pe(!1);
  let { navigator: i } = P.useContext(Mi),
    { matches: o } = P.useContext(Vn),
    s = o[o.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = hs(),
    c;
  if (t) {
    var f;
    let S = typeof t == "string" ? jn(t) : t;
    (l === "/" || ((f = S.pathname) != null && f.startsWith(l)) || pe(!1),
      (c = S));
  } else c = u;
  let d = c.pathname || "/",
    g = d;
  if (l !== "/") {
    let S = l.replace(/^\//, "").split("/");
    g = "/" + d.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let x = M0(e, { pathname: g }),
    w = r1(
      x &&
        x.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, a, S.params),
            pathname: Tn([
              l,
              i.encodeLocation
                ? i.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? l
                : Tn([
                    l,
                    i.encodeLocation
                      ? i.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          }),
        ),
      o,
      n,
      r,
    );
  return t && w
    ? P.createElement(
        ds.Provider,
        {
          value: {
            location: gi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: Qt.Pop,
          },
        },
        w,
      )
    : w;
}
function q0() {
  let e = a1(),
    t = Q0(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return P.createElement(
    P.Fragment,
    null,
    P.createElement("h2", null, "Unexpected Application Error!"),
    P.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? P.createElement("pre", { style: i }, n) : null,
    null,
  );
}
const e1 = P.createElement(q0, null);
class t1 extends P.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? P.createElement(
          Vn.Provider,
          { value: this.props.routeContext },
          P.createElement(im.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function n1(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = P.useContext(hu);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(Vn.Provider, { value: t }, r)
  );
}
function r1(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = s.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0,
    );
    (c >= 0 || pe(!1), (s = s.slice(0, Math.min(s.length, c + 1))));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let f = s[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: d, errors: g } = n,
          x =
            f.route.loader &&
            d[f.route.id] === void 0 &&
            (!g || g[f.route.id] === void 0);
        if (f.route.lazy || x) {
          ((l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]));
          break;
        }
      }
    }
  return s.reduceRight((c, f, d) => {
    let g,
      x = !1,
      w = null,
      S = null;
    n &&
      ((g = a && f.route.id ? a[f.route.id] : void 0),
      (w = f.route.errorElement || e1),
      l &&
        (u < 0 && d === 0
          ? (u1("route-fallback"), (x = !0), (S = null))
          : u === d &&
            ((x = !0), (S = f.route.hydrateFallbackElement || null))));
    let p = t.concat(s.slice(0, d + 1)),
      h = () => {
        let m;
        return (
          g
            ? (m = w)
            : x
              ? (m = S)
              : f.route.Component
                ? (m = P.createElement(f.route.Component, null))
                : f.route.element
                  ? (m = f.route.element)
                  : (m = c),
          P.createElement(n1, {
            match: f,
            routeContext: { outlet: c, matches: p, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? P.createElement(t1, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: g,
          children: h(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var sm = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(sm || {}),
  am = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(am || {});
function i1(e) {
  let t = P.useContext(hu);
  return (t || pe(!1), t);
}
function o1(e) {
  let t = P.useContext(b0);
  return (t || pe(!1), t);
}
function s1(e) {
  let t = P.useContext(Vn);
  return (t || pe(!1), t);
}
function lm(e) {
  let t = s1(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || pe(!1), n.route.id);
}
function a1() {
  var e;
  let t = P.useContext(im),
    n = o1(),
    r = lm();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function l1() {
  let { router: e } = i1(sm.UseNavigateStable),
    t = lm(am.UseNavigateStable),
    n = P.useRef(!1);
  return (
    om(() => {
      n.current = !0;
    }),
    P.useCallback(
      function (i, o) {
        (o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, gi({ fromRouteId: t }, o))));
      },
      [e, t],
    )
  );
}
const mf = {};
function u1(e, t, n) {
  mf[e] || (mf[e] = !0);
}
function c1(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function f1(e) {
  let { to: t, replace: n, state: r, relative: i } = e;
  Ri() || pe(!1);
  let { future: o, static: s } = P.useContext(Mi),
    { matches: a } = P.useContext(Vn),
    { pathname: l } = hs(),
    u = It(),
    c = tm(t, em(a, o.v7_relativeSplatPath), l, i === "path"),
    f = JSON.stringify(c);
  return (
    P.useEffect(
      () => u(JSON.parse(f), { replace: n, state: r, relative: i }),
      [u, f, i, n, r],
    ),
    null
  );
}
function Ct(e) {
  pe(!1);
}
function d1(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Qt.Pop,
    navigator: o,
    static: s = !1,
    future: a,
  } = e;
  Ri() && pe(!1);
  let l = t.replace(/^\/*/, "/"),
    u = P.useMemo(
      () => ({
        basename: l,
        navigator: o,
        static: s,
        future: gi({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, o, s],
    );
  typeof r == "string" && (r = jn(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: d = "",
      state: g = null,
      key: x = "default",
    } = r,
    w = P.useMemo(() => {
      let S = qp(c, l);
      return S == null
        ? null
        : {
            location: { pathname: S, search: f, hash: d, state: g, key: x },
            navigationType: i,
          };
    }, [l, c, f, d, g, x, i]);
  return w == null
    ? null
    : P.createElement(
        Mi.Provider,
        { value: u },
        P.createElement(ds.Provider, { children: n, value: w }),
      );
}
function h1(e) {
  let { children: t, location: n } = e;
  return Z0(tl(t), n);
}
new Promise(() => {});
function tl(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    P.Children.forEach(e, (r, i) => {
      if (!P.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === P.Fragment) {
        n.push.apply(n, tl(r.props.children, o));
        return;
      }
      (r.type !== Ct && pe(!1), !r.props.index || !r.props.children || pe(!1));
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (s.children = tl(r.props.children, o)), n.push(s));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const p1 = "6";
try {
  window.__reactRouterVersion = p1;
} catch {}
const m1 = "startTransition",
  gf = dy[m1];
function g1(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = P.useRef();
  o.current == null && (o.current = T0({ window: i, v5Compat: !0 }));
  let s = o.current,
    [a, l] = P.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = P.useCallback(
      (f) => {
        u && gf ? gf(() => l(f)) : l(f);
      },
      [l, u],
    );
  return (
    P.useLayoutEffect(() => s.listen(c), [s, c]),
    P.useEffect(() => c1(r), [r]),
    P.createElement(d1, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
var yf;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(yf || (yf = {}));
var vf;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(vf || (vf = {}));
const pu = P.createContext({});
function mu(e) {
  const t = P.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const ps = P.createContext(null),
  gu = P.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
class y1 extends P.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      ((r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function v1({ children: e, isPresent: t }) {
  const n = P.useId(),
    r = P.useRef(null),
    i = P.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: o } = P.useContext(gu);
  return (
    P.useInsertionEffect(() => {
      const { width: s, height: a, top: l, left: u } = i.current;
      if (t || !r.current || !s || !a) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        o && (c.nonce = o),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    E.jsx(y1, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: P.cloneElement(e, { ref: r }),
    })
  );
}
const x1 = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
}) => {
  const a = mu(w1),
    l = P.useId(),
    u = P.useCallback(
      (f) => {
        a.set(f, !0);
        for (const d of a.values()) if (!d) return;
        r && r();
      },
      [a, r],
    ),
    c = P.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: u,
        register: (f) => (a.set(f, !1), () => a.delete(f)),
      }),
      o ? [Math.random(), u] : [n, u],
    );
  return (
    P.useMemo(() => {
      a.forEach((f, d) => a.set(d, !1));
    }, [n]),
    P.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    s === "popLayout" && (e = E.jsx(v1, { isPresent: n, children: e })),
    E.jsx(ps.Provider, { value: c, children: e })
  );
};
function w1() {
  return new Map();
}
function um(e = !0) {
  const t = P.useContext(ps);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    o = P.useId();
  P.useEffect(() => {
    e && i(o);
  }, [e]);
  const s = P.useCallback(() => e && r && r(o), [o, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const Zi = (e) => e.key || "";
function xf(e) {
  const t = [];
  return (
    P.Children.forEach(e, (n) => {
      P.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const yu = typeof window < "u",
  cm = yu ? P.useLayoutEffect : P.useEffect,
  vu = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: o = "sync",
    propagate: s = !1,
  }) => {
    const [a, l] = um(s),
      u = P.useMemo(() => xf(e), [e]),
      c = s && !a ? [] : u.map(Zi),
      f = P.useRef(!0),
      d = P.useRef(u),
      g = mu(() => new Map()),
      [x, w] = P.useState(u),
      [S, p] = P.useState(u);
    cm(() => {
      ((f.current = !1), (d.current = u));
      for (let C = 0; C < S.length; C++) {
        const T = Zi(S[C]);
        c.includes(T) ? g.delete(T) : g.get(T) !== !0 && g.set(T, !1);
      }
    }, [S, c.length, c.join("-")]);
    const h = [];
    if (u !== x) {
      let C = [...u];
      for (let T = 0; T < S.length; T++) {
        const M = S[T],
          D = Zi(M);
        c.includes(D) || (C.splice(T, 0, M), h.push(M));
      }
      (o === "wait" && h.length && (C = h), p(xf(C)), w(u));
      return;
    }
    const { forceRender: m } = P.useContext(pu);
    return E.jsx(E.Fragment, {
      children: S.map((C) => {
        const T = Zi(C),
          M = s && !a ? !1 : u === S || c.includes(T),
          D = () => {
            if (g.has(T)) g.set(T, !0);
            else return;
            let k = !0;
            (g.forEach((U) => {
              U || (k = !1);
            }),
              k &&
                (m == null || m(),
                p(d.current),
                s && (l == null || l()),
                r && r()));
          };
        return E.jsx(
          x1,
          {
            isPresent: M,
            initial: !f.current || n ? void 0 : !1,
            custom: M ? void 0 : t,
            presenceAffectsLayout: i,
            mode: o,
            onExitComplete: M ? void 0 : D,
            children: C,
          },
          T,
        );
      }),
    });
  },
  We = (e) => e;
let fm = We;
function xu(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const mr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Dt = (e) => e * 1e3,
  At = (e) => e / 1e3,
  S1 = { useManualTiming: !1 };
function P1(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const o = new WeakSet();
  let s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    (o.has(u) && (l.schedule(u), e()), u(s));
  }
  const l = {
    schedule: (u, c = !1, f = !1) => {
      const g = f && r ? t : n;
      return (c && o.add(u), g.has(u) || g.add(u), u);
    },
    cancel: (u) => {
      (n.delete(u), o.delete(u));
    },
    process: (u) => {
      if (((s = u), r)) {
        i = !0;
        return;
      }
      ((r = !0),
        ([t, n] = [n, t]),
        t.forEach(a),
        t.clear(),
        (r = !1),
        i && ((i = !1), l.process(u)));
    },
  };
  return l;
}
const Ji = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  C1 = 40;
function dm(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = Ji.reduce((p, h) => ((p[h] = P1(o)), p), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: f,
      postRender: d,
    } = s,
    g = () => {
      const p = performance.now();
      ((n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, C1), 1)),
        (i.timestamp = p),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(g)));
    },
    x = () => {
      ((n = !0), (r = !0), i.isProcessing || e(g));
    };
  return {
    schedule: Ji.reduce((p, h) => {
      const m = s[h];
      return (
        (p[h] = (C, T = !1, M = !1) => (n || x(), m.schedule(C, T, M))),
        p
      );
    }, {}),
    cancel: (p) => {
      for (let h = 0; h < Ji.length; h++) s[Ji[h]].cancel(p);
    },
    state: i,
    steps: s,
  };
}
const {
    schedule: q,
    cancel: on,
    state: Se,
    steps: Ys,
  } = dm(typeof requestAnimationFrame < "u" ? requestAnimationFrame : We, !0),
  hm = P.createContext({ strict: !1 }),
  wf = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  gr = {};
for (const e in wf) gr[e] = { isEnabled: (t) => wf[e].some((n) => !!t[n]) };
function T1(e) {
  for (const t in e) gr[t] = { ...gr[t], ...e[t] };
}
const E1 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Wo(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    E1.has(e)
  );
}
let pm = (e) => !Wo(e);
function k1(e) {
  e && (pm = (t) => (t.startsWith("on") ? !Wo(t) : e(t)));
}
try {
  k1(require("@emotion/is-prop-valid").default);
} catch {}
function M1(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((pm(i) ||
        (n === !0 && Wo(i)) ||
        (!t && !Wo(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function R1(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
const ms = P.createContext({});
function yi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function gs(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const wu = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Su = ["initial", ...wu];
function ys(e) {
  return gs(e.animate) || Su.some((t) => yi(e[t]));
}
function mm(e) {
  return !!(ys(e) || e.variants);
}
function D1(e, t) {
  if (ys(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || yi(n) ? n : void 0,
      animate: yi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function A1(e) {
  const { initial: t, animate: n } = D1(e, P.useContext(ms));
  return P.useMemo(() => ({ initial: t, animate: n }), [Sf(t), Sf(n)]);
}
function Sf(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const N1 = Symbol.for("motionComponentSymbol");
function Zn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function L1(e, t, n) {
  return P.useCallback(
    (r) => {
      (r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Zn(n) && (n.current = r)));
    },
    [t],
  );
}
const Pu = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  j1 = "framerAppearId",
  gm = "data-" + Pu(j1),
  { schedule: Cu } = dm(queueMicrotask, !1),
  ym = P.createContext({});
function V1(e, t, n, r, i) {
  var o, s;
  const { visualElement: a } = P.useContext(ms),
    l = P.useContext(hm),
    u = P.useContext(ps),
    c = P.useContext(gu).reducedMotion,
    f = P.useRef(null);
  ((r = r || l.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      })));
  const d = f.current,
    g = P.useContext(ym);
  d &&
    !d.projection &&
    i &&
    (d.type === "html" || d.type === "svg") &&
    F1(f.current, n, i, g);
  const x = P.useRef(!1);
  P.useInsertionEffect(() => {
    d && x.current && d.update(n, u);
  });
  const w = n[gm],
    S = P.useRef(
      !!w &&
        !(
          !((o = window.MotionHandoffIsComplete) === null || o === void 0) &&
          o.call(window, w)
        ) &&
        ((s = window.MotionHasOptimisedAnimation) === null || s === void 0
          ? void 0
          : s.call(window, w)),
    );
  return (
    cm(() => {
      d &&
        ((x.current = !0),
        (window.MotionIsMounted = !0),
        d.updateFeatures(),
        Cu.render(d.render),
        S.current && d.animationState && d.animationState.animateChanges());
    }),
    P.useEffect(() => {
      d &&
        (!S.current && d.animationState && d.animationState.animateChanges(),
        S.current &&
          (queueMicrotask(() => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) === null ||
              p === void 0 ||
              p.call(window, w);
          }),
          (S.current = !1)));
    }),
    d
  );
}
function F1(e, t, n, r) {
  const {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : vm(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (a && Zn(a)),
      visualElement: e,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    }));
}
function vm(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : vm(e.parent);
}
function _1({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  var o, s;
  e && T1(e);
  function a(u, c) {
    let f;
    const d = { ...P.useContext(gu), ...u, layoutId: I1(u) },
      { isStatic: g } = d,
      x = A1(u),
      w = r(u, g);
    if (!g && yu) {
      O1();
      const S = z1(d);
      ((f = S.MeasureLayout),
        (x.visualElement = V1(i, w, d, t, S.ProjectionNode)));
    }
    return E.jsxs(ms.Provider, {
      value: x,
      children: [
        f && x.visualElement
          ? E.jsx(f, { visualElement: x.visualElement, ...d })
          : null,
        n(i, u, L1(w, x.visualElement, c), w, g, x.visualElement),
      ],
    });
  }
  a.displayName = `motion.${typeof i == "string" ? i : `create(${(s = (o = i.displayName) !== null && o !== void 0 ? o : i.name) !== null && s !== void 0 ? s : ""})`}`;
  const l = P.forwardRef(a);
  return ((l[N1] = i), l);
}
function I1({ layoutId: e }) {
  const t = P.useContext(pu).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function O1(e, t) {
  P.useContext(hm).strict;
}
function z1(e) {
  const { drag: t, layout: n } = gr;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const B1 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Tu(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(B1.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Pf(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function Eu(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = Pf(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, o] = Pf(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
const nl = (e) => Array.isArray(e),
  U1 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  $1 = (e) => (nl(e) ? e[e.length - 1] || 0 : e),
  Re = (e) => !!(e && e.getVelocity);
function go(e) {
  const t = Re(e) ? e.get() : e;
  return U1(t) ? t.toValue() : t;
}
function W1(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  i,
  o,
) {
  const s = { latestValues: H1(r, i, o, e), renderState: t() };
  return (
    n &&
      ((s.onMount = (a) => n({ props: r, current: a, ...s })),
      (s.onUpdate = (a) => n(a))),
    s
  );
}
const xm = (e) => (t, n) => {
  const r = P.useContext(ms),
    i = P.useContext(ps),
    o = () => W1(e, t, r, i);
  return n ? o() : mu(o);
};
function H1(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = go(o[d]);
  let { initial: s, animate: a } = e;
  const l = ys(e),
    u = mm(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? a : s;
  if (f && typeof f != "boolean" && !gs(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let g = 0; g < d.length; g++) {
      const x = Eu(e, d[g]);
      if (x) {
        const { transitionEnd: w, transition: S, ...p } = x;
        for (const h in p) {
          let m = p[h];
          if (Array.isArray(m)) {
            const C = c ? m.length - 1 : 0;
            m = m[C];
          }
          m !== null && (i[h] = m);
        }
        for (const h in w) i[h] = w[h];
      }
    }
  }
  return i;
}
const Sr = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Fn = new Set(Sr),
  wm = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Sm = wm("--"),
  K1 = wm("var(--"),
  ku = (e) => (K1(e) ? G1.test(e.split("/*")[0].trim()) : !1),
  G1 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Pm = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Ft = (e, t, n) => (n > t ? t : n < e ? e : n),
  Pr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  vi = { ...Pr, transform: (e) => Ft(0, 1, e) },
  qi = { ...Pr, default: 1 },
  Di = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Bt = Di("deg"),
  xt = Di("%"),
  _ = Di("px"),
  Q1 = Di("vh"),
  Y1 = Di("vw"),
  Cf = {
    ...xt,
    parse: (e) => xt.parse(e) / 100,
    transform: (e) => xt.transform(e * 100),
  },
  b1 = {
    borderWidth: _,
    borderTopWidth: _,
    borderRightWidth: _,
    borderBottomWidth: _,
    borderLeftWidth: _,
    borderRadius: _,
    radius: _,
    borderTopLeftRadius: _,
    borderTopRightRadius: _,
    borderBottomRightRadius: _,
    borderBottomLeftRadius: _,
    width: _,
    maxWidth: _,
    height: _,
    maxHeight: _,
    top: _,
    right: _,
    bottom: _,
    left: _,
    padding: _,
    paddingTop: _,
    paddingRight: _,
    paddingBottom: _,
    paddingLeft: _,
    margin: _,
    marginTop: _,
    marginRight: _,
    marginBottom: _,
    marginLeft: _,
    backgroundPositionX: _,
    backgroundPositionY: _,
  },
  X1 = {
    rotate: Bt,
    rotateX: Bt,
    rotateY: Bt,
    rotateZ: Bt,
    scale: qi,
    scaleX: qi,
    scaleY: qi,
    scaleZ: qi,
    skew: Bt,
    skewX: Bt,
    skewY: Bt,
    distance: _,
    translateX: _,
    translateY: _,
    translateZ: _,
    x: _,
    y: _,
    z: _,
    perspective: _,
    transformPerspective: _,
    opacity: vi,
    originX: Cf,
    originY: Cf,
    originZ: _,
  },
  Tf = { ...Pr, transform: Math.round },
  Mu = {
    ...b1,
    ...X1,
    zIndex: Tf,
    size: _,
    fillOpacity: vi,
    strokeOpacity: vi,
    numOctaves: Tf,
  },
  Z1 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  J1 = Sr.length;
function q1(e, t, n) {
  let r = "",
    i = !0;
  for (let o = 0; o < J1; o++) {
    const s = Sr[o],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (s.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = Pm(a, Mu[s]);
      if (!l) {
        i = !1;
        const c = Z1[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r);
}
function Ru(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (Fn.has(l)) {
      s = !0;
      continue;
    } else if (Sm(l)) {
      i[l] = u;
      continue;
    } else {
      const c = Pm(u, Mu[l]);
      l.startsWith("origin") ? ((a = !0), (o[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = q1(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const ex = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  tx = { offset: "strokeDashoffset", array: "strokeDasharray" };
function nx(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? ex : tx;
  e[o.offset] = _.transform(-r);
  const s = _.transform(t),
    a = _.transform(n);
  e[o.array] = `${s} ${a}`;
}
function Ef(e, t, n) {
  return typeof e == "string" ? e : _.transform(t + n * e);
}
function rx(e, t, n) {
  const r = Ef(t, e.x, e.width),
    i = Ef(n, e.y, e.height);
  return `${r} ${i}`;
}
function Du(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  f,
) {
  if ((Ru(e, u, f), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: d, style: g, dimensions: x } = e;
  (d.transform && (x && (g.transform = d.transform), delete d.transform),
    x &&
      (i !== void 0 || o !== void 0 || g.transform) &&
      (g.transformOrigin = rx(
        x,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5,
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    s !== void 0 && nx(d, s, a, l, !1));
}
const Au = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Cm = () => ({ ...Au(), attrs: {} }),
  Nu = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Tm(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const Em = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function km(e, t, n, r) {
  Tm(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Em.has(i) ? i : Pu(i), t.attrs[i]);
}
const Ho = {};
function ix(e) {
  Object.assign(Ho, e);
}
function Mm(e, { layout: t, layoutId: n }) {
  return (
    Fn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Ho[e] || e === "opacity"))
  );
}
function Lu(e, t, n) {
  var r;
  const { style: i } = e,
    o = {};
  for (const s in i)
    (Re(i[s]) ||
      (t.style && Re(t.style[s])) ||
      Mm(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (o[s] = i[s]);
  return o;
}
function Rm(e, t, n) {
  const r = Lu(e, t, n);
  for (const i in e)
    if (Re(e[i]) || Re(t[i])) {
      const o =
        Sr.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
function ox(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const kf = ["x", "y", "width", "height", "cx", "cy", "r"],
  sx = {
    useVisualState: xm({
      scrapeMotionValuesFromProps: Rm,
      createRenderState: Cm,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: i,
      }) => {
        if (!n) return;
        let o = !!e.drag;
        if (!o) {
          for (const a in i)
            if (Fn.has(a)) {
              o = !0;
              break;
            }
        }
        if (!o) return;
        let s = !t;
        if (t)
          for (let a = 0; a < kf.length; a++) {
            const l = kf[a];
            e[l] !== t[l] && (s = !0);
          }
        s &&
          q.read(() => {
            (ox(n, r),
              q.render(() => {
                (Du(r, i, Nu(n.tagName), e.transformTemplate), km(n, r));
              }));
          });
      },
    }),
  },
  ax = {
    useVisualState: xm({
      scrapeMotionValuesFromProps: Lu,
      createRenderState: Au,
    }),
  };
function Dm(e, t, n) {
  for (const r in t) !Re(t[r]) && !Mm(r, n) && (e[r] = t[r]);
}
function lx({ transformTemplate: e }, t) {
  return P.useMemo(() => {
    const n = Au();
    return (Ru(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function ux(e, t) {
  const n = e.style || {},
    r = {};
  return (Dm(r, n, e), Object.assign(r, lx(e, t)), r);
}
function cx(e, t) {
  const n = {},
    r = ux(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function fx(e, t, n, r) {
  const i = P.useMemo(() => {
    const o = Cm();
    return (
      Du(o, t, Nu(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    (Dm(o, e.style, e), (i.style = { ...o, ...i.style }));
  }
  return i;
}
function dx(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const l = (Tu(n) ? fx : cx)(r, o, s, n),
      u = M1(r, typeof n == "string", e),
      c = n !== P.Fragment ? { ...u, ...l, ref: i } : {},
      { children: f } = r,
      d = P.useMemo(() => (Re(f) ? f.get() : f), [f]);
    return P.createElement(n, { ...c, children: d });
  };
}
function hx(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const s = {
      ...(Tu(r) ? sx : ax),
      preloadedFeatures: e,
      useRender: dx(i),
      createVisualElement: t,
      Component: r,
    };
    return _1(s);
  };
}
function Am(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function vs(e, t, n) {
  const r = e.getProps();
  return Eu(r, t, n !== void 0 ? n : r.custom, e);
}
const px = xu(() => window.ScrollTimeline !== void 0);
class mx {
  constructor(t) {
    ((this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean)));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t)),
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) => {
      if (px() && i.attachTimeline) return i.attachTimeline(t);
      if (typeof n == "function") return n(i);
    });
    return () => {
      r.forEach((i, o) => {
        (i && i(), this.animations[o].stop());
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class gx extends mx {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function ju(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const rl = 2e4;
function Nm(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < rl; ) ((t += n), (r = e.next(t)));
  return t >= rl ? 1 / 0 : t;
}
function Vu(e) {
  return typeof e == "function";
}
function Mf(e, t) {
  ((e.timeline = t), (e.onfinish = null));
}
const Fu = (e) => Array.isArray(e) && typeof e[0] == "number",
  yx = { linearEasing: void 0 };
function vx(e, t) {
  const n = xu(e);
  return () => {
    var r;
    return (r = yx[t]) !== null && r !== void 0 ? r : n();
  };
}
const Ko = vx(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Lm = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let o = 0; o < i; o++) r += e(mr(0, i - 1, o)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function jm(e) {
  return !!(
    (typeof e == "function" && Ko()) ||
    !e ||
    (typeof e == "string" && (e in il || Ko())) ||
    Fu(e) ||
    (Array.isArray(e) && e.every(jm))
  );
}
const _r = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  il = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: _r([0, 0.65, 0.55, 1]),
    circOut: _r([0.55, 0, 1, 0.45]),
    backIn: _r([0.31, 0.01, 0.66, -0.59]),
    backOut: _r([0.33, 1.53, 0.69, 0.99]),
  };
function Vm(e, t) {
  if (e)
    return typeof e == "function" && Ko()
      ? Lm(e, t)
      : Fu(e)
        ? _r(e)
        : Array.isArray(e)
          ? e.map((n) => Vm(n, t) || il.easeOut)
          : il[e];
}
const ot = { x: !1, y: !1 };
function Fm() {
  return ot.x || ot.y;
}
function xx(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let i = document;
    const o = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return o ? Array.from(o) : [];
  }
  return Array.from(e);
}
function _m(e, t) {
  const n = xx(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function Rf(e) {
  return (t) => {
    t.pointerType === "touch" || Fm() || e(t);
  };
}
function wx(e, t, n = {}) {
  const [r, i, o] = _m(e, n),
    s = Rf((a) => {
      const { target: l } = a,
        u = t(a);
      if (typeof u != "function" || !l) return;
      const c = Rf((f) => {
        (u(f), l.removeEventListener("pointerleave", c));
      });
      l.addEventListener("pointerleave", c, i);
    });
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", s, i);
    }),
    o
  );
}
const Im = (e, t) => (t ? (e === t ? !0 : Im(e, t.parentElement)) : !1),
  _u = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  Sx = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Px(e) {
  return Sx.has(e.tagName) || e.tabIndex !== -1;
}
const Ir = new WeakSet();
function Df(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function bs(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const Cx = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Df(() => {
    if (Ir.has(n)) return;
    bs(n, "down");
    const i = Df(() => {
        bs(n, "up");
      }),
      o = () => bs(n, "cancel");
    (n.addEventListener("keyup", i, t), n.addEventListener("blur", o, t));
  });
  (n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
};
function Af(e) {
  return _u(e) && !Fm();
}
function Tx(e, t, n = {}) {
  const [r, i, o] = _m(e, n),
    s = (a) => {
      const l = a.currentTarget;
      if (!Af(a) || Ir.has(l)) return;
      Ir.add(l);
      const u = t(a),
        c = (g, x) => {
          (window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", d),
            !(!Af(g) || !Ir.has(l)) &&
              (Ir.delete(l), typeof u == "function" && u(g, { success: x })));
        },
        f = (g) => {
          c(g, n.useGlobalTarget || Im(l, g.target));
        },
        d = (g) => {
          c(g, !1);
        };
      (window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", d, i));
    };
  return (
    r.forEach((a) => {
      (!Px(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, i),
        a.addEventListener("focus", (u) => Cx(u, i), i));
    }),
    o
  );
}
function Ex(e) {
  return e === "x" || e === "y"
    ? ot[e]
      ? null
      : ((ot[e] = !0),
        () => {
          ot[e] = !1;
        })
    : ot.x || ot.y
      ? null
      : ((ot.x = ot.y = !0),
        () => {
          ot.x = ot.y = !1;
        });
}
const Om = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Sr,
]);
let yo;
function kx() {
  yo = void 0;
}
const wt = {
  now: () => (
    yo === void 0 &&
      wt.set(
        Se.isProcessing || S1.useManualTiming
          ? Se.timestamp
          : performance.now(),
      ),
    yo
  ),
  set: (e) => {
    ((yo = e), queueMicrotask(kx));
  },
};
function Iu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Ou(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class zu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (Iu(this.subscriptions, t), () => Ou(this.subscriptions, t));
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function zm(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Nf = 30,
  Mx = (e) => !isNaN(parseFloat(e));
class Rx {
  constructor(t, n = {}) {
    ((this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const o = wt.now();
        (this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = wt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = Mx(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new zu());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            q.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = wt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Nf
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Nf);
    return zm(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function xi(e, t) {
  return new Rx(e, t);
}
function Dx(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, xi(n));
}
function Ax(e, t) {
  const n = vs(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = $1(o[s]);
    Dx(e, s, a);
  }
}
function Nx(e) {
  return !!(Re(e) && e.add);
}
function ol(e, t) {
  const n = e.getValue("willChange");
  if (Nx(n)) return n.add(t);
}
function Bm(e) {
  return e.props[gm];
}
const Um = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Lx = 1e-7,
  jx = 12;
function Vx(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do ((s = t + (n - t) / 2), (o = Um(s, r, i) - e), o > 0 ? (n = s) : (t = s));
  while (Math.abs(o) > Lx && ++a < jx);
  return s;
}
function Ai(e, t, n, r) {
  if (e === t && n === r) return We;
  const i = (o) => Vx(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Um(i(o), t, r));
}
const $m = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Wm = (e) => (t) => 1 - e(1 - t),
  Hm = Ai(0.33, 1.53, 0.69, 0.99),
  Bu = Wm(Hm),
  Km = $m(Bu),
  Gm = (e) =>
    (e *= 2) < 1 ? 0.5 * Bu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Uu = (e) => 1 - Math.sin(Math.acos(e)),
  Qm = Wm(Uu),
  Ym = $m(Uu),
  bm = (e) => /^0[^.\s]+$/u.test(e);
function Fx(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || bm(e)
      : !0;
}
const Yr = (e) => Math.round(e * 1e5) / 1e5,
  $u = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function _x(e) {
  return e == null;
}
const Ix =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Wu = (e, t) => (n) =>
    !!(
      (typeof n == "string" && Ix.test(n) && n.startsWith(e)) ||
      (t && !_x(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Xm = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, o, s, a] = r.match($u);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Ox = (e) => Ft(0, 255, e),
  Xs = { ...Pr, transform: (e) => Math.round(Ox(e)) },
  Sn = {
    test: Wu("rgb", "red"),
    parse: Xm("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Xs.transform(e) +
      ", " +
      Xs.transform(t) +
      ", " +
      Xs.transform(n) +
      ", " +
      Yr(vi.transform(r)) +
      ")",
  };
function zx(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const sl = { test: Wu("#"), parse: zx, transform: Sn.transform },
  Jn = {
    test: Wu("hsl", "hue"),
    parse: Xm("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      xt.transform(Yr(t)) +
      ", " +
      xt.transform(Yr(n)) +
      ", " +
      Yr(vi.transform(r)) +
      ")",
  },
  ke = {
    test: (e) => Sn.test(e) || sl.test(e) || Jn.test(e),
    parse: (e) =>
      Sn.test(e) ? Sn.parse(e) : Jn.test(e) ? Jn.parse(e) : sl.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? Sn.transform(e)
          : Jn.transform(e),
  },
  Bx =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Ux(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match($u)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Bx)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Zm = "number",
  Jm = "color",
  $x = "var",
  Wx = "var(",
  Lf = "${}",
  Hx =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function wi(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = t
    .replace(
      Hx,
      (l) => (
        ke.test(l)
          ? (r.color.push(o), i.push(Jm), n.push(ke.parse(l)))
          : l.startsWith(Wx)
            ? (r.var.push(o), i.push($x), n.push(l))
            : (r.number.push(o), i.push(Zm), n.push(parseFloat(l))),
        ++o,
        Lf
      ),
    )
    .split(Lf);
  return { values: n, split: a, indexes: r, types: i };
}
function qm(e) {
  return wi(e).values;
}
function eg(e) {
  const { split: t, types: n } = wi(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const a = n[s];
        a === Zm
          ? (o += Yr(i[s]))
          : a === Jm
            ? (o += ke.transform(i[s]))
            : (o += i[s]);
      }
    return o;
  };
}
const Kx = (e) => (typeof e == "number" ? 0 : e);
function Gx(e) {
  const t = qm(e);
  return eg(e)(t.map(Kx));
}
const sn = {
    test: Ux,
    parse: qm,
    createTransformer: eg,
    getAnimatableNone: Gx,
  },
  Qx = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Yx(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match($u) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = Qx.has(t) ? 1 : 0;
  return (r !== n && (o *= 100), t + "(" + o + i + ")");
}
const bx = /\b([a-z-]*)\(.*?\)/gu,
  al = {
    ...sn,
    getAnimatableNone: (e) => {
      const t = e.match(bx);
      return t ? t.map(Yx).join(" ") : e;
    },
  },
  Xx = {
    ...Mu,
    color: ke,
    backgroundColor: ke,
    outlineColor: ke,
    fill: ke,
    stroke: ke,
    borderColor: ke,
    borderTopColor: ke,
    borderRightColor: ke,
    borderBottomColor: ke,
    borderLeftColor: ke,
    filter: al,
    WebkitFilter: al,
  },
  Hu = (e) => Xx[e];
function tg(e, t) {
  let n = Hu(e);
  return (
    n !== al && (n = sn),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Zx = new Set(["auto", "none", "0"]);
function Jx(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    (typeof o == "string" && !Zx.has(o) && wi(o).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (const o of t) e[o] = tg(n, i);
}
const jf = (e) => e === Pr || e === _,
  Vf = (e, t) => parseFloat(e.split(", ")[t]),
  Ff =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Vf(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/u);
        return o ? Vf(o[1], e) : 0;
      }
    },
  qx = new Set(["x", "y", "z"]),
  ew = Sr.filter((e) => !qx.has(e));
function tw(e) {
  const t = [];
  return (
    ew.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const yr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Ff(4, 13),
  y: Ff(5, 14),
};
yr.translateX = yr.x;
yr.translateY = yr.y;
const En = new Set();
let ll = !1,
  ul = !1;
function ng() {
  if (ul) {
    const e = Array.from(En).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const i = tw(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((ul = !1), (ll = !1), En.forEach((e) => e.complete()), En.clear());
}
function rg() {
  En.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (ul = !0));
  });
}
function nw() {
  (rg(), ng());
}
class Ku {
  constructor(t, n, r, i, o, s = !1) {
    ((this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s));
  }
  scheduleResolve() {
    ((this.isScheduled = !0),
      this.isAsync
        ? (En.add(this), ll || ((ll = !0), q.read(rg), q.resolveKeyframes(ng)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          (t[0] === void 0 && (t[0] = a), i && s === void 0 && i.set(t[0]));
        } else t[o] = t[o - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    ((this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      En.delete(this));
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), En.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const ig = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  rw = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function iw(e) {
  const t = rw.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function og(e, t, n = 1) {
  const [r, i] = iw(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return ig(s) ? parseFloat(s) : s;
  }
  return ku(i) ? og(i, t, n + 1) : i;
}
const sg = (e) => (t) => t.test(e),
  ow = { test: (e) => e === "auto", parse: (e) => e },
  ag = [Pr, _, xt, Bt, Y1, Q1, ow],
  _f = (e) => ag.find(sg(e));
class lg extends Ku {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), ku(u))) {
        const c = og(u, n.current);
        (c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u));
      }
    }
    if ((this.resolveNoneKeyframes(), !Om.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = _f(i),
      a = _f(o);
    if (s !== a)
      if (jf(s) && jf(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) Fx(t[i]) && r.push(i);
    r.length && Jx(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = yr[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin));
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const s = i.length - 1,
      a = i[s];
    ((i[s] = yr[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes());
  }
}
const If = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (sn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function sw(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function aw(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const o = e[e.length - 1],
    s = If(i, t),
    a = If(o, t);
  return !s || !a ? !1 : sw(e) || ((n === "spring" || Vu(n)) && r);
}
const lw = (e) => e !== null;
function xs(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(lw),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
const uw = 40;
class ug {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = "loop",
    ...a
  }) {
    ((this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = wt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        ...a,
      }),
      this.updateFinishedPromise());
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > uw
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return (
      !this._resolved && !this.hasAttemptedResolve && nw(),
      this._resolved
    );
  }
  onKeyframesResolved(t, n) {
    ((this.resolvedAt = wt.now()), (this.hasAttemptedResolve = !0));
    const {
      name: r,
      type: i,
      velocity: o,
      delay: s,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !aw(t, r, i, o))
      if (s) this.options.duration = 0;
      else {
        (l && l(xs(t, this.options, n)),
          a && a(),
          this.resolveFinishedPromise());
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    ((this.options.type = "keyframes"), (this.options.ease = "linear"));
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const ne = (e, t, n) => e + (t - e) * n;
function Zs(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function cw({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    ((i = Zs(l, a, e + 1 / 3)), (o = Zs(l, a, e)), (s = Zs(l, a, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function Go(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Js = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  fw = [sl, Sn, Jn],
  dw = (e) => fw.find((t) => t.test(e));
function Of(e) {
  const t = dw(e);
  if (!t) return !1;
  let n = t.parse(e);
  return (t === Jn && (n = cw(n)), n);
}
const zf = (e, t) => {
    const n = Of(e),
      r = Of(t);
    if (!n || !r) return Go(e, t);
    const i = { ...n };
    return (o) => (
      (i.red = Js(n.red, r.red, o)),
      (i.green = Js(n.green, r.green, o)),
      (i.blue = Js(n.blue, r.blue, o)),
      (i.alpha = ne(n.alpha, r.alpha, o)),
      Sn.transform(i)
    );
  },
  hw = (e, t) => (n) => t(e(n)),
  Ni = (...e) => e.reduce(hw),
  cl = new Set(["none", "hidden"]);
function pw(e, t) {
  return cl.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function mw(e, t) {
  return (n) => ne(e, t, n);
}
function Gu(e) {
  return typeof e == "number"
    ? mw
    : typeof e == "string"
      ? ku(e)
        ? Go
        : ke.test(e)
          ? zf
          : vw
      : Array.isArray(e)
        ? cg
        : typeof e == "object"
          ? ke.test(e)
            ? zf
            : gw
          : Go;
}
function cg(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => Gu(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function gw(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Gu(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function yw(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o],
      a = e.indexes[s][i[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    ((r[o] = l), i[s]++);
  }
  return r;
}
const vw = (e, t) => {
  const n = sn.createTransformer(t),
    r = wi(e),
    i = wi(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (cl.has(e) && !i.values.length) || (cl.has(t) && !r.values.length)
      ? pw(e, t)
      : Ni(cg(yw(r, i), i.values), n)
    : Go(e, t);
};
function fg(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? ne(e, t, n)
    : Gu(e)(e, t);
}
const xw = 5;
function dg(e, t, n) {
  const r = Math.max(t - xw, 0);
  return zm(n - e(r), t - r);
}
const ae = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  qs = 0.001;
function ww({
  duration: e = ae.duration,
  bounce: t = ae.bounce,
  velocity: n = ae.velocity,
  mass: r = ae.mass,
}) {
  let i,
    o,
    s = 1 - t;
  ((s = Ft(ae.minDamping, ae.maxDamping, s)),
    (e = Ft(ae.minDuration, ae.maxDuration, At(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            g = fl(u, s),
            x = Math.exp(-f);
          return qs - (d / g) * x;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            g = Math.pow(s, 2) * Math.pow(u, 2) * e,
            x = Math.exp(-f),
            w = fl(Math.pow(u, 2), s);
          return ((-i(u) + qs > 0 ? -1 : 1) * ((d - g) * x)) / w;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -qs + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        })));
  const a = 5 / e,
    l = Pw(i, o, a);
  if (((e = Dt(e)), isNaN(l)))
    return { stiffness: ae.stiffness, damping: ae.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Sw = 12;
function Pw(e, t, n) {
  let r = n;
  for (let i = 1; i < Sw; i++) r = r - e(r) / t(r);
  return r;
}
function fl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Cw = ["duration", "bounce"],
  Tw = ["stiffness", "damping", "mass"];
function Bf(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Ew(e) {
  let t = {
    velocity: ae.velocity,
    stiffness: ae.stiffness,
    damping: ae.damping,
    mass: ae.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Bf(e, Tw) && Bf(e, Cw))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        o = 2 * Ft(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: ae.mass, stiffness: i, damping: o };
    } else {
      const n = ww(e);
      ((t = { ...t, ...n, mass: ae.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function hg(e = ae.visualDuration, t = ae.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const o = n.keyframes[0],
    s = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: f,
      velocity: d,
      isResolvedFromDuration: g,
    } = Ew({ ...n, velocity: -At(n.velocity || 0) }),
    x = d || 0,
    w = u / (2 * Math.sqrt(l * c)),
    S = s - o,
    p = At(Math.sqrt(l / c)),
    h = Math.abs(S) < 5;
  (r || (r = h ? ae.restSpeed.granular : ae.restSpeed.default),
    i || (i = h ? ae.restDelta.granular : ae.restDelta.default));
  let m;
  if (w < 1) {
    const T = fl(p, w);
    m = (M) => {
      const D = Math.exp(-w * p * M);
      return (
        s - D * (((x + w * p * S) / T) * Math.sin(T * M) + S * Math.cos(T * M))
      );
    };
  } else if (w === 1) m = (T) => s - Math.exp(-p * T) * (S + (x + p * S) * T);
  else {
    const T = p * Math.sqrt(w * w - 1);
    m = (M) => {
      const D = Math.exp(-w * p * M),
        k = Math.min(T * M, 300);
      return (
        s - (D * ((x + w * p * S) * Math.sinh(k) + T * S * Math.cosh(k))) / T
      );
    };
  }
  const C = {
    calculatedDuration: (g && f) || null,
    next: (T) => {
      const M = m(T);
      if (g) a.done = T >= f;
      else {
        let D = 0;
        w < 1 && (D = T === 0 ? Dt(x) : dg(m, T, M));
        const k = Math.abs(D) <= r,
          U = Math.abs(s - M) <= i;
        a.done = k && U;
      }
      return ((a.value = a.done ? s : M), a);
    },
    toString: () => {
      const T = Math.min(Nm(C), rl),
        M = Lm((D) => C.next(T * D).value, T, 30);
      return T + "ms " + M;
    },
  };
  return C;
}
function Uf({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    g = (k) => (a !== void 0 && k < a) || (l !== void 0 && k > l),
    x = (k) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - k) < Math.abs(l - k)
          ? a
          : l;
  let w = n * t;
  const S = f + w,
    p = s === void 0 ? S : s(S);
  p !== S && (w = p - f);
  const h = (k) => -w * Math.exp(-k / r),
    m = (k) => p + h(k),
    C = (k) => {
      const U = h(k),
        V = m(k);
      ((d.done = Math.abs(U) <= u), (d.value = d.done ? p : V));
    };
  let T, M;
  const D = (k) => {
    g(d.value) &&
      ((T = k),
      (M = hg({
        keyframes: [d.value, x(d.value)],
        velocity: dg(m, k, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    D(0),
    {
      calculatedDuration: null,
      next: (k) => {
        let U = !1;
        return (
          !M && T === void 0 && ((U = !0), C(k), D(k)),
          T !== void 0 && k >= T ? M.next(k - T) : (!U && C(k), d)
        );
      },
    }
  );
}
const kw = Ai(0.42, 0, 1, 1),
  Mw = Ai(0, 0, 0.58, 1),
  pg = Ai(0.42, 0, 0.58, 1),
  Rw = (e) => Array.isArray(e) && typeof e[0] != "number",
  Dw = {
    linear: We,
    easeIn: kw,
    easeInOut: pg,
    easeOut: Mw,
    circIn: Uu,
    circInOut: Ym,
    circOut: Qm,
    backIn: Bu,
    backInOut: Km,
    backOut: Hm,
    anticipate: Gm,
  },
  $f = (e) => {
    if (Fu(e)) {
      fm(e.length === 4);
      const [t, n, r, i] = e;
      return Ai(t, n, r, i);
    } else if (typeof e == "string") return Dw[e];
    return e;
  };
function Aw(e, t, n) {
  const r = [],
    i = n || fg,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || We : t;
      a = Ni(l, a);
    }
    r.push(a);
  }
  return r;
}
function Nw(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((fm(o === t.length), o === 1)) return () => t[0];
  if (o === 2 && t[0] === t[1]) return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = Aw(t, r, i),
    l = a.length,
    u = (c) => {
      if (s && c < e[0]) return t[0];
      let f = 0;
      if (l > 1) for (; f < e.length - 2 && !(c < e[f + 1]); f++);
      const d = mr(e[f], e[f + 1], c);
      return a[f](d);
    };
  return n ? (c) => u(Ft(e[0], e[o - 1], c)) : u;
}
function Lw(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = mr(0, t, r);
    e.push(ne(n, 1, i));
  }
}
function jw(e) {
  const t = [0];
  return (Lw(t, e.length - 1), t);
}
function Vw(e, t) {
  return e.map((n) => n * t);
}
function Fw(e, t) {
  return e.map(() => t || pg).splice(0, e.length - 1);
}
function Qo({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = Rw(r) ? r.map($f) : $f(r),
    o = { done: !1, value: t[0] },
    s = Vw(n && n.length === t.length ? n : jw(t), e),
    a = Nw(s, t, { ease: Array.isArray(i) ? i : Fw(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
const _w = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => q.update(t, !0),
      stop: () => on(t),
      now: () => (Se.isProcessing ? Se.timestamp : wt.now()),
    };
  },
  Iw = { decay: Uf, inertia: Uf, tween: Qo, keyframes: Qo, spring: hg },
  Ow = (e) => e / 100;
class Qu extends ug {
  constructor(t) {
    (super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      }));
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options,
      s = (i == null ? void 0 : i.KeyframeResolver) || Ku,
      a = (l, u) => this.onKeyframesResolved(l, u);
    ((this.resolver = new s(o, a, n, r, i)), this.resolver.scheduleResolve());
  }
  flatten() {
    (super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes),
        ));
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: o,
        velocity: s = 0,
      } = this.options,
      a = Vu(n) ? n : Iw[n] || Qo;
    let l, u;
    a !== Qo &&
      typeof t[0] != "number" &&
      ((l = Ni(Ow, fg(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    (o === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = Nm(c)));
    const { calculatedDuration: f } = c,
      d = f + i,
      g = d * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: g,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    (this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState));
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: k } = this.options;
      return { done: !0, value: k[k.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: o,
      mirroredGenerator: s,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return o.next(0);
    const {
      delay: d,
      repeat: g,
      repeatType: x,
      repeatDelay: w,
      onUpdate: S,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed));
    const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? p < 0 : p > c;
    ((this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c));
    let m = this.currentTime,
      C = o;
    if (g) {
      const k = Math.min(this.currentTime, c) / f;
      let U = Math.floor(k),
        V = k % 1;
      (!V && k >= 1 && (V = 1),
        V === 1 && U--,
        (U = Math.min(U, g + 1)),
        !!(U % 2) &&
          (x === "reverse"
            ? ((V = 1 - V), w && (V -= w / f))
            : x === "mirror" && (C = s)),
        (m = Ft(0, 1, V) * f));
    }
    const T = h ? { done: !1, value: l[0] } : C.next(m);
    a && (T.value = a(T.value));
    let { done: M } = T;
    !h &&
      u !== null &&
      (M = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const D =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && M));
    return (
      D && i !== void 0 && (T.value = xs(l, this.options, i)),
      S && S(T.value),
      D && this.finish(),
      T
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? At(t.calculatedDuration) : 0;
  }
  get time() {
    return At(this.currentTime);
  }
  set time(t) {
    ((t = Dt(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    ((this.playbackSpeed = t), n && (this.time = At(this.currentTime)));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = _w, onPlay: n, startTime: r } = this.options;
    (this.driver || (this.driver = t((o) => this.tick(o))), n && n());
    const i = this.driver.now();
    (this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = i)
        : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    ((this.state = "paused"),
      (this.holdTime =
        (t = this.currentTime) !== null && t !== void 0 ? t : 0));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.teardown(), (this.state = "finished"));
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    (this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel());
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
}
const zw = new Set(["opacity", "clipPath", "filter", "transform"]);
function Bw(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a = "easeInOut",
    times: l,
  } = {},
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = Vm(a, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
const Uw = xu(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Yo = 10,
  $w = 2e4;
function Ww(e) {
  return Vu(e.type) || e.type === "spring" || !jm(e.ease);
}
function Hw(e, t) {
  const n = new Qu({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !r.done && o < $w; ) ((r = n.sample(o)), i.push(r.value), (o += Yo));
  return { times: void 0, keyframes: i, duration: o - Yo, ease: "linear" };
}
const mg = { anticipate: Gm, backInOut: Km, circInOut: Ym };
function Kw(e) {
  return e in mg;
}
class Wf extends ug {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options;
    ((this.resolver = new lg(
      o,
      (s, a) => this.onKeyframesResolved(s, a),
      n,
      r,
      i,
    )),
      this.resolver.scheduleResolve());
  }
  initPlayback(t, n) {
    let {
      duration: r = 300,
      times: i,
      ease: o,
      type: s,
      motionValue: a,
      name: l,
      startTime: u,
    } = this.options;
    if (!a.owner || !a.owner.current) return !1;
    if (
      (typeof o == "string" && Ko() && Kw(o) && (o = mg[o]), Ww(this.options))
    ) {
      const {
          onComplete: f,
          onUpdate: d,
          motionValue: g,
          element: x,
          ...w
        } = this.options,
        S = Hw(t, w);
      ((t = S.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = S.duration),
        (i = S.times),
        (o = S.ease),
        (s = "keyframes"));
    }
    const c = Bw(a.owner.current, l, t, {
      ...this.options,
      duration: r,
      times: i,
      ease: o,
    });
    return (
      (c.startTime = u ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Mf(c, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            const { onComplete: f } = this.options;
            (a.set(xs(t, this.options, n)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise());
          }),
      { animation: c, duration: r, times: i, type: s, ease: o, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return At(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return At(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = Dt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return We;
      const { animation: r } = n;
      Mf(r, t);
    }
    return We;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    (n.playState === "finished" && this.updateFinishedPromise(), n.play());
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    (this.resolveFinishedPromise(), this.updateFinishedPromise());
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: o,
      ease: s,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: f,
          element: d,
          ...g
        } = this.options,
        x = new Qu({
          ...g,
          keyframes: r,
          duration: i,
          type: o,
          ease: s,
          times: a,
          isGenerator: !0,
        }),
        w = Dt(this.time);
      u.setWithVelocity(x.sample(w - Yo).value, x.sample(w).value, Yo);
    }
    const { onStop: l } = this.options;
    (l && l(), this.cancel());
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: o,
      damping: s,
      type: a,
    } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: l, transformTemplate: u } = n.owner.getProps();
    return (
      Uw() &&
      r &&
      zw.has(r) &&
      !l &&
      !u &&
      !i &&
      o !== "mirror" &&
      s !== 0 &&
      a !== "inertia"
    );
  }
}
const Gw = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Qw = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Yw = { type: "keyframes", duration: 0.8 },
  bw = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Xw = (e, { keyframes: t }) =>
    t.length > 2
      ? Yw
      : Fn.has(e)
        ? e.startsWith("scale")
          ? Qw(t[1])
          : Gw
        : bw;
function Zw({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const Yu =
  (e, t, n, r = {}, i, o) =>
  (s) => {
    const a = ju(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - Dt(l);
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (d) => {
        (t.set(d), a.onUpdate && a.onUpdate(d));
      },
      onComplete: () => {
        (s(), a.onComplete && a.onComplete());
      },
      name: e,
      motionValue: t,
      element: o ? void 0 : i,
    };
    (Zw(a) || (c = { ...c, ...Xw(e, c) }),
      c.duration && (c.duration = Dt(c.duration)),
      c.repeatDelay && (c.repeatDelay = Dt(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from));
    let f = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        ((c.duration = 0), c.delay === 0 && (f = !0)),
      f && !o && t.get() !== void 0)
    ) {
      const d = xs(c.keyframes, a);
      if (d !== void 0)
        return (
          q.update(() => {
            (c.onUpdate(d), c.onComplete());
          }),
          new gx([])
        );
    }
    return !o && Wf.supports(c) ? new Wf(c) : new Qu(c);
  };
function Jw({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function gg(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const d = e.getValue(
        f,
        (o = e.latestValues[f]) !== null && o !== void 0 ? o : null,
      ),
      g = l[f];
    if (g === void 0 || (c && Jw(c, f))) continue;
    const x = { delay: n, ...ju(s || {}, f) };
    let w = !1;
    if (window.MotionHandoffAnimation) {
      const p = Bm(e);
      if (p) {
        const h = window.MotionHandoffAnimation(p, f, q);
        h !== null && ((x.startTime = h), (w = !0));
      }
    }
    (ol(e, f),
      d.start(
        Yu(f, d, g, e.shouldReduceMotion && Om.has(f) ? { type: !1 } : x, e, w),
      ));
    const S = d.animation;
    S && u.push(S);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        q.update(() => {
          a && Ax(e, a);
        });
      }),
    u
  );
}
function dl(e, t, n = {}) {
  var r;
  const i = vs(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0,
  );
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = i ? () => Promise.all(gg(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = o;
            return qw(e, t, c + u, f, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = o;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
    return u().then(() => c());
  } else return Promise.all([s(), a(n.delay)]);
}
function qw(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(eS)
      .forEach((u, c) => {
        (u.notify("AnimationStart", t),
          s.push(
            dl(u, t, { ...o, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t),
            ),
          ));
      }),
    Promise.all(s)
  );
}
function eS(e, t) {
  return e.sortNodePosition(t);
}
function tS(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => dl(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = dl(e, t, n);
  else {
    const i = typeof t == "function" ? vs(e, t, n.custom) : t;
    r = Promise.all(gg(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const nS = Su.length;
function yg(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? yg(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < nS; n++) {
    const r = Su[n],
      i = e.props[r];
    (yi(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const rS = [...wu].reverse(),
  iS = wu.length;
function oS(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => tS(e, n, r)));
}
function sS(e) {
  let t = oS(e),
    n = Hf(),
    r = !0;
  const i = (l) => (u, c) => {
    var f;
    const d = vs(
      e,
      c,
      l === "exit"
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0,
    );
    if (d) {
      const { transition: g, transitionEnd: x, ...w } = d;
      u = { ...u, ...w, ...x };
    }
    return u;
  };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    const { props: u } = e,
      c = yg(e.parent) || {},
      f = [],
      d = new Set();
    let g = {},
      x = 1 / 0;
    for (let S = 0; S < iS; S++) {
      const p = rS[S],
        h = n[p],
        m = u[p] !== void 0 ? u[p] : c[p],
        C = yi(m),
        T = p === l ? h.isActive : null;
      T === !1 && (x = S);
      let M = m === c[p] && m !== u[p] && C;
      if (
        (M && r && e.manuallyAnimateOnMount && (M = !1),
        (h.protectedKeys = { ...g }),
        (!h.isActive && T === null) ||
          (!m && !h.prevProp) ||
          gs(m) ||
          typeof m == "boolean")
      )
        continue;
      const D = aS(h.prevProp, m);
      let k = D || (p === l && h.isActive && !M && C) || (S > x && C),
        U = !1;
      const V = Array.isArray(m) ? m : [m];
      let de = V.reduce(i(p), {});
      T === !1 && (de = {});
      const { prevResolvedValues: dt = {} } = h,
        St = { ...dt, ...de },
        Ot = (ue) => {
          ((k = !0),
            d.has(ue) && ((U = !0), d.delete(ue)),
            (h.needsAnimating[ue] = !0));
          const A = e.getValue(ue);
          A && (A.liveStyle = !1);
        };
      for (const ue in St) {
        const A = de[ue],
          I = dt[ue];
        if (g.hasOwnProperty(ue)) continue;
        let v = !1;
        (nl(A) && nl(I) ? (v = !Am(A, I)) : (v = A !== I),
          v
            ? A != null
              ? Ot(ue)
              : d.add(ue)
            : A !== void 0 && d.has(ue)
              ? Ot(ue)
              : (h.protectedKeys[ue] = !0));
      }
      ((h.prevProp = m),
        (h.prevResolvedValues = de),
        h.isActive && (g = { ...g, ...de }),
        r && e.blockInitialAnimation && (k = !1),
        k &&
          (!(M && D) || U) &&
          f.push(...V.map((ue) => ({ animation: ue, options: { type: p } }))));
    }
    if (d.size) {
      const S = {};
      (d.forEach((p) => {
        const h = e.getBaseTarget(p),
          m = e.getValue(p);
        (m && (m.liveStyle = !0), (S[p] = h ?? null));
      }),
        f.push({ animation: S }));
    }
    let w = !!f.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (w = !1),
      (r = !1),
      w ? t(f) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    ((c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((d) => {
        var g;
        return (g = d.animationState) === null || g === void 0
          ? void 0
          : g.setActive(l, u);
      }),
      (n[l].isActive = u));
    const f = s(l);
    for (const d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      ((n = Hf()), (r = !0));
    },
  };
}
function aS(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Am(t, e) : !1;
}
function hn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Hf() {
  return {
    animate: hn(!0),
    whileInView: hn(),
    whileHover: hn(),
    whileTap: hn(),
    whileDrag: hn(),
    whileFocus: hn(),
    exit: hn(),
  };
}
class cn {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
class lS extends cn {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = sS(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    gs(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this));
  }
}
let uS = 0;
class cS extends cn {
  constructor() {
    (super(...arguments), (this.id = uS++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const fS = { animation: { Feature: lS }, exit: { Feature: cS } };
function Si(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function Li(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const dS = (e) => (t) => _u(t) && e(t, Li(t));
function br(e, t, n, r) {
  return Si(e, t, dS(n), r);
}
const Kf = (e, t) => Math.abs(e - t);
function hS(e, t) {
  const n = Kf(e.x, t.x),
    r = Kf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class vg {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = ta(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          g = hS(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !g) return;
        const { point: x } = f,
          { timestamp: w } = Se;
        this.history.push({ ...x, timestamp: w });
        const { onStart: S, onMove: p } = this.handlers;
        (d ||
          (S && S(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, f));
      }),
      (this.handlePointerMove = (f, d) => {
        ((this.lastMoveEvent = f),
          (this.lastMoveEventInfo = ea(d, this.transformPagePoint)),
          q.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: g, onSessionEnd: x, resumeAnimation: w } = this.handlers;
        if (
          (this.dragSnapToOrigin && w && w(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const S = ta(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : ea(d, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && g && g(f, S), x && x(f, S));
      }),
      !_u(t))
    )
      return;
    ((this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window));
    const s = Li(t),
      a = ea(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = Se;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    (c && c(t, ta(a, this.history)),
      (this.removeListeners = Ni(
        br(this.contextWindow, "pointermove", this.handlePointerMove),
        br(this.contextWindow, "pointerup", this.handlePointerUp),
        br(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(), on(this.updatePoint));
  }
}
function ea(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Gf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ta({ point: e }, t) {
  return {
    point: e,
    delta: Gf(e, xg(t)),
    offset: Gf(e, pS(t)),
    velocity: mS(t, 0.1),
  };
}
function pS(e) {
  return e[0];
}
function xg(e) {
  return e[e.length - 1];
}
function mS(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = xg(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Dt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = At(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return (s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s);
}
const wg = 1e-4,
  gS = 1 - wg,
  yS = 1 + wg,
  Sg = 0.01,
  vS = 0 - Sg,
  xS = 0 + Sg;
function Ke(e) {
  return e.max - e.min;
}
function wS(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Qf(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = ne(t.min, t.max, e.origin)),
    (e.scale = Ke(n) / Ke(t)),
    (e.translate = ne(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= gS && e.scale <= yS) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= vS && e.translate <= xS) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function Xr(e, t, n, r) {
  (Qf(e.x, t.x, n.x, r ? r.originX : void 0),
    Qf(e.y, t.y, n.y, r ? r.originY : void 0));
}
function Yf(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + Ke(t)));
}
function SS(e, t, n) {
  (Yf(e.x, t.x, n.x), Yf(e.y, t.y, n.y));
}
function bf(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + Ke(t)));
}
function Zr(e, t, n) {
  (bf(e.x, t.x, n.x), bf(e.y, t.y, n.y));
}
function PS(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? ne(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? ne(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Xf(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function CS(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Xf(e.x, n, i), y: Xf(e.y, t, r) };
}
function Zf(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function TS(e, t) {
  return { x: Zf(e.x, t.x), y: Zf(e.y, t.y) };
}
function ES(e, t) {
  let n = 0.5;
  const r = Ke(e),
    i = Ke(t);
  return (
    i > r
      ? (n = mr(t.min, t.max - r, e.min))
      : r > i && (n = mr(e.min, e.max - i, t.min)),
    Ft(0, 1, n)
  );
}
function kS(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const hl = 0.35;
function MS(e = hl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = hl),
    { x: Jf(e, "left", "right"), y: Jf(e, "top", "bottom") }
  );
}
function Jf(e, t, n) {
  return { min: qf(e, t), max: qf(e, n) };
}
function qf(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const ed = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  qn = () => ({ x: ed(), y: ed() }),
  td = () => ({ min: 0, max: 0 }),
  ce = () => ({ x: td(), y: td() });
function be(e) {
  return [e("x"), e("y")];
}
function Pg({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function RS({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function DS(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function na(e) {
  return e === void 0 || e === 1;
}
function pl({ scale: e, scaleX: t, scaleY: n }) {
  return !na(e) || !na(t) || !na(n);
}
function gn(e) {
  return (
    pl(e) ||
    Cg(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Cg(e) {
  return nd(e.x) || nd(e.y);
}
function nd(e) {
  return e && e !== "0%";
}
function bo(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function rd(e, t, n, r, i) {
  return (i !== void 0 && (e = bo(e, i, r)), bo(e, n, r) + t);
}
function ml(e, t = 0, n = 1, r, i) {
  ((e.min = rd(e.min, t, n, r, i)), (e.max = rd(e.max, t, n, r, i)));
}
function Tg(e, { x: t, y: n }) {
  (ml(e.x, t.translate, t.scale, t.originPoint),
    ml(e.y, n.translate, n.scale, n.originPoint));
}
const id = 0.999999999999,
  od = 1.0000000000001;
function AS(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    ((o = n[a]), (s = o.projectionDelta));
    const { visualElement: l } = o.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        tr(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Tg(e, s)),
      r && gn(o.latestValues) && tr(e, o.latestValues));
  }
  (t.x < od && t.x > id && (t.x = 1), t.y < od && t.y > id && (t.y = 1));
}
function er(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function sd(e, t, n, r, i = 0.5) {
  const o = ne(e.min, e.max, i);
  ml(e, t, n, o, r);
}
function tr(e, t) {
  (sd(e.x, t.x, t.scaleX, t.scale, t.originX),
    sd(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function Eg(e, t) {
  return Pg(DS(e.getBoundingClientRect(), t));
}
function NS(e, t, n) {
  const r = Eg(e, n),
    { scroll: i } = t;
  return (i && (er(r.x, i.offset.x), er(r.y, i.offset.y)), r);
}
const kg = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  LS = new WeakMap();
class jS {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ce()),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        (f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Li(c).point));
      },
      o = (c, f) => {
        const { drag: d, dragPropagation: g, onDragStart: x } = this.getProps();
        if (
          d &&
          !g &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = Ex(d)),
          !this.openDragLock)
        )
          return;
        ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          be((S) => {
            let p = this.getAxisMotionValue(S).get() || 0;
            if (xt.test(p)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const m = h.layout.layoutBox[S];
                m && (p = Ke(m) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[S] = p;
          }),
          x && q.postRender(() => x(c, f)),
          ol(this.visualElement, "transform"));
        const { animationState: w } = this.visualElement;
        w && w.setActive("whileDrag", !0);
      },
      s = (c, f) => {
        const {
          dragPropagation: d,
          dragDirectionLock: g,
          onDirectionLock: x,
          onDrag: w,
        } = this.getProps();
        if (!d && !this.openDragLock) return;
        const { offset: S } = f;
        if (g && this.currentDirection === null) {
          ((this.currentDirection = VS(S)),
            this.currentDirection !== null && x && x(this.currentDirection));
          return;
        }
        (this.updateAxis("x", f.point, S),
          this.updateAxis("y", f.point, S),
          this.visualElement.render(),
          w && w(c, f));
      },
      a = (c, f) => this.stop(c, f),
      l = () =>
        be((c) => {
          var f;
          return (
            this.getAnimationState(c) === "paused" &&
            ((f = this.getAxisMotionValue(c).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new vg(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: kg(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && q.postRender(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !eo(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (s = PS(s, this.constraints[t], this.elastic[t])),
      o.set(s));
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      o = this.constraints;
    (n && Zn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
        ? (this.constraints = CS(i.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = MS(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        be((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = kS(i.layoutBox[s], this.constraints[s]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Zn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = NS(r, i.root, this.visualElement.getTransformPagePoint());
    let s = TS(i.layout.layoutBox, o);
    if (n) {
      const a = n(RS(s));
      ((this.hasMutatedConstraints = !!a), a && (s = Pg(a)));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = be((c) => {
        if (!eo(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          x = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, x);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      ol(this.visualElement, t),
      r.start(Yu(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    be((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    be((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    be((n) => {
      const { drag: r } = this.getProps();
      if (!eo(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - ne(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Zn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    be((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[s] = ES({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      be((s) => {
        if (!eo(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(ne(l, u, i[s]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    LS.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = br(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Zn(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      q.read(r));
    const s = Si(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (be((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += l[c].translate),
                f.set(f.get() + l[c].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (s(), n(), o(), a && a());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = hl,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function eo(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function VS(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class FS extends cn {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = We),
      (this.removeListeners = We),
      (this.controls = new jS(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || We));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const ad = (e) => (t, n) => {
  e && q.postRender(() => e(t, n));
};
class _S extends cn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = We));
  }
  onPointerDown(t) {
    this.session = new vg(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: kg(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: ad(t),
      onStart: ad(n),
      onMove: r,
      onEnd: (o, s) => {
        (delete this.session, i && q.postRender(() => i(o, s)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = br(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
const vo = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function ld(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Nr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (_.test(e)) e = parseFloat(e);
        else return e;
      const n = ld(e, t.target.x),
        r = ld(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  IS = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = sn.parse(e);
      if (i.length > 5) return r;
      const o = sn.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      ((i[0 + s] /= a), (i[1 + s] /= l));
      const u = ne(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  };
class OS extends P.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    (ix(zS),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (vo.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              q.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Cu.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Mg(e) {
  const [t, n] = um(),
    r = P.useContext(pu);
  return E.jsx(OS, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: P.useContext(ym),
    isPresent: t,
    safeToRemove: n,
  });
}
const zS = {
  borderRadius: {
    ...Nr,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: Nr,
  borderTopRightRadius: Nr,
  borderBottomLeftRadius: Nr,
  borderBottomRightRadius: Nr,
  boxShadow: IS,
};
function BS(e, t, n) {
  const r = Re(e) ? e : xi(e);
  return (r.start(Yu("", r, t, n)), r.animation);
}
function US(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const $S = (e, t) => e.depth - t.depth;
class WS {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (Iu(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (Ou(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort($S),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function HS(e, t) {
  const n = wt.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (on(r), e(o - t));
    };
  return (q.read(r, !0), () => on(r));
}
const Rg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  KS = Rg.length,
  ud = (e) => (typeof e == "string" ? parseFloat(e) : e),
  cd = (e) => typeof e == "number" || _.test(e);
function GS(e, t, n, r, i, o) {
  i
    ? ((e.opacity = ne(0, n.opacity !== void 0 ? n.opacity : 1, QS(r))),
      (e.opacityExit = ne(t.opacity !== void 0 ? t.opacity : 1, 0, YS(r))))
    : o &&
      (e.opacity = ne(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let s = 0; s < KS; s++) {
    const a = `border${Rg[s]}Radius`;
    let l = fd(t, a),
      u = fd(n, a);
    if (l === void 0 && u === void 0) continue;
    (l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || cd(l) === cd(u)
        ? ((e[a] = Math.max(ne(ud(l), ud(u), r), 0)),
          (xt.test(u) || xt.test(l)) && (e[a] += "%"))
        : (e[a] = u));
  }
  (t.rotate || n.rotate) && (e.rotate = ne(t.rotate || 0, n.rotate || 0, r));
}
function fd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const QS = Dg(0, 0.5, Qm),
  YS = Dg(0.5, 0.95, We);
function Dg(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(mr(e, t, r)));
}
function dd(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function Ye(e, t) {
  (dd(e.x, t.x), dd(e.y, t.y));
}
function hd(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function pd(e, t, n, r, i) {
  return (
    (e -= t),
    (e = bo(e, 1 / n, r)),
    i !== void 0 && (e = bo(e, 1 / i, r)),
    e
  );
}
function bS(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (xt.test(t) &&
      ((t = parseFloat(t)), (t = ne(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = ne(o.min, o.max, r);
  (e === o && (a -= t),
    (e.min = pd(e.min, t, n, a, i)),
    (e.max = pd(e.max, t, n, a, i)));
}
function md(e, t, [n, r, i], o, s) {
  bS(e, t[n], t[r], t[i], t.scale, o, s);
}
const XS = ["x", "scaleX", "originX"],
  ZS = ["y", "scaleY", "originY"];
function gd(e, t, n, r) {
  (md(e.x, t, XS, n ? n.x : void 0, r ? r.x : void 0),
    md(e.y, t, ZS, n ? n.y : void 0, r ? r.y : void 0));
}
function yd(e) {
  return e.translate === 0 && e.scale === 1;
}
function Ag(e) {
  return yd(e.x) && yd(e.y);
}
function vd(e, t) {
  return e.min === t.min && e.max === t.max;
}
function JS(e, t) {
  return vd(e.x, t.x) && vd(e.y, t.y);
}
function xd(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Ng(e, t) {
  return xd(e.x, t.x) && xd(e.y, t.y);
}
function wd(e) {
  return Ke(e.x) / Ke(e.y);
}
function Sd(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class qS {
  constructor() {
    this.members = [];
  }
  add(t) {
    (Iu(this.members, t), t.scheduleRender());
  }
  remove(t) {
    if (
      (Ou(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      (n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function eP(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: f,
      rotateY: d,
      skewX: g,
      skewY: x,
    } = n;
    (u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      g && (r += `skewX(${g}deg) `),
      x && (r += `skewY(${x}deg) `));
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none");
}
const yn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Or = typeof window < "u" && window.MotionDebug !== void 0,
  ra = ["", "X", "Y", "Z"],
  tP = { visibility: "hidden" },
  Pd = 1e3;
let nP = 0;
function ia(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Lg(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Bm(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", q, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Lg(r);
}
function jg({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      ((this.id = nP++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            Or &&
              (yn.totalNodes =
                yn.resolvedTargetDeltas =
                yn.recalculatedProjection =
                  0),
            this.nodes.forEach(oP),
            this.nodes.forEach(cP),
            this.nodes.forEach(fP),
            this.nodes.forEach(sP),
            Or && window.MotionDebug.record(yn));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new WS());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new zu()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = US(s)), (this.instance = s));
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          ((this.root.updateBlockedByResize = !0),
            f && f(),
            (f = HS(d, 250)),
            vo.hasAnimatedSinceResize &&
              ((vo.hasAnimatedSinceResize = !1), this.nodes.forEach(Td)));
        });
      }
      (l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: g,
              layout: x,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const w =
                  this.options.transition || c.getDefaultTransition() || gP,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: p } =
                  c.getProps(),
                h = !this.targetLayout || !Ng(this.targetLayout, x) || g,
                m = !d && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (d && (h || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, m));
                const C = { ...ju(w, "layout"), onPlay: S, onComplete: p };
                ((c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((C.delay = 0), (C.type = !1)),
                  this.startAnimation(C));
              } else
                (d || Td(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = x;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const s = this.getStack();
      (s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        on(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(dP),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Lg(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        ((f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u
        ? u(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(Cd));
        return;
      }
      (this.isUpdating || this.nodes.forEach(lP),
        (this.isUpdating = !1),
        this.nodes.forEach(uP),
        this.nodes.forEach(rP),
        this.nodes.forEach(iP),
        this.clearAllSnapshots());
      const a = wt.now();
      ((Se.delta = Ft(0, 1e3 / 60, a - Se.timestamp)),
        (Se.timestamp = a),
        (Se.isProcessing = !0),
        Ys.update.process(Se),
        Ys.preRender.process(Se),
        Ys.render.process(Se),
        (Se.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Cu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(aP), this.sharedNodes.forEach(hP));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        q.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      q.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = ce()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0,
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Ag(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || gn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        yP(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a) return ce();
      const l = a.measureViewportBox();
      if (
        !(
          ((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) ||
          this.path.some(vP)
        )
      ) {
        const { scroll: c } = this.root;
        c && (er(l.x, c.offset.x), er(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      const l = ce();
      if (
        (Ye(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c;
        c !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && Ye(l, s), er(l.x, f.offset.x), er(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      const l = ce();
      Ye(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        (!a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          tr(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          gn(c.latestValues) && tr(l, c.latestValues));
      }
      return (gn(this.latestValues) && tr(l, this.latestValues), l);
    }
    removeTransform(s) {
      const a = ce();
      Ye(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !gn(u.latestValues)) continue;
        pl(u.latestValues) && u.updateSnapshot();
        const c = ce(),
          f = u.measurePageBox();
        (Ye(c, f),
          gd(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c));
      }
      return (gn(this.latestValues) && gd(a, this.latestValues), a);
    }
    setTargetDelta(s) {
      ((this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Se.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty));
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = Se.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ce()),
              (this.relativeTargetOrigin = ce()),
              Zr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox,
              ),
              Ye(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ce()), (this.targetWithTransforms = ce())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                SS(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : Ye(this.target, this.layout.layoutBox),
                  Tg(this.target, this.targetDelta))
                : Ye(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ce()),
                (this.relativeTargetOrigin = ce()),
                Zr(this.relativeTargetOrigin, this.target, g.target),
                Ye(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Or && yn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          pl(this.parent.latestValues) ||
          Cg(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Se.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      Ye(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        g = this.treeScale.y;
      (AS(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = ce())));
      const { target: x } = a;
      if (!x) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (hd(this.prevProjectionDelta.x, this.projectionDelta.x),
          hd(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Xr(this.projectionDelta, this.layoutCorrected, x, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== g ||
          !Sd(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Sd(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", x)),
        Or && yn.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        s)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = qn()),
        (this.projectionDelta = qn()),
        (this.projectionDeltaWithTransform = qn()));
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = qn();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const d = ce(),
        g = l ? l.source : void 0,
        x = this.layout ? this.layout.source : void 0,
        w = g !== x,
        S = this.getStack(),
        p = !S || S.members.length <= 1,
        h = !!(w && !p && this.options.crossfade === !0 && !this.path.some(mP));
      this.animationProgress = 0;
      let m;
      ((this.mixTargetDelta = (C) => {
        const T = C / 1e3;
        (Ed(f.x, s.x, T),
          Ed(f.y, s.y, T),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Zr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            pP(this.relativeTarget, this.relativeTargetOrigin, d, T),
            m && JS(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = ce()),
            Ye(m, this.relativeTarget)),
          w &&
            ((this.animationValues = c), GS(c, u, this.latestValues, T, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = T));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(s) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (on(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = q.update(() => {
          ((vo.hasAnimatedSinceResize = !0),
            (this.currentAnimation = BS(0, Pd, {
              ...s,
              onUpdate: (a) => {
                (this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a));
              },
              onComplete: () => {
                (s.onComplete && s.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      (s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Pd),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Vg(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ce();
          const f = Ke(this.layout.layoutBox.x);
          ((l.x.min = s.target.x.min), (l.x.max = l.x.min + f));
          const d = Ke(this.layout.layoutBox.y);
          ((l.y.min = s.target.y.min), (l.y.max = l.y.min + d));
        }
        (Ye(a, l),
          tr(a, c),
          Xr(this.projectionDeltaWithTransform, this.layoutCorrected, a, c));
      }
    }
    registerSharedNode(s, a) {
      (this.sharedNodes.has(s) || this.sharedNodes.set(s, new qS()),
        this.sharedNodes.get(s).add(a));
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      (u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && ia("z", s, u, this.animationValues);
      for (let c = 0; c < ra.length; c++)
        (ia(`rotate${ra[c]}`, s, u, this.animationValues),
          ia(`skew${ra[c]}`, s, u, this.animationValues));
      s.render();
      for (const c in u)
        (s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]));
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return tP;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = go(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const w = {};
        return (
          this.options.layoutId &&
            ((w.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (w.pointerEvents = go(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !gn(this.latestValues) &&
            ((w.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          w
        );
      }
      const d = f.animationValues || f.latestValues;
      (this.applyTransformsToTarget(),
        (u.transform = eP(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d,
        )),
        c && (u.transform = c(d, u.transform)));
      const { x: g, y: x } = this.projectionDelta;
      ((u.transformOrigin = `${g.origin * 100}% ${x.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                  ? d.opacityExit
                  : 0));
      for (const w in Ho) {
        if (d[w] === void 0) continue;
        const { correct: S, applyTo: p } = Ho[w],
          h = u.transform === "none" ? d[w] : S(d[w], f);
        if (p) {
          const m = p.length;
          for (let C = 0; C < m; C++) u[p[C]] = h;
        } else u[w] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? go(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Cd),
        this.root.sharedNodes.clear());
    }
  };
}
function rP(e) {
  e.updateLayout();
}
function iP(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? be((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = Ke(d);
          ((d.min = r[f].min), (d.max = d.min + g));
        })
      : Vg(o, n.layoutBox, r) &&
        be((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = Ke(r[f]);
          ((d.max = d.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + g)));
        });
    const a = qn();
    Xr(a, r, n.layoutBox);
    const l = qn();
    s ? Xr(l, e.applyTransform(i, !0), n.measuredBox) : Xr(l, r, n.layoutBox);
    const u = !Ag(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const x = ce();
          Zr(x, n.layoutBox, d.layoutBox);
          const w = ce();
          (Zr(w, r, g.layoutBox),
            Ng(x, w) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = w),
              (e.relativeTargetOrigin = x),
              (e.relativeParent = f)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function oP(e) {
  (Or && yn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)));
}
function sP(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function aP(e) {
  e.clearSnapshot();
}
function Cd(e) {
  e.clearMeasurements();
}
function lP(e) {
  e.isLayoutDirty = !1;
}
function uP(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function Td(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function cP(e) {
  e.resolveTargetDelta();
}
function fP(e) {
  e.calcProjection();
}
function dP(e) {
  e.resetSkewAndRotation();
}
function hP(e) {
  e.removeLeadSnapshot();
}
function Ed(e, t, n) {
  ((e.translate = ne(t.translate, 0, n)),
    (e.scale = ne(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function kd(e, t, n, r) {
  ((e.min = ne(t.min, n.min, r)), (e.max = ne(t.max, n.max, r)));
}
function pP(e, t, n, r) {
  (kd(e.x, t.x, n.x, r), kd(e.y, t.y, n.y, r));
}
function mP(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const gP = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Md = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Rd = Md("applewebkit/") && !Md("chrome/") ? Math.round : We;
function Dd(e) {
  ((e.min = Rd(e.min)), (e.max = Rd(e.max)));
}
function yP(e) {
  (Dd(e.x), Dd(e.y));
}
function Vg(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !wS(wd(t), wd(n), 0.2))
  );
}
function vP(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const xP = jg({
    attachResizeListener: (e, t) => Si(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  oa = { current: void 0 },
  Fg = jg({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!oa.current) {
        const e = new xP({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (oa.current = e));
      }
      return oa.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  wP = {
    pan: { Feature: _S },
    drag: { Feature: FS, ProjectionNode: Fg, MeasureLayout: Mg },
  };
function Ad(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    o = r[i];
  o && q.postRender(() => o(t, Li(t)));
}
class SP extends cn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = wx(
        t,
        (n) => (Ad(this.node, n, "Start"), (r) => Ad(this.node, r, "End")),
      ));
  }
  unmount() {}
}
class PP extends cn {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Ni(
      Si(this.node.current, "focus", () => this.onFocus()),
      Si(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Nd(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    o = r[i];
  o && q.postRender(() => o(t, Li(t)));
}
class CP extends cn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = Tx(
        t,
        (n) => (
          Nd(this.node, n, "Start"),
          (r, { success: i }) => Nd(this.node, r, i ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const gl = new WeakMap(),
  sa = new WeakMap(),
  TP = (e) => {
    const t = gl.get(e.target);
    t && t(e);
  },
  EP = (e) => {
    e.forEach(TP);
  };
function kP({ root: e, ...t }) {
  const n = e || document;
  sa.has(n) || sa.set(n, {});
  const r = sa.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(EP, { root: e, ...t })),
    r[i]
  );
}
function MP(e, t, n) {
  const r = kP(t);
  return (
    gl.set(e, n),
    r.observe(e),
    () => {
      (gl.delete(e), r.unobserve(e));
    }
  );
}
const RP = { some: 0, all: 1 };
class DP extends cn {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : RP[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        (u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u));
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(l);
      };
    return MP(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(AP(t, n)) && this.startObserver();
  }
  unmount() {}
}
function AP({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const NP = {
    inView: { Feature: DP },
    tap: { Feature: CP },
    focus: { Feature: PP },
    hover: { Feature: SP },
  },
  LP = { layout: { ProjectionNode: Fg, MeasureLayout: Mg } },
  yl = { current: null },
  _g = { current: !1 };
function jP() {
  if (((_g.current = !0), !!yu))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (yl.current = e.matches);
      (e.addListener(t), t());
    } else yl.current = !1;
}
const VP = [...ag, ke, sn],
  FP = (e) => VP.find(sg(e)),
  Ld = new WeakMap();
function _P(e, t, n) {
  for (const r in t) {
    const i = t[r],
      o = n[r];
    if (Re(i)) e.addValue(r, i);
    else if (Re(o)) e.addValue(r, xi(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, xi(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const jd = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class IP {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: s,
    },
    a = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Ku),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const g = wt.now();
        this.renderScheduledAt < g &&
          ((this.renderScheduledAt = g), q.render(this.render, !1, !0));
      }));
    const { latestValues: l, renderState: u, onUpdate: c } = s;
    ((this.onUpdate = c),
      (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = ys(n)),
      (this.isVariantNode = mm(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const g in d) {
      const x = d[g];
      l[g] !== void 0 && Re(x) && x.set(l[g], !1);
    }
  }
  mount(t) {
    ((this.current = t),
      Ld.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      _g.current || jP(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : yl.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (Ld.delete(this.current),
      this.projection && this.projection.unmount(),
      on(this.notifyUpdate),
      on(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this));
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Fn.has(t),
      i = n.on("change", (a) => {
        ((this.latestValues[t] = a),
          this.props.onUpdate && q.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0));
      }),
      o = n.on("renderRequest", this.scheduleRender);
    let s;
    (window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (i(), o(), s && s(), n.owner && n.stop());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in gr) {
      const n = gr[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ce();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < jd.length; r++) {
      const i = jd[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    ((this.prevMotionValues = _P(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this));
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = xi(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
            r !== void 0
          ? r
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (ig(i) || bm(i))
          ? (i = parseFloat(i))
          : !FP(i) && sn.test(n) && (i = tg(t, n)),
        this.setBaseTarget(t, Re(i) ? i.get() : i)),
      Re(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const s = Eu(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom,
      );
      s && (i = s[t]);
    }
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Re(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new zu()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Ig extends IP {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = lg));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Re(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function OP(e) {
  return window.getComputedStyle(e);
}
class zP extends Ig {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Tm));
  }
  readValueFromInstance(t, n) {
    if (Fn.has(n)) {
      const r = Hu(n);
      return (r && r.default) || 0;
    } else {
      const r = OP(t),
        i = (Sm(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Eg(t, n);
  }
  build(t, n, r) {
    Ru(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Lu(t, n, r);
  }
}
class BP extends Ig {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = ce));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Fn.has(n)) {
      const r = Hu(n);
      return (r && r.default) || 0;
    }
    return ((n = Em.has(n) ? n : Pu(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Rm(t, n, r);
  }
  build(t, n, r) {
    Du(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    km(t, n, r, i);
  }
  mount(t) {
    ((this.isSVGTag = Nu(t.tagName)), super.mount(t));
  }
}
const UP = (e, t) =>
    Tu(e) ? new BP(t) : new zP(t, { allowProjection: e !== P.Fragment }),
  $P = hx({ ...fS, ...NP, ...wP, ...LP }, UP),
  b = R1($P);
function _n({ children: e, className: t = "" }) {
  return E.jsx(b.div, {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.35, ease: "easeOut" },
    className: `relative z-10 min-h-screen flex flex-col items-center justify-start ${t}`,
    children: e,
  });
}
const Og = {
    yesLabel: "Yes! 💖",
    noButtonMessages: [
      "No",
      "Are you sure? 🥺",
      "Really sure??",
      "Think about it again...",
      "Pretty please? 🥹",
      "I'll bring snacks 🍫",
      "I'll pay for everything!",
      "You're breaking my heart 💔",
      "Okay last chance...",
      "Just click Yes 😭",
    ],
    noAttemptHeadlines: [
      { after: 3, text: "Hmm, the button seems to be broken 🤔" },
      { after: 6, text: "I think the Yes button is getting bigger 👀" },
      { after: 9, text: "Resistance is futile 😌" },
    ],
    reactionEmojis: ["😊", "🥺", "😢", "😭", "🙏"],
  },
  zg = P.createContext(null);
function WP({ children: e }) {
  const [t, n] = P.useState(0),
    [r, i] = P.useState(""),
    [o, s] = P.useState(""),
    [a, l] = P.useState(""),
    u = P.useCallback(() => n((c) => c + 1), []);
  return E.jsx(zg.Provider, {
    value: {
      noAttempts: t,
      incrementNoAttempts: u,
      dateChoice: r,
      setDateChoice: i,
      timeChoice: o,
      setTimeChoice: s,
      vibeChoice: a,
      setVibeChoice: l,
    },
    children: e,
  });
}
function ji() {
  const e = P.useContext(zg);
  if (!e) throw new Error("useAppState must be used inside AppStateProvider");
  return e;
}
const { noButtonMessages: to } = Og;
function Vd(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function HP(e, t, n, r = 16) {
  const i = window.innerWidth,
    o = window.innerHeight,
    s = i - e - r,
    a = o - t - r;
  for (let l = 0; l < 50; l++) {
    const u = Vd(Math.random() * s, r, s),
      c = Vd(Math.random() * a, r, a);
    if (
      !(
        n &&
        u < n.right + 20 &&
        u + e > n.left - 20 &&
        c < n.bottom + 20 &&
        c + t > n.top - 20
      )
    )
      return { x: u, y: c };
  }
  return { x: s, y: r };
}
function KP({ yesRef: e }) {
  const { incrementNoAttempts: t } = ji(),
    n = P.useRef(null),
    [r, i] = P.useState(!1),
    [o, s] = P.useState(null),
    [a, l] = P.useState(0),
    u = P.useCallback(() => {
      var S;
      r || i(!0);
      const f = document.querySelector(".btn-no-active") || n.current;
      if (!f) return;
      const d = f.offsetWidth || 100,
        g = f.offsetHeight || 48,
        x =
          ((S = e.current) == null ? void 0 : S.getBoundingClientRect()) ??
          null,
        w = HP(d, g, x);
      (s(w), t(), l((p) => (p >= to.length - 1 ? to.length - 2 : p + 1)));
    }, [e, t, r]);
  return r
    ? o === null
      ? null
      : E.jsx(vu, {
          children: E.jsx(b.button, {
            className: "btn-no btn-no-active",
            style: { left: o.x, top: o.y, position: "fixed", zIndex: 50 },
            animate: { x: (o.x, 0), y: (o.y, 0) },
            transition: { type: "spring", stiffness: 300, damping: 20 },
            onMouseEnter: u,
            onClick: u,
            onTouchStart: (c) => {
              (c.preventDefault(), u());
            },
            children: to[a],
          }),
        })
    : E.jsx("button", {
        ref: n,
        className: "btn-no",
        onMouseEnter: u,
        onClick: u,
        onTouchStart: (c) => {
          (c.preventDefault(), u());
        },
        "aria-label": "No (this button avoids you)",
        children: to[0],
      });
}
const { yesLabel: GP, noAttemptHeadlines: QP, reactionEmojis: Fd } = Og;
function YP() {
  const e = It(),
    { noAttempts: t } = ji(),
    n = P.useRef(null),
    r = Math.min(1 + t * 0.1, 2),
    i = Math.min(1.125 + t * 0.05, 1.6) + "rem",
    o = P.useMemo(() => {
      let a = "🌸 Will you go on a date with me? 🌸";
      for (const l of QP) t >= l.after && (a = l.text);
      return a;
    }, [t]),
    s = Math.min(Math.floor(t / 2), Fd.length - 1);
  return E.jsx(_n, {
    children: E.jsxs("div", {
      className:
        "w-full max-w-md mx-auto px-4 py-8 flex flex-col items-center text-center gap-4 min-h-screen justify-center",
      children: [
        E.jsx(
          b.div,
          {
            initial: { scale: 0.5, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            className: "text-6xl select-none",
            style: { filter: "drop-shadow(0 4px 12px rgba(255,77,141,0.3))" },
            children: Fd[s],
          },
          s,
        ),
        E.jsx(
          b.h1,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            className:
              "font-extrabold text-[#FF4D8D] text-3xl sm:text-4xl leading-tight text-[#4A1D3F] mt-4",
            children: o,
          },
          o,
        ),
        E.jsxs("div", {
          className:
            "flex flex-row items-center justify-center gap-4 mt-8 w-full min-h-[80px]",
          children: [
            E.jsx(b.button, {
              ref: n,
              className: "btn-yes relative z-20",
              style: {
                transform: `scale(${r})`,
                fontSize: i,
                transition:
                  "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), font-size 0.4s ease",
              },
              whileHover: { scale: r * 1.06 },
              whileTap: { scale: r * 0.96 },
              animate: {
                boxShadow: [
                  "0 4px 20px rgba(255,77,141,0.4)",
                  "0 4px 32px rgba(255,77,141,0.7)",
                  "0 4px 20px rgba(255,77,141,0.4)",
                ],
              },
              transition: { duration: 2, repeat: 1 / 0, ease: "easeInOut" },
              onClick: () => e("/surprise"),
              children: GP,
            }),
            E.jsx(KP, { yesRef: n }),
          ],
        }),
      ],
    }),
  });
}
var bu = {};
(function e(t, n, r, i) {
  var o = !!(
      t.Worker &&
      t.Blob &&
      t.Promise &&
      t.OffscreenCanvas &&
      t.OffscreenCanvasRenderingContext2D &&
      t.HTMLCanvasElement &&
      t.HTMLCanvasElement.prototype.transferControlToOffscreen &&
      t.URL &&
      t.URL.createObjectURL
    ),
    s = typeof Path2D == "function" && typeof DOMMatrix == "function",
    a = (function () {
      if (!t.OffscreenCanvas) return !1;
      try {
        var v = new OffscreenCanvas(1, 1),
          y = v.getContext("2d");
        y.fillRect(0, 0, 1, 1);
        var N = v.transferToImageBitmap();
        y.createPattern(N, "no-repeat");
      } catch {
        return !1;
      }
      return !0;
    })();
  function l() {}
  function u(v) {
    var y = n.exports.Promise,
      N = y !== void 0 ? y : t.Promise;
    return typeof N == "function" ? new N(v) : (v(l, l), null);
  }
  var c = (function (v, y) {
      return {
        transform: function (N) {
          if (v) return N;
          if (y.has(N)) return y.get(N);
          var F = new OffscreenCanvas(N.width, N.height),
            O = F.getContext("2d");
          return (O.drawImage(N, 0, 0), y.set(N, F), F);
        },
        clear: function () {
          y.clear();
        },
      };
    })(a, new Map()),
    f = (function () {
      var v = Math.floor(16.666666666666668),
        y,
        N,
        F = {},
        O = 0;
      return (
        typeof requestAnimationFrame == "function" &&
        typeof cancelAnimationFrame == "function"
          ? ((y = function (B) {
              var z = Math.random();
              return (
                (F[z] = requestAnimationFrame(function j(W) {
                  O === W || O + v - 1 < W
                    ? ((O = W), delete F[z], B())
                    : (F[z] = requestAnimationFrame(j));
                })),
                z
              );
            }),
            (N = function (B) {
              F[B] && cancelAnimationFrame(F[B]);
            }))
          : ((y = function (B) {
              return setTimeout(B, v);
            }),
            (N = function (B) {
              return clearTimeout(B);
            })),
        { frame: y, cancel: N }
      );
    })(),
    d = (function () {
      var v,
        y,
        N = {};
      function F(O) {
        function B(z, j) {
          O.postMessage({ options: z || {}, callback: j });
        }
        ((O.init = function (j) {
          var W = j.transferControlToOffscreen();
          O.postMessage({ canvas: W }, [W]);
        }),
          (O.fire = function (j, W, Q) {
            if (y) return (B(j, null), y);
            var oe = Math.random().toString(36).slice(2);
            return (
              (y = u(function (X) {
                function se(xe) {
                  xe.data.callback === oe &&
                    (delete N[oe],
                    O.removeEventListener("message", se),
                    (y = null),
                    c.clear(),
                    Q(),
                    X());
                }
                (O.addEventListener("message", se),
                  B(j, oe),
                  (N[oe] = se.bind(null, { data: { callback: oe } })));
              })),
              y
            );
          }),
          (O.reset = function () {
            O.postMessage({ reset: !0 });
            for (var j in N) (N[j](), delete N[j]);
          }));
      }
      return function () {
        if (v) return v;
        if (!r && o) {
          var O = [
            "var CONFETTI, SIZE = {}, module = {};",
            "(" + e.toString() + ")(this, module, true, SIZE);",
            "onmessage = function(msg) {",
            "  if (msg.data.options) {",
            "    CONFETTI(msg.data.options).then(function () {",
            "      if (msg.data.callback) {",
            "        postMessage({ callback: msg.data.callback });",
            "      }",
            "    });",
            "  } else if (msg.data.reset) {",
            "    CONFETTI && CONFETTI.reset();",
            "  } else if (msg.data.resize) {",
            "    SIZE.width = msg.data.resize.width;",
            "    SIZE.height = msg.data.resize.height;",
            "  } else if (msg.data.canvas) {",
            "    SIZE.width = msg.data.canvas.width;",
            "    SIZE.height = msg.data.canvas.height;",
            "    CONFETTI = module.exports.create(msg.data.canvas);",
            "  }",
            "}",
          ].join(`
`);
          try {
            v = new Worker(URL.createObjectURL(new Blob([O])));
          } catch (B) {
            return (
              typeof console < "u" &&
                typeof console.warn == "function" &&
                console.warn("🎊 Could not load worker", B),
              null
            );
          }
          F(v);
        }
        return v;
      };
    })(),
    g = {
      particleCount: 50,
      angle: 90,
      spread: 45,
      startVelocity: 45,
      decay: 0.9,
      gravity: 1,
      drift: 0,
      ticks: 200,
      x: 0.5,
      y: 0.5,
      shapes: ["square", "circle"],
      zIndex: 100,
      colors: [
        "#26ccff",
        "#a25afd",
        "#ff5e7e",
        "#88ff5a",
        "#fcff42",
        "#ffa62d",
        "#ff36ff",
      ],
      disableForReducedMotion: !1,
      scalar: 1,
    };
  function x(v, y) {
    return y ? y(v) : v;
  }
  function w(v) {
    return v != null;
  }
  function S(v, y, N) {
    return x(v && w(v[y]) ? v[y] : g[y], N);
  }
  function p(v) {
    return v < 0 ? 0 : Math.floor(v);
  }
  function h(v, y) {
    return Math.floor(Math.random() * (y - v)) + v;
  }
  function m(v) {
    return parseInt(v, 16);
  }
  function C(v) {
    return v.map(T);
  }
  function T(v) {
    var y = String(v).replace(/[^0-9a-f]/gi, "");
    return (
      y.length < 6 && (y = y[0] + y[0] + y[1] + y[1] + y[2] + y[2]),
      {
        r: m(y.substring(0, 2)),
        g: m(y.substring(2, 4)),
        b: m(y.substring(4, 6)),
      }
    );
  }
  function M(v) {
    var y = S(v, "origin", Object);
    return ((y.x = S(y, "x", Number)), (y.y = S(y, "y", Number)), y);
  }
  function D(v) {
    ((v.width = document.documentElement.clientWidth),
      (v.height = document.documentElement.clientHeight));
  }
  function k(v) {
    var y = v.getBoundingClientRect();
    ((v.width = y.width), (v.height = y.height));
  }
  function U(v) {
    var y = document.createElement("canvas");
    return (
      (y.style.position = "fixed"),
      (y.style.top = "0px"),
      (y.style.left = "0px"),
      (y.style.pointerEvents = "none"),
      (y.style.zIndex = v),
      y
    );
  }
  function V(v, y, N, F, O, B, z, j, W) {
    (v.save(),
      v.translate(y, N),
      v.rotate(B),
      v.scale(F, O),
      v.arc(0, 0, 1, z, j, W),
      v.restore());
  }
  function de(v) {
    var y = v.angle * (Math.PI / 180),
      N = v.spread * (Math.PI / 180);
    return {
      x: v.x,
      y: v.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: v.startVelocity * 0.5 + Math.random() * v.startVelocity,
      angle2D: -y + (0.5 * N - Math.random() * N),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: v.color,
      shape: v.shape,
      tick: 0,
      totalTicks: v.ticks,
      decay: v.decay,
      drift: v.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: v.gravity * 3,
      ovalScalar: 0.6,
      scalar: v.scalar,
      flat: v.flat,
    };
  }
  function dt(v, y) {
    ((y.x += Math.cos(y.angle2D) * y.velocity + y.drift),
      (y.y += Math.sin(y.angle2D) * y.velocity + y.gravity),
      (y.velocity *= y.decay),
      y.flat
        ? ((y.wobble = 0),
          (y.wobbleX = y.x + 10 * y.scalar),
          (y.wobbleY = y.y + 10 * y.scalar),
          (y.tiltSin = 0),
          (y.tiltCos = 0),
          (y.random = 1))
        : ((y.wobble += y.wobbleSpeed),
          (y.wobbleX = y.x + 10 * y.scalar * Math.cos(y.wobble)),
          (y.wobbleY = y.y + 10 * y.scalar * Math.sin(y.wobble)),
          (y.tiltAngle += 0.1),
          (y.tiltSin = Math.sin(y.tiltAngle)),
          (y.tiltCos = Math.cos(y.tiltAngle)),
          (y.random = Math.random() + 2)));
    var N = y.tick++ / y.totalTicks,
      F = y.x + y.random * y.tiltCos,
      O = y.y + y.random * y.tiltSin,
      B = y.wobbleX + y.random * y.tiltCos,
      z = y.wobbleY + y.random * y.tiltSin;
    if (
      ((v.fillStyle =
        "rgba(" +
        y.color.r +
        ", " +
        y.color.g +
        ", " +
        y.color.b +
        ", " +
        (1 - N) +
        ")"),
      v.beginPath(),
      s &&
        y.shape.type === "path" &&
        typeof y.shape.path == "string" &&
        Array.isArray(y.shape.matrix))
    )
      v.fill(
        ue(
          y.shape.path,
          y.shape.matrix,
          y.x,
          y.y,
          Math.abs(B - F) * 0.1,
          Math.abs(z - O) * 0.1,
          (Math.PI / 10) * y.wobble,
        ),
      );
    else if (y.shape.type === "bitmap") {
      var j = (Math.PI / 10) * y.wobble,
        W = Math.abs(B - F) * 0.1,
        Q = Math.abs(z - O) * 0.1,
        oe = y.shape.bitmap.width * y.scalar,
        X = y.shape.bitmap.height * y.scalar,
        se = new DOMMatrix([
          Math.cos(j) * W,
          Math.sin(j) * W,
          -Math.sin(j) * Q,
          Math.cos(j) * Q,
          y.x,
          y.y,
        ]);
      se.multiplySelf(new DOMMatrix(y.shape.matrix));
      var xe = v.createPattern(c.transform(y.shape.bitmap), "no-repeat");
      (xe.setTransform(se),
        (v.globalAlpha = 1 - N),
        (v.fillStyle = xe),
        v.fillRect(y.x - oe / 2, y.y - X / 2, oe, X),
        (v.globalAlpha = 1));
    } else if (y.shape === "circle")
      v.ellipse
        ? v.ellipse(
            y.x,
            y.y,
            Math.abs(B - F) * y.ovalScalar,
            Math.abs(z - O) * y.ovalScalar,
            (Math.PI / 10) * y.wobble,
            0,
            2 * Math.PI,
          )
        : V(
            v,
            y.x,
            y.y,
            Math.abs(B - F) * y.ovalScalar,
            Math.abs(z - O) * y.ovalScalar,
            (Math.PI / 10) * y.wobble,
            0,
            2 * Math.PI,
          );
    else if (y.shape === "star")
      for (
        var H = (Math.PI / 2) * 3,
          Ve = 4 * y.scalar,
          nt = 8 * y.scalar,
          rt = y.x,
          Pt = y.y,
          dn = 5,
          ht = Math.PI / dn;
        dn--;
      )
        ((rt = y.x + Math.cos(H) * nt),
          (Pt = y.y + Math.sin(H) * nt),
          v.lineTo(rt, Pt),
          (H += ht),
          (rt = y.x + Math.cos(H) * Ve),
          (Pt = y.y + Math.sin(H) * Ve),
          v.lineTo(rt, Pt),
          (H += ht));
    else
      (v.moveTo(Math.floor(y.x), Math.floor(y.y)),
        v.lineTo(Math.floor(y.wobbleX), Math.floor(O)),
        v.lineTo(Math.floor(B), Math.floor(z)),
        v.lineTo(Math.floor(F), Math.floor(y.wobbleY)));
    return (v.closePath(), v.fill(), y.tick < y.totalTicks);
  }
  function St(v, y, N, F, O) {
    var B = y.slice(),
      z = v.getContext("2d"),
      j,
      W,
      Q = u(function (oe) {
        function X() {
          ((j = W = null),
            z.clearRect(0, 0, F.width, F.height),
            c.clear(),
            O(),
            oe());
        }
        function se() {
          (r &&
            !(F.width === i.width && F.height === i.height) &&
            ((F.width = v.width = i.width), (F.height = v.height = i.height)),
            !F.width &&
              !F.height &&
              (N(v), (F.width = v.width), (F.height = v.height)),
            z.clearRect(0, 0, F.width, F.height),
            (B = B.filter(function (xe) {
              return dt(z, xe);
            })),
            B.length ? (j = f.frame(se)) : X());
        }
        ((j = f.frame(se)), (W = X));
      });
    return {
      addFettis: function (oe) {
        return ((B = B.concat(oe)), Q);
      },
      canvas: v,
      promise: Q,
      reset: function () {
        (j && f.cancel(j), W && W());
      },
    };
  }
  function Ot(v, y) {
    var N = !v,
      F = !!S(y || {}, "resize"),
      O = !1,
      B = S(y, "disableForReducedMotion", Boolean),
      z = o && !!S(y || {}, "useWorker"),
      j = z ? d() : null,
      W = N ? D : k,
      Q = v && j ? !!v.__confetti_initialized : !1,
      oe =
        typeof matchMedia == "function" &&
        matchMedia("(prefers-reduced-motion)").matches,
      X;
    function se(H, Ve, nt) {
      for (
        var rt = S(H, "particleCount", p),
          Pt = S(H, "angle", Number),
          dn = S(H, "spread", Number),
          ht = S(H, "startVelocity", Number),
          Ug = S(H, "decay", Number),
          $g = S(H, "gravity", Number),
          Wg = S(H, "drift", Number),
          Xu = S(H, "colors", C),
          Hg = S(H, "ticks", Number),
          Zu = S(H, "shapes"),
          Kg = S(H, "scalar"),
          Gg = !!S(H, "flat"),
          Ju = M(H),
          qu = rt,
          ws = [],
          Qg = v.width * Ju.x,
          Yg = v.height * Ju.y;
        qu--;
      )
        ws.push(
          de({
            x: Qg,
            y: Yg,
            angle: Pt,
            spread: dn,
            startVelocity: ht,
            color: Xu[qu % Xu.length],
            shape: Zu[h(0, Zu.length)],
            ticks: Hg,
            decay: Ug,
            gravity: $g,
            drift: Wg,
            scalar: Kg,
            flat: Gg,
          }),
        );
      return X ? X.addFettis(ws) : ((X = St(v, ws, W, Ve, nt)), X.promise);
    }
    function xe(H) {
      var Ve = B || S(H, "disableForReducedMotion", Boolean),
        nt = S(H, "zIndex", Number);
      if (Ve && oe)
        return u(function (ht) {
          ht();
        });
      (N && X
        ? (v = X.canvas)
        : N && !v && ((v = U(nt)), document.body.appendChild(v)),
        F && !Q && W(v));
      var rt = { width: v.width, height: v.height };
      (j && !Q && j.init(v), (Q = !0), j && (v.__confetti_initialized = !0));
      function Pt() {
        if (j) {
          var ht = {
            getBoundingClientRect: function () {
              if (!N) return v.getBoundingClientRect();
            },
          };
          (W(ht),
            j.postMessage({ resize: { width: ht.width, height: ht.height } }));
          return;
        }
        rt.width = rt.height = null;
      }
      function dn() {
        ((X = null),
          F && ((O = !1), t.removeEventListener("resize", Pt)),
          N &&
            v &&
            (document.body.contains(v) && document.body.removeChild(v),
            (v = null),
            (Q = !1)));
      }
      return (
        F && !O && ((O = !0), t.addEventListener("resize", Pt, !1)),
        j ? j.fire(H, rt, dn) : se(H, rt, dn)
      );
    }
    return (
      (xe.reset = function () {
        (j && j.reset(), X && X.reset());
      }),
      xe
    );
  }
  var In;
  function fn() {
    return (In || (In = Ot(null, { useWorker: !0, resize: !0 })), In);
  }
  function ue(v, y, N, F, O, B, z) {
    var j = new Path2D(v),
      W = new Path2D();
    W.addPath(j, new DOMMatrix(y));
    var Q = new Path2D();
    return (
      Q.addPath(
        W,
        new DOMMatrix([
          Math.cos(z) * O,
          Math.sin(z) * O,
          -Math.sin(z) * B,
          Math.cos(z) * B,
          N,
          F,
        ]),
      ),
      Q
    );
  }
  function A(v) {
    if (!s) throw new Error("path confetti are not supported in this browser");
    var y, N;
    typeof v == "string" ? (y = v) : ((y = v.path), (N = v.matrix));
    var F = new Path2D(y),
      O = document.createElement("canvas"),
      B = O.getContext("2d");
    if (!N) {
      for (
        var z = 1e3, j = z, W = z, Q = 0, oe = 0, X, se, xe = 0;
        xe < z;
        xe += 2
      )
        for (var H = 0; H < z; H += 2)
          B.isPointInPath(F, xe, H, "nonzero") &&
            ((j = Math.min(j, xe)),
            (W = Math.min(W, H)),
            (Q = Math.max(Q, xe)),
            (oe = Math.max(oe, H)));
      ((X = Q - j), (se = oe - W));
      var Ve = 10,
        nt = Math.min(Ve / X, Ve / se);
      N = [
        nt,
        0,
        0,
        nt,
        -Math.round(X / 2 + j) * nt,
        -Math.round(se / 2 + W) * nt,
      ];
    }
    return { type: "path", path: y, matrix: N };
  }
  function I(v) {
    var y,
      N = 1,
      F = "#000000",
      O =
        '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
    typeof v == "string"
      ? (y = v)
      : ((y = v.text),
        (N = "scalar" in v ? v.scalar : N),
        (O = "fontFamily" in v ? v.fontFamily : O),
        (F = "color" in v ? v.color : F));
    var B = 10 * N,
      z = "" + B + "px " + O,
      j = new OffscreenCanvas(B, B),
      W = j.getContext("2d");
    W.font = z;
    var Q = W.measureText(y),
      oe = Math.ceil(Q.actualBoundingBoxRight + Q.actualBoundingBoxLeft),
      X = Math.ceil(Q.actualBoundingBoxAscent + Q.actualBoundingBoxDescent),
      se = 2,
      xe = Q.actualBoundingBoxLeft + se,
      H = Q.actualBoundingBoxAscent + se;
    ((oe += se + se),
      (X += se + se),
      (j = new OffscreenCanvas(oe, X)),
      (W = j.getContext("2d")),
      (W.font = z),
      (W.fillStyle = F),
      W.fillText(y, xe, H));
    var Ve = 1 / N;
    return {
      type: "bitmap",
      bitmap: j.transferToImageBitmap(),
      matrix: [Ve, 0, 0, Ve, (-oe * Ve) / 2, (-X * Ve) / 2],
    };
  }
  ((n.exports = function () {
    return fn().apply(this, arguments);
  }),
    (n.exports.reset = function () {
      fn().reset();
    }),
    (n.exports.create = Ot),
    (n.exports.shapeFromPath = A),
    (n.exports.shapeFromText = I));
})(
  (function () {
    return typeof window < "u" ? window : typeof self < "u" ? self : this || {};
  })(),
  bu,
  !1,
);
const no = bu.exports;
bu.exports.create;
function Bg({ autoFire: e = !0, mini: t = !1 }) {
  const n = P.useRef(!1),
    r = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const i = {
        particleCount: t ? 60 : 150,
        spread: t ? 60 : 100,
        origin: { y: 0.5 },
        colors: [
          "#FF4D8D",
          "#FFB3CC",
          "#FF79A8",
          "#4A1D3F",
          "#FFF0F5",
          "#FF006E",
        ],
        scalar: 1.2,
      };
      (no({ ...i, origin: { x: 0.5, y: 0.5 } }),
        t ||
          (setTimeout(() => {
            (no({ ...i, angle: 60, origin: { x: 0, y: 0.6 } }),
              no({ ...i, angle: 120, origin: { x: 1, y: 0.6 } }));
          }, 150),
          setTimeout(() => {
            no({
              particleCount: 30,
              spread: 80,
              origin: { x: 0.5, y: 0.8 },
              shapes: ["circle"],
              colors: ["#FF4D8D", "#FFB3CC"],
              scalar: 1.5,
              ticks: 200,
            });
          }, 300)));
    };
  return (
    P.useEffect(() => {
      if (e && !n.current) {
        n.current = !0;
        const i = setTimeout(r, 200);
        return () => clearTimeout(i);
      }
    }, [e]),
    null
  );
}
function bP() {
  const e = It(),
    { noAttempts: t } = ji();
  return E.jsxs(_n, {
    children: [
      E.jsx(Bg, { autoFire: !0 }),
      E.jsxs("div", {
        className:
          "w-full max-w-md mx-auto px-4 py-12 flex flex-col items-center justify-center text-center gap-6 min-h-screen",
        children: [
          E.jsx(b.h1, {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            className:
              "font-extrabold text-[#FF4D8D] text-4xl sm:text-5xl text-[#4A1D3F]",
            children: "WAIT YOU ACTUALLY SAID YES?? 😭",
          }),
          E.jsx(b.p, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.5 },
            className: "text-xl text-[#4A1D3F] opacity-80",
            children: "I was so ready for you to say no 😅",
          }),
          t > 0 &&
            E.jsxs(b.p, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.7 },
              className:
                "text-sm text-[#FF4D8D] font-bold bg-[#FFF0F5] px-4 py-2 rounded-full mt-2",
              children: ["()"],
            }),
          E.jsx(b.button, {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 1 },
            whileHover: { scale: 1.04 },
            whileTap: { scale: 0.97 },
            onClick: () => e("/when"),
            className: "btn-yes text-lg px-8 py-4 mt-4",
            children: "okay okay! ->",
          }),
        ],
      }),
    ],
  });
}
function XP() {
  const e = It(),
    { dateChoice: t, setDateChoice: n, timeChoice: r, setTimeChoice: i } = ji(),
    o = t && r;
  return E.jsx(_n, {
    children: E.jsxs("div", {
      className:
        "w-full max-w-sm mx-auto px-4 flex flex-col items-center justify-center min-h-screen gap-8",
      children: [
        E.jsxs(b.h1, {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          className:
            "font-extrabold text-[#FF4D8D] text-3xl text-center text-[#4A1D3F]",
          children: ["📅🐾", E.jsx("br", {}), "So... when are you free?"],
        }),
        E.jsxs("div", {
          className:
            "w-full flex flex-col gap-6 bg-white/50 p-6 rounded-3xl shadow-sm backdrop-blur-sm",
          children: [
            E.jsxs("div", {
              children: [
                E.jsx("label", {
                  className: "input-label",
                  children: "Pick a Day 📅",
                }),
                E.jsx("input", {
                  type: "date",
                  className: "input-field",
                  value: t,
                  onChange: (s) => n(s.target.value),
                }),
              ],
            }),
            E.jsxs("div", {
              children: [
                E.jsx("label", {
                  className: "input-label",
                  children: "What Time? ⏰",
                }),
                E.jsxs("select", {
                  className: "input-field",
                  value: r,
                  onChange: (s) => i(s.target.value),
                  children: [
                    E.jsx("option", {
                      value: "",
                      disabled: !0,
                      children: "Select a time...",
                    }),
                    E.jsx("option", {
                      value: "12:00 PM",
                      children: "12:00 PM",
                    }),
                    E.jsx("option", { value: "1:00 PM", children: "1:00 PM" }),
                    E.jsx("option", { value: "2:00 PM", children: "2:00 PM" }),
                    E.jsx("option", { value: "3:00 PM", children: "3:00 PM" }),
                    E.jsx("option", { value: "4:00 PM", children: "4:00 PM" }),
                    E.jsx("option", { value: "5:00 PM", children: "5:00 PM" }),
                    E.jsx("option", { value: "6:00 PM", children: "6:00 PM" }),
                    E.jsx("option", { value: "7:00 PM", children: "7:00 PM" }),
                    E.jsx("option", { value: "8:00 PM", children: "8:00 PM" }),
                    E.jsx("option", { value: "9:00 PM", children: "9:00 PM" }),
                    E.jsx("option", {
                      value: "10:00 PM",
                      children: "10:00 PM",
                    }),
                    E.jsx("option", {
                      value: "11:00 PM",
                      children: "11:00 PM",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        E.jsx(b.button, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "btn-yes w-full",
          disabled: !o,
          onClick: () => e("/vibe"),
          children: "set the date! ♥",
        }),
      ],
    }),
  });
}
const ZP = [
  { emoji: "🍕", label: "Pizza" },
  { emoji: "🍔", label: "Burgers" },
  { emoji: "🥟", label: "momos" },
  { emoji: "🍛", label: "shahi paneer+ naan" },
  { emoji: "🍦", label: "icecream date" },
  { emoji: "🍷", label: "Alcohol" },
];
function JP() {
  const e = It(),
    { vibeChoice: t, setVibeChoice: n } = ji(),
    r = (i) => {
      (n(i),
        setTimeout(() => {
          e("/ready");
        }, 400));
    };
  return E.jsx(_n, {
    children: E.jsxs("div", {
      className:
        "w-full max-w-md mx-auto px-4 flex flex-col items-center justify-center min-h-screen gap-6 py-12",
      children: [
        E.jsxs("div", {
          className: "text-center",
          children: [
            E.jsx(b.h1, {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              className: "font-extrabold text-[#FF4D8D] text-3xl mb-2",
              children: "What are we feeling? 🍽✨",
            }),
            E.jsx(b.p, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              className: "text-[#4A1D3F] opacity-70",
              children: "pick your vibe",
            }),
          ],
        }),
        E.jsx("div", {
          className: "grid grid-cols-2 gap-4 w-full mt-4",
          children: ZP.map((i, o) =>
            E.jsxs(
              b.button,
              {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: o * 0.1 },
                onClick: () => r(i.label),
                className: `date-type-card ${t === i.label ? "selected" : ""}`,
                children: [
                  E.jsx("span", {
                    className: "text-4xl mb-2",
                    children: i.emoji,
                  }),
                  E.jsxs("span", {
                    className: "text-sm px-1 flex flex-col items-center",
                    children: [
                      i.label,
                      i.label === "shahi paneer+ naan" &&
                        E.jsx("span", {
                          className:
                            "text-[10px] text-[#FF4D8D] font-bold mt-0.5",
                          children: "(my fav)",
                        }),
                    ],
                  }),
                ],
              },
              i.label,
            ),
          ),
        }),
      ],
    }),
  });
}
function qP() {
  const e = It();
  return E.jsx(_n, {
    children: E.jsxs("div", {
      className:
        "w-full max-w-md mx-auto px-4 flex flex-col items-center justify-center text-center min-h-screen gap-8",
      children: [
        E.jsxs(b.h1, {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.3 },
          className: "font-extrabold text-[#FF4D8D] text-3xl px-4",
          children: [
            "glad you didn't say no.",
            E.jsx("br", {}),
            "be ready by 6, I'm coming to get you 🚗",
          ],
        }),
        E.jsx("div", {
          className:
            "flex flex-row gap-6 justify-center mt-2 h-12 items-center",
          children: [1, 2, 3, 4, 5].map((t) =>
            E.jsx(
              b.div,
              {
                initial: { opacity: 0, scale: 0 },
                animate: { opacity: 1, scale: 1, y: [0, -10, 0] },
                transition: {
                  opacity: { delay: 0.5 + t * 0.1 },
                  scale: { delay: 0.5 + t * 0.1 },
                  y: {
                    duration: 2.5,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: t * 0.2,
                  },
                },
                className: "text-2xl text-[#FF4D8D]",
                children: "♥",
              },
              t,
            ),
          ),
        }),
        E.jsx(b.button, {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 1 },
          onClick: () => e("/fee"),
          className: "btn-yes mt-8",
          children: "ok I accept 💝",
        }),
      ],
    }),
  });
}
function eC() {
  const e = It(),
    [t, n] = P.useState(!1),
    r = () => {
      n(!0);
    };
  return E.jsx(_n, {
    children: E.jsxs("div", {
      className:
        "w-full max-w-sm mx-auto px-4 flex flex-col items-center justify-center text-center min-h-screen gap-6",
      children: [
        E.jsx(b.h1, {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          className: "font-extrabold text-[#FF4D8D] text-3xl",
          children: "one small fee",
        }),
        E.jsx(b.p, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.2 },
          className: "text-[#4A1D3F] opacity-80 text-sm",
          children:
            "to confirm your acceptance of this date, please complete the following transaction. totally normal. everyone does this.",
        }),
        E.jsxs(b.div, {
          initial: { scale: 0.9, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: { delay: 0.4 },
          className:
            "w-full bg-white rounded-2xl p-6 shadow-xl border-2 border-[#FFB3CC] flex flex-col gap-4 mt-2 relative overflow-hidden",
          children: [
            E.jsx("div", {
              className: "font-bold text-lg text-[#4A1D3F]",
              children: "Date Agreement™",
            }),
            E.jsx("div", {
              className: "text-3xl font-black text-[#FF4D8D]",
              children: "₹999",
            }),
            E.jsx("div", {
              className: "text-xs text-[#4A1D3F] opacity-60",
              children: "(for you only, for others its ₹1000)",
            }),
            E.jsx("div", { className: "h-px bg-[#FFE4EC] w-full my-2" }),
            E.jsxs("div", {
              className:
                "text-xs text-[#4A1D3F] flex flex-col gap-1 font-semibold",
              children: [
                E.jsx("p", { children: "✓ one-time fee" }),
                E.jsx("p", { children: "✓ non-refundable" }),
                E.jsx("p", { children: "✓ absolutely worth it" }),
              ],
            }),
          ],
        }),
        E.jsx(vu, {
          mode: "wait",
          children: t
            ? E.jsxs(
                b.div,
                {
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 },
                  className: "mt-6 flex flex-col items-center",
                  children: [
                    E.jsx(Bg, { autoFire: !0 }),
                    E.jsx("div", {
                      className: "text-5xl mb-4",
                      children: "🤣",
                    }),
                    E.jsx("h2", {
                      className:
                        "font-extrabold text-[#FF4D8D] text-2xl text-[#FF4D8D]",
                      children: "Just kidding!",
                    }),
                    E.jsx("p", {
                      className: "text-[#4A1D3F] font-bold mt-2",
                      children: "See you on our date! 💕",
                    }),
                  ],
                },
                "success",
              )
            : E.jsxs(
                b.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0, scale: 0.9 },
                  className: "w-full flex flex-col gap-3 mt-4",
                  children: [
                    E.jsx("button", {
                      onClick: r,
                      className: "btn-yes w-full py-4 text-sm sm:text-base",
                      children: "pay 999 rupees & confirm 💝",
                    }),
                    E.jsx("button", {
                      onClick: () => e(-1),
                      className:
                        "text-[#4A1D3F] opacity-50 hover:opacity-100 text-sm font-bold transition-opacity",
                      children: "go back",
                    }),
                  ],
                },
                "buttons",
              ),
        }),
      ],
    }),
  });
}
function tC() {
  const e = It();
  return E.jsx(_n, {
    children: E.jsxs("div", {
      className:
        "w-full max-w-md mx-auto px-4 py-12 flex flex-col items-center justify-center text-center gap-6 min-h-screen",
      children: [
        E.jsx(b.div, {
          initial: { scale: 0, rotate: 10 },
          animate: { scale: 1, rotate: 0 },
          transition: { type: "spring", stiffness: 200, damping: 12 },
          className: "text-8xl mb-2",
          children: "🏃💨",
        }),
        E.jsx(b.h1, {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "font-extrabold text-[#FF4D8D] text-4xl text-[#4A1D3F]",
          children: "Oops, this page ran away",
        }),
        E.jsx(b.p, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.2 },
          className: "text-[#4A1D3F] opacity-70",
          children: "Kind of like that No button.",
        }),
        E.jsx(b.button, {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.3 },
          className: "btn-yes mt-4",
          onClick: () => e("/"),
          children: "Take me back 💕",
        }),
      ],
    }),
  });
}
const _d = ["💕", "💗", "💖", "💝", "🌸", "✨"];
function nC() {
  const e = P.useRef(null),
    t = P.useRef([]),
    n = P.useRef(0),
    r =
      typeof window < "u" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    P.useEffect(() => {
      if (r) return;
      const i = e.current;
      if (i)
        return (
          (t.current = Array.from({ length: 12 }, (o, s) => ({
            id: s,
            x: Math.random() * 100,
            size: 16 + Math.random() * 20,
            duration: 6 + Math.random() * 8,
            delay: Math.random() * 6,
            emoji: _d[Math.floor(Math.random() * _d.length)],
          }))),
          (n.current = t.current.length),
          t.current.forEach((o) => {
            const s = document.createElement("span");
            ((s.textContent = o.emoji),
              (s.className = "heart-bg"),
              (s.style.cssText = `
        left: ${o.x}%;
        font-size: ${o.size}px;
        animation-duration: ${o.duration}s;
        animation-delay: ${o.delay}s;
        opacity: 0;
      `),
              i.appendChild(s));
          }),
          () => {
            for (; i.firstChild; ) i.removeChild(i.firstChild);
          }
        );
    }, [r]),
    E.jsx("div", {
      ref: e,
      className: "fixed inset-0 pointer-events-none overflow-hidden z-0",
      "aria-hidden": "true",
    })
  );
}
function rC() {
  const e = hs(),
    t = It();
  return (
    P.useEffect(() => {
      sessionStorage.getItem("app_started") ||
        (sessionStorage.setItem("app_started", "true"),
        e.pathname !== "/" && t("/", { replace: !0 }));
    }, [e.pathname, t]),
    E.jsx(vu, {
      mode: "wait",
      children: E.jsxs(
        h1,
        {
          location: e,
          children: [
            E.jsx(Ct, { path: "/", element: E.jsx(YP, {}) }),
            E.jsx(Ct, { path: "/surprise", element: E.jsx(bP, {}) }),
            E.jsx(Ct, { path: "/when", element: E.jsx(XP, {}) }),
            E.jsx(Ct, { path: "/vibe", element: E.jsx(JP, {}) }),
            E.jsx(Ct, { path: "/ready", element: E.jsx(qP, {}) }),
            E.jsx(Ct, { path: "/fee", element: E.jsx(eC, {}) }),
            E.jsx(Ct, { path: "/404", element: E.jsx(tC, {}) }),
            E.jsx(Ct, {
              path: "*",
              element: E.jsx(f1, { to: "/404", replace: !0 }),
            }),
          ],
        },
        e.pathname,
      ),
    })
  );
}
function iC() {
  return E.jsx(WP, {
    children: E.jsxs(g1, { children: [E.jsx(nC, {}), E.jsx(rC, {})] }),
  });
}
aa.createRoot(document.getElementById("root")).render(
  E.jsx(Qd.StrictMode, { children: E.jsx(iC, {}) }),
);
