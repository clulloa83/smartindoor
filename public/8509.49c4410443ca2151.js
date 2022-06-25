"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8509],{8509:(G,T,m)=>{m.r(T),m.d(T,{startInputShims:()=>Y});var D=m(5861),L=m(6465),v=m(3756);const b=new WeakMap,y=(e,n,t,o=0)=>{b.has(e)!==t&&(t?B(e,n,o):M(e,n))},I=e=>e===e.getRootNode().activeElement,B=(e,n,t)=>{const o=n.parentNode,r=n.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o.appendChild(r),b.set(e,r);const s="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",n.style.transform=`translate3d(${s}px,${t}px,0) scale(0)`},M=(e,n)=>{const t=b.get(e);t&&(b.delete(e),t.remove()),e.style.pointerEvents="",n.style.transform=""},A="input, textarea, [no-blur], [contenteditable]",F=function(){var e=(0,D.Z)(function*(n,t,o,r,i){if(!o&&!r)return;const s=((e,n,t)=>((e,n,t,o)=>{const r=e.top,i=e.bottom,s=n.top,a=s+15,f=.75*Math.min(n.bottom,o-t)-i,S=a-r,u=Math.round(f<0?-f:S>0?-S:0),c=Math.min(u,r-s),_=Math.abs(c)/.3;return{scrollAmount:c,scrollDuration:Math.min(400,Math.max(150,_)),scrollPadding:t,inputSafeY:4-(r-a)}})((e.closest("ion-item,[ion-item]")||e).getBoundingClientRect(),n.getBoundingClientRect(),t,e.ownerDocument.defaultView.innerHeight))(n,o||r,i);if(o&&Math.abs(s.scrollAmount)<4)t.focus();else if(y(n,t,!0,s.inputSafeY),t.focus(),(0,v.r)(()=>n.click()),typeof window<"u"){let d;const a=function(){var f=(0,D.Z)(function*(){void 0!==d&&clearTimeout(d),window.removeEventListener("ionKeyboardDidShow",l),window.removeEventListener("ionKeyboardDidShow",a),o&&(yield(0,L.c)(o,0,s.scrollAmount,s.scrollDuration)),y(n,t,!1,s.inputSafeY),t.focus()});return function(){return f.apply(this,arguments)}}(),l=()=>{window.removeEventListener("ionKeyboardDidShow",l),window.addEventListener("ionKeyboardDidShow",a)};if(o){const f=yield(0,L.g)(o);if(s.scrollAmount>f.scrollHeight-f.clientHeight-f.scrollTop)return"password"===t.type?(s.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",l)):window.addEventListener("ionKeyboardDidShow",a),void(d=setTimeout(a,1e3))}a()}});return function(t,o,r,i,s){return e.apply(this,arguments)}}(),P="$ionPaddingTimer",p=(e,n)=>{var t,o;if("INPUT"!==e.tagName||e.parentElement&&"ION-INPUT"===e.parentElement.tagName||"ION-SEARCHBAR"===(null===(o=null===(t=e.parentElement)||void 0===t?void 0:t.parentElement)||void 0===o?void 0:o.tagName))return;const r=(0,L.f)(e);if(null===r)return;const i=r[P];i&&clearTimeout(i),n>0?r.style.setProperty("--keyboard-offset",`${n}px`):r[P]=setTimeout(()=>{r.style.setProperty("--keyboard-offset","0px")},120)},Y=e=>{const n=document,t=e.getNumber("keyboardHeight",290),o=e.getBoolean("scrollAssist",!0),r=e.getBoolean("hideCaretOnScroll",!0),i=e.getBoolean("inputBlurring",!0),s=e.getBoolean("scrollPadding",!0),d=Array.from(n.querySelectorAll("ion-input, ion-textarea")),a=new WeakMap,l=new WeakMap,f=function(){var u=(0,D.Z)(function*(c){yield new Promise(g=>(0,v.c)(c,g));const w=c.shadowRoot||c,_=w.querySelector("input")||w.querySelector("textarea"),h=(0,L.f)(c),C=h?null:c.closest("ion-footer");if(_){if(h&&r&&!a.has(c)){const g=((e,n,t)=>{if(!t||!n)return()=>{};const o=d=>{I(n)&&y(e,n,d)},r=()=>y(e,n,!1),i=()=>o(!0),s=()=>o(!1);return(0,v.a)(t,"ionScrollStart",i),(0,v.a)(t,"ionScrollEnd",s),n.addEventListener("blur",r),()=>{(0,v.b)(t,"ionScrollStart",i),(0,v.b)(t,"ionScrollEnd",s),n.addEventListener("ionBlur",r)}})(c,_,h);a.set(c,g)}if((h||C)&&o&&!l.has(c)){const g=((e,n,t,o,r)=>{let i;const s=a=>{i=(0,v.p)(a)},d=a=>{if(!i)return;const l=(0,v.p)(a);!((e,n,t)=>{if(n&&t){const o=n.x-t.x,r=n.y-t.y;return o*o+r*r>e*e}return!1})(6,i,l)&&!I(n)&&F(e,n,t,o,r)};return e.addEventListener("touchstart",s,!0),e.addEventListener("touchend",d,!0),()=>{e.removeEventListener("touchstart",s,!0),e.removeEventListener("touchend",d,!0)}})(c,_,h,C,t);l.set(c,g)}}});return function(w){return u.apply(this,arguments)}}();i&&(()=>{let e=!0,n=!1;const t=document;(0,v.a)(t,"ionScrollStart",()=>{n=!0}),t.addEventListener("focusin",()=>{e=!0},!0),t.addEventListener("touchend",s=>{if(n)return void(n=!1);const d=t.activeElement;if(!d||d.matches(A))return;const a=s.target;a!==d&&(a.matches(A)||a.closest(A)||(e=!1,setTimeout(()=>{e||d.blur()},50)))},!1)})(),s&&(e=>{const n=document;n.addEventListener("focusin",r=>{p(r.target,e)}),n.addEventListener("focusout",r=>{p(r.target,0)})})(t);for(const u of d)f(u);n.addEventListener("ionInputDidLoad",u=>{f(u.detail)}),n.addEventListener("ionInputDidUnload",u=>{(u=>{if(r){const c=a.get(u);c&&c(),a.delete(u)}if(o){const c=l.get(u);c&&c(),l.delete(u)}})(u.detail)})}}}]);