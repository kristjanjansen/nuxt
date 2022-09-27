/* esm.sh - esbuild bundle(hls.js@1.2.3) es2022 production */
var $t = Object.create;
var wt = Object.defineProperty;
var Zt = Object.getOwnPropertyDescriptor;
var Jt = Object.getOwnPropertyNames;
var qt = Object.getPrototypeOf,
  te = Object.prototype.hasOwnProperty;
var ee = (W, C) => () => (C || W((C = { exports: {} }).exports, C), C.exports);
var re = (W, C, T, M) => {
  if ((C && typeof C == "object") || typeof C == "function")
    for (let O of Jt(C))
      !te.call(W, O) &&
        O !== T &&
        wt(W, O, {
          get: () => C[O],
          enumerable: !(M = Zt(C, O)) || M.enumerable,
        });
  return W;
};
var ie = (W, C, T) => (
  (T = W != null ? $t(qt(W)) : {}),
  re(
    C || !W || !W.__esModule
      ? wt(T, "default", { value: W, enumerable: !0 })
      : T,
    W
  )
);
var Kt = ee((Pt, Ft) => {
  typeof window < "u" &&
    (function (C, T) {
      typeof Pt == "object" && typeof Ft == "object"
        ? (Ft.exports = T())
        : typeof define == "function" && define.amd
        ? define([], T)
        : typeof Pt == "object"
        ? (Pt.Hls = T())
        : (C.Hls = T());
    })(Pt, function () {
      return (function (W) {
        var C = {};
        function T(M) {
          if (C[M]) return C[M].exports;
          var O = (C[M] = { i: M, l: !1, exports: {} });
          return W[M].call(O.exports, O, O.exports, T), (O.l = !0), O.exports;
        }
        return (
          (T.m = W),
          (T.c = C),
          (T.d = function (M, O, L) {
            T.o(M, O) ||
              Object.defineProperty(M, O, { enumerable: !0, get: L });
          }),
          (T.r = function (M) {
            typeof Symbol < "u" &&
              Symbol.toStringTag &&
              Object.defineProperty(M, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(M, "__esModule", { value: !0 });
          }),
          (T.t = function (M, O) {
            if (
              (O & 1 && (M = T(M)),
              O & 8 || (O & 4 && typeof M == "object" && M && M.__esModule))
            )
              return M;
            var L = Object.create(null);
            if (
              (T.r(L),
              Object.defineProperty(L, "default", { enumerable: !0, value: M }),
              O & 2 && typeof M != "string")
            )
              for (var b in M)
                T.d(
                  L,
                  b,
                  function (P) {
                    return M[P];
                  }.bind(null, b)
                );
            return L;
          }),
          (T.n = function (M) {
            var O =
              M && M.__esModule
                ? function () {
                    return M.default;
                  }
                : function () {
                    return M;
                  };
            return T.d(O, "a", O), O;
          }),
          (T.o = function (M, O) {
            return Object.prototype.hasOwnProperty.call(M, O);
          }),
          (T.p = "/dist/"),
          T((T.s = "./src/hls.ts"))
        );
      })({
        "./node_modules/eventemitter3/index.js": function (W, C, T) {
          "use strict";
          var M = Object.prototype.hasOwnProperty,
            O = "~";
          function L() {}
          Object.create &&
            ((L.prototype = Object.create(null)),
            new L().__proto__ || (O = !1));
          function b(p, y, S) {
            (this.fn = p), (this.context = y), (this.once = S || !1);
          }
          function P(p, y, S, E, g) {
            if (typeof S != "function")
              throw new TypeError("The listener must be a function");
            var m = new b(S, E || p, g),
              l = O ? O + y : y;
            return (
              p._events[l]
                ? p._events[l].fn
                  ? (p._events[l] = [p._events[l], m])
                  : p._events[l].push(m)
                : ((p._events[l] = m), p._eventsCount++),
              p
            );
          }
          function R(p, y) {
            --p._eventsCount === 0
              ? (p._events = new L())
              : delete p._events[y];
          }
          function A() {
            (this._events = new L()), (this._eventsCount = 0);
          }
          (A.prototype.eventNames = function () {
            var y = [],
              S,
              E;
            if (this._eventsCount === 0) return y;
            for (E in (S = this._events))
              M.call(S, E) && y.push(O ? E.slice(1) : E);
            return Object.getOwnPropertySymbols
              ? y.concat(Object.getOwnPropertySymbols(S))
              : y;
          }),
            (A.prototype.listeners = function (y) {
              var S = O ? O + y : y,
                E = this._events[S];
              if (!E) return [];
              if (E.fn) return [E.fn];
              for (var g = 0, m = E.length, l = new Array(m); g < m; g++)
                l[g] = E[g].fn;
              return l;
            }),
            (A.prototype.listenerCount = function (y) {
              var S = O ? O + y : y,
                E = this._events[S];
              return E ? (E.fn ? 1 : E.length) : 0;
            }),
            (A.prototype.emit = function (y, S, E, g, m, l) {
              var t = O ? O + y : y;
              if (!this._events[t]) return !1;
              var n = this._events[t],
                h = arguments.length,
                v,
                i;
              if (n.fn) {
                switch (
                  (n.once && this.removeListener(y, n.fn, void 0, !0), h)
                ) {
                  case 1:
                    return n.fn.call(n.context), !0;
                  case 2:
                    return n.fn.call(n.context, S), !0;
                  case 3:
                    return n.fn.call(n.context, S, E), !0;
                  case 4:
                    return n.fn.call(n.context, S, E, g), !0;
                  case 5:
                    return n.fn.call(n.context, S, E, g, m), !0;
                  case 6:
                    return n.fn.call(n.context, S, E, g, m, l), !0;
                }
                for (i = 1, v = new Array(h - 1); i < h; i++)
                  v[i - 1] = arguments[i];
                n.fn.apply(n.context, v);
              } else {
                var r = n.length,
                  o;
                for (i = 0; i < r; i++)
                  switch (
                    (n[i].once && this.removeListener(y, n[i].fn, void 0, !0),
                    h)
                  ) {
                    case 1:
                      n[i].fn.call(n[i].context);
                      break;
                    case 2:
                      n[i].fn.call(n[i].context, S);
                      break;
                    case 3:
                      n[i].fn.call(n[i].context, S, E);
                      break;
                    case 4:
                      n[i].fn.call(n[i].context, S, E, g);
                      break;
                    default:
                      if (!v)
                        for (o = 1, v = new Array(h - 1); o < h; o++)
                          v[o - 1] = arguments[o];
                      n[i].fn.apply(n[i].context, v);
                  }
              }
              return !0;
            }),
            (A.prototype.on = function (y, S, E) {
              return P(this, y, S, E, !1);
            }),
            (A.prototype.once = function (y, S, E) {
              return P(this, y, S, E, !0);
            }),
            (A.prototype.removeListener = function (y, S, E, g) {
              var m = O ? O + y : y;
              if (!this._events[m]) return this;
              if (!S) return R(this, m), this;
              var l = this._events[m];
              if (l.fn)
                l.fn === S &&
                  (!g || l.once) &&
                  (!E || l.context === E) &&
                  R(this, m);
              else {
                for (var t = 0, n = [], h = l.length; t < h; t++)
                  (l[t].fn !== S ||
                    (g && !l[t].once) ||
                    (E && l[t].context !== E)) &&
                    n.push(l[t]);
                n.length
                  ? (this._events[m] = n.length === 1 ? n[0] : n)
                  : R(this, m);
              }
              return this;
            }),
            (A.prototype.removeAllListeners = function (y) {
              var S;
              return (
                y
                  ? ((S = O ? O + y : y), this._events[S] && R(this, S))
                  : ((this._events = new L()), (this._eventsCount = 0)),
                this
              );
            }),
            (A.prototype.off = A.prototype.removeListener),
            (A.prototype.addListener = A.prototype.on),
            (A.prefixed = O),
            (A.EventEmitter = A),
            (W.exports = A);
        },
        "./node_modules/url-toolkit/src/url-toolkit.js": function (W, C, T) {
          (function (M) {
            var O =
                /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,
              L = /^(?=([^\/?#]*))\1([^]*)$/,
              b = /(?:\/|^)\.(?=\/)/g,
              P = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,
              R = {
                buildAbsoluteURL: function (A, p, y) {
                  if (((y = y || {}), (A = A.trim()), (p = p.trim()), !p)) {
                    if (!y.alwaysNormalize) return A;
                    var S = R.parseURL(A);
                    if (!S) throw new Error("Error trying to parse base URL.");
                    return (
                      (S.path = R.normalizePath(S.path)), R.buildURLFromParts(S)
                    );
                  }
                  var E = R.parseURL(p);
                  if (!E)
                    throw new Error("Error trying to parse relative URL.");
                  if (E.scheme)
                    return y.alwaysNormalize
                      ? ((E.path = R.normalizePath(E.path)),
                        R.buildURLFromParts(E))
                      : p;
                  var g = R.parseURL(A);
                  if (!g) throw new Error("Error trying to parse base URL.");
                  if (!g.netLoc && g.path && g.path[0] !== "/") {
                    var m = L.exec(g.path);
                    (g.netLoc = m[1]), (g.path = m[2]);
                  }
                  g.netLoc && !g.path && (g.path = "/");
                  var l = {
                    scheme: g.scheme,
                    netLoc: E.netLoc,
                    path: null,
                    params: E.params,
                    query: E.query,
                    fragment: E.fragment,
                  };
                  if (!E.netLoc && ((l.netLoc = g.netLoc), E.path[0] !== "/"))
                    if (!E.path)
                      (l.path = g.path),
                        E.params ||
                          ((l.params = g.params),
                          E.query || (l.query = g.query));
                    else {
                      var t = g.path,
                        n = t.substring(0, t.lastIndexOf("/") + 1) + E.path;
                      l.path = R.normalizePath(n);
                    }
                  return (
                    l.path === null &&
                      (l.path = y.alwaysNormalize
                        ? R.normalizePath(E.path)
                        : E.path),
                    R.buildURLFromParts(l)
                  );
                },
                parseURL: function (A) {
                  var p = O.exec(A);
                  return p
                    ? {
                        scheme: p[1] || "",
                        netLoc: p[2] || "",
                        path: p[3] || "",
                        params: p[4] || "",
                        query: p[5] || "",
                        fragment: p[6] || "",
                      }
                    : null;
                },
                normalizePath: function (A) {
                  for (
                    A = A.split("").reverse().join("").replace(b, "");
                    A.length !== (A = A.replace(P, "")).length;

                  );
                  return A.split("").reverse().join("");
                },
                buildURLFromParts: function (A) {
                  return (
                    A.scheme +
                    A.netLoc +
                    A.path +
                    A.params +
                    A.query +
                    A.fragment
                  );
                },
              };
            W.exports = R;
          })(this);
        },
        "./node_modules/webworkify-webpack/index.js": function (W, C, T) {
          function M(y) {
            var S = {};
            function E(m) {
              if (S[m]) return S[m].exports;
              var l = (S[m] = { i: m, l: !1, exports: {} });
              return (
                y[m].call(l.exports, l, l.exports, E), (l.l = !0), l.exports
              );
            }
            (E.m = y),
              (E.c = S),
              (E.i = function (m) {
                return m;
              }),
              (E.d = function (m, l, t) {
                E.o(m, l) ||
                  Object.defineProperty(m, l, {
                    configurable: !1,
                    enumerable: !0,
                    get: t,
                  });
              }),
              (E.r = function (m) {
                Object.defineProperty(m, "__esModule", { value: !0 });
              }),
              (E.n = function (m) {
                var l =
                  m && m.__esModule
                    ? function () {
                        return m.default;
                      }
                    : function () {
                        return m;
                      };
                return E.d(l, "a", l), l;
              }),
              (E.o = function (m, l) {
                return Object.prototype.hasOwnProperty.call(m, l);
              }),
              (E.p = "/"),
              (E.oe = function (m) {
                throw (console.error(m), m);
              });
            var g = E((E.s = ENTRY_MODULE));
            return g.default || g;
          }
          var O = "[\\.|\\-|\\+|\\w|/|@]+",
            L = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?(" + O + ").*?\\)";
          function b(y) {
            return (y + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
          }
          function P(y) {
            return !isNaN(1 * y);
          }
          function R(y, S, E) {
            var g = {};
            g[E] = [];
            var m = S.toString(),
              l = m.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
            if (!l) return g;
            for (
              var t = l[1], n = new RegExp("(\\\\n|\\W)" + b(t) + L, "g"), h;
              (h = n.exec(m));

            )
              h[3] !== "dll-reference" && g[E].push(h[3]);
            for (
              n = new RegExp(
                "\\(" + b(t) + '\\("(dll-reference\\s(' + O + '))"\\)\\)' + L,
                "g"
              );
              (h = n.exec(m));

            )
              y[h[2]] || (g[E].push(h[1]), (y[h[2]] = T(h[1]).m)),
                (g[h[2]] = g[h[2]] || []),
                g[h[2]].push(h[4]);
            for (var v = Object.keys(g), i = 0; i < v.length; i++)
              for (var r = 0; r < g[v[i]].length; r++)
                P(g[v[i]][r]) && (g[v[i]][r] = 1 * g[v[i]][r]);
            return g;
          }
          function A(y) {
            var S = Object.keys(y);
            return S.reduce(function (E, g) {
              return E || y[g].length > 0;
            }, !1);
          }
          function p(y, S) {
            for (
              var E = { main: [S] }, g = { main: [] }, m = { main: {} };
              A(E);

            )
              for (var l = Object.keys(E), t = 0; t < l.length; t++) {
                var n = l[t],
                  h = E[n],
                  v = h.pop();
                if (((m[n] = m[n] || {}), !(m[n][v] || !y[n][v]))) {
                  (m[n][v] = !0), (g[n] = g[n] || []), g[n].push(v);
                  for (
                    var i = R(y, y[n][v], n), r = Object.keys(i), o = 0;
                    o < r.length;
                    o++
                  )
                    (E[r[o]] = E[r[o]] || []),
                      (E[r[o]] = E[r[o]].concat(i[r[o]]));
                }
              }
            return g;
          }
          W.exports = function (y, S) {
            S = S || {};
            var E = { main: T.m },
              g = S.all ? { main: Object.keys(E.main) } : p(E, y),
              m = "";
            Object.keys(g)
              .filter(function (v) {
                return v !== "main";
              })
              .forEach(function (v) {
                for (var i = 0; g[v][i]; ) i++;
                g[v].push(i),
                  (E[v][i] =
                    "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })"),
                  (m =
                    m +
                    "var " +
                    v +
                    " = (" +
                    M.toString().replace("ENTRY_MODULE", JSON.stringify(i)) +
                    ")({" +
                    g[v]
                      .map(function (r) {
                        return (
                          "" + JSON.stringify(r) + ": " + E[v][r].toString()
                        );
                      })
                      .join(",") +
                    `});
`);
              }),
              (m =
                m +
                "new ((" +
                M.toString().replace("ENTRY_MODULE", JSON.stringify(y)) +
                ")({" +
                g.main
                  .map(function (v) {
                    return "" + JSON.stringify(v) + ": " + E.main[v].toString();
                  })
                  .join(",") +
                "}))(self);");
            var l = new window.Blob([m], { type: "text/javascript" });
            if (S.bare) return l;
            var t =
                window.URL || window.webkitURL || window.mozURL || window.msURL,
              n = t.createObjectURL(l),
              h = new window.Worker(n);
            return (h.objectURL = n), h;
          };
        },
        "./src/config.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "hlsDefaultConfig", function () {
              return o;
            }),
            T.d(C, "mergeConfig", function () {
              return e;
            }),
            T.d(C, "enableStreamingMode", function () {
              return s;
            });
          var M = T("./src/controller/abr-controller.ts"),
            O = T("./src/controller/audio-stream-controller.ts"),
            L = T("./src/controller/audio-track-controller.ts"),
            b = T("./src/controller/subtitle-stream-controller.ts"),
            P = T("./src/controller/subtitle-track-controller.ts"),
            R = T("./src/controller/buffer-controller.ts"),
            A = T("./src/controller/timeline-controller.ts"),
            p = T("./src/controller/cap-level-controller.ts"),
            y = T("./src/controller/fps-controller.ts"),
            S = T("./src/controller/eme-controller.ts"),
            E = T("./src/controller/cmcd-controller.ts"),
            g = T("./src/utils/xhr-loader.ts"),
            m = T("./src/utils/fetch-loader.ts"),
            l = T("./src/utils/cues.ts"),
            t = T("./src/utils/mediakeys-helper.ts"),
            n = T("./src/utils/logger.ts");
          function h() {
            return (
              (h = Object.assign
                ? Object.assign.bind()
                : function (u) {
                    for (var a = 1; a < arguments.length; a++) {
                      var f = arguments[a];
                      for (var c in f)
                        Object.prototype.hasOwnProperty.call(f, c) &&
                          (u[c] = f[c]);
                    }
                    return u;
                  }),
              h.apply(this, arguments)
            );
          }
          function v(u, a) {
            var f = Object.keys(u);
            if (Object.getOwnPropertySymbols) {
              var c = Object.getOwnPropertySymbols(u);
              a &&
                (c = c.filter(function (D) {
                  return Object.getOwnPropertyDescriptor(u, D).enumerable;
                })),
                f.push.apply(f, c);
            }
            return f;
          }
          function i(u) {
            for (var a = 1; a < arguments.length; a++) {
              var f = arguments[a] != null ? arguments[a] : {};
              a % 2
                ? v(Object(f), !0).forEach(function (c) {
                    r(u, c, f[c]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    u,
                    Object.getOwnPropertyDescriptors(f)
                  )
                : v(Object(f)).forEach(function (c) {
                    Object.defineProperty(
                      u,
                      c,
                      Object.getOwnPropertyDescriptor(f, c)
                    );
                  });
            }
            return u;
          }
          function r(u, a, f) {
            return (
              a in u
                ? Object.defineProperty(u, a, {
                    value: f,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (u[a] = f),
              u
            );
          }
          var o = i(
            i(
              {
                autoStartLoad: !0,
                startPosition: -1,
                defaultAudioCodec: void 0,
                debug: !1,
                capLevelOnFPSDrop: !1,
                capLevelToPlayerSize: !1,
                ignoreDevicePixelRatio: !1,
                initialLiveManifestSize: 1,
                maxBufferLength: 30,
                backBufferLength: 1 / 0,
                maxBufferSize: 60 * 1e3 * 1e3,
                maxBufferHole: 0.1,
                highBufferWatchdogPeriod: 2,
                nudgeOffset: 0.1,
                nudgeMaxRetry: 3,
                maxFragLookUpTolerance: 0.25,
                liveSyncDurationCount: 3,
                liveMaxLatencyDurationCount: 1 / 0,
                liveSyncDuration: void 0,
                liveMaxLatencyDuration: void 0,
                maxLiveSyncPlaybackRate: 1,
                liveDurationInfinity: !1,
                liveBackBufferLength: null,
                maxMaxBufferLength: 600,
                enableWorker: !0,
                enableSoftwareAES: !0,
                manifestLoadingTimeOut: 1e4,
                manifestLoadingMaxRetry: 1,
                manifestLoadingRetryDelay: 1e3,
                manifestLoadingMaxRetryTimeout: 64e3,
                startLevel: void 0,
                levelLoadingTimeOut: 1e4,
                levelLoadingMaxRetry: 4,
                levelLoadingRetryDelay: 1e3,
                levelLoadingMaxRetryTimeout: 64e3,
                fragLoadingTimeOut: 2e4,
                fragLoadingMaxRetry: 6,
                fragLoadingRetryDelay: 1e3,
                fragLoadingMaxRetryTimeout: 64e3,
                startFragPrefetch: !1,
                fpsDroppedMonitoringPeriod: 5e3,
                fpsDroppedMonitoringThreshold: 0.2,
                appendErrorMaxRetry: 3,
                loader: g.default,
                fLoader: void 0,
                pLoader: void 0,
                xhrSetup: void 0,
                licenseXhrSetup: void 0,
                licenseResponseCallback: void 0,
                abrController: M.default,
                bufferController: R.default,
                capLevelController: p.default,
                fpsController: y.default,
                stretchShortVideoTrack: !1,
                maxAudioFramesDrift: 1,
                forceKeyFrameOnDiscontinuity: !0,
                abrEwmaFastLive: 3,
                abrEwmaSlowLive: 9,
                abrEwmaFastVoD: 3,
                abrEwmaSlowVoD: 9,
                abrEwmaDefaultEstimate: 5e5,
                abrBandWidthFactor: 0.95,
                abrBandWidthUpFactor: 0.7,
                abrMaxWithRealBitrate: !1,
                maxStarvationDelay: 4,
                maxLoadingDelay: 4,
                minAutoBitrate: 0,
                emeEnabled: !1,
                widevineLicenseUrl: void 0,
                drmSystemOptions: {},
                requestMediaKeySystemAccessFunc: t.requestMediaKeySystemAccess,
                testBandwidth: !0,
                progressive: !1,
                lowLatencyMode: !0,
                cmcd: void 0,
                enableDateRangeMetadataCues: !0,
                enableEmsgMetadataCues: !0,
                enableID3MetadataCues: !0,
              },
              d()
            ),
            {},
            {
              subtitleStreamController: b.SubtitleStreamController,
              subtitleTrackController: P.default,
              timelineController: A.TimelineController,
              audioStreamController: O.default,
              audioTrackController: L.default,
              emeController: S.default,
              cmcdController: E.default,
            }
          );
          function d() {
            return {
              cueHandler: l.default,
              enableWebVTT: !0,
              enableIMSC1: !0,
              enableCEA708Captions: !0,
              captionsTextTrack1Label: "English",
              captionsTextTrack1LanguageCode: "en",
              captionsTextTrack2Label: "Spanish",
              captionsTextTrack2LanguageCode: "es",
              captionsTextTrack3Label: "Unknown CC",
              captionsTextTrack3LanguageCode: "",
              captionsTextTrack4Label: "Unknown CC",
              captionsTextTrack4LanguageCode: "",
              renderTextTracksNatively: !0,
            };
          }
          function e(u, a) {
            if (
              (a.liveSyncDurationCount || a.liveMaxLatencyDurationCount) &&
              (a.liveSyncDuration || a.liveMaxLatencyDuration)
            )
              throw new Error(
                "Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration"
              );
            if (
              a.liveMaxLatencyDurationCount !== void 0 &&
              (a.liveSyncDurationCount === void 0 ||
                a.liveMaxLatencyDurationCount <= a.liveSyncDurationCount)
            )
              throw new Error(
                'Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"'
              );
            if (
              a.liveMaxLatencyDuration !== void 0 &&
              (a.liveSyncDuration === void 0 ||
                a.liveMaxLatencyDuration <= a.liveSyncDuration)
            )
              throw new Error(
                'Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"'
              );
            return h({}, u, a);
          }
          function s(u) {
            var a = u.loader;
            if (a !== m.default && a !== g.default)
              n.logger.log(
                "[config]: Custom loader detected, cannot enable progressive streaming"
              ),
                (u.progressive = !1);
            else {
              var f = Object(m.fetchSupported)();
              f &&
                ((u.loader = m.default),
                (u.progressive = !0),
                (u.enableSoftwareAES = !0),
                n.logger.log(
                  "[config]: Progressive streaming enabled, using FetchLoader"
                ));
            }
          }
        },
        "./src/controller/abr-controller.ts": function (W, C, T) {
          "use strict";
          T.r(C);
          var M = T("./src/polyfills/number.ts"),
            O = T("./src/utils/ewma-bandwidth-estimator.ts"),
            L = T("./src/events.ts"),
            b = T("./src/utils/buffer-helper.ts"),
            P = T("./src/errors.ts"),
            R = T("./src/types/loader.ts"),
            A = T("./src/utils/logger.ts");
          function p(E, g) {
            for (var m = 0; m < g.length; m++) {
              var l = g[m];
              (l.enumerable = l.enumerable || !1),
                (l.configurable = !0),
                "value" in l && (l.writable = !0),
                Object.defineProperty(E, l.key, l);
            }
          }
          function y(E, g, m) {
            return (
              g && p(E.prototype, g),
              m && p(E, m),
              Object.defineProperty(E, "prototype", { writable: !1 }),
              E
            );
          }
          var S = (function () {
            function E(m) {
              (this.hls = void 0),
                (this.lastLoadedFragLevel = 0),
                (this._nextAutoLevel = -1),
                (this.timer = void 0),
                (this.onCheck = this._abandonRulesCheck.bind(this)),
                (this.fragCurrent = null),
                (this.partCurrent = null),
                (this.bitrateTestDelay = 0),
                (this.bwEstimator = void 0),
                (this.hls = m);
              var l = m.config;
              (this.bwEstimator = new O.default(
                l.abrEwmaSlowVoD,
                l.abrEwmaFastVoD,
                l.abrEwmaDefaultEstimate
              )),
                this.registerListeners();
            }
            var g = E.prototype;
            return (
              (g.registerListeners = function () {
                var l = this.hls;
                l.on(L.Events.FRAG_LOADING, this.onFragLoading, this),
                  l.on(L.Events.FRAG_LOADED, this.onFragLoaded, this),
                  l.on(L.Events.FRAG_BUFFERED, this.onFragBuffered, this),
                  l.on(L.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                  l.on(L.Events.ERROR, this.onError, this);
              }),
              (g.unregisterListeners = function () {
                var l = this.hls;
                l.off(L.Events.FRAG_LOADING, this.onFragLoading, this),
                  l.off(L.Events.FRAG_LOADED, this.onFragLoaded, this),
                  l.off(L.Events.FRAG_BUFFERED, this.onFragBuffered, this),
                  l.off(L.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                  l.off(L.Events.ERROR, this.onError, this);
              }),
              (g.destroy = function () {
                this.unregisterListeners(),
                  this.clearTimer(),
                  (this.hls = this.onCheck = null),
                  (this.fragCurrent = this.partCurrent = null);
              }),
              (g.onFragLoading = function (l, t) {
                var n = t.frag;
                if (n.type === R.PlaylistLevelType.MAIN && !this.timer) {
                  var h;
                  (this.fragCurrent = n),
                    (this.partCurrent = (h = t.part) != null ? h : null),
                    (this.timer = self.setInterval(this.onCheck, 100));
                }
              }),
              (g.onLevelLoaded = function (l, t) {
                var n = this.hls.config;
                t.details.live
                  ? this.bwEstimator.update(
                      n.abrEwmaSlowLive,
                      n.abrEwmaFastLive
                    )
                  : this.bwEstimator.update(n.abrEwmaSlowVoD, n.abrEwmaFastVoD);
              }),
              (g._abandonRulesCheck = function () {
                var l = this.fragCurrent,
                  t = this.partCurrent,
                  n = this.hls,
                  h = n.autoLevelEnabled,
                  v = n.config,
                  i = n.media;
                if (!(!l || !i)) {
                  var r = t ? t.stats : l.stats,
                    o = t ? t.duration : l.duration;
                  if (r.aborted) {
                    A.logger.warn(
                      "frag loader destroy or aborted, disarm abandonRules"
                    ),
                      this.clearTimer(),
                      (this._nextAutoLevel = -1);
                    return;
                  }
                  if (!(!h || i.paused || !i.playbackRate || !i.readyState)) {
                    var d = performance.now() - r.loading.start,
                      e = Math.abs(i.playbackRate);
                    if (!(d <= (500 * o) / e)) {
                      var s = n.levels,
                        u = n.minAutoLevel,
                        a = s[l.level],
                        f =
                          r.total ||
                          Math.max(
                            r.loaded,
                            Math.round((o * a.maxBitrate) / 8)
                          ),
                        c = Math.max(
                          1,
                          r.bwEstimate ? r.bwEstimate / 8 : (r.loaded * 1e3) / d
                        ),
                        D = (f - r.loaded) / c,
                        x = i.currentTime,
                        I =
                          (b.BufferHelper.bufferInfo(i, x, v.maxBufferHole)
                            .end -
                            x) /
                          e;
                      if (!(I >= (2 * o) / e || D <= I)) {
                        var F = Number.POSITIVE_INFINITY,
                          _;
                        for (_ = l.level - 1; _ > u; _--) {
                          var B = s[_].maxBitrate;
                          if (((F = (o * B) / (8 * 0.8 * c)), F < I)) break;
                        }
                        if (!(F >= D)) {
                          var U = this.bwEstimator.getEstimate();
                          A.logger.warn(
                            "Fragment " +
                              l.sn +
                              (t ? " part " + t.index : "") +
                              " of level " +
                              l.level +
                              " is loading too slowly and will cause an underbuffer; aborting and switching to level " +
                              _ +
                              `
      Current BW estimate: ` +
                              (Object(M.isFiniteNumber)(U)
                                ? (U / 1024).toFixed(3)
                                : "Unknown") +
                              ` Kb/s
      Estimated load time for current fragment: ` +
                              D.toFixed(3) +
                              ` s
      Estimated load time for the next fragment: ` +
                              F.toFixed(3) +
                              ` s
      Time to underbuffer: ` +
                              I.toFixed(3) +
                              " s"
                          ),
                            (n.nextLoadLevel = _),
                            this.bwEstimator.sample(d, r.loaded),
                            this.clearTimer(),
                            l.loader &&
                              ((this.fragCurrent = this.partCurrent = null),
                              l.loader.abort()),
                            n.trigger(L.Events.FRAG_LOAD_EMERGENCY_ABORTED, {
                              frag: l,
                              part: t,
                              stats: r,
                            });
                        }
                      }
                    }
                  }
                }
              }),
              (g.onFragLoaded = function (l, t) {
                var n = t.frag,
                  h = t.part;
                if (
                  n.type === R.PlaylistLevelType.MAIN &&
                  Object(M.isFiniteNumber)(n.sn)
                ) {
                  var v = h ? h.stats : n.stats,
                    i = h ? h.duration : n.duration;
                  if (
                    (this.clearTimer(),
                    (this.lastLoadedFragLevel = n.level),
                    (this._nextAutoLevel = -1),
                    this.hls.config.abrMaxWithRealBitrate)
                  ) {
                    var r = this.hls.levels[n.level],
                      o = (r.loaded ? r.loaded.bytes : 0) + v.loaded,
                      d = (r.loaded ? r.loaded.duration : 0) + i;
                    (r.loaded = { bytes: o, duration: d }),
                      (r.realBitrate = Math.round((8 * o) / d));
                  }
                  if (n.bitrateTest) {
                    var e = { stats: v, frag: n, part: h, id: n.type };
                    this.onFragBuffered(L.Events.FRAG_BUFFERED, e);
                  }
                }
              }),
              (g.onFragBuffered = function (l, t) {
                var n = t.frag,
                  h = t.part,
                  v = h ? h.stats : n.stats;
                if (
                  !v.aborted &&
                  !(
                    n.type !== R.PlaylistLevelType.MAIN ||
                    n.sn === "initSegment"
                  )
                ) {
                  var i = v.parsing.end - v.loading.start;
                  this.bwEstimator.sample(i, v.loaded),
                    (v.bwEstimate = this.bwEstimator.getEstimate()),
                    n.bitrateTest
                      ? (this.bitrateTestDelay = i / 1e3)
                      : (this.bitrateTestDelay = 0);
                }
              }),
              (g.onError = function (l, t) {
                switch (t.details) {
                  case P.ErrorDetails.FRAG_LOAD_ERROR:
                  case P.ErrorDetails.FRAG_LOAD_TIMEOUT:
                    this.clearTimer();
                    break;
                  default:
                    break;
                }
              }),
              (g.clearTimer = function () {
                self.clearInterval(this.timer), (this.timer = void 0);
              }),
              (g.getNextABRAutoLevel = function () {
                var l = this.fragCurrent,
                  t = this.partCurrent,
                  n = this.hls,
                  h = n.maxAutoLevel,
                  v = n.config,
                  i = n.minAutoLevel,
                  r = n.media,
                  o = t ? t.duration : l ? l.duration : 0,
                  d = r ? r.currentTime : 0,
                  e = r && r.playbackRate !== 0 ? Math.abs(r.playbackRate) : 1,
                  s = this.bwEstimator
                    ? this.bwEstimator.getEstimate()
                    : v.abrEwmaDefaultEstimate,
                  u =
                    (b.BufferHelper.bufferInfo(r, d, v.maxBufferHole).end - d) /
                    e,
                  a = this.findBestLevel(
                    s,
                    i,
                    h,
                    u,
                    v.abrBandWidthFactor,
                    v.abrBandWidthUpFactor
                  );
                if (a >= 0) return a;
                A.logger.trace(
                  (u ? "rebuffering expected" : "buffer is empty") +
                    ", finding optimal quality level"
                );
                var f = o
                    ? Math.min(o, v.maxStarvationDelay)
                    : v.maxStarvationDelay,
                  c = v.abrBandWidthFactor,
                  D = v.abrBandWidthUpFactor;
                if (!u) {
                  var x = this.bitrateTestDelay;
                  if (x) {
                    var I = o
                      ? Math.min(o, v.maxLoadingDelay)
                      : v.maxLoadingDelay;
                    (f = I - x),
                      A.logger.trace(
                        "bitrate test took " +
                          Math.round(1e3 * x) +
                          "ms, set first fragment max fetchDuration to " +
                          Math.round(1e3 * f) +
                          " ms"
                      ),
                      (c = D = 1);
                  }
                }
                return (
                  (a = this.findBestLevel(s, i, h, u + f, c, D)), Math.max(a, 0)
                );
              }),
              (g.findBestLevel = function (l, t, n, h, v, i) {
                for (
                  var r,
                    o = this.fragCurrent,
                    d = this.partCurrent,
                    e = this.lastLoadedFragLevel,
                    s = this.hls.levels,
                    u = s[e],
                    a = !!(
                      u != null &&
                      (r = u.details) !== null &&
                      r !== void 0 &&
                      r.live
                    ),
                    f = u?.codecSet,
                    c = d ? d.duration : o ? o.duration : 0,
                    D = n;
                  D >= t;
                  D--
                ) {
                  var x = s[D];
                  if (!(!x || (f && x.codecSet !== f))) {
                    var I = x.details,
                      F = (d ? I?.partTarget : I?.averagetargetduration) || c,
                      _ = void 0;
                    D <= e ? (_ = v * l) : (_ = i * l);
                    var B = s[D].maxBitrate,
                      U = (B * F) / _;
                    if (
                      (A.logger.trace(
                        "level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " +
                          D +
                          "/" +
                          Math.round(_) +
                          "/" +
                          B +
                          "/" +
                          F +
                          "/" +
                          h +
                          "/" +
                          U
                      ),
                      _ > B && (!U || (a && !this.bitrateTestDelay) || U < h))
                    )
                      return D;
                  }
                }
                return -1;
              }),
              y(E, [
                {
                  key: "nextAutoLevel",
                  get: function () {
                    var l = this._nextAutoLevel,
                      t = this.bwEstimator;
                    if (l !== -1 && !t.canEstimate()) return l;
                    var n = this.getNextABRAutoLevel();
                    return l !== -1 && this.hls.levels[n].loadError
                      ? l
                      : (l !== -1 && (n = Math.min(l, n)), n);
                  },
                  set: function (l) {
                    this._nextAutoLevel = l;
                  },
                },
              ]),
              E
            );
          })();
          C.default = S;
        },
        "./src/controller/audio-stream-controller.ts": function (W, C, T) {
          "use strict";
          T.r(C);
          var M = T("./src/polyfills/number.ts"),
            O = T("./src/controller/base-stream-controller.ts"),
            L = T("./src/events.ts"),
            b = T("./src/utils/buffer-helper.ts"),
            P = T("./src/controller/fragment-tracker.ts"),
            R = T("./src/types/level.ts"),
            A = T("./src/types/loader.ts"),
            p = T("./src/loader/fragment.ts"),
            y = T("./src/demux/chunk-cache.ts"),
            S = T("./src/demux/transmuxer-interface.ts"),
            E = T("./src/types/transmuxer.ts"),
            g = T("./src/controller/fragment-finders.ts"),
            m = T("./src/utils/discontinuities.ts"),
            l = T("./src/errors.ts");
          function t() {
            return (
              (t = Object.assign
                ? Object.assign.bind()
                : function (r) {
                    for (var o = 1; o < arguments.length; o++) {
                      var d = arguments[o];
                      for (var e in d)
                        Object.prototype.hasOwnProperty.call(d, e) &&
                          (r[e] = d[e]);
                    }
                    return r;
                  }),
              t.apply(this, arguments)
            );
          }
          function n(r, o) {
            (r.prototype = Object.create(o.prototype)),
              (r.prototype.constructor = r),
              h(r, o);
          }
          function h(r, o) {
            return (
              (h = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, s) {
                    return (e.__proto__ = s), e;
                  }),
              h(r, o)
            );
          }
          var v = 100,
            i = (function (r) {
              n(o, r);
              function o(e, s) {
                var u;
                return (
                  (u = r.call(this, e, s, "[audio-stream-controller]") || this),
                  (u.videoBuffer = null),
                  (u.videoTrackCC = -1),
                  (u.waitingVideoCC = -1),
                  (u.audioSwitch = !1),
                  (u.trackId = -1),
                  (u.waitingData = null),
                  (u.mainDetails = null),
                  (u.bufferFlushed = !1),
                  (u.cachedTrackLoadedData = null),
                  u._registerListeners(),
                  u
                );
              }
              var d = o.prototype;
              return (
                (d.onHandlerDestroying = function () {
                  this._unregisterListeners(), (this.mainDetails = null);
                }),
                (d._registerListeners = function () {
                  var s = this.hls;
                  s.on(L.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                    s.on(L.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                    s.on(
                      L.Events.MANIFEST_LOADING,
                      this.onManifestLoading,
                      this
                    ),
                    s.on(L.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                    s.on(
                      L.Events.AUDIO_TRACKS_UPDATED,
                      this.onAudioTracksUpdated,
                      this
                    ),
                    s.on(
                      L.Events.AUDIO_TRACK_SWITCHING,
                      this.onAudioTrackSwitching,
                      this
                    ),
                    s.on(
                      L.Events.AUDIO_TRACK_LOADED,
                      this.onAudioTrackLoaded,
                      this
                    ),
                    s.on(L.Events.ERROR, this.onError, this),
                    s.on(L.Events.BUFFER_RESET, this.onBufferReset, this),
                    s.on(L.Events.BUFFER_CREATED, this.onBufferCreated, this),
                    s.on(L.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
                    s.on(L.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
                    s.on(L.Events.FRAG_BUFFERED, this.onFragBuffered, this);
                }),
                (d._unregisterListeners = function () {
                  var s = this.hls;
                  s.off(L.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                    s.off(
                      L.Events.MEDIA_DETACHING,
                      this.onMediaDetaching,
                      this
                    ),
                    s.off(
                      L.Events.MANIFEST_LOADING,
                      this.onManifestLoading,
                      this
                    ),
                    s.off(L.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                    s.off(
                      L.Events.AUDIO_TRACKS_UPDATED,
                      this.onAudioTracksUpdated,
                      this
                    ),
                    s.off(
                      L.Events.AUDIO_TRACK_SWITCHING,
                      this.onAudioTrackSwitching,
                      this
                    ),
                    s.off(
                      L.Events.AUDIO_TRACK_LOADED,
                      this.onAudioTrackLoaded,
                      this
                    ),
                    s.off(L.Events.ERROR, this.onError, this),
                    s.off(L.Events.BUFFER_RESET, this.onBufferReset, this),
                    s.off(L.Events.BUFFER_CREATED, this.onBufferCreated, this),
                    s.off(L.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
                    s.off(L.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
                    s.off(L.Events.FRAG_BUFFERED, this.onFragBuffered, this);
                }),
                (d.onInitPtsFound = function (s, u) {
                  var a = u.frag,
                    f = u.id,
                    c = u.initPTS;
                  if (f === "main") {
                    var D = a.cc;
                    (this.initPTS[a.cc] = c),
                      this.log(
                        "InitPTS for cc: " + D + " found from main: " + c
                      ),
                      (this.videoTrackCC = D),
                      this.state === O.State.WAITING_INIT_PTS && this.tick();
                  }
                }),
                (d.startLoad = function (s) {
                  if (!this.levels) {
                    (this.startPosition = s), (this.state = O.State.STOPPED);
                    return;
                  }
                  var u = this.lastCurrentTime;
                  this.stopLoad(),
                    this.setInterval(v),
                    (this.fragLoadError = 0),
                    u > 0 && s === -1
                      ? (this.log(
                          "Override startPosition with lastCurrentTime @" +
                            u.toFixed(3)
                        ),
                        (s = u),
                        (this.state = O.State.IDLE))
                      : ((this.loadedmetadata = !1),
                        (this.state = O.State.WAITING_TRACK)),
                    (this.nextLoadPosition =
                      this.startPosition =
                      this.lastCurrentTime =
                        s),
                    this.tick();
                }),
                (d.doTick = function () {
                  switch (this.state) {
                    case O.State.IDLE:
                      this.doTickIdle();
                      break;
                    case O.State.WAITING_TRACK: {
                      var s,
                        u = this.levels,
                        a = this.trackId,
                        f =
                          u == null || (s = u[a]) === null || s === void 0
                            ? void 0
                            : s.details;
                      if (f) {
                        if (this.waitForCdnTuneIn(f)) break;
                        this.state = O.State.WAITING_INIT_PTS;
                      }
                      break;
                    }
                    case O.State.FRAG_LOADING_WAITING_RETRY: {
                      var c,
                        D = performance.now(),
                        x = this.retryDate;
                      (!x ||
                        D >= x ||
                        ((c = this.media) !== null &&
                          c !== void 0 &&
                          c.seeking)) &&
                        (this.log(
                          "RetryDate reached, switch back to IDLE state"
                        ),
                        this.resetStartWhenNotLoaded(this.trackId),
                        (this.state = O.State.IDLE));
                      break;
                    }
                    case O.State.WAITING_INIT_PTS: {
                      var I = this.waitingData;
                      if (I) {
                        var F = I.frag,
                          _ = I.part,
                          B = I.cache,
                          U = I.complete;
                        if (this.initPTS[F.cc] !== void 0) {
                          (this.waitingData = null),
                            (this.waitingVideoCC = -1),
                            (this.state = O.State.FRAG_LOADING);
                          var N = B.flush(),
                            w = {
                              frag: F,
                              part: _,
                              payload: N,
                              networkDetails: null,
                            };
                          this._handleFragmentLoadProgress(w),
                            U &&
                              r.prototype._handleFragmentLoadComplete.call(
                                this,
                                w
                              );
                        } else if (this.videoTrackCC !== this.waitingVideoCC)
                          this.log(
                            "Waiting fragment cc (" +
                              F.cc +
                              ") cancelled because video is at cc " +
                              this.videoTrackCC
                          ),
                            this.clearWaitingFragment();
                        else {
                          var k = this.getLoadPosition(),
                            K = b.BufferHelper.bufferInfo(
                              this.mediaBuffer,
                              k,
                              this.config.maxBufferHole
                            ),
                            j = Object(g.fragmentWithinToleranceTest)(
                              K.end,
                              this.config.maxFragLookUpTolerance,
                              F
                            );
                          j < 0 &&
                            (this.log(
                              "Waiting fragment cc (" +
                                F.cc +
                                ") @ " +
                                F.start +
                                " cancelled because another fragment at " +
                                K.end +
                                " is needed"
                            ),
                            this.clearWaitingFragment());
                        }
                      } else this.state = O.State.IDLE;
                    }
                  }
                  this.onTickEnd();
                }),
                (d.clearWaitingFragment = function () {
                  var s = this.waitingData;
                  s &&
                    (this.fragmentTracker.removeFragment(s.frag),
                    (this.waitingData = null),
                    (this.waitingVideoCC = -1),
                    (this.state = O.State.IDLE));
                }),
                (d.resetLoadingState = function () {
                  this.clearWaitingFragment(),
                    r.prototype.resetLoadingState.call(this);
                }),
                (d.onTickEnd = function () {
                  var s = this.media;
                  if (!(!s || !s.readyState)) {
                    var u = this.mediaBuffer ? this.mediaBuffer : s,
                      a = u.buffered;
                    !this.loadedmetadata &&
                      a.length &&
                      (this.loadedmetadata = !0),
                      (this.lastCurrentTime = s.currentTime);
                  }
                }),
                (d.doTickIdle = function () {
                  var s,
                    u,
                    a = this.hls,
                    f = this.levels,
                    c = this.media,
                    D = this.trackId,
                    x = a.config;
                  if (
                    !(!f || !f[D]) &&
                    !(!c && (this.startFragRequested || !x.startFragPrefetch))
                  ) {
                    var I = f[D],
                      F = I.details;
                    if (
                      !F ||
                      (F.live && this.levelLastLoaded !== D) ||
                      this.waitForCdnTuneIn(F)
                    ) {
                      this.state = O.State.WAITING_TRACK;
                      return;
                    }
                    var _ = this.mediaBuffer ? this.mediaBuffer : this.media;
                    this.bufferFlushed &&
                      _ &&
                      ((this.bufferFlushed = !1),
                      this.afterBufferFlushed(
                        _,
                        p.ElementaryStreamTypes.AUDIO,
                        A.PlaylistLevelType.AUDIO
                      ));
                    var B = this.getFwdBufferInfo(_, A.PlaylistLevelType.AUDIO);
                    if (B !== null) {
                      var U = this.getFwdBufferInfo(
                          this.videoBuffer ? this.videoBuffer : this.media,
                          A.PlaylistLevelType.MAIN
                        ),
                        N = B.len,
                        w = this.getMaxBufferLength(U?.len),
                        k = this.audioSwitch;
                      if (!(N >= w && !k)) {
                        if (!k && this._streamEnded(B, F)) {
                          a.trigger(L.Events.BUFFER_EOS, { type: "audio" }),
                            (this.state = O.State.ENDED);
                          return;
                        }
                        var K = F.fragments,
                          j = K[0].start,
                          G = B.end;
                        if (k && c) {
                          var Y = this.getLoadPosition();
                          (G = Y),
                            F.PTSKnown &&
                              Y < j &&
                              (B.end > j || B.nextStart) &&
                              (this.log(
                                "Alt audio track ahead of main track, seek to start of alt audio track"
                              ),
                              (c.currentTime = j + 0.05));
                        }
                        if (
                          !(U && G > U.end + F.targetduration) &&
                          !((!U || !U.len) && B.len)
                        ) {
                          var X = this.getNextFragment(G, F);
                          if (!X) {
                            this.bufferFlushed = !0;
                            return;
                          }
                          ((s = X.decryptdata) === null || s === void 0
                            ? void 0
                            : s.keyFormat) === "identity" &&
                          !(
                            (u = X.decryptdata) !== null &&
                            u !== void 0 &&
                            u.key
                          )
                            ? this.loadKey(X, F)
                            : this.loadFragment(X, F, G);
                        }
                      }
                    }
                  }
                }),
                (d.getMaxBufferLength = function (s) {
                  var u = r.prototype.getMaxBufferLength.call(this);
                  return s ? Math.max(u, s) : u;
                }),
                (d.onMediaDetaching = function () {
                  (this.videoBuffer = null),
                    r.prototype.onMediaDetaching.call(this);
                }),
                (d.onAudioTracksUpdated = function (s, u) {
                  var a = u.audioTracks;
                  this.resetTransmuxer(),
                    (this.levels = a.map(function (f) {
                      return new R.Level(f);
                    }));
                }),
                (d.onAudioTrackSwitching = function (s, u) {
                  var a = !!u.url;
                  this.trackId = u.id;
                  var f = this.fragCurrent;
                  f != null && f.loader && f.loader.abort(),
                    (this.fragCurrent = null),
                    this.clearWaitingFragment(),
                    a ? this.setInterval(v) : this.resetTransmuxer(),
                    a
                      ? ((this.audioSwitch = !0), (this.state = O.State.IDLE))
                      : (this.state = O.State.STOPPED),
                    this.tick();
                }),
                (d.onManifestLoading = function () {
                  (this.mainDetails = null),
                    this.fragmentTracker.removeAllFragments(),
                    (this.startPosition = this.lastCurrentTime = 0),
                    (this.bufferFlushed = !1);
                }),
                (d.onLevelLoaded = function (s, u) {
                  (this.mainDetails = u.details),
                    this.cachedTrackLoadedData !== null &&
                      (this.hls.trigger(
                        L.Events.AUDIO_TRACK_LOADED,
                        this.cachedTrackLoadedData
                      ),
                      (this.cachedTrackLoadedData = null));
                }),
                (d.onAudioTrackLoaded = function (s, u) {
                  var a;
                  if (this.mainDetails == null) {
                    this.cachedTrackLoadedData = u;
                    return;
                  }
                  var f = this.levels,
                    c = u.details,
                    D = u.id;
                  if (!f) {
                    this.warn(
                      "Audio tracks were reset while loading level " + D
                    );
                    return;
                  }
                  this.log(
                    "Track " +
                      D +
                      " loaded [" +
                      c.startSN +
                      "," +
                      c.endSN +
                      "],duration:" +
                      c.totalduration
                  );
                  var x = f[D],
                    I = 0;
                  if (
                    c.live ||
                    ((a = x.details) !== null && a !== void 0 && a.live)
                  ) {
                    var F = this.mainDetails;
                    if (
                      (c.fragments[0] || (c.deltaUpdateFailed = !0),
                      c.deltaUpdateFailed || !F)
                    )
                      return;
                    !x.details && c.hasProgramDateTime && F.hasProgramDateTime
                      ? (Object(m.alignMediaPlaylistByPDT)(c, F),
                        (I = c.fragments[0].start))
                      : (I = this.alignPlaylists(c, x.details));
                  }
                  (x.details = c),
                    (this.levelLastLoaded = D),
                    !this.startFragRequested &&
                      (this.mainDetails || !c.live) &&
                      this.setStartPosition(x.details, I),
                    this.state === O.State.WAITING_TRACK &&
                      !this.waitForCdnTuneIn(c) &&
                      (this.state = O.State.IDLE),
                    this.tick();
                }),
                (d._handleFragmentLoadProgress = function (s) {
                  var u,
                    a = s.frag,
                    f = s.part,
                    c = s.payload,
                    D = this.config,
                    x = this.trackId,
                    I = this.levels;
                  if (!I) {
                    this.warn(
                      "Audio tracks were reset while fragment load was in progress. Fragment " +
                        a.sn +
                        " of level " +
                        a.level +
                        " will not be buffered"
                    );
                    return;
                  }
                  var F = I[x];
                  console.assert(
                    F,
                    "Audio track is defined on fragment load progress"
                  );
                  var _ = F.details;
                  console.assert(
                    _,
                    "Audio track details are defined on fragment load progress"
                  );
                  var B = D.defaultAudioCodec || F.audioCodec || "mp4a.40.2",
                    U = this.transmuxer;
                  U ||
                    (U = this.transmuxer =
                      new S.default(
                        this.hls,
                        A.PlaylistLevelType.AUDIO,
                        this._handleTransmuxComplete.bind(this),
                        this._handleTransmuxerFlush.bind(this)
                      ));
                  var N = this.initPTS[a.cc],
                    w =
                      (u = a.initSegment) === null || u === void 0
                        ? void 0
                        : u.data;
                  if (N !== void 0) {
                    var k = !1,
                      K = f ? f.index : -1,
                      j = K !== -1,
                      G = new E.ChunkMetadata(
                        a.level,
                        a.sn,
                        a.stats.chunkCount,
                        c.byteLength,
                        K,
                        j
                      );
                    U.push(c, w, B, "", a, f, _.totalduration, k, G, N);
                  } else {
                    this.log(
                      "Unknown video PTS for cc " +
                        a.cc +
                        ", waiting for video PTS before demuxing audio frag " +
                        a.sn +
                        " of [" +
                        _.startSN +
                        " ," +
                        _.endSN +
                        "],track " +
                        x
                    );
                    var Y = (this.waitingData = this.waitingData || {
                        frag: a,
                        part: f,
                        cache: new y.default(),
                        complete: !1,
                      }),
                      X = Y.cache;
                    X.push(new Uint8Array(c)),
                      (this.waitingVideoCC = this.videoTrackCC),
                      (this.state = O.State.WAITING_INIT_PTS);
                  }
                }),
                (d._handleFragmentLoadComplete = function (s) {
                  if (this.waitingData) {
                    this.waitingData.complete = !0;
                    return;
                  }
                  r.prototype._handleFragmentLoadComplete.call(this, s);
                }),
                (d.onBufferReset = function () {
                  (this.mediaBuffer = this.videoBuffer = null),
                    (this.loadedmetadata = !1);
                }),
                (d.onBufferCreated = function (s, u) {
                  var a = u.tracks.audio;
                  a && (this.mediaBuffer = a.buffer || null),
                    u.tracks.video &&
                      (this.videoBuffer = u.tracks.video.buffer || null);
                }),
                (d.onFragBuffered = function (s, u) {
                  var a = u.frag,
                    f = u.part;
                  if (a.type === A.PlaylistLevelType.AUDIO) {
                    if (this.fragContextChanged(a)) {
                      this.warn(
                        "Fragment " +
                          a.sn +
                          (f ? " p: " + f.index : "") +
                          " of level " +
                          a.level +
                          " finished buffering, but was aborted. state: " +
                          this.state +
                          ", audioSwitch: " +
                          this.audioSwitch
                      );
                      return;
                    }
                    a.sn !== "initSegment" &&
                      ((this.fragPrevious = a),
                      this.audioSwitch &&
                        ((this.audioSwitch = !1),
                        this.hls.trigger(L.Events.AUDIO_TRACK_SWITCHED, {
                          id: this.trackId,
                        }))),
                      this.fragBufferedComplete(a, f);
                  }
                }),
                (d.onError = function (s, u) {
                  switch (u.details) {
                    case l.ErrorDetails.FRAG_LOAD_ERROR:
                    case l.ErrorDetails.FRAG_LOAD_TIMEOUT:
                    case l.ErrorDetails.KEY_LOAD_ERROR:
                    case l.ErrorDetails.KEY_LOAD_TIMEOUT:
                      this.onFragmentOrKeyLoadError(
                        A.PlaylistLevelType.AUDIO,
                        u
                      );
                      break;
                    case l.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
                    case l.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                      this.state !== O.State.ERROR &&
                        this.state !== O.State.STOPPED &&
                        ((this.state = u.fatal ? O.State.ERROR : O.State.IDLE),
                        this.warn(
                          u.details +
                            " while loading frag, switching to " +
                            this.state +
                            " state"
                        ));
                      break;
                    case l.ErrorDetails.BUFFER_FULL_ERROR:
                      if (
                        u.parent === "audio" &&
                        (this.state === O.State.PARSING ||
                          this.state === O.State.PARSED)
                      ) {
                        var a = !0,
                          f = this.getFwdBufferInfo(
                            this.mediaBuffer,
                            A.PlaylistLevelType.AUDIO
                          );
                        f &&
                          f.len > 0.5 &&
                          (a = !this.reduceMaxBufferLength(f.len)),
                          a &&
                            (this.warn(
                              "Buffer full error also media.currentTime is not buffered, flush audio buffer"
                            ),
                            (this.fragCurrent = null),
                            r.prototype.flushMainBuffer.call(
                              this,
                              0,
                              Number.POSITIVE_INFINITY,
                              "audio"
                            )),
                          this.resetLoadingState();
                      }
                      break;
                    default:
                      break;
                  }
                }),
                (d.onBufferFlushed = function (s, u) {
                  var a = u.type;
                  a === p.ElementaryStreamTypes.AUDIO &&
                    (this.bufferFlushed = !0);
                }),
                (d._handleTransmuxComplete = function (s) {
                  var u,
                    a = "audio",
                    f = this.hls,
                    c = s.remuxResult,
                    D = s.chunkMeta,
                    x = this.getCurrentContext(D);
                  if (!x) {
                    this.warn(
                      "The loading context changed while buffering fragment " +
                        D.sn +
                        " of level " +
                        D.level +
                        ". This chunk will not be buffered."
                    ),
                      this.resetStartWhenNotLoaded(D.level);
                    return;
                  }
                  var I = x.frag,
                    F = x.part,
                    _ = x.level.details,
                    B = c.audio,
                    U = c.text,
                    N = c.id3,
                    w = c.initSegment;
                  if (!(this.fragContextChanged(I) || !_)) {
                    if (
                      ((this.state = O.State.PARSING),
                      this.audioSwitch && B && this.completeAudioSwitch(),
                      w != null &&
                        w.tracks &&
                        (this._bufferInitSegment(w.tracks, I, D),
                        f.trigger(L.Events.FRAG_PARSING_INIT_SEGMENT, {
                          frag: I,
                          id: a,
                          tracks: w.tracks,
                        })),
                      B)
                    ) {
                      var k = B.startPTS,
                        K = B.endPTS,
                        j = B.startDTS,
                        G = B.endDTS;
                      F &&
                        (F.elementaryStreams[p.ElementaryStreamTypes.AUDIO] = {
                          startPTS: k,
                          endPTS: K,
                          startDTS: j,
                          endDTS: G,
                        }),
                        I.setElementaryStreamInfo(
                          p.ElementaryStreamTypes.AUDIO,
                          k,
                          K,
                          j,
                          G
                        ),
                        this.bufferFragmentData(B, I, F, D);
                    }
                    if (
                      N != null &&
                      (u = N.samples) !== null &&
                      u !== void 0 &&
                      u.length
                    ) {
                      var Y = t({ id: a, frag: I, details: _ }, N);
                      f.trigger(L.Events.FRAG_PARSING_METADATA, Y);
                    }
                    if (U) {
                      var X = t({ id: a, frag: I, details: _ }, U);
                      f.trigger(L.Events.FRAG_PARSING_USERDATA, X);
                    }
                  }
                }),
                (d._bufferInitSegment = function (s, u, a) {
                  if (this.state === O.State.PARSING) {
                    s.video && delete s.video;
                    var f = s.audio;
                    if (!!f) {
                      (f.levelCodec = f.codec),
                        (f.id = "audio"),
                        this.log(
                          "Init audio buffer, container:" +
                            f.container +
                            ", codecs[parsed]=[" +
                            f.codec +
                            "]"
                        ),
                        this.hls.trigger(L.Events.BUFFER_CODECS, s);
                      var c = f.initSegment;
                      if (c != null && c.byteLength) {
                        var D = {
                          type: "audio",
                          frag: u,
                          part: null,
                          chunkMeta: a,
                          parent: u.type,
                          data: c,
                        };
                        this.hls.trigger(L.Events.BUFFER_APPENDING, D);
                      }
                      this.tick();
                    }
                  }
                }),
                (d.loadFragment = function (s, u, a) {
                  var f = this.fragmentTracker.getState(s);
                  (this.fragCurrent = s),
                    (this.audioSwitch ||
                      f === P.FragmentState.NOT_LOADED ||
                      f === P.FragmentState.PARTIAL) &&
                      (s.sn === "initSegment"
                        ? this._loadInitSegment(s)
                        : u.live &&
                          !Object(M.isFiniteNumber)(this.initPTS[s.cc])
                        ? (this.log(
                            "Waiting for video PTS in continuity counter " +
                              s.cc +
                              " of live stream before loading audio fragment " +
                              s.sn +
                              " of level " +
                              this.trackId
                          ),
                          (this.state = O.State.WAITING_INIT_PTS))
                        : ((this.startFragRequested = !0),
                          r.prototype.loadFragment.call(this, s, u, a)));
                }),
                (d.completeAudioSwitch = function () {
                  var s = this.hls,
                    u = this.media,
                    a = this.trackId;
                  u &&
                    (this.log("Switching audio track : flushing all audio"),
                    r.prototype.flushMainBuffer.call(
                      this,
                      0,
                      Number.POSITIVE_INFINITY,
                      "audio"
                    )),
                    (this.audioSwitch = !1),
                    s.trigger(L.Events.AUDIO_TRACK_SWITCHED, { id: a });
                }),
                o
              );
            })(O.default);
          C.default = i;
        },
        "./src/controller/audio-track-controller.ts": function (W, C, T) {
          "use strict";
          T.r(C);
          var M = T("./src/events.ts"),
            O = T("./src/errors.ts"),
            L = T("./src/controller/base-playlist-controller.ts"),
            b = T("./src/types/loader.ts");
          function P(S, E) {
            for (var g = 0; g < E.length; g++) {
              var m = E[g];
              (m.enumerable = m.enumerable || !1),
                (m.configurable = !0),
                "value" in m && (m.writable = !0),
                Object.defineProperty(S, m.key, m);
            }
          }
          function R(S, E, g) {
            return (
              E && P(S.prototype, E),
              g && P(S, g),
              Object.defineProperty(S, "prototype", { writable: !1 }),
              S
            );
          }
          function A(S, E) {
            (S.prototype = Object.create(E.prototype)),
              (S.prototype.constructor = S),
              p(S, E);
          }
          function p(S, E) {
            return (
              (p = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (m, l) {
                    return (m.__proto__ = l), m;
                  }),
              p(S, E)
            );
          }
          var y = (function (S) {
            A(E, S);
            function E(m) {
              var l;
              return (
                (l = S.call(this, m, "[audio-track-controller]") || this),
                (l.tracks = []),
                (l.groupId = null),
                (l.tracksInGroup = []),
                (l.trackId = -1),
                (l.trackName = ""),
                (l.selectDefaultTrack = !0),
                l.registerListeners(),
                l
              );
            }
            var g = E.prototype;
            return (
              (g.registerListeners = function () {
                var l = this.hls;
                l.on(M.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                  l.on(M.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                  l.on(M.Events.LEVEL_LOADING, this.onLevelLoading, this),
                  l.on(M.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
                  l.on(
                    M.Events.AUDIO_TRACK_LOADED,
                    this.onAudioTrackLoaded,
                    this
                  ),
                  l.on(M.Events.ERROR, this.onError, this);
              }),
              (g.unregisterListeners = function () {
                var l = this.hls;
                l.off(M.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                  l.off(M.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                  l.off(M.Events.LEVEL_LOADING, this.onLevelLoading, this),
                  l.off(M.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
                  l.off(
                    M.Events.AUDIO_TRACK_LOADED,
                    this.onAudioTrackLoaded,
                    this
                  ),
                  l.off(M.Events.ERROR, this.onError, this);
              }),
              (g.destroy = function () {
                this.unregisterListeners(),
                  (this.tracks.length = 0),
                  (this.tracksInGroup.length = 0),
                  S.prototype.destroy.call(this);
              }),
              (g.onManifestLoading = function () {
                (this.tracks = []),
                  (this.groupId = null),
                  (this.tracksInGroup = []),
                  (this.trackId = -1),
                  (this.trackName = ""),
                  (this.selectDefaultTrack = !0);
              }),
              (g.onManifestParsed = function (l, t) {
                this.tracks = t.audioTracks || [];
              }),
              (g.onAudioTrackLoaded = function (l, t) {
                var n = t.id,
                  h = t.details,
                  v = this.tracksInGroup[n];
                if (!v) {
                  this.warn("Invalid audio track id " + n);
                  return;
                }
                var i = v.details;
                (v.details = t.details),
                  this.log(
                    "audioTrack " +
                      n +
                      " loaded [" +
                      h.startSN +
                      "-" +
                      h.endSN +
                      "]"
                  ),
                  n === this.trackId &&
                    ((this.retryCount = 0), this.playlistLoaded(n, t, i));
              }),
              (g.onLevelLoading = function (l, t) {
                this.switchLevel(t.level);
              }),
              (g.onLevelSwitching = function (l, t) {
                this.switchLevel(t.level);
              }),
              (g.switchLevel = function (l) {
                var t = this.hls.levels[l];
                if (!!(t != null && t.audioGroupIds)) {
                  var n = t.audioGroupIds[t.urlId];
                  if (this.groupId !== n) {
                    this.groupId = n;
                    var h = this.tracks.filter(function (i) {
                      return !n || i.groupId === n;
                    });
                    this.selectDefaultTrack &&
                      !h.some(function (i) {
                        return i.default;
                      }) &&
                      (this.selectDefaultTrack = !1),
                      (this.tracksInGroup = h);
                    var v = { audioTracks: h };
                    this.log(
                      "Updating audio tracks, " +
                        h.length +
                        ' track(s) found in "' +
                        n +
                        '" group-id'
                    ),
                      this.hls.trigger(M.Events.AUDIO_TRACKS_UPDATED, v),
                      this.selectInitialTrack();
                  }
                }
              }),
              (g.onError = function (l, t) {
                S.prototype.onError.call(this, l, t),
                  !(t.fatal || !t.context) &&
                    t.context.type === b.PlaylistContextType.AUDIO_TRACK &&
                    t.context.id === this.trackId &&
                    t.context.groupId === this.groupId &&
                    this.retryLoadingOrFail(t);
              }),
              (g.setAudioTrack = function (l) {
                var t = this.tracksInGroup;
                if (l < 0 || l >= t.length) {
                  this.warn("Invalid id passed to audio-track controller");
                  return;
                }
                this.clearTimer();
                var n = t[this.trackId];
                this.log("Now switching to audio-track index " + l);
                var h = t[l],
                  v = h.id,
                  i = h.groupId,
                  r = i === void 0 ? "" : i,
                  o = h.name,
                  d = h.type,
                  e = h.url;
                if (
                  ((this.trackId = l),
                  (this.trackName = o),
                  (this.selectDefaultTrack = !1),
                  this.hls.trigger(M.Events.AUDIO_TRACK_SWITCHING, {
                    id: v,
                    groupId: r,
                    name: o,
                    type: d,
                    url: e,
                  }),
                  !(h.details && !h.details.live))
                ) {
                  var s = this.switchParams(h.url, n?.details);
                  this.loadPlaylist(s);
                }
              }),
              (g.selectInitialTrack = function () {
                var l = this.tracksInGroup;
                console.assert(
                  l.length,
                  "Initial audio track should be selected when tracks are known"
                );
                var t = this.trackName,
                  n = this.findTrackId(t) || this.findTrackId();
                n !== -1
                  ? this.setAudioTrack(n)
                  : (this.warn(
                      "No track found for running audio group-ID: " +
                        this.groupId
                    ),
                    this.hls.trigger(M.Events.ERROR, {
                      type: O.ErrorTypes.MEDIA_ERROR,
                      details: O.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
                      fatal: !0,
                    }));
              }),
              (g.findTrackId = function (l) {
                for (var t = this.tracksInGroup, n = 0; n < t.length; n++) {
                  var h = t[n];
                  if (
                    (!this.selectDefaultTrack || h.default) &&
                    (!l || l === h.name)
                  )
                    return h.id;
                }
                return -1;
              }),
              (g.loadPlaylist = function (l) {
                var t = this.tracksInGroup[this.trackId];
                if (this.shouldLoadTrack(t)) {
                  var n = t.id,
                    h = t.groupId,
                    v = t.url;
                  if (l)
                    try {
                      v = l.addDirectives(v);
                    } catch (i) {
                      this.warn(
                        "Could not construct new URL with HLS Delivery Directives: " +
                          i
                      );
                    }
                  this.log("loading audio-track playlist for id: " + n),
                    this.clearTimer(),
                    this.hls.trigger(M.Events.AUDIO_TRACK_LOADING, {
                      url: v,
                      id: n,
                      groupId: h,
                      deliveryDirectives: l || null,
                    });
                }
              }),
              R(E, [
                {
                  key: "audioTracks",
                  get: function () {
                    return this.tracksInGroup;
                  },
                },
                {
                  key: "audioTrack",
                  get: function () {
                    return this.trackId;
                  },
                  set: function (l) {
                    (this.selectDefaultTrack = !1), this.setAudioTrack(l);
                  },
                },
              ]),
              E
            );
          })(L.default);
          C.default = y;
        },
        "./src/controller/base-playlist-controller.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "default", function () {
              return R;
            });
          var M = T("./src/polyfills/number.ts"),
            O = T("./src/types/level.ts"),
            L = T("./src/controller/level-helper.ts"),
            b = T("./src/utils/logger.ts"),
            P = T("./src/errors.ts"),
            R = (function () {
              function A(y, S) {
                (this.hls = void 0),
                  (this.timer = -1),
                  (this.canLoad = !1),
                  (this.retryCount = 0),
                  (this.log = void 0),
                  (this.warn = void 0),
                  (this.log = b.logger.log.bind(b.logger, S + ":")),
                  (this.warn = b.logger.warn.bind(b.logger, S + ":")),
                  (this.hls = y);
              }
              var p = A.prototype;
              return (
                (p.destroy = function () {
                  this.clearTimer(), (this.hls = this.log = this.warn = null);
                }),
                (p.onError = function (S, E) {
                  E.fatal &&
                    E.type === P.ErrorTypes.NETWORK_ERROR &&
                    this.clearTimer();
                }),
                (p.clearTimer = function () {
                  clearTimeout(this.timer), (this.timer = -1);
                }),
                (p.startLoad = function () {
                  (this.canLoad = !0),
                    (this.retryCount = 0),
                    this.loadPlaylist();
                }),
                (p.stopLoad = function () {
                  (this.canLoad = !1), this.clearTimer();
                }),
                (p.switchParams = function (S, E) {
                  var g = E?.renditionReports;
                  if (g)
                    for (var m = 0; m < g.length; m++) {
                      var l = g[m],
                        t = "" + l.URI;
                      if (t === S.slice(-t.length)) {
                        var n = parseInt(l["LAST-MSN"]),
                          h = parseInt(l["LAST-PART"]);
                        if (E && this.hls.config.lowLatencyMode) {
                          var v = Math.min(
                            E.age - E.partTarget,
                            E.targetduration
                          );
                          h !== void 0 && v > E.partTarget && (h += 1);
                        }
                        if (Object(M.isFiniteNumber)(n))
                          return new O.HlsUrlParameters(
                            n,
                            Object(M.isFiniteNumber)(h) ? h : void 0,
                            O.HlsSkip.No
                          );
                      }
                    }
                }),
                (p.loadPlaylist = function (S) {}),
                (p.shouldLoadTrack = function (S) {
                  return (
                    this.canLoad &&
                    S &&
                    !!S.url &&
                    (!S.details || S.details.live)
                  );
                }),
                (p.playlistLoaded = function (S, E, g) {
                  var m = this,
                    l = E.details,
                    t = E.stats,
                    n = t.loading.end
                      ? Math.max(0, self.performance.now() - t.loading.end)
                      : 0;
                  if (
                    ((l.advancedDateTime = Date.now() - n),
                    l.live || (g != null && g.live))
                  ) {
                    if (
                      (l.reloaded(g),
                      g &&
                        this.log(
                          "live playlist " +
                            S +
                            " " +
                            (l.advanced
                              ? "REFRESHED " +
                                l.lastPartSn +
                                "-" +
                                l.lastPartIndex
                              : "MISSED")
                        ),
                      g &&
                        l.fragments.length > 0 &&
                        Object(L.mergeDetails)(g, l),
                      !this.canLoad || !l.live)
                    )
                      return;
                    var h,
                      v = void 0,
                      i = void 0;
                    if (l.canBlockReload && l.endSN && l.advanced) {
                      var r = this.hls.config.lowLatencyMode,
                        o = l.lastPartSn,
                        d = l.endSN,
                        e = l.lastPartIndex,
                        s = e !== -1,
                        u = o === d,
                        a = r ? 0 : e;
                      s
                        ? ((v = u ? d + 1 : o), (i = u ? a : e + 1))
                        : (v = d + 1);
                      var f = l.age,
                        c = f + l.ageHeader,
                        D = Math.min(c - l.partTarget, l.targetduration * 1.5);
                      if (D > 0) {
                        if (g && D > g.tuneInGoal)
                          this.warn(
                            "CDN Tune-in goal increased from: " +
                              g.tuneInGoal +
                              " to: " +
                              D +
                              " with playlist age: " +
                              l.age
                          ),
                            (D = 0);
                        else {
                          var x = Math.floor(D / l.targetduration);
                          if (((v += x), i !== void 0)) {
                            var I = Math.round(
                              (D % l.targetduration) / l.partTarget
                            );
                            i += I;
                          }
                          this.log(
                            "CDN Tune-in age: " +
                              l.ageHeader +
                              "s last advanced " +
                              f.toFixed(2) +
                              "s goal: " +
                              D +
                              " skip sn " +
                              x +
                              " to part " +
                              i
                          );
                        }
                        l.tuneInGoal = D;
                      }
                      if (
                        ((h = this.getDeliveryDirectives(
                          l,
                          E.deliveryDirectives,
                          v,
                          i
                        )),
                        r || !u)
                      ) {
                        this.loadPlaylist(h);
                        return;
                      }
                    } else
                      h = this.getDeliveryDirectives(
                        l,
                        E.deliveryDirectives,
                        v,
                        i
                      );
                    var F = Object(L.computeReloadInterval)(l, t);
                    v !== void 0 &&
                      l.canBlockReload &&
                      (F -= l.partTarget || 1),
                      this.log(
                        "reload live playlist " +
                          S +
                          " in " +
                          Math.round(F) +
                          " ms"
                      ),
                      (this.timer = self.setTimeout(function () {
                        return m.loadPlaylist(h);
                      }, F));
                  } else this.clearTimer();
                }),
                (p.getDeliveryDirectives = function (S, E, g, m) {
                  var l = Object(O.getSkipValue)(S, g);
                  return (
                    E != null &&
                      E.skip &&
                      S.deltaUpdateFailed &&
                      ((g = E.msn), (m = E.part), (l = O.HlsSkip.No)),
                    new O.HlsUrlParameters(g, m, l)
                  );
                }),
                (p.retryLoadingOrFail = function (S) {
                  var E = this,
                    g = this.hls.config,
                    m = this.retryCount < g.levelLoadingMaxRetry;
                  if (m) {
                    var l;
                    if (
                      (this.retryCount++,
                      S.details.indexOf("LoadTimeOut") > -1 &&
                        (l = S.context) !== null &&
                        l !== void 0 &&
                        l.deliveryDirectives)
                    )
                      this.warn(
                        "retry playlist loading #" +
                          this.retryCount +
                          ' after "' +
                          S.details +
                          '"'
                      ),
                        this.loadPlaylist();
                    else {
                      var t = Math.min(
                        Math.pow(2, this.retryCount) * g.levelLoadingRetryDelay,
                        g.levelLoadingMaxRetryTimeout
                      );
                      (this.timer = self.setTimeout(function () {
                        return E.loadPlaylist();
                      }, t)),
                        this.warn(
                          "retry playlist loading #" +
                            this.retryCount +
                            " in " +
                            t +
                            ' ms after "' +
                            S.details +
                            '"'
                        );
                    }
                  } else
                    this.warn('cannot recover from error "' + S.details + '"'),
                      this.clearTimer(),
                      (S.fatal = !0);
                  return m;
                }),
                A
              );
            })();
        },
        "./src/controller/base-stream-controller.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "State", function () {
              return d;
            }),
            T.d(C, "default", function () {
              return e;
            });
          var M = T("./src/polyfills/number.ts"),
            O = T("./src/task-loop.ts"),
            L = T("./src/controller/fragment-tracker.ts"),
            b = T("./src/utils/buffer-helper.ts"),
            P = T("./src/utils/logger.ts"),
            R = T("./src/events.ts"),
            A = T("./src/errors.ts"),
            p = T("./src/types/transmuxer.ts"),
            y = T("./src/utils/mp4-tools.ts"),
            S = T("./src/utils/discontinuities.ts"),
            E = T("./src/controller/fragment-finders.ts"),
            g = T("./src/controller/level-helper.ts"),
            m = T("./src/loader/fragment-loader.ts"),
            l = T("./src/crypt/decrypter.ts"),
            t = T("./src/utils/time-ranges.ts"),
            n = T("./src/types/loader.ts");
          function h(s, u) {
            for (var a = 0; a < u.length; a++) {
              var f = u[a];
              (f.enumerable = f.enumerable || !1),
                (f.configurable = !0),
                "value" in f && (f.writable = !0),
                Object.defineProperty(s, f.key, f);
            }
          }
          function v(s, u, a) {
            return (
              u && h(s.prototype, u),
              a && h(s, a),
              Object.defineProperty(s, "prototype", { writable: !1 }),
              s
            );
          }
          function i(s) {
            if (s === void 0)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return s;
          }
          function r(s, u) {
            (s.prototype = Object.create(u.prototype)),
              (s.prototype.constructor = s),
              o(s, u);
          }
          function o(s, u) {
            return (
              (o = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (f, c) {
                    return (f.__proto__ = c), f;
                  }),
              o(s, u)
            );
          }
          var d = {
              STOPPED: "STOPPED",
              IDLE: "IDLE",
              KEY_LOADING: "KEY_LOADING",
              FRAG_LOADING: "FRAG_LOADING",
              FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
              WAITING_TRACK: "WAITING_TRACK",
              PARSING: "PARSING",
              PARSED: "PARSED",
              ENDED: "ENDED",
              ERROR: "ERROR",
              WAITING_INIT_PTS: "WAITING_INIT_PTS",
              WAITING_LEVEL: "WAITING_LEVEL",
            },
            e = (function (s) {
              r(u, s);
              function u(f, c, D) {
                var x;
                return (
                  (x = s.call(this) || this),
                  (x.hls = void 0),
                  (x.fragPrevious = null),
                  (x.fragCurrent = null),
                  (x.fragmentTracker = void 0),
                  (x.transmuxer = null),
                  (x._state = d.STOPPED),
                  (x.media = null),
                  (x.mediaBuffer = null),
                  (x.config = void 0),
                  (x.bitrateTest = !1),
                  (x.lastCurrentTime = 0),
                  (x.nextLoadPosition = 0),
                  (x.startPosition = 0),
                  (x.loadedmetadata = !1),
                  (x.fragLoadError = 0),
                  (x.retryDate = 0),
                  (x.levels = null),
                  (x.fragmentLoader = void 0),
                  (x.levelLastLoaded = null),
                  (x.startFragRequested = !1),
                  (x.decrypter = void 0),
                  (x.initPTS = []),
                  (x.onvseeking = null),
                  (x.onvended = null),
                  (x.logPrefix = ""),
                  (x.log = void 0),
                  (x.warn = void 0),
                  (x.logPrefix = D),
                  (x.log = P.logger.log.bind(P.logger, D + ":")),
                  (x.warn = P.logger.warn.bind(P.logger, D + ":")),
                  (x.hls = f),
                  (x.fragmentLoader = new m.default(f.config)),
                  (x.fragmentTracker = c),
                  (x.config = f.config),
                  (x.decrypter = new l.default(f, f.config)),
                  f.on(R.Events.KEY_LOADED, x.onKeyLoaded, i(x)),
                  f.on(R.Events.LEVEL_SWITCHING, x.onLevelSwitching, i(x)),
                  x
                );
              }
              var a = u.prototype;
              return (
                (a.doTick = function () {
                  this.onTickEnd();
                }),
                (a.onTickEnd = function () {}),
                (a.startLoad = function (c) {}),
                (a.stopLoad = function () {
                  this.fragmentLoader.abort();
                  var c = this.fragCurrent;
                  c && this.fragmentTracker.removeFragment(c),
                    this.resetTransmuxer(),
                    (this.fragCurrent = null),
                    (this.fragPrevious = null),
                    this.clearInterval(),
                    this.clearNextTick(),
                    (this.state = d.STOPPED);
                }),
                (a._streamEnded = function (c, D) {
                  var x = this.fragCurrent,
                    I = this.fragmentTracker;
                  if (
                    !D.live &&
                    x &&
                    this.media &&
                    x.sn >= D.endSN &&
                    !c.nextStart
                  ) {
                    var F = D.partList;
                    if (F != null && F.length) {
                      var _ = F[F.length - 1],
                        B = b.BufferHelper.isBuffered(
                          this.media,
                          _.start + _.duration / 2
                        );
                      return B;
                    }
                    var U = I.getState(x);
                    return (
                      U === L.FragmentState.PARTIAL || U === L.FragmentState.OK
                    );
                  }
                  return !1;
                }),
                (a.onMediaAttached = function (c, D) {
                  var x = (this.media = this.mediaBuffer = D.media);
                  (this.onvseeking = this.onMediaSeeking.bind(this)),
                    (this.onvended = this.onMediaEnded.bind(this)),
                    x.addEventListener("seeking", this.onvseeking),
                    x.addEventListener("ended", this.onvended);
                  var I = this.config;
                  this.levels &&
                    I.autoStartLoad &&
                    this.state === d.STOPPED &&
                    this.startLoad(I.startPosition);
                }),
                (a.onMediaDetaching = function () {
                  var c = this.media;
                  c != null &&
                    c.ended &&
                    (this.log(
                      "MSE detaching and video ended, reset startPosition"
                    ),
                    (this.startPosition = this.lastCurrentTime = 0)),
                    c &&
                      this.onvseeking &&
                      this.onvended &&
                      (c.removeEventListener("seeking", this.onvseeking),
                      c.removeEventListener("ended", this.onvended),
                      (this.onvseeking = this.onvended = null)),
                    (this.media = this.mediaBuffer = null),
                    (this.loadedmetadata = !1),
                    this.fragmentTracker.removeAllFragments(),
                    this.stopLoad();
                }),
                (a.onMediaSeeking = function () {
                  var c = this.config,
                    D = this.fragCurrent,
                    x = this.media,
                    I = this.mediaBuffer,
                    F = this.state,
                    _ = x ? x.currentTime : 0,
                    B = b.BufferHelper.bufferInfo(I || x, _, c.maxBufferHole);
                  if (
                    (this.log(
                      "media seeking to " +
                        (Object(M.isFiniteNumber)(_) ? _.toFixed(3) : _) +
                        ", state: " +
                        F
                    ),
                    F === d.ENDED)
                  )
                    this.resetLoadingState();
                  else if (D && !B.len) {
                    var U = c.maxFragLookUpTolerance,
                      N = D.start - U,
                      w = D.start + D.duration + U,
                      k = _ > w;
                    (_ < N || k) &&
                      (k &&
                        D.loader &&
                        (this.log(
                          "seeking outside of buffer while fragment load in progress, cancel fragment load"
                        ),
                        D.loader.abort()),
                      this.resetLoadingState());
                  }
                  x && (this.lastCurrentTime = _),
                    !this.loadedmetadata &&
                      !B.len &&
                      (this.nextLoadPosition = this.startPosition = _),
                    this.tickImmediate();
                }),
                (a.onMediaEnded = function () {
                  this.startPosition = this.lastCurrentTime = 0;
                }),
                (a.onKeyLoaded = function (c, D) {
                  if (
                    !(
                      this.state !== d.KEY_LOADING ||
                      D.frag !== this.fragCurrent ||
                      !this.levels
                    )
                  ) {
                    this.state = d.IDLE;
                    var x = this.levels[D.frag.level].details;
                    x && this.loadFragment(D.frag, x, D.frag.start);
                  }
                }),
                (a.onLevelSwitching = function (c, D) {
                  this.fragLoadError = 0;
                }),
                (a.onHandlerDestroying = function () {
                  this.stopLoad(), s.prototype.onHandlerDestroying.call(this);
                }),
                (a.onHandlerDestroyed = function () {
                  (this.state = d.STOPPED),
                    this.hls.off(R.Events.KEY_LOADED, this.onKeyLoaded, this),
                    this.hls.off(
                      R.Events.LEVEL_SWITCHING,
                      this.onLevelSwitching,
                      this
                    ),
                    this.fragmentLoader && this.fragmentLoader.destroy(),
                    this.decrypter && this.decrypter.destroy(),
                    (this.hls =
                      this.log =
                      this.warn =
                      this.decrypter =
                      this.fragmentLoader =
                      this.fragmentTracker =
                        null),
                    s.prototype.onHandlerDestroyed.call(this);
                }),
                (a.loadKey = function (c, D) {
                  this.log(
                    "Loading key for " +
                      c.sn +
                      " of [" +
                      D.startSN +
                      "-" +
                      D.endSN +
                      "], " +
                      (this.logPrefix === "[stream-controller]"
                        ? "level"
                        : "track") +
                      " " +
                      c.level
                  ),
                    (this.state = d.KEY_LOADING),
                    (this.fragCurrent = c),
                    this.hls.trigger(R.Events.KEY_LOADING, { frag: c });
                }),
                (a.loadFragment = function (c, D, x) {
                  this._loadFragForPlayback(c, D, x);
                }),
                (a._loadFragForPlayback = function (c, D, x) {
                  var I = this,
                    F = function (B) {
                      if (I.fragContextChanged(c)) {
                        I.warn(
                          "Fragment " +
                            c.sn +
                            (B.part ? " p: " + B.part.index : "") +
                            " of level " +
                            c.level +
                            " was dropped during download."
                        ),
                          I.fragmentTracker.removeFragment(c);
                        return;
                      }
                      c.stats.chunkCount++, I._handleFragmentLoadProgress(B);
                    };
                  this._doFragLoad(c, D, x, F)
                    .then(function (_) {
                      if (!!_) {
                        I.fragLoadError = 0;
                        var B = I.state;
                        if (I.fragContextChanged(c)) {
                          (B === d.FRAG_LOADING ||
                            (!I.fragCurrent && B === d.PARSING)) &&
                            (I.fragmentTracker.removeFragment(c),
                            (I.state = d.IDLE));
                          return;
                        }
                        "payload" in _ &&
                          (I.log(
                            "Loaded fragment " + c.sn + " of level " + c.level
                          ),
                          I.hls.trigger(R.Events.FRAG_LOADED, _)),
                          I._handleFragmentLoadComplete(_);
                      }
                    })
                    .catch(function (_) {
                      I.state === d.STOPPED ||
                        I.state === d.ERROR ||
                        (I.warn(_), I.resetFragmentLoading(c));
                    });
                }),
                (a.flushMainBuffer = function (c, D, x) {
                  if ((x === void 0 && (x = null), !!(c - D))) {
                    var I = { startOffset: c, endOffset: D, type: x };
                    (this.fragLoadError = 0),
                      this.hls.trigger(R.Events.BUFFER_FLUSHING, I);
                  }
                }),
                (a._loadInitSegment = function (c) {
                  var D = this;
                  this._doFragLoad(c)
                    .then(function (x) {
                      if (!x || D.fragContextChanged(c) || !D.levels)
                        throw new Error("init load aborted");
                      return x;
                    })
                    .then(function (x) {
                      var I = D.hls,
                        F = x.payload,
                        _ = c.decryptdata;
                      if (
                        F &&
                        F.byteLength > 0 &&
                        _ &&
                        _.key &&
                        _.iv &&
                        _.method === "AES-128"
                      ) {
                        var B = self.performance.now();
                        return D.decrypter
                          .webCryptoDecrypt(
                            new Uint8Array(F),
                            _.key.buffer,
                            _.iv.buffer
                          )
                          .then(function (U) {
                            var N = self.performance.now();
                            return (
                              I.trigger(R.Events.FRAG_DECRYPTED, {
                                frag: c,
                                payload: U,
                                stats: { tstart: B, tdecrypt: N },
                              }),
                              (x.payload = U),
                              x
                            );
                          });
                      }
                      return x;
                    })
                    .then(function (x) {
                      var I = D.fragCurrent,
                        F = D.hls,
                        _ = D.levels;
                      if (!_)
                        throw new Error("init load aborted, missing levels");
                      var B = _[c.level].details;
                      console.assert(
                        B,
                        "Level details are defined when init segment is loaded"
                      );
                      var U = c.stats;
                      (D.state = d.IDLE),
                        (D.fragLoadError = 0),
                        (c.data = new Uint8Array(x.payload)),
                        (U.parsing.start = U.buffering.start =
                          self.performance.now()),
                        (U.parsing.end = U.buffering.end =
                          self.performance.now()),
                        x.frag === I &&
                          F.trigger(R.Events.FRAG_BUFFERED, {
                            stats: U,
                            frag: I,
                            part: null,
                            id: c.type,
                          }),
                        D.tick();
                    })
                    .catch(function (x) {
                      D.state === d.STOPPED ||
                        D.state === d.ERROR ||
                        (D.warn(x), D.resetFragmentLoading(c));
                    });
                }),
                (a.fragContextChanged = function (c) {
                  var D = this.fragCurrent;
                  return (
                    !c ||
                    !D ||
                    c.level !== D.level ||
                    c.sn !== D.sn ||
                    c.urlId !== D.urlId
                  );
                }),
                (a.fragBufferedComplete = function (c, D) {
                  var x = this.mediaBuffer ? this.mediaBuffer : this.media;
                  this.log(
                    "Buffered " +
                      c.type +
                      " sn: " +
                      c.sn +
                      (D ? " part: " + D.index : "") +
                      " of " +
                      (this.logPrefix === "[stream-controller]"
                        ? "level"
                        : "track") +
                      " " +
                      c.level +
                      " " +
                      (x
                        ? t.default.toString(b.BufferHelper.getBuffered(x))
                        : "(detached)")
                  ),
                    (this.state = d.IDLE),
                    x &&
                      (!this.loadedmetadata &&
                        x.buffered.length &&
                        this.fragCurrent === this.fragPrevious &&
                        ((this.loadedmetadata = !0), this.seekToStartPos()),
                      this.tick());
                }),
                (a.seekToStartPos = function () {}),
                (a._handleFragmentLoadComplete = function (c) {
                  var D = this.transmuxer;
                  if (!!D) {
                    var x = c.frag,
                      I = c.part,
                      F = c.partsLoaded,
                      _ =
                        !F ||
                        F.length === 0 ||
                        F.some(function (U) {
                          return !U;
                        }),
                      B = new p.ChunkMetadata(
                        x.level,
                        x.sn,
                        x.stats.chunkCount + 1,
                        0,
                        I ? I.index : -1,
                        !_
                      );
                    D.flush(B);
                  }
                }),
                (a._handleFragmentLoadProgress = function (c) {}),
                (a._doFragLoad = function (c, D, x, I) {
                  var F = this;
                  if ((x === void 0 && (x = null), !this.levels))
                    throw new Error("frag load aborted, missing levels");
                  if (
                    ((x = Math.max(c.start, x || 0)),
                    this.config.lowLatencyMode && D)
                  ) {
                    var _ = D.partList;
                    if (_ && I) {
                      x > c.end && D.fragmentHint && (c = D.fragmentHint);
                      var B = this.getNextPart(_, c, x);
                      if (B > -1) {
                        var U = _[B];
                        return (
                          this.log(
                            "Loading part sn: " +
                              c.sn +
                              " p: " +
                              U.index +
                              " cc: " +
                              c.cc +
                              " of playlist [" +
                              D.startSN +
                              "-" +
                              D.endSN +
                              "] parts [0-" +
                              B +
                              "-" +
                              (_.length - 1) +
                              "] " +
                              (this.logPrefix === "[stream-controller]"
                                ? "level"
                                : "track") +
                              ": " +
                              c.level +
                              ", target: " +
                              parseFloat(x.toFixed(3))
                          ),
                          (this.nextLoadPosition = U.start + U.duration),
                          (this.state = d.FRAG_LOADING),
                          this.hls.trigger(R.Events.FRAG_LOADING, {
                            frag: c,
                            part: _[B],
                            targetBufferTime: x,
                          }),
                          this.doFragPartsLoad(c, _, B, I).catch(function (N) {
                            return F.handleFragLoadError(N);
                          })
                        );
                      } else if (!c.url || this.loadedEndOfParts(_, x))
                        return Promise.resolve(null);
                    }
                  }
                  return (
                    this.log(
                      "Loading fragment " +
                        c.sn +
                        " cc: " +
                        c.cc +
                        " " +
                        (D ? "of [" + D.startSN + "-" + D.endSN + "] " : "") +
                        (this.logPrefix === "[stream-controller]"
                          ? "level"
                          : "track") +
                        ": " +
                        c.level +
                        ", target: " +
                        parseFloat(x.toFixed(3))
                    ),
                    Object(M.isFiniteNumber)(c.sn) &&
                      !this.bitrateTest &&
                      (this.nextLoadPosition = c.start + c.duration),
                    (this.state = d.FRAG_LOADING),
                    this.hls.trigger(R.Events.FRAG_LOADING, {
                      frag: c,
                      targetBufferTime: x,
                    }),
                    this.fragmentLoader.load(c, I).catch(function (N) {
                      return F.handleFragLoadError(N);
                    })
                  );
                }),
                (a.doFragPartsLoad = function (c, D, x, I) {
                  var F = this;
                  return new Promise(function (_, B) {
                    var U = [],
                      N = function w(k) {
                        var K = D[k];
                        F.fragmentLoader
                          .loadPart(c, K, I)
                          .then(function (j) {
                            U[K.index] = j;
                            var G = j.part;
                            F.hls.trigger(R.Events.FRAG_LOADED, j);
                            var Y = D[k + 1];
                            if (Y && Y.fragment === c) w(k + 1);
                            else return _({ frag: c, part: G, partsLoaded: U });
                          })
                          .catch(B);
                      };
                    N(x);
                  });
                }),
                (a.handleFragLoadError = function (c) {
                  var D = c.data;
                  return (
                    D && D.details === A.ErrorDetails.INTERNAL_ABORTED
                      ? this.handleFragLoadAborted(D.frag, D.part)
                      : this.hls.trigger(R.Events.ERROR, D),
                    null
                  );
                }),
                (a._handleTransmuxerFlush = function (c) {
                  var D = this.getCurrentContext(c);
                  if (!D || this.state !== d.PARSING) {
                    this.fragCurrent || (this.state = d.IDLE);
                    return;
                  }
                  var x = D.frag,
                    I = D.part,
                    F = D.level,
                    _ = self.performance.now();
                  (x.stats.parsing.end = _),
                    I && (I.stats.parsing.end = _),
                    this.updateLevelTiming(x, I, F, c.partial);
                }),
                (a.getCurrentContext = function (c) {
                  var D = this.levels,
                    x = c.level,
                    I = c.sn,
                    F = c.part;
                  if (!D || !D[x])
                    return (
                      this.warn(
                        "Levels object was unset while buffering fragment " +
                          I +
                          " of level " +
                          x +
                          ". The current chunk will not be buffered."
                      ),
                      null
                    );
                  var _ = D[x],
                    B = F > -1 ? Object(g.getPartWith)(_, I, F) : null,
                    U = B
                      ? B.fragment
                      : Object(g.getFragmentWithSN)(_, I, this.fragCurrent);
                  return U ? { frag: U, part: B, level: _ } : null;
                }),
                (a.bufferFragmentData = function (c, D, x, I) {
                  if (!(!c || this.state !== d.PARSING)) {
                    var F = c.data1,
                      _ = c.data2,
                      B = F;
                    if (
                      (F && _ && (B = Object(y.appendUint8Array)(F, _)),
                      !(!B || !B.length))
                    ) {
                      var U = {
                        type: c.type,
                        frag: D,
                        part: x,
                        chunkMeta: I,
                        parent: D.type,
                        data: B,
                      };
                      this.hls.trigger(R.Events.BUFFER_APPENDING, U),
                        c.dropped &&
                          c.independent &&
                          !x &&
                          this.flushBufferGap(D);
                    }
                  }
                }),
                (a.flushBufferGap = function (c) {
                  var D = this.media;
                  if (!!D) {
                    if (!b.BufferHelper.isBuffered(D, D.currentTime)) {
                      this.flushMainBuffer(0, c.start);
                      return;
                    }
                    var x = D.currentTime,
                      I = b.BufferHelper.bufferInfo(D, x, 0),
                      F = c.duration,
                      _ = Math.min(
                        this.config.maxFragLookUpTolerance * 2,
                        F * 0.25
                      ),
                      B = Math.max(Math.min(c.start - _, I.end - _), x + _);
                    c.start - B > _ && this.flushMainBuffer(B, c.start);
                  }
                }),
                (a.getFwdBufferInfo = function (c, D) {
                  var x = this.config,
                    I = this.getLoadPosition();
                  if (!Object(M.isFiniteNumber)(I)) return null;
                  var F = b.BufferHelper.bufferInfo(c, I, x.maxBufferHole);
                  if (F.len === 0 && F.nextStart !== void 0) {
                    var _ = this.fragmentTracker.getBufferedFrag(I, D);
                    if (_ && F.nextStart < _.end)
                      return b.BufferHelper.bufferInfo(
                        c,
                        I,
                        Math.max(F.nextStart, x.maxBufferHole)
                      );
                  }
                  return F;
                }),
                (a.getMaxBufferLength = function (c) {
                  var D = this.config,
                    x;
                  return (
                    c
                      ? (x = Math.max(
                          (8 * D.maxBufferSize) / c,
                          D.maxBufferLength
                        ))
                      : (x = D.maxBufferLength),
                    Math.min(x, D.maxMaxBufferLength)
                  );
                }),
                (a.reduceMaxBufferLength = function (c) {
                  var D = this.config,
                    x = c || D.maxBufferLength;
                  return D.maxMaxBufferLength >= x
                    ? ((D.maxMaxBufferLength /= 2),
                      this.warn(
                        "Reduce max buffer length to " +
                          D.maxMaxBufferLength +
                          "s"
                      ),
                      !0)
                    : !1;
                }),
                (a.getNextFragment = function (c, D) {
                  var x = D.fragments,
                    I = x.length;
                  if (!I) return null;
                  var F = this.config,
                    _ = x[0].start,
                    B;
                  if (D.live) {
                    var U = F.initialLiveManifestSize;
                    if (I < U)
                      return (
                        this.warn(
                          "Not enough fragments to start playback (have: " +
                            I +
                            ", need: " +
                            U +
                            ")"
                        ),
                        null
                      );
                    !D.PTSKnown &&
                      !this.startFragRequested &&
                      this.startPosition === -1 &&
                      ((B = this.getInitialLiveFragment(D, x)),
                      (this.startPosition = B
                        ? this.hls.liveSyncPosition || B.start
                        : c));
                  } else c <= _ && (B = x[0]);
                  if (!B) {
                    var N = F.lowLatencyMode ? D.partEnd : D.fragmentEnd;
                    B = this.getFragmentAtPosition(c, N, D);
                  }
                  return this.mapToInitFragWhenRequired(B);
                }),
                (a.mapToInitFragWhenRequired = function (c) {
                  return c != null &&
                    c.initSegment &&
                    !(c != null && c.initSegment.data) &&
                    !this.bitrateTest
                    ? c.initSegment
                    : c;
                }),
                (a.getNextPart = function (c, D, x) {
                  for (
                    var I = -1, F = !1, _ = !0, B = 0, U = c.length;
                    B < U;
                    B++
                  ) {
                    var N = c[B];
                    if (((_ = _ && !N.independent), I > -1 && x < N.start))
                      break;
                    var w = N.loaded;
                    !w &&
                      (F || N.independent || _) &&
                      N.fragment === D &&
                      (I = B),
                      (F = w);
                  }
                  return I;
                }),
                (a.loadedEndOfParts = function (c, D) {
                  var x = c[c.length - 1];
                  return x && D > x.start && x.loaded;
                }),
                (a.getInitialLiveFragment = function (c, D) {
                  var x = this.fragPrevious,
                    I = null;
                  if (x) {
                    if (
                      (c.hasProgramDateTime &&
                        (this.log(
                          "Live playlist, switching playlist, load frag with same PDT: " +
                            x.programDateTime
                        ),
                        (I = Object(E.findFragmentByPDT)(
                          D,
                          x.endProgramDateTime,
                          this.config.maxFragLookUpTolerance
                        ))),
                      !I)
                    ) {
                      var F = x.sn + 1;
                      if (F >= c.startSN && F <= c.endSN) {
                        var _ = D[F - c.startSN];
                        x.cc === _.cc &&
                          ((I = _),
                          this.log(
                            "Live playlist, switching playlist, load frag with next SN: " +
                              I.sn
                          ));
                      }
                      I ||
                        ((I = Object(E.findFragWithCC)(D, x.cc)),
                        I &&
                          this.log(
                            "Live playlist, switching playlist, load frag with same CC: " +
                              I.sn
                          ));
                    }
                  } else {
                    var B = this.hls.liveSyncPosition;
                    B !== null &&
                      (I = this.getFragmentAtPosition(
                        B,
                        this.bitrateTest ? c.fragmentEnd : c.edge,
                        c
                      ));
                  }
                  return I;
                }),
                (a.getFragmentAtPosition = function (c, D, x) {
                  var I = this.config,
                    F = this.fragPrevious,
                    _ = x.fragments,
                    B = x.endSN,
                    U = x.fragmentHint,
                    N = I.maxFragLookUpTolerance,
                    w = !!(I.lowLatencyMode && x.partList && U);
                  w &&
                    U &&
                    !this.bitrateTest &&
                    ((_ = _.concat(U)), (B = U.sn));
                  var k;
                  if (c < D) {
                    var K = c > D - N ? 0 : N;
                    k = Object(E.findFragmentByPTS)(F, _, c, K);
                  } else k = _[_.length - 1];
                  if (k) {
                    var j = k.sn - x.startSN;
                    if (F && k.sn === F.sn && !w) {
                      var G = F && k.level === F.level;
                      if (G) {
                        var Y = _[j + 1];
                        k.sn < B &&
                        this.fragmentTracker.getState(Y) !== L.FragmentState.OK
                          ? (this.log(
                              "SN " +
                                k.sn +
                                " just loaded, load next one: " +
                                Y.sn
                            ),
                            (k = Y))
                          : (k = null);
                      }
                    }
                  }
                  return k;
                }),
                (a.synchronizeToLiveEdge = function (c) {
                  var D = this.config,
                    x = this.media;
                  if (!!x) {
                    var I = this.hls.liveSyncPosition,
                      F = x.currentTime,
                      _ = c.fragments[0].start,
                      B = c.edge,
                      U = F >= _ - D.maxFragLookUpTolerance && F <= B;
                    if (I !== null && x.duration > I && (F < I || !U)) {
                      var N =
                        D.liveMaxLatencyDuration !== void 0
                          ? D.liveMaxLatencyDuration
                          : D.liveMaxLatencyDurationCount * c.targetduration;
                      ((!U && x.readyState < 4) || F < B - N) &&
                        (this.loadedmetadata || (this.nextLoadPosition = I),
                        x.readyState &&
                          (this.warn(
                            "Playback: " +
                              F.toFixed(3) +
                              " is located too far from the end of live sliding playlist: " +
                              B +
                              ", reset currentTime to : " +
                              I.toFixed(3)
                          ),
                          (x.currentTime = I)));
                    }
                  }
                }),
                (a.alignPlaylists = function (c, D) {
                  var x = this.levels,
                    I = this.levelLastLoaded,
                    F = this.fragPrevious,
                    _ = I !== null ? x[I] : null,
                    B = c.fragments.length;
                  if (!B) return this.warn("No fragments in live playlist"), 0;
                  var U = c.fragments[0].start,
                    N = !D,
                    w = c.alignedSliding && Object(M.isFiniteNumber)(U);
                  if (N || (!w && !U)) {
                    Object(S.alignStream)(F, _, c);
                    var k = c.fragments[0].start;
                    return (
                      this.log(
                        "Live playlist sliding: " +
                          k.toFixed(2) +
                          " start-sn: " +
                          (D ? D.startSN : "na") +
                          "->" +
                          c.startSN +
                          " prev-sn: " +
                          (F ? F.sn : "na") +
                          " fragments: " +
                          B
                      ),
                      k
                    );
                  }
                  return U;
                }),
                (a.waitForCdnTuneIn = function (c) {
                  var D = 3;
                  return (
                    c.live &&
                    c.canBlockReload &&
                    c.partTarget &&
                    c.tuneInGoal > Math.max(c.partHoldBack, c.partTarget * D)
                  );
                }),
                (a.setStartPosition = function (c, D) {
                  var x = this.startPosition;
                  if (
                    (x < D && (x = -1), x === -1 || this.lastCurrentTime === -1)
                  ) {
                    var I = c.startTimeOffset;
                    Object(M.isFiniteNumber)(I)
                      ? ((x = D + I),
                        I < 0 && (x += c.totalduration),
                        (x = Math.min(Math.max(D, x), D + c.totalduration)),
                        this.log(
                          "Start time offset " +
                            I +
                            " found in playlist, adjust startPosition to " +
                            x
                        ),
                        (this.startPosition = x))
                      : c.live
                      ? (x = this.hls.liveSyncPosition || D)
                      : (this.startPosition = x = 0),
                      (this.lastCurrentTime = x);
                  }
                  this.nextLoadPosition = x;
                }),
                (a.getLoadPosition = function () {
                  var c = this.media,
                    D = 0;
                  return (
                    this.loadedmetadata && c
                      ? (D = c.currentTime)
                      : this.nextLoadPosition && (D = this.nextLoadPosition),
                    D
                  );
                }),
                (a.handleFragLoadAborted = function (c, D) {
                  this.transmuxer &&
                    c.sn !== "initSegment" &&
                    c.stats.aborted &&
                    (this.warn(
                      "Fragment " +
                        c.sn +
                        (D ? " part" + D.index : "") +
                        " of level " +
                        c.level +
                        " was aborted"
                    ),
                    this.resetFragmentLoading(c));
                }),
                (a.resetFragmentLoading = function (c) {
                  (!this.fragCurrent ||
                    (!this.fragContextChanged(c) &&
                      this.state !== d.FRAG_LOADING_WAITING_RETRY)) &&
                    (this.state = d.IDLE);
                }),
                (a.onFragmentOrKeyLoadError = function (c, D) {
                  if (!D.fatal) {
                    var x = D.frag;
                    if (!(!x || x.type !== c)) {
                      var I = this.fragCurrent;
                      console.assert(
                        I &&
                          x.sn === I.sn &&
                          x.level === I.level &&
                          x.urlId === I.urlId,
                        "Frag load error must match current frag to retry"
                      );
                      var F = this.config;
                      if (this.fragLoadError + 1 <= F.fragLoadingMaxRetry) {
                        this.loadedmetadata ||
                          ((this.startFragRequested = !1),
                          (this.nextLoadPosition = this.startPosition));
                        var _ = Math.min(
                          Math.pow(2, this.fragLoadError) *
                            F.fragLoadingRetryDelay,
                          F.fragLoadingMaxRetryTimeout
                        );
                        this.warn(
                          "Fragment " +
                            x.sn +
                            " of " +
                            c +
                            " " +
                            x.level +
                            " failed to load, retrying in " +
                            _ +
                            "ms"
                        ),
                          (this.retryDate = self.performance.now() + _),
                          this.fragLoadError++,
                          (this.state = d.FRAG_LOADING_WAITING_RETRY);
                      } else
                        D.levelRetry
                          ? (c === n.PlaylistLevelType.AUDIO &&
                              (this.fragCurrent = null),
                            (this.fragLoadError = 0),
                            (this.state = d.IDLE))
                          : (P.logger.error(
                              D.details +
                                " reaches max retry, redispatch as fatal ..."
                            ),
                            (D.fatal = !0),
                            this.hls.stopLoad(),
                            (this.state = d.ERROR));
                    }
                  }
                }),
                (a.afterBufferFlushed = function (c, D, x) {
                  if (!!c) {
                    var I = b.BufferHelper.getBuffered(c);
                    this.fragmentTracker.detectEvictedFragments(D, I, x),
                      this.state === d.ENDED && this.resetLoadingState();
                  }
                }),
                (a.resetLoadingState = function () {
                  (this.fragCurrent = null),
                    (this.fragPrevious = null),
                    (this.state = d.IDLE);
                }),
                (a.resetStartWhenNotLoaded = function (c) {
                  if (!this.loadedmetadata) {
                    this.startFragRequested = !1;
                    var D = this.levels ? this.levels[c].details : null;
                    D != null && D.live
                      ? ((this.startPosition = -1),
                        this.setStartPosition(D, 0),
                        this.resetLoadingState())
                      : (this.nextLoadPosition = this.startPosition);
                  }
                }),
                (a.updateLevelTiming = function (c, D, x, I) {
                  var F = this,
                    _ = x.details;
                  console.assert(!!_, "level.details must be defined");
                  var B = Object.keys(c.elementaryStreams).reduce(function (
                    U,
                    N
                  ) {
                    var w = c.elementaryStreams[N];
                    if (w) {
                      var k = w.endPTS - w.startPTS;
                      if (k <= 0)
                        return (
                          F.warn(
                            "Could not parse fragment " +
                              c.sn +
                              " " +
                              N +
                              " duration reliably (" +
                              k +
                              ")"
                          ),
                          U || !1
                        );
                      var K = I
                        ? 0
                        : Object(g.updateFragPTSDTS)(
                            _,
                            c,
                            w.startPTS,
                            w.endPTS,
                            w.startDTS,
                            w.endDTS
                          );
                      return (
                        F.hls.trigger(R.Events.LEVEL_PTS_UPDATED, {
                          details: _,
                          level: x,
                          drift: K,
                          type: N,
                          frag: c,
                          start: w.startPTS,
                          end: w.endPTS,
                        }),
                        !0
                      );
                    }
                    return U;
                  },
                  !1);
                  B ||
                    (this.warn(
                      "Found no media in fragment " +
                        c.sn +
                        " of level " +
                        x.id +
                        " resetting transmuxer to fallback to playlist timing"
                    ),
                    this.resetTransmuxer()),
                    (this.state = d.PARSED),
                    this.hls.trigger(R.Events.FRAG_PARSED, {
                      frag: c,
                      part: D,
                    });
                }),
                (a.resetTransmuxer = function () {
                  this.transmuxer &&
                    (this.transmuxer.destroy(), (this.transmuxer = null));
                }),
                v(u, [
                  {
                    key: "state",
                    get: function () {
                      return this._state;
                    },
                    set: function (c) {
                      var D = this._state;
                      D !== c && ((this._state = c), this.log(D + "->" + c));
                    },
                  },
                ]),
                u
              );
            })(O.default);
        },
        "./src/controller/buffer-controller.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "default", function () {
              return E;
            });
          var M = T("./src/polyfills/number.ts"),
            O = T("./src/events.ts"),
            L = T("./src/utils/logger.ts"),
            b = T("./src/errors.ts"),
            P = T("./src/utils/buffer-helper.ts"),
            R = T("./src/utils/mediasource-helper.ts"),
            A = T("./src/loader/fragment.ts"),
            p = T("./src/controller/buffer-operation-queue.ts"),
            y = Object(R.getMediaSource)(),
            S = /([ha]vc.)(?:\.[^.,]+)+/,
            E = (function () {
              function g(l) {
                var t = this;
                (this.details = null),
                  (this._objectUrl = null),
                  (this.operationQueue = void 0),
                  (this.listeners = void 0),
                  (this.hls = void 0),
                  (this.bufferCodecEventsExpected = 0),
                  (this._bufferCodecEventsTotal = 0),
                  (this.media = null),
                  (this.mediaSource = null),
                  (this.appendError = 0),
                  (this.tracks = {}),
                  (this.pendingTracks = {}),
                  (this.sourceBuffer = void 0),
                  (this._onMediaSourceOpen = function () {
                    var n = t.hls,
                      h = t.media,
                      v = t.mediaSource;
                    L.logger.log("[buffer-controller]: Media source opened"),
                      h &&
                        (t.updateMediaElementDuration(),
                        n.trigger(O.Events.MEDIA_ATTACHED, { media: h })),
                      v &&
                        v.removeEventListener(
                          "sourceopen",
                          t._onMediaSourceOpen
                        ),
                      t.checkPendingTracks();
                  }),
                  (this._onMediaSourceClose = function () {
                    L.logger.log("[buffer-controller]: Media source closed");
                  }),
                  (this._onMediaSourceEnded = function () {
                    L.logger.log("[buffer-controller]: Media source ended");
                  }),
                  (this.hls = l),
                  this._initSourceBuffer(),
                  this.registerListeners();
              }
              var m = g.prototype;
              return (
                (m.hasSourceTypes = function () {
                  return (
                    this.getSourceBufferTypes().length > 0 ||
                    Object.keys(this.pendingTracks).length > 0
                  );
                }),
                (m.destroy = function () {
                  this.unregisterListeners(), (this.details = null);
                }),
                (m.registerListeners = function () {
                  var t = this.hls;
                  t.on(O.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                    t.on(O.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                    t.on(O.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                    t.on(O.Events.BUFFER_RESET, this.onBufferReset, this),
                    t.on(
                      O.Events.BUFFER_APPENDING,
                      this.onBufferAppending,
                      this
                    ),
                    t.on(O.Events.BUFFER_CODECS, this.onBufferCodecs, this),
                    t.on(O.Events.BUFFER_EOS, this.onBufferEos, this),
                    t.on(O.Events.BUFFER_FLUSHING, this.onBufferFlushing, this),
                    t.on(O.Events.LEVEL_UPDATED, this.onLevelUpdated, this),
                    t.on(O.Events.FRAG_PARSED, this.onFragParsed, this),
                    t.on(O.Events.FRAG_CHANGED, this.onFragChanged, this);
                }),
                (m.unregisterListeners = function () {
                  var t = this.hls;
                  t.off(O.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                    t.off(
                      O.Events.MEDIA_DETACHING,
                      this.onMediaDetaching,
                      this
                    ),
                    t.off(
                      O.Events.MANIFEST_PARSED,
                      this.onManifestParsed,
                      this
                    ),
                    t.off(O.Events.BUFFER_RESET, this.onBufferReset, this),
                    t.off(
                      O.Events.BUFFER_APPENDING,
                      this.onBufferAppending,
                      this
                    ),
                    t.off(O.Events.BUFFER_CODECS, this.onBufferCodecs, this),
                    t.off(O.Events.BUFFER_EOS, this.onBufferEos, this),
                    t.off(
                      O.Events.BUFFER_FLUSHING,
                      this.onBufferFlushing,
                      this
                    ),
                    t.off(O.Events.LEVEL_UPDATED, this.onLevelUpdated, this),
                    t.off(O.Events.FRAG_PARSED, this.onFragParsed, this),
                    t.off(O.Events.FRAG_CHANGED, this.onFragChanged, this);
                }),
                (m._initSourceBuffer = function () {
                  (this.sourceBuffer = {}),
                    (this.operationQueue = new p.default(this.sourceBuffer)),
                    (this.listeners = { audio: [], video: [], audiovideo: [] });
                }),
                (m.onManifestParsed = function (t, n) {
                  var h = 2;
                  ((n.audio && !n.video) || !n.altAudio) && (h = 1),
                    (this.bufferCodecEventsExpected =
                      this._bufferCodecEventsTotal =
                        h),
                    (this.details = null),
                    L.logger.log(
                      this.bufferCodecEventsExpected +
                        " bufferCodec event(s) expected"
                    );
                }),
                (m.onMediaAttaching = function (t, n) {
                  var h = (this.media = n.media);
                  if (h && y) {
                    var v = (this.mediaSource = new y());
                    v.addEventListener("sourceopen", this._onMediaSourceOpen),
                      v.addEventListener(
                        "sourceended",
                        this._onMediaSourceEnded
                      ),
                      v.addEventListener(
                        "sourceclose",
                        this._onMediaSourceClose
                      ),
                      (h.src = self.URL.createObjectURL(v)),
                      (this._objectUrl = h.src);
                  }
                }),
                (m.onMediaDetaching = function () {
                  var t = this.media,
                    n = this.mediaSource,
                    h = this._objectUrl;
                  if (n) {
                    if (
                      (L.logger.log(
                        "[buffer-controller]: media source detaching"
                      ),
                      n.readyState === "open")
                    )
                      try {
                        n.endOfStream();
                      } catch (v) {
                        L.logger.warn(
                          "[buffer-controller]: onMediaDetaching: " +
                            v.message +
                            " while calling endOfStream"
                        );
                      }
                    this.onBufferReset(),
                      n.removeEventListener(
                        "sourceopen",
                        this._onMediaSourceOpen
                      ),
                      n.removeEventListener(
                        "sourceended",
                        this._onMediaSourceEnded
                      ),
                      n.removeEventListener(
                        "sourceclose",
                        this._onMediaSourceClose
                      ),
                      t &&
                        (h && self.URL.revokeObjectURL(h),
                        t.src === h
                          ? (t.removeAttribute("src"), t.load())
                          : L.logger.warn(
                              "[buffer-controller]: media.src was changed by a third party - skip cleanup"
                            )),
                      (this.mediaSource = null),
                      (this.media = null),
                      (this._objectUrl = null),
                      (this.bufferCodecEventsExpected =
                        this._bufferCodecEventsTotal),
                      (this.pendingTracks = {}),
                      (this.tracks = {});
                  }
                  this.hls.trigger(O.Events.MEDIA_DETACHED, void 0);
                }),
                (m.onBufferReset = function () {
                  var t = this;
                  this.getSourceBufferTypes().forEach(function (n) {
                    var h = t.sourceBuffer[n];
                    try {
                      h &&
                        (t.removeBufferListeners(n),
                        t.mediaSource && t.mediaSource.removeSourceBuffer(h),
                        (t.sourceBuffer[n] = void 0));
                    } catch (v) {
                      L.logger.warn(
                        "[buffer-controller]: Failed to reset the " +
                          n +
                          " buffer",
                        v
                      );
                    }
                  }),
                    this._initSourceBuffer();
                }),
                (m.onBufferCodecs = function (t, n) {
                  var h = this,
                    v = this.getSourceBufferTypes().length;
                  Object.keys(n).forEach(function (i) {
                    if (v) {
                      var r = h.tracks[i];
                      if (r && typeof r.buffer.changeType == "function") {
                        var o = n[i],
                          d = o.id,
                          e = o.codec,
                          s = o.levelCodec,
                          u = o.container,
                          a = o.metadata,
                          f = (r.levelCodec || r.codec).replace(S, "$1"),
                          c = (s || e).replace(S, "$1");
                        if (f !== c) {
                          var D = u + ";codecs=" + (s || e);
                          h.appendChangeType(i, D),
                            L.logger.log(
                              "[buffer-controller]: switching codec " +
                                f +
                                " to " +
                                c
                            ),
                            (h.tracks[i] = {
                              buffer: r.buffer,
                              codec: e,
                              container: u,
                              levelCodec: s,
                              metadata: a,
                              id: d,
                            });
                        }
                      }
                    } else h.pendingTracks[i] = n[i];
                  }),
                    !v &&
                      ((this.bufferCodecEventsExpected = Math.max(
                        this.bufferCodecEventsExpected - 1,
                        0
                      )),
                      this.mediaSource &&
                        this.mediaSource.readyState === "open" &&
                        this.checkPendingTracks());
                }),
                (m.appendChangeType = function (t, n) {
                  var h = this,
                    v = this.operationQueue,
                    i = {
                      execute: function () {
                        var o = h.sourceBuffer[t];
                        o &&
                          (L.logger.log(
                            "[buffer-controller]: changing " +
                              t +
                              " sourceBuffer type to " +
                              n
                          ),
                          o.changeType(n)),
                          v.shiftAndExecuteNext(t);
                      },
                      onStart: function () {},
                      onComplete: function () {},
                      onError: function (o) {
                        L.logger.warn(
                          "[buffer-controller]: Failed to change " +
                            t +
                            " SourceBuffer type",
                          o
                        );
                      },
                    };
                  v.append(i, t);
                }),
                (m.onBufferAppending = function (t, n) {
                  var h = this,
                    v = this.hls,
                    i = this.operationQueue,
                    r = this.tracks,
                    o = n.data,
                    d = n.type,
                    e = n.frag,
                    s = n.part,
                    u = n.chunkMeta,
                    a = u.buffering[d],
                    f = self.performance.now();
                  a.start = f;
                  var c = e.stats.buffering,
                    D = s ? s.stats.buffering : null;
                  c.start === 0 && (c.start = f),
                    D && D.start === 0 && (D.start = f);
                  var x = r.audio,
                    I =
                      d === "audio" &&
                      u.id === 1 &&
                      x?.container === "audio/mpeg",
                    F = {
                      execute: function () {
                        if (((a.executeStart = self.performance.now()), I)) {
                          var B = h.sourceBuffer[d];
                          if (B) {
                            var U = e.start - B.timestampOffset;
                            Math.abs(U) >= 0.1 &&
                              (L.logger.log(
                                "[buffer-controller]: Updating audio SourceBuffer timestampOffset to " +
                                  e.start +
                                  " (delta: " +
                                  U +
                                  ") sn: " +
                                  e.sn +
                                  ")"
                              ),
                              (B.timestampOffset = e.start));
                          }
                        }
                        h.appendExecutor(o, d);
                      },
                      onStart: function () {},
                      onComplete: function () {
                        var B = self.performance.now();
                        (a.executeEnd = a.end = B),
                          c.first === 0 && (c.first = B),
                          D && D.first === 0 && (D.first = B);
                        var U = h.sourceBuffer,
                          N = {};
                        for (var w in U)
                          N[w] = P.BufferHelper.getBuffered(U[w]);
                        (h.appendError = 0),
                          h.hls.trigger(O.Events.BUFFER_APPENDED, {
                            type: d,
                            frag: e,
                            part: s,
                            chunkMeta: u,
                            parent: e.type,
                            timeRanges: N,
                          });
                      },
                      onError: function (B) {
                        L.logger.error(
                          "[buffer-controller]: Error encountered while trying to append to the " +
                            d +
                            " SourceBuffer",
                          B
                        );
                        var U = {
                          type: b.ErrorTypes.MEDIA_ERROR,
                          parent: e.type,
                          details: b.ErrorDetails.BUFFER_APPEND_ERROR,
                          err: B,
                          fatal: !1,
                        };
                        B.code === DOMException.QUOTA_EXCEEDED_ERR
                          ? (U.details = b.ErrorDetails.BUFFER_FULL_ERROR)
                          : (h.appendError++,
                            (U.details = b.ErrorDetails.BUFFER_APPEND_ERROR),
                            h.appendError > v.config.appendErrorMaxRetry &&
                              (L.logger.error(
                                "[buffer-controller]: Failed " +
                                  v.config.appendErrorMaxRetry +
                                  " times to append segment in sourceBuffer"
                              ),
                              (U.fatal = !0),
                              v.stopLoad())),
                          v.trigger(O.Events.ERROR, U);
                      },
                    };
                  i.append(F, d);
                }),
                (m.onBufferFlushing = function (t, n) {
                  var h = this,
                    v = this.operationQueue,
                    i = function (o) {
                      return {
                        execute: h.removeExecutor.bind(
                          h,
                          o,
                          n.startOffset,
                          n.endOffset
                        ),
                        onStart: function () {},
                        onComplete: function () {
                          h.hls.trigger(O.Events.BUFFER_FLUSHED, { type: o });
                        },
                        onError: function (e) {
                          L.logger.warn(
                            "[buffer-controller]: Failed to remove from " +
                              o +
                              " SourceBuffer",
                            e
                          );
                        },
                      };
                    };
                  n.type
                    ? v.append(i(n.type), n.type)
                    : this.getSourceBufferTypes().forEach(function (r) {
                        v.append(i(r), r);
                      });
                }),
                (m.onFragParsed = function (t, n) {
                  var h = this,
                    v = n.frag,
                    i = n.part,
                    r = [],
                    o = i ? i.elementaryStreams : v.elementaryStreams;
                  o[A.ElementaryStreamTypes.AUDIOVIDEO]
                    ? r.push("audiovideo")
                    : (o[A.ElementaryStreamTypes.AUDIO] && r.push("audio"),
                      o[A.ElementaryStreamTypes.VIDEO] && r.push("video"));
                  var d = function () {
                    var s = self.performance.now();
                    (v.stats.buffering.end = s),
                      i && (i.stats.buffering.end = s);
                    var u = i ? i.stats : v.stats;
                    h.hls.trigger(O.Events.FRAG_BUFFERED, {
                      frag: v,
                      part: i,
                      stats: u,
                      id: v.type,
                    });
                  };
                  r.length === 0 &&
                    L.logger.warn(
                      "Fragments must have at least one ElementaryStreamType set. type: " +
                        v.type +
                        " level: " +
                        v.level +
                        " sn: " +
                        v.sn
                    ),
                    this.blockBuffers(d, r);
                }),
                (m.onFragChanged = function (t, n) {
                  this.flushBackBuffer();
                }),
                (m.onBufferEos = function (t, n) {
                  var h = this,
                    v = this.getSourceBufferTypes().reduce(function (i, r) {
                      var o = h.sourceBuffer[r];
                      return (
                        (!n.type || n.type === r) &&
                          o &&
                          !o.ended &&
                          ((o.ended = !0),
                          L.logger.log(
                            "[buffer-controller]: " +
                              r +
                              " sourceBuffer now EOS"
                          )),
                        i && !!(!o || o.ended)
                      );
                    }, !0);
                  v &&
                    this.blockBuffers(function () {
                      var i = h.mediaSource;
                      !i || i.readyState !== "open" || i.endOfStream();
                    });
                }),
                (m.onLevelUpdated = function (t, n) {
                  var h = n.details;
                  !h.fragments.length ||
                    ((this.details = h),
                    this.getSourceBufferTypes().length
                      ? this.blockBuffers(
                          this.updateMediaElementDuration.bind(this)
                        )
                      : this.updateMediaElementDuration());
                }),
                (m.flushBackBuffer = function () {
                  var t = this.hls,
                    n = this.details,
                    h = this.media,
                    v = this.sourceBuffer;
                  if (!(!h || n === null)) {
                    var i = this.getSourceBufferTypes();
                    if (!!i.length) {
                      var r =
                        n.live && t.config.liveBackBufferLength !== null
                          ? t.config.liveBackBufferLength
                          : t.config.backBufferLength;
                      if (!(!Object(M.isFiniteNumber)(r) || r < 0)) {
                        var o = h.currentTime,
                          d = n.levelTargetDuration,
                          e = Math.max(r, d),
                          s = Math.floor(o / d) * d - e;
                        i.forEach(function (u) {
                          var a = v[u];
                          if (a) {
                            var f = P.BufferHelper.getBuffered(a);
                            f.length > 0 &&
                              s > f.start(0) &&
                              (t.trigger(O.Events.BACK_BUFFER_REACHED, {
                                bufferEnd: s,
                              }),
                              n.live &&
                                t.trigger(O.Events.LIVE_BACK_BUFFER_REACHED, {
                                  bufferEnd: s,
                                }),
                              t.trigger(O.Events.BUFFER_FLUSHING, {
                                startOffset: 0,
                                endOffset: s,
                                type: u,
                              }));
                          }
                        });
                      }
                    }
                  }
                }),
                (m.updateMediaElementDuration = function () {
                  if (
                    !(
                      !this.details ||
                      !this.media ||
                      !this.mediaSource ||
                      this.mediaSource.readyState !== "open"
                    )
                  ) {
                    var t = this.details,
                      n = this.hls,
                      h = this.media,
                      v = this.mediaSource,
                      i = t.fragments[0].start + t.totalduration,
                      r = h.duration,
                      o = Object(M.isFiniteNumber)(v.duration) ? v.duration : 0;
                    t.live && n.config.liveDurationInfinity
                      ? (L.logger.log(
                          "[buffer-controller]: Media Source duration is set to Infinity"
                        ),
                        (v.duration = 1 / 0),
                        this.updateSeekableRange(t))
                      : ((i > o && i > r) || !Object(M.isFiniteNumber)(r)) &&
                        (L.logger.log(
                          "[buffer-controller]: Updating Media Source duration to " +
                            i.toFixed(3)
                        ),
                        (v.duration = i));
                  }
                }),
                (m.updateSeekableRange = function (t) {
                  var n = this.mediaSource,
                    h = t.fragments,
                    v = h.length;
                  if (
                    v &&
                    t.live &&
                    n !== null &&
                    n !== void 0 &&
                    n.setLiveSeekableRange
                  ) {
                    var i = Math.max(0, h[0].start),
                      r = Math.max(i, i + t.totalduration);
                    n.setLiveSeekableRange(i, r);
                  }
                }),
                (m.checkPendingTracks = function () {
                  var t = this.bufferCodecEventsExpected,
                    n = this.operationQueue,
                    h = this.pendingTracks,
                    v = Object.keys(h).length;
                  if ((v && !t) || v === 2) {
                    this.createSourceBuffers(h), (this.pendingTracks = {});
                    var i = this.getSourceBufferTypes();
                    if (i.length === 0) {
                      this.hls.trigger(O.Events.ERROR, {
                        type: b.ErrorTypes.MEDIA_ERROR,
                        details:
                          b.ErrorDetails.BUFFER_INCOMPATIBLE_CODECS_ERROR,
                        fatal: !0,
                        reason:
                          "could not create source buffer for media codec(s)",
                      });
                      return;
                    }
                    i.forEach(function (r) {
                      n.executeNext(r);
                    });
                  }
                }),
                (m.createSourceBuffers = function (t) {
                  var n = this.sourceBuffer,
                    h = this.mediaSource;
                  if (!h)
                    throw Error(
                      "createSourceBuffers called when mediaSource was null"
                    );
                  var v = 0;
                  for (var i in t)
                    if (!n[i]) {
                      var r = t[i];
                      if (!r)
                        throw Error(
                          "source buffer exists for track " +
                            i +
                            ", however track does not"
                        );
                      var o = r.levelCodec || r.codec,
                        d = r.container + ";codecs=" + o;
                      L.logger.log(
                        "[buffer-controller]: creating sourceBuffer(" + d + ")"
                      );
                      try {
                        var e = (n[i] = h.addSourceBuffer(d)),
                          s = i;
                        this.addBufferListener(
                          s,
                          "updatestart",
                          this._onSBUpdateStart
                        ),
                          this.addBufferListener(
                            s,
                            "updateend",
                            this._onSBUpdateEnd
                          ),
                          this.addBufferListener(
                            s,
                            "error",
                            this._onSBUpdateError
                          ),
                          (this.tracks[i] = {
                            buffer: e,
                            codec: o,
                            container: r.container,
                            levelCodec: r.levelCodec,
                            metadata: r.metadata,
                            id: r.id,
                          }),
                          v++;
                      } catch (u) {
                        L.logger.error(
                          "[buffer-controller]: error while trying to add sourceBuffer: " +
                            u.message
                        ),
                          this.hls.trigger(O.Events.ERROR, {
                            type: b.ErrorTypes.MEDIA_ERROR,
                            details: b.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                            fatal: !1,
                            error: u,
                            mimeType: d,
                          });
                      }
                    }
                  v &&
                    this.hls.trigger(O.Events.BUFFER_CREATED, {
                      tracks: this.tracks,
                    });
                }),
                (m._onSBUpdateStart = function (t) {
                  var n = this.operationQueue,
                    h = n.current(t);
                  h.onStart();
                }),
                (m._onSBUpdateEnd = function (t) {
                  var n = this.operationQueue,
                    h = n.current(t);
                  h.onComplete(), n.shiftAndExecuteNext(t);
                }),
                (m._onSBUpdateError = function (t, n) {
                  L.logger.error(
                    "[buffer-controller]: " + t + " SourceBuffer error",
                    n
                  ),
                    this.hls.trigger(O.Events.ERROR, {
                      type: b.ErrorTypes.MEDIA_ERROR,
                      details: b.ErrorDetails.BUFFER_APPENDING_ERROR,
                      fatal: !1,
                    });
                  var h = this.operationQueue.current(t);
                  h && h.onError(n);
                }),
                (m.removeExecutor = function (t, n, h) {
                  var v = this.media,
                    i = this.mediaSource,
                    r = this.operationQueue,
                    o = this.sourceBuffer,
                    d = o[t];
                  if (!v || !i || !d) {
                    L.logger.warn(
                      "[buffer-controller]: Attempting to remove from the " +
                        t +
                        " SourceBuffer, but it does not exist"
                    ),
                      r.shiftAndExecuteNext(t);
                    return;
                  }
                  var e = Object(M.isFiniteNumber)(v.duration)
                      ? v.duration
                      : 1 / 0,
                    s = Object(M.isFiniteNumber)(i.duration)
                      ? i.duration
                      : 1 / 0,
                    u = Math.max(0, n),
                    a = Math.min(h, e, s);
                  a > u
                    ? (L.logger.log(
                        "[buffer-controller]: Removing [" +
                          u +
                          "," +
                          a +
                          "] from the " +
                          t +
                          " SourceBuffer"
                      ),
                      console.assert(
                        !d.updating,
                        t + " sourceBuffer must not be updating"
                      ),
                      d.remove(u, a))
                    : r.shiftAndExecuteNext(t);
                }),
                (m.appendExecutor = function (t, n) {
                  var h = this.operationQueue,
                    v = this.sourceBuffer,
                    i = v[n];
                  if (!i) {
                    L.logger.warn(
                      "[buffer-controller]: Attempting to append to the " +
                        n +
                        " SourceBuffer, but it does not exist"
                    ),
                      h.shiftAndExecuteNext(n);
                    return;
                  }
                  (i.ended = !1),
                    console.assert(
                      !i.updating,
                      n + " sourceBuffer must not be updating"
                    ),
                    i.appendBuffer(t);
                }),
                (m.blockBuffers = function (t, n) {
                  var h = this;
                  if (
                    (n === void 0 && (n = this.getSourceBufferTypes()),
                    !n.length)
                  ) {
                    L.logger.log(
                      "[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"
                    ),
                      Promise.resolve().then(t);
                    return;
                  }
                  var v = this.operationQueue,
                    i = n.map(function (r) {
                      return v.appendBlocker(r);
                    });
                  Promise.all(i).then(function () {
                    t(),
                      n.forEach(function (r) {
                        var o = h.sourceBuffer[r];
                        (!o || !o.updating) && v.shiftAndExecuteNext(r);
                      });
                  });
                }),
                (m.getSourceBufferTypes = function () {
                  return Object.keys(this.sourceBuffer);
                }),
                (m.addBufferListener = function (t, n, h) {
                  var v = this.sourceBuffer[t];
                  if (!!v) {
                    var i = h.bind(this, t);
                    this.listeners[t].push({ event: n, listener: i }),
                      v.addEventListener(n, i);
                  }
                }),
                (m.removeBufferListeners = function (t) {
                  var n = this.sourceBuffer[t];
                  !n ||
                    this.listeners[t].forEach(function (h) {
                      n.removeEventListener(h.event, h.listener);
                    });
                }),
                g
              );
            })();
        },
        "./src/controller/buffer-operation-queue.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "default", function () {
              return O;
            });
          var M = T("./src/utils/logger.ts"),
            O = (function () {
              function L(P) {
                (this.buffers = void 0),
                  (this.queues = { video: [], audio: [], audiovideo: [] }),
                  (this.buffers = P);
              }
              var b = L.prototype;
              return (
                (b.append = function (R, A) {
                  var p = this.queues[A];
                  p.push(R),
                    p.length === 1 && this.buffers[A] && this.executeNext(A);
                }),
                (b.insertAbort = function (R, A) {
                  var p = this.queues[A];
                  p.unshift(R), this.executeNext(A);
                }),
                (b.appendBlocker = function (R) {
                  var A,
                    p = new Promise(function (S) {
                      A = S;
                    }),
                    y = {
                      execute: A,
                      onStart: function () {},
                      onComplete: function () {},
                      onError: function () {},
                    };
                  return this.append(y, R), p;
                }),
                (b.executeNext = function (R) {
                  var A = this.buffers,
                    p = this.queues,
                    y = A[R],
                    S = p[R];
                  if (S.length) {
                    var E = S[0];
                    try {
                      E.execute();
                    } catch (g) {
                      M.logger.warn(
                        "[buffer-operation-queue]: Unhandled exception executing the current operation"
                      ),
                        E.onError(g),
                        (!y || !y.updating) && (S.shift(), this.executeNext(R));
                    }
                  }
                }),
                (b.shiftAndExecuteNext = function (R) {
                  this.queues[R].shift(), this.executeNext(R);
                }),
                (b.current = function (R) {
                  return this.queues[R][0];
                }),
                L
              );
            })();
        },
        "./src/controller/cap-level-controller.ts": function (W, C, T) {
          "use strict";
          T.r(C);
          var M = T("./src/events.ts");
          function O(P, R) {
            for (var A = 0; A < R.length; A++) {
              var p = R[A];
              (p.enumerable = p.enumerable || !1),
                (p.configurable = !0),
                "value" in p && (p.writable = !0),
                Object.defineProperty(P, p.key, p);
            }
          }
          function L(P, R, A) {
            return (
              R && O(P.prototype, R),
              A && O(P, A),
              Object.defineProperty(P, "prototype", { writable: !1 }),
              P
            );
          }
          var b = (function () {
            function P(A) {
              (this.autoLevelCapping = void 0),
                (this.firstLevel = void 0),
                (this.media = void 0),
                (this.restrictedLevels = void 0),
                (this.timer = void 0),
                (this.hls = void 0),
                (this.streamController = void 0),
                (this.clientRect = void 0),
                (this.hls = A),
                (this.autoLevelCapping = Number.POSITIVE_INFINITY),
                (this.firstLevel = -1),
                (this.media = null),
                (this.restrictedLevels = []),
                (this.timer = void 0),
                (this.clientRect = null),
                this.registerListeners();
            }
            var R = P.prototype;
            return (
              (R.setStreamController = function (p) {
                this.streamController = p;
              }),
              (R.destroy = function () {
                this.unregisterListener(),
                  this.hls.config.capLevelToPlayerSize && this.stopCapping(),
                  (this.media = null),
                  (this.clientRect = null),
                  (this.hls = this.streamController = null);
              }),
              (R.registerListeners = function () {
                var p = this.hls;
                p.on(
                  M.Events.FPS_DROP_LEVEL_CAPPING,
                  this.onFpsDropLevelCapping,
                  this
                ),
                  p.on(M.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                  p.on(M.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                  p.on(M.Events.BUFFER_CODECS, this.onBufferCodecs, this),
                  p.on(M.Events.MEDIA_DETACHING, this.onMediaDetaching, this);
              }),
              (R.unregisterListener = function () {
                var p = this.hls;
                p.off(
                  M.Events.FPS_DROP_LEVEL_CAPPING,
                  this.onFpsDropLevelCapping,
                  this
                ),
                  p.off(M.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                  p.off(M.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                  p.off(M.Events.BUFFER_CODECS, this.onBufferCodecs, this),
                  p.off(M.Events.MEDIA_DETACHING, this.onMediaDetaching, this);
              }),
              (R.onFpsDropLevelCapping = function (p, y) {
                P.isLevelAllowed(y.droppedLevel, this.restrictedLevels) &&
                  this.restrictedLevels.push(y.droppedLevel);
              }),
              (R.onMediaAttaching = function (p, y) {
                this.media =
                  y.media instanceof HTMLVideoElement ? y.media : null;
              }),
              (R.onManifestParsed = function (p, y) {
                var S = this.hls;
                (this.restrictedLevels = []),
                  (this.firstLevel = y.firstLevel),
                  S.config.capLevelToPlayerSize &&
                    y.video &&
                    this.startCapping();
              }),
              (R.onBufferCodecs = function (p, y) {
                var S = this.hls;
                S.config.capLevelToPlayerSize && y.video && this.startCapping();
              }),
              (R.onMediaDetaching = function () {
                this.stopCapping();
              }),
              (R.detectPlayerSize = function () {
                if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
                  var p = this.hls.levels;
                  if (p.length) {
                    var y = this.hls;
                    (y.autoLevelCapping = this.getMaxLevel(p.length - 1)),
                      y.autoLevelCapping > this.autoLevelCapping &&
                        this.streamController &&
                        this.streamController.nextLevelSwitch(),
                      (this.autoLevelCapping = y.autoLevelCapping);
                  }
                }
              }),
              (R.getMaxLevel = function (p) {
                var y = this,
                  S = this.hls.levels;
                if (!S.length) return -1;
                var E = S.filter(function (g, m) {
                  return P.isLevelAllowed(m, y.restrictedLevels) && m <= p;
                });
                return (
                  (this.clientRect = null),
                  P.getMaxLevelByMediaSize(E, this.mediaWidth, this.mediaHeight)
                );
              }),
              (R.startCapping = function () {
                this.timer ||
                  ((this.autoLevelCapping = Number.POSITIVE_INFINITY),
                  (this.hls.firstLevel = this.getMaxLevel(this.firstLevel)),
                  self.clearInterval(this.timer),
                  (this.timer = self.setInterval(
                    this.detectPlayerSize.bind(this),
                    1e3
                  )),
                  this.detectPlayerSize());
              }),
              (R.stopCapping = function () {
                (this.restrictedLevels = []),
                  (this.firstLevel = -1),
                  (this.autoLevelCapping = Number.POSITIVE_INFINITY),
                  this.timer &&
                    (self.clearInterval(this.timer), (this.timer = void 0));
              }),
              (R.getDimensions = function () {
                if (this.clientRect) return this.clientRect;
                var p = this.media,
                  y = { width: 0, height: 0 };
                if (p) {
                  var S = p.getBoundingClientRect();
                  (y.width = S.width),
                    (y.height = S.height),
                    !y.width &&
                      !y.height &&
                      ((y.width = S.right - S.left || p.width || 0),
                      (y.height = S.bottom - S.top || p.height || 0));
                }
                return (this.clientRect = y), y;
              }),
              (P.isLevelAllowed = function (p, y) {
                return y === void 0 && (y = []), y.indexOf(p) === -1;
              }),
              (P.getMaxLevelByMediaSize = function (p, y, S) {
                if (!p || !p.length) return -1;
                for (
                  var E = function (n, h) {
                      return h
                        ? n.width !== h.width || n.height !== h.height
                        : !0;
                    },
                    g = p.length - 1,
                    m = 0;
                  m < p.length;
                  m += 1
                ) {
                  var l = p[m];
                  if ((l.width >= y || l.height >= S) && E(l, p[m + 1])) {
                    g = m;
                    break;
                  }
                }
                return g;
              }),
              L(P, [
                {
                  key: "mediaWidth",
                  get: function () {
                    return this.getDimensions().width * this.contentScaleFactor;
                  },
                },
                {
                  key: "mediaHeight",
                  get: function () {
                    return (
                      this.getDimensions().height * this.contentScaleFactor
                    );
                  },
                },
                {
                  key: "contentScaleFactor",
                  get: function () {
                    var p = 1;
                    if (!this.hls.config.ignoreDevicePixelRatio)
                      try {
                        p = self.devicePixelRatio;
                      } catch {}
                    return p;
                  },
                },
              ]),
              P
            );
          })();
          C.default = b;
        },
        "./src/controller/cmcd-controller.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "default", function () {
              return E;
            });
          var M = T("./src/events.ts"),
            O = T("./src/types/cmcd.ts"),
            L = T("./src/utils/buffer-helper.ts"),
            b = T("./src/utils/logger.ts");
          function P(g, m) {
            for (var l = 0; l < m.length; l++) {
              var t = m[l];
              (t.enumerable = t.enumerable || !1),
                (t.configurable = !0),
                "value" in t && (t.writable = !0),
                Object.defineProperty(g, t.key, t);
            }
          }
          function R(g, m, l) {
            return (
              m && P(g.prototype, m),
              l && P(g, l),
              Object.defineProperty(g, "prototype", { writable: !1 }),
              g
            );
          }
          function A(g, m) {
            var l =
              (typeof Symbol < "u" && g[Symbol.iterator]) || g["@@iterator"];
            if (l) return (l = l.call(g)).next.bind(l);
            if (
              Array.isArray(g) ||
              (l = p(g)) ||
              (m && g && typeof g.length == "number")
            ) {
              l && (g = l);
              var t = 0;
              return function () {
                return t >= g.length
                  ? { done: !0 }
                  : { done: !1, value: g[t++] };
              };
            }
            throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          function p(g, m) {
            if (!!g) {
              if (typeof g == "string") return y(g, m);
              var l = Object.prototype.toString.call(g).slice(8, -1);
              if (
                (l === "Object" && g.constructor && (l = g.constructor.name),
                l === "Map" || l === "Set")
              )
                return Array.from(g);
              if (
                l === "Arguments" ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)
              )
                return y(g, m);
            }
          }
          function y(g, m) {
            (m == null || m > g.length) && (m = g.length);
            for (var l = 0, t = new Array(m); l < m; l++) t[l] = g[l];
            return t;
          }
          function S() {
            return (
              (S = Object.assign
                ? Object.assign.bind()
                : function (g) {
                    for (var m = 1; m < arguments.length; m++) {
                      var l = arguments[m];
                      for (var t in l)
                        Object.prototype.hasOwnProperty.call(l, t) &&
                          (g[t] = l[t]);
                    }
                    return g;
                  }),
              S.apply(this, arguments)
            );
          }
          var E = (function () {
            function g(l) {
              var t = this;
              (this.hls = void 0),
                (this.config = void 0),
                (this.media = void 0),
                (this.sid = void 0),
                (this.cid = void 0),
                (this.useHeaders = !1),
                (this.initialized = !1),
                (this.starved = !1),
                (this.buffering = !0),
                (this.audioBuffer = void 0),
                (this.videoBuffer = void 0),
                (this.onWaiting = function () {
                  t.initialized && (t.starved = !0), (t.buffering = !0);
                }),
                (this.onPlaying = function () {
                  t.initialized || (t.initialized = !0), (t.buffering = !1);
                }),
                (this.applyPlaylistData = function (v) {
                  try {
                    t.apply(v, {
                      ot: O.CMCDObjectType.MANIFEST,
                      su: !t.initialized,
                    });
                  } catch (i) {
                    b.logger.warn("Could not generate manifest CMCD data.", i);
                  }
                }),
                (this.applyFragmentData = function (v) {
                  try {
                    var i = v.frag,
                      r = t.hls.levels[i.level],
                      o = t.getObjectType(i),
                      d = { d: i.duration * 1e3, ot: o };
                    (o === O.CMCDObjectType.VIDEO ||
                      o === O.CMCDObjectType.AUDIO ||
                      o == O.CMCDObjectType.MUXED) &&
                      ((d.br = r.bitrate / 1e3),
                      (d.tb = t.getTopBandwidth(o) / 1e3),
                      (d.bl = t.getBufferLength(o))),
                      t.apply(v, d);
                  } catch (e) {
                    b.logger.warn("Could not generate segment CMCD data.", e);
                  }
                }),
                (this.hls = l);
              var n = (this.config = l.config),
                h = n.cmcd;
              h != null &&
                ((n.pLoader = this.createPlaylistLoader()),
                (n.fLoader = this.createFragmentLoader()),
                (this.sid = h.sessionId || g.uuid()),
                (this.cid = h.contentId),
                (this.useHeaders = h.useHeaders === !0),
                this.registerListeners());
            }
            var m = g.prototype;
            return (
              (m.registerListeners = function () {
                var t = this.hls;
                t.on(M.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                  t.on(M.Events.MEDIA_DETACHED, this.onMediaDetached, this),
                  t.on(M.Events.BUFFER_CREATED, this.onBufferCreated, this);
              }),
              (m.unregisterListeners = function () {
                var t = this.hls;
                t.off(M.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                  t.off(M.Events.MEDIA_DETACHED, this.onMediaDetached, this),
                  t.off(M.Events.BUFFER_CREATED, this.onBufferCreated, this),
                  this.onMediaDetached();
              }),
              (m.destroy = function () {
                this.unregisterListeners(),
                  (this.hls =
                    this.config =
                    this.audioBuffer =
                    this.videoBuffer =
                      null);
              }),
              (m.onMediaAttached = function (t, n) {
                (this.media = n.media),
                  this.media.addEventListener("waiting", this.onWaiting),
                  this.media.addEventListener("playing", this.onPlaying);
              }),
              (m.onMediaDetached = function () {
                !this.media ||
                  (this.media.removeEventListener("waiting", this.onWaiting),
                  this.media.removeEventListener("playing", this.onPlaying),
                  (this.media = null));
              }),
              (m.onBufferCreated = function (t, n) {
                var h, v;
                (this.audioBuffer =
                  (h = n.tracks.audio) === null || h === void 0
                    ? void 0
                    : h.buffer),
                  (this.videoBuffer =
                    (v = n.tracks.video) === null || v === void 0
                      ? void 0
                      : v.buffer);
              }),
              (m.createData = function () {
                var t;
                return {
                  v: O.CMCDVersion,
                  sf: O.CMCDStreamingFormat.HLS,
                  sid: this.sid,
                  cid: this.cid,
                  pr:
                    (t = this.media) === null || t === void 0
                      ? void 0
                      : t.playbackRate,
                  mtp: this.hls.bandwidthEstimate / 1e3,
                };
              }),
              (m.apply = function (t, n) {
                n === void 0 && (n = {}), S(n, this.createData());
                var h =
                  n.ot === O.CMCDObjectType.INIT ||
                  n.ot === O.CMCDObjectType.VIDEO ||
                  n.ot === O.CMCDObjectType.MUXED;
                if (
                  (this.starved &&
                    h &&
                    ((n.bs = !0), (n.su = !0), (this.starved = !1)),
                  n.su == null && (n.su = this.buffering),
                  this.useHeaders)
                ) {
                  var v = g.toHeaders(n);
                  if (!Object.keys(v).length) return;
                  t.headers || (t.headers = {}), S(t.headers, v);
                } else {
                  var i = g.toQuery(n);
                  if (!i) return;
                  t.url = g.appendQueryToUri(t.url, i);
                }
              }),
              (m.getObjectType = function (t) {
                var n = t.type;
                if (n === "subtitle") return O.CMCDObjectType.TIMED_TEXT;
                if (t.sn === "initSegment") return O.CMCDObjectType.INIT;
                if (n === "audio") return O.CMCDObjectType.AUDIO;
                if (n === "main")
                  return this.hls.audioTracks.length
                    ? O.CMCDObjectType.VIDEO
                    : O.CMCDObjectType.MUXED;
              }),
              (m.getTopBandwidth = function (t) {
                var n = 0,
                  h,
                  v = this.hls;
                if (t === O.CMCDObjectType.AUDIO) h = v.audioTracks;
                else {
                  var i = v.maxAutoLevel,
                    r = i > -1 ? i + 1 : v.levels.length;
                  h = v.levels.slice(0, r);
                }
                for (var o = A(h), d; !(d = o()).done; ) {
                  var e = d.value;
                  e.bitrate > n && (n = e.bitrate);
                }
                return n > 0 ? n : NaN;
              }),
              (m.getBufferLength = function (t) {
                var n = this.hls.media,
                  h =
                    t === O.CMCDObjectType.AUDIO
                      ? this.audioBuffer
                      : this.videoBuffer;
                if (!h || !n) return NaN;
                var v = L.BufferHelper.bufferInfo(
                  h,
                  n.currentTime,
                  this.config.maxBufferHole
                );
                return v.len * 1e3;
              }),
              (m.createPlaylistLoader = function () {
                var t = this.config.pLoader,
                  n = this.applyPlaylistData,
                  h = t || this.config.loader;
                return (function () {
                  function v(r) {
                    (this.loader = void 0), (this.loader = new h(r));
                  }
                  var i = v.prototype;
                  return (
                    (i.destroy = function () {
                      this.loader.destroy();
                    }),
                    (i.abort = function () {
                      this.loader.abort();
                    }),
                    (i.load = function (o, d, e) {
                      n(o), this.loader.load(o, d, e);
                    }),
                    R(v, [
                      {
                        key: "stats",
                        get: function () {
                          return this.loader.stats;
                        },
                      },
                      {
                        key: "context",
                        get: function () {
                          return this.loader.context;
                        },
                      },
                    ]),
                    v
                  );
                })();
              }),
              (m.createFragmentLoader = function () {
                var t = this.config.fLoader,
                  n = this.applyFragmentData,
                  h = t || this.config.loader;
                return (function () {
                  function v(r) {
                    (this.loader = void 0), (this.loader = new h(r));
                  }
                  var i = v.prototype;
                  return (
                    (i.destroy = function () {
                      this.loader.destroy();
                    }),
                    (i.abort = function () {
                      this.loader.abort();
                    }),
                    (i.load = function (o, d, e) {
                      n(o), this.loader.load(o, d, e);
                    }),
                    R(v, [
                      {
                        key: "stats",
                        get: function () {
                          return this.loader.stats;
                        },
                      },
                      {
                        key: "context",
                        get: function () {
                          return this.loader.context;
                        },
                      },
                    ]),
                    v
                  );
                })();
              }),
              (g.uuid = function () {
                var t = URL.createObjectURL(new Blob()),
                  n = t.toString();
                return URL.revokeObjectURL(t), n.slice(n.lastIndexOf("/") + 1);
              }),
              (g.serialize = function (t) {
                for (
                  var n = [],
                    h = function (I) {
                      return (
                        !Number.isNaN(I) && I != null && I !== "" && I !== !1
                      );
                    },
                    v = function (I) {
                      return Math.round(I);
                    },
                    i = function (I) {
                      return v(I / 100) * 100;
                    },
                    r = function (I) {
                      return encodeURIComponent(I);
                    },
                    o = {
                      br: v,
                      d: v,
                      bl: i,
                      dl: i,
                      mtp: i,
                      nor: r,
                      rtp: i,
                      tb: v,
                    },
                    d = Object.keys(t || {}).sort(),
                    e = A(d),
                    s;
                  !(s = e()).done;

                ) {
                  var u = s.value,
                    a = t[u];
                  if (
                    !!h(a) &&
                    !(u === "v" && a === 1) &&
                    !(u == "pr" && a === 1)
                  ) {
                    var f = o[u];
                    f && (a = f(a));
                    var c = typeof a,
                      D = void 0;
                    u === "ot" || u === "sf" || u === "st"
                      ? (D = u + "=" + a)
                      : c === "boolean"
                      ? (D = u)
                      : c === "number"
                      ? (D = u + "=" + a)
                      : (D = u + "=" + JSON.stringify(a)),
                      n.push(D);
                  }
                }
                return n.join(",");
              }),
              (g.toHeaders = function (t) {
                for (
                  var n = Object.keys(t),
                    h = {},
                    v = ["Object", "Request", "Session", "Status"],
                    i = [{}, {}, {}, {}],
                    r = {
                      br: 0,
                      d: 0,
                      ot: 0,
                      tb: 0,
                      bl: 1,
                      dl: 1,
                      mtp: 1,
                      nor: 1,
                      nrr: 1,
                      su: 1,
                      cid: 2,
                      pr: 2,
                      sf: 2,
                      sid: 2,
                      st: 2,
                      v: 2,
                      bs: 3,
                      rtp: 3,
                    },
                    o = 0,
                    d = n;
                  o < d.length;
                  o++
                ) {
                  var e = d[o],
                    s = r[e] != null ? r[e] : 1;
                  i[s][e] = t[e];
                }
                for (var u = 0; u < i.length; u++) {
                  var a = g.serialize(i[u]);
                  a && (h["CMCD-" + v[u]] = a);
                }
                return h;
              }),
              (g.toQuery = function (t) {
                return "CMCD=" + encodeURIComponent(g.serialize(t));
              }),
              (g.appendQueryToUri = function (t, n) {
                if (!n) return t;
                var h = t.includes("?") ? "&" : "?";
                return "" + t + h + n;
              }),
              g
            );
          })();
        },
        "./src/controller/eme-controller.ts": function (W, C, T) {
          "use strict";
          T.r(C);
          var M = T("./src/events.ts"),
            O = T("./src/errors.ts"),
            L = T("./src/utils/logger.ts"),
            b = T("./src/utils/mediakeys-helper.ts");
          function P(E, g) {
            for (var m = 0; m < g.length; m++) {
              var l = g[m];
              (l.enumerable = l.enumerable || !1),
                (l.configurable = !0),
                "value" in l && (l.writable = !0),
                Object.defineProperty(E, l.key, l);
            }
          }
          function R(E, g, m) {
            return (
              g && P(E.prototype, g),
              m && P(E, m),
              Object.defineProperty(E, "prototype", { writable: !1 }),
              E
            );
          }
          var A = 3,
            p = function (g, m, l) {
              var t = { audioCapabilities: [], videoCapabilities: [] };
              return (
                g.forEach(function (n) {
                  t.audioCapabilities.push({
                    contentType: 'audio/mp4; codecs="' + n + '"',
                    robustness: l.audioRobustness || "",
                  });
                }),
                m.forEach(function (n) {
                  t.videoCapabilities.push({
                    contentType: 'video/mp4; codecs="' + n + '"',
                    robustness: l.videoRobustness || "",
                  });
                }),
                [t]
              );
            },
            y = function (g, m, l, t) {
              switch (g) {
                case b.KeySystems.WIDEVINE:
                  return p(m, l, t);
                default:
                  throw new Error("Unknown key-system: " + g);
              }
            },
            S = (function () {
              function E(m) {
                (this.hls = void 0),
                  (this._widevineLicenseUrl = void 0),
                  (this._licenseXhrSetup = void 0),
                  (this._licenseResponseCallback = void 0),
                  (this._emeEnabled = void 0),
                  (this._requestMediaKeySystemAccess = void 0),
                  (this._drmSystemOptions = void 0),
                  (this._config = void 0),
                  (this._mediaKeysList = []),
                  (this._media = null),
                  (this._hasSetMediaKeys = !1),
                  (this._requestLicenseFailureCount = 0),
                  (this.mediaKeysPromise = null),
                  (this._onMediaEncrypted = this.onMediaEncrypted.bind(this)),
                  (this.hls = m),
                  (this._config = m.config),
                  (this._widevineLicenseUrl = this._config.widevineLicenseUrl),
                  (this._licenseXhrSetup = this._config.licenseXhrSetup),
                  (this._licenseResponseCallback =
                    this._config.licenseResponseCallback),
                  (this._emeEnabled = this._config.emeEnabled),
                  (this._requestMediaKeySystemAccess =
                    this._config.requestMediaKeySystemAccessFunc),
                  (this._drmSystemOptions = this._config.drmSystemOptions),
                  this._registerListeners();
              }
              var g = E.prototype;
              return (
                (g.destroy = function () {
                  this._unregisterListeners(),
                    (this.hls = this._onMediaEncrypted = null),
                    (this._requestMediaKeySystemAccess = null);
                }),
                (g._registerListeners = function () {
                  this.hls.on(
                    M.Events.MEDIA_ATTACHED,
                    this.onMediaAttached,
                    this
                  ),
                    this.hls.on(
                      M.Events.MEDIA_DETACHED,
                      this.onMediaDetached,
                      this
                    ),
                    this.hls.on(
                      M.Events.MANIFEST_PARSED,
                      this.onManifestParsed,
                      this
                    );
                }),
                (g._unregisterListeners = function () {
                  this.hls.off(
                    M.Events.MEDIA_ATTACHED,
                    this.onMediaAttached,
                    this
                  ),
                    this.hls.off(
                      M.Events.MEDIA_DETACHED,
                      this.onMediaDetached,
                      this
                    ),
                    this.hls.off(
                      M.Events.MANIFEST_PARSED,
                      this.onManifestParsed,
                      this
                    );
                }),
                (g.getLicenseServerUrl = function (l) {
                  switch (l) {
                    case b.KeySystems.WIDEVINE:
                      if (!this._widevineLicenseUrl) break;
                      return this._widevineLicenseUrl;
                  }
                  throw new Error(
                    'no license server URL configured for key-system "' +
                      l +
                      '"'
                  );
                }),
                (g._attemptKeySystemAccess = function (l, t, n) {
                  var h = this,
                    v = y(l, t, n, this._drmSystemOptions);
                  L.logger.log("Requesting encrypted media key-system access");
                  var i = this.requestMediaKeySystemAccess(l, v);
                  (this.mediaKeysPromise = i.then(function (r) {
                    return h._onMediaKeySystemAccessObtained(l, r);
                  })),
                    i.catch(function (r) {
                      L.logger.error(
                        'Failed to obtain key-system "' + l + '" access:',
                        r
                      );
                    });
                }),
                (g._onMediaKeySystemAccessObtained = function (l, t) {
                  var n = this;
                  L.logger.log('Access for key-system "' + l + '" obtained');
                  var h = {
                    mediaKeysSessionInitialized: !1,
                    mediaKeySystemAccess: t,
                    mediaKeySystemDomain: l,
                  };
                  this._mediaKeysList.push(h);
                  var v = Promise.resolve()
                    .then(function () {
                      return t.createMediaKeys();
                    })
                    .then(function (i) {
                      return (
                        (h.mediaKeys = i),
                        L.logger.log(
                          'Media-keys created for key-system "' + l + '"'
                        ),
                        n._onMediaKeysCreated(),
                        i
                      );
                    });
                  return (
                    v.catch(function (i) {
                      L.logger.error("Failed to create media-keys:", i);
                    }),
                    v
                  );
                }),
                (g._onMediaKeysCreated = function () {
                  var l = this;
                  this._mediaKeysList.forEach(function (t) {
                    t.mediaKeysSession ||
                      ((t.mediaKeysSession = t.mediaKeys.createSession()),
                      l._onNewMediaKeySession(t.mediaKeysSession));
                  });
                }),
                (g._onNewMediaKeySession = function (l) {
                  var t = this;
                  L.logger.log("New key-system session " + l.sessionId),
                    l.addEventListener(
                      "message",
                      function (n) {
                        t._onKeySessionMessage(l, n.message);
                      },
                      !1
                    );
                }),
                (g._onKeySessionMessage = function (l, t) {
                  L.logger.log(
                    "Got EME message event, creating license request"
                  ),
                    this._requestLicense(t, function (n) {
                      L.logger.log(
                        "Received license data (length: " +
                          (n && n.byteLength) +
                          "), updating key-session"
                      ),
                        l.update(n).catch(function (h) {
                          L.logger.warn("Updating key-session failed: " + h);
                        });
                    });
                }),
                (g.onMediaEncrypted = function (l) {
                  var t = this;
                  if (
                    (L.logger.log(
                      'Media is encrypted using "' +
                        l.initDataType +
                        '" init data type'
                    ),
                    !this.mediaKeysPromise)
                  ) {
                    L.logger.error(
                      "Fatal: Media is encrypted but no CDM access or no keys have been requested"
                    ),
                      this.hls.trigger(M.Events.ERROR, {
                        type: O.ErrorTypes.KEY_SYSTEM_ERROR,
                        details: O.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                        fatal: !0,
                      });
                    return;
                  }
                  var n = function (v) {
                    !t._media ||
                      (t._attemptSetMediaKeys(v),
                      t._generateRequestWithPreferredKeySession(
                        l.initDataType,
                        l.initData
                      ));
                  };
                  this.mediaKeysPromise.then(n).catch(n);
                }),
                (g._attemptSetMediaKeys = function (l) {
                  if (!this._media)
                    throw new Error(
                      "Attempted to set mediaKeys without first attaching a media element"
                    );
                  if (!this._hasSetMediaKeys) {
                    var t = this._mediaKeysList[0];
                    if (!t || !t.mediaKeys) {
                      L.logger.error(
                        "Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"
                      ),
                        this.hls.trigger(M.Events.ERROR, {
                          type: O.ErrorTypes.KEY_SYSTEM_ERROR,
                          details: O.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                          fatal: !0,
                        });
                      return;
                    }
                    L.logger.log("Setting keys for encrypted media"),
                      this._media.setMediaKeys(t.mediaKeys),
                      (this._hasSetMediaKeys = !0);
                  }
                }),
                (g._generateRequestWithPreferredKeySession = function (l, t) {
                  var n = this,
                    h = this._mediaKeysList[0];
                  if (!h) {
                    L.logger.error(
                      "Fatal: Media is encrypted but not any key-system access has been obtained yet"
                    ),
                      this.hls.trigger(M.Events.ERROR, {
                        type: O.ErrorTypes.KEY_SYSTEM_ERROR,
                        details: O.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                        fatal: !0,
                      });
                    return;
                  }
                  if (h.mediaKeysSessionInitialized) {
                    L.logger.warn(
                      "Key-Session already initialized but requested again"
                    );
                    return;
                  }
                  var v = h.mediaKeysSession;
                  if (!v) {
                    L.logger.error(
                      "Fatal: Media is encrypted but no key-session existing"
                    ),
                      this.hls.trigger(M.Events.ERROR, {
                        type: O.ErrorTypes.KEY_SYSTEM_ERROR,
                        details: O.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                        fatal: !0,
                      });
                    return;
                  }
                  if (!t) {
                    L.logger.warn(
                      "Fatal: initData required for generating a key session is null"
                    ),
                      this.hls.trigger(M.Events.ERROR, {
                        type: O.ErrorTypes.KEY_SYSTEM_ERROR,
                        details: O.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA,
                        fatal: !0,
                      });
                    return;
                  }
                  L.logger.log(
                    'Generating key-session request for "' +
                      l +
                      '" init data type'
                  ),
                    (h.mediaKeysSessionInitialized = !0),
                    v
                      .generateRequest(l, t)
                      .then(function () {
                        L.logger.debug("Key-session generation succeeded");
                      })
                      .catch(function (i) {
                        L.logger.error(
                          "Error generating key-session request:",
                          i
                        ),
                          n.hls.trigger(M.Events.ERROR, {
                            type: O.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: O.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                            fatal: !1,
                          });
                      });
                }),
                (g._createLicenseXhr = function (l, t, n) {
                  var h = new XMLHttpRequest();
                  (h.responseType = "arraybuffer"),
                    (h.onreadystatechange =
                      this._onLicenseRequestReadyStageChange.bind(
                        this,
                        h,
                        l,
                        t,
                        n
                      ));
                  var v = this._licenseXhrSetup;
                  if (v)
                    try {
                      v.call(this.hls, h, l), (v = void 0);
                    } catch (i) {
                      L.logger.error(i);
                    }
                  try {
                    h.readyState || h.open("POST", l, !0),
                      v && v.call(this.hls, h, l);
                  } catch (i) {
                    throw new Error(
                      "issue setting up KeySystem license XHR " + i
                    );
                  }
                  return h;
                }),
                (g._onLicenseRequestReadyStageChange = function (l, t, n, h) {
                  switch (l.readyState) {
                    case 4:
                      if (l.status === 200) {
                        (this._requestLicenseFailureCount = 0),
                          L.logger.log("License request succeeded");
                        var v = l.response,
                          i = this._licenseResponseCallback;
                        if (i)
                          try {
                            v = i.call(this.hls, l, t);
                          } catch (o) {
                            L.logger.error(o);
                          }
                        h(v);
                      } else {
                        if (
                          (L.logger.error(
                            "License Request XHR failed (" +
                              t +
                              "). Status: " +
                              l.status +
                              " (" +
                              l.statusText +
                              ")"
                          ),
                          this._requestLicenseFailureCount++,
                          this._requestLicenseFailureCount > A)
                        ) {
                          this.hls.trigger(M.Events.ERROR, {
                            type: O.ErrorTypes.KEY_SYSTEM_ERROR,
                            details:
                              O.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                            fatal: !0,
                          });
                          return;
                        }
                        var r = A - this._requestLicenseFailureCount + 1;
                        L.logger.warn(
                          "Retrying license request, " + r + " attempts left"
                        ),
                          this._requestLicense(n, h);
                      }
                      break;
                  }
                }),
                (g._generateLicenseRequestChallenge = function (l, t) {
                  switch (l.mediaKeySystemDomain) {
                    case b.KeySystems.WIDEVINE:
                      return t;
                  }
                  throw new Error(
                    "unsupported key-system: " + l.mediaKeySystemDomain
                  );
                }),
                (g._requestLicense = function (l, t) {
                  L.logger.log("Requesting content license for key-system");
                  var n = this._mediaKeysList[0];
                  if (!n) {
                    L.logger.error(
                      "Fatal error: Media is encrypted but no key-system access has been obtained yet"
                    ),
                      this.hls.trigger(M.Events.ERROR, {
                        type: O.ErrorTypes.KEY_SYSTEM_ERROR,
                        details: O.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                        fatal: !0,
                      });
                    return;
                  }
                  try {
                    var h = this.getLicenseServerUrl(n.mediaKeySystemDomain),
                      v = this._createLicenseXhr(h, l, t);
                    L.logger.log("Sending license request to URL: " + h);
                    var i = this._generateLicenseRequestChallenge(n, l);
                    v.send(i);
                  } catch (r) {
                    L.logger.error("Failure requesting DRM license: " + r),
                      this.hls.trigger(M.Events.ERROR, {
                        type: O.ErrorTypes.KEY_SYSTEM_ERROR,
                        details:
                          O.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                        fatal: !0,
                      });
                  }
                }),
                (g.onMediaAttached = function (l, t) {
                  if (!!this._emeEnabled) {
                    var n = t.media;
                    (this._media = n),
                      n.addEventListener("encrypted", this._onMediaEncrypted);
                  }
                }),
                (g.onMediaDetached = function () {
                  var l = this._media,
                    t = this._mediaKeysList;
                  !l ||
                    (l.removeEventListener("encrypted", this._onMediaEncrypted),
                    (this._media = null),
                    (this._mediaKeysList = []),
                    Promise.all(
                      t.map(function (n) {
                        if (n.mediaKeysSession)
                          return n.mediaKeysSession
                            .close()
                            .catch(function () {});
                      })
                    )
                      .then(function () {
                        return l.setMediaKeys(null);
                      })
                      .catch(function () {}));
                }),
                (g.onManifestParsed = function (l, t) {
                  if (!!this._emeEnabled) {
                    var n = t.levels
                        .map(function (v) {
                          return v.audioCodec;
                        })
                        .filter(function (v) {
                          return !!v;
                        }),
                      h = t.levels
                        .map(function (v) {
                          return v.videoCodec;
                        })
                        .filter(function (v) {
                          return !!v;
                        });
                    this._attemptKeySystemAccess(b.KeySystems.WIDEVINE, n, h);
                  }
                }),
                R(E, [
                  {
                    key: "requestMediaKeySystemAccess",
                    get: function () {
                      if (!this._requestMediaKeySystemAccess)
                        throw new Error(
                          "No requestMediaKeySystemAccess function configured"
                        );
                      return this._requestMediaKeySystemAccess;
                    },
                  },
                ]),
                E
              );
            })();
          C.default = S;
        },
        "./src/controller/fps-controller.ts": function (W, C, T) {
          "use strict";
          T.r(C);
          var M = T("./src/events.ts"),
            O = T("./src/utils/logger.ts"),
            L = (function () {
              function b(R) {
                (this.hls = void 0),
                  (this.isVideoPlaybackQualityAvailable = !1),
                  (this.timer = void 0),
                  (this.media = null),
                  (this.lastTime = void 0),
                  (this.lastDroppedFrames = 0),
                  (this.lastDecodedFrames = 0),
                  (this.streamController = void 0),
                  (this.hls = R),
                  this.registerListeners();
              }
              var P = b.prototype;
              return (
                (P.setStreamController = function (A) {
                  this.streamController = A;
                }),
                (P.registerListeners = function () {
                  this.hls.on(
                    M.Events.MEDIA_ATTACHING,
                    this.onMediaAttaching,
                    this
                  );
                }),
                (P.unregisterListeners = function () {
                  this.hls.off(M.Events.MEDIA_ATTACHING, this.onMediaAttaching);
                }),
                (P.destroy = function () {
                  this.timer && clearInterval(this.timer),
                    this.unregisterListeners(),
                    (this.isVideoPlaybackQualityAvailable = !1),
                    (this.media = null);
                }),
                (P.onMediaAttaching = function (A, p) {
                  var y = this.hls.config;
                  if (y.capLevelOnFPSDrop) {
                    var S =
                      p.media instanceof self.HTMLVideoElement ? p.media : null;
                    (this.media = S),
                      S &&
                        typeof S.getVideoPlaybackQuality == "function" &&
                        (this.isVideoPlaybackQualityAvailable = !0),
                      self.clearInterval(this.timer),
                      (this.timer = self.setInterval(
                        this.checkFPSInterval.bind(this),
                        y.fpsDroppedMonitoringPeriod
                      ));
                  }
                }),
                (P.checkFPS = function (A, p, y) {
                  var S = performance.now();
                  if (p) {
                    if (this.lastTime) {
                      var E = S - this.lastTime,
                        g = y - this.lastDroppedFrames,
                        m = p - this.lastDecodedFrames,
                        l = (1e3 * g) / E,
                        t = this.hls;
                      if (
                        (t.trigger(M.Events.FPS_DROP, {
                          currentDropped: g,
                          currentDecoded: m,
                          totalDroppedFrames: y,
                        }),
                        l > 0 && g > t.config.fpsDroppedMonitoringThreshold * m)
                      ) {
                        var n = t.currentLevel;
                        O.logger.warn(
                          "drop FPS ratio greater than max allowed value for currentLevel: " +
                            n
                        ),
                          n > 0 &&
                            (t.autoLevelCapping === -1 ||
                              t.autoLevelCapping >= n) &&
                            ((n = n - 1),
                            t.trigger(M.Events.FPS_DROP_LEVEL_CAPPING, {
                              level: n,
                              droppedLevel: t.currentLevel,
                            }),
                            (t.autoLevelCapping = n),
                            this.streamController.nextLevelSwitch());
                      }
                    }
                    (this.lastTime = S),
                      (this.lastDroppedFrames = y),
                      (this.lastDecodedFrames = p);
                  }
                }),
                (P.checkFPSInterval = function () {
                  var A = this.media;
                  if (A)
                    if (this.isVideoPlaybackQualityAvailable) {
                      var p = A.getVideoPlaybackQuality();
                      this.checkFPS(
                        A,
                        p.totalVideoFrames,
                        p.droppedVideoFrames
                      );
                    } else
                      this.checkFPS(
                        A,
                        A.webkitDecodedFrameCount,
                        A.webkitDroppedFrameCount
                      );
                }),
                b
              );
            })();
          C.default = L;
        },
        "./src/controller/fragment-finders.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "findFragmentByPDT", function () {
              return L;
            }),
            T.d(C, "findFragmentByPTS", function () {
              return b;
            }),
            T.d(C, "fragmentWithinToleranceTest", function () {
              return P;
            }),
            T.d(C, "pdtWithinToleranceTest", function () {
              return R;
            }),
            T.d(C, "findFragWithCC", function () {
              return A;
            });
          var M = T("./src/polyfills/number.ts"),
            O = T("./src/utils/binary-search.ts");
          function L(p, y, S) {
            if (
              y === null ||
              !Array.isArray(p) ||
              !p.length ||
              !Object(M.isFiniteNumber)(y)
            )
              return null;
            var E = p[0].programDateTime;
            if (y < (E || 0)) return null;
            var g = p[p.length - 1].endProgramDateTime;
            if (y >= (g || 0)) return null;
            S = S || 0;
            for (var m = 0; m < p.length; ++m) {
              var l = p[m];
              if (R(y, S, l)) return l;
            }
            return null;
          }
          function b(p, y, S, E) {
            S === void 0 && (S = 0), E === void 0 && (E = 0);
            var g = null;
            if (
              (p
                ? (g = y[p.sn - y[0].sn + 1] || null)
                : S === 0 && y[0].start === 0 && (g = y[0]),
              g && P(S, E, g) === 0)
            )
              return g;
            var m = O.default.search(y, P.bind(null, S, E));
            return m || g;
          }
          function P(p, y, S) {
            p === void 0 && (p = 0), y === void 0 && (y = 0);
            var E = Math.min(y, S.duration + (S.deltaPTS ? S.deltaPTS : 0));
            return S.start + S.duration - E <= p
              ? 1
              : S.start - E > p && S.start
              ? -1
              : 0;
          }
          function R(p, y, S) {
            var E =
                Math.min(y, S.duration + (S.deltaPTS ? S.deltaPTS : 0)) * 1e3,
              g = S.endProgramDateTime || 0;
            return g - E > p;
          }
          function A(p, y) {
            return O.default.search(p, function (S) {
              return S.cc < y ? 1 : S.cc > y ? -1 : 0;
            });
          }
        },
        "./src/controller/fragment-tracker.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "FragmentState", function () {
              return L;
            }),
            T.d(C, "FragmentTracker", function () {
              return b;
            });
          var M = T("./src/events.ts"),
            O = T("./src/types/loader.ts"),
            L;
          (function (A) {
            (A.NOT_LOADED = "NOT_LOADED"),
              (A.APPENDING = "APPENDING"),
              (A.PARTIAL = "PARTIAL"),
              (A.OK = "OK");
          })(L || (L = {}));
          var b = (function () {
            function A(y) {
              (this.activeFragment = null),
                (this.activeParts = null),
                (this.fragments = Object.create(null)),
                (this.timeRanges = Object.create(null)),
                (this.bufferPadding = 0.2),
                (this.hls = void 0),
                (this.hls = y),
                this._registerListeners();
            }
            var p = A.prototype;
            return (
              (p._registerListeners = function () {
                var S = this.hls;
                S.on(M.Events.BUFFER_APPENDED, this.onBufferAppended, this),
                  S.on(M.Events.FRAG_BUFFERED, this.onFragBuffered, this),
                  S.on(M.Events.FRAG_LOADED, this.onFragLoaded, this);
              }),
              (p._unregisterListeners = function () {
                var S = this.hls;
                S.off(M.Events.BUFFER_APPENDED, this.onBufferAppended, this),
                  S.off(M.Events.FRAG_BUFFERED, this.onFragBuffered, this),
                  S.off(M.Events.FRAG_LOADED, this.onFragLoaded, this);
              }),
              (p.destroy = function () {
                this._unregisterListeners(),
                  (this.fragments = this.timeRanges = null);
              }),
              (p.getAppendedFrag = function (S, E) {
                if (E === O.PlaylistLevelType.MAIN) {
                  var g = this.activeFragment,
                    m = this.activeParts;
                  if (!g) return null;
                  if (m)
                    for (var l = m.length; l--; ) {
                      var t = m[l],
                        n = t ? t.end : g.appendedPTS;
                      if (t.start <= S && n !== void 0 && S <= n)
                        return l > 9 && (this.activeParts = m.slice(l - 9)), t;
                    }
                  else if (
                    g.start <= S &&
                    g.appendedPTS !== void 0 &&
                    S <= g.appendedPTS
                  )
                    return g;
                }
                return this.getBufferedFrag(S, E);
              }),
              (p.getBufferedFrag = function (S, E) {
                for (
                  var g = this.fragments, m = Object.keys(g), l = m.length;
                  l--;

                ) {
                  var t = g[m[l]];
                  if (t?.body.type === E && t.buffered) {
                    var n = t.body;
                    if (n.start <= S && S <= n.end) return n;
                  }
                }
                return null;
              }),
              (p.detectEvictedFragments = function (S, E, g) {
                var m = this;
                Object.keys(this.fragments).forEach(function (l) {
                  var t = m.fragments[l];
                  if (!!t) {
                    if (!t.buffered) {
                      t.body.type === g && m.removeFragment(t.body);
                      return;
                    }
                    var n = t.range[S];
                    !n ||
                      n.time.some(function (h) {
                        var v = !m.isTimeBuffered(h.startPTS, h.endPTS, E);
                        return v && m.removeFragment(t.body), v;
                      });
                  }
                });
              }),
              (p.detectPartialFragments = function (S) {
                var E = this,
                  g = this.timeRanges,
                  m = S.frag,
                  l = S.part;
                if (!(!g || m.sn === "initSegment")) {
                  var t = R(m),
                    n = this.fragments[t];
                  !n ||
                    (Object.keys(g).forEach(function (h) {
                      var v = m.elementaryStreams[h];
                      if (!!v) {
                        var i = g[h],
                          r = l !== null || v.partial === !0;
                        n.range[h] = E.getBufferedTimes(m, l, r, i);
                      }
                    }),
                    (n.loaded = null),
                    Object.keys(n.range).length
                      ? (n.buffered = !0)
                      : this.removeFragment(n.body));
                }
              }),
              (p.fragBuffered = function (S) {
                var E = R(S),
                  g = this.fragments[E];
                g && ((g.loaded = null), (g.buffered = !0));
              }),
              (p.getBufferedTimes = function (S, E, g, m) {
                for (
                  var l = { time: [], partial: g },
                    t = E ? E.start : S.start,
                    n = E ? E.end : S.end,
                    h = S.minEndPTS || n,
                    v = S.maxStartPTS || t,
                    i = 0;
                  i < m.length;
                  i++
                ) {
                  var r = m.start(i) - this.bufferPadding,
                    o = m.end(i) + this.bufferPadding;
                  if (v >= r && h <= o) {
                    l.time.push({
                      startPTS: Math.max(t, m.start(i)),
                      endPTS: Math.min(n, m.end(i)),
                    });
                    break;
                  } else if (t < o && n > r)
                    (l.partial = !0),
                      l.time.push({
                        startPTS: Math.max(t, m.start(i)),
                        endPTS: Math.min(n, m.end(i)),
                      });
                  else if (n <= r) break;
                }
                return l;
              }),
              (p.getPartialFragment = function (S) {
                var E = null,
                  g,
                  m,
                  l,
                  t = 0,
                  n = this.bufferPadding,
                  h = this.fragments;
                return (
                  Object.keys(h).forEach(function (v) {
                    var i = h[v];
                    !i ||
                      (P(i) &&
                        ((m = i.body.start - n),
                        (l = i.body.end + n),
                        S >= m &&
                          S <= l &&
                          ((g = Math.min(S - m, l - S)),
                          t <= g && ((E = i.body), (t = g)))));
                  }),
                  E
                );
              }),
              (p.getState = function (S) {
                var E = R(S),
                  g = this.fragments[E];
                return g
                  ? g.buffered
                    ? P(g)
                      ? L.PARTIAL
                      : L.OK
                    : L.APPENDING
                  : L.NOT_LOADED;
              }),
              (p.isTimeBuffered = function (S, E, g) {
                for (var m, l, t = 0; t < g.length; t++) {
                  if (
                    ((m = g.start(t) - this.bufferPadding),
                    (l = g.end(t) + this.bufferPadding),
                    S >= m && E <= l)
                  )
                    return !0;
                  if (E <= m) return !1;
                }
                return !1;
              }),
              (p.onFragLoaded = function (S, E) {
                var g = E.frag,
                  m = E.part;
                if (!(g.sn === "initSegment" || g.bitrateTest || m)) {
                  var l = R(g);
                  this.fragments[l] = {
                    body: g,
                    loaded: E,
                    buffered: !1,
                    range: Object.create(null),
                  };
                }
              }),
              (p.onBufferAppended = function (S, E) {
                var g = this,
                  m = E.frag,
                  l = E.part,
                  t = E.timeRanges;
                if (m.type === O.PlaylistLevelType.MAIN)
                  if (((this.activeFragment = m), l)) {
                    var n = this.activeParts;
                    n || (this.activeParts = n = []), n.push(l);
                  } else this.activeParts = null;
                (this.timeRanges = t),
                  Object.keys(t).forEach(function (h) {
                    var v = t[h];
                    if ((g.detectEvictedFragments(h, v), !l))
                      for (var i = 0; i < v.length; i++)
                        m.appendedPTS = Math.max(v.end(i), m.appendedPTS || 0);
                  });
              }),
              (p.onFragBuffered = function (S, E) {
                this.detectPartialFragments(E);
              }),
              (p.hasFragment = function (S) {
                var E = R(S);
                return !!this.fragments[E];
              }),
              (p.removeFragmentsInRange = function (S, E, g) {
                var m = this;
                Object.keys(this.fragments).forEach(function (l) {
                  var t = m.fragments[l];
                  if (!!t && t.buffered) {
                    var n = t.body;
                    n.type === g &&
                      n.start < E &&
                      n.end > S &&
                      m.removeFragment(n);
                  }
                });
              }),
              (p.removeFragment = function (S) {
                var E = R(S);
                (S.stats.loaded = 0),
                  S.clearElementaryStreamInfo(),
                  delete this.fragments[E];
              }),
              (p.removeAllFragments = function () {
                (this.fragments = Object.create(null)),
                  (this.activeFragment = null),
                  (this.activeParts = null);
              }),
              A
            );
          })();
          function P(A) {
            var p, y;
            return (
              A.buffered &&
              (((p = A.range.video) === null || p === void 0
                ? void 0
                : p.partial) ||
                ((y = A.range.audio) === null || y === void 0
                  ? void 0
                  : y.partial))
            );
          }
          function R(A) {
            return A.type + "_" + A.level + "_" + A.urlId + "_" + A.sn;
          }
        },
        "./src/controller/gap-controller.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "STALL_MINIMUM_DURATION_MS", function () {
              return P;
            }),
            T.d(C, "MAX_START_GAP_JUMP", function () {
              return R;
            }),
            T.d(C, "SKIP_BUFFER_HOLE_STEP_SECONDS", function () {
              return A;
            }),
            T.d(C, "SKIP_BUFFER_RANGE_START", function () {
              return p;
            }),
            T.d(C, "default", function () {
              return y;
            });
          var M = T("./src/utils/buffer-helper.ts"),
            O = T("./src/errors.ts"),
            L = T("./src/events.ts"),
            b = T("./src/utils/logger.ts"),
            P = 250,
            R = 2,
            A = 0.1,
            p = 0.05,
            y = (function () {
              function S(g, m, l, t) {
                (this.config = void 0),
                  (this.media = null),
                  (this.fragmentTracker = void 0),
                  (this.hls = void 0),
                  (this.nudgeRetry = 0),
                  (this.stallReported = !1),
                  (this.stalled = null),
                  (this.moved = !1),
                  (this.seeking = !1),
                  (this.config = g),
                  (this.media = m),
                  (this.fragmentTracker = l),
                  (this.hls = t);
              }
              var E = S.prototype;
              return (
                (E.destroy = function () {
                  (this.media = null), (this.hls = this.fragmentTracker = null);
                }),
                (E.poll = function (m, l) {
                  var t = this.config,
                    n = this.media,
                    h = this.stalled;
                  if (n !== null) {
                    var v = n.currentTime,
                      i = n.seeking,
                      r = this.seeking && !i,
                      o = !this.seeking && i;
                    if (((this.seeking = i), v !== m)) {
                      if (((this.moved = !0), h !== null)) {
                        if (this.stallReported) {
                          var d = self.performance.now() - h;
                          b.logger.warn(
                            "playback not stuck anymore @" +
                              v +
                              ", after " +
                              Math.round(d) +
                              "ms"
                          ),
                            (this.stallReported = !1);
                        }
                        (this.stalled = null), (this.nudgeRetry = 0);
                      }
                      return;
                    }
                    if (
                      ((o || r) && (this.stalled = null),
                      !(
                        (n.paused && !i) ||
                        n.ended ||
                        n.playbackRate === 0 ||
                        !M.BufferHelper.getBuffered(n).length
                      ))
                    ) {
                      var e = M.BufferHelper.bufferInfo(n, v, 0),
                        s = e.len > 0,
                        u = e.nextStart || 0;
                      if (!(!s && !u)) {
                        if (i) {
                          var a = e.len > R,
                            f =
                              !u ||
                              (l && l.start <= v) ||
                              (u - v > R &&
                                !this.fragmentTracker.getPartialFragment(v));
                          if (a || f) return;
                          this.moved = !1;
                        }
                        if (!this.moved && this.stalled !== null) {
                          var c,
                            D = Math.max(u, e.start || 0) - v,
                            x = this.hls.levels
                              ? this.hls.levels[this.hls.currentLevel]
                              : null,
                            I =
                              x == null ||
                              (c = x.details) === null ||
                              c === void 0
                                ? void 0
                                : c.live,
                            F = I ? x.details.targetduration * 2 : R;
                          if (D > 0 && D <= F) {
                            this._trySkipBufferHole(null);
                            return;
                          }
                        }
                        var _ = self.performance.now();
                        if (h === null) {
                          this.stalled = _;
                          return;
                        }
                        var B = _ - h;
                        if (
                          !(!i && B >= P && (this._reportStall(e), !this.media))
                        ) {
                          var U = M.BufferHelper.bufferInfo(
                            n,
                            v,
                            t.maxBufferHole
                          );
                          this._tryFixBufferStall(U, B);
                        }
                      }
                    }
                  }
                }),
                (E._tryFixBufferStall = function (m, l) {
                  var t = this.config,
                    n = this.fragmentTracker,
                    h = this.media;
                  if (h !== null) {
                    var v = h.currentTime,
                      i = n.getPartialFragment(v);
                    if (i) {
                      var r = this._trySkipBufferHole(i);
                      if (r || !this.media) return;
                    }
                    m.len > t.maxBufferHole &&
                      l > t.highBufferWatchdogPeriod * 1e3 &&
                      (b.logger.warn(
                        "Trying to nudge playhead over buffer-hole"
                      ),
                      (this.stalled = null),
                      this._tryNudgeBuffer());
                  }
                }),
                (E._reportStall = function (m) {
                  var l = this.hls,
                    t = this.media,
                    n = this.stallReported;
                  !n &&
                    t &&
                    ((this.stallReported = !0),
                    b.logger.warn(
                      "Playback stalling at @" +
                        t.currentTime +
                        " due to low buffer (" +
                        JSON.stringify(m) +
                        ")"
                    ),
                    l.trigger(L.Events.ERROR, {
                      type: O.ErrorTypes.MEDIA_ERROR,
                      details: O.ErrorDetails.BUFFER_STALLED_ERROR,
                      fatal: !1,
                      buffer: m.len,
                    }));
                }),
                (E._trySkipBufferHole = function (m) {
                  var l = this.config,
                    t = this.hls,
                    n = this.media;
                  if (n === null) return 0;
                  for (
                    var h = n.currentTime,
                      v = 0,
                      i = M.BufferHelper.getBuffered(n),
                      r = 0;
                    r < i.length;
                    r++
                  ) {
                    var o = i.start(r);
                    if (h + l.maxBufferHole >= v && h < o) {
                      var d = Math.max(o + p, n.currentTime + A);
                      return (
                        b.logger.warn(
                          "skipping hole, adjusting currentTime from " +
                            h +
                            " to " +
                            d
                        ),
                        (this.moved = !0),
                        (this.stalled = null),
                        (n.currentTime = d),
                        m &&
                          t.trigger(L.Events.ERROR, {
                            type: O.ErrorTypes.MEDIA_ERROR,
                            details: O.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                            fatal: !1,
                            reason:
                              "fragment loaded with buffer holes, seeking from " +
                              h +
                              " to " +
                              d,
                            frag: m,
                          }),
                        d
                      );
                    }
                    v = i.end(r);
                  }
                  return 0;
                }),
                (E._tryNudgeBuffer = function () {
                  var m = this.config,
                    l = this.hls,
                    t = this.media,
                    n = this.nudgeRetry;
                  if (t !== null) {
                    var h = t.currentTime;
                    if ((this.nudgeRetry++, n < m.nudgeMaxRetry)) {
                      var v = h + (n + 1) * m.nudgeOffset;
                      b.logger.warn(
                        "Nudging 'currentTime' from " + h + " to " + v
                      ),
                        (t.currentTime = v),
                        l.trigger(L.Events.ERROR, {
                          type: O.ErrorTypes.MEDIA_ERROR,
                          details: O.ErrorDetails.BUFFER_NUDGE_ON_STALL,
                          fatal: !1,
                        });
                    } else
                      b.logger.error(
                        "Playhead still not moving while enough data buffered @" +
                          h +
                          " after " +
                          m.nudgeMaxRetry +
                          " nudges"
                      ),
                        l.trigger(L.Events.ERROR, {
                          type: O.ErrorTypes.MEDIA_ERROR,
                          details: O.ErrorDetails.BUFFER_STALLED_ERROR,
                          fatal: !0,
                        });
                  }
                }),
                S
              );
            })();
        },
        "./src/controller/id3-track-controller.ts": function (W, C, T) {
          "use strict";
          T.r(C);
          var M = T("./src/polyfills/number.ts"),
            O = T("./src/events.ts"),
            L = T("./src/utils/texttrack-utils.ts"),
            b = T("./src/demux/id3.ts"),
            P = T("./src/loader/date-range.ts"),
            R = T("./src/types/demuxer.ts"),
            A = 0.25;
          function p() {
            return self.WebKitDataCue || self.VTTCue || self.TextTrackCue;
          }
          function y(g, m) {
            return g.getTime() / 1e3 - m;
          }
          function S(g) {
            return Uint8Array.from(
              g
                .replace(/^0x/, "")
                .replace(/([\da-fA-F]{2}) ?/g, "0x$1 ")
                .replace(/ +$/, "")
                .split(" ")
            ).buffer;
          }
          var E = (function () {
            function g(l) {
              (this.hls = void 0),
                (this.id3Track = null),
                (this.media = null),
                (this.dateRangeCuesAppended = {}),
                (this.hls = l),
                this._registerListeners();
            }
            var m = g.prototype;
            return (
              (m.destroy = function () {
                this._unregisterListeners(),
                  (this.id3Track = null),
                  (this.media = null),
                  (this.dateRangeCuesAppended = {}),
                  (this.hls = null);
              }),
              (m._registerListeners = function () {
                var t = this.hls;
                t.on(O.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                  t.on(O.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                  t.on(O.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                  t.on(
                    O.Events.FRAG_PARSING_METADATA,
                    this.onFragParsingMetadata,
                    this
                  ),
                  t.on(O.Events.BUFFER_FLUSHING, this.onBufferFlushing, this),
                  t.on(O.Events.LEVEL_UPDATED, this.onLevelUpdated, this);
              }),
              (m._unregisterListeners = function () {
                var t = this.hls;
                t.off(O.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                  t.off(O.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                  t.off(
                    O.Events.MANIFEST_LOADING,
                    this.onManifestLoading,
                    this
                  ),
                  t.off(
                    O.Events.FRAG_PARSING_METADATA,
                    this.onFragParsingMetadata,
                    this
                  ),
                  t.off(O.Events.BUFFER_FLUSHING, this.onBufferFlushing, this),
                  t.off(O.Events.LEVEL_UPDATED, this.onLevelUpdated, this);
              }),
              (m.onMediaAttached = function (t, n) {
                this.media = n.media;
              }),
              (m.onMediaDetaching = function () {
                !this.id3Track ||
                  (Object(L.clearCurrentCues)(this.id3Track),
                  (this.id3Track = null),
                  (this.media = null),
                  (this.dateRangeCuesAppended = {}));
              }),
              (m.onManifestLoading = function () {
                this.dateRangeCuesAppended = {};
              }),
              (m.createTrack = function (t) {
                var n = this.getID3Track(t.textTracks);
                return (n.mode = "hidden"), n;
              }),
              (m.getID3Track = function (t) {
                if (!!this.media) {
                  for (var n = 0; n < t.length; n++) {
                    var h = t[n];
                    if (h.kind === "metadata" && h.label === "id3")
                      return Object(L.sendAddTrackEvent)(h, this.media), h;
                  }
                  return this.media.addTextTrack("metadata", "id3");
                }
              }),
              (m.onFragParsingMetadata = function (t, n) {
                if (!!this.media) {
                  var h = this.hls.config,
                    v = h.enableEmsgMetadataCues,
                    i = h.enableID3MetadataCues;
                  if (!(!v && !i)) {
                    var r = n.frag,
                      o = n.samples,
                      d = n.details;
                    this.id3Track ||
                      (this.id3Track = this.createTrack(this.media));
                    for (
                      var e = d.edge || r.end, s = p(), u = !1, a = {}, f = 0;
                      f < o.length;
                      f++
                    ) {
                      var c = o[f].type;
                      if (!((c === R.MetadataSchema.emsg && !v) || !i)) {
                        var D = b.getID3Frames(o[f].data);
                        if (D) {
                          var x = o[f].pts,
                            I = e,
                            F = I - x;
                          F <= 0 && (I = x + A);
                          for (var _ = 0; _ < D.length; _++) {
                            var B = D[_];
                            if (!b.isTimeStampFrame(B)) {
                              var U = new s(x, I, "");
                              (U.value = B),
                                c && (U.type = c),
                                this.id3Track.addCue(U),
                                (a[B.key] = null),
                                (u = !0);
                            }
                          }
                        }
                      }
                    }
                    u && this.updateId3CueEnds(a);
                  }
                }
              }),
              (m.updateId3CueEnds = function (t) {
                var n,
                  h =
                    (n = this.id3Track) === null || n === void 0
                      ? void 0
                      : n.cues;
                if (h)
                  for (var v = h.length; v--; ) {
                    var i,
                      r = h[v],
                      o =
                        (i = r.value) === null || i === void 0 ? void 0 : i.key;
                    if (o && o in t) {
                      var d = t[o];
                      d && r.endTime !== d && (r.endTime = d),
                        (t[o] = r.startTime);
                    }
                  }
              }),
              (m.onBufferFlushing = function (t, n) {
                var h = n.startOffset,
                  v = n.endOffset,
                  i = n.type,
                  r = this.id3Track,
                  o = this.hls;
                if (!!o) {
                  var d = o.config,
                    e = d.enableEmsgMetadataCues,
                    s = d.enableID3MetadataCues;
                  if (r && (e || s)) {
                    var u;
                    i === "audio"
                      ? (u = function (f) {
                          return f.type === R.MetadataSchema.audioId3 && s;
                        })
                      : i === "video"
                      ? (u = function (f) {
                          return f.type === R.MetadataSchema.emsg && e;
                        })
                      : (u = function (f) {
                          return (
                            (f.type === R.MetadataSchema.audioId3 && s) ||
                            (f.type === R.MetadataSchema.emsg && e)
                          );
                        }),
                      Object(L.removeCuesInRange)(r, h, v, u);
                  }
                }
              }),
              (m.onLevelUpdated = function (t, n) {
                var h = this,
                  v = n.details;
                if (
                  !(
                    !this.media ||
                    !v.hasProgramDateTime ||
                    !this.hls.config.enableDateRangeMetadataCues
                  )
                ) {
                  var i = this.dateRangeCuesAppended,
                    r = this.id3Track,
                    o = v.dateRanges,
                    d = Object.keys(o);
                  if (r)
                    for (
                      var e = Object.keys(i).filter(function (F) {
                          return !d.includes(F);
                        }),
                        s = function (_) {
                          var B = e[_];
                          Object.keys(i[B].cues).forEach(function (U) {
                            r.removeCue(i[B].cues[U]);
                          }),
                            delete i[B];
                        },
                        u = e.length;
                      u--;

                    )
                      s(u);
                  var a = v.fragments[v.fragments.length - 1];
                  if (
                    !(
                      d.length === 0 ||
                      !Object(M.isFiniteNumber)(a?.programDateTime)
                    )
                  ) {
                    this.id3Track ||
                      (this.id3Track = this.createTrack(this.media));
                    for (
                      var f = a.programDateTime / 1e3 - a.start,
                        c = v.edge || a.end,
                        D = p(),
                        x = function (_) {
                          var B = d[_],
                            U = o[B],
                            N = i[B],
                            w = N?.cues || {},
                            k = N?.durationKnown || !1,
                            K = y(U.startDate, f),
                            j = c,
                            G = U.endDate;
                          if (G) (j = y(G, f)), (k = !0);
                          else if (U.endOnNext && !k) {
                            var Y = d
                              .reduce(function (V, J) {
                                var Z = o[J];
                                return (
                                  Z.class === U.class &&
                                    Z.id !== J &&
                                    Z.startDate > U.startDate &&
                                    V.push(Z),
                                  V
                                );
                              }, [])
                              .sort(function (V, J) {
                                return (
                                  V.startDate.getTime() - J.startDate.getTime()
                                );
                              })[0];
                            Y && ((j = y(Y.startDate, f)), (k = !0));
                          }
                          for (
                            var X = Object.keys(U.attr), z = 0;
                            z < X.length;
                            z++
                          ) {
                            var H = X[z];
                            if (
                              !(
                                H === P.DateRangeAttribute.ID ||
                                H === P.DateRangeAttribute.CLASS ||
                                H === P.DateRangeAttribute.START_DATE ||
                                H === P.DateRangeAttribute.DURATION ||
                                H === P.DateRangeAttribute.END_DATE ||
                                H === P.DateRangeAttribute.END_ON_NEXT
                              )
                            ) {
                              var Q = w[H];
                              if (Q) k && !N.durationKnown && (Q.endTime = j);
                              else {
                                var $ = U.attr[H];
                                (Q = new D(K, j, "")),
                                  (H === P.DateRangeAttribute.SCTE35_OUT ||
                                    H === P.DateRangeAttribute.SCTE35_IN) &&
                                    ($ = S($)),
                                  (Q.value = { key: H, data: $ }),
                                  (Q.type = R.MetadataSchema.dateRange),
                                  h.id3Track.addCue(Q),
                                  (w[H] = Q);
                              }
                            }
                          }
                          i[B] = { cues: w, dateRange: U, durationKnown: k };
                        },
                        I = 0;
                      I < d.length;
                      I++
                    )
                      x(I);
                  }
                }
              }),
              g
            );
          })();
          C.default = E;
        },
        "./src/controller/latency-controller.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "default", function () {
              return R;
            });
          var M = T("./src/errors.ts"),
            O = T("./src/events.ts"),
            L = T("./src/utils/logger.ts");
          function b(A, p) {
            for (var y = 0; y < p.length; y++) {
              var S = p[y];
              (S.enumerable = S.enumerable || !1),
                (S.configurable = !0),
                "value" in S && (S.writable = !0),
                Object.defineProperty(A, S.key, S);
            }
          }
          function P(A, p, y) {
            return (
              p && b(A.prototype, p),
              y && b(A, y),
              Object.defineProperty(A, "prototype", { writable: !1 }),
              A
            );
          }
          var R = (function () {
            function A(y) {
              var S = this;
              (this.hls = void 0),
                (this.config = void 0),
                (this.media = null),
                (this.levelDetails = null),
                (this.currentTime = 0),
                (this.stallCount = 0),
                (this._latency = null),
                (this.timeupdateHandler = function () {
                  return S.timeupdate();
                }),
                (this.hls = y),
                (this.config = y.config),
                this.registerListeners();
            }
            var p = A.prototype;
            return (
              (p.destroy = function () {
                this.unregisterListeners(),
                  this.onMediaDetaching(),
                  (this.levelDetails = null),
                  (this.hls = this.timeupdateHandler = null);
              }),
              (p.registerListeners = function () {
                this.hls.on(
                  O.Events.MEDIA_ATTACHED,
                  this.onMediaAttached,
                  this
                ),
                  this.hls.on(
                    O.Events.MEDIA_DETACHING,
                    this.onMediaDetaching,
                    this
                  ),
                  this.hls.on(
                    O.Events.MANIFEST_LOADING,
                    this.onManifestLoading,
                    this
                  ),
                  this.hls.on(
                    O.Events.LEVEL_UPDATED,
                    this.onLevelUpdated,
                    this
                  ),
                  this.hls.on(O.Events.ERROR, this.onError, this);
              }),
              (p.unregisterListeners = function () {
                this.hls.off(O.Events.MEDIA_ATTACHED, this.onMediaAttached),
                  this.hls.off(O.Events.MEDIA_DETACHING, this.onMediaDetaching),
                  this.hls.off(
                    O.Events.MANIFEST_LOADING,
                    this.onManifestLoading
                  ),
                  this.hls.off(O.Events.LEVEL_UPDATED, this.onLevelUpdated),
                  this.hls.off(O.Events.ERROR, this.onError);
              }),
              (p.onMediaAttached = function (S, E) {
                (this.media = E.media),
                  this.media.addEventListener(
                    "timeupdate",
                    this.timeupdateHandler
                  );
              }),
              (p.onMediaDetaching = function () {
                this.media &&
                  (this.media.removeEventListener(
                    "timeupdate",
                    this.timeupdateHandler
                  ),
                  (this.media = null));
              }),
              (p.onManifestLoading = function () {
                (this.levelDetails = null),
                  (this._latency = null),
                  (this.stallCount = 0);
              }),
              (p.onLevelUpdated = function (S, E) {
                var g = E.details;
                (this.levelDetails = g),
                  g.advanced && this.timeupdate(),
                  !g.live &&
                    this.media &&
                    this.media.removeEventListener(
                      "timeupdate",
                      this.timeupdateHandler
                    );
              }),
              (p.onError = function (S, E) {
                E.details === M.ErrorDetails.BUFFER_STALLED_ERROR &&
                  (this.stallCount++,
                  L.logger.warn(
                    "[playback-rate-controller]: Stall detected, adjusting target latency"
                  ));
              }),
              (p.timeupdate = function () {
                var S = this.media,
                  E = this.levelDetails;
                if (!(!S || !E)) {
                  this.currentTime = S.currentTime;
                  var g = this.computeLatency();
                  if (g !== null) {
                    this._latency = g;
                    var m = this.config,
                      l = m.lowLatencyMode,
                      t = m.maxLiveSyncPlaybackRate;
                    if (!(!l || t === 1)) {
                      var n = this.targetLatency;
                      if (n !== null) {
                        var h = g - n,
                          v = Math.min(this.maxLatency, n + E.targetduration),
                          i = h < v;
                        if (
                          E.live &&
                          i &&
                          h > 0.05 &&
                          this.forwardBufferLength > 1
                        ) {
                          var r = Math.min(2, Math.max(1, t)),
                            o =
                              Math.round(
                                (2 /
                                  (1 +
                                    Math.exp(-0.75 * h - this.edgeStalled))) *
                                  20
                              ) / 20;
                          S.playbackRate = Math.min(r, Math.max(1, o));
                        } else
                          S.playbackRate !== 1 &&
                            S.playbackRate !== 0 &&
                            (S.playbackRate = 1);
                      }
                    }
                  }
                }
              }),
              (p.estimateLiveEdge = function () {
                var S = this.levelDetails;
                return S === null ? null : S.edge + S.age;
              }),
              (p.computeLatency = function () {
                var S = this.estimateLiveEdge();
                return S === null ? null : S - this.currentTime;
              }),
              P(A, [
                {
                  key: "latency",
                  get: function () {
                    return this._latency || 0;
                  },
                },
                {
                  key: "maxLatency",
                  get: function () {
                    var S = this.config,
                      E = this.levelDetails;
                    return S.liveMaxLatencyDuration !== void 0
                      ? S.liveMaxLatencyDuration
                      : E
                      ? S.liveMaxLatencyDurationCount * E.targetduration
                      : 0;
                  },
                },
                {
                  key: "targetLatency",
                  get: function () {
                    var S = this.levelDetails;
                    if (S === null) return null;
                    var E = S.holdBack,
                      g = S.partHoldBack,
                      m = S.targetduration,
                      l = this.config,
                      t = l.liveSyncDuration,
                      n = l.liveSyncDurationCount,
                      h = l.lowLatencyMode,
                      v = this.hls.userConfig,
                      i = (h && g) || E;
                    (v.liveSyncDuration ||
                      v.liveSyncDurationCount ||
                      i === 0) &&
                      (i = t !== void 0 ? t : n * m);
                    var r = m,
                      o = 1;
                    return i + Math.min(this.stallCount * o, r);
                  },
                },
                {
                  key: "liveSyncPosition",
                  get: function () {
                    var S = this.estimateLiveEdge(),
                      E = this.targetLatency,
                      g = this.levelDetails;
                    if (S === null || E === null || g === null) return null;
                    var m = g.edge,
                      l = S - E - this.edgeStalled,
                      t = m - g.totalduration,
                      n =
                        m -
                        ((this.config.lowLatencyMode && g.partTarget) ||
                          g.targetduration);
                    return Math.min(Math.max(t, l), n);
                  },
                },
                {
                  key: "drift",
                  get: function () {
                    var S = this.levelDetails;
                    return S === null ? 1 : S.drift;
                  },
                },
                {
                  key: "edgeStalled",
                  get: function () {
                    var S = this.levelDetails;
                    if (S === null) return 0;
                    var E =
                      ((this.config.lowLatencyMode && S.partTarget) ||
                        S.targetduration) * 3;
                    return Math.max(S.age - E, 0);
                  },
                },
                {
                  key: "forwardBufferLength",
                  get: function () {
                    var S = this.media,
                      E = this.levelDetails;
                    if (!S || !E) return 0;
                    var g = S.buffered.length;
                    return (
                      (g ? S.buffered.end(g - 1) : E.edge) - this.currentTime
                    );
                  },
                },
              ]),
              A
            );
          })();
        },
        "./src/controller/level-controller.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "default", function () {
              return l;
            });
          var M = T("./src/types/level.ts"),
            O = T("./src/events.ts"),
            L = T("./src/errors.ts"),
            b = T("./src/utils/codecs.ts"),
            P = T("./src/controller/level-helper.ts"),
            R = T("./src/controller/base-playlist-controller.ts"),
            A = T("./src/types/loader.ts");
          function p() {
            return (
              (p = Object.assign
                ? Object.assign.bind()
                : function (t) {
                    for (var n = 1; n < arguments.length; n++) {
                      var h = arguments[n];
                      for (var v in h)
                        Object.prototype.hasOwnProperty.call(h, v) &&
                          (t[v] = h[v]);
                    }
                    return t;
                  }),
              p.apply(this, arguments)
            );
          }
          function y(t, n) {
            for (var h = 0; h < n.length; h++) {
              var v = n[h];
              (v.enumerable = v.enumerable || !1),
                (v.configurable = !0),
                "value" in v && (v.writable = !0),
                Object.defineProperty(t, v.key, v);
            }
          }
          function S(t, n, h) {
            return (
              n && y(t.prototype, n),
              h && y(t, h),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          }
          function E(t, n) {
            (t.prototype = Object.create(n.prototype)),
              (t.prototype.constructor = t),
              g(t, n);
          }
          function g(t, n) {
            return (
              (g = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (v, i) {
                    return (v.__proto__ = i), v;
                  }),
              g(t, n)
            );
          }
          var m = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
            l = (function (t) {
              E(n, t);
              function n(v) {
                var i;
                return (
                  (i = t.call(this, v, "[level-controller]") || this),
                  (i._levels = []),
                  (i._firstLevel = -1),
                  (i._startLevel = void 0),
                  (i.currentLevelIndex = -1),
                  (i.manualLevelIndex = -1),
                  (i.onParsedComplete = void 0),
                  i._registerListeners(),
                  i
                );
              }
              var h = n.prototype;
              return (
                (h._registerListeners = function () {
                  var i = this.hls;
                  i.on(O.Events.MANIFEST_LOADED, this.onManifestLoaded, this),
                    i.on(O.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                    i.on(
                      O.Events.AUDIO_TRACK_SWITCHED,
                      this.onAudioTrackSwitched,
                      this
                    ),
                    i.on(O.Events.FRAG_LOADED, this.onFragLoaded, this),
                    i.on(O.Events.ERROR, this.onError, this);
                }),
                (h._unregisterListeners = function () {
                  var i = this.hls;
                  i.off(O.Events.MANIFEST_LOADED, this.onManifestLoaded, this),
                    i.off(O.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                    i.off(
                      O.Events.AUDIO_TRACK_SWITCHED,
                      this.onAudioTrackSwitched,
                      this
                    ),
                    i.off(O.Events.FRAG_LOADED, this.onFragLoaded, this),
                    i.off(O.Events.ERROR, this.onError, this);
                }),
                (h.destroy = function () {
                  this._unregisterListeners(),
                    (this.manualLevelIndex = -1),
                    (this._levels.length = 0),
                    t.prototype.destroy.call(this);
                }),
                (h.startLoad = function () {
                  var i = this._levels;
                  i.forEach(function (r) {
                    r.loadError = 0;
                  }),
                    t.prototype.startLoad.call(this);
                }),
                (h.onManifestLoaded = function (i, r) {
                  var o = [],
                    d = [],
                    e = [],
                    s,
                    u = {},
                    a,
                    f = !1,
                    c = !1,
                    D = !1;
                  if (
                    (r.levels.forEach(function (_) {
                      var B = _.attrs;
                      (f = f || !!(_.width && _.height)),
                        (c = c || !!_.videoCodec),
                        (D = D || !!_.audioCodec),
                        m &&
                          _.audioCodec &&
                          _.audioCodec.indexOf("mp4a.40.34") !== -1 &&
                          (_.audioCodec = void 0);
                      var U =
                        _.bitrate +
                        "-" +
                        _.attrs.RESOLUTION +
                        "-" +
                        _.attrs.CODECS;
                      (a = u[U]),
                        a
                          ? a.url.push(_.url)
                          : ((a = new M.Level(_)), (u[U] = a), o.push(a)),
                        B &&
                          (B.AUDIO && Object(P.addGroupId)(a, "audio", B.AUDIO),
                          B.SUBTITLES &&
                            Object(P.addGroupId)(a, "text", B.SUBTITLES));
                    }),
                    (f || c) &&
                      D &&
                      (o = o.filter(function (_) {
                        var B = _.videoCodec,
                          U = _.width,
                          N = _.height;
                        return !!B || !!(U && N);
                      })),
                    (o = o.filter(function (_) {
                      var B = _.audioCodec,
                        U = _.videoCodec;
                      return (
                        (!B || Object(b.isCodecSupportedInMp4)(B, "audio")) &&
                        (!U || Object(b.isCodecSupportedInMp4)(U, "video"))
                      );
                    })),
                    r.audioTracks &&
                      ((d = r.audioTracks.filter(function (_) {
                        return (
                          !_.audioCodec ||
                          Object(b.isCodecSupportedInMp4)(_.audioCodec, "audio")
                        );
                      })),
                      Object(P.assignTrackIdsByGroup)(d)),
                    r.subtitles &&
                      ((e = r.subtitles), Object(P.assignTrackIdsByGroup)(e)),
                    o.length > 0)
                  ) {
                    (s = o[0].bitrate),
                      o.sort(function (_, B) {
                        return _.bitrate - B.bitrate;
                      }),
                      (this._levels = o);
                    for (var x = 0; x < o.length; x++)
                      if (o[x].bitrate === s) {
                        (this._firstLevel = x),
                          this.log(
                            "manifest loaded, " +
                              o.length +
                              " level(s) found, first bitrate: " +
                              s
                          );
                        break;
                      }
                    var I = D && !c,
                      F = {
                        levels: o,
                        audioTracks: d,
                        subtitleTracks: e,
                        firstLevel: this._firstLevel,
                        stats: r.stats,
                        audio: D,
                        video: c,
                        altAudio:
                          !I &&
                          d.some(function (_) {
                            return !!_.url;
                          }),
                      };
                    this.hls.trigger(O.Events.MANIFEST_PARSED, F),
                      (this.hls.config.autoStartLoad ||
                        this.hls.forceStartLoad) &&
                        this.hls.startLoad(this.hls.config.startPosition);
                  } else
                    this.hls.trigger(O.Events.ERROR, {
                      type: L.ErrorTypes.MEDIA_ERROR,
                      details:
                        L.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                      fatal: !0,
                      url: r.url,
                      reason:
                        "no level with compatible codecs found in manifest",
                    });
                }),
                (h.onError = function (i, r) {
                  var o;
                  if ((t.prototype.onError.call(this, i, r), !r.fatal)) {
                    var d = r.context,
                      e = this._levels[this.currentLevelIndex];
                    if (
                      d &&
                      ((d.type === A.PlaylistContextType.AUDIO_TRACK &&
                        e.audioGroupIds &&
                        d.groupId === e.audioGroupIds[e.urlId]) ||
                        (d.type === A.PlaylistContextType.SUBTITLE_TRACK &&
                          e.textGroupIds &&
                          d.groupId === e.textGroupIds[e.urlId]))
                    ) {
                      this.redundantFailover(this.currentLevelIndex);
                      return;
                    }
                    var s = !1,
                      u = !0,
                      a;
                    switch (r.details) {
                      case L.ErrorDetails.FRAG_LOAD_ERROR:
                      case L.ErrorDetails.FRAG_LOAD_TIMEOUT:
                      case L.ErrorDetails.KEY_LOAD_ERROR:
                      case L.ErrorDetails.KEY_LOAD_TIMEOUT:
                        if (r.frag) {
                          var f =
                              r.frag.type === A.PlaylistLevelType.MAIN
                                ? r.frag.level
                                : this.currentLevelIndex,
                            c = this._levels[f];
                          c
                            ? (c.fragmentError++,
                              c.fragmentError >
                                this.hls.config.fragLoadingMaxRetry && (a = f))
                            : (a = f);
                        }
                        break;
                      case L.ErrorDetails.LEVEL_LOAD_ERROR:
                      case L.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                        d && (d.deliveryDirectives && (u = !1), (a = d.level)),
                          (s = !0);
                        break;
                      case L.ErrorDetails.REMUX_ALLOC_ERROR:
                        (a =
                          (o = r.level) != null ? o : this.currentLevelIndex),
                          (s = !0);
                        break;
                    }
                    a !== void 0 && this.recoverLevel(r, a, s, u);
                  }
                }),
                (h.recoverLevel = function (i, r, o, d) {
                  var e = i.details,
                    s = this._levels[r];
                  if ((s.loadError++, o)) {
                    var u = this.retryLoadingOrFail(i);
                    if (u) i.levelRetry = !0;
                    else {
                      this.currentLevelIndex = -1;
                      return;
                    }
                  }
                  if (d) {
                    var a = s.url.length;
                    if (a > 1 && s.loadError < a)
                      (i.levelRetry = !0), this.redundantFailover(r);
                    else if (this.manualLevelIndex === -1) {
                      for (var f = -1, c = this._levels, D = c.length; D--; ) {
                        var x = (D + this.currentLevelIndex) % c.length;
                        if (
                          x !== this.currentLevelIndex &&
                          c[x].loadError === 0
                        ) {
                          f = x;
                          break;
                        }
                      }
                      f > -1 &&
                        this.currentLevelIndex !== f &&
                        (this.warn(e + ": switch to " + f),
                        (i.levelRetry = !0),
                        (this.hls.nextAutoLevel = f));
                    }
                  }
                }),
                (h.redundantFailover = function (i) {
                  var r = this._levels[i],
                    o = r.url.length;
                  if (o > 1) {
                    var d = (r.urlId + 1) % o;
                    this.warn("Switching to redundant URL-id " + d),
                      this._levels.forEach(function (e) {
                        e.urlId = d;
                      }),
                      (this.level = i);
                  }
                }),
                (h.onFragLoaded = function (i, r) {
                  var o = r.frag;
                  if (o !== void 0 && o.type === A.PlaylistLevelType.MAIN) {
                    var d = this._levels[o.level];
                    d !== void 0 && ((d.fragmentError = 0), (d.loadError = 0));
                  }
                }),
                (h.onLevelLoaded = function (i, r) {
                  var o,
                    d = r.level,
                    e = r.details,
                    s = this._levels[d];
                  if (!s) {
                    var u;
                    this.warn("Invalid level index " + d),
                      (u = r.deliveryDirectives) !== null &&
                        u !== void 0 &&
                        u.skip &&
                        (e.deltaUpdateFailed = !0);
                    return;
                  }
                  d === this.currentLevelIndex
                    ? (s.fragmentError === 0 &&
                        ((s.loadError = 0), (this.retryCount = 0)),
                      this.playlistLoaded(d, r, s.details))
                    : (o = r.deliveryDirectives) !== null &&
                      o !== void 0 &&
                      o.skip &&
                      (e.deltaUpdateFailed = !0);
                }),
                (h.onAudioTrackSwitched = function (i, r) {
                  var o = this.hls.levels[this.currentLevelIndex];
                  if (!!o && o.audioGroupIds) {
                    for (
                      var d = -1, e = this.hls.audioTracks[r.id].groupId, s = 0;
                      s < o.audioGroupIds.length;
                      s++
                    )
                      if (o.audioGroupIds[s] === e) {
                        d = s;
                        break;
                      }
                    d !== o.urlId && ((o.urlId = d), this.startLoad());
                  }
                }),
                (h.loadPlaylist = function (i) {
                  var r = this.currentLevelIndex,
                    o = this._levels[r];
                  if (this.canLoad && o && o.url.length > 0) {
                    var d = o.urlId,
                      e = o.url[d];
                    if (i)
                      try {
                        e = i.addDirectives(e);
                      } catch (s) {
                        this.warn(
                          "Could not construct new URL with HLS Delivery Directives: " +
                            s
                        );
                      }
                    this.log(
                      "Attempt loading level index " +
                        r +
                        (i ? " at sn " + i.msn + " part " + i.part : "") +
                        " with URL-id " +
                        d +
                        " " +
                        e
                    ),
                      this.clearTimer(),
                      this.hls.trigger(O.Events.LEVEL_LOADING, {
                        url: e,
                        level: r,
                        id: d,
                        deliveryDirectives: i || null,
                      });
                  }
                }),
                (h.removeLevel = function (i, r) {
                  var o = function (s, u) {
                      return u !== r;
                    },
                    d = this._levels
                      .filter(function (e, s) {
                        return s !== i
                          ? !0
                          : e.url.length > 1 && r !== void 0
                          ? ((e.url = e.url.filter(o)),
                            e.audioGroupIds &&
                              (e.audioGroupIds = e.audioGroupIds.filter(o)),
                            e.textGroupIds &&
                              (e.textGroupIds = e.textGroupIds.filter(o)),
                            (e.urlId = 0),
                            !0)
                          : !1;
                      })
                      .map(function (e, s) {
                        var u = e.details;
                        return (
                          u != null &&
                            u.fragments &&
                            u.fragments.forEach(function (a) {
                              a.level = s;
                            }),
                          e
                        );
                      });
                  (this._levels = d),
                    this.hls.trigger(O.Events.LEVELS_UPDATED, { levels: d });
                }),
                S(n, [
                  {
                    key: "levels",
                    get: function () {
                      return this._levels.length === 0 ? null : this._levels;
                    },
                  },
                  {
                    key: "level",
                    get: function () {
                      return this.currentLevelIndex;
                    },
                    set: function (i) {
                      var r,
                        o = this._levels;
                      if (
                        o.length !== 0 &&
                        !(
                          this.currentLevelIndex === i &&
                          (r = o[i]) !== null &&
                          r !== void 0 &&
                          r.details
                        )
                      ) {
                        if (i < 0 || i >= o.length) {
                          var d = i < 0;
                          if (
                            (this.hls.trigger(O.Events.ERROR, {
                              type: L.ErrorTypes.OTHER_ERROR,
                              details: L.ErrorDetails.LEVEL_SWITCH_ERROR,
                              level: i,
                              fatal: d,
                              reason: "invalid level idx",
                            }),
                            d)
                          )
                            return;
                          i = Math.min(i, o.length - 1);
                        }
                        this.clearTimer();
                        var e = this.currentLevelIndex,
                          s = o[e],
                          u = o[i];
                        this.log("switching to level " + i + " from " + e),
                          (this.currentLevelIndex = i);
                        var a = p({}, u, {
                          level: i,
                          maxBitrate: u.maxBitrate,
                          uri: u.uri,
                          urlId: u.urlId,
                        });
                        delete a._urlId,
                          this.hls.trigger(O.Events.LEVEL_SWITCHING, a);
                        var f = u.details;
                        if (!f || f.live) {
                          var c = this.switchParams(u.uri, s?.details);
                          this.loadPlaylist(c);
                        }
                      }
                    },
                  },
                  {
                    key: "manualLevel",
                    get: function () {
                      return this.manualLevelIndex;
                    },
                    set: function (i) {
                      (this.manualLevelIndex = i),
                        this._startLevel === void 0 && (this._startLevel = i),
                        i !== -1 && (this.level = i);
                    },
                  },
                  {
                    key: "firstLevel",
                    get: function () {
                      return this._firstLevel;
                    },
                    set: function (i) {
                      this._firstLevel = i;
                    },
                  },
                  {
                    key: "startLevel",
                    get: function () {
                      if (this._startLevel === void 0) {
                        var i = this.hls.config.startLevel;
                        return i !== void 0 ? i : this._firstLevel;
                      } else return this._startLevel;
                    },
                    set: function (i) {
                      this._startLevel = i;
                    },
                  },
                  {
                    key: "nextLoadLevel",
                    get: function () {
                      return this.manualLevelIndex !== -1
                        ? this.manualLevelIndex
                        : this.hls.nextAutoLevel;
                    },
                    set: function (i) {
                      (this.level = i),
                        this.manualLevelIndex === -1 &&
                          (this.hls.nextAutoLevel = i);
                    },
                  },
                ]),
                n
              );
            })(R.default);
        },
        "./src/controller/level-helper.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "addGroupId", function () {
              return P;
            }),
            T.d(C, "assignTrackIdsByGroup", function () {
              return R;
            }),
            T.d(C, "updatePTS", function () {
              return A;
            }),
            T.d(C, "updateFragPTSDTS", function () {
              return y;
            }),
            T.d(C, "mergeDetails", function () {
              return S;
            }),
            T.d(C, "mapPartIntersection", function () {
              return g;
            }),
            T.d(C, "mapFragmentIntersection", function () {
              return m;
            }),
            T.d(C, "adjustSliding", function () {
              return l;
            }),
            T.d(C, "addSliding", function () {
              return t;
            }),
            T.d(C, "computeReloadInterval", function () {
              return n;
            }),
            T.d(C, "getFragmentWithSN", function () {
              return h;
            }),
            T.d(C, "getPartWith", function () {
              return v;
            });
          var M = T("./src/polyfills/number.ts"),
            O = T("./src/utils/logger.ts"),
            L = T("./src/loader/date-range.ts");
          function b() {
            return (
              (b = Object.assign
                ? Object.assign.bind()
                : function (i) {
                    for (var r = 1; r < arguments.length; r++) {
                      var o = arguments[r];
                      for (var d in o)
                        Object.prototype.hasOwnProperty.call(o, d) &&
                          (i[d] = o[d]);
                    }
                    return i;
                  }),
              b.apply(this, arguments)
            );
          }
          function P(i, r, o) {
            switch (r) {
              case "audio":
                i.audioGroupIds || (i.audioGroupIds = []),
                  i.audioGroupIds.push(o);
                break;
              case "text":
                i.textGroupIds || (i.textGroupIds = []), i.textGroupIds.push(o);
                break;
            }
          }
          function R(i) {
            var r = {};
            i.forEach(function (o) {
              var d = o.groupId || "";
              (o.id = r[d] = r[d] || 0), r[d]++;
            });
          }
          function A(i, r, o) {
            var d = i[r],
              e = i[o];
            p(d, e);
          }
          function p(i, r) {
            var o = r.startPTS;
            if (Object(M.isFiniteNumber)(o)) {
              var d = 0,
                e;
              r.sn > i.sn
                ? ((d = o - i.start), (e = i))
                : ((d = i.start - o), (e = r)),
                e.duration !== d && (e.duration = d);
            } else if (r.sn > i.sn) {
              var s = i.cc === r.cc;
              s && i.minEndPTS
                ? (r.start = i.start + (i.minEndPTS - i.start))
                : (r.start = i.start + i.duration);
            } else r.start = Math.max(i.start - r.duration, 0);
          }
          function y(i, r, o, d, e, s) {
            var u = d - o;
            u <= 0 &&
              (O.logger.warn("Fragment should have a positive duration", r),
              (d = o + r.duration),
              (s = e + r.duration));
            var a = o,
              f = d,
              c = r.startPTS,
              D = r.endPTS;
            if (Object(M.isFiniteNumber)(c)) {
              var x = Math.abs(c - o);
              Object(M.isFiniteNumber)(r.deltaPTS)
                ? (r.deltaPTS = Math.max(x, r.deltaPTS))
                : (r.deltaPTS = x),
                (a = Math.max(o, c)),
                (o = Math.min(o, c)),
                (e = Math.min(e, r.startDTS)),
                (f = Math.min(d, D)),
                (d = Math.max(d, D)),
                (s = Math.max(s, r.endDTS));
            }
            r.duration = d - o;
            var I = o - r.start;
            (r.appendedPTS = d),
              (r.start = r.startPTS = o),
              (r.maxStartPTS = a),
              (r.startDTS = e),
              (r.endPTS = d),
              (r.minEndPTS = f),
              (r.endDTS = s);
            var F = r.sn;
            if (!i || F < i.startSN || F > i.endSN) return 0;
            var _,
              B = F - i.startSN,
              U = i.fragments;
            for (U[B] = r, _ = B; _ > 0; _--) p(U[_], U[_ - 1]);
            for (_ = B; _ < U.length - 1; _++) p(U[_], U[_ + 1]);
            return (
              i.fragmentHint && p(U[U.length - 1], i.fragmentHint),
              (i.PTSKnown = i.alignedSliding = !0),
              I
            );
          }
          function S(i, r) {
            for (var o = null, d = i.fragments, e = d.length - 1; e >= 0; e--) {
              var s = d[e].initSegment;
              if (s) {
                o = s;
                break;
              }
            }
            i.fragmentHint && delete i.fragmentHint.endPTS;
            var u = 0,
              a;
            if (
              (m(i, r, function (_, B) {
                _.relurl && (u = _.cc - B.cc),
                  Object(M.isFiniteNumber)(_.startPTS) &&
                    Object(M.isFiniteNumber)(_.endPTS) &&
                    ((B.start = B.startPTS = _.startPTS),
                    (B.startDTS = _.startDTS),
                    (B.appendedPTS = _.appendedPTS),
                    (B.maxStartPTS = _.maxStartPTS),
                    (B.endPTS = _.endPTS),
                    (B.endDTS = _.endDTS),
                    (B.minEndPTS = _.minEndPTS),
                    (B.duration = _.endPTS - _.startPTS),
                    B.duration && (a = B),
                    (r.PTSKnown = r.alignedSliding = !0)),
                  (B.elementaryStreams = _.elementaryStreams),
                  (B.loader = _.loader),
                  (B.stats = _.stats),
                  (B.urlId = _.urlId),
                  _.initSegment &&
                    ((B.initSegment = _.initSegment), (o = _.initSegment));
              }),
              o)
            ) {
              var f = r.fragmentHint
                ? r.fragments.concat(r.fragmentHint)
                : r.fragments;
              f.forEach(function (_) {
                var B;
                (!_.initSegment ||
                  _.initSegment.relurl ===
                    ((B = o) === null || B === void 0 ? void 0 : B.relurl)) &&
                  (_.initSegment = o);
              });
            }
            if (r.skippedSegments)
              if (
                ((r.deltaUpdateFailed = r.fragments.some(function (_) {
                  return !_;
                })),
                r.deltaUpdateFailed)
              ) {
                O.logger.warn(
                  "[level-helper] Previous playlist missing segments skipped in delta playlist"
                );
                for (var c = r.skippedSegments; c--; ) r.fragments.shift();
                (r.startSN = r.fragments[0].sn),
                  (r.startCC = r.fragments[0].cc);
              } else
                r.canSkipDateRanges &&
                  (r.dateRanges = E(
                    i.dateRanges,
                    r.dateRanges,
                    r.recentlyRemovedDateranges
                  ));
            var D = r.fragments;
            if (u) {
              O.logger.warn(
                "discontinuity sliding from playlist, take drift into account"
              );
              for (var x = 0; x < D.length; x++) D[x].cc += u;
            }
            r.skippedSegments && (r.startCC = r.fragments[0].cc),
              g(i.partList, r.partList, function (_, B) {
                (B.elementaryStreams = _.elementaryStreams),
                  (B.stats = _.stats);
              }),
              a ? y(r, a, a.startPTS, a.endPTS, a.startDTS, a.endDTS) : l(i, r),
              D.length && (r.totalduration = r.edge - D[0].start),
              (r.driftStartTime = i.driftStartTime),
              (r.driftStart = i.driftStart);
            var I = r.advancedDateTime;
            if (r.advanced && I) {
              var F = r.edge;
              r.driftStart || ((r.driftStartTime = I), (r.driftStart = F)),
                (r.driftEndTime = I),
                (r.driftEnd = F);
            } else
              (r.driftEndTime = i.driftEndTime),
                (r.driftEnd = i.driftEnd),
                (r.advancedDateTime = i.advancedDateTime);
          }
          function E(i, r, o) {
            var d = b({}, i);
            return (
              o &&
                o.forEach(function (e) {
                  delete d[e];
                }),
              Object.keys(r).forEach(function (e) {
                var s = new L.DateRange(r[e].attr, d[e]);
                s.isValid
                  ? (d[e] = s)
                  : O.logger.warn(
                      'Ignoring invalid Playlist Delta Update DATERANGE tag: "' +
                        JSON.stringify(r[e].attr) +
                        '"'
                    );
              }),
              d
            );
          }
          function g(i, r, o) {
            if (i && r)
              for (var d = 0, e = 0, s = i.length; e <= s; e++) {
                var u = i[e],
                  a = r[e + d];
                u && a && u.index === a.index && u.fragment.sn === a.fragment.sn
                  ? o(u, a)
                  : d--;
              }
          }
          function m(i, r, o) {
            for (
              var d = r.skippedSegments,
                e = Math.max(i.startSN, r.startSN) - r.startSN,
                s =
                  (i.fragmentHint ? 1 : 0) +
                  (d ? r.endSN : Math.min(i.endSN, r.endSN)) -
                  r.startSN,
                u = r.startSN - i.startSN,
                a = r.fragmentHint
                  ? r.fragments.concat(r.fragmentHint)
                  : r.fragments,
                f = i.fragmentHint
                  ? i.fragments.concat(i.fragmentHint)
                  : i.fragments,
                c = e;
              c <= s;
              c++
            ) {
              var D = f[u + c],
                x = a[c];
              d && !x && c < d && (x = r.fragments[c] = D), D && x && o(D, x);
            }
          }
          function l(i, r) {
            var o = r.startSN + r.skippedSegments - i.startSN,
              d = i.fragments;
            o < 0 || o >= d.length || t(r, d[o].start);
          }
          function t(i, r) {
            if (r) {
              for (
                var o = i.fragments, d = i.skippedSegments;
                d < o.length;
                d++
              )
                o[d].start += r;
              i.fragmentHint && (i.fragmentHint.start += r);
            }
          }
          function n(i, r) {
            var o = 1e3 * i.levelTargetDuration,
              d = o / 2,
              e = i.age,
              s = e > 0 && e < o * 3,
              u = r.loading.end - r.loading.start,
              a,
              f = i.availabilityDelay;
            if (i.updated === !1)
              if (s) {
                var c = 333 * i.misses;
                (a = Math.max(Math.min(d, u * 2), c)),
                  (i.availabilityDelay = (i.availabilityDelay || 0) + a);
              } else a = d;
            else
              s
                ? ((f = Math.min(f || o / 2, e)),
                  (i.availabilityDelay = f),
                  (a = f + o - e))
                : (a = o - u);
            return Math.round(a);
          }
          function h(i, r, o) {
            if (!i || !i.details) return null;
            var d = i.details,
              e = d.fragments[r - d.startSN];
            return e || ((e = d.fragmentHint), e && e.sn === r)
              ? e
              : r < d.startSN && o && o.sn === r
              ? o
              : null;
          }
          function v(i, r, o) {
            if (!i || !i.details) return null;
            var d = i.details.partList;
            if (d)
              for (var e = d.length; e--; ) {
                var s = d[e];
                if (s.index === o && s.fragment.sn === r) return s;
              }
            return null;
          }
        },
        "./src/controller/stream-controller.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "default", function () {
              return v;
            });
          var M = T("./src/polyfills/number.ts"),
            O = T("./src/controller/base-stream-controller.ts"),
            L = T("./src/is-supported.ts"),
            b = T("./src/events.ts"),
            P = T("./src/utils/buffer-helper.ts"),
            R = T("./src/controller/fragment-tracker.ts"),
            A = T("./src/types/loader.ts"),
            p = T("./src/loader/fragment.ts"),
            y = T("./src/demux/transmuxer-interface.ts"),
            S = T("./src/types/transmuxer.ts"),
            E = T("./src/controller/gap-controller.ts"),
            g = T("./src/errors.ts");
          function m(i, r) {
            for (var o = 0; o < r.length; o++) {
              var d = r[o];
              (d.enumerable = d.enumerable || !1),
                (d.configurable = !0),
                "value" in d && (d.writable = !0),
                Object.defineProperty(i, d.key, d);
            }
          }
          function l(i, r, o) {
            return (
              r && m(i.prototype, r),
              o && m(i, o),
              Object.defineProperty(i, "prototype", { writable: !1 }),
              i
            );
          }
          function t(i, r) {
            (i.prototype = Object.create(r.prototype)),
              (i.prototype.constructor = i),
              n(i, r);
          }
          function n(i, r) {
            return (
              (n = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (d, e) {
                    return (d.__proto__ = e), d;
                  }),
              n(i, r)
            );
          }
          var h = 100,
            v = (function (i) {
              t(r, i);
              function r(d, e) {
                var s;
                return (
                  (s = i.call(this, d, e, "[stream-controller]") || this),
                  (s.audioCodecSwap = !1),
                  (s.gapController = null),
                  (s.level = -1),
                  (s._forceStartLoad = !1),
                  (s.altAudio = !1),
                  (s.audioOnly = !1),
                  (s.fragPlaying = null),
                  (s.onvplaying = null),
                  (s.onvseeked = null),
                  (s.fragLastKbps = 0),
                  (s.couldBacktrack = !1),
                  (s.backtrackFragment = null),
                  (s.audioCodecSwitch = !1),
                  (s.videoBuffer = null),
                  s._registerListeners(),
                  s
                );
              }
              var o = r.prototype;
              return (
                (o._registerListeners = function () {
                  var e = this.hls;
                  e.on(b.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                    e.on(b.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                    e.on(
                      b.Events.MANIFEST_LOADING,
                      this.onManifestLoading,
                      this
                    ),
                    e.on(b.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                    e.on(b.Events.LEVEL_LOADING, this.onLevelLoading, this),
                    e.on(b.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                    e.on(
                      b.Events.FRAG_LOAD_EMERGENCY_ABORTED,
                      this.onFragLoadEmergencyAborted,
                      this
                    ),
                    e.on(b.Events.ERROR, this.onError, this),
                    e.on(
                      b.Events.AUDIO_TRACK_SWITCHING,
                      this.onAudioTrackSwitching,
                      this
                    ),
                    e.on(
                      b.Events.AUDIO_TRACK_SWITCHED,
                      this.onAudioTrackSwitched,
                      this
                    ),
                    e.on(b.Events.BUFFER_CREATED, this.onBufferCreated, this),
                    e.on(b.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
                    e.on(b.Events.LEVELS_UPDATED, this.onLevelsUpdated, this),
                    e.on(b.Events.FRAG_BUFFERED, this.onFragBuffered, this);
                }),
                (o._unregisterListeners = function () {
                  var e = this.hls;
                  e.off(b.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                    e.off(
                      b.Events.MEDIA_DETACHING,
                      this.onMediaDetaching,
                      this
                    ),
                    e.off(
                      b.Events.MANIFEST_LOADING,
                      this.onManifestLoading,
                      this
                    ),
                    e.off(
                      b.Events.MANIFEST_PARSED,
                      this.onManifestParsed,
                      this
                    ),
                    e.off(b.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                    e.off(
                      b.Events.FRAG_LOAD_EMERGENCY_ABORTED,
                      this.onFragLoadEmergencyAborted,
                      this
                    ),
                    e.off(b.Events.ERROR, this.onError, this),
                    e.off(
                      b.Events.AUDIO_TRACK_SWITCHING,
                      this.onAudioTrackSwitching,
                      this
                    ),
                    e.off(
                      b.Events.AUDIO_TRACK_SWITCHED,
                      this.onAudioTrackSwitched,
                      this
                    ),
                    e.off(b.Events.BUFFER_CREATED, this.onBufferCreated, this),
                    e.off(b.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
                    e.off(b.Events.LEVELS_UPDATED, this.onLevelsUpdated, this),
                    e.off(b.Events.FRAG_BUFFERED, this.onFragBuffered, this);
                }),
                (o.onHandlerDestroying = function () {
                  this._unregisterListeners(), this.onMediaDetaching();
                }),
                (o.startLoad = function (e) {
                  if (this.levels) {
                    var s = this.lastCurrentTime,
                      u = this.hls;
                    if (
                      (this.stopLoad(),
                      this.setInterval(h),
                      (this.level = -1),
                      (this.fragLoadError = 0),
                      !this.startFragRequested)
                    ) {
                      var a = u.startLevel;
                      a === -1 &&
                        (u.config.testBandwidth && this.levels.length > 1
                          ? ((a = 0), (this.bitrateTest = !0))
                          : (a = u.nextAutoLevel)),
                        (this.level = u.nextLoadLevel = a),
                        (this.loadedmetadata = !1);
                    }
                    s > 0 &&
                      e === -1 &&
                      (this.log(
                        "Override startPosition with lastCurrentTime @" +
                          s.toFixed(3)
                      ),
                      (e = s)),
                      (this.state = O.State.IDLE),
                      (this.nextLoadPosition =
                        this.startPosition =
                        this.lastCurrentTime =
                          e),
                      this.tick();
                  } else
                    (this._forceStartLoad = !0), (this.state = O.State.STOPPED);
                }),
                (o.stopLoad = function () {
                  (this._forceStartLoad = !1), i.prototype.stopLoad.call(this);
                }),
                (o.doTick = function () {
                  switch (this.state) {
                    case O.State.IDLE:
                      this.doTickIdle();
                      break;
                    case O.State.WAITING_LEVEL: {
                      var e,
                        s = this.levels,
                        u = this.level,
                        a =
                          s == null || (e = s[u]) === null || e === void 0
                            ? void 0
                            : e.details;
                      if (
                        a &&
                        (!a.live || this.levelLastLoaded === this.level)
                      ) {
                        if (this.waitForCdnTuneIn(a)) break;
                        this.state = O.State.IDLE;
                        break;
                      }
                      break;
                    }
                    case O.State.FRAG_LOADING_WAITING_RETRY:
                      {
                        var f,
                          c = self.performance.now(),
                          D = this.retryDate;
                        (!D ||
                          c >= D ||
                          ((f = this.media) !== null &&
                            f !== void 0 &&
                            f.seeking)) &&
                          (this.log(
                            "retryDate reached, switch back to IDLE state"
                          ),
                          this.resetStartWhenNotLoaded(this.level),
                          (this.state = O.State.IDLE));
                      }
                      break;
                    default:
                      break;
                  }
                  this.onTickEnd();
                }),
                (o.onTickEnd = function () {
                  i.prototype.onTickEnd.call(this),
                    this.checkBuffer(),
                    this.checkFragmentChanged();
                }),
                (o.doTickIdle = function () {
                  var e,
                    s,
                    u = this.hls,
                    a = this.levelLastLoaded,
                    f = this.levels,
                    c = this.media,
                    D = u.config,
                    x = u.nextLoadLevel;
                  if (
                    !(
                      a === null ||
                      (!c && (this.startFragRequested || !D.startFragPrefetch))
                    ) &&
                    !(this.altAudio && this.audioOnly) &&
                    !(!f || !f[x])
                  ) {
                    var I = f[x];
                    this.level = u.nextLoadLevel = x;
                    var F = I.details;
                    if (
                      !F ||
                      this.state === O.State.WAITING_LEVEL ||
                      (F.live && this.levelLastLoaded !== x)
                    ) {
                      this.state = O.State.WAITING_LEVEL;
                      return;
                    }
                    var _ = this.getMainFwdBufferInfo();
                    if (_ !== null) {
                      var B = _.len,
                        U = this.getMaxBufferLength(I.maxBitrate);
                      if (!(B >= U)) {
                        if (this._streamEnded(_, F)) {
                          var N = {};
                          this.altAudio && (N.type = "video"),
                            this.hls.trigger(b.Events.BUFFER_EOS, N),
                            (this.state = O.State.ENDED);
                          return;
                        }
                        this.backtrackFragment &&
                          this.backtrackFragment.start > _.end &&
                          (this.backtrackFragment = null);
                        var w = this.backtrackFragment
                            ? this.backtrackFragment.start
                            : _.end,
                          k = this.getNextFragment(w, F);
                        if (
                          this.couldBacktrack &&
                          !this.fragPrevious &&
                          k &&
                          k.sn !== "initSegment" &&
                          this.fragmentTracker.getState(k) !==
                            R.FragmentState.OK
                        ) {
                          var K,
                            j = ((K = this.backtrackFragment) != null ? K : k)
                              .sn,
                            G = j - F.startSN,
                            Y = F.fragments[G - 1];
                          Y &&
                            k.cc === Y.cc &&
                            ((k = Y), this.fragmentTracker.removeFragment(Y));
                        } else
                          this.backtrackFragment &&
                            _.len &&
                            (this.backtrackFragment = null);
                        if (
                          k &&
                          this.fragmentTracker.getState(k) ===
                            R.FragmentState.OK &&
                          this.nextLoadPosition > w
                        ) {
                          var X =
                            this.audioOnly && !this.altAudio
                              ? p.ElementaryStreamTypes.AUDIO
                              : p.ElementaryStreamTypes.VIDEO;
                          c &&
                            this.afterBufferFlushed(
                              c,
                              X,
                              A.PlaylistLevelType.MAIN
                            ),
                            (k = this.getNextFragment(
                              this.nextLoadPosition,
                              F
                            ));
                        }
                        !k ||
                          (k.initSegment &&
                            !k.initSegment.data &&
                            !this.bitrateTest &&
                            (k = k.initSegment),
                          ((e = k.decryptdata) === null || e === void 0
                            ? void 0
                            : e.keyFormat) === "identity" &&
                          !(
                            (s = k.decryptdata) !== null &&
                            s !== void 0 &&
                            s.key
                          )
                            ? this.loadKey(k, F)
                            : this.loadFragment(k, F, w));
                      }
                    }
                  }
                }),
                (o.loadFragment = function (e, s, u) {
                  var a,
                    f = this.fragmentTracker.getState(e);
                  (this.fragCurrent = e),
                    f === R.FragmentState.NOT_LOADED
                      ? e.sn === "initSegment"
                        ? this._loadInitSegment(e)
                        : this.bitrateTest
                        ? (this.log(
                            "Fragment " +
                              e.sn +
                              " of level " +
                              e.level +
                              " is being downloaded to test bitrate and will not be buffered"
                          ),
                          this._loadBitrateTestFrag(e))
                        : ((this.startFragRequested = !0),
                          i.prototype.loadFragment.call(this, e, s, u))
                      : f === R.FragmentState.APPENDING
                      ? this.reduceMaxBufferLength(e.duration) &&
                        this.fragmentTracker.removeFragment(e)
                      : ((a = this.media) === null || a === void 0
                          ? void 0
                          : a.buffered.length) === 0 &&
                        this.fragmentTracker.removeAllFragments();
                }),
                (o.getAppendedFrag = function (e) {
                  var s = this.fragmentTracker.getAppendedFrag(
                    e,
                    A.PlaylistLevelType.MAIN
                  );
                  return s && "fragment" in s ? s.fragment : s;
                }),
                (o.getBufferedFrag = function (e) {
                  return this.fragmentTracker.getBufferedFrag(
                    e,
                    A.PlaylistLevelType.MAIN
                  );
                }),
                (o.followingBufferedFrag = function (e) {
                  return e ? this.getBufferedFrag(e.end + 0.5) : null;
                }),
                (o.immediateLevelSwitch = function () {
                  this.abortCurrentFrag(),
                    this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
                }),
                (o.nextLevelSwitch = function () {
                  var e = this.levels,
                    s = this.media;
                  if (s != null && s.readyState) {
                    var u,
                      a = this.getAppendedFrag(s.currentTime);
                    if (
                      (a && a.start > 1 && this.flushMainBuffer(0, a.start - 1),
                      !s.paused && e)
                    ) {
                      var f = this.hls.nextLoadLevel,
                        c = e[f],
                        D = this.fragLastKbps;
                      D && this.fragCurrent
                        ? (u =
                            (this.fragCurrent.duration * c.maxBitrate) /
                              (1e3 * D) +
                            1)
                        : (u = 0);
                    } else u = 0;
                    var x = this.getBufferedFrag(s.currentTime + u);
                    if (x) {
                      var I = this.followingBufferedFrag(x);
                      if (I) {
                        this.abortCurrentFrag();
                        var F = I.maxStartPTS ? I.maxStartPTS : I.start,
                          _ = I.duration,
                          B = Math.max(
                            x.end,
                            F +
                              Math.min(
                                Math.max(
                                  _ - this.config.maxFragLookUpTolerance,
                                  _ * 0.5
                                ),
                                _ * 0.75
                              )
                          );
                        this.flushMainBuffer(B, Number.POSITIVE_INFINITY);
                      }
                    }
                  }
                }),
                (o.abortCurrentFrag = function () {
                  var e = this.fragCurrent;
                  switch (
                    ((this.fragCurrent = null),
                    (this.backtrackFragment = null),
                    e != null && e.loader && e.loader.abort(),
                    this.state)
                  ) {
                    case O.State.KEY_LOADING:
                    case O.State.FRAG_LOADING:
                    case O.State.FRAG_LOADING_WAITING_RETRY:
                    case O.State.PARSING:
                    case O.State.PARSED:
                      this.state = O.State.IDLE;
                      break;
                  }
                  this.nextLoadPosition = this.getLoadPosition();
                }),
                (o.flushMainBuffer = function (e, s) {
                  i.prototype.flushMainBuffer.call(
                    this,
                    e,
                    s,
                    this.altAudio ? "video" : null
                  );
                }),
                (o.onMediaAttached = function (e, s) {
                  i.prototype.onMediaAttached.call(this, e, s);
                  var u = s.media;
                  (this.onvplaying = this.onMediaPlaying.bind(this)),
                    (this.onvseeked = this.onMediaSeeked.bind(this)),
                    u.addEventListener("playing", this.onvplaying),
                    u.addEventListener("seeked", this.onvseeked),
                    (this.gapController = new E.default(
                      this.config,
                      u,
                      this.fragmentTracker,
                      this.hls
                    ));
                }),
                (o.onMediaDetaching = function () {
                  var e = this.media;
                  e &&
                    this.onvplaying &&
                    this.onvseeked &&
                    (e.removeEventListener("playing", this.onvplaying),
                    e.removeEventListener("seeked", this.onvseeked),
                    (this.onvplaying = this.onvseeked = null),
                    (this.videoBuffer = null)),
                    (this.fragPlaying = null),
                    this.gapController &&
                      (this.gapController.destroy(),
                      (this.gapController = null)),
                    i.prototype.onMediaDetaching.call(this);
                }),
                (o.onMediaPlaying = function () {
                  this.tick();
                }),
                (o.onMediaSeeked = function () {
                  var e = this.media,
                    s = e ? e.currentTime : null;
                  Object(M.isFiniteNumber)(s) &&
                    this.log("Media seeked to " + s.toFixed(3)),
                    this.tick();
                }),
                (o.onManifestLoading = function () {
                  this.log("Trigger BUFFER_RESET"),
                    this.hls.trigger(b.Events.BUFFER_RESET, void 0),
                    this.fragmentTracker.removeAllFragments(),
                    (this.couldBacktrack = !1),
                    (this.startPosition = this.lastCurrentTime = 0),
                    (this.fragPlaying = null),
                    (this.backtrackFragment = null);
                }),
                (o.onManifestParsed = function (e, s) {
                  var u = !1,
                    a = !1,
                    f;
                  s.levels.forEach(function (c) {
                    (f = c.audioCodec),
                      f &&
                        (f.indexOf("mp4a.40.2") !== -1 && (u = !0),
                        f.indexOf("mp4a.40.5") !== -1 && (a = !0));
                  }),
                    (this.audioCodecSwitch =
                      u && a && !Object(L.changeTypeSupported)()),
                    this.audioCodecSwitch &&
                      this.log(
                        "Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"
                      ),
                    (this.levels = s.levels),
                    (this.startFragRequested = !1);
                }),
                (o.onLevelLoading = function (e, s) {
                  var u = this.levels;
                  if (!(!u || this.state !== O.State.IDLE)) {
                    var a = u[s.level];
                    (!a.details ||
                      (a.details.live && this.levelLastLoaded !== s.level) ||
                      this.waitForCdnTuneIn(a.details)) &&
                      (this.state = O.State.WAITING_LEVEL);
                  }
                }),
                (o.onLevelLoaded = function (e, s) {
                  var u,
                    a = this.levels,
                    f = s.level,
                    c = s.details,
                    D = c.totalduration;
                  if (!a) {
                    this.warn("Levels were reset while loading level " + f);
                    return;
                  }
                  this.log(
                    "Level " +
                      f +
                      " loaded [" +
                      c.startSN +
                      "," +
                      c.endSN +
                      "], cc [" +
                      c.startCC +
                      ", " +
                      c.endCC +
                      "] duration:" +
                      D
                  );
                  var x = this.fragCurrent;
                  x &&
                    (this.state === O.State.FRAG_LOADING ||
                      this.state === O.State.FRAG_LOADING_WAITING_RETRY) &&
                    x.level !== s.level &&
                    x.loader &&
                    ((this.state = O.State.IDLE),
                    (this.backtrackFragment = null),
                    x.loader.abort());
                  var I = a[f],
                    F = 0;
                  if (
                    c.live ||
                    ((u = I.details) !== null && u !== void 0 && u.live)
                  ) {
                    if (
                      (c.fragments[0] || (c.deltaUpdateFailed = !0),
                      c.deltaUpdateFailed)
                    )
                      return;
                    F = this.alignPlaylists(c, I.details);
                  }
                  if (
                    ((I.details = c),
                    (this.levelLastLoaded = f),
                    this.hls.trigger(b.Events.LEVEL_UPDATED, {
                      details: c,
                      level: f,
                    }),
                    this.state === O.State.WAITING_LEVEL)
                  ) {
                    if (this.waitForCdnTuneIn(c)) return;
                    this.state = O.State.IDLE;
                  }
                  this.startFragRequested
                    ? c.live && this.synchronizeToLiveEdge(c)
                    : this.setStartPosition(c, F),
                    this.tick();
                }),
                (o._handleFragmentLoadProgress = function (e) {
                  var s,
                    u = e.frag,
                    a = e.part,
                    f = e.payload,
                    c = this.levels;
                  if (!c) {
                    this.warn(
                      "Levels were reset while fragment load was in progress. Fragment " +
                        u.sn +
                        " of level " +
                        u.level +
                        " will not be buffered"
                    );
                    return;
                  }
                  var D = c[u.level],
                    x = D.details;
                  if (!x) {
                    this.warn(
                      "Dropping fragment " +
                        u.sn +
                        " of level " +
                        u.level +
                        " after level details were reset"
                    );
                    return;
                  }
                  var I = D.videoCodec,
                    F = x.PTSKnown || !x.live,
                    _ =
                      (s = u.initSegment) === null || s === void 0
                        ? void 0
                        : s.data,
                    B = this._getAudioCodec(D),
                    U = (this.transmuxer =
                      this.transmuxer ||
                      new y.default(
                        this.hls,
                        A.PlaylistLevelType.MAIN,
                        this._handleTransmuxComplete.bind(this),
                        this._handleTransmuxerFlush.bind(this)
                      )),
                    N = a ? a.index : -1,
                    w = N !== -1,
                    k = new S.ChunkMetadata(
                      u.level,
                      u.sn,
                      u.stats.chunkCount,
                      f.byteLength,
                      N,
                      w
                    ),
                    K = this.initPTS[u.cc];
                  U.push(f, _, B, I, u, a, x.totalduration, F, k, K);
                }),
                (o.onAudioTrackSwitching = function (e, s) {
                  var u = this.altAudio,
                    a = !!s.url,
                    f = s.id;
                  if (!a) {
                    if (this.mediaBuffer !== this.media) {
                      this.log(
                        "Switching on main audio, use media.buffered to schedule main fragment loading"
                      ),
                        (this.mediaBuffer = this.media);
                      var c = this.fragCurrent;
                      c != null &&
                        c.loader &&
                        (this.log(
                          "Switching to main audio track, cancel main fragment load"
                        ),
                        c.loader.abort()),
                        this.resetTransmuxer(),
                        this.resetLoadingState();
                    } else this.audioOnly && this.resetTransmuxer();
                    var D = this.hls;
                    u &&
                      D.trigger(b.Events.BUFFER_FLUSHING, {
                        startOffset: 0,
                        endOffset: Number.POSITIVE_INFINITY,
                        type: "audio",
                      }),
                      D.trigger(b.Events.AUDIO_TRACK_SWITCHED, { id: f });
                  }
                }),
                (o.onAudioTrackSwitched = function (e, s) {
                  var u = s.id,
                    a = !!this.hls.audioTracks[u].url;
                  if (a) {
                    var f = this.videoBuffer;
                    f &&
                      this.mediaBuffer !== f &&
                      (this.log(
                        "Switching on alternate audio, use video.buffered to schedule main fragment loading"
                      ),
                      (this.mediaBuffer = f));
                  }
                  (this.altAudio = a), this.tick();
                }),
                (o.onBufferCreated = function (e, s) {
                  var u = s.tracks,
                    a,
                    f,
                    c = !1;
                  for (var D in u) {
                    var x = u[D];
                    if (x.id === "main") {
                      if (((f = D), (a = x), D === "video")) {
                        var I = u[D];
                        I && (this.videoBuffer = I.buffer);
                      }
                    } else c = !0;
                  }
                  c && a
                    ? (this.log(
                        "Alternate track found, use " +
                          f +
                          ".buffered to schedule main fragment loading"
                      ),
                      (this.mediaBuffer = a.buffer))
                    : (this.mediaBuffer = this.media);
                }),
                (o.onFragBuffered = function (e, s) {
                  var u = s.frag,
                    a = s.part;
                  if (!(u && u.type !== A.PlaylistLevelType.MAIN)) {
                    if (this.fragContextChanged(u)) {
                      this.warn(
                        "Fragment " +
                          u.sn +
                          (a ? " p: " + a.index : "") +
                          " of level " +
                          u.level +
                          " finished buffering, but was aborted. state: " +
                          this.state
                      ),
                        this.state === O.State.PARSED &&
                          (this.state = O.State.IDLE);
                      return;
                    }
                    var f = a ? a.stats : u.stats;
                    (this.fragLastKbps = Math.round(
                      (8 * f.total) / (f.buffering.end - f.loading.first)
                    )),
                      u.sn !== "initSegment" && (this.fragPrevious = u),
                      this.fragBufferedComplete(u, a);
                  }
                }),
                (o.onError = function (e, s) {
                  switch (s.details) {
                    case g.ErrorDetails.FRAG_LOAD_ERROR:
                    case g.ErrorDetails.FRAG_LOAD_TIMEOUT:
                    case g.ErrorDetails.KEY_LOAD_ERROR:
                    case g.ErrorDetails.KEY_LOAD_TIMEOUT:
                      this.onFragmentOrKeyLoadError(
                        A.PlaylistLevelType.MAIN,
                        s
                      );
                      break;
                    case g.ErrorDetails.LEVEL_LOAD_ERROR:
                    case g.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                      this.state !== O.State.ERROR &&
                        (s.fatal
                          ? (this.warn("" + s.details),
                            (this.state = O.State.ERROR))
                          : !s.levelRetry &&
                            this.state === O.State.WAITING_LEVEL &&
                            (this.state = O.State.IDLE));
                      break;
                    case g.ErrorDetails.BUFFER_FULL_ERROR:
                      if (
                        s.parent === "main" &&
                        (this.state === O.State.PARSING ||
                          this.state === O.State.PARSED)
                      ) {
                        var u = !0,
                          a = this.getFwdBufferInfo(
                            this.media,
                            A.PlaylistLevelType.MAIN
                          );
                        a &&
                          a.len > 0.5 &&
                          (u = !this.reduceMaxBufferLength(a.len)),
                          u &&
                            (this.warn(
                              "buffer full error also media.currentTime is not buffered, flush main"
                            ),
                            this.immediateLevelSwitch()),
                          this.resetLoadingState();
                      }
                      break;
                    default:
                      break;
                  }
                }),
                (o.checkBuffer = function () {
                  var e = this.media,
                    s = this.gapController;
                  if (!(!e || !s || !e.readyState)) {
                    if (
                      this.loadedmetadata ||
                      !P.BufferHelper.getBuffered(e).length
                    ) {
                      var u =
                        this.state !== O.State.IDLE ? this.fragCurrent : null;
                      s.poll(this.lastCurrentTime, u);
                    }
                    this.lastCurrentTime = e.currentTime;
                  }
                }),
                (o.onFragLoadEmergencyAborted = function () {
                  (this.state = O.State.IDLE),
                    this.loadedmetadata ||
                      ((this.startFragRequested = !1),
                      (this.nextLoadPosition = this.startPosition)),
                    this.tickImmediate();
                }),
                (o.onBufferFlushed = function (e, s) {
                  var u = s.type;
                  if (
                    u !== p.ElementaryStreamTypes.AUDIO ||
                    (this.audioOnly && !this.altAudio)
                  ) {
                    var a =
                      (u === p.ElementaryStreamTypes.VIDEO
                        ? this.videoBuffer
                        : this.mediaBuffer) || this.media;
                    this.afterBufferFlushed(a, u, A.PlaylistLevelType.MAIN);
                  }
                }),
                (o.onLevelsUpdated = function (e, s) {
                  this.levels = s.levels;
                }),
                (o.swapAudioCodec = function () {
                  this.audioCodecSwap = !this.audioCodecSwap;
                }),
                (o.seekToStartPos = function () {
                  var e = this.media;
                  if (!!e) {
                    var s = e.currentTime,
                      u = this.startPosition;
                    if (u >= 0 && s < u) {
                      if (e.seeking) {
                        this.log(
                          "could not seek to " + u + ", already seeking at " + s
                        );
                        return;
                      }
                      var a = P.BufferHelper.getBuffered(e),
                        f = a.length ? a.start(0) : 0,
                        c = f - u;
                      c > 0 &&
                        (c < this.config.maxBufferHole ||
                          c < this.config.maxFragLookUpTolerance) &&
                        (this.log(
                          "adjusting start position by " +
                            c +
                            " to match buffer start"
                        ),
                        (u += c),
                        (this.startPosition = u)),
                        this.log(
                          "seek to target start position " +
                            u +
                            " from current time " +
                            s
                        ),
                        (e.currentTime = u);
                    }
                  }
                }),
                (o._getAudioCodec = function (e) {
                  var s = this.config.defaultAudioCodec || e.audioCodec;
                  return (
                    this.audioCodecSwap &&
                      s &&
                      (this.log("Swapping audio codec"),
                      s.indexOf("mp4a.40.5") !== -1
                        ? (s = "mp4a.40.2")
                        : (s = "mp4a.40.5")),
                    s
                  );
                }),
                (o._loadBitrateTestFrag = function (e) {
                  var s = this;
                  (e.bitrateTest = !0),
                    this._doFragLoad(e).then(function (u) {
                      var a = s.hls;
                      if (!(!u || a.nextLoadLevel || s.fragContextChanged(e))) {
                        (s.fragLoadError = 0),
                          (s.state = O.State.IDLE),
                          (s.startFragRequested = !1),
                          (s.bitrateTest = !1);
                        var f = e.stats;
                        (f.parsing.start =
                          f.parsing.end =
                          f.buffering.start =
                          f.buffering.end =
                            self.performance.now()),
                          a.trigger(b.Events.FRAG_LOADED, u),
                          (e.bitrateTest = !1);
                      }
                    });
                }),
                (o._handleTransmuxComplete = function (e) {
                  var s,
                    u = "main",
                    a = this.hls,
                    f = e.remuxResult,
                    c = e.chunkMeta,
                    D = this.getCurrentContext(c);
                  if (!D) {
                    this.warn(
                      "The loading context changed while buffering fragment " +
                        c.sn +
                        " of level " +
                        c.level +
                        ". This chunk will not be buffered."
                    ),
                      this.resetStartWhenNotLoaded(c.level);
                    return;
                  }
                  var x = D.frag,
                    I = D.part,
                    F = D.level,
                    _ = f.video,
                    B = f.text,
                    U = f.id3,
                    N = f.initSegment,
                    w = F.details,
                    k = this.altAudio ? void 0 : f.audio;
                  if (!this.fragContextChanged(x)) {
                    if (((this.state = O.State.PARSING), N)) {
                      N.tracks &&
                        (this._bufferInitSegment(F, N.tracks, x, c),
                        a.trigger(b.Events.FRAG_PARSING_INIT_SEGMENT, {
                          frag: x,
                          id: u,
                          tracks: N.tracks,
                        }));
                      var K = N.initPTS,
                        j = N.timescale;
                      Object(M.isFiniteNumber)(K) &&
                        ((this.initPTS[x.cc] = K),
                        a.trigger(b.Events.INIT_PTS_FOUND, {
                          frag: x,
                          id: u,
                          initPTS: K,
                          timescale: j,
                        }));
                    }
                    if (_ && f.independent !== !1) {
                      if (w) {
                        var G = _.startPTS,
                          Y = _.endPTS,
                          X = _.startDTS,
                          z = _.endDTS;
                        if (I)
                          I.elementaryStreams[_.type] = {
                            startPTS: G,
                            endPTS: Y,
                            startDTS: X,
                            endDTS: z,
                          };
                        else if (
                          (_.firstKeyFrame &&
                            _.independent &&
                            (this.couldBacktrack = !0),
                          _.dropped && _.independent)
                        ) {
                          var H = this.getMainFwdBufferInfo(),
                            Q =
                              (H ? H.end : this.getLoadPosition()) +
                              this.config.maxBufferHole,
                            $ = _.firstKeyFramePTS ? _.firstKeyFramePTS : G;
                          if (Q < $ - this.config.maxBufferHole) {
                            this.backtrack(x);
                            return;
                          }
                          x.setElementaryStreamInfo(
                            _.type,
                            x.start,
                            Y,
                            x.start,
                            z,
                            !0
                          );
                        }
                        x.setElementaryStreamInfo(_.type, G, Y, X, z),
                          this.backtrackFragment &&
                            (this.backtrackFragment = x),
                          this.bufferFragmentData(_, x, I, c);
                      }
                    } else if (f.independent === !1) {
                      this.backtrack(x);
                      return;
                    }
                    if (k) {
                      var V = k.startPTS,
                        J = k.endPTS,
                        Z = k.startDTS,
                        q = k.endDTS;
                      I &&
                        (I.elementaryStreams[p.ElementaryStreamTypes.AUDIO] = {
                          startPTS: V,
                          endPTS: J,
                          startDTS: Z,
                          endDTS: q,
                        }),
                        x.setElementaryStreamInfo(
                          p.ElementaryStreamTypes.AUDIO,
                          V,
                          J,
                          Z,
                          q
                        ),
                        this.bufferFragmentData(k, x, I, c);
                    }
                    if (
                      w &&
                      U !== null &&
                      U !== void 0 &&
                      (s = U.samples) !== null &&
                      s !== void 0 &&
                      s.length
                    ) {
                      var ot = {
                        id: u,
                        frag: x,
                        details: w,
                        samples: U.samples,
                      };
                      a.trigger(b.Events.FRAG_PARSING_METADATA, ot);
                    }
                    if (w && B) {
                      var tt = {
                        id: u,
                        frag: x,
                        details: w,
                        samples: B.samples,
                      };
                      a.trigger(b.Events.FRAG_PARSING_USERDATA, tt);
                    }
                  }
                }),
                (o._bufferInitSegment = function (e, s, u, a) {
                  var f = this;
                  if (this.state === O.State.PARSING) {
                    (this.audioOnly = !!s.audio && !s.video),
                      this.altAudio && !this.audioOnly && delete s.audio;
                    var c = s.audio,
                      D = s.video,
                      x = s.audiovideo;
                    if (c) {
                      var I = e.audioCodec,
                        F = navigator.userAgent.toLowerCase();
                      this.audioCodecSwitch &&
                        (I &&
                          (I.indexOf("mp4a.40.5") !== -1
                            ? (I = "mp4a.40.2")
                            : (I = "mp4a.40.5")),
                        c.metadata.channelCount !== 1 &&
                          F.indexOf("firefox") === -1 &&
                          (I = "mp4a.40.5")),
                        F.indexOf("android") !== -1 &&
                          c.container !== "audio/mpeg" &&
                          ((I = "mp4a.40.2"),
                          this.log("Android: force audio codec to " + I)),
                        e.audioCodec &&
                          e.audioCodec !== I &&
                          this.log(
                            'Swapping manifest audio codec "' +
                              e.audioCodec +
                              '" for "' +
                              I +
                              '"'
                          ),
                        (c.levelCodec = I),
                        (c.id = "main"),
                        this.log(
                          "Init audio buffer, container:" +
                            c.container +
                            ", codecs[selected/level/parsed]=[" +
                            (I || "") +
                            "/" +
                            (e.audioCodec || "") +
                            "/" +
                            c.codec +
                            "]"
                        );
                    }
                    D &&
                      ((D.levelCodec = e.videoCodec),
                      (D.id = "main"),
                      this.log(
                        "Init video buffer, container:" +
                          D.container +
                          ", codecs[level/parsed]=[" +
                          (e.videoCodec || "") +
                          "/" +
                          D.codec +
                          "]"
                      )),
                      x &&
                        this.log(
                          "Init audiovideo buffer, container:" +
                            x.container +
                            ", codecs[level/parsed]=[" +
                            (e.attrs.CODECS || "") +
                            "/" +
                            x.codec +
                            "]"
                        ),
                      this.hls.trigger(b.Events.BUFFER_CODECS, s),
                      Object.keys(s).forEach(function (_) {
                        var B = s[_],
                          U = B.initSegment;
                        U != null &&
                          U.byteLength &&
                          f.hls.trigger(b.Events.BUFFER_APPENDING, {
                            type: _,
                            data: U,
                            frag: u,
                            part: null,
                            chunkMeta: a,
                            parent: u.type,
                          });
                      }),
                      this.tick();
                  }
                }),
                (o.getMainFwdBufferInfo = function () {
                  return this.getFwdBufferInfo(
                    this.mediaBuffer ? this.mediaBuffer : this.media,
                    A.PlaylistLevelType.MAIN
                  );
                }),
                (o.backtrack = function (e) {
                  (this.couldBacktrack = !0),
                    (this.backtrackFragment = e),
                    this.resetTransmuxer(),
                    this.flushBufferGap(e),
                    this.fragmentTracker.removeFragment(e),
                    (this.fragPrevious = null),
                    (this.nextLoadPosition = e.start),
                    (this.state = O.State.IDLE);
                }),
                (o.checkFragmentChanged = function () {
                  var e = this.media,
                    s = null;
                  if (e && e.readyState > 1 && e.seeking === !1) {
                    var u = e.currentTime;
                    if (
                      (P.BufferHelper.isBuffered(e, u)
                        ? (s = this.getAppendedFrag(u))
                        : P.BufferHelper.isBuffered(e, u + 0.1) &&
                          (s = this.getAppendedFrag(u + 0.1)),
                      s)
                    ) {
                      this.backtrackFragment = null;
                      var a = this.fragPlaying,
                        f = s.level;
                      (!a ||
                        s.sn !== a.sn ||
                        a.level !== f ||
                        s.urlId !== a.urlId) &&
                        (this.hls.trigger(b.Events.FRAG_CHANGED, { frag: s }),
                        (!a || a.level !== f) &&
                          this.hls.trigger(b.Events.LEVEL_SWITCHED, {
                            level: f,
                          }),
                        (this.fragPlaying = s));
                    }
                  }
                }),
                l(r, [
                  {
                    key: "nextLevel",
                    get: function () {
                      var e = this.nextBufferedFrag;
                      return e ? e.level : -1;
                    },
                  },
                  {
                    key: "currentFrag",
                    get: function () {
                      var e = this.media;
                      return e
                        ? this.fragPlaying ||
                            this.getAppendedFrag(e.currentTime)
                        : null;
                    },
                  },
                  {
                    key: "currentProgramDateTime",
                    get: function () {
                      var e = this.media;
                      if (e) {
                        var s = e.currentTime,
                          u = this.currentFrag;
                        if (
                          u &&
                          Object(M.isFiniteNumber)(s) &&
                          Object(M.isFiniteNumber)(u.programDateTime)
                        ) {
                          var a = u.programDateTime + (s - u.start) * 1e3;
                          return new Date(a);
                        }
                      }
                      return null;
                    },
                  },
                  {
                    key: "currentLevel",
                    get: function () {
                      var e = this.currentFrag;
                      return e ? e.level : -1;
                    },
                  },
                  {
                    key: "nextBufferedFrag",
                    get: function () {
                      var e = this.currentFrag;
                      return e ? this.followingBufferedFrag(e) : null;
                    },
                  },
                  {
                    key: "forceStartLoad",
                    get: function () {
                      return this._forceStartLoad;
                    },
                  },
                ]),
                r
              );
            })(O.default);
        },
        "./src/controller/subtitle-stream-controller.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "SubtitleStreamController", function () {
              return t;
            });
          var M = T("./src/events.ts"),
            O = T("./src/utils/buffer-helper.ts"),
            L = T("./src/controller/fragment-finders.ts"),
            b = T("./src/utils/discontinuities.ts"),
            P = T("./src/controller/level-helper.ts"),
            R = T("./src/controller/fragment-tracker.ts"),
            A = T("./src/controller/base-stream-controller.ts"),
            p = T("./src/types/loader.ts"),
            y = T("./src/types/level.ts");
          function S(h, v) {
            for (var i = 0; i < v.length; i++) {
              var r = v[i];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(h, r.key, r);
            }
          }
          function E(h, v, i) {
            return (
              v && S(h.prototype, v),
              i && S(h, i),
              Object.defineProperty(h, "prototype", { writable: !1 }),
              h
            );
          }
          function g(h, v) {
            (h.prototype = Object.create(v.prototype)),
              (h.prototype.constructor = h),
              m(h, v);
          }
          function m(h, v) {
            return (
              (m = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (r, o) {
                    return (r.__proto__ = o), r;
                  }),
              m(h, v)
            );
          }
          var l = 500,
            t = (function (h) {
              g(v, h);
              function v(r, o) {
                var d;
                return (
                  (d =
                    h.call(this, r, o, "[subtitle-stream-controller]") || this),
                  (d.levels = []),
                  (d.currentTrackId = -1),
                  (d.tracksBuffered = []),
                  (d.mainDetails = null),
                  d._registerListeners(),
                  d
                );
              }
              var i = v.prototype;
              return (
                (i.onHandlerDestroying = function () {
                  this._unregisterListeners(), (this.mainDetails = null);
                }),
                (i._registerListeners = function () {
                  var o = this.hls;
                  o.on(M.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                    o.on(M.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                    o.on(
                      M.Events.MANIFEST_LOADING,
                      this.onManifestLoading,
                      this
                    ),
                    o.on(M.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                    o.on(M.Events.ERROR, this.onError, this),
                    o.on(
                      M.Events.SUBTITLE_TRACKS_UPDATED,
                      this.onSubtitleTracksUpdated,
                      this
                    ),
                    o.on(
                      M.Events.SUBTITLE_TRACK_SWITCH,
                      this.onSubtitleTrackSwitch,
                      this
                    ),
                    o.on(
                      M.Events.SUBTITLE_TRACK_LOADED,
                      this.onSubtitleTrackLoaded,
                      this
                    ),
                    o.on(
                      M.Events.SUBTITLE_FRAG_PROCESSED,
                      this.onSubtitleFragProcessed,
                      this
                    ),
                    o.on(M.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
                }),
                (i._unregisterListeners = function () {
                  var o = this.hls;
                  o.off(M.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                    o.off(
                      M.Events.MEDIA_DETACHING,
                      this.onMediaDetaching,
                      this
                    ),
                    o.off(
                      M.Events.MANIFEST_LOADING,
                      this.onManifestLoading,
                      this
                    ),
                    o.off(M.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                    o.off(M.Events.ERROR, this.onError, this),
                    o.off(
                      M.Events.SUBTITLE_TRACKS_UPDATED,
                      this.onSubtitleTracksUpdated,
                      this
                    ),
                    o.off(
                      M.Events.SUBTITLE_TRACK_SWITCH,
                      this.onSubtitleTrackSwitch,
                      this
                    ),
                    o.off(
                      M.Events.SUBTITLE_TRACK_LOADED,
                      this.onSubtitleTrackLoaded,
                      this
                    ),
                    o.off(
                      M.Events.SUBTITLE_FRAG_PROCESSED,
                      this.onSubtitleFragProcessed,
                      this
                    ),
                    o.off(
                      M.Events.BUFFER_FLUSHING,
                      this.onBufferFlushing,
                      this
                    );
                }),
                (i.startLoad = function () {
                  this.stopLoad(),
                    (this.state = A.State.IDLE),
                    this.setInterval(l),
                    this.tick();
                }),
                (i.onManifestLoading = function () {
                  (this.mainDetails = null),
                    this.fragmentTracker.removeAllFragments();
                }),
                (i.onLevelLoaded = function (o, d) {
                  this.mainDetails = d.details;
                }),
                (i.onSubtitleFragProcessed = function (o, d) {
                  var e = d.frag,
                    s = d.success;
                  if (
                    ((this.fragPrevious = e), (this.state = A.State.IDLE), !!s)
                  ) {
                    var u = this.tracksBuffered[this.currentTrackId];
                    if (!!u) {
                      for (var a, f = e.start, c = 0; c < u.length; c++)
                        if (f >= u[c].start && f <= u[c].end) {
                          a = u[c];
                          break;
                        }
                      var D = e.start + e.duration;
                      a ? (a.end = D) : ((a = { start: f, end: D }), u.push(a)),
                        this.fragmentTracker.fragBuffered(e);
                    }
                  }
                }),
                (i.onBufferFlushing = function (o, d) {
                  var e = d.startOffset,
                    s = d.endOffset;
                  if (e === 0 && s !== Number.POSITIVE_INFINITY) {
                    var u = this.currentTrackId,
                      a = this.levels;
                    if (!a.length || !a[u] || !a[u].details) return;
                    var f = a[u].details,
                      c = f.targetduration,
                      D = s - c;
                    if (D <= 0) return;
                    (d.endOffsetSubtitles = Math.max(0, D)),
                      this.tracksBuffered.forEach(function (x) {
                        for (var I = 0; I < x.length; ) {
                          if (x[I].end <= D) {
                            x.shift();
                            continue;
                          } else if (x[I].start < D) x[I].start = D;
                          else break;
                          I++;
                        }
                      }),
                      this.fragmentTracker.removeFragmentsInRange(
                        e,
                        D,
                        p.PlaylistLevelType.SUBTITLE
                      );
                  }
                }),
                (i.onError = function (o, d) {
                  var e,
                    s = d.frag;
                  !s ||
                    s.type !== p.PlaylistLevelType.SUBTITLE ||
                    ((e = this.fragCurrent) !== null &&
                      e !== void 0 &&
                      e.loader &&
                      this.fragCurrent.loader.abort(),
                    (this.state = A.State.IDLE));
                }),
                (i.onSubtitleTracksUpdated = function (o, d) {
                  var e = this,
                    s = d.subtitleTracks;
                  (this.tracksBuffered = []),
                    (this.levels = s.map(function (u) {
                      return new y.Level(u);
                    })),
                    this.fragmentTracker.removeAllFragments(),
                    (this.fragPrevious = null),
                    this.levels.forEach(function (u) {
                      e.tracksBuffered[u.id] = [];
                    }),
                    (this.mediaBuffer = null);
                }),
                (i.onSubtitleTrackSwitch = function (o, d) {
                  if (
                    ((this.currentTrackId = d.id),
                    !this.levels.length || this.currentTrackId === -1)
                  ) {
                    this.clearInterval();
                    return;
                  }
                  var e = this.levels[this.currentTrackId];
                  e != null && e.details
                    ? (this.mediaBuffer = this.mediaBufferTimeRanges)
                    : (this.mediaBuffer = null),
                    e && this.setInterval(l);
                }),
                (i.onSubtitleTrackLoaded = function (o, d) {
                  var e,
                    s = d.details,
                    u = d.id,
                    a = this.currentTrackId,
                    f = this.levels;
                  if (!!f.length) {
                    var c = f[a];
                    if (!(u >= f.length || u !== a || !c)) {
                      if (
                        ((this.mediaBuffer = this.mediaBufferTimeRanges),
                        s.live ||
                          ((e = c.details) !== null && e !== void 0 && e.live))
                      ) {
                        var D = this.mainDetails;
                        if (s.deltaUpdateFailed || !D) return;
                        var x = D.fragments[0];
                        if (!c.details)
                          s.hasProgramDateTime && D.hasProgramDateTime
                            ? Object(b.alignMediaPlaylistByPDT)(s, D)
                            : x && Object(P.addSliding)(s, x.start);
                        else {
                          var I = this.alignPlaylists(s, c.details);
                          I === 0 && x && Object(P.addSliding)(s, x.start);
                        }
                      }
                      if (
                        ((c.details = s),
                        (this.levelLastLoaded = u),
                        this.tick(),
                        s.live &&
                          !this.fragCurrent &&
                          this.media &&
                          this.state === A.State.IDLE)
                      ) {
                        var F = Object(L.findFragmentByPTS)(
                          null,
                          s.fragments,
                          this.media.currentTime,
                          0
                        );
                        F ||
                          (this.warn(
                            "Subtitle playlist not aligned with playback"
                          ),
                          (c.details = void 0));
                      }
                    }
                  }
                }),
                (i._handleFragmentLoadComplete = function (o) {
                  var d = o.frag,
                    e = o.payload,
                    s = d.decryptdata,
                    u = this.hls;
                  if (
                    !this.fragContextChanged(d) &&
                    e &&
                    e.byteLength > 0 &&
                    s &&
                    s.key &&
                    s.iv &&
                    s.method === "AES-128"
                  ) {
                    var a = performance.now();
                    this.decrypter
                      .webCryptoDecrypt(
                        new Uint8Array(e),
                        s.key.buffer,
                        s.iv.buffer
                      )
                      .then(function (f) {
                        var c = performance.now();
                        u.trigger(M.Events.FRAG_DECRYPTED, {
                          frag: d,
                          payload: f,
                          stats: { tstart: a, tdecrypt: c },
                        });
                      });
                  }
                }),
                (i.doTick = function () {
                  if (!this.media) {
                    this.state = A.State.IDLE;
                    return;
                  }
                  if (this.state === A.State.IDLE) {
                    var o = this.currentTrackId,
                      d = this.levels;
                    if (!d.length || !d[o] || !d[o].details) return;
                    var e = d[o].details,
                      s = e.targetduration,
                      u = this.config,
                      a = this.media,
                      f = O.BufferHelper.bufferedInfo(
                        this.tracksBuffered[this.currentTrackId] || [],
                        a.currentTime - s,
                        u.maxBufferHole
                      ),
                      c = f.end,
                      D = f.len,
                      x = this.getMaxBufferLength() + s;
                    if (D > x) return;
                    console.assert(
                      e,
                      "Subtitle track details are defined on idle subtitle stream controller tick"
                    );
                    var I = e.fragments,
                      F = I.length,
                      _ = e.edge,
                      B,
                      U = this.fragPrevious;
                    if (c < _) {
                      var N = u.maxFragLookUpTolerance;
                      (B = Object(L.findFragmentByPTS)(
                        U,
                        I,
                        Math.max(I[0].start, c),
                        N
                      )),
                        !B && U && U.start < I[0].start && (B = I[0]);
                    } else B = I[F - 1];
                    if (
                      ((B = this.mapToInitFragWhenRequired(B)),
                      !B ||
                        this.fragmentTracker.getState(B) !==
                          R.FragmentState.NOT_LOADED)
                    )
                      return;
                    B.encrypted
                      ? this.loadKey(B, e)
                      : this.loadFragment(B, e, c);
                  }
                }),
                (i.loadFragment = function (o, d, e) {
                  (this.fragCurrent = o),
                    o.sn === "initSegment"
                      ? this._loadInitSegment(o)
                      : h.prototype.loadFragment.call(this, o, d, e);
                }),
                E(v, [
                  {
                    key: "mediaBufferTimeRanges",
                    get: function () {
                      return new n(
                        this.tracksBuffered[this.currentTrackId] || []
                      );
                    },
                  },
                ]),
                v
              );
            })(A.default),
            n = function (v) {
              this.buffered = void 0;
              var i = function (o, d, e) {
                if (((d = d >>> 0), d > e - 1))
                  throw new DOMException(
                    "Failed to execute '" +
                      o +
                      "' on 'TimeRanges': The index provided (" +
                      d +
                      ") is greater than the maximum bound (" +
                      e +
                      ")"
                  );
                return v[d][o];
              };
              this.buffered = {
                get length() {
                  return v.length;
                },
                end: function (o) {
                  return i("end", o, v.length);
                },
                start: function (o) {
                  return i("start", o, v.length);
                },
              };
            };
        },
        "./src/controller/subtitle-track-controller.ts": function (W, C, T) {
          "use strict";
          T.r(C);
          var M = T("./src/events.ts"),
            O = T("./src/utils/texttrack-utils.ts"),
            L = T("./src/controller/base-playlist-controller.ts"),
            b = T("./src/types/loader.ts");
          function P(E, g) {
            for (var m = 0; m < g.length; m++) {
              var l = g[m];
              (l.enumerable = l.enumerable || !1),
                (l.configurable = !0),
                "value" in l && (l.writable = !0),
                Object.defineProperty(E, l.key, l);
            }
          }
          function R(E, g, m) {
            return (
              g && P(E.prototype, g),
              m && P(E, m),
              Object.defineProperty(E, "prototype", { writable: !1 }),
              E
            );
          }
          function A(E, g) {
            (E.prototype = Object.create(g.prototype)),
              (E.prototype.constructor = E),
              p(E, g);
          }
          function p(E, g) {
            return (
              (p = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (l, t) {
                    return (l.__proto__ = t), l;
                  }),
              p(E, g)
            );
          }
          var y = (function (E) {
            A(g, E);
            function g(l) {
              var t;
              return (
                (t = E.call(this, l, "[subtitle-track-controller]") || this),
                (t.media = null),
                (t.tracks = []),
                (t.groupId = null),
                (t.tracksInGroup = []),
                (t.trackId = -1),
                (t.selectDefaultTrack = !0),
                (t.queuedDefaultTrack = -1),
                (t.trackChangeListener = function () {
                  return t.onTextTracksChanged();
                }),
                (t.asyncPollTrackChange = function () {
                  return t.pollTrackChange(0);
                }),
                (t.useTextTrackPolling = !1),
                (t.subtitlePollingInterval = -1),
                (t._subtitleDisplay = !0),
                t.registerListeners(),
                t
              );
            }
            var m = g.prototype;
            return (
              (m.destroy = function () {
                this.unregisterListeners(),
                  (this.tracks.length = 0),
                  (this.tracksInGroup.length = 0),
                  (this.trackChangeListener = this.asyncPollTrackChange = null),
                  E.prototype.destroy.call(this);
              }),
              (m.registerListeners = function () {
                var t = this.hls;
                t.on(M.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                  t.on(M.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                  t.on(M.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                  t.on(M.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                  t.on(M.Events.LEVEL_LOADING, this.onLevelLoading, this),
                  t.on(M.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
                  t.on(
                    M.Events.SUBTITLE_TRACK_LOADED,
                    this.onSubtitleTrackLoaded,
                    this
                  ),
                  t.on(M.Events.ERROR, this.onError, this);
              }),
              (m.unregisterListeners = function () {
                var t = this.hls;
                t.off(M.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                  t.off(M.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                  t.off(
                    M.Events.MANIFEST_LOADING,
                    this.onManifestLoading,
                    this
                  ),
                  t.off(M.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                  t.off(M.Events.LEVEL_LOADING, this.onLevelLoading, this),
                  t.off(M.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
                  t.off(
                    M.Events.SUBTITLE_TRACK_LOADED,
                    this.onSubtitleTrackLoaded,
                    this
                  ),
                  t.off(M.Events.ERROR, this.onError, this);
              }),
              (m.onMediaAttached = function (t, n) {
                (this.media = n.media),
                  this.media &&
                    (this.queuedDefaultTrack > -1 &&
                      ((this.subtitleTrack = this.queuedDefaultTrack),
                      (this.queuedDefaultTrack = -1)),
                    (this.useTextTrackPolling = !(
                      this.media.textTracks &&
                      "onchange" in this.media.textTracks
                    )),
                    this.useTextTrackPolling
                      ? this.pollTrackChange(500)
                      : this.media.textTracks.addEventListener(
                          "change",
                          this.asyncPollTrackChange
                        ));
              }),
              (m.pollTrackChange = function (t) {
                self.clearInterval(this.subtitlePollingInterval),
                  (this.subtitlePollingInterval = self.setInterval(
                    this.trackChangeListener,
                    t
                  ));
              }),
              (m.onMediaDetaching = function () {
                if (!!this.media) {
                  self.clearInterval(this.subtitlePollingInterval),
                    this.useTextTrackPolling ||
                      this.media.textTracks.removeEventListener(
                        "change",
                        this.asyncPollTrackChange
                      ),
                    this.trackId > -1 &&
                      (this.queuedDefaultTrack = this.trackId);
                  var t = S(this.media.textTracks);
                  t.forEach(function (n) {
                    Object(O.clearCurrentCues)(n);
                  }),
                    (this.subtitleTrack = -1),
                    (this.media = null);
                }
              }),
              (m.onManifestLoading = function () {
                (this.tracks = []),
                  (this.groupId = null),
                  (this.tracksInGroup = []),
                  (this.trackId = -1),
                  (this.selectDefaultTrack = !0);
              }),
              (m.onManifestParsed = function (t, n) {
                this.tracks = n.subtitleTracks;
              }),
              (m.onSubtitleTrackLoaded = function (t, n) {
                var h = n.id,
                  v = n.details,
                  i = this.trackId,
                  r = this.tracksInGroup[i];
                if (!r) {
                  this.warn("Invalid subtitle track id " + h);
                  return;
                }
                var o = r.details;
                (r.details = n.details),
                  this.log(
                    "subtitle track " +
                      h +
                      " loaded [" +
                      v.startSN +
                      "-" +
                      v.endSN +
                      "]"
                  ),
                  h === this.trackId &&
                    ((this.retryCount = 0), this.playlistLoaded(h, n, o));
              }),
              (m.onLevelLoading = function (t, n) {
                this.switchLevel(n.level);
              }),
              (m.onLevelSwitching = function (t, n) {
                this.switchLevel(n.level);
              }),
              (m.switchLevel = function (t) {
                var n = this.hls.levels[t];
                if (!!(n != null && n.textGroupIds)) {
                  var h = n.textGroupIds[n.urlId];
                  if (this.groupId !== h) {
                    var v = this.tracksInGroup
                        ? this.tracksInGroup[this.trackId]
                        : void 0,
                      i = this.tracks.filter(function (d) {
                        return !h || d.groupId === h;
                      });
                    this.tracksInGroup = i;
                    var r = this.findTrackId(v?.name) || this.findTrackId();
                    this.groupId = h;
                    var o = { subtitleTracks: i };
                    this.log(
                      "Updating subtitle tracks, " +
                        i.length +
                        ' track(s) found in "' +
                        h +
                        '" group-id'
                    ),
                      this.hls.trigger(M.Events.SUBTITLE_TRACKS_UPDATED, o),
                      r !== -1 && this.setSubtitleTrack(r, v);
                  }
                }
              }),
              (m.findTrackId = function (t) {
                for (var n = this.tracksInGroup, h = 0; h < n.length; h++) {
                  var v = n[h];
                  if (
                    (!this.selectDefaultTrack || v.default) &&
                    (!t || t === v.name)
                  )
                    return v.id;
                }
                return -1;
              }),
              (m.onError = function (t, n) {
                E.prototype.onError.call(this, t, n),
                  !(n.fatal || !n.context) &&
                    n.context.type === b.PlaylistContextType.SUBTITLE_TRACK &&
                    n.context.id === this.trackId &&
                    n.context.groupId === this.groupId &&
                    this.retryLoadingOrFail(n);
              }),
              (m.loadPlaylist = function (t) {
                var n = this.tracksInGroup[this.trackId];
                if (this.shouldLoadTrack(n)) {
                  var h = n.id,
                    v = n.groupId,
                    i = n.url;
                  if (t)
                    try {
                      i = t.addDirectives(i);
                    } catch (r) {
                      this.warn(
                        "Could not construct new URL with HLS Delivery Directives: " +
                          r
                      );
                    }
                  this.log("Loading subtitle playlist for id " + h),
                    this.hls.trigger(M.Events.SUBTITLE_TRACK_LOADING, {
                      url: i,
                      id: h,
                      groupId: v,
                      deliveryDirectives: t || null,
                    });
                }
              }),
              (m.toggleTrackModes = function (t) {
                var n = this,
                  h = this.media,
                  v = this.trackId;
                if (!!h) {
                  var i = S(h.textTracks),
                    r = i.filter(function (e) {
                      return e.groupId === n.groupId;
                    });
                  if (t === -1)
                    [].slice.call(i).forEach(function (e) {
                      e.mode = "disabled";
                    });
                  else {
                    var o = r[v];
                    o && (o.mode = "disabled");
                  }
                  var d = r[t];
                  d && (d.mode = this.subtitleDisplay ? "showing" : "hidden");
                }
              }),
              (m.setSubtitleTrack = function (t, n) {
                var h,
                  v = this.tracksInGroup;
                if (!this.media) {
                  this.queuedDefaultTrack = t;
                  return;
                }
                if (
                  (this.trackId !== t && this.toggleTrackModes(t),
                  !(
                    (this.trackId === t &&
                      (t === -1 ||
                        ((h = v[t]) !== null && h !== void 0 && h.details))) ||
                    t < -1 ||
                    t >= v.length
                  ))
                ) {
                  this.clearTimer();
                  var i = v[t];
                  if (
                    (this.log("Switching to subtitle track " + t),
                    (this.trackId = t),
                    i)
                  ) {
                    var r = i.id,
                      o = i.groupId,
                      d = o === void 0 ? "" : o,
                      e = i.name,
                      s = i.type,
                      u = i.url;
                    this.hls.trigger(M.Events.SUBTITLE_TRACK_SWITCH, {
                      id: r,
                      groupId: d,
                      name: e,
                      type: s,
                      url: u,
                    });
                    var a = this.switchParams(i.url, n?.details);
                    this.loadPlaylist(a);
                  } else
                    this.hls.trigger(M.Events.SUBTITLE_TRACK_SWITCH, { id: t });
                }
              }),
              (m.onTextTracksChanged = function () {
                if (
                  (this.useTextTrackPolling ||
                    self.clearInterval(this.subtitlePollingInterval),
                  !(!this.media || !this.hls.config.renderTextTracksNatively))
                ) {
                  for (
                    var t = -1, n = S(this.media.textTracks), h = 0;
                    h < n.length;
                    h++
                  )
                    if (n[h].mode === "hidden") t = h;
                    else if (n[h].mode === "showing") {
                      t = h;
                      break;
                    }
                  this.subtitleTrack !== t && (this.subtitleTrack = t);
                }
              }),
              R(g, [
                {
                  key: "subtitleDisplay",
                  get: function () {
                    return this._subtitleDisplay;
                  },
                  set: function (t) {
                    (this._subtitleDisplay = t),
                      this.trackId > -1 && this.toggleTrackModes(this.trackId);
                  },
                },
                {
                  key: "subtitleTracks",
                  get: function () {
                    return this.tracksInGroup;
                  },
                },
                {
                  key: "subtitleTrack",
                  get: function () {
                    return this.trackId;
                  },
                  set: function (t) {
                    this.selectDefaultTrack = !1;
                    var n = this.tracksInGroup
                      ? this.tracksInGroup[this.trackId]
                      : void 0;
                    this.setSubtitleTrack(t, n);
                  },
                },
              ]),
              g
            );
          })(L.default);
          function S(E) {
            for (var g = [], m = 0; m < E.length; m++) {
              var l = E[m];
              l.kind === "subtitles" && l.label && g.push(E[m]);
            }
            return g;
          }
          C.default = y;
        },
        "./src/controller/timeline-controller.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "TimelineController", function () {
              return E;
            });
          var M = T("./src/polyfills/number.ts"),
            O = T("./src/events.ts"),
            L = T("./src/utils/cea-608-parser.ts"),
            b = T("./src/utils/output-filter.ts"),
            P = T("./src/utils/webvtt-parser.ts"),
            R = T("./src/utils/texttrack-utils.ts"),
            A = T("./src/utils/imsc1-ttml-parser.ts"),
            p = T("./src/utils/mp4-tools.ts"),
            y = T("./src/types/loader.ts"),
            S = T("./src/utils/logger.ts"),
            E = (function () {
              function t(h) {
                if (
                  ((this.hls = void 0),
                  (this.media = null),
                  (this.config = void 0),
                  (this.enabled = !0),
                  (this.Cues = void 0),
                  (this.textTracks = []),
                  (this.tracks = []),
                  (this.initPTS = []),
                  (this.timescale = []),
                  (this.unparsedVttFrags = []),
                  (this.captionsTracks = {}),
                  (this.nonNativeCaptionsTracks = {}),
                  (this.cea608Parser1 = void 0),
                  (this.cea608Parser2 = void 0),
                  (this.lastSn = -1),
                  (this.lastPartIndex = -1),
                  (this.prevCC = -1),
                  (this.vttCCs = l()),
                  (this.captionsProperties = void 0),
                  (this.hls = h),
                  (this.config = h.config),
                  (this.Cues = h.config.cueHandler),
                  (this.captionsProperties = {
                    textTrack1: {
                      label: this.config.captionsTextTrack1Label,
                      languageCode: this.config.captionsTextTrack1LanguageCode,
                    },
                    textTrack2: {
                      label: this.config.captionsTextTrack2Label,
                      languageCode: this.config.captionsTextTrack2LanguageCode,
                    },
                    textTrack3: {
                      label: this.config.captionsTextTrack3Label,
                      languageCode: this.config.captionsTextTrack3LanguageCode,
                    },
                    textTrack4: {
                      label: this.config.captionsTextTrack4Label,
                      languageCode: this.config.captionsTextTrack4LanguageCode,
                    },
                  }),
                  this.config.enableCEA708Captions)
                ) {
                  var v = new b.default(this, "textTrack1"),
                    i = new b.default(this, "textTrack2"),
                    r = new b.default(this, "textTrack3"),
                    o = new b.default(this, "textTrack4");
                  (this.cea608Parser1 = new L.default(1, v, i)),
                    (this.cea608Parser2 = new L.default(3, r, o));
                }
                h.on(O.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                  h.on(O.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                  h.on(O.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                  h.on(O.Events.MANIFEST_LOADED, this.onManifestLoaded, this),
                  h.on(
                    O.Events.SUBTITLE_TRACKS_UPDATED,
                    this.onSubtitleTracksUpdated,
                    this
                  ),
                  h.on(O.Events.FRAG_LOADING, this.onFragLoading, this),
                  h.on(O.Events.FRAG_LOADED, this.onFragLoaded, this),
                  h.on(
                    O.Events.FRAG_PARSING_USERDATA,
                    this.onFragParsingUserdata,
                    this
                  ),
                  h.on(O.Events.FRAG_DECRYPTED, this.onFragDecrypted, this),
                  h.on(O.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
                  h.on(
                    O.Events.SUBTITLE_TRACKS_CLEARED,
                    this.onSubtitleTracksCleared,
                    this
                  ),
                  h.on(O.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
              }
              var n = t.prototype;
              return (
                (n.destroy = function () {
                  var v = this.hls;
                  v.off(O.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                    v.off(
                      O.Events.MEDIA_DETACHING,
                      this.onMediaDetaching,
                      this
                    ),
                    v.off(
                      O.Events.MANIFEST_LOADING,
                      this.onManifestLoading,
                      this
                    ),
                    v.off(
                      O.Events.MANIFEST_LOADED,
                      this.onManifestLoaded,
                      this
                    ),
                    v.off(
                      O.Events.SUBTITLE_TRACKS_UPDATED,
                      this.onSubtitleTracksUpdated,
                      this
                    ),
                    v.off(O.Events.FRAG_LOADING, this.onFragLoading, this),
                    v.off(O.Events.FRAG_LOADED, this.onFragLoaded, this),
                    v.off(
                      O.Events.FRAG_PARSING_USERDATA,
                      this.onFragParsingUserdata,
                      this
                    ),
                    v.off(O.Events.FRAG_DECRYPTED, this.onFragDecrypted, this),
                    v.off(O.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
                    v.off(
                      O.Events.SUBTITLE_TRACKS_CLEARED,
                      this.onSubtitleTracksCleared,
                      this
                    ),
                    v.off(
                      O.Events.BUFFER_FLUSHING,
                      this.onBufferFlushing,
                      this
                    ),
                    (this.hls =
                      this.config =
                      this.cea608Parser1 =
                      this.cea608Parser2 =
                        null);
                }),
                (n.addCues = function (v, i, r, o, d) {
                  for (var e = !1, s = d.length; s--; ) {
                    var u = d[s],
                      a = m(u[0], u[1], i, r);
                    if (
                      a >= 0 &&
                      ((u[0] = Math.min(u[0], i)),
                      (u[1] = Math.max(u[1], r)),
                      (e = !0),
                      a / (r - i) > 0.5)
                    )
                      return;
                  }
                  if (
                    (e || d.push([i, r]), this.config.renderTextTracksNatively)
                  ) {
                    var f = this.captionsTracks[v];
                    this.Cues.newCue(f, i, r, o);
                  } else {
                    var c = this.Cues.newCue(null, i, r, o);
                    this.hls.trigger(O.Events.CUES_PARSED, {
                      type: "captions",
                      cues: c,
                      track: v,
                    });
                  }
                }),
                (n.onInitPtsFound = function (v, i) {
                  var r = this,
                    o = i.frag,
                    d = i.id,
                    e = i.initPTS,
                    s = i.timescale,
                    u = this.unparsedVttFrags;
                  d === "main" &&
                    ((this.initPTS[o.cc] = e), (this.timescale[o.cc] = s)),
                    u.length &&
                      ((this.unparsedVttFrags = []),
                      u.forEach(function (a) {
                        r.onFragLoaded(O.Events.FRAG_LOADED, a);
                      }));
                }),
                (n.getExistingTrack = function (v) {
                  var i = this.media;
                  if (i)
                    for (var r = 0; r < i.textTracks.length; r++) {
                      var o = i.textTracks[r];
                      if (o[v]) return o;
                    }
                  return null;
                }),
                (n.createCaptionsTrack = function (v) {
                  this.config.renderTextTracksNatively
                    ? this.createNativeTrack(v)
                    : this.createNonNativeTrack(v);
                }),
                (n.createNativeTrack = function (v) {
                  if (!this.captionsTracks[v]) {
                    var i = this.captionsProperties,
                      r = this.captionsTracks,
                      o = this.media,
                      d = i[v],
                      e = d.label,
                      s = d.languageCode,
                      u = this.getExistingTrack(v);
                    if (u)
                      (r[v] = u),
                        Object(R.clearCurrentCues)(r[v]),
                        Object(R.sendAddTrackEvent)(r[v], o);
                    else {
                      var a = this.createTextTrack("captions", e, s);
                      a && ((a[v] = !0), (r[v] = a));
                    }
                  }
                }),
                (n.createNonNativeTrack = function (v) {
                  if (!this.nonNativeCaptionsTracks[v]) {
                    var i = this.captionsProperties[v];
                    if (!!i) {
                      var r = i.label,
                        o = {
                          _id: v,
                          label: r,
                          kind: "captions",
                          default: i.media ? !!i.media.default : !1,
                          closedCaptions: i.media,
                        };
                      (this.nonNativeCaptionsTracks[v] = o),
                        this.hls.trigger(
                          O.Events.NON_NATIVE_TEXT_TRACKS_FOUND,
                          { tracks: [o] }
                        );
                    }
                  }
                }),
                (n.createTextTrack = function (v, i, r) {
                  var o = this.media;
                  if (!!o) return o.addTextTrack(v, i, r);
                }),
                (n.onMediaAttaching = function (v, i) {
                  (this.media = i.media), this._cleanTracks();
                }),
                (n.onMediaDetaching = function () {
                  var v = this.captionsTracks;
                  Object.keys(v).forEach(function (i) {
                    Object(R.clearCurrentCues)(v[i]), delete v[i];
                  }),
                    (this.nonNativeCaptionsTracks = {});
                }),
                (n.onManifestLoading = function () {
                  (this.lastSn = -1),
                    (this.lastPartIndex = -1),
                    (this.prevCC = -1),
                    (this.vttCCs = l()),
                    this._cleanTracks(),
                    (this.tracks = []),
                    (this.captionsTracks = {}),
                    (this.nonNativeCaptionsTracks = {}),
                    (this.textTracks = []),
                    (this.unparsedVttFrags = this.unparsedVttFrags || []),
                    (this.initPTS = []),
                    (this.timescale = []),
                    this.cea608Parser1 &&
                      this.cea608Parser2 &&
                      (this.cea608Parser1.reset(), this.cea608Parser2.reset());
                }),
                (n._cleanTracks = function () {
                  var v = this.media;
                  if (!!v) {
                    var i = v.textTracks;
                    if (i)
                      for (var r = 0; r < i.length; r++)
                        Object(R.clearCurrentCues)(i[r]);
                  }
                }),
                (n.onSubtitleTracksUpdated = function (v, i) {
                  var r = this;
                  this.textTracks = [];
                  var o = i.subtitleTracks || [],
                    d = o.some(function (a) {
                      return a.textCodec === A.IMSC1_CODEC;
                    });
                  if (
                    this.config.enableWebVTT ||
                    (d && this.config.enableIMSC1)
                  ) {
                    var e = this.tracks && o && this.tracks.length === o.length;
                    if (
                      ((this.tracks = o || []),
                      this.config.renderTextTracksNatively)
                    ) {
                      var s = this.media ? this.media.textTracks : [];
                      this.tracks.forEach(function (a, f) {
                        var c;
                        if (f < s.length) {
                          for (var D = null, x = 0; x < s.length; x++)
                            if (g(s[x], a)) {
                              D = s[x];
                              break;
                            }
                          D && (c = D);
                        }
                        if (c) Object(R.clearCurrentCues)(c);
                        else {
                          var I = r._captionsOrSubtitlesFromCharacteristics(a);
                          (c = r.createTextTrack(I, a.name, a.lang)),
                            c && (c.mode = "disabled");
                        }
                        c && ((c.groupId = a.groupId), r.textTracks.push(c));
                      });
                    } else if (!e && this.tracks && this.tracks.length) {
                      var u = this.tracks.map(function (a) {
                        return {
                          label: a.name,
                          kind: a.type.toLowerCase(),
                          default: a.default,
                          subtitleTrack: a,
                        };
                      });
                      this.hls.trigger(O.Events.NON_NATIVE_TEXT_TRACKS_FOUND, {
                        tracks: u,
                      });
                    }
                  }
                }),
                (n._captionsOrSubtitlesFromCharacteristics = function (v) {
                  var i;
                  if (
                    (i = v.attrs) !== null &&
                    i !== void 0 &&
                    i.CHARACTERISTICS
                  ) {
                    var r = /transcribes-spoken-dialog/gi.test(
                        v.attrs.CHARACTERISTICS
                      ),
                      o = /describes-music-and-sound/gi.test(
                        v.attrs.CHARACTERISTICS
                      );
                    if (r && o) return "captions";
                  }
                  return "subtitles";
                }),
                (n.onManifestLoaded = function (v, i) {
                  var r = this;
                  this.config.enableCEA708Captions &&
                    i.captions &&
                    i.captions.forEach(function (o) {
                      var d = /(?:CC|SERVICE)([1-4])/.exec(o.instreamId);
                      if (!!d) {
                        var e = "textTrack" + d[1],
                          s = r.captionsProperties[e];
                        !s ||
                          ((s.label = o.name),
                          o.lang && (s.languageCode = o.lang),
                          (s.media = o));
                      }
                    });
                }),
                (n.onFragLoading = function (v, i) {
                  var r = this.cea608Parser1,
                    o = this.cea608Parser2,
                    d = this.lastSn,
                    e = this.lastPartIndex;
                  if (
                    !(!this.enabled || !(r && o)) &&
                    i.frag.type === y.PlaylistLevelType.MAIN
                  ) {
                    var s,
                      u,
                      a = i.frag.sn,
                      f =
                        (s =
                          i == null || (u = i.part) === null || u === void 0
                            ? void 0
                            : u.index) != null
                          ? s
                          : -1;
                    a === d + 1 ||
                      (a === d && f === e + 1) ||
                      (r.reset(), o.reset()),
                      (this.lastSn = a),
                      (this.lastPartIndex = f);
                  }
                }),
                (n.onFragLoaded = function (v, i) {
                  var r = i.frag,
                    o = i.payload,
                    d = this.initPTS,
                    e = this.unparsedVttFrags;
                  if (r.type === y.PlaylistLevelType.SUBTITLE)
                    if (o.byteLength) {
                      if (!Object(M.isFiniteNumber)(d[r.cc])) {
                        e.push(i),
                          d.length &&
                            this.hls.trigger(O.Events.SUBTITLE_FRAG_PROCESSED, {
                              success: !1,
                              frag: r,
                              error: new Error("Missing initial subtitle PTS"),
                            });
                        return;
                      }
                      var s = r.decryptdata,
                        u = "stats" in i;
                      if (
                        s == null ||
                        s.key == null ||
                        s.method !== "AES-128" ||
                        u
                      ) {
                        var a = this.tracks[r.level],
                          f = this.vttCCs;
                        f[r.cc] ||
                          ((f[r.cc] = {
                            start: r.start,
                            prevCC: this.prevCC,
                            new: !0,
                          }),
                          (this.prevCC = r.cc)),
                          a && a.textCodec === A.IMSC1_CODEC
                            ? this._parseIMSC1(r, o)
                            : this._parseVTTs(r, o, f);
                      }
                    } else
                      this.hls.trigger(O.Events.SUBTITLE_FRAG_PROCESSED, {
                        success: !1,
                        frag: r,
                        error: new Error("Empty subtitle payload"),
                      });
                }),
                (n._parseIMSC1 = function (v, i) {
                  var r = this,
                    o = this.hls;
                  Object(A.parseIMSC1)(
                    i,
                    this.initPTS[v.cc],
                    this.timescale[v.cc],
                    function (d) {
                      r._appendCues(d, v.level),
                        o.trigger(O.Events.SUBTITLE_FRAG_PROCESSED, {
                          success: !0,
                          frag: v,
                        });
                    },
                    function (d) {
                      S.logger.log("Failed to parse IMSC1: " + d),
                        o.trigger(O.Events.SUBTITLE_FRAG_PROCESSED, {
                          success: !1,
                          frag: v,
                          error: d,
                        });
                    }
                  );
                }),
                (n._parseVTTs = function (v, i, r) {
                  var o,
                    d = this,
                    e = this.hls,
                    s =
                      (o = v.initSegment) !== null && o !== void 0 && o.data
                        ? Object(p.appendUint8Array)(
                            v.initSegment.data,
                            new Uint8Array(i)
                          )
                        : i;
                  Object(P.parseWebVTT)(
                    s,
                    this.initPTS[v.cc],
                    this.timescale[v.cc],
                    r,
                    v.cc,
                    v.start,
                    function (u) {
                      d._appendCues(u, v.level),
                        e.trigger(O.Events.SUBTITLE_FRAG_PROCESSED, {
                          success: !0,
                          frag: v,
                        });
                    },
                    function (u) {
                      d._fallbackToIMSC1(v, i),
                        S.logger.log("Failed to parse VTT cue: " + u),
                        e.trigger(O.Events.SUBTITLE_FRAG_PROCESSED, {
                          success: !1,
                          frag: v,
                          error: u,
                        });
                    }
                  );
                }),
                (n._fallbackToIMSC1 = function (v, i) {
                  var r = this,
                    o = this.tracks[v.level];
                  o.textCodec ||
                    Object(A.parseIMSC1)(
                      i,
                      this.initPTS[v.cc],
                      this.timescale[v.cc],
                      function () {
                        (o.textCodec = A.IMSC1_CODEC), r._parseIMSC1(v, i);
                      },
                      function () {
                        o.textCodec = "wvtt";
                      }
                    );
                }),
                (n._appendCues = function (v, i) {
                  var r = this.hls;
                  if (this.config.renderTextTracksNatively) {
                    var o = this.textTracks[i];
                    if (!o || o.mode === "disabled") return;
                    v.forEach(function (s) {
                      return Object(R.addCueToTrack)(o, s);
                    });
                  } else {
                    var d = this.tracks[i];
                    if (!d) return;
                    var e = d.default ? "default" : "subtitles" + i;
                    r.trigger(O.Events.CUES_PARSED, {
                      type: "subtitles",
                      cues: v,
                      track: e,
                    });
                  }
                }),
                (n.onFragDecrypted = function (v, i) {
                  var r = i.frag;
                  if (r.type === y.PlaylistLevelType.SUBTITLE) {
                    if (!Object(M.isFiniteNumber)(this.initPTS[r.cc])) {
                      this.unparsedVttFrags.push(i);
                      return;
                    }
                    this.onFragLoaded(O.Events.FRAG_LOADED, i);
                  }
                }),
                (n.onSubtitleTracksCleared = function () {
                  (this.tracks = []), (this.captionsTracks = {});
                }),
                (n.onFragParsingUserdata = function (v, i) {
                  var r = this.cea608Parser1,
                    o = this.cea608Parser2;
                  if (!(!this.enabled || !(r && o)))
                    for (var d = 0; d < i.samples.length; d++) {
                      var e = i.samples[d].bytes;
                      if (e) {
                        var s = this.extractCea608Data(e);
                        r.addData(i.samples[d].pts, s[0]),
                          o.addData(i.samples[d].pts, s[1]);
                      }
                    }
                }),
                (n.onBufferFlushing = function (v, i) {
                  var r = i.startOffset,
                    o = i.endOffset,
                    d = i.endOffsetSubtitles,
                    e = i.type,
                    s = this.media;
                  if (!(!s || s.currentTime < o)) {
                    if (!e || e === "video") {
                      var u = this.captionsTracks;
                      Object.keys(u).forEach(function (f) {
                        return Object(R.removeCuesInRange)(u[f], r, o);
                      });
                    }
                    if (
                      this.config.renderTextTracksNatively &&
                      r === 0 &&
                      d !== void 0
                    ) {
                      var a = this.textTracks;
                      Object.keys(a).forEach(function (f) {
                        return Object(R.removeCuesInRange)(a[f], r, d);
                      });
                    }
                  }
                }),
                (n.extractCea608Data = function (v) {
                  for (
                    var i = [[], []], r = v[0] & 31, o = 2, d = 0;
                    d < r;
                    d++
                  ) {
                    var e = v[o++],
                      s = 127 & v[o++],
                      u = 127 & v[o++];
                    if (!(s === 0 && u === 0)) {
                      var a = (4 & e) !== 0;
                      if (a) {
                        var f = 3 & e;
                        (f === 0 || f === 1) && (i[f].push(s), i[f].push(u));
                      }
                    }
                  }
                  return i;
                }),
                t
              );
            })();
          function g(t, n) {
            return t && t.label === n.name && !(t.textTrack1 || t.textTrack2);
          }
          function m(t, n, h, v) {
            return Math.min(n, v) - Math.max(t, h);
          }
          function l() {
            return {
              ccOffset: 0,
              presentationOffset: 0,
              0: { start: 0, prevCC: -1, new: !0 },
            };
          }
        },
        "./src/crypt/aes-crypto.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "default", function () {
              return M;
            });
          var M = (function () {
            function O(b, P) {
              (this.subtle = void 0),
                (this.aesIV = void 0),
                (this.subtle = b),
                (this.aesIV = P);
            }
            var L = O.prototype;
            return (
              (L.decrypt = function (P, R) {
                return this.subtle.decrypt(
                  { name: "AES-CBC", iv: this.aesIV },
                  R,
                  P
                );
              }),
              O
            );
          })();
        },
        "./src/crypt/aes-decryptor.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "removePadding", function () {
              return O;
            }),
            T.d(C, "default", function () {
              return L;
            });
          var M = T("./src/utils/typed-array.ts");
          function O(b) {
            var P = b.byteLength,
              R = P && new DataView(b.buffer).getUint8(P - 1);
            return R ? Object(M.sliceUint8)(b, 0, P - R) : b;
          }
          var L = (function () {
            function b() {
              (this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]),
                (this.subMix = [
                  new Uint32Array(256),
                  new Uint32Array(256),
                  new Uint32Array(256),
                  new Uint32Array(256),
                ]),
                (this.invSubMix = [
                  new Uint32Array(256),
                  new Uint32Array(256),
                  new Uint32Array(256),
                  new Uint32Array(256),
                ]),
                (this.sBox = new Uint32Array(256)),
                (this.invSBox = new Uint32Array(256)),
                (this.key = new Uint32Array(0)),
                (this.ksRows = 0),
                (this.keySize = 0),
                (this.keySchedule = void 0),
                (this.invKeySchedule = void 0),
                this.initTable();
            }
            var P = b.prototype;
            return (
              (P.uint8ArrayToUint32Array_ = function (A) {
                for (
                  var p = new DataView(A), y = new Uint32Array(4), S = 0;
                  S < 4;
                  S++
                )
                  y[S] = p.getUint32(S * 4);
                return y;
              }),
              (P.initTable = function () {
                var A = this.sBox,
                  p = this.invSBox,
                  y = this.subMix,
                  S = y[0],
                  E = y[1],
                  g = y[2],
                  m = y[3],
                  l = this.invSubMix,
                  t = l[0],
                  n = l[1],
                  h = l[2],
                  v = l[3],
                  i = new Uint32Array(256),
                  r = 0,
                  o = 0,
                  d = 0;
                for (d = 0; d < 256; d++)
                  d < 128 ? (i[d] = d << 1) : (i[d] = (d << 1) ^ 283);
                for (d = 0; d < 256; d++) {
                  var e = o ^ (o << 1) ^ (o << 2) ^ (o << 3) ^ (o << 4);
                  (e = (e >>> 8) ^ (e & 255) ^ 99), (A[r] = e), (p[e] = r);
                  var s = i[r],
                    u = i[s],
                    a = i[u],
                    f = (i[e] * 257) ^ (e * 16843008);
                  (S[r] = (f << 24) | (f >>> 8)),
                    (E[r] = (f << 16) | (f >>> 16)),
                    (g[r] = (f << 8) | (f >>> 24)),
                    (m[r] = f),
                    (f =
                      (a * 16843009) ^
                      (u * 65537) ^
                      (s * 257) ^
                      (r * 16843008)),
                    (t[e] = (f << 24) | (f >>> 8)),
                    (n[e] = (f << 16) | (f >>> 16)),
                    (h[e] = (f << 8) | (f >>> 24)),
                    (v[e] = f),
                    r
                      ? ((r = s ^ i[i[i[a ^ s]]]), (o ^= i[i[o]]))
                      : (r = o = 1);
                }
              }),
              (P.expandKey = function (A) {
                for (
                  var p = this.uint8ArrayToUint32Array_(A), y = !0, S = 0;
                  S < p.length && y;

                )
                  (y = p[S] === this.key[S]), S++;
                if (!y) {
                  this.key = p;
                  var E = (this.keySize = p.length);
                  if (E !== 4 && E !== 6 && E !== 8)
                    throw new Error("Invalid aes key size=" + E);
                  var g = (this.ksRows = (E + 6 + 1) * 4),
                    m,
                    l,
                    t = (this.keySchedule = new Uint32Array(g)),
                    n = (this.invKeySchedule = new Uint32Array(g)),
                    h = this.sBox,
                    v = this.rcon,
                    i = this.invSubMix,
                    r = i[0],
                    o = i[1],
                    d = i[2],
                    e = i[3],
                    s,
                    u;
                  for (m = 0; m < g; m++) {
                    if (m < E) {
                      s = t[m] = p[m];
                      continue;
                    }
                    (u = s),
                      m % E === 0
                        ? ((u = (u << 8) | (u >>> 24)),
                          (u =
                            (h[u >>> 24] << 24) |
                            (h[(u >>> 16) & 255] << 16) |
                            (h[(u >>> 8) & 255] << 8) |
                            h[u & 255]),
                          (u ^= v[(m / E) | 0] << 24))
                        : E > 6 &&
                          m % E === 4 &&
                          (u =
                            (h[u >>> 24] << 24) |
                            (h[(u >>> 16) & 255] << 16) |
                            (h[(u >>> 8) & 255] << 8) |
                            h[u & 255]),
                      (t[m] = s = (t[m - E] ^ u) >>> 0);
                  }
                  for (l = 0; l < g; l++)
                    (m = g - l),
                      l & 3 ? (u = t[m]) : (u = t[m - 4]),
                      l < 4 || m <= 4
                        ? (n[l] = u)
                        : (n[l] =
                            r[h[u >>> 24]] ^
                            o[h[(u >>> 16) & 255]] ^
                            d[h[(u >>> 8) & 255]] ^
                            e[h[u & 255]]),
                      (n[l] = n[l] >>> 0);
                }
              }),
              (P.networkToHostOrderSwap = function (A) {
                return (
                  (A << 24) |
                  ((A & 65280) << 8) |
                  ((A & 16711680) >> 8) |
                  (A >>> 24)
                );
              }),
              (P.decrypt = function (A, p, y) {
                for (
                  var S = this.keySize + 6,
                    E = this.invKeySchedule,
                    g = this.invSBox,
                    m = this.invSubMix,
                    l = m[0],
                    t = m[1],
                    n = m[2],
                    h = m[3],
                    v = this.uint8ArrayToUint32Array_(y),
                    i = v[0],
                    r = v[1],
                    o = v[2],
                    d = v[3],
                    e = new Int32Array(A),
                    s = new Int32Array(e.length),
                    u,
                    a,
                    f,
                    c,
                    D,
                    x,
                    I,
                    F,
                    _,
                    B,
                    U,
                    N,
                    w,
                    k,
                    K = this.networkToHostOrderSwap;
                  p < e.length;

                ) {
                  for (
                    _ = K(e[p]),
                      B = K(e[p + 1]),
                      U = K(e[p + 2]),
                      N = K(e[p + 3]),
                      D = _ ^ E[0],
                      x = N ^ E[1],
                      I = U ^ E[2],
                      F = B ^ E[3],
                      w = 4,
                      k = 1;
                    k < S;
                    k++
                  )
                    (u =
                      l[D >>> 24] ^
                      t[(x >> 16) & 255] ^
                      n[(I >> 8) & 255] ^
                      h[F & 255] ^
                      E[w]),
                      (a =
                        l[x >>> 24] ^
                        t[(I >> 16) & 255] ^
                        n[(F >> 8) & 255] ^
                        h[D & 255] ^
                        E[w + 1]),
                      (f =
                        l[I >>> 24] ^
                        t[(F >> 16) & 255] ^
                        n[(D >> 8) & 255] ^
                        h[x & 255] ^
                        E[w + 2]),
                      (c =
                        l[F >>> 24] ^
                        t[(D >> 16) & 255] ^
                        n[(x >> 8) & 255] ^
                        h[I & 255] ^
                        E[w + 3]),
                      (D = u),
                      (x = a),
                      (I = f),
                      (F = c),
                      (w = w + 4);
                  (u =
                    (g[D >>> 24] << 24) ^
                    (g[(x >> 16) & 255] << 16) ^
                    (g[(I >> 8) & 255] << 8) ^
                    g[F & 255] ^
                    E[w]),
                    (a =
                      (g[x >>> 24] << 24) ^
                      (g[(I >> 16) & 255] << 16) ^
                      (g[(F >> 8) & 255] << 8) ^
                      g[D & 255] ^
                      E[w + 1]),
                    (f =
                      (g[I >>> 24] << 24) ^
                      (g[(F >> 16) & 255] << 16) ^
                      (g[(D >> 8) & 255] << 8) ^
                      g[x & 255] ^
                      E[w + 2]),
                    (c =
                      (g[F >>> 24] << 24) ^
                      (g[(D >> 16) & 255] << 16) ^
                      (g[(x >> 8) & 255] << 8) ^
                      g[I & 255] ^
                      E[w + 3]),
                    (s[p] = K(u ^ i)),
                    (s[p + 1] = K(c ^ r)),
                    (s[p + 2] = K(f ^ o)),
                    (s[p + 3] = K(a ^ d)),
                    (i = _),
                    (r = B),
                    (o = U),
                    (d = N),
                    (p = p + 4);
                }
                return s.buffer;
              }),
              b
            );
          })();
        },
        "./src/crypt/decrypter.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "default", function () {
              return p;
            });
          var M = T("./src/crypt/aes-crypto.ts"),
            O = T("./src/crypt/fast-aes-key.ts"),
            L = T("./src/crypt/aes-decryptor.ts"),
            b = T("./src/utils/logger.ts"),
            P = T("./src/utils/mp4-tools.ts"),
            R = T("./src/utils/typed-array.ts"),
            A = 16,
            p = (function () {
              function y(E, g, m) {
                var l = m === void 0 ? {} : m,
                  t = l.removePKCS7Padding,
                  n = t === void 0 ? !0 : t;
                if (
                  ((this.logEnabled = !0),
                  (this.observer = void 0),
                  (this.config = void 0),
                  (this.removePKCS7Padding = void 0),
                  (this.subtle = null),
                  (this.softwareDecrypter = null),
                  (this.key = null),
                  (this.fastAesKey = null),
                  (this.remainderData = null),
                  (this.currentIV = null),
                  (this.currentResult = null),
                  (this.observer = E),
                  (this.config = g),
                  (this.removePKCS7Padding = n),
                  n)
                )
                  try {
                    var h = self.crypto;
                    h && (this.subtle = h.subtle || h.webkitSubtle);
                  } catch {}
                this.subtle === null && (this.config.enableSoftwareAES = !0);
              }
              var S = y.prototype;
              return (
                (S.destroy = function () {
                  this.observer = null;
                }),
                (S.isSync = function () {
                  return this.config.enableSoftwareAES;
                }),
                (S.flush = function () {
                  var g = this.currentResult;
                  if (!g) {
                    this.reset();
                    return;
                  }
                  var m = new Uint8Array(g);
                  return (
                    this.reset(),
                    this.removePKCS7Padding ? Object(L.removePadding)(m) : m
                  );
                }),
                (S.reset = function () {
                  (this.currentResult = null),
                    (this.currentIV = null),
                    (this.remainderData = null),
                    this.softwareDecrypter && (this.softwareDecrypter = null);
                }),
                (S.decrypt = function (g, m, l, t) {
                  if (this.config.enableSoftwareAES) {
                    this.softwareDecrypt(new Uint8Array(g), m, l);
                    var n = this.flush();
                    n && t(n.buffer);
                  } else this.webCryptoDecrypt(new Uint8Array(g), m, l).then(t);
                }),
                (S.softwareDecrypt = function (g, m, l) {
                  var t = this.currentIV,
                    n = this.currentResult,
                    h = this.remainderData;
                  this.logOnce("JS AES decrypt"),
                    h &&
                      ((g = Object(P.appendUint8Array)(h, g)),
                      (this.remainderData = null));
                  var v = this.getValidChunk(g);
                  if (!v.length) return null;
                  t && (l = t);
                  var i = this.softwareDecrypter;
                  i || (i = this.softwareDecrypter = new L.default()),
                    i.expandKey(m);
                  var r = n;
                  return (
                    (this.currentResult = i.decrypt(v.buffer, 0, l)),
                    (this.currentIV = Object(R.sliceUint8)(v, -16).buffer),
                    r || null
                  );
                }),
                (S.webCryptoDecrypt = function (g, m, l) {
                  var t = this,
                    n = this.subtle;
                  return (
                    (this.key !== m || !this.fastAesKey) &&
                      ((this.key = m), (this.fastAesKey = new O.default(n, m))),
                    this.fastAesKey
                      .expandKey()
                      .then(function (h) {
                        if (!n)
                          return Promise.reject(
                            new Error("web crypto not initialized")
                          );
                        var v = new M.default(n, l);
                        return v.decrypt(g.buffer, h);
                      })
                      .catch(function (h) {
                        return t.onWebCryptoError(h, g, m, l);
                      })
                  );
                }),
                (S.onWebCryptoError = function (g, m, l, t) {
                  return (
                    b.logger.warn(
                      "[decrypter.ts]: WebCrypto Error, disable WebCrypto API:",
                      g
                    ),
                    (this.config.enableSoftwareAES = !0),
                    (this.logEnabled = !0),
                    this.softwareDecrypt(m, l, t)
                  );
                }),
                (S.getValidChunk = function (g) {
                  var m = g,
                    l = g.length - (g.length % A);
                  return (
                    l !== g.length &&
                      ((m = Object(R.sliceUint8)(g, 0, l)),
                      (this.remainderData = Object(R.sliceUint8)(g, l))),
                    m
                  );
                }),
                (S.logOnce = function (g) {
                  !this.logEnabled ||
                    (b.logger.log("[decrypter.ts]: " + g),
                    (this.logEnabled = !1));
                }),
                y
              );
            })();
        },
        "./src/crypt/fast-aes-key.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "default", function () {
              return M;
            });
          var M = (function () {
            function O(b, P) {
              (this.subtle = void 0),
                (this.key = void 0),
                (this.subtle = b),
                (this.key = P);
            }
            var L = O.prototype;
            return (
              (L.expandKey = function () {
                return this.subtle.importKey(
                  "raw",
                  this.key,
                  { name: "AES-CBC" },
                  !1,
                  ["encrypt", "decrypt"]
                );
              }),
              O
            );
          })();
        },
        "./src/demux/aacdemuxer.ts": function (W, C, T) {
          "use strict";
          T.r(C);
          var M = T("./src/demux/base-audio-demuxer.ts"),
            O = T("./src/demux/adts.ts"),
            L = T("./src/utils/logger.ts"),
            b = T("./src/demux/id3.ts");
          function P(p, y) {
            (p.prototype = Object.create(y.prototype)),
              (p.prototype.constructor = p),
              R(p, y);
          }
          function R(p, y) {
            return (
              (R = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (E, g) {
                    return (E.__proto__ = g), E;
                  }),
              R(p, y)
            );
          }
          var A = (function (p) {
            P(y, p);
            function y(E, g) {
              var m;
              return (
                (m = p.call(this) || this),
                (m.observer = void 0),
                (m.config = void 0),
                (m.observer = E),
                (m.config = g),
                m
              );
            }
            var S = y.prototype;
            return (
              (S.resetInitSegment = function (g, m, l, t) {
                p.prototype.resetInitSegment.call(this, g, m, l, t),
                  (this._audioTrack = {
                    container: "audio/adts",
                    type: "audio",
                    id: 2,
                    pid: -1,
                    sequenceNumber: 0,
                    segmentCodec: "aac",
                    samples: [],
                    manifestCodec: m,
                    duration: t,
                    inputTimeScale: 9e4,
                    dropped: 0,
                  });
              }),
              (y.probe = function (g) {
                if (!g) return !1;
                for (
                  var m = b.getID3Data(g, 0) || [], l = m.length, t = g.length;
                  l < t;
                  l++
                )
                  if (O.probe(g, l))
                    return L.logger.log("ADTS sync word found !"), !0;
                return !1;
              }),
              (S.canParse = function (g, m) {
                return O.canParse(g, m);
              }),
              (S.appendFrame = function (g, m, l) {
                O.initTrackConfig(g, this.observer, m, l, g.manifestCodec);
                var t = O.appendFrame(g, m, l, this.basePTS, this.frameIndex);
                if (t && t.missing === 0) return t;
              }),
              y
            );
          })(M.default);
          C.default = A;
        },
        "./src/demux/adts.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "getAudioConfig", function () {
              return b;
            }),
            T.d(C, "isHeaderPattern", function () {
              return P;
            }),
            T.d(C, "getHeaderLength", function () {
              return R;
            }),
            T.d(C, "getFullFrameLength", function () {
              return A;
            }),
            T.d(C, "canGetFrameLength", function () {
              return p;
            }),
            T.d(C, "isHeader", function () {
              return y;
            }),
            T.d(C, "canParse", function () {
              return S;
            }),
            T.d(C, "probe", function () {
              return E;
            }),
            T.d(C, "initTrackConfig", function () {
              return g;
            }),
            T.d(C, "getFrameDuration", function () {
              return m;
            }),
            T.d(C, "parseFrameHeader", function () {
              return l;
            }),
            T.d(C, "appendFrame", function () {
              return t;
            });
          var M = T("./src/utils/logger.ts"),
            O = T("./src/errors.ts"),
            L = T("./src/events.ts");
          function b(n, h, v, i) {
            var r,
              o,
              d,
              e,
              s = navigator.userAgent.toLowerCase(),
              u = i,
              a = [
                96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3,
                11025, 8e3, 7350,
              ];
            r = ((h[v + 2] & 192) >>> 6) + 1;
            var f = (h[v + 2] & 60) >>> 2;
            if (f > a.length - 1) {
              n.trigger(L.Events.ERROR, {
                type: O.ErrorTypes.MEDIA_ERROR,
                details: O.ErrorDetails.FRAG_PARSING_ERROR,
                fatal: !0,
                reason: "invalid ADTS sampling index:" + f,
              });
              return;
            }
            return (
              (d = (h[v + 2] & 1) << 2),
              (d |= (h[v + 3] & 192) >>> 6),
              M.logger.log(
                "manifest codec:" +
                  i +
                  ", ADTS type:" +
                  r +
                  ", samplingIndex:" +
                  f
              ),
              /firefox/i.test(s)
                ? f >= 6
                  ? ((r = 5), (e = new Array(4)), (o = f - 3))
                  : ((r = 2), (e = new Array(2)), (o = f))
                : s.indexOf("android") !== -1
                ? ((r = 2), (e = new Array(2)), (o = f))
                : ((r = 5),
                  (e = new Array(4)),
                  (i &&
                    (i.indexOf("mp4a.40.29") !== -1 ||
                      i.indexOf("mp4a.40.5") !== -1)) ||
                  (!i && f >= 6)
                    ? (o = f - 3)
                    : (((i &&
                        i.indexOf("mp4a.40.2") !== -1 &&
                        ((f >= 6 && d === 1) || /vivaldi/i.test(s))) ||
                        (!i && d === 1)) &&
                        ((r = 2), (e = new Array(2))),
                      (o = f))),
              (e[0] = r << 3),
              (e[0] |= (f & 14) >> 1),
              (e[1] |= (f & 1) << 7),
              (e[1] |= d << 3),
              r === 5 &&
                ((e[1] |= (o & 14) >> 1),
                (e[2] = (o & 1) << 7),
                (e[2] |= 2 << 2),
                (e[3] = 0)),
              {
                config: e,
                samplerate: a[f],
                channelCount: d,
                codec: "mp4a.40." + r,
                manifestCodec: u,
              }
            );
          }
          function P(n, h) {
            return n[h] === 255 && (n[h + 1] & 246) === 240;
          }
          function R(n, h) {
            return n[h + 1] & 1 ? 7 : 9;
          }
          function A(n, h) {
            return (
              ((n[h + 3] & 3) << 11) |
              (n[h + 4] << 3) |
              ((n[h + 5] & 224) >>> 5)
            );
          }
          function p(n, h) {
            return h + 5 < n.length;
          }
          function y(n, h) {
            return h + 1 < n.length && P(n, h);
          }
          function S(n, h) {
            return p(n, h) && P(n, h) && A(n, h) <= n.length - h;
          }
          function E(n, h) {
            if (y(n, h)) {
              var v = R(n, h);
              if (h + v >= n.length) return !1;
              var i = A(n, h);
              if (i <= v) return !1;
              var r = h + i;
              return r === n.length || y(n, r);
            }
            return !1;
          }
          function g(n, h, v, i, r) {
            if (!n.samplerate) {
              var o = b(h, v, i, r);
              if (!o) return;
              (n.config = o.config),
                (n.samplerate = o.samplerate),
                (n.channelCount = o.channelCount),
                (n.codec = o.codec),
                (n.manifestCodec = o.manifestCodec),
                M.logger.log(
                  "parsed codec:" +
                    n.codec +
                    ", rate:" +
                    o.samplerate +
                    ", channels:" +
                    o.channelCount
                );
            }
          }
          function m(n) {
            return (1024 * 9e4) / n;
          }
          function l(n, h) {
            var v = R(n, h);
            if (h + v <= n.length) {
              var i = A(n, h) - v;
              if (i > 0) return { headerLength: v, frameLength: i };
            }
          }
          function t(n, h, v, i, r) {
            var o = m(n.samplerate),
              d = i + r * o,
              e = l(h, v),
              s;
            if (e) {
              var u = e.frameLength,
                a = e.headerLength,
                f = a + u,
                c = Math.max(0, v + f - h.length);
              c
                ? ((s = new Uint8Array(f - a)),
                  s.set(h.subarray(v + a, h.length), 0))
                : (s = h.subarray(v + a, v + f));
              var D = { unit: s, pts: d };
              return (
                c || n.samples.push(D), { sample: D, length: f, missing: c }
              );
            }
            var x = h.length - v;
            (s = new Uint8Array(x)), s.set(h.subarray(v, h.length), 0);
            var I = { unit: s, pts: d };
            return { sample: I, length: x, missing: -1 };
          }
        },
        "./src/demux/base-audio-demuxer.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "initPTSFn", function () {
              return p;
            });
          var M = T("./src/polyfills/number.ts"),
            O = T("./src/demux/id3.ts"),
            L = T("./src/types/demuxer.ts"),
            b = T("./src/demux/dummy-demuxed-track.ts"),
            P = T("./src/utils/mp4-tools.ts"),
            R = T("./src/utils/typed-array.ts"),
            A = (function () {
              function y() {
                (this._audioTrack = void 0),
                  (this._id3Track = void 0),
                  (this.frameIndex = 0),
                  (this.cachedData = null),
                  (this.basePTS = null),
                  (this.initPTS = null);
              }
              var S = y.prototype;
              return (
                (S.resetInitSegment = function (g, m, l, t) {
                  this._id3Track = {
                    type: "id3",
                    id: 3,
                    pid: -1,
                    inputTimeScale: 9e4,
                    sequenceNumber: 0,
                    samples: [],
                    dropped: 0,
                  };
                }),
                (S.resetTimeStamp = function (g) {
                  (this.initPTS = g), this.resetContiguity();
                }),
                (S.resetContiguity = function () {
                  (this.basePTS = null), (this.frameIndex = 0);
                }),
                (S.canParse = function (g, m) {
                  return !1;
                }),
                (S.appendFrame = function (g, m, l) {}),
                (S.demux = function (g, m) {
                  this.cachedData &&
                    ((g = Object(P.appendUint8Array)(this.cachedData, g)),
                    (this.cachedData = null));
                  var l = O.getID3Data(g, 0),
                    t = l ? l.length : 0,
                    n,
                    h,
                    v = this._audioTrack,
                    i = this._id3Track,
                    r = l ? O.getTimeStamp(l) : void 0,
                    o = g.length;
                  for (
                    (this.basePTS === null ||
                      (this.frameIndex === 0 && Object(M.isFiniteNumber)(r))) &&
                      (this.basePTS = p(r, m, this.initPTS)),
                      l &&
                        l.length > 0 &&
                        i.samples.push({
                          pts: this.basePTS,
                          dts: this.basePTS,
                          data: l,
                          type: L.MetadataSchema.audioId3,
                        }),
                      h = this.basePTS;
                    t < o;

                  ) {
                    if (this.canParse(g, t)) {
                      var d = this.appendFrame(v, g, t);
                      d
                        ? (this.frameIndex++,
                          (h = d.sample.pts),
                          (t += d.length),
                          (n = t))
                        : (t = o);
                    } else
                      O.canParse(g, t)
                        ? ((l = O.getID3Data(g, t)),
                          i.samples.push({
                            pts: h,
                            dts: h,
                            data: l,
                            type: L.MetadataSchema.audioId3,
                          }),
                          (t += l.length),
                          (n = t))
                        : t++;
                    if (t === o && n !== o) {
                      var e = Object(R.sliceUint8)(g, n);
                      this.cachedData
                        ? (this.cachedData = Object(P.appendUint8Array)(
                            this.cachedData,
                            e
                          ))
                        : (this.cachedData = e);
                    }
                  }
                  return {
                    audioTrack: v,
                    videoTrack: Object(b.dummyTrack)(),
                    id3Track: i,
                    textTrack: Object(b.dummyTrack)(),
                  };
                }),
                (S.demuxSampleAes = function (g, m, l) {
                  return Promise.reject(
                    new Error(
                      "[" +
                        this +
                        "] This demuxer does not support Sample-AES decryption"
                    )
                  );
                }),
                (S.flush = function (g) {
                  var m = this.cachedData;
                  return (
                    m && ((this.cachedData = null), this.demux(m, 0)),
                    {
                      audioTrack: this._audioTrack,
                      videoTrack: Object(b.dummyTrack)(),
                      id3Track: this._id3Track,
                      textTrack: Object(b.dummyTrack)(),
                    }
                  );
                }),
                (S.destroy = function () {}),
                y
              );
            })(),
            p = function (S, E, g) {
              return Object(M.isFiniteNumber)(S) ? S * 90 : E * 9e4 + (g || 0);
            };
          C.default = A;
        },
        "./src/demux/chunk-cache.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "default", function () {
              return M;
            });
          var M = (function () {
            function L() {
              (this.chunks = []), (this.dataLength = 0);
            }
            var b = L.prototype;
            return (
              (b.push = function (R) {
                this.chunks.push(R), (this.dataLength += R.length);
              }),
              (b.flush = function () {
                var R = this.chunks,
                  A = this.dataLength,
                  p;
                if (R.length) R.length === 1 ? (p = R[0]) : (p = O(R, A));
                else return new Uint8Array(0);
                return this.reset(), p;
              }),
              (b.reset = function () {
                (this.chunks.length = 0), (this.dataLength = 0);
              }),
              L
            );
          })();
          function O(L, b) {
            for (var P = new Uint8Array(b), R = 0, A = 0; A < L.length; A++) {
              var p = L[A];
              P.set(p, R), (R += p.length);
            }
            return P;
          }
        },
        "./src/demux/dummy-demuxed-track.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "dummyTrack", function () {
              return M;
            });
          function M(O, L) {
            return (
              O === void 0 && (O = ""),
              L === void 0 && (L = 9e4),
              {
                type: O,
                id: -1,
                pid: -1,
                inputTimeScale: L,
                sequenceNumber: -1,
                samples: [],
                dropped: 0,
              }
            );
          }
        },
        "./src/demux/exp-golomb.ts": function (W, C, T) {
          "use strict";
          T.r(C);
          var M = T("./src/utils/logger.ts"),
            O = (function () {
              function L(P) {
                (this.data = void 0),
                  (this.bytesAvailable = void 0),
                  (this.word = void 0),
                  (this.bitsAvailable = void 0),
                  (this.data = P),
                  (this.bytesAvailable = P.byteLength),
                  (this.word = 0),
                  (this.bitsAvailable = 0);
              }
              var b = L.prototype;
              return (
                (b.loadWord = function () {
                  var R = this.data,
                    A = this.bytesAvailable,
                    p = R.byteLength - A,
                    y = new Uint8Array(4),
                    S = Math.min(4, A);
                  if (S === 0) throw new Error("no bytes available");
                  y.set(R.subarray(p, p + S)),
                    (this.word = new DataView(y.buffer).getUint32(0)),
                    (this.bitsAvailable = S * 8),
                    (this.bytesAvailable -= S);
                }),
                (b.skipBits = function (R) {
                  var A;
                  this.bitsAvailable > R
                    ? ((this.word <<= R), (this.bitsAvailable -= R))
                    : ((R -= this.bitsAvailable),
                      (A = R >> 3),
                      (R -= A >> 3),
                      (this.bytesAvailable -= A),
                      this.loadWord(),
                      (this.word <<= R),
                      (this.bitsAvailable -= R));
                }),
                (b.readBits = function (R) {
                  var A = Math.min(this.bitsAvailable, R),
                    p = this.word >>> (32 - A);
                  return (
                    R > 32 &&
                      M.logger.error("Cannot read more than 32 bits at a time"),
                    (this.bitsAvailable -= A),
                    this.bitsAvailable > 0
                      ? (this.word <<= A)
                      : this.bytesAvailable > 0 && this.loadWord(),
                    (A = R - A),
                    A > 0 && this.bitsAvailable
                      ? (p << A) | this.readBits(A)
                      : p
                  );
                }),
                (b.skipLZ = function () {
                  var R;
                  for (R = 0; R < this.bitsAvailable; ++R)
                    if ((this.word & (2147483648 >>> R)) !== 0)
                      return (this.word <<= R), (this.bitsAvailable -= R), R;
                  return this.loadWord(), R + this.skipLZ();
                }),
                (b.skipUEG = function () {
                  this.skipBits(1 + this.skipLZ());
                }),
                (b.skipEG = function () {
                  this.skipBits(1 + this.skipLZ());
                }),
                (b.readUEG = function () {
                  var R = this.skipLZ();
                  return this.readBits(R + 1) - 1;
                }),
                (b.readEG = function () {
                  var R = this.readUEG();
                  return 1 & R ? (1 + R) >>> 1 : -1 * (R >>> 1);
                }),
                (b.readBoolean = function () {
                  return this.readBits(1) === 1;
                }),
                (b.readUByte = function () {
                  return this.readBits(8);
                }),
                (b.readUShort = function () {
                  return this.readBits(16);
                }),
                (b.readUInt = function () {
                  return this.readBits(32);
                }),
                (b.skipScalingList = function (R) {
                  for (var A = 8, p = 8, y, S = 0; S < R; S++)
                    p !== 0 && ((y = this.readEG()), (p = (A + y + 256) % 256)),
                      (A = p === 0 ? A : p);
                }),
                (b.readSPS = function () {
                  var R = 0,
                    A = 0,
                    p = 0,
                    y = 0,
                    S,
                    E,
                    g,
                    m = this.readUByte.bind(this),
                    l = this.readBits.bind(this),
                    t = this.readUEG.bind(this),
                    n = this.readBoolean.bind(this),
                    h = this.skipBits.bind(this),
                    v = this.skipEG.bind(this),
                    i = this.skipUEG.bind(this),
                    r = this.skipScalingList.bind(this);
                  m();
                  var o = m();
                  if (
                    (l(5),
                    h(3),
                    m(),
                    i(),
                    o === 100 ||
                      o === 110 ||
                      o === 122 ||
                      o === 244 ||
                      o === 44 ||
                      o === 83 ||
                      o === 86 ||
                      o === 118 ||
                      o === 128)
                  ) {
                    var d = t();
                    if ((d === 3 && h(1), i(), i(), h(1), n()))
                      for (E = d !== 3 ? 8 : 12, g = 0; g < E; g++)
                        n() && (g < 6 ? r(16) : r(64));
                  }
                  i();
                  var e = t();
                  if (e === 0) t();
                  else if (e === 1)
                    for (h(1), v(), v(), S = t(), g = 0; g < S; g++) v();
                  i(), h(1);
                  var s = t(),
                    u = t(),
                    a = l(1);
                  a === 0 && h(1),
                    h(1),
                    n() && ((R = t()), (A = t()), (p = t()), (y = t()));
                  var f = [1, 1];
                  if (n() && n()) {
                    var c = m();
                    switch (c) {
                      case 1:
                        f = [1, 1];
                        break;
                      case 2:
                        f = [12, 11];
                        break;
                      case 3:
                        f = [10, 11];
                        break;
                      case 4:
                        f = [16, 11];
                        break;
                      case 5:
                        f = [40, 33];
                        break;
                      case 6:
                        f = [24, 11];
                        break;
                      case 7:
                        f = [20, 11];
                        break;
                      case 8:
                        f = [32, 11];
                        break;
                      case 9:
                        f = [80, 33];
                        break;
                      case 10:
                        f = [18, 11];
                        break;
                      case 11:
                        f = [15, 11];
                        break;
                      case 12:
                        f = [64, 33];
                        break;
                      case 13:
                        f = [160, 99];
                        break;
                      case 14:
                        f = [4, 3];
                        break;
                      case 15:
                        f = [3, 2];
                        break;
                      case 16:
                        f = [2, 1];
                        break;
                      case 255: {
                        f = [(m() << 8) | m(), (m() << 8) | m()];
                        break;
                      }
                    }
                  }
                  return {
                    width: Math.ceil((s + 1) * 16 - R * 2 - A * 2),
                    height: (2 - a) * (u + 1) * 16 - (a ? 2 : 4) * (p + y),
                    pixelRatio: f,
                  };
                }),
                (b.readSliceType = function () {
                  return this.readUByte(), this.readUEG(), this.readUEG();
                }),
                L
              );
            })();
          C.default = O;
        },
        "./src/demux/id3.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "isHeader", function () {
              return M;
            }),
            T.d(C, "isFooter", function () {
              return O;
            }),
            T.d(C, "getID3Data", function () {
              return L;
            }),
            T.d(C, "canParse", function () {
              return P;
            }),
            T.d(C, "getTimeStamp", function () {
              return R;
            }),
            T.d(C, "isTimeStampFrame", function () {
              return A;
            }),
            T.d(C, "getID3Frames", function () {
              return y;
            }),
            T.d(C, "decodeFrame", function () {
              return S;
            }),
            T.d(C, "utf8ArrayToStr", function () {
              return t;
            }),
            T.d(C, "testables", function () {
              return n;
            });
          var M = function (r, o) {
              return (
                o + 10 <= r.length &&
                r[o] === 73 &&
                r[o + 1] === 68 &&
                r[o + 2] === 51 &&
                r[o + 3] < 255 &&
                r[o + 4] < 255 &&
                r[o + 6] < 128 &&
                r[o + 7] < 128 &&
                r[o + 8] < 128 &&
                r[o + 9] < 128
              );
            },
            O = function (r, o) {
              return (
                o + 10 <= r.length &&
                r[o] === 51 &&
                r[o + 1] === 68 &&
                r[o + 2] === 73 &&
                r[o + 3] < 255 &&
                r[o + 4] < 255 &&
                r[o + 6] < 128 &&
                r[o + 7] < 128 &&
                r[o + 8] < 128 &&
                r[o + 9] < 128
              );
            },
            L = function (r, o) {
              for (var d = o, e = 0; M(r, o); ) {
                e += 10;
                var s = b(r, o + 6);
                (e += s), O(r, o + 10) && (e += 10), (o += e);
              }
              if (e > 0) return r.subarray(d, d + e);
            },
            b = function (r, o) {
              var d = 0;
              return (
                (d = (r[o] & 127) << 21),
                (d |= (r[o + 1] & 127) << 14),
                (d |= (r[o + 2] & 127) << 7),
                (d |= r[o + 3] & 127),
                d
              );
            },
            P = function (r, o) {
              return M(r, o) && b(r, o + 6) + 10 <= r.length - o;
            },
            R = function (r) {
              for (var o = y(r), d = 0; d < o.length; d++) {
                var e = o[d];
                if (A(e)) return l(e);
              }
            },
            A = function (r) {
              return (
                r &&
                r.key === "PRIV" &&
                r.info === "com.apple.streaming.transportStreamTimestamp"
              );
            },
            p = function (r) {
              var o = String.fromCharCode(r[0], r[1], r[2], r[3]),
                d = b(r, 4),
                e = 10;
              return { type: o, size: d, data: r.subarray(e, e + d) };
            },
            y = function (r) {
              for (var o = 0, d = []; M(r, o); ) {
                var e = b(r, o + 6);
                o += 10;
                for (var s = o + e; o + 8 < s; ) {
                  var u = p(r.subarray(o)),
                    a = S(u);
                  a && d.push(a), (o += u.size + 10);
                }
                O(r, o) && (o += 10);
              }
              return d;
            },
            S = function (r) {
              return r.type === "PRIV" ? E(r) : r.type[0] === "W" ? m(r) : g(r);
            },
            E = function (r) {
              if (!(r.size < 2)) {
                var o = t(r.data, !0),
                  d = new Uint8Array(r.data.subarray(o.length + 1));
                return { key: r.type, info: o, data: d.buffer };
              }
            },
            g = function (r) {
              if (!(r.size < 2)) {
                if (r.type === "TXXX") {
                  var o = 1,
                    d = t(r.data.subarray(o), !0);
                  o += d.length + 1;
                  var e = t(r.data.subarray(o));
                  return { key: r.type, info: d, data: e };
                }
                var s = t(r.data.subarray(1));
                return { key: r.type, data: s };
              }
            },
            m = function (r) {
              if (r.type === "WXXX") {
                if (r.size < 2) return;
                var o = 1,
                  d = t(r.data.subarray(o), !0);
                o += d.length + 1;
                var e = t(r.data.subarray(o));
                return { key: r.type, info: d, data: e };
              }
              var s = t(r.data);
              return { key: r.type, data: s };
            },
            l = function (r) {
              if (r.data.byteLength === 8) {
                var o = new Uint8Array(r.data),
                  d = o[3] & 1,
                  e = (o[4] << 23) + (o[5] << 15) + (o[6] << 7) + o[7];
                return (e /= 45), d && (e += 4772185884e-2), Math.round(e);
              }
            },
            t = function (r, o) {
              o === void 0 && (o = !1);
              var d = v();
              if (d) {
                var e = d.decode(r);
                if (o) {
                  var s = e.indexOf("\0");
                  return s !== -1 ? e.substring(0, s) : e;
                }
                return e.replace(/\0/g, "");
              }
              for (var u = r.length, a, f, c, D = "", x = 0; x < u; ) {
                if (((a = r[x++]), a === 0 && o)) return D;
                if (a === 0 || a === 3) continue;
                switch (a >> 4) {
                  case 0:
                  case 1:
                  case 2:
                  case 3:
                  case 4:
                  case 5:
                  case 6:
                  case 7:
                    D += String.fromCharCode(a);
                    break;
                  case 12:
                  case 13:
                    (f = r[x++]),
                      (D += String.fromCharCode(((a & 31) << 6) | (f & 63)));
                    break;
                  case 14:
                    (f = r[x++]),
                      (c = r[x++]),
                      (D += String.fromCharCode(
                        ((a & 15) << 12) | ((f & 63) << 6) | ((c & 63) << 0)
                      ));
                    break;
                  default:
                }
              }
              return D;
            },
            n = { decodeTextFrame: g },
            h;
          function v() {
            return (
              !h &&
                typeof self.TextDecoder < "u" &&
                (h = new self.TextDecoder("utf-8")),
              h
            );
          }
        },
        "./src/demux/mp3demuxer.ts": function (W, C, T) {
          "use strict";
          T.r(C);
          var M = T("./src/demux/base-audio-demuxer.ts"),
            O = T("./src/demux/id3.ts"),
            L = T("./src/utils/logger.ts"),
            b = T("./src/demux/mpegaudio.ts");
          function P(p, y) {
            (p.prototype = Object.create(y.prototype)),
              (p.prototype.constructor = p),
              R(p, y);
          }
          function R(p, y) {
            return (
              (R = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (E, g) {
                    return (E.__proto__ = g), E;
                  }),
              R(p, y)
            );
          }
          var A = (function (p) {
            P(y, p);
            function y() {
              return p.apply(this, arguments) || this;
            }
            var S = y.prototype;
            return (
              (S.resetInitSegment = function (g, m, l, t) {
                p.prototype.resetInitSegment.call(this, g, m, l, t),
                  (this._audioTrack = {
                    container: "audio/mpeg",
                    type: "audio",
                    id: 2,
                    pid: -1,
                    sequenceNumber: 0,
                    segmentCodec: "mp3",
                    samples: [],
                    manifestCodec: m,
                    duration: t,
                    inputTimeScale: 9e4,
                    dropped: 0,
                  });
              }),
              (y.probe = function (g) {
                if (!g) return !1;
                for (
                  var m = O.getID3Data(g, 0) || [], l = m.length, t = g.length;
                  l < t;
                  l++
                )
                  if (b.probe(g, l))
                    return L.logger.log("MPEG Audio sync word found !"), !0;
                return !1;
              }),
              (S.canParse = function (g, m) {
                return b.canParse(g, m);
              }),
              (S.appendFrame = function (g, m, l) {
                if (this.basePTS !== null)
                  return b.appendFrame(g, m, l, this.basePTS, this.frameIndex);
              }),
              y
            );
          })(M.default);
          C.default = A;
        },
        "./src/demux/mp4demuxer.ts": function (W, C, T) {
          "use strict";
          T.r(C);
          var M = T("./src/polyfills/number.ts"),
            O = T("./src/types/demuxer.ts"),
            L = T("./src/utils/mp4-tools.ts"),
            b = T("./src/demux/dummy-demuxed-track.ts"),
            P = /\/emsg[-/]ID3/i,
            R = (function () {
              function A(y, S) {
                (this.remainderData = null),
                  (this.timeOffset = 0),
                  (this.config = void 0),
                  (this.videoTrack = void 0),
                  (this.audioTrack = void 0),
                  (this.id3Track = void 0),
                  (this.txtTrack = void 0),
                  (this.config = S);
              }
              var p = A.prototype;
              return (
                (p.resetTimeStamp = function () {}),
                (p.resetInitSegment = function (S, E, g, m) {
                  var l = Object(L.parseInitSegment)(S),
                    t = (this.videoTrack = Object(b.dummyTrack)("video", 1)),
                    n = (this.audioTrack = Object(b.dummyTrack)("audio", 1)),
                    h = (this.txtTrack = Object(b.dummyTrack)("text", 1));
                  if (
                    ((this.id3Track = Object(b.dummyTrack)("id3", 1)),
                    (this.timeOffset = 0),
                    l.video)
                  ) {
                    var v = l.video,
                      i = v.id,
                      r = v.timescale,
                      o = v.codec;
                    (t.id = i), (t.timescale = h.timescale = r), (t.codec = o);
                  }
                  if (l.audio) {
                    var d = l.audio,
                      e = d.id,
                      s = d.timescale,
                      u = d.codec;
                    (n.id = e), (n.timescale = s), (n.codec = u);
                  }
                  (h.id = L.RemuxerTrackIdConfig.text),
                    (t.sampleDuration = 0),
                    (t.duration = n.duration = m);
                }),
                (p.resetContiguity = function () {}),
                (A.probe = function (S) {
                  return (
                    (S = S.length > 16384 ? S.subarray(0, 16384) : S),
                    Object(L.findBox)(S, ["moof"]).length > 0
                  );
                }),
                (p.demux = function (S, E) {
                  this.timeOffset = E;
                  var g = S,
                    m = this.videoTrack,
                    l = this.txtTrack;
                  if (this.config.progressive) {
                    this.remainderData &&
                      (g = Object(L.appendUint8Array)(this.remainderData, S));
                    var t = Object(L.segmentValidRange)(g);
                    (this.remainderData = t.remainder),
                      (m.samples = t.valid || new Uint8Array());
                  } else m.samples = g;
                  var n = this.extractID3Track(m, E);
                  return (
                    (l.samples = Object(L.parseSamples)(E, m)),
                    {
                      videoTrack: m,
                      audioTrack: this.audioTrack,
                      id3Track: n,
                      textTrack: this.txtTrack,
                    }
                  );
                }),
                (p.flush = function () {
                  var S = this.timeOffset,
                    E = this.videoTrack,
                    g = this.txtTrack;
                  (E.samples = this.remainderData || new Uint8Array()),
                    (this.remainderData = null);
                  var m = this.extractID3Track(E, this.timeOffset);
                  return (
                    (g.samples = Object(L.parseSamples)(S, E)),
                    {
                      videoTrack: E,
                      audioTrack: Object(b.dummyTrack)(),
                      id3Track: m,
                      textTrack: Object(b.dummyTrack)(),
                    }
                  );
                }),
                (p.extractID3Track = function (S, E) {
                  var g = this.id3Track;
                  if (S.samples.length) {
                    var m = Object(L.findBox)(S.samples, ["emsg"]);
                    m &&
                      m.forEach(function (l) {
                        var t = Object(L.parseEmsg)(l);
                        if (P.test(t.schemeIdUri)) {
                          var n = Object(M.isFiniteNumber)(t.presentationTime)
                              ? t.presentationTime / t.timeScale
                              : E + t.presentationTimeDelta / t.timeScale,
                            h = t.payload;
                          g.samples.push({
                            data: h,
                            len: h.byteLength,
                            dts: n,
                            pts: n,
                            type: O.MetadataSchema.emsg,
                          });
                        }
                      });
                  }
                  return g;
                }),
                (p.demuxSampleAes = function (S, E, g) {
                  return Promise.reject(
                    new Error(
                      "The MP4 demuxer does not support SAMPLE-AES decryption"
                    )
                  );
                }),
                (p.destroy = function () {}),
                A
              );
            })();
          C.default = R;
        },
        "./src/demux/mpegaudio.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "appendFrame", function () {
              return R;
            }),
            T.d(C, "parseHeader", function () {
              return A;
            }),
            T.d(C, "isHeaderPattern", function () {
              return p;
            }),
            T.d(C, "isHeader", function () {
              return y;
            }),
            T.d(C, "canParse", function () {
              return S;
            }),
            T.d(C, "probe", function () {
              return E;
            });
          var M = null,
            O = [
              32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448,
              32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384,
              32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32,
              48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16,
              24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160,
            ],
            L = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
            b = [
              [0, 72, 144, 12],
              [0, 0, 0, 0],
              [0, 72, 144, 12],
              [0, 144, 144, 12],
            ],
            P = [0, 1, 1, 4];
          function R(g, m, l, t, n) {
            if (!(l + 24 > m.length)) {
              var h = A(m, l);
              if (h && l + h.frameLength <= m.length) {
                var v = (h.samplesPerFrame * 9e4) / h.sampleRate,
                  i = t + n * v,
                  r = {
                    unit: m.subarray(l, l + h.frameLength),
                    pts: i,
                    dts: i,
                  };
                return (
                  (g.config = []),
                  (g.channelCount = h.channelCount),
                  (g.samplerate = h.sampleRate),
                  g.samples.push(r),
                  { sample: r, length: h.frameLength, missing: 0 }
                );
              }
            }
          }
          function A(g, m) {
            var l = (g[m + 1] >> 3) & 3,
              t = (g[m + 1] >> 1) & 3,
              n = (g[m + 2] >> 4) & 15,
              h = (g[m + 2] >> 2) & 3;
            if (l !== 1 && n !== 0 && n !== 15 && h !== 3) {
              var v = (g[m + 2] >> 1) & 1,
                i = g[m + 3] >> 6,
                r = l === 3 ? 3 - t : t === 3 ? 3 : 4,
                o = O[r * 14 + n - 1] * 1e3,
                d = l === 3 ? 0 : l === 2 ? 1 : 2,
                e = L[d * 3 + h],
                s = i === 3 ? 1 : 2,
                u = b[l][t],
                a = P[t],
                f = u * 8 * a,
                c = Math.floor((u * o) / e + v) * a;
              if (M === null) {
                var D = navigator.userAgent || "",
                  x = D.match(/Chrome\/(\d+)/i);
                M = x ? parseInt(x[1]) : 0;
              }
              var I = !!M && M <= 87;
              return (
                I &&
                  t === 2 &&
                  o >= 224e3 &&
                  i === 0 &&
                  (g[m + 3] = g[m + 3] | 128),
                {
                  sampleRate: e,
                  channelCount: s,
                  frameLength: c,
                  samplesPerFrame: f,
                }
              );
            }
          }
          function p(g, m) {
            return (
              g[m] === 255 && (g[m + 1] & 224) === 224 && (g[m + 1] & 6) !== 0
            );
          }
          function y(g, m) {
            return m + 1 < g.length && p(g, m);
          }
          function S(g, m) {
            var l = 4;
            return p(g, m) && l <= g.length - m;
          }
          function E(g, m) {
            if (m + 1 < g.length && p(g, m)) {
              var l = 4,
                t = A(g, m),
                n = l;
              t != null && t.frameLength && (n = t.frameLength);
              var h = m + n;
              return h === g.length || y(g, h);
            }
            return !1;
          }
        },
        "./src/demux/sample-aes.ts": function (W, C, T) {
          "use strict";
          T.r(C);
          var M = T("./src/crypt/decrypter.ts"),
            O = T("./src/demux/tsdemuxer.ts"),
            L = (function () {
              function b(R, A, p) {
                (this.keyData = void 0),
                  (this.decrypter = void 0),
                  (this.keyData = p),
                  (this.decrypter = new M.default(R, A, {
                    removePKCS7Padding: !1,
                  }));
              }
              var P = b.prototype;
              return (
                (P.decryptBuffer = function (A, p) {
                  this.decrypter.decrypt(
                    A,
                    this.keyData.key.buffer,
                    this.keyData.iv.buffer,
                    p
                  );
                }),
                (P.decryptAacSample = function (A, p, y, S) {
                  var E = A[p].unit;
                  if (!(E.length <= 16)) {
                    var g = E.subarray(16, E.length - (E.length % 16)),
                      m = g.buffer.slice(g.byteOffset, g.byteOffset + g.length),
                      l = this;
                    this.decryptBuffer(m, function (t) {
                      var n = new Uint8Array(t);
                      E.set(n, 16), S || l.decryptAacSamples(A, p + 1, y);
                    });
                  }
                }),
                (P.decryptAacSamples = function (A, p, y) {
                  for (; ; p++) {
                    if (p >= A.length) {
                      y();
                      return;
                    }
                    if (!(A[p].unit.length < 32)) {
                      var S = this.decrypter.isSync();
                      if ((this.decryptAacSample(A, p, y, S), !S)) return;
                    }
                  }
                }),
                (P.getAvcEncryptedData = function (A) {
                  for (
                    var p = Math.floor((A.length - 48) / 160) * 16 + 16,
                      y = new Int8Array(p),
                      S = 0,
                      E = 32;
                    E < A.length - 16;
                    E += 160, S += 16
                  )
                    y.set(A.subarray(E, E + 16), S);
                  return y;
                }),
                (P.getAvcDecryptedUnit = function (A, p) {
                  for (
                    var y = new Uint8Array(p), S = 0, E = 32;
                    E < A.length - 16;
                    E += 160, S += 16
                  )
                    A.set(y.subarray(S, S + 16), E);
                  return A;
                }),
                (P.decryptAvcSample = function (A, p, y, S, E, g) {
                  var m = Object(O.discardEPB)(E.data),
                    l = this.getAvcEncryptedData(m),
                    t = this;
                  this.decryptBuffer(l.buffer, function (n) {
                    (E.data = t.getAvcDecryptedUnit(m, n)),
                      g || t.decryptAvcSamples(A, p, y + 1, S);
                  });
                }),
                (P.decryptAvcSamples = function (A, p, y, S) {
                  if (A instanceof Uint8Array)
                    throw new Error(
                      "Cannot decrypt samples of type Uint8Array"
                    );
                  for (; ; p++, y = 0) {
                    if (p >= A.length) {
                      S();
                      return;
                    }
                    for (var E = A[p].units; !(y >= E.length); y++) {
                      var g = E[y];
                      if (
                        !(g.data.length <= 48 || (g.type !== 1 && g.type !== 5))
                      ) {
                        var m = this.decrypter.isSync();
                        if ((this.decryptAvcSample(A, p, y, S, g, m), !m))
                          return;
                      }
                    }
                  }
                }),
                b
              );
            })();
          C.default = L;
        },
        "./src/demux/transmuxer-interface.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "default", function () {
              return E;
            });
          var M = T("./node_modules/webworkify-webpack/index.js"),
            O = T.n(M),
            L = T("./src/events.ts"),
            b = T("./src/demux/transmuxer.ts"),
            P = T("./src/utils/logger.ts"),
            R = T("./src/errors.ts"),
            A = T("./src/utils/mediasource-helper.ts"),
            p = T("./node_modules/eventemitter3/index.js"),
            y = T.n(p),
            S = Object(A.getMediaSource)() || {
              isTypeSupported: function () {
                return !1;
              },
            },
            E = (function () {
              function g(l, t, n, h) {
                var v = this;
                (this.hls = void 0),
                  (this.id = void 0),
                  (this.observer = void 0),
                  (this.frag = null),
                  (this.part = null),
                  (this.worker = void 0),
                  (this.onwmsg = void 0),
                  (this.transmuxer = null),
                  (this.onTransmuxComplete = void 0),
                  (this.onFlush = void 0),
                  (this.hls = l),
                  (this.id = t),
                  (this.onTransmuxComplete = n),
                  (this.onFlush = h);
                var i = l.config,
                  r = function (u, a) {
                    (a = a || {}),
                      (a.frag = v.frag),
                      (a.id = v.id),
                      l.trigger(u, a);
                  };
                (this.observer = new p.EventEmitter()),
                  this.observer.on(L.Events.FRAG_DECRYPTED, r),
                  this.observer.on(L.Events.ERROR, r);
                var o = {
                    mp4: S.isTypeSupported("video/mp4"),
                    mpeg: S.isTypeSupported("audio/mpeg"),
                    mp3: S.isTypeSupported('audio/mp4; codecs="mp3"'),
                  },
                  d = navigator.vendor;
                if (i.enableWorker && typeof Worker < "u") {
                  P.logger.log("demuxing in webworker");
                  var e;
                  try {
                    (e = this.worker = M("./src/demux/transmuxer-worker.ts")),
                      (this.onwmsg = this.onWorkerMessage.bind(this)),
                      e.addEventListener("message", this.onwmsg),
                      (e.onerror = function (s) {
                        l.trigger(L.Events.ERROR, {
                          type: R.ErrorTypes.OTHER_ERROR,
                          details: R.ErrorDetails.INTERNAL_EXCEPTION,
                          fatal: !0,
                          event: "demuxerWorker",
                          error: new Error(
                            s.message +
                              "  (" +
                              s.filename +
                              ":" +
                              s.lineno +
                              ")"
                          ),
                        });
                      }),
                      e.postMessage({
                        cmd: "init",
                        typeSupported: o,
                        vendor: d,
                        id: t,
                        config: JSON.stringify(i),
                      });
                  } catch (s) {
                    P.logger.warn("Error in worker:", s),
                      P.logger.error(
                        "Error while initializing DemuxerWorker, fallback to inline"
                      ),
                      e && self.URL.revokeObjectURL(e.objectURL),
                      (this.transmuxer = new b.default(
                        this.observer,
                        o,
                        i,
                        d,
                        t
                      )),
                      (this.worker = null);
                  }
                } else
                  this.transmuxer = new b.default(this.observer, o, i, d, t);
              }
              var m = g.prototype;
              return (
                (m.destroy = function () {
                  var t = this.worker;
                  if (t)
                    t.removeEventListener("message", this.onwmsg),
                      t.terminate(),
                      (this.worker = null),
                      (this.onwmsg = void 0);
                  else {
                    var n = this.transmuxer;
                    n && (n.destroy(), (this.transmuxer = null));
                  }
                  var h = this.observer;
                  h && h.removeAllListeners(),
                    (this.frag = null),
                    (this.observer = null),
                    (this.hls = null);
                }),
                (m.push = function (t, n, h, v, i, r, o, d, e, s) {
                  var u,
                    a,
                    f = this;
                  e.transmuxing.start = self.performance.now();
                  var c = this.transmuxer,
                    D = this.worker,
                    x = r ? r.start : i.start,
                    I = i.decryptdata,
                    F = this.frag,
                    _ = !(F && i.cc === F.cc),
                    B = !(F && e.level === F.level),
                    U = F ? e.sn - F.sn : -1,
                    N = this.part ? e.part - this.part.index : -1,
                    w = U === 0 && e.id > 1 && e.id === F?.stats.chunkCount,
                    k =
                      !B &&
                      (U === 1 || (U === 0 && (N === 1 || (w && N <= 0)))),
                    K = self.performance.now();
                  (B || U || i.stats.parsing.start === 0) &&
                    (i.stats.parsing.start = K),
                    r && (N || !k) && (r.stats.parsing.start = K);
                  var j = !(
                      F &&
                      ((u = i.initSegment) === null || u === void 0
                        ? void 0
                        : u.url) ===
                        ((a = F.initSegment) === null || a === void 0
                          ? void 0
                          : a.url)
                    ),
                    G = new b.TransmuxState(_, k, d, B, x, j);
                  if (!k || _ || j) {
                    P.logger.log(
                      "[transmuxer-interface, " +
                        i.type +
                        "]: Starting new transmux session for sn: " +
                        e.sn +
                        " p: " +
                        e.part +
                        " level: " +
                        e.level +
                        " id: " +
                        e.id +
                        `
        discontinuity: ` +
                        _ +
                        `
        trackSwitch: ` +
                        B +
                        `
        contiguous: ` +
                        k +
                        `
        accurateTimeOffset: ` +
                        d +
                        `
        timeOffset: ` +
                        x +
                        `
        initSegmentChange: ` +
                        j
                    );
                    var Y = new b.TransmuxConfig(h, v, n, o, s);
                    this.configureTransmuxer(Y);
                  }
                  if (((this.frag = i), (this.part = r), D))
                    D.postMessage(
                      {
                        cmd: "demux",
                        data: t,
                        decryptdata: I,
                        chunkMeta: e,
                        state: G,
                      },
                      t instanceof ArrayBuffer ? [t] : []
                    );
                  else if (c) {
                    var X = c.push(t, I, e, G);
                    Object(b.isPromise)(X)
                      ? X.then(function (z) {
                          f.handleTransmuxComplete(z);
                        })
                      : this.handleTransmuxComplete(X);
                  }
                }),
                (m.flush = function (t) {
                  var n = this;
                  t.transmuxing.start = self.performance.now();
                  var h = this.transmuxer,
                    v = this.worker;
                  if (v) v.postMessage({ cmd: "flush", chunkMeta: t });
                  else if (h) {
                    var i = h.flush(t);
                    Object(b.isPromise)(i)
                      ? i.then(function (r) {
                          n.handleFlushResult(r, t);
                        })
                      : this.handleFlushResult(i, t);
                  }
                }),
                (m.handleFlushResult = function (t, n) {
                  var h = this;
                  t.forEach(function (v) {
                    h.handleTransmuxComplete(v);
                  }),
                    this.onFlush(n);
                }),
                (m.onWorkerMessage = function (t) {
                  var n = t.data,
                    h = this.hls;
                  switch (n.event) {
                    case "init": {
                      self.URL.revokeObjectURL(this.worker.objectURL);
                      break;
                    }
                    case "transmuxComplete": {
                      this.handleTransmuxComplete(n.data);
                      break;
                    }
                    case "flush": {
                      this.onFlush(n.data);
                      break;
                    }
                    case "workerLog":
                      P.logger[n.data.logType] &&
                        P.logger[n.data.logType](n.data.message);
                      break;
                    default: {
                      (n.data = n.data || {}),
                        (n.data.frag = this.frag),
                        (n.data.id = this.id),
                        h.trigger(n.event, n.data);
                      break;
                    }
                  }
                }),
                (m.configureTransmuxer = function (t) {
                  var n = this.worker,
                    h = this.transmuxer;
                  n
                    ? n.postMessage({ cmd: "configure", config: t })
                    : h && h.configure(t);
                }),
                (m.handleTransmuxComplete = function (t) {
                  (t.chunkMeta.transmuxing.end = self.performance.now()),
                    this.onTransmuxComplete(t);
                }),
                g
              );
            })();
        },
        "./src/demux/transmuxer-worker.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "default", function () {
              return R;
            });
          var M = T("./src/demux/transmuxer.ts"),
            O = T("./src/events.ts"),
            L = T("./src/utils/logger.ts"),
            b = T("./node_modules/eventemitter3/index.js"),
            P = T.n(b);
          function R(E) {
            var g = new b.EventEmitter(),
              m = function (n, h) {
                E.postMessage({ event: n, data: h });
              };
            g.on(O.Events.FRAG_DECRYPTED, m), g.on(O.Events.ERROR, m);
            var l = function () {
              var n = function (i) {
                var r = function (d) {
                  m("workerLog", { logType: i, message: d });
                };
                L.logger[i] = r;
              };
              for (var h in L.logger) n(h);
            };
            E.addEventListener("message", function (t) {
              var n = t.data;
              switch (n.cmd) {
                case "init": {
                  var h = JSON.parse(n.config);
                  (E.transmuxer = new M.default(
                    g,
                    n.typeSupported,
                    h,
                    n.vendor,
                    n.id
                  )),
                    Object(L.enableLogs)(h.debug),
                    l(),
                    m("init", null);
                  break;
                }
                case "configure": {
                  E.transmuxer.configure(n.config);
                  break;
                }
                case "demux": {
                  var v = E.transmuxer.push(
                    n.data,
                    n.decryptdata,
                    n.chunkMeta,
                    n.state
                  );
                  Object(M.isPromise)(v)
                    ? v.then(function (o) {
                        A(E, o);
                      })
                    : A(E, v);
                  break;
                }
                case "flush": {
                  var i = n.chunkMeta,
                    r = E.transmuxer.flush(i);
                  Object(M.isPromise)(r)
                    ? r.then(function (o) {
                        y(E, o, i);
                      })
                    : y(E, r, i);
                  break;
                }
                default:
                  break;
              }
            });
          }
          function A(E, g) {
            if (S(g.remuxResult)) return !1;
            var m = [],
              l = g.remuxResult,
              t = l.audio,
              n = l.video;
            return (
              t && p(m, t),
              n && p(m, n),
              E.postMessage({ event: "transmuxComplete", data: g }, m),
              !0
            );
          }
          function p(E, g) {
            g.data1 && E.push(g.data1.buffer),
              g.data2 && E.push(g.data2.buffer);
          }
          function y(E, g, m) {
            var l = g.reduce(function (t, n) {
              return A(E, n) || t;
            }, !1);
            l || E.postMessage({ event: "transmuxComplete", data: g[0] }),
              E.postMessage({ event: "flush", data: m });
          }
          function S(E) {
            return !E.audio && !E.video && !E.text && !E.id3 && !E.initSegment;
          }
        },
        "./src/demux/transmuxer.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "default", function () {
              return m;
            }),
            T.d(C, "isPromise", function () {
              return n;
            }),
            T.d(C, "TransmuxConfig", function () {
              return h;
            }),
            T.d(C, "TransmuxState", function () {
              return v;
            });
          var M = T("./src/events.ts"),
            O = T("./src/errors.ts"),
            L = T("./src/crypt/decrypter.ts"),
            b = T("./src/demux/aacdemuxer.ts"),
            P = T("./src/demux/mp4demuxer.ts"),
            R = T("./src/demux/tsdemuxer.ts"),
            A = T("./src/demux/mp3demuxer.ts"),
            p = T("./src/remux/mp4-remuxer.ts"),
            y = T("./src/remux/passthrough-remuxer.ts"),
            S = T("./src/utils/logger.ts"),
            E;
          try {
            E = self.performance.now.bind(self.performance);
          } catch {
            S.logger.debug("Unable to use Performance API on this environment"),
              (E = self.Date.now);
          }
          var g = [
              { demux: R.default, remux: p.default },
              { demux: P.default, remux: y.default },
              { demux: b.default, remux: p.default },
              { demux: A.default, remux: p.default },
            ],
            m = (function () {
              function i(o, d, e, s, u) {
                (this.observer = void 0),
                  (this.typeSupported = void 0),
                  (this.config = void 0),
                  (this.vendor = void 0),
                  (this.id = void 0),
                  (this.demuxer = void 0),
                  (this.remuxer = void 0),
                  (this.decrypter = void 0),
                  (this.probe = void 0),
                  (this.decryptionPromise = null),
                  (this.transmuxConfig = void 0),
                  (this.currentTransmuxState = void 0),
                  (this.observer = o),
                  (this.typeSupported = d),
                  (this.config = e),
                  (this.vendor = s),
                  (this.id = u);
              }
              var r = i.prototype;
              return (
                (r.configure = function (d) {
                  (this.transmuxConfig = d),
                    this.decrypter && this.decrypter.reset();
                }),
                (r.push = function (d, e, s, u) {
                  var a = this,
                    f = s.transmuxing;
                  f.executeStart = E();
                  var c = new Uint8Array(d),
                    D = this.config,
                    x = this.currentTransmuxState,
                    I = this.transmuxConfig;
                  u && (this.currentTransmuxState = u);
                  var F = u || x,
                    _ = F.contiguous,
                    B = F.discontinuity,
                    U = F.trackSwitch,
                    N = F.accurateTimeOffset,
                    w = F.timeOffset,
                    k = F.initSegmentChange,
                    K = I.audioCodec,
                    j = I.videoCodec,
                    G = I.defaultInitPts,
                    Y = I.duration,
                    X = I.initSegmentData;
                  (B || U || k) && this.resetInitSegment(X, K, j, Y),
                    (B || k) && this.resetInitialTimestamp(G),
                    _ || this.resetContiguity();
                  var z = l(c, e);
                  if (z && z.method === "AES-128") {
                    var H = this.getDecrypter();
                    if (D.enableSoftwareAES) {
                      var Q = H.softwareDecrypt(c, z.key.buffer, z.iv.buffer);
                      if (!Q) return (f.executeEnd = E()), t(s);
                      c = new Uint8Array(Q);
                    } else
                      return (
                        (this.decryptionPromise = H.webCryptoDecrypt(
                          c,
                          z.key.buffer,
                          z.iv.buffer
                        ).then(function (J) {
                          var Z = a.push(J, null, s);
                          return (a.decryptionPromise = null), Z;
                        })),
                        this.decryptionPromise
                      );
                  }
                  this.needsProbing(c, B, U) && this.configureTransmuxer(c, I);
                  var $ = this.transmux(c, z, w, N, s),
                    V = this.currentTransmuxState;
                  return (
                    (V.contiguous = !0),
                    (V.discontinuity = !1),
                    (V.trackSwitch = !1),
                    (f.executeEnd = E()),
                    $
                  );
                }),
                (r.flush = function (d) {
                  var e = this,
                    s = d.transmuxing;
                  s.executeStart = E();
                  var u = this.decrypter,
                    a = this.currentTransmuxState,
                    f = this.decryptionPromise;
                  if (f)
                    return f.then(function () {
                      return e.flush(d);
                    });
                  var c = [],
                    D = a.timeOffset;
                  if (u) {
                    var x = u.flush();
                    x && c.push(this.push(x, null, d));
                  }
                  var I = this.demuxer,
                    F = this.remuxer;
                  if (!I || !F)
                    return (
                      this.observer.emit(M.Events.ERROR, M.Events.ERROR, {
                        type: O.ErrorTypes.MEDIA_ERROR,
                        details: O.ErrorDetails.FRAG_PARSING_ERROR,
                        fatal: !0,
                        reason: "no demux matching with content found",
                      }),
                      (s.executeEnd = E()),
                      [t(d)]
                    );
                  var _ = I.flush(D);
                  return n(_)
                    ? _.then(function (B) {
                        return e.flushRemux(c, B, d), c;
                      })
                    : (this.flushRemux(c, _, d), c);
                }),
                (r.flushRemux = function (d, e, s) {
                  var u = e.audioTrack,
                    a = e.videoTrack,
                    f = e.id3Track,
                    c = e.textTrack,
                    D = this.currentTransmuxState,
                    x = D.accurateTimeOffset,
                    I = D.timeOffset;
                  S.logger.log(
                    "[transmuxer.ts]: Flushed fragment " +
                      s.sn +
                      (s.part > -1 ? " p: " + s.part : "") +
                      " of level " +
                      s.level
                  );
                  var F = this.remuxer.remux(u, a, f, c, I, x, !0, this.id);
                  d.push({ remuxResult: F, chunkMeta: s }),
                    (s.transmuxing.executeEnd = E());
                }),
                (r.resetInitialTimestamp = function (d) {
                  var e = this.demuxer,
                    s = this.remuxer;
                  !e || !s || (e.resetTimeStamp(d), s.resetTimeStamp(d));
                }),
                (r.resetContiguity = function () {
                  var d = this.demuxer,
                    e = this.remuxer;
                  !d || !e || (d.resetContiguity(), e.resetNextTimestamp());
                }),
                (r.resetInitSegment = function (d, e, s, u) {
                  var a = this.demuxer,
                    f = this.remuxer;
                  !a ||
                    !f ||
                    (a.resetInitSegment(d, e, s, u),
                    f.resetInitSegment(d, e, s));
                }),
                (r.destroy = function () {
                  this.demuxer &&
                    (this.demuxer.destroy(), (this.demuxer = void 0)),
                    this.remuxer &&
                      (this.remuxer.destroy(), (this.remuxer = void 0));
                }),
                (r.transmux = function (d, e, s, u, a) {
                  var f;
                  return (
                    e && e.method === "SAMPLE-AES"
                      ? (f = this.transmuxSampleAes(d, e, s, u, a))
                      : (f = this.transmuxUnencrypted(d, s, u, a)),
                    f
                  );
                }),
                (r.transmuxUnencrypted = function (d, e, s, u) {
                  var a = this.demuxer.demux(
                      d,
                      e,
                      !1,
                      !this.config.progressive
                    ),
                    f = a.audioTrack,
                    c = a.videoTrack,
                    D = a.id3Track,
                    x = a.textTrack,
                    I = this.remuxer.remux(f, c, D, x, e, s, !1, this.id);
                  return { remuxResult: I, chunkMeta: u };
                }),
                (r.transmuxSampleAes = function (d, e, s, u, a) {
                  var f = this;
                  return this.demuxer
                    .demuxSampleAes(d, e, s)
                    .then(function (c) {
                      var D = f.remuxer.remux(
                        c.audioTrack,
                        c.videoTrack,
                        c.id3Track,
                        c.textTrack,
                        s,
                        u,
                        !1,
                        f.id
                      );
                      return { remuxResult: D, chunkMeta: a };
                    });
                }),
                (r.configureTransmuxer = function (d, e) {
                  for (
                    var s = this.config,
                      u = this.observer,
                      a = this.typeSupported,
                      f = this.vendor,
                      c = e.audioCodec,
                      D = e.defaultInitPts,
                      x = e.duration,
                      I = e.initSegmentData,
                      F = e.videoCodec,
                      _,
                      B = 0,
                      U = g.length;
                    B < U;
                    B++
                  )
                    if (g[B].demux.probe(d)) {
                      _ = g[B];
                      break;
                    }
                  _ ||
                    (S.logger.warn(
                      "Failed to find demuxer by probing frag, treating as mp4 passthrough"
                    ),
                    (_ = { demux: P.default, remux: y.default }));
                  var N = this.demuxer,
                    w = this.remuxer,
                    k = _.remux,
                    K = _.demux;
                  (!w || !(w instanceof k)) &&
                    (this.remuxer = new k(u, s, a, f)),
                    (!N || !(N instanceof K)) &&
                      ((this.demuxer = new K(u, s, a)), (this.probe = K.probe)),
                    this.resetInitSegment(I, c, F, x),
                    this.resetInitialTimestamp(D);
                }),
                (r.needsProbing = function (d, e, s) {
                  return !this.demuxer || !this.remuxer || e || s;
                }),
                (r.getDecrypter = function () {
                  var d = this.decrypter;
                  return (
                    d ||
                      (d = this.decrypter =
                        new L.default(this.observer, this.config)),
                    d
                  );
                }),
                i
              );
            })();
          function l(i, r) {
            var o = null;
            return (
              i.byteLength > 0 &&
                r != null &&
                r.key != null &&
                r.iv !== null &&
                r.method != null &&
                (o = r),
              o
            );
          }
          var t = function (r) {
            return { remuxResult: {}, chunkMeta: r };
          };
          function n(i) {
            return "then" in i && i.then instanceof Function;
          }
          var h = function (r, o, d, e, s) {
              (this.audioCodec = void 0),
                (this.videoCodec = void 0),
                (this.initSegmentData = void 0),
                (this.duration = void 0),
                (this.defaultInitPts = void 0),
                (this.audioCodec = r),
                (this.videoCodec = o),
                (this.initSegmentData = d),
                (this.duration = e),
                (this.defaultInitPts = s);
            },
            v = function (r, o, d, e, s, u) {
              (this.discontinuity = void 0),
                (this.contiguous = void 0),
                (this.accurateTimeOffset = void 0),
                (this.trackSwitch = void 0),
                (this.timeOffset = void 0),
                (this.initSegmentChange = void 0),
                (this.discontinuity = r),
                (this.contiguous = o),
                (this.accurateTimeOffset = d),
                (this.trackSwitch = e),
                (this.timeOffset = s),
                (this.initSegmentChange = u);
            };
        },
        "./src/demux/tsdemuxer.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "discardEPB", function () {
              return h;
            });
          var M = T("./src/demux/adts.ts"),
            O = T("./src/demux/mpegaudio.ts"),
            L = T("./src/demux/exp-golomb.ts"),
            b = T("./src/demux/sample-aes.ts"),
            P = T("./src/events.ts"),
            R = T("./src/utils/mp4-tools.ts"),
            A = T("./src/utils/logger.ts"),
            p = T("./src/errors.ts"),
            y = T("./src/types/demuxer.ts");
          function S() {
            return (
              (S = Object.assign
                ? Object.assign.bind()
                : function (v) {
                    for (var i = 1; i < arguments.length; i++) {
                      var r = arguments[i];
                      for (var o in r)
                        Object.prototype.hasOwnProperty.call(r, o) &&
                          (v[o] = r[o]);
                    }
                    return v;
                  }),
              S.apply(this, arguments)
            );
          }
          var E = (function () {
            function v(r, o, d) {
              (this.observer = void 0),
                (this.config = void 0),
                (this.typeSupported = void 0),
                (this.sampleAes = null),
                (this.pmtParsed = !1),
                (this.audioCodec = void 0),
                (this.videoCodec = void 0),
                (this._duration = 0),
                (this._pmtId = -1),
                (this._avcTrack = void 0),
                (this._audioTrack = void 0),
                (this._id3Track = void 0),
                (this._txtTrack = void 0),
                (this.aacOverFlow = null),
                (this.avcSample = null),
                (this.remainderData = null),
                (this.observer = r),
                (this.config = o),
                (this.typeSupported = d);
            }
            (v.probe = function (o) {
              return o[0] === 71 && o[188] === 71;
            }),
              (v.createTrack = function (o, d) {
                return {
                  container:
                    o === "video" || o === "audio" ? "video/mp2t" : void 0,
                  type: o,
                  id: R.RemuxerTrackIdConfig[o],
                  pid: -1,
                  inputTimeScale: 9e4,
                  sequenceNumber: 0,
                  samples: [],
                  dropped: 0,
                  duration: o === "audio" ? d : void 0,
                };
              });
            var i = v.prototype;
            return (
              (i.resetInitSegment = function (o, d, e, s) {
                (this.pmtParsed = !1),
                  (this._pmtId = -1),
                  (this._avcTrack = v.createTrack("video")),
                  (this._audioTrack = v.createTrack("audio", s)),
                  (this._id3Track = v.createTrack("id3")),
                  (this._txtTrack = v.createTrack("text")),
                  (this._audioTrack.segmentCodec = "aac"),
                  (this.aacOverFlow = null),
                  (this.avcSample = null),
                  (this.remainderData = null),
                  (this.audioCodec = d),
                  (this.videoCodec = e),
                  (this._duration = s);
              }),
              (i.resetTimeStamp = function () {}),
              (i.resetContiguity = function () {
                var o = this._audioTrack,
                  d = this._avcTrack,
                  e = this._id3Track;
                o && (o.pesData = null),
                  d && (d.pesData = null),
                  e && (e.pesData = null),
                  (this.aacOverFlow = null);
              }),
              (i.demux = function (o, d, e, s) {
                e === void 0 && (e = !1),
                  s === void 0 && (s = !1),
                  e || (this.sampleAes = null);
                var u,
                  a = this._avcTrack,
                  f = this._audioTrack,
                  c = this._id3Track,
                  D = this._txtTrack,
                  x = a.pid,
                  I = a.pesData,
                  F = f.pid,
                  _ = c.pid,
                  B = f.pesData,
                  U = c.pesData,
                  N = null,
                  w = this.pmtParsed,
                  k = this._pmtId,
                  K = o.length;
                if (
                  (this.remainderData &&
                    ((o = Object(R.appendUint8Array)(this.remainderData, o)),
                    (K = o.length),
                    (this.remainderData = null)),
                  K < 188 && !s)
                )
                  return (
                    (this.remainderData = o),
                    { audioTrack: f, videoTrack: a, id3Track: c, textTrack: D }
                  );
                (K -= K % 188),
                  K < o.byteLength &&
                    !s &&
                    (this.remainderData = new Uint8Array(
                      o.buffer,
                      K,
                      o.buffer.byteLength - K
                    ));
                for (var j = 0, G = 0; G < K; G += 188)
                  if (o[G] === 71) {
                    var Y = !!(o[G + 1] & 64),
                      X = ((o[G + 1] & 31) << 8) + o[G + 2],
                      z = (o[G + 3] & 48) >> 4,
                      H = void 0;
                    if (z > 1) {
                      if (((H = G + 5 + o[G + 4]), H === G + 188)) continue;
                    } else H = G + 4;
                    switch (X) {
                      case x:
                        Y &&
                          (I && (u = t(I)) && this.parseAVCPES(a, D, u, !1),
                          (I = { data: [], size: 0 })),
                          I &&
                            (I.data.push(o.subarray(H, G + 188)),
                            (I.size += G + 188 - H));
                        break;
                      case F:
                        if (Y) {
                          if (B && (u = t(B)))
                            switch (f.segmentCodec) {
                              case "aac":
                                this.parseAACPES(f, u);
                                break;
                              case "mp3":
                                this.parseMPEGPES(f, u);
                                break;
                            }
                          B = { data: [], size: 0 };
                        }
                        B &&
                          (B.data.push(o.subarray(H, G + 188)),
                          (B.size += G + 188 - H));
                        break;
                      case _:
                        Y &&
                          (U && (u = t(U)) && this.parseID3PES(c, u),
                          (U = { data: [], size: 0 })),
                          U &&
                            (U.data.push(o.subarray(H, G + 188)),
                            (U.size += G + 188 - H));
                        break;
                      case 0:
                        Y && (H += o[H] + 1), (k = this._pmtId = m(o, H));
                        break;
                      case k: {
                        Y && (H += o[H] + 1);
                        var Q = l(o, H, this.typeSupported, e);
                        (x = Q.avc),
                          x > 0 && (a.pid = x),
                          (F = Q.audio),
                          F > 0 &&
                            ((f.pid = F), (f.segmentCodec = Q.segmentCodec)),
                          (_ = Q.id3),
                          _ > 0 && (c.pid = _),
                          N !== null &&
                            !w &&
                            (A.logger.log(
                              "unknown PID '" + N + "' in TS found"
                            ),
                            (N = null)),
                          (w = this.pmtParsed = !0);
                        break;
                      }
                      case 17:
                      case 8191:
                        break;
                      default:
                        N = X;
                        break;
                    }
                  } else j++;
                j > 0 &&
                  this.observer.emit(P.Events.ERROR, P.Events.ERROR, {
                    type: p.ErrorTypes.MEDIA_ERROR,
                    details: p.ErrorDetails.FRAG_PARSING_ERROR,
                    fatal: !1,
                    reason:
                      "Found " + j + " TS packet/s that do not start with 0x47",
                  }),
                  (a.pesData = I),
                  (f.pesData = B),
                  (c.pesData = U);
                var $ = {
                  audioTrack: f,
                  videoTrack: a,
                  id3Track: c,
                  textTrack: D,
                };
                return s && this.extractRemainingSamples($), $;
              }),
              (i.flush = function () {
                var o = this.remainderData;
                this.remainderData = null;
                var d;
                return (
                  o
                    ? (d = this.demux(o, -1, !1, !0))
                    : (d = {
                        videoTrack: this._avcTrack,
                        audioTrack: this._audioTrack,
                        id3Track: this._id3Track,
                        textTrack: this._txtTrack,
                      }),
                  this.extractRemainingSamples(d),
                  this.sampleAes ? this.decrypt(d, this.sampleAes) : d
                );
              }),
              (i.extractRemainingSamples = function (o) {
                var d = o.audioTrack,
                  e = o.videoTrack,
                  s = o.id3Track,
                  u = o.textTrack,
                  a = e.pesData,
                  f = d.pesData,
                  c = s.pesData,
                  D;
                if (
                  (a && (D = t(a))
                    ? (this.parseAVCPES(e, u, D, !0), (e.pesData = null))
                    : (e.pesData = a),
                  f && (D = t(f)))
                ) {
                  switch (d.segmentCodec) {
                    case "aac":
                      this.parseAACPES(d, D);
                      break;
                    case "mp3":
                      this.parseMPEGPES(d, D);
                      break;
                  }
                  d.pesData = null;
                } else
                  f != null &&
                    f.size &&
                    A.logger.log(
                      "last AAC PES packet truncated,might overlap between fragments"
                    ),
                    (d.pesData = f);
                c && (D = t(c))
                  ? (this.parseID3PES(s, D), (s.pesData = null))
                  : (s.pesData = c);
              }),
              (i.demuxSampleAes = function (o, d, e) {
                var s = this.demux(o, e, !0, !this.config.progressive),
                  u = (this.sampleAes = new b.default(
                    this.observer,
                    this.config,
                    d
                  ));
                return this.decrypt(s, u);
              }),
              (i.decrypt = function (o, d) {
                return new Promise(function (e) {
                  var s = o.audioTrack,
                    u = o.videoTrack;
                  s.samples && s.segmentCodec === "aac"
                    ? d.decryptAacSamples(s.samples, 0, function () {
                        u.samples
                          ? d.decryptAvcSamples(u.samples, 0, 0, function () {
                              e(o);
                            })
                          : e(o);
                      })
                    : u.samples &&
                      d.decryptAvcSamples(u.samples, 0, 0, function () {
                        e(o);
                      });
                });
              }),
              (i.destroy = function () {
                this._duration = 0;
              }),
              (i.parseAVCPES = function (o, d, e, s) {
                var u = this,
                  a = this.parseAVCNALu(o, e.data),
                  f = !1,
                  c = this.avcSample,
                  D,
                  x = !1;
                (e.data = null),
                  c &&
                    a.length &&
                    !o.audFound &&
                    (n(c, o), (c = this.avcSample = g(!1, e.pts, e.dts, ""))),
                  a.forEach(function (I) {
                    switch (I.type) {
                      case 1: {
                        (D = !0),
                          c || (c = u.avcSample = g(!0, e.pts, e.dts, "")),
                          f && (c.debug += "NDR "),
                          (c.frame = !0);
                        var F = I.data;
                        if (x && F.length > 4) {
                          var _ = new L.default(F).readSliceType();
                          (_ === 2 || _ === 4 || _ === 7 || _ === 9) &&
                            (c.key = !0);
                        }
                        break;
                      }
                      case 5:
                        (D = !0),
                          c || (c = u.avcSample = g(!0, e.pts, e.dts, "")),
                          f && (c.debug += "IDR "),
                          (c.key = !0),
                          (c.frame = !0);
                        break;
                      case 6: {
                        (D = !0),
                          f && c && (c.debug += "SEI "),
                          Object(R.parseSEIMessageFromNALu)(
                            h(I.data),
                            e.pts,
                            d.samples
                          );
                        break;
                      }
                      case 7:
                        if (
                          ((D = !0),
                          (x = !0),
                          f && c && (c.debug += "SPS "),
                          !o.sps)
                        ) {
                          var B = new L.default(I.data),
                            U = B.readSPS();
                          (o.width = U.width),
                            (o.height = U.height),
                            (o.pixelRatio = U.pixelRatio),
                            (o.sps = [I.data]),
                            (o.duration = u._duration);
                          for (
                            var N = I.data.subarray(1, 4), w = "avc1.", k = 0;
                            k < 3;
                            k++
                          ) {
                            var K = N[k].toString(16);
                            K.length < 2 && (K = "0" + K), (w += K);
                          }
                          o.codec = w;
                        }
                        break;
                      case 8:
                        (D = !0),
                          f && c && (c.debug += "PPS "),
                          o.pps || (o.pps = [I.data]);
                        break;
                      case 9:
                        (D = !1),
                          (o.audFound = !0),
                          c && n(c, o),
                          (c = u.avcSample =
                            g(!1, e.pts, e.dts, f ? "AUD " : ""));
                        break;
                      case 12:
                        D = !0;
                        break;
                      default:
                        (D = !1),
                          c && (c.debug += "unknown NAL " + I.type + " ");
                        break;
                    }
                    if (c && D) {
                      var j = c.units;
                      j.push(I);
                    }
                  }),
                  s && c && (n(c, o), (this.avcSample = null));
              }),
              (i.getLastNalUnit = function (o) {
                var d,
                  e = this.avcSample,
                  s;
                if (
                  ((!e || e.units.length === 0) && (e = o[o.length - 1]),
                  (d = e) !== null && d !== void 0 && d.units)
                ) {
                  var u = e.units;
                  s = u[u.length - 1];
                }
                return s;
              }),
              (i.parseAVCNALu = function (o, d) {
                var e = d.byteLength,
                  s = o.naluState || 0,
                  u = s,
                  a = [],
                  f = 0,
                  c,
                  D,
                  x,
                  I = -1,
                  F = 0;
                for (
                  s === -1 && ((I = 0), (F = d[0] & 31), (s = 0), (f = 1));
                  f < e;

                ) {
                  if (((c = d[f++]), !s)) {
                    s = c ? 0 : 1;
                    continue;
                  }
                  if (s === 1) {
                    s = c ? 0 : 2;
                    continue;
                  }
                  if (!c) s = 3;
                  else if (c === 1) {
                    if (I >= 0) {
                      var _ = { data: d.subarray(I, f - s - 1), type: F };
                      a.push(_);
                    } else {
                      var B = this.getLastNalUnit(o.samples);
                      if (
                        B &&
                        (u &&
                          f <= 4 - u &&
                          B.state &&
                          (B.data = B.data.subarray(0, B.data.byteLength - u)),
                        (D = f - s - 1),
                        D > 0)
                      ) {
                        var U = new Uint8Array(B.data.byteLength + D);
                        U.set(B.data, 0),
                          U.set(d.subarray(0, D), B.data.byteLength),
                          (B.data = U),
                          (B.state = 0);
                      }
                    }
                    f < e
                      ? ((x = d[f] & 31), (I = f), (F = x), (s = 0))
                      : (s = -1);
                  } else s = 0;
                }
                if (I >= 0 && s >= 0) {
                  var N = { data: d.subarray(I, e), type: F, state: s };
                  a.push(N);
                }
                if (a.length === 0) {
                  var w = this.getLastNalUnit(o.samples);
                  if (w) {
                    var k = new Uint8Array(w.data.byteLength + d.byteLength);
                    k.set(w.data, 0), k.set(d, w.data.byteLength), (w.data = k);
                  }
                }
                return (o.naluState = s), a;
              }),
              (i.parseAACPES = function (o, d) {
                var e = 0,
                  s = this.aacOverFlow,
                  u = d.data;
                if (s) {
                  this.aacOverFlow = null;
                  var a = s.missing,
                    f = s.sample.unit.byteLength;
                  if (a === -1) {
                    var c = new Uint8Array(f + u.byteLength);
                    c.set(s.sample.unit, 0), c.set(u, f), (u = c);
                  } else {
                    var D = f - a;
                    s.sample.unit.set(u.subarray(0, a), D),
                      o.samples.push(s.sample),
                      (e = s.missing);
                  }
                }
                var x, I;
                for (x = e, I = u.length; x < I - 1 && !M.isHeader(u, x); x++);
                if (x !== e) {
                  var F, _;
                  if (
                    (x < I - 1
                      ? ((F =
                          "AAC PES did not start with ADTS header,offset:" + x),
                        (_ = !1))
                      : ((F = "no ADTS header found in AAC PES"), (_ = !0)),
                    A.logger.warn("parsing error:" + F),
                    this.observer.emit(P.Events.ERROR, P.Events.ERROR, {
                      type: p.ErrorTypes.MEDIA_ERROR,
                      details: p.ErrorDetails.FRAG_PARSING_ERROR,
                      fatal: _,
                      reason: F,
                    }),
                    _)
                  )
                    return;
                }
                M.initTrackConfig(o, this.observer, u, x, this.audioCodec);
                var B;
                if (d.pts !== void 0) B = d.pts;
                else if (s) {
                  var U = M.getFrameDuration(o.samplerate);
                  B = s.sample.pts + U;
                } else {
                  A.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
                  return;
                }
                for (var N = 0, w; x < I; )
                  if (
                    ((w = M.appendFrame(o, u, x, B, N)),
                    (x += w.length),
                    w.missing)
                  ) {
                    this.aacOverFlow = w;
                    break;
                  } else for (N++; x < I - 1 && !M.isHeader(u, x); x++);
              }),
              (i.parseMPEGPES = function (o, d) {
                var e = d.data,
                  s = e.length,
                  u = 0,
                  a = 0,
                  f = d.pts;
                if (f === void 0) {
                  A.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");
                  return;
                }
                for (; a < s; )
                  if (O.isHeader(e, a)) {
                    var c = O.appendFrame(o, e, a, f, u);
                    if (c) (a += c.length), u++;
                    else break;
                  } else a++;
              }),
              (i.parseID3PES = function (o, d) {
                if (d.pts === void 0) {
                  A.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");
                  return;
                }
                var e = S({}, d, {
                  type: this._avcTrack
                    ? y.MetadataSchema.emsg
                    : y.MetadataSchema.audioId3,
                });
                o.samples.push(e);
              }),
              v
            );
          })();
          function g(v, i, r, o) {
            return {
              key: v,
              frame: !1,
              pts: i,
              dts: r,
              units: [],
              debug: o,
              length: 0,
            };
          }
          function m(v, i) {
            return ((v[i + 10] & 31) << 8) | v[i + 11];
          }
          function l(v, i, r, o) {
            var d = { audio: -1, avc: -1, id3: -1, segmentCodec: "aac" },
              e = ((v[i + 1] & 15) << 8) | v[i + 2],
              s = i + 3 + e - 4,
              u = ((v[i + 10] & 15) << 8) | v[i + 11];
            for (i += 12 + u; i < s; ) {
              var a = ((v[i + 1] & 31) << 8) | v[i + 2];
              switch (v[i]) {
                case 207:
                  if (!o) {
                    A.logger.log(
                      "ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream"
                    );
                    break;
                  }
                case 15:
                  d.audio === -1 && (d.audio = a);
                  break;
                case 21:
                  d.id3 === -1 && (d.id3 = a);
                  break;
                case 219:
                  if (!o) {
                    A.logger.log(
                      "H.264 with AES-128-CBC slice encryption found in unencrypted stream"
                    );
                    break;
                  }
                case 27:
                  d.avc === -1 && (d.avc = a);
                  break;
                case 3:
                case 4:
                  r.mpeg !== !0 && r.mp3 !== !0
                    ? A.logger.log(
                        "MPEG audio found, not supported in this browser"
                      )
                    : d.audio === -1 &&
                      ((d.audio = a), (d.segmentCodec = "mp3"));
                  break;
                case 36:
                  A.logger.warn("Unsupported HEVC stream type found");
                  break;
                default:
                  break;
              }
              i += (((v[i + 3] & 15) << 8) | v[i + 4]) + 5;
            }
            return d;
          }
          function t(v) {
            var i = 0,
              r,
              o,
              d,
              e,
              s,
              u = v.data;
            if (!v || v.size === 0) return null;
            for (; u[0].length < 19 && u.length > 1; ) {
              var a = new Uint8Array(u[0].length + u[1].length);
              a.set(u[0]), a.set(u[1], u[0].length), (u[0] = a), u.splice(1, 1);
            }
            r = u[0];
            var f = (r[0] << 16) + (r[1] << 8) + r[2];
            if (f === 1) {
              if (((o = (r[4] << 8) + r[5]), o && o > v.size - 6)) return null;
              var c = r[7];
              c & 192 &&
                ((e =
                  (r[9] & 14) * 536870912 +
                  (r[10] & 255) * 4194304 +
                  (r[11] & 254) * 16384 +
                  (r[12] & 255) * 128 +
                  (r[13] & 254) / 2),
                c & 64
                  ? ((s =
                      (r[14] & 14) * 536870912 +
                      (r[15] & 255) * 4194304 +
                      (r[16] & 254) * 16384 +
                      (r[17] & 255) * 128 +
                      (r[18] & 254) / 2),
                    e - s > 60 * 9e4 &&
                      (A.logger.warn(
                        Math.round((e - s) / 9e4) +
                          "s delta between PTS and DTS, align them"
                      ),
                      (e = s)))
                  : (s = e)),
                (d = r[8]);
              var D = d + 9;
              if (v.size <= D) return null;
              v.size -= D;
              for (
                var x = new Uint8Array(v.size), I = 0, F = u.length;
                I < F;
                I++
              ) {
                r = u[I];
                var _ = r.byteLength;
                if (D)
                  if (D > _) {
                    D -= _;
                    continue;
                  } else (r = r.subarray(D)), (_ -= D), (D = 0);
                x.set(r, i), (i += _);
              }
              return o && (o -= d + 3), { data: x, pts: e, dts: s, len: o };
            }
            return null;
          }
          function n(v, i) {
            if (v.units.length && v.frame) {
              if (v.pts === void 0) {
                var r = i.samples,
                  o = r.length;
                if (o) {
                  var d = r[o - 1];
                  (v.pts = d.pts), (v.dts = d.dts);
                } else {
                  i.dropped++;
                  return;
                }
              }
              i.samples.push(v);
            }
            v.debug.length && A.logger.log(v.pts + "/" + v.dts + ":" + v.debug);
          }
          function h(v) {
            for (var i = v.byteLength, r = [], o = 1; o < i - 2; )
              v[o] === 0 && v[o + 1] === 0 && v[o + 2] === 3
                ? (r.push(o + 2), (o += 2))
                : o++;
            if (r.length === 0) return v;
            var d = i - r.length,
              e = new Uint8Array(d),
              s = 0;
            for (o = 0; o < d; s++, o++)
              s === r[0] && (s++, r.shift()), (e[o] = v[s]);
            return e;
          }
          C.default = E;
        },
        "./src/errors.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "ErrorTypes", function () {
              return M;
            }),
            T.d(C, "ErrorDetails", function () {
              return O;
            });
          var M;
          (function (L) {
            (L.NETWORK_ERROR = "networkError"),
              (L.MEDIA_ERROR = "mediaError"),
              (L.KEY_SYSTEM_ERROR = "keySystemError"),
              (L.MUX_ERROR = "muxError"),
              (L.OTHER_ERROR = "otherError");
          })(M || (M = {}));
          var O;
          (function (L) {
            (L.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys"),
              (L.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess"),
              (L.KEY_SYSTEM_NO_SESSION = "keySystemNoSession"),
              (L.KEY_SYSTEM_LICENSE_REQUEST_FAILED =
                "keySystemLicenseRequestFailed"),
              (L.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData"),
              (L.MANIFEST_LOAD_ERROR = "manifestLoadError"),
              (L.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut"),
              (L.MANIFEST_PARSING_ERROR = "manifestParsingError"),
              (L.MANIFEST_INCOMPATIBLE_CODECS_ERROR =
                "manifestIncompatibleCodecsError"),
              (L.LEVEL_EMPTY_ERROR = "levelEmptyError"),
              (L.LEVEL_LOAD_ERROR = "levelLoadError"),
              (L.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut"),
              (L.LEVEL_SWITCH_ERROR = "levelSwitchError"),
              (L.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError"),
              (L.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut"),
              (L.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError"),
              (L.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut"),
              (L.FRAG_LOAD_ERROR = "fragLoadError"),
              (L.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut"),
              (L.FRAG_DECRYPT_ERROR = "fragDecryptError"),
              (L.FRAG_PARSING_ERROR = "fragParsingError"),
              (L.REMUX_ALLOC_ERROR = "remuxAllocError"),
              (L.KEY_LOAD_ERROR = "keyLoadError"),
              (L.KEY_LOAD_TIMEOUT = "keyLoadTimeOut"),
              (L.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError"),
              (L.BUFFER_INCOMPATIBLE_CODECS_ERROR =
                "bufferIncompatibleCodecsError"),
              (L.BUFFER_APPEND_ERROR = "bufferAppendError"),
              (L.BUFFER_APPENDING_ERROR = "bufferAppendingError"),
              (L.BUFFER_STALLED_ERROR = "bufferStalledError"),
              (L.BUFFER_FULL_ERROR = "bufferFullError"),
              (L.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole"),
              (L.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall"),
              (L.INTERNAL_EXCEPTION = "internalException"),
              (L.INTERNAL_ABORTED = "aborted"),
              (L.UNKNOWN = "unknown");
          })(O || (O = {}));
        },
        "./src/events.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "Events", function () {
              return M;
            });
          var M;
          (function (O) {
            (O.MEDIA_ATTACHING = "hlsMediaAttaching"),
              (O.MEDIA_ATTACHED = "hlsMediaAttached"),
              (O.MEDIA_DETACHING = "hlsMediaDetaching"),
              (O.MEDIA_DETACHED = "hlsMediaDetached"),
              (O.BUFFER_RESET = "hlsBufferReset"),
              (O.BUFFER_CODECS = "hlsBufferCodecs"),
              (O.BUFFER_CREATED = "hlsBufferCreated"),
              (O.BUFFER_APPENDING = "hlsBufferAppending"),
              (O.BUFFER_APPENDED = "hlsBufferAppended"),
              (O.BUFFER_EOS = "hlsBufferEos"),
              (O.BUFFER_FLUSHING = "hlsBufferFlushing"),
              (O.BUFFER_FLUSHED = "hlsBufferFlushed"),
              (O.MANIFEST_LOADING = "hlsManifestLoading"),
              (O.MANIFEST_LOADED = "hlsManifestLoaded"),
              (O.MANIFEST_PARSED = "hlsManifestParsed"),
              (O.LEVEL_SWITCHING = "hlsLevelSwitching"),
              (O.LEVEL_SWITCHED = "hlsLevelSwitched"),
              (O.LEVEL_LOADING = "hlsLevelLoading"),
              (O.LEVEL_LOADED = "hlsLevelLoaded"),
              (O.LEVEL_UPDATED = "hlsLevelUpdated"),
              (O.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated"),
              (O.LEVELS_UPDATED = "hlsLevelsUpdated"),
              (O.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated"),
              (O.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching"),
              (O.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched"),
              (O.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading"),
              (O.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded"),
              (O.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated"),
              (O.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared"),
              (O.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch"),
              (O.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading"),
              (O.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded"),
              (O.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed"),
              (O.CUES_PARSED = "hlsCuesParsed"),
              (O.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound"),
              (O.INIT_PTS_FOUND = "hlsInitPtsFound"),
              (O.FRAG_LOADING = "hlsFragLoading"),
              (O.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted"),
              (O.FRAG_LOADED = "hlsFragLoaded"),
              (O.FRAG_DECRYPTED = "hlsFragDecrypted"),
              (O.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment"),
              (O.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata"),
              (O.FRAG_PARSING_METADATA = "hlsFragParsingMetadata"),
              (O.FRAG_PARSED = "hlsFragParsed"),
              (O.FRAG_BUFFERED = "hlsFragBuffered"),
              (O.FRAG_CHANGED = "hlsFragChanged"),
              (O.FPS_DROP = "hlsFpsDrop"),
              (O.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping"),
              (O.ERROR = "hlsError"),
              (O.DESTROYING = "hlsDestroying"),
              (O.KEY_LOADING = "hlsKeyLoading"),
              (O.KEY_LOADED = "hlsKeyLoaded"),
              (O.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached"),
              (O.BACK_BUFFER_REACHED = "hlsBackBufferReached");
          })(M || (M = {}));
        },
        "./src/hls.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "default", function () {
              return i;
            });
          var M = T("./node_modules/url-toolkit/src/url-toolkit.js"),
            O = T.n(M),
            L = T("./src/loader/playlist-loader.ts"),
            b = T("./src/loader/key-loader.ts"),
            P = T("./src/controller/id3-track-controller.ts"),
            R = T("./src/controller/latency-controller.ts"),
            A = T("./src/controller/level-controller.ts"),
            p = T("./src/controller/fragment-tracker.ts"),
            y = T("./src/controller/stream-controller.ts"),
            S = T("./src/is-supported.ts"),
            E = T("./src/utils/logger.ts"),
            g = T("./src/config.ts"),
            m = T("./node_modules/eventemitter3/index.js"),
            l = T.n(m),
            t = T("./src/events.ts"),
            n = T("./src/errors.ts");
          function h(r, o) {
            for (var d = 0; d < o.length; d++) {
              var e = o[d];
              (e.enumerable = e.enumerable || !1),
                (e.configurable = !0),
                "value" in e && (e.writable = !0),
                Object.defineProperty(r, e.key, e);
            }
          }
          function v(r, o, d) {
            return (
              o && h(r.prototype, o),
              d && h(r, d),
              Object.defineProperty(r, "prototype", { writable: !1 }),
              r
            );
          }
          var i = (function () {
            r.isSupported = function () {
              return Object(S.isSupported)();
            };
            function r(d) {
              d === void 0 && (d = {}),
                (this.config = void 0),
                (this.userConfig = void 0),
                (this.coreComponents = void 0),
                (this.networkControllers = void 0),
                (this._emitter = new m.EventEmitter()),
                (this._autoLevelCapping = void 0),
                (this.abrController = void 0),
                (this.bufferController = void 0),
                (this.capLevelController = void 0),
                (this.latencyController = void 0),
                (this.levelController = void 0),
                (this.streamController = void 0),
                (this.audioTrackController = void 0),
                (this.subtitleTrackController = void 0),
                (this.emeController = void 0),
                (this.cmcdController = void 0),
                (this._media = null),
                (this.url = null);
              var e = (this.config = Object(g.mergeConfig)(r.DefaultConfig, d));
              (this.userConfig = d),
                Object(E.enableLogs)(e.debug),
                (this._autoLevelCapping = -1),
                e.progressive && Object(g.enableStreamingMode)(e);
              var s = e.abrController,
                u = e.bufferController,
                a = e.capLevelController,
                f = e.fpsController,
                c = (this.abrController = new s(this)),
                D = (this.bufferController = new u(this)),
                x = (this.capLevelController = new a(this)),
                I = new f(this),
                F = new L.default(this),
                _ = new b.default(this),
                B = new P.default(this),
                U = (this.levelController = new A.default(this)),
                N = new p.FragmentTracker(this),
                w = (this.streamController = new y.default(this, N));
              x.setStreamController(w), I.setStreamController(w);
              var k = [F, _, U, w];
              this.networkControllers = k;
              var K = [c, D, x, I, B, N];
              (this.audioTrackController = this.createController(
                e.audioTrackController,
                null,
                k
              )),
                this.createController(e.audioStreamController, N, k),
                (this.subtitleTrackController = this.createController(
                  e.subtitleTrackController,
                  null,
                  k
                )),
                this.createController(e.subtitleStreamController, N, k),
                this.createController(e.timelineController, null, K),
                (this.emeController = this.createController(
                  e.emeController,
                  null,
                  K
                )),
                (this.cmcdController = this.createController(
                  e.cmcdController,
                  null,
                  K
                )),
                (this.latencyController = this.createController(
                  R.default,
                  null,
                  K
                )),
                (this.coreComponents = K);
            }
            var o = r.prototype;
            return (
              (o.createController = function (e, s, u) {
                if (e) {
                  var a = s ? new e(this, s) : new e(this);
                  return u && u.push(a), a;
                }
                return null;
              }),
              (o.on = function (e, s, u) {
                u === void 0 && (u = this), this._emitter.on(e, s, u);
              }),
              (o.once = function (e, s, u) {
                u === void 0 && (u = this), this._emitter.once(e, s, u);
              }),
              (o.removeAllListeners = function (e) {
                this._emitter.removeAllListeners(e);
              }),
              (o.off = function (e, s, u, a) {
                u === void 0 && (u = this), this._emitter.off(e, s, u, a);
              }),
              (o.listeners = function (e) {
                return this._emitter.listeners(e);
              }),
              (o.emit = function (e, s, u) {
                return this._emitter.emit(e, s, u);
              }),
              (o.trigger = function (e, s) {
                if (this.config.debug) return this.emit(e, e, s);
                try {
                  return this.emit(e, e, s);
                } catch (u) {
                  E.logger.error(
                    "An internal error happened while handling event " +
                      e +
                      '. Error message: "' +
                      u.message +
                      '". Here is a stacktrace:',
                    u
                  ),
                    this.trigger(t.Events.ERROR, {
                      type: n.ErrorTypes.OTHER_ERROR,
                      details: n.ErrorDetails.INTERNAL_EXCEPTION,
                      fatal: !1,
                      event: e,
                      error: u,
                    });
                }
                return !1;
              }),
              (o.listenerCount = function (e) {
                return this._emitter.listenerCount(e);
              }),
              (o.destroy = function () {
                E.logger.log("destroy"),
                  this.trigger(t.Events.DESTROYING, void 0),
                  this.detachMedia(),
                  this.removeAllListeners(),
                  (this._autoLevelCapping = -1),
                  (this.url = null),
                  this.networkControllers.forEach(function (e) {
                    return e.destroy();
                  }),
                  (this.networkControllers.length = 0),
                  this.coreComponents.forEach(function (e) {
                    return e.destroy();
                  }),
                  (this.coreComponents.length = 0);
              }),
              (o.attachMedia = function (e) {
                E.logger.log("attachMedia"),
                  (this._media = e),
                  this.trigger(t.Events.MEDIA_ATTACHING, { media: e });
              }),
              (o.detachMedia = function () {
                E.logger.log("detachMedia"),
                  this.trigger(t.Events.MEDIA_DETACHING, void 0),
                  (this._media = null);
              }),
              (o.loadSource = function (e) {
                this.stopLoad();
                var s = this.media,
                  u = this.url,
                  a = (this.url = M.buildAbsoluteURL(self.location.href, e, {
                    alwaysNormalize: !0,
                  }));
                E.logger.log("loadSource:" + a),
                  s &&
                    u &&
                    u !== a &&
                    this.bufferController.hasSourceTypes() &&
                    (this.detachMedia(), this.attachMedia(s)),
                  this.trigger(t.Events.MANIFEST_LOADING, { url: e });
              }),
              (o.startLoad = function (e) {
                e === void 0 && (e = -1),
                  E.logger.log("startLoad(" + e + ")"),
                  this.networkControllers.forEach(function (s) {
                    s.startLoad(e);
                  });
              }),
              (o.stopLoad = function () {
                E.logger.log("stopLoad"),
                  this.networkControllers.forEach(function (e) {
                    e.stopLoad();
                  });
              }),
              (o.swapAudioCodec = function () {
                E.logger.log("swapAudioCodec"),
                  this.streamController.swapAudioCodec();
              }),
              (o.recoverMediaError = function () {
                E.logger.log("recoverMediaError");
                var e = this._media;
                this.detachMedia(), e && this.attachMedia(e);
              }),
              (o.removeLevel = function (e, s) {
                s === void 0 && (s = 0), this.levelController.removeLevel(e, s);
              }),
              v(
                r,
                [
                  {
                    key: "levels",
                    get: function () {
                      var e = this.levelController.levels;
                      return e || [];
                    },
                  },
                  {
                    key: "currentLevel",
                    get: function () {
                      return this.streamController.currentLevel;
                    },
                    set: function (e) {
                      E.logger.log("set currentLevel:" + e),
                        (this.loadLevel = e),
                        this.abrController.clearTimer(),
                        this.streamController.immediateLevelSwitch();
                    },
                  },
                  {
                    key: "nextLevel",
                    get: function () {
                      return this.streamController.nextLevel;
                    },
                    set: function (e) {
                      E.logger.log("set nextLevel:" + e),
                        (this.levelController.manualLevel = e),
                        this.streamController.nextLevelSwitch();
                    },
                  },
                  {
                    key: "loadLevel",
                    get: function () {
                      return this.levelController.level;
                    },
                    set: function (e) {
                      E.logger.log("set loadLevel:" + e),
                        (this.levelController.manualLevel = e);
                    },
                  },
                  {
                    key: "nextLoadLevel",
                    get: function () {
                      return this.levelController.nextLoadLevel;
                    },
                    set: function (e) {
                      this.levelController.nextLoadLevel = e;
                    },
                  },
                  {
                    key: "firstLevel",
                    get: function () {
                      return Math.max(
                        this.levelController.firstLevel,
                        this.minAutoLevel
                      );
                    },
                    set: function (e) {
                      E.logger.log("set firstLevel:" + e),
                        (this.levelController.firstLevel = e);
                    },
                  },
                  {
                    key: "startLevel",
                    get: function () {
                      return this.levelController.startLevel;
                    },
                    set: function (e) {
                      E.logger.log("set startLevel:" + e),
                        e !== -1 && (e = Math.max(e, this.minAutoLevel)),
                        (this.levelController.startLevel = e);
                    },
                  },
                  {
                    key: "capLevelToPlayerSize",
                    get: function () {
                      return this.config.capLevelToPlayerSize;
                    },
                    set: function (e) {
                      var s = !!e;
                      s !== this.config.capLevelToPlayerSize &&
                        (s
                          ? this.capLevelController.startCapping()
                          : (this.capLevelController.stopCapping(),
                            (this.autoLevelCapping = -1),
                            this.streamController.nextLevelSwitch()),
                        (this.config.capLevelToPlayerSize = s));
                    },
                  },
                  {
                    key: "autoLevelCapping",
                    get: function () {
                      return this._autoLevelCapping;
                    },
                    set: function (e) {
                      this._autoLevelCapping !== e &&
                        (E.logger.log("set autoLevelCapping:" + e),
                        (this._autoLevelCapping = e));
                    },
                  },
                  {
                    key: "bandwidthEstimate",
                    get: function () {
                      var e = this.abrController.bwEstimator;
                      return e ? e.getEstimate() : NaN;
                    },
                  },
                  {
                    key: "autoLevelEnabled",
                    get: function () {
                      return this.levelController.manualLevel === -1;
                    },
                  },
                  {
                    key: "manualLevel",
                    get: function () {
                      return this.levelController.manualLevel;
                    },
                  },
                  {
                    key: "minAutoLevel",
                    get: function () {
                      var e = this.levels,
                        s = this.config.minAutoBitrate;
                      if (!e) return 0;
                      for (var u = e.length, a = 0; a < u; a++)
                        if (e[a].maxBitrate >= s) return a;
                      return 0;
                    },
                  },
                  {
                    key: "maxAutoLevel",
                    get: function () {
                      var e = this.levels,
                        s = this.autoLevelCapping,
                        u;
                      return (
                        s === -1 && e && e.length
                          ? (u = e.length - 1)
                          : (u = s),
                        u
                      );
                    },
                  },
                  {
                    key: "nextAutoLevel",
                    get: function () {
                      return Math.min(
                        Math.max(
                          this.abrController.nextAutoLevel,
                          this.minAutoLevel
                        ),
                        this.maxAutoLevel
                      );
                    },
                    set: function (e) {
                      this.abrController.nextAutoLevel = Math.max(
                        this.minAutoLevel,
                        e
                      );
                    },
                  },
                  {
                    key: "playingDate",
                    get: function () {
                      return this.streamController.currentProgramDateTime;
                    },
                  },
                  {
                    key: "audioTracks",
                    get: function () {
                      var e = this.audioTrackController;
                      return e ? e.audioTracks : [];
                    },
                  },
                  {
                    key: "audioTrack",
                    get: function () {
                      var e = this.audioTrackController;
                      return e ? e.audioTrack : -1;
                    },
                    set: function (e) {
                      var s = this.audioTrackController;
                      s && (s.audioTrack = e);
                    },
                  },
                  {
                    key: "subtitleTracks",
                    get: function () {
                      var e = this.subtitleTrackController;
                      return e ? e.subtitleTracks : [];
                    },
                  },
                  {
                    key: "subtitleTrack",
                    get: function () {
                      var e = this.subtitleTrackController;
                      return e ? e.subtitleTrack : -1;
                    },
                    set: function (e) {
                      var s = this.subtitleTrackController;
                      s && (s.subtitleTrack = e);
                    },
                  },
                  {
                    key: "media",
                    get: function () {
                      return this._media;
                    },
                  },
                  {
                    key: "subtitleDisplay",
                    get: function () {
                      var e = this.subtitleTrackController;
                      return e ? e.subtitleDisplay : !1;
                    },
                    set: function (e) {
                      var s = this.subtitleTrackController;
                      s && (s.subtitleDisplay = e);
                    },
                  },
                  {
                    key: "lowLatencyMode",
                    get: function () {
                      return this.config.lowLatencyMode;
                    },
                    set: function (e) {
                      this.config.lowLatencyMode = e;
                    },
                  },
                  {
                    key: "liveSyncPosition",
                    get: function () {
                      return this.latencyController.liveSyncPosition;
                    },
                  },
                  {
                    key: "latency",
                    get: function () {
                      return this.latencyController.latency;
                    },
                  },
                  {
                    key: "maxLatency",
                    get: function () {
                      return this.latencyController.maxLatency;
                    },
                  },
                  {
                    key: "targetLatency",
                    get: function () {
                      return this.latencyController.targetLatency;
                    },
                  },
                  {
                    key: "drift",
                    get: function () {
                      return this.latencyController.drift;
                    },
                  },
                  {
                    key: "forceStartLoad",
                    get: function () {
                      return this.streamController.forceStartLoad;
                    },
                  },
                ],
                [
                  {
                    key: "version",
                    get: function () {
                      return "1.2.3";
                    },
                  },
                  {
                    key: "Events",
                    get: function () {
                      return t.Events;
                    },
                  },
                  {
                    key: "ErrorTypes",
                    get: function () {
                      return n.ErrorTypes;
                    },
                  },
                  {
                    key: "ErrorDetails",
                    get: function () {
                      return n.ErrorDetails;
                    },
                  },
                  {
                    key: "DefaultConfig",
                    get: function () {
                      return r.defaultConfig
                        ? r.defaultConfig
                        : g.hlsDefaultConfig;
                    },
                    set: function (e) {
                      r.defaultConfig = e;
                    },
                  },
                ]
              ),
              r
            );
          })();
          i.defaultConfig = void 0;
        },
        "./src/is-supported.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "isSupported", function () {
              return L;
            }),
            T.d(C, "changeTypeSupported", function () {
              return b;
            });
          var M = T("./src/utils/mediasource-helper.ts");
          function O() {
            return self.SourceBuffer || self.WebKitSourceBuffer;
          }
          function L() {
            var P = Object(M.getMediaSource)();
            if (!P) return !1;
            var R = O(),
              A =
                P &&
                typeof P.isTypeSupported == "function" &&
                P.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
              p =
                !R ||
                (R.prototype &&
                  typeof R.prototype.appendBuffer == "function" &&
                  typeof R.prototype.remove == "function");
            return !!A && !!p;
          }
          function b() {
            var P,
              R = O();
            return (
              typeof (R == null || (P = R.prototype) === null || P === void 0
                ? void 0
                : P.changeType) == "function"
            );
          }
        },
        "./src/loader/date-range.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "DateRangeAttribute", function () {
              return A;
            }),
            T.d(C, "DateRange", function () {
              return p;
            });
          var M = T("./src/polyfills/number.ts"),
            O = T("./src/utils/attr-list.ts"),
            L = T("./src/utils/logger.ts");
          function b() {
            return (
              (b = Object.assign
                ? Object.assign.bind()
                : function (y) {
                    for (var S = 1; S < arguments.length; S++) {
                      var E = arguments[S];
                      for (var g in E)
                        Object.prototype.hasOwnProperty.call(E, g) &&
                          (y[g] = E[g]);
                    }
                    return y;
                  }),
              b.apply(this, arguments)
            );
          }
          function P(y, S) {
            for (var E = 0; E < S.length; E++) {
              var g = S[E];
              (g.enumerable = g.enumerable || !1),
                (g.configurable = !0),
                "value" in g && (g.writable = !0),
                Object.defineProperty(y, g.key, g);
            }
          }
          function R(y, S, E) {
            return (
              S && P(y.prototype, S),
              E && P(y, E),
              Object.defineProperty(y, "prototype", { writable: !1 }),
              y
            );
          }
          var A;
          (function (y) {
            (y.ID = "ID"),
              (y.CLASS = "CLASS"),
              (y.START_DATE = "START-DATE"),
              (y.DURATION = "DURATION"),
              (y.END_DATE = "END-DATE"),
              (y.END_ON_NEXT = "END-ON-NEXT"),
              (y.PLANNED_DURATION = "PLANNED-DURATION"),
              (y.SCTE35_OUT = "SCTE35-OUT"),
              (y.SCTE35_IN = "SCTE35-IN");
          })(A || (A = {}));
          var p = (function () {
            function y(S, E) {
              if (
                ((this.attr = void 0),
                (this._startDate = void 0),
                (this._endDate = void 0),
                (this._badValueForSameId = void 0),
                E)
              ) {
                var g = E.attr;
                for (var m in g)
                  if (
                    Object.prototype.hasOwnProperty.call(S, m) &&
                    S[m] !== g[m]
                  ) {
                    L.logger.warn(
                      'DATERANGE tag attribute: "' +
                        m +
                        '" does not match for tags with ID: "' +
                        S.ID +
                        '"'
                    ),
                      (this._badValueForSameId = m);
                    break;
                  }
                S = b(new O.AttrList({}), g, S);
              }
              if (
                ((this.attr = S),
                (this._startDate = new Date(S[A.START_DATE])),
                A.END_DATE in this.attr)
              ) {
                var l = new Date(this.attr[A.END_DATE]);
                Object(M.isFiniteNumber)(l.getTime()) && (this._endDate = l);
              }
            }
            return (
              R(y, [
                {
                  key: "id",
                  get: function () {
                    return this.attr.ID;
                  },
                },
                {
                  key: "class",
                  get: function () {
                    return this.attr.CLASS;
                  },
                },
                {
                  key: "startDate",
                  get: function () {
                    return this._startDate;
                  },
                },
                {
                  key: "endDate",
                  get: function () {
                    if (this._endDate) return this._endDate;
                    var E = this.duration;
                    return E !== null
                      ? new Date(this._startDate.getTime() + E * 1e3)
                      : null;
                  },
                },
                {
                  key: "duration",
                  get: function () {
                    if (A.DURATION in this.attr) {
                      var E = this.attr.decimalFloatingPoint(A.DURATION);
                      if (Object(M.isFiniteNumber)(E)) return E;
                    } else if (this._endDate)
                      return (
                        (this._endDate.getTime() - this._startDate.getTime()) /
                        1e3
                      );
                    return null;
                  },
                },
                {
                  key: "plannedDuration",
                  get: function () {
                    return A.PLANNED_DURATION in this.attr
                      ? this.attr.decimalFloatingPoint(A.PLANNED_DURATION)
                      : null;
                  },
                },
                {
                  key: "endOnNext",
                  get: function () {
                    return this.attr.bool(A.END_ON_NEXT);
                  },
                },
                {
                  key: "isValid",
                  get: function () {
                    return (
                      !!this.id &&
                      !this._badValueForSameId &&
                      Object(M.isFiniteNumber)(this.startDate.getTime()) &&
                      (this.duration === null || this.duration >= 0) &&
                      (!this.endOnNext || !!this.class)
                    );
                  },
                },
              ]),
              y
            );
          })();
        },
        "./src/loader/fragment-loader.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "default", function () {
              return E;
            }),
            T.d(C, "LoadError", function () {
              return m;
            });
          var M = T("./src/polyfills/number.ts"),
            O = T("./src/errors.ts");
          function L(l, t) {
            (l.prototype = Object.create(t.prototype)),
              (l.prototype.constructor = l),
              p(l, t);
          }
          function b(l) {
            var t = typeof Map == "function" ? new Map() : void 0;
            return (
              (b = function (h) {
                if (h === null || !A(h)) return h;
                if (typeof h != "function")
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                if (typeof t < "u") {
                  if (t.has(h)) return t.get(h);
                  t.set(h, v);
                }
                function v() {
                  return P(h, arguments, y(this).constructor);
                }
                return (
                  (v.prototype = Object.create(h.prototype, {
                    constructor: {
                      value: v,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                  p(v, h)
                );
              }),
              b(l)
            );
          }
          function P(l, t, n) {
            return (
              R()
                ? (P = Reflect.construct.bind())
                : (P = function (v, i, r) {
                    var o = [null];
                    o.push.apply(o, i);
                    var d = Function.bind.apply(v, o),
                      e = new d();
                    return r && p(e, r.prototype), e;
                  }),
              P.apply(null, arguments)
            );
          }
          function R() {
            if (
              typeof Reflect > "u" ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if (typeof Proxy == "function") return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch {
              return !1;
            }
          }
          function A(l) {
            return Function.toString.call(l).indexOf("[native code]") !== -1;
          }
          function p(l, t) {
            return (
              (p = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (h, v) {
                    return (h.__proto__ = v), h;
                  }),
              p(l, t)
            );
          }
          function y(l) {
            return (
              (y = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (n) {
                    return n.__proto__ || Object.getPrototypeOf(n);
                  }),
              y(l)
            );
          }
          var S = Math.pow(2, 17),
            E = (function () {
              function l(n) {
                (this.config = void 0),
                  (this.loader = null),
                  (this.partLoadTimeout = -1),
                  (this.config = n);
              }
              var t = l.prototype;
              return (
                (t.destroy = function () {
                  this.loader && (this.loader.destroy(), (this.loader = null));
                }),
                (t.abort = function () {
                  this.loader && this.loader.abort();
                }),
                (t.load = function (h, v) {
                  var i = this,
                    r = h.url;
                  if (!r)
                    return Promise.reject(
                      new m(
                        {
                          type: O.ErrorTypes.NETWORK_ERROR,
                          details: O.ErrorDetails.FRAG_LOAD_ERROR,
                          fatal: !1,
                          frag: h,
                          networkDetails: null,
                        },
                        "Fragment does not have a " + (r ? "part list" : "url")
                      )
                    );
                  this.abort();
                  var o = this.config,
                    d = o.fLoader,
                    e = o.loader;
                  return new Promise(function (s, u) {
                    i.loader && i.loader.destroy();
                    var a = (i.loader = h.loader = d ? new d(o) : new e(o)),
                      f = g(h),
                      c = {
                        timeout: o.fragLoadingTimeOut,
                        maxRetry: 0,
                        retryDelay: 0,
                        maxRetryDelay: o.fragLoadingMaxRetryTimeout,
                        highWaterMark: h.sn === "initSegment" ? 1 / 0 : S,
                      };
                    (h.stats = a.stats),
                      a.load(f, c, {
                        onSuccess: function (x, I, F, _) {
                          i.resetLoader(h, a),
                            s({
                              frag: h,
                              part: null,
                              payload: x.data,
                              networkDetails: _,
                            });
                        },
                        onError: function (x, I, F) {
                          i.resetLoader(h, a),
                            u(
                              new m({
                                type: O.ErrorTypes.NETWORK_ERROR,
                                details: O.ErrorDetails.FRAG_LOAD_ERROR,
                                fatal: !1,
                                frag: h,
                                response: x,
                                networkDetails: F,
                              })
                            );
                        },
                        onAbort: function (x, I, F) {
                          i.resetLoader(h, a),
                            u(
                              new m({
                                type: O.ErrorTypes.NETWORK_ERROR,
                                details: O.ErrorDetails.INTERNAL_ABORTED,
                                fatal: !1,
                                frag: h,
                                networkDetails: F,
                              })
                            );
                        },
                        onTimeout: function (x, I, F) {
                          i.resetLoader(h, a),
                            u(
                              new m({
                                type: O.ErrorTypes.NETWORK_ERROR,
                                details: O.ErrorDetails.FRAG_LOAD_TIMEOUT,
                                fatal: !1,
                                frag: h,
                                networkDetails: F,
                              })
                            );
                        },
                        onProgress: function (x, I, F, _) {
                          v &&
                            v({
                              frag: h,
                              part: null,
                              payload: F,
                              networkDetails: _,
                            });
                        },
                      });
                  });
                }),
                (t.loadPart = function (h, v, i) {
                  var r = this;
                  this.abort();
                  var o = this.config,
                    d = o.fLoader,
                    e = o.loader;
                  return new Promise(function (s, u) {
                    r.loader && r.loader.destroy();
                    var a = (r.loader = h.loader = d ? new d(o) : new e(o)),
                      f = g(h, v),
                      c = {
                        timeout: o.fragLoadingTimeOut,
                        maxRetry: 0,
                        retryDelay: 0,
                        maxRetryDelay: o.fragLoadingMaxRetryTimeout,
                        highWaterMark: S,
                      };
                    (v.stats = a.stats),
                      a.load(f, c, {
                        onSuccess: function (x, I, F, _) {
                          r.resetLoader(h, a), r.updateStatsFromPart(h, v);
                          var B = {
                            frag: h,
                            part: v,
                            payload: x.data,
                            networkDetails: _,
                          };
                          i(B), s(B);
                        },
                        onError: function (x, I, F) {
                          r.resetLoader(h, a),
                            u(
                              new m({
                                type: O.ErrorTypes.NETWORK_ERROR,
                                details: O.ErrorDetails.FRAG_LOAD_ERROR,
                                fatal: !1,
                                frag: h,
                                part: v,
                                response: x,
                                networkDetails: F,
                              })
                            );
                        },
                        onAbort: function (x, I, F) {
                          (h.stats.aborted = v.stats.aborted),
                            r.resetLoader(h, a),
                            u(
                              new m({
                                type: O.ErrorTypes.NETWORK_ERROR,
                                details: O.ErrorDetails.INTERNAL_ABORTED,
                                fatal: !1,
                                frag: h,
                                part: v,
                                networkDetails: F,
                              })
                            );
                        },
                        onTimeout: function (x, I, F) {
                          r.resetLoader(h, a),
                            u(
                              new m({
                                type: O.ErrorTypes.NETWORK_ERROR,
                                details: O.ErrorDetails.FRAG_LOAD_TIMEOUT,
                                fatal: !1,
                                frag: h,
                                part: v,
                                networkDetails: F,
                              })
                            );
                        },
                      });
                  });
                }),
                (t.updateStatsFromPart = function (h, v) {
                  var i = h.stats,
                    r = v.stats,
                    o = r.total;
                  if (((i.loaded += r.loaded), o)) {
                    var d = Math.round(h.duration / v.duration),
                      e = Math.min(Math.round(i.loaded / o), d),
                      s = d - e,
                      u = s * Math.round(i.loaded / e);
                    i.total = i.loaded + u;
                  } else i.total = Math.max(i.loaded, i.total);
                  var a = i.loading,
                    f = r.loading;
                  a.start
                    ? (a.first += f.first - f.start)
                    : ((a.start = f.start), (a.first = f.first)),
                    (a.end = f.end);
                }),
                (t.resetLoader = function (h, v) {
                  (h.loader = null),
                    this.loader === v &&
                      (self.clearTimeout(this.partLoadTimeout),
                      (this.loader = null)),
                    v.destroy();
                }),
                l
              );
            })();
          function g(l, t) {
            t === void 0 && (t = null);
            var n = t || l,
              h = {
                frag: l,
                part: t,
                responseType: "arraybuffer",
                url: n.url,
                headers: {},
                rangeStart: 0,
                rangeEnd: 0,
              },
              v = n.byteRangeStartOffset,
              i = n.byteRangeEndOffset;
            return (
              Object(M.isFiniteNumber)(v) &&
                Object(M.isFiniteNumber)(i) &&
                ((h.rangeStart = v), (h.rangeEnd = i)),
              h
            );
          }
          var m = (function (l) {
            L(t, l);
            function t(n) {
              for (
                var h,
                  v = arguments.length,
                  i = new Array(v > 1 ? v - 1 : 0),
                  r = 1;
                r < v;
                r++
              )
                i[r - 1] = arguments[r];
              return (
                (h = l.call.apply(l, [this].concat(i)) || this),
                (h.data = void 0),
                (h.data = n),
                h
              );
            }
            return t;
          })(b(Error));
        },
        "./src/loader/fragment.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "ElementaryStreamTypes", function () {
              return E;
            }),
            T.d(C, "BaseSegment", function () {
              return g;
            }),
            T.d(C, "Fragment", function () {
              return m;
            }),
            T.d(C, "Part", function () {
              return l;
            });
          var M = T("./src/polyfills/number.ts"),
            O = T("./node_modules/url-toolkit/src/url-toolkit.js"),
            L = T.n(O),
            b = T("./src/utils/logger.ts"),
            P = T("./src/loader/level-key.ts"),
            R = T("./src/loader/load-stats.ts");
          function A(t, n) {
            (t.prototype = Object.create(n.prototype)),
              (t.prototype.constructor = t),
              p(t, n);
          }
          function p(t, n) {
            return (
              (p = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (v, i) {
                    return (v.__proto__ = i), v;
                  }),
              p(t, n)
            );
          }
          function y(t, n) {
            for (var h = 0; h < n.length; h++) {
              var v = n[h];
              (v.enumerable = v.enumerable || !1),
                (v.configurable = !0),
                "value" in v && (v.writable = !0),
                Object.defineProperty(t, v.key, v);
            }
          }
          function S(t, n, h) {
            return (
              n && y(t.prototype, n),
              h && y(t, h),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          }
          var E;
          (function (t) {
            (t.AUDIO = "audio"),
              (t.VIDEO = "video"),
              (t.AUDIOVIDEO = "audiovideo");
          })(E || (E = {}));
          var g = (function () {
              function t(h) {
                var v;
                (this._byteRange = null),
                  (this._url = null),
                  (this.baseurl = void 0),
                  (this.relurl = void 0),
                  (this.elementaryStreams =
                    ((v = {}),
                    (v[E.AUDIO] = null),
                    (v[E.VIDEO] = null),
                    (v[E.AUDIOVIDEO] = null),
                    v)),
                  (this.baseurl = h);
              }
              var n = t.prototype;
              return (
                (n.setByteRange = function (v, i) {
                  var r = v.split("@", 2),
                    o = [];
                  r.length === 1
                    ? (o[0] = i ? i.byteRangeEndOffset : 0)
                    : (o[0] = parseInt(r[1])),
                    (o[1] = parseInt(r[0]) + o[0]),
                    (this._byteRange = o);
                }),
                S(t, [
                  {
                    key: "byteRange",
                    get: function () {
                      return this._byteRange ? this._byteRange : [];
                    },
                  },
                  {
                    key: "byteRangeStartOffset",
                    get: function () {
                      return this.byteRange[0];
                    },
                  },
                  {
                    key: "byteRangeEndOffset",
                    get: function () {
                      return this.byteRange[1];
                    },
                  },
                  {
                    key: "url",
                    get: function () {
                      return (
                        !this._url &&
                          this.baseurl &&
                          this.relurl &&
                          (this._url = Object(O.buildAbsoluteURL)(
                            this.baseurl,
                            this.relurl,
                            { alwaysNormalize: !0 }
                          )),
                        this._url || ""
                      );
                    },
                    set: function (v) {
                      this._url = v;
                    },
                  },
                ]),
                t
              );
            })(),
            m = (function (t) {
              A(n, t);
              function n(v, i) {
                var r;
                return (
                  (r = t.call(this, i) || this),
                  (r._decryptdata = null),
                  (r.rawProgramDateTime = null),
                  (r.programDateTime = null),
                  (r.tagList = []),
                  (r.duration = 0),
                  (r.sn = 0),
                  (r.levelkey = void 0),
                  (r.type = void 0),
                  (r.loader = null),
                  (r.level = -1),
                  (r.cc = 0),
                  (r.startPTS = void 0),
                  (r.endPTS = void 0),
                  (r.appendedPTS = void 0),
                  (r.startDTS = void 0),
                  (r.endDTS = void 0),
                  (r.start = 0),
                  (r.deltaPTS = void 0),
                  (r.maxStartPTS = void 0),
                  (r.minEndPTS = void 0),
                  (r.stats = new R.LoadStats()),
                  (r.urlId = 0),
                  (r.data = void 0),
                  (r.bitrateTest = !1),
                  (r.title = null),
                  (r.initSegment = null),
                  (r.type = v),
                  r
                );
              }
              var h = n.prototype;
              return (
                (h.createInitializationVector = function (i) {
                  for (var r = new Uint8Array(16), o = 12; o < 16; o++)
                    r[o] = (i >> (8 * (15 - o))) & 255;
                  return r;
                }),
                (h.setDecryptDataFromLevelKey = function (i, r) {
                  var o = i;
                  return (
                    i?.method === "AES-128" &&
                      i.uri &&
                      !i.iv &&
                      ((o = P.LevelKey.fromURI(i.uri)),
                      (o.method = i.method),
                      (o.iv = this.createInitializationVector(r)),
                      (o.keyFormat = "identity")),
                    o
                  );
                }),
                (h.setElementaryStreamInfo = function (i, r, o, d, e, s) {
                  s === void 0 && (s = !1);
                  var u = this.elementaryStreams,
                    a = u[i];
                  if (!a) {
                    u[i] = {
                      startPTS: r,
                      endPTS: o,
                      startDTS: d,
                      endDTS: e,
                      partial: s,
                    };
                    return;
                  }
                  (a.startPTS = Math.min(a.startPTS, r)),
                    (a.endPTS = Math.max(a.endPTS, o)),
                    (a.startDTS = Math.min(a.startDTS, d)),
                    (a.endDTS = Math.max(a.endDTS, e));
                }),
                (h.clearElementaryStreamInfo = function () {
                  var i = this.elementaryStreams;
                  (i[E.AUDIO] = null),
                    (i[E.VIDEO] = null),
                    (i[E.AUDIOVIDEO] = null);
                }),
                S(n, [
                  {
                    key: "decryptdata",
                    get: function () {
                      if (!this.levelkey && !this._decryptdata) return null;
                      if (!this._decryptdata && this.levelkey) {
                        var i = this.sn;
                        typeof i != "number" &&
                          (this.levelkey &&
                            this.levelkey.method === "AES-128" &&
                            !this.levelkey.iv &&
                            b.logger.warn(
                              'missing IV for initialization segment with method="' +
                                this.levelkey.method +
                                '" - compliance issue'
                            ),
                          (i = 0)),
                          (this._decryptdata = this.setDecryptDataFromLevelKey(
                            this.levelkey,
                            i
                          ));
                      }
                      return this._decryptdata;
                    },
                  },
                  {
                    key: "end",
                    get: function () {
                      return this.start + this.duration;
                    },
                  },
                  {
                    key: "endProgramDateTime",
                    get: function () {
                      if (
                        this.programDateTime === null ||
                        !Object(M.isFiniteNumber)(this.programDateTime)
                      )
                        return null;
                      var i = Object(M.isFiniteNumber)(this.duration)
                        ? this.duration
                        : 0;
                      return this.programDateTime + i * 1e3;
                    },
                  },
                  {
                    key: "encrypted",
                    get: function () {
                      var i;
                      return !!(
                        (i = this.decryptdata) !== null &&
                        i !== void 0 &&
                        i.keyFormat &&
                        this.decryptdata.uri
                      );
                    },
                  },
                ]),
                n
              );
            })(g),
            l = (function (t) {
              A(n, t);
              function n(h, v, i, r, o) {
                var d;
                (d = t.call(this, i) || this),
                  (d.fragOffset = 0),
                  (d.duration = 0),
                  (d.gap = !1),
                  (d.independent = !1),
                  (d.relurl = void 0),
                  (d.fragment = void 0),
                  (d.index = void 0),
                  (d.stats = new R.LoadStats()),
                  (d.duration = h.decimalFloatingPoint("DURATION")),
                  (d.gap = h.bool("GAP")),
                  (d.independent = h.bool("INDEPENDENT")),
                  (d.relurl = h.enumeratedString("URI")),
                  (d.fragment = v),
                  (d.index = r);
                var e = h.enumeratedString("BYTERANGE");
                return (
                  e && d.setByteRange(e, o),
                  o && (d.fragOffset = o.fragOffset + o.duration),
                  d
                );
              }
              return (
                S(n, [
                  {
                    key: "start",
                    get: function () {
                      return this.fragment.start + this.fragOffset;
                    },
                  },
                  {
                    key: "end",
                    get: function () {
                      return this.start + this.duration;
                    },
                  },
                  {
                    key: "loaded",
                    get: function () {
                      var v = this.elementaryStreams;
                      return !!(v.audio || v.video || v.audiovideo);
                    },
                  },
                ]),
                n
              );
            })(g);
        },
        "./src/loader/key-loader.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "default", function () {
              return b;
            });
          var M = T("./src/events.ts"),
            O = T("./src/errors.ts"),
            L = T("./src/utils/logger.ts"),
            b = (function () {
              function P(A) {
                (this.hls = void 0),
                  (this.loaders = {}),
                  (this.decryptkey = null),
                  (this.decrypturl = null),
                  (this.hls = A),
                  this.registerListeners();
              }
              var R = P.prototype;
              return (
                (R.startLoad = function (p) {}),
                (R.stopLoad = function () {
                  this.destroyInternalLoaders();
                }),
                (R.registerListeners = function () {
                  this.hls.on(M.Events.KEY_LOADING, this.onKeyLoading, this);
                }),
                (R.unregisterListeners = function () {
                  this.hls.off(M.Events.KEY_LOADING, this.onKeyLoading);
                }),
                (R.destroyInternalLoaders = function () {
                  for (var p in this.loaders) {
                    var y = this.loaders[p];
                    y && y.destroy();
                  }
                  this.loaders = {};
                }),
                (R.destroy = function () {
                  this.unregisterListeners(), this.destroyInternalLoaders();
                }),
                (R.onKeyLoading = function (p, y) {
                  var S = y.frag,
                    E = S.type,
                    g = this.loaders[E];
                  if (!S.decryptdata) {
                    L.logger.warn(
                      "Missing decryption data on fragment in onKeyLoading"
                    );
                    return;
                  }
                  var m = S.decryptdata.uri;
                  if (m !== this.decrypturl || this.decryptkey === null) {
                    var l = this.hls.config;
                    if (
                      (g &&
                        (L.logger.warn(
                          "abort previous key loader for type:" + E
                        ),
                        g.abort()),
                      !m)
                    ) {
                      L.logger.warn("key uri is falsy");
                      return;
                    }
                    var t = l.loader,
                      n = (S.loader = this.loaders[E] = new t(l));
                    (this.decrypturl = m), (this.decryptkey = null);
                    var h = { url: m, frag: S, responseType: "arraybuffer" },
                      v = {
                        timeout: l.fragLoadingTimeOut,
                        maxRetry: 0,
                        retryDelay: l.fragLoadingRetryDelay,
                        maxRetryDelay: l.fragLoadingMaxRetryTimeout,
                        highWaterMark: 0,
                      },
                      i = {
                        onSuccess: this.loadsuccess.bind(this),
                        onError: this.loaderror.bind(this),
                        onTimeout: this.loadtimeout.bind(this),
                      };
                    n.load(h, v, i);
                  } else
                    this.decryptkey &&
                      ((S.decryptdata.key = this.decryptkey),
                      this.hls.trigger(M.Events.KEY_LOADED, { frag: S }));
                }),
                (R.loadsuccess = function (p, y, S) {
                  var E = S.frag;
                  if (!E.decryptdata) {
                    L.logger.error("after key load, decryptdata unset");
                    return;
                  }
                  (this.decryptkey = E.decryptdata.key =
                    new Uint8Array(p.data)),
                    (E.loader = null),
                    delete this.loaders[E.type],
                    this.hls.trigger(M.Events.KEY_LOADED, { frag: E });
                }),
                (R.loaderror = function (p, y) {
                  var S = y.frag,
                    E = S.loader;
                  E && E.abort(),
                    delete this.loaders[S.type],
                    this.hls.trigger(M.Events.ERROR, {
                      type: O.ErrorTypes.NETWORK_ERROR,
                      details: O.ErrorDetails.KEY_LOAD_ERROR,
                      fatal: !1,
                      frag: S,
                      response: p,
                    });
                }),
                (R.loadtimeout = function (p, y) {
                  var S = y.frag,
                    E = S.loader;
                  E && E.abort(),
                    delete this.loaders[S.type],
                    this.hls.trigger(M.Events.ERROR, {
                      type: O.ErrorTypes.NETWORK_ERROR,
                      details: O.ErrorDetails.KEY_LOAD_TIMEOUT,
                      fatal: !1,
                      frag: S,
                    });
                }),
                P
              );
            })();
        },
        "./src/loader/level-details.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "LevelDetails", function () {
              return P;
            });
          var M = T("./src/polyfills/number.ts");
          function O(R, A) {
            for (var p = 0; p < A.length; p++) {
              var y = A[p];
              (y.enumerable = y.enumerable || !1),
                (y.configurable = !0),
                "value" in y && (y.writable = !0),
                Object.defineProperty(R, y.key, y);
            }
          }
          function L(R, A, p) {
            return (
              A && O(R.prototype, A),
              p && O(R, p),
              Object.defineProperty(R, "prototype", { writable: !1 }),
              R
            );
          }
          var b = 10,
            P = (function () {
              function R(p) {
                (this.PTSKnown = !1),
                  (this.alignedSliding = !1),
                  (this.averagetargetduration = void 0),
                  (this.endCC = 0),
                  (this.endSN = 0),
                  (this.fragments = void 0),
                  (this.fragmentHint = void 0),
                  (this.partList = null),
                  (this.dateRanges = void 0),
                  (this.live = !0),
                  (this.ageHeader = 0),
                  (this.advancedDateTime = void 0),
                  (this.updated = !0),
                  (this.advanced = !0),
                  (this.availabilityDelay = void 0),
                  (this.misses = 0),
                  (this.needSidxRanges = !1),
                  (this.startCC = 0),
                  (this.startSN = 0),
                  (this.startTimeOffset = null),
                  (this.targetduration = 0),
                  (this.totalduration = 0),
                  (this.type = null),
                  (this.url = void 0),
                  (this.m3u8 = ""),
                  (this.version = null),
                  (this.canBlockReload = !1),
                  (this.canSkipUntil = 0),
                  (this.canSkipDateRanges = !1),
                  (this.skippedSegments = 0),
                  (this.recentlyRemovedDateranges = void 0),
                  (this.partHoldBack = 0),
                  (this.holdBack = 0),
                  (this.partTarget = 0),
                  (this.preloadHint = void 0),
                  (this.renditionReports = void 0),
                  (this.tuneInGoal = 0),
                  (this.deltaUpdateFailed = void 0),
                  (this.driftStartTime = 0),
                  (this.driftEndTime = 0),
                  (this.driftStart = 0),
                  (this.driftEnd = 0),
                  (this.fragments = []),
                  (this.dateRanges = {}),
                  (this.url = p);
              }
              var A = R.prototype;
              return (
                (A.reloaded = function (y) {
                  if (!y) {
                    (this.advanced = !0), (this.updated = !0);
                    return;
                  }
                  var S = this.lastPartSn - y.lastPartSn,
                    E = this.lastPartIndex - y.lastPartIndex;
                  (this.updated = this.endSN !== y.endSN || !!E || !!S),
                    (this.advanced =
                      this.endSN > y.endSN || S > 0 || (S === 0 && E > 0)),
                    this.updated || this.advanced
                      ? (this.misses = Math.floor(y.misses * 0.6))
                      : (this.misses = y.misses + 1),
                    (this.availabilityDelay = y.availabilityDelay);
                }),
                L(R, [
                  {
                    key: "hasProgramDateTime",
                    get: function () {
                      return this.fragments.length
                        ? Object(M.isFiniteNumber)(
                            this.fragments[this.fragments.length - 1]
                              .programDateTime
                          )
                        : !1;
                    },
                  },
                  {
                    key: "levelTargetDuration",
                    get: function () {
                      return (
                        this.averagetargetduration || this.targetduration || b
                      );
                    },
                  },
                  {
                    key: "drift",
                    get: function () {
                      var y = this.driftEndTime - this.driftStartTime;
                      if (y > 0) {
                        var S = this.driftEnd - this.driftStart;
                        return (S * 1e3) / y;
                      }
                      return 1;
                    },
                  },
                  {
                    key: "edge",
                    get: function () {
                      return this.partEnd || this.fragmentEnd;
                    },
                  },
                  {
                    key: "partEnd",
                    get: function () {
                      var y;
                      return (y = this.partList) !== null &&
                        y !== void 0 &&
                        y.length
                        ? this.partList[this.partList.length - 1].end
                        : this.fragmentEnd;
                    },
                  },
                  {
                    key: "fragmentEnd",
                    get: function () {
                      var y;
                      return (y = this.fragments) !== null &&
                        y !== void 0 &&
                        y.length
                        ? this.fragments[this.fragments.length - 1].end
                        : 0;
                    },
                  },
                  {
                    key: "age",
                    get: function () {
                      return this.advancedDateTime
                        ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3
                        : 0;
                    },
                  },
                  {
                    key: "lastPartIndex",
                    get: function () {
                      var y;
                      return (y = this.partList) !== null &&
                        y !== void 0 &&
                        y.length
                        ? this.partList[this.partList.length - 1].index
                        : -1;
                    },
                  },
                  {
                    key: "lastPartSn",
                    get: function () {
                      var y;
                      return (y = this.partList) !== null &&
                        y !== void 0 &&
                        y.length
                        ? this.partList[this.partList.length - 1].fragment.sn
                        : this.endSN;
                    },
                  },
                ]),
                R
              );
            })();
        },
        "./src/loader/level-key.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "LevelKey", function () {
              return P;
            });
          var M = T("./node_modules/url-toolkit/src/url-toolkit.js"),
            O = T.n(M);
          function L(R, A) {
            for (var p = 0; p < A.length; p++) {
              var y = A[p];
              (y.enumerable = y.enumerable || !1),
                (y.configurable = !0),
                "value" in y && (y.writable = !0),
                Object.defineProperty(R, y.key, y);
            }
          }
          function b(R, A, p) {
            return (
              A && L(R.prototype, A),
              p && L(R, p),
              Object.defineProperty(R, "prototype", { writable: !1 }),
              R
            );
          }
          var P = (function () {
            (R.fromURL = function (p, y) {
              return new R(p, y);
            }),
              (R.fromURI = function (p) {
                return new R(p);
              });
            function R(A, p) {
              (this._uri = null),
                (this.method = null),
                (this.keyFormat = null),
                (this.keyFormatVersions = null),
                (this.keyID = null),
                (this.key = null),
                (this.iv = null),
                p
                  ? (this._uri = Object(M.buildAbsoluteURL)(A, p, {
                      alwaysNormalize: !0,
                    }))
                  : (this._uri = A);
            }
            return (
              b(R, [
                {
                  key: "uri",
                  get: function () {
                    return this._uri;
                  },
                },
              ]),
              R
            );
          })();
        },
        "./src/loader/load-stats.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "LoadStats", function () {
              return M;
            });
          var M = function () {
            (this.aborted = !1),
              (this.loaded = 0),
              (this.retry = 0),
              (this.total = 0),
              (this.chunkCount = 0),
              (this.bwEstimate = 0),
              (this.loading = { start: 0, first: 0, end: 0 }),
              (this.parsing = { start: 0, end: 0 }),
              (this.buffering = { start: 0, first: 0, end: 0 });
          };
        },
        "./src/loader/m3u8-parser.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "default", function () {
              return h;
            });
          var M = T("./src/polyfills/number.ts"),
            O = T("./node_modules/url-toolkit/src/url-toolkit.js"),
            L = T.n(O),
            b = T("./src/loader/date-range.ts"),
            P = T("./src/loader/fragment.ts"),
            R = T("./src/loader/level-details.ts"),
            A = T("./src/loader/level-key.ts"),
            p = T("./src/utils/attr-list.ts"),
            y = T("./src/utils/logger.ts"),
            S = T("./src/utils/codecs.ts"),
            E =
              /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g,
            g = /#EXT-X-MEDIA:(.*)/g,
            m = new RegExp(
              [
                /#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
                /(?!#) *(\S[\S ]*)/.source,
                /#EXT-X-BYTERANGE:*(.+)/.source,
                /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,
                /#.*/.source,
              ].join("|"),
              "g"
            ),
            l = new RegExp(
              [
                /#(EXTM3U)/.source,
                /#EXT-X-(DATERANGE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/
                  .source,
                /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/
                  .source,
                /#EXT-X-(DISCONTINUITY|ENDLIST|GAP)/.source,
                /(#)([^:]*):(.*)/.source,
                /(#)(.*)(?:.*)\r?\n?/.source,
              ].join("|")
            ),
            t = /\.(mp4|m4s|m4v|m4a)$/i;
          function n(e) {
            var s, u;
            return t.test(
              (s =
                (u = O.parseURL(e)) === null || u === void 0
                  ? void 0
                  : u.path) != null
                ? s
                : ""
            );
          }
          var h = (function () {
            function e() {}
            return (
              (e.findGroup = function (u, a) {
                for (var f = 0; f < u.length; f++) {
                  var c = u[f];
                  if (c.id === a) return c;
                }
              }),
              (e.convertAVC1ToAVCOTI = function (u) {
                var a = u.split(".");
                if (a.length > 2) {
                  var f = a.shift() + ".";
                  return (
                    (f += parseInt(a.shift()).toString(16)),
                    (f += ("000" + parseInt(a.shift()).toString(16)).slice(-4)),
                    f
                  );
                }
                return u;
              }),
              (e.resolve = function (u, a) {
                return O.buildAbsoluteURL(a, u, { alwaysNormalize: !0 });
              }),
              (e.parseMasterPlaylist = function (u, a) {
                var f = [],
                  c = {},
                  D = !1;
                E.lastIndex = 0;
                for (var x; (x = E.exec(u)) != null; )
                  if (x[1]) {
                    var I = new p.AttrList(x[1]),
                      F = {
                        attrs: I,
                        bitrate:
                          I.decimalInteger("AVERAGE-BANDWIDTH") ||
                          I.decimalInteger("BANDWIDTH"),
                        name: I.NAME,
                        url: e.resolve(x[2], a),
                      },
                      _ = I.decimalResolution("RESOLUTION");
                    _ && ((F.width = _.width), (F.height = _.height)),
                      v(
                        (I.CODECS || "").split(/[ ,]+/).filter(function (U) {
                          return U;
                        }),
                        F
                      ),
                      F.videoCodec &&
                        F.videoCodec.indexOf("avc1") !== -1 &&
                        (F.videoCodec = e.convertAVC1ToAVCOTI(F.videoCodec)),
                      f.push(F);
                  } else if (x[3]) {
                    var B = new p.AttrList(x[3]);
                    B["DATA-ID"] && ((D = !0), (c[B["DATA-ID"]] = B));
                  }
                return { levels: f, sessionData: D ? c : null };
              }),
              (e.parseMasterPlaylistMedia = function (u, a, f, c) {
                c === void 0 && (c = []);
                var D,
                  x = [],
                  I = 0;
                for (g.lastIndex = 0; (D = g.exec(u)) !== null; ) {
                  var F = new p.AttrList(D[1]);
                  if (F.TYPE === f) {
                    var _ = {
                      attrs: F,
                      bitrate: 0,
                      id: I++,
                      groupId: F["GROUP-ID"],
                      instreamId: F["INSTREAM-ID"],
                      name: F.NAME || F.LANGUAGE || "",
                      type: f,
                      default: F.bool("DEFAULT"),
                      autoselect: F.bool("AUTOSELECT"),
                      forced: F.bool("FORCED"),
                      lang: F.LANGUAGE,
                      url: F.URI ? e.resolve(F.URI, a) : "",
                    };
                    if (c.length) {
                      var B = e.findGroup(c, _.groupId) || c[0];
                      i(_, B, "audioCodec"), i(_, B, "textCodec");
                    }
                    x.push(_);
                  }
                }
                return x;
              }),
              (e.parseLevelPlaylist = function (u, a, f, c, D) {
                var x = new R.LevelDetails(a),
                  I = x.fragments,
                  F = null,
                  _ = 0,
                  B = 0,
                  U = 0,
                  N = 0,
                  w = null,
                  k = new P.Fragment(c, a),
                  K,
                  j,
                  G,
                  Y = -1,
                  X = !1;
                for (m.lastIndex = 0, x.m3u8 = u; (K = m.exec(u)) !== null; ) {
                  X &&
                    ((X = !1),
                    (k = new P.Fragment(c, a)),
                    (k.start = U),
                    (k.sn = _),
                    (k.cc = N),
                    (k.level = f),
                    F &&
                      ((k.initSegment = F),
                      (k.rawProgramDateTime = F.rawProgramDateTime),
                      (F.rawProgramDateTime = null)));
                  var z = K[1];
                  if (z) {
                    k.duration = parseFloat(z);
                    var H = (" " + K[2]).slice(1);
                    (k.title = H || null),
                      k.tagList.push(H ? ["INF", z, H] : ["INF", z]);
                  } else if (K[3])
                    Object(M.isFiniteNumber)(k.duration) &&
                      ((k.start = U),
                      G && (k.levelkey = G),
                      (k.sn = _),
                      (k.level = f),
                      (k.cc = N),
                      (k.urlId = D),
                      I.push(k),
                      (k.relurl = (" " + K[3]).slice(1)),
                      o(k, w),
                      (w = k),
                      (U += k.duration),
                      _++,
                      (B = 0),
                      (X = !0));
                  else if (K[4]) {
                    var Q = (" " + K[4]).slice(1);
                    w ? k.setByteRange(Q, w) : k.setByteRange(Q);
                  } else if (K[5])
                    (k.rawProgramDateTime = (" " + K[5]).slice(1)),
                      k.tagList.push([
                        "PROGRAM-DATE-TIME",
                        k.rawProgramDateTime,
                      ]),
                      Y === -1 && (Y = I.length);
                  else {
                    if (((K = K[0].match(l)), !K)) {
                      y.logger.warn(
                        "No matches on slow regex match for level playlist!"
                      );
                      continue;
                    }
                    for (j = 1; j < K.length && !(typeof K[j] < "u"); j++);
                    var $ = (" " + K[j]).slice(1),
                      V = (" " + K[j + 1]).slice(1),
                      J = K[j + 2] ? (" " + K[j + 2]).slice(1) : "";
                    switch ($) {
                      case "PLAYLIST-TYPE":
                        x.type = V.toUpperCase();
                        break;
                      case "MEDIA-SEQUENCE":
                        _ = x.startSN = parseInt(V);
                        break;
                      case "SKIP": {
                        var Z = new p.AttrList(V),
                          q = Z.decimalInteger("SKIPPED-SEGMENTS");
                        if (Object(M.isFiniteNumber)(q)) {
                          x.skippedSegments = q;
                          for (var ot = q; ot--; ) I.unshift(null);
                          _ += q;
                        }
                        var tt = Z.enumeratedString(
                          "RECENTLY-REMOVED-DATERANGES"
                        );
                        tt && (x.recentlyRemovedDateranges = tt.split("	"));
                        break;
                      }
                      case "TARGETDURATION":
                        x.targetduration = parseFloat(V);
                        break;
                      case "VERSION":
                        x.version = parseInt(V);
                        break;
                      case "EXTM3U":
                        break;
                      case "ENDLIST":
                        x.live = !1;
                        break;
                      case "#":
                        (V || J) && k.tagList.push(J ? [V, J] : [V]);
                        break;
                      case "DISCONTINUITY":
                        N++, k.tagList.push(["DIS"]);
                        break;
                      case "GAP":
                        k.tagList.push([$]);
                        break;
                      case "BITRATE":
                        k.tagList.push([$, V]);
                        break;
                      case "DATERANGE": {
                        var ut = new p.AttrList(V),
                          nt = new b.DateRange(ut, x.dateRanges[ut.ID]);
                        nt.isValid || x.skippedSegments
                          ? (x.dateRanges[nt.id] = nt)
                          : y.logger.warn(
                              'Ignoring invalid DATERANGE tag: "' + V + '"'
                            ),
                          k.tagList.push(["EXT-X-DATERANGE", V]);
                        break;
                      }
                      case "DISCONTINUITY-SEQUENCE":
                        N = parseInt(V);
                        break;
                      case "KEY": {
                        var ft,
                          rt = new p.AttrList(V),
                          dt = rt.enumeratedString("METHOD"),
                          ct = rt.URI,
                          gt = rt.hexadecimalInteger("IV"),
                          ht = rt.enumeratedString("KEYFORMATVERSIONS"),
                          Tt = rt.enumeratedString("KEYID"),
                          lt =
                            (ft = rt.enumeratedString("KEYFORMAT")) != null
                              ? ft
                              : "identity",
                          yt = [
                            "com.apple.streamingkeydelivery",
                            "com.microsoft.playready",
                            "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
                            "com.widevine",
                          ];
                        if (yt.indexOf(lt) > -1) {
                          y.logger.warn(
                            "Keyformat " +
                              lt +
                              " is not supported from the manifest"
                          );
                          continue;
                        } else if (lt !== "identity") continue;
                        dt &&
                          ((G = A.LevelKey.fromURL(a, ct)),
                          ct &&
                            [
                              "AES-128",
                              "SAMPLE-AES",
                              "SAMPLE-AES-CENC",
                            ].indexOf(dt) >= 0 &&
                            ((G.method = dt),
                            (G.keyFormat = lt),
                            Tt && (G.keyID = Tt),
                            ht && (G.keyFormatVersions = ht),
                            (G.iv = gt)));
                        break;
                      }
                      case "START": {
                        var it = new p.AttrList(V),
                          st = it.decimalFloatingPoint("TIME-OFFSET");
                        Object(M.isFiniteNumber)(st) &&
                          (x.startTimeOffset = st);
                        break;
                      }
                      case "MAP": {
                        var mt = new p.AttrList(V);
                        if (k.duration) {
                          var at = new P.Fragment(c, a);
                          d(at, mt, f, G),
                            (F = at),
                            (k.initSegment = F),
                            F.rawProgramDateTime &&
                              !k.rawProgramDateTime &&
                              (k.rawProgramDateTime = F.rawProgramDateTime);
                        } else d(k, mt, f, G), (F = k), (X = !0);
                        break;
                      }
                      case "SERVER-CONTROL": {
                        var et = new p.AttrList(V);
                        (x.canBlockReload = et.bool("CAN-BLOCK-RELOAD")),
                          (x.canSkipUntil = et.optionalFloat(
                            "CAN-SKIP-UNTIL",
                            0
                          )),
                          (x.canSkipDateRanges =
                            x.canSkipUntil > 0 &&
                            et.bool("CAN-SKIP-DATERANGES")),
                          (x.partHoldBack = et.optionalFloat(
                            "PART-HOLD-BACK",
                            0
                          )),
                          (x.holdBack = et.optionalFloat("HOLD-BACK", 0));
                        break;
                      }
                      case "PART-INF": {
                        var xt = new p.AttrList(V);
                        x.partTarget = xt.decimalFloatingPoint("PART-TARGET");
                        break;
                      }
                      case "PART": {
                        var vt = x.partList;
                        vt || (vt = x.partList = []);
                        var Lt = B > 0 ? vt[vt.length - 1] : void 0,
                          Rt = B++,
                          Et = new P.Part(new p.AttrList(V), k, a, Rt, Lt);
                        vt.push(Et), (k.duration += Et.duration);
                        break;
                      }
                      case "PRELOAD-HINT": {
                        var Mt = new p.AttrList(V);
                        x.preloadHint = Mt;
                        break;
                      }
                      case "RENDITION-REPORT": {
                        var It = new p.AttrList(V);
                        (x.renditionReports = x.renditionReports || []),
                          x.renditionReports.push(It);
                        break;
                      }
                      default:
                        y.logger.warn("line parsed but not handled: " + K);
                        break;
                    }
                  }
                }
                w && !w.relurl
                  ? (I.pop(),
                    (U -= w.duration),
                    x.partList && (x.fragmentHint = w))
                  : x.partList && (o(k, w), (k.cc = N), (x.fragmentHint = k));
                var St = I.length,
                  At = I[0],
                  Dt = I[St - 1];
                if (
                  ((U += x.skippedSegments * x.targetduration),
                  U > 0 && St && Dt)
                ) {
                  x.averagetargetduration = U / St;
                  var Ct = Dt.sn;
                  (x.endSN = Ct !== "initSegment" ? Ct : 0),
                    At &&
                      ((x.startCC = At.cc),
                      At.initSegment ||
                        (x.fragments.every(function (Ot) {
                          return Ot.relurl && n(Ot.relurl);
                        }) &&
                          (y.logger.warn(
                            "MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"
                          ),
                          (k = new P.Fragment(c, a)),
                          (k.relurl = Dt.relurl),
                          (k.level = f),
                          (k.sn = "initSegment"),
                          (At.initSegment = k),
                          (x.needSidxRanges = !0))));
                } else (x.endSN = 0), (x.startCC = 0);
                return (
                  x.fragmentHint && (U += x.fragmentHint.duration),
                  (x.totalduration = U),
                  (x.endCC = N),
                  Y > 0 && r(I, Y),
                  x
                );
              }),
              e
            );
          })();
          function v(e, s) {
            ["video", "audio", "text"].forEach(function (u) {
              var a = e.filter(function (c) {
                return Object(S.isCodecType)(c, u);
              });
              if (a.length) {
                var f = a.filter(function (c) {
                  return (
                    c.lastIndexOf("avc1", 0) === 0 ||
                    c.lastIndexOf("mp4a", 0) === 0
                  );
                });
                (s[u + "Codec"] = f.length > 0 ? f[0] : a[0]),
                  (e = e.filter(function (c) {
                    return a.indexOf(c) === -1;
                  }));
              }
            }),
              (s.unknownCodecs = e);
          }
          function i(e, s, u) {
            var a = s[u];
            a && (e[u] = a);
          }
          function r(e, s) {
            for (var u = e[s], a = s; a--; ) {
              var f = e[a];
              if (!f) return;
              (f.programDateTime = u.programDateTime - f.duration * 1e3),
                (u = f);
            }
          }
          function o(e, s) {
            e.rawProgramDateTime
              ? (e.programDateTime = Date.parse(e.rawProgramDateTime))
              : s != null &&
                s.programDateTime &&
                (e.programDateTime = s.endProgramDateTime),
              Object(M.isFiniteNumber)(e.programDateTime) ||
                ((e.programDateTime = null), (e.rawProgramDateTime = null));
          }
          function d(e, s, u, a) {
            (e.relurl = s.URI),
              s.BYTERANGE && e.setByteRange(s.BYTERANGE),
              (e.level = u),
              (e.sn = "initSegment"),
              a && (e.levelkey = a),
              (e.initSegment = null);
          }
        },
        "./src/loader/playlist-loader.ts": function (W, C, T) {
          "use strict";
          T.r(C);
          var M = T("./src/polyfills/number.ts"),
            O = T("./src/events.ts"),
            L = T("./src/errors.ts"),
            b = T("./src/utils/logger.ts"),
            P = T("./src/utils/mp4-tools.ts"),
            R = T("./src/loader/m3u8-parser.ts"),
            A = T("./src/types/loader.ts"),
            p = T("./src/utils/attr-list.ts");
          function y(g) {
            var m = g.type;
            switch (m) {
              case A.PlaylistContextType.AUDIO_TRACK:
                return A.PlaylistLevelType.AUDIO;
              case A.PlaylistContextType.SUBTITLE_TRACK:
                return A.PlaylistLevelType.SUBTITLE;
              default:
                return A.PlaylistLevelType.MAIN;
            }
          }
          function S(g, m) {
            var l = g.url;
            return (l === void 0 || l.indexOf("data:") === 0) && (l = m.url), l;
          }
          var E = (function () {
            function g(l) {
              (this.hls = void 0),
                (this.loaders = Object.create(null)),
                (this.hls = l),
                this.registerListeners();
            }
            var m = g.prototype;
            return (
              (m.startLoad = function (t) {}),
              (m.stopLoad = function () {
                this.destroyInternalLoaders();
              }),
              (m.registerListeners = function () {
                var t = this.hls;
                t.on(O.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                  t.on(O.Events.LEVEL_LOADING, this.onLevelLoading, this),
                  t.on(
                    O.Events.AUDIO_TRACK_LOADING,
                    this.onAudioTrackLoading,
                    this
                  ),
                  t.on(
                    O.Events.SUBTITLE_TRACK_LOADING,
                    this.onSubtitleTrackLoading,
                    this
                  );
              }),
              (m.unregisterListeners = function () {
                var t = this.hls;
                t.off(O.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                  t.off(O.Events.LEVEL_LOADING, this.onLevelLoading, this),
                  t.off(
                    O.Events.AUDIO_TRACK_LOADING,
                    this.onAudioTrackLoading,
                    this
                  ),
                  t.off(
                    O.Events.SUBTITLE_TRACK_LOADING,
                    this.onSubtitleTrackLoading,
                    this
                  );
              }),
              (m.createInternalLoader = function (t) {
                var n = this.hls.config,
                  h = n.pLoader,
                  v = n.loader,
                  i = h || v,
                  r = new i(n);
                return (t.loader = r), (this.loaders[t.type] = r), r;
              }),
              (m.getInternalLoader = function (t) {
                return this.loaders[t.type];
              }),
              (m.resetInternalLoader = function (t) {
                this.loaders[t] && delete this.loaders[t];
              }),
              (m.destroyInternalLoaders = function () {
                for (var t in this.loaders) {
                  var n = this.loaders[t];
                  n && n.destroy(), this.resetInternalLoader(t);
                }
              }),
              (m.destroy = function () {
                this.unregisterListeners(), this.destroyInternalLoaders();
              }),
              (m.onManifestLoading = function (t, n) {
                var h = n.url;
                this.load({
                  id: null,
                  groupId: null,
                  level: 0,
                  responseType: "text",
                  type: A.PlaylistContextType.MANIFEST,
                  url: h,
                  deliveryDirectives: null,
                });
              }),
              (m.onLevelLoading = function (t, n) {
                var h = n.id,
                  v = n.level,
                  i = n.url,
                  r = n.deliveryDirectives;
                this.load({
                  id: h,
                  groupId: null,
                  level: v,
                  responseType: "text",
                  type: A.PlaylistContextType.LEVEL,
                  url: i,
                  deliveryDirectives: r,
                });
              }),
              (m.onAudioTrackLoading = function (t, n) {
                var h = n.id,
                  v = n.groupId,
                  i = n.url,
                  r = n.deliveryDirectives;
                this.load({
                  id: h,
                  groupId: v,
                  level: null,
                  responseType: "text",
                  type: A.PlaylistContextType.AUDIO_TRACK,
                  url: i,
                  deliveryDirectives: r,
                });
              }),
              (m.onSubtitleTrackLoading = function (t, n) {
                var h = n.id,
                  v = n.groupId,
                  i = n.url,
                  r = n.deliveryDirectives;
                this.load({
                  id: h,
                  groupId: v,
                  level: null,
                  responseType: "text",
                  type: A.PlaylistContextType.SUBTITLE_TRACK,
                  url: i,
                  deliveryDirectives: r,
                });
              }),
              (m.load = function (t) {
                var n,
                  h = this.hls.config,
                  v = this.getInternalLoader(t);
                if (v) {
                  var i = v.context;
                  if (i && i.url === t.url) {
                    b.logger.trace(
                      "[playlist-loader]: playlist request ongoing"
                    );
                    return;
                  }
                  b.logger.log(
                    "[playlist-loader]: aborting previous loader for type: " +
                      t.type
                  ),
                    v.abort();
                }
                var r, o, d, e;
                switch (t.type) {
                  case A.PlaylistContextType.MANIFEST:
                    (r = h.manifestLoadingMaxRetry),
                      (o = h.manifestLoadingTimeOut),
                      (d = h.manifestLoadingRetryDelay),
                      (e = h.manifestLoadingMaxRetryTimeout);
                    break;
                  case A.PlaylistContextType.LEVEL:
                  case A.PlaylistContextType.AUDIO_TRACK:
                  case A.PlaylistContextType.SUBTITLE_TRACK:
                    (r = 0), (o = h.levelLoadingTimeOut);
                    break;
                  default:
                    (r = h.levelLoadingMaxRetry),
                      (o = h.levelLoadingTimeOut),
                      (d = h.levelLoadingRetryDelay),
                      (e = h.levelLoadingMaxRetryTimeout);
                    break;
                }
                if (
                  ((v = this.createInternalLoader(t)),
                  (n = t.deliveryDirectives) !== null && n !== void 0 && n.part)
                ) {
                  var s;
                  if (
                    (t.type === A.PlaylistContextType.LEVEL && t.level !== null
                      ? (s = this.hls.levels[t.level].details)
                      : t.type === A.PlaylistContextType.AUDIO_TRACK &&
                        t.id !== null
                      ? (s = this.hls.audioTracks[t.id].details)
                      : t.type === A.PlaylistContextType.SUBTITLE_TRACK &&
                        t.id !== null &&
                        (s = this.hls.subtitleTracks[t.id].details),
                    s)
                  ) {
                    var u = s.partTarget,
                      a = s.targetduration;
                    u && a && (o = Math.min(Math.max(u * 3, a * 0.8) * 1e3, o));
                  }
                }
                var f = {
                    timeout: o,
                    maxRetry: r,
                    retryDelay: d,
                    maxRetryDelay: e,
                    highWaterMark: 0,
                  },
                  c = {
                    onSuccess: this.loadsuccess.bind(this),
                    onError: this.loaderror.bind(this),
                    onTimeout: this.loadtimeout.bind(this),
                  };
                v.load(t, f, c);
              }),
              (m.loadsuccess = function (t, n, h, v) {
                if ((v === void 0 && (v = null), h.isSidxRequest)) {
                  this.handleSidxRequest(t, h),
                    this.handlePlaylistLoaded(t, n, h, v);
                  return;
                }
                this.resetInternalLoader(h.type);
                var i = t.data;
                if (i.indexOf("#EXTM3U") !== 0) {
                  this.handleManifestParsingError(
                    t,
                    h,
                    "no EXTM3U delimiter",
                    v
                  );
                  return;
                }
                (n.parsing.start = performance.now()),
                  i.indexOf("#EXTINF:") > 0 ||
                  i.indexOf("#EXT-X-TARGETDURATION:") > 0
                    ? this.handleTrackOrLevelPlaylist(t, n, h, v)
                    : this.handleMasterPlaylist(t, n, h, v);
              }),
              (m.loaderror = function (t, n, h) {
                h === void 0 && (h = null),
                  this.handleNetworkError(n, h, !1, t);
              }),
              (m.loadtimeout = function (t, n, h) {
                h === void 0 && (h = null), this.handleNetworkError(n, h, !0);
              }),
              (m.handleMasterPlaylist = function (t, n, h, v) {
                var i = this.hls,
                  r = t.data,
                  o = S(t, h),
                  d = R.default.parseMasterPlaylist(r, o),
                  e = d.levels,
                  s = d.sessionData;
                if (!e.length) {
                  this.handleManifestParsingError(
                    t,
                    h,
                    "no level found in manifest",
                    v
                  );
                  return;
                }
                var u = e.map(function (I) {
                    return { id: I.attrs.AUDIO, audioCodec: I.audioCodec };
                  }),
                  a = e.map(function (I) {
                    return { id: I.attrs.SUBTITLES, textCodec: I.textCodec };
                  }),
                  f = R.default.parseMasterPlaylistMedia(r, o, "AUDIO", u),
                  c = R.default.parseMasterPlaylistMedia(r, o, "SUBTITLES", a),
                  D = R.default.parseMasterPlaylistMedia(
                    r,
                    o,
                    "CLOSED-CAPTIONS"
                  );
                if (f.length) {
                  var x = f.some(function (I) {
                    return !I.url;
                  });
                  !x &&
                    e[0].audioCodec &&
                    !e[0].attrs.AUDIO &&
                    (b.logger.log(
                      "[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"
                    ),
                    f.unshift({
                      type: "main",
                      name: "main",
                      default: !1,
                      autoselect: !1,
                      forced: !1,
                      id: -1,
                      attrs: new p.AttrList({}),
                      bitrate: 0,
                      url: "",
                    }));
                }
                i.trigger(O.Events.MANIFEST_LOADED, {
                  levels: e,
                  audioTracks: f,
                  subtitles: c,
                  captions: D,
                  url: o,
                  stats: n,
                  networkDetails: v,
                  sessionData: s,
                });
              }),
              (m.handleTrackOrLevelPlaylist = function (t, n, h, v) {
                var i = this.hls,
                  r = h.id,
                  o = h.level,
                  d = h.type,
                  e = S(t, h),
                  s = Object(M.isFiniteNumber)(r) ? r : 0,
                  u = Object(M.isFiniteNumber)(o) ? o : s,
                  a = y(h),
                  f = R.default.parseLevelPlaylist(t.data, e, u, a, s);
                if (!f.fragments.length) {
                  i.trigger(O.Events.ERROR, {
                    type: L.ErrorTypes.NETWORK_ERROR,
                    details: L.ErrorDetails.LEVEL_EMPTY_ERROR,
                    fatal: !1,
                    url: e,
                    reason: "no fragments found in level",
                    level: typeof h.level == "number" ? h.level : void 0,
                  });
                  return;
                }
                if (d === A.PlaylistContextType.MANIFEST) {
                  var c = {
                    attrs: new p.AttrList({}),
                    bitrate: 0,
                    details: f,
                    name: "",
                    url: e,
                  };
                  i.trigger(O.Events.MANIFEST_LOADED, {
                    levels: [c],
                    audioTracks: [],
                    url: e,
                    stats: n,
                    networkDetails: v,
                    sessionData: null,
                  });
                }
                if (((n.parsing.end = performance.now()), f.needSidxRanges)) {
                  var D,
                    x =
                      (D = f.fragments[0].initSegment) === null || D === void 0
                        ? void 0
                        : D.url;
                  this.load({
                    url: x,
                    isSidxRequest: !0,
                    type: d,
                    level: o,
                    levelDetails: f,
                    id: r,
                    groupId: null,
                    rangeStart: 0,
                    rangeEnd: 2048,
                    responseType: "arraybuffer",
                    deliveryDirectives: null,
                  });
                  return;
                }
                (h.levelDetails = f), this.handlePlaylistLoaded(t, n, h, v);
              }),
              (m.handleSidxRequest = function (t, n) {
                var h = new Uint8Array(t.data),
                  v = Object(P.findBox)(h, ["sidx"])[0];
                if (!!v) {
                  var i = Object(P.parseSegmentIndex)(v);
                  if (!!i) {
                    var r = i.references,
                      o = n.levelDetails;
                    r.forEach(function (d, e) {
                      var s = d.info,
                        u = o.fragments[e];
                      if (
                        (u.byteRange.length === 0 &&
                          u.setByteRange(
                            String(1 + s.end - s.start) + "@" + String(s.start)
                          ),
                        u.initSegment)
                      ) {
                        var a = Object(P.findBox)(h, ["moov"])[0],
                          f = a ? a.length : null;
                        u.initSegment.setByteRange(String(f) + "@0");
                      }
                    });
                  }
                }
              }),
              (m.handleManifestParsingError = function (t, n, h, v) {
                this.hls.trigger(O.Events.ERROR, {
                  type: L.ErrorTypes.NETWORK_ERROR,
                  details: L.ErrorDetails.MANIFEST_PARSING_ERROR,
                  fatal: n.type === A.PlaylistContextType.MANIFEST,
                  url: t.url,
                  reason: h,
                  response: t,
                  context: n,
                  networkDetails: v,
                });
              }),
              (m.handleNetworkError = function (t, n, h, v) {
                h === void 0 && (h = !1),
                  b.logger.warn(
                    "[playlist-loader]: A network " +
                      (h ? "timeout" : "error") +
                      " occurred while loading " +
                      t.type +
                      " level: " +
                      t.level +
                      " id: " +
                      t.id +
                      ' group-id: "' +
                      t.groupId +
                      '"'
                  );
                var i = L.ErrorDetails.UNKNOWN,
                  r = !1,
                  o = this.getInternalLoader(t);
                switch (t.type) {
                  case A.PlaylistContextType.MANIFEST:
                    (i = h
                      ? L.ErrorDetails.MANIFEST_LOAD_TIMEOUT
                      : L.ErrorDetails.MANIFEST_LOAD_ERROR),
                      (r = !0);
                    break;
                  case A.PlaylistContextType.LEVEL:
                    (i = h
                      ? L.ErrorDetails.LEVEL_LOAD_TIMEOUT
                      : L.ErrorDetails.LEVEL_LOAD_ERROR),
                      (r = !1);
                    break;
                  case A.PlaylistContextType.AUDIO_TRACK:
                    (i = h
                      ? L.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT
                      : L.ErrorDetails.AUDIO_TRACK_LOAD_ERROR),
                      (r = !1);
                    break;
                  case A.PlaylistContextType.SUBTITLE_TRACK:
                    (i = h
                      ? L.ErrorDetails.SUBTITLE_TRACK_LOAD_TIMEOUT
                      : L.ErrorDetails.SUBTITLE_LOAD_ERROR),
                      (r = !1);
                    break;
                }
                o && this.resetInternalLoader(t.type);
                var d = {
                  type: L.ErrorTypes.NETWORK_ERROR,
                  details: i,
                  fatal: r,
                  url: t.url,
                  loader: o,
                  context: t,
                  networkDetails: n,
                };
                v && (d.response = v), this.hls.trigger(O.Events.ERROR, d);
              }),
              (m.handlePlaylistLoaded = function (t, n, h, v) {
                var i = h.type,
                  r = h.level,
                  o = h.id,
                  d = h.groupId,
                  e = h.loader,
                  s = h.levelDetails,
                  u = h.deliveryDirectives;
                if (!(s != null && s.targetduration)) {
                  this.handleManifestParsingError(
                    t,
                    h,
                    "invalid target duration",
                    v
                  );
                  return;
                }
                if (!!e)
                  switch (
                    (s.live &&
                      (e.getCacheAge && (s.ageHeader = e.getCacheAge() || 0),
                      (!e.getCacheAge || isNaN(s.ageHeader)) &&
                        (s.ageHeader = 0)),
                    i)
                  ) {
                    case A.PlaylistContextType.MANIFEST:
                    case A.PlaylistContextType.LEVEL:
                      this.hls.trigger(O.Events.LEVEL_LOADED, {
                        details: s,
                        level: r || 0,
                        id: o || 0,
                        stats: n,
                        networkDetails: v,
                        deliveryDirectives: u,
                      });
                      break;
                    case A.PlaylistContextType.AUDIO_TRACK:
                      this.hls.trigger(O.Events.AUDIO_TRACK_LOADED, {
                        details: s,
                        id: o || 0,
                        groupId: d || "",
                        stats: n,
                        networkDetails: v,
                        deliveryDirectives: u,
                      });
                      break;
                    case A.PlaylistContextType.SUBTITLE_TRACK:
                      this.hls.trigger(O.Events.SUBTITLE_TRACK_LOADED, {
                        details: s,
                        id: o || 0,
                        groupId: d || "",
                        stats: n,
                        networkDetails: v,
                        deliveryDirectives: u,
                      });
                      break;
                  }
              }),
              g
            );
          })();
          C.default = E;
        },
        "./src/polyfills/number.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "isFiniteNumber", function () {
              return M;
            }),
            T.d(C, "MAX_SAFE_INTEGER", function () {
              return O;
            });
          var M =
              Number.isFinite ||
              function (L) {
                return typeof L == "number" && isFinite(L);
              },
            O = Number.MAX_SAFE_INTEGER || 9007199254740991;
        },
        "./src/remux/aac-helper.ts": function (W, C, T) {
          "use strict";
          T.r(C);
          var M = (function () {
            function O() {}
            return (
              (O.getSilentFrame = function (b, P) {
                switch (b) {
                  case "mp4a.40.2":
                    if (P === 1)
                      return new Uint8Array([0, 200, 0, 128, 35, 128]);
                    if (P === 2)
                      return new Uint8Array([
                        33, 0, 73, 144, 2, 25, 0, 35, 128,
                      ]);
                    if (P === 3)
                      return new Uint8Array([
                        0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142,
                      ]);
                    if (P === 4)
                      return new Uint8Array([
                        0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44,
                        128, 8, 2, 56,
                      ]);
                    if (P === 5)
                      return new Uint8Array([
                        0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48,
                        4, 153, 0, 33, 144, 2, 56,
                      ]);
                    if (P === 6)
                      return new Uint8Array([
                        0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48,
                        4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224,
                      ]);
                    break;
                  default:
                    if (P === 1)
                      return new Uint8Array([
                        1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28,
                        6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                        90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                        90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                        90, 90, 94,
                      ]);
                    if (P === 2)
                      return new Uint8Array([
                        1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0,
                        149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90,
                        90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                        90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                        90, 90, 94,
                      ]);
                    if (P === 3)
                      return new Uint8Array([
                        1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0,
                        149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90,
                        90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                        90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                        90, 90, 94,
                      ]);
                    break;
                }
              }),
              O
            );
          })();
          C.default = M;
        },
        "./src/remux/mp4-generator.ts": function (W, C, T) {
          "use strict";
          T.r(C);
          var M = Math.pow(2, 32) - 1,
            O = (function () {
              function L() {}
              return (
                (L.init = function () {
                  L.types = {
                    avc1: [],
                    avcC: [],
                    btrt: [],
                    dinf: [],
                    dref: [],
                    esds: [],
                    ftyp: [],
                    hdlr: [],
                    mdat: [],
                    mdhd: [],
                    mdia: [],
                    mfhd: [],
                    minf: [],
                    moof: [],
                    moov: [],
                    mp4a: [],
                    ".mp3": [],
                    mvex: [],
                    mvhd: [],
                    pasp: [],
                    sdtp: [],
                    stbl: [],
                    stco: [],
                    stsc: [],
                    stsd: [],
                    stsz: [],
                    stts: [],
                    tfdt: [],
                    tfhd: [],
                    traf: [],
                    trak: [],
                    trun: [],
                    trex: [],
                    tkhd: [],
                    vmhd: [],
                    smhd: [],
                  };
                  var P;
                  for (P in L.types)
                    L.types.hasOwnProperty(P) &&
                      (L.types[P] = [
                        P.charCodeAt(0),
                        P.charCodeAt(1),
                        P.charCodeAt(2),
                        P.charCodeAt(3),
                      ]);
                  var R = new Uint8Array([
                      0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110,
                      100, 108, 101, 114, 0,
                    ]),
                    A = new Uint8Array([
                      0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110,
                      100, 108, 101, 114, 0,
                    ]);
                  L.HDLR_TYPES = { video: R, audio: A };
                  var p = new Uint8Array([
                      0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0,
                      0, 0, 1,
                    ]),
                    y = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                  (L.STTS = L.STSC = L.STCO = y),
                    (L.STSZ = new Uint8Array([
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    ])),
                    (L.VMHD = new Uint8Array([
                      0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
                    ])),
                    (L.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
                    (L.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]));
                  var S = new Uint8Array([105, 115, 111, 109]),
                    E = new Uint8Array([97, 118, 99, 49]),
                    g = new Uint8Array([0, 0, 0, 1]);
                  (L.FTYP = L.box(L.types.ftyp, S, g, S, E)),
                    (L.DINF = L.box(L.types.dinf, L.box(L.types.dref, p)));
                }),
                (L.box = function (P) {
                  for (
                    var R = 8,
                      A = arguments.length,
                      p = new Array(A > 1 ? A - 1 : 0),
                      y = 1;
                    y < A;
                    y++
                  )
                    p[y - 1] = arguments[y];
                  for (var S = p.length, E = S; S--; ) R += p[S].byteLength;
                  var g = new Uint8Array(R);
                  for (
                    g[0] = (R >> 24) & 255,
                      g[1] = (R >> 16) & 255,
                      g[2] = (R >> 8) & 255,
                      g[3] = R & 255,
                      g.set(P, 4),
                      S = 0,
                      R = 8;
                    S < E;
                    S++
                  )
                    g.set(p[S], R), (R += p[S].byteLength);
                  return g;
                }),
                (L.hdlr = function (P) {
                  return L.box(L.types.hdlr, L.HDLR_TYPES[P]);
                }),
                (L.mdat = function (P) {
                  return L.box(L.types.mdat, P);
                }),
                (L.mdhd = function (P, R) {
                  R *= P;
                  var A = Math.floor(R / (M + 1)),
                    p = Math.floor(R % (M + 1));
                  return L.box(
                    L.types.mdhd,
                    new Uint8Array([
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      2,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      3,
                      (P >> 24) & 255,
                      (P >> 16) & 255,
                      (P >> 8) & 255,
                      P & 255,
                      A >> 24,
                      (A >> 16) & 255,
                      (A >> 8) & 255,
                      A & 255,
                      p >> 24,
                      (p >> 16) & 255,
                      (p >> 8) & 255,
                      p & 255,
                      85,
                      196,
                      0,
                      0,
                    ])
                  );
                }),
                (L.mdia = function (P) {
                  return L.box(
                    L.types.mdia,
                    L.mdhd(P.timescale, P.duration),
                    L.hdlr(P.type),
                    L.minf(P)
                  );
                }),
                (L.mfhd = function (P) {
                  return L.box(
                    L.types.mfhd,
                    new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      P >> 24,
                      (P >> 16) & 255,
                      (P >> 8) & 255,
                      P & 255,
                    ])
                  );
                }),
                (L.minf = function (P) {
                  return P.type === "audio"
                    ? L.box(
                        L.types.minf,
                        L.box(L.types.smhd, L.SMHD),
                        L.DINF,
                        L.stbl(P)
                      )
                    : L.box(
                        L.types.minf,
                        L.box(L.types.vmhd, L.VMHD),
                        L.DINF,
                        L.stbl(P)
                      );
                }),
                (L.moof = function (P, R, A) {
                  return L.box(L.types.moof, L.mfhd(P), L.traf(A, R));
                }),
                (L.moov = function (P) {
                  for (var R = P.length, A = []; R--; ) A[R] = L.trak(P[R]);
                  return L.box.apply(
                    null,
                    [L.types.moov, L.mvhd(P[0].timescale, P[0].duration)]
                      .concat(A)
                      .concat(L.mvex(P))
                  );
                }),
                (L.mvex = function (P) {
                  for (var R = P.length, A = []; R--; ) A[R] = L.trex(P[R]);
                  return L.box.apply(null, [L.types.mvex].concat(A));
                }),
                (L.mvhd = function (P, R) {
                  R *= P;
                  var A = Math.floor(R / (M + 1)),
                    p = Math.floor(R % (M + 1)),
                    y = new Uint8Array([
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      2,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      3,
                      (P >> 24) & 255,
                      (P >> 16) & 255,
                      (P >> 8) & 255,
                      P & 255,
                      A >> 24,
                      (A >> 16) & 255,
                      (A >> 8) & 255,
                      A & 255,
                      p >> 24,
                      (p >> 16) & 255,
                      (p >> 8) & 255,
                      p & 255,
                      0,
                      1,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      64,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      255,
                      255,
                      255,
                      255,
                    ]);
                  return L.box(L.types.mvhd, y);
                }),
                (L.sdtp = function (P) {
                  var R = P.samples || [],
                    A = new Uint8Array(4 + R.length),
                    p,
                    y;
                  for (p = 0; p < R.length; p++)
                    (y = R[p].flags),
                      (A[p + 4] =
                        (y.dependsOn << 4) |
                        (y.isDependedOn << 2) |
                        y.hasRedundancy);
                  return L.box(L.types.sdtp, A);
                }),
                (L.stbl = function (P) {
                  return L.box(
                    L.types.stbl,
                    L.stsd(P),
                    L.box(L.types.stts, L.STTS),
                    L.box(L.types.stsc, L.STSC),
                    L.box(L.types.stsz, L.STSZ),
                    L.box(L.types.stco, L.STCO)
                  );
                }),
                (L.avc1 = function (P) {
                  var R = [],
                    A = [],
                    p,
                    y,
                    S;
                  for (p = 0; p < P.sps.length; p++)
                    (y = P.sps[p]),
                      (S = y.byteLength),
                      R.push((S >>> 8) & 255),
                      R.push(S & 255),
                      (R = R.concat(Array.prototype.slice.call(y)));
                  for (p = 0; p < P.pps.length; p++)
                    (y = P.pps[p]),
                      (S = y.byteLength),
                      A.push((S >>> 8) & 255),
                      A.push(S & 255),
                      (A = A.concat(Array.prototype.slice.call(y)));
                  var E = L.box(
                      L.types.avcC,
                      new Uint8Array(
                        [1, R[3], R[4], R[5], 255, 224 | P.sps.length]
                          .concat(R)
                          .concat([P.pps.length])
                          .concat(A)
                      )
                    ),
                    g = P.width,
                    m = P.height,
                    l = P.pixelRatio[0],
                    t = P.pixelRatio[1];
                  return L.box(
                    L.types.avc1,
                    new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      (g >> 8) & 255,
                      g & 255,
                      (m >> 8) & 255,
                      m & 255,
                      0,
                      72,
                      0,
                      0,
                      0,
                      72,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      18,
                      100,
                      97,
                      105,
                      108,
                      121,
                      109,
                      111,
                      116,
                      105,
                      111,
                      110,
                      47,
                      104,
                      108,
                      115,
                      46,
                      106,
                      115,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      24,
                      17,
                      17,
                    ]),
                    E,
                    L.box(
                      L.types.btrt,
                      new Uint8Array([
                        0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192,
                      ])
                    ),
                    L.box(
                      L.types.pasp,
                      new Uint8Array([
                        l >> 24,
                        (l >> 16) & 255,
                        (l >> 8) & 255,
                        l & 255,
                        t >> 24,
                        (t >> 16) & 255,
                        (t >> 8) & 255,
                        t & 255,
                      ])
                    )
                  );
                }),
                (L.esds = function (P) {
                  var R = P.config.length;
                  return new Uint8Array(
                    [
                      0,
                      0,
                      0,
                      0,
                      3,
                      23 + R,
                      0,
                      1,
                      0,
                      4,
                      15 + R,
                      64,
                      21,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      5,
                    ]
                      .concat([R])
                      .concat(P.config)
                      .concat([6, 1, 2])
                  );
                }),
                (L.mp4a = function (P) {
                  var R = P.samplerate;
                  return L.box(
                    L.types.mp4a,
                    new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      P.channelCount,
                      0,
                      16,
                      0,
                      0,
                      0,
                      0,
                      (R >> 8) & 255,
                      R & 255,
                      0,
                      0,
                    ]),
                    L.box(L.types.esds, L.esds(P))
                  );
                }),
                (L.mp3 = function (P) {
                  var R = P.samplerate;
                  return L.box(
                    L.types[".mp3"],
                    new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      P.channelCount,
                      0,
                      16,
                      0,
                      0,
                      0,
                      0,
                      (R >> 8) & 255,
                      R & 255,
                      0,
                      0,
                    ])
                  );
                }),
                (L.stsd = function (P) {
                  return P.type === "audio"
                    ? P.segmentCodec === "mp3" && P.codec === "mp3"
                      ? L.box(L.types.stsd, L.STSD, L.mp3(P))
                      : L.box(L.types.stsd, L.STSD, L.mp4a(P))
                    : L.box(L.types.stsd, L.STSD, L.avc1(P));
                }),
                (L.tkhd = function (P) {
                  var R = P.id,
                    A = P.duration * P.timescale,
                    p = P.width,
                    y = P.height,
                    S = Math.floor(A / (M + 1)),
                    E = Math.floor(A % (M + 1));
                  return L.box(
                    L.types.tkhd,
                    new Uint8Array([
                      1,
                      0,
                      0,
                      7,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      2,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      3,
                      (R >> 24) & 255,
                      (R >> 16) & 255,
                      (R >> 8) & 255,
                      R & 255,
                      0,
                      0,
                      0,
                      0,
                      S >> 24,
                      (S >> 16) & 255,
                      (S >> 8) & 255,
                      S & 255,
                      E >> 24,
                      (E >> 16) & 255,
                      (E >> 8) & 255,
                      E & 255,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      64,
                      0,
                      0,
                      0,
                      (p >> 8) & 255,
                      p & 255,
                      0,
                      0,
                      (y >> 8) & 255,
                      y & 255,
                      0,
                      0,
                    ])
                  );
                }),
                (L.traf = function (P, R) {
                  var A = L.sdtp(P),
                    p = P.id,
                    y = Math.floor(R / (M + 1)),
                    S = Math.floor(R % (M + 1));
                  return L.box(
                    L.types.traf,
                    L.box(
                      L.types.tfhd,
                      new Uint8Array([
                        0,
                        0,
                        0,
                        0,
                        p >> 24,
                        (p >> 16) & 255,
                        (p >> 8) & 255,
                        p & 255,
                      ])
                    ),
                    L.box(
                      L.types.tfdt,
                      new Uint8Array([
                        1,
                        0,
                        0,
                        0,
                        y >> 24,
                        (y >> 16) & 255,
                        (y >> 8) & 255,
                        y & 255,
                        S >> 24,
                        (S >> 16) & 255,
                        (S >> 8) & 255,
                        S & 255,
                      ])
                    ),
                    L.trun(P, A.length + 16 + 20 + 8 + 16 + 8 + 8),
                    A
                  );
                }),
                (L.trak = function (P) {
                  return (
                    (P.duration = P.duration || 4294967295),
                    L.box(L.types.trak, L.tkhd(P), L.mdia(P))
                  );
                }),
                (L.trex = function (P) {
                  var R = P.id;
                  return L.box(
                    L.types.trex,
                    new Uint8Array([
                      0,
                      0,
                      0,
                      0,
                      R >> 24,
                      (R >> 16) & 255,
                      (R >> 8) & 255,
                      R & 255,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      1,
                    ])
                  );
                }),
                (L.trun = function (P, R) {
                  var A = P.samples || [],
                    p = A.length,
                    y = 12 + 16 * p,
                    S = new Uint8Array(y),
                    E,
                    g,
                    m,
                    l,
                    t,
                    n;
                  for (
                    R += 8 + y,
                      S.set(
                        [
                          P.type === "video" ? 1 : 0,
                          0,
                          15,
                          1,
                          (p >>> 24) & 255,
                          (p >>> 16) & 255,
                          (p >>> 8) & 255,
                          p & 255,
                          (R >>> 24) & 255,
                          (R >>> 16) & 255,
                          (R >>> 8) & 255,
                          R & 255,
                        ],
                        0
                      ),
                      E = 0;
                    E < p;
                    E++
                  )
                    (g = A[E]),
                      (m = g.duration),
                      (l = g.size),
                      (t = g.flags),
                      (n = g.cts),
                      S.set(
                        [
                          (m >>> 24) & 255,
                          (m >>> 16) & 255,
                          (m >>> 8) & 255,
                          m & 255,
                          (l >>> 24) & 255,
                          (l >>> 16) & 255,
                          (l >>> 8) & 255,
                          l & 255,
                          (t.isLeading << 2) | t.dependsOn,
                          (t.isDependedOn << 6) |
                            (t.hasRedundancy << 4) |
                            (t.paddingValue << 1) |
                            t.isNonSync,
                          t.degradPrio & (240 << 8),
                          t.degradPrio & 15,
                          (n >>> 24) & 255,
                          (n >>> 16) & 255,
                          (n >>> 8) & 255,
                          n & 255,
                        ],
                        12 + 16 * E
                      );
                  return L.box(L.types.trun, S);
                }),
                (L.initSegment = function (P) {
                  L.types || L.init();
                  var R = L.moov(P),
                    A = new Uint8Array(L.FTYP.byteLength + R.byteLength);
                  return A.set(L.FTYP), A.set(R, L.FTYP.byteLength), A;
                }),
                L
              );
            })();
          (O.types = void 0),
            (O.HDLR_TYPES = void 0),
            (O.STTS = void 0),
            (O.STSC = void 0),
            (O.STCO = void 0),
            (O.STSZ = void 0),
            (O.VMHD = void 0),
            (O.SMHD = void 0),
            (O.STSD = void 0),
            (O.FTYP = void 0),
            (O.DINF = void 0),
            (C.default = O);
        },
        "./src/remux/mp4-remuxer.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "default", function () {
              return t;
            }),
            T.d(C, "normalizePts", function () {
              return n;
            }),
            T.d(C, "flushTextTrackMetadataCueSamples", function () {
              return v;
            }),
            T.d(C, "flushTextTrackUserdataCueSamples", function () {
              return i;
            });
          var M = T("./src/polyfills/number.ts"),
            O = T("./src/remux/aac-helper.ts"),
            L = T("./src/remux/mp4-generator.ts"),
            b = T("./src/events.ts"),
            P = T("./src/errors.ts"),
            R = T("./src/utils/logger.ts"),
            A = T("./src/types/loader.ts"),
            p = T("./src/utils/timescale-conversion.ts");
          function y() {
            return (
              (y = Object.assign
                ? Object.assign.bind()
                : function (d) {
                    for (var e = 1; e < arguments.length; e++) {
                      var s = arguments[e];
                      for (var u in s)
                        Object.prototype.hasOwnProperty.call(s, u) &&
                          (d[u] = s[u]);
                    }
                    return d;
                  }),
              y.apply(this, arguments)
            );
          }
          var S = 10 * 1e3,
            E = 1024,
            g = 1152,
            m = null,
            l = null,
            t = (function () {
              function d(s, u, a, f) {
                if (
                  (f === void 0 && (f = ""),
                  (this.observer = void 0),
                  (this.config = void 0),
                  (this.typeSupported = void 0),
                  (this.ISGenerated = !1),
                  (this._initPTS = void 0),
                  (this._initDTS = void 0),
                  (this.nextAvcDts = null),
                  (this.nextAudioPts = null),
                  (this.videoSampleDuration = null),
                  (this.isAudioContiguous = !1),
                  (this.isVideoContiguous = !1),
                  (this.observer = s),
                  (this.config = u),
                  (this.typeSupported = a),
                  (this.ISGenerated = !1),
                  m === null)
                ) {
                  var c = navigator.userAgent || "",
                    D = c.match(/Chrome\/(\d+)/i);
                  m = D ? parseInt(D[1]) : 0;
                }
                if (l === null) {
                  var x = navigator.userAgent.match(/Safari\/(\d+)/i);
                  l = x ? parseInt(x[1]) : 0;
                }
              }
              var e = d.prototype;
              return (
                (e.destroy = function () {}),
                (e.resetTimeStamp = function (u) {
                  R.logger.log("[mp4-remuxer]: initPTS & initDTS reset"),
                    (this._initPTS = this._initDTS = u);
                }),
                (e.resetNextTimestamp = function () {
                  R.logger.log("[mp4-remuxer]: reset next timestamp"),
                    (this.isVideoContiguous = !1),
                    (this.isAudioContiguous = !1);
                }),
                (e.resetInitSegment = function () {
                  R.logger.log("[mp4-remuxer]: ISGenerated flag reset"),
                    (this.ISGenerated = !1);
                }),
                (e.getVideoStartPts = function (u) {
                  var a = !1,
                    f = u.reduce(function (c, D) {
                      var x = D.pts - c;
                      return x < -4294967296
                        ? ((a = !0), n(c, D.pts))
                        : x > 0
                        ? c
                        : D.pts;
                    }, u[0].pts);
                  return a && R.logger.debug("PTS rollover detected"), f;
                }),
                (e.remux = function (u, a, f, c, D, x, I, F) {
                  var _,
                    B,
                    U,
                    N,
                    w,
                    k,
                    K = D,
                    j = D,
                    G = u.pid > -1,
                    Y = a.pid > -1,
                    X = a.samples.length,
                    z = u.samples.length > 0,
                    H = (I && X > 0) || X > 1,
                    Q = ((!G || z) && (!Y || H)) || this.ISGenerated || I;
                  if (Q) {
                    this.ISGenerated || (U = this.generateIS(u, a, D));
                    var $ = this.isVideoContiguous,
                      V = -1,
                      J;
                    if (
                      H &&
                      ((V = h(a.samples)),
                      !$ && this.config.forceKeyFrameOnDiscontinuity)
                    )
                      if (((k = !0), V > 0)) {
                        R.logger.warn(
                          "[mp4-remuxer]: Dropped " +
                            V +
                            " out of " +
                            X +
                            " video samples due to a missing keyframe"
                        );
                        var Z = this.getVideoStartPts(a.samples);
                        (a.samples = a.samples.slice(V)),
                          (a.dropped += V),
                          (j += (a.samples[0].pts - Z) / a.inputTimeScale),
                          (J = j);
                      } else
                        V === -1 &&
                          (R.logger.warn(
                            "[mp4-remuxer]: No keyframe found out of " +
                              X +
                              " video samples"
                          ),
                          (k = !1));
                    if (this.ISGenerated) {
                      if (z && H) {
                        var q = this.getVideoStartPts(a.samples),
                          ot = n(u.samples[0].pts, q) - q,
                          tt = ot / a.inputTimeScale;
                        (K += Math.max(0, tt)), (j += Math.max(0, -tt));
                      }
                      if (z) {
                        if (
                          (u.samplerate ||
                            (R.logger.warn(
                              "[mp4-remuxer]: regenerate InitSegment as audio detected"
                            ),
                            (U = this.generateIS(u, a, D))),
                          (B = this.remuxAudio(
                            u,
                            K,
                            this.isAudioContiguous,
                            x,
                            Y || H || F === A.PlaylistLevelType.AUDIO
                              ? j
                              : void 0
                          )),
                          H)
                        ) {
                          var ut = B ? B.endPTS - B.startPTS : 0;
                          a.inputTimeScale ||
                            (R.logger.warn(
                              "[mp4-remuxer]: regenerate InitSegment as video detected"
                            ),
                            (U = this.generateIS(u, a, D))),
                            (_ = this.remuxVideo(a, j, $, ut));
                        }
                      } else H && (_ = this.remuxVideo(a, j, $, 0));
                      _ &&
                        ((_.firstKeyFrame = V),
                        (_.independent = V !== -1),
                        (_.firstKeyFramePTS = J));
                    }
                  }
                  return (
                    this.ISGenerated &&
                      (f.samples.length &&
                        (w = v(f, D, this._initPTS, this._initDTS)),
                      c.samples.length && (N = i(c, D, this._initPTS))),
                    {
                      audio: B,
                      video: _,
                      initSegment: U,
                      independent: k,
                      text: N,
                      id3: w,
                    }
                  );
                }),
                (e.generateIS = function (u, a, f) {
                  var c = u.samples,
                    D = a.samples,
                    x = this.typeSupported,
                    I = {},
                    F = !Object(M.isFiniteNumber)(this._initPTS),
                    _ = "audio/mp4",
                    B,
                    U,
                    N;
                  if ((F && (B = U = 1 / 0), u.config && c.length)) {
                    switch (((u.timescale = u.samplerate), u.segmentCodec)) {
                      case "mp3":
                        x.mpeg
                          ? ((_ = "audio/mpeg"), (u.codec = ""))
                          : x.mp3 && (u.codec = "mp3");
                        break;
                    }
                    (I.audio = {
                      id: "audio",
                      container: _,
                      codec: u.codec,
                      initSegment:
                        u.segmentCodec === "mp3" && x.mpeg
                          ? new Uint8Array(0)
                          : L.default.initSegment([u]),
                      metadata: { channelCount: u.channelCount },
                    }),
                      F &&
                        ((N = u.inputTimeScale),
                        (B = U = c[0].pts - Math.round(N * f)));
                  }
                  if (
                    a.sps &&
                    a.pps &&
                    D.length &&
                    ((a.timescale = a.inputTimeScale),
                    (I.video = {
                      id: "main",
                      container: "video/mp4",
                      codec: a.codec,
                      initSegment: L.default.initSegment([a]),
                      metadata: { width: a.width, height: a.height },
                    }),
                    F)
                  ) {
                    N = a.inputTimeScale;
                    var w = this.getVideoStartPts(D),
                      k = Math.round(N * f);
                    (U = Math.min(U, n(D[0].dts, w) - k)),
                      (B = Math.min(B, w - k));
                  }
                  if (Object.keys(I).length)
                    return (
                      (this.ISGenerated = !0),
                      F && ((this._initPTS = B), (this._initDTS = U)),
                      { tracks: I, initPTS: B, timescale: N }
                    );
                }),
                (e.remuxVideo = function (u, a, f, c) {
                  var D = u.inputTimeScale,
                    x = u.samples,
                    I = [],
                    F = x.length,
                    _ = this._initPTS,
                    B = this.nextAvcDts,
                    U = 8,
                    N = this.videoSampleDuration,
                    w,
                    k,
                    K = Number.POSITIVE_INFINITY,
                    j = Number.NEGATIVE_INFINITY,
                    G = !1;
                  if (!f || B === null) {
                    var Y = a * D,
                      X = x[0].pts - n(x[0].dts, x[0].pts);
                    B = Y - X;
                  }
                  for (var z = 0; z < F; z++) {
                    var H = x[z];
                    (H.pts = n(H.pts - _, B)),
                      (H.dts = n(H.dts - _, B)),
                      H.dts < x[z > 0 ? z - 1 : z].dts && (G = !0);
                  }
                  G &&
                    x.sort(function (_t, kt) {
                      var zt = _t.dts - kt.dts,
                        Qt = _t.pts - kt.pts;
                      return zt || Qt;
                    }),
                    (w = x[0].dts),
                    (k = x[x.length - 1].dts);
                  var Q = k - w,
                    $ = Q
                      ? Math.round(Q / (F - 1))
                      : N || u.inputTimeScale / 30;
                  if (f) {
                    var V = w - B,
                      J = V > $,
                      Z = V < -1;
                    if (J || Z) {
                      J
                        ? R.logger.warn(
                            "AVC: " +
                              Object(p.toMsFromMpegTsClock)(V, !0) +
                              " ms (" +
                              V +
                              "dts) hole between fragments detected, filling it"
                          )
                        : R.logger.warn(
                            "AVC: " +
                              Object(p.toMsFromMpegTsClock)(-V, !0) +
                              " ms (" +
                              V +
                              "dts) overlapping between fragments detected"
                          ),
                        (w = B);
                      var q = x[0].pts - V;
                      (x[0].dts = w),
                        (x[0].pts = q),
                        R.logger.log(
                          "Video: First PTS/DTS adjusted: " +
                            Object(p.toMsFromMpegTsClock)(q, !0) +
                            "/" +
                            Object(p.toMsFromMpegTsClock)(w, !0) +
                            ", delta: " +
                            Object(p.toMsFromMpegTsClock)(V, !0) +
                            " ms"
                        );
                    }
                  }
                  w = Math.max(0, w);
                  for (var ot = 0, tt = 0, ut = 0; ut < F; ut++) {
                    for (
                      var nt = x[ut],
                        ft = nt.units,
                        rt = ft.length,
                        dt = 0,
                        ct = 0;
                      ct < rt;
                      ct++
                    )
                      dt += ft[ct].data.length;
                    (tt += dt),
                      (ot += rt),
                      (nt.length = dt),
                      (nt.dts = Math.max(nt.dts, w)),
                      (K = Math.min(nt.pts, K)),
                      (j = Math.max(nt.pts, j));
                  }
                  k = x[F - 1].dts;
                  var gt = tt + 4 * ot + 8,
                    ht;
                  try {
                    ht = new Uint8Array(gt);
                  } catch {
                    this.observer.emit(b.Events.ERROR, b.Events.ERROR, {
                      type: P.ErrorTypes.MUX_ERROR,
                      details: P.ErrorDetails.REMUX_ALLOC_ERROR,
                      fatal: !1,
                      bytes: gt,
                      reason: "fail allocating video mdat " + gt,
                    });
                    return;
                  }
                  var Tt = new DataView(ht.buffer);
                  Tt.setUint32(0, gt), ht.set(L.default.types.mdat, 4);
                  for (
                    var lt = !1,
                      yt = Number.POSITIVE_INFINITY,
                      it = Number.POSITIVE_INFINITY,
                      st = Number.NEGATIVE_INFINITY,
                      mt = Number.NEGATIVE_INFINITY,
                      at = 0;
                    at < F;
                    at++
                  ) {
                    for (
                      var et = x[at],
                        xt = et.units,
                        vt = 0,
                        Lt = 0,
                        Rt = xt.length;
                      Lt < Rt;
                      Lt++
                    ) {
                      var Et = xt[Lt],
                        Mt = Et.data,
                        It = Et.data.byteLength;
                      Tt.setUint32(U, It),
                        (U += 4),
                        ht.set(Mt, U),
                        (U += It),
                        (vt += 4 + It);
                    }
                    var St = void 0;
                    if (at < F - 1)
                      (N = x[at + 1].dts - et.dts),
                        (St = x[at + 1].pts - et.pts);
                    else {
                      var At = this.config,
                        Dt = at > 0 ? et.dts - x[at - 1].dts : $;
                      if (
                        ((St = at > 0 ? et.pts - x[at - 1].pts : $),
                        At.stretchShortVideoTrack && this.nextAudioPts !== null)
                      ) {
                        var Ct = Math.floor(At.maxBufferHole * D),
                          Ot = (c ? K + c * D : this.nextAudioPts) - et.pts;
                        Ot > Ct
                          ? ((N = Ot - Dt),
                            N < 0 ? (N = Dt) : (lt = !0),
                            R.logger.log(
                              "[mp4-remuxer]: It is approximately " +
                                Ot / 90 +
                                " ms to the next segment; using duration " +
                                N / 90 +
                                " ms for the last video frame."
                            ))
                          : (N = Dt);
                      } else N = Dt;
                    }
                    var Gt = Math.round(et.pts - et.dts);
                    (yt = Math.min(yt, N)),
                      (st = Math.max(st, N)),
                      (it = Math.min(it, St)),
                      (mt = Math.max(mt, St)),
                      I.push(new r(et.key, N, vt, Gt));
                  }
                  if (I.length) {
                    if (m) {
                      if (m < 70) {
                        var Bt = I[0].flags;
                        (Bt.dependsOn = 2), (Bt.isNonSync = 0);
                      }
                    } else if (
                      l &&
                      mt - it < st - yt &&
                      $ / st < 0.025 &&
                      I[0].cts === 0
                    ) {
                      R.logger.warn(
                        "Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration."
                      );
                      for (var bt = w, pt = 0, Ut = I.length; pt < Ut; pt++) {
                        var Nt = bt + I[pt].duration,
                          jt = bt + I[pt].cts;
                        if (pt < Ut - 1) {
                          var Ht = Nt + I[pt + 1].cts;
                          I[pt].duration = Ht - jt;
                        } else I[pt].duration = pt ? I[pt - 1].duration : $;
                        (I[pt].cts = 0), (bt = Nt);
                      }
                    }
                  }
                  console.assert(
                    N !== null,
                    "mp4SampleDuration must be computed"
                  ),
                    (N = lt || !N ? $ : N),
                    (this.nextAvcDts = B = k + N),
                    (this.videoSampleDuration = N),
                    (this.isVideoContiguous = !0);
                  var Vt = L.default.moof(
                      u.sequenceNumber++,
                      w,
                      y({}, u, { samples: I })
                    ),
                    Yt = "video",
                    Xt = {
                      data1: Vt,
                      data2: ht,
                      startPTS: K / D,
                      endPTS: (j + N) / D,
                      startDTS: w / D,
                      endDTS: B / D,
                      type: Yt,
                      hasAudio: !1,
                      hasVideo: !0,
                      nb: I.length,
                      dropped: u.dropped,
                    };
                  return (
                    (u.samples = []),
                    (u.dropped = 0),
                    console.assert(ht.length, "MDAT length must not be zero"),
                    Xt
                  );
                }),
                (e.remuxAudio = function (u, a, f, c, D) {
                  var x = u.inputTimeScale,
                    I = u.samplerate ? u.samplerate : x,
                    F = x / I,
                    _ = u.segmentCodec === "aac" ? E : g,
                    B = _ * F,
                    U = this._initPTS,
                    N = u.segmentCodec === "mp3" && this.typeSupported.mpeg,
                    w = [],
                    k = D !== void 0,
                    K = u.samples,
                    j = N ? 0 : 8,
                    G = this.nextAudioPts || -1,
                    Y = a * x;
                  if (
                    ((this.isAudioContiguous = f =
                      f ||
                      (K.length &&
                        G > 0 &&
                        ((c && Math.abs(Y - G) < 9e3) ||
                          Math.abs(n(K[0].pts - U, Y) - G) < 20 * B))),
                    K.forEach(function (Et) {
                      Et.pts = n(Et.pts - U, Y);
                    }),
                    !f || G < 0)
                  ) {
                    if (
                      ((K = K.filter(function (Et) {
                        return Et.pts >= 0;
                      })),
                      !K.length)
                    )
                      return;
                    D === 0
                      ? (G = 0)
                      : c && !k
                      ? (G = Math.max(0, Y))
                      : (G = K[0].pts);
                  }
                  if (u.segmentCodec === "aac")
                    for (
                      var X = this.config.maxAudioFramesDrift, z = 0, H = G;
                      z < K.length;
                      z++
                    ) {
                      var Q = K[z],
                        $ = Q.pts,
                        V = $ - H,
                        J = Math.abs((1e3 * V) / x);
                      if (V <= -X * B && k)
                        z === 0 &&
                          (R.logger.warn(
                            "Audio frame @ " +
                              ($ / x).toFixed(3) +
                              "s overlaps nextAudioPts by " +
                              Math.round((1e3 * V) / x) +
                              " ms."
                          ),
                          (this.nextAudioPts = G = H = $));
                      else if (V >= X * B && J < S && k) {
                        var Z = Math.round(V / B);
                        (H = $ - Z * B),
                          H < 0 && (Z--, (H += B)),
                          z === 0 && (this.nextAudioPts = G = H),
                          R.logger.warn(
                            "[mp4-remuxer]: Injecting " +
                              Z +
                              " audio frame @ " +
                              (H / x).toFixed(3) +
                              "s due to " +
                              Math.round((1e3 * V) / x) +
                              " ms gap."
                          );
                        for (var q = 0; q < Z; q++) {
                          var ot = Math.max(H, 0),
                            tt = O.default.getSilentFrame(
                              u.manifestCodec || u.codec,
                              u.channelCount
                            );
                          tt ||
                            (R.logger.log(
                              "[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."
                            ),
                            (tt = Q.unit.subarray())),
                            K.splice(z, 0, { unit: tt, pts: ot }),
                            (H += B),
                            z++;
                        }
                      }
                      (Q.pts = H), (H += B);
                    }
                  for (
                    var ut = null, nt = null, ft, rt = 0, dt = K.length;
                    dt--;

                  )
                    rt += K[dt].unit.byteLength;
                  for (var ct = 0, gt = K.length; ct < gt; ct++) {
                    var ht = K[ct],
                      Tt = ht.unit,
                      lt = ht.pts;
                    if (nt !== null) {
                      var yt = w[ct - 1];
                      yt.duration = Math.round((lt - nt) / F);
                    } else if (
                      (f && u.segmentCodec === "aac" && (lt = G),
                      (ut = lt),
                      rt > 0)
                    ) {
                      rt += j;
                      try {
                        ft = new Uint8Array(rt);
                      } catch {
                        this.observer.emit(b.Events.ERROR, b.Events.ERROR, {
                          type: P.ErrorTypes.MUX_ERROR,
                          details: P.ErrorDetails.REMUX_ALLOC_ERROR,
                          fatal: !1,
                          bytes: rt,
                          reason: "fail allocating audio mdat " + rt,
                        });
                        return;
                      }
                      if (!N) {
                        var it = new DataView(ft.buffer);
                        it.setUint32(0, rt), ft.set(L.default.types.mdat, 4);
                      }
                    } else return;
                    ft.set(Tt, j);
                    var st = Tt.byteLength;
                    (j += st), w.push(new r(!0, _, st, 0)), (nt = lt);
                  }
                  var mt = w.length;
                  if (!!mt) {
                    var at = w[w.length - 1];
                    this.nextAudioPts = G = nt + F * at.duration;
                    var et = N
                      ? new Uint8Array(0)
                      : L.default.moof(
                          u.sequenceNumber++,
                          ut / F,
                          y({}, u, { samples: w })
                        );
                    u.samples = [];
                    var xt = ut / x,
                      vt = G / x,
                      Lt = "audio",
                      Rt = {
                        data1: et,
                        data2: ft,
                        startPTS: xt,
                        endPTS: vt,
                        startDTS: xt,
                        endDTS: vt,
                        type: Lt,
                        hasAudio: !0,
                        hasVideo: !1,
                        nb: mt,
                      };
                    return (
                      (this.isAudioContiguous = !0),
                      console.assert(ft.length, "MDAT length must not be zero"),
                      Rt
                    );
                  }
                }),
                (e.remuxEmptyAudio = function (u, a, f, c) {
                  var D = u.inputTimeScale,
                    x = u.samplerate ? u.samplerate : D,
                    I = D / x,
                    F = this.nextAudioPts,
                    _ = (F !== null ? F : c.startDTS * D) + this._initDTS,
                    B = c.endDTS * D + this._initDTS,
                    U = I * E,
                    N = Math.ceil((B - _) / U),
                    w = O.default.getSilentFrame(
                      u.manifestCodec || u.codec,
                      u.channelCount
                    );
                  if ((R.logger.warn("[mp4-remuxer]: remux empty Audio"), !w)) {
                    R.logger.trace(
                      "[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec"
                    );
                    return;
                  }
                  for (var k = [], K = 0; K < N; K++) {
                    var j = _ + K * U;
                    k.push({ unit: w, pts: j, dts: j });
                  }
                  return (u.samples = k), this.remuxAudio(u, a, f, !1);
                }),
                d
              );
            })();
          function n(d, e) {
            var s;
            if (e === null) return d;
            for (
              e < d ? (s = -8589934592) : (s = 8589934592);
              Math.abs(d - e) > 4294967296;

            )
              d += s;
            return d;
          }
          function h(d) {
            for (var e = 0; e < d.length; e++) if (d[e].key) return e;
            return -1;
          }
          function v(d, e, s, u) {
            var a = d.samples.length;
            if (!!a) {
              for (var f = d.inputTimeScale, c = 0; c < a; c++) {
                var D = d.samples[c];
                (D.pts = n(D.pts - s, e * f) / f),
                  (D.dts = n(D.dts - u, e * f) / f);
              }
              var x = d.samples;
              return (d.samples = []), { samples: x };
            }
          }
          function i(d, e, s) {
            var u = d.samples.length;
            if (!!u) {
              for (var a = d.inputTimeScale, f = 0; f < u; f++) {
                var c = d.samples[f];
                c.pts = n(c.pts - s, e * a) / a;
              }
              d.samples.sort(function (x, I) {
                return x.pts - I.pts;
              });
              var D = d.samples;
              return (d.samples = []), { samples: D };
            }
          }
          var r = function (e, s, u, a) {
              (this.size = void 0),
                (this.duration = void 0),
                (this.cts = void 0),
                (this.flags = void 0),
                (this.duration = s),
                (this.size = u),
                (this.cts = a),
                (this.flags = new o(e));
            },
            o = function (e) {
              (this.isLeading = 0),
                (this.isDependedOn = 0),
                (this.hasRedundancy = 0),
                (this.degradPrio = 0),
                (this.dependsOn = 1),
                (this.isNonSync = 1),
                (this.dependsOn = e ? 2 : 1),
                (this.isNonSync = e ? 0 : 1);
            };
        },
        "./src/remux/passthrough-remuxer.ts": function (W, C, T) {
          "use strict";
          T.r(C);
          var M = T("./src/polyfills/number.ts"),
            O = T("./src/remux/mp4-remuxer.ts"),
            L = T("./src/utils/mp4-tools.ts"),
            b = T("./src/loader/fragment.ts"),
            P = T("./src/utils/logger.ts"),
            R = (function () {
              function p() {
                (this.emitInitSegment = !1),
                  (this.audioCodec = void 0),
                  (this.videoCodec = void 0),
                  (this.initData = void 0),
                  (this.initPTS = void 0),
                  (this.initTracks = void 0),
                  (this.lastEndTime = null);
              }
              var y = p.prototype;
              return (
                (y.destroy = function () {}),
                (y.resetTimeStamp = function (E) {
                  (this.initPTS = E), (this.lastEndTime = null);
                }),
                (y.resetNextTimestamp = function () {
                  this.lastEndTime = null;
                }),
                (y.resetInitSegment = function (E, g, m) {
                  (this.audioCodec = g),
                    (this.videoCodec = m),
                    this.generateInitSegment(E),
                    (this.emitInitSegment = !0);
                }),
                (y.generateInitSegment = function (E) {
                  var g = this.audioCodec,
                    m = this.videoCodec;
                  if (!E || !E.byteLength) {
                    (this.initTracks = void 0), (this.initData = void 0);
                    return;
                  }
                  var l = (this.initData = Object(L.parseInitSegment)(E));
                  g || (g = A(l.audio, b.ElementaryStreamTypes.AUDIO)),
                    m || (m = A(l.video, b.ElementaryStreamTypes.VIDEO));
                  var t = {};
                  l.audio && l.video
                    ? (t.audiovideo = {
                        container: "video/mp4",
                        codec: g + "," + m,
                        initSegment: E,
                        id: "main",
                      })
                    : l.audio
                    ? (t.audio = {
                        container: "audio/mp4",
                        codec: g,
                        initSegment: E,
                        id: "audio",
                      })
                    : l.video
                    ? (t.video = {
                        container: "video/mp4",
                        codec: m,
                        initSegment: E,
                        id: "main",
                      })
                    : P.logger.warn(
                        "[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."
                      ),
                    (this.initTracks = t);
                }),
                (y.remux = function (E, g, m, l, t) {
                  var n,
                    h = this.initPTS,
                    v = this.lastEndTime,
                    i = {
                      audio: void 0,
                      video: void 0,
                      text: l,
                      id3: m,
                      initSegment: void 0,
                    };
                  Object(M.isFiniteNumber)(v) ||
                    (v = this.lastEndTime = t || 0);
                  var r = g.samples;
                  if (!r || !r.length) return i;
                  var o = { initPTS: void 0, timescale: 1 },
                    d = this.initData;
                  if (
                    ((!d || !d.length) &&
                      (this.generateInitSegment(r), (d = this.initData)),
                    !d || !d.length)
                  )
                    return (
                      P.logger.warn(
                        "[passthrough-remuxer.ts]: Failed to generate initSegment."
                      ),
                      i
                    );
                  this.emitInitSegment &&
                    ((o.tracks = this.initTracks), (this.emitInitSegment = !1));
                  var e = Object(L.getStartDTS)(d, r);
                  Object(M.isFiniteNumber)(h) ||
                    (this.initPTS = o.initPTS = h = e - t);
                  var s = Object(L.getDuration)(r, d),
                    u = E ? e - h : v,
                    a = u + s;
                  Object(L.offsetStartDTS)(d, r, h),
                    s > 0
                      ? (this.lastEndTime = a)
                      : (P.logger.warn(
                          "Duration parsed from mp4 should be greater than zero"
                        ),
                        this.resetNextTimestamp());
                  var f = !!d.audio,
                    c = !!d.video,
                    D = "";
                  f && (D += "audio"), c && (D += "video");
                  var x = {
                    data1: r,
                    startPTS: u,
                    startDTS: u,
                    endPTS: a,
                    endDTS: a,
                    type: D,
                    hasAudio: f,
                    hasVideo: c,
                    nb: 1,
                    dropped: 0,
                  };
                  (i.audio = x.type === "audio" ? x : void 0),
                    (i.video = x.type !== "audio" ? x : void 0),
                    (i.initSegment = o);
                  var I = (n = this.initPTS) != null ? n : 0;
                  return (
                    (i.id3 = Object(O.flushTextTrackMetadataCueSamples)(
                      m,
                      t,
                      I,
                      I
                    )),
                    l.samples.length &&
                      (i.text = Object(O.flushTextTrackUserdataCueSamples)(
                        l,
                        t,
                        I
                      )),
                    i
                  );
                }),
                p
              );
            })();
          function A(p, y) {
            var S = p?.codec;
            return S && S.length > 4
              ? S
              : S === "hvc1" || S === "hev1"
              ? "hvc1.1.c.L120.90"
              : S === "av01"
              ? "av01.0.04M.08"
              : S === "avc1" || y === b.ElementaryStreamTypes.VIDEO
              ? "avc1.42e01e"
              : "mp4a.40.5";
          }
          C.default = R;
        },
        "./src/task-loop.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "default", function () {
              return M;
            });
          var M = (function () {
            function O() {
              (this._boundTick = void 0),
                (this._tickTimer = null),
                (this._tickInterval = null),
                (this._tickCallCount = 0),
                (this._boundTick = this.tick.bind(this));
            }
            var L = O.prototype;
            return (
              (L.destroy = function () {
                this.onHandlerDestroying(), this.onHandlerDestroyed();
              }),
              (L.onHandlerDestroying = function () {
                this.clearNextTick(), this.clearInterval();
              }),
              (L.onHandlerDestroyed = function () {}),
              (L.hasInterval = function () {
                return !!this._tickInterval;
              }),
              (L.hasNextTick = function () {
                return !!this._tickTimer;
              }),
              (L.setInterval = function (P) {
                return this._tickInterval
                  ? !1
                  : ((this._tickInterval = self.setInterval(
                      this._boundTick,
                      P
                    )),
                    !0);
              }),
              (L.clearInterval = function () {
                return this._tickInterval
                  ? (self.clearInterval(this._tickInterval),
                    (this._tickInterval = null),
                    !0)
                  : !1;
              }),
              (L.clearNextTick = function () {
                return this._tickTimer
                  ? (self.clearTimeout(this._tickTimer),
                    (this._tickTimer = null),
                    !0)
                  : !1;
              }),
              (L.tick = function () {
                this._tickCallCount++,
                  this._tickCallCount === 1 &&
                    (this.doTick(),
                    this._tickCallCount > 1 && this.tickImmediate(),
                    (this._tickCallCount = 0));
              }),
              (L.tickImmediate = function () {
                this.clearNextTick(),
                  (this._tickTimer = self.setTimeout(this._boundTick, 0));
              }),
              (L.doTick = function () {}),
              O
            );
          })();
        },
        "./src/types/cmcd.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "CMCDVersion", function () {
              return M;
            }),
            T.d(C, "CMCDObjectType", function () {
              return O;
            }),
            T.d(C, "CMCDStreamingFormat", function () {
              return L;
            }),
            T.d(C, "CMCDStreamType", function () {
              return b;
            });
          var M = 1,
            O;
          (function (P) {
            (P.MANIFEST = "m"),
              (P.AUDIO = "a"),
              (P.VIDEO = "v"),
              (P.MUXED = "av"),
              (P.INIT = "i"),
              (P.CAPTION = "c"),
              (P.TIMED_TEXT = "tt"),
              (P.KEY = "k"),
              (P.OTHER = "o");
          })(O || (O = {}));
          var L;
          (function (P) {
            (P.DASH = "d"), (P.HLS = "h"), (P.SMOOTH = "s"), (P.OTHER = "o");
          })(L || (L = {}));
          var b;
          (function (P) {
            (P.VOD = "v"), (P.LIVE = "l");
          })(b || (b = {}));
        },
        "./src/types/demuxer.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "MetadataSchema", function () {
              return M;
            });
          var M;
          (function (O) {
            (O.audioId3 = "org.id3"),
              (O.dateRange = "com.apple.quicktime.HLS"),
              (O.emsg = "https://aomedia.org/emsg/ID3");
          })(M || (M = {}));
        },
        "./src/types/level.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "HlsSkip", function () {
              return L;
            }),
            T.d(C, "getSkipValue", function () {
              return b;
            }),
            T.d(C, "HlsUrlParameters", function () {
              return P;
            }),
            T.d(C, "Level", function () {
              return R;
            });
          function M(A, p) {
            for (var y = 0; y < p.length; y++) {
              var S = p[y];
              (S.enumerable = S.enumerable || !1),
                (S.configurable = !0),
                "value" in S && (S.writable = !0),
                Object.defineProperty(A, S.key, S);
            }
          }
          function O(A, p, y) {
            return (
              p && M(A.prototype, p),
              y && M(A, y),
              Object.defineProperty(A, "prototype", { writable: !1 }),
              A
            );
          }
          var L;
          (function (A) {
            (A.No = ""), (A.Yes = "YES"), (A.v2 = "v2");
          })(L || (L = {}));
          function b(A, p) {
            var y = A.canSkipUntil,
              S = A.canSkipDateRanges,
              E = A.endSN,
              g = p !== void 0 ? p - E : 0;
            return y && g < y ? (S ? L.v2 : L.Yes) : L.No;
          }
          var P = (function () {
              function A(y, S, E) {
                (this.msn = void 0),
                  (this.part = void 0),
                  (this.skip = void 0),
                  (this.msn = y),
                  (this.part = S),
                  (this.skip = E);
              }
              var p = A.prototype;
              return (
                (p.addDirectives = function (S) {
                  var E = new self.URL(S);
                  return (
                    this.msn !== void 0 &&
                      E.searchParams.set("_HLS_msn", this.msn.toString()),
                    this.part !== void 0 &&
                      E.searchParams.set("_HLS_part", this.part.toString()),
                    this.skip && E.searchParams.set("_HLS_skip", this.skip),
                    E.toString()
                  );
                }),
                A
              );
            })(),
            R = (function () {
              function A(p) {
                (this.attrs = void 0),
                  (this.audioCodec = void 0),
                  (this.bitrate = void 0),
                  (this.codecSet = void 0),
                  (this.height = void 0),
                  (this.id = void 0),
                  (this.name = void 0),
                  (this.videoCodec = void 0),
                  (this.width = void 0),
                  (this.unknownCodecs = void 0),
                  (this.audioGroupIds = void 0),
                  (this.details = void 0),
                  (this.fragmentError = 0),
                  (this.loadError = 0),
                  (this.loaded = void 0),
                  (this.realBitrate = 0),
                  (this.textGroupIds = void 0),
                  (this.url = void 0),
                  (this._urlId = 0),
                  (this.url = [p.url]),
                  (this.attrs = p.attrs),
                  (this.bitrate = p.bitrate),
                  p.details && (this.details = p.details),
                  (this.id = p.id || 0),
                  (this.name = p.name),
                  (this.width = p.width || 0),
                  (this.height = p.height || 0),
                  (this.audioCodec = p.audioCodec),
                  (this.videoCodec = p.videoCodec),
                  (this.unknownCodecs = p.unknownCodecs),
                  (this.codecSet = [p.videoCodec, p.audioCodec]
                    .filter(function (y) {
                      return y;
                    })
                    .join(",")
                    .replace(/\.[^.,]+/g, ""));
              }
              return (
                O(A, [
                  {
                    key: "maxBitrate",
                    get: function () {
                      return Math.max(this.realBitrate, this.bitrate);
                    },
                  },
                  {
                    key: "uri",
                    get: function () {
                      return this.url[this._urlId] || "";
                    },
                  },
                  {
                    key: "urlId",
                    get: function () {
                      return this._urlId;
                    },
                    set: function (y) {
                      var S = y % this.url.length;
                      this._urlId !== S &&
                        ((this.details = void 0), (this._urlId = S));
                    },
                  },
                ]),
                A
              );
            })();
        },
        "./src/types/loader.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "PlaylistContextType", function () {
              return M;
            }),
            T.d(C, "PlaylistLevelType", function () {
              return O;
            });
          var M;
          (function (L) {
            (L.MANIFEST = "manifest"),
              (L.LEVEL = "level"),
              (L.AUDIO_TRACK = "audioTrack"),
              (L.SUBTITLE_TRACK = "subtitleTrack");
          })(M || (M = {}));
          var O;
          (function (L) {
            (L.MAIN = "main"), (L.AUDIO = "audio"), (L.SUBTITLE = "subtitle");
          })(O || (O = {}));
        },
        "./src/types/transmuxer.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "ChunkMetadata", function () {
              return M;
            });
          var M = function (b, P, R, A, p, y) {
            A === void 0 && (A = 0),
              p === void 0 && (p = -1),
              y === void 0 && (y = !1),
              (this.level = void 0),
              (this.sn = void 0),
              (this.part = void 0),
              (this.id = void 0),
              (this.size = void 0),
              (this.partial = void 0),
              (this.transmuxing = O()),
              (this.buffering = { audio: O(), video: O(), audiovideo: O() }),
              (this.level = b),
              (this.sn = P),
              (this.id = R),
              (this.size = A),
              (this.part = p),
              (this.partial = y);
          };
          function O() {
            return { start: 0, executeStart: 0, executeEnd: 0, end: 0 };
          }
        },
        "./src/utils/attr-list.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "AttrList", function () {
              return L;
            });
          var M = /^(\d+)x(\d+)$/,
            O = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
            L = (function () {
              function b(R) {
                typeof R == "string" && (R = b.parseAttrList(R));
                for (var A in R) R.hasOwnProperty(A) && (this[A] = R[A]);
              }
              var P = b.prototype;
              return (
                (P.decimalInteger = function (A) {
                  var p = parseInt(this[A], 10);
                  return p > Number.MAX_SAFE_INTEGER ? 1 / 0 : p;
                }),
                (P.hexadecimalInteger = function (A) {
                  if (this[A]) {
                    var p = (this[A] || "0x").slice(2);
                    p = (p.length & 1 ? "0" : "") + p;
                    for (
                      var y = new Uint8Array(p.length / 2), S = 0;
                      S < p.length / 2;
                      S++
                    )
                      y[S] = parseInt(p.slice(S * 2, S * 2 + 2), 16);
                    return y;
                  } else return null;
                }),
                (P.hexadecimalIntegerAsNumber = function (A) {
                  var p = parseInt(this[A], 16);
                  return p > Number.MAX_SAFE_INTEGER ? 1 / 0 : p;
                }),
                (P.decimalFloatingPoint = function (A) {
                  return parseFloat(this[A]);
                }),
                (P.optionalFloat = function (A, p) {
                  var y = this[A];
                  return y ? parseFloat(y) : p;
                }),
                (P.enumeratedString = function (A) {
                  return this[A];
                }),
                (P.bool = function (A) {
                  return this[A] === "YES";
                }),
                (P.decimalResolution = function (A) {
                  var p = M.exec(this[A]);
                  if (p !== null)
                    return {
                      width: parseInt(p[1], 10),
                      height: parseInt(p[2], 10),
                    };
                }),
                (b.parseAttrList = function (A) {
                  var p,
                    y = {},
                    S = '"';
                  for (O.lastIndex = 0; (p = O.exec(A)) !== null; ) {
                    var E = p[2];
                    E.indexOf(S) === 0 &&
                      E.lastIndexOf(S) === E.length - 1 &&
                      (E = E.slice(1, -1)),
                      (y[p[1]] = E);
                  }
                  return y;
                }),
                b
              );
            })();
        },
        "./src/utils/binary-search.ts": function (W, C, T) {
          "use strict";
          T.r(C);
          var M = {
            search: function (L, b) {
              for (var P = 0, R = L.length - 1, A = null, p = null; P <= R; ) {
                (A = ((P + R) / 2) | 0), (p = L[A]);
                var y = b(p);
                if (y > 0) P = A + 1;
                else if (y < 0) R = A - 1;
                else return p;
              }
              return null;
            },
          };
          C.default = M;
        },
        "./src/utils/buffer-helper.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "BufferHelper", function () {
              return L;
            });
          var M = T("./src/utils/logger.ts"),
            O = {
              length: 0,
              start: function () {
                return 0;
              },
              end: function () {
                return 0;
              },
            },
            L = (function () {
              function b() {}
              return (
                (b.isBuffered = function (R, A) {
                  try {
                    if (R) {
                      for (var p = b.getBuffered(R), y = 0; y < p.length; y++)
                        if (A >= p.start(y) && A <= p.end(y)) return !0;
                    }
                  } catch {}
                  return !1;
                }),
                (b.bufferInfo = function (R, A, p) {
                  try {
                    if (R) {
                      var y = b.getBuffered(R),
                        S = [],
                        E;
                      for (E = 0; E < y.length; E++)
                        S.push({ start: y.start(E), end: y.end(E) });
                      return this.bufferedInfo(S, A, p);
                    }
                  } catch {}
                  return { len: 0, start: A, end: A, nextStart: void 0 };
                }),
                (b.bufferedInfo = function (R, A, p) {
                  (A = Math.max(0, A)),
                    R.sort(function (r, o) {
                      var d = r.start - o.start;
                      return d || o.end - r.end;
                    });
                  var y = [];
                  if (p)
                    for (var S = 0; S < R.length; S++) {
                      var E = y.length;
                      if (E) {
                        var g = y[E - 1].end;
                        R[S].start - g < p
                          ? R[S].end > g && (y[E - 1].end = R[S].end)
                          : y.push(R[S]);
                      } else y.push(R[S]);
                    }
                  else y = R;
                  for (var m = 0, l, t = A, n = A, h = 0; h < y.length; h++) {
                    var v = y[h].start,
                      i = y[h].end;
                    if (A + p >= v && A < i) (t = v), (n = i), (m = n - A);
                    else if (A + p < v) {
                      l = v;
                      break;
                    }
                  }
                  return { len: m, start: t || 0, end: n || 0, nextStart: l };
                }),
                (b.getBuffered = function (R) {
                  try {
                    return R.buffered;
                  } catch (A) {
                    return M.logger.log("failed to get media.buffered", A), O;
                  }
                }),
                b
              );
            })();
        },
        "./src/utils/cea-608-parser.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "Row", function () {
              return n;
            }),
            T.d(C, "CaptionScreen", function () {
              return h;
            });
          var M = T("./src/utils/logger.ts"),
            O = {
              42: 225,
              92: 233,
              94: 237,
              95: 243,
              96: 250,
              123: 231,
              124: 247,
              125: 209,
              126: 241,
              127: 9608,
              128: 174,
              129: 176,
              130: 189,
              131: 191,
              132: 8482,
              133: 162,
              134: 163,
              135: 9834,
              136: 224,
              137: 32,
              138: 232,
              139: 226,
              140: 234,
              141: 238,
              142: 244,
              143: 251,
              144: 193,
              145: 201,
              146: 211,
              147: 218,
              148: 220,
              149: 252,
              150: 8216,
              151: 161,
              152: 42,
              153: 8217,
              154: 9473,
              155: 169,
              156: 8480,
              157: 8226,
              158: 8220,
              159: 8221,
              160: 192,
              161: 194,
              162: 199,
              163: 200,
              164: 202,
              165: 203,
              166: 235,
              167: 206,
              168: 207,
              169: 239,
              170: 212,
              171: 217,
              172: 249,
              173: 219,
              174: 171,
              175: 187,
              176: 195,
              177: 227,
              178: 205,
              179: 204,
              180: 236,
              181: 210,
              182: 242,
              183: 213,
              184: 245,
              185: 123,
              186: 125,
              187: 92,
              188: 94,
              189: 95,
              190: 124,
              191: 8764,
              192: 196,
              193: 228,
              194: 214,
              195: 246,
              196: 223,
              197: 165,
              198: 164,
              199: 9475,
              200: 197,
              201: 229,
              202: 216,
              203: 248,
              204: 9487,
              205: 9491,
              206: 9495,
              207: 9499,
            },
            L = function (s) {
              var u = s;
              return O.hasOwnProperty(s) && (u = O[s]), String.fromCharCode(u);
            },
            b = 15,
            P = 100,
            R = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 },
            A = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 },
            p = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 },
            y = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 },
            S = [
              "white",
              "green",
              "blue",
              "cyan",
              "red",
              "yellow",
              "magenta",
              "black",
              "transparent",
            ],
            E;
          (function (e) {
            (e[(e.ERROR = 0)] = "ERROR"),
              (e[(e.TEXT = 1)] = "TEXT"),
              (e[(e.WARNING = 2)] = "WARNING"),
              (e[(e.INFO = 2)] = "INFO"),
              (e[(e.DEBUG = 3)] = "DEBUG"),
              (e[(e.DATA = 3)] = "DATA");
          })(E || (E = {}));
          var g = (function () {
              function e() {
                (this.time = null), (this.verboseLevel = E.ERROR);
              }
              var s = e.prototype;
              return (
                (s.log = function (a, f) {
                  this.verboseLevel >= a &&
                    M.logger.log(this.time + " [" + a + "] " + f);
                }),
                e
              );
            })(),
            m = function (s) {
              for (var u = [], a = 0; a < s.length; a++)
                u.push(s[a].toString(16));
              return u;
            },
            l = (function () {
              function e(u, a, f, c, D) {
                (this.foreground = void 0),
                  (this.underline = void 0),
                  (this.italics = void 0),
                  (this.background = void 0),
                  (this.flash = void 0),
                  (this.foreground = u || "white"),
                  (this.underline = a || !1),
                  (this.italics = f || !1),
                  (this.background = c || "black"),
                  (this.flash = D || !1);
              }
              var s = e.prototype;
              return (
                (s.reset = function () {
                  (this.foreground = "white"),
                    (this.underline = !1),
                    (this.italics = !1),
                    (this.background = "black"),
                    (this.flash = !1);
                }),
                (s.setStyles = function (a) {
                  for (
                    var f = [
                        "foreground",
                        "underline",
                        "italics",
                        "background",
                        "flash",
                      ],
                      c = 0;
                    c < f.length;
                    c++
                  ) {
                    var D = f[c];
                    a.hasOwnProperty(D) && (this[D] = a[D]);
                  }
                }),
                (s.isDefault = function () {
                  return (
                    this.foreground === "white" &&
                    !this.underline &&
                    !this.italics &&
                    this.background === "black" &&
                    !this.flash
                  );
                }),
                (s.equals = function (a) {
                  return (
                    this.foreground === a.foreground &&
                    this.underline === a.underline &&
                    this.italics === a.italics &&
                    this.background === a.background &&
                    this.flash === a.flash
                  );
                }),
                (s.copy = function (a) {
                  (this.foreground = a.foreground),
                    (this.underline = a.underline),
                    (this.italics = a.italics),
                    (this.background = a.background),
                    (this.flash = a.flash);
                }),
                (s.toString = function () {
                  return (
                    "color=" +
                    this.foreground +
                    ", underline=" +
                    this.underline +
                    ", italics=" +
                    this.italics +
                    ", background=" +
                    this.background +
                    ", flash=" +
                    this.flash
                  );
                }),
                e
              );
            })(),
            t = (function () {
              function e(u, a, f, c, D, x) {
                (this.uchar = void 0),
                  (this.penState = void 0),
                  (this.uchar = u || " "),
                  (this.penState = new l(a, f, c, D, x));
              }
              var s = e.prototype;
              return (
                (s.reset = function () {
                  (this.uchar = " "), this.penState.reset();
                }),
                (s.setChar = function (a, f) {
                  (this.uchar = a), this.penState.copy(f);
                }),
                (s.setPenState = function (a) {
                  this.penState.copy(a);
                }),
                (s.equals = function (a) {
                  return (
                    this.uchar === a.uchar && this.penState.equals(a.penState)
                  );
                }),
                (s.copy = function (a) {
                  (this.uchar = a.uchar), this.penState.copy(a.penState);
                }),
                (s.isEmpty = function () {
                  return this.uchar === " " && this.penState.isDefault();
                }),
                e
              );
            })(),
            n = (function () {
              function e(u) {
                (this.chars = void 0),
                  (this.pos = void 0),
                  (this.currPenState = void 0),
                  (this.cueStartTime = void 0),
                  (this.logger = void 0),
                  (this.chars = []);
                for (var a = 0; a < P; a++) this.chars.push(new t());
                (this.logger = u),
                  (this.pos = 0),
                  (this.currPenState = new l());
              }
              var s = e.prototype;
              return (
                (s.equals = function (a) {
                  for (var f = !0, c = 0; c < P; c++)
                    if (!this.chars[c].equals(a.chars[c])) {
                      f = !1;
                      break;
                    }
                  return f;
                }),
                (s.copy = function (a) {
                  for (var f = 0; f < P; f++) this.chars[f].copy(a.chars[f]);
                }),
                (s.isEmpty = function () {
                  for (var a = !0, f = 0; f < P; f++)
                    if (!this.chars[f].isEmpty()) {
                      a = !1;
                      break;
                    }
                  return a;
                }),
                (s.setCursor = function (a) {
                  this.pos !== a && (this.pos = a),
                    this.pos < 0
                      ? (this.logger.log(
                          E.DEBUG,
                          "Negative cursor position " + this.pos
                        ),
                        (this.pos = 0))
                      : this.pos > P &&
                        (this.logger.log(
                          E.DEBUG,
                          "Too large cursor position " + this.pos
                        ),
                        (this.pos = P));
                }),
                (s.moveCursor = function (a) {
                  var f = this.pos + a;
                  if (a > 1)
                    for (var c = this.pos + 1; c < f + 1; c++)
                      this.chars[c].setPenState(this.currPenState);
                  this.setCursor(f);
                }),
                (s.backSpace = function () {
                  this.moveCursor(-1),
                    this.chars[this.pos].setChar(" ", this.currPenState);
                }),
                (s.insertChar = function (a) {
                  a >= 144 && this.backSpace();
                  var f = L(a);
                  if (this.pos >= P) {
                    this.logger.log(
                      E.ERROR,
                      "Cannot insert " +
                        a.toString(16) +
                        " (" +
                        f +
                        ") at position " +
                        this.pos +
                        ". Skipping it!"
                    );
                    return;
                  }
                  this.chars[this.pos].setChar(f, this.currPenState),
                    this.moveCursor(1);
                }),
                (s.clearFromPos = function (a) {
                  var f;
                  for (f = a; f < P; f++) this.chars[f].reset();
                }),
                (s.clear = function () {
                  this.clearFromPos(0),
                    (this.pos = 0),
                    this.currPenState.reset();
                }),
                (s.clearToEndOfRow = function () {
                  this.clearFromPos(this.pos);
                }),
                (s.getTextString = function () {
                  for (var a = [], f = !0, c = 0; c < P; c++) {
                    var D = this.chars[c].uchar;
                    D !== " " && (f = !1), a.push(D);
                  }
                  return f ? "" : a.join("");
                }),
                (s.setPenStyles = function (a) {
                  this.currPenState.setStyles(a);
                  var f = this.chars[this.pos];
                  f.setPenState(this.currPenState);
                }),
                e
              );
            })(),
            h = (function () {
              function e(u) {
                (this.rows = void 0),
                  (this.currRow = void 0),
                  (this.nrRollUpRows = void 0),
                  (this.lastOutputScreen = void 0),
                  (this.logger = void 0),
                  (this.rows = []);
                for (var a = 0; a < b; a++) this.rows.push(new n(u));
                (this.logger = u),
                  (this.currRow = b - 1),
                  (this.nrRollUpRows = null),
                  (this.lastOutputScreen = null),
                  this.reset();
              }
              var s = e.prototype;
              return (
                (s.reset = function () {
                  for (var a = 0; a < b; a++) this.rows[a].clear();
                  this.currRow = b - 1;
                }),
                (s.equals = function (a) {
                  for (var f = !0, c = 0; c < b; c++)
                    if (!this.rows[c].equals(a.rows[c])) {
                      f = !1;
                      break;
                    }
                  return f;
                }),
                (s.copy = function (a) {
                  for (var f = 0; f < b; f++) this.rows[f].copy(a.rows[f]);
                }),
                (s.isEmpty = function () {
                  for (var a = !0, f = 0; f < b; f++)
                    if (!this.rows[f].isEmpty()) {
                      a = !1;
                      break;
                    }
                  return a;
                }),
                (s.backSpace = function () {
                  var a = this.rows[this.currRow];
                  a.backSpace();
                }),
                (s.clearToEndOfRow = function () {
                  var a = this.rows[this.currRow];
                  a.clearToEndOfRow();
                }),
                (s.insertChar = function (a) {
                  var f = this.rows[this.currRow];
                  f.insertChar(a);
                }),
                (s.setPen = function (a) {
                  var f = this.rows[this.currRow];
                  f.setPenStyles(a);
                }),
                (s.moveCursor = function (a) {
                  var f = this.rows[this.currRow];
                  f.moveCursor(a);
                }),
                (s.setCursor = function (a) {
                  this.logger.log(E.INFO, "setCursor: " + a);
                  var f = this.rows[this.currRow];
                  f.setCursor(a);
                }),
                (s.setPAC = function (a) {
                  this.logger.log(E.INFO, "pacData = " + JSON.stringify(a));
                  var f = a.row - 1;
                  if (
                    (this.nrRollUpRows &&
                      f < this.nrRollUpRows - 1 &&
                      (f = this.nrRollUpRows - 1),
                    this.nrRollUpRows && this.currRow !== f)
                  ) {
                    for (var c = 0; c < b; c++) this.rows[c].clear();
                    var D = this.currRow + 1 - this.nrRollUpRows,
                      x = this.lastOutputScreen;
                    if (x) {
                      var I = x.rows[D].cueStartTime,
                        F = this.logger.time;
                      if (I && F !== null && I < F)
                        for (var _ = 0; _ < this.nrRollUpRows; _++)
                          this.rows[f - this.nrRollUpRows + _ + 1].copy(
                            x.rows[D + _]
                          );
                    }
                  }
                  this.currRow = f;
                  var B = this.rows[this.currRow];
                  if (a.indent !== null) {
                    var U = a.indent,
                      N = Math.max(U - 1, 0);
                    B.setCursor(a.indent),
                      (a.color = B.chars[N].penState.foreground);
                  }
                  var w = {
                    foreground: a.color,
                    underline: a.underline,
                    italics: a.italics,
                    background: "black",
                    flash: !1,
                  };
                  this.setPen(w);
                }),
                (s.setBkgData = function (a) {
                  this.logger.log(E.INFO, "bkgData = " + JSON.stringify(a)),
                    this.backSpace(),
                    this.setPen(a),
                    this.insertChar(32);
                }),
                (s.setRollUpRows = function (a) {
                  this.nrRollUpRows = a;
                }),
                (s.rollUp = function () {
                  if (this.nrRollUpRows === null) {
                    this.logger.log(
                      E.DEBUG,
                      "roll_up but nrRollUpRows not set yet"
                    );
                    return;
                  }
                  this.logger.log(E.TEXT, this.getDisplayText());
                  var a = this.currRow + 1 - this.nrRollUpRows,
                    f = this.rows.splice(a, 1)[0];
                  f.clear(),
                    this.rows.splice(this.currRow, 0, f),
                    this.logger.log(E.INFO, "Rolling up");
                }),
                (s.getDisplayText = function (a) {
                  a = a || !1;
                  for (var f = [], c = "", D = -1, x = 0; x < b; x++) {
                    var I = this.rows[x].getTextString();
                    I &&
                      ((D = x + 1),
                      a
                        ? f.push("Row " + D + ": '" + I + "'")
                        : f.push(I.trim()));
                  }
                  return (
                    f.length > 0 &&
                      (a
                        ? (c = "[" + f.join(" | ") + "]")
                        : (c = f.join(`
`))),
                    c
                  );
                }),
                (s.getTextAndFormat = function () {
                  return this.rows;
                }),
                e
              );
            })(),
            v = (function () {
              function e(u, a, f) {
                (this.chNr = void 0),
                  (this.outputFilter = void 0),
                  (this.mode = void 0),
                  (this.verbose = void 0),
                  (this.displayedMemory = void 0),
                  (this.nonDisplayedMemory = void 0),
                  (this.lastOutputScreen = void 0),
                  (this.currRollUpRow = void 0),
                  (this.writeScreen = void 0),
                  (this.cueStartTime = void 0),
                  (this.logger = void 0),
                  (this.chNr = u),
                  (this.outputFilter = a),
                  (this.mode = null),
                  (this.verbose = 0),
                  (this.displayedMemory = new h(f)),
                  (this.nonDisplayedMemory = new h(f)),
                  (this.lastOutputScreen = new h(f)),
                  (this.currRollUpRow = this.displayedMemory.rows[b - 1]),
                  (this.writeScreen = this.displayedMemory),
                  (this.mode = null),
                  (this.cueStartTime = null),
                  (this.logger = f);
              }
              var s = e.prototype;
              return (
                (s.reset = function () {
                  (this.mode = null),
                    this.displayedMemory.reset(),
                    this.nonDisplayedMemory.reset(),
                    this.lastOutputScreen.reset(),
                    this.outputFilter.reset(),
                    (this.currRollUpRow = this.displayedMemory.rows[b - 1]),
                    (this.writeScreen = this.displayedMemory),
                    (this.mode = null),
                    (this.cueStartTime = null);
                }),
                (s.getHandler = function () {
                  return this.outputFilter;
                }),
                (s.setHandler = function (a) {
                  this.outputFilter = a;
                }),
                (s.setPAC = function (a) {
                  this.writeScreen.setPAC(a);
                }),
                (s.setBkgData = function (a) {
                  this.writeScreen.setBkgData(a);
                }),
                (s.setMode = function (a) {
                  a !== this.mode &&
                    ((this.mode = a),
                    this.logger.log(E.INFO, "MODE=" + a),
                    this.mode === "MODE_POP-ON"
                      ? (this.writeScreen = this.nonDisplayedMemory)
                      : ((this.writeScreen = this.displayedMemory),
                        this.writeScreen.reset()),
                    this.mode !== "MODE_ROLL-UP" &&
                      ((this.displayedMemory.nrRollUpRows = null),
                      (this.nonDisplayedMemory.nrRollUpRows = null)),
                    (this.mode = a));
                }),
                (s.insertChars = function (a) {
                  for (var f = 0; f < a.length; f++)
                    this.writeScreen.insertChar(a[f]);
                  var c =
                    this.writeScreen === this.displayedMemory
                      ? "DISP"
                      : "NON_DISP";
                  this.logger.log(
                    E.INFO,
                    c + ": " + this.writeScreen.getDisplayText(!0)
                  ),
                    (this.mode === "MODE_PAINT-ON" ||
                      this.mode === "MODE_ROLL-UP") &&
                      (this.logger.log(
                        E.TEXT,
                        "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)
                      ),
                      this.outputDataUpdate());
                }),
                (s.ccRCL = function () {
                  this.logger.log(E.INFO, "RCL - Resume Caption Loading"),
                    this.setMode("MODE_POP-ON");
                }),
                (s.ccBS = function () {
                  this.logger.log(E.INFO, "BS - BackSpace"),
                    this.mode !== "MODE_TEXT" &&
                      (this.writeScreen.backSpace(),
                      this.writeScreen === this.displayedMemory &&
                        this.outputDataUpdate());
                }),
                (s.ccAOF = function () {}),
                (s.ccAON = function () {}),
                (s.ccDER = function () {
                  this.logger.log(E.INFO, "DER- Delete to End of Row"),
                    this.writeScreen.clearToEndOfRow(),
                    this.outputDataUpdate();
                }),
                (s.ccRU = function (a) {
                  this.logger.log(E.INFO, "RU(" + a + ") - Roll Up"),
                    (this.writeScreen = this.displayedMemory),
                    this.setMode("MODE_ROLL-UP"),
                    this.writeScreen.setRollUpRows(a);
                }),
                (s.ccFON = function () {
                  this.logger.log(E.INFO, "FON - Flash On"),
                    this.writeScreen.setPen({ flash: !0 });
                }),
                (s.ccRDC = function () {
                  this.logger.log(E.INFO, "RDC - Resume Direct Captioning"),
                    this.setMode("MODE_PAINT-ON");
                }),
                (s.ccTR = function () {
                  this.logger.log(E.INFO, "TR"), this.setMode("MODE_TEXT");
                }),
                (s.ccRTD = function () {
                  this.logger.log(E.INFO, "RTD"), this.setMode("MODE_TEXT");
                }),
                (s.ccEDM = function () {
                  this.logger.log(E.INFO, "EDM - Erase Displayed Memory"),
                    this.displayedMemory.reset(),
                    this.outputDataUpdate(!0);
                }),
                (s.ccCR = function () {
                  this.logger.log(E.INFO, "CR - Carriage Return"),
                    this.writeScreen.rollUp(),
                    this.outputDataUpdate(!0);
                }),
                (s.ccENM = function () {
                  this.logger.log(E.INFO, "ENM - Erase Non-displayed Memory"),
                    this.nonDisplayedMemory.reset();
                }),
                (s.ccEOC = function () {
                  if (
                    (this.logger.log(E.INFO, "EOC - End Of Caption"),
                    this.mode === "MODE_POP-ON")
                  ) {
                    var a = this.displayedMemory;
                    (this.displayedMemory = this.nonDisplayedMemory),
                      (this.nonDisplayedMemory = a),
                      (this.writeScreen = this.nonDisplayedMemory),
                      this.logger.log(
                        E.TEXT,
                        "DISP: " + this.displayedMemory.getDisplayText()
                      );
                  }
                  this.outputDataUpdate(!0);
                }),
                (s.ccTO = function (a) {
                  this.logger.log(E.INFO, "TO(" + a + ") - Tab Offset"),
                    this.writeScreen.moveCursor(a);
                }),
                (s.ccMIDROW = function (a) {
                  var f = { flash: !1 };
                  if (
                    ((f.underline = a % 2 === 1),
                    (f.italics = a >= 46),
                    f.italics)
                  )
                    f.foreground = "white";
                  else {
                    var c = Math.floor(a / 2) - 16,
                      D = [
                        "white",
                        "green",
                        "blue",
                        "cyan",
                        "red",
                        "yellow",
                        "magenta",
                      ];
                    f.foreground = D[c];
                  }
                  this.logger.log(E.INFO, "MIDROW: " + JSON.stringify(f)),
                    this.writeScreen.setPen(f);
                }),
                (s.outputDataUpdate = function (a) {
                  a === void 0 && (a = !1);
                  var f = this.logger.time;
                  f !== null &&
                    this.outputFilter &&
                    (this.cueStartTime === null &&
                    !this.displayedMemory.isEmpty()
                      ? (this.cueStartTime = f)
                      : this.displayedMemory.equals(this.lastOutputScreen) ||
                        (this.outputFilter.newCue(
                          this.cueStartTime,
                          f,
                          this.lastOutputScreen
                        ),
                        a &&
                          this.outputFilter.dispatchCue &&
                          this.outputFilter.dispatchCue(),
                        (this.cueStartTime = this.displayedMemory.isEmpty()
                          ? null
                          : f)),
                    this.lastOutputScreen.copy(this.displayedMemory));
                }),
                (s.cueSplitAtTime = function (a) {
                  this.outputFilter &&
                    (this.displayedMemory.isEmpty() ||
                      (this.outputFilter.newCue &&
                        this.outputFilter.newCue(
                          this.cueStartTime,
                          a,
                          this.displayedMemory
                        ),
                      (this.cueStartTime = a)));
                }),
                e
              );
            })(),
            i = (function () {
              function e(u, a, f) {
                (this.channels = void 0),
                  (this.currentChannel = 0),
                  (this.cmdHistory = void 0),
                  (this.logger = void 0);
                var c = new g();
                (this.channels = [null, new v(u, a, c), new v(u + 1, f, c)]),
                  (this.cmdHistory = d()),
                  (this.logger = c);
              }
              var s = e.prototype;
              return (
                (s.getHandler = function (a) {
                  return this.channels[a].getHandler();
                }),
                (s.setHandler = function (a, f) {
                  this.channels[a].setHandler(f);
                }),
                (s.addData = function (a, f) {
                  var c,
                    D,
                    x,
                    I = !1;
                  this.logger.time = a;
                  for (var F = 0; F < f.length; F += 2)
                    if (
                      ((D = f[F] & 127),
                      (x = f[F + 1] & 127),
                      !(D === 0 && x === 0))
                    ) {
                      if (
                        (this.logger.log(
                          E.DATA,
                          "[" + m([f[F], f[F + 1]]) + "] -> (" + m([D, x]) + ")"
                        ),
                        (c = this.parseCmd(D, x)),
                        c || (c = this.parseMidrow(D, x)),
                        c || (c = this.parsePAC(D, x)),
                        c || (c = this.parseBackgroundAttributes(D, x)),
                        !c && ((I = this.parseChars(D, x)), I))
                      ) {
                        var _ = this.currentChannel;
                        if (_ && _ > 0) {
                          var B = this.channels[_];
                          B.insertChars(I);
                        } else
                          this.logger.log(
                            E.WARNING,
                            "No channel found yet. TEXT-MODE?"
                          );
                      }
                      !c &&
                        !I &&
                        this.logger.log(
                          E.WARNING,
                          "Couldn't parse cleaned data " +
                            m([D, x]) +
                            " orig: " +
                            m([f[F], f[F + 1]])
                        );
                    }
                }),
                (s.parseCmd = function (a, f) {
                  var c = this.cmdHistory,
                    D =
                      (a === 20 || a === 28 || a === 21 || a === 29) &&
                      f >= 32 &&
                      f <= 47,
                    x = (a === 23 || a === 31) && f >= 33 && f <= 35;
                  if (!(D || x)) return !1;
                  if (o(a, f, c))
                    return (
                      r(null, null, c),
                      this.logger.log(
                        E.DEBUG,
                        "Repeated command (" + m([a, f]) + ") is dropped"
                      ),
                      !0
                    );
                  var I = a === 20 || a === 21 || a === 23 ? 1 : 2,
                    F = this.channels[I];
                  return (
                    a === 20 || a === 21 || a === 28 || a === 29
                      ? f === 32
                        ? F.ccRCL()
                        : f === 33
                        ? F.ccBS()
                        : f === 34
                        ? F.ccAOF()
                        : f === 35
                        ? F.ccAON()
                        : f === 36
                        ? F.ccDER()
                        : f === 37
                        ? F.ccRU(2)
                        : f === 38
                        ? F.ccRU(3)
                        : f === 39
                        ? F.ccRU(4)
                        : f === 40
                        ? F.ccFON()
                        : f === 41
                        ? F.ccRDC()
                        : f === 42
                        ? F.ccTR()
                        : f === 43
                        ? F.ccRTD()
                        : f === 44
                        ? F.ccEDM()
                        : f === 45
                        ? F.ccCR()
                        : f === 46
                        ? F.ccENM()
                        : f === 47 && F.ccEOC()
                      : F.ccTO(f - 32),
                    r(a, f, c),
                    (this.currentChannel = I),
                    !0
                  );
                }),
                (s.parseMidrow = function (a, f) {
                  var c = 0;
                  if ((a === 17 || a === 25) && f >= 32 && f <= 47) {
                    if (
                      (a === 17 ? (c = 1) : (c = 2), c !== this.currentChannel)
                    )
                      return (
                        this.logger.log(
                          E.ERROR,
                          "Mismatch channel in midrow parsing"
                        ),
                        !1
                      );
                    var D = this.channels[c];
                    return D
                      ? (D.ccMIDROW(f),
                        this.logger.log(E.DEBUG, "MIDROW (" + m([a, f]) + ")"),
                        !0)
                      : !1;
                  }
                  return !1;
                }),
                (s.parsePAC = function (a, f) {
                  var c,
                    D = this.cmdHistory,
                    x =
                      ((a >= 17 && a <= 23) || (a >= 25 && a <= 31)) &&
                      f >= 64 &&
                      f <= 127,
                    I = (a === 16 || a === 24) && f >= 64 && f <= 95;
                  if (!(x || I)) return !1;
                  if (o(a, f, D)) return r(null, null, D), !0;
                  var F = a <= 23 ? 1 : 2;
                  f >= 64 && f <= 95
                    ? (c = F === 1 ? R[a] : p[a])
                    : (c = F === 1 ? A[a] : y[a]);
                  var _ = this.channels[F];
                  return _
                    ? (_.setPAC(this.interpretPAC(c, f)),
                      r(a, f, D),
                      (this.currentChannel = F),
                      !0)
                    : !1;
                }),
                (s.interpretPAC = function (a, f) {
                  var c,
                    D = {
                      color: null,
                      italics: !1,
                      indent: null,
                      underline: !1,
                      row: a,
                    };
                  return (
                    f > 95 ? (c = f - 96) : (c = f - 64),
                    (D.underline = (c & 1) === 1),
                    c <= 13
                      ? (D.color = [
                          "white",
                          "green",
                          "blue",
                          "cyan",
                          "red",
                          "yellow",
                          "magenta",
                          "white",
                        ][Math.floor(c / 2)])
                      : c <= 15
                      ? ((D.italics = !0), (D.color = "white"))
                      : (D.indent = Math.floor((c - 16) / 2) * 4),
                    D
                  );
                }),
                (s.parseChars = function (a, f) {
                  var c,
                    D = null,
                    x = null;
                  if (
                    (a >= 25 ? ((c = 2), (x = a - 8)) : ((c = 1), (x = a)),
                    x >= 17 && x <= 19)
                  ) {
                    var I;
                    x === 17
                      ? (I = f + 80)
                      : x === 18
                      ? (I = f + 112)
                      : (I = f + 144),
                      this.logger.log(
                        E.INFO,
                        "Special char '" + L(I) + "' in channel " + c
                      ),
                      (D = [I]);
                  } else a >= 32 && a <= 127 && (D = f === 0 ? [a] : [a, f]);
                  if (D) {
                    var F = m(D);
                    this.logger.log(E.DEBUG, "Char codes =  " + F.join(",")),
                      r(a, f, this.cmdHistory);
                  }
                  return D;
                }),
                (s.parseBackgroundAttributes = function (a, f) {
                  var c = (a === 16 || a === 24) && f >= 32 && f <= 47,
                    D = (a === 23 || a === 31) && f >= 45 && f <= 47;
                  if (!(c || D)) return !1;
                  var x,
                    I = {};
                  a === 16 || a === 24
                    ? ((x = Math.floor((f - 32) / 2)),
                      (I.background = S[x]),
                      f % 2 === 1 && (I.background = I.background + "_semi"))
                    : f === 45
                    ? (I.background = "transparent")
                    : ((I.foreground = "black"),
                      f === 47 && (I.underline = !0));
                  var F = a <= 23 ? 1 : 2,
                    _ = this.channels[F];
                  return _.setBkgData(I), r(a, f, this.cmdHistory), !0;
                }),
                (s.reset = function () {
                  for (var a = 0; a < Object.keys(this.channels).length; a++) {
                    var f = this.channels[a];
                    f && f.reset();
                  }
                  this.cmdHistory = d();
                }),
                (s.cueSplitAtTime = function (a) {
                  for (var f = 0; f < this.channels.length; f++) {
                    var c = this.channels[f];
                    c && c.cueSplitAtTime(a);
                  }
                }),
                e
              );
            })();
          function r(e, s, u) {
            (u.a = e), (u.b = s);
          }
          function o(e, s, u) {
            return u.a === e && u.b === s;
          }
          function d() {
            return { a: null, b: null };
          }
          C.default = i;
        },
        "./src/utils/codecs.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "isCodecType", function () {
              return O;
            }),
            T.d(C, "isCodecSupportedInMp4", function () {
              return L;
            });
          var M = {
            audio: {
              a3ds: !0,
              "ac-3": !0,
              "ac-4": !0,
              alac: !0,
              alaw: !0,
              dra1: !0,
              "dts+": !0,
              "dts-": !0,
              dtsc: !0,
              dtse: !0,
              dtsh: !0,
              "ec-3": !0,
              enca: !0,
              g719: !0,
              g726: !0,
              m4ae: !0,
              mha1: !0,
              mha2: !0,
              mhm1: !0,
              mhm2: !0,
              mlpa: !0,
              mp4a: !0,
              "raw ": !0,
              Opus: !0,
              samr: !0,
              sawb: !0,
              sawp: !0,
              sevc: !0,
              sqcp: !0,
              ssmv: !0,
              twos: !0,
              ulaw: !0,
            },
            video: {
              avc1: !0,
              avc2: !0,
              avc3: !0,
              avc4: !0,
              avcp: !0,
              av01: !0,
              drac: !0,
              dvav: !0,
              dvhe: !0,
              encv: !0,
              hev1: !0,
              hvc1: !0,
              mjp2: !0,
              mp4v: !0,
              mvc1: !0,
              mvc2: !0,
              mvc3: !0,
              mvc4: !0,
              resv: !0,
              rv60: !0,
              s263: !0,
              svc1: !0,
              svc2: !0,
              "vc-1": !0,
              vp08: !0,
              vp09: !0,
            },
            text: { stpp: !0, wvtt: !0 },
          };
          function O(b, P) {
            var R = M[P];
            return !!R && R[b.slice(0, 4)] === !0;
          }
          function L(b, P) {
            return MediaSource.isTypeSupported(
              (P || "video") + '/mp4;codecs="' + b + '"'
            );
          }
        },
        "./src/utils/cues.ts": function (W, C, T) {
          "use strict";
          T.r(C);
          var M = T("./src/utils/vttparser.ts"),
            O = T("./src/utils/webvtt-parser.ts"),
            L = T("./src/utils/texttrack-utils.ts"),
            b = /\s/,
            P = {
              newCue: function (A, p, y, S) {
                for (
                  var E = [],
                    g,
                    m,
                    l,
                    t,
                    n,
                    h = self.VTTCue || self.TextTrackCue,
                    v = 0;
                  v < S.rows.length;
                  v++
                )
                  if (
                    ((g = S.rows[v]), (l = !0), (t = 0), (n = ""), !g.isEmpty())
                  ) {
                    for (var i = 0; i < g.chars.length; i++)
                      b.test(g.chars[i].uchar) && l
                        ? t++
                        : ((n += g.chars[i].uchar), (l = !1));
                    (g.cueStartTime = p),
                      p === y && (y += 1e-4),
                      t >= 16 ? t-- : t++;
                    var r = Object(M.fixLineBreaks)(n.trim()),
                      o = Object(O.generateCueId)(p, y, r);
                    (!A || !A.cues || !A.cues.getCueById(o)) &&
                      ((m = new h(p, y, r)),
                      (m.id = o),
                      (m.line = v + 1),
                      (m.align = "left"),
                      (m.position =
                        10 + Math.min(80, Math.floor((t * 8) / 32) * 10)),
                      E.push(m));
                  }
                return (
                  A &&
                    E.length &&
                    (E.sort(function (d, e) {
                      return d.line === "auto" || e.line === "auto"
                        ? 0
                        : d.line > 8 && e.line > 8
                        ? e.line - d.line
                        : d.line - e.line;
                    }),
                    E.forEach(function (d) {
                      return Object(L.addCueToTrack)(A, d);
                    })),
                  E
                );
              },
            };
          C.default = P;
        },
        "./src/utils/discontinuities.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "findFirstFragWithCC", function () {
              return b;
            }),
            T.d(C, "shouldAlignOnDiscontinuities", function () {
              return P;
            }),
            T.d(C, "findDiscontinuousReferenceFrag", function () {
              return R;
            }),
            T.d(C, "adjustSlidingStart", function () {
              return p;
            }),
            T.d(C, "alignStream", function () {
              return y;
            }),
            T.d(C, "alignPDT", function () {
              return E;
            }),
            T.d(C, "alignFragmentByPDTDelta", function () {
              return g;
            }),
            T.d(C, "alignMediaPlaylistByPDT", function () {
              return m;
            });
          var M = T("./src/polyfills/number.ts"),
            O = T("./src/utils/logger.ts"),
            L = T("./src/controller/level-helper.ts");
          function b(l, t) {
            for (var n = null, h = 0, v = l.length; h < v; h++) {
              var i = l[h];
              if (i && i.cc === t) {
                n = i;
                break;
              }
            }
            return n;
          }
          function P(l, t, n) {
            return !!(
              t.details &&
              (n.endCC > n.startCC || (l && l.cc < n.startCC))
            );
          }
          function R(l, t) {
            var n = l.fragments,
              h = t.fragments;
            if (!h.length || !n.length) {
              O.logger.log("No fragments to align");
              return;
            }
            var v = b(n, h[0].cc);
            if (!v || (v && !v.startPTS)) {
              O.logger.log("No frag in previous level to align on");
              return;
            }
            return v;
          }
          function A(l, t) {
            if (l) {
              var n = l.start + t;
              (l.start = l.startPTS = n), (l.endPTS = n + l.duration);
            }
          }
          function p(l, t) {
            for (var n = t.fragments, h = 0, v = n.length; h < v; h++)
              A(n[h], l);
            t.fragmentHint && A(t.fragmentHint, l), (t.alignedSliding = !0);
          }
          function y(l, t, n) {
            !t ||
              (S(l, n, t),
              !n.alignedSliding && t.details && E(n, t.details),
              !n.alignedSliding &&
                t.details &&
                !n.skippedSegments &&
                Object(L.adjustSliding)(t.details, n));
          }
          function S(l, t, n) {
            if (P(l, n, t)) {
              var h = R(n.details, t);
              h &&
                Object(M.isFiniteNumber)(h.start) &&
                (O.logger.log(
                  "Adjusting PTS using last level due to CC increase within current level " +
                    t.url
                ),
                p(h.start, t));
            }
          }
          function E(l, t) {
            if (
              !(
                !t.fragments.length ||
                !l.hasProgramDateTime ||
                !t.hasProgramDateTime
              )
            ) {
              var n = t.fragments[0].programDateTime,
                h = l.fragments[0].programDateTime,
                v = (h - n) / 1e3 + t.fragments[0].start;
              v &&
                Object(M.isFiniteNumber)(v) &&
                (O.logger.log(
                  "Adjusting PTS using programDateTime delta " +
                    (h - n) +
                    "ms, sliding:" +
                    v.toFixed(3) +
                    " " +
                    l.url +
                    " "
                ),
                p(v, l));
            }
          }
          function g(l, t) {
            var n = l.programDateTime;
            if (!!n) {
              var h = (n - t) / 1e3;
              (l.start = l.startPTS = h), (l.endPTS = h + l.duration);
            }
          }
          function m(l, t) {
            if (
              !(
                !t.fragments.length ||
                !l.hasProgramDateTime ||
                !t.hasProgramDateTime
              )
            ) {
              var n = t.fragments[0].programDateTime,
                h = t.fragments[0].start,
                v = n - h * 1e3;
              l.fragments.forEach(function (i) {
                g(i, v);
              }),
                l.fragmentHint && g(l.fragmentHint, v),
                (l.alignedSliding = !0);
            }
          }
        },
        "./src/utils/ewma-bandwidth-estimator.ts": function (W, C, T) {
          "use strict";
          T.r(C);
          var M = T("./src/utils/ewma.ts"),
            O = (function () {
              function L(P, R, A) {
                (this.defaultEstimate_ = void 0),
                  (this.minWeight_ = void 0),
                  (this.minDelayMs_ = void 0),
                  (this.slow_ = void 0),
                  (this.fast_ = void 0),
                  (this.defaultEstimate_ = A),
                  (this.minWeight_ = 0.001),
                  (this.minDelayMs_ = 50),
                  (this.slow_ = new M.default(P)),
                  (this.fast_ = new M.default(R));
              }
              var b = L.prototype;
              return (
                (b.update = function (R, A) {
                  var p = this.slow_,
                    y = this.fast_;
                  this.slow_.halfLife !== R &&
                    (this.slow_ = new M.default(
                      R,
                      p.getEstimate(),
                      p.getTotalWeight()
                    )),
                    this.fast_.halfLife !== A &&
                      (this.fast_ = new M.default(
                        A,
                        y.getEstimate(),
                        y.getTotalWeight()
                      ));
                }),
                (b.sample = function (R, A) {
                  R = Math.max(R, this.minDelayMs_);
                  var p = 8 * A,
                    y = R / 1e3,
                    S = p / y;
                  this.fast_.sample(y, S), this.slow_.sample(y, S);
                }),
                (b.canEstimate = function () {
                  var R = this.fast_;
                  return R && R.getTotalWeight() >= this.minWeight_;
                }),
                (b.getEstimate = function () {
                  return this.canEstimate()
                    ? Math.min(
                        this.fast_.getEstimate(),
                        this.slow_.getEstimate()
                      )
                    : this.defaultEstimate_;
                }),
                (b.destroy = function () {}),
                L
              );
            })();
          C.default = O;
        },
        "./src/utils/ewma.ts": function (W, C, T) {
          "use strict";
          T.r(C);
          var M = (function () {
            function O(b, P, R) {
              P === void 0 && (P = 0),
                R === void 0 && (R = 0),
                (this.halfLife = void 0),
                (this.alpha_ = void 0),
                (this.estimate_ = void 0),
                (this.totalWeight_ = void 0),
                (this.halfLife = b),
                (this.alpha_ = b ? Math.exp(Math.log(0.5) / b) : 0),
                (this.estimate_ = P),
                (this.totalWeight_ = R);
            }
            var L = O.prototype;
            return (
              (L.sample = function (P, R) {
                var A = Math.pow(this.alpha_, P);
                (this.estimate_ = R * (1 - A) + A * this.estimate_),
                  (this.totalWeight_ += P);
              }),
              (L.getTotalWeight = function () {
                return this.totalWeight_;
              }),
              (L.getEstimate = function () {
                if (this.alpha_) {
                  var P = 1 - Math.pow(this.alpha_, this.totalWeight_);
                  if (P) return this.estimate_ / P;
                }
                return this.estimate_;
              }),
              O
            );
          })();
          C.default = M;
        },
        "./src/utils/fetch-loader.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "fetchSupported", function () {
              return g;
            });
          var M = T("./src/polyfills/number.ts"),
            O = T("./src/loader/load-stats.ts"),
            L = T("./src/demux/chunk-cache.ts");
          function b(h, v) {
            (h.prototype = Object.create(v.prototype)),
              (h.prototype.constructor = h),
              y(h, v);
          }
          function P(h) {
            var v = typeof Map == "function" ? new Map() : void 0;
            return (
              (P = function (r) {
                if (r === null || !p(r)) return r;
                if (typeof r != "function")
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                if (typeof v < "u") {
                  if (v.has(r)) return v.get(r);
                  v.set(r, o);
                }
                function o() {
                  return R(r, arguments, S(this).constructor);
                }
                return (
                  (o.prototype = Object.create(r.prototype, {
                    constructor: {
                      value: o,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                  y(o, r)
                );
              }),
              P(h)
            );
          }
          function R(h, v, i) {
            return (
              A()
                ? (R = Reflect.construct.bind())
                : (R = function (o, d, e) {
                    var s = [null];
                    s.push.apply(s, d);
                    var u = Function.bind.apply(o, s),
                      a = new u();
                    return e && y(a, e.prototype), a;
                  }),
              R.apply(null, arguments)
            );
          }
          function A() {
            if (
              typeof Reflect > "u" ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if (typeof Proxy == "function") return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch {
              return !1;
            }
          }
          function p(h) {
            return Function.toString.call(h).indexOf("[native code]") !== -1;
          }
          function y(h, v) {
            return (
              (y = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (r, o) {
                    return (r.__proto__ = o), r;
                  }),
              y(h, v)
            );
          }
          function S(h) {
            return (
              (S = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (i) {
                    return i.__proto__ || Object.getPrototypeOf(i);
                  }),
              S(h)
            );
          }
          function E() {
            return (
              (E = Object.assign
                ? Object.assign.bind()
                : function (h) {
                    for (var v = 1; v < arguments.length; v++) {
                      var i = arguments[v];
                      for (var r in i)
                        Object.prototype.hasOwnProperty.call(i, r) &&
                          (h[r] = i[r]);
                    }
                    return h;
                  }),
              E.apply(this, arguments)
            );
          }
          function g() {
            if (
              self.fetch &&
              self.AbortController &&
              self.ReadableStream &&
              self.Request
            )
              try {
                return new self.ReadableStream({}), !0;
              } catch {}
            return !1;
          }
          var m = (function () {
            function h(i) {
              (this.fetchSetup = void 0),
                (this.requestTimeout = void 0),
                (this.request = void 0),
                (this.response = void 0),
                (this.controller = void 0),
                (this.context = void 0),
                (this.config = null),
                (this.callbacks = null),
                (this.stats = void 0),
                (this.loader = null),
                (this.fetchSetup = i.fetchSetup || t),
                (this.controller = new self.AbortController()),
                (this.stats = new O.LoadStats());
            }
            var v = h.prototype;
            return (
              (v.destroy = function () {
                (this.loader = this.callbacks = null), this.abortInternal();
              }),
              (v.abortInternal = function () {
                var r = this.response;
                (!r || !r.ok) &&
                  ((this.stats.aborted = !0), this.controller.abort());
              }),
              (v.abort = function () {
                var r;
                this.abortInternal(),
                  (r = this.callbacks) !== null &&
                    r !== void 0 &&
                    r.onAbort &&
                    this.callbacks.onAbort(
                      this.stats,
                      this.context,
                      this.response
                    );
              }),
              (v.load = function (r, o, d) {
                var e = this,
                  s = this.stats;
                if (s.loading.start)
                  throw new Error("Loader can only be used once.");
                s.loading.start = self.performance.now();
                var u = l(r, this.controller.signal),
                  a = d.onProgress,
                  f = r.responseType === "arraybuffer",
                  c = f ? "byteLength" : "length";
                (this.context = r),
                  (this.config = o),
                  (this.callbacks = d),
                  (this.request = this.fetchSetup(r, u)),
                  self.clearTimeout(this.requestTimeout),
                  (this.requestTimeout = self.setTimeout(function () {
                    e.abortInternal(), d.onTimeout(s, r, e.response);
                  }, o.timeout)),
                  self
                    .fetch(this.request)
                    .then(function (D) {
                      if (((e.response = e.loader = D), !D.ok)) {
                        var x = D.status,
                          I = D.statusText;
                        throw new n(I || "fetch, bad network response", x, D);
                      }
                      return (
                        (s.loading.first = Math.max(
                          self.performance.now(),
                          s.loading.start
                        )),
                        (s.total = parseInt(
                          D.headers.get("Content-Length") || "0"
                        )),
                        a && Object(M.isFiniteNumber)(o.highWaterMark)
                          ? e.loadProgressively(D, s, r, o.highWaterMark, a)
                          : f
                          ? D.arrayBuffer()
                          : D.text()
                      );
                    })
                    .then(function (D) {
                      var x = e.response;
                      self.clearTimeout(e.requestTimeout),
                        (s.loading.end = Math.max(
                          self.performance.now(),
                          s.loading.first
                        )),
                        (s.loaded = s.total = D[c]);
                      var I = { url: x.url, data: D };
                      a &&
                        !Object(M.isFiniteNumber)(o.highWaterMark) &&
                        a(s, r, D, x),
                        d.onSuccess(I, s, r, x);
                    })
                    .catch(function (D) {
                      if ((self.clearTimeout(e.requestTimeout), !s.aborted)) {
                        var x = (D && D.code) || 0,
                          I = D ? D.message : null;
                        d.onError(
                          { code: x, text: I },
                          r,
                          D ? D.details : null
                        );
                      }
                    });
              }),
              (v.getCacheAge = function () {
                var r = null;
                if (this.response) {
                  var o = this.response.headers.get("age");
                  r = o ? parseFloat(o) : null;
                }
                return r;
              }),
              (v.loadProgressively = function (r, o, d, e, s) {
                e === void 0 && (e = 0);
                var u = new L.default(),
                  a = r.body.getReader(),
                  f = function c() {
                    return a
                      .read()
                      .then(function (D) {
                        if (D.done)
                          return (
                            u.dataLength && s(o, d, u.flush(), r),
                            Promise.resolve(new ArrayBuffer(0))
                          );
                        var x = D.value,
                          I = x.length;
                        return (
                          (o.loaded += I),
                          I < e || u.dataLength
                            ? (u.push(x),
                              u.dataLength >= e && s(o, d, u.flush(), r))
                            : s(o, d, x, r),
                          c()
                        );
                      })
                      .catch(function () {
                        return Promise.reject();
                      });
                  };
                return f();
              }),
              h
            );
          })();
          function l(h, v) {
            var i = {
              method: "GET",
              mode: "cors",
              credentials: "same-origin",
              signal: v,
              headers: new self.Headers(E({}, h.headers)),
            };
            return (
              h.rangeEnd &&
                i.headers.set(
                  "Range",
                  "bytes=" + h.rangeStart + "-" + String(h.rangeEnd - 1)
                ),
              i
            );
          }
          function t(h, v) {
            return new self.Request(h.url, v);
          }
          var n = (function (h) {
            b(v, h);
            function v(i, r, o) {
              var d;
              return (
                (d = h.call(this, i) || this),
                (d.code = void 0),
                (d.details = void 0),
                (d.code = r),
                (d.details = o),
                d
              );
            }
            return v;
          })(P(Error));
          C.default = m;
        },
        "./src/utils/imsc1-ttml-parser.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "IMSC1_CODEC", function () {
              return p;
            }),
            T.d(C, "parseIMSC1", function () {
              return g;
            });
          var M = T("./src/utils/mp4-tools.ts"),
            O = T("./src/utils/vttparser.ts"),
            L = T("./src/utils/vttcue.ts"),
            b = T("./src/demux/id3.ts"),
            P = T("./src/utils/timescale-conversion.ts"),
            R = T("./src/utils/webvtt-parser.ts");
          function A() {
            return (
              (A = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var s = 1; s < arguments.length; s++) {
                      var u = arguments[s];
                      for (var a in u)
                        Object.prototype.hasOwnProperty.call(u, a) &&
                          (e[a] = u[a]);
                    }
                    return e;
                  }),
              A.apply(this, arguments)
            );
          }
          var p = "stpp.ttml.im1t",
            y = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
            S = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
            E = {
              left: "start",
              center: "center",
              right: "end",
              start: "start",
              end: "end",
            };
          function g(e, s, u, a, f) {
            var c = Object(M.findBox)(new Uint8Array(e), ["mdat"]);
            if (c.length === 0) {
              f(new Error("Could not parse IMSC1 mdat"));
              return;
            }
            var D = c.map(function (I) {
                return Object(b.utf8ArrayToStr)(I);
              }),
              x = Object(P.toTimescaleFromScale)(s, 1, u);
            try {
              D.forEach(function (I) {
                return a(m(I, x));
              });
            } catch (I) {
              f(I);
            }
          }
          function m(e, s) {
            var u = new DOMParser(),
              a = u.parseFromString(e, "text/xml"),
              f = a.getElementsByTagName("tt")[0];
            if (!f) throw new Error("Invalid ttml");
            var c = {
                frameRate: 30,
                subFrameRate: 1,
                frameRateMultiplier: 0,
                tickRate: 0,
              },
              D = Object.keys(c).reduce(function (B, U) {
                return (B[U] = f.getAttribute("ttp:" + U) || c[U]), B;
              }, {}),
              x = f.getAttribute("xml:space") !== "preserve",
              I = t(l(f, "styling", "style")),
              F = t(l(f, "layout", "region")),
              _ = l(f, "body", "[begin]");
            return [].map
              .call(_, function (B) {
                var U = n(B, x);
                if (!U || !B.hasAttribute("begin")) return null;
                var N = r(B.getAttribute("begin"), D),
                  w = r(B.getAttribute("dur"), D),
                  k = r(B.getAttribute("end"), D);
                if (N === null) throw i(B);
                if (k === null) {
                  if (w === null) throw i(B);
                  k = N + w;
                }
                var K = new L.default(N - s, k - s, U);
                K.id = Object(R.generateCueId)(K.startTime, K.endTime, K.text);
                var j = F[B.getAttribute("region")],
                  G = I[B.getAttribute("style")];
                (K.position = 10), (K.size = 80);
                var Y = h(j, G, I),
                  X = Y.textAlign;
                if (X) {
                  var z = E[X];
                  z && (K.lineAlign = z), (K.align = X);
                }
                return A(K, Y), K;
              })
              .filter(function (B) {
                return B !== null;
              });
          }
          function l(e, s, u) {
            var a = e.getElementsByTagName(s)[0];
            return a ? [].slice.call(a.querySelectorAll(u)) : [];
          }
          function t(e) {
            return e.reduce(function (s, u) {
              var a = u.getAttribute("xml:id");
              return a && (s[a] = u), s;
            }, {});
          }
          function n(e, s) {
            return [].slice.call(e.childNodes).reduce(function (u, a, f) {
              var c;
              return a.nodeName === "br" && f
                ? u +
                    `
`
                : (c = a.childNodes) !== null && c !== void 0 && c.length
                ? n(a, s)
                : s
                ? u + a.textContent.trim().replace(/\s+/g, " ")
                : u + a.textContent;
            }, "");
          }
          function h(e, s, u) {
            var a = "http://www.w3.org/ns/ttml#styling",
              f = null,
              c = [
                "displayAlign",
                "textAlign",
                "color",
                "backgroundColor",
                "fontSize",
                "fontFamily",
              ],
              D =
                e != null && e.hasAttribute("style")
                  ? e.getAttribute("style")
                  : null;
            return (
              D && u.hasOwnProperty(D) && (f = u[D]),
              c.reduce(function (x, I) {
                var F = v(s, a, I) || v(e, a, I) || v(f, a, I);
                return F && (x[I] = F), x;
              }, {})
            );
          }
          function v(e, s, u) {
            return e && e.hasAttributeNS(s, u) ? e.getAttributeNS(s, u) : null;
          }
          function i(e) {
            return new Error("Could not parse ttml timestamp " + e);
          }
          function r(e, s) {
            if (!e) return null;
            var u = Object(O.parseTimeStamp)(e);
            return (
              u === null &&
                (y.test(e) ? (u = o(e, s)) : S.test(e) && (u = d(e, s))),
              u
            );
          }
          function o(e, s) {
            var u = y.exec(e),
              a = (u[4] | 0) + (u[5] | 0) / s.subFrameRate;
            return (
              (u[1] | 0) * 3600 + (u[2] | 0) * 60 + (u[3] | 0) + a / s.frameRate
            );
          }
          function d(e, s) {
            var u = S.exec(e),
              a = Number(u[1]),
              f = u[2];
            switch (f) {
              case "h":
                return a * 3600;
              case "m":
                return a * 60;
              case "ms":
                return a * 1e3;
              case "f":
                return a / s.frameRate;
              case "t":
                return a / s.tickRate;
            }
            return a;
          }
        },
        "./src/utils/logger.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "enableLogs", function () {
              return R;
            }),
            T.d(C, "logger", function () {
              return A;
            });
          var M = function () {},
            O = { trace: M, debug: M, log: M, warn: M, info: M, error: M },
            L = O;
          function b(p) {
            var y = self.console[p];
            return y ? y.bind(self.console, "[" + p + "] >") : M;
          }
          function P(p) {
            for (
              var y = arguments.length, S = new Array(y > 1 ? y - 1 : 0), E = 1;
              E < y;
              E++
            )
              S[E - 1] = arguments[E];
            S.forEach(function (g) {
              L[g] = p[g] ? p[g].bind(p) : b(g);
            });
          }
          function R(p) {
            if ((self.console && p === !0) || typeof p == "object") {
              P(p, "debug", "log", "info", "warn", "error");
              try {
                L.log();
              } catch {
                L = O;
              }
            } else L = O;
          }
          var A = L;
        },
        "./src/utils/mediakeys-helper.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "KeySystems", function () {
              return M;
            }),
            T.d(C, "requestMediaKeySystemAccess", function () {
              return O;
            });
          var M;
          (function (L) {
            (L.WIDEVINE = "com.widevine.alpha"),
              (L.PLAYREADY = "com.microsoft.playready");
          })(M || (M = {}));
          var O = (function () {
            return typeof self < "u" &&
              self.navigator &&
              self.navigator.requestMediaKeySystemAccess
              ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator)
              : null;
          })();
        },
        "./src/utils/mediasource-helper.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "getMediaSource", function () {
              return M;
            });
          function M() {
            return self.MediaSource || self.WebKitMediaSource;
          }
        },
        "./src/utils/mp4-tools.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "RemuxerTrackIdConfig", function () {
              return R;
            }),
            T.d(C, "bin2str", function () {
              return A;
            }),
            T.d(C, "readUint16", function () {
              return p;
            }),
            T.d(C, "readUint32", function () {
              return y;
            }),
            T.d(C, "readSint32", function () {
              return S;
            }),
            T.d(C, "writeUint32", function () {
              return E;
            }),
            T.d(C, "findBox", function () {
              return g;
            }),
            T.d(C, "parseSegmentIndex", function () {
              return m;
            }),
            T.d(C, "parseInitSegment", function () {
              return l;
            }),
            T.d(C, "getStartDTS", function () {
              return t;
            }),
            T.d(C, "getDuration", function () {
              return n;
            }),
            T.d(C, "computeRawDurationFromSamples", function () {
              return h;
            }),
            T.d(C, "offsetStartDTS", function () {
              return v;
            }),
            T.d(C, "segmentValidRange", function () {
              return i;
            }),
            T.d(C, "appendUint8Array", function () {
              return r;
            }),
            T.d(C, "parseSamples", function () {
              return o;
            }),
            T.d(C, "parseSEIMessageFromNALu", function () {
              return s;
            }),
            T.d(C, "parseEmsg", function () {
              return a;
            });
          var M = T("./src/utils/typed-array.ts"),
            O = T("./src/loader/fragment.ts"),
            L = T("./src/demux/id3.ts"),
            b = Math.pow(2, 32) - 1,
            P = [].push,
            R = { video: 1, audio: 2, id3: 3, text: 4 };
          function A(f) {
            return String.fromCharCode.apply(null, f);
          }
          function p(f, c) {
            var D = (f[c] << 8) | f[c + 1];
            return D < 0 ? 65536 + D : D;
          }
          function y(f, c) {
            var D = S(f, c);
            return D < 0 ? 4294967296 + D : D;
          }
          function S(f, c) {
            return (f[c] << 24) | (f[c + 1] << 16) | (f[c + 2] << 8) | f[c + 3];
          }
          function E(f, c, D) {
            (f[c] = D >> 24),
              (f[c + 1] = (D >> 16) & 255),
              (f[c + 2] = (D >> 8) & 255),
              (f[c + 3] = D & 255);
          }
          function g(f, c) {
            var D = [];
            if (!c.length) return D;
            for (var x = f.byteLength, I = 0; I < x; ) {
              var F = y(f, I),
                _ = A(f.subarray(I + 4, I + 8)),
                B = F > 1 ? I + F : x;
              if (_ === c[0])
                if (c.length === 1) D.push(f.subarray(I + 8, B));
                else {
                  var U = g(f.subarray(I + 8, B), c.slice(1));
                  U.length && P.apply(D, U);
                }
              I = B;
            }
            return D;
          }
          function m(f) {
            var c = [],
              D = f[0],
              x = 8,
              I = y(f, x);
            x += 4;
            var F = 0,
              _ = 0;
            D === 0 ? (x += 8) : (x += 16), (x += 2);
            var B = f.length + _,
              U = p(f, x);
            x += 2;
            for (var N = 0; N < U; N++) {
              var w = x,
                k = y(f, w);
              w += 4;
              var K = k & 2147483647,
                j = (k & 2147483648) >>> 31;
              if (j === 1)
                return (
                  console.warn(
                    "SIDX has hierarchical references (not supported)"
                  ),
                  null
                );
              var G = y(f, w);
              (w += 4),
                c.push({
                  referenceSize: K,
                  subsegmentDuration: G,
                  info: { duration: G / I, start: B, end: B + K - 1 },
                }),
                (B += K),
                (w += 4),
                (x = w);
            }
            return {
              earliestPresentationTime: F,
              timescale: I,
              version: D,
              referencesCount: U,
              references: c,
            };
          }
          function l(f) {
            for (
              var c = [], D = g(f, ["moov", "trak"]), x = 0;
              x < D.length;
              x++
            ) {
              var I = D[x],
                F = g(I, ["tkhd"])[0];
              if (F) {
                var _ = F[0],
                  B = _ === 0 ? 12 : 20,
                  U = y(F, B),
                  N = g(I, ["mdia", "mdhd"])[0];
                if (N) {
                  (_ = N[0]), (B = _ === 0 ? 12 : 20);
                  var w = y(N, B),
                    k = g(I, ["mdia", "hdlr"])[0];
                  if (k) {
                    var K = A(k.subarray(8, 12)),
                      j = {
                        soun: O.ElementaryStreamTypes.AUDIO,
                        vide: O.ElementaryStreamTypes.VIDEO,
                      }[K];
                    if (j) {
                      var G = g(I, ["mdia", "minf", "stbl", "stsd"])[0],
                        Y = void 0;
                      G && (Y = A(G.subarray(12, 16))),
                        (c[U] = { timescale: w, type: j }),
                        (c[j] = { timescale: w, id: U, codec: Y });
                    }
                  }
                }
              }
            }
            var X = g(f, ["moov", "mvex", "trex"]);
            return (
              X.forEach(function (z) {
                var H = y(z, 4),
                  Q = c[H];
                Q && (Q.default = { duration: y(z, 12), flags: y(z, 20) });
              }),
              c
            );
          }
          function t(f, c) {
            return (
              g(c, ["moof", "traf"]).reduce(function (D, x) {
                var I = g(x, ["tfdt"])[0],
                  F = I[0],
                  _ = g(x, ["tfhd"]).reduce(function (B, U) {
                    var N = y(U, 4),
                      w = f[N];
                    if (w) {
                      var k = y(I, 4);
                      F === 1 && ((k *= Math.pow(2, 32)), (k += y(I, 8)));
                      var K = w.timescale || 9e4,
                        j = k / K;
                      if (isFinite(j) && (B === null || j < B)) return j;
                    }
                    return B;
                  }, null);
                return _ !== null && isFinite(_) && (D === null || _ < D)
                  ? _
                  : D;
              }, null) || 0
            );
          }
          function n(f, c) {
            for (
              var D = 0, x = 0, I = 0, F = g(f, ["moof", "traf"]), _ = 0;
              _ < F.length;
              _++
            ) {
              var B = F[_],
                U = g(B, ["tfhd"])[0],
                N = y(U, 4),
                w = c[N];
              if (!!w) {
                var k = w.default,
                  K = y(U, 0) | k?.flags,
                  j = k?.duration;
                K & 8 && (K & 2 ? (j = y(U, 12)) : (j = y(U, 8)));
                for (
                  var G = w.timescale || 9e4, Y = g(B, ["trun"]), X = 0;
                  X < Y.length;
                  X++
                ) {
                  if (((D = h(Y[X])), !D && j)) {
                    var z = y(Y[X], 4);
                    D = j * z;
                  }
                  w.type === O.ElementaryStreamTypes.VIDEO
                    ? (x += D / G)
                    : w.type === O.ElementaryStreamTypes.AUDIO && (I += D / G);
                }
              }
            }
            if (x === 0 && I === 0) {
              for (var H = 0, Q = g(f, ["sidx"]), $ = 0; $ < Q.length; $++) {
                var V = m(Q[$]);
                V != null &&
                  V.references &&
                  (H += V.references.reduce(function (J, Z) {
                    return J + Z.info.duration || 0;
                  }, 0));
              }
              return H;
            }
            return x || I;
          }
          function h(f) {
            var c = y(f, 0),
              D = 8;
            c & 1 && (D += 4), c & 4 && (D += 4);
            for (var x = 0, I = y(f, 4), F = 0; F < I; F++) {
              if (c & 256) {
                var _ = y(f, D);
                (x += _), (D += 4);
              }
              c & 512 && (D += 4), c & 1024 && (D += 4), c & 2048 && (D += 4);
            }
            return x;
          }
          function v(f, c, D) {
            g(c, ["moof", "traf"]).forEach(function (x) {
              g(x, ["tfhd"]).forEach(function (I) {
                var F = y(I, 4),
                  _ = f[F];
                if (!!_) {
                  var B = _.timescale || 9e4;
                  g(x, ["tfdt"]).forEach(function (U) {
                    var N = U[0],
                      w = y(U, 4);
                    if (N === 0) (w -= D * B), (w = Math.max(w, 0)), E(U, 4, w);
                    else {
                      (w *= Math.pow(2, 32)),
                        (w += y(U, 8)),
                        (w -= D * B),
                        (w = Math.max(w, 0));
                      var k = Math.floor(w / (b + 1)),
                        K = Math.floor(w % (b + 1));
                      E(U, 4, k), E(U, 8, K);
                    }
                  });
                }
              });
            });
          }
          function i(f) {
            var c = { valid: null, remainder: null },
              D = g(f, ["moof"]);
            if (D) {
              if (D.length < 2) return (c.remainder = f), c;
            } else return c;
            var x = D[D.length - 1];
            return (
              (c.valid = Object(M.sliceUint8)(f, 0, x.byteOffset - 8)),
              (c.remainder = Object(M.sliceUint8)(f, x.byteOffset - 8)),
              c
            );
          }
          function r(f, c) {
            var D = new Uint8Array(f.length + c.length);
            return D.set(f), D.set(c, f.length), D;
          }
          function o(f, c) {
            var D = [],
              x = c.samples,
              I = c.timescale,
              F = c.id,
              _ = !1,
              B = g(x, ["moof"]);
            return (
              B.map(function (U) {
                var N = U.byteOffset - 8,
                  w = g(U, ["traf"]);
                w.map(function (k) {
                  var K = g(k, ["tfdt"]).map(function (j) {
                    var G = j[0],
                      Y = y(j, 4);
                    return (
                      G === 1 && ((Y *= Math.pow(2, 32)), (Y += y(j, 8))), Y / I
                    );
                  })[0];
                  return (
                    K !== void 0 && (f = K),
                    g(k, ["tfhd"]).map(function (j) {
                      var G = y(j, 4),
                        Y = y(j, 0) & 16777215,
                        X = (Y & 1) !== 0,
                        z = (Y & 2) !== 0,
                        H = (Y & 8) !== 0,
                        Q = 0,
                        $ = (Y & 16) !== 0,
                        V = 0,
                        J = (Y & 32) !== 0,
                        Z = 8;
                      G === F &&
                        (X && (Z += 8),
                        z && (Z += 4),
                        H && ((Q = y(j, Z)), (Z += 4)),
                        $ && ((V = y(j, Z)), (Z += 4)),
                        J && (Z += 4),
                        c.type === "video" && (_ = d(c.codec)),
                        g(k, ["trun"]).map(function (q) {
                          var ot = q[0],
                            tt = y(q, 0) & 16777215,
                            ut = (tt & 1) !== 0,
                            nt = 0,
                            ft = (tt & 4) !== 0,
                            rt = (tt & 256) !== 0,
                            dt = 0,
                            ct = (tt & 512) !== 0,
                            gt = 0,
                            ht = (tt & 1024) !== 0,
                            Tt = (tt & 2048) !== 0,
                            lt = 0,
                            yt = y(q, 4),
                            it = 8;
                          ut && ((nt = y(q, it)), (it += 4)), ft && (it += 4);
                          for (var st = nt + N, mt = 0; mt < yt; mt++) {
                            if (
                              (rt ? ((dt = y(q, it)), (it += 4)) : (dt = Q),
                              ct ? ((gt = y(q, it)), (it += 4)) : (gt = V),
                              ht && (it += 4),
                              Tt &&
                                (ot === 0 ? (lt = y(q, it)) : (lt = S(q, it)),
                                (it += 4)),
                              c.type === O.ElementaryStreamTypes.VIDEO)
                            )
                              for (var at = 0; at < gt; ) {
                                var et = y(x, st);
                                st += 4;
                                var xt = x[st] & 31;
                                if (e(_, xt)) {
                                  var vt = x.subarray(st, st + et);
                                  s(vt, f + lt / I, D);
                                }
                                (st += et), (at += et + 4);
                              }
                            f += dt / I;
                          }
                        }));
                    })
                  );
                });
              }),
              D
            );
          }
          function d(f) {
            if (!f) return !1;
            var c = f.indexOf("."),
              D = c < 0 ? f : f.substring(0, c);
            return D === "hvc1" || D === "hev1" || D === "dvh1" || D === "dvhe";
          }
          function e(f, c) {
            return f ? c === 39 || c === 40 : c === 6;
          }
          function s(f, c, D) {
            var x = u(f),
              I = 0;
            I++;
            for (var F = 0, _ = 0, B = !1, U = 0; I < x.length; ) {
              F = 0;
              do {
                if (I >= x.length) break;
                (U = x[I++]), (F += U);
              } while (U === 255);
              _ = 0;
              do {
                if (I >= x.length) break;
                (U = x[I++]), (_ += U);
              } while (U === 255);
              var N = x.length - I;
              if (!B && F === 4 && I < x.length) {
                B = !0;
                var w = x[I++];
                if (w === 181) {
                  var k = p(x, I);
                  if (((I += 2), k === 49)) {
                    var K = y(x, I);
                    if (((I += 4), K === 1195456820)) {
                      var j = x[I++];
                      if (j === 3) {
                        var G = x[I++],
                          Y = 31 & G,
                          X = 64 & G,
                          z = X ? 2 + Y * 3 : 0,
                          H = new Uint8Array(z);
                        if (X) {
                          H[0] = G;
                          for (var Q = 1; Q < z; Q++) H[Q] = x[I++];
                        }
                        D.push({ type: j, payloadType: F, pts: c, bytes: H });
                      }
                    }
                  }
                }
              } else if (F === 5 && _ < N) {
                if (((B = !0), _ > 16)) {
                  for (var $ = [], V = 0; V < 16; V++) {
                    var J = x[I++].toString(16);
                    $.push(J.length == 1 ? "0" + J : J),
                      (V === 3 || V === 5 || V === 7 || V === 9) && $.push("-");
                  }
                  for (
                    var Z = _ - 16, q = new Uint8Array(Z), ot = 0;
                    ot < Z;
                    ot++
                  )
                    q[ot] = x[I++];
                  D.push({
                    payloadType: F,
                    pts: c,
                    uuid: $.join(""),
                    userData: Object(L.utf8ArrayToStr)(q),
                    userDataBytes: q,
                  });
                }
              } else if (_ < N) I += _;
              else if (_ > N) break;
            }
          }
          function u(f) {
            for (var c = f.byteLength, D = [], x = 1; x < c - 2; )
              f[x] === 0 && f[x + 1] === 0 && f[x + 2] === 3
                ? (D.push(x + 2), (x += 2))
                : x++;
            if (D.length === 0) return f;
            var I = c - D.length,
              F = new Uint8Array(I),
              _ = 0;
            for (x = 0; x < I; _++, x++)
              _ === D[0] && (_++, D.shift()), (F[x] = f[_]);
            return F;
          }
          function a(f) {
            var c = f[0],
              D = "",
              x = "",
              I = 0,
              F = 0,
              _ = 0,
              B = 0,
              U = 0,
              N = 0;
            if (c === 0) {
              for (; A(f.subarray(N, N + 1)) !== "\0"; )
                (D += A(f.subarray(N, N + 1))), (N += 1);
              for (
                D += A(f.subarray(N, N + 1)), N += 1;
                A(f.subarray(N, N + 1)) !== "\0";

              )
                (x += A(f.subarray(N, N + 1))), (N += 1);
              (x += A(f.subarray(N, N + 1))),
                (N += 1),
                (I = y(f, 12)),
                (F = y(f, 16)),
                (B = y(f, 20)),
                (U = y(f, 24)),
                (N = 28);
            } else if (c === 1) {
              (N += 4), (I = y(f, N)), (N += 4);
              var w = y(f, N);
              N += 4;
              var k = y(f, N);
              for (
                N += 4,
                  _ = Math.pow(2, 32) * w + k,
                  Number.isSafeInteger(_) ||
                    ((_ = Number.MAX_SAFE_INTEGER),
                    console.warn(
                      "Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box"
                    )),
                  B = y(f, N),
                  N += 4,
                  U = y(f, N),
                  N += 4;
                A(f.subarray(N, N + 1)) !== "\0";

              )
                (D += A(f.subarray(N, N + 1))), (N += 1);
              for (
                D += A(f.subarray(N, N + 1)), N += 1;
                A(f.subarray(N, N + 1)) !== "\0";

              )
                (x += A(f.subarray(N, N + 1))), (N += 1);
              (x += A(f.subarray(N, N + 1))), (N += 1);
            }
            var K = f.subarray(N, f.byteLength);
            return {
              schemeIdUri: D,
              value: x,
              timeScale: I,
              presentationTime: _,
              presentationTimeDelta: F,
              eventDuration: B,
              id: U,
              payload: K,
            };
          }
        },
        "./src/utils/output-filter.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "default", function () {
              return M;
            });
          var M = (function () {
            function O(b, P) {
              (this.timelineController = void 0),
                (this.cueRanges = []),
                (this.trackName = void 0),
                (this.startTime = null),
                (this.endTime = null),
                (this.screen = null),
                (this.timelineController = b),
                (this.trackName = P);
            }
            var L = O.prototype;
            return (
              (L.dispatchCue = function () {
                this.startTime !== null &&
                  (this.timelineController.addCues(
                    this.trackName,
                    this.startTime,
                    this.endTime,
                    this.screen,
                    this.cueRanges
                  ),
                  (this.startTime = null));
              }),
              (L.newCue = function (P, R, A) {
                (this.startTime === null || this.startTime > P) &&
                  (this.startTime = P),
                  (this.endTime = R),
                  (this.screen = A),
                  this.timelineController.createCaptionsTrack(this.trackName);
              }),
              (L.reset = function () {
                (this.cueRanges = []), (this.startTime = null);
              }),
              O
            );
          })();
        },
        "./src/utils/texttrack-utils.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "sendAddTrackEvent", function () {
              return O;
            }),
            T.d(C, "addCueToTrack", function () {
              return L;
            }),
            T.d(C, "clearCurrentCues", function () {
              return b;
            }),
            T.d(C, "removeCuesInRange", function () {
              return P;
            }),
            T.d(C, "getCuesInRange", function () {
              return A;
            });
          var M = T("./src/utils/logger.ts");
          function O(p, y) {
            var S;
            try {
              S = new Event("addtrack");
            } catch {
              (S = document.createEvent("Event")),
                S.initEvent("addtrack", !1, !1);
            }
            (S.track = p), y.dispatchEvent(S);
          }
          function L(p, y) {
            var S = p.mode;
            if (
              (S === "disabled" && (p.mode = "hidden"),
              p.cues && !p.cues.getCueById(y.id))
            )
              try {
                if ((p.addCue(y), !p.cues.getCueById(y.id)))
                  throw new Error("addCue is failed for: " + y);
              } catch (g) {
                M.logger.debug("[texttrack-utils]: " + g);
                var E = new self.TextTrackCue(y.startTime, y.endTime, y.text);
                (E.id = y.id), p.addCue(E);
              }
            S === "disabled" && (p.mode = S);
          }
          function b(p) {
            var y = p.mode;
            if ((y === "disabled" && (p.mode = "hidden"), p.cues))
              for (var S = p.cues.length; S--; ) p.removeCue(p.cues[S]);
            y === "disabled" && (p.mode = y);
          }
          function P(p, y, S, E) {
            var g = p.mode;
            if (
              (g === "disabled" && (p.mode = "hidden"),
              p.cues && p.cues.length > 0)
            )
              for (var m = A(p.cues, y, S), l = 0; l < m.length; l++)
                (!E || E(m[l])) && p.removeCue(m[l]);
            g === "disabled" && (p.mode = g);
          }
          function R(p, y) {
            if (y < p[0].startTime) return 0;
            var S = p.length - 1;
            if (y > p[S].endTime) return -1;
            for (var E = 0, g = S; E <= g; ) {
              var m = Math.floor((g + E) / 2);
              if (y < p[m].startTime) g = m - 1;
              else if (y > p[m].startTime && E < S) E = m + 1;
              else return m;
            }
            return p[E].startTime - y < y - p[g].startTime ? E : g;
          }
          function A(p, y, S) {
            var E = [],
              g = R(p, y);
            if (g > -1)
              for (var m = g, l = p.length; m < l; m++) {
                var t = p[m];
                if (t.startTime >= y && t.endTime <= S) E.push(t);
                else if (t.startTime > S) return E;
              }
            return E;
          }
        },
        "./src/utils/time-ranges.ts": function (W, C, T) {
          "use strict";
          T.r(C);
          var M = {
            toString: function (L) {
              for (var b = "", P = L.length, R = 0; R < P; R++)
                b +=
                  "[" + L.start(R).toFixed(3) + "," + L.end(R).toFixed(3) + "]";
              return b;
            },
          };
          C.default = M;
        },
        "./src/utils/timescale-conversion.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "toTimescaleFromBase", function () {
              return O;
            }),
            T.d(C, "toTimescaleFromScale", function () {
              return L;
            }),
            T.d(C, "toMsFromMpegTsClock", function () {
              return b;
            }),
            T.d(C, "toMpegTsClockFromTimescale", function () {
              return P;
            });
          var M = 9e4;
          function O(R, A, p, y) {
            p === void 0 && (p = 1), y === void 0 && (y = !1);
            var S = R * A * p;
            return y ? Math.round(S) : S;
          }
          function L(R, A, p, y) {
            return (
              p === void 0 && (p = 1),
              y === void 0 && (y = !1),
              O(R, A, 1 / p, y)
            );
          }
          function b(R, A) {
            return A === void 0 && (A = !1), O(R, 1e3, 1 / M, A);
          }
          function P(R, A) {
            return A === void 0 && (A = 1), O(R, M, 1 / A);
          }
        },
        "./src/utils/typed-array.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "sliceUint8", function () {
              return M;
            });
          function M(O, L, b) {
            return Uint8Array.prototype.slice
              ? O.slice(L, b)
              : new Uint8Array(Array.prototype.slice.call(O, L, b));
          }
        },
        "./src/utils/vttcue.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            (C.default = (function () {
              if (typeof self < "u" && self.VTTCue) return self.VTTCue;
              var M = ["", "lr", "rl"],
                O = ["start", "middle", "end", "left", "right"];
              function L(p, y) {
                if (typeof y != "string" || !Array.isArray(p)) return !1;
                var S = y.toLowerCase();
                return ~p.indexOf(S) ? S : !1;
              }
              function b(p) {
                return L(M, p);
              }
              function P(p) {
                return L(O, p);
              }
              function R(p) {
                for (
                  var y = arguments.length,
                    S = new Array(y > 1 ? y - 1 : 0),
                    E = 1;
                  E < y;
                  E++
                )
                  S[E - 1] = arguments[E];
                for (var g = 1; g < arguments.length; g++) {
                  var m = arguments[g];
                  for (var l in m) p[l] = m[l];
                }
                return p;
              }
              function A(p, y, S) {
                var E = this,
                  g = { enumerable: !0 };
                E.hasBeenReset = !1;
                var m = "",
                  l = !1,
                  t = p,
                  n = y,
                  h = S,
                  v = null,
                  i = "",
                  r = !0,
                  o = "auto",
                  d = "start",
                  e = 50,
                  s = "middle",
                  u = 50,
                  a = "middle";
                Object.defineProperty(
                  E,
                  "id",
                  R({}, g, {
                    get: function () {
                      return m;
                    },
                    set: function (c) {
                      m = "" + c;
                    },
                  })
                ),
                  Object.defineProperty(
                    E,
                    "pauseOnExit",
                    R({}, g, {
                      get: function () {
                        return l;
                      },
                      set: function (c) {
                        l = !!c;
                      },
                    })
                  ),
                  Object.defineProperty(
                    E,
                    "startTime",
                    R({}, g, {
                      get: function () {
                        return t;
                      },
                      set: function (c) {
                        if (typeof c != "number")
                          throw new TypeError(
                            "Start time must be set to a number."
                          );
                        (t = c), (this.hasBeenReset = !0);
                      },
                    })
                  ),
                  Object.defineProperty(
                    E,
                    "endTime",
                    R({}, g, {
                      get: function () {
                        return n;
                      },
                      set: function (c) {
                        if (typeof c != "number")
                          throw new TypeError(
                            "End time must be set to a number."
                          );
                        (n = c), (this.hasBeenReset = !0);
                      },
                    })
                  ),
                  Object.defineProperty(
                    E,
                    "text",
                    R({}, g, {
                      get: function () {
                        return h;
                      },
                      set: function (c) {
                        (h = "" + c), (this.hasBeenReset = !0);
                      },
                    })
                  ),
                  Object.defineProperty(
                    E,
                    "region",
                    R({}, g, {
                      get: function () {
                        return v;
                      },
                      set: function (c) {
                        (v = c), (this.hasBeenReset = !0);
                      },
                    })
                  ),
                  Object.defineProperty(
                    E,
                    "vertical",
                    R({}, g, {
                      get: function () {
                        return i;
                      },
                      set: function (c) {
                        var D = b(c);
                        if (D === !1)
                          throw new SyntaxError(
                            "An invalid or illegal string was specified."
                          );
                        (i = D), (this.hasBeenReset = !0);
                      },
                    })
                  ),
                  Object.defineProperty(
                    E,
                    "snapToLines",
                    R({}, g, {
                      get: function () {
                        return r;
                      },
                      set: function (c) {
                        (r = !!c), (this.hasBeenReset = !0);
                      },
                    })
                  ),
                  Object.defineProperty(
                    E,
                    "line",
                    R({}, g, {
                      get: function () {
                        return o;
                      },
                      set: function (c) {
                        if (typeof c != "number" && c !== "auto")
                          throw new SyntaxError(
                            "An invalid number or illegal string was specified."
                          );
                        (o = c), (this.hasBeenReset = !0);
                      },
                    })
                  ),
                  Object.defineProperty(
                    E,
                    "lineAlign",
                    R({}, g, {
                      get: function () {
                        return d;
                      },
                      set: function (c) {
                        var D = P(c);
                        if (!D)
                          throw new SyntaxError(
                            "An invalid or illegal string was specified."
                          );
                        (d = D), (this.hasBeenReset = !0);
                      },
                    })
                  ),
                  Object.defineProperty(
                    E,
                    "position",
                    R({}, g, {
                      get: function () {
                        return e;
                      },
                      set: function (c) {
                        if (c < 0 || c > 100)
                          throw new Error(
                            "Position must be between 0 and 100."
                          );
                        (e = c), (this.hasBeenReset = !0);
                      },
                    })
                  ),
                  Object.defineProperty(
                    E,
                    "positionAlign",
                    R({}, g, {
                      get: function () {
                        return s;
                      },
                      set: function (c) {
                        var D = P(c);
                        if (!D)
                          throw new SyntaxError(
                            "An invalid or illegal string was specified."
                          );
                        (s = D), (this.hasBeenReset = !0);
                      },
                    })
                  ),
                  Object.defineProperty(
                    E,
                    "size",
                    R({}, g, {
                      get: function () {
                        return u;
                      },
                      set: function (c) {
                        if (c < 0 || c > 100)
                          throw new Error("Size must be between 0 and 100.");
                        (u = c), (this.hasBeenReset = !0);
                      },
                    })
                  ),
                  Object.defineProperty(
                    E,
                    "align",
                    R({}, g, {
                      get: function () {
                        return a;
                      },
                      set: function (c) {
                        var D = P(c);
                        if (!D)
                          throw new SyntaxError(
                            "An invalid or illegal string was specified."
                          );
                        (a = D), (this.hasBeenReset = !0);
                      },
                    })
                  ),
                  (E.displayState = void 0);
              }
              return (
                (A.prototype.getCueAsHTML = function () {
                  var p = self.WebVTT;
                  return p.convertCueToDOMTree(self, this.text);
                }),
                A
              );
            })());
        },
        "./src/utils/vttparser.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "parseTimeStamp", function () {
              return L;
            }),
            T.d(C, "fixLineBreaks", function () {
              return y;
            }),
            T.d(C, "VTTParser", function () {
              return S;
            });
          var M = T("./src/utils/vttcue.ts"),
            O = (function () {
              function E() {}
              var g = E.prototype;
              return (
                (g.decode = function (l, t) {
                  if (!l) return "";
                  if (typeof l != "string")
                    throw new Error("Error - expected string data.");
                  return decodeURIComponent(encodeURIComponent(l));
                }),
                E
              );
            })();
          function L(E) {
            function g(l, t, n, h) {
              return (
                (l | 0) * 3600 + (t | 0) * 60 + (n | 0) + parseFloat(h || 0)
              );
            }
            var m = E.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
            return m
              ? parseFloat(m[2]) > 59
                ? g(m[2], m[3], 0, m[4])
                : g(m[1], m[2], m[3], m[4])
              : null;
          }
          var b = (function () {
            function E() {
              this.values = Object.create(null);
            }
            var g = E.prototype;
            return (
              (g.set = function (l, t) {
                !this.get(l) && t !== "" && (this.values[l] = t);
              }),
              (g.get = function (l, t, n) {
                return n
                  ? this.has(l)
                    ? this.values[l]
                    : t[n]
                  : this.has(l)
                  ? this.values[l]
                  : t;
              }),
              (g.has = function (l) {
                return l in this.values;
              }),
              (g.alt = function (l, t, n) {
                for (var h = 0; h < n.length; ++h)
                  if (t === n[h]) {
                    this.set(l, t);
                    break;
                  }
              }),
              (g.integer = function (l, t) {
                /^-?\d+$/.test(t) && this.set(l, parseInt(t, 10));
              }),
              (g.percent = function (l, t) {
                if (/^([\d]{1,3})(\.[\d]*)?%$/.test(t)) {
                  var n = parseFloat(t);
                  if (n >= 0 && n <= 100) return this.set(l, n), !0;
                }
                return !1;
              }),
              E
            );
          })();
          function P(E, g, m, l) {
            var t = l ? E.split(l) : [E];
            for (var n in t)
              if (typeof t[n] == "string") {
                var h = t[n].split(m);
                if (h.length === 2) {
                  var v = h[0],
                    i = h[1];
                  g(v, i);
                }
              }
          }
          var R = new M.default(0, 0, ""),
            A = R.align === "middle" ? "middle" : "center";
          function p(E, g, m) {
            var l = E;
            function t() {
              var v = L(E);
              if (v === null) throw new Error("Malformed timestamp: " + l);
              return (E = E.replace(/^[^\sa-zA-Z-]+/, "")), v;
            }
            function n(v, i) {
              var r = new b();
              P(
                v,
                function (e, s) {
                  var u;
                  switch (e) {
                    case "region":
                      for (var a = m.length - 1; a >= 0; a--)
                        if (m[a].id === s) {
                          r.set(e, m[a].region);
                          break;
                        }
                      break;
                    case "vertical":
                      r.alt(e, s, ["rl", "lr"]);
                      break;
                    case "line":
                      (u = s.split(",")),
                        r.integer(e, u[0]),
                        r.percent(e, u[0]) && r.set("snapToLines", !1),
                        r.alt(e, u[0], ["auto"]),
                        u.length === 2 &&
                          r.alt("lineAlign", u[1], ["start", A, "end"]);
                      break;
                    case "position":
                      (u = s.split(",")),
                        r.percent(e, u[0]),
                        u.length === 2 &&
                          r.alt("positionAlign", u[1], [
                            "start",
                            A,
                            "end",
                            "line-left",
                            "line-right",
                            "auto",
                          ]);
                      break;
                    case "size":
                      r.percent(e, s);
                      break;
                    case "align":
                      r.alt(e, s, ["start", A, "end", "left", "right"]);
                      break;
                  }
                },
                /:/,
                /\s/
              ),
                (i.region = r.get("region", null)),
                (i.vertical = r.get("vertical", ""));
              var o = r.get("line", "auto");
              o === "auto" && R.line === -1 && (o = -1),
                (i.line = o),
                (i.lineAlign = r.get("lineAlign", "start")),
                (i.snapToLines = r.get("snapToLines", !0)),
                (i.size = r.get("size", 100)),
                (i.align = r.get("align", A));
              var d = r.get("position", "auto");
              d === "auto" &&
                R.position === 50 &&
                (d =
                  i.align === "start" || i.align === "left"
                    ? 0
                    : i.align === "end" || i.align === "right"
                    ? 100
                    : 50),
                (i.position = d);
            }
            function h() {
              E = E.replace(/^\s+/, "");
            }
            if ((h(), (g.startTime = t()), h(), E.slice(0, 3) !== "-->"))
              throw new Error(
                "Malformed time stamp (time stamps must be separated by '-->'): " +
                  l
              );
            (E = E.slice(3)), h(), (g.endTime = t()), h(), n(E, g);
          }
          function y(E) {
            return E.replace(
              /<br(?: \/)?>/gi,
              `
`
            );
          }
          var S = (function () {
            function E() {
              (this.state = "INITIAL"),
                (this.buffer = ""),
                (this.decoder = new O()),
                (this.regionList = []),
                (this.cue = null),
                (this.oncue = void 0),
                (this.onparsingerror = void 0),
                (this.onflush = void 0);
            }
            var g = E.prototype;
            return (
              (g.parse = function (l) {
                var t = this;
                l && (t.buffer += t.decoder.decode(l, { stream: !0 }));
                function n() {
                  var d = t.buffer,
                    e = 0;
                  for (
                    d = y(d);
                    e < d.length &&
                    d[e] !== "\r" &&
                    d[e] !==
                      `
`;

                  )
                    ++e;
                  var s = d.slice(0, e);
                  return (
                    d[e] === "\r" && ++e,
                    d[e] ===
                      `
` && ++e,
                    (t.buffer = d.slice(e)),
                    s
                  );
                }
                function h(d) {
                  P(d, function (e, s) {}, /:/);
                }
                try {
                  var v = "";
                  if (t.state === "INITIAL") {
                    if (!/\r\n|\n/.test(t.buffer)) return this;
                    v = n();
                    var i = v.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                    if (!i || !i[0])
                      throw new Error("Malformed WebVTT signature.");
                    t.state = "HEADER";
                  }
                  for (var r = !1; t.buffer; ) {
                    if (!/\r\n|\n/.test(t.buffer)) return this;
                    switch ((r ? (r = !1) : (v = n()), t.state)) {
                      case "HEADER":
                        /:/.test(v) ? h(v) : v || (t.state = "ID");
                        continue;
                      case "NOTE":
                        v || (t.state = "ID");
                        continue;
                      case "ID":
                        if (/^NOTE($|[ \t])/.test(v)) {
                          t.state = "NOTE";
                          break;
                        }
                        if (!v) continue;
                        if (
                          ((t.cue = new M.default(0, 0, "")),
                          (t.state = "CUE"),
                          v.indexOf("-->") === -1)
                        ) {
                          t.cue.id = v;
                          continue;
                        }
                      case "CUE":
                        if (!t.cue) {
                          t.state = "BADCUE";
                          continue;
                        }
                        try {
                          p(v, t.cue, t.regionList);
                        } catch {
                          (t.cue = null), (t.state = "BADCUE");
                          continue;
                        }
                        t.state = "CUETEXT";
                        continue;
                      case "CUETEXT":
                        {
                          var o = v.indexOf("-->") !== -1;
                          if (!v || (o && (r = !0))) {
                            t.oncue && t.cue && t.oncue(t.cue),
                              (t.cue = null),
                              (t.state = "ID");
                            continue;
                          }
                          if (t.cue === null) continue;
                          t.cue.text &&
                            (t.cue.text += `
`),
                            (t.cue.text += v);
                        }
                        continue;
                      case "BADCUE":
                        v || (t.state = "ID");
                    }
                  }
                } catch {
                  t.state === "CUETEXT" && t.cue && t.oncue && t.oncue(t.cue),
                    (t.cue = null),
                    (t.state = t.state === "INITIAL" ? "BADWEBVTT" : "BADCUE");
                }
                return this;
              }),
              (g.flush = function () {
                var l = this;
                try {
                  if (
                    ((l.cue || l.state === "HEADER") &&
                      ((l.buffer += `

`),
                      l.parse()),
                    l.state === "INITIAL" || l.state === "BADWEBVTT")
                  )
                    throw new Error("Malformed WebVTT signature.");
                } catch (t) {
                  l.onparsingerror && l.onparsingerror(t);
                }
                return l.onflush && l.onflush(), this;
              }),
              E
            );
          })();
        },
        "./src/utils/webvtt-parser.ts": function (W, C, T) {
          "use strict";
          T.r(C),
            T.d(C, "generateCueId", function () {
              return S;
            }),
            T.d(C, "parseWebVTT", function () {
              return g;
            });
          var M = T("./src/polyfills/number.ts"),
            O = T("./src/utils/vttparser.ts"),
            L = T("./src/demux/id3.ts"),
            b = T("./src/utils/timescale-conversion.ts"),
            P = T("./src/remux/mp4-remuxer.ts"),
            R = /\r\n|\n\r|\n|\r/g,
            A = function (l, t, n) {
              return n === void 0 && (n = 0), l.slice(n, n + t.length) === t;
            },
            p = function (l) {
              var t = parseInt(l.slice(-3)),
                n = parseInt(l.slice(-6, -4)),
                h = parseInt(l.slice(-9, -7)),
                v = l.length > 9 ? parseInt(l.substring(0, l.indexOf(":"))) : 0;
              if (
                !Object(M.isFiniteNumber)(t) ||
                !Object(M.isFiniteNumber)(n) ||
                !Object(M.isFiniteNumber)(h) ||
                !Object(M.isFiniteNumber)(v)
              )
                throw Error("Malformed X-TIMESTAMP-MAP: Local:" + l);
              return (
                (t += 1e3 * n), (t += 60 * 1e3 * h), (t += 60 * 60 * 1e3 * v), t
              );
            },
            y = function (l) {
              for (var t = 5381, n = l.length; n; )
                t = (t * 33) ^ l.charCodeAt(--n);
              return (t >>> 0).toString();
            };
          function S(m, l, t) {
            return y(m.toString()) + y(l.toString()) + y(t);
          }
          var E = function (l, t, n) {
            var h = l[t],
              v = l[h.prevCC];
            if (!v || (!v.new && h.new)) {
              (l.ccOffset = l.presentationOffset = h.start), (h.new = !1);
              return;
            }
            for (; (i = v) !== null && i !== void 0 && i.new; ) {
              var i;
              (l.ccOffset += h.start - v.start),
                (h.new = !1),
                (h = v),
                (v = l[h.prevCC]);
            }
            l.presentationOffset = n;
          };
          function g(m, l, t, n, h, v, i, r) {
            var o = new O.VTTParser(),
              d = Object(L.utf8ArrayToStr)(new Uint8Array(m))
                .trim()
                .replace(
                  R,
                  `
`
                ).split(`
`),
              e = [],
              s = Object(b.toMpegTsClockFromTimescale)(l, t),
              u = "00:00.000",
              a = 0,
              f = 0,
              c,
              D = !0;
            (o.oncue = function (x) {
              var I = n[h],
                F = n.ccOffset,
                _ = (a - s) / 9e4;
              I != null &&
                I.new &&
                (f !== void 0 ? (F = n.ccOffset = I.start) : E(n, h, _)),
                _ && (F = _ - n.presentationOffset);
              var B = x.endTime - x.startTime,
                U =
                  Object(P.normalizePts)((x.startTime + F - f) * 9e4, v * 9e4) /
                  9e4;
              (x.startTime = Math.max(U, 0)), (x.endTime = Math.max(U + B, 0));
              var N = x.text.trim();
              (x.text = decodeURIComponent(encodeURIComponent(N))),
                x.id || (x.id = S(x.startTime, x.endTime, N)),
                x.endTime > 0 && e.push(x);
            }),
              (o.onparsingerror = function (x) {
                c = x;
              }),
              (o.onflush = function () {
                if (c) {
                  r(c);
                  return;
                }
                i(e);
              }),
              d.forEach(function (x) {
                if (D)
                  if (A(x, "X-TIMESTAMP-MAP=")) {
                    (D = !1),
                      x
                        .slice(16)
                        .split(",")
                        .forEach(function (I) {
                          A(I, "LOCAL:")
                            ? (u = I.slice(6))
                            : A(I, "MPEGTS:") && (a = parseInt(I.slice(7)));
                        });
                    try {
                      f = p(u) / 1e3;
                    } catch (I) {
                      c = I;
                    }
                    return;
                  } else x === "" && (D = !1);
                o.parse(
                  x +
                    `
`
                );
              }),
              o.flush();
          }
        },
        "./src/utils/xhr-loader.ts": function (W, C, T) {
          "use strict";
          T.r(C);
          var M = T("./src/utils/logger.ts"),
            O = T("./src/loader/load-stats.ts"),
            L = /^age:\s*[\d.]+\s*$/m,
            b = (function () {
              function P(A) {
                (this.xhrSetup = void 0),
                  (this.requestTimeout = void 0),
                  (this.retryTimeout = void 0),
                  (this.retryDelay = void 0),
                  (this.config = null),
                  (this.callbacks = null),
                  (this.context = void 0),
                  (this.loader = null),
                  (this.stats = void 0),
                  (this.xhrSetup = A ? A.xhrSetup : null),
                  (this.stats = new O.LoadStats()),
                  (this.retryDelay = 0);
              }
              var R = P.prototype;
              return (
                (R.destroy = function () {
                  (this.callbacks = null),
                    this.abortInternal(),
                    (this.loader = null),
                    (this.config = null);
                }),
                (R.abortInternal = function () {
                  var p = this.loader;
                  self.clearTimeout(this.requestTimeout),
                    self.clearTimeout(this.retryTimeout),
                    p &&
                      ((p.onreadystatechange = null),
                      (p.onprogress = null),
                      p.readyState !== 4 &&
                        ((this.stats.aborted = !0), p.abort()));
                }),
                (R.abort = function () {
                  var p;
                  this.abortInternal(),
                    (p = this.callbacks) !== null &&
                      p !== void 0 &&
                      p.onAbort &&
                      this.callbacks.onAbort(
                        this.stats,
                        this.context,
                        this.loader
                      );
                }),
                (R.load = function (p, y, S) {
                  if (this.stats.loading.start)
                    throw new Error("Loader can only be used once.");
                  (this.stats.loading.start = self.performance.now()),
                    (this.context = p),
                    (this.config = y),
                    (this.callbacks = S),
                    (this.retryDelay = y.retryDelay),
                    this.loadInternal();
                }),
                (R.loadInternal = function () {
                  var p = this.config,
                    y = this.context;
                  if (!!p) {
                    var S = (this.loader = new self.XMLHttpRequest()),
                      E = this.stats;
                    (E.loading.first = 0), (E.loaded = 0);
                    var g = this.xhrSetup;
                    try {
                      if (g)
                        try {
                          g(S, y.url);
                        } catch {
                          S.open("GET", y.url, !0), g(S, y.url);
                        }
                      S.readyState || S.open("GET", y.url, !0);
                      var m = this.context.headers;
                      if (m) for (var l in m) S.setRequestHeader(l, m[l]);
                    } catch (t) {
                      this.callbacks.onError(
                        { code: S.status, text: t.message },
                        y,
                        S
                      );
                      return;
                    }
                    y.rangeEnd &&
                      S.setRequestHeader(
                        "Range",
                        "bytes=" + y.rangeStart + "-" + (y.rangeEnd - 1)
                      ),
                      (S.onreadystatechange = this.readystatechange.bind(this)),
                      (S.onprogress = this.loadprogress.bind(this)),
                      (S.responseType = y.responseType),
                      self.clearTimeout(this.requestTimeout),
                      (this.requestTimeout = self.setTimeout(
                        this.loadtimeout.bind(this),
                        p.timeout
                      )),
                      S.send();
                  }
                }),
                (R.readystatechange = function () {
                  var p = this.context,
                    y = this.loader,
                    S = this.stats;
                  if (!(!p || !y)) {
                    var E = y.readyState,
                      g = this.config;
                    if (!S.aborted && E >= 2)
                      if (
                        (self.clearTimeout(this.requestTimeout),
                        S.loading.first === 0 &&
                          (S.loading.first = Math.max(
                            self.performance.now(),
                            S.loading.start
                          )),
                        E === 4)
                      ) {
                        (y.onreadystatechange = null), (y.onprogress = null);
                        var m = y.status;
                        if (m >= 200 && m < 300) {
                          S.loading.end = Math.max(
                            self.performance.now(),
                            S.loading.first
                          );
                          var l, t;
                          if (
                            (p.responseType === "arraybuffer"
                              ? ((l = y.response), (t = l.byteLength))
                              : ((l = y.responseText), (t = l.length)),
                            (S.loaded = S.total = t),
                            !this.callbacks)
                          )
                            return;
                          var n = this.callbacks.onProgress;
                          if ((n && n(S, p, l, y), !this.callbacks)) return;
                          var h = { url: y.responseURL, data: l };
                          this.callbacks.onSuccess(h, S, p, y);
                        } else
                          S.retry >= g.maxRetry || (m >= 400 && m < 499)
                            ? (M.logger.error(m + " while loading " + p.url),
                              this.callbacks.onError(
                                { code: m, text: y.statusText },
                                p,
                                y
                              ))
                            : (M.logger.warn(
                                m +
                                  " while loading " +
                                  p.url +
                                  ", retrying in " +
                                  this.retryDelay +
                                  "..."
                              ),
                              this.abortInternal(),
                              (this.loader = null),
                              self.clearTimeout(this.retryTimeout),
                              (this.retryTimeout = self.setTimeout(
                                this.loadInternal.bind(this),
                                this.retryDelay
                              )),
                              (this.retryDelay = Math.min(
                                2 * this.retryDelay,
                                g.maxRetryDelay
                              )),
                              S.retry++);
                      } else
                        self.clearTimeout(this.requestTimeout),
                          (this.requestTimeout = self.setTimeout(
                            this.loadtimeout.bind(this),
                            g.timeout
                          ));
                  }
                }),
                (R.loadtimeout = function () {
                  M.logger.warn("timeout while loading " + this.context.url);
                  var p = this.callbacks;
                  p &&
                    (this.abortInternal(),
                    p.onTimeout(this.stats, this.context, this.loader));
                }),
                (R.loadprogress = function (p) {
                  var y = this.stats;
                  (y.loaded = p.loaded),
                    p.lengthComputable && (y.total = p.total);
                }),
                (R.getCacheAge = function () {
                  var p = null;
                  if (
                    this.loader &&
                    L.test(this.loader.getAllResponseHeaders())
                  ) {
                    var y = this.loader.getResponseHeader("age");
                    p = y ? parseFloat(y) : null;
                  }
                  return p;
                }),
                P
              );
            })();
          C.default = b;
        },
      }).default;
    });
});
var ne = ie(Kt()),
  { default: Wt, ...ae } = ne,
  oe = Wt !== void 0 ? Wt : ae;
export { oe as default };
