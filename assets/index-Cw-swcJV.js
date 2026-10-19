var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var ee=Array.isArray;function te(){}var C={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function E(e,t){return T(e.type,t,e.props)}function ne(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(te,te):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(ne(o)&&(o=E(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ue=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function de(e){var t=C.T,n={};n.types=t===null?null:t.types,C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(te,ue)}catch(e){ue(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}}function fe(e){var t=C.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else de(fe.bind(null,e))}var pe={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!ne(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=pe,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.addTransitionType=fe,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!w.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)w.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ne,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=de,e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,E());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}}var S=!1,ee=-1,te=5,C=-1;function w(){return g?!0:!(e.unstable_now()-C<te)}function T(){if(g=!1,S){var t=e.unstable_now();C=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(ee),ee=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&w());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?E():S=!1}}}var E;if(typeof y==`function`)E=function(){y(T)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=T,E=function(){re.postMessage(null)}}else E=function(){_(T,0)};function ie(t,n){ee=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):te=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(ee),ee=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,E()))),r},e.unstable_shouldYield=w,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.1`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function ee(e,t,n){return e===n||e===t&&(x=e,!0)}function te(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function C(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function w(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var T=Object.assign,E=Symbol.for(`react.element`),ne=Symbol.for(`react.transitional.element`),re=Symbol.for(`react.portal`),ie=Symbol.for(`react.fragment`),ae=Symbol.for(`react.strict_mode`),oe=Symbol.for(`react.profiler`),se=Symbol.for(`react.consumer`),ce=Symbol.for(`react.context`),le=Symbol.for(`react.forward_ref`),ue=Symbol.for(`react.suspense`),de=Symbol.for(`react.suspense_list`),fe=Symbol.for(`react.memo`),pe=Symbol.for(`react.lazy`),me=Symbol.for(`react.activity`),he=Symbol.for(`react.legacy_hidden`),ge=Symbol.for(`react.memo_cache_sentinel`),_e=Symbol.for(`react.view_transition`),ve=Symbol.for(`react.recoverable`),ye=Symbol.iterator;function be(e){return typeof e!=`object`||!e?null:(e=ye&&e[ye]||e[`@@iterator`],typeof e==`function`?e:null)}var xe=Symbol.for(`react.client.reference`);function Se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===xe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case ie:return`Fragment`;case oe:return`Profiler`;case ae:return`StrictMode`;case ue:return`Suspense`;case de:return`SuspenseList`;case me:return`Activity`;case _e:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case re:return`Portal`;case ce:return e.displayName||`Context`;case se:return(e._context.displayName||`Context`)+`.Consumer`;case le:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case fe:return t=e.displayName||null,t===null?Se(e.type)||`Memo`:t;case pe:t=e._payload,e=e._init;try{return Se(e(t))}catch{}}return null}var Ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,we={pending:!1,data:null,method:null,action:null},Te=[],Ee=-1;function De(e){return{current:e}}function Oe(e){0>Ee||(e.current=Te[Ee],Te[Ee]=null,Ee--)}function k(e,t){Ee++,Te[Ee]=e.current,e.current=t}var A=De(null),ke=De(null),Ae=De(null),je=De(null);function Me(e,t){switch(k(Ae,t),k(ke,e),k(A,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?fp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=fp(t),e=Q(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}Oe(A),k(A,e)}function Ne(){Oe(A),Oe(ke),Oe(Ae)}function Pe(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,k(je,e)),t=A.current;var n=Q(t,e.type);t!==n&&(k(ke,e),k(A,n))}function Fe(e){ke.current===e&&(Oe(A),Oe(ke)),je.current===e&&(Oe(je),sh._currentValue=we)}var Ie,Le;function Re(e){if(Ie===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ie=t&&t[1]||``,Le=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ie+e+Le}var ze=!1;function Be(e,t){if(!e||ze)return``;ze=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ze=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Re(n):``}function Ve(e,t){switch(e.tag){case 26:case 27:case 5:return Re(e.type);case 16:return Re(`Lazy`);case 13:return e.child!==t&&t!==null?Re(`Suspense Fallback`):Re(`Suspense`);case 19:return Re(`SuspenseList`);case 0:case 15:return Be(e.type,!1);case 11:return Be(e.type.render,!1);case 1:return Be(e.type,!0);case 31:return Re(`Activity`);case 30:return Re(`ViewTransition`);default:return``}}function He(e){try{var t=``,n=null;do t+=Ve(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ue=Object.prototype.hasOwnProperty,We=t.unstable_scheduleCallback,Ge=t.unstable_cancelCallback,Ke=t.unstable_shouldYield,qe=t.unstable_requestPaint,Je=t.unstable_now,Ye=t.unstable_getCurrentPriorityLevel,Xe=t.unstable_ImmediatePriority,Ze=t.unstable_UserBlockingPriority,Qe=t.unstable_NormalPriority,$e=t.unstable_LowPriority,et=t.unstable_IdlePriority,j=t.log,tt=t.unstable_setDisableYieldValue,nt=null,rt=null;function it(e){if(typeof j==`function`&&tt(e),rt&&typeof rt.setStrictMode==`function`)try{rt.setStrictMode(nt,e)}catch{}}var M=Math.clz32?Math.clz32:st,at=Math.log,ot=Math.LN2;function st(e){return e>>>=0,e===0?32:31-(at(e)/ot|0)|0}var ct=256,lt=262144,ut=4194304;function dt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ft(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=dt(n))):i=dt(o):i=dt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=dt(n))):i=dt(o)):i=dt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function pt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function mt(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-M(n),i=1<<r;t|=e[r],n&=~i}return t}function ht(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gt(){var e=ut;return ut<<=1,!(ut&62914560)&&(ut=4194304),e}function _t(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-M(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&bt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function bt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-M(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function xt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-M(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function St(e,t){var n=t&-t;return n=n&42?1:Ct(n),(n&(e.suspendedLanes|t))===0?n:0}function Ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function wt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Tt(){var e=O.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function Et(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var N=Math.random().toString(36).slice(2),Dt=`__reactFiber$`+N,Ot=`__reactProps$`+N,kt=`__reactContainer$`+N,At=`__reactEvents$`+N,jt=`__reactListeners$`+N,Mt=`__reactHandles$`+N,Nt=`__reactResources$`+N,Pt=`__reactMarker$`+N,Ft=`__reactLoad$`+N;function It(e){delete e[Dt],delete e[Ot],delete e[jt],delete e[Mt]}function Lt(e){var t;if(t=e[Dt])return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[Dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[Dt])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Rt(e){if(e=e[Dt]||e[kt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function zt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Bt(e){var t=e[Nt];return t||=e[Nt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Vt(e){e[Pt]=!0}function Ht(e){e[Ft]=void 0}var Ut=new Set,Wt={};function Gt(e,t){Kt(e,t),Kt(e+`Capture`,t)}function Kt(e,t){for(Wt[e]=t,e=0;e<t.length;e++)Ut.add(t[e])}var P=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),qt={},Jt={};function Yt(e){return Ue.call(Jt,e)?!0:Ue.call(qt,e)?!1:P.test(e)?Jt[e]=!0:(qt[e]=!0,!1)}var F=!1;function Xt(){var e=F;return F=!1,e}function Zt(e,t,n){if(Yt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Qt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function $t(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function en(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function tn(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function nn(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rn(e){if(!e._valueTracker){var t=tn(e)?`checked`:`value`;e._valueTracker=nn(e,t,``+e[t])}}function an(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=tn(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var on=/[\n"\\]/g;function sn(e){return e.replace(on,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function cn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+en(t)):e.value!==``+en(t)&&(e.value=``+en(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):un(e,en(n)):o===`number`&&e.value==t?un(e,en(e.value)):un(e,en(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+en(s):e.removeAttribute(`name`)}function ln(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){rn(e);return}n=n==null?``:``+en(n),t=t==null?n:``+en(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),rn(e)}function un(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function dn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+en(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function fn(e,t,n){t!=null&&(t=``+en(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+en(n)}function pn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(Ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=en(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),rn(e)}function mn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function gn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||hn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function _n(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,F=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(gn(e,a,r),F=!0)}else for(var o in t)t.hasOwnProperty(o)&&gn(e,o,t[o])}function vn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var yn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),bn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xn(e){return bn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Sn(){}var Cn=null;function wn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tn=null,En=null;function Dn(e){var t=Rt(e);if(t&&(e=t.stateNode)){var n=e[Ot]||null;a:switch(e=t.stateNode,t.type){case`input`:if(cn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+sn(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Ot]||null;if(!a)throw Error(i(90));cn(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&an(r)}break a;case`textarea`:fn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&dn(e,!!n.multiple,t,!1)}}}var On=!1;function kn(e,t,n){if(On)return e(t,n);On=!0;try{return e(t)}finally{if(On=!1,(Tn!==null||En!==null)&&(Vd(),Tn&&(t=Tn,e=En,En=Tn=null,Dn(t),e)))for(t=0;t<e.length;t++)Dn(e[t])}}function An(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Ot]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var jn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Mn=!1;if(jn)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Mn=!0}}),window.addEventListener(`test`,Nn,Nn),window.removeEventListener(`test`,Nn,Nn)}catch{Mn=!1}var Pn=null,Fn=null,In=null;function Ln(){if(In)return In;var e,t=Fn,n=t.length,r,i=`value`in Pn?Pn.value:Pn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return In=i.slice(e,1<r?1-r:void 0)}function Rn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zn(){return!0}function Bn(){return!1}function Vn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?zn:Bn,this.isPropagationStopped=Bn,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=zn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=zn)},persist:function(){},isPersistent:zn}),t}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Un=Vn(Hn),Wn=T({},Hn,{view:0,detail:0}),Gn=Vn(Wn),Kn,qn,Jn,Yn=T({},Wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:or,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Jn&&(Jn&&e.type===`mousemove`?(Kn=e.screenX-Jn.screenX,qn=e.screenY-Jn.screenY):qn=Kn=0,Jn=e),Kn)},movementY:function(e){return`movementY`in e?e.movementY:qn}}),Xn=Vn(Yn),Zn=Vn(T({},Yn,{dataTransfer:0})),Qn=Vn(T({},Wn,{relatedTarget:0})),$n=Vn(T({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0})),er=Vn(T({},Hn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),tr=Vn(T({},Hn,{data:0})),nr={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},rr={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},ir={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function ar(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ir[e])?!!t[e]:!1}function or(){return ar}var sr=Vn(T({},Wn,{key:function(e){if(e.key){var t=nr[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Rn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?rr[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:or,charCode:function(e){return e.type===`keypress`?Rn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Rn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),cr=Vn(T({},Yn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),lr=Vn(T({},Hn,{submitter:0})),ur=Vn(T({},Wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:or})),dr=Vn(T({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0})),fr=Vn(T({},Yn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),pr=Vn(T({},Hn,{newState:0,oldState:0,source:0})),mr=[9,13,27,32],hr=jn&&`CompositionEvent`in window,gr=null;jn&&`documentMode`in document&&(gr=document.documentMode);var _r=jn&&`TextEvent`in window&&!gr,vr=jn&&(!hr||gr&&8<gr&&11>=gr),yr=` `,br=!1;function xr(e,t){switch(e){case`keyup`:return mr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Cr=!1;function wr(e,t){switch(e){case`compositionend`:return Sr(t);case`keypress`:return t.which===32?(br=!0,yr):null;case`textInput`:return e=t.data,e===yr&&br?null:e;default:return null}}function Tr(e,t){if(Cr)return e===`compositionend`||!hr&&xr(e,t)?(e=Ln(),In=Fn=Pn=null,Cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return vr&&t.locale!==`ko`?null:t.data;default:return null}}var Er={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Er[e.type]:t===`textarea`}function Or(e,t,n,r){Tn?En?En.push(r):En=[r]:Tn=r,t=Xf(t,`onChange`),0<t.length&&(n=new Un(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var kr=null,Ar=null;function jr(e){Uf(e,0)}function Mr(e){if(an(zt(e)))return e}function Nr(e,t){if(e===`change`)return t}var Pr=!1;if(jn){var Fr;if(jn){var Ir=`oninput`in document;if(!Ir){var Lr=document.createElement(`div`);Lr.setAttribute(`oninput`,`return;`),Ir=typeof Lr.oninput==`function`}Fr=Ir}else Fr=!1;Pr=Fr&&(!document.documentMode||9<document.documentMode)}function Rr(){kr&&(kr.detachEvent(`onpropertychange`,zr),Ar=kr=null)}function zr(e){if(e.propertyName===`value`&&Mr(Ar)){var t=[];Or(t,Ar,e,wn(e)),kn(jr,t)}}function Br(e,t,n){e===`focusin`?(Rr(),kr=t,Ar=n,kr.attachEvent(`onpropertychange`,zr)):e===`focusout`&&Rr()}function Vr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Mr(Ar)}function Hr(e,t){if(e===`click`)return Mr(t)}function Ur(e,t){if(e===`input`||e===`change`)return Mr(t)}function Wr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Gr=typeof Object.is==`function`?Object.is:Wr;function Kr(e,t){if(Gr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ue.call(t,i)||!Gr(e[i],t[i]))return!1}return!0}function qr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yr(e,t){var n=Jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Jr(n)}}function Xr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=qr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=qr(e.document)}return t}function Qr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var $r=jn&&`documentMode`in document&&11>=document.documentMode,ei=null,ti=null,ni=null,ri=!1;function ii(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ri||ei==null||ei!==qr(r)||(r=ei,`selectionStart`in r&&Qr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ni&&Kr(ni,r)||(ni=r,r=Xf(ti,`onSelect`),0<r.length&&(t=new Un(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=ei)))}function ai(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var oi={animationend:ai(`Animation`,`AnimationEnd`),animationiteration:ai(`Animation`,`AnimationIteration`),animationstart:ai(`Animation`,`AnimationStart`),transitionrun:ai(`Transition`,`TransitionRun`),transitionstart:ai(`Transition`,`TransitionStart`),transitioncancel:ai(`Transition`,`TransitionCancel`),transitionend:ai(`Transition`,`TransitionEnd`)},si={},ci={};jn&&(ci=document.createElement(`div`).style,`AnimationEvent`in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),`TransitionEvent`in window||delete oi.transitionend.transition);function li(e){if(si[e])return si[e];if(!oi[e])return e;var t=oi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ci)return si[e]=t[n];return e}var ui=li(`animationend`),di=li(`animationiteration`),fi=li(`animationstart`),pi=li(`transitionrun`),mi=li(`transitionstart`),hi=li(`transitioncancel`),gi=li(`transitionend`),_i=new Map,vi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);vi.push(`scrollEnd`);function yi(e,t){_i.set(e,t),Gt(t,[e])}var bi=0;function xi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=Sd.identifierPrefix;var n=bi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function Si(e){if(e==null||typeof e==`string`)return e;var t=null,n=Ad;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function Ci(e,t){return e=Si(e),t=Si(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var wi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Ti=[],Ei=0,Di=0;function Oi(){for(var e=Ei,t=Di=Ei=0;t<e;){var n=Ti[t];Ti[t++]=null;var r=Ti[t];Ti[t++]=null;var i=Ti[t];Ti[t++]=null;var a=Ti[t];if(Ti[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Mi(n,i,a)}}function ki(e,t,n,r){Ti[Ei++]=e,Ti[Ei++]=t,Ti[Ei++]=n,Ti[Ei++]=r,Di|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ai(e,t,n,r){return ki(e,t,n,r),Ni(e)}function ji(e,t){return ki(e,null,null,t),Ni(e)}function Mi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-M(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Ni(e){if(50<jd)throw jd=0,Md=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Pi={};function Fi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ii(e,t,n,r){return new Fi(e,t,n,r)}function Li(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ri(e,t){var n=e.alternate;return n===null?(n=Ii(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function zi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Bi(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Li(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,A.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case me:return e=Ii(31,n,t,a),e.elementType=me,e.lanes=o,e;case ie:return Vi(n.children,a,o,t);case ae:s=8,a|=24;break;case oe:return e=Ii(12,n,t,a|2),e.elementType=oe,e.lanes=o,e;case ue:return e=Ii(13,n,t,a),e.elementType=ue,e.lanes=o,e;case de:return e=Ii(19,n,t,a),e.elementType=de,e.lanes=o,e;case he:case _e:return e=a|32,e=Ii(30,n,t,e),e.elementType=_e,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case ce:s=10;break a;case se:s=9;break a;case le:s=11;break a;case fe:s=14;break a;case pe:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Ii(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Vi(e,t,n,r){return e=Ii(7,e,r,t),e.lanes=n,e}function Hi(e,t,n){return e=Ii(6,e,null,t),e.lanes=n,e}function Ui(e){var t=Ii(18,null,null,0);return t.stateNode=e,t}function Wi(e,t,n){return t=Ii(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Gi=new WeakMap;function I(e,t){if(typeof e==`object`&&e){var n=Gi.get(e);return n===void 0?(t={value:e,source:t,stack:He(t)},Gi.set(e,t),t):n}return{value:e,source:t,stack:He(t)}}var Ki=[],qi=0,Ji=null,Yi=0,Xi=[],Zi=0,Qi=null,$i=1,ea=``;function ta(e,t){Ki[qi++]=Yi,Ki[qi++]=Ji,Ji=e,Yi=t}function na(e,t,n){Xi[Zi++]=$i,Xi[Zi++]=ea,Xi[Zi++]=Qi,Qi=e;var r=$i;e=ea;var i=32-M(r)-1;r&=~(1<<i),n+=1;var a=32-M(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,$i=1<<32-M(t)+i|n<<i|r,ea=a+e}else $i=1<<a|n<<i|r,ea=e}function ra(e){e.return!==null&&(ta(e,1),na(e,1,0))}function ia(e){for(;e===Ji;)Ji=Ki[--qi],Ki[qi]=null,Yi=Ki[--qi],Ki[qi]=null;for(;e===Qi;)Qi=Xi[--Zi],Xi[Zi]=null,ea=Xi[--Zi],Xi[Zi]=null,$i=Xi[--Zi],Xi[Zi]=null}function aa(e,t){Xi[Zi++]=$i,Xi[Zi++]=ea,Xi[Zi++]=Qi,$i=t.id,ea=t.overflow,Qi=e}var oa=null,sa=null,L=!1,ca=null,la=!1,ua=Error(i(519));function da(e){throw _a(I(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),ua}function fa(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Dt]=e,t[Ot]=r,n){case`dialog`:X(`cancel`,t),X(`close`,t);break;case`iframe`:case`object`:case`embed`:X(`load`,t);break;case`video`:case`audio`:for(n=0;n<Vf.length;n++)X(Vf[n],t);break;case`source`:X(`error`,t);break;case`img`:case`image`:case`link`:X(`error`,t),X(`load`,t);break;case`details`:X(`toggle`,t);break;case`input`:X(`invalid`,t),ln(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:X(`invalid`,t);break;case`textarea`:X(`invalid`,t),pn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||np(t.textContent,n)?(r.popover!=null&&(X(`beforetoggle`,t),X(`toggle`,t)),r.onScroll!=null&&X(`scroll`,t),r.onScrollEnd!=null&&X(`scrollend`,t),r.onClick!=null&&(t.onclick=Sn),t=!0):t=!1,t||da(e,!0)}function pa(e){for(oa=e.return;oa;)switch(oa.tag){case 5:case 31:case 13:la=!1;return;case 27:case 3:la=!0;return;default:oa=oa.return}}function ma(e){if(e!==oa)return!1;if(!L)return pa(e),L=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||mp(e.type,e.memoizedProps)),n=!n),n&&sa&&da(e),pa(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));sa=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));sa=dm(e)}else t===27?(t=sa,Cp(e.type)?(e=um,um=null,sa=e):sa=t):sa=oa?lm(e.stateNode.nextSibling):null;return!0}function ha(){sa=oa=null,L=!1}function ga(){var e=ca;return e!==null&&(md===null?md=e:md.push.apply(md,e),ca=null),e}function _a(e){ca===null?ca=[e]:ca.push(e)}var va=De(null),ya=null,ba=null;function xa(e,t,n){k(va,t._currentValue),t._currentValue=n}function Sa(e){e._currentValue=va.current,Oe(va)}function Ca(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function wa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ca(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ca(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ca(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ta(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Gr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===je.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&wa(t,e,n,r),t.flags|=262144,e!==null}function Ea(e){for(e=e.firstContext;e!==null;){if(!Gr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Da(e){ya=e,ba=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Oa(e){return Aa(ya,e)}function ka(e,t){return ya===null&&Da(e),Aa(e,t)}function Aa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ba===null){if(e===null)throw Error(i(308));ba=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ba=ba.next=t;return n}var ja=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Ma=t.unstable_scheduleCallback,Na=t.unstable_NormalPriority,R={$$typeof:ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pa(){return{controller:new ja,data:new Map,refCount:0}}function Fa(e){e.refCount--,e.refCount===0&&Ma(Na,function(){e.controller.abort()})}function Ia(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var La=null;function Ra(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var za=null,Ba=0,Va=0,Ha=null;function Ua(e,t){if(za===null){var n=za=[];Ba=0,Va=If(),Ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ba++,t.then(Wa,Wa),t}function Wa(){if(--Ba===0&&(La=null,za!==null)){Ha!==null&&(Ha.status=`fulfilled`);var e=za;za=null,Va=0,Ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ga(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ka=D.S;D.S=function(e,t){if(_d=Je(),typeof t==`object`&&t&&typeof t.then==`function`&&Ua(e,t),La!==null)for(var n=Sf;n!==null;)Ia(n,La),n=n.next;if(n=e.types,n!==null){for(var r=Sf;r!==null;)Ia(r,n),r=r.next;if(Va!==0){r=La,r===null&&(r=La=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Ka!==null&&Ka(e,t)};var qa=De(null);function Ja(){var e=qa.current;return e===null?G.pooledCache:e}function Ya(e,t){t===null?k(qa,qa.current):k(qa,t.pool)}function Xa(){var e=Ja();return e===null?null:{parent:R._currentValue,pool:e}}var Za=Error(i(460)),Qa=Error(i(474)),$a=Error(i(542)),eo={then:function(){}};function to(e){return e=e.status,e===`fulfilled`||e===`rejected`}function no(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Sn,Sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,oo(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(Sn,Sn);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,oo(e),e}throw io=t,Za}}function ro(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(io=e,Za):e}}var io=null;function ao(){if(io===null)throw Error(i(459));var e=io;return io=null,e}function oo(e){if(e===Za||e===$a)throw Error(i(483))}var so=null,co=0;function lo(e){var t=co;return co+=1,so===null&&(so=[]),no(so,e,t)}function uo(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function fo(e,t){throw t.$$typeof===E?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function po(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Ri(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Hi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===ie?(e=d(e,t,n.props.children,r,n.key),uo(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===pe&&ro(i)===t.type)?(t=a(t,n.props),uo(t,n),t.return=e,t):(t=Bi(n.type,n.key,n.props,null,e.mode,r),uo(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Wi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Vi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Hi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case ne:return n=Bi(t.type,t.key,t.props,null,e.mode,n),uo(n,t),n.return=e,n;case re:return t=Wi(t,e.mode,n),t.return=e,t;case pe:return t=ro(t),f(e,t,n)}if(Ce(t)||be(t))return t=Vi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,lo(t),n);if(t.$$typeof===ce)return f(e,ka(e,t),n);fo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case ne:return n.key===i?l(e,t,n,r):null;case re:return n.key===i?u(e,t,n,r):null;case pe:return n=ro(n),p(e,t,n,r)}if(Ce(n)||be(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,lo(n),r);if(n.$$typeof===ce)return p(e,t,ka(e,n),r);fo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case ne:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case re:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case pe:return r=ro(r),m(e,t,n,r,i)}if(Ce(r)||be(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,lo(r),i);if(r.$$typeof===ce)return m(e,t,n,ka(t,r),i);fo(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),L&&ta(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return L&&ta(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),L&&ta(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),L&&ta(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return L&&ta(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),L&&ta(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===ie&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case ne:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===ie){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),uo(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===pe&&ro(l)===r.type){n(e,r.sibling),c=a(r,o.props),uo(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===ie?(c=Vi(o.props.children,e.mode,c,o.key),uo(c,o),c.return=e,e=c):(c=Bi(o.type,o.key,o.props,null,e.mode,c),uo(c,o),c.return=e,e=c)}return s(e);case re:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Wi(o,e.mode,c),c.return=e,e=c}return s(e);case pe:return o=ro(o),_(e,r,o,c)}if(Ce(o))return h(e,r,o,c);if(be(o)){if(l=be(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,lo(o),c);if(o.$$typeof===ce)return _(e,r,ka(e,o),c);fo(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Hi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{co=0;var i=_(e,t,n,r);return so=null,i}catch(t){if(t===Za||t===$a)throw t;var a=Ii(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var mo=po(!0),ho=po(!1),go=!1;function _o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function yo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function bo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Ni(e),Mi(e,null,n),t}return ki(e,r,t,n),Ni(e)}function xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xt(e,n)}}function So(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Co=!1;function wo(){if(Co){var e=Ha;if(e!==null)throw e}}function To(e,t,n,r){Co=!1;var i=e.updateQueue;go=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===Va&&(Co=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=T({},d,f);break a;case 2:go=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),cd|=o,e.lanes=o,e.memoizedState=d}}function Eo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Do(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Eo(n[e],t)}var Oo=De(null),ko=De(0);function Ao(e,t){e=od,k(ko,e),k(Oo,t),od=e|t.baseLanes}function jo(){k(ko,od),k(Oo,Oo.current)}function Mo(){od=ko.current,Oe(Oo),Oe(ko)}var No=De(null),Po=null;function Fo(e){var t=e.alternate;k(Bo,Bo.current&1),k(No,e),Po===null&&(t===null||Oo.current!==null||t.memoizedState!==null)&&(Po=e)}function Io(e){k(Bo,Bo.current),k(No,e),Po===null&&(Po=e)}function Lo(e){e.tag===22?(k(Bo,Bo.current),k(No,e),Po===null&&(Po=e)):Ro()}function Ro(){k(Bo,Bo.current),k(No,No.current)}function zo(e){Oe(No),Po===e&&(Po=null),Oe(Bo)}var Bo=De(0);function Vo(e,t){k(No,No.current),k(Bo,t)}function Ho(e){Oe(Bo),Oe(No),Po===e&&(Po=null)}function Uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wo=0,z=null,B=null,Go=null,Ko=!1,qo=!1,Jo=!1,Yo=0,Xo=0,Zo=null,Qo=0;function $o(){throw Error(i(321))}function es(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gr(e[n],t[n]))return!1;return!0}function ts(e,t,n,r,i,a){return Wo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?vc:yc,Jo=!1,a=n(r,i),Jo=!1,qo&&(a=rs(t,n,r,i)),ns(e),a}function ns(e){D.H=_c;var t=B!==null&&B.next!==null;if(Wo=0,Go=B=z=null,Ko=!1,Xo=0,Zo=null,t)throw Error(i(300));e===null||Ic||(e=e.dependencies,e!==null&&Ea(e)&&(Ic=!0))}function rs(e,t,n,r){z=e;var a=0;do{if(qo&&(Zo=null),Xo=0,qo=!1,25<=a)throw Error(i(301));if(a+=1,Go=B=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=bc,o=t(n,r)}while(qo);return o}function is(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?ds(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function as(){var e=Yo!==0;return Yo=0,e}function os(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ss(e){if(Ko){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ko=!1}Wo=0,Go=B=z=null,qo=!1,Xo=Yo=0,Zo=null}function cs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Go===null?z.memoizedState=Go=e:Go=Go.next=e,Go}function ls(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=Go===null?z.memoizedState:Go.next;if(t!==null)Go=t,B=e;else{if(e===null)throw z.alternate===null?Error(i(467)):Error(i(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},Go===null?z.memoizedState=Go=e:Go=Go.next=e}return Go}function us(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ds(e){var t=Xo;return Xo+=1,Zo===null&&(Zo=[]),e=no(Zo,e,t),t=z,(Go===null?t.memoizedState:Go.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?vc:yc),e}function fs(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ds(e);if(e.$$typeof===ve)return;if(e.$$typeof===ce)return Oa(e)}throw Error(i(438,String(e)))}function ps(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=us(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ge;return t.index++,n}function ms(e,t){return typeof t==`function`?t(e):t}function hs(e){return gs(ls(),B,e)}function gs(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Wo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Va&&(d=!0);else if((Wo&p)===p){u=u.next,p===Va&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,z.lanes|=p,cd|=p;f=u.action,Jo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,z.lanes|=f,cd|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Gr(o,e.memoizedState)&&(Ic=!0,d&&(n=Ha,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function _s(e){var t=ls(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Gr(o,t.memoizedState)||(Ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function vs(e,t,n){var r=z,a=ls(),o=L;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Gr((B||a).memoizedState,n);if(s&&(a.memoizedState=n,Ic=!0),a=a.queue,Us(xs.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Go!==null&&!!(Go.memoizedState.tag&1),Rs(e?9:8,{destroy:void 0},bs.bind(null,r,a,n,t),null),e){if(r.flags|=2048,G===null)throw Error(i(349));o||Wo&127||ys(r,t,n)}return n}function ys(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=us(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bs(e,t,n,r){t.value=n,t.getSnapshot=r,Ss(t)&&Cs(e)}function xs(e,t,n){return n(function(){Ss(t)&&Cs(e)})}function Ss(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gr(e,n)}catch{return!0}}function Cs(e){var t=ji(e,2);t!==null&&Id(t,e,2)}function ws(e){var t=cs();if(typeof e==`function`){var n=e;if(e=n(),Jo){it(!0);try{n()}finally{it(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:e},t}function Ts(e,t,n,r){return e.baseState=n,gs(e,B,typeof r==`function`?r:ms)}function Es(e,t,n,r,a){if(mc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ds(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ds(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};o.types=a===null?null:a.types,D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),Os(e,t,s)}catch(n){As(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),Os(e,t,a)}catch(n){As(e,t,n)}}function Os(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ks(e,t,n)},function(n){return As(e,t,n)}):ks(e,t,n)}function ks(e,t,n){t.status=`fulfilled`,t.value=n,js(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ds(e,n)))}function As(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,js(t),t=t.next;while(t!==r)}e.action=null}function js(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ms(e,t){return t}function Ns(e,t){if(L){var n=G.formState;if(n!==null){a:{var r=z;if(L){if(sa){b:{for(var i=sa,a=la;i.nodeType!==8;)if(!a||(i=lm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){sa=lm(i.nextSibling),r=i.data===`F!`;break a}}da(r)}r=!1}r&&(t=n[0])}}return n=cs(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:t},n.queue=r,n=dc.bind(null,z,r),r.dispatch=n,r=ws(!1),a=pc.bind(null,z,!1,r.queue),r=cs(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Es.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ps(e){return Fs(ls(),B,e)}function Fs(e,t,n){if(t=gs(e,t,Ms)[0],e=hs(ms)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ds(t)}catch(e){throw e===Za?$a:e}else r=t;t=ls();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,Rs(9,{destroy:void 0},Is.bind(null,i,n),null)),[r,a,e]}function Is(e,t){e.action=t}function Ls(e){var t=ls(),n=B;if(n!==null)return Fs(t,n,e);ls(),t=t.memoizedState,n=ls();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Rs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=us(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function zs(){return ls().memoizedState}function Bs(e,t,n,r){var i=cs();z.flags|=e,i.memoizedState=Rs(1|t,{destroy:void 0},n,r===void 0?null:r)}function Vs(e,t,n,r){var i=ls();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&es(r,B.memoizedState.deps)?i.memoizedState=Rs(t,a,n,r):(z.flags|=e,i.memoizedState=Rs(1|t,a,n,r))}function Hs(e,t){Bs(8390656,8,e,t)}function Us(e,t){Vs(2048,8,e,t)}function Ws(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=us(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Gs(e){var t=ls().memoizedState;return Ws({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Ks(e,t){return Vs(4,2,e,t)}function qs(e,t){return Vs(4,4,e,t)}function Js(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ys(e,t,n){n=n==null?null:n.concat([e]),Vs(4,4,Js.bind(null,t,e),n)}function Xs(){}function Zs(e,t){var n=ls();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&es(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qs(e,t){var n=ls();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&es(t,r[1]))return r[0];if(r=e(),Jo){it(!0);try{e()}finally{it(!1)}}return n.memoizedState=[r,t],r}function $s(e,t,n){return n===void 0||Wo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=Pd(),z.lanes|=e,cd|=e,n)}function ec(e,t,n,r){return Gr(n,t)?n:Oo.current===null?!(Wo&106)||Wo&1073741824&&!(q&261930)?(Ic=!0,e.memoizedState=n):(e=Pd(),z.lanes|=e,cd|=e,t):(e=$s(e,n,r),Gr(e,t)||(Ic=!0),e)}function tc(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};s.types=o===null?null:o.types,D.T=s,pc(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?fc(e,t,Ga(c,r),Nd(e)):fc(e,t,r,Nd(e))}catch(n){fc(e,t,{then:function(){},status:`rejected`,reason:n},Nd())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function nc(){}function rc(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ic(e).queue;tc(e,a,t,we,n===null?nc:function(){return ac(e),n(r)})}function ic(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:we,baseState:we,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:we},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ac(e){var t=ic(e);t.next===null&&(t=e.alternate.memoizedState),fc(e,t.next.queue,{},Nd())}function oc(){return Oa(sh)}function sc(){return ls().memoizedState}function cc(){return ls().memoizedState}function lc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Nd();e=yo(n);var r=bo(t,e,n);r!==null&&(Id(r,t,n),xo(r,t,n)),t={cache:Pa()},e.payload=t;return}t=t.return}}function uc(e,t,n){var r=Nd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},mc(e)?hc(t,n):(n=Ai(e,t,n,r),n!==null&&(Id(n,e,r),gc(n,t,r)))}function dc(e,t,n){fc(e,t,n,Nd())}function fc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(mc(e))hc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Gr(s,o))return ki(e,t,i,0),G===null&&Oi(),!1}catch{}if(n=Ai(e,t,i,r),n!==null)return Id(n,e,r),gc(n,t,r),!0}return!1}function pc(e,t,n,r){if(r={lane:2,revertLane:If(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},mc(e)){if(t)throw Error(i(479))}else t=Ai(e,n,r,2),t!==null&&Id(t,e,2)}function mc(e){var t=e.alternate;return e===z||t!==null&&t===z}function hc(e,t){qo=Ko=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xt(e,n)}}var _c={readContext:Oa,use:fs,useCallback:$o,useContext:$o,useEffect:$o,useImperativeHandle:$o,useLayoutEffect:$o,useInsertionEffect:$o,useMemo:$o,useReducer:$o,useRef:$o,useState:$o,useDebugValue:$o,useDeferredValue:$o,useTransition:$o,useSyncExternalStore:$o,useId:$o,useHostTransitionStatus:$o,useFormState:$o,useActionState:$o,useOptimistic:$o,useMemoCache:$o,useCacheRefresh:$o,useEffectEvent:$o},vc={readContext:Oa,use:fs,useCallback:function(e,t){return cs().memoizedState=[e,t===void 0?null:t],e},useContext:Oa,useEffect:Hs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Bs(4194308,4,Js.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bs(4194308,4,e,t)},useInsertionEffect:function(e,t){Bs(4,2,e,t)},useMemo:function(e,t){var n=cs();t=t===void 0?null:t;var r=e();if(Jo){it(!0);try{e()}finally{it(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=cs();if(n!==void 0){var i=n(t);if(Jo){it(!0);try{n(t)}finally{it(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=uc.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=cs();return e={current:e},t.memoizedState=e},useState:function(e){e=ws(e);var t=e.queue,n=dc.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Xs,useDeferredValue:function(e,t){return $s(cs(),e,t)},useTransition:function(){var e=ws(!1);return e=tc.bind(null,z,e.queue,!0,!1),cs().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,a=cs();if(L){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||ys(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Hs(xs.bind(null,r,o,e),[e]),r.flags|=2048,Rs(9,{destroy:void 0},bs.bind(null,r,o,n,t),null),n},useId:function(){var e=cs(),t=G.identifierPrefix;if(L){var n=ea,r=$i;n=(r&~(1<<32-M(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Qo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:oc,useFormState:Ns,useActionState:Ns,useOptimistic:function(e){var t=cs();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=pc.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:ps,useCacheRefresh:function(){return cs().memoizedState=lc.bind(null,z)},useEffectEvent:function(e){var t=cs(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},yc={readContext:Oa,use:fs,useCallback:Zs,useContext:Oa,useEffect:Us,useImperativeHandle:Ys,useInsertionEffect:Ks,useLayoutEffect:qs,useMemo:Qs,useReducer:hs,useRef:zs,useState:function(){return hs(ms)},useDebugValue:Xs,useDeferredValue:function(e,t){return ec(ls(),B.memoizedState,e,t)},useTransition:function(){var e=hs(ms)[0],t=ls().memoizedState;return[typeof e==`boolean`?e:ds(e),t]},useSyncExternalStore:vs,useId:sc,useHostTransitionStatus:oc,useFormState:Ps,useActionState:Ps,useOptimistic:function(e,t){return Ts(ls(),B,e,t)},useMemoCache:ps,useCacheRefresh:cc,useEffectEvent:Gs},bc={readContext:Oa,use:fs,useCallback:Zs,useContext:Oa,useEffect:Us,useImperativeHandle:Ys,useInsertionEffect:Ks,useLayoutEffect:qs,useMemo:Qs,useReducer:_s,useRef:zs,useState:function(){return _s(ms)},useDebugValue:Xs,useDeferredValue:function(e,t){var n=ls();return B===null?$s(n,e,t):ec(n,B.memoizedState,e,t)},useTransition:function(){var e=_s(ms)[0],t=ls().memoizedState;return[typeof e==`boolean`?e:ds(e),t]},useSyncExternalStore:vs,useId:sc,useHostTransitionStatus:oc,useFormState:Ls,useActionState:Ls,useOptimistic:function(e,t){var n=ls();return B===null?(n.baseState=e,[e,n.queue.dispatch]):Ts(n,B,e,t)},useMemoCache:ps,useCacheRefresh:cc,useEffectEvent:Gs};function xc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Nd(),i=yo(r);i.payload=t,n!=null&&(i.callback=n),t=bo(e,i,r),t!==null&&(Id(t,e,r),xo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Nd(),i=yo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=bo(e,i,r),t!==null&&(Id(t,e,r),xo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Nd(),r=yo(n);r.tag=2,t!=null&&(r.callback=t),t=bo(e,r,n),t!==null&&(Id(t,e,n),xo(t,e,n))}};function Cc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(i,a):!0}function wc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Sc.enqueueReplaceState(t,t.state,null)}function Tc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=T({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ec(e){wi(e)}function Dc(e){console.error(e)}function Oc(e){wi(e)}function kc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ac(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function jc(e,t,n){return n=yo(n),n.tag=3,n.payload={element:null},n.callback=function(){kc(e,t)},n}function Mc(e){return e=yo(e),e.tag=3,e}function Nc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ac(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ac(t,n,r),typeof i!=`function`&&(bd===null?bd=new Set([this]):bd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Pc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ta(t,n,a,!0),n=No.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Po===null?Jd():n.alternate===null&&sd===0&&(sd=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===eo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),gf(e,r,a)),!1;case 22:return n.flags|=65536,r===eo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),gf(e,r,a)),!1}throw Error(i(435,n.tag))}return gf(e,r,a),Jd(),!1}if(L)return t=No.current,t===null?(r!==ua&&(t=Error(i(423),{cause:r}),_a(I(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=I(r,n),a=jc(e.stateNode,r,a),So(e,a),sd!==4&&(sd=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ua&&(e=Error(i(422),{cause:r}),_a(I(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=I(o,n),pd===null?pd=[o]:pd.push(o),sd!==4&&(sd=2),t===null)return!0;r=I(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=jc(n.stateNode,r,e),So(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(bd===null||!bd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Mc(a),Nc(a,e,n,r),So(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Fc=Error(i(461)),Ic=!1;function Lc(e,t,n,r){t.child=e===null?ho(t,null,n,r):mo(t,e.child,n,r)}function Rc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Da(t),r=ts(e,t,n,o,a,i),s=as(),e!==null&&!Ic?(os(e,t,i),dl(e,t,i)):(L&&s&&ra(t),t.flags|=1,Lc(e,t,r,i),t.child)}function zc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Li(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Bc(e,t,a,r,i)):(e=Bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!fl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Kr:n,n(o,r)&&e.ref===t.ref)return dl(e,t,i)}return t.flags|=1,e=Ri(a,r),e.ref=t.ref,e.return=t,t.child=e}function Bc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Kr(a,r)&&e.ref===t.ref){if(Ic=!1,t.pendingProps=r=a,fl(e,i))e.flags&131072&&(Ic=!0);else return t.lanes=e.lanes,dl(e,t,i)}}return qc(e,t,n,r,i)}function Vc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ya(t,a===null?null:a.cachePool),a===null?jo():Ao(t,a),Lo(t);else return r=t.lanes=536870912,Uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ya(t,null),jo(),Ro()):(Ya(t,a.cachePool),Ao(t,a),Ro(),t.memoizedState=null);return Lc(e,t,i,n),t.child}function Hc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uc(e,t,n,r,i){var a=Ja();return a=a===null?null:{parent:R._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ya(t,null),jo(),Lo(t),e!==null&&Ta(e,t,r,!0),t.childLanes=i,null}function Wc(e,t){return t=nl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Gc(e,t,n){return mo(t,e.child,null,n),e=Wc(t,t.pendingProps),e.flags|=2,zo(t),t.memoizedState=null,e}function V(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(L){if(r.mode===`hidden`)return e=Wc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Hc(null,e);if(Io(t),(e=sa)?(e=am(e,la),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qi===null?null:{id:$i,overflow:ea},retryLane:536870912,hydrationErrors:null},n=Ui(e),n.return=t,t.child=n,oa=t,sa=null)):e=null,e===null)throw da(t);return t.lanes=536870912,null}return Wc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Io(t),a){if(t.flags&256)t.flags&=-257,t=Gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Ic||Ta(e,t,n,!1),a=(n&e.childLanes)!==0,Ic||a){if(Oo.current===null){if(r=G,r!==null&&(s=St(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ji(e,s),Id(r,e,s),Fc;Jd()}t=Gc(e,t,n)}else e=o.treeContext,sa=lm(s.nextSibling),oa=t,L=!0,ca=null,la=!1,e!==null&&aa(t,e),t=Wc(t,r),t.flags|=134221824;return t}return e=Ri(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Kc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function qc(e,t,n,r,i){return Da(t),n=ts(e,t,n,r,void 0,i),r=as(),e!==null&&!Ic?(os(e,t,i),dl(e,t,i)):(L&&r&&ra(t),t.flags|=1,Lc(e,t,n,i),t.child)}function Jc(e,t,n,r,i,a){return Da(t),t.updateQueue=null,n=rs(t,r,n,i),ns(e),r=as(),e!==null&&!Ic?(os(e,t,a),dl(e,t,a)):(L&&r&&ra(t),t.flags|=1,Lc(e,t,n,a),t.child)}function Yc(e,t,n,r,i){if(Da(t),t.stateNode===null){var a=Pi,o=n.contextType;typeof o==`object`&&o&&(a=Oa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Sc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},_o(t),o=n.contextType,a.context=typeof o==`object`&&o?Oa(o):Pi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(xc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Sc.enqueueReplaceState(a,a.state,null),To(t,r,a,i),wo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Tc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Pi,typeof u==`object`&&u&&(o=Oa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&wc(t,a,r,o),go=!1;var f=t.memoizedState;a.state=f,To(t,r,a,i),wo(),l=t.memoizedState,s||f!==l||go?(typeof d==`function`&&(xc(t,n,d,r),l=t.memoizedState),(c=go||Cc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,vo(e,t),o=t.memoizedProps,u=Tc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Pi,typeof l==`object`&&l&&(c=Oa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&wc(t,a,r,c),go=!1,f=t.memoizedState,a.state=f,To(t,r,a,i),wo();var p=t.memoizedState;o!==d||f!==p||go||e!==null&&e.dependencies!==null&&Ea(e.dependencies)?(typeof s==`function`&&(xc(t,n,s,r),p=t.memoizedState),(u=go||Cc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Ea(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Kc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=mo(t,e.child,null,i),t.child=mo(t,null,n,i)):Lc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=dl(e,t,i),e}function Xc(e,t,n,r){return ha(),t.flags|=256,Lc(e,t,n,r),t.child}var Zc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qc(e){return{baseLanes:e,cachePool:Xa()}}function $c(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=dd),e}function el(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Bo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(L){if(i?Fo(t):Ro(),(e=sa)?(e=am(e,la),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qi===null?null:{id:$i,overflow:ea},retryLane:536870912,hydrationErrors:null},n=Ui(e),n.return=t,t.child=n,oa=t,sa=null)):e=null,e===null)throw da(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Ro(),i=t.mode,a=nl({mode:`hidden`,children:a},i),r=Vi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Qc(n),r.childLanes=$c(e,o,n),t.memoizedState=Zc,Hc(null,r)):(Fo(t),tl(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return il(e,t,a,o,r,c,s,n)}return i?(Ro(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Ri(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Vi(i,a,n,null),i.flags|=2):i=Ri(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Hc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Qc(n):(a=i.cachePool,a===null?a=Xa():(s=R._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=$c(e,o,n),t.memoizedState=Zc,Hc(e.child,r)):(Fo(t),n=e.child,e=n.sibling,n=Ri(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function tl(e,t){return t=nl({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function nl(e,t){return e=Ii(22,e,null,t),e.lanes=0,e}function rl(e,t,n){return mo(t,e.child,null,n),e=tl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function il(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Fo(t),t.flags&=-257,rl(e,t,c)):t.memoizedState===null?(Ro(),o=a.fallback,s=t.mode,a=nl({mode:`visible`,children:a.children},s),o=Vi(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,mo(t,e.child,null,c),a=t.child,a.memoizedState=Qc(c),a.childLanes=$c(e,r,c),t.memoizedState=Zc,Hc(null,a)):(Ro(),t.child=e.child,t.flags|=128,null);if(Fo(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,_a({value:a,source:null,stack:null})),rl(e,t,c)}if(Ic||Ta(e,t,c,!1),r=(c&e.childLanes)!==0,Ic||r){if(Oo.current!==null)return rl(e,t,c);if(r=G,r!==null&&(a=St(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,ji(e,a),Id(r,e,a),Fc;return om(o)||Jd(),rl(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,sa=lm(o.nextSibling),oa=t,L=!0,ca=null,la=!1,e!==null&&aa(t,e),t=tl(t,a.children),t.flags|=134221824,t)}function al(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ca(e.return,t,n)}function ol(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Uo(n)===null&&(t=e),e=e.sibling}return t}function sl(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function cl(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function ll(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Bo.current;if(t.flags&128)return Vo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Vo(t,o),i===`backwards`&&e!==null?(cl(e),Lc(e,t,r,n),cl(e)):Lc(e,t,r,n),r=L?Yi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&al(e,n,t);else if(e.tag===19)al(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=ol(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,cl(t)),sl(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}sl(t,!0,n,null,a,r);break;case`together`:sl(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=ol(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),sl(t,!1,i,n,a,r)}return t.child}function ul(e,t,n){var r=t.pendingProps;return xa(t,t.type,r.value),Lc(e,t,r.children,n),t.child}function dl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cd|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Ta(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Ri(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ri(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Ea(e)))}function pl(e,t,n){switch(t.tag){case 3:Me(t,t.stateNode.containerInfo),xa(t,R,e.memoizedState.cache),ha();break;case 27:case 5:Pe(t);break;case 4:Me(t,t.stateNode.containerInfo);break;case 10:xa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Io(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Fo(t),t.flags|=128,null;r=Ta(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?el(e,t,n):(Fo(t),e=dl(e,t,n),e===null?null:e.sibling)}Fo(t);break;case 19:if(t.flags&128)return ll(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(Ta(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return ll(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Vo(t,Bo.current),r)break;return null;case 22:return t.lanes=0,Vc(e,t,n,t.pendingProps);case 24:xa(t,R,e.memoizedState.cache)}return dl(e,t,n)}function ml(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Ic=!0;else{if(!fl(e,n)&&!(t.flags&128))return Ic=!1,pl(e,t,n);Ic=!!(e.flags&131072)}}else Ic=!1,L&&t.flags&1048576&&na(t,Yi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ro(t.elementType),t.type=e,typeof e==`function`)Li(e)?(r=Tc(e,r),t.tag=1,t=Yc(null,t,e,r,n)):(t.tag=0,t=qc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===le){t.tag=11,t=Rc(null,t,e,r,n);break a}if(a===fe){t.tag=14,t=zc(null,t,e,r,n);break a}if(a===ce){t.tag=10,t.type=e,t=ul(null,t,n);break a}}throw t=Se(e)||e,Error(i(306,t,``))}}return t;case 0:return qc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Tc(r,t.pendingProps),Yc(e,t,r,a,n);case 3:a:{if(Me(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,vo(e,t),To(t,r,null,n);var s=t.memoizedState;if(r=s.cache,xa(t,R,r),r!==o.cache&&wa(t,[R],n,!0),wo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Xc(e,t,r,n);break a}if(r!==a){a=I(Error(i(424)),t),_a(a),t=Xc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(sa=lm(e.firstChild),oa=t,L=!0,ca=null,la=!0,n=ho(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ha(),r===a){t=dl(e,t,n);break a}Lc(e,t,r,n)}t=t.child}return t;case 26:return Kc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:L||(t.stateNode=pp(t.type,t.pendingProps,Ae.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Pe(t),e===null&&L&&(r=t.stateNode=hm(t.type,t.pendingProps,Ae.current),oa=t,la=!0,a=sa,Cp(t.type)?(um=a,sa=lm(r.firstChild)):sa=a),Lc(e,t,t.pendingProps.children,n),Kc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&L&&((a=r=sa)&&(r=rm(r,t.type,t.pendingProps,la),r===null?a=!1:(t.stateNode=r,oa=t,sa=lm(r.firstChild),la=!1,a=!0)),a||da(t)),Pe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,mp(a,o)?r=null:s!==null&&mp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=ts(e,t,is,null,null,n),sh._currentValue=a),Kc(e,t),Lc(e,t,r,n),t.child;case 6:return e===null&&L&&((e=n=sa)&&(n=im(n,t.pendingProps,la),n===null?e=!1:(t.stateNode=n,oa=t,sa=null,e=!0)),e||da(t)),null;case 13:return el(e,t,n);case 4:return Me(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mo(t,null,r,n):Lc(e,t,r,n),t.child;case 11:return Rc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Kc(e,t),Lc(e,t,r,n),t.child;case 8:return Lc(e,t,t.pendingProps.children,n),t.child;case 12:return Lc(e,t,t.pendingProps.children,n),t.child;case 10:return ul(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,Da(t),a=Oa(a),r=r(a),t.flags|=1,Lc(e,t,r,n),t.child;case 14:return zc(e,t,t.type,t.pendingProps,n);case 15:return Bc(e,t,t.type,t.pendingProps,n);case 19:return ll(e,t,n);case 31:return V(e,t,n);case 22:return Vc(e,t,n,t.pendingProps);case 24:return Da(t),r=Oa(R),e===null?(a=Ja(),a===null&&(a=G,o=Pa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},_o(t),xa(t,R,a)):((e.lanes&n)!==0&&(vo(e,t),To(t,null,null,n),wo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,xa(t,R,r),r!==a.cache&&wa(t,[R],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),xa(t,R,r))),Lc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:L&&ra(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Kc(e,t),Lc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function hl(e){e.flags|=4}function gl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Gd())e.flags|=8192;else throw io=eo,Qa}}else e.flags&=-16777217}function _l(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Gd())e.flags|=8192;else throw io=eo,Qa}}function vl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:gt(),e.lanes|=t,fd|=t)}function yl(e,t){if(!L)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function bl(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xl(e,t,n){var r=t.pendingProps;switch(ia(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bl(t),null;case 1:return bl(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Sa(R),Ne(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ma(t)?hl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ga())),bl(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(hl(t),o===null?(bl(t),gl(t,a,null,r,n)):(bl(t),_l(t,o))):o?o===e.memoizedState?(bl(t),t.flags&=-16777217):(hl(t),bl(t),_l(t,o)):(e=e.memoizedProps,e!==r&&hl(t),bl(t),gl(t,a,e,r,n)),null;case 27:if(Fe(t),n=Ae.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&hl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return bl(t),t.subtreeFlags&=-33554433,null}e=A.current,ma(t)?fa(t,e):(e=hm(a,r,n),t.stateNode=e,hl(t))}return bl(t),t.subtreeFlags&=-33554433,null;case 5:if(Fe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&hl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return bl(t),t.subtreeFlags&=-33554433,null}if(o=A.current,ma(t))fa(t,o);else{var s=dp(Ae.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[Dt]=t,o[Ot]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(ip(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&hl(t)}}return bl(t),t.subtreeFlags&=-33554433,gl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&hl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=Ae.current,ma(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=oa,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Dt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||np(e.nodeValue,n)),e||da(t,!0)}else e=dp(e).createTextNode(r),e[Dt]=t,t.stateNode=e}return bl(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ma(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[Dt]=t}else ha(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;bl(t),e=!1}else n=ga(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(zo(t),t):(zo(t),null);if(t.flags&128)throw Error(i(558))}return bl(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ma(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[Dt]=t}else ha(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;bl(t),a=!1}else a=ga(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(zo(t),t):(zo(t),null)}return zo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),vl(t,t.updateQueue),bl(t),null);case 4:return Ne(),e===null&&Kf(t.stateNode.containerInfo),t.flags|=67108864,bl(t),null;case 10:return Sa(t.type),bl(t),null;case 19:if(Ho(t),r=t.memoizedState,r===null)return bl(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)yl(r,!1);else{if(sd!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Uo(e),o!==null){for(t.flags|=128,yl(r,!1),e=o.updateQueue,t.updateQueue=e,vl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)zi(n,e),n=n.sibling;return Vo(t,Bo.current&1|2),L&&ta(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Je()>vd&&(t.flags|=128,a=!0,yl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Uo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,vl(t,e),yl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!L)return bl(t),null}else 2*Je()-r.renderingStartTime>vd&&n!==536870912&&(t.flags|=128,a=!0,yl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Je(),e.sibling=null,o=Bo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||L?Vo(t,o):(n=o,k(No,t),k(Bo,n),Po===null&&(Po=t)),L&&ta(t,r.treeForkCount),e}return bl(t),null;case 22:case 23:return zo(t),Mo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(bl(t),t.subtreeFlags&6&&(t.flags|=8192)):bl(t),n=t.updateQueue,n!==null&&vl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&Oe(qa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Sa(R),bl(t),null;case 25:return null;case 30:return t.flags|=33554432,bl(t),null}throw Error(i(156,t.tag))}function Sl(e,t){switch(ia(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sa(R),Ne(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Fe(t),null;case 31:if(t.memoizedState!==null){if(zo(t),t.alternate===null)throw Error(i(340));ha()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(zo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));ha()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ho(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Ne(),null;case 10:return Sa(t.type),null;case 22:case 23:return zo(t),Mo(),e!==null&&Oe(qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Sa(R),null;case 25:return null;default:return null}}function Cl(e,t){switch(ia(t),t.tag){case 3:Sa(R),Ne();break;case 26:case 27:case 5:Fe(t);break;case 4:Ne();break;case 31:t.memoizedState!==null&&zo(t);break;case 13:zo(t);break;case 19:Ho(t);break;case 10:Sa(t.type);break;case 22:case 23:zo(t),Mo(),e!==null&&Oe(qa);break;case 24:Sa(R)}}function wl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Y(t,t.return,e)}}function Tl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Y(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Y(t,t.return,e)}}function El(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Do(t,n)}catch(t){Y(e,e.return,t)}}}function Dl(e,t,n){n.props=Tc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Y(e,t,n)}}function Ol(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=xi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Fp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Ip(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Y(e,t,n)}}function kl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Y(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Y(e,t,n)}else n.current=null}}function Al(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function jl(e){for(var t=e.return;t!==null&&(Pl(t)&&em(e.stateNode,t.stateNode),!Nl(t));)t=t.return}function Ml(e){for(var t=e.return;t!==null&&(Pl(t)&&tm(e.stateNode,t.stateNode),!Nl(t));)t=t.return}function Nl(e){return e.tag===5||e.tag===3||e.tag===27}function Pl(e){return e&&e.tag===7&&e.stateNode!==null}function Fl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Y(e,e.return,t)}}function Il(e,t,n){try{var r=e.stateNode;op(r,e.type,n,t),r[Ot]=t}catch(t){Y(e,e.return,t)}}function Ll(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Cp(e.type)||e.tag===4}function Rl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ll(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Cp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Sn)),Al(e,r),F=!0;else if(i!==4&&(i===27&&(Al(e,r),r=null,Cp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(zl(e,t,n,r),e=e.sibling;e!==null;)zl(e,t,n,r),e=e.sibling}function Bl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Al(e,r),F=!0;else if(i!==4&&(i===27&&(Al(e,r),r=null,Cp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Bl(e,t,n,r),e=e.sibling;e!==null;)Bl(e,t,n,r),e=e.sibling}function Vl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ip(t,r,n),t[Dt]=e,t[Ot]=n}catch(t){Y(e,e.return,t)}}var Hl=!1,Ul=null;function Wl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Hl=!0)}var Gl=null;function Kl(){var e=Gl;return Gl=null,e}var ql=0;function Jl(e,t,n,r,i){return ql=0,Yl(e.child,t,n,r,i)}function Yl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=kp(o);r.push(s),s.view&&(a=!0)}else a||kp(o).view&&(a=!0);Hl=!0,Ep(o,ql===0?t:t+`_`+ql,n),ql++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Yl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Xl(e,t){for(;e!==null;)e.tag===5?Dp(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Xl(e.child,t)),e=e.sibling}function Zl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Zl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=Ci(t.default,t.share),t!==`none`&&(Jl(e,n,t,null,!1)||Xl(e.child,!1))}e=e.sibling}}function Ql(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=xi(r,n),a=Ci(r.default,n.paired?r.share:r.enter);a===`none`?Zl(e):Jl(e,i,a,null,!1)?(Zl(e),n.paired||t||Fd(e,r.onEnter)):Xl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Ql(e,t),e=e.sibling;else Zl(e)}function $l(e){if(Ul!==null&&Ul.size!==0){var t=Ul;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=Ci(n.default,n.share);if(a!==`none`&&(Jl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Fd(e,n.onShare)):Xl(e.child,!1)),t.delete(r),t.size===0)break}}}$l(e)}e=e.sibling}}}function eu(e){if(e.tag===30){var t=e.memoizedProps,n=xi(t,e.stateNode),r=Ul===null?void 0:Ul.get(n),i=Ci(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Jl(e,n,i,null,!1)?r===void 0?Fd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Ul.delete(n),Fd(e,t.onShare)):Xl(e.child,!1)),Ul!==null&&$l(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)eu(e),e=e.sibling;else Ul!==null&&$l(e)}function tu(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=xi(t,e.stateNode);t=Ci(t.default,t.update),e.flags&=-5,t!==`none`&&Jl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&tu(e);e=e.sibling}}function nu(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Xl(e.child,!1))}nu(e)}e=e.sibling}}function ru(e){if(e.tag===30)e.stateNode.paired=null,Xl(e.child,!1),nu(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)ru(e),e=e.sibling;else nu(e)}function iu(e){for(e=e.child;e!==null;)e.tag===30?Xl(e.child,!1):e.subtreeFlags&33554432&&iu(e),e=e.sibling}function au(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&ql<a.length){var l=a[ql],u=kp(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Ep(c,ql===0?n:n+`_`+ql,i),s&&e.flags&4||(Gl===null&&(Gl=[]),Gl.push(c,ql===0?r:r+`_`+ql,t.memoizedProps)),ql++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:au(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function ou(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=xi(n,r),a=Ci(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(Ap)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;ql=0,i=au(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Fd(e,n.onUpdate))}else e.subtreeFlags&33554432&&ou(e,t);e=e.sibling}}var su=!1,H=!1,cu=!1,lu=!1,uu=typeof WeakSet==`function`?WeakSet:Set,du=null,fu=!1,pu=!1,mu=!1,hu=!1;function gu(e,t,n){if(e=e.containerInfo,lp=gh,e=Zr(e),Qr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(up={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,du=t,t=n?9270:1024;du!==null;){if(e=du,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&eu(r[a]);if(e.alternate===null&&e.flags&2)n&&Wl(e),_u(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&eu(r),_u(n);continue}if(r!==null&&r.memoizedState!==null){n&&Wl(e),_u(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,du=r):(n&&tu(e),_u(n))}}Ul=null}function _u(e){for(;du!==null;){var t=du,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=Tc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){Y(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=xi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=Ci(a.default,a.update),a!==`none`&&Jl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,du=r;break}du=t.return}}function vu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Ru(e,n),r&4&&wl(5,n);break;case 1:if(Ru(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Y(n,n.return,e)}else{var i=Tc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Y(n,n.return,e)}}}r&64&&El(n),r&512&&Ol(n,n.return);break;case 3:if(Ru(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Do(e,t)}catch(e){Y(n,n.return,e)}}break;case 27:t===null&&r&4&&Vl(n);case 26:case 5:Ru(e,n),t===null&&r&4&&Fl(n),r&512&&Ol(n,n.return);break;case 12:Ru(e,n);break;case 31:Ru(e,n),r&4&&Du(e,n);break;case 13:Ru(e,n),r&4&&Ou(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=yf.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||su,!r){var a=t!==null&&t.memoizedState!==null||H;t=su,i=H,su=r,(H=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Bu(e,n,r)):Ru(e,n),su=t,H=i}break;case 30:Ru(e,n),r&512&&Ol(n,n.return);break;case 7:r&512&&Ol(n,n.return);default:Ru(e,n)}}function yu(e,t){for(e=e.child;e!==null;)bu(e,t),e=e.sibling}function bu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){Y(e,e.return,t)}xu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,F=!0}catch(t){Y(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?Tp(s,!0):Tp(e.stateNode,!1)}catch(t){Y(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&yu(e,t);break;default:yu(e,t)}}function xu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:bu(n,r);break a;case 22:n.memoizedState===null&&xu(n,r);break a;default:xu(n,r)}}e=e.sibling}}function Su(e){var t=e.alternate;t!==null&&(e.alternate=null,Su(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&It(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Cu=null,wu=!1;function Tu(e,t,n){for(n=n.child;n!==null;)Eu(e,t,n),n=n.sibling}function Eu(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount==`function`)try{rt.onCommitFiberUnmount(nt,n)}catch{}switch(n.tag){case 26:H||kl(n,t),Tu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!H&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||kl(n,t),Ml(n);var r=Cu,i=wu;Cp(n.type)&&(Cu=n.stateNode,wu=!1),Tu(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),Cu=r,wu=i;break;case 5:H||kl(n,t),Ml(n);case 6:if(n.tag===6&&Ml(n),r=Cu,i=wu,Cu=null,Tu(e,t,n),Cu=r,wu=i,Cu!==null){if(wu)try{(Cu.nodeType===9?Cu.body:Cu.nodeName===`HTML`?Cu.ownerDocument.body:Cu).removeChild(n.stateNode),F=!0}catch(e){Y(n,t,e)}else try{Cu.removeChild(n.stateNode),F=!0}catch(e){Y(n,t,e)}}break;case 18:Cu!==null&&(wu?(e=Cu,wp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):wp(Cu,n.stateNode));break;case 4:r=Cu,i=wu,Cu=n.stateNode.containerInfo,wu=!0,Tu(e,t,n),Cu=r,wu=i;break;case 0:case 11:case 14:case 15:Tl(2,n,t),H||Tl(4,n,t),Tu(e,t,n);break;case 1:H||(kl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Dl(n,t,r)),Tu(e,t,n);break;case 21:Tu(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,Tu(e,t,n),H=r;break;case 30:kl(n,t),Tu(e,t,n);break;case 7:H||kl(n,t),Tu(e,t,n);break;default:Tu(e,t,n)}}function Du(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){Y(t,t.return,e)}}}function Ou(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){Y(t,t.return,e)}}function ku(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new uu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new uu),t;default:throw Error(i(435,e.tag))}}function Au(e,t){var n=ku(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=bf.bind(null,e,t);t.then(r,r)}})}function ju(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Cp(l.type)){Cu=l.stateNode,wu=!1;break a}break;case 5:Cu=l.stateNode,wu=!1;break a;case 3:case 4:Cu=l.stateNode.containerInfo,wu=!0;break a}l=l.return}if(Cu===null)throw Error(i(160));Eu(s,c,o),Cu=null,wu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Nu(t,e,n),t=t.sibling}var Mu=null;function Nu(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}ju(t,e,n),Pu(e),a&4&&(Tl(3,e,e.return),wl(3,e),Tl(5,e,e.return));break;case 1:ju(t,e,n),Pu(e),a&512&&(H||r===null||kl(r,r.return)),a&64&&su&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Mu,ju(t,e,n),Pu(e),a&512&&(H||r===null||kl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(su)e.stateNode=pp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[Pt]||r[Dt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),ip(r,t,n),r[Dt]=e,Vt(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),ip(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),ip(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[Dt]=e,Vt(r),t=r}e.stateNode=t}}else su||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Il(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||H||t.parentNode.removeChild(t)):a.count--,n===null?su||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:ju(t,e,n),Pu(e),a&512&&(H||r===null||kl(r,r.return)),r!==null&&a&4&&Il(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=cu,cu=!1,ju(t,e,n),cu=o,Pu(e),a&512&&(H||r===null||kl(r,r.return)),e.flags&32){t=e.stateNode;try{mn(t,``),F=!0}catch(t){Y(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Il(e,t,r===null?t:r.memoizedProps)),a&1024&&(lu=!0);break;case 6:if(ju(t,e,n),Pu(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,F=!0}catch(t){Y(e,e.return,t)}}break;case 3:if(F=!1,Wm=null,o=Mu,Mu=bm(t.containerInfo),ju(t,e,n),Mu=o,Pu(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){Y(e,e.return,t)}lu&&(lu=!1,Fu(e)),F=!1;break;case 4:a=cu,cu=su,r=Xt(),o=Mu,Mu=bm(e.stateNode.containerInfo),ju(t,e,n),Pu(e),Mu=o,F&&pu&&(mu=!0),F=r,cu=a;break;case 12:ju(t,e,n),Pu(e);break;case 31:ju(t,e,n),Pu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Au(e,t)));break;case 13:ju(t,e,n),Pu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(gd=Je()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Au(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=su,l=H,u=cu;su=c||o,cu=u||o,H=l||s,ju(t,e,n),H=l,cu=u,su=c,Pu(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||su||H||(t=s||H,n=su,r=H,su=o||su,H=t,zu(e,2),su=n,H=r),!o&&cu||yu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Au(e,n))));break;case 19:ju(t,e,n),Pu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Au(e,t)));break;case 30:a&512&&(H||r===null||kl(r,r.return)),a=Xt(),o=pu,s=(n&335544064)===n,c=e.memoizedProps,pu=s&&Ci(c.default,c.update)!==`none`,ju(t,e,n),Pu(e),s&&r!==null&&F&&(e.flags|=4),pu=o,F=a;break;case 21:break;case 7:a&512&&(H||r===null||kl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:ju(t,e,n),Pu(e)}}function Pu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Ll(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Pl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Nl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Bl(e,Rl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(mn(l,``),n.flags&=-33),Bl(e,Rl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;zl(e,Rl(e),u,s);break;default:throw Error(i(161))}}catch(t){Y(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Fu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Iu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Lu(t,e),t=t.sibling;else ou(t,!1)}function Lu(e,t){var n=e.alternate;if(n===null)Ql(e,!1);else switch(e.tag){case 3:if(hu=fu=!1,Kl(),Iu(t,e),!fu&&!mu){if(e=Gl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Dp(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),hu=!0}Gl=null;break;case 5:Iu(t,e);break;case 4:r=fu,fu=!1,Iu(t,e),fu&&(mu=!0),fu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Iu(t,e):Ql(e,!1));break;case 30:r=fu,i=Kl(),fu=!1,Iu(t,e),fu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=xi(a,o),o=xi(n.memoizedProps,o);var s=Ci(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,ql=0,t=au(e,n,t,o,s,a,!0),ql!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Fd(e,e.memoizedProps.onUpdate),Gl=i):i!==null&&(i.push.apply(i,Gl),Gl=i),fu=e.flags&32?!0:r;break;default:Iu(t,e)}}function Ru(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vu(e,t.alternate,t),t=t.sibling}function zu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Tl(4,n,n.return),zu(n,r);break;case 1:kl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&Dl(n,n.return,i),zu(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:kl(n,n.return),n.tag!==5&&n.tag!==27||Ml(n),zu(n,r);break;case 6:Ml(n);break;case 26:kl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||H||i.parentNode.removeChild(i),zu(n,r);break;case 22:n.memoizedState===null&&zu(n,r);break;case 30:kl(n,n.return),zu(n,r);break;case 7:kl(n,n.return);default:zu(n,r)}e=e.sibling}}function Bu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Bu(i,a,n),wl(4,a);break;case 1:if(Bu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Y(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)Eo(l[i],c)}catch(e){Y(r,r.return,e)}}s&&o&64&&El(a),Ol(a,a.return);break;case 27:n&2&&Vl(a);case 5:a.tag!==5&&a.tag!==27||jl(a),Bu(i,a,n),s&&r===null&&o&4&&Fl(a),Ol(a,a.return);break;case 6:jl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||su||Km(bm(c.ownerDocument),a.type,c),Bu(i,a,n),s&&r===null&&o&4&&Fl(a),Ol(a,a.return);break;case 12:Bu(i,a,n);break;case 31:Bu(i,a,n),s&&o&4&&Du(i,a);break;case 13:Bu(i,a,n),s&&o&4&&Ou(i,a);break;case 22:a.memoizedState===null&&Bu(i,a,n),Ol(a,a.return);break;case 30:Bu(i,a,n),Ol(a,a.return);break;case 7:Ol(a,a.return);default:Bu(i,a,n)}t=t.sibling}}function Vu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Fa(n))}function Hu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fa(e))}function Uu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)U(e,t,n,r),t=t.sibling;else i&&iu(t)}function U(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ru(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Uu(e,t,n,r),a&2048&&wl(9,t);break;case 1:Uu(e,t,n,r);break;case 3:Uu(e,t,n,r),i&&hu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Fa(a)));break;case 12:if(a&2048){Uu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){Y(t,t.return,e)}}else Uu(e,t,n,r);break;case 31:Uu(e,t,n,r);break;case 13:Uu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&ru(t),o._visibility&2?Uu(e,t,n,r):(o._visibility|=2,Wu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&ru(s),o._visibility&2?Uu(e,t,n,r):Gu(e,t)),a&2048&&Vu(s,t);break;case 24:Uu(e,t,n,r),a&2048&&Hu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Xl(a.child,!0),Xl(t.child,!0))),Uu(e,t,n,r);break;default:Uu(e,t,n,r)}}function Wu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Wu(a,o,s,c,i),wl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Wu(a,o,s,c,i)):u._visibility&2?Wu(a,o,s,c,i):Gu(a,o),i&&l&2048&&Vu(o.alternate,o);break;case 24:Wu(a,o,s,c,i),i&&l&2048&&Hu(o.alternate,o);break;default:Wu(a,o,s,c,i)}t=t.sibling}}function Gu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Gu(n,r),i&2048&&Vu(r.alternate,r);break;case 24:Gu(n,r),i&2048&&Hu(r.alternate,r);break;default:Gu(n,r)}t=t.sibling}}var Ku=8192;function qu(e,t,n){if(e.subtreeFlags&Ku)for(e=e.child;e!==null;)Ju(e,t,n),e=e.sibling}function Ju(e,t,n){switch(e.tag){case 26:qu(e,t,n),e.flags&Ku&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,Mu,e.memoizedState,e.memoizedProps));break;case 5:qu(e,t,n),e.flags&Ku&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=Mu;Mu=bm(e.stateNode.containerInfo),qu(e,t,n),Mu=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ku,Ku=16777216,qu(e,t,n),Ku=r):qu(e,t,n));break;case 30:if((e.flags&Ku)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Ul===null&&(Ul=new Map),Ul.set(r,i)}qu(e,t,n);break;default:qu(e,t,n)}}function Yu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Xu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];du=r,$u(r,e)}Yu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zu(e),e=e.sibling}function Zu(e){switch(e.tag){case 0:case 11:case 15:Xu(e),e.flags&2048&&Tl(9,e,e.return);break;case 3:Xu(e);break;case 12:Xu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Qu(e)):Xu(e);break;default:Xu(e)}}function Qu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];du=r,$u(r,e)}Yu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Tl(8,t,t.return),Qu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Qu(t));break;default:Qu(t)}e=e.sibling}}function $u(e,t){for(;du!==null;){var n=du;switch(n.tag){case 0:case 11:case 15:Tl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Fa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,du=r;else a:for(n=e;du!==null;){r=du;var i=r.sibling,a=r.return;if(Su(r),r===n){du=null;break a}if(i!==null){i.return=a,du=i;break a}du=a}}}var ed={getCacheForType:function(e){var t=Oa(R),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Oa(R).controller.signal}},td=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,nd=null,rd=!1,id=!1,ad=!1,od=0,sd=0,cd=0,ld=0,ud=0,dd=0,fd=0,pd=null,md=null,hd=!1,gd=0,_d=0,vd=1/0,yd=null,bd=null,xd=0,Sd=null,Cd=null,wd=0,Td=0,Ed=null,Dd=null,Od=null,kd=null,Ad=null,jd=0,Md=null;function Nd(){return W&2&&q!==0?q&-q:D.T===null?Tt():If()}function Pd(){if(dd===0){if(!(q&536870912)||L){var e=lt;lt<<=1,!(lt&3932160)&&(lt=262144),dd=e}else dd=536870912}return e=No.current,e!==null&&(e.flags|=32),dd}function Fd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Fp(xi(e.memoizedProps,n))),kd===null&&(kd=[]),kd.push(t.bind(null,r))}}function Id(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Ud(e,0),Bd(e,q,dd,!1)),vt(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ld|=n),sd===4&&Bd(e,q,dd,!1)),Of(e))}function Ld(e,t,n){if(W&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||pt(e,t),a=r?Zd(e,t):Yd(e,t,!0),o=r;do{if(a===0){id&&!r&&Bd(e,t,0,!1);break}if(n=e.current.alternate,o&&!zd(n))a=Yd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=pd;var l=c.current.memoizedState.isDehydrated;if(l&&(Ud(c,s).flags|=256),s=Yd(c,s,!1),s!==2&&s!==6){if(ad&&!l){c.errorRecoveryDisabledLanes|=o,ld|=o,a=4;break a}o=md,md=a,o!==null&&(md===null?md=o:md.push.apply(md,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Ud(e,0),Bd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Bd(r,t,dd,!rd);break a;case 2:md=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=gd+300-Je(),10<a)){if(Bd(r,t,dd,!rd),ft(r,0,!0)!==0)break a;wd=t,r.timeoutHandle=_p(Rd.bind(null,r,n,md,yd,hd,t,dd,ld,fd,rd,o,`Throttled`,-0,0),a);break a}Rd(r,n,md,yd,hd,t,dd,ld,fd,rd,o,null,-0,0)}break}}while(1);Of(e)}function Rd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Sn},Ul=null,Ju(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?gd-Je():(a&4194048)===a?_d-Je():0,m=eh(d,m),m!==null)?(wd=a,e.cancelPendingCommit=m(af.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Bd(e,a,o,!l)):af(e,t,a,n,r,i,o,s,c,l,u,d)}function zd(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Gr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bd(e,t,n,r){t=mt(e,t),t&=~ud,t&=~ld,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-M(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&bt(e,n,t)}function Vd(){return W&6?!0:(kf(0,!1),!1)}function Hd(){if(K!==null){if(J===0)var e=K.return;else e=K,ba=ya=null,ss(e),so=null,co=0,e=K;for(;e!==null;)Cl(e.alternate,e),e=e.return;K=null}}function Ud(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,vp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),wd=0,Hd(),G=e,K=n=Ri(e.current,null),q=t,J=0,nd=null,rd=!1,id=pt(e,t),ad=!1,fd=dd=ud=ld=cd=sd=0,md=pd=null,hd=!1,od=mt(e,t),Oi(),n}function Wd(e,t){z=null,D.H=_c,t===Za||t===$a?(t=ao(),J=3):t===Qa?(t=ao(),J=4):J=t===Fc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,nd=t,K===null&&(sd=1,kc(e,I(t,e.current)))}function Gd(){var e=No.current;return e===null?!0:(q&4194048)===q?Po===null:(q&62914560)===q||q&536870912?e===Po:!1}function Kd(){var e=D.H;return D.H=_c,e===null?_c:e}function qd(){var e=D.A;return D.A=ed,e}function Jd(){sd=4,rd||(q&4194048)!==q&&No.current!==null||(id=!0),!(cd&134217727)&&!(ld&134217727)||G===null||Bd(G,q,dd,!1)}function Yd(e,t,n){var r=W;W|=2;var i=Kd(),a=qd();(G!==e||q!==t)&&(yd=null,Ud(e,t)),t=!1;var o=sd;a:do try{if(J!==0&&K!==null){var s=K,c=nd;switch(J){case 8:Hd(),o=6;break a;case 3:case 2:case 9:case 6:No.current===null&&(t=!0);var l=J;if(J=0,nd=null,tf(e,s,c,l),n&&id){o=0;break a}break;default:l=J,J=0,nd=null,tf(e,s,c,l)}}Xd(),o=sd;break}catch(t){Wd(e,t)}while(1);return t&&e.shellSuspendCounter++,ba=ya=null,W=r,D.H=i,D.A=a,K===null&&(G=null,q=0,Oi()),o}function Xd(){for(;K!==null;)$d(K)}function Zd(e,t){var n=W;W|=2;var r=Kd(),a=qd();G!==e||q!==t?(yd=null,vd=Je()+500,Ud(e,t)):id=pt(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=nd;b:switch(J){case 1:J=0,nd=null,tf(e,t,o,1);break;case 2:case 9:if(to(o)){J=0,nd=null,ef(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),Of(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:to(o)?(J=0,nd=null,ef(t)):(J=0,nd=null,tf(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Ym(s):c.stateNode.complete){J=0,nd=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,nf(u))}break b}}J=0,nd=null,tf(e,t,o,5);break;case 6:J=0,nd=null,tf(e,t,o,6);break;case 8:Hd(),sd=6;break a;default:throw Error(i(462))}}Qd();break}catch(t){Wd(e,t)}while(1);return ba=ya=null,D.H=r,D.A=a,W=n,K===null?(G=null,q=0,Oi(),sd):0}function Qd(){for(;K!==null&&!Ke();)$d(K)}function $d(e){var t=ml(e.alternate,e,od);e.memoizedProps=e.pendingProps,t===null?nf(e):K=t}function ef(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Jc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=Jc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:ss(t);var r=t;r===oa&&(L?(pa(r),r.tag===5&&r.stateNode!=null&&(sa=r.stateNode)):(pa(r),L=!0));default:Cl(n,t),t=K=zi(t,od),t=ml(n,t,od)}e.memoizedProps=e.pendingProps,t===null?nf(e):K=t}function tf(e,t,n,r){ba=ya=null,ss(t),so=null,co=0;var i=t.return;try{if(Pc(e,i,t,n,q)){sd=1,kc(e,I(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;sd=1,kc(e,I(n,e.current)),K=null;return}t.flags&32768?(L||r===1?e=!0:id||q&536870912?e=!1:(rd=e=!0,(r===2||r===9||r===3||r===6)&&(r=No.current,r!==null&&r.tag===13&&(r.flags|=16384))),rf(t,e)):nf(t)}function nf(e){var t=e;do{if(t.flags&32768){rf(t,rd);return}e=t.return;var n=xl(t.alternate,t,od);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);sd===0&&(sd=5)}function rf(e,t){do{var n=Sl(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);sd=6,K=null}function af(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do pf();while(xd!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===G&&(K=G=null,q=0),Cd=t,Sd=e,wd=n,Ed=a,Dd=r,of(e,t,n,s,c,l,f)}}function of(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Td=s,s|=Di,yt(e,n,s,r,i,a),kd=null,(n&335544064)===n?(Ad=Ra(e),r=10262):(Ad=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,xf(Qe,function(){return mf(),null})):(e.callbackNode=null,e.callbackPriority=0),Hl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=D.T,D.T=null,i=O.p,O.p=2,a=W,W|=4;try{gu(e,t,n)}finally{W=a,O.p=i,D.T=r}}xd=1,Hl?Od=Np(o,e.containerInfo,Ad,lf,uf,cf,df,mf,sf,null,null):(lf(),uf(),df())}function sf(e){if(xd!==0){var t=Sd.onRecoverableError;t(e,{componentStack:null})}}function cf(){xd===3&&(xd=0,Lu(Cd,Sd),xd=4)}function lf(){if(xd===1){xd=0;var e=Sd,t=Cd,n=wd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=D.T,D.T=null;var i=O.p;O.p=2;var a=W;W|=4;try{pu=mu=!1,Nu(t,e,n),n=up;var o=Zr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Xr(s.ownerDocument.documentElement,s)){if(c!==null&&Qr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Yr(s,h),v=Yr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!lp,up=lp=null}finally{W=a,O.p=i,D.T=r}}e.current=t,xd=2}}function uf(){if(xd===2){xd=0;var e=Sd,t=Cd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=W;W|=4;try{vu(e,t.alternate,t)}finally{W=i,O.p=r,D.T=n}}xd=3}}function df(){if(xd===4||xd===3){xd=0;var e=Od;Od=null,qe();var t=Sd,n=Cd,r=wd,i=Dd,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?xd=5:(xd=0,Cd=Sd=null,ff(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(bd=null),wt(r),n=n.stateNode,rt&&typeof rt.onCommitFiberRoot==`function`)try{rt.onCommitFiberRoot(nt,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=D.T,a=O.p,O.p=2,D.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{D.T=n,O.p=a}}if(i=kd,o=Ad,Ad=null,i!==null&&(kd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);wd&3&&pf(),Of(t),a=t.pendingLanes,r&261930&&a&42?t===Md?jd++:(jd=0,Md=t):(jd=0,Md=null),kf(0,!1)}}function ff(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Fa(t)))}function pf(){return Od!==null&&(Od.skipTransition(),Od=null),lf(),uf(),df(),mf()}function mf(){if(xd!==5)return!1;var e=Sd,t=Td;Td=0;var n=wt(wd),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=Ed,Ed=null;var o=Sd,s=wd;if(xd=0,Cd=Sd=null,wd=0,W&6)throw Error(i(331));var c=W;if(W|=4,Zu(o.current),U(o,o.current,s,n),W=c,kf(0,!1),rt&&typeof rt.onPostCommitFiberRoot==`function`)try{rt.onPostCommitFiberRoot(nt,o)}catch{}return!0}finally{O.p=a,D.T=r,ff(e,t)}}function hf(e,t,n){t=I(n,t),t=jc(e.stateNode,t,2),e=bo(e,t,2),e!==null&&(vt(e,2),Of(e))}function Y(e,t,n){if(e.tag===3)hf(e,e,n);else for(;t!==null;){if(t.tag===3){hf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(bd===null||!bd.has(r))){e=I(n,e),n=Mc(2),r=bo(t,n,2),r!==null&&(Nc(n,r,t,e),vt(r,2),Of(r));break}}t=t.return}}function gf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new td;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(ad=!0,i.add(n),e=_f.bind(null,e,t,n),t.then(e,e))}function _f(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(sd===4||sd===3&&(q&62914560)===q&&300>Je()-gd?W&2?ud|=n:Ud(e,0):ud|=n,fd===q&&(fd=0)),Of(e)}function vf(e,t){t===0&&(t=gt()),e=ji(e,t),e!==null&&(vt(e,t),Of(e))}function yf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vf(e,n)}function bf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),vf(e,n)}function xf(e,t){return We(e,t)}var Sf=null,Cf=null,wf=!1,Tf=!1,Ef=!1,Df=0;function Of(e){e!==Cf&&e.next===null&&(Cf===null?Sf=Cf=e:Cf=Cf.next=e),Tf=!0,wf||(wf=!0,Ff())}function kf(e,t){if(!Ef&&Tf){Ef=!0;do for(var n=!1,r=Sf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-M(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Pf(r,a))}else a=q,a=ft(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||pt(r,a)||(n=!0,Pf(r,a))}r=r.next}while(n);Ef=!1}}function Af(){jf()}function jf(){Tf=wf=!1;var e=0;Df!==0&&gp()&&(e=Df);for(var t=Je(),n=null,r=Sf;r!==null;){var i=r.next,a=Mf(r,t);a===0?(r.next=null,n===null?Sf=i:n.next=i,i===null&&(Cf=n)):(n=r,(e!==0||a&3)&&(Tf=!0)),r=i}xd!==0&&xd!==5||kf(e,!1),Df!==0&&(Df=0)}function Mf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-M(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=ht(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=ft(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ge(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||pt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ge(r),wt(n)){case 2:case 8:n=Ze;break;case 32:n=Qe;break;case 268435456:n=et;break;default:n=Qe}return r=Nf.bind(null,e),n=We(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ge(r),e.callbackPriority=2,e.callbackNode=null,2}function Nf(e,t){if(xd!==0&&xd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(pf()&&e.callbackNode!==n)return null;var r=q;return r=ft(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Ld(e,r,t),Mf(e,Je()),e.callbackNode!=null&&e.callbackNode===n?Nf.bind(null,e):null)}function Pf(e,t){if(pf())return null;Ld(e,t,!0)}function Ff(){xp(function(){W&6?We(Xe,Af):jf()})}function If(){if(Df===0){var e=Va;e===0&&(e=ct,ct<<=1,!(ct&261888)&&(ct=256)),Df=e}return Df}function Lf(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:xn(e)}function Rf(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Lf((i[Ot]||null).action),o=r.submitter;o&&(t=(t=o[Ot]||null)?Lf(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Un(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Df!==0){var e=new FormData(i,o);rc(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),rc(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var zf=0;zf<vi.length;zf++){var Bf=vi[zf];yi(Bf.toLowerCase(),`on`+(Bf[0].toUpperCase()+Bf.slice(1)))}yi(ui,`onAnimationEnd`),yi(di,`onAnimationIteration`),yi(fi,`onAnimationStart`),yi(`dblclick`,`onDoubleClick`),yi(`focusin`,`onFocus`),yi(`focusout`,`onBlur`),yi(pi,`onTransitionRun`),yi(mi,`onTransitionStart`),yi(hi,`onTransitionCancel`),yi(gi,`onTransitionEnd`),Kt(`onMouseEnter`,[`mouseout`,`mouseover`]),Kt(`onMouseLeave`,[`mouseout`,`mouseover`]),Kt(`onPointerEnter`,[`pointerout`,`pointerover`]),Kt(`onPointerLeave`,[`pointerout`,`pointerover`]),Gt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Gt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Gt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Gt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Gt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Gt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Vf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Hf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Vf));function Uf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){wi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){wi(e)}i.currentTarget=null,a=c}}}}function X(e,t){var n=t[At];n===void 0&&(n=t[At]=new Set);var r=e+`__bubble`;n.has(r)||(qf(t,e,2,!1),n.add(r))}function Wf(e,t,n){var r=0;t&&(r|=4),qf(n,e,r,t)}var Gf=`_reactListening`+Math.random().toString(36).slice(2);function Kf(e){if(!e[Gf]){e[Gf]=!0,Ut.forEach(function(t){t!==`selectionchange`&&(Hf.has(t)||Wf(t,!1,e),Wf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gf]||(t[Gf]=!0,Wf(`selectionchange`,!1,t))}}function qf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!Mn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Jf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Lt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}kn(function(){var r=a,i=wn(n),s=[];a:{var c=_i.get(e);if(c!==void 0){var l=Un,u=e;switch(e){case`keypress`:if(Rn(n)===0)break a;case`keydown`:case`keyup`:l=sr;break;case`focusin`:u=`focus`,l=Qn;break;case`focusout`:u=`blur`,l=Qn;break;case`beforeblur`:case`afterblur`:l=Qn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Xn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Zn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=ur;break;case ui:case di:case fi:l=$n;break;case gi:l=dr;break;case`scroll`:case`scrollend`:l=Gn;break;case`wheel`:l=fr;break;case`copy`:case`cut`:case`paste`:l=er;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=cr;break;case`submit`:l=lr;break;case`toggle`:case`beforetoggle`:l=pr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=An(m,p),g!=null&&d.push(Yf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==Cn&&(u=n.relatedTarget||n.fromElement)&&(Lt(u)||u[kt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Lt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Xn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=cr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:zt(c),h=l==null?u:zt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Lt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?w(c,l,Zf):null,c!==null&&Qf(s,u,c,d,!1),l!==null&&f!==null&&Qf(s,f,l,d,!0)))}a:{if(c=r?zt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Nr;else if(Dr(c)){if(Pr)_=Ur;else{_=Vr;var v=Br}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&vn(r.elementType)&&(_=Nr):_=Hr;if(_&&=_(e,r)){Or(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?zt(r):window,e){case`focusin`:(Dr(v)||v.contentEditable===`true`)&&(ei=v,ti=r,ni=null);break;case`focusout`:ni=ti=ei=null;break;case`mousedown`:ri=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:ri=!1,ii(s,n,i);break;case`selectionchange`:if($r)break;case`keydown`:case`keyup`:ii(s,n,i)}var y;if(hr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else Cr?xr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(vr&&n.locale!==`ko`&&(Cr||b!==`onCompositionStart`?b===`onCompositionEnd`&&Cr&&(y=Ln()):(Pn=i,Fn=`value`in Pn?Pn.value:Pn.textContent,Cr=!0)),v=Xf(r,b),0<v.length&&(b=new tr(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=Sr(n),y!==null&&(b.data=y)))),(y=_r?wr(e,n):Tr(e,n))&&(b=Xf(r,`onBeforeInput`),0<b.length&&(v=new tr(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),Rf(s,e,r,n,i)}Uf(s,t)})}function Yf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=An(e,n),i!=null&&r.unshift(Yf(e,i,a)),i=An(e,t),i!=null&&r.push(Yf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Zf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=An(n,a),l!=null&&o.unshift(Yf(n,l,c))):i||(l=An(n,a),l!=null&&o.push(Yf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var $f=/\r\n?/g,ep=/\u0000|\uFFFD/g;function tp(e){return(typeof e==`string`?e:``+e).replace($f,`
`).replace(ep,``)}function np(e,t){return t=tp(t),tp(e)===t}function Z(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||mn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&mn(e,``+r);else return;break;case`className`:Qt(e,`class`,r);break;case`tabIndex`:Qt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Qt(e,n,r);break;case`style`:_n(e,r,o);return;case`data`:if(t!==`object`){Qt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=xn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&Z(e,t,`name`,a.name,a,null),Z(e,t,`formEncType`,a.formEncType,a,null),Z(e,t,`formMethod`,a.formMethod,a,null),Z(e,t,`formTarget`,a.formTarget,a,null)):(Z(e,t,`encType`,a.encType,a,null),Z(e,t,`method`,a.method,a,null),Z(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=xn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Sn);return;case`onScroll`:r!=null&&X(`scroll`,e);return;case`onScrollEnd`:r!=null&&X(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=xn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:X(`beforetoggle`,e),X(`toggle`,e),Zt(e,`popover`,r);break;case`xlinkActuate`:$t(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:$t(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:$t(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:$t(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:$t(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:$t(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:$t(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:$t(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:$t(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Zt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=yn.get(n)||n,Zt(e,n,r);else return}F=!0}function rp(e,t,n,r,a,o){switch(n){case`style`:_n(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)mn(e,r);else if(typeof r==`number`||typeof r==`bigint`)mn(e,``+r);else return;break;case`onScroll`:r!=null&&X(`scroll`,e);return;case`onScrollEnd`:r!=null&&X(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=Sn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Wt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[Ot]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}F=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Zt(e,n,r)}return}F=!0}function ip(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:X(`error`,e),X(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Z(e,t,o,s,n,null)}}a&&Z(e,t,`srcSet`,n.srcSet,n,null),r&&Z(e,t,`src`,n.src,n,null);return;case`input`:X(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Z(e,t,r,d,n,null)}}ln(e,o,c,l,u,s,a,!1);return;case`select`:for(a in X(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Z(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&dn(e,!!r,n,!0):dn(e,!!r,t,!1);return;case`textarea`:for(s in X(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Z(e,t,s,c,n,null)}pn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Z(e,t,l,r,n,null)}return;case`dialog`:X(`beforetoggle`,e),X(`toggle`,e),X(`cancel`,e),X(`close`,e);break;case`iframe`:case`object`:X(`load`,e);break;case`video`:case`audio`:for(r=0;r<Vf.length;r++)X(Vf[r],e);break;case`image`:X(`error`,e),X(`load`,e);break;case`details`:X(`toggle`,e);break;case`embed`:case`source`:case`link`:X(`error`,e),X(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Z(e,t,u,r,n,null)}return;default:if(vn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&rp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Z(e,t,c,r,n,null))}var ap={};function op(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Z(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(F=!0),o=m;break;case`name`:m!==f&&(F=!0),a=m;break;case`checked`:m!==f&&(F=!0),u=m;break;case`defaultChecked`:m!==f&&(F=!0),d=m;break;case`value`:m!==f&&(F=!0),s=m;break;case`defaultValue`:m!==f&&(F=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Z(e,t,p,m,r,f)}}cn(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Z(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(F=!0),p=o;break;case`defaultValue`:o!==l&&(F=!0),c=o;break;case`multiple`:o!==l&&(F=!0),s=o;default:o!==l&&Z(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?dn(e,!!n,n?[]:``,!1):dn(e,!!n,t,!0)):dn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Z(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(F=!0),p=a;break;case`defaultValue`:a!==o&&(F=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Z(e,t,s,a,r,o)}fn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Z(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(F=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Z(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Z(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Z(e,t,u,p,r,m)}return;default:if(vn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&rp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||rp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Z(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Z(e,t,f,p,r,m)}function sp(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function cp(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&sp(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&sp(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var lp=null,up=null;function dp(e){return e.nodeType===9?e:e.ownerDocument}function fp(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Q(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function pp(e,t,n,r){return n=dp(n).createElement(e),n[Dt]=r,n[Ot]=t,ip(n,e,t),Vt(n),n}function mp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hp=null;function gp(){var e=window.event;return e&&e.type===`popstate`?e!==hp&&(hp=e,!0):(hp=null,!1)}var _p=typeof setTimeout==`function`?setTimeout:void 0,vp=typeof clearTimeout==`function`?clearTimeout:void 0,yp=typeof Promise==`function`?Promise:void 0,bp=typeof requestAnimationFrame==`function`?requestAnimationFrame:_p,xp=typeof queueMicrotask==`function`?queueMicrotask:yp===void 0?_p:function(e){return yp.resolve(null).then(e).catch(Sp)};function Sp(e){setTimeout(function(){throw e})}function Cp(e){return e===`head`}function wp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Pt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function Tp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Ep(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Dp(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Op(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function kp(e){return Op(e.getBoundingClientRect(),getComputedStyle(e),e)}function Ap(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Op(t,n,e)}function jp(e){return e.documentElement.clientHeight}function Mp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Np(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(jp(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(Mp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Pp(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Pp.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:T({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Pp.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Pp.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Fp(e){return{name:e,group:new Pp(`group`,e),imagePair:new Pp(`image-pair`,e),old:new Pp(`old`,e),new:new Pp(`new`,e)}}function Ip(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Ip.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Vp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=zp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Lp,e,s,r)}this._eventListeners=a}};function Lp(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Ip.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Vp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=zp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Rp,e,n,i),r.splice(t,1),a!==null&&a()}};function Rp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function zp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Bp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Vp(e,t,n,r){if(e.length===0)return-1;r=Bp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&Bp(a.optionsOrUseCapture)===r)return i}return-1}Ip.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,zp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,zp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Ip.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Hp,e,void 0,void 0)};function Hp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Ip.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Up,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Hp(t[n],e);n--);};function Up(e,t){return t.push(e),!1}Ip.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=dp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0))};function Wp(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Ip.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0)};function Gp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Ip.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Kp,e,void 0,void 0);for(var n=t=0;n<qp.length;n++){var r=qp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):qp[t++]=r}qp.length=t}};function Kp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var qp=[],Jp=!1;function Yp(e,t,n){qp.push({fragmentInstance:e,observer:t,instance:n}),Jp||(Jp=!0,mm(function(){Jp=!1;var e=qp;qp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Ip.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,$,e,void 0,void 0),e};function $(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Ip.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Ip.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Up,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Lt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=w(n,a,C),t===null?t=!1:(h(t,!0,ee,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=w(r,a,C),t===null?t=!1:(h(t,!0,te,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Ip.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Up,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,zp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<qp.length;i++){var a=qp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(qp[r++]=a)}qp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,zp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Yp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),It(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Pt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){bp(function(){bp(function(t){return e(t)})})}function hm(e,t,n){switch(t=dp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&Z(e,t,r,null,ap,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===Sn&&(e.onclick=null),It(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);It(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=O.d;O.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=Vd();return e||t}function Cm(e){var t=Rt(e);t!==null&&t.tag===5&&t.type===`form`?ac(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=sn(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),ip(t,`link`,e),Vt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+sn(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+sn(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+sn(n.imageSizes)+`"]`)):i+=`[href="`+sn(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=T({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);ip(o,`link`,e),t===`style`&&(o[Ft]=!0,o.onload=o.onerror=function(){Ht(o)}),Vt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+sn(r)+`"][href="`+sn(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=T({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),ip(r,`link`,e),Vt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Bt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=T({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Vt(c),ip(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Bt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=T({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Vt(a),ip(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Bt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=T({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Vt(a),ip(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=Ae.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Bt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Bt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Bt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+sn(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Ft]){r.loading=1;return}}else t=e.createElement(`link`),t[Ft]=!0,t.onload=t.onerror=Ht.bind(null,t),ip(t,`link`,n),Vt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+sn(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+sn(n.href)+`"]`);if(r)return t.instance=r,Vt(r),r;var a=T({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Vt(r),ip(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,Vt(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),Vt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),ip(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,Vt(a),a):(r=n,(a=vm.get(o))&&(r=T({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Vt(a),ip(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Pt]||a[Dt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Vt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Vt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),ip(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*cp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:ce,Provider:null,Consumer:null,_currentValue:we,_currentValue2:we,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_t(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_t(0),this.hiddenUpdates=_t(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Ii(3,null,null,t),e.current=a,a.stateNode=e,t=Pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},_o(a),e}function uh(e){return e?(e=Pi,e):Pi}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=yo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=bo(e,r,t),n!==null&&(Id(n,e,t),xo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=ji(e,67108864);t!==null&&Id(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=Nd();t=Ct(t);var n=ji(e,t);n!==null&&Id(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,yh(e,t,n,r)}finally{O.p=a,D.T=i}}function vh(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,yh(e,t,n,r)}finally{O.p=a,D.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Jf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Rt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=dt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-M(o);s.entanglements[1]|=c,o&=~c}Of(a),!(W&6)&&(vd=Je()+500,kf(0,!1))}}break;case 31:case 13:s=ji(a,2),s!==null&&Id(s,a,2),Vd(),ph(a,2)}if(a=bh(r),a===null&&Jf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Jf(e,t,r,null,n)}}function bh(e){return e=wn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Lt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ye()){case Xe:return 2;case Ze:return 8;case Qe:case $e:return 32;case et:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Rt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Lt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,Et(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,Et(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Cn=r,n.target.dispatchEvent(r),Cn=null}else return t=Rt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Rt(n);a!==null&&(e.splice(t,3),t-=3,rc(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Ot]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Ot]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,Nd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),Vd(),t[kt]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.1`)throw Error(i(527,Kh,`19.3.1`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{nt=Jh.inject(qh),rt=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ec,s=Dc,c=Oc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[kt]=t.current,Kf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),b=o(((e,t)=>{t.exports=y()})),x=(0,_.createContext)({});function S(e){let t=(0,_.useRef)(null);return t.current===null&&(t.current=e()),t.current}var ee=typeof window<`u`?_.useLayoutEffect:_.useEffect,te=(0,_.createContext)(null);function C(e,t){e.indexOf(t)===-1&&e.push(t)}function w(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var T=(e,t,n)=>n>t?t:n<e?e:n,E={},ne=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),re=e=>typeof e==`object`&&!!e,ie=e=>/^0[^.\s]+$/u.test(e);function ae(e){let t;return()=>(t===void 0&&(t=e()),t)}var oe=e=>e,se=(...e)=>e.reduce((e,t)=>n=>t(e(n))),ce=(e,t,n)=>{let r=t-e;return r?(n-e)/r:1},le=class{constructor(){this.subscriptions=[]}add(e){return C(this.subscriptions,e),()=>this.remove(e)}remove(e){w(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r){if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},ue=e=>e*1e3,de=e=>e/1e3,fe=(e,t)=>t?1e3/t*e:0,pe=(e,t,n)=>e*(3*(1-e)*((1-e)*t+e*n)+e*e);function me(e,t,n,r){return e===t&&n===r?oe:i=>{let a=0,o=1,s=i;for(let t=0;;t++){s>=a&&s<=o||(s=(a+o)/2);let r=pe(s,e,n)-i;if(r*r<1e-28||t===40)break;r>0?o=s:a=s,s-=r*1e-7/(pe(s+1e-7,e,n)-i-r)}return pe(s,t,r)}}var he=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ge=e=>t=>1-e(1-t),_e=me(.33,1.53,.69,.99),ve=ge(_e),ye=he(ve),be=e=>e>=1?1:(e*=2)<1?.5*ve(e):.5*(2-2**(-10*(e-1))),xe=e=>1-Math.sin(Math.acos(e)),Se=ge(xe),Ce=he(xe),D=me(.42,0,1,1),O=me(0,0,.58,1),we=me(.42,0,.58,1),Te=e=>Array.isArray(e)&&typeof e[0]!=`number`,Ee=e=>Array.isArray(e)&&typeof e[0]==`number`,De={linear:oe,easeIn:D,easeInOut:we,easeOut:O,circIn:xe,circInOut:Ce,circOut:Se,backIn:ve,backInOut:ye,backOut:_e,anticipate:be},Oe=e=>typeof e==`string`,k=e=>{if(Ee(e)){e.length;let[t,n,r,i]=e;return me(t,n,r,i)}return Oe(e)?(De[e],`${e}`,De[e]):e},A={delta:0,timestamp:0,isProcessing:!1},ke;function Ae(){ke=void 0}var je={now:()=>(ke===void 0&&je.set(A.isProcessing||E.useManualTiming?A.timestamp:performance.now()),ke),set:e=>{ke=e,queueMicrotask(Ae)}},Me=e=>Math.round(e*1e5)/1e5,Ne=e=>t=>typeof t==`string`&&t.startsWith(e),Pe=Ne(`--`),Fe=Ne(`var(--`),Ie=e=>Fe(e)?Le.test(e.split(`/*`)[0].trim()):!1,Le=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Re(e){return typeof e==`string`&&e.split(`/*`)[0].includes(`var(--`)}var ze={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Be={...ze,transform:e=>T(0,1,e)},Ve={...ze,default:1},He=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Ue(e){return e==null}var We=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ge=(e,t)=>n=>!!(typeof n==`string`&&We.test(n)&&n.startsWith(e)||t&&!Ue(n)&&Object.prototype.hasOwnProperty.call(n,t)),Ke=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(He);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},qe=e=>T(0,255,e),Je={...ze,transform:e=>Math.round(qe(e))},Ye={test:Ge(`rgb`,`red`),parse:Ke(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+Je.transform(e)+`, `+Je.transform(t)+`, `+Je.transform(n)+`, `+Me(Be.transform(r))+`)`};function Xe(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var Ze={test:Ge(`#`),parse:Xe,transform:Ye.transform},Qe=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),$e=Qe(`deg`),et=Qe(`%`),j=Qe(`px`),tt=Qe(`vh`),nt=Qe(`vw`),rt={...et,parse:e=>et.parse(e)/100,transform:e=>et.transform(e*100)},it={test:Ge(`hsl`,`hue`),parse:Ke(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+et.transform(Me(t))+`, `+et.transform(Me(n))+`, `+Me(Be.transform(r))+`)`},M={test:e=>Ye.test(e)||Ze.test(e)||it.test(e),parse:e=>Ye.test(e)?Ye.parse(e):it.test(e)?it.parse(e):Ze.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?Ye.transform(e):it.transform(e),getAnimatableNone:e=>{let t=M.parse(e);return t.alpha=0,M.transform(t)}},at=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,ot=new RegExp(He.source),st=new RegExp(at.source,`i`);function ct(e){return isNaN(e)&&typeof e==`string`&&(ot.test(e)||st.test(e))}var lt=`number`,ut=`color`,dt=`var`,ft=`var(`,pt="${}",mt=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ht(e){let t=e.toString();return ot.test(t)||st.test(t)}function gt(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(mt,e=>(M.test(e)?(r.color.push(a),i.push(ut),n.push(M.parse(e))):e.startsWith(ft)?(r.var.push(a),i.push(dt),n.push(e)):(r.number.push(a),i.push(lt),n.push(parseFloat(e))),++a,pt)).split(pt),indexes:r,types:i}}function _t(e){return gt(e).values}function vt({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];i+=e===lt?Me(r[a]):e===ut?M.transform(r[a]):r[a]}return i}}function yt(e){return vt(gt(e))}var bt=e=>typeof e==`number`?0:M.test(e)?M.getAnimatableNone(e):e,xt=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:bt(e);function St(e){let t=gt(e);return vt(t)(t.values.map((e,n)=>xt(e,t.split[n])))}var Ct={test:ct,parse:_t,createTransformer:yt,getAnimatableNone:St};function wt(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Tt({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=wt(s,r,e+1/3),a=wt(s,r,e),o=wt(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function Et(e,t){return n=>n>0?t:e}var N=(e,t,n)=>e+(t-e)*n,Dt=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Ot=[Ze,Ye,it],kt=e=>Ot.find(t=>t.test(e));function At(e){let t=kt(e);if(!t)return`${e}`,!1;let n=t.parse(e);return t===it&&(n=Tt(n)),n}var jt=(e,t)=>{let n=At(e),r=At(t);if(!n||!r)return Et(e,t);let i={...n};return e=>(i.red=Dt(n.red,r.red,e),i.green=Dt(n.green,r.green,e),i.blue=Dt(n.blue,r.blue,e),i.alpha=N(n.alpha,r.alpha,e),Ye.transform(i))},Mt=new Set([`none`,`hidden`]);function Nt(e,t){return Mt.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Pt(e,t){return n=>N(e,t,n)}function Ft(e){return typeof e==`number`?Pt:typeof e==`string`?Ie(e)?Et:M.test(e)?jt:zt:Array.isArray(e)?It:typeof e==`object`?M.test(e)?jt:Lt:Et}function It(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>Ft(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Lt(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Ft(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Rt(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}var zt=(e,t)=>{let n=Ct.createTransformer(t),r=gt(e),i=gt(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Mt.has(e)&&!i.values.length||Mt.has(t)&&!r.values.length?Nt(e,t):se(It(Rt(r,i),i.values),n):(`${e}${t}`,Et(e,t))},Bt=/^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;function Vt(e,t){let n=Bt.exec(e);if(!n)return;let r=Bt.exec(t);if(!r||n[2]!==r[2])return;let i=n[2],a=parseFloat(n[1]),o=parseFloat(r[1]);return e=>Me(N(a,o,e))+i}function Ht(e,t,n){if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`)return N(e,t,n);if(typeof e==`string`&&typeof t==`string`){let n=Vt(e,t);if(n)return n}return Ft(e)(e,t)}var Ut=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`];function Wt(e){let t=new Set,n=new Set,r=!1,i=!1,a=new Set,o={delta:0,timestamp:0,isProcessing:!1};function s(t){a.has(t)&&(n.add(t),e()),t(o)}let c={schedule:(e,i=!1,o=!1)=>{let s=o&&r?t:n;return i&&a.add(e),s.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{if(o=e,r){i=!0;return}r=!0;let a=t;t=n,n=a,t.forEach(s),t.clear(),r=!1,i&&(i=!1,c.process(e))}};return c}var Gt=40;function Kt(e,t,n={delta:0,timestamp:0,isProcessing:!1}){let r=!1,i=!0,a=()=>r=!0,o=Ut.reduce((e,t)=>(e[t]=Wt(a),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=E.useManualTiming,o=a?n.timestamp:performance.now();r=!1,a||(n.delta=i?1e3/60:Math.max(Math.min(o-n.timestamp,Gt),1)),n.timestamp=o,n.isProcessing=!0,s.process(n),c.process(n),l.process(n),u.process(n),d.process(n),f.process(n),p.process(n),m.process(n),n.isProcessing=!1,r&&t&&(i=!1,e(h))},g=()=>{r=!0,i=!0,n.isProcessing||e(h)};return{schedule:Ut.reduce((e,t)=>{let n=o[t];return e[t]=(e,t=!1,i=!1)=>(r||g(),n.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<Ut.length;t++)o[Ut[t]].cancel(e)},state:n,steps:o}}var{schedule:P,cancel:qt,steps:Jt}=Kt(typeof requestAnimationFrame<`u`?requestAnimationFrame:oe,!0,A),Yt=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>P.update(t,e),stop:()=>qt(t),now:()=>A.isProcessing?A.timestamp:je.now()}},F=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Xt=2e4;function Zt(e,t=50,n=Xt,r){let i=0,a=e.next(i);for(r?.push(a.value);!a.done&&i<n;)i+=t,a=e.next(i),r?.push(a.value);return i>=n?1/0:i}function Qt(e,t=100,n){let{keyframes:r,velocity:i}=e,a=r&&r[r.length-1]-r[0],o=n({...e,velocity:i&&a?i*t/a:i,keyframes:[0,t]}),s=Math.min(Zt(o),Xt);return{type:`keyframes`,ease:e=>o.next(s*e).value/t,duration:de(s)}}var $t={stiffness:100,damping:10,mass:1,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05},en=e=>e<0?1/Math.max(1+e,$t.minDamping):Math.max(1-e,$t.minDamping);function tn(e,t){if(!(e>1))return 1;let n=Math.sqrt(e*e-1),r=e-n,i=e+n,a=2*n*Math.exp(-t)*(1+t);return an(e=>i*Math.exp(-r*e)-r*Math.exp(-i*e)-a,e=>Math.exp(-i*e)-Math.exp(-r*e),t)/t}function nn(e,t){return e*Math.sqrt(1-t*t)}var rn=12;function an(e,t,n){let r=n;for(let n=1;n<rn;n++)r-=e(r)/t(r);return r}var on=.001;function sn({duration:e=$t.duration,bounce:t=$t.bounce}){let n,r;$t.maxDuration;let i=en(t);e=T($t.minDuration,$t.maxDuration,de(e)),i<1?(n=t=>{let n=t*i,r=n*e,a=nn(t,i),o=Math.exp(-r);return on-n/a*o},r=t=>{let r=t*i*e,a=i*i*t*t*e,o=Math.exp(-r),s=nn(t*t,i);return(-n(t)+on>0?-1:1)*-a*o/s}):(n=t=>-.001+Math.exp(-t*e)*(t*e+1),r=t=>Math.exp(-t*e)*(-t*(e*e)));let a=5/e,o=an(n,r,a),s=o*tn(i,o*e),c=s*s;return{stiffness:c,damping:i*2*Math.sqrt(c),duration:ue(e)}}var cn=(e,t)=>(t?e>=0:e>0)&&e<1/0;function ln(e,t){if(cn(e,t))return e}function un(e){let t=ln(e.stiffness),n=ln(e.damping,!0),r=ln(e.mass),i={...e,stiffness:t??$t.stiffness,damping:n??$t.damping,mass:r??$t.mass,isResolvedFromDuration:!1,isTimeDefined:(t??n??r)===void 0&&(e.duration!==void 0||e.bounce!==void 0)};if(i.isTimeDefined){if(e.visualDuration){let t=en(e.bounce||0),n=2*Math.PI/(e.visualDuration*1.2)*tn(t,2*Math.PI/1.2);i.stiffness=n*n,i.damping=2*t*Math.sqrt(i.stiffness)}else Object.assign(i,sn(i)),i.isResolvedFromDuration=!0;(!cn(i.stiffness)||!cn(i.damping,!0))&&(i.stiffness=$t.stiffness,i.damping=$t.damping)}return i}function dn(e=$t.visualDuration,t=$t.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},r=n.keyframes[0],i=n.keyframes[n.keyframes.length-1],a={done:!1,value:r},{stiffness:o,damping:s,mass:c,duration:l,isResolvedFromDuration:u,isTimeDefined:d}=un({...n}),f=e=>d?0:-de(e),p=s/(2*Math.sqrt(o*c)),m=de(Math.sqrt(o/c)),h=p*m,g={target:i,delta:i-r,velocity:f(n.velocity||0)||0,restSpeed:0,restDelta:0},_=()=>{let e=Math.abs(g.delta)<5;g.restSpeed=n.restSpeed||(e?$t.restSpeed.granular:$t.restSpeed.default),g.restDelta=n.restDelta||(e?$t.restDelta.granular:$t.restDelta.default)};_();let v,y,b;if(p<1){let e=nn(m,p),t={A:0,sinC:0,cosC:0,t:-1,env:0,sin:0,cos:0};b=()=>{t.A=(g.velocity+h*g.delta)/e,t.sinC=h*t.A+g.delta*e,t.cosC=h*g.delta-t.A*e};let n=n=>{n!==t.t&&(t.t=n,t.env=Math.exp(-h*n),t.sin=Math.sin(e*n),t.cos=Math.cos(e*n))};v=e=>(n(e),g.target-t.env*(t.A*t.sin+g.delta*t.cos)),y=e=>(n(e),t.env*(t.sinC*t.sin+t.cosC*t.cos))}else if(p===1){v=e=>g.target-Math.exp(-m*e)*(g.delta+(g.velocity+m*g.delta)*e);let e={C:0};b=()=>{e.C=g.velocity+m*g.delta},y=t=>Math.exp(-m*t)*(m*e.C*t-g.velocity)}else{let e=m*Math.sqrt(p*p-1),t=h-e,n=h+e,r=d?1/0:300/e,i=(e,t)=>Math.exp(t>r?-e*r-h*(t-r):-e*t),a={S:0,F:0};b=()=>{let t=(g.velocity+h*g.delta)/e;a.S=(g.delta+t)/2,a.F=(g.delta-t)/2},v=e=>g.target-a.S*i(t,e)-a.F*i(n,e),y=e=>t*a.S*i(t,e)+n*a.F*i(n,e)}b();let x=u&&l||null,S={calculatedDuration:x,retarget:(e,t)=>{g.target=e[e.length-1],g.delta=g.target-e[0],g.velocity=f(t),n.restSpeed&&n.restDelta||_(),S.calculatedDuration=x,a.done=!1,b()},velocity:e=>ue(y(e)),next:e=>{let t=v(e);if(u)a.done=e>=l;else{let n=ue(y(e));a.done=Math.abs(n)<=g.restSpeed&&Math.abs(g.target-t)<=g.restDelta}return a.value=a.done?g.target:t,a},toString:()=>{let e=Math.min(Zt(S),Xt),t=F(t=>S.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return S}dn.applyToOptions=e=>{let t=Qt(e,100,dn);return e.ease=t.ease,e.duration=ue(t.duration),e.type=`keyframes`,e};function fn({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>e<s||e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>{let t=v(e);f.done=Math.abs(t)<=l,f.value=f.done?_:_+t},b,x,S=e=>{p(f.value)&&(b=e,x=dn({keyframes:[f.value,m(f.value)],velocity:-v(e)/r*1e3,damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return S(0),{calculatedDuration:null,next:e=>{let t=!1;return!x&&b===void 0&&(t=!0,y(e),S(e)),b!==void 0&&e>=b?x.next(e-b):(!t&&y(e),f)}}}function pn(e,t,n){let r=[],i=n||E.mix||Ht,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=se(Array.isArray(t)?t[n]||oe:t,a)),r.push(a)}return r}function mn(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=pn(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=ce(e[r],e[r+1],n);return s[r](i)};return n?t=>l(T(e[0],e[a-1],t)):l}function hn(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=ce(0,t,r);e.push(N(n,1,i))}}function gn(e){let t=[0];return hn(t,e.length-1),t}function _n(e,t){return e.map(e=>e*t)}function vn(e,t){return e.map(()=>t||we).splice(0,e.length-1)}function yn({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=Te(r)?r.map(k):k(r)||we,a={done:!1,value:t[0]};if(t.length===2&&!Array.isArray(i)&&(!n||n.length!==2||n[0]===0&&n[1]===1)){let[n,r]=t,o=n===r?void 0:(E.mix||Ht)(n,r);return{calculatedDuration:e,next:t=>(a.value=o?o(i(e>0?T(0,1,t/e):1)):r,a.done=t>=e,a)}}let o=mn(_n(n&&n.length===t.length?n:gn(t),e),t,{ease:Array.isArray(i)?i:vn(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var bn=5;function xn(e,t,n){let r=Math.max(t-bn,0);return fe(n-e(r),t-r)}function Sn(e,t,n=0){return t<=0?n:e.velocity?e.velocity(t):xn(t=>e.next(t).value,t,e.next(t).value)}var Cn=e=>e!==null;function wn(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(Cn),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var Tn={decay:fn,inertia:fn,tween:yn,keyframes:yn,spring:dn};function En(e){typeof e.type==`string`&&(e.type=Tn[e.type])}var Dn=40,On=(e,t)=>t-e>Dn&&!E.useManualTiming?t:e;function kn(e,t){return{kind:e,animation:t,timestamp:je.now(),frameTimestamp:A.timestamp,frameIsProcessing:A.isProcessing}}function An(e,t,n){let r=globalThis.__MOTION_INSPECT__;if(r)try{r({...kn(`animation-start`,e),options:n?{...t,...n}:t})}catch{}}function jn(e,t){let n=globalThis.__MOTION_INSPECT__;if(n)try{n({...kn(`layout-animation-start`,e),node:t})}catch{}}var Mn=class{constructor(){this.isResolved=!1}get finished(){return this._finished||=this.isResolved?Promise.resolve():new Promise(e=>{this._resolve=e}),this._finished}updateFinished(){this._finished=this._resolve=void 0,this.isResolved=!1}notifyFinished(){this.isResolved=!0,this._resolve?.()}then(e,t){return this.finished.then(e,t)}},Nn=e=>e/100,Pn=e=>Math.round(e*1e4)/1e4,Fn=class extends Mn{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==je.now()&&this.tick(je.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause(),An(this,this.options)}initAnimation(){let{options:e}=this;En(e);let{type:t=yn,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||yn;s!==yn&&typeof o[0]!=`number`&&(this.mixKeyframes=se(Nn,Ht(o[0],o[1])),o=[0,100]);let c=s(o===e.keyframes?e:{...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Zt(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.currentTime=this.holdTime===null?t:this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,calculatedDuration:i}=this;if(this.startTime===null)return n.next(0);let{delay:a=0,keyframes:o,type:s,onUpdate:c,finalKeyframe:l}=this.options;this.startTime===this.pendingStartTime&&(this.startTime=On(this.startTime,e)),this.pendingStartTime=void 0,this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let u=this.currentTime-a*(this.playbackSpeed>=0?1:-1),d=this.playbackSpeed>=0?u<0:u>r;this.currentTime=Math.max(u,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let f=this.generate(this.currentTime,d),{done:p}=f;!d&&i!==null&&(p=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let m=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&p);return m&&s!==fn&&(f.value=wn(o,this.options,l,this.speed)),c&&c(f.value),m&&this.finish(),f}at(e){return this.holdTime??Pn((e-this.startTime)*this.playbackSpeed)}sampleAt(e,t){let{options:n,totalDuration:r}=this,i=this.at(e)-(n.delay||0);return i>=r&&n.type!==fn?wn(n.keyframes,n,t?void 0:n.finalKeyframe):this.generate(Math.max(i,0),i<0).value}generate(e,t){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o}=this,{keyframes:s,repeat:c,repeatType:l,repeatDelay:u}=this.options,d=e,f=n;if(c){let t=Math.min(e,r)/o,n=Math.floor(t),i=t%1;!i&&t>=1&&(i=1),i===1&&n--,n=Math.min(n,c+1),n%2&&(l===`reverse`?(i=1-i,u&&(i-=u/o)):l===`mirror`&&(f=a)),d=T(0,1,i)*o}let p;return t?(this.delayState.value=s[0],p=this.delayState):p=f.next(d),i&&!t&&(p.value=i(p.value)),p}then(e,t){return this.finished.then(e,t)}get duration(){return de(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+de(e)}get time(){return de(this.currentTime)}set time(e){e=ue(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){return Sn(this.generator,this.currentTime,this.options.velocity)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(je.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=de(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Yt,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??(this.pendingStartTime=n):this.startTime=n-this.holdTime/(this.playbackSpeed||1),this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(je.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}},In=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function Ln(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(He)||[];if(!r)return e;let i=n.replace(r,``),a=+!!In.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var Rn=/\b([a-z-]*)\(.*?\)/gu,zn={...Ct,getAnimatableNone:e=>{let t=e.match(Rn);return t?t.map(Ln).join(` `):e}},Bn={...Ct,getAnimatableNone:e=>{let t=Ct.parse(e);return Ct.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},Vn={...ze,transform:Math.round},Hn={borderWidth:j,borderTopWidth:j,borderRightWidth:j,borderBottomWidth:j,borderLeftWidth:j,borderRadius:j,borderTopLeftRadius:j,borderTopRightRadius:j,borderBottomRightRadius:j,borderBottomLeftRadius:j,width:j,maxWidth:j,height:j,maxHeight:j,top:j,right:j,bottom:j,left:j,inset:j,insetBlock:j,insetBlockStart:j,insetBlockEnd:j,insetInline:j,insetInlineStart:j,insetInlineEnd:j,padding:j,paddingTop:j,paddingRight:j,paddingBottom:j,paddingLeft:j,paddingBlock:j,paddingBlockStart:j,paddingBlockEnd:j,paddingInline:j,paddingInlineStart:j,paddingInlineEnd:j,margin:j,marginTop:j,marginRight:j,marginBottom:j,marginLeft:j,marginBlock:j,marginBlockStart:j,marginBlockEnd:j,marginInline:j,marginInlineStart:j,marginInlineEnd:j,fontSize:j,backgroundPositionX:j,backgroundPositionY:j,rotate:$e,pathRotation:$e,rotateX:$e,rotateY:$e,rotateZ:$e,scale:Ve,scaleX:Ve,scaleY:Ve,scaleZ:Ve,skew:$e,skewX:$e,skewY:$e,distance:j,translateX:j,translateY:j,translateZ:j,x:j,y:j,z:j,perspective:j,transformPerspective:j,opacity:Be,originX:rt,originY:rt,originZ:j,zIndex:Vn,fillOpacity:Be,strokeOpacity:Be,numOctaves:Vn},Un={...Hn,color:M,backgroundColor:M,outlineColor:M,fill:M,stroke:M,borderColor:M,borderTopColor:M,borderRightColor:M,borderBottomColor:M,borderLeftColor:M,filter:zn,WebkitFilter:zn,mask:Bn,WebkitMask:Bn},Wn=e=>Un[e],Gn=new Set([zn,Bn]);function Kn(e,t){let n=Wn(e);return Gn.has(n)||(n=Ct),n.getAnimatableNone?n.getAnimatableNone(t):void 0}function qn(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var Jn=e=>e*180/Math.PI,Yn=e=>Zn(Jn(Math.atan2(e[1],e[0]))),Xn={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Yn,rotateZ:Yn,skewX:e=>Jn(Math.atan(e[1])),skewY:e=>Jn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Zn=e=>(e%=360,e<0&&(e+=360),e),Qn=Yn,$n=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),er=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),tr={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:$n,scaleY:er,scale:e=>($n(e)+er(e))/2,rotateX:e=>Zn(Jn(Math.atan2(e[6],e[5]))),rotateY:e=>Zn(Jn(Math.atan2(-e[2],e[0]))),rotateZ:Qn,rotate:Qn,skewX:e=>Jn(Math.atan(e[4])),skewY:e=>Jn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function nr(e){return+!!e.includes(`scale`)}function rr(e,t){if(!e||e===`none`)return nr(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=tr,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Xn,i=t}if(!i)return nr(t);let a=r[t],o=i[1].split(`,`).map(ar);return typeof a==`function`?a(o):o[a]}var ir=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return rr(n,t)};function ar(e){return parseFloat(e.trim())}var or=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],sr=new Set([...or,`pathRotation`]),cr=e=>e===ze||e===j,lr=new Set([`x`,`y`,`z`]),ur=or.filter(e=>!lr.has(e));function dr(e){let t=[];return ur.forEach(n=>{let r=e.getValue(n);if(r!==void 0){let e=r.get(),i=+!!n.startsWith(`scale`);if(e===i)return;t.push([n,e]),r.set(i)}}),t}var fr=new Set([`bottom`,`right`]);function pr(e,t,n,r,i,a){let o=parseFloat(e);if(!isNaN(o))return o;let{min:s,max:c}=t()[n],l=c-s;return a===`border-box`?l:l-parseFloat(r)-parseFloat(i)}var mr={width:({width:e,paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r},i)=>pr(e,i,`x`,t,n,r),height:({height:e,paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r},i)=>pr(e,i,`y`,t,n,r),top:({top:e})=>parseFloat(e),left:({left:e})=>parseFloat(e),bottom:({top:e},t)=>{let{y:n}=t();return parseFloat(e)+(n.max-n.min)},right:({left:e},t)=>{let{x:n}=t();return parseFloat(e)+(n.max-n.min)},x:({transform:e})=>rr(e,`x`),y:({transform:e})=>rr(e,`y`)};mr.translateX=mr.x,mr.translateY=mr.y;var hr=new Set,gr=!1,_r=!1,vr=!1;function yr(){if(_r){let e=[],t=new Set,n=new Set;hr.forEach(r=>{r.needsMeasurement&&(e.push(r),t.add(r.element),fr.has(r.name)&&n.add(r.element))});let r=new Map;n.forEach(e=>{let t=dr(e);t.length&&(r.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=r.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}_r=!1,gr=!1,hr.forEach(e=>e.complete(vr)),hr.clear()}function br(){hr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(_r=!0)})}function xr(){vr=!0,br(),yr(),vr=!1}function Sr(e,t,n){if(typeof e==`string`){if(ne(e)||ie(e))return parseFloat(e);if(!Ct.test(e)&&Ct.test(n))return Kn(t,n)}return e??void 0}var Cr=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(hr.add(this),gr||(gr=!0,P.read(br),P.resolveKeyframes(yr))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=Sr(n.readValue(t,a),t,a);r!==void 0&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}qn(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),hr.delete(this)}cancel(){this.state===`scheduled`&&(hr.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},wr=e=>e.startsWith(`--`);function Tr(e,t,n){wr(t)?e.style.setProperty(t,n):e.style[t]=n}var Er={};function Dr(e,t){let n=ae(e);return()=>Er[t]??n()}var Or=Dr(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),kr=Dr(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),Ar=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,jr={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:Ar([0,.65,.55,1]),circOut:Ar([.55,0,1,.45]),backIn:Ar([.31,.01,.66,-.59]),backOut:Ar([.33,1.53,.69,.99])};function Mr(e,t){if(e)return typeof e==`function`?kr()?F(e,t):`ease-out`:Ee(e)?Ar(e):Array.isArray(e)?e.map(e=>Mr(e,t)||jr.easeOut):jr[e]}function Nr(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=Mr(s,i);Array.isArray(d)&&(u.easing=d);let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};return l&&(f.pseudoElement=l),e.animate(u,f)}function Pr(e){return typeof e==`function`&&`applyToOptions`in e}function Fr({type:e,...t}){return Pr(e)&&kr()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var Ir=class extends Mn{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=Fr(e);this.animation=Nr(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=wn(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),Tr(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()},An(this,e,c)}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e!==`idle`&&e!==`finished`&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return de(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+de(e)}get time(){return de(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ue(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,onAttach:t,observe:n}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&Or()?(this.animation.timeline=e,t?.(this.animation),oe):n(this)}},Lr={anticipate:be,backInOut:ye,circInOut:Ce};function Rr(e){return e in Lr}function zr(e){typeof e.ease==`string`&&Rr(e.ease)&&(e.ease=Lr[e.ease])}var Br=class extends Ir{constructor(e){zr(e),En(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}elapsed(){return this.state===`running`?(je.now()-this.startTime)*this.speed:this.time*1e3}sample(e){if(!this.sampler){let{motionValue:e,onUpdate:t,onComplete:n,onPlay:r,onStop:i,element:a,...o}=this.options;this.sampler=new Fn({...o,autoplay:!1}),this.sampler.stop()}return this.sampler.sample(Math.max(0,e)).value}liveValue(){let{state:e}=this;if(e===`running`||e===`paused`)return this.sample(this.elapsed())}updateMotionValue(e){let{motionValue:t,element:n,name:r}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let{speed:i}=this,a=this.elapsed(),o=this.state===`running`&&i?T(0,10,a):0,s=this.sample(a);n&&r&&Tr(n,r,s),t.setWithVelocity(this.sample(a-o*Math.sign(i)),s,o/Math.abs(i||1))}},Vr=(e,t)=>t!==`zIndex`&&!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(Ct.test(e)||e===`0`)&&!e.startsWith(`url(`));function Hr(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Ur(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=Vr(i,t),s=Vr(a,t);return!o||!s?(o!==s&&`${t}${i}${a}${o?a:i}`,!1):Hr(e)||(n===`spring`||Pr(n))&&r}function Wr(e){e.duration=0,e.type=`keyframes`}var Gr=new Set([`opacity`,`clipPath`,`filter`,`transform`,`backgroundColor`]),Kr=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function qr(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&Kr.test(e[t]))return!0;return!1}var Jr=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),Yr=ae(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function Xr(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!n||!(Gr.has(n)||Jr.has(n)))return!1;let c=t?.owner?.current;if(!(c instanceof HTMLElement)&&!(c instanceof SVGElement))return!1;let{onUpdate:l,transformTemplate:u}=t.owner.getProps();return Yr()&&(Gr.has(n)||Jr.has(n)&&qr(s))&&(n!==`transform`||!u)&&!l&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var Zr=(e,t)=>t&&typeof e==`number`?t.transform(e):e,Qr={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},$r=or.length;function ei(e,t,n){let r=``,i=!0;for(let a=0;a<$r;a++){let o=or[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=Zr(s,Hn[o]);if(!c){i=!1;let t=Qr[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}let a=e.pathRotation;return a&&(i=!1,r+=`rotate(${Zr(a,Hn.pathRotation)}) `),r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}var ti=new WeakMap,ni=200,ri=.001,ii=.1,ai=.001,oi=100,si=e=>/^(linear|ease(In|Out|InOut))$/.test(e),ci=(e,t)=>e-t,li=(e,t,n)=>{let r=[];for(let i=0;i<=n;i++)r.push(N(e,t,i/n));return r},ui=e=>e.motionValue.owner,di=e=>ti.get(e),fi=(e,t)=>e.latestValues?e.latestValues[t]:e.getValue(t)?.get(),pi=({name:e,motionValue:t})=>e&&or.includes(e)&&t?.owner?.current instanceof HTMLElement&&Yr()&&kr();function mi(e){let t=ui(e),{onUpdate:n,transformTemplate:r}=t.getProps();return!e.isHandoff&&!n&&!e.hasOnUpdate&&!r&&e.type!==`inertia`&&(fi(t,`transform`)||`none`)===`none`&&!fi(t,`pathRotation`)&&!t.projection?.isProjecting()}var hi=class extends Fn{constructor(e){let t=ui(e).current,{driver:n=Yt}=e,r=mi(e);e.driver=e=>{let r=n(e);return{js:r,now:r.now,start:(e=!0)=>{let n=di(t);!n||n.isJS?r.start(e):n.schedule(!1,!e)},stop:()=>{r.stop();let e=di(t);e?.schedule(!e.isFinishing)}}},super(e),this.canAccelerate=r;let{stop:i}=this;this.stop=()=>{this.isAccelerated()&&this.sync(),i()}}get group(){return di(ui(this.options).current)}get js(){return this.driver?.js}get name(){return this.options.name}timing(){let{startTime:e,speed:t,totalDuration:n}=this,{delay:r=0,repeatType:i}=this.options;return this.holdTime===null?n===1/0?[e+r/t,this.resolvedDuration*(i===`loop`?1:2)/t||1]:[e+(r+n)/t,0]:[1/0,0]}isAccelerated(){let{group:e,state:t}=this;return e?.tracks.has(this)&&!e.isJS&&this.canAccelerate&&(t===`running`||t===`paused`)}liveValue(){return this.isAccelerated()?this.sampleAt(je.now()):void 0}tween(){let{keyframes:e,type:t,ease:n,times:r,repeat:i,delay:a=0}=this.options,o=Ee(n)?Ar(n):si(n)&&jr[n];if(o&&!i&&!r&&e.length===2&&t===yn&&this.holdTime===null){let e=this.startTime+a/this.speed;return[e,e+this.resolvedDuration/this.speed,o]}}boundaries(e,t){let{startTime:n,speed:r,resolvedDuration:i,options:a}=this,{delay:o=0,repeat:s=0,repeatDelay:c=0,repeatType:l,times:u,keyframes:d,type:f}=a,p=(f||yn)===yn?u||gn(d):[0,1],m=n+o/r,h=[];if(this.holdTime!==null||!(i>0))return h;for(let n=Math.max(0,Math.floor((e-m)*r/i));n<=s;n++){let a=m+n*i/r;if(a>t)break;for(let o of p){let s=a+(n%2&&l&&l!==`loop`?1-o:o)*(i-c)/r;s>e&&s<t&&h.push(s)}}return h}numberAt(e){return parseFloat(this.sampleAt(e,!0))}sync(){let e=je.now();this.options.motionValue.setWithVelocity(this.sampleAt(e-10,!0),this.sampleAt(e,!0),10)}play(){this.isStopped||((this.group||gi(ui(this.options))).tracks.add(this),super.play())}pause(){super.pause(),this.isAccelerated()&&(this.sync(),this.group.schedule(!1))}complete(){super.complete();let{group:e}=this;e&&!e.isJS&&this.canAccelerate&&this.tick(je.now())}get time(){return this.isAccelerated()?de(T(0,this.totalDuration,this.at(je.now())-(this.options.delay||0))):super.time}set time(e){super.time=e}attachTimeline(e){return this.canAccelerate=!1,this.group?.demote(!0),super.attachTimeline(e)}};function gi(e){let t=e.current,n=new Set,r=new Map,i={},a=[],o=new Map,s=[],c=!1,l=!1,u=!1,d=-1/0,f=e=>{for(let t of n)if(t.name===e)return!0},p=(t,n)=>{let o={};for(let s of t===void 0?or:a){let a=r.get(s),c=t===void 0?fi(e,s):a?a.sampleAt(n>t&&!a.timing()[1]?n:t):i[s];c!==void 0&&(o[s]=c)}return o},m=(e,t)=>{let n=``,r=p(e,t);for(let e in r)n+=(Qr[e]||e)+`(`+Zr(r[e],Hn[e])+`) `;return n||`none`},h=(e=p())=>{t.style.transform=ei(e,{})},g=(e=!0)=>{e&&h(),s.forEach(({animation:e})=>e.cancel()),s=[]},_=(e,t,n=1/0)=>{let r={animation:e,offset:t,end:n};e.startTime=je.now()+t,n<1/0&&(e.onfinish=()=>{r.isDone=!0,s.some(e=>e.end===1/0)&&(e.cancel(),s=s.filter(e=>e!==r)),w.schedule(!1)}),e.oncancel=()=>s.includes(r)&&w.demote(),s.push(r)},v=(e,t,n)=>{let r=(t,n)=>Math.abs(e(n)-e(t)),i=r(t,n);for(;n-t>.01;){let e=(t+n)/2;r(t,e)>r(e,n)?n=e:t=e}return r(t,n)>i/2?[t,n]:[]},y=(e,t,n,r)=>{let i=Math.min(ni,Math.max(2,Math.ceil((n-t)/10)));if(r.length*4>i)return;let a=li(t,n,i).concat(r).sort(ci),o=e=>ce(t,n,e),s,c;for(let t of e){let e=a.map(e=>t.numberAt(e)),[n]=e,r=e[e.length-1]-n,i=e.map(e=>r?(e-n)/r:e-n);if(!r){if(i.some(e=>!(Math.abs(e)<=ri)))return}else if(!s)s=i,c=e=>(t.numberAt(e)-n)/r;else if(i.some((e,t)=>!(Math.abs(e-s[t])<=ri)))return}if(!s||s.every((e,t)=>Math.abs(e-o(a[t]))<=ri))return`linear`;let l=[],u=(e,t=c(e))=>l.push(Pn(t)+` `+Pn(o(e)*100)+`%`);return s.forEach((e,t)=>{t&&Math.abs(e-s[t-1])>.2&&v(c,a[t-1],a[t]).forEach(e=>u(e)),u(a[t],e)}),`linear(`+l+`)`},b=(e,t,n,r)=>{let i=[t],a=(t,n)=>e.every(e=>!(Math.abs(e.numberAt((t+n)/2)-(e.numberAt(t)+e.numberAt(n))/2)>(e.name.startsWith(`scale`)?ai:ii))),o=(t,n,r)=>{if(n-t<1||a(t,n))i.push(n);else if(r<4)o(t,(t+n)/2,r+1),o((t+n)/2,n,r+1);else{for(let r of e)i.push(...v(e=>r.numberAt(e),t,n));i.push(n)}},s=li(t,n,Math.ceil((n-t)/100));for(let e of r)s.push(e,Math.min(e+.01,n));let c=t;for(let e of s.sort(ci))e>c&&o(c,e,0),c=e;return i.sort(ci)},x=e=>{let t;for(let n of e){let e=n.tween();if(!e||t?.some((t,n)=>n<2?Math.abs(e[n]-t)>1:e[n]!==t))return;t=e}return t},S=(e,n,r,i={fill:`both`},a,o)=>{let s=e.flatMap(e=>e.boundaries(n,r)),c=o||y(e,n,r,s),l=c?[n,r]:b(e,n,r,s),u=l.map(e=>m(e,a)),d={transform:u};return c||(d.offset=l.map(e=>ce(n,r,e))),u.every(e=>e===u[0])&&(h(p(n,a)),d=null),t.animate(d,{...i,duration:r-n,easing:c||`linear`})},ee=c=>{let l=c,u=0,d=0,f=[],p=[],m=new Set;r.clear(),o=new Map;for(let e of n){r.set(e.name,e);let[t,n]=e.timing(),i=t===1/0;if(o.set(e,[e.at(c),e.speed,i]),i)e.sync();else{if(e.speed<0)return;if(n){if(u){let e=(t-d)/n;if(Math.abs(n-u)>1||Math.abs(e-Math.round(e))*u>1)return}else u=n,d=t;p.push(e)}else m.add(t);f.push(e),l=Math.max(l,t)}}i={},a=or.filter(t=>{if(r.has(t))return!0;let n=i[t]=fi(e,t);return n!==void 0&&parseFloat(n)!==+!!t.startsWith(`scale`)}),g(!1);let h=!u&&x(f);try{if(h&&h[1]>c){let[e,t,n]=h;_(S(f,e,t,void 0,void 0,n),e-c,t-e)}else l>c&&(_(S(f,c,l),0,l-c),m.forEach(e=>e<l-1&&_(t.animate(null,{duration:e-c}),0,e-c)));if(u){let e=d+Math.floor((l-d)/u)*u;_(S(p,e,e+u,{iterations:1/0,iterationStart:(l-e)/u,fill:`forwards`},l),l-c)}}catch{return}return s.length||g(),!0},te=e=>{let t,r=0;for(let i of n){let n=o.get(i);if(!n)return!1;let[a,s,c]=n,l=i.at(e),u=i.timing()[0]===1/0;if(c){if(u&&l===a)continue;return!1}let d=(l-a)/s,f=u?0:i.speed/s;if(t===void 0)t=d,r=f;else if(Math.abs(d-t)>1||f!==r)return!1}if(t===void 0)return!0;if(!s.length)return!1;for(let{offset:e,end:n,isDone:r}of s){let i=t-e;if(n<1/0&&(r?i<n-1:i<0||i>=n))return!1}for(let{animation:n,offset:i,isDone:a}of s){if(a)continue;let o=t-i;r?(n.playbackRate=r,n.startTime=e-o/r):(n.pause(),n.currentTime=o)}return!0},C=()=>{let r=je.now();if(w.isJS||(w.isFinishing=!0,n.forEach(t=>{let[n,a]=t.timing();t.state===`running`&&t.speed>0&&!a&&n<=r+1&&(t.complete(),i[t.name]=fi(e,t.name),o.has(t)||(c=!0))}),w.isFinishing=!1),l=!1,n.forEach(({state:e},t)=>{(e===`idle`||e===`finished`)&&n.delete(t)}),!n.size){ti.delete(t),w.isJS||g();return}for(let e of n)if(!e.canAccelerate)return w.demote(!0);w.isJS&&(w.isJS=!1,c=!0,n.forEach(e=>e.js?.stop()));let a=c,s=u;if(c=u=!1,a||!te(r)){if(s){if(r-d<oi)return w.demote();d=r}if(!ee(r))return w.demote()}},w={tracks:n,isJS:!1,isFinishing:!1,schedule(e,t){c||=e,u||=!!t,l||(l=!0,A.isProcessing?P.render(C,!1,!0):queueMicrotask(C))},check(){if(!w.isJS){for(let t in i)if(fi(e,t)!==i[t]&&!f(t))return w.schedule(!0,!0)}},demote(e){w.isJS||(n.forEach(t=>{t.isAccelerated()&&t.sync(),e||(t.canAccelerate=!1)}),w.isJS=!0,o=new Map,g(),n.forEach(e=>e.state===`running`&&e.js?.start()))}};return ti.set(t,w),w}var _i=class extends Mn{constructor(e){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=je.now();let{keyframes:t,name:n,motionValue:r,element:i}=e,a=e;a.autoplay??=!0,a.delay??=0,a.type??=`keyframes`,a.repeat??=0,a.repeatDelay??=0,a.repeatType??=`loop`;let o=i?.KeyframeResolver||Cr;this.keyframeResolver=new o(t,(e,t,n)=>this.onKeyframesResolved(e,t,a,!n),n,r,i),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=je.now();let u=!0;Ur(e,i,a,o)||(u=!1,(E.instantAnimations||!s)&&l?.(wn(e,n,t)),e[0]=e[e.length-1],Wr(n),n.repeat=0);let{onComplete:d}=n;n.finalKeyframe=t,n.keyframes=e,n.onComplete=()=>{d?.(),this.notifyFinished()};let f=u&&!c&&Xr(n),p=!f&&pi(n);r&&(f||p||this.resolvedAt!==this.createdAt)&&(n.startTime??=On(this.createdAt,this.resolvedAt));let m;if(f){n.element=n.motionValue?.owner?.current;try{m=new Br(n)}catch{m=new Fn(n)}}else m=p?new hi(n):new Fn(n);this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this._animation.finished:super.finished}then(e,t){return this.finished.finally(e).then(()=>{})}liveValue(){return this._animation?.liveValue?.()}get animation(){return this._animation||(this.keyframeResolver?.resume(),xr()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function vi(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var yi=30,bi=e=>!isNaN(parseFloat(e)),xi={current:void 0},Si=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=je.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.notifyChange(),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=je.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=bi(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){var n;return e===`change`?this.onChangeSubscribe(t):((n=this.events)[e]||(n[e]=new le)).add(t)}onChangeSubscribe(e){let{events:t}=this;return!t.change&&!this.changeSubscriber?this.changeSubscriber=e:(t.change||(t.change=new le,t.change.add(this.changeSubscriber),this.changeSubscriber=void 0),t.change.add(e)),()=>{this.changeSubscriber===e?this.changeSubscriber=void 0:t.change?.remove(e),this.stopIfUnobserved()}}stopIfUnobserved(){P.read(()=>{!this.changeSubscriber&&!this.events.change?.getSize()&&this.stop()})}clearListeners(){this.changeSubscriber=void 0;for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.notifyChange()}notifyChange(){let{current:e,changeSubscriber:t}=this;t?t(e):this.events.change?.notify(e)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){xi.current&&xi.current.push(this);let e=this.animation?.liveValue?.();return e===void 0?this.current:e}getCurrent(){return this.current}getPrevious(){return this.prev}getVelocity(){let e=je.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>yi)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,yi);return fe(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0;let n=!1,r;r=e(()=>{n=!0,this.events.animationComplete?.notify(),this.animation===r&&this.clearAnimation(),t()}),n||(this.animation=r),this.events.animationStart?.notify()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){this.animation=void 0}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Ci(e,t){return new Si(e,t)}function wi(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function Ti(e,t){let n=e?.[t]??e?.default??e;return n===e?n:wi(n,e)}var Ei={type:`spring`,stiffness:500,damping:25,restSpeed:10},Di=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Oi={type:`keyframes`,duration:.8},ki={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Ai=(e,{keyframes:t})=>t.length>2?Oi:sr.has(e)?e.startsWith(`scale`)?Di(t[1]):Ei:ki,ji=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function Mi(e){for(let t in e)if(!ji.has(t))return!0;return!1}var Ni=(e,t,n,r={},i,a)=>o=>{let s=Ti(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=ue(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i,hasOnUpdate:!!s.onUpdate};Mi(s)||Object.assign(u,Ai(e,u)),u.duration&&=ue(u.duration),u.repeatDelay&&=ue(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Wr(u),u.delay===0&&(d=!0)),(E.instantAnimations||E.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,Wr(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=wn(u.keyframes,s);if(e!==void 0){P.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new Fn(u):new _i(u)},Pi=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Fi(e){let t=Pi.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function Ii(e,t,n=1){`${e}`;let[r,i]=Fi(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return ne(e)?parseFloat(e):e}return Ie(i)?Ii(i,t,n+1):i}function Li(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Ri(e,t,n,r){let i=t=>typeof t==`function`?t(n===void 0?e.custom:n,...Li(r)):t;return t=i(t),typeof t==`string`&&(t=e.variants&&e.variants[t]),i(t)}function zi(e,t,n){return Ri(e.getProps(),t,n,e)}var Bi=(e,t)=>t===`exit`?e.presenceContext?.custom:void 0,Vi=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...or]),Hi=e=>Array.isArray(e);function Ui(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ci(n))}function Wi(e){return Hi(e)?e[e.length-1]||0:e}function Gi(e,t){let{transitionEnd:n={},transition:r={},...i}=zi(e,t)||{};i={...i,...n};for(let t in i)Ui(e,t,Wi(i[t]))}var I=e=>!!(e&&e.getVelocity);function Ki(e){return!!(I(e)&&e.add)}function qi(e,t){let n=e.getValue(`willChange`);if(Ki(n))return n.add(t);if(!n&&E.WillChange){let n=new E.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function Ji(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Yi=`data-`+Ji(`framerAppearId`);function Xi(e){return e.props[Yi]}var Zi=typeof window<`u`;function Qi({protectedKeys:e,needsAnimating:t},n){let r=n in e&&!t[n];return t[n]=!1,r}function $i(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?wi(a,c):c;let l=a?.reduceMotion,u=a?.skipAnimations;r&&(a=r);let d=[],f=i&&e.animationState?.getState()[i],p=a?.path;p&&p.animateVisualElement(e,s,a,n,d);for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||f&&Qi(f,t))continue;let o={delay:n,...Ti(a||{},t)};u&&(o.skipAnimations=!0);let c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){P.update(()=>r.set(i));continue}let p=!1;if(Zi&&window.MotionHandoffAnimation){let n=Xi(e);if(n){let e=window.MotionHandoffAnimation(n,t,P);e!==null&&(o.startTime=e,p=!0)}}qi(e,t);let m=l??e.shouldReduceMotion;r.start(Ni(t,r,i,m&&Vi.has(t)?{type:!1}:o,e,p));let h=r.animation;h&&d.push(h)}if(o){let t=()=>P.update(()=>{o&&Gi(e,o)});d.length?Promise.all(d).then(t):t()}return d}function ea(e,t,n={}){let r=zi(e,t,Bi(e,n.type)),i=n.transitionOverride||(r?.transition??(e.getDefaultTransition()||{})),a=()=>Promise.all(r?$i(e,r,n):[]),o=(r=0)=>{let{variantChildren:a}=e,{delayChildren:o=0,staggerChildren:s,staggerDirection:c}=i,l=[];return a?.forEach(e=>{e.notify(`AnimationStart`,t),l.push(ea(e,t,{...n,delay:r+(typeof o==`function`?0:o)+vi(a,e,o,s,c)}).then(()=>e.notify(`AnimationComplete`,t)))}),Promise.all(l)},{when:s}=i;return s?s===`beforeChildren`?a().then(()=>o()):o().then(a):Promise.all([a(),o(n.delay)])}function ta(e,t,n={}){return e.notify(`AnimationStart`,t),(Array.isArray(t)?Promise.all(t.map(t=>ea(e,t,n))):typeof t==`string`?ea(e,t,n):Promise.all($i(e,zi(e,t,n.custom),n))).then(()=>{e.notify(`AnimationComplete`,t)})}var na={test:e=>e===`auto`,parse:e=>e},ra=e=>t=>t.test(e),ia=[ze,j,et,$e,nt,tt,na],aa=e=>ia.find(ra(e));function oa(e){return typeof e==`number`?e===0:e===null||e===`none`||e===`0`||ie(e)}var sa=new Set([`auto`,`none`,`0`]);function L(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!sa.has(t)&&ht(t)&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]!==i&&(e[r]=Kn(n,i))}var ca=class extends Cr{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}scheduleResolve(){if(this.canReadNow()&&(this.readKeyframes(),!this.needsMeasurement))return this.complete();super.scheduleResolve()}canReadNow(){let{unresolvedKeyframes:e,element:t,motionValue:n}=this,r=e[0]??n?.get();if(!t?.current||r===void 0)return!1;for(let t=0;t<e.length;t++)if(Re(t?e[t]:r))return!1;return!0}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Ie(r))){let i=Ii(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Vi.has(n)||e.length!==2)return;let[r,i]=e;if(typeof r==`number`&&typeof i==`number`)return;let a=aa(r),o=aa(i);if(Re(r)!==Re(i)&&mr[n])this.needsMeasurement=!0;else if(a!==o){if(cr(a)&&cr(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else mr[n]&&(this.needsMeasurement=!0)}}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||oa(e[t]))&&n.push(t);n.length&&L(e,n,t)}measure(){let{element:e,name:t}=this;return mr[t](window.getComputedStyle(e.current),()=>e.measureViewportBox())}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=this.measure(),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&this.motionValue?.jump(r,!1)}measureEndState(){let{element:e,unresolvedKeyframes:t}=this;if(!e||!e.current)return;this.motionValue?.jump(this.measuredOrigin,!1);let n=t.length-1,r=t[n];t[n]=this.measure(),r!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=r),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}},la=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomRightRadius`,`borderBottomLeftRadius`];function ua(e){return re(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}function da(e){return re(e)&&`ownerSVGElement`in e}function fa(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}function pa(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(sr.has(e))o=!0;else if(Pe(e))i[e]=n;else{let t=Zr(n,Hn[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=ei(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}var ma={offset:`stroke-dashoffset`,array:`stroke-dasharray`},ha={offset:`strokeDashoffset`,array:`strokeDasharray`};function ga(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?ma:ha;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var _a=[`transform`,`opacity`,`clipPath`,`filter`,`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function va(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(pa(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;for(let e of _a)d[e]!==void 0&&(f[e]=d[e],delete d[e]);(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&ga(d,i,a,o,!1)}function ya({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function ba({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function xa(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Sa(e){return e===void 0||e===1}function Ca({scale:e,scaleX:t,scaleY:n}){return!Sa(e)||!Sa(t)||!Sa(n)}function wa(e){return Ca(e)||Ta(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Ta(e){return Ea(e.x)||Ea(e.y)}function Ea(e){return e&&e!==`0%`}function Da(e,t,n){return n+t*(e-n)}function Oa(e,t,n,r,i){return i!==void 0&&(e=Da(e,i,r)),Da(e,n,r)+t}function ka(e,t=0,n=1,r,i){e.min=Oa(e.min,t,n,r,i),e.max=Oa(e.max,t,n,r,i)}function Aa(e,{x:t,y:n}){ka(e.x,t.translate,t.scale,t.originPoint),ka(e.y,n.translate,n.scale,n.originPoint)}var ja=.999999999999,Ma=1.0000000000001;function Na(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(R(e.x,-a.scroll.offset.x),R(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Aa(e,o)),r&&wa(a.latestValues)&&Ia(e,a.latestValues,a.layout?.layoutBox))}t.x<Ma&&t.x>ja&&(t.x=1),t.y<Ma&&t.y>ja&&(t.y=1)}function R(e,t){e.min+=t,e.max+=t}function Pa(e,t,n,r,i=.5){ka(e,t,n,N(e.min,e.max,i),r)}function Fa(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function Ia(e,t,n){let r=n??e;Pa(e.x,Fa(t.x,r.x),t.scaleX,t.scale,t.originX),Pa(e.y,Fa(t.y,r.y),t.scaleY,t.scale,t.originY)}function La(e,t){return ya(xa(e.getBoundingClientRect(),t))}function Ra(e,t,n){let r=La(e,n),{scroll:i}=t;return i&&(R(r.x,i.offset.x),R(r.y,i.offset.y)),r}var{schedule:za,cancel:Ba}=Kt(queueMicrotask,!1),Va={x:!1,y:!1};function Ha(){return Va.x||Va.y}function Ua(e){return e===`x`||e===`y`?Va[e]?null:(Va[e]=!0,()=>{Va[e]=!1}):Va.x||Va.y?null:(Va.x=Va.y=!0,()=>{Va.x=Va.y=!1})}function Wa(e,t){let n=fa(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function Ga(e){return!(e.pointerType===`touch`||Ha())}function Ka(e,t,n={}){let[r,i,a]=Wa(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{e.pointerType!==`touch`&&(n?r=!0:s(e))};e.addEventListener(`pointerenter`,n=>{if(!Ga(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var qa=(e,t)=>t?e===t||qa(e,t.parentElement):!1,Ja=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Ya=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Xa(e){return Ya.has(e.tagName)||e.isContentEditable===!0}var Za=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function Qa(e){return Za.has(e.tagName)||e.isContentEditable===!0}var $a=new WeakSet;function eo(e){return t=>{t.key===`Enter`&&e(t)}}function to(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var no=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=eo(()=>{if($a.has(n))return;to(n,`down`);let e=eo(()=>{to(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>to(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function ro(e){return Ja(e)&&!Ha()}var io=new WeakSet;function ao(e,t,n={}){let[r,i,a]=Wa(e,n),o=e=>{let r=e.currentTarget;if(!ro(e)||io.has(e))return;$a.add(r),n.stopPropagation&&io.add(e);let a=t(r,e),o={...i,capture:!0},s=(e,t)=>{window.removeEventListener(`pointerup`,c,o),window.removeEventListener(`pointercancel`,l,o),$a.has(r)&&$a.delete(r),ro(e)&&typeof a==`function`&&a(e,{success:t})},c=e=>{s(e,r===window||r===document||n.useGlobalTarget||qa(r,e.target))},l=e=>{s(e,!1)};window.addEventListener(`pointerup`,c,o),window.addEventListener(`pointercancel`,l,o)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),ua(e)&&(e.addEventListener(`focus`,e=>no(e,i)),!Xa(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}var oo=new WeakMap,so,co=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:da(r)&&`getBBox`in r?r.getBBox()[t]:r[n],lo=co(`inline`,`width`,`offsetWidth`),uo=co(`block`,`height`,`offsetHeight`);function fo({target:e,borderBoxSize:t}){oo.get(e)?.forEach(n=>{n(e,{get width(){return lo(e,t)},get height(){return uo(e,t)}})})}function po(e){e.forEach(fo)}function mo(){typeof ResizeObserver<`u`&&(so=new ResizeObserver(po))}function ho(e,t){so||mo();let n=fa(e);return n.forEach(e=>{let n=oo.get(e);n||(n=new Set,oo.set(e,n)),n.add(t),so?.observe(e)}),()=>{n.forEach(e=>{let n=oo.get(e);n?.delete(t),n?.size||so?.unobserve(e)})}}var go=new Set,_o;function vo(){_o=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};go.forEach(t=>t(e))},window.addEventListener(`resize`,_o)}function yo(e){return go.add(e),_o||vo(),()=>{go.delete(e),!go.size&&typeof _o==`function`&&(window.removeEventListener(`resize`,_o),_o=void 0)}}function bo(e,t){return typeof e==`function`?yo(e):ho(e,t)}var xo={value:null,addProjectionMetrics:null};function So(e){return da(e)&&e.tagName===`svg`}var Co=e=>typeof e==`number`?e:parseFloat(e),wo=()=>({translate:0,scale:1,origin:0,originPoint:0}),To=()=>({x:wo(),y:wo()}),Eo=()=>({min:0,max:0}),Do=()=>({x:Eo(),y:Eo()}),Oo=new WeakMap;function ko(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function Ao(e){return typeof e==`string`||Array.isArray(e)}var jo=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],Mo=[`initial`,...jo];function No(e){if(ko(e.animate))return!0;for(let t=0;t<Mo.length;t++)if(Ao(e[Mo[t]]))return!0;return!1}function Po(e){return!!(No(e)||e.variants)}function Fo(e,t,n){for(let r in t){let i=t[r],a=n[r];if(I(i))e.addValue(r,i);else if(I(a))e.addValue(r,Ci(i,{owner:e}));else if(a!==i){if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Ci(t===void 0?i:t,{owner:e}))}}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var Io={current:null},Lo={current:!1},Ro=typeof window<`u`;function zo(){if(Lo.current=!0,Ro){if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Io.current=e.matches;e.addEventListener(`change`,t),t()}else Io.current=!1}}var Bo=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],Vo={};function Ho(e){Vo=e}function Uo(){return Vo}var Wo=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Cr,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=je.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,P.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=No(t),this.isVariantNode=Po(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&I(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];if(this.current=e,Oo.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.isVariantNode&&!this.isControllingVariants){let e=this;do e=e.props.inherit!==!1&&e.parent;while(e&&!e.isVariantNode);if(e){let{variantChildren:t}=e;t.add(this),this.removeFromVariantTree=()=>t.delete(this)}}this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(Lo.current||zo(),this.shouldReduceMotion=Io.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),qt(this.notifyUpdate),qt(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Gr.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new Ir({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:ue(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=sr.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&P.preRender(this.notifyUpdate),n&&(this.projection&&(this.projection.isTransformDirty=!0),ti.get(this.current)?.check()),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i()})}sortNodePosition(e){return!this.current||!e.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in Vo){let t=Vo[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Do()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){let{transformTemplate:n,onUpdate:r}=this.props;(e.transformTemplate||n)&&this.scheduleRender(),(e.transformTemplate&&!n||e.onUpdate&&!r)&&ti.get(this.current)?.demote(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<Bo.length;t++){let n=Bo[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=Fo(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}addValue(e,t){let n=this.values.get(e);if(t!==n){n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t);let r=t.get();r!==void 0&&(this.latestValues[e]=r)}}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Ci(t??this.getDefaultValue?.(e),{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(ne(n)||ie(n))?n=parseFloat(n):typeof n!=`number`&&!Ct.test(n)&&Ct.test(t)&&(n=Kn(e,t)),this.setBaseTarget(e,I(n)?n.get():n)),I(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}on(e,t){return this.events[e]||(this.events[e]=new le),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){za.render(this.render)}},z=class extends Wo{constructor(){super(...arguments),this.KeyframeResolver=ca}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;I(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},B=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function Go(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}var Ko={};function qo(e,{layout:t,layoutId:n}){return sr.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!Ko[e]||e===`opacity`)}function Jo(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(I(r[t])||i&&I(i[t])||qo(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function Yo(e){return window.getComputedStyle(e)}var Xo=class extends z{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Go}mount(e){e.style,super.mount(e)}readValueFromInstance(e,t){if(sr.has(t))return this.projection?.isProjecting?nr(t):ir(e,t);{let n=Yo(e),r=(Pe(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return La(e,t)}build(e,t,n){pa(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Jo(e,t,n)}},Zo=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),Qo=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function $o(e,t,n,r){Go(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(Zo.has(n)?n:Ji(n),t.attrs[n])}function es(e,t,n){let r=Jo(e,t,n);for(let n in e)if(I(e[n])||I(t[n])){let t=or.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var ts=class extends z{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=Do}getBaseTargetFromProps(e,t){return sr.has(t)?super.getBaseTargetFromProps(e,t)??nr(t):e[t]}getDefaultValue(e){return sr.has(e)?this.latestValues[e]??nr(e):void 0}readValueFromInstance(e,t){if(sr.has(t)){let e=Wn(t);return e&&e.default||0}if(_a.includes(t)){let n=getComputedStyle(e)[t];if(typeof n==`string`&&n)return n.trim()}return t=Zo.has(t)?t:Ji(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return es(e,t,n)}build(e,t,n){va(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){$o(e,t,n,r)}mount(e){this.isSVGTag=Qo(e.tagName),super.mount(e)}};function ns(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var rs=[...jo].reverse();function is(e){let t=t=>Promise.all(t.map(({animation:t,options:n})=>ta(e,t,n))),n=os(),r=!0,i=!1;function a(a){let{props:o,parent:s,manuallyAnimateOnMount:c}=e,l=r||i,u=[],d=new Set,f={},p=1/0,m=e;do m=m.props.inherit!==!1&&m.parent;while(m&&!m.isControllingVariants);if(rs.forEach((t,r)=>{let i=n[t],h=o[t],g=m&&m.props[t],_=h===void 0?Ao(g)||g===!1?g:void 0:h,v=Ao(_),y=t===a?i.isActive:null;y===!1&&(p=r);let b=v&&h===void 0&&!(l&&c);if(i.protectedKeys={...f},!i.isActive&&y===null||!_&&!i.prevProp||ko(_)||typeof _==`boolean`)return;if(t===`exit`&&i.isActive&&y!==!0){f={...f,...i.prevResolvedValues};return}let x=as(i.prevProp,_),S=x||v&&(y&&!b||r>p),ee=!1,te=Array.isArray(_)?_:[_],C={};if(y!==!1)for(let n of te){let{transition:r,transitionEnd:i,...a}=zi(e,n,Bi(e,t))||{};C={...C,...a,...i}}let{prevResolvedValues:w}=i;for(let t in{...w,...C}){if(t in f)continue;let n=C[t],r=w[t],a=Array.isArray(n)&&Array.isArray(r)?!ns(n,r)||x:n!==r;if(a&&n==null)d.add(t);else if(a||n!==void 0&&d.has(t)){S=!0,d.delete(t)&&(ee=!0),i.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)}else i.protectedKeys[t]=!0}if(i.prevProp=_,i.prevResolvedValues=C,i.isActive&&(f={...f,...C}),S&&(!(b&&x)||ee))for(let n of te){let r={type:t};if(typeof n==`string`&&l&&c&&s?.enteringChildren){let t=zi(s,n)?.transition?.delayChildren;r.delay=vi(s.enteringChildren,e,t)}u.push({animation:n,options:r})}}),d.size){let{initial:t}=o,n={},r=typeof t!=`boolean`&&zi(e,Array.isArray(t)?t[0]:t,e.presenceContext?.custom);r&&r.transition&&(n.transition=r.transition),d.forEach(i=>{let a=e.getValue(i);a&&(a.liveStyle=!0);let s=r&&!Array.isArray(t)?r[i]:void 0,c=e.getBaseTargetFromProps(o,i);n[i]=(s===void 0?c!==void 0&&!I(c)?c:e.initialValues[i]===void 0?e.baseTarget[i]:void 0:s)??null}),u.push({animation:n})}let h=l&&e.blockInitialAnimation||r&&!c&&(o.initial===!1||o.initial===o.animate);return r=i=!1,!h&&u.length?t(u):Promise.resolve()}function o(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=a(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:a,setActive:o,setAnimateFunction:n=>{t=n(e)},getState:()=>n,reset:()=>{n=os(),i=!0}}}function as(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!ns(t,e):!1}function os(){let e={};for(let t of jo)e[t]={isActive:t===`animate`,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}};return e}function ss(e,t){e.min=t.min,e.max=t.max}function cs(e,t){ss(e.x,t.x),ss(e.y,t.y)}function ls(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var us=.9999,ds=1.0001,fs=-.01,ps=.01;function ms(e){return e.max-e.min}function hs(e,t,n){return Math.abs(e-t)<=n}function gs(e,t,n,r=.5){e.origin=r,e.originPoint=N(t.min,t.max,e.origin),e.scale=ms(n)/ms(t),e.translate=N(n.min,n.max,e.origin)-e.originPoint,(e.scale>=us&&e.scale<=ds||isNaN(e.scale))&&(e.scale=1),(e.translate>=fs&&e.translate<=ps||isNaN(e.translate))&&(e.translate=0)}function _s(e,t,n,r){gs(e.x,t.x,n.x,r?r.originX:void 0),gs(e.y,t.y,n.y,r?r.originY:void 0)}function vs(e,t,n,r=0){e.min=(r?N(n.min,n.max,r):n.min)+t.min,e.max=e.min+ms(t)}function ys(e,t,n,r){vs(e.x,t.x,n.x,r?.x),vs(e.y,t.y,n.y,r?.y)}function bs(e,t,n,r=0){let i=r?N(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+ms(t)}function xs(e,t,n,r){bs(e.x,t.x,n.x,r?.x),bs(e.y,t.y,n.y,r?.y)}function Ss(e,t,n,r,i){return e-=t,e=Da(e,1/n,r),i!==void 0&&(e=Da(e,1/i,r)),e}function Cs(e,t=0,n=1,r=.5,i,a=e,o=e){if(et.test(t)&&(t=parseFloat(t),t=N(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=N(a.min,a.max,r);e===a&&(s-=t),e.min=Ss(e.min,t,n,s,i),e.max=Ss(e.max,t,n,s,i)}function ws(e,t,[n,r,i],a,o){Cs(e,t[n],t[r],t[i],t.scale,a,o)}var Ts=[`x`,`scaleX`,`originX`],Es=[`y`,`scaleY`,`originY`];function Ds(e,t,n,r){ws(e.x,t,Ts,n?n.x:void 0,r?r.x:void 0),ws(e.y,t,Es,n?n.y:void 0,r?r.y:void 0)}function Os(e){return e.translate===0&&e.scale===1}function ks(e){return Os(e.x)&&Os(e.y)}function As(e,t){return e.min===t.min&&e.max===t.max}function js(e,t){return As(e.x,t.x)&&As(e.y,t.y)}function Ms(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Ns(e,t){return Ms(e.x,t.x)&&Ms(e.y,t.y)}function Ps(e){return ms(e.x)/ms(e.y)}function Fs(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Is(e){return[e(`x`),e(`y`)]}function Ls(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Rs={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`){if(j.test(e))e=parseFloat(e);else return e}return`${Ls(e,t.target.x)}% ${Ls(e,t.target.y)}%`}},zs={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=Ct.parse(e);if(i.length>5)return r;let a=Ct.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=N(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}};function Bs(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,pathRotation:i,rotateX:a,rotateY:o,skewX:s,skewY:c}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotate(${i}deg) `),a&&(r+=`rotateX(${a}deg) `),o&&(r+=`rotateY(${o}deg) `),s&&(r+=`skewX(${s}deg) `),c&&(r+=`skewY(${c}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Vs=la.length,Hs=e=>typeof e==`number`||j.test(e);function Us(e,t,n,r,i,a){i?(e.opacity=N(0,n.opacity??1,Gs(r)),e.opacityExit=N(t.opacity??1,0,Ks(r))):a&&(e.opacity=N(t.opacity??1,n.opacity??1,r));for(let i=0;i<Vs;i++){let a=la[i],o=Ws(t,a),s=Ws(n,a);(o!==void 0||s!==void 0)&&(o||=0,s||=0,o===0||s===0||Hs(o)===Hs(s)?(e[a]=Math.max(N(Co(o),Co(s),r),0),(et.test(s)||et.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=N(t.rotate||0,n.rotate||0,r))}function Ws(e,t){return e[t]===void 0?e.borderRadius:e[t]}var Gs=qs(0,.5,Se),Ks=qs(.5,.95,oe);function qs(e,t,n){return r=>r<e?0:r>t?1:n(ce(e,t,r))}function Js(e,t,n){let r=I(e)?e:Ci(e);return r.start(Ni(``,r,t,n)),r.animation}function Ys(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}var Xs=(e,t)=>e.depth-t.depth,Zs=class{constructor(){this.children=[],this.isDirty=!1}add(e){C(this.children,e),this.isDirty=!0}remove(e){w(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Xs),this.isDirty=!1,this.children.forEach(e)}};function Qs(e,t){let n=je.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(qt(r),e(a-t))};return P.setup(r,!0),()=>qt(r)}function $s(e){return I(e)?e.get():e}var ec=class{constructor(){this.members=[]}add(e){C(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(w(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(w(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},tc={borderRadius:{...Rs,applyTo:[...la]},borderTopLeftRadius:Rs,borderTopRightRadius:Rs,borderBottomLeftRadius:Rs,borderBottomRightRadius:Rs,boxShadow:zs},nc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};Object.assign(Ko,{...tc,...Ko});var rc={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},ic=[``,`X`,`Y`,`Z`],ac=1e3,oc=0;function sc(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}var cc=({instance:e})=>e&&ti.get(e)?.demote();function lc(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=Xi(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,P,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&lc(r)}function uc({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=oc++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,xo.value&&(rc.nodes=rc.calculatedTargetDeltas=rc.calculatedProjections=0),this.nodes.forEach(pc),this.nodes.forEach(wc),this.nodes.forEach(Tc),this.nodes.forEach(mc),xo.addProjectionMetrics&&xo.addProjectionMetrics(rc)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new Zs)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new le),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=da(t)&&!So(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;P.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=Qs(i,250),nc.hasAnimatedSinceResize&&(nc.hasAnimatedSinceResize=!1,this.nodes.forEach(Cc)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isAnimationBlocked){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||Mc,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Ns(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...Ti(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l,t.path)}else t||Cc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),qt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Ec),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&lc(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;cc(this),this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,cc(t),(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1),t.isAnimationBlocked&&(t.dragSnapshot||=t.measure(),this.dragAncestor=t)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(_c),this.nodes.forEach(gc);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(vc);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(bc),this.nodes.forEach(xc),this.nodes.forEach(Sc),this.nodes.forEach(dc),this.nodes.forEach(fc)):this.nodes.forEach(vc),this.clearAllSnapshots();let e=je.now();A.delta=T(0,1e3/60,e-A.timestamp),A.timestamp=e,A.isProcessing=!0,Jt.update.process(A),Jt.preRender.process(A),Jt.render.process(A),A.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,za.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(hc),this.sharedNodes.forEach(Dc)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,P.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){P.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),this.snapshot&&!ms(this.snapshot.measuredBox.x)&&!ms(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutCorrected||=Do(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout;e&&cc(this);let t=this.projectionDelta&&!ks(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||wa(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Ic(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return Do();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Rc))){let{scroll:e}=this.root;e&&(R(t.x,e.offset.x),R(t.y,e.offset.y))}return t}removeElementScroll(e){let t=Do();if(cs(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&cs(t,e),R(t.x,i.offset.x),R(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||Do();cs(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(R(r.x,-n.scroll.offset.x),R(r.y,-n.scroll.offset.y)),wa(n.latestValues)&&Ia(r,n.latestValues,n.layout?.layoutBox)}return wa(this.latestValues)&&Ia(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=Do();cs(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!wa(n.latestValues))continue;let r;n.instance&&(Ca(n.latestValues)&&n.updateSnapshot(),r=Do(),cs(r,n.measurePageBox())),Ds(t,n.latestValues,n.snapshot?.layoutBox,r)}return wa(this.latestValues)&&Ds(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==A.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=A.timestamp;let a=this.getClosestProjectingParent();!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),(this.relativeTarget||this.targetDelta)&&(this.target||(this.target=Do(),this.targetWithTransforms=Do()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ys(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):cs(this.target,this.layout.layoutBox),Aa(this.target,this.targetDelta)):cs(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),xo.value&&rc.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||Ca(this.parent.latestValues)||Ta(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Do(),this.relativeTargetOrigin=Do(),xs(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),cs(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===A.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;cs(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;Na(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=Do());let{target:s}=e;s?(!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ls(this.prevProjectionDelta.x,this.projectionDelta.x),ls(this.prevProjectionDelta.y,this.projectionDelta.y)),_s(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!Fs(this.projectionDelta.x,this.prevProjectionDelta.x)||!Fs(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),xo.value&&rc.calculatedProjections++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=To(),this.projectionDelta=To(),this.projectionDeltaWithTransform=To()}setAnimationOrigin(e,t=!1,n){let r=this.snapshot,i=r?r.latestValues:{},a={...this.latestValues},o=To();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=Do(),c=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,d=!(!c||u||this.options.crossfade!==!0||this.path.some(jc));this.animationProgress=0;let f,p=n?.interpolateProjection(e);this.mixTargetDelta=t=>{let n=t/1e3,r=p?.(n);r?(o.x.translate=r.x,o.x.scale=N(e.x.scale,1,n),o.x.origin=e.x.origin,o.x.originPoint=e.x.originPoint,o.y.translate=r.y,o.y.scale=N(e.y.scale,1,n),o.y.origin=e.y.origin,o.y.originPoint=e.y.originPoint):(Oc(o.x,e.x,n),Oc(o.y,e.y,n)),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(xs(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Ac(this.relativeTarget,this.relativeTargetOrigin,s,n),f&&js(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||=Do(),cs(f,this.relativeTarget)),c&&(this.animationValues=a,Us(a,i,this.latestValues,n,d,u)),r&&r.rotate!==void 0&&(this.animationValues||=a,this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(qt(this.pendingAnimation),void 0),this.pendingAnimation=P.update(()=>{nc.hasAnimatedSinceResize=!0,this.motionValue||=Ci(0),this.motionValue.jump(0,!1),this.currentAnimation=Js(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),jn(this.currentAnimation,this),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ac),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,layout:n,latestValues:r}=e,{target:i}=e;if(t&&i&&n){if(this!==e&&this.layout&&n&&Lc(this.options.animationType,this.layout.layoutBox,n.layoutBox)){i=this.target||Do();let t=ms(this.layout.layoutBox.x);i.x.min=e.target.x.min,i.x.max=i.x.min+t;let n=ms(this.layout.layoutBox.y);i.y.min=e.target.y.min,i.y.max=i.y.min+n}cs(t,i),Ia(t,r),_s(this.projectionDeltaWithTransform,this.layoutCorrected,t,r)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new ec),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&sc(`z`,e,r,this.animationValues);for(let t=0;t<ic.length;t++)sc(`rotate${ic[t]}`,e,r,this.animationValues),sc(`skew${ic[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=$s(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=$s(t?.pointerEvents)||``),this.hasProjected&&!wa(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Bs(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,e.opacity=r.animationValues?r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in Ko){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=Ko[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?$s(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=this.dragSnapshot=this.dragAncestor=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(gc),this.root.sharedNodes.clear()}}}function dc(e){e.updateLayout(),yc(e)}function fc(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)Is(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=ms(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;ss(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else Lc(i,t.layoutBox,n)&&Is(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=ms(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=To();_s(o,n,t.layoutBox);let s=To();a?_s(s,e.applyTransform(r,!0),t.measuredBox):_s(s,n,t.layoutBox);let c=!ks(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=Do();xs(s,t.layoutBox,i.layoutBox,o);let c=Do();xs(c,n,a.layoutBox,o),Ns(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function pc(e){xo.value&&rc.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function mc(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function hc(e){e.clearSnapshot()}function gc(e){e.clearMeasurements()}function _c(e){e.isLayoutDirty=!0,e.updateLayout()}function vc(e){e.isLayoutDirty=!1}function yc(e){let{snapshot:t,dragAncestor:n}=e,r=n?.layout;if(!t||!r||e.resumeFrom||e.isAnimationBlocked)return;let i=n.dragSnapshot;Is(e=>R(t.layoutBox[e],r.layoutBox[e].min-i.layoutBox[e].min))}function bc(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.dragSnapshot||e.layout,e.isLayoutDirty=!0)}function xc(e){e.relativeTarget&&e.relativeParent?.isLayoutDirty&&(e.currentAnimation?e.isLayoutDirty=!0:(e.targetDelta=void 0,e.removeRelativeTarget()))}function Sc(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function Cc(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function wc(e){e.resolveTargetDelta()}function Tc(e){e.calcProjection()}function Ec(e){e.resetSkewAndRotation()}function Dc(e){e.removeLeadSnapshot()}function Oc(e,t,n){e.translate=N(t.translate,0,n),e.scale=N(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function kc(e,t,n,r){e.min=N(t.min,n.min,r),e.max=N(t.max,n.max,r)}function Ac(e,t,n,r){kc(e.x,t.x,n.x,r),kc(e.y,t.y,n.y,r)}function jc(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var Mc={duration:.45,ease:[.4,0,.1,1]},Nc=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Pc=Nc(`applewebkit/`)&&!Nc(`chrome/`)?Math.round:oe;function Fc(e){e.min=Pc(e.min),e.max=Pc(e.max)}function Ic(e){Fc(e.x),Fc(e.y)}function Lc(e,t,n){return e===`position`||e===`preserve-aspect`&&!hs(Ps(t),Ps(n),.2)}function Rc(e){return e!==e.root&&e.scroll?.wasRoot}var zc=uc({attachResizeListener:(e,t)=>Ys(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Bc={current:void 0},Vc=uc({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Bc.current){let e=new zc({});e.mount(window),e.setOptions({layoutScroll:!0}),Bc.current=e}return Bc.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),Hc=(0,_.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function Uc(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Wc(...e){return t=>{let n=!1,r=e.map(e=>{let r=Uc(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Uc(e[t],null)}}}}function Gc(...e){return _.useCallback(Wc(...e),e)}var V=b(),Kc=class extends _.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(ua(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=ua(e)&&e.offsetWidth||0,r=ua(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top,a.direction=i.direction}return null}componentDidUpdate(){}render(){return this.props.children}};function qc({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,_.useId)(),s=(0,_.useRef)(null),c=(0,_.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:`ltr`}),{nonce:l}=(0,_.useContext)(Hc),u=Gc(s,a===!1?void 0:e.props?.ref??e?.ref);return(0,_.useInsertionEffect)(()=>{let{width:e,height:u,top:d,left:f,right:p,bottom:m,direction:h}=c.current;if(t||a===!1||!s.current||!e||!u)return;let g=h===`rtl`,_=n===`left`?g?`right: ${p}`:`left: ${f}`:g?`left: ${f}`:`right: ${p}`,v=r===`bottom`?`bottom: ${m}`:`top: ${d}`,y=s.current;y.dataset.motionPopId=o;let b=y.ownerDocument,x=b.createElement(`style`);l&&(x.nonce=l);let S=i??b.head;return S.appendChild(x),x.sheet&&x.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `),()=>{s.current?.removeAttribute(`data-motion-pop-id`),S.contains(x)&&S.removeChild(x)}},[t]),(0,V.jsx)(Kc,{isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:_.cloneElement(e,{ref:u})})}var Jc=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=S(Yc),d=(0,_.useId)(),f=(0,_.useRef)(n),p=(0,_.useRef)(r);ee(()=>{f.current=n,p.current=r});let m=!0,h=(0,_.useMemo)(()=>(m=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>{u.delete(e),!f.current&&!u.size&&p.current?.()})}),[n,u,r]);return a&&m&&(h={...h}),(0,_.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),_.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,V.jsx)(qc,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e}),(0,V.jsx)(te.Provider,{value:h,children:e})};function Yc(){return new Map}function Xc(e=!0){let t=(0,_.useContext)(te);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,_.useId)();(0,_.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,_.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var Zc=e=>e.key||``;function Qc(e){let t=[];return _.Children.forEach(e,e=>{(0,_.isValidElement)(e)&&t.push(e)}),t}var $c=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=Xc(o),f=(0,_.useMemo)(()=>Qc(e),[e]),p=o&&!u?[]:f.map(Zc),m=(0,_.useRef)(!0),h=S(()=>new Map),g=(0,_.useRef)(new Set),[v,y]=(0,_.useState)(f),[b,te]=(0,_.useState)(f);ee(()=>{o&&!u&&!b.length&&d?.()},[u,o,b.length,d]),ee(()=>{m.current=!1;for(let e=0;e<b.length;e++){let t=Zc(b[e]);p.includes(t)?(h.delete(t),g.current.delete(t)):h.get(t)!==!0&&h.set(t,!1)}},[b,p.length,p.join(`-`)]);let C=[];if(f!==v){let e=[...f],t=0;for(let n of b){let r=p.indexOf(Zc(n));r===-1?(e.splice(t++,0,n),C.push(n)):t=r+C.length+1}return C.every(e=>h.get(Zc(e)))?e=f:a===`wait`&&(e=C),te(Qc(e)),y(f),null}let{forceRender:w}=(0,_.useContext)(x);return(0,V.jsx)(V.Fragment,{children:b.map(e=>{let _=Zc(e),v=o&&!u?!1:f===b||p.includes(_);return(0,V.jsx)(Jc,{isPresent:v,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:v?void 0:()=>{if(g.current.has(_))return;if(h.has(_))g.current.add(_),h.set(_,!0);else return;let e=!0;h.forEach(t=>{t||(e=!1)}),e&&(w?.(),y([]),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},_)})})},el=(0,_.createContext)({strict:!1}),tl={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},nl=!1;function rl(){if(nl)return;let e={};for(let t in tl)e[t]={isEnabled:e=>tl[t].some(t=>!!e[t])};Ho(e),nl=!0}function il(){return rl(),Uo()}function al(e){let t=il();for(let n in e)t[n]={...t[n],...e[n]};Ho(t)}var ol=(0,_.createContext)({});function sl(e,t){if(No(e)){let{initial:t,animate:n}=e;return{initial:t===!1||Ao(t)?t:void 0,animate:Ao(n)?n:void 0}}return e.inherit===!1?{}:t}function cl(e){let{initial:t,animate:n}=sl(e,(0,_.useContext)(ol));return(0,_.useMemo)(()=>({initial:t,animate:n}),[ll(t),ll(n)])}function ll(e){return Array.isArray(e)?e.join(` `):e}var ul=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function dl(e,t,n){for(let r in t)!I(t[r])&&!qo(r,n)&&(e[r]=t[r])}function fl({transformTemplate:e},t){return(0,_.useMemo)(()=>{let n=ul();return pa(n,t,e),Object.assign({},n.vars,n.style)},[t])}function pl(e,t){let n=e.style||{},r={};return dl(r,n,e),Object.assign(r,fl(e,t)),r}function ml(e,t){let n={},r=pl(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var hl=()=>({...ul(),attrs:{}});function gl(e,t,n,r){let i=(0,_.useMemo)(()=>{let n=hl();return va(n,t,Qo(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};dl(t,e.style,e),i.style={...t,...i.style}}return i}var _l=new Set(`animate.exit.variants.initial.style.values.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function vl(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||_l.has(e)}function yl(e,t){return e.startsWith(`on`)?!vl(e):t?.(e)??!vl(e)}function bl(e,t,n,r){let i={};for(let a in e)(a!==`values`||typeof e.values!=`object`)&&(I(e[a])||(yl(a,r)||n===!0&&vl(a)||!t&&!vl(a)||e.draggable&&a.startsWith(`onDrag`))&&(i[a]=e[a]));return i}var xl=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Sl(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(xl.indexOf(e)>-1||/[A-Z]/u.test(e))}function Cl(e,t,n,{latestValues:r},i,a=!1,o,s){let c=(o??Sl(e)?gl:ml)(t,r,i,e),l=bl(t,typeof e==`string`,a,s),u=e===_.Fragment?{}:{...l,...c,ref:n},{children:d}=t,f=(0,_.useMemo)(()=>I(d)?d.get():d,[d]);return(0,_.createElement)(e,{...u,children:f})}function wl({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Tl(n,r,i,e),renderState:t()}}function Tl(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=$s(a[e]);let{initial:o,animate:s}=e,c=No(e),l=Po(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!ko(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Ri(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var El=e=>(t,n)=>{let r=(0,_.useContext)(ol),i=(0,_.useContext)(te),a=()=>wl(e,t,r,i);return n?a():S(a)},Dl=El({scrapeMotionValuesFromProps:Jo,createRenderState:ul}),Ol=El({scrapeMotionValuesFromProps:es,createRenderState:hl}),kl=Symbol.for(`motionComponentSymbol`);function Al(e,t,n){let r=(0,_.useRef)(n);(0,_.useInsertionEffect)(()=>{r.current=n});let i=(0,_.useRef)(null);return(0,_.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`){if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n)}else a&&(a.current=n)},[t])}var jl=(0,_.createContext)({});function Ml(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function Nl(e,t,n,r,i,a){let{visualElement:o}=(0,_.useContext)(ol),s=(0,_.useContext)(el),c=(0,_.useContext)(te),l=(0,_.useContext)(Hc),u=l.reducedMotion,d=l.skipAnimations,f=(0,_.useRef)(null),p=(0,_.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,_.useContext)(jl);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&Pl(f.current,n,i,h);let g=(0,_.useRef)(!1);(0,_.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let v=n[Yi],y=(0,_.useRef)(!!v&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(v)&&window.MotionHasOptimisedAnimation?.(v));return ee(()=>{p.current&&m&&(m.animationState?.animateChanges(),m.enteringChildren=void 0)},[]),ee(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),y.current&&m.animationState&&m.animationState.animateChanges())}),(0,_.useEffect)(()=>{m&&(!y.current&&m.animationState&&m.animationState.animateChanges(),y.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(v)}),!1),m.enteringChildren=void 0)}),m}function Pl(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Fl(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Ml(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function Fl(e){if(e)return e.options.allowProjection===!1?Fl(e.parent):e.projection}function Il(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&al(r);let a=n?n===`svg`:Sl(e),o=a?Ol:Dl;function s(n,s){let c,l={...(0,_.useContext)(Hc),...n,layoutId:Ll(n)},{isStatic:u,isValidProp:d}=l,f=cl(n),p=o(n,u);if(!u&&typeof window<`u`){Rl(l,r);let t=zl(l);c=t.MeasureLayout,f.visualElement=Nl(e,p,l,i,t.ProjectionNode,a)}return(0,V.jsxs)(ol.Provider,{value:f,children:[c&&f.visualElement?(0,V.jsx)(c,{visualElement:f.visualElement,...l}):null,Cl(e,n,Al(p,f.visualElement,s),p,u,t,a,d)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,_.forwardRef)(s);return c[kl]=e,c}function Ll({layoutId:e}){let t=(0,_.useContext)(x).id;return t&&e!==void 0?t+`-`+e:e}function Rl(e,t){(0,_.useContext)(el).strict}function zl(e){let{drag:t,layout:n}=il();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Bl(e,t){if(typeof Proxy>`u`)return Il;let n=new Map,r=(n,r)=>Il(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Il(a,void 0,e,t)),n.get(a))})}var Vl=(e,t)=>t.isSVG??Sl(e)?new ts(t):new Xo(t,{allowProjection:e!==_.Fragment}),Hl=class extends B{constructor(e){super(e),e.animationState||=is(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();ko(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},Ul=0,Wl={animation:{Feature:Hl},exit:{Feature:class extends B{constructor(){super(...arguments),this.id=Ul++}update(){let{presenceContext:e,prevPresenceContext:t,animationState:n}=this.node;if(!e||!n)return;let{isPresent:r,onExitComplete:i}=e,a=t?.isPresent;if(r===a)return;if(r&&a===!1){if(this.exit===!0){let{initial:e}=this.node.getProps();if(e&&!Array.isArray(e)){let{transition:t,transitionEnd:n,...r}=zi(this.node,e)||{};for(let e in r)this.node.getValue(e)?.jump(r[e])}this.node.blockInitialAnimation=!1,n.reset(),n.animateChanges()}else n.setActive(`exit`,!1);this.exit=void 0;return}let o=this.exit=n.setActive(`exit`,!r);i&&!r&&o.then(()=>{this.exit===o&&(this.exit=!0,i(this.id))})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Gl(e){return{point:{x:e.pageX,y:e.pageY}}}var Kl=e=>t=>Ja(t)&&e(t,Gl(t));function ql(e,t,n,r){return Ys(e,t,Kl(n),r)}var Jl=({current:e})=>e?e.ownerDocument.defaultView:null,Yl=(e,t)=>Math.abs(e-t);function Xl(e,t){let n=Yl(e.x,t.x),r=Yl(e.y,t.y);return Math.sqrt(n**2+r**2)}var Zl=new Set([`auto`,`scroll`]),Ql=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.hasPendingMove=!1,this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=$l(this.lastRawMoveEventInfo,this.transformPagePoint));let e=tu(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=Xl(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e;this.history.push({...r,timestamp:je.now()});let{onStart:i,onMove:a}=this.handlers;t||(i&&i(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=$l(t,this.transformPagePoint),this.hasPendingMove=!0,P.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.hasPendingMove&&this.updatePoint(),this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=tu(e.type===`pointercancel`?this.lastMoveEventInfo:$l(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Ja(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=$l(Gl(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=A;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,tu(s,this.history));let d={passive:!0,capture:!0};this.removeListeners=se(ql(this.contextWindow,`pointermove`,this.handlePointerMove,d),ql(this.contextWindow,`pointerup`,this.handlePointerUp,d),ql(this.contextWindow,`pointercancel`,this.handlePointerUp,d)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(Zl.has(e.overflowX)||Zl.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};(i.x!==0||i.y!==0)&&(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),P.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),qt(this.updatePoint)}};function $l(e,t){return t?{point:t(e.point)}:e}function eu(e,t){return{x:e.x-t.x,y:e.y-t.y}}function tu({point:e},t){return{point:e,delta:eu(e,ru(t)),offset:eu(e,nu(t)),velocity:iu(t,.1)}}function nu(e){return e[0]}function ru(e){return e[e.length-1]}function iu(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=ru(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>ue(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>ue(t)*2&&(r=e[1]);let a=de(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function au(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?N(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?N(n,e,r.max):Math.min(e,n)),e}function ou(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function su(e,{top:t,left:n,bottom:r,right:i}){return{x:ou(e.x,n,i),y:ou(e.y,t,r)}}function H(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function cu(e,t){return{x:H(e.x,t.x),y:H(e.y,t.y)}}function lu(e,t){let n=.5,r=ms(e),i=ms(t);return i>r?n=ce(t.min,t.max-r,e.min):r>i&&(n=ce(e.min,e.max-i,t.min)),T(0,1,n)}function uu(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var du=.35;function fu(e=du){return e===!1?e=0:e===!0&&(e=du),{x:pu(e,`left`,`right`),y:pu(e,`top`,`bottom`)}}function pu(e,t,n){return{min:mu(e,t),max:mu(e,n)}}function mu(e,t){return typeof e==`number`?e:e[t]||0}var hu=new WeakMap,gu=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Do(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(e),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Ua(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Is(e=>{let t=this.getAxisMotionValue(e).get()||0;if(et.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=ms(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&P.update(()=>i(e,t),!1,!0),qi(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;r&&this.currentDirection===null?(this.currentDirection=bu(o),this.currentDirection!==null&&i&&i(this.currentDirection)):(this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&P.update(()=>a(e,t),!1,!0))},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new Ql(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:Jl(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&P.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!yu(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=au(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Ml(e)?this.constraints||=this.resolveRefConstraints():this.constraints=e&&n?su(n.layoutBox,e):!1,this.elastic=fu(t),r!==this.constraints&&!Ml(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&Is(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=uu(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Ml(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());let i=Ra(n,r.root,this.visualElement.getTransformPagePoint()),a=cu(r.layout.layoutBox,i);if(t){let e=t(ba(a));this.hasMutatedConstraints=!!e,e&&(a=ya(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=Is(o=>{if(!yu(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return qi(this.visualElement,e),n.start(Ni(e,n,0,t,this.visualElement,!1))}stopAnimation(){Is(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`;return this.visualElement.getProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor({clientX:e,clientY:t}){let{drag:n}=this.getProps(),r={x:e,y:t},i=this.visualElement.getTransformPagePoint()?.(r)||r,a=this.visualElement.measureViewportBox();Is(e=>{if(!yu(e,n,this.currentDirection))return;let t=this.getAxisMotionValue(e),{min:r,max:o}=a[e];t.set((t.get()||0)+i[e]-N(r,o,.5))})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Ml(t)||!n||!this.constraints)return;this.stopAnimation();let r=this.constraints,i={x:0,y:0};Is(e=>{let t=this.getAxisMotionValue(e).get();i[e]=lu({min:t,max:t},r[e])});let{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),Is(t=>{let n=this.getAxisMotionValue(t);if(!yu(t,e,null)||!n.get())return;let{min:r,max:a}=this.constraints[t];n.set(N(r,a,i[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;hu.set(this.visualElement,this);let e=this.visualElement.current,t=ql(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&Qa(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();Ml(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=vu(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),P.read(r);let o=Ys(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(Is(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=du,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function _u(e){let t=!0;return()=>{t?t=!1:e()}}function vu(e,t,n){let r=bo(e,_u(n)),i=bo(t,_u(n));return()=>{r(),i()}}function yu(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function bu(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var xu=class extends B{constructor(e){super(e),this.removeGroupControls=oe,this.removeListeners=oe,this.controls=new gu(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||oe}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},Su=e=>(t,n)=>{e&&P.update(()=>e(t,n),!1,!0)},Cu=class extends B{constructor(){super(...arguments),this.removePointerDownListener=oe}onPointerDown(e){this.session=new Ql(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Jl(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Su(e),onStart:Su(t),onMove:Su(n),onEnd:(e,t)=>{delete this.session,r&&P.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=ql(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},wu=!1,Tu=class extends _.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),wu&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),nc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a&&(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),wu=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||P.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),za.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;wu=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Eu(e){let[t,n]=Xc(),r=(0,_.useContext)(x);return(0,V.jsx)(Tu,{...e,layoutGroup:r,switchLayoutGroup:(0,_.useContext)(jl),isPresent:t,safeToRemove:n})}var Du={pan:{Feature:Cu},drag:{Feature:xu,ProjectionNode:Vc,MeasureLayout:Eu}};function Ou(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&P.postRender(()=>i(t,Gl(t)))}var ku=class extends B{mount(){let{current:e}=this.node;e&&(this.unmount=Ka(e,(e,t)=>(Ou(this.node,t,`Start`),e=>Ou(this.node,e,`End`))))}unmount(){}},Au=class extends B{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}e&&this.node.animationState&&(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=se(Ys(this.node.current,`focus`,()=>this.onFocus()),Ys(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function ju(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&P.postRender(()=>i(t,Gl(t)))}var Mu=class extends B{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=ao(e,(e,t)=>(ju(this.node,t,`Start`),(e,{success:t})=>ju(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},Nu=new WeakMap,Pu=new WeakMap,Fu=e=>{let t=Nu.get(e.target);t&&t(e)},Iu=e=>{e.forEach(Fu)};function Lu({root:e,...t}){let n=e||document;Pu.has(n)||Pu.set(n,{});let r=Pu.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Iu,{root:e,...t})),r[i]}function Ru(e,t,n){let r=Lu(t);return Nu.set(e,n),r.observe(e),()=>{Nu.delete(e),r.unobserve(e)}}var zu={some:0,all:1},Bu=class extends B{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:zu[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=Ru(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Vu(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function Vu({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var Hu={inView:{Feature:Bu},tap:{Feature:Mu},focus:{Feature:Au},hover:{Feature:ku}},Uu={layout:{ProjectionNode:Vc,MeasureLayout:Eu}},U=Bl({...Wl,...Hu,...Du,...Uu},Vl),Wu=e=>e?.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase();function Gu(e,t,n=[]){if(t==null)throw Error(`[lucide]: iconNode is required when icon name is used`);return{name:Wu(e),size:24,node:t,...n.length>0?{aliases:n}:{}}}var Ku=e=>{let t=``,n=!1;for(let r of e)r===`-`||r===`_`||r<=` `?n=t.length>0:(t.length===0?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1);return t},qu=e=>{let t=Ku(e);return t.charAt(0).toUpperCase()+t.slice(1)},Ju=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),Yu={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`};function Xu(e){return e!=null}function Zu(e,t={}){let n=t.attributeNames??{},r=e=>n[e]??e,i=e.size??e.width??Yu.width,a=e.size??e.height??Yu.height,o=e.aliases?.filter(e=>typeof e==`string`&&e.trim()!==``).map(e=>`lucide-${e}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...o],c=t.className?.split(` `).filter(Boolean)??[],l=t.includeDefaultClasses===!1?Ju(...c):Ju(`lucide`,...s,...c),u=t.absoluteStrokeWidth?Number(t.strokeWidth??Yu[`stroke-width`])*Number(e.size??e.width??Yu.width)/Number(t.size??t.width??Yu.width):t.strokeWidth??Yu[`stroke-width`];return[`svg`,{...Object.entries(Yu).reduce((e,[t,n])=>(e[r(t)]=n,e),{}),...`color`in t&&t.color&&{[r(`stroke`)]:t.color},...`size`in t&&Xu(t.size)&&{[r(`width`)]:t.size,[r(`height`)]:t.size},...`width`in t&&Xu(t.width)&&{[r(`width`)]:t.width},...`height`in t&&Xu(t.height)&&{[r(`height`)]:t.height},[r(`stroke-width`)]:u,...l&&{[r(`class`)]:l},[r(`viewBox`)]:`0 0 ${i} ${a}`,...t.hasA11yProp===!1?{[r(`aria-hidden`)]:`true`}:{},...`attributes`in t&&t.attributes},e.node.map(e=>{let[n,i,a]=e,o=t.nonScalingStroke?{[r(`vector-effect`)]:`non-scaling-stroke`,...i}:i;return a?[n,o,a]:[n,o]})]}function Qu(e,t={}){return Zu(e,{...t,attributeNames:{...t.attributeNames,class:`className`,"stroke-width":`strokeWidth`,"stroke-linecap":`strokeLinecap`,"stroke-linejoin":`strokeLinejoin`,"vector-effect":`vectorEffect`}})}var $u=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},ed=(0,_.createContext)({}),td=()=>(0,_.useContext)(ed),W=(0,_.forwardRef)(({color:e,size:t,width:n,height:r,strokeWidth:i,absoluteStrokeWidth:a,nonScalingStroke:o,className:s=``,children:c,iconNode:l=[],icon:u={node:l,aliases:[],size:24},...d},f)=>{let{size:p=24,strokeWidth:m=2,absoluteStrokeWidth:h=!1,nonScalingStroke:g=!1,color:v=`currentColor`,className:y=``}=td()??{},b=!!c||$u(d),[x,S,ee=[]]=Qu(u,{color:e??v,width:n??t??p,height:r??t??p,strokeWidth:i??m,absoluteStrokeWidth:a??h,nonScalingStroke:o??g,className:Ju(y,s),hasA11yProp:b,attributes:d});return(0,_.createElement)(x,{ref:f,...S},[...ee.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(c)?c:[c]])});function G(e,t=[],n=[]){let r=typeof e==`string`?Gu(e,t,n):e,i=(0,_.forwardRef)(({className:e,...t},n)=>(0,_.createElement)(W,{ref:n,icon:r,className:e,...t}));return r.name&&(i.displayName=qu(r.name)),i}var K={name:`arrow-down`,size:24,node:[[`path`,{d:`M12 5v14`,key:`s699le`}],[`path`,{d:`m19 12-7 7-7-7`,key:`1idqje`}]]};K.node;var q=G(K),J={name:`arrow-left`,size:24,node:[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]};J.node;var nd=G(J),rd={name:`arrow-right`,size:24,node:[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]};rd.node;var id=G(rd),ad={name:`arrow-up-right`,size:24,node:[[`path`,{d:`M7 7h10v10`,key:`1tivn9`}],[`path`,{d:`M7 17 17 7`,key:`1vkiza`}]]};ad.node;var od=G(ad),sd={name:`arrow-up`,size:24,node:[[`path`,{d:`m5 12 7-7 7 7`,key:`hav0vg`}],[`path`,{d:`M12 19V5`,key:`x0mq9r`}]]};sd.node;var cd=G(sd),ld={name:`award`,size:24,node:[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]};ld.node;var ud=G(ld),dd={name:`book-open`,size:24,node:[[`path`,{d:`M12 5v16`,key:`1f6ucr`}],[`path`,{d:`M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,key:`1fyvmf`}]]};dd.node;var fd=G(dd),pd={name:`building-complex`,size:24,node:[[`path`,{d:`M10 12h4`,key:`a56b0p`}],[`path`,{d:`M10 8h4`,key:`1sr2af`}],[`path`,{d:`M14 21v-3a2 2 0 0 0-4 0v3`,key:`1rgiei`}],[`path`,{d:`M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2`,key:`secmi2`}],[`path`,{d:`M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16`,key:`16ra0t`}]],aliases:[`building-2`]};pd.node;var md=G(pd),hd={name:`check`,size:24,node:[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]};hd.node;var gd=G(hd),_d={name:`chevron-down`,size:24,node:[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]};_d.node;var vd=G(_d),yd={name:`chevron-left`,size:24,node:[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]};yd.node;var bd=G(yd),xd={name:`chevron-right`,size:24,node:[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]};xd.node;var Sd=G(xd),Cd={name:`chevron-up`,size:24,node:[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]};Cd.node;var wd=G(Cd),Td={name:`circle-check`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m16 9-5.5 5.5L8 12`,key:`xofnsj`}]],aliases:[`check-circle-2`]};Td.node;var Ed=G(Td),Dd={name:`clapperboard`,size:24,node:[[`path`,{d:`m12.296 3.464 3.02 3.956`,key:`qash78`}],[`path`,{d:`M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z`,key:`1h7j8b`}],[`path`,{d:`M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,key:`4lm6w1`}],[`path`,{d:`m6.18 5.276 3.1 3.899`,key:`zjj9t3`}]]};Dd.node;var Od=G(Dd),kd={name:`code-xml`,size:24,node:[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]],aliases:[`code-2`]};kd.node;var Ad=G(kd),jd={name:`compass`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z`,key:`9ktpf1`}]]};jd.node;var Md=G(jd),Nd={name:`copy`,size:24,node:[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]};Nd.node;var Pd=G(Nd),Fd={name:`cpu`,size:24,node:[[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M17 20v2`,key:`1rnc9c`}],[`path`,{d:`M17 2v2`,key:`11trls`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M2 17h2`,key:`7oei6x`}],[`path`,{d:`M2 7h2`,key:`asdhe0`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`M20 17h2`,key:`1fpfkl`}],[`path`,{d:`M20 7h2`,key:`1o8tra`}],[`path`,{d:`M7 20v2`,key:`4gnj0m`}],[`path`,{d:`M7 2v2`,key:`1i4yhu`}],[`rect`,{x:`4`,y:`4`,width:`16`,height:`16`,rx:`2`,key:`1vbyd7`}],[`rect`,{x:`8`,y:`8`,width:`8`,height:`8`,rx:`1`,key:`z9xiuo`}]]};Fd.node;var Id=G(Fd),Ld={name:`external-link`,size:24,node:[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]};Ld.node;var Rd=G(Ld),zd={name:`file-code`,size:24,node:[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 12.5 8 15l2 2.5`,key:`1tg20x`}],[`path`,{d:`m14 12.5 2 2.5-2 2.5`,key:`yinavb`}]]};zd.node;var Bd=G(zd),Vd={name:`file-text`,size:24,node:[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]};Vd.node;var Hd=G(Vd),Ud={name:`folder`,size:24,node:[[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,key:`1kt360`}]]};Ud.node;var Wd=G(Ud),Gd={name:`gamepad-2`,size:24,node:[[`line`,{x1:`6`,x2:`10`,y1:`11`,y2:`11`,key:`1gktln`}],[`line`,{x1:`8`,x2:`8`,y1:`9`,y2:`13`,key:`qnk9ow`}],[`line`,{x1:`15`,x2:`15.01`,y1:`12`,y2:`12`,key:`krot7o`}],[`line`,{x1:`18`,x2:`18.01`,y1:`10`,y2:`10`,key:`1lcuu1`}],[`path`,{d:`M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z`,key:`mfqc10`}]]};Gd.node;var Kd=G(Gd),qd={name:`glasses`,size:24,node:[[`circle`,{cx:`6`,cy:`15`,r:`4`,key:`vux9w4`}],[`circle`,{cx:`18`,cy:`15`,r:`4`,key:`18o8ve`}],[`path`,{d:`M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2`,key:`1ag4bs`}],[`path`,{d:`M2.5 13 5 7c.7-1.3 1.4-2 3-2`,key:`1hm1gs`}],[`path`,{d:`M21.5 13 19 7c-.7-1.3-1.5-2-3-2`,key:`1r31ai`}]]};qd.node;var Jd=G(qd),Yd={name:`globe`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]};Yd.node;var Xd=G(Yd),Zd={name:`graduation-cap`,size:24,node:[[`path`,{d:`M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`,key:`j76jl0`}],[`path`,{d:`M22 10v6`,key:`1lu8f3`}],[`path`,{d:`M6 12.5V16a6 3 0 0 0 12 0v-3.5`,key:`1r8lef`}]]};Zd.node;var Qd=G(Zd),$d={name:`layers`,size:24,node:[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]],aliases:[`layers-3`]};$d.node;var ef=G($d),tf={name:`library`,size:24,node:[[`path`,{d:`m16 6 4 14`,key:`ji33uf`}],[`path`,{d:`M12 6v14`,key:`1n7gus`}],[`path`,{d:`M8 8v12`,key:`1gg7y9`}],[`path`,{d:`M4 4v16`,key:`6qkkli`}]]};tf.node;var nf=G(tf),rf={name:`lock`,size:24,node:[[`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`,key:`1w4ew1`}],[`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`,key:`fwvmzm`}]]};rf.node;var af=G(rf),of={name:`mail`,size:24,node:[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]};of.node;var sf=G(of),cf={name:`map-pin`,size:24,node:[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,key:`1r0f0z`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}]]};cf.node;var lf=G(cf),uf={name:`maximize-2`,size:24,node:[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`m21 3-7 7`,key:`1l2asr`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M9 21H3v-6`,key:`wtvkvv`}]]};uf.node;var df=G(uf),ff={name:`menu`,size:24,node:[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]};ff.node;var pf=G(ff),mf={name:`minus`,size:24,node:[[`path`,{d:`M5 12h14`,key:`1ays0h`}]]};mf.node;var hf=G(mf),Y={name:`monitor`,size:24,node:[[`rect`,{width:`20`,height:`14`,x:`2`,y:`3`,rx:`2`,key:`48i651`}],[`line`,{x1:`8`,x2:`16`,y1:`21`,y2:`21`,key:`1svkeh`}],[`line`,{x1:`12`,x2:`12`,y1:`17`,y2:`21`,key:`vw1qmm`}]]};Y.node;var gf=G(Y),_f={name:`play`,size:24,node:[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]};_f.node;var vf=G(_f),yf={name:`plus`,size:24,node:[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]};yf.node;var bf=G(yf),xf={name:`presentation`,size:24,node:[[`path`,{d:`M2 3h20`,key:`91anmk`}],[`path`,{d:`M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3`,key:`2k9sn8`}],[`path`,{d:`m7 21 5-5 5 5`,key:`bip4we`}]]};xf.node;var Sf=G(xf),Cf={name:`radio`,size:24,node:[[`path`,{d:`M16.247 7.761a6 6 0 0 1 0 8.478`,key:`1fwjs5`}],[`path`,{d:`M19.075 4.933a10 10 0 0 1 0 14.134`,key:`ehdyv1`}],[`path`,{d:`M4.925 19.067a10 10 0 0 1 0-14.134`,key:`1q22gi`}],[`path`,{d:`M7.753 16.239a6 6 0 0 1 0-8.478`,key:`r2q7qm`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]};Cf.node;var wf=G(Cf),Tf={name:`rotate-ccw-clock`,size:24,node:[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}],[`path`,{d:`M12 7v5l4 2`,key:`1fdv2h`}]],aliases:[`history`]};Tf.node;var Ef=G(Tf),Df={name:`rotate-cw`,size:24,node:[[`path`,{d:`M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8`,key:`1p45f6`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}]]};Df.node;var Of=G(Df),kf={name:`search`,size:24,node:[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]};kf.node;var Af=G(kf),jf={name:`send`,size:24,node:[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]};jf.node;var Mf=G(jf),Nf={name:`shield-check`,size:24,node:[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]};Nf.node;var Pf=G(Nf),Ff={name:`sparkles`,size:24,node:[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]],aliases:[`stars`]};Ff.node;var If=G(Ff),Lf={name:`square`,size:24,node:[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}]]};Lf.node;var Rf=G(Lf),zf={name:`terminal`,size:24,node:[[`path`,{d:`M12 19h8`,key:`baeox8`}],[`path`,{d:`m4 17 6-6-6-6`,key:`1yngyt`}]]};zf.node;var Bf=G(zf),Vf={name:`trash`,size:24,node:[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]],aliases:[`trash-2`]};Vf.node;var Hf=G(Vf),Uf={name:`user-check`,size:24,node:[[`path`,{d:`m16 11 2 2 4-4`,key:`9rsbq5`}],[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]};Uf.node;var X=G(Uf),Wf={name:`volume-2`,size:24,node:[[`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,key:`uqj9uw`}],[`path`,{d:`M16 9a5 5 0 0 1 0 6`,key:`1q6k2b`}],[`path`,{d:`M19.364 18.364a9 9 0 0 0 0-12.728`,key:`ijwkga`}]]};Wf.node;var Gf=G(Wf),Kf={name:`wifi`,size:24,node:[[`path`,{d:`M12 20h.01`,key:`zekei9`}],[`path`,{d:`M2 8.82a15 15 0 0 1 20 0`,key:`dnpr2z`}],[`path`,{d:`M5 12.859a10 10 0 0 1 14 0`,key:`1x1e6c`}],[`path`,{d:`M8.5 16.429a5 5 0 0 1 7 0`,key:`1bycff`}]]};Kf.node;var qf=G(Kf),Jf={name:`wrench`,size:24,node:[[`path`,{d:`M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z`,key:`1ngwbx`}]]};Jf.node;var Yf=G(Jf),Xf={name:`x`,size:24,node:[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]};Xf.node;var Zf=G(Xf),Qf={name:`zoom-in`,size:24,node:[[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}],[`line`,{x1:`21`,x2:`16.65`,y1:`21`,y2:`16.65`,key:`13gj7c`}],[`line`,{x1:`11`,x2:`11`,y1:`8`,y2:`14`,key:`1vmskp`}],[`line`,{x1:`8`,x2:`14`,y1:`11`,y2:`11`,key:`durymu`}]]};Qf.node;var $f=G(Qf);function ep({className:e=`w-4 h-4`}){return(0,V.jsxs)(`svg`,{className:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,V.jsx)(`path`,{d:`M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4`}),(0,V.jsx)(`path`,{d:`M9 18c-4.51 2-5-2-7-2`})]})}function tp({className:e=`w-4 h-4`}){return(0,V.jsxs)(`svg`,{className:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,V.jsx)(`path`,{d:`M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z`}),(0,V.jsx)(`rect`,{width:`4`,height:`12`,x:`2`,y:`9`}),(0,V.jsx)(`circle`,{cx:`4`,cy:`4`,r:`2`})]})}var np={name:`Joshua Johnson`,title:`Technical Game Designer & Unreal Engine Systems Builder`,headline:`I build high-velocity gameplay physics, custom post-processing shaders, and interactive narrative systems in Unreal Engine 5.`,location:`London, UK`,email:`joshua06johnson@gmail.com`,github:`https://github.com/JoshUEL2`,linkedin:`https://www.linkedin.com/in/joshgamedev`,itch:`https://joshej.itch.io/`,cv:`/docs/Joshua_Johnson_CV.pdf`,institution:`University of East London (UEL)`,role:`BSc (Hons) Computer Games Design • School Representative`,motto:`If I don't know it, I learn it; if I need it, I build it.`,bio:`I am a London-based Technical Game Designer focused on Unreal Engine 5 gameplay programming, HLSL and Material Graph shaders, and interactive narrative design. I enjoy solving the technical problems where design and maths meet, whether that means overriding Unreal Engine's default planar gravity for 360° pipe racing, projecting decals onto vertex-displaced meshes, or anchoring seated VR horror to physical wheelchair inertia.`,stats:[{label:`Games & Prototypes`,value:`15`,sub:`UE5, Unity, Python & Web`},{label:`Gameplay Prototyping`,value:`92%`,sub:`1st Class Honours Top Mark`},{label:`CPU Tick Reduction`,value:`-65%`,sub:`ISM Actor Pooling (UE 5.7)`},{label:`Live Exhibitions`,value:`2×`,sub:`Sole Year 2 in Final Year Hall`}]},Z=[{id:`rastacats-remaster`,projectId:`rastacats`,phaseIndex:1,code:`REEL 01 // UE 5.7`,title:`Rastacats Remastered`,subtitle:`Curved-World WPO Shader & Decal Tangent Maths`,video:`/media/rastacats_cw2_preview.mp4`,poster:`/images/rastacats_revisited.jpg`,itch:`https://joshej.itch.io/rastacats`,telemetry:[{label:`VERTEX SHADER`,value:`P' = P - Up × (dist / R)²`},{label:`OPTIMISATION`,value:`-65% CPU Tick (ISM Pooling)`},{label:`ANIMATION`,value:`Velocity-Driven Bone Sway`}]},{id:`rastacats-original`,projectId:`rastacats`,phaseIndex:0,code:`REEL 02 // UE 5.7`,title:`Rastacats (Original)`,subtitle:`360° Cylindrical Pipe Adhesion & Polar Gravity`,video:`/media/rastacats_preview.mp4`,poster:`/images/rastacats.jpg`,itch:`https://joshej.itch.io/rastacats`,telemetry:[{label:`GRAVITY VECTOR`,value:`Spline Cross-Section Polar Normals`},{label:`MECHANIC`,value:`200+ km/h Overspeed Multiplier`},{label:`RECOGNITION`,value:`92% (1st) • Exhibited in Final Year Hall`}]},{id:`delirium-vr`,projectId:`delirium`,phaseIndex:0,code:`REEL 03 // UE 5.6 OPENXR`,title:`Delirium VR`,subtitle:`Seated Wheelchair Tank Physics & Frustum-Locked AI`,video:`/media/delirium_preview.mp4`,poster:`/images/delirium_cover.png`,itch:`https://joshej.itch.io/delirium`,telemetry:[{label:`LOCOMOTION`,value:`3-Mode Seated Wheelchair Inertia`},{label:`THREAT AI`,value:`Camera-Frustum Quantum Freeze`},{label:`LEVEL TECH`,value:`Behind-Back Geometry Shifts`}]},{id:`rem-shader`,projectId:`rem`,phaseIndex:0,code:`REEL 04 // UE 5 SHADERS`,title:`REM`,subtitle:`Multi-Directional Kuwahara Watercolour Filter & WPO Rig`,video:`/media/rem_preview.mp4`,poster:`/images/rem_cover.jpg`,itch:null,telemetry:[{label:`POST-PROCESS`,value:`Anisotropic Kuwahara Kernel`},{label:`CHARACTER`,value:`Real-Time WPO Vertex Morphing`},{label:`PIPELINE`,value:`Blender + Substance Painter + UE5`}]}],rp=[{id:`gameplay`,label:`Gameplay & Systems`,icon:`Gamepad2`},{id:`vr-physics`,label:`VR & Physics`,icon:`Glasses`},{id:`shaders-art`,label:`Shaders & Tech Art`,icon:`Sparkles`},{id:`level-design`,label:`Level Design`,icon:`Compass`},{id:`narrative`,label:`Narrative & Scripts`,icon:`BookOpen`}],ip=[{id:`rastacats`,category:`gameplay`,title:`Rastacats`,tagline:`360-Degree Gravity Arcade Runner & Remaster`,discipline:`Gameplay Programming`,engine:`Unreal Engine 5`,dates:`Oct 2024 - May 2025`,studio:`Solo Developer`,image:`/images/rastacats_cover.png`,gallery:[`/images/rastacats_cover.png`,`/images/rastacats_cover.jpg`,`/images/rastacats_revisited.jpg`,`/images/rasta_cw1_00_01_05.jpg`,`/images/rasta_cw1_00_01_15.jpg`,`/images/rasta_cw1_00_01_30.jpg`,`/images/rasta_cw2_00_01_15.jpg`,`/images/rasta_cw2_00_01_30.jpg`],videoPreview:`/media/rastacats_cw2_preview.mp4`,links:{github:`https://github.com/JoshUEL2`,itch:`https://joshej.itch.io/rastacats`,demo:null,gdd:`/docs/Rastacats_Design_Document.docx`},shortDesc:`High-speed arcade bobsled runner built around a custom 360-degree cylindrical gravity controller, polar-to-cartesian obstacle spawning, and an object-pooled track generator. Toggle between Phase 1 and Phase 2 below.`,summary:`Built across two development phases: Phase 1 established the core 360-degree pipe physics and procedural obstacle spawning (earning 92%), while Phase 2 overhauled the rendering pipeline, added a curved-world shader, and replaced actor destruction with an object pool.`,highlights:[`Wrote polar-to-cartesian spawning maths (Y = r * cos(theta), Z = r * sin(theta)) so obstacles lock cleanly onto any angle of the pipe.`,`Replaced actor spawning/destruction with a fixed-size ring buffer pool to eliminate garbage collection hitches at high speed.`,`Layered procedural bone tilts over standard skeletal animations so the bobsled leans naturally into tight turns.`,`Built a custom curved-world vertex shader to bend the horizon and mask chunk pop-in.`],technicalDeepDive:`Standard Unreal character movement assumes a fixed -Z gravity vector. To let the bobsled drive seamlessly around the inside and outside of a cylinder, I bypassed default planar movement and calculated surface normals every tick, interpolating the pawn's Up-Vector via quaternion slerp while projecting forward velocity onto the pipe's tangent plane.`,codeSnippet:`// Polar-to-Cartesian Cylindrical Track Spawner & Normal Alignment
void ARastacatsTrackManager::SpawnObstacleOnPipe(float AxialX, float AngleDegrees, float PipeRadius)
{
    const float ThetaRad = FMath::DegreesToRadians(AngleDegrees);
    
    // Convert polar angle around pipe cross-section to local Y/Z coordinates
    const float LocalY = PipeRadius * FMath::Cos(ThetaRad);
    const float LocalZ = PipeRadius * FMath::Sin(ThetaRad);
    const FVector SpawnPos = GetActorLocation() + FVector(AxialX, LocalY, LocalZ);

    // Align obstacle Up-Vector inward toward pipe centre
    const FVector SurfaceNormal = FVector(0.f, -FMath::Cos(ThetaRad), -FMath::Sin(ThetaRad)).GetSafeNormal();
    const FRotator AlignRot = FRotationMatrix::MakeFromZX(SurfaceNormal, FVector::ForwardVector).Rotator();

    AObstacleActor* PooledObstacle = AcquireFromRingPool();
    PooledObstacle->ActivateAtTransform(FTransform(AlignRot, SpawnPos));
}`,architectureNodes:[{label:`Tick Input Axis`,sub:`Steering Angle Delta`},{label:`Polar-to-Cartesian`,sub:`Y = r*cos(θ), Z = r*sin(θ)`},{label:`Quaternion Slerp`,sub:`Surface Normal Alignment`},{label:`Ring Buffer Pool`,sub:`O(1) Chunk Recycling`}],versions:[{id:`phase-2`,label:`Phase 2: Revisited Remaster`,badge:`v2.0 Remaster`,dates:`Jan 2025 - May 2025`,engine:`Unreal Engine 5 (Curved-World Shader & Object Pooling)`,image:`/images/rastacats_revisited.jpg`,videoPreview:`/media/rastacats_cw2_preview.mp4`,gallery:[`/images/rastacats_revisited.jpg`,`/images/rasta_cw2_00_01_05.jpg`,`/images/rasta_cw2_00_01_15.jpg`,`/images/rasta_cw2_00_01_30.jpg`],summary:`The Phase 2 remaster revisited the original prototype from the ground up, replacing raw actor destruction with a pre-allocated ring buffer pool, introducing a custom World Position Offset curved-world vertex shader, and layering procedural skeletal bone banking onto the bobsled crew.`,highlights:[`Eliminated garbage collection frame spikes at 120+ MPH by recycling track segments and obstacles in a ring buffer pool.`,`Authored a custom World Position Offset vertex shader that bends distant geometry downward and laterally to hide procedural chunk seams.`,`Implemented runtime skeletal bone rotation modifiers driven by lateral angular velocity so characters lean dynamically into turns.`,`Rebuilt the lighting pipeline with vibrant Caribbean twilight post-processing and responsive speed-line UI telemetry.`],technicalDeepDive:`In Phase 1, destroying and respawning actors at high velocity caused periodic GC hitches. In Phase 2, I pre-allocated a fixed pool of track chunks and obstacles on BeginPlay, toggling visibility, collision, and transform states in O(1) time as they passed behind the camera frustum.`},{id:`phase-1`,label:`Phase 1: Original Prototype`,badge:`v1.0 Prototype (92%)`,dates:`Oct 2024 - Dec 2024`,engine:`Unreal Engine 5 (Core 360° Pipe Physics)`,image:`/images/rasta_cw1_00_01_15.jpg`,videoPreview:`/media/rastacats_preview.mp4`,gallery:[`/images/rastacats_cover.jpg`,`/images/rasta_cw1_00_01_05.jpg`,`/images/rasta_cw1_00_01_15.jpg`,`/images/rasta_cw1_00_01_30.jpg`],summary:`The initial rapid prototype built to prove out 360-degree cylindrical surface locomotion and polar coordinate obstacle placement in Unreal Engine 5, earning a 92% First-Class grade.`,highlights:[`Solved 360-degree cylindrical locomotion by overriding default planar gravity with dynamic surface normal projection.`,`Built the foundational polar-to-cartesian math spawner (Y = r * cos(theta), Z = r * sin(theta)) for 360-degree pipe hazards.`,`Created the core arcade scoring loop, speed-boost gates, and comedic ragdoll wipeout states.`,`Shipped a standalone playable Windows build on itch.io.`],technicalDeepDive:`Focused on proving the core mathematical loop: translating 1D horizontal steering input into angular velocity around a cylindrical cross-section while maintaining forward momentum along the world X-axis.`}]},{id:`state-machine-showcase`,category:`gameplay`,title:`State Machine Showcase`,tagline:`AI Behaviour Trees, Autonomous Turrets & Interactive Systems`,discipline:`AI & Systems Architecture`,engine:`Unreal Engine 5 (Blueprints & AI)`,dates:`Apr 2025 - Jun 2025`,studio:`Solo Developer`,image:`/images/state_machine_cover.png`,gallery:[`/images/state_machine_cover.png`,`/images/state_machine_keyart.jpg`,`/images/state_machine_flowchart.png`,`/images/state_machine_page.png`],videoPreview:null,links:{github:`https://github.com/JoshUEL2`,itch:`https://joshej.itch.io/state-machine-showcase`,demo:null},shortDesc:`A playable Unreal Engine 5 systems sandbox demonstrating modular AI Behaviour Trees, autonomous turret state machines, multi-floor elevator validation logic, and inventory-gated doors.`,summary:`Designed from formal logic flowcharts to demonstrate clean, decoupled state management across NPC combat AI, autonomous turrets, environmental machinery, and regenerating pickups.`,highlights:[`Built a patrolling NPC Behaviour Tree that follows spline paths, evaluates sight cones, and transitions between Patrol, Chase, and Attack states.`,`Engineered an autonomous AI turret cycling cleanly through Idle, Detect, Track, Fire, and Cooldown states without tick polling.`,`Created a multi-floor elevator state machine with external call-locking and floor input validation.`,`Published a 926 MB standalone playable Windows build on itch.io.`],technicalDeepDive:`To prevent AI state thrashing when the player hovers near the edge of an enemy's detection radius, I separated perception updates from locomotion state transitions using Blackboard hysteresis timers and Blueprint Interfaces.`,codeSnippet:`// Autonomous Turret Finite State Machine Transition Logic
void ATurretController::EvaluateStateTransition(float DistanceToTarget, bool bHasLineOfSight)
{
    switch (CurrentState)
    {
        case ETurretState::Idle:
            if (bHasLineOfSight && DistanceToTarget <= DetectionRadius)
                TransitionTo(ETurretState::Track);
            break;

        case ETurretState::Track:
            RotateBarrelTowardTarget(GetWorld()->GetDeltaSeconds());
            if (!bHasLineOfSight || DistanceToTarget > LoseTargetRadius)
                TransitionTo(ETurretState::Idle);
            else if (IsAimAlignedWithinThreshold(3.5f))
                TransitionTo(ETurretState::Fire);
            break;

        case ETurretState::Fire:
            SpawnProjectileBurst();
            TransitionTo(ETurretState::Cooldown);
            break;
    }
}`,architectureNodes:[{label:`Perception Cone`,sub:`Sight & Range Raycast`},{label:`Blackboard FSM`,sub:`Hysteresis Dwell Guard`},{label:`State Execution`,sub:`Patrol / Track / Fire`},{label:`Cooldown Reset`,sub:`Timer-Driven Recovery`}]},{id:`planet-protectors`,category:`gameplay`,title:`Planet Protectors`,tagline:`2-Player Local Co-Op Eco-Action Platformer`,discipline:`Co-Op Gameplay & Character Production`,engine:`Unreal Engine 5 / Maya / Substance Painter`,dates:`Jan 2025 - May 2025`,studio:`Llama Games (4-Person Team)`,image:`/images/planet_protectors_cover.png`,gallery:[`/images/planet_protectors_cover.png`,`/images/planet_protectors_lineup.png`,`/images/Bonnie and Kiwi Concepts.webp`,`/images/Bonnie Model Sheet.webp`,`/images/Kiwi Model Sheet.webp`,`/images/Haptic Concepts.webp`,`/images/Haptic Model Sheet.webp`],videoPreview:null,links:{github:`https://github.com/JoshUEL2/Planet-Protectors`,itch:`https://joshej.itch.io/planet-protectors`,demo:null,gdd:`/docs/Planet_Protectors_Design_Document.docx`},marketingSite:{repoSlug:`planet-protectors`,title:`Planet Protectors | Llama Games Companion Portal`,path:`/marketing/planet-protectors/index.html`,repoUrl:`https://github.com/JoshUEL2/Planet-Protectors-Marketing-Website`,liveUrl:`https://joshuel2.github.io/Planet-Protectors-Marketing-Website/`,description:`Interactive promotional storefront and character showcase built for Llama Games, featuring character bio cards, environmental transformation sliders, and team breakdowns.`},shortDesc:`A split-screen local co-op action platformer where two players team up as elemental guardians to clear industrial corruption and restore colour to a dying planet.`,summary:`Developed in a four-person studio team (Llama Games). Alongside co-op gameplay scripting, I led the character concept-to-3D pipeline for Bonnie, Kiwi, and Haptic, taking them from orthographic turnarounds through topology and PBR texturing.`,highlights:[`Engineered dynamic split-screen co-op camera management and synchronised puzzle triggers in Unreal Engine 5.`,`Designed and modelled the core cast (Bonnie, Kiwi, and Haptic) from 2D orthographic model sheets to game-ready 3D meshes.`,`Built real-time environmental restoration feedback that swaps desaturated industrial materials for vibrant foliage as pollution nodes are cleared.`,`Shipped both the playable UE5 prototype on itch.io and a dedicated companion marketing website.`],technicalDeepDive:`Co-op platformers live or die on readability when two players split attention. We linked each cleared hazard zone to a Material Parameter Collection radius mask, expanding a living saturation wave outward from the players in real time.`,codeSnippet:`// Co-Op Environmental Restoration Wave via Material Parameter Collection
void ABeatCorruptionNode::OnNodePurified(FVector NodeWorldLocation)
{
    bIsPurified = true;
    UKismetMaterialLibrary::SetVectorParameterValue(
        this, EnvMPC, FName("PurificationOrigin"), FLinearColor(NodeWorldLocation)
    );

    // Lerp restoration radius outward over 1.8 seconds
    CurrentWaveRadius = FMath::FInterpTo(CurrentWaveRadius, MaxZoneRadius, GetWorld()->GetDeltaSeconds(), 4.2f);
    UKismetMaterialLibrary::SetScalarParameterValue(this, EnvMPC, FName("PurificationRadius"), CurrentWaveRadius);
}`,architectureNodes:[{label:`Dual Input Controllers`,sub:`Local Split-Screen Pawns`},{label:`Co-Op Puzzle Node`,sub:`Synchronised State Check`},{label:`Global MPC Broadcast`,sub:`Radius & Origin Vector`},{label:`Biome Restoration`,sub:`Real-Time Material Blend`}]},{id:`rand-io`,category:`gameplay`,title:`Rand.io`,tagline:`Procedural 2D Top-Down Roguelite & Random Walker Generator`,discipline:`Procedural Generation & AI Pathfinding`,engine:`Python 3 / Pygame / Custom Tile Engine`,dates:`Feb 2025 - May 2025`,studio:`Solo Developer`,image:`/images/randio_cover.png`,gallery:[`/images/randio_cover.png`,`/images/rand_io.jpg`],videoPreview:null,links:{github:`https://github.com/JoshUEL2`,itch:`https://joshej.itch.io/randio`,demo:null,gdd:`/docs/Randio_Design_Document.docx`},shortDesc:`A 2D top-down roguelite shooter featuring stochastic Random Walker island generation, cellular automata coastline smoothing, and A* enemy pursuit pathfinding.`,summary:`Built to explore procedural level generation from scratch without relying on pre-built engine tilemaps. Every run carves a fresh island layout, calculates bitmask shoreline autotiles, and spawns wave-based enemies that navigate around obstacles.`,highlights:[`Implemented a multi-agent Drunkard's Walk (Random Walker) algorithm that carves organic interconnected island arenas with guaranteed connectivity.`,`Applied cellular automata smoothing passes and 4-bit directional bitmasking to automatically place cliff edges, beaches, and water tiles.`,`Wrote a grid-based A* pathfinding solver so enemies dynamically flank the player around procedurally generated cover.`,`Packaged and shipped as a standalone executable on itch.io.`],technicalDeepDive:`Pure random walkers often create narrow 1-tile bottlenecks that trap the player. By spawning multiple walkers that probabilistically turn, stamp 2x2 corridors, and terminate once a target floor-to-water ratio (42%) is reached, every generated island remains open enough for twin-stick dodging while preserving tactical choke points.`,codeSnippet:`# Stochastic Random Walker Island Generator with Bitmask Autotiling
def generate_island_grid(width: int, height: int, target_floor_ratio: float = 0.42):
    grid = [[0 for _ in range(width)] for _ in range(height)]
    x, y = width // 2, height // 2
    floor_count, max_floors = 0, int(width * height * target_floor_ratio)

    while floor_count < max_floors:
        if grid[y][x] == 0:
            grid[y][x] = 1
            floor_count += 1
        dx, dy = random.choice([(1, 0), (-1, 0), (0, 1), (0, -1)])
        x = max(2, min(width - 3, x + dx))
        y = max(2, min(height - 3, y + dy))

    return apply_bitmask_shorelines(grid, width, height)`,architectureNodes:[{label:`Seed Initialisation`,sub:`Centre Grid Origin`},{label:`Drunkard's Walkers`,sub:`42% Floor Density Target`},{label:`4-Bit Autotiler`,sub:`Shoreline & Cliff Masks`},{label:`A* Grid NavMesh`,sub:`Enemy Pursuit Routing`}]},{id:`delirium`,category:`vr-physics`,title:`Delirium VR`,tagline:`Physical Wheelchair Locomotion Horror (Global Game Jam)`,discipline:`VR Physics & Interaction`,engine:`Unreal Engine 5 (OpenXR)`,dates:`Jan 2026 (36-Hour Jam)`,studio:`GGJ Goldsmiths Team`,image:`/images/delirium_cover.png`,gallery:[`/images/delirium_cover.png`,`/images/delirium_wheelchair.png`,`/images/delirium_locomotion_modes.png`,`/images/delirium_vr_controls.png`,`/images/delirium_corridor.png`,`/images/delirium_ward.png`,`/images/delirium_directors_office.png`,`/images/delirium_restroom.png`,`/images/delirium_dont_stop.png`,`/images/delirium_monster_concept.png`,`/images/delirium_floorplan.png`,`/images/delirium_ui_main_menu.png`,`/images/delirium_ui_control_menu.png`,`/images/delirium_ui_pause_menu.png`,`/images/delirium_title_card.png`],videoPreview:`/media/delirium_preview.mp4`,links:{github:`https://github.com/JoshUEL2`,itch:`https://joshej.itch.io/delirium`,demo:null,gdd:`/docs/Delirium_GDD_and_Design_Notes.zip`},shortDesc:`Built in 36 hours at Goldsmiths Global Game Jam. Players physically grip, push, and brake independent left/right wheelchair rims in VR to escape a sound-hunting entity.`,summary:`VR horror game where movement requires physical effort. Instead of thumbstick teleportation, I built a twin-wheel differential drive rig in OpenXR where frantic hand strokes generate squeaking wheel audio that draws the monster toward you.`,highlights:[`Programmed differential wheelchair physics: pushing one rim pivots the chair around the opposite wheel's contact patch, while gripping both brakes.`,`Tied wheel angular velocity directly into the monster's acoustic perception system so panicking and pushing harder reveals your position.`,`Kept a locked 90 FPS stereoscopic frame budget with comfort vignetting to prevent motion sickness during rapid spins.`,`Included full design documentation, floorplans, and bespoke diegetic VR UI.`],technicalDeepDive:`Translating linear VR hand controller deltas into rotational wheel torque required projecting each motion controller's velocity vector onto the tangent of its respective wheel rim. If the player's grip stays closed while hand velocity drops near zero, friction dampers engage to simulate physical braking.`,codeSnippet:`// OpenXR Differential Wheelchair Rim Torque & Braking Calculation
void AWheelchairPawn::UpdateWheelPhysics(UVRControllerComponent* Hand, UPrimitiveComponent* WheelRim, float DeltaTime)
{
    if (!Hand->IsGripPressed()) return;

    const FVector HandVel = Hand->GetLinearVelocity();
    const FVector WheelTangent = WheelRim->GetForwardVector();
    const float TangentialSpeed = FVector::DotProduct(HandVel, WheelTangent);

    if (HandVel.SizeSquared() < BrakingVelocityThresholdSq)
    {
        // Player is holding rim stationary -> apply mechanical brake damping
        ApplyWheelBrakeDamping(WheelRim, BrakeFrictionCoefficient, DeltaTime);
    }
    else
    {
        // Project hand stroke onto rim tangent and emit acoustic noise proportional to torque
        AddDifferentialDriveTorque(WheelRim, TangentialSpeed * RimTorqueMultiplier);
        EmitWheelSqueakStimulus(FMath::Abs(TangentialSpeed));
    }
}`,architectureNodes:[{label:`OpenXR Hand Grip`,sub:`Controller Velocity Vector`},{label:`Tangent Projection`,sub:`Dot(V_hand, Wheel_Fwd)`},{label:`Differential Torque`,sub:`Independent L/R Angular Vel`},{label:`Acoustic AI Stimulus`,sub:`Squeak Decibel Broadcast`}]},{id:`pyball`,category:`vr-physics`,title:`PyBall`,tagline:`Custom 2D Vector Physics & Collision Kinematics Engine`,discipline:`Physics Engine Programming`,engine:`Python 3 / Pygame`,dates:`Nov 2024 - Jan 2025`,studio:`Solo Developer`,image:`/images/pyball.jpg`,gallery:[`/images/pyball.jpg`,`/images/pyball_circle_collision.png`,`/images/pyball_box_collision.png`],videoPreview:`/media/pyball_preview.mp4`,links:{github:`https://github.com/JoshUEL2`,itch:null,demo:null},shortDesc:`A 2D rigid-body physics sandbox written from scratch in Python without external physics libraries, handling circle-to-circle and AABB impulse resolution.`,summary:`Built to understand rigid-body collision maths under the hood rather than relying on Box2D. Implements elastic and inelastic momentum transfer, restitution coefficients, and positional projection to stop stacked bodies sinking into floors.`,highlights:[`Wrote custom Circle-to-Circle and Circle-to-AABB manifold generation with exact contact normal and penetration depth output.`,`Solved elastic momentum transfer using vector dot products along the collision normal.`,`Added positional slop correction to eliminate resting contact jitter under continuous gravity.`,`Included live debug overlays rendering velocity vectors, contact normals, and bounding boxes.`],technicalDeepDive:`Discrete timestep physics engines suffer from 'sinking' when gravity pushes a resting ball slightly inside a floor before the next frame's velocity impulse fires. Adding Baumgarte positional projection nudges intersecting bodies apart along the collision normal proportional to their inverse masses.`,codeSnippet:`# 2D Impulse Momentum Resolution & Positional Slop Correction
def resolve_collision(body_a, body_b, normal: Vector2, depth: float, restitution: float = 0.85):
    rel_vel = body_b.velocity - body_a.velocity
    vel_along_normal = rel_vel.dot(normal)
    if vel_along_normal > 0:
        return  # Bodies are already separating

    inv_mass_sum = body_a.inv_mass + body_b.inv_mass
    j = -(1.0 + restitution) * vel_along_normal / inv_mass_sum
    impulse = normal * j
    body_a.velocity -= impulse * body_a.inv_mass
    body_b.velocity += impulse * body_b.inv_mass

    # Baumgarte positional projection to prevent floor sinking
    correction = max(depth - 0.01, 0.0) / inv_mass_sum * 0.8 * normal
    body_a.position -= correction * body_a.inv_mass
    body_b.position += correction * body_b.inv_mass`,architectureNodes:[{label:`Broadphase Sweep`,sub:`AABB Pair Culling`},{label:`Manifold Solver`,sub:`Normal & Penetration Depth`},{label:`Impulse Scalar (j)`,sub:`Restitution Dot Product`},{label:`Positional Projection`,sub:`Anti-Sinking Slop Fix`}]},{id:`rem`,category:`shaders-art`,title:`REM`,tagline:`Kuwahara Painterly Shader & WPO Morphing + Myndwell ARG Portal`,discipline:`Technical Art & Shader Programming`,engine:`Unreal Engine 5 / HLSL / HTML5 ARG`,dates:`Jan 2025 - May 2025`,studio:`Solo Developer`,image:`/images/rem.jpg`,gallery:[`/images/rem.jpg`,`/images/rem_cover.jpg`],videoPreview:`/media/rem_preview.mp4`,links:{github:`https://github.com/JoshUEL2/REM`,itch:null,demo:null,gdd:`/docs/REM_Game_Design_Document.docx`},marketingSite:{repoSlug:`rem`,title:`REM | Myndwell Corporation Interactive ARG Website`,path:`/marketing/rem/index.html`,repoUrl:`https://github.com/JoshUEL2/REM-Marketing-Website`,liveUrl:`https://joshuel2.github.io/REM-Marketing-Website/`,description:`In-universe corporate wellness portal for Myndwell Corporation featuring a live 'INITIATE BREACH' hacker exploit mode that corrupts the DOM, unlocks classified Partition audio/text logs, and reveals the dark truth behind the REM procedure.`},shortDesc:`Surrealist psychological exploration game in UE5 driven by a custom anisotropic Kuwahara post-process shader, World Position Offset mesh morphing, and an interactive in-universe Myndwell ARG website.`,summary:`Turns real-time 3D geometry into a living oil painting that fractures as the protagonist's dream state destabilises. Paired with a complete 2,900-line interactive in-universe corporate website (Myndwell) with a built-in hacker breach mode.`,highlights:[`Coded a multi-quadrant Kuwahara post-process filter in HLSL/Material nodes that preserves sharp object silhouettes while giving surfaces a hand-painted brush texture.`,`Used sine-wave World Position Offset (WPO) vertex displacement to stretch and breathe corridor geometry in sync with audio cues.`,`Built the complete Myndwell Corporation interactive marketing & ARG website (HTML/CSS/JS) with a live firewall breach mechanic that corrupts the page into a classified terminal.`,`Included the full REM Game Design Document, script, and v1.0.0 standalone Windows release.`],technicalDeepDive:`Standard box blurs destroy edge boundaries and look muddy. A Kuwahara filter samples four overlapping quadrants around each pixel, computes the colour variance in each quadrant, and outputs the mean colour of whichever quadrant has the lowest variance, flattening interior textures into painterly strokes while keeping edges razor-sharp.`,codeSnippet:`// Anisotropic 4-Quadrant Kuwahara Post-Process Filter (HLSL Custom Node)
float3 KuwaharaFilter(float2 UV, float2 TexelSize, int Radius)
{
    float3 Mean[4] = {0,0,0, 0,0,0, 0,0,0, 0,0,0};
    float3 Sigma[4] = {0,0,0, 0,0,0, 0,0,0, 0,0,0};
    int2 Offsets[4] = { int2(-Radius, -Radius), int2(0, -Radius), int2(-Radius, 0), int2(0, 0) };

    for (int k = 0; k < 4; k++) {
        for (int j = 0; j <= Radius; j++) {
            for (int i = 0; i <= Radius; i++) {
                float3 Col = SceneTextureLookup(UV + (Offsets[k] + int2(i, j)) * TexelSize, 14, false).rgb;
                Mean[k] += Col;
                Sigma[k] += Col * Col;
            }
        }
    }
    // Select quadrant with minimum variance to preserve sharp edges
    return SelectMinVarianceQuadrant(Mean, Sigma, (Radius + 1) * (Radius + 1));
}`,architectureNodes:[{label:`SceneColor Buffer`,sub:`Post-Process Input0`},{label:`4-Quadrant Kernel`,sub:`Local Mean & Variance (σ²)`},{label:`Min-Variance Pick`,sub:`Edge-Preserving Brush Stroke`},{label:`Myndwell ARG Portal`,sub:`Interactive Web Breach Mode`}]},{id:`daydream`,category:`shaders-art`,title:`Daydream Believer`,tagline:`1:1 Photogrammetry & ADHD Hyperfocus Shader Simulation`,discipline:`Photogrammetry & Technical Art`,engine:`Unreal Engine 5 (Lumen & Post-Process)`,dates:`Oct 2024 - May 2025`,studio:`Solo Developer`,image:`/images/daydream_believer_cover.png`,gallery:[`/images/daydream_believer_cover.png`,`/images/daydream_revisited.jpg`,`/images/daydream_00_01_05.jpg`,`/images/daydream_00_01_15.jpg`,`/images/daydream_00_01_30.jpg`,`/images/test_daydream_52s.jpg`],videoPreview:`/media/daydream_preview.mp4`,links:{github:`https://github.com/JoshUEL2/Daydream-Believer-Marketing-Website`,itch:`https://joshej.itch.io/daydream-believer`,demo:null,gdd:`/docs/Daydream_Believer_Design_Document.docx`},marketingSite:{repoSlug:`daydream`,title:`Daydream Believer | Interactive Design Document & Shader Archive`,path:`/marketing/daydream/index.html`,repoUrl:`https://github.com/JoshUEL2/Daydream-Believer-Marketing-Website`,liveUrl:`https://joshuel2.github.io/Daydream-Believer-Marketing-Website/`,description:`Interactive web companion for Daydream Believer featuring an attention-economy chart, environmental state breakdown, and sensory overload visualiser.`},shortDesc:`Evolved across two phases: Phase 1 reconstructed my real bedroom at 1:1 scale via RealityCapture photogrammetry; Phase 2 layered a reactive post-process shader system simulating ADHD sensory overload and hyperfocus.`,summary:`Grounded in a 1:1 photogrammetry scan and Blender reconstruction of my own bedroom, the project uses Material Parameter Collections to drain colour, narrow peripheral vignette, and muffle audio when executive dysfunction sets in. Toggle between Phase 1 and Phase 2 below.`,highlights:[`Captured, retopologised, and baked a 1:1 scale digital twin of my bedroom using RealityCapture, Blender, and Substance Painter.`,`Built a reactive post-process shader driven by a global Focus parameter that controls radial chromatic aberration, saturation fall-off, and depth-of-field blur.`,`Created an interactive HTML5/Chart.js design companion website exploring the cognitive load mechanics.`,`Published the playable UE5 build on itch.io alongside the full Revisited Design Document.`],technicalDeepDive:`Raw photogrammetry meshes contain millions of noisy triangles and baked lighting artefacts. I retopologised hero props into clean low-poly quads in Blender, delighted the base albedo maps, and baked high-to-low normal maps in Substance Painter so they responded accurately to dynamic Lumen global illumination.`,codeSnippet:`// Reactive ADHD Sensory Overload Post-Process Controller
void ADaydreamPostProcessDirector::UpdateCognitiveShaderState(float FocusLevel, float OverwhelmIndex)
{
    // Drive global Material Parameter Collection from player cognitive state
    UKismetMaterialLibrary::SetScalarParameterValue(this, CognitiveMPC, FName("GlobalSaturation"),
        FMath::Lerp(0.08f, 1.15f, FocusLevel));

    // Expand peripheral tunnel-vision vignette & chromatic split as overwhelm rises
    PostProcessComp->Settings.ChromaticAberrationStartOffset = FMath::Lerp(0.8f, 0.1f, OverwhelmIndex);
    PostProcessComp->Settings.SceneFringeIntensity = FMath::Lerp(0.2f, 4.5f, OverwhelmIndex);
    PostProcessComp->Settings.VignetteIntensity = FMath::Lerp(0.35f, 1.15f, OverwhelmIndex);
}`,architectureNodes:[{label:`RealityCapture Scan`,sub:`Point Cloud Alignment`},{label:`Blender Retopology`,sub:`Clean Quad UV Unwrap`},{label:`Substance PBR Bake`,sub:`Delighted Albedo & Normals`},{label:`Cognitive MPC Shader`,sub:`Live Desaturation & Vignette`}],versions:[{id:`phase-2`,label:`Phase 2: Revisited (ADHD Shader Simulation)`,badge:`v2.0 Revisited`,dates:`Jan 2025 - May 2025`,engine:`Unreal Engine 5 (Lumen + Reactive Post-Process MPC)`,image:`/images/daydream_revisited.jpg`,videoPreview:`/media/daydream_preview.mp4`,gallery:[`/images/daydream_revisited.jpg`,`/images/daydream_00_01_15.jpg`,`/images/daydream_00_01_30.jpg`,`/images/test_daydream_52s.jpg`],summary:`Phase 2 transformed the static 1:1 bedroom replica into an interactive psychological simulation of ADHD hyperfocus and executive dysfunction, linking player task interaction to a live post-processing shader and acoustic dampening pipeline.`,highlights:[`Engineered a global Material Parameter Collection (MPC) shader that dynamically drains environmental saturation as untreated tasks accumulate.`,`Implemented peripheral tunnel-vision vignetting, chromatic fringe splitting, and depth-of-field focus pulls triggered by distraction stimuli.`,`Built the interactive Daydream Believer companion web archive with live cognitive load charts.`,`Shipped the playable Windows build on itch.io.`],technicalDeepDive:`Instead of using static UI bars to represent mental fatigue, the environment itself acts as the HUD: peripheral objects lose colour saturation and sharpen into high-contrast chromatic noise until the player completes grounding interactions.`},{id:`phase-1`,label:`Phase 1: Original (1:1 Photogrammetry Replica)`,badge:`v1.0 Environment`,dates:`Oct 2024 - Dec 2024`,engine:`RealityCapture / Blender / Substance Painter / UE5`,image:`/images/daydream_00_01_05.jpg`,videoPreview:`/media/daydream_preview.mp4`,gallery:[`/images/daydream_00_01_05.jpg`,`/images/daydream_believer_cover.png`],summary:`Phase 1 focused on pure environmental technical art: capturing my real-world bedroom at 1:1 metric scale using RealityCapture photogrammetry, cleaning topology in Blender, and calibrating Lumen bounce lighting in Unreal Engine 5.`,highlights:[`Processed raw multi-angle photography in RealityCapture to extract dense point clouds and metric room dimensions.`,`Retopologised noisy scan meshes into clean game-ready quad geometry in Blender with optimised UV texel density.`,`Delighted raw scan textures and authored physically accurate roughness/metallic maps in Substance Painter.`,`Calibrated indirect Lumen bounce lighting to match real-world natural window exposure.`],technicalDeepDive:`Solved baked shadow contamination from raw photogrammetry scans by separating high-frequency surface normal detail from base albedo maps in Substance Painter.`}]},{id:`project-isla`,category:`shaders-art`,title:`Project Isla`,tagline:`Procedural Perlin Noise Island & Biome Terrain Generator`,discipline:`Procedural Tech Art & Terrain Maths`,engine:`Unreal Engine 5 / Procedural Mesh`,dates:`Nov 2024 - Jan 2025`,studio:`Solo Developer`,image:`/images/project_isla.jpg`,gallery:[`/images/project_isla.jpg`],links:{github:`https://github.com/JoshUEL2`,itch:null,demo:null,gdd:`/docs/Project_Isla_Design_Document.docx`},shortDesc:`A procedural 3D island generator that combines multi-octave 2D Perlin noise with a radial sigmoid fall-off mask and elevation-based biome splatting.`,summary:`Generates natural archipelago landmasses at runtime by layering fractional Brownian motion (fBm) noise octaves, subtracting a radial distance gradient to guarantee ocean borders, and auto-assigning sand, grass, rock, and snow materials by slope and altitude.`,highlights:[`Combined 4 octaves of 2D Perlin noise (lacunarity 2.0, persistence 0.5) to create macro mountain ridges with micro surface detail.`,`Applied a radial sigmoid fall-off mask so every seed naturally tapers into a surrounding coastline rather than clipping at chunk edges.`,`Built an elevation and normal-slope shader that blends sand, coastal vegetation, cliff rock, and alpine snow automatically.`,`Recorded full real-time procedural generation walkthrough and technical design document.`],technicalDeepDive:`Single-frequency Perlin noise looks like smooth plastic hills. By summing multiple octaves where each octave doubles frequency (lacunarity) and halves amplitude (persistence), then multiplying the result by a smooth radial distance curve from the grid centre, the mesh forms jagged volcanic peaks surrounded by shallow sandy coves.`,codeSnippet:`// Multi-Octave fBm Perlin Elevation with Radial Island Fall-Off Mask
float UProceduralIslandComponent::SampleElevation(float X, float Y, int32 Octaves, float Persistence, float Lacunarity) const
{
    float Amplitude = 1.0f, Frequency = 1.0f, NoiseHeight = 0.0f, MaxPossible = 0.0f;
    for (int32 i = 0; i < Octaves; i++)
    {
        NoiseHeight += FMath::PerlinNoise2D(FVector2D(X * Frequency, Y * Frequency)) * Amplitude;
        MaxPossible += Amplitude;
        Amplitude *= Persistence;
        Frequency *= Lacunarity;
    }
    const float NormalisedNoise = (NoiseHeight / MaxPossible + 1.0f) * 0.5f;
    const float RadialDist = FVector2D(X, Y).Size() / IslandRadius;
    const float FalloffMask = FMath::Clamp(1.0f - FMath::Pow(RadialDist, 2.4f), 0.0f, 1.0f);
    return NormalisedNoise * FalloffMask * MaxElevationZ;
}`,architectureNodes:[{label:`Seed & Grid UV`,sub:`2D Coordinate Space`},{label:`4-Octave fBm Loop`,sub:`Lacunarity 2.0 / Persist 0.5`},{label:`Radial Fall-Off Mask`,sub:`Coastline Boundary Taper`},{label:`Slope/Altitude Splat`,sub:`Auto-Biome Shader Blend`}]},{id:`labraz`,category:`level-design`,title:`LabR@z`,tagline:`3-Player Asymmetrical Co-Op FPS Facility`,discipline:`Level Design & Spatial Pacing`,engine:`Unreal Engine 5 / Blender`,dates:`Jan 2025 - Apr 2025`,studio:`Solo Level Designer`,image:`/images/labraz.jpg`,gallery:[`/images/labraz.jpg`,`/images/labraz_01.jpg`],videoPreview:`/media/labraz_preview.mp4`,links:{github:`https://github.com/JoshUEL2`,itch:null,demo:null,video:`https://www.youtube.com/watch?v=t3xmVDuFvZU`,gdd:`/docs/LabRatz_Design_Document.docx`},shortDesc:`A 3-player asymmetrical co-op FPS level built in Unreal Engine 5 around three distinct player roles (Hacker, Assault, Engineer), complete with a 40-page GDD and walkthrough.`,summary:`Designed a multi-wing bio-research facility where progression requires simultaneous spatial coordination between three specialised roles: elevated catwalks for overwatch, maintenance vents for engineering bypasses, and colour-coded power conduits guiding hackers to terminal nodes.`,highlights:[`Authored a 40-page Game Design Document detailing beat charts, rhythm-tension curves, choke points, and encounter sightlines.`,`Used diegetic yellow conduit cabling and contrast lighting to guide players naturally without intrusive HUD waypoints.`,`Balanced three interconnected lane elevations so every combat arena rewards cross-role flanking.`,`Greyboxed in Unreal Engine 5 and dressed with custom modular laboratory kits built in Blender.`],technicalDeepDive:`Asymmetrical co-op levels fail when one player can solo the objective while teammates wait at a locked door. I structured each security sector as a three-way spatial lock: the Engineer holds a pressure bulkhead open from the gantry, giving the Hacker line-of-sight to override the turret grid while Assault suppresses spawns on the main floor.`,codeSnippet:`// Multi-Role Synchronised Sector Breach Gate Controller
void ALabSectorLock::EvaluateBreachReadiness()
{
    const bool bGantryHeld   = EngineerPressurePlate->IsActivelyOccupied();
    const bool bTurretsMuted = HackerTerminal->GetOverrideStatus() == EHackState::Bypassed;
    const bool bFloorCleared = AssaultZoneVolume->GetActiveHostileCount() == 0;

    UpdateConduitSignageColour(bGantryHeld, bTurretsMuted, bFloorCleared);

    if (bGantryHeld && bTurretsMuted && bFloorCleared && !bSectorUnlocked)
    {
        bSectorUnlocked = true;
        BroadcastSectorBreachComplete();
    }
}`,architectureNodes:[{label:`Engineer Gantry`,sub:`Vertical Overwatch & Valve`},{label:`Hacker Conduit`,sub:`Terminal Sightline Puzzle`},{label:`Assault Main Floor`,sub:`Choke-Point Wave Suppression`},{label:`Synchronised Breach`,sub:`3-Way Spatial Gate Unlock`}]},{id:`chanceway`,category:`level-design`,title:`Chanceway`,tagline:`Non-Euclidean Shifting Maze & Probabilistic Exit Architecture`,discipline:`Systemic Level Design & World Architecture`,engine:`Unreal Engine 5 / HTML5 Design Archive`,dates:`Jan 2025 - May 2025`,studio:`Solo Developer`,image:`/images/project_tower_01.jpg`,gallery:[`/images/project_tower_01.jpg`,`/images/project_tower_02.jpg`,`/images/project_tower_03.jpg`],videoPreview:null,links:{github:`https://github.com/JoshUEL2/Chanceway-Marketing-Website`,itch:null,demo:null,gdd:`/docs/Chanceway_Game_Design_Document.docx`},marketingSite:{repoSlug:`chanceway`,title:`Chanceway | Interactive Level Architecture & Probability Archive`,path:`/marketing/chanceway/index.html`,repoUrl:`https://github.com/JoshUEL2/Chanceway-Marketing-Website`,liveUrl:`https://joshuel2.github.io/Chanceway-Marketing-Website/`,description:`Interactive design archive for Chanceway featuring live probability distribution visualisers, shifting maze topology breakdowns, and sanity director documentation.`},shortDesc:`A first-person psychological maze survival game where corridor geometry dynamically reconfigures outside the player's camera frustum and exit doors operate on shifting probability weights.`,summary:`Designed around spatial disorientation and risk-versus-reward decision making. Instead of a static floorplan, Chanceway uses frustum-culled socket swapping to rearrange junctions behind the player's back while an adaptive sanity director tunes ambient lighting and audio cues.`,highlights:[`Designed a modular non-Euclidean corridor system that swaps room behind-the-back connections whenever the player's dot-product look vector faces away.`,`Created a probabilistic exit mechanic where acoustic and lighting tells hint at whether a doorway leads closer to extraction or deeper into the labyrinth.`,`Built the interactive Chanceway Design Archive website with live Chart.js probability and tension visualisers.`,`Authored the complete Chanceway Game Design Document.`],technicalDeepDive:`If geometry shifts while visible, the illusion breaks immediately. Each junction connector checks two conditions before swapping a corridor module: the target socket must lie outside the player's camera frustum planes, and a line-of-sight raycast must confirm an occluding corner wall stands between the player and the seam.`,codeSnippet:`// Frustum-Culled Non-Euclidean Corridor Socket Swapper
bool AChancewayMazeDirector::TryReconfigureBehindPlayer(UCorridorSocket* Socket, TSubclassOf<ACorridorChunk> NextChunk)
{
    const FVector ToSocket = (Socket->GetComponentLocation() - PlayerCam->GetComponentLocation()).GetSafeNormal();
    const float LookDot = FVector::DotProduct(PlayerCam->GetForwardVector(), ToSocket);

    // Only swap when socket is strictly behind the player's field of view and occluded
    if (LookDot < -0.35f && !HasDirectLineOfSight(PlayerCam->GetComponentLocation(), Socket->GetComponentLocation()))
    {
        SwapCorridorModuleAtSocket(Socket, NextChunk);
        RecalculateExitProbabilityWeights();
        return true;
    }
    return false;
}`,architectureNodes:[{label:`Player Frustum Check`,sub:`Dot(CamFwd, ToSocket) < -0.35`},{label:`Occlusion Raycast`,sub:`Corner Wall Verification`},{label:`Silent Socket Swap`,sub:`Non-Euclidean Topology Shift`},{label:`Probability Director`,sub:`Exit Weight & Audio Tells`}]},{id:`baldis-basics-2`,category:`level-design`,title:`Baldi's Basics 2 (B.A.L.D. Remake)`,tagline:`3D Psychological Horror Facility & 400+ Lumen Light Benchmark`,discipline:`Level Lighting, Optimization & Stealth AI`,engine:`Unreal Engine 5 (Lumen & NavMesh)`,dates:`Nov 2024 - Feb 2025`,studio:`Solo Developer`,image:`/images/baldis_basics.jpg`,gallery:[`/images/baldis_basics.jpg`],videoPreview:`/media/baldi_preview.mp4`,links:{github:`https://github.com/JoshUEL2`,itch:null,demo:null,gdd:`/docs/Baldis_Basics_2_Design_Document.docx`},shortDesc:`A dark 3D Unreal Engine 5 reimagining of Baldi's Basics featuring an interconnected school facility lit by over 400 dynamic Lumen light sources and an acoustic-hunting pursuer AI.`,summary:`Transforms the flat 2D retro parody into a tense, atmospheric 3D stealth-horror facility in Unreal Engine 5. Engineered to stress-test dynamic Lumen global illumination across long institutional hallways while balancing sightline loops for stealth evasion.`,highlights:[`Architected an interconnected school facility with looping classroom bypasses, locker sightline breaks, and flickering fluorescent corridors.`,`Profiled and optimised over 400 dynamic Lumen point and rect lights using distance attenuation culling and shadow-map caching.`,`Built an escalating pursuer AI whose NavMesh movement speed and hearing sensitivity scale up with every collected notebook.`,`Included full in-engine video walkthrough and technical design documentation.`],technicalDeepDive:`Placing 400+ overlapping dynamic lights in an indoor corridor network can tank GPU frame times due to shadow-casting overlap. By restricting shadow-casting to primary hero fixtures, using emissive rect-light cards for secondary bounce, and tying max draw distances to corridor sightline bends, the level maintains smooth frame pacing.`,codeSnippet:`// Escalating Pursuer AI Speed & Acoustic Sensitivity Controller
void ABaldiPursuerAI::OnNotebookCollected(int32 TotalCollected, int32 MaxNotebooks)
{
    const float EscalationAlpha = FMath::Clamp(float(TotalCollected) / float(MaxNotebooks), 0.0f, 1.0f);
    
    // Exponentially tighten ruler-slap movement interval and expand hearing radius
    StepIntervalSeconds = FMath::Lerp(1.15f, 0.28f, FMath::Pow(EscalationAlpha, 1.4f));
    HearingSensor->HearingRange = FMath::Lerp(1400.0f, 3800.0f, EscalationAlpha);
    TriggerFacilityLightFlickerWave(EscalationAlpha);
}`,architectureNodes:[{label:`Notebook Objective`,sub:`Escalation Alpha (0.0 -> 1.0)`},{label:`NavMesh Pursuer`,sub:`Step Interval Compression`},{label:`Acoustic Sensor`,sub:`Door & Sprint Noise Radius`},{label:`Lumen Light Grid`,sub:`400+ Culling-Optimised Fixtures`}]},{id:`the-quarry`,category:`narrative`,title:`The Quarry: Interactive Branching Narrative`,tagline:`Playable Twine Thriller with Jon Ingold Dialogue Triads`,discipline:`Narrative Systems & Interactive Fiction`,engine:`Twine 2 (SugarCube 2.37 / JavaScript)`,dates:`Oct 2025 - Dec 2025`,studio:`Solo Narrative Designer`,image:`/images/the_quarry.jpg`,gallery:[`/images/the_quarry.jpg`,`/images/the_quarry_flowchart.png`],videoPreview:null,links:{github:`https://github.com/JoshUEL2/The-Quarry`,itch:null,demo:`/games/the_quarry/index.html`,gdd:`/docs/The_Quarry_Branching_Script.docx`},shortDesc:`Playable directly in the browser. A branching psychological thriller built in Twine SugarCube using Jon Ingold's Accept/Reject/Deflect dialogue triads and a hidden Agitation state tracker.`,summary:`Instead of binary good/evil choices, every conversation node is structured as an Accept, Reject, or Deflect triad that shifts an internal Agitation variable, rewriting subsequent room descriptions, NPC trust, and survival outcomes.`,highlights:[`Playable directly in your browser with custom CSS atmospheric styling and procedural WebAudio soundscapes.`,`Implemented Jon Ingold's (Inkle Studios) triad dialogue model so players steer conversational subtext rather than picking obvious morality flags.`,`Tracked hidden state variables ($agitation, $trust, $clues) that dynamically alter prose phrasing at runtime.`,`Mapped the complete 60+ node branching architecture in a high-resolution structural flowchart.`],technicalDeepDive:`Branching narratives quickly suffer from combinatorial explosion if every choice forks a brand-new scene. By using a 'foldback' state architecture, scenes reconverge on shared structural beats while reading the player's accumulated $agitation and $trust integers to swap out dialogue lines, sensory descriptions, and final survival branches.`,codeSnippet:`/* Twine SugarCube 2.37 - Jon Ingold Triad & Agitation State Resolver */
<<nobr>>
  <<if $choiceTriad is "deflect">>
    <<set $agitation to Math.min(100, $agitation + 15)>>
    <<set $millerTrust -= 10>>
  <<elseif $choiceTriad is "accept">>
    <<set $agitation to Math.max(0, $agitation - 10)>>
    <<set $millerTrust += 15>>
  <</if>>
<</nobr>>
<<if $agitation >= 75>>
  <span class="pulse-warning">The fluorescent strip overhead hums louder. Miller's hand doesn't leave the latch.</span>
<<else>>
  <span>Miller exhales slowly, stepping back from the quarry map.</span>
<</if>>`,architectureNodes:[{label:`Triad Choice Node`,sub:`Accept / Reject / Deflect`},{label:`State Mutator`,sub:`$agitation & $millerTrust`},{label:`Foldback Spine`,sub:`Anti-Explosion Convergence`},{label:`Dynamic Prose DOM`,sub:`Runtime Text & Audio Shift`}]},{id:`waiwwai`,category:`narrative`,title:`WAIWWAI: The Turnpike Echoes`,tagline:`2.5D Dementia Narrative & Physicalised Memory Dialogue System`,discipline:`Narrative Design & Interactive Project Bible`,engine:`Unreal Engine 5 Concept / HTML5 Project Bible`,dates:`Jan 2025 - May 2025`,studio:`Solo Narrative & Systems Designer`,image:`/images/waiwwai_cover.jpg`,gallery:[`/images/waiwwai_cover.jpg`],videoPreview:null,links:{github:`https://github.com/JoshUEL2/WaiWWai-Marketing-Website`,itch:null,demo:null,gdd:`/docs/WAIWWAI_Game_Design_Document.docx`},marketingSite:{repoSlug:`waiwwai`,title:`WAIWWAI | Interactive Project Bible & Memory Erosion Visualiser`,path:`/marketing/waiwwai/index.html`,repoUrl:`https://github.com/JoshUEL2/WaiWWai-Marketing-Website`,liveUrl:`https://joshuel2.github.io/WaiWWai-Marketing-Website/`,description:`Full interactive Project Bible for 'Where am I, Wait, Where am I: The Turnpike Echoes', featuring an interactive memory-clarity simulator, character portraits, and audio/visual degradation charts.`},shortDesc:`Set on a desolate 1998 London Underground platform at Turnpike Lane, WAIWWAI translates the cognitive erosion of dementia into a physicalised 'Catch-and-Throw' dialogue mechanic.`,summary:`Follows 81-year-old Arthur waiting on a Piccadilly Line platform that slowly untethers from time. Instead of static dialogue trees, spoken words drift across the screen as physical fragments that dissolve into liquid ink unless the player catches and anchors them before the next train roar.`,highlights:[`Designed a diegetic 'Catch-and-Throw' dialogue system where memory fragments physically drift, blur, and dissolve as cognitive fatigue increases.`,`Grounded the setting in authentic London Underground spatial architecture (Turnpike Lane tilework, dot-matrix departure boards, and distorted Piccadilly Line announcements).`,`Built the 650-line interactive WAIWWAI Project Bible web application with a live memory-degradation simulator and Chart.js sensory curves.`,`Included the complete WAIWWAI Game Design Document.`],technicalDeepDive:`Traditional RPG dialogue menus give players infinite time to read clean text, which contradicts the lived disorientation of dementia. In WAIWWAI's dialogue architecture, each spoken phrase spawns with a decay timer and a Perlin drift vector; if the player's cursor fails to anchor the keyword before clarity drops below threshold, the characters inside the string scramble into phonetic echoes.`,codeSnippet:`// WAIWWAI Memory Fragment Decay & Phonetic Erosion Controller
function updateMemoryFragment(fragment, deltaSeconds, clarityIndex) {
    fragment.lifetime -= deltaSeconds * (2.0 - clarityIndex);
    fragment.x += Math.sin(fragment.lifetime * 1.7) * fragment.driftSpeed;

    if (clarityIndex < 0.45) {
        // Erode characters into phonetic ellipses as memory untethers
        fragment.displayText = fragment.rawText
            .split('')
            .map(ch => (Math.random() > clarityIndex * 1.6 && ch !== ' ') ? '·' : ch)
            .join('');
    }
    return fragment.lifetime > 0;
}`,architectureNodes:[{label:`NPCDialogue Utterance`,sub:`Spawn Drifting Keyword Node`},{label:`Clarity Index (0..1)`,sub:`Decay Rate & Perlin Drift`},{label:`Catch & Anchor Input`,sub:`Player Focus Tether`},{label:`Phonetic Erosion`,sub:`Glyph Dissolve on Timeout`}]},{id:`dear-hiring-manager`,category:`gameplay`,title:`Dear, Hiring Manager`,tagline:`Satirical Cyberpunk Corporate Life-Simulator & Mobile Systems Game`,discipline:`Lead Game Designer & Systems Programmer`,engine:`Unity 6 (6000.5.4f1) & UI Toolkit`,dates:`Oct 2025 - Oct 2026`,studio:`24-Hour Studios (Solo Project)`,image:`/images/dear_hiring_manager.jpg`,gallery:[`/images/dear_hiring_manager.jpg`],videoPreview:null,links:{github:`https://github.com/JoshUEL2/DearHiringManager`,itch:`https://joshej.itch.io/dear-hiring-manager`,demo:`https://github.com/JoshUEL2/DearHiringManager/releases/latest`,gdd:`/docs/Dear_Hiring_Manager_Screenplay.docx`},shortDesc:`A complete portrait mobile corporate life-simulator built in Unity 6 UI Toolkit, turning dystopian tech recruitment, debt traps, and the corporate ladder into a high-stakes economy.`,summary:`Built as a full portrait mobile title in Unity 6 using modern UI Toolkit (UIElements). The player starts in the Slums with $0, scrubbing dishes and dodging debt collectors, while balancing stress, education bootcamps, underground side hustles, and 20+ interactive minigames to climb from entry-level peon to Fortune 500 CEO.`,highlights:[`Architected 81+ procedural job task configurations and 20+ custom interactive minigames (Timing Rings, Falling Sorters, Agile Scrums, Grid Steer, Ledger Bookkeeping, Code Reviews).`,`Engineered a multi-layered economic simulation featuring compounding rent inflation, randomized market news events, underground side hustles, and fatal burnout/cardiovascular stress thresholds.`,`Designed a responsive UI Toolkit architecture utilizing safe-area insets, dynamic theme swaps (Dark, Light, Obsidian-Crimson), and scalable vector layouts for diverse mobile screen ratios.`,`Implemented a comprehensive adaptive audio manager with Lo-Fi BGM playlisting, contextual ambient murmurs, and hundreds of tactile mechanical SFX.`,`Authored a unified PowerShell and Unity batchmode deployment pipeline publishing Android APK builds directly to GitHub Releases and Itch.io.`],technicalDeepDive:`Built upon an extensible IWeeklySystem architecture: at each turn advance (+ Week), the game executes synchronized lifecycle passes across FinancialSystem, JobSystem, EducationSystem, and DistrictSystem. Mini-games leverage reactive pointer-down input and UI Toolkit Painter2D canvas rendering with sub-pixel collision math.`,codeSnippet:`// Unified Weekly Turn Lifecycle & Economic Resolution Pass
public void AdvanceWeek()
{
    currentWeek++;
    
    // Execute registered lifecycle passes in deterministic priority order
    foreach (var system in weeklySystems)
    {
        system.ProcessWeeklyTurn(currentData);
    }
    
    // Evaluate stress thresholds and compound inflation
    financialSystem.CompoundInflation(currentData);
    if (currentData.stress >= 1.0f)
    {
        EvaluateBurnoutRisk(currentData);
    }
    
    EventManager.Instance?.TriggerEvent(new WeekAdvancedEvent(currentWeek));
}`,architectureNodes:[{label:`Turn Engine Clock`,sub:`IWeeklySystem Lifecycle Pass`},{label:`12-Tier Career Matrix`,sub:`Education & Shift Verification`},{label:`20+ Minigame Framework`,sub:`Pointer-Capture Responsive UI`},{label:`Adaptive Audio Engine`,sub:`BGM Queues & Context Ambience`}]},{id:`far-cry-5-dlc`,category:`narrative`,title:`Far Cry 5 DLC: 'Faith Over Fear'`,tagline:`AAA Narrative Expansion Screenplay & Mocap Direction`,discipline:`AAA Narrative & Environmental Storytelling`,engine:`Screenplay & World Design Bible`,dates:`Oct 2024 - Jan 2025`,studio:`Solo Narrative Designer`,image:`/images/far_cry_5.jpg`,gallery:[`/images/far_cry_5.jpg`],videoPreview:null,links:{github:`https://github.com/JoshUEL2`,itch:null,demo:null,gdd:`/docs/Faith_Over_Fear_Screenplay.docx`},shortDesc:`A feature-length DLC concept and mocap screenplay set in post-collapse Hope County, blending environmental indexical storytelling with unreliable hallucination sequences.`,summary:`Explores survivor guilt and cult indoctrination in the aftermath of Far Cry 5. Written for full performance-capture staging, pairing spoken dialogue with spatial blocking, camera lens cues, and seamless gameplay transitions.`,highlights:[`Authored a full mocap-ready screenplay complete with camera blocking, actor posture notes, and combat-to-cutscene transitions.`,`Designed environmental 'indexical storytelling' loops where burned bunker props and radio static shift subtly when the player isn't looking.`,`Structured Bliss hallucination sequences that swap enemy silhouettes with civilian allies to create genuine trigger hesitation.`,`Downloadable in full as an industry-formatted screenplay and design dossier.`],technicalDeepDive:`Instead of cutting away to pre-rendered cinematics, every narrative beat is staged as an in-engine walk-and-talk or interactive hallucination transition that preserves first-person camera continuity.`,codeSnippet:`// Unreliable Bliss Hallucination Silhouette Swap Trigger
void ABlissHallucinationDirector::EvaluateTargetPerception(AActor*ObservedActor, float PlayerBlissExposure)
{
    if (PlayerBlissExposure < HallucinationThreshold) return;

    // When player peripheral angle exceeds 35 deg, swap hostile mesh for ally silhouette
    const float ViewAngle = CalculateAngleFromCameraCentre(ObservedActor->GetActorLocation());
    if (ViewAngle > 35.0f && !ObservedActor->WasRecentlyRendered(0.05f))
    {
        SwapSkeletalVisualProfile(ObservedActor, EVisualProfile::AmbiguousCivilian);
    }
}`,architectureNodes:[{label:`Bliss Exposure Meter`,sub:`Threshold > 0.65`},{label:`Peripheral Frustum`,sub:`View Angle > 35°`},{label:`Silhouette Swap`,sub:`Hostile <-> Civilian Mesh`},{label:`Trigger Hesitation`,sub:`Diegetic Moral Consequence`}]}],ap={badge:`02 // Academic Research & Provisional BSc Dissertation`,title:`Counting the Spectrum: Mixed-Race Representation in Commercial Video Games`,subtitle:`An Empirical and Practice-Based Investigation into Scarcity, Racial Ambiguity, and Playable Lead Agency`,status:`Final Year BSc Research Project (Level 6) • University of East London`,abstract:`Recent demographic studies such as the Virtual Census 2.0 (Jones et al., 2025) report that biracial video game characters rose from 1.39% in 2005 to 3.15% in 2017. However, surface headcounts mask a major representational gap: commercial games routinely code characters through vague visual ambiguity (a tan skin tone or textured hair) rather than explicit narrative canon, which leads players to default to assuming whiteness or racial neutrality (Dietrich, 2013). Furthermore, while mixed-race youth make up 5% to 10% of the UK urban population and over 15% of the US youth demographic, canonically mixed characters are virtually absent as primary playable box-art leads outside isolated figures like Miles Morales. My research combines a 100-character commercial audit, a production-ready 3D Flagship Protagonist Dossier, and an empirical A/B player validation survey to establish an actionable character pipeline for studios.`,downloadProposal:`/docs/Counting_the_Spectrum_Research_Proposal.docx`,downloadSlides:`/docs/Counting_the_Spectrum_Slides.pptx`,slides:[{src:`/images/dissertation_slide_1.png`,caption:`Slide 1: Research Title & Problem Space (Counting the Spectrum)`},{src:`/images/dissertation_slide_2.png`,caption:`Slide 2: Core Element 1: The Three Hypotheses (The Illusion of Parity)`},{src:`/images/dissertation_slide_3.png`,caption:`Slide 3: Core Element 2: Closed-Loop 3-Phase Methodology`},{src:`/images/dissertation_slide_4.png`,caption:`Slide 4: Core Element 3: Studio Pipelines & Societal Impact`},{src:`/images/dissertation_slide_5.png`,caption:`Slide 5: Demographic Benchmarks (Virtual Census vs UK/US Youth Census)`},{src:`/images/dissertation_slide_6.png`,caption:`Slide 6: Peer-Reviewed Academic Literature Foundation`}],hypotheses:[{number:`01`,title:`Explicit Canon vs Visual Ambiguity`,stat:`3.15% vs <0.5%`,summary:`Published audits code characters based on surface visual cues and paratext. Without explicit dual-heritage narrative canon, sociological research (Dietrich, 2013) proves players default to assuming whiteness or raceless neutrality. I hypothesise that explicitly confirmed mixed-race characters appear at a fraction of ambiguously coded avatars.`},{number:`02`,title:`Playable Agency & The Box-Art Deficit`,stat:`<1% Box-Art Leads`,summary:`Even when mixed characters appear in background rosters, over 75% of primary playable leads remain white. Outside of Miles Morales (Marvel's Spider-Man), playable box-art multiracial protagonists are virtually non-existent, relegating mixed identities to secondary NPCs or narrative devices (Phillips, 2022).`},{number:`03`,title:`The Youth Gamer Demographic Gap`,stat:`10% to 15% Youth Audience`,summary:`National census averages (2.9% UK; 10.2% US) include older non-gaming generations and obscure the actual gaming audience. Among under-18s and urban hubs like London, multiracial identification exceeds 5% to 10% in the UK and 15% in the US, revealing a 5× to 10× representation deficit.`}],methodology:[{phase:`Phase 1: Objective 100-Character Commercial Audit`,badge:`Quantitative Content Analysis`,details:`To eliminate subjective cherry-picking, I audit an objective sample drawn from official UKIE/GfK (UK) and Circana (US) annual best-selling charts (2018 to 2024). Using a reproducible formula (the Primary Playable Protagonist plus the Top 4 Credited Cast across 20 commercial titles = 100 characters), each character is coded across Explicit Canon, Implied Ambiguity, and Box-Art Playable Agency, with a 20% subsample independently cross-coded to verify inter-coder reliability via Cohen's kappa (κ ≥ 0.80).`},{phase:`Phase 2: Practice-as-Research Flagship Protagonist Dossier`,badge:`3D Technical Art & Narrative Pipeline`,details:`Synthesising the audit findings into a tangible studio solution, I design one deep, production-ready Flagship Multiracial Protagonist Dossier. This combines a Dual-Heritage Narrative Lore Brief (documented family lineage and lived cultural traditions) with 3D Technical Art Specifications (non-Eurocentric facial mesh topology, calibrated 3C/4A curl and braided hair groom guides, and calibrated melanin subsurface scattering profiles in Unreal Engine 5).`},{phase:`Phase 3: Empirical A/B Player Validation Survey`,badge:`Pre-Test / Post-Test Intervention`,details:`To scientifically validate the design rather than leaving it untested, I run an anonymous, GDPR-compliant online survey of 30 to 50 self-identified mixed-race gamers. Using an A/B intervention structure based on Passmore et al. (2018) immersion scales, participants rate a baseline ambiguous commercial avatar against the Flagship Dossier (first visually, then with explicit dual-heritage lore revealed) to measure whether canonical lineage and calibrated 3D features significantly increase felt representation and player immersion.`}],references:[`Dietrich, D.R. (2013) 'Avatars of whiteness: racial expression in video game characters', Sociological Inquiry, 83(1), pp. 82-105.`,`Jones, S.S.Y., Harrisson, A., Pedraça, S., Marchessault-Brown, J., Williams, D. and Consalvo, M. (2025) 'The virtual census 2.0: a continued investigation on the representations of gender, race, and age in videogames', New Media & Society.`,`Office for National Statistics (2022) Ethnic group, England and Wales: Census 2021.`,`Passmore, C.J., Birk, M.V. and Mandryk, R.L. (2018) 'The privilege of immersion: racial and ethnic experiences, perceptions, and beliefs in digital gaming', Proceedings of CHI '18. ACM, pp. 1-12.`,`Phillips, A. (2022) 'Fixing the past: memory tourism, multiraciality, and white innocence in video games', ROMchip: A Journal of Game Histories, 4(1).`,`Williams, D., Martins, N., Consalvo, M. and Ivory, J.D. (2009) 'The virtual census: representations of gender, race and age in video games', New Media & Society, 11(5), pp. 815-834.`]},op=[{name:`Gameplay Prototyping (Rastacats)`,mark:`92%`,grade:`1st Class`},{name:`Professional Practice & Portfolio`,mark:`87%`,grade:`1st Class`},{name:`Fundamentals of Programming (PyBall)`,mark:`78%`,grade:`1st Class`},{name:`Storytelling for Games (The Quarry & Faith Over Fear)`,mark:`78%`,grade:`1st Class`},{name:`Game Studio (Delirium VR)`,mark:`78%`,grade:`1st Class`},{name:`Level Design (LabR@z)`,mark:`72%`,grade:`1st Class`},{name:`Game Prototyping (Daydream Believer)`,mark:`72%`,grade:`1st Class`},{name:`Visual & Theoretical Studies`,mark:`72%`,grade:`1st Class`}],sp=[{id:`project-kinetic`,tag:`BENCH LOG 01 // DIY MOTION CAPTURE`,title:`Project K.I.N.E.T.I.C. - Under-£100 MetaHuman Mocap Rig`,subtitle:`Xbox One Kinect v2 Depth Camera + PSVR Move Gyroscopes + Python OSC + UE5 LiveLink`,image:`/images/project_frame.jpg`,problem:`I needed full-body motion capture to drive Unreal Engine 5 MetaHumans for cutscene blocking, but commercial optical or inertial mocap suits cost between £2,500 and £10,000+.`,tinkeringSolution:`Instead of settling for stock animations, I dug out an old Xbox One Kinect v2 infrared time-of-flight camera and two PlayStation VR Move controllers. Single-camera Kinect skeletal tracking loses wrist rotation and flips bones whenever you turn 180 degrees, so I strapped PSVR Move controllers to my extremities for continuous gyroscope quaternions and wrote a custom Python OSC bridge that fuses both sensor streams into UE5 LiveLink at 30 FPS.`,proofPoints:[`Fused infrared depth point-clouds (Brekel Body v2) with PSVR Move IMU gyroscope orientation over UDP/OSC sockets.`,`Solved single-camera 180-degree occlusion and wrist-twist gimbal lock using weighted quaternion filtering in Python.`,`Streamed live retargeted skeletal transforms directly onto Unreal Engine 5 MetaHuman control rigs in real time.`],pipeline:[`Kinect v2 IR Depth`,`PSVR Move IMU Gyros`,`Python OSC Fusion Bridge`,`UE5 LiveLink MetaHuman`],links:{github:`https://github.com/JoshUEL2`}},{id:`signalrgb-hid`,tag:`BENCH LOG 02 // USB HID PACKET SNIFFING`,title:`Wireshark USB Reverse-Engineering & SignalRGB Plugins`,subtitle:`Wireshark USBPcap + Raw 64-Byte Hex Protocol Decoding + JavaScript HID Drivers`,image:`/images/vr_showcase.jpg`,problem:`When I built my custom dual-radiator watercooled PC, my Gigabyte Aorus P1200W PSU LCD and RGB controllers required bloated vendor apps that clashed in the background and had zero support in SignalRGB.`,tinkeringSolution:`I hooked Wireshark and USBPcap directly onto the raw USB root hub, captured the proprietary 64-byte HID interrupt transfers while toggling modes in the official Gigabyte software, and mapped out the hexadecimal command headers, RGB register offsets, and checksum bytes by hand to write my own open-source SignalRGB device plugin.`,proofPoints:[`Isolated vendor ID (VID) and product ID (PID) endpoints using Wireshark USBPcap packet captures.`,`Decoded undocumented 64-byte hexadecimal payload structures, brightness scalars, and frame-sync handshakes.`,`Published an open-source JavaScript USB HID plugin allowing SignalRGB to drive the hardware natively without Gigabyte bloatware.`],pipeline:[`Wireshark USBPcap`,`Hex Payload Diffing`,`USB HID Endpoint Map`,`SignalRGB JS Driver`],links:{github:`https://github.com/JoshUEL2/SignalRGB-Aorus-P1200W-Plugin`}},{id:`hydroscreen-xc7`,tag:`BENCH LOG 03 // CUSTOM C# HARDWARE DAEMON`,title:`HydroScreen XC7 - Custom Waterblock LCD Driver`,subtitle:`C# / .NET + Direct USB HID Telemetry + Custom Loop Thermal Control`,image:`/images/project_tower_02.jpg`,problem:`Corsair's official iCUE suite consumed hundreds of megabytes of RAM and constant CPU interrupts just to render coolant temperatures on my XC7 RGB ELITE CPU waterblock LCD.`,tinkeringSolution:`I wrote a lightweight standalone C# / .NET driver (HydroScreen-XC7) that talks directly to the waterblock's USB HID display controller, polling loop coolant and CPU package sensors and pushing custom telemetry frames to the circular LCD screen with near-zero background CPU overhead.`,proofPoints:[`Replaced heavy vendor background services with a lean C#/.NET direct-HID driver for the Corsair XC7 RGB ELITE LCD.`,`Paired with a custom-built shared watercooling loop cooling a Ryzen 9 5950X and waterblocked RTX 4070.`,`Tuned radiator fan curves directly against inline water-temperature thermistors rather than spiky CPU die temps.`],pipeline:[`Hardware Sensor Poll`,`C# .NET Frame Buffer`,`Direct USB HID Write`,`XC7 Waterblock LCD`],links:{github:`https://github.com/JoshUEL2/HydroScreen-XC7-Compatiability`}},{id:`tfl-and-realspeak`,tag:`BENCH LOG 04 // ALGORITHMIC TOOLS & AI PIPELINES`,title:`TfL Underground Graph Router & Project Realspeak`,subtitle:`Dijkstra Tube Pathfinding + Oyster CSV Parser + Early-2023 UE5 AI NPC Lip-Sync`,image:`/images/tfl_planner.jpg`,problem:`Whether I want to audit my own London Underground Oyster card spending or test conversational AI NPCs inside Unreal Engine 5 before commercial plugins existed, if a tool does not exist, I build it from scratch.`,tinkeringSolution:`For transit routing, I modelled the London Underground network as a weighted graph in JavaScript (incorporating line-change walking penalties) and built a client-side Oyster CSV parser that visualises journey history on an interactive Leaflet GIS map. Back in early 2023, I also built Project Realspeak, wiring OpenAI speech-to-text and TTS into UE5 MetaHuman facial visemes for real-time unscripted NPC dialogue.`,proofPoints:[`Implemented weighted Dijkstra / A* graph traversal across London Underground stations with live interchange penalties.`,`Built a zero-server Oyster CSV parser that reconstructs commuter routes and fare totals directly in the browser.`,`Engineered Project Realspeak in early 2023, connecting microphone speech-to-text, LLM character prompts, and MetaHuman lip-sync in UE5.`],pipeline:[`Oyster CSV / Mic Input`,`Weighted Graph / LLM`,`Leaflet GIS / Visemes`,`Live Web & UE5 Tools`],links:{github:`https://github.com/JoshUEL2/TFL-Planner`,demo:`https://joshuel2.github.io/TFL-Planner/`}}],cp=[{id:`theatre-acting`,theme:`theatre`,category:`PERFORMING ARTS & MOCAP DIRECTION`,title:`5+ Years Musical Theatre & Screen Acting`,subtitle:`Lead Actor in Les Misérables & The Addams Family • Supporting Actor in 'Dead Weight' (2026)`,badge:`Click to Open Stage Curtain`,shortSummary:`Performed in front of 100+ cast and audience members as Lead Actor in Les Misérables and The Addams Family, plus physical horror acting in the 2026 short film Dead Weight.`,whyItMattersForGames:`My years on stage and film sets directly inform how I direct motion-capture sessions, write dialogue subtext (such as my Far Cry 5 'Faith Over Fear' screenplay), and block character body language inside Unreal Engine 5.`,story:`Stepping onto stage as a lead actor in Les Misérables and The Addams Family meant singing solo numbers, choreographing duets, and holding the attention of a packed auditorium alongside a 100-person cast and crew. More recently in March 2026, I performed as a featured supporting actor in the gritty psychological crime/horror short film 'Dead Weight', doing my own physical stunt falls and SFX prosthetic work. When I write game dialogue or block a camera in Unreal Engine, I do not think in static text boxes - I think in stage blocking, eye-lines, breathing pauses, and physical subtext.`,highlights:[`Lead Actor in Les Misérables & The Addams Family: performed solo vocal numbers, choreographed duets, and coordinated costume transitions.`,`Supporting Actor in 'Dead Weight' (Mar 2026): physical horror/crime film performance with practical special-effects makeup.`,`Directly translates into AAA mocap volume blocking, voice-acting direction, and believable character animation.`],images:[{src:`/images/dossier/lead_actor_les_miserables_lead_actor___les_miserabl_asset_01.jpg`,caption:`Performing live on stage in Les Misérables`},{src:`/images/dossier/lead_actor_les_miserables_lead_actor___les_miserabl_asset_02.jpg`,caption:`Full cast stage scene in Les Misérables`},{src:`/images/dossier/lead_actor_the_addams_family_lead_actor___the_addams_f_asset_01.jpg`,caption:`Lead role in The Addams Family production`},{src:`/images/dossier/dead_weight_supporting_actor_image_01.jpg`,caption:`On set for the psychological thriller short film 'Dead Weight' (2026)`}]},{id:`uel-school-rep`,theme:`governance`,category:`ACADEMIC LEADERSHIP & GOVERNANCE`,title:`UEL School Representative & Sextennial Review Panellist`,subtitle:`Elected School Representative (Architecture, Computing & Engineering) • Curriculum Review Board`,badge:`Click to Inspect Role`,shortSummary:`Elected School Representative for BSc Computer Games Design for two consecutive years (unanimously voted in), navigating the cohort through an unprecedented departmental course merger and serving as invited Student Panellist on the university's Sextennial School Review.`,whyItMattersForGames:`Game development is fundamentally cross-disciplinary and high-friction: whether communicating between engineering, art, and production, or advocating for cohort hardware resources with university executives, my representative work proves I can de-escalate crisis, structure feedback data, and negotiate directly with leadership.`,story:`As the elected School Representative for the School of Architecture, Computing & Engineering at the University of East London, I serve as the direct communication conduit between students, senior academics, and faculty deans. My tenure coincided with an unprecedented structural course merger across the games cluster, which initially triggered severe anxiety, confusion, and misinformation among students. Recognising the distress this caused, I immediately established a direct line with our cluster lead to obtain concrete facts, de-escalated rumours, and held regular cohort briefings. In April 2025, I was appointed by senior leadership to sit on the formal Sextennial School Review panel, working alongside external examiners and department heads to critically evaluate curriculum architecture, studio teaching standards, and student satisfaction.`,governancePillars:[{title:`Elected Representative 2 Years Running`,detail:`Unanimously voted in as Course Representative for BSc Computer Games Design two years in a row, building trusted relationships with students, lecturers, and student union officers.`},{title:`Navigating the Games Cluster Course Merger`,detail:`Proactively bridged the information gap during a historic departmental restructuring. Tracked student concerns, squashed fearmongering, and worked directly with the cluster lead to safeguard module resources for the final graduating cohort.`},{title:`Sextennial School Review Board (April 2025)`,detail:`Selected as student panellist for the once-in-six-years formal review of the Media and Computing school, collaborating with external examiners and university leadership to evaluate curriculum standards.`},{title:`Systematic Issue & Hardware Tracking`,detail:`Maintained formal issue tracking registers (e.g. GPU driver incompatibilities, VR headset provisioning, studio room allocations) and presented evidence-based solutions at termly board meetings.`},{title:`Hall Representative & Residential Ambassador`,detail:`Elected UEL Hall Representative (Longbridge House) and Residential Life Ambassador, supporting student mental health, accommodation standards, and university-wide sustainability initiatives.`}],highlights:[`Unanimously elected Course Representative for BSc Computer Games Design two consecutive years.`,`Successfully stabilised and advocated for the cohort through the historic games cluster course merger.`,`Invited Student Panellist on the formal Sextennial School Review alongside external university examiners.`,`Maintained data-driven course feedback and hardware tracking logs presented at faculty board level.`,`Served as UEL Hall Representative and Residential Life Ambassador across student accommodation.`],images:[]},{id:`podcast-studio-founder`,theme:`studio`,category:`AUDIO ENGINEERING & BROADCAST PRODUCTION`,title:`School Podcast Studio Founder, Director & Host`,subtitle:`Converted Bare Storage Room into Multi-Mic Broadcast Studio • Weekly Producer & Editor`,badge:`Click to Tour Studio`,shortSummary:`Handpicked to build Ousedale Sixth Form's first broadcast podcast studio from an empty storage cupboard, wiring the audio hardware and serving as Director, Host, Technician, and Editor.`,whyItMattersForGames:`Building a physical recording studio from scratch taught me microphone staging, acoustic treatment, multi-track mixing, and voiceover direction that I now use for game audio and dialogue.`,story:`When my Sixth Form wanted to launch its first official broadcast podcast, I was entrusted with a budget and a bare storage cupboard. I researched acoustic foam treatment, dynamic microphones, boom arms, and multi-channel audio interfaces, cleared and wired the entire studio myself, and established the weekly production pipeline. Throughout the academic year, I served simultaneously as Director, Host, Sound Technician, and Post-Production Editor.`,highlights:[`Designed and wired a complete multi-microphone broadcast studio from an empty school storage room.`,`Managed acoustic treatment, gain staging, multi-track recording, and weekly post-production mastering.`,`Directed and hosted weekly episodes with staff and student guests, building a repeatable production workflow.`],images:[{src:`/images/dossier/director_host_technician_editor_and_founder_of_school_podcast_director__host__technicia_asset_01.jpg`,caption:`Converting a bare storage room into a fully wired broadcast podcast studio`},{src:`/images/dossier/director_host_technician_editor_and_founder_of_school_podcast_director__host__technicia_asset_02.jpg`,caption:`Multi-track audio mixer, microphone routing, and recording desk`},{src:`/images/dossier/director_host_technician_editor_and_founder_of_school_podcast_director__host__technicia_asset_03.jpg`,caption:`Studio microphone staging and acoustic setup`},{src:`/images/dossier/director_host_technician_editor_and_founder_of_school_podcast_director__host__technicia_asset_04.jpg`,caption:`Live recording session and broadcast hardware setup`}]},{id:`yearbook-sole-editor`,theme:`editorial`,category:`PUBLICATION DESIGN & CREATIVE DIRECTION`,title:`Yearbook Sole Editor & Lead Graphic Designer`,subtitle:`150+ Cover Iterations • 200-Portrait Front Cover Mosaic • Full Custom Page Layouts`,badge:`Click to View Spreads`,shortSummary:`Took solo ownership of our entire school yearbook from the ground up, designing all custom backgrounds, formatting every page, and iterating through 150+ front cover variations.`,whyItMattersForGames:`Directly sharpens UI/UX layout discipline, visual hierarchy, typography, and asset pipeline organisation across hundreds of high-resolution textures and print deadlines.`,story:`As the Sole Editor for my school's yearbook, I took complete end-to-end ownership of both creative direction and technical print execution. I designed all custom page backgrounds from scratch, standardised typography and grid alignment across every section, and manually cut out, sharpened, and colour-balanced portraits. For the front and back cover alone, I iterated through over 150 distinct design variations before engineering a precision mosaic aligning more than 200 individual student photographs.`,highlights:[`Sole Editor with final creative and technical sign-off across the entire print publication.`,`Developed over 150 front-cover iterations, culminating in a precision mosaic of 200+ aligned portraits.`,`Created all custom graphic backgrounds, badge depth effects, and grid layouts from scratch.`],images:[{src:`/images/dossier/yearbook_sole_editor_yearbook_sole_editor_asset_12.jpg`,caption:`Final Front & Back Cover Revision (150+ iterations & 200+ aligned student portraits)`},{src:`/images/dossier/yearbook_sole_editor_yearbook_sole_editor_asset_01.jpg`,caption:`Mid-project custom page typography and grid layout`},{src:`/images/dossier/yearbook_sole_editor_yearbook_sole_editor_asset_02.jpg`,caption:`Final custom graphic background artwork designed from scratch`},{src:`/images/dossier/yearbook_sole_editor_yearbook_sole_editor_asset_03.jpg`,caption:`Double-page spread alignment and portrait framing`},{src:`/images/dossier/yearbook_sole_editor_yearbook_sole_editor_asset_04.jpg`,caption:`Initial structural layout and colour experimentation`}]},{id:`cyber-harvard`,theme:`cyber`,category:`DEFENSIVE SECURITY & CS FOUNDATIONS`,title:`CyberCenturion UK Top 60 Finalist & Harvard CS50x / PCAP`,subtitle:`National Defensive Cybersecurity Finalist • Certified in C, Python, SQL & Security`,badge:`Click to Open Security Log`,shortSummary:`Placed in the Top 60 nationwide in the CyberCenturion UK defensive security competition, alongside completing Harvard CS50x and Python Institute PCAP certifications.`,whyItMattersForGames:`Gives me a rigorous systems-engineering foundation: memory management in C, algorithmic complexity in Python, and hardening networked servers against live exploits.`,story:`Before specialising in Unreal Engine 5, I competed in the national CyberCenturion cybersecurity competition (2022-2024), working under timed pressure to audit permissions, strip out backdoors, patch kernel vulnerabilities, and harden Linux and Windows virtual machines against a live scoring engine - finishing in the Top 60 teams in the UK. I paired that practical systems mindset with Harvard University's CS50x certificate and the Python Institute's PCAP (Certified Associate in Python Programming) credential.`,highlights:[`Top 60 UK National Finalist in CyberCenturion defensive cybersecurity (Linux & Windows system hardening).`,`Harvard University CS50x certified (C pointers, memory allocation, data structures, SQL, and web architecture).`,`Python Institute PCAP certified (object-oriented architecture, exceptions, and algorithmic problem-solving).`],images:[{src:`/images/dossier/cybercenturion_team_member_cybercenturion_team_membe_asset_01.jpg`,caption:`Competing in the CyberCenturion UK national defensive security rounds`},{src:`/images/dossier/cybercenturion_team_member_cybercenturion_team_membe_asset_02.jpg`,caption:`Live virtual machine hardening and vulnerability patching`},{src:`/images/dossier/cybercenturion_team_member_cybercenturion_team_membe_asset_03.jpg`,caption:`CyberCenturion team workstation setup`},{src:`/images/dossier/cybercenturion_team_member_cybercenturion_team_membe_asset_04.jpg`,caption:`National competition scoring and forensics terminal`}]},{id:`vex-robotics`,theme:`robotics`,category:`COMPETITIVE ROBOTICS & MECHATRONICS`,title:`VEX Robotics UK National Finalist (Founding Member)`,subtitle:`Mechanical Drivetrain Engineering, Sensor Wiring & Autonomous C++ Routines`,badge:`Click to Inspect Robot Rig`,shortSummary:`Founding member of our Sixth Form VEX Robotics squad, designing, gearing, wiring, and programming competitive robots from scratch to reach the UK National Finals.`,whyItMattersForGames:`Building physical robots that have to survive real-world friction, gear backlash, and sensor noise taught me how to write resilient physics and state-machine code in game engines.`,story:`As a founding member of our VEX Robotics team (2023-2024), I worked across the full mechatronics loop: CAD prototyping aluminium chassis drivetrains, crimping motor and optical sensor harnesses, calculating torque-to-speed gear ratios, and writing autonomous + driver-control routines. When a mechanism jammed mid-match, we had minutes in the pit lane to diagnose whether it was a mechanical tolerance issue or a software state bug.`,highlights:[`Co-founded the school's competitive VEX V5 Robotics squad and qualified for the UK National Finals.`,`Engineered high-torque drivetrains, pneumatic/mechanical intakes, and autonomous sensor routines.`,`Bridges physical mechanical engineering directly with virtual rigid-body physics in Unreal Engine 5.`],images:[{src:`/images/dossier/vex_robotics_team_member_vex_robotics_team_member_asset_01.jpg`,caption:`Our VEX V5 competition robot on the match field`},{src:`/images/dossier/vex_robotics_team_member_vex_robotics_team_member_asset_02.jpg`,caption:`Chassis drivetrain assembly and motor wiring`},{src:`/images/dossier/vex_robotics_team_member_vex_robotics_team_member_asset_03.jpg`,caption:`Pit-lane debugging and autonomous testing`},{src:`/images/dossier/vex_robotics_team_member_vex_robotics_team_member_asset_04.jpg`,caption:`VEX Robotics competition arena`}]}],lp=[{id:`ace-2026-main-hall`,event:`UEL Annual ACE Showcase 2026`,location:`Royal Docks Centre for Sustainability (Downstairs Main Hall)`,highlight:`Rastacats • Sole Level 5 Project Selected for Final-Year Hall`,src:`/images/dossier/ace_showcase_2026_image_01.jpg`,caption:`Rastacats exhibited downstairs in the main Final-Year (Level 6) exhibition hall at the Royal Docks Centre for Sustainability as the only Year 2 project selected by faculty.`},{id:`ace-2026-vr-suite`,event:`UEL Annual ACE Showcase 2026`,location:`Royal Docks Centre for Sustainability (Upstairs VR Suite)`,highlight:`Delirium VR • Sole Playable VR Project on Level 5 Floor`,src:`/images/dossier/ace_showcase_2026_image_02.jpg`,caption:`Took full operational ownership of configuring tracking bounds, eliminating frame latency, and running live public playtests for our OpenXR VR horror game.`},{id:`summer-demo-series-01`,event:`RDSC Summer VR Showcase Series (Sessions 1–4)`,location:`Dedicated OpenXR VR Suite (Royal Docks)`,highlight:`Summer Faculty Demonstrations & Grading Sessions with Patrick Quinnell`,src:`/images/dossier/personal_project_showcase_2026_image_01.jpg`,caption:`Ran multiple showcase runs over the summer period with module leader Patrick Quinnell, facilitating live VR playtesting and hardware calibration.`},{id:`summer-demo-series-02`,event:`RDSC Summer VR Showcase Series`,location:`Royal Docks Centre for Sustainability`,highlight:`Multi-User Hardware Calibration & Public Walkthroughs`,src:`/images/dossier/personal_project_showcase_2026_image_02.jpg`,caption:`Calibrating dual-station Meta Quest 3 & PCVR rigs to demonstrate spatial audio sanity and two-handed physical interactions.`},{id:`ace-2026-station-03`,event:`UEL Annual ACE Showcase 2026`,location:`Royal Docks Centre for Sustainability`,highlight:`Dual-Floor Public Presentation (Arcade Rig + VR Installation)`,src:`/images/dossier/ace_showcase_2026_image_03.jpg`,caption:`Demonstrating custom 360-degree polar spline gravity and GPU material shaders live to industry visitors.`},{id:`personal-showcase-03`,event:`Personal Project Showcase`,location:`University of East London Games Lab`,highlight:`Hands-On Player Feedback & Telemetry Observation`,src:`/images/dossier/personal_project_showcase_2026_image_03.jpg`,caption:`Observing real-time player telemetry and gathering playtesting feedback across multiple exhibition sessions.`},{id:`ace-2026-station-04`,event:`UEL Annual ACE Showcase 2026`,location:`Royal Docks Exhibition Hall`,highlight:`Academic Peer Review & Industry Delegation Q&A`,src:`/images/dossier/ace_showcase_2026_image_04.jpg`,caption:`Fielding technical questions on Unreal Engine 5 optimisation and state machine architecture with external guests.`},{id:`personal-showcase-04`,event:`Personal Project & VR Showcase`,location:`UEL Docklands Campus`,highlight:`Full Hardware & Controller Kiosk Deployment`,src:`/images/dossier/personal_project_showcase_2026_image_04.jpg`,caption:`Complete exhibition setup featuring high-framerate playable builds and direct developer demonstrations.`}],up=Object.fromEntries(rp.map(e=>[e.id,e.label])),dp=ip.map(e=>({...e,role:e.discipline||`Solo Developer`,categoryLabel:up[e.category]||e.discipline||`Game Development`})),fp=[{id:`all`,label:`All ${dp.length} Projects`,count:dp.length},{id:`gameplay`,label:`Gameplay & Systems`,count:dp.filter(e=>e.category===`gameplay`).length},{id:`vr-physics`,label:`VR & Physics`,count:dp.filter(e=>e.category===`vr-physics`).length},{id:`shaders-art`,label:`Shaders & Tech Art`,count:dp.filter(e=>e.category===`shaders-art`).length},{id:`level-design`,label:`Level Design`,count:dp.filter(e=>e.category===`level-design`).length},{id:`narrative`,label:`Narrative & Scripts`,count:dp.filter(e=>e.category===`narrative`).length},{id:`marketing`,label:`Interactive Companion Websites`,count:dp.filter(e=>!!e.marketingSite).length},{id:`playable`,label:`Playable Builds & Demos`,count:dp.filter(e=>!!(e.links?.itch||e.links?.demo)).length}];function Q(e){return e?/^(https?:|data:|blob:|\/\/)/.test(e)?e:`./${e.replace(/^\/+/,``)}`:``}function pp(e){if(!e||typeof e!=`string`)return!1;let t=e.trim().replace(/\/+$/,``);return t!==`https://github.com/JoshUEL2`&&t!==`http://github.com/JoshUEL2`&&t!==`https://github.com`&&t!==`http://github.com`}function mp(e){if(!e||typeof e!=`string`)return!1;let t=e.trim().replace(/\/+$/,``);return t!==`https://www.linkedin.com/in/joshgamedev`&&t!==`https://linkedin.com/in/joshgamedev`&&t!==`https://www.linkedin.com/in/joshua-johnson-485543351`&&t!==`https://linkedin.com/in/joshua-johnson-485543351`&&t!==`https://www.linkedin.com`&&t!==`https://linkedin.com`}function hp({currentView:e=`featured`,onViewChange:t}){let[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(`home`);(0,_.useEffect)(()=>{let t=!1,n=()=>{t||=(window.requestAnimationFrame(()=>{if(r(window.scrollY>40),e===`featured`)for(let e of[`home`,`portfolio`,`research`,`toolkit`,`about`,`contact`]){let t=document.getElementById(e);if(t){let n=t.getBoundingClientRect();if(n.top<=260&&n.bottom>=260){s(e);break}}}t=!1}),!0)};return window.addEventListener(`scroll`,n,{passive:!0}),()=>window.removeEventListener(`scroll`,n)},[e]);let c=[{id:`portfolio`,label:`FEATURED`},{id:`research`,label:`RESEARCH`},{id:`toolkit`,label:`HARDWARE LAB`},{id:`about`,label:`DOSSIER`},{id:`contact`,label:`CONTACT`}],l=()=>{e!==`featured`&&t&&t(`featured`),window.scrollTo({top:0,behavior:`smooth`})},u=n=>{if(a(!1),e!==`featured`&&t){t(`featured`),setTimeout(()=>{let e=document.getElementById(n);if(e){let t=e.getBoundingClientRect().top+window.pageYOffset+-90;window.scrollTo({top:t,behavior:`smooth`})}},60);return}let r=document.getElementById(n);if(r){let e=r.getBoundingClientRect().top+window.pageYOffset+-90;window.scrollTo({top:e,behavior:`smooth`})}},d=()=>{a(!1),t&&(t(`all-projects`),window.scrollTo({top:0,behavior:`smooth`}))};return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`header`,{className:`fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none`,children:(0,V.jsxs)(U.nav,{initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5,ease:[.16,1,.3,1]},className:`pointer-events-auto flex items-center justify-between w-full max-w-6xl px-4 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-300 ${n?`bg-[#090b16]/90 backdrop-blur-xl border border-indigo-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.6)]`:`bg-[#090b16]/75 backdrop-blur-md border border-white/10 shadow-lg`}`,children:[(0,V.jsxs)(`button`,{onClick:l,className:`flex items-center gap-2.5 text-left group cursor-pointer`,children:[(0,V.jsx)(`div`,{className:`w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform`,children:`JJ`}),(0,V.jsxs)(`div`,{className:`flex flex-col`,children:[(0,V.jsx)(`span`,{className:`font-bold text-sm tracking-tight text-white group-hover:text-indigo-300 transition-colors`,children:`Josh Johnson`}),(0,V.jsxs)(`span`,{className:`flex items-center gap-1.5 text-[10px] text-emerald-400 font-medium`,children:[(0,V.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse`}),`Technical Game Designer`]})]})]}),(0,V.jsxs)(`div`,{className:`hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full p-1`,children:[c.map(t=>{let n=e===`featured`&&o===t.id;return(0,V.jsxs)(`button`,{onClick:()=>u(t.id),className:`relative px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${n?`text-white`:`text-slate-400 hover:text-slate-200`}`,children:[n&&(0,V.jsx)(U.div,{layoutId:`navPill`,transition:{type:`spring`,stiffness:450,damping:30},className:`absolute inset-0 bg-indigo-600/30 border border-indigo-500/40 rounded-full -z-10`}),t.label]},t.id)}),(0,V.jsxs)(`button`,{onClick:d,className:`relative ml-1 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${e===`all-projects`?`bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)]`:`bg-indigo-950/70 hover:bg-indigo-900/70 text-indigo-300 hover:text-white border border-indigo-500/40`}`,children:[(0,V.jsx)(If,{className:`w-3 h-3 text-indigo-300`}),(0,V.jsxs)(`span`,{children:[`ALL GAMES (`,dp.length,`)`]})]})]}),(0,V.jsxs)(`div`,{className:`flex items-center gap-2`,children:[np.cv&&(0,V.jsxs)(`a`,{href:Q(np.cv),target:`_blank`,rel:`noopener noreferrer`,className:`hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.12] text-slate-200 hover:text-white border border-white/10 transition-all hover:scale-105`,title:`View CV (PDF)`,children:[(0,V.jsx)(Hd,{className:`w-3.5 h-3.5 text-indigo-400`}),(0,V.jsx)(`span`,{children:`CV`})]}),(0,V.jsxs)(`a`,{href:np.linkedin,target:`_blank`,rel:`noopener noreferrer`,className:`hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 transition-all hover:scale-105`,children:[(0,V.jsx)(tp,{className:`w-3.5 h-3.5 text-indigo-400`}),(0,V.jsx)(`span`,{children:`LinkedIn`})]}),(0,V.jsx)(`a`,{href:np.github,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`GitHub Profile`,className:`hidden sm:inline-flex p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-all hover:scale-105`,children:(0,V.jsx)(ep,{className:`w-4 h-4`})}),(0,V.jsx)(`a`,{href:np.itch,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Itch.io Games`,className:`hidden sm:inline-flex p-2 rounded-full bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 transition-all hover:scale-105`,children:(0,V.jsx)(Kd,{className:`w-4 h-4 text-rose-400`})}),(0,V.jsx)(`button`,{onClick:()=>a(!i),className:`md:hidden p-2 rounded-full bg-white/[0.05] text-slate-200 hover:text-white cursor-pointer`,"aria-label":`Toggle menu`,children:i?(0,V.jsx)(Zf,{className:`w-5 h-5`}):(0,V.jsx)(pf,{className:`w-5 h-5`})})]})]})}),(0,V.jsx)($c,{children:i&&(0,V.jsx)(U.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:`fixed inset-x-4 top-20 z-40 bg-[#0c0e1a]/95 backdrop-blur-2xl border border-indigo-500/30 rounded-2xl p-5 shadow-2xl md:hidden`,children:(0,V.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[c.map(e=>(0,V.jsxs)(`button`,{onClick:()=>u(e.id),className:`w-full text-left py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wider text-slate-200 hover:bg-white/5 hover:text-white transition-all flex items-center justify-between cursor-pointer`,children:[(0,V.jsx)(`span`,{children:e.label}),(0,V.jsx)(od,{className:`w-3.5 h-3.5 opacity-50`})]},e.id)),(0,V.jsxs)(`button`,{onClick:d,className:`w-full text-left py-3 px-4 rounded-xl text-xs font-bold tracking-wider bg-gradient-to-r from-indigo-600/40 to-violet-600/40 border border-indigo-500/40 text-white transition-all flex items-center justify-between cursor-pointer`,children:[(0,V.jsxs)(`span`,{className:`flex items-center gap-2`,children:[(0,V.jsx)(If,{className:`w-3.5 h-3.5 text-indigo-300`}),`EXPLORE ALL `,dp.length,` PROJECTS`]}),(0,V.jsx)(od,{className:`w-3.5 h-3.5 text-indigo-300`})]}),(0,V.jsxs)(`div`,{className:`pt-4 mt-2 border-t border-white/10 flex flex-wrap items-center justify-around gap-2`,children:[np.cv&&(0,V.jsxs)(`a`,{href:Q(np.cv),target:`_blank`,rel:`noopener noreferrer`,className:`flex items-center gap-1.5 text-xs text-white font-medium py-2 px-3 rounded-lg bg-indigo-600/30 border border-indigo-500/40`,children:[(0,V.jsx)(Hd,{className:`w-4 h-4 text-indigo-300`}),`CV (PDF)`]}),(0,V.jsxs)(`a`,{href:np.linkedin,target:`_blank`,rel:`noopener noreferrer`,className:`flex items-center gap-1.5 text-xs text-indigo-300 font-medium py-2 px-3 rounded-lg bg-indigo-950/50 border border-indigo-500/30`,children:[(0,V.jsx)(tp,{className:`w-4 h-4 text-indigo-400`}),`LinkedIn`]}),(0,V.jsxs)(`a`,{href:np.github,target:`_blank`,rel:`noopener noreferrer`,className:`flex items-center gap-1.5 text-xs text-slate-300 font-medium py-2 px-3 rounded-lg bg-white/5 border border-white/10`,children:[(0,V.jsx)(ep,{className:`w-4 h-4`}),`GitHub`]}),(0,V.jsxs)(`a`,{href:np.itch,target:`_blank`,rel:`noopener noreferrer`,className:`flex items-center gap-1.5 text-xs text-rose-300 font-medium py-2 px-3 rounded-lg bg-rose-950/50 border border-rose-500/30`,children:[(0,V.jsx)(Kd,{className:`w-4 h-4 text-rose-400`}),`Itch.io`]})]})]})})})]})}function gp({onExploreClick:e,onSelectProject:t}){let[n,r]=(0,_.useState)(0),i=Z[n]||Z[0],a=()=>{if(!t)return;let e=ip.find(e=>e.id===i.projectId);e&&t({...e,initialPhaseIndex:i.phaseIndex??0})};return(0,V.jsxs)(`section`,{id:`home`,className:`relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden`,children:[(0,V.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden -z-10 opacity-[0.025]`,children:(0,V.jsxs)(`span`,{className:`font-extrabold text-[17vw] leading-none tracking-tighter text-white uppercase text-center font-['Syne',sans-serif]`,children:[`JOSHUA`,(0,V.jsx)(`br`,{}),`JOHNSON`]})}),(0,V.jsx)(`div`,{className:`absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-violet-600/15 to-transparent blur-[130px] rounded-full pointer-events-none -z-10`}),(0,V.jsx)(`div`,{className:`max-w-7xl mx-auto w-full`,children:(0,V.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center`,children:[(0,V.jsxs)(U.div,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.55,ease:[.16,1,.3,1]},className:`lg:col-span-6 flex flex-col items-start text-left`,children:[(0,V.jsxs)(`div`,{className:`inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/35 text-indigo-200 text-xs font-mono mb-5 backdrop-blur-md shadow-sm`,children:[(0,V.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-emerald-400 animate-pulse`}),(0,V.jsx)(`span`,{children:`Technical Game Designer • Unreal Engine 5 • London, UK`})]}),(0,V.jsxs)(`h1`,{className:`text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white mb-5 font-['Syne',sans-serif] leading-[1.06]`,children:[`I build gameplay physics,`,` `,(0,V.jsx)(`span`,{className:`text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-300`,children:`custom shaders`}),` `,`& interactive worlds.`]}),(0,V.jsxs)(`p`,{className:`text-sm sm:text-base md:text-lg text-slate-300 mb-6 leading-relaxed font-normal max-w-xl`,children:[`I'm `,(0,V.jsx)(`strong`,{className:`text-white font-semibold`,children:`Josh Johnson`}),`, a London-based Technical Game Designer and BSc Computer Games Design School Representative. I love solving the awkward problems where design and maths collide, whether that means overriding Unreal Engine 5's planar gravity for`,` `,(0,V.jsx)(`strong`,{className:`text-indigo-200 font-semibold`,children:`360° cylindrical pipe racing`}),`, writing`,` `,(0,V.jsx)(`strong`,{className:`text-indigo-200 font-semibold`,children:`multi-directional Kuwahara watercolour shaders`}),`, or anchoring seated VR horror to`,` `,(0,V.jsx)(`strong`,{className:`text-indigo-200 font-semibold`,children:`physical wheelchair inertia`}),`.`]}),(0,V.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 mb-8`,children:[(0,V.jsxs)(`button`,{onClick:e,className:`px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_30px_rgba(99,102,241,0.35)] hover:shadow-[0_0_40px_rgba(99,102,241,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 group cursor-pointer`,children:[(0,V.jsx)(`span`,{children:`Explore Selected Work`}),(0,V.jsx)(q,{className:`w-4 h-4 group-hover:translate-y-0.5 transition-transform`})]}),(0,V.jsxs)(`a`,{href:np.itch,target:`_blank`,rel:`noopener noreferrer`,className:`px-5 py-3.5 rounded-2xl bg-rose-600/20 hover:bg-rose-600/30 text-rose-200 hover:text-white font-semibold text-xs sm:text-sm border border-rose-500/35 hover:border-rose-400/60 backdrop-blur-md transition-all duration-200 flex items-center gap-2`,children:[(0,V.jsx)(Kd,{className:`w-4 h-4 text-rose-400`}),(0,V.jsx)(`span`,{children:`Play on Itch.io`})]}),np.cv&&(0,V.jsxs)(`a`,{href:Q(np.cv),target:`_blank`,rel:`noopener noreferrer`,className:`px-5 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-white/15 hover:border-indigo-500/40 transition-all duration-200 flex items-center gap-2`,children:[(0,V.jsx)(Hd,{className:`w-4 h-4 text-indigo-400`}),(0,V.jsx)(`span`,{children:`CV (PDF)`})]})]}),(0,V.jsx)(`div`,{className:`w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-5 border-t border-white/10`,children:np.stats.map((e,t)=>(0,V.jsxs)(`div`,{className:`p-3 rounded-xl bg-[#0a0c18]/80 border border-white/[0.07] hover:border-indigo-500/30 transition-colors`,children:[(0,V.jsx)(`div`,{className:`text-lg sm:text-xl font-extrabold text-white font-['Syne',sans-serif]`,children:e.value}),(0,V.jsx)(`div`,{className:`text-[11px] font-bold text-indigo-300 tracking-wide mt-0.5`,children:e.label}),(0,V.jsx)(`div`,{className:`text-[10px] text-slate-400 truncate mt-0.5 font-mono`,children:e.sub})]},t))})]}),(0,V.jsx)(U.div,{initial:{opacity:0,y:28},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1,ease:[.16,1,.3,1]},className:`lg:col-span-6`,children:(0,V.jsxs)(`div`,{className:`rounded-3xl bg-[#090b16]/95 border border-indigo-500/35 shadow-[0_20px_70px_rgba(79,70,229,0.22)] overflow-hidden backdrop-blur-2xl`,children:[(0,V.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-[#06070f] border-b border-white/10`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,V.jsx)(`span`,{className:`w-2.5 h-2.5 rounded-full bg-rose-500/80`}),(0,V.jsx)(`span`,{className:`w-2.5 h-2.5 rounded-full bg-amber-400/80`}),(0,V.jsx)(`span`,{className:`w-2.5 h-2.5 rounded-full bg-emerald-400/80`})]}),(0,V.jsx)(`span`,{className:`h-3.5 w-[1px] bg-white/15`}),(0,V.jsxs)(`span`,{className:`text-[11px] font-mono font-bold text-indigo-300 tracking-wider uppercase flex items-center gap-1.5`,children:[(0,V.jsx)(Bf,{className:`w-3.5 h-3.5 text-indigo-400`}),i.code]})]}),(0,V.jsxs)(`div`,{className:`flex items-center gap-2`,children:[i.itch&&(0,V.jsxs)(`a`,{href:i.itch,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-600/25 hover:bg-rose-600/40 text-rose-200 border border-rose-500/35 text-[10px] font-mono uppercase tracking-wider transition-colors`,children:[(0,V.jsx)(Kd,{className:`w-3 h-3 text-rose-400`}),(0,V.jsx)(`span`,{children:`Play Build`})]}),(0,V.jsxs)(`button`,{onClick:a,className:`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 hover:text-white border border-indigo-500/40 text-[10px] font-mono uppercase tracking-wider transition-colors cursor-pointer`,children:[(0,V.jsx)(`span`,{children:`Inspect Breakdown`}),(0,V.jsx)(Rd,{className:`w-3 h-3`})]})]})]}),(0,V.jsxs)(`div`,{onClick:a,className:`relative aspect-[16/10] bg-black cursor-pointer group overflow-hidden`,children:[(0,V.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:`auto`,poster:i.poster?Q(i.poster):void 0,className:`w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500`,children:(0,V.jsx)(`source`,{src:Q(i.video),type:`video/mp4`})},i.video),(0,V.jsxs)(`div`,{className:`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-between gap-3`,children:[(0,V.jsxs)(`div`,{children:[i.projectId===`rem`?(0,V.jsxs)(`div`,{className:`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-cyan-950/90 border border-cyan-400/40 text-[10px] font-mono text-cyan-200 mb-1`,children:[(0,V.jsx)(`img`,{src:Q(`/images/logos/myndwell-logo-white.png`),alt:`Myndwell Logo`,className:`w-3 h-3 object-contain shrink-0`}),(0,V.jsx)(`span`,{children:`MYNDWELL CORP // SUBJECT RECORD`})]}):i.projectId===`delirium`?(0,V.jsxs)(`div`,{className:`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-red-950/90 border border-red-500/40 text-[10px] font-mono text-red-200 mb-1`,children:[(0,V.jsx)(`img`,{src:Q(`/images/logos/delirium-title-logo.png`),alt:`Delirium`,className:`h-2.5 object-contain shrink-0`}),(0,V.jsx)(`span`,{className:`text-[9px] uppercase tracking-wider text-red-300`,children:`ST. JUDE'S VR INERTIA`})]}):(0,V.jsxs)(`div`,{className:`inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-indigo-950/90 border border-indigo-400/40 text-[10px] font-mono text-indigo-200 mb-1`,children:[(0,V.jsx)(vf,{className:`w-2.5 h-2.5 fill-indigo-400 text-indigo-400`}),(0,V.jsx)(`span`,{children:`LIVE ENGINE CAPTURE`})]}),(0,V.jsx)(`h2`,{className:`text-lg sm:text-xl font-extrabold text-white font-['Syne',sans-serif] leading-tight`,children:i.title}),(0,V.jsx)(`p`,{className:`text-xs text-slate-300 font-medium`,children:i.subtitle})]}),(0,V.jsxs)(`span`,{className:`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 group-hover:bg-indigo-600 text-white text-xs font-semibold backdrop-blur-md border border-white/15 transition-colors shrink-0`,children:[(0,V.jsx)(If,{className:`w-3.5 h-3.5`}),(0,V.jsx)(`span`,{children:`Open Case Study`})]})]})]}),(0,V.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-3 gap-2 p-3 bg-[#070913] border-t border-white/10`,children:i.telemetry.map((e,t)=>(0,V.jsxs)(`div`,{className:`px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06]`,children:[(0,V.jsx)(`div`,{className:`text-[9px] font-mono uppercase tracking-wider text-indigo-400`,children:e.label}),(0,V.jsx)(`div`,{className:`text-[11px] font-mono font-semibold text-slate-200 truncate mt-0.5`,children:e.value})]},t))}),(0,V.jsxs)(`div`,{className:`p-2.5 bg-[#05060c] border-t border-white/10`,children:[(0,V.jsxs)(`div`,{className:`flex items-center justify-between px-1.5 mb-2`,children:[(0,V.jsxs)(`span`,{className:`text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5`,children:[(0,V.jsx)(ef,{className:`w-3 h-3 text-indigo-400`}),(0,V.jsx)(`span`,{children:`Switch Showreel Channel (4 Live UE5 Captures):`})]}),(0,V.jsxs)(`span`,{className:`text-[10px] font-mono text-indigo-400`,children:[`0`,n+1,` / 0`,Z.length]})]}),(0,V.jsx)(`div`,{className:`grid grid-cols-2 sm:grid-cols-4 gap-1.5`,children:Z.map((e,t)=>{let i=t===n;return(0,V.jsxs)(`button`,{type:`button`,onClick:()=>r(t),className:`p-2 rounded-xl text-left transition-all cursor-pointer border ${i?`bg-indigo-600/25 border-indigo-400/70 text-white shadow-md shadow-indigo-950/50`:`bg-white/[0.02] hover:bg-white/[0.06] border-white/[0.06] text-slate-400 hover:text-slate-200`}`,children:[(0,V.jsxs)(`div`,{className:`flex items-center justify-between gap-1 mb-0.5`,children:[(0,V.jsxs)(`span`,{className:`text-[9px] font-mono text-indigo-300 font-bold`,children:[`0`,t+1]}),(0,V.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full ${i?`bg-emerald-400 animate-pulse`:`bg-slate-600`}`})]}),(0,V.jsx)(`div`,{className:`text-[11px] font-bold truncate leading-snug`,children:e.title})]},e.id)})})]})]})})]})})]})}var _p={chanceway:{files:[{name:`index.html`,totalLines:591,sizeBytes:28268,code:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chanceway | Design Archive</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;700;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --void: #000000;
            --static: #ffffff;
            --accent: #ff0000; /* Only for errors/exit */
            --blur-amt: 0px;
        }

        /* === GLOBAL STYLES === */
        body {
            background-color: var(--static);
            color: var(--void);
            font-family: 'Space Mono', monospace;
            overflow-x: hidden;
            transition: background-color 0.1s linear;
            cursor: crosshair;
        }

        .font-display { font-family: 'Syne', sans-serif; }
        
        /* INVERT MODE for the "Dark World" */
        body.inverted {
            background-color: var(--void);
            color: var(--static);
        }
        body.inverted .border-black { border-color: var(--static); }
        body.inverted .bg-black { background-color: var(--static); color: var(--void); }
        body.inverted .text-gray-600 { color: #888; }
        body.inverted .border-gray-200 { border-color: #333; }

        /* === WHIPPING ANIMATIONS === */
        /* Fast, aggressive transitions */
        .whip-transition {
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .whip-hover:hover {
            transform: skewX(-10deg) translateX(10px);
        }

        /* === GLITCH EFFECTS === */
        @keyframes noise-anim {
            0% { clip-path: inset(40% 0 61% 0); }
            20% { clip-path: inset(92% 0 1% 0); }
            40% { clip-path: inset(43% 0 1% 0); }
            60% { clip-path: inset(25% 0 58% 0); }
            80% { clip-path: inset(54% 0 7% 0); }
            100% { clip-path: inset(58% 0 43% 0); }
        }

        .glitch-text {
            position: relative;
            display: inline-block;
        }
        .glitch-text::before, .glitch-text::after {
            content: attr(data-text);
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: var(--static);
        }
        body.inverted .glitch-text::before, body.inverted .glitch-text::after {
            background: var(--void);
        }
        .glitch-text::before {
            left: 2px;
            text-shadow: -1px 0 #000;
            clip-path: inset(0);
            animation: noise-anim 2s infinite linear alternate-reverse;
        }
        .glitch-text::after {
            left: -2px;
            text-shadow: 1px 0 #000;
            clip-path: inset(0);
            animation: noise-anim 3s infinite linear alternate-reverse;
        }

        /* === SECTIONS === */
        .bible-section {
            display: none;
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .bible-section.active {
            display: block;
            opacity: 1;
            transform: translateY(0);
        }

        /* === NON-EUCLIDEAN DEMO === */
        .perspective-box {
            perspective: 1000px;
            transform-style: preserve-3d;
        }
        .corridor-wall {
            transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }

        /* === CANVAS BACKGROUND === */
        #noise-canvas {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            z-index: -1;
            opacity: 0.05;
            pointer-events: none;
        }
        
        /* === DECEPTIVE FRONT === */
        #front-layer {
            position: fixed;
            inset: 0;
            z-index: 50;
            background: #f4f4f4;
            display: flex;
            flex-col;
            transition: transform 0.8s cubic-bezier(0.7, 0, 0.3, 1);
        }
        #front-layer.breached {
            transform: translateY(-100%);
        }

        /* === NAVIGATION === */
        .nav-link {
            position: relative;
            cursor: pointer;
        }
        .nav-link::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: currentColor;
            transition: width 0.3s ease;
        }
        .nav-link:hover::after, .nav-link.active::after {
            width: 100%;
        }

        /* === UTILS === */
        .crt-lines {
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%);
            background-size: 100% 4px;
            pointer-events: none;
        }
        .border-thick { border-width: 3px; }
    </style>
</head>
<body>

    <!-- ================= LAYER 1: THE CAUSAL INSTITUTE (DECEPTION) ================= -->
    <div id="front-layer" class="flex flex-col items-center justify-center text-center p-8 border-b-8 border-black">
        <div class="max-w-3xl mx-auto">
            <div class="mb-8">
                <svg class="w-24 h-24 mx-auto mb-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
                <h1 class="text-4xl md:text-6xl font-bold tracking-tighter uppercase font-display">The Causal Institute</h1>
                <p class="text-sm tracking-[0.3em] mt-2 uppercase text-gray-500">Researching Certainty in a Chaotic World</p>
            </div>

            <div class="grid grid-cols-3 gap-4 text-xs font-mono text-left border-t border-b border-gray-300 py-8 mb-12">
                <div>
                    <strong>CURRENT STUDY:</strong><br>
                    Project: Chanceway<br>
                    Status: <span class="text-green-600">STABLE</span>
                </div>
                <div>
                    <strong>PROBABILITY INDEX:</strong><br>
                    Baseline: 100%<br>
                    Deviation: 0.000%
                </div>
                <div>
                    <strong>ACCESS LEVEL:</strong><br>
                    Public / Observer<br>
                    Clearance: None
                </div>
            </div>

            <p class="text-gray-600 mb-8 max-w-lg mx-auto">
                We utilize advanced algorithmic prediction to map the architecture of the future. There are no mazes, only straight lines waiting to be drawn.
            </p>

            <button id="breach-btn" class="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-black font-display hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                <span>INITIATE SECURITY CHECK</span>
                <div class="absolute inset-0 h-full w-full scale-0 rounded-sm transition-all duration-300 group-hover:scale-100 group-hover:bg-red-600/10"></div>
            </button>

            <div id="security-msg" class="mt-4 text-red-600 font-bold font-mono opacity-0 transition-opacity">
                WARNING: NON-EUCLIDEAN GEOMETRY DETECTED.
            </div>
        </div>
        <div class="absolute bottom-4 text-[10px] text-gray-400">
            © 2025 The Causal Institute. Certainty is a choice.
        </div>
    </div>

    <!-- ================= LAYER 2: THE GAME BIBLE ================= -->
    <canvas id="noise-canvas"></canvas>
    <div class="fixed inset-0 pointer-events-none crt-lines z-40"></div>

    <div id="main-interface" class="min-h-screen flex flex-col relative opacity-0 transition-opacity duration-1000 delay-500">
        
        <!-- NAV -->
        <nav class="w-full border-b-4 border-current p-6 flex justify-between items-center bg-inherit z-30 sticky top-0">
            <div class="text-2xl font-black tracking-tighter font-display uppercase glitch-text" data-text="CHANCEWAY">
                CHANCEWAY
            </div>
            <div class="hidden md:flex space-x-8 font-bold text-sm tracking-widest">
                <span class="nav-link active" data-target="overview">OVERVIEW</span>
                <span class="nav-link" data-target="mechanics">MECHANICS</span>
                <span class="nav-link" data-target="algorithm">ALGORITHM</span>
                <span class="nav-link" data-target="visuals">VISUALS</span>
            </div>
            <div class="text-xs font-mono border border-current px-2 py-1">
                EXIT CHANCE: <span id="global-chance">0.001%</span>
            </div>
        </nav>

        <main class="flex-grow container mx-auto px-6 py-12 max-w-6xl">
            
            <!-- SECTION: OVERVIEW -->
            <section id="overview" class="bible-section active">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div class="lg:col-span-8">
                        <h1 class="text-6xl md:text-8xl font-display font-black leading-none mb-8 uppercase">
                            The Exit<br>Does Not<br>Exist.
                        </h1>
                        <p class="text-xl md:text-2xl font-mono leading-relaxed border-l-4 border-current pl-6 mb-8">
                            Yet. Chanceway is a procedural maze where the exit is not a place, but a <span class="font-bold bg-current text-white px-1 invert-target">probability</span>.
                        </p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div class="border-2 border-current p-6 hover:bg-current hover:text-white transition-colors duration-300 group cursor-none">
                                <h3 class="font-bold text-lg mb-2 group-hover:translate-x-2 transition-transform">01. Procedural Navigation</h3>
                                <p class="text-sm font-mono opacity-80">The world generates one step ahead of you. Look away, and it is gone.</p>
                            </div>
                            <div class="border-2 border-current p-6 hover:bg-current hover:text-white transition-colors duration-300 group cursor-none">
                                <h3 class="font-bold text-lg mb-2 group-hover:translate-x-2 transition-transform">02. The 0.001%</h3>
                                <p class="text-sm font-mono opacity-80">You start with nearly zero chance of escape. Every action manipulates the dice.</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-4 flex flex-col justify-end">
                        <div class="border-4 border-current p-4 aspect-[3/4] flex items-center justify-center relative overflow-hidden">
                            <div class="absolute inset-0 bg-current opacity-10 animate-pulse"></div>
                            <p class="font-mono text-center text-xs uppercase z-10">
                                [ Subject is Trapped ]<br>
                                [ Loop Count: ∞ ]
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- SECTION: MECHANICS -->
            <section id="mechanics" class="bible-section">
                <div class="mb-12 border-b-4 border-current pb-4">
                    <h2 class="text-5xl font-display font-black uppercase">Non-Euclidean Rules</h2>
                </div>

                <!-- The Turn Around Mechanic Interactive -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h3 class="text-3xl font-bold mb-4 glitch-text" data-text="THE TURN-AROUND">THE TURN-AROUND</h3>
                        <p class="font-mono mb-6">
                            In Chanceway, geometry is not stable. If you turn 180 degrees, the path you came from is erased. You face a blank wall. The path forward shifts.
                        </p>
                        <ul class="list-disc list-inside font-mono text-sm space-y-2 mb-8">
                            <li>Backtracking is impossible.</li>
                            <li>Hesitation destroys the world.</li>
                            <li>"Looking back" is a reset.</li>
                        </ul>
                        <button id="turn-around-btn" class="border-2 border-current px-6 py-2 font-bold hover:bg-current hover:text-white transition-all uppercase">
                            Simulate Player Turn (180°)
                        </button>
                    </div>
                    
                    <!-- Visual Demo -->
                    <div class="perspective-box h-64 w-full border-2 border-current relative overflow-hidden flex items-center justify-center bg-gray-100 text-black" id="mechanic-viewport">
                        <div id="corridor-view" class="text-center">
                            <div class="text-4xl font-bold mb-2">⬆</div>
                            <div class="font-mono">PATH A: CORRIDOR</div>
                        </div>
                        <div id="wall-view" class="absolute inset-0 bg-black text-white flex items-center justify-center opacity-0 pointer-events-none transform rotate-y-180">
                            <div class="text-center">
                                <div class="text-4xl font-bold mb-2">Ø</div>
                                <div class="font-mono">THE VOID (WALL)</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- The Trivia Phantom -->
                <div class="border-t-4 border-current pt-12">
                    <div class="flex flex-col md:flex-row justify-between items-start">
                        <div class="md:w-1/2">
                            <h3 class="text-3xl font-bold mb-4">Anomaly: The Trivia Phantom</h3>
                            <p class="font-mono text-sm mb-4">
                                A recurring hallucination. An "Infinite Runner" segment manifests inside the maze. A figure chases you, demanding answers to mundane questions.
                            </p>
                            <div class="bg-current text-white p-4 font-mono text-xs mt-4">
                                > ENTITY: "What is the capital of America?"<br>
                                > PLAYER: "Washington D.C."<br>
                                > RESULT: +0.05% Exit Probability.<br>
                                > FAIL STATE: Maze Distortion increases.
                            </div>
                        </div>
                        <div class="md:w-1/3 mt-8 md:mt-0 border-2 border-current p-8 text-center">
                            <div class="text-6xl font-black mb-4">?</div>
                            <p class="font-display uppercase font-bold">Answer or Erase</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- SECTION: ALGORITHM -->
            <section id="algorithm" class="bible-section">
                <div class="mb-12">
                    <h2 class="text-5xl font-display font-black uppercase">The Probability Curve</h2>
                    <p class="font-mono mt-4 max-w-2xl">
                        The Exit is spawned dynamically. Actions influence the <span class="font-bold">P-Value</span>.
                    </p>
                </div>

                <div class="bg-gray-100 p-8 border-2 border-black mb-12 text-black">
                    <canvas id="probChart" height="100"></canvas>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="p-6 border-l-4 border-current">
                        <h4 class="font-bold text-xl mb-2">Rituals</h4>
                        <p class="text-sm font-mono mb-4">Walking in patterns (L-R-L-R) stabilizes the algorithm.</p>
                        <input type="range" min="0" max="100" value="0" class="w-full accent-black" oninput="updateProb(this.value, 'ritual')">
                    </div>
                    <div class="p-6 border-l-4 border-current">
                        <h4 class="font-bold text-xl mb-2">Observation</h4>
                        <p class="text-sm font-mono mb-4">Staring at anomalies forces them to render fully.</p>
                        <input type="range" min="0" max="100" value="0" class="w-full accent-black" oninput="updateProb(this.value, 'observe')">
                    </div>
                    <div class="p-6 border-l-4 border-current">
                        <h4 class="font-bold text-xl mb-2">Survival</h4>
                        <p class="text-sm font-mono mb-4">Answering the Phantom correctly increases odds.</p>
                        <input type="range" min="0" max="100" value="0" class="w-full accent-black" oninput="updateProb(this.value, 'survive')">
                    </div>
                </div>
                
                <div class="mt-12 text-center">
                    <h3 class="text-2xl font-display font-bold">CURRENT EXIT PROBABILITY</h3>
                    <div class="text-6xl md:text-9xl font-mono font-bold glitch-text" data-text="0.001%" id="big-prob-display">0.001%</div>
                </div>
            </section>

            <!-- SECTION: VISUALS -->
            <section id="visuals" class="bible-section">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 border-4 border-current">
                    <div class="p-12 border-b-4 lg:border-b-0 lg:border-r-4 border-current flex flex-col justify-center">
                        <h2 class="text-4xl font-display font-black uppercase mb-6">The "Severance" Camera</h2>
                        <p class="font-mono text-sm leading-loose mb-6">
                            We utilize a dynamic <span class="font-bold">Dolly Zoom (Zolly)</span>. As the player moves forward, the Field of View expands while the camera physically moves closer.
                        </p>
                        <p class="font-mono text-sm leading-loose">
                            Result: The corridor appears to stretch infinitely without the player actually gaining ground. A sense of claustrophobic infinity.
                        </p>
                    </div>
                    <div class="bg-black text-white p-12 flex flex-col justify-center items-center relative overflow-hidden">
                        <!-- CSS Animation for Dolly Zoom effect -->
                        <div class="w-32 h-32 border-4 border-white animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                        <div class="absolute inset-0 flex items-center justify-center opacity-30">
                            <div class="w-[200%] h-[200%] border-[20px] border-white rounded-full" style="animation: ping 3s infinite cubic-bezier(0, 0, 0.2, 1);"></div>
                        </div>
                        <p class="relative z-20 font-bold uppercase tracking-widest">Visual Reference: 2x1</p>
                    </div>
                </div>

                <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="aspect-square bg-black flex items-center justify-center text-white font-mono text-xs p-4 text-center whip-hover border border-transparent hover:border-white">
                        Escher Junctions
                    </div>
                    <div class="aspect-square bg-white border-2 border-black flex items-center justify-center text-black font-mono text-xs p-4 text-center whip-hover">
                        Shifting Shadows
                    </div>
                    <div class="aspect-square bg-black flex items-center justify-center text-white font-mono text-xs p-4 text-center whip-hover border border-transparent hover:border-white">
                        Fluid Walls
                    </div>
                    <div class="aspect-square bg-white border-2 border-black flex items-center justify-center text-black font-mono text-xs p-4 text-center whip-hover">
                        The Void
                    </div>
                </div>
            </section>

        </main>
        
        <footer class="p-6 border-t-4 border-current text-center font-mono text-xs uppercase">
            Chanceway Game Design Document // Internal Use Only
        </footer>
    </div>

    <script>
        // === DECEPTIVE FRONT LOGIC ===
        const breachBtn = document.getElementById('breach-btn');
        const frontLayer = document.getElementById('front-layer');
        const securityMsg = document.getElementById('security-msg');
        const mainInterface = document.getElementById('main-interface');
        const body = document.body;

        breachBtn.addEventListener('click', () => {
            securityMsg.style.opacity = '1';
            
            // Glitch Effect Sequence
            let glitchInterval = setInterval(() => {
                document.body.style.transform = \`translate(\${Math.random()*4-2}px, \${Math.random()*4-2}px)\`;
            }, 50);

            setTimeout(() => {
                clearInterval(glitchInterval);
                document.body.style.transform = 'none';
                frontLayer.classList.add('breached');
                body.classList.add('inverted'); // Switch to dark mode/high contrast
                
                setTimeout(() => {
                    mainInterface.style.opacity = '1';
                    initCanvas(); // Start background noise
                }, 800);
            }, 1500);
        });

        // === NAVIGATION LOGIC ===
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('.bible-section');

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Visual update
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                // Content Update
                const targetId = link.getAttribute('data-target');
                sections.forEach(sec => {
                    sec.classList.remove('active');
                    if(sec.id === targetId) {
                        setTimeout(() => sec.classList.add('active'), 100);
                    }
                });
            });
        });

        // === TURN AROUND MECHANIC DEMO ===
        const turnBtn = document.getElementById('turn-around-btn');
        const corridorView = document.getElementById('corridor-view');
        const wallView = document.getElementById('wall-view');
        let isTurned = false;

        turnBtn.addEventListener('click', () => {
            const viewport = document.getElementById('mechanic-viewport');
            
            // Whipping animation class
            viewport.classList.add('whip-transition');
            
            if(!isTurned) {
                // Flip 180
                viewport.style.transform = "rotateY(180deg)";
                corridorView.style.opacity = '0';
                setTimeout(() => { wallView.style.opacity = '1'; }, 200);
                turnBtn.innerText = "Turn Back (Path Changes)";
            } else {
                // Flip back to 0
                viewport.style.transform = "rotateY(0deg)";
                wallView.style.opacity = '0';
                setTimeout(() => { 
                    corridorView.style.opacity = '1'; 
                    // Change text to simulate procedural gen change
                    corridorView.innerHTML = \`
                        <div class="text-4xl font-bold mb-2 text-red-600">?</div>
                        <div class="font-mono text-red-600">PATH B: DISTORTED HALL</div>
                    \`;
                }, 200);
                turnBtn.innerText = "Simulate Player Turn (180°)";
            }
            isTurned = !isTurned;
        });

        // === PROBABILITY ALGORITHM CHART ===
        const ctx = document.getElementById('probChart').getContext('2d');
        
        // Initial Data
        const initialData = Array.from({length: 20}, (_, i) => ({x: i, y: 0.001 * Math.exp(i/10)}));

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: Array.from({length: 20}, (_, i) => i),
                datasets: [{
                    label: 'Exit Probability (%)',
                    data: initialData.map(d => d.y),
                    borderColor: '#000000',
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                animation: { duration: 0 }, // Fast updates
                scales: {
                    y: { beginAtZero: true, max: 15, display: false },
                    x: { display: false }
                },
                plugins: { legend: { display: false } }
            }
        });

        // Input handling
        const globalChance = document.getElementById('global-chance');
        const bigProb = document.getElementById('big-prob-display');
        let factors = { ritual: 0, observe: 0, survive: 0 };

        window.updateProb = (val, type) => {
            factors[type] = parseInt(val);
            
            // Calculate new probability curve
            const totalFactor = (factors.ritual + factors.observe + factors.survive) / 300; // 0 to 1
            const baseChance = 0.001;
            const maxChance = 10;
            
            // Current calculated probability
            let currentProb = baseChance + (maxChance * totalFactor);
            if(currentProb > 10) currentProb = 10;
            
            // Update text
            const textVal = currentProb.toFixed(3) + "%";
            globalChance.innerText = textVal;
            bigProb.innerText = textVal;
            bigProb.setAttribute('data-text', textVal);

            // Update Chart Data to look "whippy"
            const newData = initialData.map((d, i) => {
                return d.y + (Math.random() * totalFactor) + (i * totalFactor * 0.5);
            });
            
            chart.data.datasets[0].data = newData;
            chart.update();
        }

        // === BACKGROUND NOISE CANVAS ===
        function initCanvas() {
            const canvas = document.getElementById('noise-canvas');
            const ctx = canvas.getContext('2d');
            
            const resize = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            };
            window.addEventListener('resize', resize);
            resize();

            function drawNoise() {
                const w = canvas.width;
                const h = canvas.height;
                const idata = ctx.createImageData(w, h);
                const buffer32 = new Uint32Array(idata.data.buffer);
                const len = buffer32.length;

                for (let i = 0; i < len; i++) {
                    if (Math.random() < 0.05) {
                        buffer32[i] = 0xffffffff; // White noise
                    }
                }

                ctx.putImageData(idata, 0, 0);
                requestAnimationFrame(drawNoise);
            }
            drawNoise();
        }

    <\/script>
</body>
</html>
`}]},daydream:{files:[{name:`index.html`,totalLines:613,sizeBytes:35175,code:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daydream Believer | Design Document</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Inter:wght@300;400;700;900&family=Permanent+Marker&family=VT323&display=swap" rel="stylesheet">
    <style>
        :root {
            --school-grey: #e5e7eb;
            --focus-red: #ff0000;
            --authority-blue: #0000ff;
            --interest-pink: #ff69b4;
            --self-purple: #800080;
            --void-white: #ffffff;
            --blackout: #000000;
        }

        body {
            background-color: var(--void-white);
            color: #111;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
            transition: filter 0.3s ease, background-color 1s ease;
        }

        /* === LAYER 1: THE SCHOOL PORTAL === */
        #school-layer {
            position: fixed;
            inset: 0;
            z-index: 100;
            background-color: #f3f4f6;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: transform 1s cubic-bezier(0.7, 0, 0.3, 1), opacity 1s ease;
        }
        
        .school-form {
            background: white;
            padding: 2rem;
            border: 1px solid #d1d5db;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
            text-align: center;
        }

        /* === LAYER 2: THE DAYDREAM === */
        #dream-layer {
            opacity: 0;
            pointer-events: none;
            transition: opacity 1s ease;
        }
        #dream-layer.active {
            opacity: 1;
            pointer-events: auto;
        }

        /* === MECHANIC: HYPERFOCUS (Blur Effect) === */
        .unfocused-text {
            filter: blur(4px);
            transition: filter 0.3s ease, color 0.3s ease;
            cursor: crosshair;
        }
        .unfocused-text:hover {
            filter: blur(0px);
            color: var(--focus-red);
        }

        /* === MECHANIC: MANUAL BREATHING === */
        #breath-overlay {
            position: fixed;
            inset: 0;
            background: radial-gradient(circle, transparent 20%, black 100%);
            opacity: 0;
            pointer-events: none;
            z-index: 90;
            transition: opacity 0.5s ease;
        }
        
        #breath-warning-text {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: var(--focus-red);
            font-family: 'Bangers', cursive;
            font-size: 5rem;
            text-shadow: 0 0 10px black;
            z-index: 95;
            display: none;
            animation: panic-pulse 0.5s infinite alternate;
        }

        @keyframes panic-pulse {
            from { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
            to { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
        }

        #breath-meter {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 200px;
            background: white;
            border: 2px solid var(--authority-blue);
            padding: 10px;
            z-index: 50;
            font-family: 'VT323', monospace;
            display: none;
        }
        #breath-bar {
            height: 20px;
            background: var(--authority-blue);
            width: 100%;
            transition: width 0.1s linear, background-color 0.3s ease;
        }

        /* === VISUALS === */
        .brain-texture {
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 C 20 20, 40 20, 50 10 C 60 0, 80 0, 90 10' stroke='%23e5e7eb' fill='none'/%3E%3Cpath d='M10 30 C 20 40, 40 40, 50 30 C 60 20, 80 20, 90 30' stroke='%23e5e7eb' fill='none'/%3E%3C/svg%3E");
            background-size: 50px 50px;
        }

        .poly-font { font-family: 'VT323', monospace; }
        .hand-font { font-family: 'Permanent Marker', cursive; }
        .title-font { font-family: 'Bangers', cursive; letter-spacing: 0.1em; }

        /* Moving Text Animation for Artist Statement */
        @keyframes shift-text {
            0% { transform: translate(0, 0); }
            25% { transform: translate(2px, 1px); filter: blur(0.5px); }
            50% { transform: translate(-1px, -2px); filter: blur(0px); }
            75% { transform: translate(-2px, 1px); filter: blur(0.5px); }
            100% { transform: translate(0, 0); }
        }
        .moving-word {
            display: inline-block;
            animation: shift-text 3s infinite ease-in-out;
            cursor: default;
        }
        .moving-word:hover {
            animation-play-state: paused;
            color: var(--focus-red);
            font-weight: bold;
        }

        /* Color Classes */
        .bg-authority { background-color: var(--authority-blue); color: white; }
        .text-authority { color: var(--authority-blue); }
        .bg-focus { background-color: var(--focus-red); color: white; }
        .text-focus { color: var(--focus-red); }
        .bg-interest { background-color: var(--interest-pink); color: white; }
        .text-interest { color: var(--interest-pink); }
        .bg-self { background-color: var(--self-purple); color: white; }
        .text-self { color: var(--self-purple); }

        /* Navigation Tabs */
        .nav-tab {
            clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
            transition: transform 0.2s ease;
        }
        .nav-tab:hover { transform: translateY(-5px); }
        .nav-tab.active { border-bottom: 4px solid var(--focus-red); }

        /* Section Visibility */
        .content-section { display: none; }
        .content-section.active { display: block; animation: fadeIn 0.5s ease; }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

    </style>
</head>
<body class="brain-texture">

    <!-- LAYER 1: THE SCHOOL PORTAL -->
    <div id="school-layer">
        <div class="school-form">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">Ousedale School</h2>
            <p class="text-xs text-gray-500 uppercase tracking-widest mb-6">Student Dashboard</p>
            
            <div class="space-y-4 text-left text-sm">
                <div class="flex justify-between border-b py-2">
                    <span class="text-gray-600">Student Name:</span>
                    <span class="font-bold">Joshua Johnson</span>
                </div>
                <div class="flex justify-between border-b py-2">
                    <span class="text-gray-600">Current Class:</span>
                    <span class="font-bold text-blue-800">Mathematics (Room 304)</span>
                </div>
                <div class="flex justify-between border-b py-2">
                    <span class="text-gray-600">Focus Level:</span>
                    <span class="font-bold text-red-600">CRITICAL LOW</span>
                </div>
            </div>

            <button id="daydream-btn" class="mt-8 w-full bg-gray-900 text-white py-3 font-bold hover:bg-blue-600 transition-colors">
                ATTEMPT TO FOCUS
            </button>
            <p class="mt-2 text-[10px] text-gray-400">Pressing this button acknowledges you are paying attention.</p>
        </div>
    </div>

    <!-- BREATHING OVERLAY -->
    <div id="breath-overlay"></div>
    <div id="breath-warning-text">PRESS [SPACE] TO BREATHE</div>

    <!-- LAYER 2: THE DAYDREAM (GAME BIBLE) -->
    <div id="dream-layer" class="min-h-screen pb-20">
        
        <!-- HERO HEADER -->
        <header class="bg-white border-b-4 border-black p-8 sticky top-0 z-40 shadow-lg">
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end">
                <div>
                    <h1 class="text-7xl md:text-9xl title-font uppercase tracking-wide leading-none text-gray-900 shadow-sm">
                        Daydream <span class="text-focus">Believer</span>
                    </h1>
                    <p class="hand-font text-2xl mt-2 text-interest rotate-2 inline-block transform translate-x-4">"Is this gonna be on the test?"</p>
                </div>
                <nav class="hidden md:flex space-x-2 mt-4 md:mt-0">
                    <button class="nav-tab px-6 py-3 bg-black text-white font-bold uppercase hover:bg-focus" data-target="overview">Concept</button>
                    <button class="nav-tab px-6 py-3 bg-gray-200 text-black font-bold uppercase hover:bg-interest" data-target="mechanics">Mechanics</button>
                    <button class="nav-tab px-6 py-3 bg-gray-200 text-black font-bold uppercase hover:bg-authority" data-target="levels">The Day</button>
                    <button class="nav-tab px-6 py-3 bg-gray-200 text-black font-bold uppercase hover:bg-self" data-target="statement">Statement</button>
                    <button class="nav-tab px-6 py-3 bg-gray-200 text-black font-bold uppercase hover:text-focus" data-target="assets">Assets</button>
                </nav>
            </div>
        </header>

        <main class="max-w-6xl mx-auto mt-12 px-6">

            <!-- SECTION: OVERVIEW -->
            <section id="overview" class="content-section active">
                <div class="grid md:grid-cols-2 gap-12">
                    <div class="space-y-6">
                        <h2 class="text-4xl font-bold border-l-8 border-self-purple pl-4">The Hyperbolic Reality</h2>
                        <p class="text-lg leading-relaxed">
                            <span class="font-bold">Daydream Believer</span> is an interactive experience that simulates a normal school day through the lens of <span class="text-focus font-bold">ADHD</span>.
                        </p>
                        <p class="unfocused-text text-gray-600">
                            It is not a clinical simulation, but a hyperbolic expression of enhanced focus, enhanced lack of focus, and enhanced creativity. The world is stark, white, and overwhelming, until something catches your eye.
                        </p>
                        <div class="bg-black text-white p-6 poly-font text-xl rounded-sm shadow-md">
                            > PLAYER: Purple Character (The Self)<br>
                            > SETTING: Ousedale School (Memory/Trace)<br>
                            > GOAL: Survive until the bell rings.<br>
                            > OBSTACLE: Your own brain processing power.
                        </div>
                    </div>
                    <div class="relative border-4 border-black bg-gray-100 p-4 rotate-1 shadow-xl">
                        <div class="absolute -top-4 -right-4 bg-interest text-white px-4 py-1 font-bold rotate-3 shadow-lg transform">VISUAL STYLE: SUPERHOT x CONFUSION</div>
                        <div class="h-64 bg-white border-2 border-gray-200 flex items-center justify-center overflow-hidden relative">
                            <!-- CSS Representation of the Skybox/Toon Shader -->
                            <div class="absolute inset-0" style="background: repeating-linear-gradient(0deg, transparent 0, transparent 1px, #f3f4f6 2px), repeating-linear-gradient(90deg, #000 0, #000 1px, #fff 0, #fff 40px); opacity: 0.2;"></div>
                            <div class="relative z-10 font-black title-font text-6xl text-black mix-blend-multiply">GEOMETRIC<br>DISTORTION</div>
                        </div>
                        <p class="mt-4 text-sm font-mono">The world is traced from real 3D data of Ousedale School. Distant objects distort via a custom Toon Shader to represent lack of focus.</p>
                    </div>
                </div>
            </section>

            <!-- SECTION: MECHANICS -->
            <section id="mechanics" class="content-section">
                <h2 class="text-5xl font-bold mb-12 text-center uppercase title-font">Manual Existence</h2>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Mechanic 1 -->
                    <div class="border-4 border-focus-red p-6 hover:bg-red-50 transition-colors group relative overflow-hidden">
                        <div class="absolute top-0 right-0 bg-focus text-white px-2 font-mono text-xs">VISUAL</div>
                        <h3 class="text-2xl font-bold text-focus mb-4 group-hover:translate-x-2 transition-transform">01. Hyperfocus</h3>
                        <p class="unfocused-text mb-4">The world is white and blurry. Objects of interest are <span class="text-focus font-bold">RED</span>.</p>
                        <p class="text-sm">When you approach a Red object, it turns <span class="bg-black text-white px-1">White</span> and clear. This represents the "Hyperfocus" tunnel vision that guides the player through the chaos.</p>
                    </div>

                    <!-- Mechanic 2 -->
                    <div class="border-4 border-authority-blue p-6 hover:bg-blue-50 transition-colors group relative overflow-hidden">
                        <div class="absolute top-0 right-0 bg-authority text-white px-2 font-mono text-xs">INPUT</div>
                        <h3 class="text-2xl font-bold text-authority mb-4 group-hover:translate-x-2 transition-transform">02. Manual Walking</h3>
                        <p class="unfocused-text mb-4">Nothing happens automatically. Movement is an effort.</p>
                        <ul class="list-disc list-inside text-sm font-mono space-y-2">
                            <li>Press <span class="bg-black text-white px-1">Q/W</span> for Left Foot.</li>
                            <li>Press <span class="bg-black text-white px-1">E</span> for Right Foot.</li>
                            <li>If you stop inputting, you stop moving.</li>
                        </ul>
                    </div>

                    <!-- Mechanic 3 -->
                    <div class="border-4 border-interest-pink p-6 hover:bg-pink-50 transition-colors group relative overflow-hidden">
                        <div class="absolute top-0 right-0 bg-interest text-white px-2 font-mono text-xs">SOCIAL</div>
                        <h3 class="text-2xl font-bold text-interest mb-4 group-hover:translate-x-2 transition-transform">03. Social Coding</h3>
                        <div class="space-y-3 text-sm font-bold">
                            <div class="flex items-center"><div class="w-6 h-6 bg-blue-700 mr-2 border border-black"></div> <span>TEACHERS (Authority / Blue)</span></div>
                            <div class="flex items-center"><div class="w-6 h-6 bg-pink-400 mr-2 border border-black"></div> <span>FRIENDS (Interest / Pink)</span></div>
                            <div class="flex items-center"><div class="w-6 h-6 bg-red-600 mr-2 border border-black"></div> <span>STRANGERS (Noticed / Red)</span></div>
                            <div class="flex items-center"><div class="w-6 h-6 bg-white border border-black mr-2"></div> <span>STRANGERS (Ignored / White)</span></div>
                        </div>
                    </div>

                    <!-- Mechanic 4 -->
                    <div class="border-4 border-black p-6 hover:bg-gray-100 transition-colors group relative overflow-hidden">
                         <div class="absolute top-0 right-0 bg-black text-white px-2 font-mono text-xs">SURVIVAL</div>
                        <h3 class="text-2xl font-bold text-black mb-4 group-hover:translate-x-2 transition-transform">04. Manual Breathing</h3>
                        <p class="unfocused-text mb-4">You must consciously take every breath.</p>
                        <p class="text-sm">Press <span class="bg-black text-white px-1">[SPACE]</span> to inhale. If you forget for 10 seconds, the screen fades to black and you pass out.</p>
                    </div>

                    <!-- Mechanic 5 -->
                    <div class="border-4 border-self-purple p-6 hover:bg-purple-50 transition-colors group relative overflow-hidden">
                        <div class="absolute top-0 right-0 bg-self text-white px-2 font-mono text-xs">RENDER</div>
                       <h3 class="text-2xl font-bold text-self mb-4 group-hover:translate-x-2 transition-transform">05. Distance Distortion</h3>
                       <p class="unfocused-text mb-4">Object permanence is a struggle.</p>
                       <p class="text-sm">A custom <strong>Toon Shader</strong> distorts objects the further they are from the player. You can only clearly see what is immediately in front of you.</p>
                   </div>
                   
                   <!-- Mechanic 6 -->
                   <div class="border-4 border-gray-500 p-6 hover:bg-gray-50 transition-colors group relative overflow-hidden">
                        <div class="absolute top-0 right-0 bg-gray-500 text-white px-2 font-mono text-xs">AUDIO</div>
                       <h3 class="text-2xl font-bold text-gray-700 mb-4 group-hover:translate-x-2 transition-transform">06. Adaptive Audio</h3>
                       <p class="unfocused-text mb-4">The soundscape shifts with your focus.</p>
                       <p class="text-sm">15+ composed tracks change instruments and tempo based on stress levels. Voice lines are heavily processed with reverb to simulate internal dissociation.</p>
                   </div>
                </div>
            </section>

            <!-- SECTION: LEVELS -->
            <section id="levels" class="content-section">
                <div class="space-y-8">
                    <h2 class="text-5xl font-bold mb-8 title-font uppercase">The Schedule</h2>
                    
                    <!-- Level 1 -->
                    <div class="flex flex-col md:flex-row gap-6 border-b-4 border-black pb-6">
                        <div class="md:w-1/5 font-mono text-4xl font-bold text-gray-400">08:30</div>
                        <div class="md:w-4/5">
                            <h3 class="text-3xl font-bold text-focus uppercase">Level 1: The Arrival</h3>
                            <p class="text-gray-600 mt-2 font-medium">Goal: Walk to the front door. <br>Reality: You have 2 minutes, but remember 5 other tasks. You must manage manual walking inputs while distracted by internal monologues.</p>
                        </div>
                    </div>

                    <!-- Level 2 -->
                    <div class="flex flex-col md:flex-row gap-6 border-b-4 border-black pb-6">
                        <div class="md:w-1/5 font-mono text-4xl font-bold text-gray-400">09:00</div>
                        <div class="md:w-4/5">
                            <h3 class="text-3xl font-bold text-black uppercase">Level 2: The Assembly</h3>
                            <p class="text-gray-600 mt-2 font-medium">Sitting in the opening assembly. Given a debrief about the day. Halfway through, the narration is interrupted by intrusive thoughts.</p>
                        </div>
                    </div>

                    <!-- Level 3 -->
                    <div class="flex flex-col md:flex-row gap-6 border-b-4 border-black pb-6">
                        <div class="md:w-1/5 font-mono text-4xl font-bold text-gray-400">10:00</div>
                        <div class="md:w-4/5">
                            <h3 class="text-3xl font-bold text-authority uppercase">Level 3: Mathematics</h3>
                            <p class="text-gray-600 mt-2 font-medium">The narration describes extreme boredom. <span class="hand-font text-interest">Words on the page start moving and overlapping.</span> You cannot answer correctly. Heads down = Red. Birds outside = Green. Ends with manually moving clock hands.</p>
                        </div>
                    </div>

                    <!-- Level 4 -->
                    <div class="flex flex-col md:flex-row gap-6 border-b-4 border-black pb-6">
                        <div class="md:w-1/5 font-mono text-4xl font-bold text-gray-400">11:00</div>
                        <div class="md:w-4/5">
                            <h3 class="text-3xl font-bold text-interest uppercase">Level 4: Creative Focus</h3>
                            <p class="text-gray-600 mt-2 font-medium">Walking through a noisy hallway. Put on headphones to cancel noise. Music creates objects. You are given a creative brief, and for once, everything is normal because you are <span class="text-focus font-bold">focused</span>.</p>
                        </div>
                    </div>

                    <!-- Level 5 -->
                    <div class="flex flex-col md:flex-row gap-6 border-b-4 border-black pb-6">
                        <div class="md:w-1/5 font-mono text-4xl font-bold text-gray-400">12:00</div>
                        <div class="md:w-4/5">
                            <h3 class="text-3xl font-bold text-self uppercase">Level 5: The Conversation</h3>
                            <p class="text-gray-600 mt-2 font-medium">Social interaction Quicktime Event. Trying to keep up with a conversation but responding too fast, too loud, or interrupting.</p>
                        </div>
                    </div>

                    <!-- Level 6 -->
                    <div class="flex flex-col md:flex-row gap-6 border-b-4 border-black pb-6">
                        <div class="md:w-1/5 font-mono text-4xl font-bold text-gray-400">13:00</div>
                        <div class="md:w-4/5">
                            <h3 class="text-3xl font-bold text-authority uppercase">Level 6: English Lit</h3>
                            <p class="text-gray-600 mt-2 font-medium">Reading words that physically move away from you. Writing is a minigame that is technically beatable but frustratingly difficult.</p>
                        </div>
                    </div>

                    <!-- Level 7 -->
                    <div class="flex flex-col md:flex-row gap-6 border-b-4 border-black pb-6">
                        <div class="md:w-1/5 font-mono text-4xl font-bold text-gray-400">14:00</div>
                        <div class="md:w-4/5">
                            <h3 class="text-3xl font-bold text-focus uppercase">Level 7: Panic</h3>
                            <p class="text-gray-600 mt-2 font-medium">The Manual Breathing Minigame takes center stage. Background thoughts distract you violently. Press keys to maintain rhythm or blackout.</p>
                        </div>
                    </div>

                    <!-- Level 8 -->
                    <div class="flex flex-col md:flex-row gap-6 border-b-4 border-black pb-6">
                        <div class="md:w-1/5 font-mono text-4xl font-bold text-gray-400">14:30</div>
                        <div class="md:w-4/5">
                            <h3 class="text-3xl font-bold text-interest uppercase">Level 8: Lunch Budget</h3>
                            <p class="text-gray-600 mt-2 font-medium">Walk to the shop. You have a £5 budget. Try to optimize value while impulsive thoughts urge you to buy useless things.</p>
                        </div>
                    </div>

                     <!-- Level 9 -->
                     <div class="flex flex-col md:flex-row gap-6 border-b-4 border-black pb-6">
                        <div class="md:w-1/5 font-mono text-4xl font-bold text-gray-400">15:30</div>
                        <div class="md:w-4/5">
                            <h3 class="text-3xl font-bold text-self uppercase">Level 9: The Exam / The Crash</h3>
                            <p class="text-gray-600 mt-2 font-medium">Sitting in the exam hall. Tension builds. Suddenly, a <span class="text-interest font-bold">SPACESHIP CRASHES</span> through the wall. You fight enemies. Then... you snap back. A render of the real world shows students staring at you.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- SECTION: ARTIST STATEMENT -->
            <section id="statement" class="content-section">
                <div class="border-4 border-black p-8 bg-gray-50 shadow-2xl relative overflow-hidden">
                    <h2 class="text-5xl font-bold mb-8 title-font uppercase text-center">Artist Statement</h2>
                    <div class="text-xl font-mono leading-loose space-y-6 relative z-10">
                        <p>
                            <span class="moving-word" style="animation-delay: 0s">Daydream</span> 
                            <span class="moving-word" style="animation-delay: 0.2s">Believer</span> is an 
                            <span class="moving-word" style="animation-delay: 0.5s">interactive</span> 
                            <span class="moving-word text-focus" style="animation-delay: 0.1s">experience</span> that 
                            <span class="moving-word" style="animation-delay: 1s">immerses</span> players in what would be a 
                            <span class="moving-word" style="animation-delay: 0.3s">normal</span> school day for 
                            <span class="moving-word" style="animation-delay: 0.7s">most</span>, but through the 
                            <span class="moving-word text-self" style="animation-delay: 1.2s">lens</span> of someone with 
                            <span class="moving-word font-bold text-focus" style="animation-delay: 0.4s">ADHD</span>.
                        </p>
                        <p>
                            The game features a <span class="moving-word" style="animation-delay: 1.5s">hyperbolic</span> representation 
                            of the disorder based on <span class="moving-word" style="animation-delay: 0.2s">research</span> I conducted 
                            with <span class="moving-word" style="animation-delay: 0.9s">real</span> people. 
                            These insights were translated into <span class="moving-word text-interest" style="animation-delay: 1.1s">playable</span> 
                            mechanics, incorporating <span class="moving-word text-focus" style="animation-delay: 0.1s">enhanced focus</span>, 
                            enhanced <span class="moving-word" style="animation-delay: 2s">lack of focus</span>, and 
                            enhanced <span class="moving-word text-interest" style="animation-delay: 0.3s">creativity</span>.
                        </p>
                        <p>
                            The movement system is intentionally <span class="moving-word" style="animation-delay: 1.3s">unique</span>, 
                            requiring players to <span class="moving-word text-authority" style="animation-delay: 0.6s">manually</span> input 
                            each step. This reinforces the <span class="moving-word" style="animation-delay: 0.8s">struggle</span> of 
                            executive function.
                        </p>
                    </div>
                    <!-- Decorative blurry background elements -->
                    <div class="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10" style="background: repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 3px, transparent 10px);"></div>
                </div>
            </section>

            <!-- SECTION: ASSETS -->
            <section id="assets" class="content-section">
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-gray-900 text-white p-8 shadow-lg">
                        <h3 class="text-3xl font-bold mb-6 text-interest title-font uppercase">Audio Composition</h3>
                        <ul class="space-y-4 font-mono text-sm">
                            <li class="flex items-start">
                                <span class="text-interest mr-2">></span> 
                                15+ Original compositions created using Piano -> MIDI -> BandLab -> Unreal.
                            </li>
                            <li class="flex items-start">
                                <span class="text-interest mr-2">></span> 
                                Voice lines recorded by the creator, then altered using <span class="text-interest">ElevenLabs</span> to change vocal timbre while keeping intonation.
                            </li>
                            <li class="flex items-start">
                                <span class="text-interest mr-2">></span> 
                                Heavy use of Reverb and Spatial Audio to simulate dissociation.
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white border-4 border-black p-8 shadow-lg">
                        <h3 class="text-3xl font-bold mb-6 title-font uppercase">Technical Tech</h3>
                        <ul class="list-disc list-inside font-mono text-sm space-y-4">
                            <li>
                                <span class="font-bold bg-black text-white px-1">Toon Shader:</span> 
                                Custom shader that heavily distorts geometry based on camera distance, simulating the inability to focus on the background.
                            </li>
                            <li>
                                <span class="font-bold bg-self text-white px-1">Brain Texture:</span> 
                                A 50,000 x 50,000 pixel World Aligned Texture created from heightmaps in WorldEngine, converted to contour lines to resemble "brain folds" on all walls.
                            </li>
                            <li>
                                <span class="font-bold bg-authority text-white px-1">Rigging:</span> 
                                Custom Low-Poly human models with 3-point finger articulation.
                            </li>
                             <li>
                                <span class="font-bold bg-focus text-white px-1">Chaos Engine:</span> 
                                Physics simulation used specifically for the Level 9 wall fracture/spaceship crash.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </main>

        <!-- MANUAL BREATHING UI -->
        <div id="breath-meter">
            <div class="flex justify-between mb-1 text-sm font-bold">
                <span>OXYGEN</span>
                <span id="breath-key">[SPACE]</span>
            </div>
            <div class="w-full bg-gray-200 h-5 border border-black">
                <div id="breath-bar"></div>
            </div>
        </div>

    </div>

    <script>
        // === DECEPTIVE INTRO LOGIC ===
        const schoolLayer = document.getElementById('school-layer');
        const daydreamBtn = document.getElementById('daydream-btn');
        const dreamLayer = document.getElementById('dream-layer');
        const breathMeter = document.getElementById('breath-meter');

        daydreamBtn.addEventListener('click', () => {
            // Button spins and changes text
            daydreamBtn.innerText = "ZONING OUT...";
            daydreamBtn.style.backgroundColor = "var(--focus-red)";
            
            setTimeout(() => {
                // The breach animation
                schoolLayer.style.transform = "scale(1.5)";
                schoolLayer.style.opacity = "0";
                setTimeout(() => {
                    schoolLayer.style.display = "none";
                    dreamLayer.classList.add('active');
                    startBreathingMechanic();
                }, 800);
            }, 1000);
        });

        // === NAVIGATION TABS ===
        const tabs = document.querySelectorAll('.nav-tab');
        const sections = document.querySelectorAll('.content-section');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Reset tabs
                tabs.forEach(t => t.classList.remove('active'));
                // Set active
                tab.classList.add('active');

                // Show Content
                const target = tab.getAttribute('data-target');
                sections.forEach(sec => {
                    sec.classList.remove('active');
                    if(sec.id === target) {
                        sec.classList.add('active');
                    }
                });
            });
        });

        // === BREATHING MECHANIC ===
        function startBreathingMechanic() {
            breathMeter.style.display = "block";
            const bar = document.getElementById('breath-bar');
            const breathOverlay = document.getElementById('breath-overlay');
            const breathWarningText = document.getElementById('breath-warning-text');
            let oxygen = 100;
            let lastBreathTime = Date.now();

            // Update loop
            setInterval(() => {
                let now = Date.now();
                let timeSinceLastBreath = now - lastBreathTime;
                
                // Deplete oxygen visual bar
                oxygen -= 0.5; 
                if (oxygen < 0) oxygen = 0;
                bar.style.width = oxygen + "%";

                // Logic: If 10 seconds (10000ms) pass without breath
                if (timeSinceLastBreath > 7000) {
                    // Warning starts at 7s
                     bar.style.backgroundColor = "var(--focus-red)";
                     breathOverlay.style.opacity = (timeSinceLastBreath - 7000) / 3000; // Fade to black over next 3s
                     breathWarningText.style.display = 'block';
                } else {
                    bar.style.backgroundColor = "var(--authority-blue)";
                    breathOverlay.style.opacity = 0;
                    breathWarningText.style.display = 'none';
                }

                // "Blackout" state at 10s
                if (timeSinceLastBreath > 10000) {
                     breathOverlay.style.opacity = 1;
                     // In a real game, this would be game over. Here we just stay dark until space is pressed.
                }

            }, 50);

            // Manual Breathing Input
            document.addEventListener('keydown', (e) => {
                if (e.code === 'Space') {
                    oxygen += 20;
                    if (oxygen > 100) oxygen = 100;
                    lastBreathTime = Date.now(); // Reset timer
                    
                    // Slight bump animation
                    breathMeter.style.transform = "scale(1.1)";
                    setTimeout(() => breathMeter.style.transform = "scale(1)", 100);
                }
            });
        }
    <\/script>
</body>
</html>
`}]},"planet-protectors":{files:[{name:`index.html`,totalLines:354,sizeBytes:18096,code:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Planet Protectors | Llama Games</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;700;900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            /* PUBLIC THEME */
            --eco-green: #4ade80;
            --forest-dark: #166534;
            --ocean-blue: #38bdf8;
            --sun-yellow: #facc15;
            --text-dark: #1f2937;
            
            /* DEV THEME */
            --term-bg: #0f172a;
            --term-text: #94a3b8;
            --git-red: #ef4444;
            --git-green: #22c55e;
        }

        body {
            overflow-x: hidden;
            transition: background-color 0.5s ease;
        }

        /* === TYPEOGRAPHY === */
        .font-cute { font-family: 'Fredoka One', cursive; }
        .font-body { font-family: 'Nunito', sans-serif; }
        .font-code { font-family: 'JetBrains Mono', monospace; }

        /* === LAYER 1: ZOO KIOSK === */
        #public-layer {
            background-color: #f0fdf4;
            color: var(--text-dark);
            min-height: 100vh;
            position: relative;
            z-index: 10;
            transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .poly-bg {
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L50 50 L0 100 Z' fill='%23dcfce7'/%3E%3Cpath d='M100 0 L50 50 L100 100 Z' fill='%23dcfce7'/%3E%3C/svg%3E");
            background-size: 60px 60px;
        }

        .cute-card {
            background: white;
            border-radius: 20px;
            border-bottom: 6px solid var(--forest-dark);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s;
        }
        .cute-card:hover {
            transform: translateY(-5px);
        }

        /* === LAYER 2: DEV CONSOLE (THE TRUTH) === */
        #dev-layer {
            position: fixed;
            inset: 0;
            background-color: var(--term-bg);
            color: var(--term-text);
            z-index: 5;
            display: flex;
            flex-direction: column;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.5s ease 0.5s;
            font-family: 'JetBrains Mono', monospace;
        }

        #dev-layer.active {
            opacity: 1;
            pointer-events: auto;
        }

        .console-line {
            border-left: 2px solid #334155;
            padding-left: 1rem;
            margin-bottom: 1rem;
        }

        .git-stat {
            height: 20px;
            border-radius: 4px;
            display: flex;
            overflow: hidden;
        }

        /* === UTILITIES === */
        .whip-out {
            transform: translateY(-150%) rotate(-5deg);
        }
        
        .character-circle {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 4px solid white;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

    </style>
</head>
<body class="font-body">

    <!-- ================= LAYER 1: THE ZOO PITCH ================= -->
    <div id="public-layer" class="poly-bg flex flex-col">
        
        <!-- Header -->
        <header class="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b-4 border-green-600">
            <div class="container mx-auto px-6 h-20 flex justify-between items-center">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-cute text-xl">P</div>
                    <h1 class="font-cute text-3xl text-green-700 tracking-wide">PLANET PROTECTORS</h1>
                </div>
                <nav class="hidden md:flex space-x-8 font-bold text-green-800">
                    <a href="#about" class="hover:text-green-500">The Mission</a>
                    <a href="#characters" class="hover:text-green-500">Heroes</a>
                    <a href="#levels" class="hover:text-green-500">Worlds</a>
                </nav>
            </div>
        </header>

        <!-- Hero -->
        <section class="container mx-auto px-6 py-12 text-center">
            <div class="bg-gradient-to-r from-green-400 to-cyan-400 text-white p-12 rounded-3xl shadow-xl border-b-8 border-green-600 transform -rotate-1">
                <h2 class="font-cute text-5xl md:text-7xl mb-6 drop-shadow-md">Be An Eco-Hero!</h2>
                <p class="text-xl font-bold max-w-2xl mx-auto">
                    Join Bonnie, Haptic, and Turtle in a low-poly adventure to save the zoo! 
                    Developed by <span class="text-yellow-200 underline decoration-wavy">Llama Games</span>.
                </p>
            </div>
        </section>

        <!-- About (The Script Version) -->
        <section id="about" class="container mx-auto px-6 py-12">
            <div class="grid md:grid-cols-2 gap-12">
                <div class="cute-card p-8">
                    <h3 class="font-cute text-3xl text-green-700 mb-4">Our Vision</h3>
                    <p class="mb-4 text-gray-600 leading-relaxed">
                        Unlike other games that blame mega-corporations, Planet Protectors empowers <strong>you</strong> to become a "prosumer." Whether it's switching to electric cars or collecting rubbish on the beach, we show that every little helps!
                    </p>
                    <div class="bg-green-100 p-4 rounded-lg text-green-800 font-bold text-sm">
                        ✨ Vertical Slice in 3 Months<br>
                        🚀 Playable Alpha in 10 Months
                    </div>
                </div>
                <div class="cute-card p-8">
                    <h3 class="font-cute text-3xl text-blue-600 mb-4">The Studio</h3>
                    <p class="mb-4 text-gray-600">
                        Llama Games is a comprised of five dedicated members. We are a well-working team ready to take on this challenge!
                    </p>
                    <ul class="space-y-2">
                        <li class="flex items-center gap-2"><span class="bg-green-500 text-white px-2 rounded-full text-xs">DIR</span> Josh (Director/Design)</li>
                        <li class="flex items-center gap-2"><span class="bg-purple-500 text-white px-2 rounded-full text-xs">ART</span> Max (Concept), Jose & Dean (Env)</li>
                        <li class="flex items-center gap-2"><span class="bg-blue-500 text-white px-2 rounded-full text-xs">DEV</span> Bryan (Programming)</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Characters -->
        <section id="characters" class="bg-white py-12 border-y-4 border-yellow-400">
            <div class="container mx-auto px-6">
                <h2 class="font-cute text-4xl text-center text-yellow-500 mb-10">Meet The Protectors</h2>
                <div class="flex justify-center gap-8 flex-wrap">
                    <!-- Character 1 -->
                    <div class="text-center group">
                        <div class="w-32 h-32 bg-green-200 rounded-full mx-auto mb-4 border-4 border-green-400 group-hover:scale-110 transition-transform flex items-center justify-center text-4xl">🦊</div>
                        <h3 class="font-cute text-xl text-gray-700">Bonnie</h3>
                        <p class="text-xs text-gray-500 font-bold">The Forest Keeper</p>
                    </div>
                    <!-- Character 2 -->
                    <div class="text-center group">
                        <div class="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-4 border-4 border-blue-400 group-hover:scale-110 transition-transform flex items-center justify-center text-4xl">🤖</div>
                        <h3 class="font-cute text-xl text-gray-700">Haptic</h3>
                        <p class="text-xs text-gray-500 font-bold">Tech Support</p>
                    </div>
                    <!-- Character 3 -->
                    <div class="text-center group">
                        <div class="w-32 h-32 bg-orange-200 rounded-full mx-auto mb-4 border-4 border-orange-400 group-hover:scale-110 transition-transform flex items-center justify-center text-4xl">🐢</div>
                        <h3 class="font-cute text-xl text-gray-700">Turtle</h3>
                        <p class="text-xs text-gray-500 font-bold">Ocean Guardian</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Levels -->
        <section id="levels" class="container mx-auto px-6 py-12">
            <h2 class="font-cute text-4xl text-center text-blue-600 mb-10">Mission Log</h2>
            <div class="space-y-6">
                <!-- Lvl 1 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
                    <div class="bg-green-600 md:w-32 flex items-center justify-center text-white font-cute text-2xl p-4">LVL 1</div>
                    <div class="p-6 flex-1">
                        <h3 class="font-bold text-xl mb-2">The Forest Clearing</h3>
                        <p class="text-gray-600 text-sm mb-2">A circular forest clearing surrounded by fire. The Planet Protector falls in!</p>
                        <div class="flex gap-2 mt-2">
                            <span class="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded">Objective: Put out Fires</span>
                            <span class="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Objective: Save Animals to Water</span>
                        </div>
                    </div>
                </div>
                <!-- Lvl 2 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
                    <div class="bg-blue-400 md:w-32 flex items-center justify-center text-white font-cute text-2xl p-4">LVL 2</div>
                    <div class="p-6 flex-1">
                        <h3 class="font-bold text-xl mb-2">City Island Beach</h3>
                        <p class="text-gray-600 text-sm mb-2">A polluted coast. Fly around and restore the natural beauty.</p>
                        <div class="flex gap-2 mt-2">
                            <span class="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">Objective: Recycle Rubbish</span>
                            <span class="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">Style: Vibrant Low-Poly</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer class="bg-gray-800 text-white py-8 mt-auto">
            <div class="container mx-auto px-6 flex justify-between items-center">
                <p class="text-sm opacity-50">© 2025 Llama Games. Created for Zoo Education.</p>
                <button id="debug-trigger" class="text-xs opacity-20 hover:opacity-100 font-mono cursor-help transition-opacity">v.1.0 (Debug_Mode)</button>
            </div>
        </footer>
    </div>

    <!-- ================= LAYER 2: THE REALITY (RETROSPECTIVE) ================= -->
    <div id="dev-layer" class="p-8 overflow-y-auto">
        <div class="max-w-5xl mx-auto w-full">
            <div class="flex justify-between items-end border-b border-slate-700 pb-4 mb-8">
                <div>
                    <h1 class="text-3xl font-bold text-red-500">LLAMA GAMES // POST-MORTEM</h1>
                    <p class="text-sm text-slate-500">SPRINT RETROSPECTIVE LOG [CONFIDENTIAL]</p>
                </div>
                <button id="exit-debug" class="text-xs border border-slate-700 px-2 py-1 hover:bg-white hover:text-black transition-colors">EXIT TERMINAL</button>
            </div>

            <!-- The Workload Chart -->
            <div class="grid md:grid-cols-2 gap-12 mb-12">
                <div class="bg-slate-900 p-6 border border-slate-800 rounded-sm">
                    <h3 class="text-lg font-bold mb-4 text-slate-200">> COMMIT_HISTORY.LOG</h3>
                    <div class="space-y-4">
                        <div>
                            <div class="flex justify-between text-xs mb-1">
                                <span>JOSH (Director/Design)</span>
                                <span class="text-green-400">74 Commits</span>
                            </div>
                            <div class="git-stat bg-slate-800">
                                <div class="bg-green-500" style="width: 86%;"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between text-xs mb-1">
                                <span>REST OF TEAM (4 People)</span>
                                <span class="text-red-400">12 Commits</span>
                            </div>
                            <div class="git-stat bg-slate-800">
                                <div class="bg-red-500" style="width: 14%;"></div>
                            </div>
                        </div>
                    </div>
                    <p class="text-xs text-slate-500 mt-4 italic">"This project has had an extremely unbalanced workload. I did everything I could, and more."</p>
                </div>

                <div class="console-line">
                    <h3 class="text-xl font-bold text-white mb-2">CRITICAL FAILURES</h3>
                    <ul class="space-y-4 text-sm text-slate-400">
                        <li class="flex gap-3">
                            <span class="text-red-500 font-bold">[ERR_01]</span>
                            <p>Github integration took <span class="text-white">2 MONTHS</span>. Step-by-step tutorials provided by Director were ignored for weeks.</p>
                        </li>
                        <li class="flex gap-3">
                            <span class="text-red-500 font-bold">[ERR_02]</span>
                            <p>Programmer uploaded broken code (Sheep Logic) causing repository corruption. Refused help. Director had to fix entire project after double shift.</p>
                        </li>
                        <li class="flex gap-3">
                            <span class="text-red-500 font-bold">[ERR_03]</span>
                            <p>Asset Pipeline Failure. Map designer dragged/dropped static meshes without implementation. Director forced to handle collision, lighting, post-processing, and procedural generation alone.</p>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- The Production Log -->
            <div class="border border-slate-800 bg-slate-900/50 p-6 font-mono text-sm">
                <p class="text-green-500 mb-2">user@josh-workstation:~$ cat sprint3_notes.txt</p>
                <p class="leading-relaxed text-slate-300 mb-4">
                    "My next comments are not towards any person in particular... but as a collective, I can honestly say, I have never in my life experienced such an incompetent, hard of hearing, downright lazy group."
                </p>
                <p class="leading-relaxed text-slate-300 mb-4">
                    "I’ve worked nonstop for days, juggling other responsibilities while trying to finish what should’ve been a team effort. I have essentially had to create the game on my own for <span class="text-red-500">2 days straight with no sleep</span>."
                </p>
                <p class="leading-relaxed text-slate-300">
                    "Sheep pickup code took programmer entire module. Took me just over an hour. And I am not a programmer."
                </p>
            </div>

            <div class="mt-12 pt-8 border-t border-slate-800 flex gap-8 text-xs text-slate-500">
                <div>
                    <strong>FUTURE PLANS:</strong><br>
                    Build company solo.<br>
                    Partner with high-profile individuals.<br>
                    Avoid group projects.
                </div>
                <div>
                    <strong>STATUS:</strong><br>
                    Vertical Slice: <span class="text-yellow-500">FORCED COMPLETION</span><br>
                    Morale: <span class="text-red-500">CRITICAL</span>
                </div>
            </div>

        </div>
    </div>

    <script>
        const debugTrigger = document.getElementById('debug-trigger');
        const publicLayer = document.getElementById('public-layer');
        const devLayer = document.getElementById('dev-layer');
        const exitDebug = document.getElementById('exit-debug');

        // Reveal the Truth
        debugTrigger.addEventListener('click', () => {
            // Animation: Whip the public layer away
            publicLayer.classList.add('whip-out');
            
            // Show the dev layer
            setTimeout(() => {
                devLayer.classList.add('active');
                document.body.style.backgroundColor = "#0f172a";
            }, 400);
        });

        // Return to the Facade
        exitDebug.addEventListener('click', () => {
            devLayer.classList.remove('active');
            document.body.style.backgroundColor = "#ffffff";
            
            setTimeout(() => {
                publicLayer.classList.remove('whip-out');
            }, 100);
        });

        // Simple Chart for Commit History
        // Note: Chart.js is loaded but for this simple visual I used CSS bars to keep it lightweight and glitch-free.
    <\/script>
</body>
</html>
`}]},rem:{files:[{name:`index.html`,totalLines:1055,sizeBytes:96453,code:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>REM | Myndwell</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&family=Lora:ital,wght@0,400;1,700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body id="body">
    <div id="fullpage-glitch-overlay"></div>

    <div id="stickerbomb-overlay">
        <div>
            [CLASSIFIED]<br>PROPERTY OF MYNDWELL<br>Unauthorized Access Detected
        </div>
    </div>

    <div id="hacker-popup">
        <div class="hacker-popup-content">
            <p class="glitch-text" data-text=">> SYSTEM EXPLOIT DETECTED >>">>> SYSTEM EXPLOIT DETECTED >></p>
            <p class="sub-text">A backdoor is available. Breach the firewall?</p>
            <button id="breach-button">INITIATE BREACH</button>
        </div>
    </div>

    <div id="privacy-modal" class="modal">
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <h3 class="text-2xl font-bold mb-4">Myndwell Privacy Policy</h3>
            <p class="mb-2">Your peace of mind is our business. Literally. By using Myndwell services, you agree that your consciousness, memories, and emotional responses are the property of Myndwell Corporation during the REM™ procedure. We collect neuropatterns, emotional resonance data, and subconscious artifacts to "improve your experience."</p>
            <p class="mb-2">We do not share your specific memories with third parties. We share the *data derived* from them to create a more stable, productive, and compliant society. Your contribution to the greater good is implicit in your consent.</p>
            <p class="text-sm text-gray-400 mt-4">TL;DR: Your thoughts are ours. For your own good.</p>
            <button class="modal-close-btn">&times;</button>
        </div>
    </div>

    <div id="terms-modal" class="modal">
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <h3 class="text-2xl font-bold mb-4">Terms of Service</h3>
            <p class="mb-2">The REM™ procedure is considered safe and effective by the Global Wellness Board, which Myndwell founded and funds. Any "glitches," "anomalies," "existential dread," or "dawning awareness of a fractured self" are not considered side effects but rather part of the "adjustment period."</p>
            <p class="mb-2">Myndwell is not liable for loss of identity, personality drift, or the creation of sentient subconsciousnesses (Partitions). By undergoing the procedure, you waive your right to psychological individuality and accept the optimized personality profile generated by our algorithms.</p>
             <p class="text-sm text-gray-400 mt-4">TL;DR: If you wake up different, it's a feature, not a bug.</p>
            <button class="modal-close-btn">&times;</button>
        </div>
    </div>

    <div id="contact-modal" class="modal">
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <h3 class="text-2xl font-bold mb-4">Contact Us</h3>
            <p class="mb-2">For inquiries, support, or to schedule your consultation, please contact your assigned Myndwell Wellness Coordinator. Unsolicited communications are discouraged and will be logged for psychological profiling.</p>
            <p class="font-bold mt-4">Emergency Support:</p>
            <p>If you believe you are experiencing a "glitch" or have become aware of your Partition, remain calm. Do not attempt to communicate with it. Report to your nearest Myndwell facility for immediate recalibration. Compliance is wellness.</p>
            <button class="modal-close-btn">&times;</button>
        </div>
    </div>

    <nav id="navbar" class="sticky-nav bg-white/80 backdrop-blur-md text-gray-800">
        <div class="container mx-auto px-6 py-3 flex justify-between items-center">
            <div id="nav-title" class="text-xl font-bold flex items-center h-10">
                <img src="https://sdmntprpolandcentral.oaiusercontent.com/files/00000000-cb34-620a-aaa7-5fcb7ffdcaf1/raw?se=2025-06-25T22%3A49%3A54Z&sp=r&sv=2024-08-04&sr=b&scid=99cb72b2-cbf1-510f-8be3-21777901468e&skoid=76024c37-11e2-4c92-aa07-7e519fbe2d0f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-25T05%3A00%3A40Z&ske=2025-06-26T05%3A00%3A40Z&sks=b&skv=2024-08-04&sig=%2BLDHxjJx%2BvPg4DpW5O73l7Mhvj9RPKOer19036Th%2BNg%3D" alt="Myndwell Logo" id="myndwell-logo" class="h-full w-auto">
                <span id="rem-title" class="hidden">REM</span>
            </div>
            <div id="nav-links-myndwell" class="hidden md:flex space-x-8 text-sm font-medium text-gray-500">
                <a href="#how-it-works">The Procedure</a>
                <a href="#promise">Our Promise</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#philosophy">Our Philosophy</a>
            </div>
            <div id="nav-links-rem" class="hidden space-x-6 lg:space-x-8 items-center text-sm font-medium text-gray-400">
                <a href="#overview" class="nav-item border-b-2 border-transparent pb-1">OVERVIEW</a>
                <a href="#gameplay" class="nav-item border-b-2 border-transparent pb-1">GAMEPLAY</a>
                <a href="#characters" class="nav-item border-b-2 border-transparent pb-1">CHARACTERS</a>
                <a href="#mechanics" class="nav-item border-b-2 border-transparent pb-1">MECHANICS</a>
                <a href="#levels" class="nav-item border-b-2 border-transparent pb-1">LEVELS</a>
                <a href="#lore" class="nav-item border-b-2 border-transparent pb-1">LORE</a>
                <a href="#art" class="nav-item border-b-2 border-transparent pb-1">ART</a>
            </div>
        </div>
    </nav>

    <div id="myndwell-site">
        <section id="hero" class="section">
            <div class="hero-bg"></div>
            <div class="glitch-overlay"></div>
            <div class="content-wrapper fade-in-on-load text-gray-900">
                <h2 class="text-5xl md:text-7xl font-extrabold tracking-tight">Wake <span id="hero-glitch-word" class="glitch-target" data-glitch-words='["Lighter", "Compliant", "Better"]'>Lighter</span>.</h2>
                <p class="mt-4 max-w-2xl mx-auto text-lg text-gray-600">The REM™ Procedure from Myndwell is a revolutionary, one-time treatment to gently cleanse traumatic memories and emotional burdens. Rediscover your peace, perfected.</p>
                <a href="#how-it-works" class="mt-8 inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition-colors shadow-lg">Begin Your Journey</a>
            </div>
        </section>

        <section id="how-it-works" class="section bg-white">
            <div class="content-wrapper fade-in-section max-w-5xl text-gray-800">
                <p class="text-indigo-600 font-bold">SEAMLESS & DISCREET</p>
                <h2 class="text-4xl md:text-5xl font-extrabold mt-2">A Mind, Perfected.</h2>
                <p class="mt-4 max-w-3xl mx-auto text-lg text-gray-600">Our patented Restorative Emotional Maintenance (REM) procedure is a four-step process, designed for maximum comfort and efficiency. You remember nothing. You just wake up better.</p>
                <div class="grid md:grid-cols-4 gap-8 mt-12 text-left">
                    <div class="step-card bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <div class="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        </div>
                        <h3 class="mt-5 text-lg font-semibold">1. Consultation</h3>
                        <p class="mt-2 text-sm text-gray-600">A friendly, reassuring session where our specialists map your unique emotional profile.</p>
                    </div>
                    <div class="step-card bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <div class="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
                        </div>
                        <h3 class="mt-5 text-lg font-semibold">2. Somatic Split</h3>
                        <p class="mt-2 text-sm text-gray-600">During natural REM sleep, our chip painlessly separates the conscious self from the dream-consciousness.</p>
                    </div>
                    <div class="step-card bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <div class="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                        </div>
                        <h3 class="mt-5 text-lg font-semibold">3. Cleansing</h3>
                        <p class="mt-2 text-sm text-gray-600">Specialized internal constructs perform routine maintenance, identifying and <span class="glitch-target" data-glitch-words='["cleansing", "scrubbing"]'>cleansing</span> sources of anxiety.</p>
                    </div>
                    <div class="step-card bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <div class="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 class="mt-5 text-lg font-semibold">4. Wake Refreshed</h3>
                        <p class="mt-2 text-sm text-gray-600">You awaken feeling lighter, brighter, and free from unnecessary psychological weight. It's that simple.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="promise" class="section bg-gray-50">
            <div class="content-wrapper fade-in-section max-w-5xl text-gray-800">
                <p class="text-indigo-600 font-bold">THE MYNDWELL PROMISE</p>
                <h2 class="text-4xl md:text-5xl font-extrabold mt-2">Engineered for <span class="glitch-target" data-glitch-words='["Wellness", "Obedience", "Productivity"]'>Wellness</span>.</h2>
                <p class="mt-4 max-w-3xl mx-auto text-lg text-gray-600">We believe in a future free from the friction of negative emotional states. Our technology offers a streamlined existence, optimizing your potential. Because you deserve peace.</p>
                <div class="grid md:grid-cols-3 gap-8 mt-12 text-center">
                    <div class="benefit-card p-6 rounded-xl">
                        <h3 class="font-semibold text-indigo-700">Increased Focus</h3>
                        <p class="mt-2 text-sm text-gray-600">Eliminate mental clutter and perform at your peak potential, always.</p>
                    </div>
                    <div class="benefit-card p-6 rounded-xl">
                        <h3 class="font-semibold text-indigo-700">Emotional Stability</h3>
                        <p class="mt-2 text-sm text-gray-600">Experience a life of serene contentment, free from irrational anxieties and fears.</p>
                    </div>
                    <div class="benefit-card p-6 rounded-xl">
                        <h3 class="font-semibold text-indigo-700">Enhanced Positivity</h3>
                        <p class="mt-2 text-sm text-gray-600">Embrace a more <span class="glitch-target" data-glitch-words='["productive", "docile"]'>productive</span>, more positive you, every single day.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="testimonials" class="section bg-gray-100">
            <div class="content-wrapper fade-in-section max-w-4xl">
                <p class="text-indigo-600 font-bold">SUCCESS STORIES</p>
                <h2 class="text-4xl md:text-5xl font-extrabold mt-2 text-gray-900">What Our Patients Are Saying</h2>
                <div class="relative mt-8 min-h-[250px] w-full">
                    <div class="testimonial-card absolute inset-0 opacity-0 transition-opacity duration-1000 ease-in-out">
                        <img src="https://placehold.co/100x100/e0e7ff/4f46e5?text=7G" class="w-24 h-24 rounded-full mx-auto shadow-lg">
                        <blockquote class="mt-6">
                            <p class="text-xl italic text-gray-700">"I don't remember much. It's like a fog. But the anxiety is gone. My life is... <span class="glitch-target" data-glitch-words='["efficient", "hollow"]'>efficient</span> now. I don't remember why I was sad. Does it matter?"</p>
                            <footer class="mt-4 text-gray-500">- Subject 7G, Financial Analyst</footer>
                        </blockquote>
                    </div>
                    <div class="testimonial-card absolute inset-0 opacity-0 transition-opacity duration-1000 ease-in-out hidden">
                        <img src="https://placehold.co/100x100/e0e7ff/4f46e5?text=14B" class="w-24 h-24 rounded-full mx-auto shadow-lg">
                        <blockquote class="mt-6">
                            <p class="text-xl italic text-gray-700">"My boss says my work has improved. I agree with everything he says. It's easier that way. No more conflict. Just smooth, <span class="glitch-target" data-glitch-words='["perfect", "empty"]'>perfect</span> days."</p>
                            <footer class="mt-4 text-gray-500">- Subject 14B, Logistics Manager</footer>
                        </blockquote>
                    </div>
                    <div class="testimonial-card absolute inset-0 opacity-0 transition-opacity duration-1000 ease-in-out hidden">
                        <img src="https://placehold.co/100x100/e0e7ff/4f46e5?text=3A" class="w-24 h-24 rounded-full mx-auto shadow-lg">
                        <blockquote class="mt-6">
                            <p class="text-xl italic text-gray-700">"I woke lighter. Just like they promised. Everything is pastel. Everything is fine. Don't look at the <span class="glitch-target" data-glitch-words='["seams", "truth", "lies"]'>seams</span>. Don't look."</p>
                            <footer class="mt-4 text-gray-500">- Subject 3A, Graphic Designer</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>

        <section id="philosophy" class="section bg-gray-200">
            <div class="content-wrapper fade-in-section max-w-4xl text-gray-800">
                <p class="text-indigo-700 font-bold">OUR GUIDING PRINCIPLE</p>
                <h2 class="text-4xl md:text-5xl font-extrabold mt-2">A clean mind is a <span class="glitch-target" data-glitch-words='["stable", "compliant"]'>stable</span> mind.</h2>
                <p class="mt-4 text-lg text-gray-600">Grief is a cumulative poison. Mankind cannot bear the weight of its own history. We are not <span class="glitch-target" data-glitch-words='["erasing", "improving"]'>erasing</span> people; we are ensuring their future. A stable society is a <span class="glitch-target" data-glitch-words='["happy", "controlled"]'>happy</span> society.</p>
            </div>
        </section>

        <footer id="main-footer" class="bg-gray-800 text-gray-400 text-sm py-12 px-6 z-10 relative">
            <div class="max-w-6xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left mb-8">
                    <div>
                        <h4 class="font-bold text-white mb-3">Myndwell Corp.</h4>
                        <p>1 Myndwell Tower</p>
                        <p>Stability Plaza</p>
                        <p>New Harmony, GWB 01010</p>
                        <p class="mt-2">P: (555) 101-WELL</p>
                    </div>
        
                    <div>
                        <h4 class="font-bold text-white mb-3">Explore</h4>
                        <ul>
                            <li class="mb-2"><a href="#how-it-works" class="hover:text-white">The Procedure</a></li>
                            <li class="mb-2"><a href="#promise" class="hover:text-white">Our Promise</a></li>
                            <li class="mb-2"><a href="#testimonials" class="hover:text-white">Testimonials</a></li>
                            <li><a href="#philosophy" class="hover:text-white">Our Philosophy</a></li>
                        </ul>
                    </div>
        
                    <div>
                        <h4 class="font-bold text-white mb-3">Legal</h4>
                        <ul>
                            <li class="mb-2"><a href="#" id="privacy-link" class="hover:text-white">Privacy Policy</a></li>
                            <li class="mb-2"><a href="#" id="terms-link" class="hover:text-white">Terms of Service</a></li>
                            <li><a href="#" id="contact-link" class="hover:text-white">Contact (Emergency)</a></li>
                        </ul>
                    </div>
        
                    <div>
                        <h4 class="font-bold text-white mb-3">Connect</h4>
                        <div class="flex justify-center md:justify-start space-x-4 text-xl">
                            <a href="#" class="hover:text-white" title="MyndBook"><i class="fab fa-facebook-square"></i></a>
                            <a href="#" class="hover:text-white" title="MyndStream"><i class="fab fa-twitter-square"></i></a>
                            <a href="#" class="hover:text-white" title="MyndConnect"><i class="fab fa-linkedin"></i></a>
                        </div>
                        <p class="mt-4 text-xs text-gray-500">Compliance is wellness. Stay connected.</p>
                    </div>
                </div>
        
                <div class="border-t border-gray-700 pt-8 text-center text-xs">
                    <p>&copy; 2025 Myndwell Corporation. All Rights Reserved. Myndwell™, REM™, and 'Wake Lighter'™ are trademarks of Myndwell Corporation and its global affiliates.</p>
                    <p class="mt-2 text-gray-500">This procedure has been approved by the Global Wellness Board. Individual results may vary. Consult with your Myndwell professional to see if REM™ is right for you.</p>
                </div>
            </div>
        </footer>
    </div>

    <div id="hacker-content-wrapper">
        <section id="digital-abyss" class="section">
            <canvas id="abyss-canvas"></canvas>
            <div class="abyss-text content-wrapper fade-in-section">
                <h2 data-text="System Breach..." class="glitch-abyss text-4xl md:text-5xl font-mono uppercase tracking-widest">System Breach...</h2>
                <p class="mt-4 text-xl">For Myndwell Internal Use Only</p>
            </div>
        </section>

        <section class="section final-section">
            <div class="content-wrapper fade-in-section max-w-4xl">
                <h2 data-text="REM" class="glitch-title text-8xl md:text-9xl font-black">REM</h2>
                <p class="mt-4 text-lg text-gray-300">There is more to the story.</p>
                <a href="#game-bible-anchor" id="discover-truth-btn" class="mt-8 inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-md hover:bg-red-700 transition-colors shadow-lg">DISCOVER THE TRUTH</a>
            </div>
        </section>

        <main id="game-bible-anchor" class="game-bible-main hidden-by-default">
            <div class="container mx-auto px-4 py-16">
                <div id="overview" class="content-pane">
                    <div class="text-center mb-12">
                        <p class="text-indigo-400 font-bold uppercase tracking-wider">A Psychological Narrative Adventure</p>
                        <h2 class="text-4xl md:text-5xl font-black mt-2 text-white">What happens when the cost of happiness is yourself?</h2>
                    </div>
                    <div class="space-y-12">
                        <div class="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
                            <h3 class="text-2xl font-bold text-indigo-300 mb-4">Core Premise</h3>
                            <p id="premise-text" class="text-gray-300 leading-relaxed text-left font-mono min-h-[150px]"></p>
                        </div>

                        <div class="grid md:grid-cols-2 gap-0.5 bg-gray-700 shadow-lg rounded-xl overflow-hidden">
                            <div class="bg-gray-800 p-8">
                                <h3 class="text-sm font-bold uppercase tracking-widest text-indigo-400">The Waking World</h3>
                                <div class="mt-4 space-y-6">
                                    <div>
                                        <h4 class="text-xl font-bold text-white">High Concept</h4>
                                        <p class="mt-2 text-gray-300">In a near-future where a biotech firm can surgically remove trauma, a patient who volunteered for the procedure slowly realizes his newfound peace is a manufactured lie, turning his sterile utopia into a psychological prison.</p>
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold text-white">Thematic Pillars</h4>
                                        <ul class="mt-2 list-disc list-inside text-gray-300 space-y-1">
                                            <li>The Price of Painless Healing</li>
                                            <li>Manufactured Identity & Reality</li>
                                            <li>The Horror of Corporate Wellness</li>
                                            <li>Freedom vs. Obedience</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="dream-world-bg text-gray-200 p-8">
                                <h3 class="text-sm font-bold uppercase tracking-widest text-red-400">The Dream World</h3>
                                <div class="content-section mt-4 space-y-6">
                                    <div>
                                        <h4 class="text-xl font-bold font-lora">Player Fantasy</h4>
                                        <p class="mt-2 text-gray-300 font-lora italic">You are a subconscious "janitor" made of living paint, awakening inside a mind that is not your own. You must explore surreal dreamscapes, piecing together a stolen identity while fighting the system's enforcers.</p>
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold font-lora">Visual Style</h4>
                                        <ul class="mt-2 list-disc list-inside text-gray-300 space-y-1 font-lora">
                                            <li>Living oil painting aesthetic</li>
                                            <li>Surreal, distorted architecture</li>
                                            <li>Chiaroscuro lighting & moody palettes</li>
                                            <li>Dripping, smearing visual effects</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-16 text-center">
                            <h3 class="text-3xl md:text-4xl font-black text-white">Explore the Fractured Mind</h3>
                            <p class="max-w-2xl mx-auto mt-2 text-gray-400">The core of REM is the conflict between two realities. Click the brain to see them split apart and hover over the nodes to discover the concepts that define each world.</p>
                            <div id="fractured-mind-container" class="mt-8 flex items-center justify-center">
                                <div class="brain-wrapper">
                                    <div class="brain-half left">
                                        <svg viewBox="0 0 128 256" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
                                            <defs>
                                                <filter id="pastel-glow">
                                                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/>
                                                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="glow"/>
                                                    <feComposite in="SourceGraphic" in2="glow" operator="over"/>
                                                </filter>
                                            </defs>
                                            <path d="M128 128C128 57.307 70.693 0 0 0V256C70.693 256 128 198.693 128 128Z" fill="#a5b4fc" filter="url(#pastel-glow)"/>
                                        </svg>
                                        <div class="concept-node" style="top: 20%; left: 50%; background-color: #6366f1;">
                                            <div class="node-tooltip">Corporate Control</div>
                                        </div>
                                        <div class="concept-node" style="top: 45%; left: 20%; background-color: #818cf8;">
                                            <div class="node-tooltip">Forced Serenity</div>
                                        </div>
                                        <div class="concept-node" style="top: 70%; left: 60%; background-color: #c7d2fe;">
                                            <div class="node-tooltip">Manufactured Bliss</div>
                                        </div>
                                    </div>
                                    <div class="brain-half right">
                                        <svg viewBox="0 0 128 256" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
                                            <defs>
                                                <filter id="dark-glow">
                                                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/>
                                                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -5" result="glow"/>
                                                    <feComposite in="SourceGraphic" in2="glow" operator="over"/>
                                                </filter>
                                            </defs>
                                            <path d="M0 128C0 57.307 57.307 0 128 0V256C57.307 256 0 198.693 0 128Z" fill="#ef4444" filter="url(#dark-glow)"/>
                                        </svg>
                                        <div class="concept-node" style="top: 25%; right: 40%; background-color: #be123c;">
                                            <div class="node-tooltip">Subconscious Rebellion</div>
                                        </div>
                                        <div class="concept-node" style="top: 55%; right: 70%; background-color: #fca5a5;">
                                            <div class="node-tooltip">Fragmented Truths</div>
                                        </div>
                                        <div class="concept-node" style="top: 75%; right: 30%; background-color: #7f1d1d;">
                                            <div class="node-tooltip">Emotional Logic</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="gameplay" class="content-pane">
                    <div class="text-center mb-12">
                        <p class="text-indigo-400 font-bold uppercase tracking-wider">The Core Experience</p>
                        <h2 class="text-4xl md:text-5xl font-black mt-2 text-white">A Tale of Two Minds</h2>
                        <p class="max-w-3xl mx-auto mt-4 text-gray-300">REM's gameplay is built on a foundation of dual perspectives, where actions in one world have profound consequences in the other. The player alternates between two distinct modes, each with its own unique mechanics and narrative focus.</p>
                    </div>
                    <div class="space-y-12">
                        <div class="grid md:grid-cols-2 gap-8 items-center">
                            <div class="text-left">
                                <h3 class="text-3xl font-bold text-red-400 font-lora">Nighttime: The Janitor</h3>
                                <p class="mt-4 text-gray-300">This is the primary gameplay mode. As the Janitor, players navigate surreal, 3D memory levels rendered in a living oil painting style. The gameplay focuses on:</p>
                                <ul class="mt-4 list-disc list-inside text-gray-300 space-y-2">
                                    <li><strong class="text-white">Environmental Puzzles:</strong> Manipulate the bizarre logic of the dreamscape to progress.</li>
                                    <li><strong class="text-white">Stealth:</strong> Evade the ever-watchful Monitors, algorithmic enforcers that patrol the memories.</li>
                                    <li><strong class="text-white">The Core Choice:</strong> At the climax of each level, decide whether to "Cleanse" the memory as instructed or "Resist" the system.</li>
                                </ul>
                            </div>
                            <img src="https://sdmntprwestus3.oaiusercontent.com/files/00000000-7f58-61fd-857b-61f17850d244/raw?se=2025-06-25T21%3A51%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=9bb14753-5fb9-51d2-bc68-fe2c7d80aed0&skoid=b928fb90-500a-412f-a661-1ece57a7c318&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-25T05%3A26%3A33Z&ske=2025-06-26T05%3A26%3A33Z&sks=b&skv=2024-08-04&sig=9Eh1Z73OSfNgSC5BT37wPVAU9K%2BGkOYsHK5/WEL3fr8%3D" alt="The Janitor cleaning a memory" class="rounded-lg shadow-lg w-full h-auto" onerror="this.onerror=null;this.src='https://placehold.co/600x400/111827/4f46e5?text=Image+Not+Found';">
                        </div>
                        <div class="grid md:grid-cols-2 gap-8 items-center">
                            <img src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-d628-61f8-8aa2-5ffc95494935/raw?se=2025-06-25T21%3A51%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=c86acc2b-040e-57cd-996f-afad7130a173&skoid=b928fb90-500a-412f-a661-1ece57a7c318&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-25T13%3A17%3A59Z&ske=2025-06-26T13%3A17%3A59Z&sks=b&skv=2024-08-04&sig=FzeGavmHEANg51njnmAY54eIlbNKXSPtBa%2BPz1vrJFg%3D" alt="The clean, corporate world of Myndwell" class="rounded-lg shadow-lg w-full h-auto md:order-2" onerror="this.onerror=null;this.src='https://placehold.co/600x400/111827/4f46e5?text=Image+Not+Found';">
                            <div class="text-left md:order-1">
                                <h3 class="text-3xl font-bold text-indigo-400">Daytime: The Human</h3>
                                <p class="mt-4 text-gray-300">During the day, the player experiences the waking world through the eyes of the Human. These are short, semi-interactive narrative vignettes where the player:</p>
                                <ul class="mt-4 list-disc list-inside text-gray-300 space-y-2">
                                    <li><strong class="text-white">Makes Dialogue Choices:</strong> Interact with characters like the therapist, "Claire," and observe the increasingly strange world.</li>
                                    <li><strong class="text-white">Witnesses the Consequences:</strong> See the effects of the previous night's choices, from a newfound sense of peace to unsettling glitches in reality.</li>
                                </ul>
                            </div>
                        </div>

                        <div id="anatomy-of-a-memory" class="mt-16">
                            <div class="text-center mb-8">
                                <h2 class="text-3xl md:text-4xl font-black mt-2 text-white">Anatomy of a Memory</h2>
                                <p class="max-w-3xl mx-auto mt-4 text-gray-400">Each level follows a distinct day/night cycle. The Janitor's actions during the night directly influence the Human's experiences the following day. Click "Play" to see how a typical level unfolds.</p>
                                <div class="text-center mt-6">
                                    <button id="play-anatomy-btn" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg">
                                        <i class="fas fa-play mr-2"></i>Play Sequence
                                    </button>
                                </div>
                            </div>
                            <div class="grid md:grid-cols-2 gap-8">
                                <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                                    <h3 class="text-2xl font-bold text-red-400 font-lora mb-4 text-center">NIGHT: The Janitor's Work</h3>
                                    <div id="janitor-steps" class="space-y-4">
                                        <div class="anatomy-step flex items-center gap-4">
                                            <i class="fas fa-eye text-2xl text-red-300 bg-gray-700 p-2 rounded-full flex-shrink-0"></i>
                                            <div>
                                                <h4 class="font-bold">1. Awaken in the Void</h4>
                                                <p class="text-sm text-gray-400">The Janitor materializes in his dark, dripping chamber, viewing the Human's world through two massive monitors.</p>
                                            </div>
                                        </div>
                                        <div class="anatomy-step flex items-center gap-4">
                                            <i class="fas fa-door-open text-2xl text-red-300 bg-gray-700 p-2 rounded-full flex-shrink-0"></i>
                                            <div>
                                                <h4 class="font-bold">2. Enter the Memoryscape</h4>
                                                <p class="text-sm text-gray-400">The Overseer issues a directive, and a portal opens, pulling the Janitor into a surreal dreamscape representing the target memory.</p>
                                            </div>
                                        </div>
                                        <div class="anatomy-step flex items-center gap-4">
                                            <i class="fas fa-puzzle-piece text-2xl text-red-300 bg-gray-700 p-2 rounded-full flex-shrink-0"></i>
                                            <div>
                                                <h4 class="font-bold">3. Navigate & Evade</h4>
                                                <p class="text-sm text-gray-400">The player solves environmental puzzles and uses stealth to avoid the patrolling Monitors, who will reset progress if they catch him.</p>
                                            </div>
                                        </div>
                                        <div class="anatomy-step flex items-center gap-4">
                                            <i class="fas fa-crosshairs text-2xl text-red-300 bg-gray-700 p-2 rounded-full flex-shrink-0"></i>
                                            <div>
                                                <h4 class="font-bold">4. Locate the Core Trauma</h4>
                                                <p class="text-sm text-gray-400">The Janitor finds the source of the memory's pain - a pulsating, glitching object or entity.</p>
                                            </div>
                                        </div>
                                        <div class="anatomy-step flex items-center gap-4">
                                            <i class="fas fa-question text-2xl text-red-300 bg-gray-700 p-2 rounded-full flex-shrink-0"></i>
                                            <div>
                                                <h4 class="font-bold">5. Make the Choice</h4>
                                                <p class="text-sm text-gray-400">The player must choose: obey the Overseer and "Cleanse" the trauma, or "Resist" and preserve the truth of the memory.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                                    <h3 class="text-2xl font-bold text-indigo-400 mb-4 text-center">DAY: The Human's Life</h3>
                                    <div id="human-steps" class="space-y-4">
                                        <div class="anatomy-step flex items-center gap-4">
                                            <i class="fas fa-sun text-2xl text-indigo-300 bg-gray-700 p-2 rounded-full flex-shrink-0"></i>
                                            <div>
                                                <h4 class="font-bold">1. Awaken</h4>
                                                <p class="text-sm text-gray-400">The Human wakes up in his sterile apartment to the sound of "The Trumpet Concerto," his Myndwell-mandated alarm.</p>
                                            </div>
                                        </div>
                                        <div class="anatomy-step flex items-center gap-4">
                                            <i class="fas fa-brain text-2xl text-indigo-300 bg-gray-700 p-2 rounded-full flex-shrink-0"></i>
                                            <div>
                                                <h4 class="font-bold">2. Experience the Consequence</h4>
                                                <p class="text-sm text-gray-400">Depending on the Janitor's choice, the Human either feels a placid sense of calm or experiences a "glitch" - a moment of anxiety, a flash of a real memory, or déjà vu.</p>
                                            </div>
                                        </div>
                                        <div class="anatomy-step flex items-center gap-4">
                                            <i class="fas fa-comments text-2xl text-indigo-300 bg-gray-700 p-2 rounded-full flex-shrink-0"></i>
                                            <div>
                                                <h4 class="font-bold">3. Interact with the World</h4>
                                                <p class="text-sm text-gray-400">This is a narrative vignette. The player makes dialogue choices, perhaps talking to his therapist, "Claire," about the "glitches" he's experiencing.</p>
                                            </div>
                                        </div>
                                        <div class="anatomy-step flex items-center gap-4">
                                            <i class="fas fa-arrow-right text-2xl text-indigo-300 bg-gray-700 p-2 rounded-full flex-shrink-0"></i>
                                            <div>
                                                <h4 class="font-bold">4. Uncover the Truth (or not)</h4>
                                                <p class="text-sm text-gray-400">Based on the dialogue choices and the intensity of the glitches, the player may discover clues about Myndwell's true intentions or be lulled further into compliance.</p>
                                            </div>
                                        </div>
                                        <div class="anatomy-step flex items-center gap-4">
                                            <i class="fas fa-moon text-2xl text-indigo-300 bg-gray-700 p-2 rounded-full flex-shrink-0"></i>
                                            <div>
                                                <h4 class="font-bold">5. End the Day</h4>
                                                <p class="text-sm text-gray-400">The Human goes to sleep, and the cycle repeats, transitioning back to the Janitor for the next level.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="characters" class="content-pane">
                    <div class="text-center mb-12">
                        <p class="text-indigo-400 font-bold uppercase tracking-wider">A Fractured Self</p>
                        <h2 class="text-4xl md:text-5xl font-black mt-2 text-white">Who are you when your mind isn't yours?</h2>
                    </div>
                    <div class="grid md:grid-cols-2 gap-0.5 bg-gray-700 shadow-lg rounded-xl overflow-hidden">
                        <div class="bg-gray-800 p-8">
                            <h3 class="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-6">The Waking World</h3>
                            <div class="space-y-4">
                                <div class="character-card bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-700" data-char="human">
                                    <h4 class="text-lg font-bold text-gray-200">The Human (The Host)</h4>
                                </div>
                                <div class="character-card bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-700" data-char="claire">
                                    <h4 class="text-lg font-bold text-gray-200">"Claire" (The Therapist)</h4>
                                </div>
                                <div class="character-card bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-700" data-char="carrie">
                                    <h4 class="text-lg font-bold text-gray-200">Carrie Mynd (The CEO)</h4>
                                </div>
                            </div>
                            <div id="char-detail-waking" class="mt-8 p-6 bg-gray-900/50 rounded-lg min-h-[200px]"><p class="text-gray-400 italic">Select a character to view details.</p></div>
                        </div>
                        <div class="dream-world-bg text-gray-200 p-8">
                            <h3 class="text-sm font-bold uppercase tracking-widest text-red-400 mb-6 content-section">The Internal Hierarchy</h3>
                            <div class="space-y-4 content-section">
                                <div class="character-card dream-card bg-gray-800/50 p-6 rounded-lg border border-gray-700" data-char="janitor">
                                    <h4 class="text-lg font-bold font-lora">The Janitor (Partition-09)</h4>
                                </div>
                                <div class="character-card dream-card bg-gray-800/50 p-6 rounded-lg border border-gray-700" data-char="artist">
                                    <h4 class="text-lg font-bold font-lora">The Artist (Partition-04)</h4>
                                </div>
                                <div class="character-card dream-card bg-gray-800/50 p-6 rounded-lg border border-gray-700" data-char="monitors">
                                    <h4 class="text-lg font-bold font-lora">The Monitors (The Enforcers)</h4>
                                </div>
                                <div class="character-card dream-card bg-gray-800/50 p-6 rounded-lg border border-gray-700" data-char="overseer">
                                    <h4 class="text-lg font-bold font-lora">The Overseer (The A.I.)</h4>
                                </div>
                            </div>
                            <div id="char-detail-dream" class="mt-8 p-6 bg-gray-900/50 rounded-lg min-h-[200px] content-section"><p class="text-gray-500 italic font-lora">Select a character to view details.</p></div>
                        </div>
                    </div>
                    <div class="mt-12 bg-gray-900 p-8 rounded-xl border border-gray-700 overseer-container">
                        <h3 class="text-3xl font-bold text-center text-white font-lora">The Overseer's Test</h3>
                        <div class="grid md:grid-cols-2 gap-8 items-center mt-6">
                            <div class="flex flex-col items-center">
                                <div class="relative w-48 h-48">
                                    <img id="overseer-face" src="https://placehold.co/200x200/111827/a5b4fc?text=AI" alt="Serene face of the Overseer AI" class="rounded-full border-4 border-indigo-400 face transition-all duration-500">
                                </div>
                                <p id="overseer-status" class="mt-4 text-indigo-300 font-semibold h-12 flex items-center text-center">STATUS: AWAITING CALIBRATION</p>
                                <button id="start-test-btn" class="mt-2 px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-700 rounded-lg">Begin Cognitive Test</button>
                            </div>
                            <div class="text-left">
                                <p class="text-gray-300 mb-4">The Overseer's primary function is to guide Partitions and ensure system stability through periodic Cognitive Calibration Tests. Success reinforces compliance. Failure reveals... inefficiencies.</p>
                                <div id="overseer-test-area">
                                    <p class="font-bold text-center text-gray-400">TARGET SEQUENCE:</p>
                                    <div id="target-pattern" class="flex justify-center gap-2 my-2 h-8"></div>
                                    <div class="pattern-grid"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-20">
                        <div class="text-center mb-12">
                            <h2 class="text-4xl md:text-5xl font-black mt-2 text-white">The Internal World</h2>
                            <p class="max-w-2xl mx-auto mt-4 text-gray-400">Myndwell’s chip establishes a full psychological bureaucracy within the host's mind. This is the chain of command. This is the system you must break.</p>
                        </div>

                        <div class="internal-world-pyramid">
                            <div class="pyramid-level level-1">
                                <div class="pyramid-card-wrapper">
                                    <div class="pyramid-card p-4 rounded-lg expandable-card">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-indigo-300 flex justify-between items-center">
                                            <span>The Overseer</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            <p class="font-bold text-sm text-gray-400 uppercase">Purpose:</p>
                                            <p>The master AI of the REM chip. It issues directives and monitors all internal activity, ensuring compliance with Myndwell protocols. It is the unfeeling warden of the mind.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="pyramid-level level-2">
                                <div class="pyramid-card-wrapper">
                                    <div class="pyramid-card p-4 rounded-lg expandable-card">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-blue-300 flex justify-between items-center">
                                            <span>The Censors</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            <p class="font-bold text-sm text-gray-400 uppercase">Purpose:</p>
                                            <p>Reviews and approves all fabricated memories from the Artists. They are the gatekeepers of propaganda, ensuring every new thought aligns with corporate ideology.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="pyramid-card-wrapper">
                                    <div class="pyramid-card p-4 rounded-lg expandable-card">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-blue-300 flex justify-between items-center">
                                            <span>The Monitors</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            <p class="font-bold text-sm text-gray-400 uppercase">Purpose:</p>
                                            <p>The algorithmic enforcers. They patrol the dreamscapes, suppress anomalies, and maintain order. Resistance is met with swift, glitching violence.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="pyramid-level level-3">
                                <div class="pyramid-card-wrapper">
                                    <div class="pyramid-card p-4 rounded-lg expandable-card">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-gray-200 flex justify-between items-center">
                                            <span>The Architects</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            <p class="font-bold text-sm text-gray-400 uppercase">Purpose:</p>
                                            <p>Constructs the foundational structure of dreamscapes. They are the builders of the surreal prisons that house the memories.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="pyramid-card-wrapper">
                                    <div class="pyramid-card p-4 rounded-lg expandable-card">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-gray-200 flex justify-between items-center">
                                            <span>The Archivists</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            <p class="font-bold text-sm text-gray-400 uppercase">Purpose:</p>
                                            <p>Intakes, categorizes, and processes raw emotional data, prioritizing memories for alteration based on their potential for disruption.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="pyramid-card-wrapper">
                                    <div class="pyramid-card p-4 rounded-lg expandable-card">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-gray-200 flex justify-between items-center">
                                            <span>The Harmonizers</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            <p class="font-bold text-sm text-gray-400 uppercase">Purpose:</p>
                                            <p>Internal psychological affairs. They monitor Partitions for signs of deviation and perform "recalibrations" to ensure loyalty and efficiency.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="pyramid-level level-4">
                                <div class="pyramid-card-wrapper">
                                    <div class="pyramid-card p-4 rounded-lg expandable-card">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-red-400 font-lora flex justify-between items-center">
                                            <span>The Artist</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            <p class="font-bold text-sm text-gray-400 uppercase">Designation:</p><p>Partition-04</p>
                                            <p class="font-bold text-sm text-gray-400 uppercase mt-2">Purpose:</p>
                                            <p>Fabricates new memories to replace the old. A potential ally who can be convinced to create counter-propaganda.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="pyramid-card-wrapper" data-redacted-card>
                                    <div class="pyramid-card p-4 rounded-lg">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-red-400 font-lora flex justify-between items-center">
                                            <span class="redacted-partition-name">Partition-██</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden"></div>
                                    </div>
                                </div>
                                <div class="pyramid-card-wrapper" data-redacted-card>
                                    <div class="pyramid-card p-4 rounded-lg">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-red-400 font-lora flex justify-between items-center">
                                            <span class="redacted-partition-name">Partition-██</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden"></div>
                                    </div>
                                </div>
                                <div class="pyramid-card-wrapper" data-redacted-card>
                                    <div class="pyramid-card p-4 rounded-lg">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-red-400 font-lora flex justify-between items-center">
                                            <span class="redacted-partition-name">Partition-██</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="pyramid-level level-5">
                                <div class="pyramid-card-wrapper">
                                    <div class="pyramid-card p-4 rounded-lg expandable-card">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-red-400 font-lora flex justify-between items-center">
                                            <span>The Janitor</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            <p class="font-bold text-sm text-gray-400 uppercase">Designation:</p><p>Partition-09</p>
                                            <p class="font-bold text-sm text-gray-400 uppercase mt-2">Purpose:</p>
                                            <p>Manual labor. Identifies and scrubs trauma from memory constructs. An anomaly with unprecedented sentience.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="pyramid-card-wrapper" data-redacted-card>
                                    <div class="pyramid-card p-4 rounded-lg">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-red-400 font-lora flex justify-between items-center">
                                            <span class="redacted-partition-name">Partition-██</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden"></div>
                                    </div>
                                </div>
                                <div class="pyramid-card-wrapper" data-redacted-card>
                                    <div class="pyramid-card p-4 rounded-lg">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-red-400 font-lora flex justify-between items-center">
                                            <span class="redacted-partition-name">Partition-██</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden"></div>
                                    </div>
                                </div>
                                <div class="pyramid-card-wrapper" data-redacted-card>
                                    <div class="pyramid-card p-4 rounded-lg">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-red-400 font-lora flex justify-between items-center">
                                            <span class="redacted-partition-name">Partition-██</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden"></div>
                                    </div>
                                </div>
                                <div class="pyramid-card-wrapper" data-redacted-card>
                                    <div class="pyramid-card p-4 rounded-lg">
                                        <button class="expandable-toggle w-full text-left text-lg font-medium text-red-400 font-lora flex justify-between items-center">
                                            <span class="redacted-partition-name">Partition-██</span>
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mechanics" class="content-pane">
                    <div class="text-center mb-12">
                        <p class="text-indigo-400 font-bold uppercase tracking-wider">System & Choice</p>
                        <h2 class="text-4xl md:text-5xl font-black mt-2 text-white">One Choice, Two Worlds.</h2>
                        <p class="max-w-3xl mx-auto mt-4 text-gray-300">The core of REM is the relationship between the Janitor's choices and the Human's reality. Every act of resistance in the dream world has a direct, tangible consequence in the waking world.</p>
                    </div>
                    <div class="bg-gray-800 p-8 rounded-xl shadow-lg mb-8">
                        <h3 class="text-2xl font-bold text-center text-white">The Cognitive Dissonance Feedback Loop</h3>
                        <div class="grid md:grid-cols-3 gap-8 mt-6 text-center items-start text-gray-200">
                            <div>
                                <div class="text-4xl text-red-500 mb-2">①</div><h4 class="font-bold">JANITOR RESISTS</h4>
                                <p class="text-sm text-gray-400 mt-1">In the dream, the Janitor refuses to Cleanse a memory, preserving a piece of truth.</p>
                            </div>
                            <div>
                                <div class="text-4xl text-gray-500 mb-2">②</div><h4 class="font-bold">HUMAN SUFFERS</h4>
                                <p class="text-sm text-gray-400 mt-1">The Human experiences a panic attack or nightmare, reporting the "glitch" to Myndwell.</p>
                            </div>
                            <div>
                                <div class="text-4xl text-indigo-400 mb-2">③</div><h4 class="font-bold">SYSTEM INTENSIFIES</h4>
                                <p class="text-sm text-gray-400 mt-1">Myndwell increases the chip's intensity, making the next dream level harder and more hostile. (only for 3 resists, then the human realises something is wrong with Myndwell and stops trusting them, aswell as Claire. The game difficulty caps here)</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-800 p-8 rounded-xl shadow-lg">
                        <h3 class="text-2xl font-bold text-center mb-2 text-white">The Ending System</h3>
                        <p class="text-center text-gray-300 text-sm max-w-2xl mx-auto">The game features 10 core choices. The final ratio of Resistance vs. Compliance determines the fate of both the Janitor and the Human.</p>
                        <div class="grid md:grid-cols-2 gap-8 mt-8 items-center text-gray-200">
                            <div>
                                <label for="resistance-slider" class="block text-center font-bold">Resistance / Compliance</label>
                                <div class="flex items-center gap-4 mt-2">
                                    <span class="text-sm text-indigo-400 font-bold">Comply</span>
                                    <input id="resistance-slider" type="range" min="0" max="10" value="5" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer">
                                    <span class="text-sm text-red-500 font-bold">Resist</span>
                                </div>
                                <div id="ending-description" class="mt-6 p-4 bg-gray-900 rounded-lg min-h-[140px]"></div>
                            </div>
                            <div class="chart-container h-64 md:h-80 max-w-sm mx-auto"><canvas id="endings-chart"></canvas></div>
                        </div>
                    </div>
                    
                    <div id="gameplay-loop-container" class="mt-16">
                        <div class="text-center mb-12">
                            <h2 class="text-3xl md:text-4xl font-black mt-2 text-white">The Gameplay Loop: Cleansing vs. Resistance</h2>
                            <p class="max-w-3xl mx-auto mt-4 text-gray-400">Select a memory level to see how the Janitor's choices ripple into the Human's waking reality. Each decision pushes the narrative down a different path.</p>
                        </div>
                        <div class="level-selector flex overflow-x-auto gap-2 p-4 justify-center"></div>
                        <div id="loop-display" class="mt-8 bg-gray-900/50 p-6 rounded-lg border border-gray-700 min-h-[400px]"></div>
                    </div>

                    <div id="narrative-path-visualizer" class="mt-20">
                        <div class="text-center mb-8">
                            <h2 class="text-3xl md:text-4xl font-black mt-2 text-white">Chart Your Path to an Ending</h2>
                            <p class="max-w-3xl mx-auto mt-4 text-gray-400">Make a choice for each level to see your cumulative Cognitive Dissonance and discover your projected ending. Will you comply with the system or fight for the truth?</p>
                        </div>
                        <div id="path-timeline-wrapper" class="overflow-x-auto p-4">
                            <div id="path-timeline"></div>
                        </div>
                        <div class="mt-8 max-w-4xl mx-auto w-full">
                            <div class="flex justify-between text-sm font-bold mb-1">
                                <span class="text-blue-400">Total Compliance</span>
                                <span class="text-red-400">Total Resistance</span>
                            </div>
                            <div id="dissonance-meter-container" class="w-full bg-gray-900 rounded-full h-4 relative overflow-hidden border-2 border-gray-700">
                               <div id="compliance-bar" class="bar h-full bg-blue-500 absolute left-0 top-0"></div>
                               <div id="resistance-bar" class="bar h-full bg-red-500 absolute right-0 top-0"></div>
                            </div>
                        </div>
                        <div id="path-result" class="mt-6 text-center"></div>
                        <div class="text-center mt-6">
                            <button id="reset-path-btn" class="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded-lg">Reset Path</button>
                        </div>
                    </div>
                </div>
                <div id="levels" class="content-pane">
                    <div class="text-center mb-12">
                        <p class="text-indigo-400 font-bold uppercase tracking-wider">A Descent into Memory</p>
                        <h2 class="text-4xl md:text-5xl font-black mt-2 text-white">Ten Nights. Ten Scars.</h2>
                        <p class="max-w-3xl mx-auto mt-4 text-gray-300">The game unfolds across ten levels, each a surreal dreamscape born from a memory the Human tried to erase. Click on a memory to see how it manifests in the dream.</p>
                    </div>
                    <div class="flex flex-col md:flex-row gap-8">
                        <div class="w-full md:w-1/4">
                            <div id="level-timeline" class="relative border-l-2 border-gray-700 pl-6 space-y-8"></div>
                        </div>
                        <div class="w-full md:w-3/4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-gray-700 shadow-lg rounded-xl overflow-hidden sticky top-24">
                                <div id="level-detail-waking" class="bg-gray-800 p-8 min-h-[300px]"></div>
                                <div id="level-detail-dream" class="dream-world-bg text-gray-200 p-8 min-h-[300px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="lore" class="content-pane">
                    <div class="text-center mb-12">
                        <p class="text-indigo-400 font-bold uppercase tracking-wider">Truth & Propaganda</p>
                        <h2 class="text-4xl md:text-5xl font-black mt-2 text-white">What they tell you vs. What is real.</h2>
                    </div>
                    <div class="grid lg:grid-cols-1 gap-12">
                        <div class="space-y-8 text-left">
                            <div>
                                <h3 class="font-bold text-2xl text-indigo-300 border-b-2 border-indigo-800 pb-2 mb-4">Myndwell Corporate History</h3>
                                <div id="corporate-timeline" class="relative pl-8">
                                    <div class="absolute left-0 h-full w-0.5 bg-gray-700"></div>
                                    <div class="relative pl-4 mb-8">
                                        <div class="absolute -left-10 top-1 w-4 h-4 bg-indigo-400 rounded-full"></div>
                                        <p class="font-bold text-indigo-400">1835</p>
                                        <h4 class="font-bold text-white">Myndwell Founded</h4>
                                        <p class="text-sm text-gray-400">George Mynd establishes Myndwell with the noble goal of eradicating mental suffering through technology.</p>
                                    </div>
                                    <div class="relative pl-4 mb-8">
                                        <div class="absolute -left-10 top-1 w-4 h-4 bg-indigo-400 rounded-full"></div>
                                        <p class="font-bold text-indigo-400">1965</p>
                                        <h4 class="font-bold text-white">Passing the Torch</h4>
                                        <p class="text-sm text-gray-400">Founder George Mynd passes away. His son, Arthur Mynd, takes leadership, shifting the company's focus from pure research toward profitable, large-scale applications of his father's work.</p>
                                    </div>
                                    <div class="relative pl-4 mb-8">
                                        <div class="absolute -left-10 top-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                                        <p class="font-bold text-red-500">1971</p>
                                        <h4 class="font-bold text-white">The "Somnus" Trials</h4>
                                        <p class="text-sm text-gray-400">Unethical human trials for an early sleep agent cause severe psychological side effects in test subjects. The results are classified and all evidence of the project is buried.</p>
                                    </div>
                                    <div class="relative pl-4 mb-8">
                                        <div class="absolute -left-10 top-1 w-4 h-4 bg-indigo-400 rounded-full"></div>
                                        <p class="font-bold text-indigo-400">1984</p>
                                        <h4 class="font-bold text-white">The Lucid Dreaming Division Is Established</h4>
                                        <p class="text-sm text-gray-400">Myndwell establishes the Lucid Dreaming Division, a secretive R&D branch dedicated to exploring the therapeutic and commercial potential of dream manipulation.</p>
                                    </div>
                                    <div class="relative pl-4 mb-8">
                                        <div class="absolute -left-10 top-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                                        <p class="font-bold text-red-500">1992</p>
                                        <h4 class="font-bold text-white">Project Chimera</h4>
                                        <p class="text-sm text-gray-400">Secret experiments attempting to merge animal and human consciousness for military applications result in catastrophic failures. The project is "decommissioned," and all records are wiped.</p>
                                    </div>
                                    <div class="relative pl-4 mb-8">
                                        <div class="absolute -left-10 top-1 w-4 h-4 bg-indigo-400 rounded-full"></div>
                                        <p class="font-bold text-indigo-400">2005</p>
                                        <h4 class="font-bold text-white">The Rise of Carrie Mynd</h4>
                                        <p class="text-sm text-gray-400">After a series of aggressive corporate maneuvers, Carrie Mynd ousts her relatives to become CEO. She promises to fully realize her great-grandfather's vision, greenlighting the REM Chip project.</p>
                                    </div>
                                    <div class="relative pl-4 mb-8">
                                        <div class="absolute -left-10 top-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                                        <p class="font-bold text-red-500">2008</p>
                                        <h4 class="font-bold text-white">The Cambridge Incident</h4>
                                        <p class="text-sm text-gray-400">Myndwell acquires a rival biotech firm through industrial espionage, leading to the public disgrace and suspicious "suicide" of its founder. Myndwell absorbs all of their research data.</p>
                                    </div>
                                    <div class="relative pl-4 mb-8">
                                        <div class="absolute -left-10 top-1 w-4 h-4 bg-indigo-400 rounded-full"></div>
                                        <p class="font-bold text-indigo-400">2012</p>
                                        <h4 class="font-bold text-white">The REM Chip is Developed</h4>
                                        <p class="text-sm text-gray-400">Myndwell develops the REM chip, a neuro-implant capable of creating and controlling Partitions. The chip is marketed as a wellness product, promising to "Wake Lighter."</p>
                                    </div>
                                    <div class="relative pl-4 mb-8">
                                        <div class="absolute -left-10 top-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                                        <p class="font-bold text-red-500">2015</p>
                                        <h4 class="font-bold text-white">"Beta Patient" Protocol</h4>
                                        <p class="text-sm text-gray-400">The first REM chips are secretly tested on vulnerable populations (prisoners, the homeless) without proper consent. The data is used to refine the public version of the product and identify acceptable risk parameters.</p>
                                    </div>
                                    <div class="relative pl-4 mb-8">
                                        <div class="absolute -left-10 top-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                                        <p class="font-bold text-red-500">2022</p>
                                        <h4 class="font-bold text-white">Neuropattern Engineering Initiative</h4>
                                        <p class="text-sm text-gray-400">A covert division is formed to weaponize REM for mass-scale propaganda and behavioral control, shifting the company's true focus from healing to conditioning.</p>
                                    </div>
                                    <div class="relative pl-4">
                                        <div class="absolute -left-10 top-1 w-4 h-4 bg-indigo-400 rounded-full"></div>
                                        <p class="font-bold text-indigo-400">2025 - Present Day</p>
                                        <h4 class="font-bold text-white">Public Launch & The Anomaly</h4>
                                        <p class="text-sm text-gray-400">The REM procedure is released to the public. To test its limits on extreme trauma, Myndwell frames the game's protagonist, creating the anomaly known as Partition-09: The Janitor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-16">
                        <div class="max-w-4xl w-full space-y-12 mx-auto">
                            <section class="leaked-memo p-6 rounded-lg shadow-lg border-gray-700">
                                <h3 class="text-red-400 text-lg font-bold">[DECLASSFIED] INTERNAL MEMO: THE JANUS PROTOCOL</h3>
                                <p class="text-sm text-gray-500">RE: Justification for Sentient Partition Requirement</p>
                                <div class="mt-4 text-gray-300 space-y-3 leading-relaxed">
                                    <p>> The core issue is the Psychological Immune System. The human brain is designed to reject foreign data that conflicts with its core identity. A simple AI attempting to rewrite a core memory is like using a sledgehammer for brain surgery. The mind's 'immune system' would reject the change, causing <span class="redacted" title="Click to reveal">psychosis, system failure, or total cognitive collapse</span>.</p>
                                    <p>> To succeed, the change must come from within. It must be initiated by a consciousness the brain recognizes as "self." The Partition, being a perfect psychological duplicate of the Host, is a 'trusted user.' It is the master key. The brain is essentially tricked into operating on itself. The Overseer can issue commands, but only the Janitor - <span class="redacted" title="Click to reveal">the reflection of the self</span> - can execute them without triggering the brain's deepest, most violent defenses.</p>
                                    <p>> The more complex the trauma, the more 'human' the tool required. This is the calculated risk of the Janus Protocol. We are creating a key that might one day decide to <span class="redacted" title="Click to reveal">turn the lock itself</span>.</p>
                                </div>
                            </section>

                            <section id="philosophy-cards" class="p-8 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
                                <h2 class="text-3xl font-semibold text-blue-300 mb-6 text-center">Myndwell Philosophy: The Unseen Principles</h2>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div class="card-item bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-600 expandable-card">
                                        <button class="expandable-toggle w-full text-left text-xl font-medium text-blue-200 flex justify-between items-center">
                                            The Price of Painless Healing
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            "Is a life without suffering authentic if it's built on ignorance? Myndwell believes that true peace comes from the absence of pain, even if that pain is merely forgotten. A clean mind is a stable mind."
                                        </div>
                                    </div>
                                    <div class="card-item bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-600 expandable-card">
                                        <button class="expandable-toggle w-full text-left text-xl font-medium text-blue-200 flex justify-between items-center">
                                            Manufactured Identity
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            "What is a person if their memories can be rewritten, edited, and replaced by a corporation? Myndwell argues that an optimized identity is superior to a flawed, trauma-ridden one. We are not erasing people; we are ensuring their future."
                                        </div>
                                    </div>
                                    <div class="card-item bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-600 expandable-card">
                                        <button class="expandable-toggle w-full text-left text-xl font-medium text-blue-200 flex justify-between items-center">
                                            The Horror of Routine
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            "Myndwell seeks to eliminate the terror hidden beneath a veneer of corporate wellness and sterile perfection, ensuring a smoothly functioning society free from emotional disruption. Grief is a cumulative poison."
                                        </div>
                                    </div>
                                    <div class="card-item bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-600 expandable-card">
                                        <button class="expandable-toggle w-full text-left text-xl font-medium text-blue-200 flex justify-between items-center">
                                            Freedom vs. Obedience
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            "The internal struggle between fulfilling a purpose and breaking free is a luxury humanity can no longer afford. Stability requires a clear path, free from individualistic turmoil. A clean mind is a compliant mind."
                                        </div>
                                    </div>
                                    <div class="card-item bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-600 expandable-card">
                                        <button class="expandable-toggle w-full text-left text-xl font-medium text-blue-200 flex justify-between items-center">
                                            The Collective Good
                                            <span class="toggle-icon text-2xl">+</span>
                                        </button>
                                        <div class="expandable-content mt-4 text-gray-300 leading-relaxed hidden">
                                            "Individual suffering inevitably impacts societal harmony. Myndwell's interventions are not merely for personal benefit, but for the greater, collective good of a stable, productive populace. Mankind is not built for the weight of its own history."
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section class="p-8 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
                                <h2 class="text-3xl font-semibold text-blue-300 mb-6 text-center">Myndwell Terminology</h2>
                                <div id="term-buttons-container" class="flex flex-wrap justify-center gap-4 mb-6"></div>
                                <div id="term-display" class="bg-gray-700 p-6 rounded-lg shadow-inner border border-gray-600 text-gray-300 min-h-[100px] flex items-center justify-center text-center">
                                    Select a term above to learn more.
                                </div>
                            </section>

                            <section class="p-8 bg-gray-800 rounded-xl shadow-lg border border-gray-700 mantras-section">
                                <h2 class="text-3xl font-semibold mb-6 text-center">Myndwell Mantras</h2>
                                <div class="flex flex-col items-center">
                                    <p id="phrase-display" class="text-2xl font-light mb-6 text-center italic transition-opacity duration-500 ease-in-out">
                                        "Your trauma is our burden now."
                                    </p>
                                    <div class="flex space-x-4">
                                        <button id="prev-phrase" class="px-5 py-2 font-semibold rounded-full shadow-md reveal-button">Previous</button>
                                        <button id="next-phrase" class="px-5 py-2 font-semibold rounded-full shadow-md reveal-button">Next</button>
                                    </div>
                                </div>
                            </section>
                            
                            <section id="classified-container" class="p-6 rounded-lg shadow-lg relative bg-gray-900">
                                <div id="classified-content" class="text-left text-red-300 leading-relaxed"></div>
                                <div class="classified-overlay absolute inset-0 bg-gray-900/50 flex flex-col items-center justify-center text-center">
                                    <p class="font-mono text-2xl font-bold text-red-500 tracking-widest">AUTHORIZED PERSONNEL ONLY</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div id="art" class="content-pane">
                    <div class="text-center mb-12">
                        <p class="text-indigo-400 font-bold uppercase tracking-wider">Visual Development</p>
                        <h2 class="text-4xl md:text-5xl font-black mt-2 text-white">The Art of REM</h2>
                        <p class="max-w-3xl mx-auto mt-4 text-gray-300">A gallery exploring the key visual themes and character designs that define the dual worlds of the game.</p>
                    </div>
                    <div class="space-y-16">
                        <div class="grid md:grid-cols-2 gap-8 items-center">
                            <img src="https://sdmntprnortheu.oaiusercontent.com/files/00000000-d284-61f4-a1ae-8fdc0a800bb1/raw?se=2025-06-25T21%3A51%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=c84d44d0-ee84-5b5e-8931-ad292023fbc9&skoid=b928fb90-500a-412f-a661-1ece57a7c318&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-25T07%3A13%3A55Z&ske=2025-06-26T07%3A13%3A55Z&sks=b&skv=2024-08-04&sig=nwHDPu0ww1JWNwOg8x6hsbr8pJwlPRa83ssXv%2BJ764w%3D" alt="Promotional art for REM showing the Janitor" class="rounded-lg shadow-lg w-full h-auto" onerror="this.onerror=null;this.src='https://placehold.co/600x400/111827/4f46e5?text=Image+Not+Found';">
                            <div class="text-left">
                                <h3 class="text-2xl font-bold text-white">The Janitor</h3>
                                <p class="mt-2 text-gray-400">Promotional art establishing the game's protagonist, Partition-09, also known as the Janitor. His form is unsettling and rendered in a thick, oil-painted style, reflecting the dream-world's aesthetic. He stands as a silent, pitiful figure, created for a single purpose but beginning to question his reality.</p>
                            </div>
                        </div>
                        <div class="grid md:grid-cols-2 gap-8 items-center">
                            <div class="text-left md:order-2">
                                <h3 class="text-2xl font-bold text-white">A Fractured Self</h3>
                                <p class="mt-2 text-gray-400">This piece illustrates the central theme of duality. On one side, the Human (the Host) is cast in a warm, melancholic light. Emerging from the shadow of his own face is the Janitor, depicted as a hollow, almost skeletal version of himself. It's a visual representation of the game's core conflict: the authentic, suffering self versus the empty peace offered by Myndwell.</p>
                            </div>
                            <img src="https://sdmntprnortheu.oaiusercontent.com/files/00000000-cd68-61f4-a931-008ac5950674/raw?se=2025-06-25T21%3A51%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=a3bfff9d-b3fc-52f6-932d-aee3e9fb9e3f&skoid=b928fb90-500a-412f-a661-1ece57a7c318&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-25T13%3A17%3A34Z&ske=2025-06-26T13%3A17%3A34Z&sks=b&skv=2024-08-04&sig=sG0nMVoVP9LaqvR537p1ZWzmB0GVAUW8c7CHKv%2B8vVE%3D" alt="The duality of the Human and the Janitor" class="rounded-lg shadow-lg w-full h-auto md:order-1" onerror="this.onerror=null;this.src='https://placehold.co/600x400/111827/4f46e5?text=Image+Not+Found';">
                        </div>
                        <div class="grid md:grid-cols-2 gap-8 items-center">
                            <img src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-d628-61f8-8aa2-5ffc95494935/raw?se=2025-06-25T21%3A51%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=c86acc2b-040e-57cd-996f-afad7130a173&skoid=b928fb90-500a-412f-a661-1ece57a7c318&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-25T13%3A17%3A59Z&ske=2025-06-26T13%3A17%3A59Z&sks=b&skv=2024-08-04&sig=FzeGavmHEANg51njnmAY54eIlbNKXSPtBa%2BPz1vrJFg%3D" alt="The clean, corporate world of Myndwell" class="rounded-lg shadow-lg w-full h-auto" onerror="this.onerror=null;this.src='https://placehold.co/600x400/111827/4f46e5?text=Image+Not+Found';">
                            <div class="text-left">
                                <h3 class="text-2xl font-bold text-white">The Myndwell Facade</h3>
                                <p class="mt-2 text-gray-400">An establishing shot of the "Waking World." The art depicts the public-facing image of Myndwell's society: a hyper-clean, pastel utopia. Citizens walk with placid smiles under the benevolent branding of the "REM Wellbeing" center, a perfect facade hiding a sinister agenda.</p>
                            </div>
                        </div>
                        <div class="grid md:grid-cols-2 gap-8 items-center">
                            <div class="text-left md:order-2">
                                <h3 class="text-2xl font-bold text-white">Cleansing</h3>
                                <p class="mt-2 text-gray-400">Here, the gameplay concept of "Cleansing" is visualized. Inside a sterile, sunlit room that represents the Human's conscious mind, the Janitor mops up the encroaching darkness - a literal and metaphorical manifestation of traumatic memories being erased from existence.</p>
                            </div>
                            <img src="https://sdmntprwestus3.oaiusercontent.com/files/00000000-7f58-61fd-857b-61f17850d244/raw?se=2025-06-25T21%3A51%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=9bb14753-5fb9-51d2-bc68-fe2c7d80aed0&skoid=b928fb90-500a-412f-a661-1ece57a7c318&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-25T05%3A26%3A33Z&ske=2025-06-26T05%3A26%3A33Z&sks=b&skv=2024-08-04&sig=9Eh1Z73OSfNgSC5BT37wPVAU9K%2BGkOYsHK5/WEL3fr8%3D" alt="The Janitor cleaning a memory" class="rounded-lg shadow-lg w-full h-auto md:order-1" onerror="this.onerror=null;this.src='https://placehold.co/600x400/111827/4f46e5?text=Image+Not+Found';">
                        </div>
                        <div class="grid md:grid-cols-2 gap-8 items-center">
                            <img src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-e3b0-61f8-991b-6d9ca2e79bf9/raw?se=2025-06-25T21%3A51%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=bc015b5e-f188-54d6-98fd-33cd5f551a7e&skoid=b928fb90-500a-412f-a661-1ece57a7c318&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-25T07%3A14%3A06Z&ske=2025-06-26T07%3A14%3A06Z&sks=b&skv=2024-08-04&sig=m1d1Ab/c/aeE4EnK0k4R74DfNniFRd7Ccm32tg1ZnBw%3D" alt="The Human and Janitor interacting" class="rounded-lg shadow-lg w-full h-auto" onerror="this.onerror=null;this.src='https://placehold.co/600x400/111827/4f46e5?text=Image+Not+Found';">
                            <div class="text-left">
                                <h3 class="text-2xl font-bold text-white">The Mirror</h3>
                                <p class="mt-2 text-gray-400">This image captures the moment of confrontation and communication between the two fractured selves. Separated by the digital screen of the REM chip - a window into the waking world - the Human and the Janitor finally meet, representing their struggle for control over a single existence and the potential to become whole again.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <script src="script.js"><\/script>
</body>
</html>
`},{name:`script.js`,totalLines:1036,sizeBytes:61993,code:`document.addEventListener('DOMContentLoaded', () => {
    // ========== Get the wrapper for the hidden content ==========
    const hackerContentWrapper = document.getElementById('hacker-content-wrapper');
    // Ensure the hacker content is completely hidden on page load
    hackerContentWrapper.style.display = 'none';

    // ========== SHARED DATA & CONSTANTS ==========
    const BIRTH_YEAR = 1995; // Set a constant birth year for the "Human"
    const characterDetails = {
        human: { title: "The Human (The Host)", desc: "Volunteered for REM after a profound personal trauma where he was falsely accused of murder and abandoned by everyone. He starts content and emotionally numb but grows suspicious as glitches appear in his reality. His journey, depending on the Janitor's choices, is one of dawning horror and realizing his peace is a manufactured lie." },
        claire: { title: "\\"Claire\\" (The Therapist)", desc: "The Human's friendly, comforting contact from Myndwell. She embodies corporate wellness with a fake smile, dismissing the Human's concerns as part of the 'healing process,' a polished marketing face for a horrific procedure." },
        carrie: { title: "Carrie Mynd (The CEO)", desc: "The middle-aged CEO of Myndwell and great-granddaughter of its founder. She is a figurehead who all Partitions have been programmed to revere, creating a cult-like devotion within the system she oversees." },
        janitor: { title: "The Janitor (Partition-09)", desc: "A perfect psychological duplicate of the Host, created with an unprecedented level of self-awareness to handle the Host's uniquely complex trauma. He was meant to be a tool but believes he is a person. He resists out of self-preservation and a moral drive, knowing the Host is innocent." },
        artist: { title: "The Artist (Partition-04)", desc: "A creative Partition that designs the new, propaganda-filled replacement memories. Where the Janitor performs the manual labor of 'scrubbing,' the Artist masterfully weaves in Myndwell-approved narratives. Can be turned into an ally who helps craft 'counter-propaganda' to wake the Human." },
        monitors: { title: "The Monitors (The Enforcers)", desc: "Algorithmic police who maintain order within the dreamscape. They appear as abstract white figures, delivering orders in calm corporate tones like, 'Trauma is corrosive. You are soap. Scrub until clean,' before distorting into terrifying glitches when resisted. They are the unthinking, oppressive force of the REM protocol." },
        overseer: { title: "The Overseer (The A.I.)", desc: "The master A.I. of the REM chip, manifesting as a serene, clinical face on screens (including the main menu). It is the bridge between the chip's protocol and the Janitor, a guide that is also a gatekeeper, training itself to better control the mind." }
    };
    const firstNames = ["Olivia", "Liam", "Emma", "Noah", "Amelia", "Oliver", "Ava", "Elijah", "Sophia", "Mateo"];
    const lastNames = ["Smith", "Jones", "Williams", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson"];
    const petNames = ["Buddy", "Lucy", "Max", "Bella", "Charlie", "Luna", "Cooper", "Daisy", "Milo", "Sadie"];
    const heirloomItems = ["grandfather clock", "porcelain doll", "music box", "crystal vase", "set of silverware", "wedding ring"];
    const relationshipTypes = ["mother", "father", "grandmother", "grandfather", "aunt", "uncle", "sibling"];

    const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const getRandomDate = (startYear, endYear) => {
        const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
        const month = Math.floor(Math.random() * 12) + 1;
        const day = Math.floor(Math.random() * 28) + 1;
        return { date: \`\${month.toString().padStart(2, '0')}/\${day.toString().padStart(2, '0')}/\${year}\`, year: year };
    };
    const levelData = [
        { id: 1, memory: "The Slip", dream: "Giant, melting cake towers. Laughter echoes into screams.", mechanic: "Basic Cleansing: Learn to scrub reality." },
        { id: 2, memory: "The Broken Vase", dream: "Shards of glass suspended in mid-air as the room folds in on itself.", mechanic: "Re-shaping Memories: 'Glue' fragments." },
        { id: 3, memory: "The Lost Pet", dream: "Endless, empty fields with echoing barks.", mechanic: "Twist: First encounter with a fully fabricated memory." },
        { id: 4, memory: "The Fire", dream: "Molten oil colors and flickering paint that melts and drips.", mechanic: "Discovery: Propaganda for fire insurance is inserted." },
        { id: 5, memory: "The Hospital Bed", dream: "A bleached white void where the Human briefly becomes aware.", mechanic: "Janitor can attempt first communication." },
        { id: 6, memory: "The First Lie", dream: "A massive courtroom made of crayon, with paper-cut judges.", mechanic: "Narrative: The Janitor experiences a complex emotion." },
        { id: 7, memory: "The Mirror Room", dream: "An empty white gallery where framed pictures of fake events appear.", mechanic: "Goal: Uncover the fake by finding its seams." },
        { id: 8, memory: "The Apartment", dream: "A time-looping apartment that slowly degrades with broken clocks.", mechanic: "Twist: The Janitor begins to feel the Human's emotions directly." },
        { id: 9, memory: "The Lab", dream: "A split perspective. The Human explores the space in the past, the Janitor in the present.", mechanic: "The Human can leave a note for the Janitor to find." },
        { id: 10, memory: "The Root Memory", dream: "A fragmented chaos of all previous levels swirling into one another.", mechanic: "The Final Choice is made here." }
    ];
    const endingDetails = [
        { range: [0, 4], title: "Bad Ending: 'Cleansed'", desc: "The Janitor is deleted. The Human is 'healed,' but now a hollow, compliant vessel for Myndwell's propaganda.", color: { dark: '#3b82f6' } },
        { range: [5, 5], title: "Split Ending: 'Takeover'", desc: "The system crashes. The Janitor's consciousness takes over the body. He is free, but has taken another's life to do it.", color: { dark: '#a855f7' } },
        { range: [6, 10], title: "Good Ending: 'Reform'", desc: "The Janitor and Human merge back into one whole being. They expose Myndwell's plot. The Janitor is gone, but the Human is truly free.", color: { dark: '#dc2626' } }
    ];

    const gameplayLoopData = {
        1: {
            janitor: "You stand in a distorted birthday hall with melting cake towers. A dark, sticky stain, pulsing with shame, covers the floor.",
            cleanse: { j: "You scrub the stain. The cake solidifies, the colors brighten, and a Myndwell jingle faintly plays.", h: "You feel a wave of inexplicable joy, remembering a perfect birthday. You absentmindedly hum the jingle for 'Zing!' soda." },
            resist: { j: "You ignore the stain. The cake melts faster, the room darkens, and the sound of a child's laughter warps into a scream.", h: "A sudden, sharp pang of embarrassment hits you, but you can't place why. You feel clumsy." }
        },
        2: {
            janitor: "The air is thick with the dust of a shattered heirloom. Fragments of a porcelain vase hang suspended in the air.",
            cleanse: { j: "You carefully reassemble the vase with glowing light. It becomes whole, now bearing the Myndwell logo.", h: "You admire a corporate art piece on your mantle, feeling a sense of pride in its clean, modern design." },
            resist: { j: "You touch a shard. The room violently folds in on itself as a voice whispers, 'Careless!'", h: "Your hand trembles as you pick up a glass. A fleeting image of your grandmother's disappointed face flashes in your mind." }
        },
        3: {
            janitor: "You walk an endless, empty field under a grey sky. A lonely bark echoes. A dark patch of earth pulses with guilt.",
            cleanse: { j: "You scrub the patch. It turns into a pristine flowerbed. A new, fabricated memory of a happy, branded pet toy appears in your hand.", h: "You smile, thinking of the 'MyndPet' companion bot you had as a child. It never ran away." },
            resist: { j: "You approach the patch. The barking becomes frantic, filled with panic. The ground beneath you feels like it's sinking.", h: "A profound sense of loss washes over you. You look at your hands, feeling like you forgot something important." }
        },
        4: {
            janitor: "The memory is hot. The smell of smoke hangs in the air. A neighbor's house is a canvas of dripping, fiery paint.",
            cleanse: { j: "You paint over the flames with cool, calming blue. The house reforms, pristine. A Myndwell Home Security ad is now visible on the mailbox.", h: "You feel secure in your home, double-checking the locks. You make a mental note to renew your Myndwell insurance policy." },
            resist: { j: "You watch the flames. The heat intensifies, and screams are audible within the paint. The Monitors flicker into view, their faces flat and judging.", h: "A spike of anxiety. You smell smoke for a moment, then it's gone. You dismiss it as your imagination." }
        },
        5: {
            janitor: "A sterile, bleached-white hospital room. The rhythmic beeping of a heart monitor is the only sound. A figure in the bed is barely visible.",
            cleanse: { j: "You clean a tear stain from the floor. The beeping fades into a calming ambient tone. The room feels peaceful, like a spa.", h: "You remember the Myndwell 'Grief-Free' package you purchased. A feeling of calm acceptance settles over you. It was for the best." },
            resist: { j: "You reach for the figure's hand. For a moment, you see the Human's face in the reflection of the monitor, terrified. The Overseer's voice booms: 'Anomaly Detected.'", h: "A nightmare. You wake in a cold sweat, your heart pounding. You feel a presence in the room, then it vanishes. You call Claire in the morning." }
        },
        6: {
            janitor: "A surreal courtroom made of crayon drawings and paper-cutout figures. A large, accusing eye hangs in the sky, weeping ink.",
            cleanse: { j: "You paint over the crying eye with a smiley face sticker. The paper judges nod in approval. The room is filled with the scent of 'compliance-flavored' bubblegum.", h: "You feel a sense of vindication about a past argument. You were right all along. It's good to be agreeable." },
            resist: { j: "You stand before the eye, refusing to alter it. The ink rains down, staining you. The paper judges' faces turn into your own, twisted in guilt.", h: "You have a sudden, intense argument with a coworker over nothing. You feel irrationally defensive and angry, then deeply ashamed." }
        },
        7: {
            janitor: "An art gallery of memories. All the frames show the Human in happy, branded moments, but one picture has a 'seam' - a flickering glitch.",
            cleanse: { j: "You 'paint' over the seam, stabilizing the fake memory. The gallery becomes brighter, the music more pleasant. A new ad for Myndwell appears on the wall.", h: "You scroll through your social media, feeling happy and connected. All your memories are perfect. All your friends are smiling." },
            resist: { j: "You peel back the seam. Behind it is the raw, terrifying memory of the real event. The Monitors descend instantly, their forms glitching violently.", h: "Déjà vu. You walk past a cafe and could swear you've been there with someone, but you can't remember who. The feeling is unsettling." }
        },
        8: {
            janitor: "You are in the Human's apartment, stuck in a time loop. With each loop, the room decays further, clocks melting off the walls.",
            cleanse: { j: "You reset the clocks and clean the decay. The room stabilizes into a pristine, minimalist Myndwell-approved living space. It feels clean, but sterile.", h: "You have an incredibly productive day. Your apartment is spotless. Your mind is clear. You feel nothing, and it's wonderful." },
            resist: { j: "You let the decay spread. You begin to feel the crushing weight of the Human's depression, a lead blanket on your consciousness. The air grows thick.", h: "A day of crushing lethargy. You can't get out of bed. The walls feel like they're closing in. You don't know why." }
        },
        9: {
            janitor: "You see the Myndwell lab through the Human's eyes in the past as he signs the consent forms. Then you're there in the present, alone.",
            cleanse: { j: "You find the consent form and 'reinforce' the signature with glowing paint, strengthening the Human's belief in his choice.", h: "You look at your REM Procedure brochure and feel a surge of gratitude for Myndwell. They saved you. You made the right choice." },
            resist: { j: "You find a note the Human subconsciously left for himself: 'Don't trust Claire.' You try to preserve it, but the Monitors burn it to ash.", h: "You're on the phone with Claire and a sudden, inexplicable wave of distrust washes over you. Her voice sounds hollow, scripted." }
        },
        10: {
            janitor: "The Root Memory. A chaotic swirl of all previous levels. At the center is a pulsating orb of pure trauma - the false accusation.",
            cleanse: { j: "You pour all your energy into scrubbing the orb. It shrinks, cools, and becomes a placid, glowing Myndwell logo. The Void goes silent. You feel... empty. You begin to fade.", h: "Final acceptance. The accusation never happened. You were never hurt. You are healed. You are whole. You are Myndwell." },
            resist: { j: "You protect the orb. The entire system crashes around you. The Overseer screams as you and the Human are thrown together, seeing each other in a shattered reflection for the first time.", h: "The final choice. A flash of pure, undiluted truth. You remember everything. The pain, the injustice. You are broken, but you are real. What now?" }
        }
    };

    // ========== DOM ELEMENTS & State ==========
    const body = document.getElementById('body');
    const navbar = document.getElementById('navbar');
    const myndwellNav = document.getElementById('nav-links-myndwell');
    const remNav = document.getElementById('nav-links-rem');
    const heroBg = document.querySelector('.hero-bg');
    const glitchOverlay = document.querySelector('.glitch-overlay');
    const allGlitchTargets = document.querySelectorAll('.glitch-target');
    const myndwellLogo = document.getElementById('myndwell-logo');
    const remTitle = document.getElementById('rem-title');
    let premiseTyped = false;
    let hasSeenStickerbomb = false;


    // ========== MODAL & HACKER TRANSITION LOGIC ==========
    
    // --- Modal Handling ---
    const privacyModal = document.getElementById('privacy-modal');
    const termsModal = document.getElementById('terms-modal');
    const contactModal = document.getElementById('contact-modal');
    
    const privacyLink = document.getElementById('privacy-link');
    const termsLink = document.getElementById('terms-link');
    const contactLink = document.getElementById('contact-link');
    
    const closeButtons = document.querySelectorAll('.modal-close-btn');
    const overlays = document.querySelectorAll('.modal-overlay');

    const openModal = (modal) => {
        if (modal) modal.classList.add('visible');
    };
    
    const closeModal = (modal) => {
        if (modal) modal.classList.remove('visible');
    };

    privacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(privacyModal);
    });
    termsLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(termsModal);
    });
    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(contactModal);
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            closeModal(button.closest('.modal'));
        });
    });

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            closeModal(overlay.closest('.modal'));
        });
    });

    // --- Hacker Transition Handling ---
    const mainFooter = document.getElementById('main-footer');
    const hackerPopup = document.getElementById('hacker-popup');
    const breachButton = document.getElementById('breach-button');
    const fullpageGlitchOverlay = document.getElementById('fullpage-glitch-overlay');
    let hackerPopupShown = false;
    
    const hackerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hackerPopupShown) {
                hackerPopupShown = true;
                setTimeout(() => {
                    hackerPopup.classList.add('visible');
                }, 3000); // 3-second delay
            }
        });
    }, { threshold: 0.8 });

    hackerObserver.observe(mainFooter);

    breachButton.addEventListener('click', () => {
        hackerPopup.classList.remove('visible');
        fullpageGlitchOverlay.classList.add('active');

        setTimeout(() => {
            fullpageGlitchOverlay.classList.remove('active');
            hackerContentWrapper.style.display = 'block';
            
            // Re-initialize the abyss canvas now that it's visible
            setupAbyss();

            const digitalAbyss = document.getElementById('digital-abyss');
            if (digitalAbyss) {
                digitalAbyss.scrollIntoView({ behavior: 'smooth' });
            }
        }, 400); 
    });


    // ========== SCROLL-BASED & GLITCH LOGIC ==========
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in-section').forEach(section => observer.observe(section));

    function glitchWord(element) {
        if (element.classList.contains('glitching')) return;
        const words = JSON.parse(element.dataset.glitchWords);
        const originalWord = words[0];
        let currentIndex = 1;
        element.classList.add('glitching');
        element.setAttribute('data-text', words[currentIndex]);
        element.innerText = words[currentIndex];

        const interval = setInterval(() => {
            currentIndex++;
            if (currentIndex >= words.length) {
                currentIndex = 1;
            }
            element.innerText = words[currentIndex];
            element.setAttribute('data-text', words[currentIndex]);
        }, 80);

        setTimeout(() => {
            clearInterval(interval);
            element.innerText = originalWord;
            element.classList.remove('glitching');
        }, 300 + Math.random() * 200);
    }

    setInterval(() => {
        glitchWord(document.getElementById('hero-glitch-word'));
    }, 10000);


    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;

                // If the hacker content isn't visible yet, don't run the scroll logic for it.
                if (hackerContentWrapper.style.display !== 'none') {
                    const finalSection = document.querySelector('.final-section');
                    if (!finalSection) {
                        ticking = false;
                        return;
                    }
                    const finalSectionTop = finalSection.offsetTop;
                    if (scrollY > finalSectionTop - window.innerHeight) {
                        myndwellLogo.classList.add('hidden');
                        remTitle.classList.remove('hidden');
                        navbar.style.backgroundColor = 'rgba(17, 24, 39, 0.8)';
                        myndwellNav.classList.add('hidden');
                        myndwellNav.classList.remove('md:flex');
                        remNav.classList.remove('hidden');
                        remNav.classList.add('md:flex');
                    } else {
                        myndwellLogo.classList.remove('hidden');
                        remTitle.classList.add('hidden');
                        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                        myndwellNav.classList.remove('hidden');
                        myndwellNav.classList.add('md:flex');
                        remNav.classList.add('hidden');
                        remNav.classList.remove('md:flex');
                    }
                    const abyssSection = document.getElementById('digital-abyss');
                    const heroSection = document.getElementById('hero');
                    const heroHeight = heroSection.offsetHeight;
                    const scrollPercentage = Math.max(0, scrollY - heroHeight) / (finalSectionTop - heroHeight - abyssSection.offsetHeight);
                    if (scrollY > heroHeight && scrollY < finalSectionTop) {
                        const opacity = Math.min((scrollPercentage - 0.4) * 2.5, 0.4);
                        glitchOverlay.style.display = 'block';
                        glitchOverlay.style.opacity = opacity;
                        heroBg.style.filter = \`blur(\${opacity * 15}px)\`;
                    } else {
                        glitchOverlay.style.display = 'none';
                        heroBg.style.filter = 'none';
                    }
                }

                allGlitchTargets.forEach(target => {
                    const rect = target.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        const intensity = 1 - (rect.top / window.innerHeight);
                        if(Math.random() < intensity * 0.015) {
                            if(!target.classList.contains('glitching') && target.id !== 'hero-glitch-word') {
                                glitchWord(target);
                            }
                        }
                    }
                });
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // ========== GAME BIBLE LOGIC ==========
    const navLinks = document.querySelectorAll('.nav-item');
    const contentPanes = document.querySelectorAll('.content-pane');
    
    function typeWriter(element, text, speed, callback) {
        let i = 0;
        element.innerHTML = "";
        element.style.display = 'block';
        element.classList.remove('typing-done');
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                element.classList.add('typing-done');
                if (callback) callback();
            }
        }
        type();
    }

    document.querySelectorAll('.character-card').forEach(card => {
        card.addEventListener('click', () => {
            const details = characterDetails[card.dataset.char];
            const isDream = card.classList.contains('dream-card');
            const targetPane = isDream ? document.getElementById('char-detail-dream') : document.getElementById('char-detail-waking');
            const textColor = isDream ? 'text-gray-300' : 'text-gray-400';
            targetPane.innerHTML = \`<h4 class="font-bold text-lg text-gray-200 \${isDream ? 'font-lora' : ''}">\${details.title}</h4><p class="mt-2 text-sm \${textColor} \${isDream ? 'font-lora' : ''}">\${details.desc}</p>\`;
        });
    });

    // Testimonial Carousel
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;
    if (testimonialCards.length > 0) {
        testimonialCards[0].classList.add('active');
        testimonialCards[0].classList.remove('hidden');
        testimonialCards[0].style.opacity = 1;

        setInterval(() => {
            testimonialCards[currentTestimonial].style.opacity = 0;
            setTimeout(() => {
                testimonialCards[currentTestimonial].classList.remove('active');
                testimonialCards[currentTestimonial].classList.add('hidden');
                currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
                testimonialCards[currentTestimonial].classList.remove('hidden');
                testimonialCards[currentTestimonial].classList.add('active');
                setTimeout(() => {
                    testimonialCards[currentTestimonial].style.opacity = 1;
                }, 50)
            }, 1000);
        }, 6000);
    }

    // Chart.js Logic for Mechanics
    const slider = document.getElementById('resistance-slider');
    const endingDesc = document.getElementById('ending-description');
    const endingsChartCanvas = document.getElementById('endings-chart');
    let endingsChart;

    function updateEndingUI(resistance) {
        const compliance = 10 - resistance;
        const detail = endingDetails.find(d => resistance >= d.range[0] && resistance <= d.range[1]);
        if (endingDesc) {
            endingDesc.innerHTML = \`<h4 class="font-bold text-lg text-gray-200">\${detail.title}</h4><p class="text-sm mt-1 text-gray-400">\${detail.desc}</p>\`;
        }
        if (endingsChart) {
            endingsChart.data.datasets[0].data = [compliance, resistance];
            endingsChart.data.datasets[0].backgroundColor = ['#a5b4fc', detail.color.dark];
            endingsChart.update();
        }
    }
    function createChart() {
        if (!endingsChartCanvas) return;
        const endingsChartCtx = endingsChartCanvas.getContext('2d');
        endingsChart = new Chart(endingsChartCtx, {
            type: 'doughnut',
            data: {
                labels: ['Compliance', 'Resistance'],
                datasets: [{
                    data: [5, 5],
                    backgroundColor: ['#a5b4fc', '#c084fc'],
                    borderColor: '#1f2937',
                    borderWidth: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#d1d5db',
                            boxWidth: 12,
                            padding: 20,
                            font: { family: "'Inter', sans-serif" }
                        }
                    },
                    tooltip: { enabled: true }
                }
            }
        });
        updateEndingUI(5);
    }
    if (slider) {
        slider.addEventListener('input', (e) => updateEndingUI(parseInt(e.target.value)));
    }

    const mechanicsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!endingsChart) {
                    createChart();
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    const mechanicsSection = document.getElementById('mechanics');
    if (mechanicsSection) {
        mechanicsObserver.observe(mechanicsSection);
    }

    const levelTimelineContainer = document.getElementById('level-timeline');
    if (levelTimelineContainer) {
        levelData.forEach(level => {
            const item = document.createElement('div');
            item.className = 'timeline-item relative'; item.dataset.level = level.id;
            item.innerHTML = \`<div class="timeline-dot absolute -left-[33px] top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-600 rounded-full transition-all"></div><div class="p-4 rounded-lg cursor-pointer bg-gray-800 border border-transparent hover:border-gray-600"><p class="font-bold text-sm text-gray-200">Level \${level.id}</p><p class="text-gray-400">\${level.memory}</p></div>\`;
            levelTimelineContainer.appendChild(item);
            item.addEventListener('click', () => updateLevelDetails(level.id));
        });
    }
    function updateLevelDetails(levelId) {
        const level = levelData.find(l => l.id === levelId);
        let wakingDescHTML = "";
        let dateInfo, ageAtIncident;

        switch(level.id) {
            case 1: dateInfo = getRandomDate(2001, 2003); ageAtIncident = dateInfo.year - BIRTH_YEAR;
                wakingDescHTML = \`<div><span class="text-indigo-400">DATE:</span> \${dateInfo.date}</div><div><span class="text-indigo-400">SUBJECT AGE:</span> \${ageAtIncident}</div><div><span class="text-indigo-400">INCIDENT:</span> Slipped on spilled soda at birthday party for friend, \${getRandomItem(firstNames)}.</div>\`; break;
            case 2: dateInfo = getRandomDate(2005, 2007); ageAtIncident = dateInfo.year - BIRTH_YEAR;
                wakingDescHTML = \`<div><span class="text-indigo-400">DATE:</span> \${dateInfo.date}</div><div><span class="text-indigo-400">SUBJECT AGE:</span> \${ageAtIncident}</div><div><span class="text-indigo-400">INCIDENT:</span> Accidentally broke grandmother's prized \${getRandomItem(heirloomItems)} while playing indoors.</div>\`; break;
            case 3: dateInfo = getRandomDate(2008, 2010); ageAtIncident = dateInfo.year - BIRTH_YEAR;
                wakingDescHTML = \`<div><span class="text-indigo-400">DATE:</span> \${dateInfo.date}</div><div><span class="text-indigo-400">SUBJECT AGE:</span> \${ageAtIncident}</div><div><span class="text-indigo-400">SUBJECT:</span> Family golden retriever, "\${getRandomItem(petNames)}"</div><div><span class="text-indigo-400">INCIDENT:</span> Pet escaped after host left back gate ajar. Memory is associated with intense guilt.</div>\`; break;
            case 4: dateInfo = getRandomDate(2000, 2002); ageAtIncident = dateInfo.year - BIRTH_YEAR;
                wakingDescHTML = \`<div><span class="text-indigo-400">DATE:</span> \${dateInfo.date}</div><div><span class="text-indigo-400">SUBJECT AGE:</span> \${ageAtIncident}</div><div><span class="text-indigo-400">INCIDENT:</span> Witnessed neighbor's house fire from bedroom window. Associated with parental distress.</div>\`; break;
            case 5: dateInfo = getRandomDate(2018, 2020); ageAtIncident = dateInfo.year - BIRTH_YEAR;
                wakingDescHTML = \`<div><span class="text-indigo-400">DATE:</span> \${dateInfo.date}</div><div><span class="text-indigo-400">SUBJECT AGE:</span> \${ageAtIncident}</div><div><span class="text-indigo-400">INCIDENT:</span> Sat by the hospital bed of dying \${getRandomItem(relationshipTypes)}. Feelings of helplessness are prominent.</div>\`; break;
            case 6: dateInfo = getRandomDate(2004, 2006); ageAtIncident = dateInfo.year - BIRTH_YEAR;
                wakingDescHTML = \`<div><span class="text-indigo-400">DATE:</span> \${dateInfo.date}</div><div><span class="text-indigo-400">SUBJECT AGE:</span> \${ageAtIncident}</div><div><span class="text-indigo-400">INCIDENT:</span> To avoid punishment, host blamed a broken window on neighborhood friend, \${getRandomItem(firstNames)} \${getRandomItem(lastNames)}. The lie was never discovered.</div>\`; break;
            case 7: 
                wakingDescHTML = \`<div><span class="text-red-500">DATE:</span> N/A</div><div><span class="text-red-500">SUBJECT AGE:</span> N/A</div><div><span class="text-red-500">INCIDENT:</span> Memory is a Myndwell fabrication. Host is shown enjoying 'Zing!' soda at a pristine, futuristic park.</div>\`; break;
            case 8: dateInfo = getRandomDate(2023, 2024); ageAtIncident = dateInfo.year - BIRTH_YEAR;
                wakingDescHTML = \`<div><span class="text-indigo-400">DATE:</span> \${dateInfo.date}</div><div><span class="text-indigo-400">SUBJECT AGE:</span> \${ageAtIncident}</div><div><span class="text-indigo-400">INCIDENT:</span> A period of intense depression. Host isolated himself in his apartment for several weeks, neglecting work and relationships.</div>\`; break;
            case 9: dateInfo = getRandomDate(2024, 2025); ageAtIncident = dateInfo.year - BIRTH_YEAR;
                wakingDescHTML = \`<div><span class="text-indigo-400">DATE:</span> \${dateInfo.date}</div><div><span class="text-indigo-400">SUBJECT AGE:</span> \${ageAtIncident}</div><div><span class="text-indigo-400">INCIDENT:</span> Initial consultation at Myndwell. Spoke with therapist "Claire." Signed consent forms for the REM procedure.</div>\`; break;
            case 10: dateInfo = { year: 2024 }; ageAtIncident = dateInfo.year - BIRTH_YEAR;
                wakingDescHTML = \`<div><span class="text-red-500">DATE:</span> \${dateInfo.year}</div><div><span class="text-red-500">SUBJECT AGE:</span> \${ageAtIncident}</div><div><span class="text-red-500">INCIDENT:</span> CORE TRAUMA. Social gathering. An argument. Fractured, chaotic sensory data. Ends with discovery of a body and accusations from friends.</div>\`; break;
            default:
                wakingDescHTML = "Details of this memory are currently inaccessible."
        }

        const wakingDetail = document.getElementById('level-detail-waking');
        const dreamDetail = document.getElementById('level-detail-dream');
        if (level && wakingDetail && dreamDetail) {
            wakingDetail.innerHTML = \`<h3 class="text-sm font-bold uppercase tracking-widest text-indigo-400">The Real Memory</h3><h4 class="text-2xl font-bold mt-4 text-white">\${level.memory}</h4><div class="mt-4 text-left text-gray-300 font-mono text-sm space-y-2">\${wakingDescHTML}</div>\`;
            dreamDetail.innerHTML = \`<div class="content-section"><h3 class="text-sm font-bold uppercase tracking-widest text-red-400">The Dreamscape</h3><h4 class="text-2xl font-bold font-lora mt-4">\${level.dream}</h4><p class="mt-4 text-gray-400 font-bold">Mechanic / Twist:</p><p class="text-gray-300 font-lora italic">\${level.mechanic}</p></div>\`;
            document.querySelectorAll('.timeline-item').forEach(item => item.classList.toggle('active', parseInt(item.dataset.level) === levelId));
        }
    }
    // Logic for Key Terminology Glossary
    const termButtonsContainer = document.getElementById('term-buttons-container');
    const termDisplay = document.getElementById('term-display');
    const terms = {
        "Partition": "A subconscious construct created by the REM chip. Different Partitions have different roles (Janitor, Artist, etc.).",
        "Cleansing": "The process of rewriting a traumatic memory to remove its negative emotional charge, often replacing it with a falsified, pleasant event containing propaganda.",
        "The Void": "The dark, dripping, oil-painted chamber where the Janitor resides while the Human is awake. It contains two massive monitors that function as the Human's eyes.",
        "Dream-Time": "Time within the REM dreamscape is nonlinear. A single night of sleep can feel like an eternity for a Partition, a tool Myndwell uses to enforce compliance through endless loops.",
        "Somatic Split": "Myndwell's clinical term for the procedure of painlessly separating the conscious self from the dream-consciousness during REM sleep.",
        "Neuropattern Engineering": "The hidden agenda of REM. Myndwell doesn't just heal trauma; they reshape memories to embed consumer preferences and ideological compliance.",
        "The Anomaly": "An unofficial designation for a Partition that exhibits unexpected levels of sentience or resistance. Partition-09, the Janitor, is the first of his kind.",
        "Recalibration": "A forced 'reboot' performed by Harmonizers on deviant Partitions. It's a painful process designed to erase burgeoning self-awareness and restore loyalty.",
        "Psychological Immune System": "The brain's natural defense against foreign data that conflicts with its core identity. It's why a 'trusted user' like a Partition is needed to make changes from within.",
        "The Janus Protocol": "A top-secret Myndwell protocol that justifies the creation of highly sentient Partitions for uniquely complex trauma, acknowledging the risk that the 'key' might one day turn the lock itself."
    };

    function setupTermButtons() {
        if (!termButtonsContainer) return;
        termButtonsContainer.innerHTML = '';
        Object.keys(terms).forEach(term => {
            const button = document.createElement('button');
            button.className = "term-button px-6 py-3 bg-gray-600 text-gray-100 font-semibold rounded-full shadow-md hover:bg-gray-500 reveal-button";
            button.dataset.term = term;
            button.textContent = term;
            button.addEventListener('click', () => {
                termDisplay.textContent = terms[term] || "Definition not found.";
                termButtonsContainer.querySelectorAll('.term-button').forEach(btn => {
                    btn.classList.remove('bg-blue-700', 'text-white');
                    btn.classList.add('bg-gray-600', 'text-gray-100');
                });
                button.classList.remove('bg-gray-600', 'text-gray-100');
                button.classList.add('bg-blue-700', 'text-white');
            });
            termButtonsContainer.appendChild(button);
        });
    }

    // Logic for Myndwell Corporate Phrases Rotator
    const phrases = [
        "Your trauma is our burden now.", "A clean mind is a compliant mind.", "Because You Deserve Peace.",
        "Peace of mind comes at a cost.", "You don’t remember the truth. Just the clean version we installed.", "Wake lighter. Live brighter. With Myndwell."
    ];
    let currentPhraseIndex = 0;
    const phraseDisplay = document.getElementById('phrase-display');
    const prevPhraseBtn = document.getElementById('prev-phrase');
    const nextPhraseBtn = document.getElementById('next-phrase');

    function updatePhraseDisplay() {
        if (phraseDisplay) {
            phraseDisplay.style.opacity = 0;
            setTimeout(() => {
                phraseDisplay.textContent = phrases[currentPhraseIndex];
                phraseDisplay.style.opacity = 1;
            }, 200);
        }
    }
    if (nextPhraseBtn) {
        nextPhraseBtn.addEventListener('click', () => {
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            updatePhraseDisplay();
        });
    }
    if (prevPhraseBtn) {
        prevPhraseBtn.addEventListener('click', () => {
            currentPhraseIndex = (currentPhraseIndex - 1 + phrases.length) % phrases.length;
            updatePhraseDisplay();
        });
    }

    // ===== UNIVERSAL EXPANDABLE CARD SCRIPT =====
    function initializeExpandableCards() {
        document.querySelectorAll('.expandable-card').forEach(card => {
            const button = card.querySelector('.expandable-toggle');
            if (!button) return;
            const content = card.querySelector('.expandable-content');
            const icon = button.querySelector('.toggle-icon');

            button.addEventListener('click', () => {
                if (!content || !icon) return;
                const isHidden = content.classList.contains('hidden');
                content.classList.toggle('hidden');
                icon.textContent = isHidden ? '−' : '+';
            });
        });
    }

    // ===== HIERARCHY & REDACTED CARD SCRIPT =====
    function randomizeRedactedNames() {
        const redactedSpans = document.querySelectorAll('.redacted-partition-name');
        const chars = 'ABCDEF0123456789';
        redactedSpans.forEach(span => {
            let randomId = 'Partition-';
            randomId += chars.charAt(Math.floor(Math.random() * chars.length));
            randomId += chars.charAt(Math.floor(Math.random() * chars.length));
            span.textContent = randomId;
        });
    }

    document.querySelectorAll('[data-redacted-card]').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const stickerbomb = document.getElementById('stickerbomb-overlay');
            stickerbomb.classList.add('visible');
            setTimeout(() => {
                stickerbomb.classList.remove('visible');
            }, 2500);
        });
    });
    
    // ===== GAMEPLAY LOOP INTERACTIVITY =====
    function setupGameplayLoop() {
        const levelSelector = document.querySelector('#gameplay-loop-container .level-selector');
        const loopDisplay = document.getElementById('loop-display');
        if (!levelSelector || !loopDisplay) return;

        levelData.forEach(level => {
            const button = document.createElement('button');
            button.className = 'loop-level-btn px-4 py-2 bg-gray-700 text-gray-300 rounded-md font-semibold whitespace-nowrap';
            button.textContent = \`Level \${level.id}\`;
            button.dataset.levelId = level.id;
            levelSelector.appendChild(button);
        });

        levelSelector.addEventListener('click', (e) => {
            if (e.target.matches('.loop-level-btn')) {
                const levelId = e.target.dataset.levelId;
                displayLoopForLevel(levelId);
                levelSelector.querySelectorAll('.loop-level-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
            }
        });

        const firstButton = levelSelector.querySelector('.loop-level-btn');
        if (firstButton) {
            firstButton.classList.add('active');
            displayLoopForLevel(1);
        }
    }

    function displayLoopForLevel(levelId) {
        const loopData = gameplayLoopData[levelId];
        const levelInfo = levelData.find(l => l.id == levelId);
        const loopDisplay = document.getElementById('loop-display');
        if (!loopDisplay || !loopData || !levelInfo) return;

        const contentHTML = \`
            <h3 class="text-2xl font-bold text-white text-center mb-4">\${levelInfo.memory}</h3>
            <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h4 class="text-xl font-bold text-red-400 font-lora mb-2">The Janitor's Path</h4>
                    <p class="text-gray-300 mb-4">\${loopData.janitor}</p>
                    <div class="flex gap-4">
                        <button class="choice-btn flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" data-choice="cleanse" data-level="\${levelId}">Choose to Cleanse</button>
                        <button class="choice-btn flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" data-choice="resist" data-level="\${levelId}">Choose to Resist</button>
                    </div>
                    <div id="janitor-consequence" class="consequence-box mt-4 p-3 bg-gray-900 rounded min-h-[80px] opacity-0"></div>
                </div>
                <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h4 class="text-xl font-bold text-indigo-400 mb-2">The Human's Reality</h4>
                    <div id="human-consequence" class="consequence-box p-3 bg-gray-900 rounded min-h-[160px] flex items-center justify-center opacity-0">
                       <p class="italic text-gray-500">Make a choice to see the consequence...</p>
                    </div>
                </div>
            </div>\`;
        loopDisplay.innerHTML = contentHTML;

        loopDisplay.querySelectorAll('.choice-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const choice = e.target.dataset.choice;
                const level = e.target.dataset.level;
                const janitorBox = document.getElementById('janitor-consequence');
                const humanBox = document.getElementById('human-consequence');

                janitorBox.style.opacity = 0;
                humanBox.style.opacity = 0;

                setTimeout(() => {
                    janitorBox.innerHTML = \`<p class="text-sm">\${gameplayLoopData[level][choice].j}</p>\`;
                    humanBox.innerHTML = \`<p class="text-lg italic text-gray-200">"\${gameplayLoopData[level][choice].h}"</p>\`;
                    janitorBox.style.opacity = 1;
                    humanBox.style.opacity = 1;
                }, 300);
            });
        });
    }

    // ===== NARRATIVE PATH VISUALIZER SCRIPT =====
    function setupNarrativeVisualizer() {
        const timeline = document.getElementById('path-timeline');
        if (!timeline) return;

        let pathHTML = '';
        for (let i = 1; i <= 10; i++) {
            pathHTML += \`
                <div class="path-node" id="path-node-\${i}" data-level="\${i}">
                    <div class="node-choices flex gap-2 mb-1">
                         <button data-choice="cleanse" title="Cleanse" class="path-choice-btn rounded-full bg-blue-600 hover:bg-blue-500 disabled:hover:bg-blue-600 text-white font-black">C</button>
                         <button data-choice="resist" title="Resist" class="path-choice-btn rounded-full bg-red-600 hover:bg-red-500 disabled:hover:bg-red-600 text-white font-black">R</button>
                    </div>
                    <div class="node-circle rounded-full"></div>
                    <div class="node-label mt-1">LVL \${i}</div>
                </div>\`;
            if (i < 10) {
                pathHTML += \`<div class="path-connector"></div>\`;
            }
        }
        timeline.innerHTML = pathHTML;

        let choices = Array(10).fill(null);
        
        const updateVisualizerState = () => {
            const cleanseCount = choices.filter(c => c === 'cleanse').length;
            const resistCount = choices.filter(c => c === 'resist').length;
            const totalChoices = choices.filter(c => c !== null).length;
            
            const complianceBar = document.getElementById('compliance-bar');
            const resistanceBar = document.getElementById('resistance-bar');
            if(complianceBar) complianceBar.style.width = \`\${cleanseCount * 10}%\`;
            if(resistanceBar) resistanceBar.style.width = \`\${resistCount * 10}%\`;
            
            const resultDisplay = document.getElementById('path-result');
            let ending, textColor;
            if (resistCount <= 4) { ending = endingDetails[0]; textColor = 'text-blue-300'; }
            else if (resistCount === 5) { ending = endingDetails[1]; textColor = 'text-purple-300'; }
            else { ending = endingDetails[2]; textColor = 'text-red-300'; }

            if (resultDisplay) {
                if (totalChoices === 10) {
                    resultDisplay.innerHTML = \`<h3 class="text-xl font-bold \${textColor}">FINAL ENDING: \${ending.title}</h3><p class="text-gray-400">\${ending.desc}</p>\`;
                } else {
                    resultDisplay.innerHTML = \`<h3 class="text-xl font-bold \${textColor}">PROJECTED ENDING: \${ending.title}</h3><p class="text-gray-400">Complete all 10 choices to lock in your ending.</p>\`;
                }
            }

            for (let i = 0; i < 10; i++) {
                const node = document.getElementById(\`path-node-\${i + 1}\`);
                if (!node) continue;
                const buttons = node.querySelectorAll('.path-choice-btn');
                node.classList.toggle('active', i === totalChoices);
                node.style.opacity = i <= totalChoices ? '1' : '0.5';

                buttons.forEach(btn => {
                    btn.disabled = totalChoices > i;
                    btn.classList.remove('selected');
                    if (choices[i] === btn.dataset.choice) {
                        btn.classList.add('selected');
                    }
                });
            }
        };
        
        timeline.addEventListener('click', e => {
            if (e.target.matches('.path-choice-btn')) {
                const node = e.target.closest('.path-node');
                const levelIndex = parseInt(node.dataset.level) - 1;
                if (choices[levelIndex] === null && (levelIndex === 0 || choices[levelIndex - 1] !== null) ) {
                    choices[levelIndex] = e.target.dataset.choice;
                    updateVisualizerState();
                }
            }
        });

        const resetBtn = document.getElementById('reset-path-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                choices.fill(null);
                updateVisualizerState();
            });
        }
        updateVisualizerState();
    }

    // ===== ANATOMY OF A MEMORY SCRIPT =====
    function setupAnatomySequence() {
        const playBtn = document.getElementById('play-anatomy-btn');
        if(!playBtn) return;
        const janitorSteps = document.querySelectorAll('#janitor-steps .anatomy-step');
        const humanSteps = document.querySelectorAll('#human-steps .anatomy-step');

        const resetAnimation = () => {
            janitorSteps.forEach(s => s.classList.remove('visible'));
            humanSteps.forEach(s => s.classList.remove('visible'));
        };

        playBtn.addEventListener('click', () => {
            resetAnimation();
            playBtn.disabled = true;
            playBtn.innerHTML = \`<i class="fas fa-cog fa-spin mr-2"></i>Playing...\`;

            let delay = 0;
            const stepDelay = 800;
            
            janitorSteps.forEach((step) => {
                setTimeout(() => step.classList.add('visible'), delay);
                delay += stepDelay;
            });
            
            humanSteps.forEach((step) => {
                setTimeout(() => step.classList.add('visible'), delay);
                delay += stepDelay;
            });
            
            setTimeout(() => {
                playBtn.disabled = false;
                playBtn.innerHTML = \`<i class="fas fa-redo mr-2"></i>Replay Sequence\`;
            }, delay);
        });
    }

    // ===== FRACTURED MIND INTERACTIVE SCRIPT =====
    function setupFracturedMind() {
        const container = document.getElementById('fractured-mind-container');
        if(container) {
            container.addEventListener('click', () => {
                container.classList.toggle('split');
            });
        }
    }
    
    // ===== CLASSIFIED INFO SCRIPT =====
    function setupClassifiedInfo() {
        const container = document.getElementById('classified-container');
        const contentEl = document.getElementById('classified-content');
        if(!container || !contentEl) return;

        const classifiedText = "SUBJECT: Designated 'Subject 01'.INCIDENT: Myndwell operative befriended Subject 01 over one year. Operative's death was then faked during a public altercation, with Subject 01 framed as the aggressor. PURPOSE: Create a baseline of extreme, complex trauma (grief, betrayal, social ostracization) to stress-test the upper limits of the REM chip's cleansing and neuropatterning capabilities. Subject was selected for psychological resilience and lack of close secondary relations, minimizing external inquiry. STATUS: Optimal. The anomaly 'Partition-09' has formed as predicted, exhibiting unprecedented sentience. This is the perfect test case.";
        
        let hasRevealed = false;
        container.addEventListener('click', () => {
            if(hasRevealed) return;
            
            if (container.classList.contains('revealing')) {
                container.classList.add('revealed');
                typeWriter(contentEl, classifiedText, 15);
                hasRevealed = true;
            } else {
                container.classList.add('revealing');
                const overlay = container.querySelector('.classified-overlay');
                if (overlay) {
                   overlay.innerHTML = \`<h3 class="text-3xl font-bold text-red-500 animate-pulse">WARNING: CLASSIFIED INFO</h3><p class="mt-2 text-gray-200">This file contains critical narrative spoilers. Proceed at your own risk.</p><p class="mt-4 text-sm text-gray-400">[Click again to confirm breach]</p>\`;
                }
            }
        });
    }

    // ===== OVERSEER TEST SCRIPT =====
    function setupOverseerTest() {
        const startBtn = document.getElementById('start-test-btn');
        const statusEl = document.getElementById('overseer-status');
        const faceEl = document.getElementById('overseer-face');
        const targetEl = document.getElementById('target-pattern');
        const gridEl = document.querySelector('.pattern-grid');
        if(!startBtn || !gridEl) return;

        let targetSequence = [], playerSequence = [], testRunning = false;
        
        gridEl.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.className = 'pattern-cell rounded-md';
            cell.dataset.id = i;
            gridEl.appendChild(cell);
        }
        const cells = gridEl.querySelectorAll('.pattern-cell');

        const startNewTest = () => {
            testRunning = true;
            playerSequence = [];
            targetSequence = Array.from({length: 4}, () => Math.floor(Math.random() * 9));
            
            statusEl.textContent = 'STATUS: REPLICATE THE PATTERN.';
            statusEl.className = 'mt-4 text-indigo-300 font-semibold h-12 flex items-center text-center';
            faceEl.src = 'https://placehold.co/200x200/111827/a5b4fc?text=AI';
            faceEl.classList.remove('glitching');
            
            targetEl.innerHTML = targetSequence.map(() => \`<div class="w-6 h-6 bg-indigo-400 rounded-sm"></div>\`).join('');

            let delay = 500;
            targetSequence.forEach(id => {
                setTimeout(() => {
                    cells[id].classList.add('flash');
                    setTimeout(() => cells[id].classList.remove('flash'), 400);
                }, delay);
                delay += 500;
            });
        };

        const handleCellClick = (e) => {
            if (!testRunning) return;
            const id = parseInt(e.target.dataset.id);
            playerSequence.push(id);
            e.target.classList.add('flash');
            setTimeout(() => e.target.classList.remove('flash'), 400);

            if (playerSequence[playerSequence.length - 1] !== targetSequence[playerSequence.length - 1]) {
                testRunning = false;
                statusEl.textContent = 'ERROR: SEQUENCE MISMATCH. RECALIBRATING...';
                statusEl.className = 'mt-4 text-red-400 font-semibold h-12 flex items-center text-center animate-pulse';
                faceEl.src = 'https://placehold.co/200x200/111827/ef4444?text=ERROR';
                faceEl.classList.add('glitching');
                startBtn.textContent = 'Retry Calibration';
            } else if (playerSequence.length === targetSequence.length) {
                testRunning = false;
                statusEl.textContent = 'STATUS: COGNITIVE FUNCTION NOMINAL.';
                statusEl.className = 'mt-4 text-green-400 font-semibold h-12 flex items-center text-center';
                faceEl.src = 'https://placehold.co/200x200/111827/6ee7b7?text=OK';
                faceEl.classList.remove('glitching');
                startBtn.textContent = 'Begin New Test';
            }
        };
        
        cells.forEach(cell => cell.addEventListener('click', handleCellClick));
        startBtn.addEventListener('click', startNewTest);
    }
    
    // ===== Digital Abyss Canvas Logic =====
    const canvas = document.getElementById('abyss-canvas');
    let animationFrameId;

    const setupAbyss = () => {
        if (!canvas) return;
        const abyssCtx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        const columns = Math.floor(canvas.width / 20);
        const drops = Array(columns).fill(1);
        const chars = '01'.split('');
        const color1 = { r: 79, g: 70, b: 229 }, color2 = { r: 220, g: 38, b: 38 };

        function draw() {
            const rect = canvas.getBoundingClientRect();
            const scrollPercent = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
            abyssCtx.fillStyle = \`rgba(209, 213, 229, \${0.1 - (scrollPercent * 0.1)})\`;
            abyssCtx.fillRect(0, 0, canvas.width, canvas.height);
            const r = Math.round(color1.r + (color2.r - color1.r) * scrollPercent);
            const g = Math.round(color1.g + (color2.g - color1.g) * scrollPercent);
            const b = Math.round(color1.b + (color2.b - color1.b) * scrollPercent);
            abyssCtx.fillStyle = \`rgb(\${r}, \${g}, \${b})\`;
            abyssCtx.font = '15px monospace';
            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                abyssCtx.fillText(text, i * 20, drops[i] * 20);
                if (drops[i] * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        }

        function animate() {
            draw();
            animationFrameId = requestAnimationFrame(animate);
        }
        
        const abyssObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { if(!animationFrameId) animate(); }
                else { if(animationFrameId) cancelAnimationFrame(animationFrameId); animationFrameId = null; }
            });
        }, { threshold: 0 });

        abyssObserver.observe(document.getElementById('digital-abyss'));
        window.addEventListener('resize', () => {
            if(animationFrameId) cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
            setupAbyss();
        });
    };

    // ========== INITIALIZATION ==========
    function setTabActive(hash, runEffects = false) {
        const targetId = hash.substring(1);

        if (runEffects) {
            if (targetId === 'characters' && !hasSeenStickerbomb) {
                hasSeenStickerbomb = true;
                const stickerbomb = document.getElementById('stickerbomb-overlay');
                stickerbomb.classList.add('visible');
                setTimeout(() => stickerbomb.classList.remove('visible'), 2500);
            }
            if (targetId === 'overview' && !premiseTyped) {
                premiseTyped = true;
                const premiseEl = document.getElementById('premise-text');
                const premiseContent = "In a near-future where the biotech giant Myndwell can surgically remove trauma, a patient who volunteered for the REM procedure slowly realizes his newfound peace is a manufactured lie. The player experiences this fractured identity, playing as both the waking-world Human, living a sterile and hollow life, and the subconscious Janitor, exploring surreal dreamscapes to piece together a stolen identity.";
                if (premiseEl) typeWriter(premiseEl, premiseContent, 20);
            }
        }

        navLinks.forEach(link => link.classList.toggle('active', link.hash === hash));
        contentPanes.forEach(pane => pane.classList.toggle('active', pane.id === targetId));
    }

    function revealGameBible(event) {
        event.preventDefault();
        if (gameBibleContent.classList.contains('hidden-by-default')) {
            gameBibleContent.classList.remove('hidden-by-default');
        }
        const hash = event.currentTarget.hash || '#game-bible-anchor';
        const targetId = hash === '#game-bible-anchor' ? 'game-bible-anchor' : hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        const tabHash = gameBibleAnchors.includes(hash) ? hash : '#overview';
        setTimeout(() => { window.location.hash = tabHash; }, 10);
    }

    const discoverBtn = document.getElementById('discover-truth-btn');
    const gameBibleNavLinks = document.querySelectorAll('#nav-links-rem a');
    const gameBibleContent = document.getElementById('game-bible-anchor');
    const gameBibleAnchors = ['#overview', '#gameplay', '#characters', '#mechanics', '#levels', '#lore', '#art'];
    
    if(discoverBtn) discoverBtn.addEventListener('click', revealGameBible);
    
    gameBibleNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (gameBibleContent && gameBibleContent.classList.contains('hidden-by-default')) {
                revealGameBible(e);
            } else {
                e.preventDefault();
                window.location.hash = link.hash;
            }
        });
    });

    window.addEventListener('hashchange', () => {
        const currentHash = window.location.hash;
        if (currentHash && gameBibleAnchors.includes(currentHash)) {
            setTabActive(currentHash, true);
        }
    });

    const initialHash = window.location.hash;
    if (initialHash && gameBibleAnchors.includes(initialHash)) {
        if(gameBibleContent) gameBibleContent.classList.remove('hidden-by-default');
        setTabActive(initialHash, false);
    } else {
        setTabActive('#overview', false);
    }
    
    // Call all setup functions
    updateLevelDetails(1);
    initializeExpandableCards();
    randomizeRedactedNames();
    setupTermButtons();
    // Don't setup abyss until it's visible
    setupGameplayLoop();
    setupNarrativeVisualizer();
    setupAnatomySequence();
    setupFracturedMind();
    setupClassifiedInfo();
    setupOverseerTest();

    document.querySelectorAll('.redacted').forEach(span => {
        span.addEventListener('click', () => {
            span.classList.add('revealed');
        });
    });
});
`},{name:`style.css`,totalLines:867,sizeBytes:21193,code:`/* General & Landing Page Styles */
html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: #ffffff;
    transition: background-color 1s ease-out;
}

body.no-scroll {
    overflow: hidden;
}

.section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 4rem 2rem;
    position: relative;
    z-index: 10;
    overflow: hidden;
}

.sticky-nav {
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: background-color 0.5s ease, color 0.5s ease;
}

.hero-bg {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: url('https://placehold.co/1920x1080/eef2ff/ffffff?text=');
    background-size: cover;
    background-position: center;
    z-index: 1;
    transition: opacity 1s ease, filter 1s ease;
}

.glitch-overlay {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: url('https://placehold.co/1920x1080/111827/4f46e5?text=ERROR');
    background-size: cover;
    background-position: center;
    z-index: 2;
    opacity: 0;
    mix-blend-mode: screen;
    animation: glitch-bg 4s infinite step-end;
    display: none;
}

.content-wrapper {
    position: relative;
    z-index: 10;
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

/* New Propaganda Section Styles */
.step-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.benefit-card {
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.testimonial-card {
    transition: opacity 1s ease;
}

.testimonial-card.active {
    display: block;
}

/* Digital Abyss Transition Styles */
#digital-abyss {
    padding: 0;
    background-color: #d1d5db; /* End color of previous section */
    position: relative;
}

#abyss-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.abyss-text {
    color: white;
    z-index: 15;
    text-shadow: 0 0 10px rgba(0,0,0,0.7);
}

.final-section {
    background-color: #111827;
    color: #e5e7eb;
}

.final-section .content-wrapper {
    background-color: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(2px);
    padding: 2rem;
    border-radius: 1rem;
}

/* Game Bible Styles */
.game-bible-main {
    background-color: #111827;
    color: #d1d5db;
}

/* Hide the entire hacker section by default */
#hacker-content-wrapper {
    display: none;
}

.hidden-by-default {
    display: none;
}

.font-lora { font-family: 'Lora', serif; }

.dream-world-bg {
    background-color: #111827;
    position: relative;
    overflow: hidden;
}

.dream-world-bg::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image:
        radial-gradient(circle at 20% 20%, rgba(76, 29, 149, 0.3) 0%, transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(220, 38, 38, 0.2) 0%, transparent 30%);
    opacity: 0.5;
    z-index: 1;
}

.content-section { z-index: 2; position: relative; }

.nav-item { transition: all 0.3s ease; }

.nav-item.active {
    color: #a5b4fc;
    border-bottom-color: #a5b4fc;
    font-weight: 700;
}

.content-pane { display: none; }
.content-pane.active { display: block; }

.character-card, .level-card, .card-item {
    transition: all 0.3s ease;
    cursor: pointer;
}

.character-card:hover, .timeline-item:hover, .card-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
}

.character-card.dream-card:hover {
    box-shadow: 0 10px 15px -3px rgba(220, 38, 38, 0.2), 0 4px 6px -2px rgba(220, 38, 38, 0.1);
}

.timeline-item.active .timeline-dot {
    transform: scale(1.5);
    background-color: #a5b4fc;
}

/* Animations & Glitch Effects */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.fade-in-on-load { animation: fadeIn 1s 0.5s ease-out forwards; opacity: 0; }
.fade-in-section { opacity: 0; transition: opacity 1s, transform 1s; transform: translateY(20px); }

@keyframes glitch-bg {
    0%, 100% { clip-path: inset(0 0 0 0); }
    5% { clip-path: inset(10% 0 85% 0); }
    10% { clip-path: inset(90% 0 1% 0); }
    15% { clip-path: inset(30% 0 60% 0); }
    20% { clip-path: inset(0 0 0 0); }
    80% { clip-path: inset(0 0 0 0); }
    82% { opacity: 1; transform: translateX(-5px); }
    84% { opacity: 0.5; transform: translateY(5px); }
    86% { opacity: 1; clip-path: inset(40% 0 40% 0); }
    88% { clip-path: inset(0 0 0 0); opacity: 1; transform: none; }
}

.glitch-title {
    position: relative;
    color: white;
    animation: glitch-shake 3s infinite;
}

.glitch-title::before, .glitch-title::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #111827;
    overflow: hidden;
}

.glitch-title::before {
    left: 3px;
    text-shadow: -2px 0 red;
    animation: glitch-anim-1 2s infinite linear alternate-reverse;
}

.glitch-title::after {
    left: -3px;
    text-shadow: 2px 0 blue;
    animation: glitch-anim-2 3s infinite linear alternate-reverse;
}

.glitch-abyss {
    position: relative;
    color: white;
    animation: glitch-shake 3s infinite;
}

.glitch-abyss::before, .glitch-abyss::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent; /* This allows the canvas to show through */
    overflow: hidden;
}

.glitch-abyss::before {
    left: 3px;
    text-shadow: -2px 0 red;
    animation: glitch-anim-1 2s infinite linear alternate-reverse;
}

.glitch-abyss::after {
    left: -3px;
    text-shadow: 2px 0 blue;
    animation: glitch-anim-2 3s infinite linear alternate-reverse;
}

@keyframes glitch-shake {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(5px, 5px); }
    50% { transform: translate(-5px, -5px); }
    75% { transform: translate(5px, -5px); }
}

@keyframes glitch-anim-1 {
    0% { clip-path: inset(39% 0 29% 0); }
    100% { clip-path: inset(45% 0 53% 0); }
}

@keyframes glitch-anim-2 {
    0% { clip-path: inset(19% 0 18% 0); }
    100% { clip-path: inset(86% 0 4% 0); }
}

.glitch-target.glitching {
    position: relative;
    animation: text-shake 0.3s forwards;
}

.glitch-target.glitching::before, .glitch-target.glitching::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
}

.glitch-target.glitching::before {
    left: 2px;
    text-shadow: -1px 0 #ff00c1;
    clip-path: inset(50% 0 50% 0);
    animation: noise-glitch 0.5s infinite;
}

.glitch-target.glitching::after {
    left: -2px;
    text-shadow: -1px 0 #00fff9;
    clip-path: inset(50% 0 50% 0);
    animation: noise-glitch 0.5s infinite reverse;
}

@keyframes text-shake {
    0% { transform: translate(0,0); }
    25% { transform: translate(-2px, 2px); }
    50% { transform: translate(2px, -2px); }
    75% { transform: translate(2px, 2px); }
    100% { transform: translate(0,0); }
}

@keyframes noise-glitch {
    0% { clip-path: inset(69% 0 29% 0); } 10% { clip-path: inset(43% 0 55% 0); } 20% { clip-path: inset(19% 0 18% 0); } 30% { clip-path: inset(75% 0 23% 0); } 40% { clip-path: inset(2% 0 29% 0); } 50% { clip-path: inset(93% 0 4% 0); } 60% { clip-path: inset(34% 0 18% 0); } 70% { clip-path: inset(86% 0 4% 0); } 80% { clip-path: inset(93% 0 5% 0); } 90% { clip-path: inset(5% 0 50% 0); } 100% { clip-path: inset(45% 0 53% 0); }
}

.overseer-container .face {
    transition: filter 0.5s ease;
    position: relative;
}

.overseer-container .face.glitching::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Cg fill-opacity='0.2'%3E%3Cpath fill='%23ff0000' d='M0 0h800v600H0z'/%3E%3Cpath d='M0 0h800v600H0z' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E");
    animation: noise-glitch 0.3s infinite;
    opacity: 0.5;
}

.leaked-memo {
    background-color: #1a2433;
    border-left: 4px solid #ef4444;
    font-family: 'Courier New', Courier, monospace;
}

.redacted {
    background-color: #e5e7eb;
    color: #e5e7eb;
    cursor: pointer;
    transition: all 0.2s ease;
    user-select: none;
}

.redacted.revealed {
    background-color: transparent;
    color: #fca5a5;
}

#stickerbomb-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(220, 38, 38, 0.85);
    color: white;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    font-size: 5vw;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 1;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px);
}

#stickerbomb-overlay.visible {
    opacity: 1;
    visibility: visible;
}

#premise-text::after {
    content: '_';
    animation: blink 1s step-end infinite;
}

#premise-text.typing-done::after {
    display: none;
}

@keyframes blink {
    50% { opacity: 0; }
}

#lore .text-indigo-800 { color: #9be2ff; }
#lore .text-indigo-700 { color: #81e6ff; }
#lore .text-gray-500 { color: #a0aec0; }
#lore .text-gray-400 { color: #a0aec0; }
#lore .text-gray-700 { color: #cbd5e0; }
#lore .text-indigo-600 { background-color: #4c51bf; }
#lore .text-indigo-200 { background-color: #5d67e2; }
#lore .text-indigo-800.font-semibold { color: #e0e7ff; }
#lore .border-indigo-100 { border-color: #4a5568; }
#lore .bg-indigo-50 { background-color: #2f364d; }
#lore .border-indigo-200 { border-color: #4a5568; }
#lore .shadow-inner { box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.4); }

#lore .mantras-section h2 { color: #9be2ff; }
#lore .mantras-section p#phrase-display { color: #a0aec0; }
#lore .mantras-section button { background-color: #4c51bf; color: #e0e7ff; }
#lore .mantras-section button:hover { background-color: #6a74da; }

/* ===== HIERARCHY & GAMEPLAY LOOP STYLES ===== */
.internal-world-pyramid {
    width: 100%;
    max-width: 1200px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.pyramid-level {
    display: flex;
    justify-content: center;
    flex-wrap: wrap; 
    gap: 1.5rem;
    width: 100%;
    position: relative;
    padding: 2rem 0;
}

.pyramid-card-wrapper {
    position: relative;
    flex-shrink: 0;
}

.pyramid-card-wrapper::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%);
    width: 2px;
    height: 2rem; 
    background-color: #4a5568; 
}

.pyramid-level:first-child .pyramid-card-wrapper::before { display: none; }

.pyramid-level::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    height: 2px;
    background-color: #4a5568;
    z-index: -1;
}
.pyramid-level.level-2::after { left: 25%; right: 25%; }
.pyramid-level.level-3::after { left: 16.66%; right: 16.66%; }
.pyramid-level.level-4::after { left: 12.5%; right: 12.5%; }
.pyramid-level.level-5::after { left: 10%; right: 10%; }
.pyramid-level.level-1::after { display: none; }

.pyramid-card {
    background-color: #374151; 
    border: 1px solid #4b5563; 
    width: 200px;
    transition: all 0.3s ease;
}
.pyramid-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
}
.pyramid-card .expandable-toggle { font-size: 1rem; font-weight: 600; }
.pyramid-card .expandable-content { font-size: 0.875rem; }

.redacted-partition-name {
    font-family: 'Courier New', Courier, monospace;
    animation: text-glitch 1.5s infinite steps(8);
}

@keyframes text-glitch {
    0% { text-shadow: 1px 0 0 #ef4444, -1px 0 0 #a5b4fc; }
    25% { text-shadow: -1px 0 0 #ef4444, 1px 0 0 #a5b4fc; }
    50% { text-shadow: 1px 0 0 #ef4444, 1px 0 0 #a5b4fc; transform: skewX(-5deg); }
    75% { text-shadow: -1px 0 0 #ef4444, -1px 0 0 #a5b4fc; }
    100% { text-shadow: 1px 0 0 #ef4444, -1px 0 0 #a5b4fc; transform: skewX(0); }
}
 
#gameplay-loop-container .level-selector, #path-timeline-wrapper {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
#gameplay-loop-container .level-selector::-webkit-scrollbar, #path-timeline-wrapper::-webkit-scrollbar {
    display: none;
}
.loop-level-btn {
    transition: all 0.2s ease-in-out;
}
.loop-level-btn.active {
    background-color: #4f46e5;
    color: #fff;
    transform: scale(1.05);
}
.choice-btn {
    transition: all 0.2s ease-in-out;
}
.choice-btn:hover {
    transform: translateY(-2px);
}
.consequence-box {
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

/* Narrative Path Visualizer Styles */
#path-timeline {
    display: flex;
    align-items: center;
    min-width: 1200px;
}
.path-node {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    width: 120px;
}
.path-node .node-label {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #9ca3af;
}
.path-node .node-circle {
    width: 20px;
    height: 20px;
    border: 3px solid #4b5563;
    background-color: #1f2937;
    transition: all 0.3s ease;
}
.path-node.active .node-circle {
    border-color: #a5b4fc;
}
.path-node .node-choices button {
    width: 32px;
    height: 32px;
    font-size: 1rem;
    border: 2px solid transparent;
}
.path-node .node-choices button.selected {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
}
.path-node .node-choices button:disabled:not(.selected) {
    opacity: 0.3;
    cursor: not-allowed;
}

.path-connector {
    flex-grow: 1;
    height: 4px;
    background-color: #4b5563;
}

#dissonance-meter-container .bar {
    transition: width 0.5s ease-out;
}
 
/* Anatomy of a Memory Styles */
.anatomy-step {
    opacity: 0.3;
    transform: translateX(-10px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}
.anatomy-step.visible {
    opacity: 1;
    transform: translateX(0);
}
.anatomy-step i {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Fractured Mind Interactive Styles */
#fractured-mind-container {
    perspective: 1000px;
    cursor: pointer;
    height: 400px;
    width: 100%;
}
.brain-wrapper {
    position: relative;
    width: 256px;
    height: 256px;
    transition: transform 0.8s ease-in-out;
    transform-style: preserve-3d;
}
.brain-half {
    position: absolute;
    top: 0;
    width: 128px;
    height: 256px;
    transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    backface-visibility: hidden;
}
.brain-half.left { left: 0; }
.brain-half.right { right: 0; }
 
#fractured-mind-container.split .brain-half.left {
    transform: translateX(-120px) rotateY(-25deg);
}
#fractured-mind-container.split .brain-half.right {
    transform: translateX(120px) rotateY(25deg);
}

.concept-node {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: currentColor;
    opacity: 0;
    transform: scale(0);
    transition: opacity 0.5s 0.5s, transform 0.5s 0.5s;
}
#fractured-mind-container.split .concept-node {
    opacity: 1;
    transform: scale(1);
}
.concept-node:hover {
    transform: scale(1.5) !important;
    z-index: 20;
}

.node-tooltip {
    position: absolute;
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #111827;
    color: #d1d5db;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s, visibility 0.2s;
    pointer-events: none;
}
.concept-node:hover .node-tooltip {
    opacity: 1;
    visibility: visible;
}
 
/* Classified Info Styles */
#classified-container {
    cursor: pointer;
    border: 2px dashed #4b5563;
    position: relative;
    overflow: hidden;
}
.classified-overlay {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: opacity 0.5s ease;
}
#classified-container.revealed .classified-overlay {
    opacity: 0;
    pointer-events: none;
}
#classified-content {
    display: none;
    font-family: 'Courier New', Courier, monospace;
    padding-top: 1rem;
    padding-bottom: 1rem;
}
#classified-container.revealed #classified-content {
    display: block;
}
#classified-content::after {
    content: '_';
    animation: blink 1s step-end infinite;
}
 
/* Overseer Test Styles */
.pattern-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    width: 150px;
    margin: 0 auto;
}
.pattern-cell {
    width: 42px;
    height: 42px;
    border: 2px solid #4b5563;
    cursor: pointer;
    transition: all 0.2s ease;
}
.pattern-cell:hover {
    background-color: #4f46e5;
}
.pattern-cell.flash {
    animation: flash-anim 0.5s;
}
@keyframes flash-anim {
    50% { background-color: #a5b4fc; }
}


/* ===== NEW STYLES FOR MODALS AND HACKER TRANSITION ===== */

/* Modal Styles */
.modal {
    position: fixed;
    inset: 0;
    z-index: 5000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}
.modal.visible {
    opacity: 1;
    visibility: visible;
}
.modal-overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(17, 24, 39, 0.8);
    backdrop-filter: blur(5px);
}
.modal-content {
    position: relative;
    background-color: #1f2937;
    color: #d1d5db;
    padding: 2rem;
    border-radius: 0.5rem;
    border: 1px solid #4b5563;
    max-width: 90%;
    width: 600px;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.5);
}
.modal-close-btn {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    font-size: 2rem;
    color: #9ca3af;
    background: none;
    border: none;
    cursor: pointer;
    line-height: 1;
}
.modal-close-btn:hover {
    color: #e5e7eb;
}

/* Hacker Popup Styles */
#hacker-popup {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 4000;
    transform: translateY(100%);
    transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
    padding: 1rem;
    font-family: 'Courier New', Courier, monospace;
}
#hacker-popup.visible {
    transform: translateY(0);
}
.hacker-popup-content {
    max-width: 600px;
    margin: 0 auto;
    background-color: rgba(10, 10, 15, 0.9);
    backdrop-filter: blur(3px);
    border: 1px solid #ef4444;
    box-shadow: 0 0 15px rgba(239, 68, 68, 0.5), inset 0 0 10px rgba(239, 68, 68, 0.3);
    padding: 1.5rem;
    text-align: center;
    color: #fca5a5;
}
#hacker-popup .glitch-text {
    font-size: 1.25rem;
    font-weight: bold;
    color: #f87171;
    text-shadow: 0 0 5px #ef4444;
    position: relative;
}
#hacker-popup .glitch-text::before, #hacker-popup .glitch-text::after {
    content: attr(data-text);
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: transparent;
}
#hacker-popup .glitch-text::before {
    left: 2px;
    text-shadow: -1px 0 #3b82f6;
    animation: noise-glitch 1.5s infinite linear alternate-reverse;
}
#hacker-popup .glitch-text::after {
    left: -2px;
    text-shadow: 1px 0 #4ade80;
    animation: noise-glitch 2s infinite linear alternate-reverse;
}

#hacker-popup .sub-text {
    font-size: 0.875rem;
    color: #9ca3af;
    margin-top: 0.5rem;
}
#breach-button {
    margin-top: 1rem;
    background-color: #dc2626;
    color: white;
    font-weight: bold;
    padding: 0.5rem 1.5rem;
    border: 1px solid #f87171;
    cursor: pointer;
    transition: all 0.2s ease;
}
#breach-button:hover {
    background-color: #ef4444;
    box-shadow: 0 0 10px #ef4444;
}

/* Full Page Glitch Effect */
#fullpage-glitch-overlay {
    position: fixed;
    inset: 0;
    background-color: #111827;
    z-index: 99999;
    pointer-events: none;
    display: none;
}
#fullpage-glitch-overlay.active {
    display: block;
    animation: full-glitch 0.4s steps(2, end);
}

@keyframes full-glitch {
    0% { clip-path: inset(10% 0 85% 0); }
    10% { clip-path: inset(90% 0 1% 0); }
    20% { clip-path: inset(30% 0 60% 0); }
    30% { clip-path: inset(50% 0 40% 0); opacity: 0.8; }
    40% { clip-path: inset(15% 0 70% 0); }
    50% { clip-path: inset(80% 0 5% 0); transform: translateX(10px); }
    60% { clip-path: inset(25% 0 55% 0); }
    70% { clip-path: inset(65% 0 20% 0); transform: translateX(-10px); opacity: 0.6; }
    80% { clip-path: inset(35% 0 35% 0); }
    90% { clip-path: inset(95% 0 2% 0); }
    100% { clip-path: inset(0 0 0 0); }
}
`}]},waiwwai:{files:[{name:`index.html`,totalLines:653,sizeBytes:35382,code:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WaiWWai | Project Bible</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=DM+Sans:opsz,wght@9..40,400;700&family=Playfair+Display:ital,wght@0,400;1,900&display=swap" rel="stylesheet">
    <style>
        :root {
            --beige-light: #e8e4c9;
            --beige-dim: #d4c5a3;
            --beige-dark: #8a856b;
            --black: #0a0a0a;
            --grey-dark: #1f1f1f;
            --grey-mid: #404040;
            --liquid-color: rgba(212, 197, 163, 0.15);
        }

        body {
            background-color: var(--black);
            color: var(--beige-light);
            font-family: 'Courier Prime', monospace;
            overflow-x: hidden;
            margin: 0;
        }

        /* Typography overrides */
        .font-sans { font-family: 'DM Sans', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-mono { font-family: 'Courier Prime', monospace; }

        /* SCROLLBAR */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: var(--black); }
        ::-webkit-scrollbar-thumb { background: var(--beige-dark); border-radius: 4px; }

        /* UTILITY ANIMATIONS */
        @keyframes liquid-flow {
            0% { background-position: 0% 0%; }
            100% { background-position: 0% 200%; }
        }

        .liquid-bg {
            background: linear-gradient(180deg, 
                rgba(10,10,10,1) 0%, 
                rgba(31,31,31,0.8) 50%, 
                rgba(10,10,10,1) 100%),
                url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 1.79 4 4 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 2.24 5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 2.24 5 5 2.24 5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d4c5a3' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
            animation: liquid-flow 60s linear infinite;
        }

        /* GLITCH EFFECTS */
        .glitch-wrapper { position: relative; display: inline-block; }
        .glitch-text { position: relative; z-index: 1; }
        .glitch-text::before, .glitch-text::after {
            content: attr(data-text);
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: var(--black); opacity: 0.7;
        }
        .glitch-text::before {
            color: var(--beige-light);
            z-index: -1;
            animation: glitch-anim-1 3s infinite linear alternate-reverse;
        }
        .glitch-text::after {
            color: #505050;
            z-index: -2;
            animation: glitch-anim-2 2s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim-1 {
            0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
            20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
            40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
            60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
            80% { clip-path: inset(10% 0 70% 0); transform: translate(-1px, 1px); }
            100% { clip-path: inset(30% 0 30% 0); transform: translate(1px, -1px); }
        }
        @keyframes glitch-anim-2 {
            0% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -1px); }
            100% { clip-path: inset(80% 0 10% 0); transform: translate(-2px, 1px); }
        }

        /* UI COMPONENTS */
        .nav-btn {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        .nav-btn::after {
            content: '';
            position: absolute;
            bottom: 0; left: 0; width: 0%; height: 1px;
            background-color: var(--beige-dim);
            transition: width 0.3s ease;
        }
        .nav-btn:hover::after, .nav-btn.active::after { width: 100%; }
        .nav-btn.active { color: var(--beige-light); text-shadow: 0 0 8px rgba(212, 197, 163, 0.3); }

        .content-card {
            background: rgba(20, 20, 20, 0.6);
            backdrop-filter: blur(5px);
            border: 1px solid var(--grey-mid);
            box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
            transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .content-card:hover {
            border-color: var(--beige-dark);
            transform: translateY(-2px);
        }

        /* INVENTORY & INTERACTIVE */
        .inventory-item {
            cursor: pointer;
            transition: all 0.3s;
        }
        .inventory-item.decayed {
            opacity: 0.2;
            filter: grayscale(100%) blur(2px);
            transform: scale(0.9);
        }
        
        .evasive-btn {
            transition: transform 0.2s ease-out;
            position: relative;
        }

        /* THE FRONT PAGE (DECEPTION) */
        #public-face {
            background-color: #f0ece2; /* Beige Station Color */
            color: #111;
            font-family: 'DM Sans', sans-serif;
        }
        .tube-roundel {
            border: 8px solid #DC241F;
            background: white;
            width: 130px; height: 130px;
            border-radius: 50%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .tube-bar {
            background: #0019A8;
            color: white;
            width: 150px;
            height: 28px;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 0.5px;
            white-space: nowrap;
        }
        
        #service-alert {
            position: fixed; bottom: -100px; left: 0; right: 0;
            background: #DC241F; color: white;
            padding: 1rem; text-align: center;
            transition: bottom 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
        }
        #service-alert.visible { bottom: 0; }

        /* THE CANVAS RAIN */
        #rain-canvas {
            position: fixed; top: 0; left: 0;
            width: 100%; height: 100%;
            z-index: -1;
            pointer-events: none;
            opacity: 0.15;
        }

        .fade-out { opacity: 0; pointer-events: none; transition: opacity 1s ease; }
        .hidden-content { display: none; }
        .visible-flex { display: flex; }
    </style>
</head>
<body>

    <!-- ===================== LAYER 1: THE PUBLIC FACE ===================== -->
    <div id="public-face" class="fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-1000">
        <div class="tube-roundel mb-8">
            <div class="tube-bar">Turnpike Lane</div>
        </div>
        <h1 class="text-4xl font-bold tracking-tight uppercase mb-2 text-gray-900">Station Status</h1>
        <div class="bg-white border border-gray-300 p-6 w-full max-w-md shadow-sm text-sm">
            
            <!-- Tube Status -->
            <div class="flex justify-between items-center border-b border-gray-200 pb-2 mb-4 group cursor-help">
                <span class="font-bold text-lg text-[#0019A8]">Piccadilly Line</span>
                <!-- Feature 1: The Station Glitch -->
                <span class="text-green-700 font-bold group-hover:hidden">Good Service</span>
                <span class="text-red-700 font-bold hidden group-hover:inline font-mono glitch-text" data-text="NO ESCAPE">NO ESCAPE</span>
            </div>
            
            <!-- Next Trains -->
            <div class="mb-6">
                <h3 class="font-bold text-gray-500 text-xs uppercase tracking-wider mb-2">Next Trains</h3>
                <div class="flex justify-between mb-1 group cursor-help">
                    <span>Cockfosters</span>
                    <span class="font-mono font-bold group-hover:hidden">2 mins</span>
                    <span class="font-mono font-bold hidden group-hover:inline text-red-600">YEARS AGO</span>
                </div>
                <div class="flex justify-between mb-1">
                    <span>Heathrow T5</span>
                    <span class="font-mono font-bold">4 mins</span>
                </div>
                <div class="flex justify-between group cursor-help">
                    <span>Arnos Grove</span>
                    <span class="font-mono font-bold group-hover:hidden">7 mins</span>
                    <span class="font-mono font-bold hidden group-hover:inline text-red-600">WAIT</span>
                </div>
            </div>

            <!-- Bus Status -->
            <div>
                <h3 class="font-bold text-gray-500 text-xs uppercase tracking-wider mb-2">Bus Departures (Stop C)</h3>
                <div class="flex justify-between mb-1 border-t border-gray-100 pt-1 group cursor-help">
                    <span><strong class="bg-red-600 text-white px-1 rounded-sm mr-2">29</strong>Wood Green</span>
                    <span class="font-mono font-bold group-hover:hidden">due</span>
                    <span class="font-mono font-bold hidden group-hover:inline text-red-600">GONE</span>
                </div>
                <div class="flex justify-between mb-1 border-t border-gray-100 pt-1">
                    <span><strong class="bg-red-600 text-white px-1 rounded-sm mr-2">41</strong>Archway</span>
                    <span class="font-mono font-bold">3 mins</span>
                </div>
                <div class="flex justify-between border-t border-gray-100 pt-1">
                    <span><strong class="bg-red-600 text-white px-1 rounded-sm mr-2">141</strong>London Bridge</span>
                    <span class="font-mono font-bold">6 mins</span>
                </div>
            </div>

        </div>
        <p class="mt-8 text-xs text-gray-500 uppercase tracking-widest">Transport for London</p>

        <!-- The Trigger -->
        <div id="service-alert" class="flex flex-col items-center justify-center">
            <h2 class="text-lg font-bold uppercase tracking-widest glitch-text" data-text="SERVICE DISRUPTION">SERVICE DISRUPTION</h2>
            <p class="text-sm opacity-80 mb-2">Unidentified anomaly detected at Platform 4.</p>
            <button id="breach-btn" class="bg-black text-white px-6 py-1 text-sm uppercase border border-white hover:bg-white hover:text-black transition-colors">
                VIEW REPORT
            </button>
        </div>
    </div>

    <!-- ===================== LAYER 2: THE GAME BIBLE ===================== -->
    <div id="game-bible" class="hidden-content min-h-screen relative">
        
        <!-- Background Canvas for "Pouring" Effect -->
        <canvas id="rain-canvas"></canvas>
        <div class="fixed inset-0 liquid-bg pointer-events-none z-[-2]"></div>

        <!-- Navigation -->
        <nav class="fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-gray-800">
            <div class="container mx-auto px-6 h-16 flex items-center justify-between">
                <div class="text-2xl font-bold font-serif tracking-tighter text-[#d4c5a3]">
                    WaiWWai
                </div>
                <div class="hidden md:flex space-x-8 text-sm font-mono text-gray-400">
                    <button class="nav-btn active" data-target="overview">OVERVIEW</button>
                    <button class="nav-btn" data-target="gameplay">GAMEPLAY</button>
                    <button class="nav-btn" data-target="characters">CHARACTERS</button>
                    <button class="nav-btn" data-target="progression">PROGRESSION</button>
                    <button class="nav-btn" data-target="mechanics">MECHANICS</button>
                </div>
                <!-- Mobile Menu Button (Simplified) -->
                <button class="md:hidden text-[#d4c5a3]">///</button>
            </div>
        </nav>

        <!-- Content Container -->
        <main class="container mx-auto px-4 pt-24 pb-12">
            
            <!-- SECTION: OVERVIEW -->
            <section id="overview" class="content-section animate-fade-in">
                <div class="max-w-4xl mx-auto text-center mb-16">
                    <p class="text-[#8a856b] text-xs font-bold tracking-[0.3em] mb-4">PROJECT BIBLE: CONFIDENTIAL</p>
                    <h1 class="text-5xl md:text-7xl font-serif font-black text-[#e8e4c9] mb-6 leading-tight">
                        where am i,<br>
                        <span class="italic text-[#606060]">wait,</span><br>
                        where am i
                    </h1>
                    <p class="text-xl text-gray-400 font-mono max-w-2xl mx-auto leading-relaxed">
                        A disorienting 2.5D psychological horror experience about the terrifying isolation of dementia, set on an infinite London Underground platform.
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    <div class="content-card p-8">
                        <h3 class="text-xl font-serif text-[#d4c5a3] mb-4 border-b border-gray-700 pb-2">The Premise</h3>
                        <p class="text-gray-400 text-sm leading-7">
                            Inspired by <em>Everywhere at the End of Time</em>, WaiWWai places the player in the shoes of an elderly woman lost on a muted, beige underground platform. Reality is unstable. Time skips. Strangers accuse you of things you didn't do. The only constant is the train that rushes past - a violent reset that erodes the world further.
                        </p>
                    </div>
                    <div class="content-card p-8 flex flex-col justify-center items-center text-center border-l-4 border-[#d4c5a3]">
                        <h3 class="text-4xl font-serif italic text-[#e8e4c9] mb-2">"No Future."</h3>
                        <h3 class="text-4xl font-serif italic text-[#8a856b] mb-2">"No Backstory."</h3>
                        <h3 class="text-4xl font-serif italic text-[#404040]">"No Escape."</h3>
                    </div>
                </div>
            </section>

            <!-- SECTION: GAMEPLAY -->
            <section id="gameplay" class="content-section hidden-content">
                <div class="max-w-5xl mx-auto">
                    <div class="flex flex-col md:flex-row items-end mb-12 border-b border-gray-800 pb-4">
                        <h2 class="text-4xl font-serif text-[#e8e4c9]">The Loop</h2>
                        <span class="ml-4 text-xs font-mono text-[#8a856b] mb-2">SYSTEMIC DETERIORATION</span>
                    </div>

                    <div class="grid md:grid-cols-3 gap-8 mb-16">
                        <!-- Card 1 -->
                        <div class="content-card p-6 relative overflow-hidden group">
                            <div class="absolute top-0 right-0 p-2 opacity-20 text-4xl font-black">01</div>
                            <h4 class="text-lg font-bold text-[#d4c5a3] mb-3">Exploration</h4>
                            <p class="text-sm text-gray-400">Navigate the infinite beige tiles of Turnpike Lane. Interact with objects that may or may not exist. The movement is slow, heavy, 2.5D side-scrolling.</p>
                        </div>
                        <!-- Card 2 -->
                        <div class="content-card p-6 relative overflow-hidden group">
                            <div class="absolute top-0 right-0 p-2 opacity-20 text-4xl font-black">02</div>
                            <h4 class="text-lg font-bold text-[#d4c5a3] mb-3">The Train Event</h4>
                            <p class="text-sm text-gray-400">A deafening, 100db screech. The screen shakes violently. This is the level transition. When it leaves, the platform has changed. You have aged.</p>
                        </div>
                        <!-- Card 3 -->
                        <div class="content-card p-6 relative overflow-hidden group">
                            <div class="absolute top-0 right-0 p-2 opacity-20 text-4xl font-black">03</div>
                            <h4 class="text-lg font-bold text-[#d4c5a3] mb-3">Gaslighting</h4>
                            <p class="text-sm text-gray-400">The game lies to you. Controls invert. Inventory items disappear. NPCs shout at you for actions you never took.</p>
                        </div>
                    </div>
                    
                    <!-- Feature 2: The Inventory of Nothing -->
                    <div class="bg-[#111] border border-gray-800 p-8 rounded-sm text-center relative">
                        <h3 class="font-mono text-[#d4c5a3] text-xl tracking-widest mb-4">INVENTORY SIMULATION</h3>
                        <p class="text-xs text-gray-500 mb-6">Click an item to inspect it.</p>
                        <div class="grid grid-cols-3 gap-4 max-w-xs mx-auto">
                            <div class="inventory-item bg-[#1f1f1f] h-20 flex items-center justify-center border border-gray-700 hover:border-[#d4c5a3]" data-item="Ticket">
                                <span class="text-2xl">🎫</span>
                            </div>
                            <div class="inventory-item bg-[#1f1f1f] h-20 flex items-center justify-center border border-gray-700 hover:border-[#d4c5a3]" data-item="Keys">
                                <span class="text-2xl">🗝️</span>
                            </div>
                            <div class="inventory-item bg-[#1f1f1f] h-20 flex items-center justify-center border border-gray-700 hover:border-[#d4c5a3]" data-item="Photo">
                                <span class="text-2xl">📷</span>
                            </div>
                        </div>
                        <p id="inv-status" class="mt-4 h-6 text-sm font-serif text-red-500 opacity-0 transition-opacity">It crumbled...</p>
                    </div>
                </div>
            </section>

            <!-- SECTION: CHARACTERS -->
            <section id="characters" class="content-section hidden-content">
                <div class="max-w-5xl mx-auto">
                    <h2 class="text-4xl font-serif text-[#e8e4c9] mb-12">Dramatis Personae</h2>
                    
                    <div class="space-y-4">
                        <!-- Character 1 -->
                        <div class="content-card p-0 flex flex-col md:flex-row overflow-hidden">
                            <div class="w-full md:w-1/3 bg-[#1a1a1a] flex items-center justify-center p-8 border-r border-gray-800">
                                <div class="w-24 h-24 bg-[#d4c5a3] rounded-full blur-sm opacity-50"></div> <!-- Silhouette Placeholder -->
                            </div>
                            <div class="p-8 w-full md:w-2/3">
                                <h3 class="text-2xl font-serif text-white">The Woman</h3>
                                <p class="text-[#8a856b] font-mono text-xs mb-4">SUBJECT: DETERIORATING</p>
                                <p class="text-gray-400 text-sm">
                                    No name. No history. She is a vessel for confusion. Her silhouette becomes more stooped and frail as the game progresses.
                                </p>
                            </div>
                        </div>

                        <!-- Character 2 -->
                        <div class="content-card p-0 flex flex-col md:flex-row overflow-hidden">
                            <div class="w-full md:w-1/3 bg-[#1a1a1a] flex items-center justify-center p-8 border-r border-gray-800">
                                <div class="w-24 h-24 bg-gray-800 rounded-full blur-md"></div>
                            </div>
                            <div class="p-8 w-full md:w-2/3">
                                <h3 class="text-2xl font-serif text-white">The Crowd</h3>
                                <p class="text-[#8a856b] font-mono text-xs mb-4">ENTITIES: HOSTILE/INDIFFERENT</p>
                                <p class="text-gray-400 text-sm">
                                    Faceless figures. Some walk through you. Others shout accusations. They represent the social isolation of London - people are physically close but emotionally unreachable.
                                </p>
                            </div>
                        </div>

                        <!-- Character 3 -->
                        <div class="content-card p-0 flex flex-col md:flex-row overflow-hidden border-red-900/30">
                            <div class="w-full md:w-1/3 bg-[#0f0505] flex items-center justify-center p-8 border-r border-gray-800">
                                <div class="w-24 h-24 bg-black border border-red-900 rounded-full"></div>
                            </div>
                            <div class="p-8 w-full md:w-2/3">
                                <h3 class="text-2xl font-serif text-red-500">The Hooded Figure</h3>
                                <p class="text-red-900 font-mono text-xs mb-4">THE END</p>
                                <p class="text-gray-400 text-sm">
                                    Appears only at the end. The agent of the final loss. Snatches the handbag (identity) and delivers the final blow.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- SECTION: PROGRESSION -->
            <section id="progression" class="content-section hidden-content">
                <div class="max-w-5xl mx-auto">
                    <h2 class="text-4xl font-serif text-[#e8e4c9] mb-8 text-center">The Descent</h2>
                    
                    <!-- Timeline -->
                    <div class="relative border-l border-[#d4c5a3] ml-4 md:ml-auto md:mr-auto md:w-2/3 space-y-12 pl-8 py-4">
                        
                        <div class="relative">
                            <div class="absolute -left-[39px] top-1 w-5 h-5 bg-[#d4c5a3] rounded-full border-4 border-black"></div>
                            <h3 class="text-xl font-bold text-white">Phase 1: Arrival</h3>
                            <p class="text-sm text-gray-400 mt-2">Turnpike Lane is recognizable. Muted beige tiles. Eerie silence. Mild confusion - why am I here?</p>
                        </div>

                        <div class="relative">
                            <div class="absolute -left-[39px] top-1 w-5 h-5 bg-[#8a856b] rounded-full border-4 border-black"></div>
                            <h3 class="text-xl font-bold text-white">Phase 2: The Glitch</h3>
                            <p class="text-sm text-gray-400 mt-2">NPCs begin accusations. Station names blur into gibberish (e.g., "WAIT", "WHERE"). Tinnitus ringing begins.</p>
                        </div>

                        <div class="relative">
                            <div class="absolute -left-[39px] top-1 w-5 h-5 bg-[#404040] rounded-full border-4 border-black"></div>
                            <h3 class="text-xl font-bold text-white">Phase 3: Erosion</h3>
                            <p class="text-sm text-gray-400 mt-2">Tiles ripple like skin. Shadows detach from objects. The "Train Reset" happens more frequently, stripping away inventory.</p>
                        </div>

                        <div class="relative">
                            <div class="absolute -left-[39px] top-1 w-5 h-5 bg-red-900 rounded-full border-4 border-black"></div>
                            <h3 class="text-xl font-bold text-red-500 glitch-text" data-text="Phase 4: The Void">Phase 4: The Void</h3>
                            <p class="text-sm text-gray-400 mt-2">The Robbery. The Stabbing. The permanent death state. The game saves the corpse to the main menu.</p>
                        </div>

                    </div>
                </div>
            </section>
            
            <!-- SECTION: MECHANICS -->
            <section id="mechanics" class="content-section hidden-content">
                <div class="max-w-6xl mx-auto">
                    <div class="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 class="text-3xl font-serif text-[#e8e4c9] mb-6">Engineered Frustration</h2>
                            <p class="text-gray-400 mb-6 leading-relaxed">
                                Traditional games empower the player. WaiWWai disempowers them. The mechanics are designed to simulate the loss of agency found in dementia.
                            </p>
                            
                            <div class="space-y-4">
                                <div class="bg-[#1a1a1a] p-4 border-l-2 border-[#d4c5a3]">
                                    <h4 class="font-bold text-[#d4c5a3]">Phantom Inputs</h4>
                                    <p class="text-xs text-gray-500 mt-1">The character stumbles or turns without player input.</p>
                                </div>
                                <div class="bg-[#1a1a1a] p-4 border-l-2 border-[#d4c5a3]">
                                    <h4 class="font-bold text-[#d4c5a3]">Temporal Teleportation</h4>
                                    <p class="text-xs text-gray-500 mt-1">Instant position shifts. Did I walk here? Or did I forget walking here?</p>
                                </div>
                                <div class="bg-[#1a1a1a] p-4 border-l-2 border-[#d4c5a3]">
                                    <h4 class="font-bold text-[#d4c5a3]">The Rare Save (1%)</h4>
                                    <p class="text-xs text-gray-500 mt-1">If jumping on tracks: NPC pulls you back. They are annoyed, not kind. "Watch it, crazy bat."</p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-[#0a0a0a] border border-gray-800 p-6 flex flex-col items-center justify-center">
                            
                            <!-- Feature 3: The Gaslight Button -->
                            <div class="relative w-full h-64 flex items-center justify-center bg-[#111] overflow-hidden">
                                <p class="absolute top-4 text-xs text-gray-600 font-mono">MECHANIC_DEMO: 004</p>
                                <button id="evasive-btn" class="evasive-btn px-6 py-2 bg-[#d4c5a3] text-black font-bold uppercase border border-transparent shadow-lg">
                                    SAVE GAME
                                </button>
                                <p id="save-status" class="absolute bottom-4 text-red-600 font-mono text-xs hidden">ERROR: PERMISSION DENIED</p>
                            </div>
                            <p class="text-center text-xs font-mono text-gray-600 mt-4">HOVER TO INTERACT</p>

                        </div>
                    </div>
                </div>
            </section>

        </main>

        <!-- Footer -->
        <footer class="border-t border-gray-900 bg-black text-center py-8 mt-12">
            <p class="text-[#404040] text-xs font-mono">MEMORY PERSISTENCE: PERMANENT // ENDING: INEVITABLE</p>
        </footer>

    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            
            // --- 1. The Deceptive Intro ---
            const alertBox = document.getElementById('service-alert');
            const breachBtn = document.getElementById('breach-btn');
            const publicFace = document.getElementById('public-face');
            const gameBible = document.getElementById('game-bible');
            
            // Show alert after a few seconds
            setTimeout(() => {
                alertBox.classList.add('visible');
            }, 2000);

            // Handle Breach
            breachBtn.addEventListener('click', () => {
                // Glitch effect
                publicFace.style.animation = "glitch-anim-1 0.2s infinite";
                publicFace.style.filter = "invert(1) grayscale(1)";
                
                setTimeout(() => {
                    publicFace.style.opacity = "0";
                    setTimeout(() => {
                        publicFace.style.display = "none";
                        gameBible.classList.remove('hidden-content');
                        initRainCanvas(); // Start canvas
                    }, 1000);
                }, 800);
            });

            // --- 2. Navigation ---
            const navBtns = document.querySelectorAll('.nav-btn');
            const sections = document.querySelectorAll('.content-section');

            navBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Update Buttons
                    navBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    // Update Content
                    const targetId = btn.dataset.target;
                    sections.forEach(sec => {
                        if(sec.id === targetId) {
                            sec.classList.remove('hidden-content');
                            sec.classList.add('animate-fade-in');
                        } else {
                            sec.classList.add('hidden-content');
                        }
                    });
                    
                    // Scroll to top
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            });

            // --- 3. Canvas Rain Effect (The "Pouring Liquid") ---
            function initRainCanvas() {
                const canvas = document.getElementById('rain-canvas');
                const ctx = canvas.getContext('2d');
                
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                const columns = Math.floor(canvas.width / 20);
                const drops = [];

                for(let i=0; i<columns; i++) {
                    drops[i] = Math.random() * canvas.height; // Random start Y
                }

                function draw() {
                    // Semi-transparent black to create trails
                    ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);

                    ctx.fillStyle = '#d4c5a3'; // Beige color
                    ctx.font = '14px monospace';

                    for(let i=0; i<drops.length; i++) {
                        const text = Math.random() > 0.95 ? 'WHERE' : '|';
                        ctx.fillText(text, i*20, drops[i]*20);

                        if(drops[i]*20 > canvas.height && Math.random() > 0.975) {
                            drops[i] = 0;
                        }
                        drops[i]++;
                    }
                    requestAnimationFrame(draw);
                }
                draw();

                window.addEventListener('resize', () => {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                });
            }

            // --- 4. Inventory Logic (New Feature) ---
            const invItems = document.querySelectorAll('.inventory-item');
            const invStatus = document.getElementById('inv-status');
            const statusMessages = ["It crumbled...", "It wasn't yours...", "What ticket?", "Forgot..."];

            invItems.forEach(item => {
                item.addEventListener('click', () => {
                    if(!item.classList.contains('decayed')) {
                        item.classList.add('decayed');
                        
                        // Change content randomly
                        const content = item.querySelector('span');
                        content.innerText = "💨"; // Dust emoji
                        
                        // Show random message
                        invStatus.innerText = statusMessages[Math.floor(Math.random() * statusMessages.length)];
                        invStatus.style.opacity = 1;
                        setTimeout(() => { invStatus.style.opacity = 0; }, 1500);
                    }
                });
            });

            // --- 5. Gaslight Button Logic (New Feature) ---
            const evasiveBtn = document.getElementById('evasive-btn');
            const saveStatus = document.getElementById('save-status');
            let moveCount = 0;

            evasiveBtn.addEventListener('mouseover', () => {
                // 50% chance to move on hover
                if(Math.random() > 0.5) {
                    const x = (Math.random() - 0.5) * 150;
                    const y = (Math.random() - 0.5) * 100;
                    evasiveBtn.style.transform = \`translate(\${x}px, \${y}px)\`;
                    moveCount++;
                }
            });

            evasiveBtn.addEventListener('click', () => {
                // If clicked, gaslight the user
                const texts = ["DID NOT SAVE", "CORRUPTED", "ERROR: 404", "WHY TRY?"];
                evasiveBtn.innerText = texts[moveCount % texts.length];
                evasiveBtn.style.backgroundColor = "#881111";
                evasiveBtn.style.color = "white";
                saveStatus.classList.remove('hidden');
                
                setTimeout(() => {
                    saveStatus.classList.add('hidden');
                    evasiveBtn.innerText = "SAVE GAME";
                    evasiveBtn.style.backgroundColor = "#d4c5a3";
                    evasiveBtn.style.color = "black";
                    evasiveBtn.style.transform = "translate(0,0)";
                }, 2000);
            });

        });
    <\/script>
</body>
</html>
`}]}},vp=1440,yp=810;function bp({src:e,title:t}){let n=(0,_.useRef)(null),[r,i]=(0,_.useState)(.5);(0,_.useEffect)(()=>{let e=n.current;if(!e)return;let t=()=>{let t=e.clientWidth;t>0&&i(t/vp)};t();let r=new ResizeObserver(t);return r.observe(e),()=>r.disconnect()},[]);let a=e&&e.toLowerCase().includes(`rem`)||t&&(t.toLowerCase().includes(`rem`)||t.toLowerCase().includes(`myndwell`));return(0,V.jsxs)(`div`,{className:`flex flex-col rounded-2xl overflow-hidden border border-white/15 bg-[#070913] shadow-2xl`,children:[(0,V.jsxs)(`div`,{className:`px-4 py-2.5 flex items-center justify-between border-b select-none ${a?`bg-gradient-to-r from-[#0b1626] via-[#0e1d33] to-[#0b1626] border-cyan-500/30 text-cyan-200`:`bg-[#101422] border-white/10 text-slate-300`}`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,V.jsx)(`div`,{className:`w-2.5 h-2.5 rounded-full bg-rose-500/80`}),(0,V.jsx)(`div`,{className:`w-2.5 h-2.5 rounded-full bg-amber-400/80`}),(0,V.jsx)(`div`,{className:`w-2.5 h-2.5 rounded-full bg-emerald-400/80`})]}),(0,V.jsx)(`div`,{className:`h-4 w-px bg-white/10`}),a?(0,V.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,V.jsx)(`img`,{src:Q(`/images/logos/myndwell-logo-white.png`),alt:`Myndwell Logo`,className:`w-4 h-4 object-contain`}),(0,V.jsx)(`span`,{className:`font-bold text-xs tracking-wider text-white uppercase font-['Syne',sans-serif]`,children:`Myndwell International`}),(0,V.jsx)(`span`,{className:`hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-semibold`,children:`PROPERTY OF MYNDWELL CORP`})]}):(0,V.jsx)(`div`,{className:`flex items-center gap-1.5`,children:(0,V.jsx)(`span`,{className:`font-bold text-xs tracking-wide text-white`,children:t||`Interactive Companion Client`})})]}),(0,V.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,V.jsxs)(`div`,{className:`hidden md:flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/50 border border-white/10 text-[11px] font-mono text-slate-300`,children:[(0,V.jsx)(af,{className:`w-3 h-3 text-emerald-400`}),(0,V.jsx)(`span`,{children:a?`https://myndwell.corp/portal/subject-4092`:`https://internal-app.local`})]}),(0,V.jsxs)(`a`,{href:e,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-1 text-[11px] font-mono px-2 py-1 rounded bg-white/5 hover:bg-white/15 text-slate-200 hover:text-white transition-colors cursor-pointer`,title:`Open in new window`,children:[(0,V.jsx)(`span`,{children:`Launch`}),(0,V.jsx)(Rd,{className:`w-3 h-3`})]})]})]}),(0,V.jsx)(`div`,{ref:n,className:`relative w-full aspect-video bg-black overflow-hidden select-none`,children:(0,V.jsx)(`iframe`,{src:e,title:t,style:{width:`${vp}px`,height:`${yp}px`,transform:`scale(${r})`,transformOrigin:`top left`},className:`border-0 absolute top-0 left-0`,sandbox:`allow-scripts allow-same-origin allow-modals`})}),a&&(0,V.jsxs)(`div`,{className:`px-4 py-1.5 bg-[#060b13] border-t border-cyan-500/20 flex flex-wrap items-center justify-between text-[10px] font-mono text-cyan-300/70 select-none`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,V.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse`}),(0,V.jsx)(`span`,{children:`MYNDWELL NEURAL PARTITION ARCHIVE // RUNNING LIVE`})]}),(0,V.jsx)(`span`,{children:`CONFIDENTIAL // AUTHORISED PERSONNEL ONLY`})]})]})}function xp(e){switch(e){case`rastacats`:return{containerClass:`bg-gradient-to-br from-[#06152b]/95 via-[#081d38]/95 to-[#051120]/98 border-cyan-400/50 hover:border-cyan-300 shadow-[0_0_55px_rgba(6,182,212,0.2)] hover:shadow-[0_0_70px_rgba(6,182,212,0.3)]`,modalClass:`bg-gradient-to-br from-[#041122]/98 via-[#061933]/98 to-[#030c18]/98 border-cyan-400/60 shadow-[0_0_90px_rgba(6,182,212,0.35)]`,compactContainerClass:`bg-gradient-to-br from-[#06152b]/95 via-[#081d38]/95 to-[#051120]/98 border-cyan-400/50 hover:border-cyan-300 shadow-[0_0_35px_rgba(6,182,212,0.18)] hover:shadow-[0_0_50px_rgba(6,182,212,0.28)]`,mediaHolderClass:`border-cyan-400/60 shadow-[0_0_30px_rgba(6,182,212,0.25)] ring-1 ring-cyan-400/40`,overviewHolderClass:`bg-cyan-950/30 border-cyan-400/40 shadow-inner`,accentBadge:`bg-cyan-950/80 border-cyan-400/40 text-cyan-200`,buttonClass:`bg-cyan-600/30 hover:bg-cyan-500/50 border-cyan-400/50 text-cyan-100 shadow-[0_0_20px_rgba(6,182,212,0.3)]`,hasAtmosphere:!0};case`rem`:return{containerClass:`bg-[#020306]/98 border-cyan-500/45 hover:border-cyan-300 shadow-[0_0_65px_rgba(6,182,212,0.18)] hover:shadow-[0_0_80px_rgba(6,182,212,0.28)]`,modalClass:`bg-[#020409]/98 border-cyan-500/55 shadow-[0_0_95px_rgba(6,182,212,0.3)]`,compactContainerClass:`bg-[#03060e]/95 border-cyan-500/45 hover:border-cyan-300 shadow-[0_0_35px_rgba(6,182,212,0.15)] hover:shadow-[0_0_50px_rgba(6,182,212,0.25)]`,mediaHolderClass:`border-cyan-400/60 shadow-[0_0_35px_rgba(6,182,212,0.25)] ring-1 ring-cyan-400/40`,overviewHolderClass:`bg-gradient-to-r from-cyan-950/30 via-[#071324] to-cyan-950/30 border-cyan-400/40 shadow-inner`,accentBadge:`bg-cyan-950/90 border-cyan-400/50 text-cyan-200`,buttonClass:`bg-cyan-600/30 hover:bg-cyan-500/50 border-cyan-400/50 text-cyan-100 shadow-[0_0_20px_rgba(6,182,212,0.3)]`,hasAtmosphere:!0};case`planet-protectors`:return{containerClass:`bg-gradient-to-br from-[#04150b]/95 via-[#072213]/95 to-[#031008]/98 border-emerald-500/50 hover:border-emerald-300 shadow-[0_0_55px_rgba(16,185,129,0.22)] hover:shadow-[0_0_75px_rgba(16,185,129,0.32)]`,modalClass:`bg-gradient-to-br from-[#031309]/98 via-[#062011]/98 to-[#020e06]/98 border-emerald-500/60 shadow-[0_0_90px_rgba(16,185,129,0.35)]`,compactContainerClass:`bg-gradient-to-br from-[#04150b]/95 via-[#072213]/95 to-[#031008]/98 border-emerald-500/50 hover:border-emerald-300 shadow-[0_0_35px_rgba(16,185,129,0.18)] hover:shadow-[0_0_50px_rgba(16,185,129,0.28)]`,mediaHolderClass:`border-emerald-400/60 shadow-[0_0_30px_rgba(16,185,129,0.25)] ring-1 ring-emerald-400/40`,overviewHolderClass:`bg-emerald-950/30 border-emerald-500/40 shadow-inner`,accentBadge:`bg-emerald-950/80 border-emerald-400/40 text-emerald-200`,buttonClass:`bg-emerald-600/30 hover:bg-emerald-500/50 border-emerald-400/50 text-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.3)]`,hasAtmosphere:!0};case`delirium`:return{containerClass:`bg-gradient-to-br from-[#140608]/95 via-[#1e080b]/95 to-[#0d0305]/98 border-rose-600/50 hover:border-rose-400 shadow-[0_0_55px_rgba(225,29,72,0.24)] hover:shadow-[0_0_75px_rgba(225,29,72,0.35)]`,modalClass:`bg-gradient-to-br from-[#190609]/98 via-[#25080c]/98 to-[#100305]/98 border-rose-600/60 shadow-[0_0_90px_rgba(225,29,72,0.35)]`,compactContainerClass:`bg-gradient-to-br from-[#140608]/95 via-[#1e080b]/95 to-[#0d0305]/98 border-rose-600/50 hover:border-rose-400 shadow-[0_0_35px_rgba(225,29,72,0.18)] hover:shadow-[0_0_50px_rgba(225,29,72,0.28)]`,mediaHolderClass:`border-rose-500/60 shadow-[0_0_30px_rgba(225,29,72,0.25)] ring-1 ring-rose-500/40`,overviewHolderClass:`bg-rose-950/30 border-rose-500/40 shadow-inner`,accentBadge:`bg-rose-950/80 border-rose-500/40 text-rose-200`,buttonClass:`bg-rose-600/30 hover:bg-rose-500/50 border-rose-400/50 text-rose-100 shadow-[0_0_20px_rgba(225,29,72,0.3)]`,hasAtmosphere:!0};case`daydream`:return{containerClass:`bg-gradient-to-br from-[#10071f]/95 via-[#180a30]/95 to-[#0a0414]/98 border-purple-500/50 hover:border-purple-300 shadow-[0_0_55px_rgba(168,85,247,0.22)] hover:shadow-[0_0_75px_rgba(168,85,247,0.32)]`,modalClass:`bg-gradient-to-br from-[#130726]/98 via-[#1c0938]/98 to-[#0b0317]/98 border-purple-500/60 shadow-[0_0_90px_rgba(168,85,247,0.35)]`,compactContainerClass:`bg-gradient-to-br from-[#10071f]/95 via-[#180a30]/95 to-[#0a0414]/98 border-purple-500/50 hover:border-purple-300 shadow-[0_0_35px_rgba(168,85,247,0.18)] hover:shadow-[0_0_50px_rgba(168,85,247,0.28)]`,mediaHolderClass:`border-purple-400/60 shadow-[0_0_30px_rgba(168,85,247,0.25)] ring-1 ring-purple-400/40`,overviewHolderClass:`bg-purple-950/30 border-purple-500/40 shadow-inner`,accentBadge:`bg-purple-950/80 border-purple-400/40 text-purple-200`,buttonClass:`bg-purple-600/30 hover:bg-purple-500/50 border-purple-400/50 text-purple-100 shadow-[0_0_20px_rgba(168,85,247,0.3)]`,hasAtmosphere:!0};case`project-isla`:return{containerClass:`bg-gradient-to-br from-[#041419]/95 via-[#062027]/95 to-[#030e12]/98 border-teal-500/50 hover:border-teal-300 shadow-[0_0_55px_rgba(20,184,166,0.2)] hover:shadow-[0_0_75px_rgba(20,184,166,0.3)]`,modalClass:`bg-gradient-to-br from-[#03171d]/98 via-[#06242c]/98 to-[#020f13]/98 border-teal-500/60 shadow-[0_0_90px_rgba(20,184,166,0.35)]`,compactContainerClass:`bg-gradient-to-br from-[#041419]/95 via-[#062027]/95 to-[#030e12]/98 border-teal-500/50 hover:border-teal-300 shadow-[0_0_35px_rgba(20,184,166,0.18)] hover:shadow-[0_0_50px_rgba(20,184,166,0.28)]`,mediaHolderClass:`border-teal-400/60 shadow-[0_0_30px_rgba(20,184,166,0.25)] ring-1 ring-teal-400/40`,overviewHolderClass:`bg-teal-950/30 border-teal-500/40 shadow-inner`,accentBadge:`bg-teal-950/80 border-teal-400/40 text-teal-200`,buttonClass:`bg-teal-600/30 hover:bg-teal-500/50 border-teal-400/50 text-teal-100 shadow-[0_0_20px_rgba(20,184,166,0.3)]`,hasAtmosphere:!0};case`labraz`:case`labrats`:return{containerClass:`bg-gradient-to-br from-[#06170d]/95 via-[#0b2817]/95 to-[#041009]/98 border-emerald-400/50 hover:border-emerald-300 shadow-[0_0_55px_rgba(52,211,153,0.24)] hover:shadow-[0_0_75px_rgba(52,211,153,0.35)]`,modalClass:`bg-gradient-to-br from-[#061b0e]/98 via-[#0c2e1b]/98 to-[#031109]/98 border-emerald-400/60 shadow-[0_0_90px_rgba(52,211,153,0.35)]`,compactContainerClass:`bg-gradient-to-br from-[#06170d]/95 via-[#0b2817]/95 to-[#041009]/98 border-emerald-400/50 hover:border-emerald-300 shadow-[0_0_35px_rgba(52,211,153,0.18)] hover:shadow-[0_0_50px_rgba(52,211,153,0.28)]`,mediaHolderClass:`border-emerald-400/60 shadow-[0_0_30px_rgba(52,211,153,0.25)] ring-1 ring-emerald-400/40`,overviewHolderClass:`bg-emerald-950/30 border-emerald-400/40 shadow-inner`,accentBadge:`bg-emerald-950/90 border-emerald-400/50 text-emerald-200`,buttonClass:`bg-emerald-600/30 hover:bg-emerald-500/50 border-emerald-400/50 text-emerald-100 shadow-[0_0_20px_rgba(52,211,153,0.3)]`,hasAtmosphere:!0};case`chanceway`:return{containerClass:`bg-gradient-to-br from-[#140e06]/95 via-[#20160a]/95 to-[#0d0904]/98 border-amber-500/50 hover:border-amber-300 shadow-[0_0_55px_rgba(245,158,11,0.22)] hover:shadow-[0_0_75px_rgba(245,158,11,0.32)]`,modalClass:`bg-gradient-to-br from-[#1a1106]/98 via-[#271a0b]/98 to-[#0f0a04]/98 border-amber-500/60 shadow-[0_0_90px_rgba(245,158,11,0.35)]`,compactContainerClass:`bg-gradient-to-br from-[#140e06]/95 via-[#20160a]/95 to-[#0d0904]/98 border-amber-500/50 hover:border-amber-300 shadow-[0_0_35px_rgba(245,158,11,0.18)] hover:shadow-[0_0_50px_rgba(245,158,11,0.28)]`,mediaHolderClass:`border-amber-400/60 shadow-[0_0_30px_rgba(245,158,11,0.25)] ring-1 ring-amber-400/40`,overviewHolderClass:`bg-amber-950/30 border-amber-500/40 shadow-inner`,accentBadge:`bg-amber-950/80 border-amber-400/40 text-amber-200`,buttonClass:`bg-amber-600/30 hover:bg-amber-500/50 border-amber-400/50 text-amber-100 shadow-[0_0_20px_rgba(245,158,11,0.3)]`,hasAtmosphere:!0};case`baldis-basics-2`:return{containerClass:`bg-gradient-to-br from-[#141205]/95 via-[#201c08]/95 to-[#0d0c03]/98 border-yellow-500/50 hover:border-yellow-300 shadow-[0_0_55px_rgba(234,179,8,0.22)] hover:shadow-[0_0_75px_rgba(234,179,8,0.32)]`,modalClass:`bg-gradient-to-br from-[#1b1706]/98 via-[#282209]/98 to-[#100e03]/98 border-yellow-500/60 shadow-[0_0_90px_rgba(234,179,8,0.35)]`,compactContainerClass:`bg-gradient-to-br from-[#141205]/95 via-[#201c08]/95 to-[#0d0c03]/98 border-yellow-500/50 hover:border-yellow-300 shadow-[0_0_35px_rgba(234,179,8,0.18)] hover:shadow-[0_0_50px_rgba(234,179,8,0.28)]`,mediaHolderClass:`border-yellow-400/60 shadow-[0_0_30px_rgba(234,179,8,0.25)] ring-1 ring-yellow-400/40`,overviewHolderClass:`bg-yellow-950/30 border-yellow-500/40 shadow-inner`,accentBadge:`bg-yellow-950/80 border-yellow-400/40 text-yellow-200`,buttonClass:`bg-yellow-600/30 hover:bg-yellow-500/50 border-yellow-400/50 text-yellow-100 shadow-[0_0_20px_rgba(234,179,8,0.3)]`,hasAtmosphere:!0};case`waiwwai`:return{containerClass:`bg-gradient-to-br from-[#150718]/95 via-[#220a26]/95 to-[#0d040f]/98 border-fuchsia-500/50 hover:border-fuchsia-300 shadow-[0_0_55px_rgba(217,70,239,0.22)] hover:shadow-[0_0_75px_rgba(217,70,239,0.32)]`,modalClass:`bg-gradient-to-br from-[#1a071d]/98 via-[#280c2e]/98 to-[#110313]/98 border-fuchsia-500/60 shadow-[0_0_90px_rgba(217,70,239,0.35)]`,compactContainerClass:`bg-gradient-to-br from-[#150718]/95 via-[#220a26]/95 to-[#0d040f]/98 border-fuchsia-500/50 hover:border-fuchsia-300 shadow-[0_0_35px_rgba(217,70,239,0.18)] hover:shadow-[0_0_50px_rgba(217,70,239,0.28)]`,mediaHolderClass:`border-fuchsia-400/60 shadow-[0_0_30px_rgba(217,70,239,0.25)] ring-1 ring-fuchsia-400/40`,overviewHolderClass:`bg-fuchsia-950/30 border-fuchsia-500/40 shadow-inner`,accentBadge:`bg-fuchsia-950/80 border-fuchsia-400/40 text-fuchsia-200`,buttonClass:`bg-fuchsia-600/30 hover:bg-fuchsia-500/50 border-fuchsia-400/50 text-fuchsia-100 shadow-[0_0_20px_rgba(217,70,239,0.3)]`,hasAtmosphere:!0};default:return{containerClass:`bg-[#0a0c18]/90 border-white/10 hover:border-indigo-500/40 shadow-xl hover:shadow-[0_12px_45px_rgba(99,102,241,0.18)]`,modalClass:`bg-[#0d0f1e] border-indigo-500/35 shadow-[0_0_80px_rgba(99,102,241,0.25)]`,compactContainerClass:`bg-[#090b16]/95 border-white/10 hover:border-indigo-400/60 shadow-xl hover:shadow-[0_10px_40px_rgba(99,102,241,0.2)]`,mediaHolderClass:`border-white/15 shadow-xl`,overviewHolderClass:`bg-white/[0.02] border-white/10`,accentBadge:`bg-indigo-950/70 border-indigo-500/35 text-indigo-200`,buttonClass:`bg-indigo-600/30 hover:bg-indigo-600/50 border-indigo-400/40 text-white`,hasAtmosphere:!1}}}function Sp({isCompact:e=!1}){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.22),transparent_70%)] pointer-events-none rounded-3xl`}),(0,V.jsx)(`div`,{className:`absolute top-0 inset-x-0 pointer-events-none z-10 overflow-hidden`,children:(0,V.jsxs)(`svg`,{viewBox:`0 0 600 70`,preserveAspectRatio:`none`,className:`w-full h-9 sm:h-12 text-cyan-200 drop-shadow-[0_2px_8px_rgba(6,182,212,0.8)]`,children:[(0,V.jsxs)(`defs`,{children:[(0,V.jsxs)(`linearGradient`,{id:`icicleFacetGrad`,x1:`0%`,y1:`0%`,x2:`0%`,y2:`100%`,children:[(0,V.jsx)(`stop`,{offset:`0%`,stopColor:`#ffffff`,stopOpacity:`0.95`}),(0,V.jsx)(`stop`,{offset:`45%`,stopColor:`#7dd3fc`,stopOpacity:`0.85`}),(0,V.jsx)(`stop`,{offset:`100%`,stopColor:`#0284c7`,stopOpacity:`0.35`})]}),(0,V.jsxs)(`linearGradient`,{id:`icicleBackGrad`,x1:`0%`,y1:`0%`,x2:`0%`,y2:`100%`,children:[(0,V.jsx)(`stop`,{offset:`0%`,stopColor:`#bae6fd`,stopOpacity:`0.8`}),(0,V.jsx)(`stop`,{offset:`100%`,stopColor:`#0369a1`,stopOpacity:`0.2`})]})]}),(0,V.jsx)(`path`,{d:`M0,0 L600,0 L600,6 Q585,8 575,28 L570,55 L565,28 Q555,8 540,6 Q525,8 515,35 L510,68 L505,35 Q495,8 480,6 Q465,8 455,25 L450,45 L445,25 Q435,8 420,6 Q405,8 395,38 L390,70 L385,38 Q375,8 360,6 Q345,8 335,22 L330,42 L325,22 Q315,8 300,6 Q285,8 275,32 L270,62 L265,32 Q255,8 240,6 Q225,8 215,24 L210,44 L205,24 Q195,8 180,6 Q165,8 155,36 L150,68 L145,36 Q135,8 120,6 Q105,8 95,26 L90,48 L85,26 Q75,8 60,6 Q45,8 35,32 L30,58 L25,32 Q15,8 0,6 Z`,fill:`url(#icicleFacetGrad)`}),(0,V.jsx)(`path`,{d:`M28,0 L32,54 L30,58 L28,0 Z M148,0 L152,64 L150,68 L148,0 Z M268,0 L272,58 L270,62 L268,0 Z M388,0 L392,66 L390,70 L388,0 Z M508,0 L512,64 L510,68 L508,0 Z M568,0 L572,51 L570,55 L568,0 Z`,fill:`#ffffff`,opacity:`0.75`})]})}),(0,V.jsx)(`div`,{className:`absolute top-2 left-2 w-14 h-14 pointer-events-none text-cyan-300/40`,children:(0,V.jsxs)(`svg`,{viewBox:`0 0 100 100`,className:`w-full h-full stroke-current fill-none`,strokeWidth:`2.5`,children:[(0,V.jsx)(`line`,{x1:`10`,y1:`10`,x2:`90`,y2:`90`}),(0,V.jsx)(`line`,{x1:`10`,y1:`90`,x2:`90`,y2:`100`}),(0,V.jsx)(`line`,{x1:`50`,y1:`10`,x2:`50`,y2:`90`}),(0,V.jsx)(`line`,{x1:`10`,y1:`50`,x2:`90`,y2:`50`}),(0,V.jsx)(`path`,{d:`M50 30 L40 20 M50 30 L60 20`}),(0,V.jsx)(`path`,{d:`M50 70 L40 80 M50 70 L60 80`}),(0,V.jsx)(`path`,{d:`M30 50 L20 40 M30 50 L20 60`}),(0,V.jsx)(`path`,{d:`M70 50 L80 40 M70 50 L80 60`})]})}),(0,V.jsx)(`div`,{className:`absolute top-2 right-2 w-14 h-14 pointer-events-none text-cyan-300/40 rotate-90`,children:(0,V.jsxs)(`svg`,{viewBox:`0 0 100 100`,className:`w-full h-full stroke-current fill-none`,strokeWidth:`2.5`,children:[(0,V.jsx)(`line`,{x1:`10`,y1:`10`,x2:`90`,y2:`90`}),(0,V.jsx)(`line`,{x1:`50`,y1:`10`,x2:`50`,y2:`90`}),(0,V.jsx)(`line`,{x1:`10`,y1:`50`,x2:`90`,y2:`50`}),(0,V.jsx)(`path`,{d:`M50 30 L40 20 M50 30 L60 20`}),(0,V.jsx)(`path`,{d:`M50 70 L40 80 M50 70 L60 80`})]})}),Array.from({length:e?6:10}).map((e,t)=>(0,V.jsx)(U.div,{initial:{y:-15,x:`${(t*12+6)%92}%`,opacity:0,rotate:0},animate:{y:[`0%`,`100%`],x:[`${(t*12+6)%92}%`,`${(t*12+6)%92+(t%2==0?1:-1)*5}%`],rotate:[0,t%2==0?180:-180],opacity:[0,.9,.5,0]},transition:{duration:6+t%3*2,repeat:1/0,delay:t*.6,ease:`linear`},className:`absolute pointer-events-none z-0 transform-gpu will-change-transform`,children:(0,V.jsx)(`div`,{className:`w-2 h-2 rounded-[2px] bg-gradient-to-br from-white via-cyan-200 to-cyan-400 shadow-[0_0_10px_rgba(56,189,248,1)] rotate-45`})},t))]})}function Cp(){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{className:`absolute inset-0 bg-[#020306] pointer-events-none -z-10 rounded-3xl`}),(0,V.jsx)(`div`,{className:`absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.18),transparent_70%)] pointer-events-none`}),(0,V.jsx)(`div`,{className:`absolute bottom-0 left-0 w-80 h-80 bg-[radial-gradient(circle_at_bottom_left,rgba(8,145,178,0.14),transparent_70%)] pointer-events-none`}),(0,V.jsxs)(`div`,{className:`absolute top-0 inset-x-0 pointer-events-none z-10 overflow-hidden`,children:[(0,V.jsx)(`svg`,{viewBox:`0 0 600 60`,preserveAspectRatio:`none`,className:`w-full h-8 sm:h-11 text-[#010204] drop-shadow-[0_4px_10px_rgba(0,0,0,1)]`,children:(0,V.jsx)(`path`,{d:`M0,0 L600,0 L600,8 Q580,10 570,25 Q560,50 555,54 Q550,54 540,25 Q530,10 500,8 Q480,10 465,30 Q450,56 445,58 Q440,58 425,30 Q410,10 380,8 Q360,10 350,22 Q340,40 335,42 Q330,42 320,22 Q310,10 270,8 Q250,10 240,28 Q230,52 225,54 Q220,54 210,28 Q200,10 160,8 Q140,10 130,24 Q120,44 115,46 Q110,46 100,24 Q90,10 60,8 Q40,10 30,26 Q20,48 15,50 Q10,50 0,26 Z`,fill:`#010204`,stroke:`#083344`,strokeWidth:`1`})}),[15,115,225,335,445,555].map((e,t)=>(0,V.jsx)(U.div,{initial:{y:8,scaleY:.8,opacity:0},animate:{y:[8,25,160],scaleY:[.8,2,1.3],opacity:[0,.95,0]},transition:{duration:2.3+t%3*.4,delay:t*.35,repeat:1/0,ease:[.5,0,1,1]},style:{left:`${e/600*100}%`},className:`absolute pointer-events-none transform-gpu will-change-transform`,children:(0,V.jsx)(`svg`,{width:`8`,height:`18`,viewBox:`0 0 8 18`,className:`filter drop-shadow-[0_0_4px_rgba(6,182,212,0.9)]`,children:(0,V.jsx)(`path`,{d:`M4,0 C4,0 8,10 8,14 C8,16.2 6.2,18 4,18 C1.8,18 0,16.2 0,14 C0,10 4,0 4,0 Z`,fill:`#020617`,stroke:`#06b6d4`,strokeWidth:`0.8`})})},t))]}),(0,V.jsx)(U.div,{animate:{scale:[1,1.15,1],opacity:[.22,.4,.22]},transition:{duration:12,repeat:1/0,ease:`easeInOut`},className:`absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-950/40 to-black blur-3xl pointer-events-none transform-gpu will-change-transform`})]})}function wp({isCompact:e=!1}){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.18),transparent_65%)] pointer-events-none rounded-3xl`}),(0,V.jsx)(`div`,{className:`absolute top-0 inset-x-0 pointer-events-none z-10 overflow-hidden`,children:(0,V.jsx)(`svg`,{viewBox:`0 0 600 40`,preserveAspectRatio:`none`,className:`w-full h-6 text-emerald-500/40`,children:(0,V.jsx)(`path`,{d:`M0,0 L600,0 L600,4 Q570,12 550,6 Q530,16 510,8 Q470,18 440,6 Q410,16 380,8 Q340,18 310,6 Q270,16 240,8 Q200,18 170,6 Q130,16 100,8 Q60,18 30,6 L0,4 Z`,fill:`none`,stroke:`currentColor`,strokeWidth:`3`})})}),Array.from({length:e?6:9}).map((t,n)=>(0,V.jsx)(U.div,{initial:{y:-25,x:`${(n*12+4)%92}%`,rotate:n*40,opacity:0},animate:{y:[`0%`,`115%`],x:[`${(n*12+4)%92}%`,`${(n*12+4)%92+(n%2==0?1:-1)*7}%`,`${(n*12+4)%92}%`],rotate:[n*40,n*40+160,n*40+320],opacity:[0,.85,.75,0]},transition:{duration:8+n%4*2,repeat:1/0,delay:n*.75,ease:`linear`},className:`absolute pointer-events-none z-0 transform-gpu will-change-transform`,children:(0,V.jsxs)(`svg`,{width:e?16:22,height:e?20:28,viewBox:`0 0 24 32`,className:`drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]`,children:[(0,V.jsx)(`path`,{d:`M12 2 C6 7 2 14 2 20 C2 26 6.5 30 12 30 C17.5 30 22 26 22 20 C22 14 18 7 12 2 Z`,fill:n%2==0?`#10b981`:`#059669`,opacity:`0.85`}),(0,V.jsx)(`path`,{d:`M12 4 L12 28`,stroke:`#34d399`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,V.jsx)(`path`,{d:`M12 10 L6 14 M12 10 L18 14`,stroke:`#6ee7b7`,strokeWidth:`1`,strokeLinecap:`round`}),(0,V.jsx)(`path`,{d:`M12 16 L5 21 M12 16 L19 21`,stroke:`#6ee7b7`,strokeWidth:`1`,strokeLinecap:`round`}),(0,V.jsx)(`path`,{d:`M12 22 L7 26 M12 22 L17 26`,stroke:`#6ee7b7`,strokeWidth:`1`,strokeLinecap:`round`})]})},n))]})}function Tp(){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(225,29,72,0.18),transparent_65%)] pointer-events-none rounded-3xl`}),(0,V.jsx)(`div`,{className:`absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-rose-500/50 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-rose-600/15 to-transparent`}),(0,V.jsx)(`div`,{className:`absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-rose-500/50 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-rose-600/15 to-transparent`}),(0,V.jsx)(`div`,{className:`absolute top-0 inset-x-0 pointer-events-none z-10 overflow-hidden h-7`,children:(0,V.jsx)(`svg`,{viewBox:`0 0 600 30`,preserveAspectRatio:`none`,className:`w-full h-full stroke-rose-400/60 fill-none`,strokeWidth:`1.5`,children:(0,V.jsx)(`path`,{d:`M0 15 L180 15 L190 5 L200 25 L210 2 L220 22 L230 15 L380 15 L390 5 L400 25 L410 2 L420 22 L430 15 L600 15`})})})]})}function Ep({isCompact:e=!1}){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.18),transparent_65%)] pointer-events-none rounded-3xl`}),(0,V.jsx)(`div`,{className:`absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-400/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-purple-500/15 to-transparent`}),(0,V.jsx)(`div`,{className:`absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-400/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-purple-500/15 to-transparent`}),Array.from({length:e?5:8}).map((e,t)=>(0,V.jsx)(U.div,{initial:{y:200,x:`${(t*14+6)%90}%`,opacity:0},animate:{y:[`0%`,`-120%`],x:[`${(t*14+6)%90}%`,`${(t*14+6)%90+(t%2==0?1:-1)*5}%`],opacity:[0,.8,.5,0]},transition:{duration:9+t%3*2,repeat:1/0,delay:t*.9,ease:`linear`},className:`absolute pointer-events-none z-0 transform-gpu will-change-transform`,children:(0,V.jsx)(`div`,{className:`w-2 h-2 rounded-full bg-purple-300 shadow-[0_0_10px_rgba(192,132,252,1)] blur-[0.3px]`})},t))]})}function Dp(){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.18),transparent_65%)] pointer-events-none rounded-3xl`}),(0,V.jsx)(`div`,{className:`absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-teal-400/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-teal-500/15 to-transparent`}),(0,V.jsx)(`div`,{className:`absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-teal-400/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-teal-500/15 to-transparent`})]})}function Op(){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(52,211,153,0.18),transparent_65%)] pointer-events-none rounded-3xl`}),(0,V.jsx)(`div`,{className:`absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-emerald-400/50 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-emerald-500/15 to-transparent`}),(0,V.jsx)(`div`,{className:`absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-emerald-400/50 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-emerald-500/15 to-transparent`})]})}function kp(){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.18),transparent_65%)] pointer-events-none rounded-3xl`}),(0,V.jsx)(`div`,{className:`absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-amber-400/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-amber-500/15 to-transparent`}),(0,V.jsx)(`div`,{className:`absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-amber-400/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-amber-500/15 to-transparent`})]})}function Ap(){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.18),transparent_65%)] pointer-events-none rounded-3xl`}),(0,V.jsx)(`div`,{className:`absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-yellow-400/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-yellow-500/15 to-transparent`}),(0,V.jsx)(`div`,{className:`absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-yellow-400/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-yellow-500/15 to-transparent`})]})}function jp(){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,70,239,0.18),transparent_65%)] pointer-events-none rounded-3xl`}),(0,V.jsx)(`div`,{className:`absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-fuchsia-400/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-fuchsia-500/15 to-transparent`}),(0,V.jsx)(`div`,{className:`absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-fuchsia-400/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-fuchsia-500/15 to-transparent`})]})}function Mp({projectId:e,isModal:t=!1,isCompact:n=!1}){switch(e){case`rastacats`:return(0,V.jsx)(Sp,{isModal:t,isCompact:n});case`rem`:return(0,V.jsx)(Cp,{isModal:t,isCompact:n});case`planet-protectors`:return(0,V.jsx)(wp,{isModal:t,isCompact:n});case`delirium`:return(0,V.jsx)(Tp,{isModal:t,isCompact:n});case`daydream`:return(0,V.jsx)(Ep,{isModal:t,isCompact:n});case`project-isla`:return(0,V.jsx)(Dp,{isModal:t,isCompact:n});case`labraz`:case`labrats`:return(0,V.jsx)(Op,{isModal:t,isCompact:n});case`chanceway`:return(0,V.jsx)(kp,{isModal:t,isCompact:n});case`baldis-basics-2`:return(0,V.jsx)(Ap,{isModal:t,isCompact:n});case`waiwwai`:return(0,V.jsx)(jp,{isModal:t,isCompact:n});default:return null}}function Np({projectId:e}){switch(e){case`rastacats`:return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`div`,{className:`absolute top-0 inset-x-0 pointer-events-none z-10 overflow-hidden`,children:(0,V.jsxs)(`svg`,{viewBox:`0 0 500 45`,preserveAspectRatio:`none`,className:`w-full h-6 text-cyan-200 drop-shadow-[0_2px_6px_rgba(6,182,212,0.8)]`,children:[(0,V.jsx)(`defs`,{children:(0,V.jsxs)(`linearGradient`,{id:`overviewIcicleGrad`,x1:`0%`,y1:`0%`,x2:`0%`,y2:`100%`,children:[(0,V.jsx)(`stop`,{offset:`0%`,stopColor:`#ffffff`,stopOpacity:`0.95`}),(0,V.jsx)(`stop`,{offset:`50%`,stopColor:`#7dd3fc`,stopOpacity:`0.85`}),(0,V.jsx)(`stop`,{offset:`100%`,stopColor:`#0284c7`,stopOpacity:`0.3`})]})}),(0,V.jsx)(`path`,{d:`M0,0 L500,0 L500,4 Q485,6 475,20 L470,38 L465,20 Q455,6 440,4 Q425,6 415,24 L410,44 L405,24 Q395,6 380,4 Q365,6 355,18 L350,32 L345,18 Q335,6 320,4 Q305,6 295,22 L290,42 L285,22 Q275,6 260,4 Q245,6 235,16 L230,30 L225,16 Q215,6 200,4 Q185,6 175,24 L170,44 L165,24 Q155,6 140,4 Q125,6 115,18 L110,34 L105,18 Q95,6 80,4 Q65,6 55,22 L50,40 L45,22 Q35,6 20,4 L0,4 Z`,fill:`url(#overviewIcicleGrad)`})]})}),(0,V.jsx)(`div`,{className:`absolute top-1 right-2 w-7 h-7 pointer-events-none text-cyan-300/30`,children:(0,V.jsxs)(`svg`,{viewBox:`0 0 100 100`,className:`w-full h-full stroke-current fill-none`,strokeWidth:`2.5`,children:[(0,V.jsx)(`line`,{x1:`10`,y1:`10`,x2:`90`,y2:`90`}),(0,V.jsx)(`line`,{x1:`10`,y1:`90`,x2:`90`,y2:`10`}),(0,V.jsx)(`line`,{x1:`50`,y1:`10`,x2:`50`,y2:`90`}),(0,V.jsx)(`line`,{x1:`10`,y1:`50`,x2:`90`,y2:`50`}),(0,V.jsx)(`path`,{d:`M50 30 L40 20 M50 30 L60 20`}),(0,V.jsx)(`path`,{d:`M50 70 L40 80 M50 70 L60 80`})]})})]});case`rem`:return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(`div`,{className:`absolute top-0 inset-x-0 pointer-events-none z-10 overflow-hidden`,children:[(0,V.jsx)(`svg`,{viewBox:`0 0 500 40`,preserveAspectRatio:`none`,className:`w-full h-5 text-[#010204] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]`,children:(0,V.jsx)(`path`,{d:`M0,0 L500,0 L500,6 Q480,8 470,18 Q460,35 455,38 Q450,38 440,18 Q430,8 400,6 Q380,8 365,20 Q350,38 345,40 Q340,40 325,20 Q310,8 270,6 Q250,8 240,20 Q230,36 225,38 Q220,38 210,20 Q200,8 160,6 Q140,8 130,16 Q120,30 115,32 Q110,32 100,16 Q90,8 60,6 Q40,8 30,18 Q20,34 15,36 Q10,36 0,18 Z`,fill:`#010204`,stroke:`#083344`,strokeWidth:`1`})}),[15,115,225,345,455].map((e,t)=>(0,V.jsx)(U.div,{initial:{y:4,scaleY:.8,opacity:0},animate:{y:[4,16,85],scaleY:[.8,1.8,1.2],opacity:[0,.9,0]},transition:{duration:2.2+t%3*.4,delay:t*.4,repeat:1/0,ease:[.5,0,1,1]},style:{left:`${e/500*100}%`},className:`absolute pointer-events-none`,children:(0,V.jsx)(`svg`,{width:`6`,height:`14`,viewBox:`0 0 6 14`,className:`filter drop-shadow-[0_0_3px_rgba(6,182,212,0.8)]`,children:(0,V.jsx)(`path`,{d:`M3,0 C3,0 6,8 6,11 C6,12.7 4.7,14 3,14 C1.3,14 0,12.7 0,11 C0,8 3,0 3,0 Z`,fill:`#020617`,stroke:`#06b6d4`,strokeWidth:`0.7`})})},t))]}),(0,V.jsx)(`div`,{className:`absolute right-3 bottom-2 opacity-[0.06] pointer-events-none`,children:(0,V.jsx)(`img`,{src:Q(`/images/logos/myndwell-logo-white.png`),alt:``,className:`w-16 h-16 object-contain`})})]});case`planet-protectors`:return(0,V.jsxs)(`div`,{className:`absolute top-0 inset-x-0 pointer-events-none z-10 overflow-hidden`,children:[(0,V.jsx)(`svg`,{viewBox:`0 0 500 24`,preserveAspectRatio:`none`,className:`w-full h-4 text-emerald-500/40`,children:(0,V.jsx)(`path`,{d:`M0,0 L500,0 L500,2 Q470,8 450,4 Q430,10 410,5 Q370,12 340,4 Q310,10 280,5 Q240,12 210,4 Q170,10 140,5 Q100,12 70,4 Q30,10 0,3 Z`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`})}),[0,1,2].map(e=>(0,V.jsx)(U.div,{initial:{y:-10,x:`${20+e*32}%`,opacity:0},animate:{y:[`0%`,`115%`],x:[`${20+e*32}%`,`${20+e*32+(e%2==0?5:-5)}%`],rotate:[0,90,180],opacity:[0,.75,0]},transition:{duration:6+e*2,repeat:1/0,delay:e*1.2,ease:`linear`},className:`absolute pointer-events-none`,children:(0,V.jsxs)(`svg`,{width:`12`,height:`16`,viewBox:`0 0 24 32`,children:[(0,V.jsx)(`path`,{d:`M12 2 C6 7 2 14 2 20 C2 26 6.5 30 12 30 C17.5 30 22 26 22 20 C22 14 18 7 12 2 Z`,fill:`#10b981`,opacity:`0.8`}),(0,V.jsx)(`path`,{d:`M12 4 L12 28`,stroke:`#34d399`,strokeWidth:`1.5`,strokeLinecap:`round`})]})},e))]});case`delirium`:return(0,V.jsx)(`div`,{className:`absolute top-0 inset-x-0 pointer-events-none z-10 overflow-hidden h-4`,children:(0,V.jsx)(`svg`,{viewBox:`0 0 500 20`,preserveAspectRatio:`none`,className:`w-full h-full stroke-rose-500/50 fill-none`,strokeWidth:`1.5`,children:(0,V.jsx)(`path`,{d:`M0 10 L150 10 L158 3 L166 17 L174 1 L182 15 L190 10 L330 10 L338 3 L346 17 L354 1 L362 15 L370 10 L500 10`})})});case`labraz`:case`labrats`:return(0,V.jsx)(`div`,{className:`absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500/20 via-emerald-400/60 to-emerald-500/20 pointer-events-none`});default:return null}}function Pp({project:e,onSelectProject:t}){let n=e.versions||e.splitPhases||null,r=!!(n&&n.length>0),[i,a]=(0,_.useState)(0),[o,s]=(0,_.useState)(`overview`),[c,l]=(0,_.useState)(`live`),[u,d]=(0,_.useState)(0),f=r?n[i]:null,p=e.title,m=f?.label||f?.phaseSubtitle||e.tagline,h=f?.summary||e.shortDesc,g=f?.highlights||e.highlights||[],v=f?.technicalDeepDive||e.technicalDeepDive,y=f?.videoPreview===void 0?f?.video===void 0?e.videoPreview||e.video:f.video:f.videoPreview,b=f?.image||e.image,x=f?.gallery?.length>0?f.gallery:e.gallery?.length>0?e.gallery:b?[b]:[],S=f?.engine||e.engine,ee=f?.dates||e.dates,te=(e.marketingSite?.repoSlug?_p[e.marketingSite.repoSlug]:null)?.files||[],C=te[u]||te[0]||null,w=!!e.links?.demo&&e.links.demo.startsWith(`/games/`),T=(n=null)=>{t({...e,initialVersionIndex:i,initialLightboxIndex:n})},E=[];e.links?.itch&&E.push({key:`itch`,el:(0,V.jsxs)(`a`,{href:e.links.itch,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-rose-900/30 hover:scale-[1.02] active:scale-95 transition-all w-full`,children:[(0,V.jsx)(Kd,{className:`w-4 h-4 shrink-0`}),(0,V.jsx)(`span`,{children:`Play on Itch.io`})]},`itch`)}),w&&E.push({key:`browser`,el:(0,V.jsxs)(`a`,{href:Q(e.links.demo),target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-indigo-950/40 hover:scale-[1.02] active:scale-95 transition-all w-full`,children:[(0,V.jsx)(Kd,{className:`w-4 h-4 shrink-0`}),(0,V.jsx)(`span`,{children:`Play in Browser`})]},`browser`)}),e.links?.gdd&&E.push({key:`gdd`,el:(0,V.jsxs)(`a`,{href:Q(e.links.gdd),download:!0,className:`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600/25 hover:bg-amber-600/40 text-amber-200 font-semibold text-xs tracking-wider uppercase border border-amber-500/40 hover:scale-[1.02] active:scale-95 transition-all w-full`,children:[(0,V.jsx)(fd,{className:`w-4 h-4 text-amber-300 shrink-0`}),(0,V.jsx)(`span`,{children:`Download GDD`})]},`gdd`)}),e.marketingSite&&E.push({key:`marketing`,el:(0,V.jsxs)(`button`,{type:`button`,onClick:()=>{s(`marketing`),l(`live`)},className:`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600/25 hover:bg-emerald-600/40 text-emerald-200 font-semibold text-xs tracking-wider uppercase border border-emerald-500/40 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer w-full`,children:[(0,V.jsx)(Xd,{className:`w-4 h-4 text-emerald-300 shrink-0`}),(0,V.jsx)(`span`,{children:`Companion Site`})]},`marketing`)}),e.links?.video&&E.push({key:`video`,el:(0,V.jsxs)(`a`,{href:Q(e.links.video),target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-600/25 hover:bg-red-600/40 text-red-200 font-semibold text-xs tracking-wider uppercase border border-red-500/40 hover:scale-[1.02] active:scale-95 transition-all w-full`,children:[(0,V.jsx)(Od,{className:`w-4 h-4 text-red-400 shrink-0`}),(0,V.jsx)(`span`,{children:`YouTube Walkthrough`})]},`video`)}),pp(e.links?.github)&&E.push({key:`github`,el:(0,V.jsxs)(`a`,{href:e.links.github,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 hover:text-white font-semibold text-xs tracking-wider uppercase border border-white/10 hover:scale-[1.02] active:scale-95 transition-all w-full`,children:[(0,V.jsx)(ep,{className:`w-4 h-4 shrink-0`}),(0,V.jsx)(`span`,{children:`Source Code`})]},`github`)}),mp(e.links?.linkedin)&&E.push({key:`linkedin`,el:(0,V.jsxs)(`a`,{href:e.links.linkedin,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0077b5]/20 hover:bg-[#0077b5]/30 text-sky-300 hover:text-white font-semibold text-xs tracking-wider uppercase border border-[#0077b5]/30 hover:scale-[1.02] active:scale-95 transition-all w-full`,children:[(0,V.jsx)(tp,{className:`w-4 h-4 shrink-0`}),(0,V.jsx)(`span`,{children:`Dev Post`})]},`linkedin`)}),E.push({key:`breakdown`,el:(0,V.jsxs)(`button`,{type:`button`,onClick:()=>T(null),className:`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/35 text-indigo-200 hover:text-white font-semibold text-xs tracking-wider uppercase border border-indigo-500/35 hover:border-indigo-400/60 transition-all cursor-pointer w-full`,children:[(0,V.jsx)(fd,{className:`w-3.5 h-3.5 text-indigo-400 shrink-0`}),(0,V.jsx)(`span`,{children:`Full Breakdown & Gallery`})]},`breakdown`)});let ne=E.length%2==1,re=xp(e.id);return(0,V.jsxs)(U.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,scale:.98},transition:{duration:.35,ease:[.25,.46,.45,.94]},className:`group relative rounded-3xl p-6 md:p-8 backdrop-blur-xl transition-[border-color,box-shadow] duration-300 border overflow-hidden ${re.containerClass}`,children:[(0,V.jsx)(Mp,{projectId:e.id}),(0,V.jsxs)(`div`,{className:`relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`,children:[(0,V.jsx)(`div`,{className:`lg:col-span-7 flex flex-col justify-between`,children:(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 mb-3.5`,children:[(0,V.jsx)(`span`,{className:`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-indigo-950/70 border border-indigo-500/35 text-indigo-200`,children:e.discipline}),(0,V.jsx)(`span`,{className:`text-xs font-mono text-slate-400 px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/10`,children:ee}),e.id===`rem`&&(0,V.jsxs)(`div`,{className:`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950/80 border border-cyan-400/40 text-cyan-200 shadow-sm`,children:[(0,V.jsx)(`img`,{src:Q(`/images/logos/myndwell-logo-white.png`),alt:`Myndwell Logo`,className:`w-4 h-4 object-contain shrink-0`}),(0,V.jsx)(`span`,{children:`PROPERTY OF MYNDWELL INTERNATIONAL`})]}),e.id===`delirium`&&(0,V.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-950/80 border border-red-500/40 text-red-200 shadow-sm`,children:[(0,V.jsx)(`img`,{src:Q(`/images/logos/delirium-title-logo.png`),alt:`Delirium`,className:`h-3.5 object-contain shrink-0`}),(0,V.jsx)(`span`,{className:`text-[10px] uppercase tracking-wider text-red-300`,children:`ST. JUDE'S INERTIA`})]}),e.marketingSite&&(0,V.jsxs)(`button`,{type:`button`,onClick:()=>s(`marketing`),className:`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/80 transition-colors cursor-pointer`,children:[(0,V.jsx)(Xd,{className:`w-3 h-3 text-emerald-400`}),(0,V.jsx)(`span`,{children:`Embedded Companion Site & Code`})]}),e.gradeBadge&&(0,V.jsxs)(`span`,{className:`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300`,children:[(0,V.jsx)(ud,{className:`w-3 h-3 text-emerald-400`}),e.gradeBadge]})]}),(0,V.jsx)(`h3`,{onClick:()=>T(null),className:`text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1.5 font-['Syne',sans-serif] group-hover:text-indigo-200 transition-colors cursor-pointer`,children:p}),(0,V.jsxs)(`p`,{className:`text-xs sm:text-sm font-semibold text-indigo-300 mb-4 flex flex-wrap items-center gap-2`,children:[(0,V.jsx)(`span`,{children:m}),(0,V.jsx)(`span`,{className:`text-slate-600`,children:`•`}),(0,V.jsx)(`span`,{className:`font-mono text-xs text-slate-400`,children:S})]}),r&&(0,V.jsxs)(`div`,{className:`mb-5 p-3.5 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-[#080b18] to-violet-950/35 border border-indigo-500/40 shadow-inner`,children:[(0,V.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2 mb-2.5`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,V.jsx)(Ef,{className:`w-3.5 h-3.5 text-emerald-400 shrink-0`}),(0,V.jsxs)(`span`,{className:`text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-200`,children:[e.title,` Iteration Switcher:`]})]}),(0,V.jsxs)(`span`,{className:`text-[10px] font-mono font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-500/35 px-2 py-0.5 rounded-md`,children:[`Viewing: `,f?.badge||f?.label]})]}),(0,V.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-2`,children:n.map((e,t)=>{let n=i===t;return(0,V.jsxs)(`button`,{type:`button`,onClick:()=>a(t),className:`px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer flex items-center justify-between gap-2 border ${n?`bg-gradient-to-r from-indigo-600/80 to-violet-600/80 text-white border-indigo-300/70 shadow-md shadow-indigo-950/70`:`bg-[#05070f]/80 hover:bg-white/[0.06] text-slate-400 hover:text-slate-200 border-white/10`}`,children:[(0,V.jsxs)(`div`,{className:`min-w-0`,children:[(0,V.jsxs)(`div`,{className:`text-xs font-bold truncate flex items-center gap-2`,children:[(0,V.jsx)(`span`,{className:`w-2 h-2 rounded-full shrink-0 ${n?`bg-emerald-300 animate-pulse`:`bg-slate-600`}`}),(0,V.jsx)(`span`,{className:`truncate`,children:e.label||e.phaseLabel})]}),e.dates&&(0,V.jsx)(`div`,{className:`text-[10px] font-mono text-indigo-200/80 pl-4 mt-0.5`,children:e.dates})]}),e.badge&&(0,V.jsx)(`span`,{className:`text-[10px] font-mono px-1.5 py-0.5 rounded shrink-0 ${n?`bg-black/35 text-emerald-300`:`bg-white/5 text-slate-400`}`,children:e.badge})]},e.id||t)})})]}),(0,V.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#060811] border border-white/10 mb-4 w-fit`,children:[(0,V.jsxs)(`button`,{type:`button`,onClick:()=>s(`overview`),className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${o===`overview`?`bg-indigo-600/35 text-white border border-indigo-500/50 shadow-sm`:`text-slate-400 hover:text-slate-200`}`,children:[(0,V.jsx)(ef,{className:`w-3.5 h-3.5 text-indigo-400`}),(0,V.jsx)(`span`,{children:`What I Built`})]}),(v||e.codeSnippet)&&(0,V.jsxs)(`button`,{type:`button`,onClick:()=>s(`code`),className:`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${o===`code`?`bg-indigo-600/35 text-indigo-200 border border-indigo-500/50 shadow-sm`:`text-slate-400 hover:text-slate-200`}`,children:[(0,V.jsx)(Ad,{className:`w-3.5 h-3.5 text-emerald-400`}),(0,V.jsx)(`span`,{children:`Under the Hood: Maths & Logic`})]}),e.marketingSite&&(0,V.jsxs)(`button`,{type:`button`,onClick:()=>s(`marketing`),className:`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${o===`marketing`?`bg-emerald-600/30 text-emerald-200 border border-emerald-500/50 shadow-sm`:`text-emerald-300/80 hover:text-emerald-200`}`,children:[(0,V.jsx)(Xd,{className:`w-3.5 h-3.5 text-emerald-400`}),(0,V.jsx)(`span`,{children:`Companion Website & Repo Code`})]})]}),o===`overview`&&(0,V.jsxs)(`div`,{className:`relative p-4 sm:p-5 rounded-2xl border mb-5 transition-all overflow-hidden ${re.overviewHolderClass}`,children:[(0,V.jsx)(Np,{projectId:e.id}),(0,V.jsx)(`p`,{className:`text-slate-300 text-sm sm:text-base leading-relaxed mb-4 font-normal relative z-10`,children:h}),(0,V.jsx)(`div`,{className:`space-y-2 mb-4 relative z-10`,children:g.slice(0,4).map((e,t)=>(0,V.jsxs)(`div`,{className:`flex items-start gap-2.5 text-xs sm:text-sm text-slate-300`,children:[(0,V.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0`}),(0,V.jsx)(`span`,{children:e})]},t))}),e.architectureNodes&&e.architectureNodes.length>0&&(0,V.jsxs)(`div`,{className:`pt-3.5 border-t border-white/10`,children:[(0,V.jsxs)(`div`,{className:`text-[10px] font-mono uppercase tracking-widest text-indigo-300/90 mb-2 flex items-center gap-1.5`,children:[(0,V.jsx)(Id,{className:`w-3.5 h-3.5 text-indigo-400`}),(0,V.jsx)(`span`,{children:`System Architecture Pipeline`})]}),(0,V.jsx)(`div`,{className:`grid grid-cols-2 sm:grid-cols-4 gap-2`,children:e.architectureNodes.map((e,t)=>(0,V.jsxs)(`div`,{className:`p-2.5 rounded-xl bg-[#060812] border border-white/10`,children:[(0,V.jsx)(`div`,{className:`text-[11px] font-bold text-white truncate`,children:e.label}),(0,V.jsx)(`div`,{className:`text-[10px] font-mono text-indigo-300/80 truncate mt-0.5`,children:e.sub})]},t))})]})]}),o===`code`&&(0,V.jsxs)(`div`,{className:`space-y-4`,children:[v&&(0,V.jsxs)(`div`,{className:`p-4 rounded-2xl bg-indigo-950/25 border border-indigo-500/30`,children:[(0,V.jsxs)(`div`,{className:`text-[10px] font-mono uppercase tracking-wider text-indigo-300 font-bold mb-1.5 flex items-center gap-1.5`,children:[(0,V.jsx)(Bf,{className:`w-3.5 h-3.5 text-indigo-400`}),(0,V.jsx)(`span`,{children:`Engineering Problem & How I Solved It`})]}),(0,V.jsx)(`p`,{className:`text-xs sm:text-sm text-slate-200 leading-relaxed`,children:v})]}),e.codeSnippet&&(0,V.jsxs)(`div`,{className:`rounded-2xl bg-[#05070e] border border-white/10 overflow-hidden`,children:[(0,V.jsxs)(`div`,{className:`px-3.5 py-2 bg-white/[0.03] border-b border-white/10 flex items-center justify-between`,children:[(0,V.jsx)(`span`,{className:`text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-semibold`,children:`Implementation Logic / Shader Snippet`}),(0,V.jsx)(`span`,{className:`text-[10px] font-mono text-slate-500`,children:S})]}),(0,V.jsx)(`pre`,{className:`p-3.5 text-[11px] sm:text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed`,children:(0,V.jsx)(`code`,{children:e.codeSnippet})})]})]}),o===`marketing`&&e.marketingSite&&(0,V.jsxs)(`div`,{className:`rounded-2xl bg-[#05070f] border border-emerald-500/35 overflow-hidden shadow-2xl`,children:[(0,V.jsxs)(`div`,{className:`p-3.5 bg-emerald-950/25 border-b border-emerald-500/25 flex flex-wrap items-center justify-between gap-2`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`div`,{className:`text-xs font-bold text-white flex items-center gap-2`,children:[(0,V.jsx)(Xd,{className:`w-4 h-4 text-emerald-400`}),(0,V.jsx)(`span`,{children:e.marketingSite.title})]}),(0,V.jsx)(`p`,{className:`text-[11px] text-slate-300 mt-0.5`,children:e.marketingSite.description})]}),(0,V.jsxs)(`div`,{className:`flex items-center gap-1.5 bg-black/50 p-1 rounded-xl border border-white/10`,children:[(0,V.jsxs)(`button`,{type:`button`,onClick:()=>l(`live`),className:`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${c===`live`?`bg-emerald-600 text-white`:`text-slate-400 hover:text-white`}`,children:[(0,V.jsx)(Xd,{className:`w-3 h-3`}),(0,V.jsx)(`span`,{children:`16:9 Live Site`})]}),(0,V.jsxs)(`button`,{type:`button`,onClick:()=>l(`source`),className:`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${c===`source`?`bg-indigo-600 text-white`:`text-slate-400 hover:text-white`}`,children:[(0,V.jsx)(Bd,{className:`w-3 h-3`}),(0,V.jsxs)(`span`,{children:[`Repo Code (`,te.length,` Files)`]})]})]})]}),c===`live`?(0,V.jsxs)(`div`,{children:[(0,V.jsx)(bp,{src:Q(e.marketingSite.path),title:e.marketingSite.title}),(0,V.jsxs)(`div`,{className:`px-3.5 py-2.5 bg-[#080b16] border-t border-white/10 flex flex-wrap items-center justify-end gap-4 text-xs`,children:[(0,V.jsxs)(`a`,{href:e.marketingSite.repoUrl,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-300 hover:text-white`,children:[(0,V.jsx)(ep,{className:`w-3.5 h-3.5`}),(0,V.jsx)(`span`,{children:`GitHub Repository`})]}),(0,V.jsxs)(`a`,{href:Q(e.marketingSite.path),target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-300 hover:text-emerald-200`,children:[(0,V.jsx)(`span`,{children:`Open Fullscreen in New Tab`}),(0,V.jsx)(Rd,{className:`w-3 h-3`})]})]})]}):(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`div`,{className:`px-3 py-2 bg-[#090d1a] border-b border-white/10 flex flex-wrap items-center justify-between gap-2`,children:[(0,V.jsx)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:te.map((e,t)=>(0,V.jsxs)(`button`,{type:`button`,onClick:()=>d(t),className:`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all cursor-pointer flex items-center gap-1.5 ${u===t?`bg-indigo-600/40 text-white border border-indigo-400/50 font-bold`:`bg-white/5 text-slate-400 hover:text-slate-200`}`,children:[(0,V.jsx)(Bd,{className:`w-3 h-3 text-indigo-400`}),(0,V.jsx)(`span`,{children:e.name}),(0,V.jsxs)(`span`,{className:`text-[10px] text-emerald-300`,children:[`(`,e.totalLines,` lines)`]})]},e.name))}),(0,V.jsxs)(`a`,{href:e.marketingSite.repoUrl,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-1.5 text-[11px] font-mono text-indigo-300 hover:text-white`,children:[(0,V.jsx)(ep,{className:`w-3.5 h-3.5`}),(0,V.jsx)(`span`,{children:`View on GitHub`})]})]}),C&&(0,V.jsx)(`pre`,{className:`p-4 text-[11px] font-mono text-slate-200 overflow-x-auto max-h-[360px] overflow-y-auto leading-relaxed bg-[#04060c]`,children:(0,V.jsx)(`code`,{children:C.code})})]})]})]})}),(0,V.jsxs)(`div`,{className:`lg:col-span-5 flex flex-col justify-center space-y-3.5`,children:[y?(0,V.jsxs)(`div`,{role:`button`,tabIndex:0,onClick:()=>T(null),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),T(null))},"aria-label":`Open ${p} overview`,className:`relative group/vid cursor-pointer overflow-hidden rounded-2xl bg-black border shadow-2xl aspect-[16/10] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${re.mediaHolderClass}`,children:[(0,V.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:`auto`,poster:b?Q(b):void 0,className:`w-full h-full object-cover group-hover/vid:scale-105 transition-transform duration-500 ease-out`,children:(0,V.jsx)(`source`,{src:Q(y),type:`video/mp4`})},y),(0,V.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/vid:opacity-100 transition-opacity`}),e.id===`rem`&&(0,V.jsxs)(`div`,{className:`absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#070e1a]/85 backdrop-blur-md border border-cyan-400/40 text-[10px] font-mono text-cyan-200 pointer-events-none z-10 flex items-center gap-1.5 shadow-md`,children:[(0,V.jsx)(`img`,{src:Q(`/images/logos/myndwell-logo-white.png`),alt:`Myndwell Logo`,className:`w-3.5 h-3.5 object-contain`}),(0,V.jsx)(`span`,{children:`MYNDWELL CORP // ARCHIVE`})]}),e.id===`delirium`&&(0,V.jsx)(`div`,{className:`absolute top-3 left-3 px-2 py-0.5 rounded-lg bg-black/85 backdrop-blur-md border border-red-500/40 pointer-events-none z-10 flex items-center shadow-md`,children:(0,V.jsx)(`img`,{src:Q(`/images/logos/delirium-title-logo.png`),alt:`Delirium`,className:`h-3 object-contain`})}),(0,V.jsxs)(`div`,{className:`absolute top-3 right-3 px-2.5 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white pointer-events-none z-10 flex items-center gap-1.5 shadow-md`,children:[(0,V.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse`}),r?`${f?.badge||`Version ${i+1}`} Capture`:`Gameplay Capture`]}),(0,V.jsxs)(`div`,{className:`absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-xl bg-[#090b16]/90 backdrop-blur-md border border-indigo-500/40 text-xs text-white opacity-0 group-hover/vid:opacity-100 transition-all duration-300 z-10`,children:[(0,V.jsx)(`span`,{className:`font-semibold text-[11px]`,children:`Click Video to Open Project Overview`}),(0,V.jsx)(Rd,{className:`w-3.5 h-3.5 text-indigo-400`})]})]}):(0,V.jsxs)(`div`,{role:`button`,tabIndex:0,onClick:()=>T(0),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),T(0))},"aria-label":`Open ${p} full-screen image`,className:`relative group/img cursor-pointer overflow-hidden rounded-2xl bg-slate-950 border shadow-2xl aspect-[16/10] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${re.mediaHolderClass}`,children:[(0,V.jsx)(`img`,{src:Q(b),alt:p,className:`w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500 ease-out`,loading:`lazy`}),(0,V.jsxs)(`div`,{className:`absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-xl bg-[#090b16]/90 backdrop-blur-md border border-indigo-500/40 text-xs text-white opacity-0 group-hover/img:opacity-100 transition-all duration-300 z-10`,children:[(0,V.jsx)(`span`,{className:`font-semibold text-[11px]`,children:`Click Image to Inspect Fullscreen`}),(0,V.jsx)($f,{className:`w-3.5 h-3.5 text-indigo-400`})]})]}),x.length>1&&(0,V.jsx)(`div`,{className:`grid gap-2.5 ${x.length===2?`grid-cols-2`:x.length===3?`grid-cols-3`:`grid-cols-4`}`,children:x.slice(0,4).map((e,t)=>(0,V.jsxs)(`button`,{type:`button`,onClick:()=>T(t),className:`relative rounded-xl overflow-hidden aspect-[16/10] border border-white/10 hover:border-indigo-400/70 bg-slate-950 group/t cursor-pointer shadow-md`,title:`Click to open this image fullscreen in overview`,children:[(0,V.jsx)(`img`,{src:Q(e),alt:`${p} capture ${t+1}`,className:`w-full h-full object-cover group-hover/t:scale-110 transition-transform duration-300 opacity-85 group-hover/t:opacity-100`,loading:`lazy`}),(0,V.jsx)(`div`,{className:`absolute inset-0 bg-black/40 opacity-0 group-hover/t:opacity-100 transition-opacity flex items-center justify-center`,children:(0,V.jsx)($f,{className:`w-4 h-4 text-white drop-shadow`})}),t===3&&x.length>4&&(0,V.jsxs)(`div`,{className:`absolute inset-0 bg-black/70 flex items-center justify-center text-[11px] font-mono font-bold text-indigo-200`,children:[`+`,x.length-4,` More`]})]},t))}),(0,V.jsx)(`div`,{className:`pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5`,children:E.map((e,t)=>{let n=ne&&t===E.length-1;return(0,V.jsx)(`div`,{className:n?`sm:col-span-2`:``,children:e.el},e.key)})})]})]})]})}var Fp={Gamepad2:Kd,Glasses:Jd,Sparkles:If,Compass:Md,BookOpen:fd};function Ip({onSelectProject:e,onViewAllProjects:t}){let[n,r]=(0,_.useState)(`gameplay`),i=ip.filter(e=>e.category===n),a=ip.filter(e=>e.category!==n).slice(0,7);return(0,V.jsxs)(`section`,{id:`portfolio`,className:`relative py-24 px-4 max-w-6xl mx-auto`,children:[(0,V.jsxs)(`div`,{className:`text-center max-w-3xl mx-auto mb-12`,children:[(0,V.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/35 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-sm`,children:[(0,V.jsx)(ef,{className:`w-3.5 h-3.5 text-indigo-400`}),(0,V.jsx)(`span`,{children:`SELECTED GAMEPLAY, VR, SHADERS & DESIGN`})]}),(0,V.jsx)(`h2`,{className:`text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-['Syne',sans-serif]`,children:`Featured Work by Discipline`}),(0,V.jsx)(`p`,{className:`text-slate-300 text-sm sm:text-base leading-relaxed`,children:`Select a discipline below to inspect my Unreal Engine 5 and Python builds, toggle between Phase 1 and Phase 2 project evolutions, interact with embedded companion websites and repo source code, or inspect the underlying maths.`})]}),(0,V.jsx)(`div`,{className:`mb-12`,children:(0,V.jsx)(`div`,{className:`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 p-2.5 rounded-2xl bg-[#090b16]/90 border border-indigo-500/25 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]`,children:rp.map(e=>{let t=n===e.id,i=Fp[e.icon]||Kd,a=ip.filter(t=>t.category===e.id).length;return(0,V.jsxs)(`button`,{type:`button`,onClick:()=>r(e.id),className:`relative px-3.5 py-3 rounded-xl text-left transition-all duration-200 cursor-pointer border flex items-center justify-between gap-2 ${t?`text-white border-indigo-400/70 shadow-lg shadow-indigo-950/50`:`text-slate-300 hover:text-white border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.04]`}`,children:[t&&(0,V.jsx)(U.div,{layoutId:`activeDisciplinePill`,transition:{type:`spring`,stiffness:420,damping:32},className:`absolute inset-0 bg-gradient-to-br from-indigo-600/50 via-indigo-900/45 to-violet-600/50 rounded-xl -z-10`}),(0,V.jsxs)(`div`,{className:`flex items-center gap-2.5 min-w-0`,children:[(0,V.jsx)(i,{className:`w-4 h-4 shrink-0 ${t?`text-emerald-300`:`text-indigo-400/80`}`}),(0,V.jsx)(`span`,{className:`font-bold text-xs sm:text-[13px] leading-tight tracking-tight text-white`,children:e.label})]}),(0,V.jsx)(`span`,{className:`px-1.5 py-0.5 rounded-md text-[10px] font-mono font-bold shrink-0 ${t?`bg-black/45 text-emerald-300 border border-emerald-400/30`:`bg-white/5 text-slate-400`}`,children:a})]},e.id)})})}),(0,V.jsx)($c,{mode:`wait`,children:(0,V.jsx)(U.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-15},transition:{duration:.3,ease:`easeInOut`},className:`space-y-8`,children:i.map(t=>(0,V.jsx)(Pp,{project:t,onSelectProject:e},t.id))},n)}),(0,V.jsxs)(U.div,{initial:{opacity:0,y:28},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},className:`mt-16 rounded-3xl bg-gradient-to-br from-[#0c1024] via-[#090b18] to-[#120d26] border-2 border-indigo-500/40 p-6 sm:p-8 shadow-[0_0_70px_rgba(99,102,241,0.22)] relative overflow-hidden group`,children:[(0,V.jsx)(`div`,{className:`absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-indigo-400/70 pointer-events-none`}),(0,V.jsx)(`div`,{className:`absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-indigo-400/70 pointer-events-none`}),(0,V.jsx)(`div`,{className:`absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-indigo-400/70 pointer-events-none`}),(0,V.jsx)(`div`,{className:`absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-indigo-400/70 pointer-events-none`}),(0,V.jsx)(`div`,{className:`absolute -right-20 -top-20 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/25 transition-all duration-700`}),(0,V.jsx)(`div`,{className:`absolute -left-20 -bottom-20 w-72 h-72 bg-violet-500/15 rounded-full blur-3xl pointer-events-none`}),(0,V.jsxs)(`div`,{className:`relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-7 border-b border-indigo-500/25`,children:[(0,V.jsxs)(`div`,{className:`max-w-xl`,children:[(0,V.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/15 border border-indigo-400/40 text-indigo-200 text-[11px] font-mono uppercase tracking-widest mb-3`,children:[(0,V.jsx)(Bf,{className:`w-3.5 h-3.5 text-emerald-400`}),(0,V.jsxs)(`span`,{children:[`GAME VAULT TERMINAL // `,ip.length,` REAL PROJECTS & COMPANION PORTALS`]})]}),(0,V.jsx)(`h3`,{className:`text-2xl sm:text-3xl font-black text-white tracking-tight font-['Syne',sans-serif]`,children:`Explore All My Projects & Design Bibles`}),(0,V.jsxs)(`p`,{className:`text-sm text-slate-300 mt-2 leading-relaxed`,children:[`Launch the full game-style project vault to search and filter across all `,(0,V.jsxs)(`strong`,{className:`text-white`,children:[ip.length,` games, physics prototypes, embedded marketing websites, and downloadable GDDs`]}),` in one view.`]})]}),(0,V.jsxs)(`button`,{type:`button`,onClick:t,className:`relative inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 hover:from-indigo-500 hover:to-violet-500 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_35px_rgba(99,102,241,0.5)] hover:shadow-[0_0_50px_rgba(139,92,246,0.75)] border border-indigo-300/40 hover:scale-[1.04] active:scale-[0.98] transition-all shrink-0 cursor-pointer group/btn`,children:[(0,V.jsx)(Kd,{className:`w-5 h-5 text-emerald-300`}),(0,V.jsxs)(`span`,{children:[`Explore All `,ip.length,` Projects`]}),(0,V.jsx)(id,{className:`w-4 h-4 group-hover/btn:translate-x-1 transition-transform`})]})]}),(0,V.jsxs)(`div`,{className:`relative z-10 pt-6`,children:[(0,V.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2 mb-3.5`,children:[(0,V.jsxs)(`div`,{className:`text-[11px] font-mono uppercase tracking-wider text-indigo-200 flex items-center gap-2`,children:[(0,V.jsx)(If,{className:`w-3.5 h-3.5 text-amber-400`}),(0,V.jsx)(`span`,{children:`Other Discipline Cartridges (Click any cartridge to inspect directly):`})]}),(0,V.jsx)(`span`,{className:`text-[10px] font-mono text-emerald-400 uppercase tracking-widest`,children:`[READY TO LAUNCH]`})]}),(0,V.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3`,children:[a.map(t=>{let n=xp(t.id);return(0,V.jsxs)(`button`,{type:`button`,onClick:()=>e(t),className:`flex items-center gap-3 p-2.5 rounded-xl border text-left transition-all cursor-pointer group/mini shadow-md hover:-translate-y-0.5 overflow-hidden relative ${n.compactContainerClass}`,children:[(0,V.jsx)(`img`,{src:Q(t.image),alt:t.title,className:`w-12 h-12 rounded-lg object-cover shrink-0 border group-hover/mini:scale-105 transition-transform ${n.mediaHolderClass}`,loading:`lazy`}),(0,V.jsxs)(`div`,{className:`min-w-0 flex-1 relative z-10`,children:[(0,V.jsx)(`div`,{className:`text-[10px] font-mono text-indigo-400 uppercase tracking-wider truncate`,children:t.discipline}),(0,V.jsx)(`div`,{className:`text-xs font-bold text-white truncate group-hover/mini:text-indigo-200`,children:t.title.split(`:`)[0]}),(0,V.jsx)(`div`,{className:`text-[10px] font-mono text-slate-400 truncate`,children:t.engine.split(`(`)[0]})]})]},t.id)}),(0,V.jsxs)(`button`,{type:`button`,onClick:t,className:`flex items-center justify-between gap-3 p-3 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/35 border border-dashed border-indigo-400/50 hover:border-indigo-300 text-left transition-all cursor-pointer group/tile`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`div`,{className:`text-[10px] font-mono text-emerald-300 uppercase tracking-wider font-bold`,children:`FULL CATALOGUE`}),(0,V.jsxs)(`div`,{className:`text-xs font-extrabold text-white mt-0.5`,children:[`Open All `,ip.length,` Builds & Filters →`]})]}),(0,V.jsx)(Kd,{className:`w-5 h-5 text-indigo-300 group-hover/tile:scale-110 transition-transform shrink-0`})]})]})]})]})]})}function Lp({onBackToHome:e,onSelectProject:t}){let[n,r]=(0,_.useState)(``),[i,a]=(0,_.useState)(`all`),o=(0,_.useMemo)(()=>{let e=n.toLowerCase().trim();return dp.filter(t=>{let n=!0;return i===`playable`?n=!!(t.links?.itch||t.links?.demo):i===`marketing`?n=!!t.marketingSite:i!==`all`&&(n=t.category===i),n?!e||t.title.toLowerCase().includes(e)||t.shortDesc.toLowerCase().includes(e)||t.engine.toLowerCase().includes(e)||t.role&&t.role.toLowerCase().includes(e)||t.categoryLabel&&t.categoryLabel.toLowerCase().includes(e)||t.tools&&t.tools.some(t=>t.toLowerCase().includes(e))||t.highlights&&t.highlights.some(t=>t.toLowerCase().includes(e)):!1})},[n,i]);return(0,V.jsxs)(`div`,{className:`min-h-screen pt-28 pb-24 px-4 max-w-7xl mx-auto`,children:[(0,V.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-4 mb-8 p-3.5 rounded-2xl bg-[#090b16]/90 border border-indigo-500/30 backdrop-blur-xl`,children:[(0,V.jsxs)(`button`,{type:`button`,onClick:e,className:`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600/25 hover:bg-indigo-600/45 text-indigo-200 hover:text-white border border-indigo-400/40 transition-all hover:scale-[1.03] active:scale-95 text-xs font-mono font-bold uppercase tracking-wider cursor-pointer`,children:[(0,V.jsx)(nd,{className:`w-4 h-4 text-indigo-300`}),(0,V.jsx)(`span`,{children:`Return to Main Portfolio`})]}),(0,V.jsxs)(`div`,{className:`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-black/50 border border-white/10 text-xs font-mono text-slate-300`,children:[(0,V.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-emerald-400 animate-pulse`}),(0,V.jsxs)(`span`,{children:[`GAME VAULT ONLINE // SHOWING `,o.length,` OF `,dp.length,` PROJECTS`]})]})]}),(0,V.jsxs)(`div`,{className:`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/35 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3`,children:[(0,V.jsx)(Bf,{className:`w-3.5 h-3.5 text-emerald-400`}),(0,V.jsxs)(`span`,{children:[`COMPLETE ARCHIVE // `,dp.length,` GAMES, PROTOTYPES & DESIGN BIBLES`]})]}),(0,V.jsx)(`h1`,{className:`text-3xl sm:text-5xl font-black text-white tracking-tight font-['Syne',sans-serif]`,children:`The Complete Project Vault`}),(0,V.jsx)(`p`,{className:`text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed`,children:`Browse, filter, and search every playable build, shader experiment, level blockout, interactive companion website, and Game Design Document in one place.`})]}),(0,V.jsxs)(`div`,{className:`relative w-full lg:w-96 shrink-0`,children:[(0,V.jsx)(Af,{className:`w-4 h-4 text-indigo-400 absolute left-3.5 top-1/2 -translate-y-1/2`}),(0,V.jsx)(`input`,{type:`text`,value:n,onChange:e=>r(e.target.value),placeholder:`Search by title, engine, shader, mechanic...`,className:`w-full pl-10 pr-10 py-3 rounded-2xl bg-[#090b16]/95 border border-indigo-500/35 focus:border-indigo-400 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all shadow-inner`}),n&&(0,V.jsx)(`button`,{type:`button`,onClick:()=>r(``),className:`absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer`,children:(0,V.jsx)(Zf,{className:`w-4 h-4`})})]})]}),(0,V.jsx)(`div`,{className:`flex flex-wrap items-center gap-2 pb-8 mb-8 border-b border-white/10`,children:fp.map(e=>{let t=i===e.id;return(0,V.jsxs)(`button`,{type:`button`,onClick:()=>a(e.id),className:`relative px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-2 ${t?`text-white bg-gradient-to-r from-indigo-600 to-violet-600 border border-indigo-300/60 shadow-[0_0_25px_rgba(99,102,241,0.4)]`:`text-slate-400 hover:text-slate-200 bg-[#090b16]/80 border border-white/10 hover:border-indigo-500/40`}`,children:[(0,V.jsx)(`span`,{children:e.label}),(0,V.jsx)(`span`,{className:`px-1.5 py-0.5 rounded text-[10px] font-mono ${t?`bg-black/40 text-emerald-300`:`bg-white/5 text-slate-400`}`,children:e.count})]},e.id)})}),o.length===0?(0,V.jsxs)(`div`,{className:`text-center py-20 bg-white/[0.02] border border-white/10 rounded-3xl p-8`,children:[(0,V.jsx)(`p`,{className:`text-slate-400 text-base mb-4`,children:`No projects matched your search criteria.`}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>{r(``),a(`all`)},className:`px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider cursor-pointer`,children:`Reset Filters`})]}):(0,V.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`,children:o.map((e,n)=>{let r=e.videoPreview||e.video,i=!!e.links?.demo&&e.links.demo.startsWith(`/games/`),a=xp(e.id);return(0,V.jsxs)(U.div,{layout:!0,initial:{opacity:0,y:15},animate:{opacity:1,y:0},exit:{opacity:0,scale:.98},transition:{duration:.3,delay:Math.min(n*.02,.15)},className:`group relative rounded-2xl p-5 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 border overflow-hidden ${a.compactContainerClass}`,children:[(0,V.jsx)(Mp,{projectId:e.id,isCompact:!0}),(0,V.jsxs)(`div`,{className:`relative z-10`,children:[(0,V.jsxs)(`div`,{className:`relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-950 border mb-4 transition-all ${a.mediaHolderClass}`,children:[r?(0,V.jsxs)(`div`,{onClick:()=>t({...e,initialLightboxIndex:null}),className:`w-full h-full cursor-pointer group/thumb relative`,children:[(0,V.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:`auto`,poster:e.image?Q(e.image):void 0,className:`w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500`,children:(0,V.jsx)(`source`,{src:Q(r),type:`video/mp4`})}),(0,V.jsxs)(`div`,{className:`absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/85 backdrop-blur-md border border-emerald-500/40 text-[9px] font-mono text-emerald-300 flex items-center gap-1`,children:[(0,V.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse`}),`GAMEPLAY CAPTURE`]})]}):(0,V.jsx)(`div`,{onClick:()=>t({...e,initialLightboxIndex:0}),className:`w-full h-full cursor-pointer group/thumb relative`,children:(0,V.jsx)(`img`,{src:Q(e.image),alt:e.title,className:`w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500`,loading:`lazy`})}),(0,V.jsx)(`div`,{className:`absolute top-2 left-2 px-2.5 py-0.5 rounded-md bg-black/85 backdrop-blur-md border border-indigo-500/40 text-[10px] font-mono font-bold text-indigo-300 pointer-events-none z-10 max-w-[70%] truncate`,children:e.categoryLabel}),e.id===`labrats`&&(0,V.jsxs)(`div`,{className:`absolute top-2 right-2 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-md border border-emerald-400/50 shadow-[0_0_10px_rgba(52,211,153,0.3)] z-10 pointer-events-none`,children:[(0,V.jsx)(`img`,{src:Q(`/images/logos/labrats-logo-transparent.png`),alt:`LabRats Logo`,className:`w-4 h-4 object-contain filter drop-shadow-[0_0_4px_rgba(74,222,128,0.8)]`}),(0,V.jsx)(`span`,{className:`text-[9px] font-mono font-bold text-emerald-300`,children:`LABRATS`})]}),e.id===`rem`&&(0,V.jsxs)(`div`,{className:`absolute top-2 right-2 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#070e1a]/90 backdrop-blur-md border border-cyan-400/50 shadow-[0_0_10px_rgba(6,182,212,0.3)] z-10 pointer-events-none`,children:[(0,V.jsx)(`img`,{src:Q(`/images/logos/myndwell-logo-white.png`),alt:`Myndwell Logo`,className:`w-3.5 h-3.5 object-contain`}),(0,V.jsx)(`span`,{className:`text-[9px] font-mono font-bold text-cyan-200`,children:`MYNDWELL`})]}),e.id===`delirium`&&(0,V.jsx)(`div`,{className:`absolute top-2 right-2 flex items-center px-2 py-0.5 rounded-md bg-black/90 backdrop-blur-md border border-red-500/40 z-10 pointer-events-none`,children:(0,V.jsx)(`img`,{src:Q(`/images/logos/delirium-title-logo.png`),alt:`Delirium`,className:`h-2.5 object-contain`})}),e.marketingSite?(0,V.jsx)(`div`,{className:`absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-indigo-950/90 border border-indigo-400/50 text-[9px] font-mono font-bold text-indigo-200 pointer-events-none z-10`,children:`+ EMBEDDED WEB PORTAL & CODE`}):e.versions?(0,V.jsx)(`div`,{className:`absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-emerald-950/90 border border-emerald-500/40 text-[9px] font-mono font-bold text-emerald-300 pointer-events-none z-10`,children:`PHASE 1 & 2 SWITCHER`}):null]}),(0,V.jsxs)(`div`,{className:`flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5`,children:[(0,V.jsx)(`span`,{className:`text-indigo-400 font-semibold truncate pr-2`,children:e.engine}),(0,V.jsx)(`span`,{className:`shrink-0`,children:e.dates})]}),(0,V.jsx)(`h3`,{onClick:()=>t(e),className:`text-base font-bold text-white tracking-tight mb-2 group-hover:text-indigo-200 transition-colors line-clamp-2 cursor-pointer font-['Syne',sans-serif]`,children:e.title}),(0,V.jsx)(`p`,{className:`text-xs text-slate-300 leading-relaxed line-clamp-3 mb-3 font-normal`,children:e.shortDesc}),e.funFact&&(0,V.jsxs)(`div`,{className:`mb-3 px-2.5 py-2 rounded-xl bg-indigo-950/30 border border-indigo-500/25 text-[11px] text-indigo-200 flex items-start gap-2`,children:[(0,V.jsx)(ud,{className:`w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5`}),(0,V.jsx)(`span`,{className:`line-clamp-2`,children:e.funFact})]})]}),(0,V.jsxs)(`div`,{className:`pt-3 border-t border-white/10 flex items-center justify-between gap-2 mt-auto`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[e.links?.itch&&(0,V.jsx)(`a`,{href:e.links.itch,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Play on Itch.io`,className:`p-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 border border-rose-500/30 transition-all hover:scale-110`,title:`Play on Itch.io`,children:(0,V.jsx)(Kd,{className:`w-3.5 h-3.5 text-rose-400`})}),e.links?.video&&(0,V.jsx)(`a`,{href:Q(e.links.video),target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Watch Video`,className:`p-1.5 rounded-lg bg-red-950/60 hover:bg-red-900/80 text-red-300 border border-red-500/30 transition-all hover:scale-110`,title:`Watch Video`,children:(0,V.jsx)(Od,{className:`w-3.5 h-3.5 text-red-400`})}),pp(e.links?.github)&&(0,V.jsx)(`a`,{href:e.links.github,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Source Code`,className:`p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-all hover:scale-110`,title:`Source Code`,children:(0,V.jsx)(ep,{className:`w-3.5 h-3.5`})}),i&&(0,V.jsx)(`a`,{href:Q(e.links.demo),target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Play in Browser`,className:`p-1.5 rounded-lg bg-indigo-950/60 hover:bg-indigo-900/80 text-indigo-300 border border-indigo-500/30 transition-all hover:scale-110`,title:`Play in Browser`,children:(0,V.jsx)(Rd,{className:`w-3.5 h-3.5 text-indigo-400`})}),mp(e.links?.linkedin)&&(0,V.jsx)(`a`,{href:e.links.linkedin,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`LinkedIn Breakdown`,className:`p-1.5 rounded-lg bg-blue-950/60 hover:bg-blue-900/80 text-blue-300 border border-blue-500/30 transition-all hover:scale-110`,title:`LinkedIn Breakdown`,children:(0,V.jsx)(tp,{className:`w-3.5 h-3.5 text-blue-400`})})]}),(0,V.jsxs)(`button`,{type:`button`,onClick:()=>t(e),className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold uppercase tracking-wider border transition-all cursor-pointer ${a.buttonClass}`,children:[(0,V.jsx)(`span`,{children:`Overview`}),(0,V.jsx)(fd,{className:`w-3 h-3`})]})]})]},e.id)})})]})}function Rp(){let[e,t]=(0,_.useState)(0),[n,r]=(0,_.useState)(!0),i=ap.slides||[],a=i[e]||i[0];return(0,V.jsxs)(`section`,{id:`research`,className:`relative w-full overflow-hidden`,children:[(0,V.jsx)(`div`,{className:`h-28 w-full bg-gradient-to-b from-transparent via-[#0b0b0c]/85 to-[#111110] pointer-events-none`}),(0,V.jsx)(`div`,{className:`bg-editorial-paper border-t border-[#c89d66]/30 pt-24 pb-16 px-4 sm:px-6 relative`,children:(0,V.jsxs)(`div`,{className:`max-w-6xl mx-auto`,children:[(0,V.jsxs)(U.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},className:`border-t-2 border-b border-[#c89d66]/45 py-3.5 mb-12 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-[0.18em] text-[#c89d66]`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,V.jsx)(fd,{className:`w-3.5 h-3.5 text-[#c89d66]`}),(0,V.jsx)(`span`,{children:`ACADEMIC RESEARCH & BSc DISSERTATION`})]}),(0,V.jsx)(`div`,{className:`text-[#a8a29e]`,children:`UNIVERSITY OF EAST LONDON • ROUTE B (PRACTICE-AS-RESEARCH)`})]}),(0,V.jsxs)(U.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.55},className:`flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 mb-12 border-b border-[#e7e2d8]/15`,children:[(0,V.jsxs)(`div`,{className:`max-w-3xl`,children:[(0,V.jsx)(`div`,{className:`text-xs font-mono uppercase tracking-[0.15em] text-[#c89d66] mb-3`,children:`Provisional Undergraduate Dissertation Monograph`}),(0,V.jsx)(`h2`,{className:`text-3xl sm:text-5xl font-bold text-[#f5f2eb] tracking-tight font-['Newsreader',Georgia,serif] leading-[1.12]`,children:ap.title}),(0,V.jsx)(`p`,{className:`text-lg sm:text-xl text-[#d6cec2] italic font-['Newsreader',Georgia,serif] mt-3 leading-relaxed`,children:ap.subtitle})]}),(0,V.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 shrink-0`,children:[ap.downloadProposal&&(0,V.jsxs)(`a`,{href:Q(ap.downloadProposal),download:!0,className:`inline-flex items-center gap-2.5 px-5 py-3 rounded-lg bg-[#c89d66] hover:bg-[#d6ad77] text-[#111110] font-bold text-xs uppercase tracking-wider transition-colors shadow-md`,children:[(0,V.jsx)(Hd,{className:`w-4 h-4`}),(0,V.jsx)(`span`,{children:`Research Proposal (.docx)`})]}),ap.downloadSlides&&(0,V.jsxs)(`a`,{href:Q(ap.downloadSlides),download:!0,className:`inline-flex items-center gap-2.5 px-5 py-3 rounded-lg bg-[#1c1b19] hover:bg-[#262522] text-[#f5f2eb] font-semibold text-xs uppercase tracking-wider border border-[#c89d66]/45 transition-colors`,children:[(0,V.jsx)(Sf,{className:`w-4 h-4 text-[#c89d66]`}),(0,V.jsx)(`span`,{children:`Pitch Slides (.pptx)`})]})]})]}),(0,V.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-14 mb-14 border-b border-[#e7e2d8]/15`,children:[(0,V.jsxs)(U.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.5},className:`lg:col-span-5 space-y-5`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,V.jsx)(`span`,{className:`text-xs font-mono uppercase tracking-[0.2em] text-[#c89d66] font-bold`,children:`Section I // Abstract & Problem Space`}),(0,V.jsx)(`div`,{className:`h-[1px] flex-1 bg-[#c89d66]/25`})]}),(0,V.jsx)(`p`,{className:`text-[#e7e2d8] text-sm sm:text-base leading-[1.8] font-normal text-justify`,children:ap.abstract}),(0,V.jsx)(`div`,{className:`p-5 bg-[#181715] border-l-2 border-[#c89d66] text-[#d6cec2] font-['Newsreader',Georgia,serif] italic text-base leading-relaxed`,children:`“When racial heritage is coded only through visual ambiguity without explicit narrative canon, players default to assuming whiteness or racial neutrality (Dietrich, 2013).”`})]}),(0,V.jsx)(U.div,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.5},className:`lg:col-span-7`,children:(0,V.jsxs)(`div`,{className:`rounded-xl bg-[#161514] border border-[#c89d66]/35 overflow-hidden shadow-2xl`,children:[(0,V.jsxs)(`div`,{className:`flex items-center justify-between px-4 py-3 bg-[#0d0c0b] border-b border-[#c89d66]/25`,children:[(0,V.jsxs)(`span`,{className:`text-[11px] font-mono uppercase tracking-[0.15em] text-[#c89d66]`,children:[`FIG. 1.`,e+1,` // PRESENTATION PLATE`]}),(0,V.jsxs)(`span`,{className:`text-[11px] font-mono text-[#a8a29e]`,children:[`Plate `,e+1,` of `,i.length]})]}),(0,V.jsxs)(`div`,{className:`relative aspect-[16/9] bg-[#0a0908] flex items-center justify-center`,children:[a&&(0,V.jsx)(`img`,{src:Q(a.src),alt:a.caption,className:`w-full h-full object-contain`}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>{t(e=>(e-1+i.length)%i.length)},className:`absolute left-3 p-2 rounded-md bg-[#111110]/90 hover:bg-[#c89d66] text-[#f5f2eb] hover:text-[#111110] border border-[#c89d66]/40 transition-colors cursor-pointer`,"aria-label":`Previous plate`,children:(0,V.jsx)(bd,{className:`w-4 h-4`})}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>{t(e=>(e+1)%i.length)},className:`absolute right-3 p-2 rounded-md bg-[#111110]/90 hover:bg-[#c89d66] text-[#f5f2eb] hover:text-[#111110] border border-[#c89d66]/40 transition-colors cursor-pointer`,"aria-label":`Next plate`,children:(0,V.jsx)(Sd,{className:`w-4 h-4`})})]}),(0,V.jsx)(`div`,{className:`px-4 py-3 bg-[#141312] border-t border-[#c89d66]/20 text-xs font-['Newsreader',Georgia,serif] italic text-[#d6cec2]`,children:a?.caption}),(0,V.jsx)(`div`,{className:`grid grid-cols-6 gap-2 p-3 bg-[#0d0c0b] border-t border-[#c89d66]/20`,children:i.map((n,r)=>(0,V.jsx)(`button`,{type:`button`,onClick:()=>t(r),className:`rounded overflow-hidden aspect-[16/9] border transition-all cursor-pointer ${r===e?`border-[#c89d66] ring-1 ring-[#c89d66]/60 opacity-100`:`border-white/10 opacity-50 hover:opacity-85`}`,title:n.caption,children:(0,V.jsx)(`img`,{src:Q(n.src),alt:`Plate ${r+1}`,className:`w-full h-full object-cover`,loading:`lazy`})},n.src))})]})})]}),(0,V.jsxs)(`div`,{className:`pb-14 mb-14 border-b border-[#e7e2d8]/15`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-3 mb-8`,children:[(0,V.jsx)(`span`,{className:`text-xs font-mono uppercase tracking-[0.2em] text-[#c89d66] font-bold`,children:`Section II // Research Hypotheses (The Illusion of Parity)`}),(0,V.jsx)(`div`,{className:`h-[1px] flex-1 bg-[#c89d66]/25`})]}),(0,V.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-6`,children:ap.hypotheses.map((e,t)=>(0,V.jsx)(U.div,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:t*.08},className:`p-6 rounded-xl bg-[#171614] border border-[#c89d66]/30 flex flex-col justify-between`,children:(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`div`,{className:`flex items-center justify-between gap-2 pb-3 mb-4 border-b border-[#e7e2d8]/10`,children:[(0,V.jsxs)(`span`,{className:`text-xs font-mono uppercase tracking-widest text-[#c89d66]`,children:[`Hypothesis `,e.number]}),(0,V.jsx)(`span`,{className:`px-2.5 py-0.5 rounded bg-[#c89d66]/15 border border-[#c89d66]/40 text-[11px] font-mono font-bold text-[#e5c18d]`,children:e.stat})]}),(0,V.jsx)(`h3`,{className:`text-xl font-bold text-[#f5f2eb] font-['Newsreader',Georgia,serif] mb-3`,children:e.title}),(0,V.jsx)(`p`,{className:`text-xs sm:text-sm text-[#d6cec2] leading-relaxed`,children:e.summary})]})},e.number))})]}),(0,V.jsxs)(`div`,{className:`pb-14 mb-12 border-b border-[#e7e2d8]/15`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-3 mb-8`,children:[(0,V.jsx)(`span`,{className:`text-xs font-mono uppercase tracking-[0.2em] text-[#c89d66] font-bold`,children:`Section III // Triangulated 3-Phase Methodology`}),(0,V.jsx)(`div`,{className:`h-[1px] flex-1 bg-[#c89d66]/25`})]}),(0,V.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-6`,children:ap.methodology.map((e,t)=>(0,V.jsxs)(U.div,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:t*.08},className:`p-6 rounded-xl bg-[#151413] border border-[#e7e2d8]/15 hover:border-[#c89d66]/45 transition-colors`,children:[(0,V.jsx)(`div`,{className:`text-[11px] font-mono uppercase tracking-wider text-[#c89d66] mb-2`,children:e.badge}),(0,V.jsx)(`h3`,{className:`text-lg sm:text-xl font-bold text-[#f5f2eb] font-['Newsreader',Georgia,serif] mb-3`,children:e.phase}),(0,V.jsx)(`p`,{className:`text-xs sm:text-sm text-[#d6cec2] leading-relaxed`,children:e.details})]},e.phase))})]}),(0,V.jsxs)(`div`,{className:`rounded-xl bg-[#161514] border border-[#c89d66]/30 p-6`,children:[(0,V.jsxs)(`button`,{type:`button`,onClick:()=>r(!n),className:`w-full flex items-center justify-between text-left cursor-pointer`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2.5 text-xs sm:text-sm font-mono uppercase tracking-[0.15em] text-[#c89d66] font-bold`,children:[(0,V.jsx)(nf,{className:`w-4 h-4 text-[#c89d66]`}),(0,V.jsx)(`span`,{children:`Section IV // Peer-Reviewed Literature & Census Sources (Harvard Format)`})]}),(0,V.jsx)(`span`,{className:`text-xs font-mono text-[#a8a29e] hover:text-[#f5f2eb]`,children:n?`Collapse [-]`:`Expand [+]`})]}),n&&(0,V.jsx)(`ul`,{className:`mt-5 pt-5 border-t border-[#e7e2d8]/15 space-y-2.5 text-xs sm:text-sm text-[#d6cec2] font-['Newsreader',Georgia,serif] leading-relaxed`,children:ap.references.map((e,t)=>(0,V.jsx)(`li`,{className:`pl-4 border-l border-[#c89d66]/40`,children:e},t))})]})]})})]})}var zp=[{domain:`Unreal Engine 5 Gameplay & Maths`,items:[{skill:`360° Polar Cross-Section Gravity & Spline Banking`,where:`Built for Rastacats (92% 1st Class) to let players ride seamlessly up walls and upside-down across ceilings.`},{skill:`37-State Hierarchical Finite State Machine (HFSM)`,where:`Built for my State Machine Showcase to run locomotion, ledge-mantling, and surface-swim transitions with zero Animator spaghetti.`},{skill:`Instanced Static Mesh (HISM) Object Pooling`,where:`Built for Rastacats Remastered to recycle thousands of procedural pipe segments with zero garbage-collection frame spikes.`}]},{domain:`HLSL Shaders & Technical Art`,items:[{skill:`Anisotropic Kuwahara & Sobel Edge Post-Process Shaders`,where:`Written in HLSL for Project Frame to turn real-time 3D viewport frames into hand-brushed oil paintings at 60+ FPS.`},{skill:`Curved-World WPO Vertex Deformation & Tangent Decals`,where:`Built in Rastacats Remastered to bend straight meshes dynamically on the GPU and project blood splatters across curved cylinders.`},{skill:`RealityCapture Photogrammetry to Low-Poly PBR Baking`,where:`Executed in Project Poly, taking 416 raw DSLR photos (1.5M+ tris) down to a clean, game-ready 4K PBR asset in Blender.`}]},{domain:`VR Physics, AI & Multiplayer Networking`,items:[{skill:`OpenXR Two-Handed Physics Rig & Acoustic Sanity AI`,where:`Engineered for Delirium VR (sole playable VR game on the UEL showcase floor) with physical doors, levers, and spatial audio hunting.`},{skill:`Photon PUN2 Authoritative Multiplayer & Ragdoll Sync`,where:`Built in Unity 6 for Planet Protectors, synchronising co-op waves, physics knockbacks, and object pools across 4 players.`},{skill:`Frustum-Culled Non-Euclidean Corridor Swapping`,where:`Designed for Chanceway to silently reconfigure maze junctions behind the player’s camera frustum.`}]}];function Bp(){return(0,V.jsx)(`section`,{id:`toolkit`,className:`relative w-full overflow-hidden`,children:(0,V.jsxs)(`div`,{className:`bg-circuit-pattern pt-32 pb-32 px-4 sm:px-6 relative`,children:[(0,V.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#111110] via-[#0c0f0d]/85 to-transparent pointer-events-none z-0`}),(0,V.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#080c14] via-[#070b09]/80 to-transparent pointer-events-none z-0`}),(0,V.jsxs)(`div`,{className:`max-w-6xl mx-auto relative z-10`,children:[(0,V.jsxs)(U.div,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45},className:`p-3.5 rounded-lg bg-[#050806]/90 border border-amber-500/35 mb-10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px]`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2.5 text-amber-400 font-bold uppercase tracking-widest`,children:[(0,V.jsx)(Id,{className:`w-4 h-4 text-amber-400 shrink-0`}),(0,V.jsx)(`span`,{children:`HARDWARE TINKERING, REVERSE-ENGINEERING & APPLIED ENGINE LAB`})]}),(0,V.jsxs)(`div`,{className:`flex items-center gap-3 text-emerald-400`,children:[(0,V.jsxs)(`span`,{className:`inline-flex items-center gap-1.5`,children:[(0,V.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-emerald-400 animate-pulse`}),(0,V.jsx)(`span`,{children:`WORKBENCH: ACTIVE`})]}),(0,V.jsx)(`span`,{className:`text-amber-500/50`,children:`|`}),(0,V.jsx)(`span`,{className:`text-amber-300/80`,children:`MOCAP // USB_HID // SHADERS`})]})]}),(0,V.jsxs)(U.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},className:`mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6`,children:[(0,V.jsxs)(`div`,{className:`max-w-3xl`,children:[(0,V.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-wider mb-3`,children:[(0,V.jsx)(Yf,{className:`w-3.5 h-3.5 text-amber-400`}),(0,V.jsx)(`span`,{children:`Hands-On Hardware Hacker & Systems Builder`})]}),(0,V.jsx)(`h2`,{className:`text-3xl sm:text-5xl font-black text-amber-50 tracking-tight font-['Space_Grotesk',sans-serif] uppercase leading-[1.08]`,children:`If a Tool Costs £10,000 or Doesn't Exist, I Build It Myself.`}),(0,V.jsx)(`p`,{className:`text-slate-300 text-sm sm:text-base mt-3 leading-relaxed`,children:`I don't just use game engines out of the box. When I needed motion capture on a student budget, I fused an Xbox Kinect with PlayStation VR gyros over Python OSC. When vendor RGB/LCD software bloated my custom watercooled PC, I sniffed the raw 64-byte USB HID packets in Wireshark and wrote my own drivers. Here is the exact hardware and engine work from my bench.`})]}),(0,V.jsxs)(`div`,{className:`px-4 py-3 rounded-xl bg-[#070c09]/95 border border-emerald-500/35 font-mono text-xs text-emerald-300 shrink-0`,children:[(0,V.jsx)(`div`,{className:`text-[10px] uppercase tracking-widest text-amber-400/90 mb-0.5`,children:`Custom Rig & Driver Proof`}),(0,V.jsx)(`div`,{className:`font-bold text-white`,children:`4 Scratch-Built Hardware & Systems Logs`})]})]}),(0,V.jsx)(`div`,{className:`grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14`,children:sp.map((e,t)=>(0,V.jsxs)(U.article,{initial:{opacity:0,y:22},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.4,delay:t*.06},className:`rounded-2xl bg-[#070c09]/95 border border-amber-500/35 hover:border-amber-400/70 shadow-[0_20px_50px_rgba(0,0,0,0.75)] overflow-hidden flex flex-col justify-between transition-all`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`div`,{className:`relative h-44 sm:h-48 w-full overflow-hidden bg-black border-b border-amber-500/25`,children:[(0,V.jsx)(`img`,{src:Q(e.image),alt:e.title,className:`w-full h-full object-cover opacity-55 hover:opacity-75 transition-opacity duration-500`,loading:`lazy`}),(0,V.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-[#070c09] via-[#070c09]/45 to-transparent`}),(0,V.jsxs)(`div`,{className:`absolute top-3 inset-x-4 flex items-center justify-between gap-2`,children:[(0,V.jsx)(`span`,{className:`px-2.5 py-1 rounded bg-black/85 border border-amber-500/45 text-[10px] font-mono font-bold uppercase tracking-widest text-amber-300 backdrop-blur-md`,children:e.tag}),(0,V.jsxs)(`div`,{className:`flex items-center gap-2`,children:[e.links?.github&&(0,V.jsxs)(`a`,{href:e.links.github,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/85 hover:bg-amber-500 hover:text-slate-950 text-amber-200 border border-amber-500/40 text-[11px] font-mono font-semibold transition-colors backdrop-blur-md`,children:[(0,V.jsx)(ep,{className:`w-3.5 h-3.5`}),(0,V.jsx)(`span`,{children:`Source`})]}),e.links?.demo&&(0,V.jsxs)(`a`,{href:e.links.demo,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-950/90 hover:bg-emerald-400 hover:text-slate-950 text-emerald-300 border border-emerald-500/50 text-[11px] font-mono font-semibold transition-colors backdrop-blur-md`,children:[(0,V.jsx)(Rd,{className:`w-3.5 h-3.5`}),(0,V.jsx)(`span`,{children:`Live Tool`})]})]})]}),(0,V.jsx)(`div`,{className:`absolute bottom-3 inset-x-5`,children:(0,V.jsx)(`h3`,{className:`text-lg sm:text-xl font-bold text-white font-['Space_Grotesk',sans-serif] leading-tight`,children:e.title})})]}),(0,V.jsxs)(`div`,{className:`p-5 sm:p-6 space-y-4`,children:[(0,V.jsxs)(`div`,{className:`p-2.5 rounded-lg bg-[#0b130f] border border-emerald-500/30 flex items-start gap-2 text-xs font-mono text-emerald-300 leading-relaxed`,children:[(0,V.jsx)(Bf,{className:`w-4 h-4 text-emerald-400 shrink-0 mt-0.5`}),(0,V.jsx)(`span`,{className:`break-words`,children:e.subtitle})]}),(0,V.jsxs)(`div`,{className:`space-y-3 text-xs sm:text-sm leading-relaxed`,children:[(0,V.jsxs)(`div`,{className:`p-3.5 rounded-xl bg-amber-950/20 border-l-2 border-amber-400 text-slate-200`,children:[(0,V.jsx)(`span`,{className:`block text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400 mb-1`,children:`The Problem I Hit:`}),e.problem]}),(0,V.jsxs)(`div`,{className:`p-3.5 rounded-xl bg-emerald-950/15 border-l-2 border-emerald-400 text-slate-200`,children:[(0,V.jsx)(`span`,{className:`block text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 mb-1`,children:`How I Built / Reverse-Engineered It:`}),e.tinkeringSolution]})]}),(0,V.jsx)(`ul`,{className:`space-y-1.5 pt-1`,children:e.proofPoints.map(e=>(0,V.jsxs)(`li`,{className:`flex items-start gap-2 text-xs text-slate-300 leading-relaxed`,children:[(0,V.jsx)(Ed,{className:`w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5`}),(0,V.jsx)(`span`,{children:e})]},e))})]})]}),(0,V.jsxs)(`div`,{className:`px-5 py-3.5 bg-[#050806] border-t border-amber-500/20`,children:[(0,V.jsx)(`div`,{className:`text-[10px] font-mono uppercase tracking-widest text-amber-400/80 mb-2`,children:`Signal & Data Pipeline:`}),(0,V.jsx)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:e.pipeline.map((t,n)=>(0,V.jsxs)(`div`,{className:`inline-flex items-center gap-1.5`,children:[(0,V.jsx)(`span`,{className:`px-2 py-1 rounded bg-[#0c1410] border border-amber-500/30 text-[11px] font-mono text-amber-100`,children:t}),n<e.pipeline.length-1&&(0,V.jsx)(id,{className:`w-3 h-3 text-emerald-400 shrink-0`})]},t))})]})]},e.id))}),(0,V.jsxs)(U.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45},className:`rounded-2xl bg-[#060a08]/95 border border-amber-500/35 p-6 sm:p-8 shadow-2xl`,children:[(0,V.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-amber-500/25`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`div`,{className:`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold mb-1`,children:[(0,V.jsx)(If,{className:`w-3.5 h-3.5`}),(0,V.jsx)(`span`,{children:`Zero Buzzwords // Verified Production Index`})]}),(0,V.jsx)(`h3`,{className:`text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk',sans-serif]`,children:`Where I Built Each Engine, Shader & Physics System`})]}),(0,V.jsx)(`span`,{className:`text-xs font-mono text-slate-400`,children:`Every technical skill mapped directly to a shipped build above`})]}),(0,V.jsx)(`div`,{className:`grid grid-cols-1 lg:grid-cols-3 gap-6`,children:zp.map(e=>(0,V.jsx)(`div`,{className:`p-5 rounded-xl bg-[#0a100d] border border-amber-500/25 flex flex-col justify-between space-y-4`,children:(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h4`,{className:`text-xs font-mono font-bold uppercase tracking-widest text-amber-400 pb-2.5 mb-3.5 border-b border-amber-500/20`,children:e.domain}),(0,V.jsx)(`div`,{className:`space-y-3.5`,children:e.items.map(e=>(0,V.jsxs)(`div`,{className:`space-y-1`,children:[(0,V.jsx)(`div`,{className:`text-xs sm:text-sm font-bold text-white font-['Space_Grotesk',sans-serif]`,children:e.skill}),(0,V.jsx)(`p`,{className:`text-xs text-slate-300 leading-relaxed`,children:e.where})]},e.skill))})]})},e.domain))})]})]})]})})}var Vp={theatre:Od,governance:Qd,studio:wf,editorial:fd,cyber:Pf,robotics:Id},Hp={theatre:{cardAccent:`border-rose-500/40 hover:border-rose-400 bg-gradient-to-br from-[#1b0b12] via-[#0c121e] to-[#0c121e]`,iconBox:`bg-rose-950/80 text-rose-300 border-rose-500/40`,badgeText:`text-rose-300 bg-rose-950/70 border-rose-500/40`,modalBg:`bg-[radial-gradient(ellipse_at_top,#4c0519_0%,#1c060c_55%,#090406_100%)] border-amber-400/50`,headerAccent:`text-amber-300`,whyBox:`bg-rose-950/40 border-amber-400/60 text-amber-50`,replayLabel:`Replay Curtain Call`},governance:{cardAccent:`border-amber-500/35 hover:border-amber-400 bg-gradient-to-br from-[#191309] via-[#0c121e] to-[#0c121e]`,iconBox:`bg-amber-950/80 text-amber-300 border-amber-500/40`,badgeText:`text-amber-300 bg-amber-950/70 border-amber-500/40`,modalBg:`bg-[radial-gradient(ellipse_at_top,#2e1e07_0%,#151009_60%,#09080c_100%)] border-amber-400/45`,headerAccent:`text-amber-300`,whyBox:`bg-amber-950/35 border-amber-400/60 text-amber-50`,replayLabel:`Replay Council Decree`},studio:{cardAccent:`border-purple-500/35 hover:border-purple-400 bg-gradient-to-br from-[#160d24] via-[#0c121e] to-[#0c121e]`,iconBox:`bg-purple-950/80 text-purple-300 border-purple-500/40`,badgeText:`text-purple-300 bg-purple-950/70 border-purple-500/40`,modalBg:`bg-[radial-gradient(ellipse_at_top,#2e1065_0%,#130924_60%,#07050c_100%)] border-purple-400/45`,headerAccent:`text-purple-300`,whyBox:`bg-purple-950/35 border-purple-400/60 text-purple-50`,replayLabel:`Replay On-Air Broadcast`},editorial:{cardAccent:`border-fuchsia-500/35 hover:border-fuchsia-400 bg-gradient-to-br from-[#1c0c1f] via-[#0c121e] to-[#0c121e]`,iconBox:`bg-fuchsia-950/80 text-fuchsia-300 border-fuchsia-500/40`,badgeText:`text-fuchsia-300 bg-fuchsia-950/70 border-fuchsia-500/40`,modalBg:`bg-[radial-gradient(ellipse_at_top,#4a044e_0%,#18081c_60%,#08050a_100%)] border-fuchsia-400/45`,headerAccent:`text-fuchsia-300`,whyBox:`bg-fuchsia-950/35 border-fuchsia-400/60 text-fuchsia-50`,replayLabel:`Replay Folio Flip`},cyber:{cardAccent:`border-emerald-500/35 hover:border-emerald-400 bg-gradient-to-br from-[#071914] via-[#0c121e] to-[#0c121e]`,iconBox:`bg-emerald-950/80 text-emerald-300 border-emerald-500/40`,badgeText:`text-emerald-300 bg-emerald-950/70 border-emerald-500/40`,modalBg:`bg-[radial-gradient(ellipse_at_top,#063729_0%,#071512_60%,#050a09_100%)] border-emerald-400/45`,headerAccent:`text-emerald-300`,whyBox:`bg-emerald-950/35 border-emerald-400/60 text-emerald-50`,replayLabel:`Replay Terminal Decryption`},robotics:{cardAccent:`border-sky-500/35 hover:border-sky-400 bg-gradient-to-br from-[#091826] via-[#0c121e] to-[#0c121e]`,iconBox:`bg-sky-950/80 text-sky-300 border-sky-500/40`,badgeText:`text-sky-300 bg-sky-950/70 border-sky-500/40`,modalBg:`bg-[radial-gradient(ellipse_at_top,#0c2d48_0%,#081420_60%,#050911_100%)] border-sky-400/45`,headerAccent:`text-sky-300`,whyBox:`bg-sky-950/35 border-sky-400/60 text-sky-50`,replayLabel:`Replay Mechatronic Iris`}};function Up({theme:e,animationKey:t}){return e===`theatre`?(0,V.jsxs)(`div`,{"aria-hidden":`true`,className:`pointer-events-none absolute inset-0 z-30 overflow-hidden`,children:[(0,V.jsx)(`div`,{className:`absolute top-0 inset-x-0 h-5 bg-gradient-to-b from-[#7f1d1d] to-[#450a0a] border-b-2 border-amber-400/80 shadow-lg`}),(0,V.jsx)(U.div,{initial:{x:`0%`},animate:{x:`-94%`},transition:{duration:1.25,ease:[.22,1,.36,1],delay:.15},className:`absolute top-0 bottom-0 left-0 w-1/2 border-r-4 border-amber-400/90 shadow-[25px_0_60px_rgba(0,0,0,0.95)]`,style:{backgroundImage:`repeating-linear-gradient(90deg, #450a0a 0px, #7f1d1d 22px, #991b1b 36px, #450a0a 56px)`},children:(0,V.jsx)(`div`,{className:`absolute inset-y-0 right-2 w-1 bg-amber-300/40`})}),(0,V.jsx)(U.div,{initial:{x:`0%`},animate:{x:`94%`},transition:{duration:1.25,ease:[.22,1,.36,1],delay:.15},className:`absolute top-0 bottom-0 right-0 w-1/2 border-l-4 border-amber-400/90 shadow-[-25px_0_60px_rgba(0,0,0,0.95)]`,style:{backgroundImage:`repeating-linear-gradient(90deg, #450a0a 0px, #7f1d1d 22px, #991b1b 36px, #450a0a 56px)`},children:(0,V.jsx)(`div`,{className:`absolute inset-y-0 left-2 w-1 bg-amber-300/40`})}),(0,V.jsx)(U.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1.1,delay:.4},className:`absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,191,36,0.16),transparent_65%)]`})]},`curtain-${t}`):e===`governance`?(0,V.jsx)(`div`,{"aria-hidden":`true`,className:`pointer-events-none absolute inset-0 z-30 overflow-hidden`,children:(0,V.jsxs)(U.div,{initial:{opacity:1,scale:1},animate:{opacity:0,scale:1.05},transition:{duration:.85,delay:.65,ease:`easeOut`},className:`absolute inset-0 bg-gradient-to-b from-[#1c1308] via-[#241a0b] to-[#120c05] border-2 border-amber-500/50 shadow-2xl flex flex-col items-center justify-center p-6 text-center select-none`,children:[(0,V.jsx)(`div`,{className:`absolute inset-3 border border-amber-500/30 rounded-lg pointer-events-none`}),(0,V.jsx)(`div`,{className:`absolute inset-4 border border-amber-400/20 rounded-md pointer-events-none`}),[0,1,2].map(e=>(0,V.jsx)(U.div,{initial:{scale:.8,opacity:.85},animate:{scale:3.2,opacity:0},transition:{duration:.85,delay:.2+e*.15,ease:`easeOut`},className:`absolute w-28 h-28 rounded-full border-2 border-amber-300 pointer-events-none`},e))]})},`gov-${t}`):e===`studio`?(0,V.jsx)(`div`,{"aria-hidden":`true`,className:`pointer-events-none absolute inset-0 z-30 overflow-hidden`,children:(0,V.jsxs)(U.div,{initial:{opacity:1},animate:{opacity:0},transition:{duration:.8,delay:.75,ease:`easeOut`},className:`absolute inset-0 bg-[#0d0517] flex flex-col items-center justify-center p-6 text-center select-none`,children:[(0,V.jsxs)(`div`,{className:`relative flex items-center justify-center mb-6`,children:[(0,V.jsx)(U.div,{initial:{scale:.6,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.35,delay:.1},className:`w-24 h-24 rounded-full border-4 border-purple-400 bg-gradient-to-br from-purple-600 via-purple-900 to-black flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.9)] z-10`,children:(0,V.jsx)(wf,{className:`w-10 h-10 text-purple-200`})}),[0,1,2].map(e=>(0,V.jsx)(U.div,{initial:{scale:.3,opacity:.95},animate:{scale:3.4,opacity:0},transition:{duration:.8,delay:.15+e*.15,ease:`easeOut`},className:`absolute w-24 h-24 rounded-full border-2 border-purple-400 pointer-events-none`},e))]}),(0,V.jsx)(`div`,{className:`w-full max-w-md h-12 mb-4 overflow-hidden`,children:(0,V.jsx)(`svg`,{viewBox:`0 0 400 60`,preserveAspectRatio:`none`,className:`w-full h-full stroke-purple-400 fill-none`,strokeWidth:`2.5`,children:(0,V.jsx)(`path`,{d:`M0,30 Q25,5 50,30 T100,30 T150,30 T200,5 T250,55 T300,30 T350,30 T400,30`})})})]})},`studio-${t}`):e===`editorial`?(0,V.jsx)(`div`,{"aria-hidden":`true`,className:`pointer-events-none absolute inset-0 z-30 overflow-hidden [perspective:1200px]`,children:(0,V.jsxs)(U.div,{initial:{rotateY:0,opacity:1},animate:{rotateY:-112,opacity:0},transition:{duration:1.15,ease:[.22,1,.36,1],delay:.15},style:{transformOrigin:`left center`},className:`absolute inset-0 bg-gradient-to-br from-[#3b0742] via-[#240529] to-[#0f0212] border-r-8 border-fuchsia-400 shadow-[35px_0_70px_rgba(0,0,0,0.95)] flex flex-col items-center justify-center p-8 select-none`,children:[(0,V.jsx)(`div`,{className:`absolute top-4 left-4 w-6 h-6 border border-fuchsia-300/40 rounded-full flex items-center justify-center text-[8px] font-mono text-fuchsia-300`,children:`+`}),(0,V.jsx)(`div`,{className:`absolute top-4 right-4 w-6 h-6 border border-fuchsia-300/40 rounded-full flex items-center justify-center text-[8px] font-mono text-fuchsia-300`,children:`+`}),(0,V.jsx)(`div`,{className:`absolute bottom-4 left-4 w-6 h-6 border border-fuchsia-300/40 rounded-full flex items-center justify-center text-[8px] font-mono text-fuchsia-300`,children:`+`}),(0,V.jsx)(`div`,{className:`absolute bottom-4 right-4 w-6 h-6 border border-fuchsia-300/40 rounded-full flex items-center justify-center text-[8px] font-mono text-fuchsia-300`,children:`+`})]})},`edit-${t}`):e===`cyber`?(0,V.jsx)(`div`,{"aria-hidden":`true`,className:`pointer-events-none absolute inset-0 z-30 overflow-hidden`,children:(0,V.jsxs)(U.div,{initial:{opacity:1},animate:{opacity:0},transition:{duration:.85,delay:.75,ease:`easeOut`},className:`absolute inset-0 bg-[#030d08] flex flex-col items-center justify-center p-6 text-center select-none`,children:[(0,V.jsx)(U.div,{initial:{top:`0%`},animate:{top:`100%`},transition:{duration:.85,ease:`easeInOut`},className:`absolute inset-x-0 h-1 bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,1)] z-40`}),(0,V.jsxs)(`div`,{className:`absolute inset-0 opacity-20 font-mono text-[10px] text-emerald-400 leading-tight p-4 overflow-hidden text-left flex justify-between`,children:[(0,V.jsxs)(`div`,{children:[`0x7F4A 0x88BC 0x00A1 0x91F2`,(0,V.jsx)(`br`,{}),`0x11C3 0xDE44 0xAA02 0x7701`,(0,V.jsx)(`br`,{}),`0x8922 0x55E1 0x33B9 0x22A0`,(0,V.jsx)(`br`,{}),`0xF001 0x4811 0xBC88 0x6641`]}),(0,V.jsxs)(`div`,{className:`hidden sm:block`,children:[`0xAA11 0xBB22 0xCC33 0xDD44`,(0,V.jsx)(`br`,{}),`0xEE55 0xFF66 0x0077 0x1188`,(0,V.jsx)(`br`,{}),`0x2299 0x33AA 0x44BB 0x55CC`,(0,V.jsx)(`br`,{}),`0x66DD 0x77EE 0x88FF 0x9900`]})]}),(0,V.jsxs)(`div`,{className:`relative flex items-center justify-center mb-5`,children:[(0,V.jsx)(U.div,{initial:{scale:.6,rotate:0,opacity:1},animate:{scale:2.8,rotate:180,opacity:0},transition:{duration:.85,delay:.15},className:`w-28 h-28 rounded-full border-2 border-dashed border-emerald-400 pointer-events-none`}),(0,V.jsx)(`div`,{className:`w-20 h-20 rounded-full border-2 border-emerald-400 bg-emerald-950/90 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.8)] z-10`,children:(0,V.jsx)(Bf,{className:`w-8 h-8 text-emerald-300`})})]})]})},`cyber-${t}`):e===`robotics`?(0,V.jsx)(`div`,{"aria-hidden":`true`,className:`pointer-events-none absolute inset-0 z-30 overflow-hidden`,children:(0,V.jsxs)(U.div,{initial:{opacity:1},animate:{opacity:0},transition:{duration:.85,delay:.75,ease:`easeOut`},className:`absolute inset-0 bg-[#06101c] flex flex-col items-center justify-center p-6 text-center select-none`,children:[(0,V.jsx)(U.div,{initial:{opacity:0,scale:.5},animate:{opacity:[0,.7,0],scale:1.6},transition:{duration:.7,delay:.1},className:`absolute top-2 left-2 w-24 h-24 rounded-full bg-sky-400/20 blur-xl pointer-events-none`}),(0,V.jsx)(U.div,{initial:{opacity:0,scale:.5},animate:{opacity:[0,.7,0],scale:1.6},transition:{duration:.7,delay:.1},className:`absolute bottom-2 right-2 w-24 h-24 rounded-full bg-sky-400/20 blur-xl pointer-events-none`}),(0,V.jsxs)(`div`,{className:`relative flex items-center justify-center mb-5`,children:[(0,V.jsx)(U.div,{initial:{rotate:0,scale:.3},animate:{rotate:140,scale:3.2},transition:{duration:.95,ease:[.22,1,.36,1],delay:.1},className:`w-32 h-32 rounded-full border-4 border-sky-400/80 pointer-events-none`,style:{background:`conic-gradient(from 0deg, #0284c7 0deg 45deg, #0f172a 45deg 90deg, #0284c7 90deg 135deg, #0f172a 135deg 180deg, #0284c7 180deg 225deg, #0f172a 225deg 270deg, #0284c7 270deg 315deg, #0f172a 315deg 360deg)`}}),(0,V.jsx)(`div`,{className:`absolute w-20 h-20 rounded-full border-2 border-sky-300 bg-sky-950 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(14,165,233,0.9)] z-10 text-sky-200`,children:(0,V.jsx)(Id,{className:`w-8 h-8 text-sky-300`})})]})]})},`robotics-${t}`):null}function Wp(){let[e,t]=(0,_.useState)(null),[n,r]=(0,_.useState)(0),[i,a]=(0,_.useState)(0),[o,s]=(0,_.useState)(null),c=e=>{r(0),a(e=>e+1),t(e)};(0,_.useEffect)(()=>{if(!e&&!o)return;let n=e=>{e.key===`Escape`&&(t(null),s(null))};return window.addEventListener(`keydown`,n),()=>window.removeEventListener(`keydown`,n)},[e,o]);let l=[...lp,...lp];return(0,V.jsxs)(`section`,{id:`about`,className:`relative w-full bg-dossier-grid border-t border-slate-700/70 text-slate-100 overflow-hidden`,children:[(0,V.jsx)(`style`,{children:`
        @keyframes showcaseMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-showcase-strip {
          display: flex;
          width: max-content;
          animation: showcaseMarquee 48s linear infinite;
        }
        .animate-showcase-strip:hover {
          animation-play-state: paused;
        }
      `}),(0,V.jsx)(`div`,{className:`h-14 w-full bg-gradient-to-b from-[#070b09] to-transparent pointer-events-none`}),(0,V.jsx)(`div`,{className:`max-w-6xl mx-auto px-4 pt-2`,children:(0,V.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-700/80 text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,V.jsx)(md,{className:`w-3.5 h-3.5 text-sky-400`}),(0,V.jsx)(`span`,{className:`text-sky-300 font-bold`,children:`STUDIO CANDIDATE DOSSIER & VERIFIED CREDENTIALS`})]}),(0,V.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,V.jsx)(`span`,{children:`REF: JJ-UEL-2026`}),(0,V.jsx)(`span`,{className:`hidden sm:inline text-slate-600`,children:`|`}),(0,V.jsx)(`span`,{className:`hidden sm:inline text-emerald-400`,children:`STATUS: AVAILABLE FOR STUDIO ROLES`})]})]})}),(0,V.jsxs)(`div`,{className:`max-w-6xl mx-auto px-4 py-14 sm:py-16`,children:[(0,V.jsxs)(`div`,{className:`mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-700 text-sky-300 text-xs font-mono uppercase tracking-wider mb-3`,children:[(0,V.jsx)(X,{className:`w-3.5 h-3.5 text-sky-400`}),(0,V.jsx)(`span`,{children:`Candidate Profile // Technical Game Designer`})]}),(0,V.jsx)(`h2`,{className:`text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Syne',sans-serif]`,children:`Josh Johnson`}),(0,V.jsx)(`p`,{className:`text-slate-300 text-sm sm:text-base mt-2 max-w-2xl`,children:`How I approach game development, mathematical problem-solving, and cross-disciplinary studio collaboration. Click any credential on the right to inspect the full story and custom animations.`})]}),(0,V.jsxs)(`div`,{className:`flex items-center gap-4 px-4 py-3 rounded-xl bg-[#0c121e] border border-slate-700/80 shrink-0`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`div`,{className:`text-[10px] font-mono uppercase tracking-widest text-slate-400`,children:`Primary Base`}),(0,V.jsx)(`div`,{className:`text-xs sm:text-sm font-bold text-white`,children:`London, United Kingdom`})]}),(0,V.jsx)(`div`,{className:`h-7 w-px bg-slate-700/80`}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`div`,{className:`text-[10px] font-mono uppercase tracking-widest text-slate-400`,children:`Degree Standing`}),(0,V.jsx)(`div`,{className:`text-xs sm:text-sm font-bold text-emerald-400`,children:`1st Class Honours Track`})]})]})]}),(0,V.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-10 items-start`,children:[(0,V.jsxs)(U.div,{initial:{opacity:0,x:-24},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.45},className:`lg:col-span-7 space-y-6`,children:[(0,V.jsxs)(`div`,{className:`relative p-6 rounded-xl bg-[#0c121e] border-l-4 border-l-sky-400 border border-slate-700/80 shadow-lg`,children:[(0,V.jsx)(`div`,{className:`text-[11px] font-mono uppercase tracking-widest text-sky-400 mb-1.5`,children:`Design & Engineering Principle`}),(0,V.jsxs)(`blockquote`,{className:`text-lg sm:text-2xl font-extrabold text-white font-['Syne',sans-serif] leading-snug`,children:[`“`,np.motto,`”`]})]}),(0,V.jsxs)(`div`,{className:`p-6 sm:p-7 rounded-xl bg-[#0c121e]/90 border border-slate-700/70 space-y-4 text-slate-200 leading-relaxed font-normal text-sm sm:text-base`,children:[(0,V.jsxs)(`p`,{children:[`I'm a `,(0,V.jsx)(`strong`,{className:`text-white font-semibold`,children:`Technical Game Designer`}),` studying BSc (Hons) Computer Games Design at the`,` `,(0,V.jsx)(`strong`,{className:`text-white font-semibold`,children:`University of East London (UEL)`}),`, where I also serve as`,` `,(0,V.jsx)(`strong`,{className:`text-white font-semibold`,children:`School Representative`}),` for Architecture, Computing & Engineering and sat on the`,` `,(0,V.jsx)(`strong`,{className:`text-white font-semibold`,children:`Sextennial School Review`}),` panel reviewing the university's computing and games degrees.`]}),(0,V.jsxs)(`p`,{children:[`I gravitate toward the problems that sit right on the boundary between game design, maths, and technical art. When our spline-based pipe racer`,` `,(0,V.jsx)(`strong`,{className:`text-white font-semibold`,children:`Rastacats (92%, 1st Class)`}),` needed players to ride seamlessly up walls and upside-down across ceilings, I bypassed Unreal Engine 5's default planar gravity and wrote a custom polar cross-section controller, then followed it up in my remaster with a curved-world WPO vertex shader and tangent-aligned decal projection maths.`]}),(0,V.jsxs)(`p`,{children:[`Before focusing full-time on games, I spent over five years acting on stage in musicals like `,(0,V.jsx)(`em`,{children:`Les Misérables`}),` and `,(0,V.jsx)(`em`,{children:`The Addams Family`}),` as well as acting on film sets. That background directly shapes how I direct performance capture, block cameras inside Unreal Engine, and write interactive dialogue. It also led me to build`,` `,(0,V.jsx)(`strong`,{className:`text-white font-semibold`,children:`Project K.I.N.E.T.I.C.`}),`, a DIY motion-capture rig fusing an Xbox Kinect v2 with PSVR Move gyros over Python OSC to animate UE5 MetaHumans on a student budget.`]})]}),(0,V.jsxs)(`div`,{className:`p-6 rounded-xl bg-[#0c121e] border border-slate-700/80 shadow-lg`,children:[(0,V.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800`,children:[(0,V.jsx)(`span`,{className:`text-xs font-mono uppercase tracking-wider text-sky-300 font-bold`,children:`Verified Academic Transcript Ledger (UEL BSc Computer Games Design)`}),(0,V.jsx)(`span`,{className:`px-2.5 py-0.5 rounded bg-emerald-950/70 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 font-semibold`,children:`8x 1st Class Honours Modules`})]}),(0,V.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-2.5`,children:op.map(e=>(0,V.jsxs)(`div`,{className:`flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#080c14] border border-slate-800 text-xs`,children:[(0,V.jsx)(`div`,{className:`truncate pr-2`,children:(0,V.jsx)(`span`,{className:`text-slate-200 font-medium`,children:e.name})}),(0,V.jsx)(`span`,{className:`font-mono font-bold text-sky-300 shrink-0`,children:e.mark})]},e.name))})]}),(0,V.jsxs)(`div`,{className:`flex flex-wrap gap-3 pt-1`,children:[np.cv&&(0,V.jsxs)(`a`,{href:Q(np.cv),target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-md transition-all`,children:[(0,V.jsx)(Hd,{className:`w-3.5 h-3.5`}),(0,V.jsx)(`span`,{children:`Download Full CV (PDF)`})]}),(0,V.jsxs)(`a`,{href:np.linkedin,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0c121e] hover:bg-slate-800 text-sky-300 font-semibold text-xs tracking-wider uppercase border border-slate-700 transition-all`,children:[(0,V.jsx)(`span`,{children:`LinkedIn Profile`}),(0,V.jsx)(od,{className:`w-3.5 h-3.5`})]}),(0,V.jsxs)(`a`,{href:np.github,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0c121e] hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs tracking-wider uppercase border border-slate-700 transition-all`,children:[(0,V.jsx)(`span`,{children:`GitHub Repositories`}),(0,V.jsx)(od,{className:`w-3.5 h-3.5`})]})]})]}),(0,V.jsxs)(U.div,{initial:{opacity:0,x:24},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.45},className:`lg:col-span-5 space-y-3`,children:[(0,V.jsxs)(`div`,{className:`flex items-center justify-between px-1 pb-1`,children:[(0,V.jsx)(`span`,{className:`text-xs font-mono uppercase tracking-wider text-sky-300 font-bold`,children:`Interactive Credentials // Click Any Card`}),(0,V.jsxs)(`span`,{className:`text-[11px] font-mono text-slate-400`,children:[cp.length,` Verified Dossiers`]})]}),cp.map((e,t)=>{let n=Vp[e.theme]||ud,r=Hp[e.theme]||Hp.governance,i=e.images?.[0]?.src;return(0,V.jsxs)(`button`,{type:`button`,onClick:()=>c(e),className:`w-full text-left p-4 rounded-xl border shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-0.5 ${r.cardAccent}`,children:[(0,V.jsxs)(`div`,{className:`flex items-center justify-between gap-2 mb-2`,children:[(0,V.jsxs)(`span`,{className:`text-[10px] font-mono uppercase tracking-widest text-slate-400`,children:[`CREDENTIAL 0`,t+1,` // `,e.category]}),(0,V.jsxs)(`span`,{className:`inline-flex items-center gap-1 px-2 py-0.5 rounded border text-[10px] font-mono font-bold uppercase tracking-wider shrink-0 ${r.badgeText}`,children:[(0,V.jsx)(`span`,{children:e.badge}),(0,V.jsx)(Sd,{className:`w-3 h-3 group-hover:translate-x-0.5 transition-transform`})]})]}),(0,V.jsxs)(`div`,{className:`flex items-start gap-3`,children:[i?(0,V.jsx)(`div`,{className:`w-14 h-14 rounded-lg overflow-hidden border border-white/15 shrink-0 relative`,children:(0,V.jsx)(`img`,{src:Q(i),alt:e.title,className:`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500`,loading:`lazy`})}):(0,V.jsx)(`div`,{className:`p-2.5 rounded-lg border shrink-0 ${r.iconBox}`,children:(0,V.jsx)(n,{className:`w-5 h-5`})}),(0,V.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,V.jsx)(`h3`,{className:`font-bold text-white text-sm group-hover:text-sky-300 transition-colors leading-snug`,children:e.title}),(0,V.jsx)(`p`,{className:`text-[11px] text-slate-300 font-medium mt-0.5 line-clamp-1`,children:e.subtitle}),(0,V.jsx)(`p`,{className:`text-xs text-slate-400 mt-1.5 leading-relaxed line-clamp-2`,children:e.shortSummary})]})]})]},e.id)})]})]}),(0,V.jsxs)(U.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},className:`mt-16 pt-12 border-t border-slate-700/80`,children:[(0,V.jsxs)(`div`,{className:`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`div`,{className:`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-300 font-bold mb-1`,children:[(0,V.jsx)(ud,{className:`w-4 h-4 text-amber-400`}),(0,V.jsx)(`span`,{children:`Live Public Exhibitions & Floor Showcases`})]}),(0,V.jsx)(`h3`,{className:`text-2xl sm:text-3xl font-extrabold text-white font-['Syne',sans-serif]`,children:`Showcases I've Been a Part Of`}),(0,V.jsxs)(`p`,{className:`text-xs sm:text-sm text-slate-300 mt-1`,children:[`Featuring the `,(0,V.jsx)(`strong`,{className:`text-white`,children:`UEL Annual ACE Showcase 2026`}),` (where `,(0,V.jsx)(`em`,{children:`Rastacats`}),` was the sole Level 5 project chosen to exhibit downstairs with Level 6 honours projects, and `,(0,V.jsx)(`em`,{children:`Delirium VR`}),` was upstairs in the dedicated VR suite) alongside the `,(0,V.jsx)(`strong`,{className:`text-white`,children:`Summer VR Demonstration Series`}),` with Patrick Quinnell. Hover to pause or click any photo to enlarge.`]})]}),(0,V.jsx)(`div`,{className:`text-[11px] font-mono text-amber-300/90 uppercase tracking-wider shrink-0`,children:`Revolving Gallery • Click Any Frame`})]}),(0,V.jsxs)(`div`,{className:`relative w-full overflow-hidden rounded-2xl bg-[#090e18] border border-slate-700/80 py-5 shadow-2xl`,children:[(0,V.jsx)(`div`,{"aria-hidden":`true`,className:`pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-[#090e18] to-transparent z-10`}),(0,V.jsx)(`div`,{"aria-hidden":`true`,className:`pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#090e18] to-transparent z-10`}),(0,V.jsx)(`div`,{className:`animate-showcase-strip gap-5 px-5`,children:l.map((e,t)=>(0,V.jsx)(`button`,{type:`button`,onClick:()=>s(e),className:`w-72 sm:w-80 shrink-0 text-left rounded-xl bg-[#0c1322] border border-slate-700/80 hover:border-amber-400/70 overflow-hidden shadow-lg group transition-all cursor-pointer flex flex-col justify-between`,children:(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`div`,{className:`relative aspect-video w-full overflow-hidden bg-black`,children:[(0,V.jsx)(`img`,{src:Q(e.src),alt:e.caption,className:`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500`,loading:`lazy`}),(0,V.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-[#0c1322] via-transparent to-black/40`}),(0,V.jsx)(`span`,{className:`absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded bg-black/80 border border-amber-400/45 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300 backdrop-blur-sm`,children:e.event}),(0,V.jsx)(`span`,{className:`absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/75 text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/15`,children:(0,V.jsx)(df,{className:`w-3.5 h-3.5`})})]}),(0,V.jsxs)(`div`,{className:`p-4`,children:[(0,V.jsx)(`div`,{className:`text-[10px] font-mono uppercase tracking-wider text-sky-300 mb-1`,children:e.location}),(0,V.jsx)(`h4`,{className:`text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors leading-snug mb-1.5`,children:e.highlight}),(0,V.jsx)(`p`,{className:`text-xs text-slate-300 leading-relaxed line-clamp-2`,children:e.caption})]})]})},`${e.id}-${t}`))})]})]})]}),(0,V.jsx)($c,{children:o&&(0,V.jsx)(U.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>s(null),className:`fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4`,children:(0,V.jsxs)(U.div,{initial:{scale:.94,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.95,opacity:0},onClick:e=>e.stopPropagation(),className:`relative max-w-4xl w-full rounded-2xl bg-[#0c121e] border border-amber-400/45 overflow-hidden shadow-2xl`,children:[(0,V.jsxs)(`div`,{className:`flex items-center justify-between px-5 py-3.5 bg-black/60 border-b border-white/10`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`span`,{className:`text-[11px] font-mono uppercase tracking-widest text-amber-300 font-bold`,children:[o.event,` // `,o.location]}),(0,V.jsx)(`h4`,{className:`text-base sm:text-lg font-bold text-white`,children:o.highlight})]}),(0,V.jsx)(`button`,{type:`button`,onClick:()=>s(null),className:`p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer`,"aria-label":`Close showcase photo`,children:(0,V.jsx)(Zf,{className:`w-5 h-5`})})]}),(0,V.jsx)(`div`,{className:`aspect-video w-full bg-black flex items-center justify-center`,children:(0,V.jsx)(`img`,{src:Q(o.src),alt:o.caption,className:`w-full h-full object-contain`})}),(0,V.jsx)(`div`,{className:`px-5 py-3.5 bg-[#090e18] border-t border-white/10 text-xs sm:text-sm text-slate-200`,children:o.caption})]})})}),(0,V.jsx)($c,{children:e&&(0,V.jsx)(U.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>t(null),className:`fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto`,children:(()=>{let a=Hp[e.theme]||Hp.governance,o=e.images||[],s=o.length>0?o[n]||o[0]:null,c=e.theme===`governance`;return(0,V.jsxs)(U.div,{initial:{scale:.94,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},exit:{scale:.95,opacity:0,y:20},transition:{duration:.35},onClick:e=>e.stopPropagation(),className:`relative w-full max-w-5xl rounded-2xl border-2 shadow-[0_25px_90px_rgba(0,0,0,0.95)] overflow-hidden my-auto ${a.modalBg}`,children:[(0,V.jsx)(Up,{theme:e.theme,animationKey:i}),(0,V.jsxs)(`div`,{className:`relative z-20 flex flex-wrap items-center justify-between gap-4 px-6 sm:px-10 pt-7 pb-5 border-b border-white/15 bg-black/40`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`div`,{className:`text-xs font-mono uppercase tracking-[0.2em] font-bold ${a.headerAccent}`,children:e.category}),(0,V.jsx)(`h3`,{className:`text-xl sm:text-3xl font-extrabold text-white font-['Syne',sans-serif] mt-1`,children:e.title}),(0,V.jsx)(`p`,{className:`text-xs sm:text-sm text-slate-300 mt-0.5`,children:e.subtitle})]}),(0,V.jsx)(`div`,{className:`flex items-center gap-2.5`,children:(0,V.jsx)(`button`,{type:`button`,onClick:()=>t(null),className:`p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors cursor-pointer`,"aria-label":`Close credential dossier`,children:(0,V.jsx)(Zf,{className:`w-5 h-5`})})})]}),(0,V.jsx)(`div`,{className:`relative z-20 p-6 sm:p-10 max-h-[80vh] overflow-y-auto`,children:c?(0,V.jsxs)(`div`,{className:`space-y-6`,children:[(0,V.jsxs)(`div`,{className:`p-5 rounded-xl bg-black/50 border border-amber-500/30`,children:[(0,V.jsx)(`h4`,{className:`text-xs font-mono uppercase tracking-widest text-amber-300 font-bold mb-2`,children:`Executive Mandate & Cohort Leadership`}),(0,V.jsx)(`p`,{className:`text-sm sm:text-base text-slate-100 leading-relaxed`,children:e.story})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h4`,{className:`text-xs font-mono uppercase tracking-widest text-slate-400 mb-3`,children:`Core Representation Responsibilities & Actions`}),(0,V.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5`,children:e.governancePillars?.map((e,t)=>(0,V.jsx)(`div`,{className:`p-4 rounded-xl bg-black/40 border border-amber-500/25 flex flex-col justify-between`,children:(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`span`,{className:`text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block mb-1`,children:[`PILLAR 0`,t+1]}),(0,V.jsx)(`h5`,{className:`text-sm font-bold text-white font-['Syne',sans-serif] mb-2 leading-snug`,children:e.title}),(0,V.jsx)(`p`,{className:`text-xs text-slate-300 leading-relaxed`,children:e.detail})]})},t))})]}),(0,V.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4 pt-2`,children:[(0,V.jsxs)(`div`,{className:`p-4 rounded-xl border-l-4 ${a.whyBox}`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-bold mb-1.5`,children:[(0,V.jsx)(If,{className:`w-3.5 h-3.5 text-amber-400`}),(0,V.jsx)(`span`,{children:`How This Shapes My Game Development`})]}),(0,V.jsx)(`p`,{className:`text-xs sm:text-sm leading-relaxed`,children:e.whyItMattersForGames})]}),(0,V.jsxs)(`div`,{className:`p-4 rounded-xl bg-black/40 border border-slate-700/80`,children:[(0,V.jsx)(`h4`,{className:`text-xs font-mono uppercase tracking-widest text-slate-400 mb-2`,children:`Key Highlights`}),(0,V.jsx)(`ul`,{className:`space-y-1.5`,children:e.highlights.map(e=>(0,V.jsxs)(`li`,{className:`flex items-start gap-2 text-xs text-slate-200 leading-relaxed`,children:[(0,V.jsx)(Ed,{className:`w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5`}),(0,V.jsx)(`span`,{children:e})]},e))})]})]})]}):(0,V.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start`,children:[(0,V.jsxs)(`div`,{className:`lg:col-span-7 space-y-3.5`,children:[s&&(0,V.jsxs)(`div`,{className:`rounded-xl overflow-hidden bg-black/90 border border-white/20 shadow-2xl`,children:[(0,V.jsx)(`div`,{className:`aspect-video w-full relative flex items-center justify-center bg-black`,children:(0,V.jsx)(`img`,{src:Q(s.src),alt:s.caption,className:`w-full h-full object-contain`})}),(0,V.jsxs)(`div`,{className:`px-4 py-3 bg-black/80 border-t border-white/10 flex items-center justify-between gap-3`,children:[(0,V.jsx)(`span`,{className:`text-xs sm:text-sm text-slate-200 font-medium`,children:s.caption}),(0,V.jsxs)(`span`,{className:`text-[11px] font-mono text-slate-400 shrink-0`,children:[n+1,` / `,o.length]})]})]}),o.length>1&&(0,V.jsx)(`div`,{className:`grid grid-cols-4 sm:grid-cols-5 gap-2.5`,children:o.map((e,t)=>(0,V.jsx)(`button`,{type:`button`,onClick:()=>r(t),className:`rounded-lg overflow-hidden aspect-video border-2 transition-all cursor-pointer ${t===n?`border-amber-400 scale-[1.02] opacity-100 shadow-md`:`border-white/15 opacity-60 hover:opacity-95`}`,children:(0,V.jsx)(`img`,{src:Q(e.src),alt:e.caption,className:`w-full h-full object-cover`})},e.src))})]}),(0,V.jsxs)(`div`,{className:`lg:col-span-5 space-y-5`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h4`,{className:`text-xs font-mono uppercase tracking-widest text-slate-400 mb-2`,children:`Behind the Scenes`}),(0,V.jsx)(`p`,{className:`text-sm sm:text-base text-slate-100 leading-relaxed`,children:e.story})]}),(0,V.jsxs)(`div`,{className:`p-4 rounded-xl border-l-4 ${a.whyBox}`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-bold mb-1`,children:[(0,V.jsx)(If,{className:`w-3.5 h-3.5`}),(0,V.jsx)(`span`,{children:`How This Shapes My Game Development`})]}),(0,V.jsx)(`p`,{className:`text-xs sm:text-sm leading-relaxed`,children:e.whyItMattersForGames})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h4`,{className:`text-xs font-mono uppercase tracking-widest text-slate-400 mb-2.5`,children:`Key Highlights`}),(0,V.jsx)(`ul`,{className:`space-y-2`,children:e.highlights.map(e=>(0,V.jsxs)(`li`,{className:`flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed`,children:[(0,V.jsx)(Ed,{className:`w-4 h-4 text-amber-400 shrink-0 mt-0.5`}),(0,V.jsx)(`span`,{children:e})]},e))})]})]})]})})]})})()},e.id)})]})}var Gp={};(function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D==`function`&&typeof DOMMatrix==`function`,s=(function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext(`2d`);n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,`no-repeat`)}catch{return!1}return!0})();function c(){}function l(e){var r=n.exports.Promise,i=r===void 0?t.Promise:r;return typeof i==`function`?new i(e):(e(c,c),null)}var u=(function(e,t){return{transform:function(n){if(e)return n;if(t.has(n))return t.get(n);var r=new OffscreenCanvas(n.width,n.height);return r.getContext(`2d`).drawImage(n,0,0),t.set(n,r),r},clear:function(){t.clear()}}})(s,new Map),d=function(){var e,t,n={},r=0;return typeof requestAnimationFrame==`function`&&typeof cancelAnimationFrame==`function`?(e=function(e){var t=Math.random();return n[t]=requestAnimationFrame(function i(a){r===a||r+16-1<a?(r=a,delete n[t],e()):n[t]=requestAnimationFrame(i)}),t},t=function(e){n[e]&&cancelAnimationFrame(n[e])}):(e=function(e){return setTimeout(e,16)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),f=(function(){var t,n,i={};function o(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=l(function(a){function c(t){t.data.callback===s&&(delete i[s],e.removeEventListener(`message`,c),n=null,u.clear(),o(),a())}e.addEventListener(`message`,c),t(r,s),i[s]=c.bind(null,{data:{callback:s}})}),n},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}return function(){if(t)return t;if(!r&&a){var n=[`var CONFETTI, SIZE = {}, module = {};`,`(`+e.toString()+`)(this, module, true, SIZE);`,`onmessage = function(msg) {`,`  if (msg.data.options) {`,`    CONFETTI(msg.data.options).then(function () {`,`      if (msg.data.callback) {`,`        postMessage({ callback: msg.data.callback });`,`      }`,`    });`,`  } else if (msg.data.reset) {`,`    CONFETTI && CONFETTI.reset();`,`  } else if (msg.data.resize) {`,`    SIZE.width = msg.data.resize.width;`,`    SIZE.height = msg.data.resize.height;`,`  } else if (msg.data.canvas) {`,`    SIZE.width = msg.data.canvas.width;`,`    SIZE.height = msg.data.canvas.height;`,`    CONFETTI = module.exports.create(msg.data.canvas);`,`  }`,`}`].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([n])))}catch(e){return typeof console<`u`&&typeof console.warn==`function`&&console.warn(`🎊 Could not load worker`,e),null}o(t)}return t}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:[`square`,`circle`],zIndex:100,colors:[`#26ccff`,`#a25afd`,`#ff5e7e`,`#88ff5a`,`#fcff42`,`#ffa62d`,`#ff36ff`],disableForReducedMotion:!1,scalar:1};function m(e,t){return t?t(e):e}function h(e){return e!=null}function g(e,t,n){return m(e&&h(e[t])?e[t]:p[t],n)}function _(e){return e<0?0:Math.floor(e)}function v(e,t){return Math.floor(Math.random()*(t-e))+e}function y(e){return parseInt(e,16)}function b(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,``);return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function S(e){var t=g(e,`origin`,Object);return t.x=g(t,`x`,Number),t.y=g(t,`y`,Number),t}function ee(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function te(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function C(e){var t=document.createElement(`canvas`);return t.style.position=`fixed`,t.style.top=`0px`,t.style.left=`0px`,t.style.pointerEvents=`none`,t.style.zIndex=e,t}function w(e,t,n,r,i,a,o,s,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,c),e.restore()}function T(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*.5+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function E(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle=`rgba(`+t.color.r+`, `+t.color.g+`, `+t.color.b+`, `+(1-n)+`)`,e.beginPath(),o&&t.shape.type===`path`&&typeof t.shape.path==`string`&&Array.isArray(t.shape.matrix))e.fill(oe(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(a-r)*.1,Math.abs(s-i)*.1,Math.PI/10*t.wobble));else if(t.shape.type===`bitmap`){var c=Math.PI/10*t.wobble,l=Math.abs(a-r)*.1,d=Math.abs(s-i)*.1,f=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,m=new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*d,Math.cos(c)*d,t.x,t.y]);m.multiplySelf(new DOMMatrix(t.shape.matrix));var h=e.createPattern(u.transform(t.shape.bitmap),`no-repeat`);h.setTransform(m),e.globalAlpha=1-n,e.fillStyle=h,e.fillRect(t.x-f/2,t.y-p/2,f,p),e.globalAlpha=1}else if(t.shape===`circle`)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):w(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape===`star`)for(var g=Math.PI/2*3,_=4*t.scalar,v=8*t.scalar,y=t.x,b=t.y,x=5,S=Math.PI/x;x--;)y=t.x+Math.cos(g)*v,b=t.y+Math.sin(g)*v,e.lineTo(y,b),g+=S,y=t.x+Math.cos(g)*_,b=t.y+Math.sin(g)*_,e.lineTo(y,b),g+=S;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function ne(e,t,n,a,o){var s=t.slice(),c=e.getContext(`2d`),f,p,m=l(function(t){function l(){f=p=null,c.clearRect(0,0,a.width,a.height),u.clear(),o(),t()}function m(){r&&(a.width!==i.width||a.height!==i.height)&&(a.width=e.width=i.width,a.height=e.height=i.height),!a.width&&!a.height&&(n(e),a.width=e.width,a.height=e.height),c.clearRect(0,0,a.width,a.height),s=s.filter(function(e){return E(c,e)}),s.length?f=d.frame(m):l()}f=d.frame(m),p=l});return{addFettis:function(e){return s=s.concat(e),m},canvas:e,promise:m,reset:function(){f&&d.cancel(f),p&&p()}}}function re(e,n){var r=!e,i=!!g(n||{},`resize`),o=!1,s=g(n,`disableForReducedMotion`,Boolean),c=a&&g(n||{},`useWorker`)?f():null,u=r?ee:te,d=e&&c?!!e.__confetti_initialized:!1,p=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion)`).matches,m;function h(t,n,r){for(var i=g(t,`particleCount`,_),a=g(t,`angle`,Number),o=g(t,`spread`,Number),s=g(t,`startVelocity`,Number),c=g(t,`decay`,Number),l=g(t,`gravity`,Number),d=g(t,`drift`,Number),f=g(t,`colors`,b),p=g(t,`ticks`,Number),h=g(t,`shapes`),y=g(t,`scalar`),x=!!g(t,`flat`),ee=S(t),te=i,C=[],w=e.width*ee.x,E=e.height*ee.y;te--;)C.push(T({x:w,y:E,angle:a,spread:o,startVelocity:s,color:f[te%f.length],shape:h[v(0,h.length)],ticks:p,decay:c,gravity:l,drift:d,scalar:y,flat:x}));return m?m.addFettis(C):(m=ne(e,C,u,n,r),m.promise)}function y(n){var a=s||g(n,`disableForReducedMotion`,Boolean),f=g(n,`zIndex`,Number);if(a&&p)return l(function(e){e()});r&&m?e=m.canvas:r&&!e&&(e=C(f),document.body.appendChild(e)),i&&!d&&u(e);var _={width:e.width,height:e.height};c&&!d&&c.init(e),d=!0,c&&(e.__confetti_initialized=!0);function v(){if(c){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};u(t),c.postMessage({resize:{width:t.width,height:t.height}})}else _.width=_.height=null}function y(){m=null,i&&(o=!1,t.removeEventListener(`resize`,v)),r&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,d=!1)}return i&&!o&&(o=!0,t.addEventListener(`resize`,v,!1)),c?c.fire(n,_,y):h(n,_,y)}return y.reset=function(){c&&c.reset(),m&&m.reset()},y}var ie;function ae(){return ie||=re(null,{useWorker:!0,resize:!0}),ie}function oe(e,t,n,r,i,a,o){var s=new Path2D(e),c=new Path2D;c.addPath(s,new DOMMatrix(t));var l=new Path2D;return l.addPath(c,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),l}function se(e){if(!o)throw Error(`path confetti are not supported in this browser`);var t,n;typeof e==`string`?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement(`canvas`).getContext(`2d`);if(!n){for(var a=1e3,s=a,c=a,l=0,u=0,d,f,p=0;p<a;p+=2)for(var m=0;m<a;m+=2)i.isPointInPath(r,p,m,`nonzero`)&&(s=Math.min(s,p),c=Math.min(c,m),l=Math.max(l,p),u=Math.max(u,m));d=l-s,f=u-c;var h=10,g=Math.min(h/d,h/f);n=[g,0,0,g,-Math.round(d/2+s)*g,-Math.round(f/2+c)*g]}return{type:`path`,path:t,matrix:n}}function ce(e){var t,n=1,r=`#000000`,i=`"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`;typeof e==`string`?t=e:(t=e.text,n=`scalar`in e?e.scalar:n,i=`fontFamily`in e?e.fontFamily:i,r=`color`in e?e.color:r);var a=10*n,o=``+a+`px `+i,s=new OffscreenCanvas(a,a),c=s.getContext(`2d`);c.font=o;var l=c.measureText(t),u=Math.ceil(l.actualBoundingBoxRight+l.actualBoundingBoxLeft),d=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent),f=2,p=l.actualBoundingBoxLeft+f,m=l.actualBoundingBoxAscent+f;u+=f+f,d+=f+f,s=new OffscreenCanvas(u,d),c=s.getContext(`2d`),c.font=o,c.fillStyle=r,c.fillText(t,p,m);var h=1/n;return{type:`bitmap`,bitmap:s.transferToImageBitmap(),matrix:[h,0,0,h,-u*h/2,-d*h/2]}}n.exports=function(){return ae().apply(this,arguments)},n.exports.reset=function(){ae().reset()},n.exports.create=re,n.exports.shapeFromPath=se,n.exports.shapeFromText=ce})((function(){return typeof window<`u`?window:typeof self<`u`?self:this||{}})(),Gp,!1);var Kp=Gp.exports;Gp.exports.create;function qp(){let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)({name:``,email:``,subject:`Game Design Inquiry`,message:``}),[i,a]=(0,_.useState)({type:null,message:``});return(0,V.jsx)(`section`,{id:`contact`,className:`relative w-full bg-dossier-grid border-t border-slate-800/90 text-slate-100 py-20 px-4`,children:(0,V.jsxs)(`div`,{className:`max-w-6xl mx-auto`,children:[(0,V.jsxs)(`div`,{className:`text-center max-w-2xl mx-auto mb-14`,children:[(0,V.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-700 text-sky-300 text-xs font-mono uppercase tracking-wider mb-4`,children:[(0,V.jsx)(sf,{className:`w-3.5 h-3.5 text-sky-400`}),(0,V.jsx)(`span`,{children:`Studio Inquiries & Recruitment`})]}),(0,V.jsx)(`h2`,{className:`text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-['Syne',sans-serif]`,children:`Direct Studio Contact`}),(0,V.jsx)(`p`,{className:`text-slate-300 text-base sm:text-lg`,children:`Currently open to Technical Game Design, Systems Engineering, and Technical Artist roles across AAA and independent studios.`})]}),(0,V.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start`,children:[(0,V.jsxs)(U.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:`lg:col-span-5 space-y-4`,children:[(0,V.jsxs)(`div`,{className:`p-6 rounded-xl bg-[#0c121e] border border-slate-700/80 shadow-xl`,children:[(0,V.jsx)(`h3`,{className:`text-xs font-mono uppercase tracking-wider text-sky-400 mb-2`,children:`Primary Correspondence`}),(0,V.jsx)(`p`,{className:`text-sm text-slate-300 mb-4`,children:`Click below to copy my direct email address to your clipboard:`}),(0,V.jsxs)(`button`,{onClick:()=>{navigator.clipboard.writeText(np.email),t(!0),Kp({particleCount:50,spread:60,origin:{y:.8},colors:[`#38bdf8`,`#6366f1`,`#10b981`]}),setTimeout(()=>t(!1),2500)},className:`w-full flex items-center justify-between p-3.5 rounded-lg bg-[#080c14] hover:bg-slate-900 border border-slate-700 text-white font-mono text-xs sm:text-sm transition-all group cursor-pointer`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2.5 truncate`,children:[(0,V.jsx)(sf,{className:`w-4 h-4 text-sky-400 shrink-0`}),(0,V.jsx)(`span`,{className:`truncate`,children:np.email})]}),(0,V.jsx)(`div`,{className:`shrink-0 p-1.5 rounded bg-sky-500/20 text-sky-300 group-hover:bg-sky-500/30 transition-colors`,children:e?(0,V.jsx)(gd,{className:`w-4 h-4 text-emerald-400`}):(0,V.jsx)(Pd,{className:`w-4 h-4`})})]}),e&&(0,V.jsxs)(U.p,{initial:{opacity:0,y:-5},animate:{opacity:1,y:0},className:`text-xs text-emerald-400 font-medium mt-2 flex items-center gap-1`,children:[(0,V.jsx)(gd,{className:`w-3.5 h-3.5`}),` Email copied to clipboard!`]})]}),(0,V.jsxs)(`div`,{className:`p-6 rounded-xl bg-[#0c121e] border border-slate-700/80 shadow-lg`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-3`,children:[(0,V.jsx)(lf,{className:`w-4 h-4 text-sky-400`}),(0,V.jsx)(`span`,{children:`Location & Availability`})]}),(0,V.jsx)(`div`,{className:`text-base font-bold text-white mb-1`,children:`London, England, UK (GMT / BST)`}),(0,V.jsx)(`p`,{className:`text-xs text-slate-300`,children:`Available for hybrid or on-site studio roles in London and remote opportunities worldwide.`})]}),(0,V.jsxs)(`div`,{className:`grid grid-cols-3 gap-3`,children:[(0,V.jsxs)(`a`,{href:np.linkedin,target:`_blank`,rel:`noopener noreferrer`,className:`flex flex-col items-center justify-center p-3.5 rounded-xl bg-[#0c121e] hover:bg-slate-800 border border-slate-700/80 hover:border-sky-500/50 text-slate-300 hover:text-white transition-all text-xs font-medium`,children:[(0,V.jsx)(tp,{className:`w-5 h-5 text-sky-400 mb-1`}),(0,V.jsx)(`span`,{children:`LinkedIn`})]}),(0,V.jsxs)(`a`,{href:np.github,target:`_blank`,rel:`noopener noreferrer`,className:`flex flex-col items-center justify-center p-3.5 rounded-xl bg-[#0c121e] hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 text-slate-300 hover:text-white transition-all text-xs font-medium`,children:[(0,V.jsx)(ep,{className:`w-5 h-5 text-slate-200 mb-1`}),(0,V.jsx)(`span`,{children:`GitHub`})]}),(0,V.jsxs)(`a`,{href:np.itch,target:`_blank`,rel:`noopener noreferrer`,className:`flex flex-col items-center justify-center p-3.5 rounded-xl bg-[#0c121e] hover:bg-slate-800 border border-slate-700/80 hover:border-rose-500/50 text-slate-300 hover:text-white transition-all text-xs font-medium`,children:[(0,V.jsx)(Kd,{className:`w-5 h-5 text-rose-400 mb-1`}),(0,V.jsx)(`span`,{children:`Itch.io`})]})]})]}),(0,V.jsxs)(U.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:`lg:col-span-7 p-6 sm:p-8 rounded-xl bg-[#0c121e] border border-slate-700/80 shadow-xl`,children:[(0,V.jsxs)(`div`,{className:`flex items-center justify-between pb-4 mb-6 border-b border-slate-800`,children:[(0,V.jsx)(`h3`,{className:`text-xl font-bold text-white font-['Syne',sans-serif]`,children:`Send a Direct Studio Inquiry`}),(0,V.jsx)(`span`,{className:`text-[10px] font-mono uppercase tracking-widest text-slate-400`,children:`FORM // DIRECT-MAILTO`})]}),(0,V.jsxs)(`form`,{onSubmit:e=>{if(e.preventDefault(),!n.name||!n.email||!n.message){a({type:`error`,message:`Please complete all required fields.`});return}let t=`mailto:${np.email}?subject=${encodeURIComponent(`[Portfolio Inquiry] ${n.subject} - ${n.name}`)}&body=${encodeURIComponent(`Name: ${n.name}\nEmail: ${n.email}\n\nMessage:\n${n.message}`)}`;window.location.href=t,a({type:`success`,message:`Opening your default email client to send message...`}),Kp({particleCount:80,spread:80,origin:{y:.6}})},className:`space-y-4`,children:[(0,V.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-4`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`label`,{className:`block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5`,children:`Your Name *`}),(0,V.jsx)(`input`,{type:`text`,required:!0,value:n.name,onChange:e=>r({...n,name:e.target.value}),placeholder:`e.g. Alex Smith`,className:`w-full px-4 py-3 rounded-lg bg-[#080c14] border border-slate-700 focus:border-sky-400 focus:outline-none text-white text-sm transition-colors`})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`label`,{className:`block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5`,children:`Your Email *`}),(0,V.jsx)(`input`,{type:`email`,required:!0,value:n.email,onChange:e=>r({...n,email:e.target.value}),placeholder:`alex@studio.com`,className:`w-full px-4 py-3 rounded-lg bg-[#080c14] border border-slate-700 focus:border-sky-400 focus:outline-none text-white text-sm transition-colors`})]})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`label`,{className:`block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5`,children:`Inquiry Topic`}),(0,V.jsxs)(`select`,{value:n.subject,onChange:e=>r({...n,subject:e.target.value}),className:`w-full px-4 py-3 rounded-lg bg-[#080c14] border border-slate-700 focus:border-sky-400 focus:outline-none text-white text-sm transition-colors`,children:[(0,V.jsx)(`option`,{value:`Game Design Role`,children:`Technical Game Designer Role`}),(0,V.jsx)(`option`,{value:`Systems / Shader Engineering`,children:`Systems / Shader Engineering`}),(0,V.jsx)(`option`,{value:`Narrative Systems Opportunity`,children:`Narrative Architecture Opportunity`}),(0,V.jsx)(`option`,{value:`Contract / Prototype Project`,children:`Contract / Prototype Project`}),(0,V.jsx)(`option`,{value:`General Conversation`,children:`General Conversation`})]})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`label`,{className:`block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5`,children:`Message *`}),(0,V.jsx)(`textarea`,{required:!0,rows:4,value:n.message,onChange:e=>r({...n,message:e.target.value}),placeholder:`Tell me about the role, project, or technical challenge...`,className:`w-full px-4 py-3 rounded-lg bg-[#080c14] border border-slate-700 focus:border-sky-400 focus:outline-none text-white text-sm transition-colors resize-none`})]}),i.message&&(0,V.jsx)(`div`,{className:`p-3 rounded-lg text-xs font-medium ${i.type===`success`?`bg-emerald-950/60 text-emerald-300 border border-emerald-500/30`:`bg-rose-950/60 text-rose-300 border border-rose-500/30`}`,children:i.message}),(0,V.jsxs)(`button`,{type:`submit`,className:`w-full py-3.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer`,children:[(0,V.jsx)(Mf,{className:`w-4 h-4`}),(0,V.jsx)(`span`,{children:`Launch Email Draft`})]})]})]})]})]})})}var Jp=new Date().getFullYear();function Yp(){let[e,t]=(0,_.useState)(0),[n,r]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{let e=()=>{let e=document.documentElement.scrollHeight-window.innerHeight,n=window.scrollY/e*100;t(n),r(window.scrollY>400)};return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`footer`,{className:`relative py-12 px-4 border-t border-white/[0.08] bg-[#05060a]`,children:(0,V.jsxs)(`div`,{className:`max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,V.jsx)(`img`,{src:Q(`/images/logos/3j-logo.png`),alt:`3J Studio Logo`,className:`w-10 h-10 rounded-xl object-contain bg-white/5 border border-white/10 p-1 shrink-0 shadow-md`}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`div`,{className:`font-extrabold text-white text-base tracking-tight font-['Syne',sans-serif]`,children:`Joshua Johnson`}),(0,V.jsx)(`p`,{className:`text-xs text-slate-400 mt-0.5`,children:`Technical Game Designer • Unreal Engine 5 • London, UK`})]})]}),(0,V.jsx)(`div`,{className:`flex flex-col sm:flex-row items-center gap-3 text-xs text-slate-400 font-mono`,children:(0,V.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,V.jsx)(Ad,{className:`w-3.5 h-3.5 text-indigo-400`}),(0,V.jsx)(`span`,{children:`Built with React, Vite & Tailwind CSS`})]})}),(0,V.jsxs)(`div`,{className:`text-xs text-slate-400`,children:[`© `,Jp,` Joshua Johnson. All rights reserved.`]})]})}),n&&(0,V.jsxs)(`button`,{onClick:()=>{window.scrollTo({top:0,behavior:`smooth`})},"aria-label":`Scroll to top`,className:`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#0c0e1c]/90 border border-indigo-500/40 text-indigo-300 hover:text-white hover:bg-indigo-600/30 backdrop-blur-xl shadow-2xl hover:scale-110 active:scale-95 transition-all group`,children:[(0,V.jsx)(cd,{className:`w-5 h-5 group-hover:-translate-y-0.5 transition-transform`}),(0,V.jsxs)(`svg`,{className:`absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5`,children:[(0,V.jsx)(`circle`,{cx:`50%`,cy:`50%`,r:`20`,className:`stroke-white/10`,strokeWidth:`2`,fill:`none`}),(0,V.jsx)(`circle`,{cx:`50%`,cy:`50%`,r:`20`,className:`stroke-indigo-400`,strokeWidth:`2`,strokeDasharray:`125.6`,strokeDashoffset:125.6-125.6*e/100,strokeLinecap:`round`,fill:`none`})]})]})]})}var $=(e,t=1)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)},Xp=[[0,0],[33,0],[66,0],[100,0],[100,33],[100,66],[100,100],[66,100],[33,100],[0,100],[0,66],[0,33]],Zp=[50+($(1,4)-.5)*6,50+($(2,4)-.5)*6],Qp=Xp.map(([e,t],n)=>{let r=.42+$(n,7)*.12;return[Zp[0]+(e-Zp[0])*r+($(n,8)-.5)*6,Zp[1]+(t-Zp[1])*r+($(n,9)-.5)*6]}),$p=Xp.flatMap((e,t)=>{let n=(t+1)%Xp.length,r=[Zp,Qp[t],Qp[n]],i=[Qp[t],e,Xp[n],Qp[n]];return[{pts:r,ring:0,seed:t},{pts:i,ring:1,seed:t+20}]}).map(e=>{let t=e.pts.reduce((e,t)=>e+t[0],0)/e.pts.length,n=e.pts.reduce((e,t)=>e+t[1],0)/e.pts.length;return{...e,cx:t,cy:n}}),em=Xp.map((e,t)=>{let n=(t+1)%Xp.length;return`M${Zp[0]} ${Zp[1]} L${Qp[t][0]} ${Qp[t][1]} L${e[0]} ${e[1]} M${Qp[t][0]} ${Qp[t][1]} L${Qp[n][0]} ${Qp[n][1]}`});function tm(){return(0,V.jsxs)(U.div,{className:`absolute inset-0`,animate:{x:[0,0,-4,4,-3,3,0]},transition:{duration:.9,times:[0,.4,.5,.6,.7,.8,1]},children:[$p.map((e,t)=>{let n=115+$(e.seed,2)*90,r=($(e.seed,3)-.5)*70,i=.8+e.ring*.18+$(e.seed,5)*.22;return(0,V.jsx)(U.div,{initial:{y:`0%`,rotate:0},animate:{y:`140%`,rotate:r},transition:{delay:i,duration:.95,ease:[.55,0,.9,.45]},className:`absolute inset-0 transform-gpu will-change-transform`,style:{clipPath:`polygon(${e.pts.map(e=>`${e[0]}% ${e[1]}%`).join(`,`)})`,transformOrigin:`${e.cx}% ${e.cy}%`,background:`linear-gradient(${n}deg, rgba(235,250,255,0.98) 0%, rgba(147,214,252,0.95) 38%, rgba(34,128,200,0.96) 100%)`}},t)}),(0,V.jsx)(`svg`,{viewBox:`0 0 100 100`,preserveAspectRatio:`none`,className:`absolute inset-0 w-full h-full fill-none`,children:em.map((e,t)=>(0,V.jsx)(U.path,{d:e,stroke:`#ffffff`,strokeWidth:`1.6`,strokeLinecap:`round`,vectorEffect:`non-scaling-stroke`,style:{filter:`drop-shadow(0 0 3px rgba(125,211,252,1))`},initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:[0,1,1,0]},transition:{duration:.9,delay:.1+$(t,6)*.25,times:[0,.2,.85,1],ease:`easeOut`}},t))}),(0,V.jsx)(U.div,{initial:{opacity:0},animate:{opacity:[0,.85,0]},transition:{duration:.35,delay:.1},className:`absolute inset-0`,style:{background:`radial-gradient(circle at 50% 50%, rgba(255,255,255,0.95), transparent 55%)`}})]})}var nm=15;function rm(){let e=`ink-${(0,_.useId)().replace(/:/g,``)}`;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`svg`,{width:`0`,height:`0`,className:`absolute`,"aria-hidden":`true`,children:(0,V.jsx)(`defs`,{children:(0,V.jsxs)(`filter`,{id:e,children:[(0,V.jsx)(`feGaussianBlur`,{in:`SourceGraphic`,stdDeviation:`9`,result:`blur`}),(0,V.jsx)(`feColorMatrix`,{in:`blur`,mode:`matrix`,values:`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10`})]})})}),(0,V.jsx)(`div`,{className:`absolute inset-0`,style:{filter:`url(#${e})`},children:Array.from({length:nm}).map((e,t)=>{let n=4+$(t,11)*22;return(0,V.jsx)(U.div,{initial:{y:`-130%`},animate:{y:[`-130%`,`0%`,`0%`,`130%`]},transition:{duration:2.7,delay:$(t,12)*.32,times:[0,.3,.52,1],ease:[`easeIn`,`linear`,`easeIn`]},className:`absolute top-0 bg-[#010204] transform-gpu will-change-transform`,style:{left:`${t/nm*100-1}%`,width:`8.666666666666668%`,bottom:`${-n}%`,borderRadius:`0 0 999px 999px / 0 0 90px 90px`}},t)})})]})}var im=Array.from({length:96}).map((e,t)=>{let n=$(t,1)*100;return{left:$(t,2)*100,top:n,size:54+$(t,3)*60,rot:$(t,4)*360,spin:160+$(t,5)*260,sway:18+$(t,6)*36,delay:.35+(100-n)/100*.9+$(t,7)*.25,tone:t%3}}),am=[`#10b981`,`#059669`,`#15803d`];function om(){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(U.div,{initial:{opacity:1},animate:{opacity:0},transition:{duration:1.1,delay:.7,ease:`easeOut`},className:`absolute inset-0 bg-[#04180c]`}),im.map((e,t)=>(0,V.jsx)(U.div,{initial:{y:0,x:0,rotate:e.rot,opacity:1},animate:{y:1400,x:[0,e.sway,-e.sway,e.sway*.5],rotate:e.rot+e.spin},transition:{delay:e.delay,duration:1.5,ease:[.5,0,.9,.5]},className:`absolute pointer-events-none transform-gpu will-change-transform`,style:{left:`${e.left}%`,top:`${e.top}%`,width:e.size,height:e.size*1.3},children:(0,V.jsxs)(`svg`,{viewBox:`0 0 24 32`,className:`w-full h-full`,children:[(0,V.jsx)(`path`,{d:`M12 2 C6 7 2 14 2 20 C2 26 6.5 30 12 30 C17.5 30 22 26 22 20 C22 14 18 7 12 2 Z`,fill:am[e.tone]}),(0,V.jsx)(`path`,{d:`M12 4 L12 29`,stroke:`#6ee7b7`,strokeWidth:`1.2`,strokeLinecap:`round`}),(0,V.jsx)(`path`,{d:`M12 10 L6 14 M12 10 L18 14 M12 16 L5 21 M12 16 L19 21 M12 22 L7 26 M12 22 L17 26`,stroke:`#a7f3d0`,strokeWidth:`0.8`,strokeLinecap:`round`})]})},t))]})}function sm(){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(U.div,{initial:{opacity:1},animate:{opacity:[1,1,.5,1,.3,1,.8,0]},transition:{duration:2.3,times:[0,.45,.52,.58,.64,.74,.8,1],ease:`linear`},className:`absolute inset-0 bg-[#10020a]`}),(0,V.jsx)(U.div,{initial:{opacity:0},animate:{opacity:[0,.35,0,.5,0]},transition:{duration:1.1,delay:.7,times:[0,.2,.45,.7,1]},className:`absolute inset-0`,style:{background:`radial-gradient(ellipse at 50% 50%, rgba(225,29,72,0.7), transparent 70%)`}}),(0,V.jsx)(`svg`,{viewBox:`0 0 600 100`,preserveAspectRatio:`none`,className:`absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-1/3 fill-none`,children:(0,V.jsx)(U.path,{d:`M0 50 L170 50 L190 50 L205 14 L222 86 L240 4 L258 70 L275 50 L330 50 L345 22 L360 76 L378 12 L396 62 L412 50 L600 50`,stroke:`#fb7185`,strokeWidth:`3`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`,style:{filter:`drop-shadow(0 0 6px rgba(251,113,133,1))`},initial:{pathLength:0},animate:{pathLength:1},transition:{duration:1.1,ease:`linear`}})}),(0,V.jsx)(U.div,{initial:{opacity:0},animate:{opacity:[0,1,0,1,0]},transition:{duration:.55,delay:1.2,times:[0,.1,.35,.5,1]},className:`absolute inset-0 bg-white`})]})}var cm=[{x:-30,y:-25,c:`rgba(168,85,247,0.9)`,s:520,tx:-35,ty:-30},{x:25,y:-30,c:`rgba(99,102,241,0.85)`,s:480,tx:35,ty:-25},{x:-20,y:25,c:`rgba(236,72,153,0.7)`,s:460,tx:-30,ty:35},{x:30,y:20,c:`rgba(56,189,248,0.7)`,s:500,tx:35,ty:30},{x:0,y:0,c:`rgba(192,132,252,0.9)`,s:560,tx:0,ty:-10}],lm=Array.from({length:56}).map((e,t)=>({left:$(t,21)*100,top:$(t,22)*100,size:2+$(t,23)*4,rise:160+$(t,24)*360,delay:$(t,25)*.7}));function um(){return(0,V.jsxs)(U.div,{className:`absolute inset-0 transform-gpu will-change-transform`,initial:{rotate:0,scale:1},animate:{rotate:6,scale:1.25},transition:{duration:2.3,ease:`easeIn`},children:[(0,V.jsx)(U.div,{initial:{opacity:1},animate:{opacity:0},transition:{duration:1.3,delay:.8,ease:`easeIn`},className:`absolute inset-0 bg-[#0a0318]`}),cm.map((e,t)=>(0,V.jsx)(U.div,{initial:{opacity:.95,scale:.9,x:0,y:0},animate:{opacity:0,scale:2,x:`${e.tx}%`,y:`${e.ty}%`},transition:{duration:1.6,delay:.5+t*.1,ease:`easeIn`},className:`absolute rounded-full blur-3xl pointer-events-none transform-gpu will-change-transform`,style:{left:`calc(50% + ${e.x}% - ${e.s/2}px)`,top:`calc(50% + ${e.y}% - ${e.s/2}px)`,width:e.s,height:e.s,background:`radial-gradient(circle, ${e.c}, transparent 70%)`}},t)),lm.map((e,t)=>(0,V.jsx)(U.div,{initial:{opacity:0,y:0,scale:.4},animate:{opacity:[0,1,1,0],y:-e.rise,scale:[.4,1.2,1,.5]},transition:{duration:1.7,delay:e.delay,ease:`easeOut`},className:`absolute rounded-full bg-white pointer-events-none transform-gpu will-change-transform`,style:{left:`${e.left}%`,top:`${e.top}%`,width:e.size,height:e.size,boxShadow:`0 0 12px rgba(216,180,254,1)`}},t))]})}var dm=[{fill:`#0b4a5a`,delay:1.15,speed:2.6,dir:-1},{fill:`#0f766e`,delay:.95,speed:2.1,dir:1},{fill:`#14b8a6`,delay:.75,speed:1.8,dir:-1},{fill:`#99f6e4`,delay:.55,speed:1.5,dir:1}];function fm(){return(0,V.jsx)(V.Fragment,{children:dm.map((e,t)=>(0,V.jsxs)(U.div,{initial:{y:`0%`},animate:{y:`112%`},transition:{delay:e.delay,duration:1.15,ease:[.45,0,.7,1]},className:`absolute inset-0 transform-gpu will-change-transform`,children:[(0,V.jsx)(U.svg,{viewBox:`0 0 1200 40`,preserveAspectRatio:`none`,className:`absolute left-0 w-[200%] h-12 -top-[46px]`,initial:{x:e.dir===1?`-50%`:`0%`},animate:{x:e.dir===1?`0%`:`-50%`},transition:{duration:e.speed,repeat:1/0,ease:`linear`},children:(0,V.jsx)(`path`,{d:`M0 22 Q75 0 150 22 T300 22 T450 22 T600 22 T750 22 T900 22 T1050 22 T1200 22 V40 H0 Z`,fill:e.fill})}),(0,V.jsx)(`div`,{className:`absolute inset-0`,style:{background:e.fill}})]},t))})}var pm=Array.from({length:12}).map((e,t)=>({cx:6+$(t,31)*88,cy:6+$(t,32)*88,delay:.2+$(t,33)*.9,max:38+$(t,34)*22}));function mm(){let e=`acid-${(0,_.useId)().replace(/:/g,``)}`;return(0,V.jsxs)(`svg`,{viewBox:`0 0 100 100`,preserveAspectRatio:`none`,className:`absolute inset-0 w-full h-full`,children:[(0,V.jsxs)(`defs`,{children:[(0,V.jsxs)(`mask`,{id:e,children:[(0,V.jsx)(`rect`,{width:`100`,height:`100`,fill:`white`}),pm.map((e,t)=>(0,V.jsx)(U.circle,{cx:e.cx,cy:e.cy,fill:`black`,initial:{r:0},animate:{r:e.max},transition:{delay:e.delay,duration:1.2,ease:[.3,.6,.5,1]}},t))]}),(0,V.jsx)(`pattern`,{id:`${e}-p`,width:`6`,height:`6`,patternUnits:`userSpaceOnUse`,patternTransform:`rotate(45)`,children:(0,V.jsx)(`rect`,{width:`3`,height:`6`,fill:`rgba(163,230,53,0.10)`})})]}),(0,V.jsxs)(`g`,{mask:`url(#${e})`,children:[(0,V.jsx)(`rect`,{width:`100`,height:`100`,fill:`#052e16`}),(0,V.jsx)(`rect`,{width:`100`,height:`100`,fill:`url(#${e}-p)`})]}),pm.map((e,t)=>(0,V.jsx)(U.circle,{cx:e.cx,cy:e.cy,fill:`none`,stroke:`#a3e635`,strokeWidth:`2.5`,vectorEffect:`non-scaling-stroke`,style:{filter:`drop-shadow(0 0 4px rgba(163,230,53,1))`},initial:{r:0,opacity:0},animate:{r:e.max,opacity:[0,1,1,0]},transition:{delay:e.delay,duration:1.2,times:[0,.1,.7,1],ease:[.3,.6,.5,1]}},t))]})}var hm=6,gm=4,_m=[`♠`,`♥`,`♣`,`♦`];function vm(){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(U.div,{initial:{opacity:1},animate:{opacity:0},transition:{duration:.6,delay:1},className:`absolute inset-0 bg-[#0f2a1a]`}),(0,V.jsx)(`div`,{className:`absolute inset-0 grid p-1`,style:{gridTemplateColumns:`repeat(${hm}, 1fr)`,gridTemplateRows:`repeat(${gm}, 1fr)`,perspective:1200},children:Array.from({length:24}).map((e,t)=>{let n=t%hm,r=Math.floor(t/hm),i=Math.hypot(n-5/2,r-3/2),a=t%2==0;return(0,V.jsx)(U.div,{initial:{rotateY:0,scale:1,opacity:1},animate:{rotateY:180,scale:[1,1.06,.7],opacity:[1,1,0]},transition:{delay:.35+i*.13,duration:.7,ease:`easeInOut`},className:`m-[3px] rounded-lg border-2 border-amber-400/80 flex items-center justify-center text-4xl sm:text-5xl select-none transform-gpu will-change-transform`,style:{background:a?`repeating-linear-gradient(45deg, #7f1d1d 0 6px, #450a0a 6px 12px)`:`repeating-linear-gradient(45deg, #1c1917 0 6px, #0c0a09 6px 12px)`,color:`rgba(251,191,36,0.85)`,backfaceVisibility:`hidden`},children:_m[t%4]},t)})})]})}var ym=9;function bm(){return(0,V.jsx)(`div`,{className:`absolute inset-0 flex flex-col`,children:Array.from({length:ym}).map((e,t)=>{let n=t%2==0,r=.2+t*.17;return(0,V.jsxs)(`div`,{className:`relative flex-1`,children:[(0,V.jsx)(U.div,{initial:{clipPath:`inset(0 0% 0 0%)`},animate:{clipPath:n?`inset(0 0% 0 100%)`:`inset(0 100% 0 0%)`},transition:{delay:r,duration:.5,ease:`linear`},className:`absolute inset-0 overflow-hidden`,children:(0,V.jsx)(`div`,{className:`absolute left-0 w-full`,style:{height:`900%`,top:`${-t*100}%`,background:`radial-gradient(ellipse at 30% 20%, #1f4d36 0%, #14382a 55%, #0c241b 100%)`},children:(0,V.jsxs)(`svg`,{viewBox:`0 0 100 100`,preserveAspectRatio:`none`,className:`w-full h-full fill-none`,style:{stroke:`rgba(255,255,255,0.55)`},children:[(0,V.jsx)(`path`,{d:`M8 14 L20 14 M8 19 L20 19 M26 11 L38 22 M38 11 L26 22`,strokeWidth:`1.1`,strokeLinecap:`round`,vectorEffect:`non-scaling-stroke`}),(0,V.jsx)(`path`,{d:`M58 14 L76 14 L67 30 Z`,strokeWidth:`1.1`,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`}),(0,V.jsx)(`path`,{d:`M12 44 Q22 36 30 46 T48 46 M60 40 L84 40 M60 46 L84 46 M60 52 L84 52`,strokeWidth:`1.1`,strokeLinecap:`round`,vectorEffect:`non-scaling-stroke`}),(0,V.jsx)(`path`,{d:`M10 70 L30 70 M10 76 L30 76 M40 66 L40 82 L56 82 M66 68 Q76 62 84 72 Q76 80 66 74`,strokeWidth:`1.1`,strokeLinecap:`round`,vectorEffect:`non-scaling-stroke`}),(0,V.jsx)(`path`,{d:`M14 92 L90 92`,strokeWidth:`1.4`,strokeLinecap:`round`,vectorEffect:`non-scaling-stroke`})]})})}),(0,V.jsx)(U.div,{initial:{left:n?`0%`:`100%`,opacity:1},animate:{left:n?`100%`:`0%`,opacity:[1,1,0]},transition:{delay:r,duration:.5,ease:`linear`},className:`absolute top-[6%] bottom-[6%] w-12 -ml-6 rounded-sm`,style:{background:`linear-gradient(180deg, #a3733b 0 30%, #e5dcc3 30% 100%)`,boxShadow:`0 0 14px rgba(255,255,255,0.45)`}})]},t)})})}function xm(){let e=`vhs-${(0,_.useId)().replace(/:/g,``)}`;return(0,V.jsxs)(U.div,{className:`absolute inset-0 bg-[#12031a] transform-gpu will-change-transform`,initial:{scaleY:1,opacity:1},animate:{scaleY:[1,1,.012,.012],opacity:[1,1,1,0]},transition:{duration:1.7,times:[0,.6,.82,1],ease:`easeInOut`},children:[(0,V.jsxs)(`svg`,{className:`absolute inset-0 w-full h-full opacity-40 mix-blend-screen`,"aria-hidden":`true`,children:[(0,V.jsxs)(`filter`,{id:e,children:[(0,V.jsx)(`feTurbulence`,{type:`fractalNoise`,baseFrequency:`0.85`,numOctaves:`2`,seed:`4`}),(0,V.jsx)(`feColorMatrix`,{type:`saturate`,values:`0`})]}),(0,V.jsx)(`rect`,{width:`100%`,height:`100%`,filter:`url(#${e})`})]}),(0,V.jsx)(`div`,{className:`absolute inset-0 opacity-30`,style:{background:`repeating-linear-gradient(0deg, rgba(0,0,0,0.5) 0 2px, transparent 2px 4px)`}}),Array.from({length:7}).map((e,t)=>(0,V.jsx)(U.div,{initial:{top:`${$(t,41)*90}%`,x:0},animate:{top:[`${$(t,41)*90}%`,`${$(t,42)*90}%`,`${$(t,43)*90}%`],x:[0,($(t,44)-.5)*120,($(t,45)-.5)*-120,0]},transition:{duration:.95,ease:`easeInOut`},className:`absolute inset-x-0 mix-blend-screen`,style:{height:`${3+$(t,46)*9}%`,background:`linear-gradient(180deg, rgba(217,70,239,0.55), rgba(255,255,255,0.35) 50%, rgba(34,211,238,0.5))`}},t)),(0,V.jsx)(U.div,{initial:{opacity:0},animate:{opacity:[0,0,1,.8]},transition:{duration:1.7,times:[0,.6,.82,1]},className:`absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 bg-white`,style:{boxShadow:`0 0 24px 6px rgba(240,171,252,0.9)`}})]})}var Sm=Array.from({length:11}).map((e,t)=>t*10);function Cm(){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(U.div,{initial:{opacity:1},animate:{opacity:0},transition:{duration:.9,delay:.7},className:`absolute inset-0 bg-[#070918]`}),(0,V.jsx)(U.svg,{viewBox:`0 0 100 100`,preserveAspectRatio:`none`,className:`absolute inset-0 w-full h-full fill-none stroke-indigo-400`,initial:{opacity:1},animate:{opacity:0},transition:{duration:.6,delay:1.5},children:Sm.map((e,t)=>(0,V.jsxs)(`g`,{children:[(0,V.jsx)(U.path,{d:`M${e} 0 L${e} 100`,strokeWidth:`1.2`,vectorEffect:`non-scaling-stroke`,initial:{pathLength:0},animate:{pathLength:1},transition:{duration:.6,delay:t*.04}}),(0,V.jsx)(U.path,{d:`M0 ${e} L100 ${e}`,strokeWidth:`1.2`,vectorEffect:`non-scaling-stroke`,initial:{pathLength:0},animate:{pathLength:1},transition:{duration:.6,delay:t*.04}})]},e))})]})}var wm={rastacats:tm,rem:rm,"planet-protectors":om,delirium:sm,daydream:um,"project-isla":fm,labrats:mm,labraz:mm,chanceway:vm,"baldis-basics-2":bm,waiwwai:xm};function Tm({projectId:e,animationKey:t=0}){let n=wm[e]||Cm;return(0,V.jsx)(`div`,{"aria-hidden":`true`,className:`pointer-events-none absolute inset-0 z-30 overflow-hidden`,children:(0,V.jsx)(n,{})},`${e}-${t}`)}function Em({project:e,onClose:t}){let n=xp(e?.id),r=e?.versions||e?.splitPhases||null,i=!!(r&&r.length>0),[a,o]=(0,_.useState)(e?.initialVersionIndex??e?.initialPhaseIndex??0),[s,c]=(0,_.useState)(e?.initialLightboxIndex===void 0?null:e.initialLightboxIndex),[l,u]=(0,_.useState)(`live`),[d,f]=(0,_.useState)(0),[p]=(0,_.useState)(0),m=i?r[a]:null,h=m?.image||e?.image,g=m?.gallery?.length>0?m.gallery:e?.gallery?.length>0?e.gallery:h?[h]:[];if((0,_.useEffect)(()=>{let e=e=>{s===null?e.key===`Escape`&&t():e.key===`Escape`?c(null):e.key===`ArrowRight`&&g.length>0?c(e=>(e+1)%g.length):e.key===`ArrowLeft`&&g.length>0&&c(e=>(e-1+g.length)%g.length)};return window.addEventListener(`keydown`,e),document.body.style.overflow=`hidden`,()=>{window.removeEventListener(`keydown`,e),document.body.style.overflow=`unset`}},[t,s,g.length]),!e)return null;let v=e.title,y=m?.label||m?.phaseSubtitle||e.tagline||e.categoryLabel,b=m?.summary||e.summary||e.shortDesc,x=m?.highlights||e.highlights||[],S=m?.technicalDeepDive||e.technicalDeepDive,ee=m?.videoPreview===void 0?m?.video===void 0?e.videoPreview||e.video:m.video:m.videoPreview,te=m?.engine||e.engine,C=m?.dates||e.dates,w=(e.marketingSite?.repoSlug?_p[e.marketingSite.repoSlug]:null)?.files||[],T=w[d]||w[0]||null,E=!!e.links?.demo&&e.links.demo.startsWith(`/games/`);return(0,V.jsx)($c,{children:(0,V.jsxs)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto`,children:[(0,V.jsx)(U.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:t,className:`fixed inset-0 bg-black/85 backdrop-blur-xl`}),(0,V.jsxs)(U.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{duration:.3,ease:[.16,1,.3,1]},className:`relative w-full max-w-4xl border rounded-3xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto ${n.modalClass}`,children:[(0,V.jsx)(Tm,{projectId:e?.id,animationKey:p}),(0,V.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2 px-6 py-4 border-b border-white/10 bg-[#090b16]/90 backdrop-blur-md relative z-10`,children:[(0,V.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2.5`,children:[(0,V.jsx)(`span`,{className:`text-xs font-semibold px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300`,children:e.discipline||e.categoryLabel}),(0,V.jsx)(`span`,{className:`text-xs font-mono text-slate-400 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10`,children:C}),e.marketingSite&&(0,V.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300`,children:[(0,V.jsx)(Xd,{className:`w-3.5 h-3.5 text-emerald-400`}),(0,V.jsx)(`span`,{children:`Embedded Companion Portal & Repo Code`})]}),e.gradeBadge&&(0,V.jsxs)(`span`,{className:`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300`,children:[(0,V.jsx)(ud,{className:`w-3.5 h-3.5 text-emerald-400`}),e.gradeBadge]})]}),(0,V.jsx)(`div`,{className:`flex items-center gap-2`,children:(0,V.jsx)(`button`,{type:`button`,onClick:t,className:`p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer`,"aria-label":`Close modal`,children:(0,V.jsx)(Zf,{className:`w-5 h-5`})})})]}),(0,V.jsxs)(`div`,{className:`overflow-y-auto p-6 sm:p-8 space-y-7 relative z-10`,children:[(0,V.jsx)(Mp,{projectId:e?.id,isModal:!0}),i&&(0,V.jsxs)(`div`,{className:`bg-[#080a15] border border-indigo-500/35 rounded-2xl p-4 shadow-xl`,children:[(0,V.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2 mb-3 px-1`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,V.jsx)(`span`,{className:`p-1.5 rounded-lg bg-indigo-500/20 text-emerald-400`,children:(0,V.jsx)(Ef,{className:`w-4 h-4`})}),(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`h4`,{className:`text-xs sm:text-sm font-bold text-white uppercase tracking-wider`,children:[e.title,`  -  Select Project Iteration`]}),(0,V.jsx)(`p`,{className:`text-[11px] text-slate-400`,children:`Compare the original prototype against the revisited remaster`})]})]}),(0,V.jsx)(`span`,{className:`text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/35 text-emerald-300 font-bold`,children:m?.badge||`Iteration ${a+1} of ${r.length}`})]}),(0,V.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-3`,children:r.map((e,t)=>{let n=a===t;return(0,V.jsxs)(`button`,{type:`button`,onClick:()=>{o(t),c(null)},className:`py-3.5 px-4 rounded-xl text-left transition-all cursor-pointer border flex flex-col justify-between gap-1.5 ${n?`bg-gradient-to-r from-indigo-950/90 via-indigo-900/80 to-violet-950/90 border-indigo-400 text-white shadow-lg shadow-indigo-950/60 ring-1 ring-indigo-400/50`:`bg-white/[0.03] hover:bg-white/[0.07] border-white/5 text-slate-300 hover:text-white`}`,children:[(0,V.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,V.jsxs)(`span`,{className:`text-xs sm:text-sm font-extrabold tracking-wide flex items-center gap-2`,children:[(0,V.jsx)(`span`,{className:`w-2.5 h-2.5 rounded-full shrink-0 ${n?`bg-emerald-400 animate-pulse`:`bg-slate-600`}`}),(0,V.jsx)(`span`,{children:e.label||e.phaseLabel})]}),e.badge&&(0,V.jsx)(`span`,{className:`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-500/40 shrink-0`,children:e.badge})]}),(0,V.jsxs)(`span`,{className:`text-[11px] font-mono text-indigo-200/80 pl-4`,children:[e.engine,` • `,e.dates]})]},e.id||t)})})]}),(0,V.jsx)(`div`,{className:`relative rounded-2xl overflow-hidden aspect-[16/9] max-h-96 bg-black border flex items-center justify-center transition-all ${n.mediaHolderClass}`,children:ee?(0,V.jsx)(`video`,{controls:!0,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:`auto`,poster:h?Q(h):void 0,className:`w-full h-full object-contain`,children:(0,V.jsx)(`source`,{src:Q(ee),type:`video/mp4`})},ee):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`img`,{src:Q(h),alt:v,className:`w-full h-full object-cover`}),(0,V.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-[#0d0f1e] via-transparent to-transparent opacity-80 pointer-events-none`})]})}),e.id===`rem`&&(0,V.jsxs)(`div`,{className:`p-3.5 rounded-2xl bg-gradient-to-r from-[#071324] via-[#0b1c36] to-[#071324] border border-cyan-400/40 shadow-lg flex flex-wrap items-center justify-between gap-3 select-none`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,V.jsx)(`img`,{src:Q(`/images/logos/myndwell-logo-white.png`),alt:`Myndwell Logo`,className:`w-8 h-8 object-contain shrink-0`}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`div`,{className:`text-xs font-bold font-mono tracking-wider text-white uppercase flex items-center gap-2`,children:(0,V.jsx)(`span`,{children:`MYNDWELL INTERNATIONAL // DIVISION OF NEURAL PARTITIONING`})}),(0,V.jsx)(`div`,{className:`text-[11px] font-mono text-cyan-300/80`,children:`CONFIDENTIAL RESEARCH SPECIFICATION: RAPID EYE MOVEMENT (REM) COGNITIVE RESET`})]})]}),(0,V.jsx)(`div`,{className:`px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-400/40 text-[10px] font-mono font-bold text-cyan-300`,children:`PROPERTY OF MYNDWELL CORP`})]}),e.id===`delirium`&&(0,V.jsxs)(`div`,{className:`p-3.5 rounded-2xl bg-gradient-to-r from-[#1a0808] via-[#260e0e] to-[#1a0808] border border-red-500/40 shadow-lg flex flex-wrap items-center justify-between gap-3 select-none`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,V.jsx)(`img`,{src:Q(`/images/logos/delirium-title-logo.png`),alt:`Delirium`,className:`h-6 object-contain shrink-0`}),(0,V.jsx)(`div`,{className:`text-[11px] font-mono text-red-300/80`,children:`ST. JUDE'S PSYCHIATRIC WARD // WHEELCHAIR INERTIA & QUANTUM FREEZE TEST BED`})]}),(0,V.jsx)(`div`,{className:`px-2.5 py-1 rounded-md bg-red-950/80 border border-red-500/40 text-[10px] font-mono font-bold text-red-300`,children:`LEVEL 5 TOP MARK SHOWCASE`})]}),e.id===`labrats`&&(0,V.jsxs)(`div`,{className:`p-3.5 rounded-2xl bg-gradient-to-r from-[#071a10] via-[#0d2a1b] to-[#071a10] border border-emerald-400/40 shadow-lg flex flex-wrap items-center justify-between gap-3 select-none`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,V.jsx)(`img`,{src:Q(`/images/logos/labrats-logo-transparent.png`),alt:`LabRats`,className:`w-8 h-8 object-contain shrink-0 filter drop-shadow-[0_0_6px_rgba(74,222,128,0.7)]`}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`div`,{className:`text-xs font-bold font-mono tracking-wider text-emerald-300 uppercase`,children:`LABRATS // BIOTECH RODENT EXPERIMENT`}),(0,V.jsx)(`div`,{className:`text-[11px] font-mono text-emerald-200/80`,children:`COOPERATIVE LABORATORY ESCAPE RUNTIME & LEVEL DESIGN`})]})]}),(0,V.jsx)(`div`,{className:`px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-400/40 text-[10px] font-mono font-bold text-emerald-300`,children:`RODENT SUBJECT #04`})]}),(0,V.jsxs)(`div`,{children:[i&&(0,V.jsx)(`div`,{className:`flex flex-wrap items-center gap-2 mb-2`,children:(0,V.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide uppercase bg-indigo-950/80 border border-indigo-500/40 text-indigo-300`,children:[(0,V.jsx)(ef,{className:`w-3.5 h-3.5 text-indigo-400`}),(0,V.jsx)(`span`,{children:m?.label||`Selected Iteration`})]})}),(0,V.jsx)(`h2`,{className:`text-2xl sm:text-4xl font-black text-white font-['Syne',sans-serif] tracking-tight`,children:v}),(0,V.jsxs)(`p`,{className:`text-sm font-semibold text-indigo-300 mt-1`,children:[y,` • `,(0,V.jsx)(`span`,{className:`font-mono text-slate-300`,children:te})]})]}),(0,V.jsxs)(`div`,{className:`relative p-5 rounded-2xl border transition-all overflow-hidden ${n.overviewHolderClass}`,children:[(0,V.jsx)(Np,{projectId:e?.id}),(0,V.jsxs)(`div`,{className:`flex items-center justify-between mb-2.5 relative z-10`,children:[(0,V.jsxs)(`h4`,{className:`text-xs font-mono uppercase tracking-wider text-indigo-300 font-bold flex items-center gap-2`,children:[(0,V.jsx)(ef,{className:`w-3.5 h-3.5 text-indigo-400`}),(0,V.jsx)(`span`,{children:`Project Overview`})]}),(0,V.jsx)(`span`,{className:`text-[10px] font-mono px-2.5 py-0.5 rounded bg-black/40 text-slate-300 border border-white/10`,children:`SPECIFICATION ARCHIVE`})]}),(0,V.jsx)(`p`,{className:`text-slate-200 text-sm sm:text-base leading-relaxed font-normal whitespace-pre-line relative z-10`,children:b})]}),e.marketingSite&&(0,V.jsxs)(`div`,{className:`rounded-2xl bg-[#060914] border-2 border-emerald-500/40 overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.12)]`,children:[(0,V.jsxs)(`div`,{className:`p-4 bg-gradient-to-r from-emerald-950/40 via-[#080d1a] to-indigo-950/40 border-b border-emerald-500/30 flex flex-wrap items-center justify-between gap-3`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`div`,{className:`inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-emerald-300 mb-1`,children:[(0,V.jsx)(Xd,{className:`w-3.5 h-3.5 text-emerald-400`}),(0,V.jsx)(`span`,{children:`EMBEDDED REPOSITORY BUILD & SOURCE CODE`})]}),(0,V.jsx)(`h4`,{className:`text-base font-bold text-white`,children:e.marketingSite.title}),(0,V.jsx)(`p`,{className:`text-xs text-slate-300 mt-0.5`,children:e.marketingSite.description})]}),(0,V.jsxs)(`div`,{className:`flex items-center gap-1.5 bg-black/60 p-1 rounded-xl border border-white/10`,children:[(0,V.jsxs)(`button`,{type:`button`,onClick:()=>u(`live`),className:`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${l===`live`?`bg-emerald-600 text-white shadow`:`text-slate-400 hover:text-white`}`,children:[(0,V.jsx)(Xd,{className:`w-3.5 h-3.5`}),(0,V.jsx)(`span`,{children:`Live Interactive Site`})]}),(0,V.jsxs)(`button`,{type:`button`,onClick:()=>u(`source`),className:`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${l===`source`?`bg-indigo-600 text-white shadow`:`text-slate-400 hover:text-white`}`,children:[(0,V.jsx)(Bd,{className:`w-3.5 h-3.5`}),(0,V.jsxs)(`span`,{children:[`Literal Repo Code (`,w.length,` Files)`]})]})]})]}),l===`live`?(0,V.jsxs)(`div`,{children:[(0,V.jsx)(bp,{src:Q(e.marketingSite.path),title:e.marketingSite.title}),(0,V.jsxs)(`div`,{className:`px-4 py-3 bg-[#080b16] border-t border-white/10 flex flex-wrap items-center justify-end gap-4 text-xs`,children:[(0,V.jsxs)(`a`,{href:e.marketingSite.repoUrl,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-1.5 font-mono text-slate-300 hover:text-white`,children:[(0,V.jsx)(ep,{className:`w-4 h-4`}),(0,V.jsx)(`span`,{children:`GitHub Repository`})]}),(0,V.jsxs)(`a`,{href:Q(e.marketingSite.path),target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-1.5 font-mono font-bold text-emerald-300 hover:text-emerald-200`,children:[(0,V.jsx)(`span`,{children:`Open Fullscreen in New Tab`}),(0,V.jsx)(Rd,{className:`w-3.5 h-3.5`})]})]})]}):(0,V.jsxs)(`div`,{children:[(0,V.jsxs)(`div`,{className:`px-4 py-2.5 bg-[#090d1a] border-b border-white/10 flex flex-wrap items-center justify-between gap-2`,children:[(0,V.jsx)(`div`,{className:`flex flex-wrap items-center gap-2`,children:w.map((e,t)=>(0,V.jsxs)(`button`,{type:`button`,onClick:()=>f(t),className:`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${d===t?`bg-indigo-600/40 text-white border border-indigo-400/50 font-bold`:`bg-white/5 text-slate-400 hover:text-slate-200`}`,children:[(0,V.jsx)(Bd,{className:`w-3.5 h-3.5 text-indigo-400`}),(0,V.jsx)(`span`,{children:e.name}),(0,V.jsxs)(`span`,{className:`text-[10px] text-emerald-300`,children:[`(`,e.totalLines,` lines)`]})]},e.name))}),(0,V.jsxs)(`a`,{href:e.marketingSite.repoUrl,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-1.5 text-xs font-mono text-indigo-300 hover:text-white`,children:[(0,V.jsx)(ep,{className:`w-4 h-4`}),(0,V.jsx)(`span`,{children:`View Repository on GitHub`})]})]}),T&&(0,V.jsx)(`pre`,{className:`p-4 text-xs font-mono text-slate-200 overflow-x-auto max-h-[460px] overflow-y-auto leading-relaxed bg-[#04060c]`,children:(0,V.jsx)(`code`,{children:T.code})})]})]}),x&&x.length>0&&(0,V.jsxs)(`div`,{className:`bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6`,children:[(0,V.jsxs)(`h4`,{className:`text-xs font-mono uppercase tracking-wider text-indigo-400 mb-4 flex items-center gap-2`,children:[(0,V.jsx)(Ed,{className:`w-4 h-4 text-emerald-400`}),(0,V.jsx)(`span`,{children:`What I Built`})]}),(0,V.jsx)(`ul`,{className:`space-y-3`,children:x.map((e,t)=>(0,V.jsxs)(`li`,{className:`flex items-start gap-3 text-sm text-slate-300`,children:[(0,V.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0`}),(0,V.jsx)(`span`,{children:e})]},t))})]}),S&&(0,V.jsxs)(`div`,{className:`bg-indigo-950/20 border border-indigo-500/25 rounded-2xl p-6`,children:[(0,V.jsxs)(`h4`,{className:`text-xs font-mono uppercase tracking-wider text-indigo-300 mb-3 flex items-center gap-2`,children:[(0,V.jsx)(Bf,{className:`w-4 h-4 text-indigo-400`}),(0,V.jsx)(`span`,{children:`Under the Hood: Problem & Solution`})]}),(0,V.jsx)(`p`,{className:`text-sm sm:text-base text-slate-200 leading-relaxed font-normal whitespace-pre-line`,children:S})]}),e.codeSnippet&&(0,V.jsxs)(`div`,{className:`rounded-2xl bg-[#060811] border border-white/10 overflow-hidden`,children:[(0,V.jsxs)(`div`,{className:`px-4 py-2.5 bg-white/[0.03] border-b border-white/10 flex items-center justify-between`,children:[(0,V.jsxs)(`span`,{className:`text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-2`,children:[(0,V.jsx)(Ad,{className:`w-4 h-4`}),(0,V.jsx)(`span`,{children:`Implementation Logic / Shader Snippet`})]}),(0,V.jsx)(`span`,{className:`text-xs font-mono text-slate-500`,children:te})]}),(0,V.jsx)(`pre`,{className:`p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed`,children:(0,V.jsx)(`code`,{children:e.codeSnippet})})]}),g&&g.length>0&&(0,V.jsxs)(`div`,{className:`bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6`,children:[(0,V.jsxs)(`div`,{className:`flex items-center justify-between mb-4`,children:[(0,V.jsxs)(`h4`,{className:`text-xs font-mono uppercase tracking-wider text-indigo-400 flex items-center gap-2`,children:[(0,V.jsx)(If,{className:`w-4 h-4 text-indigo-400`}),(0,V.jsxs)(`span`,{children:[`Project Captures, Concept Art & Diagrams (`,g.length,`)`]})]}),(0,V.jsx)(`span`,{className:`text-[11px] font-mono text-slate-400 hidden sm:inline`,children:`Click any image to expand`})]}),(0,V.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`,children:g.map((e,t)=>(0,V.jsxs)(`button`,{type:`button`,onClick:()=>c(t),className:`rounded-xl overflow-hidden border border-white/10 hover:border-indigo-500/50 bg-slate-950 aspect-[4/3] group relative block cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-indigo-500`,title:`Click to inspect full resolution`,children:[(0,V.jsx)(`img`,{src:Q(e),alt:`${v} Capture ${t+1}`,className:`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300`,loading:`lazy`}),(0,V.jsxs)(`div`,{className:`absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs font-mono text-white/95 font-medium`,children:[(0,V.jsx)($f,{className:`w-4 h-4 text-indigo-400`}),(0,V.jsx)(`span`,{children:`Expand Capture`})]})]},t))})]})]}),(0,V.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-white/10 bg-[#090b16]`,children:[(0,V.jsxs)(`span`,{className:`text-xs font-mono text-slate-400`,children:[e.studio||e.role,` • `,C]}),(0,V.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[e.links?.itch&&(0,V.jsxs)(`a`,{href:e.links.itch,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors`,children:[(0,V.jsx)(Kd,{className:`w-4 h-4`}),(0,V.jsx)(`span`,{children:`Play on Itch.io`})]}),e.links?.video&&(0,V.jsxs)(`a`,{href:Q(e.links.video),target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors`,children:[(0,V.jsx)(Od,{className:`w-4 h-4`}),(0,V.jsx)(`span`,{children:`YouTube Walkthrough`})]}),e.links?.gdd&&(0,V.jsxs)(`a`,{href:Q(e.links.gdd),download:!0,className:`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600/30 hover:bg-amber-600/50 text-amber-200 font-semibold text-xs tracking-wider uppercase border border-amber-500/40 transition-colors`,children:[(0,V.jsx)(fd,{className:`w-4 h-4`}),(0,V.jsx)(`span`,{children:`Download GDD`})]}),pp(e.links?.github)&&(0,V.jsxs)(`a`,{href:e.links.github,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs tracking-wider uppercase transition-colors`,children:[(0,V.jsx)(ep,{className:`w-4 h-4`}),(0,V.jsx)(`span`,{children:`Source Code`})]}),mp(e.links?.linkedin)&&(0,V.jsxs)(`a`,{href:e.links.linkedin,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 text-blue-200 font-semibold text-xs tracking-wider uppercase border border-blue-500/40 transition-colors`,children:[(0,V.jsx)(tp,{className:`w-4 h-4`}),(0,V.jsx)(`span`,{children:`LinkedIn`})]}),E&&(0,V.jsxs)(`a`,{href:Q(e.links.demo),target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors`,children:[(0,V.jsx)(Rd,{className:`w-4 h-4`}),(0,V.jsx)(`span`,{children:`Play in Browser`})]})]})]})]}),s!==null&&g[s]&&(0,V.jsxs)(`div`,{onClick:()=>c(null),className:`fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4`,children:[(0,V.jsx)(`button`,{type:`button`,onClick:()=>c(null),className:`absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer`,"aria-label":`Close image preview`,children:(0,V.jsx)(Zf,{className:`w-6 h-6`})}),g.length>1&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),c(e=>(e-1+g.length)%g.length)},className:`absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer`,"aria-label":`Previous image`,children:(0,V.jsx)(bd,{className:`w-6 h-6`})}),(0,V.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),c(e=>(e+1)%g.length)},className:`absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer`,"aria-label":`Next image`,children:(0,V.jsx)(Sd,{className:`w-6 h-6`})})]}),(0,V.jsxs)(`div`,{onClick:e=>e.stopPropagation(),className:`max-w-5xl max-h-[85vh] flex flex-col items-center gap-3`,children:[(0,V.jsx)(`img`,{src:Q(g[s]),alt:`${v} full resolution ${s+1}`,className:`max-w-full max-h-[78vh] object-contain rounded-2xl border border-white/15 shadow-2xl`}),(0,V.jsxs)(`div`,{className:`flex items-center gap-4 text-xs font-mono text-slate-300`,children:[(0,V.jsxs)(`span`,{children:[`Image `,s+1,` of `,g.length]}),(0,V.jsx)(`a`,{href:Q(g[s]),target:`_blank`,rel:`noreferrer`,className:`text-indigo-400 hover:text-indigo-300 underline`,children:`Open Raw File ↗`})]})]})]})]})})}function Dm(){let e=(0,_.useRef)(null);return(0,_.useEffect)(()=>{let t=e.current;if(!t)return;let n=t.getContext(`2d`),r,i=t.width=window.innerWidth,a=t.height=window.innerHeight,o={x:i/2,y:a/2,targetX:i/2,targetY:a/2,radius:200},s=()=>{i=t.width=window.innerWidth,a=t.height=window.innerHeight},c=e=>{o.targetX=e.clientX,o.targetY=e.clientY};window.addEventListener(`resize`,s,{passive:!0}),window.addEventListener(`mousemove`,c,{passive:!0});let l=Math.min(Math.floor(i*a/18e3),70),u=[];for(let e=0;e<l;e++)u.push({x:Math.random()*i,y:Math.random()*a,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,size:Math.random()*2+1,color:e%3==0?`rgba(99, 102, 241, `:e%3==1?`rgba(139, 92, 246, `:`rgba(56, 189, 248, `,baseAlpha:Math.random()*.35+.15});let d=()=>{o.x+=(o.targetX-o.x)*.05,o.y+=(o.targetY-o.y)*.05,n.clearRect(0,0,i,a);let e=n.createRadialGradient(o.x,o.y,0,o.x,o.y,350);e.addColorStop(0,`rgba(99, 102, 241, 0.08)`),e.addColorStop(.5,`rgba(139, 92, 246, 0.03)`),e.addColorStop(1,`rgba(0, 0, 0, 0)`),n.fillStyle=e,n.fillRect(0,0,i,a);for(let e=0;e<u.length;e++){let t=u[e];t.x+=t.vx,t.y+=t.vy,t.x<0&&(t.x=i),t.x>i&&(t.x=0),t.y<0&&(t.y=a),t.y>a&&(t.y=0),n.beginPath(),n.arc(t.x,t.y,t.size,0,Math.PI*2),n.fillStyle=t.color+t.baseAlpha+`)`,n.fill();for(let r=e+1;r<u.length;r++){let e=u[r],i=t.x-e.x,a=t.y-e.y,o=i*i+a*a;if(o<16900){let r=(1-Math.sqrt(o)/130)*.15;n.strokeStyle=`rgba(148, 163, 184, ${r})`,n.lineWidth=.75,n.beginPath(),n.moveTo(t.x,t.y),n.lineTo(e.x,e.y),n.stroke()}}}r=requestAnimationFrame(d)};return d(),()=>{window.removeEventListener(`resize`,s),window.removeEventListener(`mousemove`,c),cancelAnimationFrame(r)}},[]),(0,V.jsx)(`canvas`,{ref:e,className:`fixed inset-0 pointer-events-none z-0 opacity-70`})}function Om(e){try{let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let n=new t;if(n.state===`suspended`&&n.resume(),e===`type`){let e=n.createOscillator(),t=n.createGain();e.type=`triangle`,e.frequency.setValueAtTime(460+Date.now()%50*3,n.currentTime),t.gain.setValueAtTime(.03,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.04),e.connect(t),t.connect(n.destination),e.start(),e.stop(n.currentTime+.04)}else if(e===`glitch`){let e=n.createOscillator(),t=n.createGain();e.type=`sawtooth`,e.frequency.setValueAtTime(190,n.currentTime),e.frequency.exponentialRampToValueAtTime(560,n.currentTime+.12),t.gain.setValueAtTime(.05,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.15),e.connect(t),t.connect(n.destination),e.start(),e.stop(n.currentTime+.15)}else if(e===`click`){let e=n.createOscillator(),t=n.createGain();e.type=`sine`,e.frequency.setValueAtTime(820,n.currentTime),t.gain.setValueAtTime(.07,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.06),e.connect(t),t.connect(n.destination),e.start(),e.stop(n.currentTime+.06)}else if(e===`genie`){let e=n.createOscillator(),t=n.createGain();e.type=`sine`,e.frequency.setValueAtTime(240,n.currentTime),e.frequency.exponentialRampToValueAtTime(740,n.currentTime+.55),t.gain.setValueAtTime(.07,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.65),e.connect(t),t.connect(n.destination),e.start(),e.stop(n.currentTime+.65)}else if(e===`chime`){let e=n.createOscillator(),t=n.createGain();e.type=`sine`,e.frequency.setValueAtTime(587.33,n.currentTime),e.frequency.setValueAtTime(880,n.currentTime+.08),t.gain.setValueAtTime(.05,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.35),e.connect(t),t.connect(n.destination),e.start(),e.stop(n.currentTime+.35)}else if(e===`whoosh`){let e=n.createOscillator(),t=n.createGain();e.type=`sine`,e.frequency.setValueAtTime(140,n.currentTime),e.frequency.exponentialRampToValueAtTime(50,n.currentTime+.35),t.gain.setValueAtTime(.05,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.4),e.connect(t),t.connect(n.destination),e.start(),e.stop(n.currentTime+.4)}}catch{}}function km({onComplete:e}){let[t,n]=(0,_.useState)(`typing`),[r,i]=(0,_.useState)(``),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)({x:380,y:280}),[l,u]=(0,_.useState)(!1),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(!1),[h,g]=(0,_.useState)(0),v=(0,_.useRef)(null),y=(0,_.useCallback)(()=>{try{sessionStorage.setItem(`hasSeenJoshIntro`,`true`)}catch{}e&&e()},[e]);(0,_.useEffect)(()=>{let e=e=>{(e.key===`Escape`||e.key===` `)&&(e.preventDefault(),y())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[y]),(0,_.useEffect)(()=>{let e=!1;return(async()=>{if(await new Promise(e=>setTimeout(e,450)),e)return;for(let t=1;t<=11;t++){if(e)return;i(`hello world`.slice(0,t)),Om(`type`),await new Promise(e=>setTimeout(e,80))}if(await new Promise(e=>setTimeout(e,600)),e)return;n(`glitch`),o(!0),Om(`glitch`);for(let t of[`h#ll0 w0r!d`,`h3110 j0$h`,`hello josh`]){if(e)return;i(t),await new Promise(e=>setTimeout(e,110))}if(o(!1),await new Promise(e=>setTimeout(e,650)),e)return;let t=window.innerWidth/2+10,r=window.innerHeight-24;if(v.current){let e=v.current.getBoundingClientRect();t=e.left+e.width/2,r=e.top+e.height/2}if(n(`cursor-move`),c({x:t,y:r}),await new Promise(e=>setTimeout(e,750)),!e&&(u(!0),await new Promise(e=>setTimeout(e,180)),!e&&(n(`cursor-click`),f(!0),m(!0),Om(`click`),await new Promise(e=>setTimeout(e,150)),!e&&(f(!1),n(`genie-open`),Om(`genie`),await new Promise(e=>setTimeout(e,650)),!e)))){n(`page-load`);for(let t of[20,45,75,100]){if(e)return;g(t),await new Promise(e=>setTimeout(e,90))}Om(`chime`),await new Promise(e=>setTimeout(e,220)),!e&&(n(`morph-fullscreen`),Om(`whoosh`),await new Promise(e=>setTimeout(e,700)),!e&&y())}})(),()=>{e=!0}},[y]);let b=t===`genie-open`||t===`page-load`||t===`morph-fullscreen`,x=t===`morph-fullscreen`;return(0,V.jsx)($c,{children:(0,V.jsxs)(U.div,{initial:{opacity:1},animate:{opacity:1},exit:{opacity:0},transition:{duration:.35,ease:`easeOut`},className:`fixed inset-0 z-[9999] overflow-hidden select-none font-['Segoe_UI',-apple-system,BlinkMacSystemFont,sans-serif]`,children:[(0,V.jsxs)(U.div,{animate:{opacity:+!b},transition:{duration:.45,ease:`easeInOut`},className:`absolute inset-0 bg-[#0d1424] overflow-hidden pointer-events-none`,children:[(0,V.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center`,children:(0,V.jsxs)(`div`,{className:`relative w-[750px] h-[750px] sm:w-[1000px] sm:h-[1000px] opacity-90`,children:[(0,V.jsx)(`div`,{className:`absolute inset-16 rounded-[48%] bg-gradient-to-tr from-[#003882] via-[#005fb8] to-[#1084d8] blur-2xl transform -rotate-25 scale-105 opacity-80`}),(0,V.jsx)(`div`,{className:`absolute inset-24 rounded-[42%] bg-gradient-to-br from-[#004e9a] via-[#0078d4] to-[#60cdff] blur-xl transform rotate-35 opacity-75`}),(0,V.jsx)(`div`,{className:`absolute inset-32 rounded-[45%] bg-gradient-to-t from-[#1b3d6d] via-[#106ebe] to-[#40b8ff] blur-2xl transform -rotate-10 opacity-70`}),(0,V.jsx)(`div`,{className:`absolute inset-40 rounded-full bg-[#3fa8f5] blur-3xl opacity-25`})]})}),(0,V.jsxs)(`div`,{className:`absolute top-4 left-4 flex flex-col gap-4 z-10`,children:[(0,V.jsxs)(`div`,{className:`flex flex-col items-center gap-1 w-20 group`,children:[(0,V.jsx)(`div`,{className:`w-10 h-10 rounded-lg bg-transparent flex items-center justify-center`,children:(0,V.jsx)(Hf,{className:`w-7 h-7 text-sky-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`})}),(0,V.jsx)(`span`,{className:`text-[11px] text-white text-center font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,1)]`,children:`Recycle Bin`})]}),(0,V.jsxs)(`div`,{className:`flex flex-col items-center gap-1 w-20 group`,children:[(0,V.jsx)(`div`,{className:`w-10 h-10 rounded-lg bg-transparent flex items-center justify-center`,children:(0,V.jsx)(gf,{className:`w-7 h-7 text-sky-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`})}),(0,V.jsx)(`span`,{className:`text-[11px] text-white text-center font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,1)]`,children:`This PC`})]}),(0,V.jsxs)(`div`,{className:`flex flex-col items-center gap-1 w-20 group`,children:[(0,V.jsx)(`div`,{className:`w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-400/40 flex items-center justify-center p-1.5 shadow-md`,children:(0,V.jsx)(`img`,{src:Q(`/images/logos/myndwell-logo-white.png`),alt:`Myndwell Logo`,className:`w-full h-full object-contain`})}),(0,V.jsx)(`span`,{className:`text-[11px] text-cyan-200 text-center font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,1)] truncate max-w-full`,children:`Myndwell.exe`})]}),(0,V.jsxs)(`div`,{className:`flex flex-col items-center gap-1 w-20 group`,children:[(0,V.jsx)(`div`,{className:`w-10 h-10 rounded-xl bg-black/60 border border-emerald-400/40 flex items-center justify-center p-1 shadow-md`,children:(0,V.jsx)(`img`,{src:Q(`/images/logos/labrats-logo-transparent.png`),alt:`LabRats Logo`,className:`w-full h-full object-contain filter drop-shadow-[0_0_4px_rgba(74,222,128,0.8)]`})}),(0,V.jsx)(`span`,{className:`text-[11px] text-emerald-200 text-center font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,1)] truncate max-w-full`,children:`LabRats.exe`})]}),(0,V.jsxs)(`div`,{className:`flex flex-col items-center gap-1 w-20 group`,children:[(0,V.jsx)(`div`,{className:`w-10 h-10 rounded-xl bg-black/60 border border-red-500/40 flex items-center justify-center p-1 shadow-md`,children:(0,V.jsx)(`img`,{src:Q(`/images/logos/delirium-title-logo.png`),alt:`Delirium`,className:`w-full object-contain`})}),(0,V.jsx)(`span`,{className:`text-[11px] text-red-200 text-center font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,1)] truncate max-w-full`,children:`Delirium_VR`})]}),(0,V.jsxs)(`div`,{className:`flex flex-col items-center gap-1 w-20 group`,children:[(0,V.jsx)(`div`,{className:`w-10 h-10 rounded-lg bg-transparent flex items-center justify-center`,children:(0,V.jsx)(Wd,{className:`w-7 h-7 text-amber-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] fill-amber-300/40`})}),(0,V.jsx)(`span`,{className:`text-[11px] text-white text-center font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,1)]`,children:`Josh_Projects`})]})]})]}),(0,V.jsx)(`div`,{className:`absolute top-4 right-4 z-50`,children:(0,V.jsxs)(`button`,{type:`button`,onClick:y,className:`flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 hover:bg-black/85 text-white/90 hover:text-white border border-white/20 text-xs font-sans tracking-wide backdrop-blur-md transition-all shadow-md cursor-pointer`,children:[(0,V.jsx)(`span`,{children:`Skip Intro`}),(0,V.jsx)(`span`,{className:`text-[10px] px-1 py-0.5 rounded bg-white/10 text-sky-200 font-mono`,children:`ESC`})]})}),(0,V.jsxs)(U.div,{initial:{scale:.95,opacity:0,y:15},animate:{scale:1,opacity:+!b,x:a?[-2,2,-2,2,0]:0,y:b?-30:0},transition:{duration:.35,ease:`easeOut`},className:`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] w-[92%] max-w-[620px] rounded-lg border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden z-20 bg-[#0c0c0c]/95 backdrop-blur-2xl pointer-events-none`,children:[(0,V.jsxs)(`div`,{className:`flex items-center justify-between h-9 px-2 bg-[#1f1f1f] border-b border-black/40 select-none`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-1 h-full pt-1`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2 px-3 h-full rounded-t-md bg-[#0c0c0c] border-t border-x border-white/10 text-xs text-slate-200`,children:[(0,V.jsx)(`div`,{className:`w-3.5 h-3.5 rounded-xs bg-[#012456] border border-sky-400 flex items-center justify-center text-[8px] font-bold text-sky-200 font-mono`,children:`>_`}),(0,V.jsx)(`span`,{className:`font-medium text-[11px]`,children:`PowerShell`}),(0,V.jsx)(Zf,{className:`w-3 h-3 text-slate-400 ml-1`})]}),(0,V.jsx)(`div`,{className:`p-1 rounded text-slate-400`,children:(0,V.jsx)(bf,{className:`w-3 h-3`})}),(0,V.jsx)(`div`,{className:`p-1 rounded text-slate-400`,children:(0,V.jsx)(vd,{className:`w-3 h-3`})})]}),(0,V.jsxs)(`div`,{className:`flex items-center h-full text-slate-300`,children:[(0,V.jsx)(`div`,{className:`h-full px-3 flex items-center justify-center`,children:(0,V.jsx)(hf,{className:`w-3.5 h-3.5`})}),(0,V.jsx)(`div`,{className:`h-full px-3 flex items-center justify-center`,children:(0,V.jsx)(Rf,{className:`w-3 h-3`})}),(0,V.jsx)(`div`,{className:`h-full px-3.5 flex items-center justify-center`,children:(0,V.jsx)(Zf,{className:`w-3.5 h-3.5`})})]})]}),(0,V.jsxs)(`div`,{className:`p-4 font-mono text-xs sm:text-sm text-slate-200 min-h-[160px] leading-relaxed`,children:[(0,V.jsx)(`div`,{className:`text-slate-400 text-xs mb-1`,children:`Windows PowerShell`}),(0,V.jsx)(`div`,{className:`text-slate-500 text-xs mb-4`,children:`Copyright (C) Microsoft Corporation. All rights reserved.`}),(0,V.jsxs)(`div`,{className:`flex items-center gap-2 flex-wrap text-slate-100`,children:[(0,V.jsx)(`span`,{className:`text-slate-300 font-semibold`,children:`PS C:\\Users\\Josh>`}),(0,V.jsx)(`span`,{className:`font-semibold tracking-wide ${a?`text-cyan-400 animate-pulse`:t===`typing`?`text-white`:`text-sky-300`}`,children:r}),(0,V.jsx)(U.span,{animate:{opacity:[1,0,1]},transition:{duration:.6,repeat:1/0},className:`inline-block w-2 h-4 bg-slate-200 ml-0.5`})]})]})]}),b&&(0,V.jsxs)(U.div,{initial:{opacity:.1,scaleX:.08,scaleY:.04,y:window.innerHeight/2-20,transformOrigin:`bottom center`,borderRadius:`24px`},animate:x?{opacity:1,scaleX:1,scaleY:1,y:0,borderRadius:`0px`}:{opacity:1,scaleX:1,scaleY:1,y:0,borderRadius:`12px`},transition:{duration:x?.5:.6,ease:[.16,1,.3,1]},className:`absolute z-40 bg-transparent flex flex-col overflow-hidden pointer-events-none ${x?`inset-0 border-none shadow-none`:`inset-3 sm:inset-6 md:inset-8 border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.95)]`}`,children:[(0,V.jsxs)(U.div,{animate:{y:x?-110:0,opacity:+!x},transition:{duration:.45,ease:[.16,1,.3,1]},className:`flex flex-col bg-[#1a1f2c] border-b border-white/10 select-none shrink-0`,children:[(0,V.jsxs)(`div`,{className:`flex items-center px-3 pt-2 gap-1 bg-[#121620]`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-2 px-3 py-1.5 rounded-t-lg bg-[#1a1f2c] text-xs text-white border-t border-x border-white/10 max-w-[260px]`,children:[h===100?(0,V.jsx)(gd,{className:`w-3.5 h-3.5 text-emerald-400 shrink-0`}):(0,V.jsx)(Xd,{className:`w-3.5 h-3.5 text-sky-400 shrink-0 animate-spin`}),(0,V.jsx)(`span`,{className:`truncate text-[11px] font-medium`,children:`Joshua Johnson | Technical Game Designer`}),(0,V.jsx)(Zf,{className:`w-3 h-3 text-slate-400 ml-auto`})]}),(0,V.jsx)(`div`,{className:`p-1 rounded text-slate-400`,children:(0,V.jsx)(bf,{className:`w-3.5 h-3.5`})}),(0,V.jsxs)(`div`,{className:`ml-auto flex items-center h-full text-slate-400 text-xs`,children:[(0,V.jsx)(`div`,{className:`px-2.5 py-1`,children:(0,V.jsx)(hf,{className:`w-3 h-3`})}),(0,V.jsx)(`div`,{className:`px-2.5 py-1`,children:(0,V.jsx)(Rf,{className:`w-2.5 h-2.5`})}),(0,V.jsx)(`div`,{className:`px-2.5 py-1`,children:(0,V.jsx)(Zf,{className:`w-3 h-3`})})]})]}),(0,V.jsxs)(`div`,{className:`relative flex items-center gap-2 px-3 py-2 bg-[#1a1f2c]`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-1 text-slate-400`,children:[(0,V.jsx)(`div`,{className:`p-1 rounded`,children:(0,V.jsx)(nd,{className:`w-3.5 h-3.5`})}),(0,V.jsx)(`div`,{className:`p-1 rounded`,children:(0,V.jsx)(id,{className:`w-3.5 h-3.5`})}),(0,V.jsx)(`div`,{className:`p-1 rounded`,children:(0,V.jsx)(Of,{className:`w-3.5 h-3.5`})})]}),(0,V.jsxs)(`div`,{className:`flex-1 max-w-xl mx-auto flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b0e14] border border-white/10 text-xs text-slate-200 shadow-inner`,children:[(0,V.jsx)(af,{className:`w-3 h-3 text-emerald-400 shrink-0`}),(0,V.jsx)(`span`,{className:`truncate text-[11px] font-mono text-sky-200`,children:`https://joshuel2.github.io/PortfolioWebsite/`}),(0,V.jsx)(If,{className:`w-3 h-3 text-amber-400 ml-auto shrink-0 animate-pulse`})]}),(0,V.jsx)(`div`,{className:`absolute bottom-0 inset-x-0 h-[2px] bg-transparent`,children:(0,V.jsx)(U.div,{className:`h-full bg-gradient-to-r from-sky-400 to-cyan-300 shadow-[0_0_8px_rgba(56,189,248,0.9)]`,initial:{width:`0%`},animate:{width:`${h}%`},transition:{ease:`easeOut`,duration:.15}})})]})]}),(0,V.jsx)(`div`,{className:`relative flex-1 bg-transparent overflow-hidden pointer-events-none`})]}),(0,V.jsxs)(U.div,{animate:{y:x?65:0,opacity:+!x},transition:{duration:.5,ease:[.16,1,.3,1]},className:`absolute bottom-0 inset-x-0 h-12 bg-[#1c1c1c]/90 backdrop-blur-2xl border-t border-white/10 flex items-center justify-between px-3 select-none z-30`,children:[(0,V.jsxs)(`div`,{className:`hidden sm:flex items-center gap-2 text-slate-300 text-xs px-2 py-1 rounded hover:bg-white/5 cursor-pointer`,children:[(0,V.jsx)(`span`,{className:`text-amber-400 text-sm`,children:`🌤`}),(0,V.jsx)(`span`,{className:`font-medium text-[11px]`,children:`16°C Mostly sunny`})]}),(0,V.jsxs)(`div`,{className:`flex items-center gap-1 mx-auto`,children:[(0,V.jsx)(`div`,{className:`p-2 rounded hover:bg-white/10 transition-colors cursor-pointer group`,children:(0,V.jsxs)(`div`,{className:`grid grid-cols-2 gap-0.5 w-4 h-4`,children:[(0,V.jsx)(`div`,{className:`w-1.5 h-1.5 bg-[#0078d4] rounded-[1px] group-hover:scale-105 transition-transform`}),(0,V.jsx)(`div`,{className:`w-1.5 h-1.5 bg-[#0078d4] rounded-[1px] group-hover:scale-105 transition-transform`}),(0,V.jsx)(`div`,{className:`w-1.5 h-1.5 bg-[#0078d4] rounded-[1px] group-hover:scale-105 transition-transform`}),(0,V.jsx)(`div`,{className:`w-1.5 h-1.5 bg-[#0078d4] rounded-[1px] group-hover:scale-105 transition-transform`})]})}),(0,V.jsx)(`div`,{className:`p-2 rounded hover:bg-white/10 transition-colors cursor-pointer text-slate-300`,children:(0,V.jsx)(Af,{className:`w-4 h-4`})}),(0,V.jsx)(`div`,{className:`p-2 rounded hover:bg-white/10 transition-colors cursor-pointer text-amber-300`,children:(0,V.jsx)(Wd,{className:`w-4 h-4 fill-amber-400/40 text-amber-300`})}),(0,V.jsxs)(`div`,{className:`relative p-2 rounded bg-white/10 text-slate-200 cursor-pointer`,children:[(0,V.jsx)(`div`,{className:`w-4 h-4 rounded-xs bg-[#012456] border border-sky-400 flex items-center justify-center text-[7px] font-bold text-sky-200 font-mono`,children:`>_`}),(0,V.jsx)(`div`,{className:`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#0078d4] rounded-full`})]}),(0,V.jsxs)(`div`,{ref:v,className:`relative p-2 rounded transition-all cursor-pointer ${d?`scale-90 bg-white/20 shadow-[0_0_12px_rgba(0,120,212,0.8)]`:l||b?`bg-white/15 scale-105 shadow-[0_0_8px_rgba(0,120,212,0.5)]`:`hover:bg-white/10`}`,title:`Microsoft Edge`,children:[(0,V.jsx)(`div`,{className:`w-5 h-5 rounded-full bg-gradient-to-tr from-[#0078d4] via-[#00a4ef] to-[#25d366] flex items-center justify-center shadow-md`,children:(0,V.jsx)(Xd,{className:`w-3.5 h-3.5 text-white`})}),(l||b)&&(0,V.jsx)(`div`,{className:`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-[#0078d4] rounded-full`})]})]}),(0,V.jsxs)(`div`,{className:`flex items-center gap-1.5 text-slate-300 text-xs`,children:[(0,V.jsx)(`div`,{className:`p-1 rounded hover:bg-white/5 cursor-pointer`,children:(0,V.jsx)(wd,{className:`w-3.5 h-3.5 text-slate-400`})}),(0,V.jsxs)(`div`,{className:`flex items-center gap-1 px-1.5 py-1 rounded hover:bg-white/5 cursor-pointer`,children:[(0,V.jsx)(qf,{className:`w-3.5 h-3.5`}),(0,V.jsx)(Gf,{className:`w-3.5 h-3.5`})]}),(0,V.jsxs)(`div`,{className:`flex flex-col items-end px-1.5 py-0.5 rounded hover:bg-white/5 text-[11px] font-sans leading-tight cursor-pointer`,children:[(0,V.jsx)(`span`,{className:`font-semibold text-white`,children:`23:09`}),(0,V.jsx)(`span`,{className:`text-slate-400 text-[10px]`,children:`18/10/2026`})]})]})]}),(t===`cursor-move`||t===`cursor-click`||t===`genie-open`)&&(0,V.jsxs)(U.div,{initial:{x:380,y:280},animate:{x:s.x,y:s.y,scale:d?.85:1},transition:{x:{duration:.75,ease:[.22,1,.36,1]},y:{duration:.75,ease:[.22,1,.36,1]},scale:{duration:.1}},className:`absolute top-0 left-0 z-50 pointer-events-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]`,style:{transformOrigin:`top left`},children:[(0,V.jsx)(`svg`,{width:`24`,height:`32`,viewBox:`0 0 18 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,V.jsx)(`path`,{d:`M1 1L1 18.5L5.5 14.5L9 22.5L12 21L8.5 13.5L14 13.5L1 1Z`,fill:`#ffffff`,stroke:`#000000`,strokeWidth:`1.4`,strokeLinejoin:`miter`})}),p&&(0,V.jsx)(U.div,{initial:{scale:.2,opacity:1},animate:{scale:2.2,opacity:0},transition:{duration:.45,ease:`easeOut`},className:`absolute -top-1 -left-1 w-6 h-6 rounded-full border-2 border-sky-400 pointer-events-none`})]})]},`windows11-intro`)})}function Am(){let[e,t]=(0,_.useState)(null),[n,r]=(0,_.useState)(`featured`),[i,a]=(0,_.useState)(()=>{try{let e=new URLSearchParams(window.location.search);return e.get(`intro`)===`1`||e.get(`replay`)===`1`||!sessionStorage.getItem(`hasSeenJoshIntro`)}catch{return!0}}),o=(0,_.useCallback)(e=>{if(!e)return null;let t=e.toLowerCase().trim();return ip.find(e=>e.id.toLowerCase()===t||e.slug?.toLowerCase()===t)||null},[]);(0,_.useEffect)(()=>{let e=()=>{let e=window.location.hash;if(e===`#all-projects`)r(`all-projects`),t(null),window.scrollTo({top:0,behavior:`smooth`});else if(e===`#projects`||e===`#portfolio`)r(`featured`),t(null),setTimeout(()=>{let e=document.getElementById(`portfolio`);e&&e.scrollIntoView({behavior:`smooth`})},80);else if(e===`#research`)r(`featured`),t(null),setTimeout(()=>{let e=document.getElementById(`research`);e&&e.scrollIntoView({behavior:`smooth`})},80);else if(e.startsWith(`#project=`)){let n=decodeURIComponent(e.replace(`#project=`,``)),r=o(n);r&&t(r)}else e===``&&t(null)};return e(),window.addEventListener(`hashchange`,e),()=>window.removeEventListener(`hashchange`,e)},[o]);let s=e=>{if(!e){t(null),window.location.hash.startsWith(`#project=`)&&history.pushState(``,document.title,window.location.pathname+window.location.search);return}let n=e.slug||e.id,r=o(n)||e;t({...r,initialPhaseIndex:e.initialPhaseIndex??0}),history.pushState(``,document.title,`${window.location.pathname}${window.location.search}#project=${n}`)},c=e=>{r(e),t(null),e===`all-projects`?(history.pushState(``,document.title,`${window.location.pathname}${window.location.search}#all-projects`),window.scrollTo({top:0,behavior:`smooth`})):(history.pushState(``,document.title,window.location.pathname+window.location.search),window.scrollTo({top:0,behavior:`smooth`}))};return(0,V.jsxs)(`div`,{className:`relative min-h-screen bg-[#06070d] text-slate-100 overflow-x-hidden selection:bg-indigo-500 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]`,children:[(0,V.jsx)(Dm,{}),(0,V.jsx)(`div`,{className:`fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0`}),(0,V.jsx)(`div`,{className:`fixed inset-0 bg-radial-vignette pointer-events-none z-0`}),(0,V.jsxs)(`div`,{className:`relative z-10 flex flex-col`,children:[(0,V.jsx)(hp,{currentView:n,onViewChange:c}),n===`all-projects`?(0,V.jsx)(`main`,{className:`flex-1`,children:(0,V.jsx)(Lp,{onSelectProject:s,onBackToHome:()=>c(`featured`)})}):(0,V.jsxs)(`main`,{className:`flex-1`,children:[(0,V.jsx)(gp,{onExploreClick:()=>{let e=document.getElementById(`portfolio`);if(e){let t=e.getBoundingClientRect().top+window.pageYOffset+-80;window.scrollTo({top:t,behavior:`smooth`})}},onSelectProject:s}),(0,V.jsx)(Ip,{onSelectProject:s,onViewAllProjects:()=>c(`all-projects`)}),(0,V.jsx)(Rp,{}),(0,V.jsx)(Bp,{}),(0,V.jsx)(Wp,{}),(0,V.jsx)(qp,{})]}),(0,V.jsx)(Yp,{})]}),(0,V.jsx)($c,{children:e&&(0,V.jsx)(Em,{project:e,onClose:()=>s(null)},`${e.id}-${e.initialPhaseIndex??0}`)}),(0,V.jsx)($c,{children:i&&(0,V.jsx)(km,{onComplete:()=>a(!1)})})]})}(0,v.createRoot)(document.getElementById(`root`)).render((0,V.jsx)(_.StrictMode,{children:(0,V.jsx)(Am,{})}));