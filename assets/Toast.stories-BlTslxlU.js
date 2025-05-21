import{j as r}from"./index-D1jyOGQr.js";import{r as h}from"./index-CdUicJsP.js";import{c as A,d as y,e as C}from"./index-BKSTifzg.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-PxHYSiC3.js";const O={title:"Surfaces/Toast",component:A,args:{variant:"information",title:void 0,description:void 0},argTypes:{variant:{options:["information","success","alert","error"],control:{type:"inline-radio"}},children:{control:{type:"object"}}},decorators:[S=>{const[x,j]=h.useState(0);return r.jsxs("div",{children:[r.jsx(y,{onClick:()=>j(i=>i+1),children:"Click to see the Toast"}),r.jsx(C,{children:Array.from({length:x}).map((i,E)=>r.jsx(S,{},E))})]})}]},t={args:{title:"Title",description:"Information description",variant:"information"}},e={args:{title:"Title",description:"Success description",variant:"success"}},s={args:{title:"Title",description:"Alert description",variant:"alert"}},o={args:{title:"Title",description:"Error description",variant:"error"}};var a,n,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    description: 'Information description',
    variant: 'information'
  }
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,d,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    description: 'Success description',
    variant: 'success'
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,u,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    description: 'Alert description',
    variant: 'alert'
  }
}`,...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var g,f,T;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    description: 'Error description',
    variant: 'error'
  }
}`,...(T=(f=o.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const P=["Information","Success","Alert","Error"];export{s as Alert,o as Error,t as Information,e as Success,P as __namedExportsOrder,O as default};
