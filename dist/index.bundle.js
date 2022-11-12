(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"body {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 20px;\r\n  box-sizing: border-box;\r\n  background: #f3f2f2;\r\n}\r\n\r\n.main-container {\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  margin: 10% 10%;\r\n  box-shadow: 3px 3px 3px 3px gray;\r\n  padding: 3%;\r\n}\r\n\r\nh1 {\r\n  font-size: 22px;\r\n  font-weight: normal;\r\n}\r\n\r\ninput {\r\n  border: 0;\r\n  outline: 0;\r\n  padding: 0.2rem;\r\n}\r\n\r\nhr {\r\n  border: 0.1px solid #f3f2f2;\r\n  margin: 0;\r\n}\r\n\r\ni {\r\n  cursor: pointer;\r\n  color: gray;\r\n}\r\n\r\n.my-button {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.my-button:hover {\r\n  text-decoration: underline;\r\n  color: #000;\r\n}\r\n\r\n.head {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-left: 3%;\r\n  padding-right: 3%;\r\n}\r\n\r\n.adding-to-do-list {\r\n  display: flex;\r\n  padding-right: 3%;\r\n  padding-left: 3%;\r\n  justify-content: space-between;\r\n}\r\n\r\n.checkbox {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.to-do-pop {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-right: 5%;\r\n}\r\n",""]);const c=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=t.base?s[0]+t.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var v=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);r[c].references--}for(var s=t(n,o),d=0;d<a.length;d++){var l=e(a[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),a=e(569),i=e.n(a),c=e(565),s=e.n(c),d=e(216),l=e.n(d),p=e(589),u=e.n(p),f=e(426),v={};v.styleTagTransform=u(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),r()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const h=document.querySelector(".to-do-list");let m=" ";[{description:"write code",completed:!0,i:0},{description:"read a novel",completed:!0,i:1},{description:"watch a movie",completed:!0,i:2},{description:"play with kids",completed:!0,i:3}].forEach((n=>{m+=`\n        <div class="to-do-pop">\n            <div class="checkbox">\n                <input\n                    type="checkbox"\n                    id="to-do-check"\n                    name="To-Do"\n                    value="Add"\n                    class="my-checkbox"\n                />\n                \n                <label for="todo" class="my-label">${n.description}</label><br />\n            </div>\n            <i class="fa-solid fa-ellipsis-vertical"></i>\n        </div>\n      <hr />\n        \n        `})),h.innerHTML=m})()})();