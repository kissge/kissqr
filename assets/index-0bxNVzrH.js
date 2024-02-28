var De=Object.defineProperty;var Fe=(e,n,o)=>n in e?De(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o;var se=(e,n,o)=>(Fe(e,typeof n!="symbol"?n+"":n,o),o);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();const je="modulepreload",He=function(e,n){return new URL(e,n).href},me={},le=function(n,o,r){let t=Promise.resolve();if(o&&o.length>0){const i=document.getElementsByTagName("link");t=Promise.all(o.map(a=>{if(a=He(a,r),a in me)return;me[a]=!0;const s=a.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const f=i[d];if(f.href===a&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${l}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":je,s||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),s)return new Promise((d,f)=>{c.addEventListener("load",d),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return t.then(()=>n()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},Ke=(e,n)=>{const o=e[n];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((r,t)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+n)))})};function Z(){}function Ne(e){return e()}function we(){return Object.create(null)}function G(e){e.forEach(Ne)}function Me(e){return typeof e=="function"}function Ye(e,n){return e!=e?n==n:e!==n||e&&typeof e=="object"||typeof e=="function"}let ee;function ye(e,n){return e===n?!0:(ee||(ee=document.createElement("a")),ee.href=n,e===ee.href)}function Je(e){return Object.keys(e).length===0}function S(e,n){e.appendChild(n)}function D(e,n,o){e.insertBefore(n,o||null)}function O(e){e.parentNode&&e.parentNode.removeChild(e)}function U(e){return document.createElement(e)}function te(e){return document.createTextNode(e)}function J(){return te(" ")}function ve(e,n,o,r){return e.addEventListener(n,o,r),()=>e.removeEventListener(n,o,r)}function k(e,n,o){o==null?e.removeAttribute(n):e.getAttribute(n)!==o&&e.setAttribute(n,o)}function Ve(e){return Array.from(e.childNodes)}function Ee(e,n){e.value=n??""}let W;function Q(e){W=e}function qe(){if(!W)throw new Error("Function called outside component initialization");return W}function Qe(e){qe().$$.on_mount.push(e)}const Y=[],_e=[];let V=[];const be=[],Ze=Promise.resolve();let fe=!1;function We(){fe||(fe=!0,Ze.then(Ie))}function ce(e){V.push(e)}const ue=new Set;let K=0;function Ie(){if(K!==0)return;const e=W;do{try{for(;K<Y.length;){const n=Y[K];K++,Q(n),Ge(n.$$)}}catch(n){throw Y.length=0,K=0,n}for(Q(null),Y.length=0,K=0;_e.length;)_e.pop()();for(let n=0;n<V.length;n+=1){const o=V[n];ue.has(o)||(ue.add(o),o())}V.length=0}while(Y.length);for(;be.length;)be.pop()();fe=!1,ue.clear(),Q(e)}function Ge(e){if(e.fragment!==null){e.update(),G(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(ce)}}function Xe(e){const n=[],o=[];V.forEach(r=>e.indexOf(r)===-1?n.push(r):o.push(r)),o.forEach(r=>r()),V=n}const et=new Set;function tt(e,n){e&&e.i&&(et.delete(e),e.i(n))}function rt(e,n,o){const{fragment:r,after_update:t}=e.$$;r&&r.m(n,o),ce(()=>{const i=e.$$.on_mount.map(Ne).filter(Me);e.$$.on_destroy?e.$$.on_destroy.push(...i):G(i),e.$$.on_mount=[]}),t.forEach(ce)}function nt(e,n){const o=e.$$;o.fragment!==null&&(Xe(o.after_update),G(o.on_destroy),o.fragment&&o.fragment.d(n),o.on_destroy=o.fragment=null,o.ctx=[])}function ot(e,n){e.$$.dirty[0]===-1&&(Y.push(e),We(),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function it(e,n,o,r,t,i,a=null,s=[-1]){const l=W;Q(e);const u=e.$$={fragment:null,ctx:[],props:i,update:Z,not_equal:t,bound:we(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(l?l.$$.context:[])),callbacks:we(),dirty:s,skip_bound:!1,root:n.target||l.$$.root};a&&a(u.root);let c=!1;if(u.ctx=o?o(e,n.props||{},(d,f,...p)=>{const h=p.length?p[0]:f;return u.ctx&&t(u.ctx[d],u.ctx[d]=h)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](h),c&&ot(e,d)),f}):[],u.update(),c=!0,G(u.before_update),u.fragment=r?r(u.ctx):!1,n.target){if(n.hydrate){const d=Ve(n.target);u.fragment&&u.fragment.l(d),d.forEach(O)}else u.fragment&&u.fragment.c();n.intro&&tt(e.$$.fragment),rt(e,n.target,n.anchor),Ie()}Q(l)}class at{constructor(){se(this,"$$");se(this,"$$set")}$destroy(){nt(this,1),this.$destroy=Z}$on(n,o){if(!Me(o))return Z;const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(o),()=>{const t=r.indexOf(o);t!==-1&&r.splice(t,1)}}$set(n){this.$$set&&!Je(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const st="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(st);var lt=Object.create,Pe=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,ft=Object.getOwnPropertyNames,ct=Object.getPrototypeOf,dt=Object.prototype.hasOwnProperty,L=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports),ht=(e,n,o,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of ft(n))!dt.call(e,t)&&t!==o&&Pe(e,t,{get:()=>n[t],enumerable:!(r=ut(n,t))||r.enumerable});return e},re=(e,n,o)=>(o=e!=null?lt(ct(e)):{},ht(n||!e||!e.__esModule?Pe(o,"default",{value:e,enumerable:!0}):o,e)),gt=L((e,n)=>{n.exports=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}}),F=L(e=>{var n,o=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(r){if(!r)throw new Error('"version" cannot be null or undefined');if(r<1||r>40)throw new Error('"version" should be in range from 1 to 40');return r*4+17},e.getSymbolTotalCodewords=function(r){return o[r]},e.getBCHDigit=function(r){let t=0;for(;r!==0;)t++,r>>>=1;return t},e.setToSJISFunction=function(r){if(typeof r!="function")throw new Error('"toSJISFunc" is not a valid function.');n=r},e.isKanjiModeEnabled=function(){return typeof n<"u"},e.toSJIS=function(r){return n(r)}}),de=L(e=>{e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function n(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+o)}}e.isValid=function(o){return o&&typeof o.bit<"u"&&o.bit>=0&&o.bit<4},e.from=function(o,r){if(e.isValid(o))return o;try{return n(o)}catch{return r}}}),pt=L((e,n)=>{function o(){this.buffer=[],this.length=0}o.prototype={get:function(r){let t=Math.floor(r/8);return(this.buffer[t]>>>7-r%8&1)===1},put:function(r,t){for(let i=0;i<t;i++)this.putBit((r>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(r){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),r&&(this.buffer[t]|=128>>>this.length%8),this.length++}},n.exports=o}),mt=L((e,n)=>{function o(r){if(!r||r<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=r,this.data=new Uint8Array(r*r),this.reservedBit=new Uint8Array(r*r)}o.prototype.set=function(r,t,i,a){let s=r*this.size+t;this.data[s]=i,a&&(this.reservedBit[s]=!0)},o.prototype.get=function(r,t){return this.data[r*this.size+t]},o.prototype.xor=function(r,t,i){this.data[r*this.size+t]^=i},o.prototype.isReserved=function(r,t){return this.reservedBit[r*this.size+t]},n.exports=o}),Be=L(e=>{var n=F().getSymbolSize;e.getRowColCoords=function(o){if(o===1)return[];let r=Math.floor(o/7)+2,t=n(o),i=t===145?26:Math.ceil((t-13)/(2*r-2))*2,a=[t-7];for(let s=1;s<r-1;s++)a[s]=a[s-1]-i;return a.push(6),a.reverse()},e.getPositions=function(o){let r=[],t=e.getRowColCoords(o),i=t.length;for(let a=0;a<i;a++)for(let s=0;s<i;s++)a===0&&s===0||a===0&&s===i-1||a===i-1&&s===0||r.push([t[a],t[s]]);return r}}),wt=L(e=>{var n=F().getSymbolSize,o=7;e.getPositions=function(r){let t=n(r);return[[0,0],[t-o,0],[0,t-o]]}}),yt=L(e=>{e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var n={N1:3,N2:3,N3:40,N4:10};e.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},e.from=function(r){return e.isValid(r)?parseInt(r,10):void 0},e.getPenaltyN1=function(r){let t=r.size,i=0,a=0,s=0,l=null,u=null;for(let c=0;c<t;c++){a=s=0,l=u=null;for(let d=0;d<t;d++){let f=r.get(c,d);f===l?a++:(a>=5&&(i+=n.N1+(a-5)),l=f,a=1),f=r.get(d,c),f===u?s++:(s>=5&&(i+=n.N1+(s-5)),u=f,s=1)}a>=5&&(i+=n.N1+(a-5)),s>=5&&(i+=n.N1+(s-5))}return i},e.getPenaltyN2=function(r){let t=r.size,i=0;for(let a=0;a<t-1;a++)for(let s=0;s<t-1;s++){let l=r.get(a,s)+r.get(a,s+1)+r.get(a+1,s)+r.get(a+1,s+1);(l===4||l===0)&&i++}return i*n.N2},e.getPenaltyN3=function(r){let t=r.size,i=0,a=0,s=0;for(let l=0;l<t;l++){a=s=0;for(let u=0;u<t;u++)a=a<<1&2047|r.get(l,u),u>=10&&(a===1488||a===93)&&i++,s=s<<1&2047|r.get(u,l),u>=10&&(s===1488||s===93)&&i++}return i*n.N3},e.getPenaltyN4=function(r){let t=0,i=r.data.length;for(let a=0;a<i;a++)t+=r.data[a];return Math.abs(Math.ceil(t*100/i/5)-10)*n.N4};function o(r,t,i){switch(r){case e.Patterns.PATTERN000:return(t+i)%2===0;case e.Patterns.PATTERN001:return t%2===0;case e.Patterns.PATTERN010:return i%3===0;case e.Patterns.PATTERN011:return(t+i)%3===0;case e.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(i/3))%2===0;case e.Patterns.PATTERN101:return t*i%2+t*i%3===0;case e.Patterns.PATTERN110:return(t*i%2+t*i%3)%2===0;case e.Patterns.PATTERN111:return(t*i%3+(t+i)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(r,t){let i=t.size;for(let a=0;a<i;a++)for(let s=0;s<i;s++)t.isReserved(s,a)||t.xor(s,a,o(r,s,a))},e.getBestMask=function(r,t){let i=Object.keys(e.Patterns).length,a=0,s=1/0;for(let l=0;l<i;l++){t(l),e.applyMask(l,r);let u=e.getPenaltyN1(r)+e.getPenaltyN2(r)+e.getPenaltyN3(r)+e.getPenaltyN4(r);e.applyMask(l,r),u<s&&(s=u,a=l)}return a}}),Te=L(e=>{var n=de(),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],r=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,i){switch(i){case n.L:return o[(t-1)*4+0];case n.M:return o[(t-1)*4+1];case n.Q:return o[(t-1)*4+2];case n.H:return o[(t-1)*4+3];default:return}},e.getTotalCodewordsCount=function(t,i){switch(i){case n.L:return r[(t-1)*4+0];case n.M:return r[(t-1)*4+1];case n.Q:return r[(t-1)*4+2];case n.H:return r[(t-1)*4+3];default:return}}}),vt=L(e=>{var n=new Uint8Array(512),o=new Uint8Array(256);(function(){let r=1;for(let t=0;t<255;t++)n[t]=r,o[r]=t,r<<=1,r&256&&(r^=285);for(let t=255;t<512;t++)n[t]=n[t-255]})(),e.log=function(r){if(r<1)throw new Error("log("+r+")");return o[r]},e.exp=function(r){return n[r]},e.mul=function(r,t){return r===0||t===0?0:n[o[r]+o[t]]}}),Et=L(e=>{var n=vt();e.mul=function(o,r){let t=new Uint8Array(o.length+r.length-1);for(let i=0;i<o.length;i++)for(let a=0;a<r.length;a++)t[i+a]^=n.mul(o[i],r[a]);return t},e.mod=function(o,r){let t=new Uint8Array(o);for(;t.length-r.length>=0;){let i=t[0];for(let s=0;s<r.length;s++)t[s]^=n.mul(r[s],i);let a=0;for(;a<t.length&&t[a]===0;)a++;t=t.slice(a)}return t},e.generateECPolynomial=function(o){let r=new Uint8Array([1]);for(let t=0;t<o;t++)r=e.mul(r,new Uint8Array([1,n.exp(t)]));return r}}),_t=L((e,n)=>{var o=Et();function r(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}r.prototype.initialize=function(t){this.degree=t,this.genPoly=o.generateECPolynomial(this.degree)},r.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");let i=new Uint8Array(t.length+this.degree);i.set(t);let a=o.mod(i,this.genPoly),s=this.degree-a.length;if(s>0){let l=new Uint8Array(this.degree);return l.set(a,s),l}return a},n.exports=r}),Re=L(e=>{e.isValid=function(n){return!isNaN(n)&&n>=1&&n<=40}}),Le=L(e=>{var n="[0-9]+",o="[A-Z $%*+\\-./:]+",r="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";r=r.replace(/u/g,"\\u");var t="(?:(?![A-Z0-9 $%*+\\-./:]|"+r+`)(?:.|[\r
]))+`;e.KANJI=new RegExp(r,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(t,"g"),e.NUMERIC=new RegExp(n,"g"),e.ALPHANUMERIC=new RegExp(o,"g");var i=new RegExp("^"+r+"$"),a=new RegExp("^"+n+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(l){return i.test(l)},e.testNumeric=function(l){return a.test(l)},e.testAlphanumeric=function(l){return s.test(l)}}),j=L(e=>{var n=Re(),o=Le();e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,i){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!n.isValid(i))throw new Error("Invalid version: "+i);return i>=1&&i<10?t.ccBits[0]:i<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return o.testNumeric(t)?e.NUMERIC:o.testAlphanumeric(t)?e.ALPHANUMERIC:o.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits};function r(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}e.from=function(t,i){if(e.isValid(t))return t;try{return r(t)}catch{return i}}}),bt=L(e=>{var n=F(),o=Te(),r=de(),t=j(),i=Re(),a=7973,s=n.getBCHDigit(a);function l(f,p,h){for(let E=1;E<=40;E++)if(p<=e.getCapacity(E,h,f))return E}function u(f,p){return t.getCharCountIndicator(f,p)+4}function c(f,p){let h=0;return f.forEach(function(E){let R=u(E.mode,p);h+=R+E.getBitsLength()}),h}function d(f,p){for(let h=1;h<=40;h++)if(c(f,h)<=e.getCapacity(h,p,t.MIXED))return h}e.from=function(f,p){return i.isValid(f)?parseInt(f,10):p},e.getCapacity=function(f,p,h){if(!i.isValid(f))throw new Error("Invalid QR Code version");typeof h>"u"&&(h=t.BYTE);let E=n.getSymbolTotalCodewords(f),R=o.getTotalCodewordsCount(f,p),y=(E-R)*8;if(h===t.MIXED)return y;let v=y-u(h,f);switch(h){case t.NUMERIC:return Math.floor(v/10*3);case t.ALPHANUMERIC:return Math.floor(v/11*2);case t.KANJI:return Math.floor(v/13);case t.BYTE:default:return Math.floor(v/8)}},e.getBestVersionForData=function(f,p){let h,E=r.from(p,r.M);if(Array.isArray(f)){if(f.length>1)return d(f,E);if(f.length===0)return 1;h=f[0]}else h=f;return l(h.mode,h.getLength(),E)},e.getEncodedBits=function(f){if(!i.isValid(f)||f<7)throw new Error("Invalid QR Code version");let p=f<<12;for(;n.getBCHDigit(p)-s>=0;)p^=a<<n.getBCHDigit(p)-s;return f<<12|p}}),At=L(e=>{var n=F(),o=1335,r=21522,t=n.getBCHDigit(o);e.getEncodedBits=function(i,a){let s=i.bit<<3|a,l=s<<10;for(;n.getBCHDigit(l)-t>=0;)l^=o<<n.getBCHDigit(l)-t;return(s<<10|l)^r}}),Ct=L((e,n)=>{var o=j();function r(t){this.mode=o.NUMERIC,this.data=t.toString()}r.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(t){let i,a,s;for(i=0;i+3<=this.data.length;i+=3)a=this.data.substr(i,3),s=parseInt(a,10),t.put(s,10);let l=this.data.length-i;l>0&&(a=this.data.substr(i),s=parseInt(a,10),t.put(s,l*3+1))},n.exports=r}),Nt=L((e,n)=>{var o=j(),r=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(i){this.mode=o.ALPHANUMERIC,this.data=i}t.getBitsLength=function(i){return 11*Math.floor(i/2)+6*(i%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let a;for(a=0;a+2<=this.data.length;a+=2){let s=r.indexOf(this.data[a])*45;s+=r.indexOf(this.data[a+1]),i.put(s,11)}this.data.length%2&&i.put(r.indexOf(this.data[a]),6)},n.exports=t}),Mt=L((e,n)=>{n.exports=function(o){for(var r=[],t=o.length,i=0;i<t;i++){var a=o.charCodeAt(i);if(a>=55296&&a<=56319&&t>i+1){var s=o.charCodeAt(i+1);s>=56320&&s<=57343&&(a=(a-55296)*1024+s-56320+65536,i+=1)}if(a<128){r.push(a);continue}if(a<2048){r.push(a>>6|192),r.push(a&63|128);continue}if(a<55296||a>=57344&&a<65536){r.push(a>>12|224),r.push(a>>6&63|128),r.push(a&63|128);continue}if(a>=65536&&a<=1114111){r.push(a>>18|240),r.push(a>>12&63|128),r.push(a>>6&63|128),r.push(a&63|128);continue}r.push(239,191,189)}return new Uint8Array(r).buffer}}),It=L((e,n)=>{var o=Mt(),r=j();function t(i){this.mode=r.BYTE,typeof i=="string"&&(i=o(i)),this.data=new Uint8Array(i)}t.getBitsLength=function(i){return i*8},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){for(let a=0,s=this.data.length;a<s;a++)i.put(this.data[a],8)},n.exports=t}),Pt=L((e,n)=>{var o=j(),r=F();function t(i){this.mode=o.KANJI,this.data=i}t.getBitsLength=function(i){return i*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let a;for(a=0;a<this.data.length;a++){let s=r.toSJIS(this.data[a]);if(s>=33088&&s<=40956)s-=33088;else if(s>=57408&&s<=60351)s-=49472;else throw new Error("Invalid SJIS character: "+this.data[a]+`
Make sure your charset is UTF-8`);s=(s>>>8&255)*192+(s&255),i.put(s,13)}},n.exports=t}),Bt=L((e,n)=>{var o={single_source_shortest_paths:function(r,t,i){var a={},s={};s[t]=0;var l=o.PriorityQueue.make();l.push(t,0);for(var u,c,d,f,p,h,E,R,y;!l.empty();){u=l.pop(),c=u.value,f=u.cost,p=r[c]||{};for(d in p)p.hasOwnProperty(d)&&(h=p[d],E=f+h,R=s[d],y=typeof s[d]>"u",(y||R>E)&&(s[d]=E,l.push(d,E),a[d]=c))}if(typeof i<"u"&&typeof s[i]>"u"){var v=["Could not find a path from ",t," to ",i,"."].join("");throw new Error(v)}return a},extract_shortest_path_from_predecessor_list:function(r,t){for(var i=[],a=t,s;a;)i.push(a),s=r[a],a=r[a];return i.reverse(),i},find_path:function(r,t,i){var a=o.single_source_shortest_paths(r,t,i);return o.extract_shortest_path_from_predecessor_list(a,i)},PriorityQueue:{make:function(r){var t=o.PriorityQueue,i={},a;r=r||{};for(a in t)t.hasOwnProperty(a)&&(i[a]=t[a]);return i.queue=[],i.sorter=r.sorter||t.default_sorter,i},default_sorter:function(r,t){return r.cost-t.cost},push:function(r,t){var i={value:r,cost:t};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};typeof n<"u"&&(n.exports=o)}),Tt=L(e=>{var n=j(),o=Ct(),r=Nt(),t=It(),i=Pt(),a=Le(),s=F(),l=Bt();function u(y){return unescape(encodeURIComponent(y)).length}function c(y,v,A){let C=[],B;for(;(B=y.exec(A))!==null;)C.push({data:B[0],index:B.index,mode:v,length:B[0].length});return C}function d(y){let v=c(a.NUMERIC,n.NUMERIC,y),A=c(a.ALPHANUMERIC,n.ALPHANUMERIC,y),C,B;return s.isKanjiModeEnabled()?(C=c(a.BYTE,n.BYTE,y),B=c(a.KANJI,n.KANJI,y)):(C=c(a.BYTE_KANJI,n.BYTE,y),B=[]),v.concat(A,C,B).sort(function(T,w){return T.index-w.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function f(y,v){switch(v){case n.NUMERIC:return o.getBitsLength(y);case n.ALPHANUMERIC:return r.getBitsLength(y);case n.KANJI:return i.getBitsLength(y);case n.BYTE:return t.getBitsLength(y)}}function p(y){return y.reduce(function(v,A){let C=v.length-1>=0?v[v.length-1]:null;return C&&C.mode===A.mode?(v[v.length-1].data+=A.data,v):(v.push(A),v)},[])}function h(y){let v=[];for(let A=0;A<y.length;A++){let C=y[A];switch(C.mode){case n.NUMERIC:v.push([C,{data:C.data,mode:n.ALPHANUMERIC,length:C.length},{data:C.data,mode:n.BYTE,length:C.length}]);break;case n.ALPHANUMERIC:v.push([C,{data:C.data,mode:n.BYTE,length:C.length}]);break;case n.KANJI:v.push([C,{data:C.data,mode:n.BYTE,length:u(C.data)}]);break;case n.BYTE:v.push([{data:C.data,mode:n.BYTE,length:u(C.data)}])}}return v}function E(y,v){let A={},C={start:{}},B=["start"];for(let T=0;T<y.length;T++){let w=y[T],_=[];for(let N=0;N<w.length;N++){let g=w[N],I=""+T+N;_.push(I),A[I]={node:g,lastCount:0},C[I]={};for(let b=0;b<B.length;b++){let m=B[b];A[m]&&A[m].node.mode===g.mode?(C[m][I]=f(A[m].lastCount+g.length,g.mode)-f(A[m].lastCount,g.mode),A[m].lastCount+=g.length):(A[m]&&(A[m].lastCount=g.length),C[m][I]=f(g.length,g.mode)+4+n.getCharCountIndicator(g.mode,v))}}B=_}for(let T=0;T<B.length;T++)C[B[T]].end=0;return{map:C,table:A}}function R(y,v){let A,C=n.getBestModeForData(y);if(A=n.from(v,C),A!==n.BYTE&&A.bit<C.bit)throw new Error('"'+y+'" cannot be encoded with mode '+n.toString(A)+`.
 Suggested mode is: `+n.toString(C));switch(A===n.KANJI&&!s.isKanjiModeEnabled()&&(A=n.BYTE),A){case n.NUMERIC:return new o(y);case n.ALPHANUMERIC:return new r(y);case n.KANJI:return new i(y);case n.BYTE:return new t(y)}}e.fromArray=function(y){return y.reduce(function(v,A){return typeof A=="string"?v.push(R(A,null)):A.data&&v.push(R(A.data,A.mode)),v},[])},e.fromString=function(y,v){let A=d(y,s.isKanjiModeEnabled()),C=h(A),B=E(C,v),T=l.find_path(B.map,"start","end"),w=[];for(let _=1;_<T.length-1;_++)w.push(B.table[T[_]].node);return e.fromArray(p(w))},e.rawSplit=function(y){return e.fromArray(d(y,s.isKanjiModeEnabled()))}}),Rt=L(e=>{var n=F(),o=de(),r=pt(),t=mt(),i=Be(),a=wt(),s=yt(),l=Te(),u=_t(),c=bt(),d=At(),f=j(),p=Tt();function h(w,_){let N=w.size,g=a.getPositions(_);for(let I=0;I<g.length;I++){let b=g[I][0],m=g[I][1];for(let P=-1;P<=7;P++)if(!(b+P<=-1||N<=b+P))for(let M=-1;M<=7;M++)m+M<=-1||N<=m+M||(P>=0&&P<=6&&(M===0||M===6)||M>=0&&M<=6&&(P===0||P===6)||P>=2&&P<=4&&M>=2&&M<=4?w.set(b+P,m+M,!0,!0):w.set(b+P,m+M,!1,!0))}}function E(w){let _=w.size;for(let N=8;N<_-8;N++){let g=N%2===0;w.set(N,6,g,!0),w.set(6,N,g,!0)}}function R(w,_){let N=i.getPositions(_);for(let g=0;g<N.length;g++){let I=N[g][0],b=N[g][1];for(let m=-2;m<=2;m++)for(let P=-2;P<=2;P++)m===-2||m===2||P===-2||P===2||m===0&&P===0?w.set(I+m,b+P,!0,!0):w.set(I+m,b+P,!1,!0)}}function y(w,_){let N=w.size,g=c.getEncodedBits(_),I,b,m;for(let P=0;P<18;P++)I=Math.floor(P/3),b=P%3+N-8-3,m=(g>>P&1)===1,w.set(I,b,m,!0),w.set(b,I,m,!0)}function v(w,_,N){let g=w.size,I=d.getEncodedBits(_,N),b,m;for(b=0;b<15;b++)m=(I>>b&1)===1,b<6?w.set(b,8,m,!0):b<8?w.set(b+1,8,m,!0):w.set(g-15+b,8,m,!0),b<8?w.set(8,g-b-1,m,!0):b<9?w.set(8,15-b-1+1,m,!0):w.set(8,15-b-1,m,!0);w.set(g-8,8,1,!0)}function A(w,_){let N=w.size,g=-1,I=N-1,b=7,m=0;for(let P=N-1;P>0;P-=2)for(P===6&&P--;;){for(let M=0;M<2;M++)if(!w.isReserved(I,P-M)){let z=!1;m<_.length&&(z=(_[m]>>>b&1)===1),w.set(I,P-M,z),b--,b===-1&&(m++,b=7)}if(I+=g,I<0||N<=I){I-=g,g=-g;break}}}function C(w,_,N){let g=new r;N.forEach(function(M){g.put(M.mode.bit,4),g.put(M.getLength(),f.getCharCountIndicator(M.mode,w)),M.write(g)});let I=n.getSymbolTotalCodewords(w),b=l.getTotalCodewordsCount(w,_),m=(I-b)*8;for(g.getLengthInBits()+4<=m&&g.put(0,4);g.getLengthInBits()%8!==0;)g.putBit(0);let P=(m-g.getLengthInBits())/8;for(let M=0;M<P;M++)g.put(M%2?17:236,8);return B(g,w,_)}function B(w,_,N){let g=n.getSymbolTotalCodewords(_),I=l.getTotalCodewordsCount(_,N),b=g-I,m=l.getBlocksCount(_,N),P=g%m,M=m-P,z=Math.floor(g/m),q=Math.floor(b/m),$e=q+1,he=z-q,Oe=new u(he),ne=0,X=new Array(m),ge=new Array(m),oe=0,ze=new Uint8Array(w.buffer);for(let H=0;H<m;H++){let ae=H<M?q:$e;X[H]=ze.slice(ne,ne+ae),ge[H]=Oe.encode(X[H]),ne+=ae,oe=Math.max(oe,ae)}let ie=new Uint8Array(g),pe=0,x,$;for(x=0;x<oe;x++)for($=0;$<m;$++)x<X[$].length&&(ie[pe++]=X[$][x]);for(x=0;x<he;x++)for($=0;$<m;$++)ie[pe++]=ge[$][x];return ie}function T(w,_,N,g){let I;if(Array.isArray(w))I=p.fromArray(w);else if(typeof w=="string"){let z=_;if(!z){let q=p.rawSplit(w);z=c.getBestVersionForData(q,N)}I=p.fromString(w,z||40)}else throw new Error("Invalid data");let b=c.getBestVersionForData(I,N);if(!b)throw new Error("The amount of data is too big to be stored in a QR Code");if(!_)_=b;else if(_<b)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+b+`.
`);let m=C(_,N,I),P=n.getSymbolSize(_),M=new t(P);return h(M,_),E(M),R(M,_),v(M,N,0),_>=7&&y(M,_),A(M,m),isNaN(g)&&(g=s.getBestMask(M,v.bind(null,M,N))),s.applyMask(g,M),v(M,N,g),{modules:M,version:_,errorCorrectionLevel:N,maskPattern:g,segments:I}}e.create=function(w,_){if(typeof w>"u"||w==="")throw new Error("No input text");let N=o.M,g,I;return typeof _<"u"&&(N=o.from(_.errorCorrectionLevel,o.M),g=c.from(_.version),I=s.from(_.maskPattern),_.toSJISFunc&&n.setToSJISFunction(_.toSJISFunc)),T(w,g,N,I)}}),ke=L(e=>{function n(o){if(typeof o=="number"&&(o=o.toString()),typeof o!="string")throw new Error("Color should be defined as hex string");let r=o.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+o);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(i){return[i,i]}))),r.length===6&&r.push("F","F");let t=parseInt(r.join(""),16);return{r:t>>24&255,g:t>>16&255,b:t>>8&255,a:t&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(o){o||(o={}),o.color||(o.color={});let r=typeof o.margin>"u"||o.margin===null||o.margin<0?4:o.margin,t=o.width&&o.width>=21?o.width:void 0,i=o.scale||4;return{width:t,scale:t?4:i,margin:r,color:{dark:n(o.color.dark||"#000000ff"),light:n(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},e.getScale=function(o,r){return r.width&&r.width>=o+r.margin*2?r.width/(o+r.margin*2):r.scale},e.getImageWidth=function(o,r){let t=e.getScale(o,r);return Math.floor((o+r.margin*2)*t)},e.qrToImageData=function(o,r,t){let i=r.modules.size,a=r.modules.data,s=e.getScale(i,t),l=Math.floor((i+t.margin*2)*s),u=t.margin*s,c=[t.color.light,t.color.dark];for(let d=0;d<l;d++)for(let f=0;f<l;f++){let p=(d*l+f)*4,h=t.color.light;if(d>=u&&f>=u&&d<l-u&&f<l-u){let E=Math.floor((d-u)/s),R=Math.floor((f-u)/s);h=c[a[E*i+R]?1:0]}o[p++]=h.r,o[p++]=h.g,o[p++]=h.b,o[p]=h.a}}}),Se=L(e=>{var n=ke();function o(t,i,a){t.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=a,i.width=a,i.style.height=a+"px",i.style.width=a+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(t,i,a){let s=a,l=i;typeof s>"u"&&(!i||!i.getContext)&&(s=i,i=void 0),i||(l=r()),s=n.getOptions(s);let u=n.getImageWidth(t.modules.size,s),c=l.getContext("2d"),d=c.createImageData(u,u);return n.qrToImageData(d.data,t,s),o(c,l,u),c.putImageData(d,0,0),l},e.renderToDataURL=function(t,i,a){let s=a;typeof s>"u"&&(!i||!i.getContext)&&(s=i,i=void 0),s||(s={});let l=e.render(t,i,s),u=s.type||"image/png",c=s.rendererOpts||{};return l.toDataURL(u,c.quality)}}),Ue=L(e=>{var n=ke();function o(i,a){let s=i.a/255,l=a+'="'+i.hex+'"';return s<1?l+" "+a+'-opacity="'+s.toFixed(2).slice(1)+'"':l}function r(i,a,s){let l=i+a;return typeof s<"u"&&(l+=" "+s),l}function t(i,a,s){let l="",u=0,c=!1,d=0;for(let f=0;f<i.length;f++){let p=Math.floor(f%a),h=Math.floor(f/a);!p&&!c&&(c=!0),i[f]?(d++,f>0&&p>0&&i[f-1]||(l+=c?r("M",p+s,.5+h+s):r("m",u,0),u=0,c=!1),p+1<a&&i[f+1]||(l+=r("h",d),d=0)):u++}return l}e.render=function(i,a,s){let l=n.getOptions(a),u=i.modules.size,c=i.modules.data,d=u+l.margin*2,f=l.color.light.a?"<path "+o(l.color.light,"fill")+' d="M0 0h'+d+"v"+d+'H0z"/>':"",p="<path "+o(l.color.dark,"stroke")+' d="'+t(c,u,l.margin)+'"/>',h='viewBox="0 0 '+d+" "+d+'"',E='<svg xmlns="http://www.w3.org/2000/svg" '+(l.width?'width="'+l.width+'" height="'+l.width+'" ':"")+h+' shape-rendering="crispEdges">'+f+p+`</svg>
`;return typeof s=="function"&&s(null,E),E}}),Lt=L(e=>{var n=gt(),o=Rt(),r=Se(),t=Ue();function i(a,s,l,u,c){let d=[].slice.call(arguments,1),f=d.length,p=typeof d[f-1]=="function";if(!p&&!n())throw new Error("Callback required as last argument");if(p){if(f<2)throw new Error("Too few arguments provided");f===2?(c=l,l=s,s=u=void 0):f===3&&(s.getContext&&typeof c>"u"?(c=u,u=void 0):(c=u,u=l,l=s,s=void 0))}else{if(f<1)throw new Error("Too few arguments provided");return f===1?(l=s,s=u=void 0):f===2&&!s.getContext&&(u=l,l=s,s=void 0),new Promise(function(h,E){try{let R=o.create(l,u);h(a(R,s,u))}catch(R){E(R)}})}try{let h=o.create(l,u);c(null,a(h,s,u))}catch(h){c(h)}}e.create=o.create,e.toCanvas=i.bind(null,r.render),e.toDataURL=i.bind(null,r.renderToDataURL),e.toString=i.bind(null,function(a,s,l){return t.render(a,l)})}),xe=re(Lt()),kt=re(Be());async function St(e){if(!e.logo)return xe.default.create(e.data,{errorCorrectionLevel:"H"});let{qr:n,logo:o}=Ut(e.data,e.logo);return xt(n,o)}function Ut(e,n){let o=Object.keys(n).reduce((r,t)=>Math.max(r,Number.parseInt(t)),0);for(let r=e;;r+=`
`){let t=xe.default.create(r,{errorCorrectionLevel:"H"});if(t.modules.size in n||t.modules.size>o)return{qr:t,logo:n[t.modules.size]??n[o]}}}function xt(e,n){let o=Array.from(e.modules.data),r=n[0].length,t=n.length,i=e.modules.size,a=Math.floor((i-r)/2),s=Math.floor((i-t)/2),l=$t(e.version);for(let u=0;u<t;u++)for(let c=0;c<r;c++)if(n[u][c]){let d=a+c,f=s+u;l(d,f)||(o[f*i+d]=n[u][c]-1)}return e.modules.data=new Uint8Array(o),e}function $t(e){let n=e*4+17,o=Math.floor(e/7)+2,r=(0,kt.getPositions)(e);return o%2===0?(r.splice(o/2*o+o/2-1-2,2),r.splice((o/2-1)*o+o/2-1-2,2)):r.splice((r.length+3-1)/2-2,1),(t,i)=>t===6||i===6||t<=8&&i<=8||t>=n-8&&i<=8||t<=8&&i>=n-8||r.some(([a,s])=>a-2<=t&&t<a+3&&s-2<=i&&i<s+3)}var Ot=re(Se()),zt=re(Ue());function Dt(e,n){return Ot.renderToDataURL(e,n)}function Ft(e,n){var r;let o=zt.render(e,n).match(/^(.+)(<path fill="#ffffff" d="M0 0h\d+v\d+H0z"\/><path stroke="#000000" d=")(.+)("\/><\/svg>)\n$/);if(!o)throw new Error("SVG parse error");return o[1]+'<path fill="#000000" d="'+((r=o[3].match(/M\d+ \d+\.5|m\d+ 0|h\d+/g))==null?void 0:r.map(t=>{switch(t[0]){case"M":return t.slice(0,-2);case"m":return t;case"h":return"v1"+t+"v-1";default:throw new Error("SVG parse error")}}).join(""))+o[4]}function Jt(e){if(typeof e=="string"){if(e.length!==3)throw new Error(`Invalid logo definition: chars must be 3 characters, but got ${e.length}`);if(e[0]===e[1]||e[1]===e[2]||e[2]===e[0])throw new Error("Invalid logo definition: chars must have 3 different characters");return Ae(e)}else return Ae(".-*")(e)}function Ae(e){return function(n){let o=n[0].replace(/^\n|\n$/g,"").split(`
`).map(r=>[...r].map(t=>{let i=e.indexOf(t);if(i<0)throw new Error(`Invalid character: ${t}`);return i}));if(o.some(r=>r.length!==o[0].length))throw new Error("Invalid logo definition: all lines must have the same length");return o}}function Ce(e){let n,o,r,t,i,a,s,l,u,c,d,f,p,h,E,R,y,v,A,C;return{c(){n=U("a"),o=U("img"),a=J(),s=U("section"),l=U("a"),u=te("画像ダウンロード "),c=U("small"),c.textContent="(PNG)",p=J(),h=U("a"),E=te("画像ダウンロード "),R=U("small"),R.textContent="(SVG)",A=J(),C=U("p"),C.textContent="⚠️ 出来上がったQRコードが読み取れるか必ず確認してから使ってください。",ye(o.src,r=e[3].png)||k(o,"src",r),k(o,"alt","QRコード"),k(n,"href",t=e[3].png),k(n,"download",i=e[4]+".png"),k(l,"href",d=e[3].png),k(l,"download",f=e[4]+".png"),k(l,"class","button primary"),k(h,"href",y=e[3].svg),k(h,"download",v=e[4]+".svg"),k(h,"class","button secondary"),k(s,"class","download-buttons")},m(B,T){D(B,n,T),S(n,o),D(B,a,T),D(B,s,T),S(s,l),S(l,u),S(l,c),S(s,p),S(s,h),S(h,E),S(h,R),D(B,A,T),D(B,C,T)},p(B,T){T&8&&!ye(o.src,r=B[3].png)&&k(o,"src",r),T&8&&t!==(t=B[3].png)&&k(n,"href",t),T&16&&i!==(i=B[4]+".png")&&k(n,"download",i),T&8&&d!==(d=B[3].png)&&k(l,"href",d),T&16&&f!==(f=B[4]+".png")&&k(l,"download",f),T&8&&y!==(y=B[3].svg)&&k(h,"href",y),T&16&&v!==(v=B[4]+".svg")&&k(h,"download",v)},d(B){B&&(O(n),O(a),O(s),O(A),O(C))}}}function jt(e){let n,o,r,t,i,a,s,l,u,c,d,f,p,h=e[3]&&Ce(e);return{c(){n=U("main"),o=U("input"),r=J(),t=U("section"),i=U("label"),a=U("input"),l=te("ロゴ入り"),u=J(),h&&h.c(),c=J(),d=U("footer"),d.innerHTML='<a href="https://twitter.com/p_km">Made by <img src="https://kissge.github.io/shared/me-mini-512.png" alt="Yusuke Kido"/></a> <a href="https://badge.fury.io/js/%40kissge%2Fkissqr"><img src="https://badge.fury.io/js/%40kissge%2Fkissqr.svg" alt="npm version"/></a>',k(o,"type","url"),k(o,"placeholder","https://..."),k(a,"type","checkbox"),a.disabled=s=!e[2],k(t,"class","input-options")},m(E,R){D(E,n,R),S(n,o),Ee(o,e[0]),S(n,r),S(n,t),S(t,i),S(i,a),a.checked=e[1],S(i,l),S(n,u),h&&h.m(n,null),D(E,c,R),D(E,d,R),f||(p=[ve(o,"input",e[5]),ve(a,"change",e[6])],f=!0)},p(E,[R]){R&1&&o.value!==E[0]&&Ee(o,E[0]),R&4&&s!==(s=!E[2])&&(a.disabled=s),R&2&&(a.checked=E[1]),E[3]?h?h.p(E,R):(h=Ce(E),h.c(),h.m(n,null)):h&&(h.d(1),h=null)},i:Z,o:Z,d(E){E&&(O(n),O(c),O(d)),h&&h.d(),f=!1,G(p)}}}function Ht(e,n,o){let r,t="",i=!0,a=null,s=null;Qe(async()=>{const c=new URLSearchParams(location.search).get("logo")||"kissge";await Ke(Object.assign({"./logo/logo-kissge.ts":()=>le(()=>import("./logo-kissge-jSd3dFFe.js"),__vite__mapDeps([]),import.meta.url),"./logo/logo-legalscape.ts":()=>le(()=>import("./logo-legalscape-aRZmvmyB.js"),__vite__mapDeps([]),import.meta.url),"./logo/logo-liveart.ts":()=>le(()=>import("./logo-liveart-6Mqb8HZ7.js"),__vite__mapDeps([]),import.meta.url)}),`./logo/logo-${c}.ts`).then(d=>o(2,s=d.default)).catch(()=>{o(2,s=null),o(1,i=!1)}),o(0,t=location.href)});function l(){t=this.value,o(0,t)}function u(){i=this.checked,o(1,i)}return e.$$.update=()=>{e.$$.dirty&7&&t&&St({data:t,logo:i&&s||void 0}).then(c=>{o(3,a={svg:URL.createObjectURL(new Blob([Ft(c)],{type:"image/svg+xml"})),png:Dt(c,{scale:c.modules.size>40?10:40})})}),e.$$.dirty&1&&o(4,r="kissqr-"+t.replace(/[^a-zA-Z0-9.=-]+/g,"_").replace(/_+/g,""))},[t,i,s,a,r,l,u]}class Kt extends at{constructor(n){super(),it(this,n,Ht,jt,Ye,{})}}new Kt({target:document.getElementById("app")});export{Jt as N};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}