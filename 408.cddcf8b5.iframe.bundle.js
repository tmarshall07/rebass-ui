"use strict";(self.webpackChunkscheme_ui=self.webpackChunkscheme_ui||[]).push([[408],{"./packages/scheme-ui/src/components/Autocomplete.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/scheme-ui/src/hooks/useClickOutside.ts"),_Box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/scheme-ui/src/components/Box.tsx"),_Input__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/scheme-ui/src/components/Input.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var updateScroll=function(el,index){if(null==el?void 0:el.children){var child=el.children[index];if(child){var childOffsetTop=child.offsetTop,parentScrollTop=el.scrollTop,parentHeight=el.offsetHeight,childHeight=child.offsetHeight;childOffsetTop+childHeight>parentHeight+parentScrollTop?el.scrollTo(0,childOffsetTop+childHeight-parentHeight):childOffsetTop<parentScrollTop&&el.scrollTo(0,childOffsetTop)}}},Autocomplete1=function(props){var value=props.value,placeholder=props.placeholder,_props_items=props.items,items=void 0===_props_items?[]:_props_items,_props_menuProps=props.menuProps,menuProps=void 0===_props_menuProps?{}:_props_menuProps,_props_inputProps=props.inputProps,inputProps=void 0===_props_inputProps?{}:_props_inputProps,onChange=props.onChange,onSelect=props.onSelect,keyExtractor=props.keyExtractor,renderItem=props.renderItem,menuRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),menuVisible=_useState[0],setMenuVisible=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),2),focusedIndex=_useState1[0],setFocusedIndex=_useState1[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){updateScroll(menuRef.current,focusedIndex)},[focusedIndex]);var containerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();(0,_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_1__.Z)(containerRef,function(){return setMenuVisible(!1)});var handleSelect=function(item){setMenuVisible(!1),onSelect(item)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box__WEBPACK_IMPORTED_MODULE_2__.ZP,{sx:{position:"relative"},ref:containerRef},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Input__WEBPACK_IMPORTED_MODULE_3__.Z,_object_spread({placeholder:placeholder,value:value,onChange:onChange,onFocus:function(e){var _inputProps_onFocus;setMenuVisible(!0),null===(_inputProps_onFocus=inputProps.onFocus)||void 0===_inputProps_onFocus||_inputProps_onFocus.call(inputProps,e)},onKeyDown:function(e){var newFocusedIndex=focusedIndex;switch(e.key){case"ArrowUp":e.preventDefault(),focusedIndex-1<0||(newFocusedIndex-=1);break;case"ArrowDown":e.preventDefault(),focusedIndex+1>=items.length||(newFocusedIndex+=1);break;case"Enter":e.preventDefault(),handleSelect(items[focusedIndex])}setFocusedIndex(newFocusedIndex)}},inputProps)),menuVisible&&!!items.length&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box__WEBPACK_IMPORTED_MODULE_2__.ZP,_object_spread_props(_object_spread({ref:menuRef},menuProps),{sx:_object_spread({position:"absolute",bg:"bg-2",maxHeight:300,width:"100%",overflow:"auto",zIndex:2,marginTop:1,borderRadius:5,boxShadow:"large",borderStyle:"solid",borderColor:"gray5",borderWidth:1},(null==menuProps?void 0:menuProps.sx)||{})}),items.map(function(item,i){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box__WEBPACK_IMPORTED_MODULE_2__.ZP,{onClick:function(){return handleSelect(item)},key:keyExtractor(item)},renderItem(item,i===focusedIndex))})))};let __WEBPACK_DEFAULT_EXPORT__=Autocomplete1;try{Autocomplete1.displayName="Autocomplete",Autocomplete1.__docgenInfo={description:"",displayName:"Autocomplete",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"Item[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},menuProps:{defaultValue:null,description:"",name:"menuProps",required:!1,type:{name:"_BoxProps"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"InputProps"}},keyExtractor:{defaultValue:null,description:"",name:"keyExtractor",required:!0,type:{name:"(item: Item) => string | number"}},renderItem:{defaultValue:null,description:"",name:"renderItem",required:!0,type:{name:"(item: Item, hasFocus: boolean) => ReactChild"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: ChangeEvent<Element>) => void"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(item: Item) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/scheme-ui/src/components/Autocomplete.tsx#Autocomplete"]={docgenInfo:Autocomplete1.__docgenInfo,name:"Autocomplete",path:"packages/scheme-ui/src/components/Autocomplete.tsx#Autocomplete"})}catch(__react_docgen_typescript_loader_error){}},"./packages/scheme-ui/src/components/AutocompleteMenuItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/scheme-ui/src/components/Text.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}var AutocompleteMenuItem=function(props){var onSelect=props.onSelect,text=props.text,focused=props.focused,_props_sx=props.sx;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Text__WEBPACK_IMPORTED_MODULE_1__.P,{p:2,sx:_object_spread({cursor:"pointer",":hover":{bg:"gray10"}},focused?{bg:"gray10"}:{},{sx:void 0===_props_sx?{}:_props_sx}),onClick:onSelect},text)};let __WEBPACK_DEFAULT_EXPORT__=AutocompleteMenuItem;try{AutocompleteMenuItem.displayName="AutocompleteMenuItem",AutocompleteMenuItem.__docgenInfo={description:"",displayName:"AutocompleteMenuItem",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(item: any) => void"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps"}},focused:{defaultValue:null,description:"",name:"focused",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/scheme-ui/src/components/AutocompleteMenuItem.tsx#AutocompleteMenuItem"]={docgenInfo:AutocompleteMenuItem.__docgenInfo,name:"AutocompleteMenuItem",path:"packages/scheme-ui/src/components/AutocompleteMenuItem.tsx#AutocompleteMenuItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/scheme-ui/src/components/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/scheme-ui/src/components/Box.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var Card=function(props){var _props_boxShadow=props.boxShadow;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box__WEBPACK_IMPORTED_MODULE_1__.ZP,_object_spread_props(_object_spread({p:[3,4],bg:"bg-0",color:"text"},props),{sx:_object_spread({boxShadow:void 0===_props_boxShadow?"large":_props_boxShadow,borderRadius:10},props.sx||{})}))};let __WEBPACK_DEFAULT_EXPORT__=Card;try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/scheme-ui/src/components/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"packages/scheme-ui/src/components/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./packages/scheme-ui/src/components/Switch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_rebass_forms_styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@rebass/forms/styled-components/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}var Switch=function(props){var _props_color=props.color,color=void 0===_props_color?"primary":_props_color,disabled=props.disabled,checked=props.checked;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_rebass_forms_styled_components__WEBPACK_IMPORTED_MODULE_1__.rs,_object_spread({sx:{borderColor:checked?color:"gray10",opacity:disabled?.5:1,"> div":{backgroundColor:"bg-0",borderColor:checked?color:"gray20"},"&[aria-checked=false]":{bg:"gray5"},"&[aria-checked=true]":{bg:color}}},props))};let __WEBPACK_DEFAULT_EXPORT__=Switch;try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/scheme-ui/src/components/Switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"packages/scheme-ui/src/components/Switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}},"./packages/scheme-ui/src/components/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H1:()=>H1,H2:()=>H2,H3:()=>H3,H4:()=>H4,P:()=>P,x:()=>Text});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),rebass_styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rebass/styled-components/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}var base={color:"gray90"},P=function(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(rebass_styled_components__WEBPACK_IMPORTED_MODULE_1__.xv,_object_spread({as:"p"},base,props))},A=function(props){return React.createElement(_Text,_object_spread({as:"a",fontSize:16,fontWeight:400},base,props))},H4=function(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(rebass_styled_components__WEBPACK_IMPORTED_MODULE_1__.xv,_object_spread({as:"h4"},base,props))},H3=function(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(rebass_styled_components__WEBPACK_IMPORTED_MODULE_1__.xv,_object_spread({as:"h3"},base,props))},H2=function(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(rebass_styled_components__WEBPACK_IMPORTED_MODULE_1__.xv,_object_spread({as:"h2"},base,props))},H1=function(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(rebass_styled_components__WEBPACK_IMPORTED_MODULE_1__.xv,_object_spread({as:"h1",fontWeight:700},base,props))},Text=function(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(rebass_styled_components__WEBPACK_IMPORTED_MODULE_1__.xv,_object_spread({},base,props))};try{P.displayName="P",P.__docgenInfo={description:"",displayName:"P",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/scheme-ui/src/components/Text.tsx#P"]={docgenInfo:P.__docgenInfo,name:"P",path:"packages/scheme-ui/src/components/Text.tsx#P"})}catch(__react_docgen_typescript_loader_error){}try{A.displayName="A",A.__docgenInfo={description:"",displayName:"A",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/scheme-ui/src/components/Text.tsx#A"]={docgenInfo:A.__docgenInfo,name:"A",path:"packages/scheme-ui/src/components/Text.tsx#A"})}catch(__react_docgen_typescript_loader_error){}try{H4.displayName="H4",H4.__docgenInfo={description:"",displayName:"H4",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/scheme-ui/src/components/Text.tsx#H4"]={docgenInfo:H4.__docgenInfo,name:"H4",path:"packages/scheme-ui/src/components/Text.tsx#H4"})}catch(__react_docgen_typescript_loader_error){}try{H3.displayName="H3",H3.__docgenInfo={description:"",displayName:"H3",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/scheme-ui/src/components/Text.tsx#H3"]={docgenInfo:H3.__docgenInfo,name:"H3",path:"packages/scheme-ui/src/components/Text.tsx#H3"})}catch(__react_docgen_typescript_loader_error){}try{H2.displayName="H2",H2.__docgenInfo={description:"",displayName:"H2",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/scheme-ui/src/components/Text.tsx#H2"]={docgenInfo:H2.__docgenInfo,name:"H2",path:"packages/scheme-ui/src/components/Text.tsx#H2"})}catch(__react_docgen_typescript_loader_error){}try{H1.displayName="H1",H1.__docgenInfo={description:"",displayName:"H1",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/scheme-ui/src/components/Text.tsx#H1"]={docgenInfo:H1.__docgenInfo,name:"H1",path:"packages/scheme-ui/src/components/Text.tsx#H1"})}catch(__react_docgen_typescript_loader_error){}try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/scheme-ui/src/components/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"packages/scheme-ui/src/components/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./packages/scheme-ui/src/helpers/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>defaultColors1});var defaultColors1={text:"#282C30",gray5:(0,__webpack_require__("./node_modules/polished/dist/polished.esm.js")._j)(.05,"#F8F8F8")}},"./packages/scheme-ui/src/hooks/useClickOutside.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let __WEBPACK_DEFAULT_EXPORT__=function(ref,callback){var handleClick=function(e){ref.current&&!ref.current.contains(e.target)&&callback(e)};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){return document.addEventListener("click",handleClick),function(){document.removeEventListener("click",handleClick)}})}},"./packages/scheme-ui/src/hooks/useColors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useColors1});var _context_SchemeContext__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/scheme-ui/src/context/SchemeContext.tsx");function useColors1(){return(0,_context_SchemeContext__WEBPACK_IMPORTED_MODULE_0__.xl)().colors}},"./packages/scheme-ui/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{xu:()=>src_Box,H3:()=>H3}),__webpack_require__("./packages/scheme-ui/src/components/Autocomplete.tsx"),__webpack_require__("./packages/scheme-ui/src/components/AutocompleteMenuItem.tsx");var Box=__webpack_require__("./packages/scheme-ui/src/components/Box.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/scheme-ui/src/hooks/useColors.ts"),__webpack_require__("./packages/scheme-ui/src/helpers/colors.ts"),__webpack_require__("./node_modules/rebass/styled-components/index.js");var outline=function(color){return{bg:"transparent",color:color,border:"1px solid ".concat(transparentize(.75,color)),":hover":{bg:color?transparentize(.95,color):transparentize(.95,"black")},":active":{bg:color?transparentize(.92,color):transparentize(.92,"black")}}},transparent=function(color){return{bg:"transparent",boxShadow:"none",color:color,":hover":{bg:color?transparentize(.95,color):transparentize(.95,"black")},":active":{bg:color?transparentize(.92,color):transparentize(.92,"black")}}},disabledSx=function(bg){var styles={opacity:.5,cursor:"initial",bg:bg};return _object_spread_props(_object_spread({},styles),{":focus,:active,:hover":_object_spread({},styles)})};function Button_Button(props){var _variants_variant,_variants_variant1,tmp=props.color,colorProp=void 0===tmp?"text":tmp,tmp1=props.bg,bgProp=void 0===tmp1?"gray5":tmp1,tmp2=props.variants,children=props.children,sx=props.sx,startIcon=props.startIcon,variant=props.variant,endIcon=props.endIcon,disabledSxProp=props.disabledSx,tmp3=props.disabled,_props_enabled=props.enabled,colorsMap=useColors()||defaultColors,color=colorsMap[colorProp]||validateColor(colorProp)||defaultColors.text,bg=colorsMap[bgProp]||validateColor(bgProp)||defaultColors.gray5,variants=_object_spread({outline:outline,transparent:transparent},void 0===tmp2?{}:tmp2),isDisabled=!(void 0===_props_enabled||_props_enabled)||void 0!==tmp3&&tmp3;return React.createElement(RebassButton,_object_spread_props(_object_spread({disabled:isDisabled,variant:variant,px:"1em",py:"0.5em"},props),{sx:_object_spread(_object_spread_props(_object_spread({display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontWeight:"bold",color:color,bg:bg},sx),{":focus":_object_spread({outline:"none"},(null==sx?void 0:sx[":focus"])||{}),":hover":_object_spread({bg:darken(.05,bg)},(null==sx?void 0:sx[":hover"])||{}),":active":_object_spread({bg:darken(.1,bg)},(null==sx?void 0:sx[":active"])||{})}),isDisabled?(disabledSxProp||disabledSx)(bg):{},null!==(_variants_variant1=null===(_variants_variant=variants[variant])||void 0===_variants_variant?void 0:_variants_variant.call(variants,color))&&void 0!==_variants_variant1?_variants_variant1:{})}),startIcon&&React.createElement(Flex,{mr:2,alignItems:"center"},startIcon),children,endIcon&&React.createElement(Flex,{ml:2,alignItems:"center"},endIcon))}try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/scheme-ui/src/components/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"packages/scheme-ui/src/components/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function FetchAutocomplete_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function FetchAutocomplete_array_with_holes(arr){if(Array.isArray(arr))return arr}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error);return}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self1=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self1,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)})}}function FetchAutocomplete_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function FetchAutocomplete_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function FetchAutocomplete_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function FetchAutocomplete_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){FetchAutocomplete_define_property(target,key,source[key])})}return target}function FetchAutocomplete_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function FetchAutocomplete_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):FetchAutocomplete_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function FetchAutocomplete_sliced_to_array(arr,i){return FetchAutocomplete_array_with_holes(arr)||FetchAutocomplete_iterable_to_array_limit(arr,i)||FetchAutocomplete_unsupported_iterable_to_array(arr,i)||FetchAutocomplete_non_iterable_rest()}function FetchAutocomplete_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return FetchAutocomplete_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return FetchAutocomplete_array_like_to_array(o,minLen)}}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=(t=_.trys).length>0&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}}__webpack_require__("./packages/scheme-ui/src/components/Card.tsx");var FetchAutocomplete=function(props){var _ref,onSelect=props.onSelect,request=props.request,formatResponse=props.formatResponse,_props_debounce=props.debounce,_useState=FetchAutocomplete_sliced_to_array(useState([]),2),autocompleteItems=_useState[0],setAutocompleteItems=_useState[1],debouncedValue=useDebounce(props.value,void 0===_props_debounce?500:_props_debounce),search=(_ref=_async_to_generator(function(val){var res;return _ts_generator(this,function(_state){switch(_state.label){case 0:return[4,request(val)];case 1:return(res=_state.sent())&&setAutocompleteItems(formatResponse(res)),[2]}})}),function search(val){return _ref.apply(this,arguments)});return useEffect(function(){search(debouncedValue)},[debouncedValue]),React.createElement(Autocomplete,FetchAutocomplete_object_spread_props(FetchAutocomplete_object_spread({},props),{items:autocompleteItems,onSelect:onSelect}))};try{FetchAutocomplete.displayName="FetchAutocomplete",FetchAutocomplete.__docgenInfo={description:"",displayName:"FetchAutocomplete",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"Item[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},menuProps:{defaultValue:null,description:"",name:"menuProps",required:!1,type:{name:"_BoxProps"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"InputProps"}},keyExtractor:{defaultValue:null,description:"",name:"keyExtractor",required:!0,type:{name:"(item: Item) => string | number"}},renderItem:{defaultValue:null,description:"",name:"renderItem",required:!0,type:{name:"(item: Item, hasFocus: boolean) => ReactChild"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: ChangeEvent<Element>) => void"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((item: Item) => void) & ((item: Item) => void)"}},debounce:{defaultValue:null,description:"",name:"debounce",required:!1,type:{name:"number"}},formatResponse:{defaultValue:null,description:"",name:"formatResponse",required:!1,type:{name:"(data: any) => any[]"}},request:{defaultValue:null,description:"",name:"request",required:!0,type:{name:"(value: string) => Promise<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/scheme-ui/src/components/FetchAutocomplete.tsx#FetchAutocomplete"]={docgenInfo:FetchAutocomplete.__docgenInfo,name:"FetchAutocomplete",path:"packages/scheme-ui/src/components/FetchAutocomplete.tsx#FetchAutocomplete"})}catch(__react_docgen_typescript_loader_error){}function IconButton_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function IconButton_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){IconButton_define_property(target,key,source[key])})}return target}function IconButton_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function IconButton_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):IconButton_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function IconButton(props){var icon=props.icon,sx=props.sx,round=props.round,_props_iconSize=props.iconSize,onClick=props.onClick,rest=_object_without_properties(props,["icon","sx","round","iconSize","onClick"]);return React.createElement(Button,IconButton_object_spread_props(IconButton_object_spread({},rest),{onClick:onClick,sx:IconButton_object_spread({fontSize:void 0===_props_iconSize?24:_props_iconSize,width:"1.75em",height:"1.75em",padding:0},round?{borderRadius:50}:{},sx)}),icon)}try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/scheme-ui/src/components/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"packages/scheme-ui/src/components/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./packages/scheme-ui/src/components/Input.tsx"),__webpack_require__("./packages/scheme-ui/src/components/Switch.tsx");var Text=__webpack_require__("./packages/scheme-ui/src/components/Text.tsx");__webpack_require__("./packages/scheme-ui/src/hooks/useClickOutside.ts"),__webpack_require__("./packages/scheme-ui/src/context/SchemeContext.tsx");var src_Box=Box.xu,H3=Text.H3}}]);