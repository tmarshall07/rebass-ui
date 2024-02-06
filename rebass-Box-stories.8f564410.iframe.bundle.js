"use strict";(self.webpackChunkscheme_ui=self.webpackChunkscheme_ui||[]).push([[953],{"./stories/rebass/Box.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_packages_scheme_ui_src_components_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/scheme-ui/src/components/Box.tsx"),_packages_scheme_ui_src_context_SchemeContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/scheme-ui/src/context/SchemeContext.tsx"),_styles_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./styles/theme.ts"),_styles_colors__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./styles/colors.ts");let __WEBPACK_DEFAULT_EXPORT__={title:"Components/Rebass/Box",component:_packages_scheme_ui_src_components_Box__WEBPACK_IMPORTED_MODULE_1__.ZP,argTypes:{bg:{control:"color"},color:{control:"color"},p:{control:"number"},m:{control:"number"}}};var Primary=(function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_packages_scheme_ui_src_context_SchemeContext__WEBPACK_IMPORTED_MODULE_2__.iC,{theme:_styles_theme__WEBPACK_IMPORTED_MODULE_3__.Z,colorSchemes:_styles_colors__WEBPACK_IMPORTED_MODULE_4__.Kj},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_packages_scheme_ui_src_components_Box__WEBPACK_IMPORTED_MODULE_1__.ZP,{bg:"bg-0",p:4},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_packages_scheme_ui_src_components_Box__WEBPACK_IMPORTED_MODULE_1__.ZP,args,"I'm a Box")))}).bind({});Primary.args={p:3,bg:"bg-2"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'args => <SchemeProvider theme={theme} colorSchemes={schemes}>\n    <Box bg="bg-0" p={4}>\n      <Box {...args}>I&apos;m a Box</Box>\n    </Box>\n  </SchemeProvider>',...Primary.parameters?.docs?.source}}};let __namedExportsOrder=["Primary"]},"./packages/scheme-ui/src/components/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__,xu:()=>Box});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),rebass_styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rebass/styled-components/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var Box=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function(props,ref){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(rebass_styled_components__WEBPACK_IMPORTED_MODULE_1__.xu,_object_spread_props(_object_spread({color:"text"},props),{ref:ref}))});Box.displayName="Box",(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function(props,ref){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(rebass_styled_components__WEBPACK_IMPORTED_MODULE_1__.kC,_object_spread_props(_object_spread({color:"text"},props),{ref:ref}))}).displayName="Flex";let __WEBPACK_DEFAULT_EXPORT__=Box;try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/scheme-ui/src/components/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"packages/scheme-ui/src/components/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./packages/scheme-ui/src/context/SchemeContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{iC:()=>SchemeProvider,xl:()=>useSchemeContext});var STORAGE_KEYS,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error);return}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self1=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self1,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)})}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=(t=_.trys).length>0&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}}var PREFERS_COLOR_SCHEME="(prefers-color-scheme: dark)";!function(STORAGE_KEYS){STORAGE_KEYS.mode="settings:dark:mode",STORAGE_KEYS.value="settings:dark:value"}(STORAGE_KEYS||(STORAGE_KEYS={}));var getSchemeSettings=function(){var _ref=_async_to_generator(function(){return _ts_generator(this,function(_state){switch(_state.label){case 0:return[4,Promise.all([localStorage.getItem("settings:dark:mode"),localStorage.getItem("settings:dark:value")])];case 1:return[2,_state.sent()]}})});return function getSchemeSettings(){return _ref.apply(this,arguments)}}();function useLightDarkScheme(){var _ref,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("light"),2),systemScheme=_useState[0],setSystemScheme=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("light"),2),scheme=_useState1[0],setScheme=_useState1[1],_useState2=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),2),auto=_useState2[0],setAuto=_useState2[1],getUserPreference=(_ref=_async_to_generator(function(){var _ref,state,userScheme;return _ts_generator(this,function(_state){switch(_state.label){case 0:return[4,getSchemeSettings()];case 1:return state=(_ref=_sliced_to_array.apply(void 0,[_state.sent(),2]))[0],userScheme=_ref[1],"user"===state&&(userScheme&&userScheme!==scheme&&setScheme(userScheme),setAuto(!1)),[2]}})}),function getUserPreference(){return _ref.apply(this,arguments)});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var updateSchemes=function(event){setSystemScheme(event.matches?"dark":"light")};return getUserPreference(),window.matchMedia(PREFERS_COLOR_SCHEME).addEventListener("change",updateSchemes),setSystemScheme(window.matchMedia(PREFERS_COLOR_SCHEME)?"dark":"light"),function(){window.matchMedia(PREFERS_COLOR_SCHEME).removeEventListener("change",updateSchemes)}},[]),{scheme:auto?systemScheme:scheme,userScheme:scheme,auto:auto,setScheme:function(scheme){localStorage.setItem("settings:dark:value",scheme),setScheme(scheme)},setAuto:function(isAuto){isAuto?localStorage.setItem("settings:dark:mode","auto"):localStorage.setItem("settings:dark:mode","user"),setAuto(isAuto)}}}var SchemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({colors:null,scheme:"light"});function SchemeProvider(param){var _param_theme=param.theme,_param_scheme=param.scheme,_param_colorSchemes=param.colorSchemes,colorSchemes=void 0===_param_colorSchemes?{}:_param_colorSchemes,children=param.children,colorScheme=useLightDarkScheme(),colors=colorSchemes[void 0===_param_scheme?"":_param_scheme]||colorSchemes[colorScheme.scheme]||colorSchemes[Object.keys(colorSchemes)[0]];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SchemeContext.Provider,{value:_object_spread_props(_object_spread({},colorScheme),{colors:colors})},react__WEBPACK_IMPORTED_MODULE_0__.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider,{theme:_object_spread_props(_object_spread({},void 0===_param_theme?{}:_param_theme),{colors:colors})},children))}var useSchemeContext=function(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SchemeContext)};try{SchemeProvider.displayName="SchemeProvider",SchemeProvider.__docgenInfo={description:"",displayName:"SchemeProvider",props:{colorSchemes:{defaultValue:{value:"{}"},description:"",name:"colorSchemes",required:!1,type:{name:"SchemeProps"}},theme:{defaultValue:{value:"{}"},description:"",name:"theme",required:!1,type:{name:"{ [index: string]: any; }"}},scheme:{defaultValue:{value:""},description:"",name:"scheme",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/scheme-ui/src/context/SchemeContext.tsx#SchemeProvider"]={docgenInfo:SchemeProvider.__docgenInfo,name:"SchemeProvider",path:"packages/scheme-ui/src/context/SchemeContext.tsx#SchemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./styles/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Kj:()=>schemes});var polished__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),primary="#004E96",dark="#282C30",light="#F8F8F8",negative="#C23C3C",warning="#E18C5C",positive="#31aa31",white="#ffffff",schemes={light:{text:dark,textInvert:light,primary:primary,primaryText:(0,polished__WEBPACK_IMPORTED_MODULE_0__._j)(.1,primary),"bg-0":(0,polished__WEBPACK_IMPORTED_MODULE_0__.$n)(.05,light),"bg-1":light,"bg-2":(0,polished__WEBPACK_IMPORTED_MODULE_0__._j)(.05,light),"bg-3":(0,polished__WEBPACK_IMPORTED_MODULE_0__._j)(.1,light),gray5:(0,polished__WEBPACK_IMPORTED_MODULE_0__._j)(.05,light),gray10:(0,polished__WEBPACK_IMPORTED_MODULE_0__._j)(.1,light),gray15:(0,polished__WEBPACK_IMPORTED_MODULE_0__._j)(.5,light),gray20:(0,polished__WEBPACK_IMPORTED_MODULE_0__._j)(.2,light),gray30:(0,polished__WEBPACK_IMPORTED_MODULE_0__._j)(.3,light),gray40:(0,polished__WEBPACK_IMPORTED_MODULE_0__._j)(.4,light),gray50:(0,polished__WEBPACK_IMPORTED_MODULE_0__._j)(.5,light),gray60:(0,polished__WEBPACK_IMPORTED_MODULE_0__._j)(.6,light),gray70:(0,polished__WEBPACK_IMPORTED_MODULE_0__._j)(.7,light),gray80:(0,polished__WEBPACK_IMPORTED_MODULE_0__._j)(.8,light),gray90:(0,polished__WEBPACK_IMPORTED_MODULE_0__._j)(.9,light),negative:negative,negativeLight:(0,polished__WEBPACK_IMPORTED_MODULE_0__.$n)(.3,negative),warning:warning,positive:positive,white:white},dark:{text:light,textInvert:dark,primary:(0,polished__WEBPACK_IMPORTED_MODULE_0__.$n)(.3,primary),primaryText:(0,polished__WEBPACK_IMPORTED_MODULE_0__.$n)(.4,primary),"bg-0":(0,polished__WEBPACK_IMPORTED_MODULE_0__._j)(.05,dark),"bg-1":dark,"bg-2":(0,polished__WEBPACK_IMPORTED_MODULE_0__.$n)(.05,dark),"bg-3":(0,polished__WEBPACK_IMPORTED_MODULE_0__.$n)(.1,dark),gray5:(0,polished__WEBPACK_IMPORTED_MODULE_0__.$n)(.05,dark),gray10:(0,polished__WEBPACK_IMPORTED_MODULE_0__.$n)(.1,dark),gray15:(0,polished__WEBPACK_IMPORTED_MODULE_0__.$n)(.15,dark),gray20:(0,polished__WEBPACK_IMPORTED_MODULE_0__.$n)(.2,dark),gray30:(0,polished__WEBPACK_IMPORTED_MODULE_0__.$n)(.3,dark),gray40:(0,polished__WEBPACK_IMPORTED_MODULE_0__.$n)(.4,dark),gray50:(0,polished__WEBPACK_IMPORTED_MODULE_0__.$n)(.5,dark),gray60:(0,polished__WEBPACK_IMPORTED_MODULE_0__.$n)(.6,dark),gray70:(0,polished__WEBPACK_IMPORTED_MODULE_0__.$n)(.7,dark),gray80:(0,polished__WEBPACK_IMPORTED_MODULE_0__.$n)(.8,dark),gray90:(0,polished__WEBPACK_IMPORTED_MODULE_0__.$n)(.9,dark),negative:(0,polished__WEBPACK_IMPORTED_MODULE_0__.$n)(.2,negative),negativeLight:(0,polished__WEBPACK_IMPORTED_MODULE_0__.$n)(.3,negative),warning:(0,polished__WEBPACK_IMPORTED_MODULE_0__.$n)(.15,warning),positive:(0,polished__WEBPACK_IMPORTED_MODULE_0__.$n)(.3,positive),white:white}}},"./styles/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,r:()=>theme});var theme={fontSizes:[12,14,16,20,24,32,48,64],space:[0,4,8,16,32,64,128,256],fontWeights:{bold:700},shadows:{small:"0 0 4px rgba(0, 0, 0, .125)",large:"rgb(6 26 54 / 6%) 0px 4px 12px;"}};let __WEBPACK_DEFAULT_EXPORT__=theme}}]);