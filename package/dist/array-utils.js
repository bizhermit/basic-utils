"use strict";var ArrayUtils;Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateArray=void 0,function(e){e.generateArray=(e,r)=>{const t=[];if(null==r)for(let r=0;r<e;r++)t.push(void 0);else if("function"==typeof r)for(let l=0;l<e;l++)t.push(r(l));else for(let l=0;l<e;l++)t.push(r);return t},e.replaceValue=(e,r,t=!1)=>{const l=t?[]:e;for(let t=0,s=e.length;t<s;t++)l[t]=r(e[t]);return l}}(ArrayUtils||(ArrayUtils={})),exports.default=ArrayUtils,exports.generateArray=ArrayUtils.generateArray;