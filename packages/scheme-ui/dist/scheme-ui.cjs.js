"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("react"),r=require("rebass/styled-components"),n=require("@rebass/forms/styled-components"),o=require("styled-components"),a=require("polished");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=s(t),u=function(){function e(e,t){void 0===e&&(e=null),void 0===t&&(t=500),this.value=e,this.delay=t,this.timeout=null}return e.prototype.getValue=function(){return this.value},e.prototype.setValue=function(e,t){var r=this;clearTimeout(this.timeout),this.timeout=setTimeout((function(){r.value=e,t(e)}),this.delay)},e}(),c=function(e,r){var n=function(t){e.current&&!e.current.contains(t.target)&&r(t)};t.useEffect((function(){return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}))},l=t.forwardRef((function(t,n){return i.default.createElement(r.Box,e.__assign({color:"text"},t,{ref:n}))}));l.displayName="Box";var d=t.forwardRef((function(t,n){return i.default.createElement(r.Flex,e.__assign({color:"text"},t,{ref:n}))}));d.displayName="Flex";var f,g=function(t){return i.default.createElement(n.Input,e.__assign({},t,{sx:e.__assign({borderRadius:3,borderColor:"transparent",bg:"gray5",p:"0.9em",color:"gray80"},t.sx||{})}))},v=function(r){var n=r.value,o=r.placeholder,a=r.items,s=void 0===a?[]:a,u=r.menuProps,d=void 0===u?{}:u,f=r.inputProps,v=void 0===f?{}:f,m=r.onChange,p=r.onSelect,_=r.keyExtractor,h=r.renderItem,x=t.useRef(),b=t.useState(!1),k=b[0],y=b[1],E=t.useState(0),S=E[0],w=E[1];t.useEffect((function(){!function(e,t){var r=e;if(null==r?void 0:r.children){var n=r.children[t];if(n){var o=n.offsetTop,a=r.scrollTop,s=r.offsetHeight,i=n.offsetHeight;if(o+i>s+a){var u=o+i-s;r.scrollTo(0,u)}else o<a&&r.scrollTo(0,o)}}}(x.current,S)}),[S]);var C=t.useRef();c(C,(function(){return y(!1)}));var z=function(e){y(!1),p(e)};return i.default.createElement(l,{sx:{position:"relative"},ref:C},i.default.createElement(g,e.__assign({placeholder:o,value:n,onChange:m,onFocus:function(e){var t;y(!0),null===(t=v.onFocus)||void 0===t||t.call(v,e)},onKeyDown:function(e){var t=S;switch(e.key){case"ArrowUp":e.preventDefault(),S-1<0||(t-=1);break;case"ArrowDown":e.preventDefault(),S+1>=s.length||(t+=1);break;case"Enter":e.preventDefault(),z(s[S])}w(t)}},v)),k&&!!s.length&&i.default.createElement(l,e.__assign({ref:x},d,{sx:e.__assign({position:"absolute",bg:"bg-2",maxHeight:300,width:"100%",overflow:"auto",zIndex:2,marginTop:1,borderRadius:5,boxShadow:"large",borderStyle:"solid",borderColor:"gray5",borderWidth:1},(null==d?void 0:d.sx)||{})}),s.map((function(e,t){return i.default.createElement(l,{onClick:function(){return z(e)},key:_(e)},h(e,t===S))}))))},m={color:"gray90"},p=function(t){return i.default.createElement(r.Text,e.__assign({as:"p"},m,t))};!function(e){e.mode="settings:dark:mode",e.value="settings:dark:value"}(f||(f={}));var _=i.default.createContext({colors:null,scheme:"light"}),h=function(){return t.useContext(_)};function x(){return h().colors}var b={text:"#282C30",gray5:a.darken(.05,"#F8F8F8")},k={s:{px:"0.65em",py:"0.5em",fontSize:"14px"}},y=function(e){return{bg:"transparent",color:e,border:"1px solid ".concat(a.transparentize(.75,e)),":hover":{bg:e?a.transparentize(.95,e):a.transparentize(.95,"black")},":active":{bg:e?a.transparentize(.92,e):a.transparentize(.92,"black")}}},E=function(e){return{bg:"transparent",boxShadow:"none",color:e,":hover":{bg:e?a.transparentize(.9,e):a.transparentize(.9,"black")},":active":{bg:e?a.transparentize(.85,e):a.transparentize(.85,"black")}}},S=function(t,r){var n={opacity:.5,cursor:"initial",bg:r};return t?e.__assign(e.__assign({},n),{":focus,:active,:hover":e.__assign({},n)}):{}};function w(t){var n=t.children,o=t.color,s=void 0===o?"text":o,u=t.bgProp,c=void 0===u?"gray5":u,l=t.sx,d=t.startIcon,f=t.variant,g=t.size,v=t.onClick,m=t.endIcon,p=t.enabled,_=void 0===p||p,h=x()||b,w=h[s]||s,C=h[c]||c;return i.default.createElement(r.Button,e.__assign({},t,{sx:e.__assign(e.__assign(e.__assign(e.__assign(e.__assign({display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontWeight:"bold",color:w,bg:C,":focus":{outline:"none"},":hover":{bg:a.darken(.05,C)},":active":{bg:a.darken(.1,C)}},g&&k[g]?k[g]:{}),"outline"===f&&w?y(w):{}),"transparent"===f&&w?E(w):{}),S(!_,"outline"===f?"transparent":C)),l),disabled:!_,variant:f,onClick:v}),d&&i.default.createElement(r.Flex,{mr:2,alignItems:"center"},d),n,m&&i.default.createElement(r.Flex,{ml:2,alignItems:"center"},m))}function C(e,r){void 0===r&&(r=500);var n=t.useState(e),o=n[0],a=n[1],s=t.useRef(new u(e,r));return t.useEffect((function(){s.current.setValue(e,(function(){a(e)}))}),[e,r]),o}var z=v,I=l,T=d,F=w,R=g,P=p,q=u,A=c,D=x,H=C,B=h;exports.A=function(t){return i.default.createElement(r.Text,e.__assign({as:"a",fontSize:16,fontWeight:400},m,t))},exports.Autocomplete=z,exports.AutocompleteMenuItem=function(t){var r=t.onSelect,n=t.text,o=t.focused,a=t.sx,s=void 0===a?{}:a;return i.default.createElement(p,{p:2,sx:e.__assign(e.__assign({cursor:"pointer",":hover":{bg:"gray10"}},o?{bg:"gray10"}:{}),{sx:s}),onClick:r},n)},exports.Box=I,exports.Button=F,exports.Card=function(t){var r=t.boxShadow,n=void 0===r?"large":r;return i.default.createElement(l,e.__assign({p:[3,4],bg:"bg-0",color:"text"},t,{sx:e.__assign({boxShadow:n,borderRadius:10},t.sx||{})}))},exports.Debouncer=q,exports.FetchAutocomplete=function(r){var n=r.onSelect,o=r.request,a=r.formatResponse,s=r.debounce,u=void 0===s?500:s,c=t.useState([]),l=c[0],d=c[1],f=C(r.value,u);return t.useEffect((function(){var t;t=f,e.__awaiter(void 0,void 0,void 0,(function(){var r,n;return e.__generator(this,(function(e){switch(e.label){case 0:return[4,o(t)];case 1:return(r=e.sent())&&(n=a(r),d(n)),[2]}}))}))}),[f]),i.default.createElement(v,e.__assign({},r,{items:l,onSelect:n}))},exports.Flex=T,exports.H1=function(t){return i.default.createElement(r.Text,e.__assign({as:"h1",fontWeight:700},m,t))},exports.H2=function(t){return i.default.createElement(r.Text,e.__assign({as:"h2"},m,t))},exports.H3=function(t){return i.default.createElement(r.Text,e.__assign({as:"h3"},m,t))},exports.H4=function(t){return i.default.createElement(r.Text,e.__assign({as:"h4"},m,t))},exports.IconButton=function(t){var r=t.icon,n=t.sx,o=t.round,a=t.iconSize,s=void 0===a?24:a,u=t.onClick,c=e.__rest(t,["icon","sx","round","iconSize","onClick"]);return i.default.createElement(w,e.__assign({},c,{onClick:u,sx:e.__assign(e.__assign({fontSize:s,width:"1.75em",height:"1.75em",padding:0},o?{borderRadius:50}:{}),n)}),r)},exports.Input=R,exports.P=P,exports.SchemeProvider=function(r){var n=r.theme,a=void 0===n?{}:n,s=r.scheme,u=void 0===s?"":s,c=r.colorSchemes,l=void 0===c?{}:c,d=r.children,g=function(){var r=this,n=t.useState("light"),o=n[0],a=n[1],s=t.useState("light"),i=s[0],u=s[1],c=t.useState(!0),l=c[0],d=c[1],g=function(){return e.__awaiter(r,void 0,void 0,(function(){var t,r,n;return e.__generator(this,(function(o){switch(o.label){case 0:return[4,e.__awaiter(void 0,void 0,void 0,(function(){return e.__generator(this,(function(e){switch(e.label){case 0:return[4,Promise.all([localStorage.getItem(f.mode),localStorage.getItem(f.value)])];case 1:return[2,e.sent()]}}))}))];case 1:return t=o.sent(),r=t[0],n=t[1],"user"===r&&(n&&n!==i&&u(n),d(!1)),[2]}}))}))};return t.useEffect((function(){var e=function(e){var t=e.matches?"dark":"light";a(t)};g(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e);var t=window.matchMedia("(prefers-color-scheme: dark)")?"dark":"light";return a(t),function(){window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",e)}}),[]),{scheme:l?o:i,userScheme:i,auto:l,setScheme:function(e){localStorage.setItem(f.value,e),u(e)},setAuto:function(e){e?localStorage.setItem(f.mode,"auto"):localStorage.setItem(f.mode,"user"),d(e)}}}(),v=l[u]||l[g.scheme]||l[Object.keys(l)[0]];return i.default.createElement(_.Provider,{value:e.__assign(e.__assign({},g),{colors:v})},i.default.createElement(o.ThemeProvider,{theme:e.__assign(e.__assign({},a),{colors:v})},d))},exports.Switch=function(t){var r=t.color,o=void 0===r?"primary":r,a=t.disabled,s=t.checked;return i.default.createElement(n.Switch,e.__assign({sx:{borderColor:s?o:"gray10",opacity:a?.5:1,"> div":{backgroundColor:"bg-0",borderColor:s?o:"gray20"},"&[aria-checked=false]":{bg:"gray5"},"&[aria-checked=true]":{bg:o}}},t))},exports.useClickOutside=A,exports.useColors=D,exports.useDebounce=H,exports.useSchemeContext=B;
