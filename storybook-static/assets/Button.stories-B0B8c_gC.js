import{j as t}from"./mergeClass-DyAjzCvf.js";import{B as n,a as c}from"./Button-BU0arhbE.js";import"./index-l2PZgWEW.js";import"./Loader-BYoApj6f.js";import"./Icon-BFcUTscL.js";const H={component:n,title:"base/Button",tags:["autodocs"],argTypes:{children:{control:"text",description:"The text inside the button"},variant:{control:"select",description:"The variant of the button",options:["solid","outline","ghost"]},size:{control:"select",description:"The size of the button",options:["xs","sm","md","lg"]},color:{control:"color",description:"The color of the button"},isLoading:{control:"boolean",description:"Whether the button is in loading state"},isDisabled:{control:"boolean",description:"Whether the button is disabled"},isFullWidth:{control:"boolean",description:"Whether the button is full width"},icon:{control:"object",description:"The icon to display on the button"},iconPosition:{control:"select",description:"The position of the icon on the button",options:["left","right"]}}},o={args:{children:"Button",size:"md",variant:"solid"}},e={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[t.jsx(n,{variant:"solid",children:"Solid Button"}),t.jsx(n,{variant:"outline",children:"Outline Button"}),t.jsx(n,{variant:"ghost",children:"Ghost Button"})]})},r={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[t.jsx(n,{size:"xs",children:"XSmall Button"}),t.jsx(n,{size:"sm",children:"Small Button"}),t.jsx(n,{size:"md",children:"Medium Button"}),t.jsx(n,{size:"lg",children:"Large Button"})]})},s={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[t.jsx(n,{color:"tomato",children:"Named Color (tomato)"}),t.jsx(n,{color:"#ff6347",children:"Hexadecimal Color (#ff6347)"}),t.jsx(n,{color:"rgb(255, 99, 71)",children:"RGB Color (rgb(255, 99, 71))"}),t.jsx(n,{color:"rgba(255, 99, 71, 0.5)",children:"RGBA Color (hsl(9, 100%, 64%))"}),t.jsx(n,{color:"hsl(9, 100%, 64%)",children:"HSL Color (hsl(9, 100%, 64%))"}),t.jsx(n,{color:"hsla(9, 100%, 64%, 0.5)",children:"HSLA Color (hsla(9, 100%, 64%, 0.5))"})]})},i={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[t.jsx(n,{isLoading:!0,children:"Loading Button"}),t.jsx(n,{isDisabled:!0,children:"Disabled Button"}),t.jsx(n,{isFullWidth:!0,children:"Full Width Button"})]})},a={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[t.jsx(n,{icon:{name:"search",size:24},children:"Button with Icon"}),t.jsx(n,{icon:{name:"search",size:24},iconPosition:"left",children:"Icon on Left"}),t.jsx(n,{icon:{name:"search",size:24},iconPosition:"right",children:"Icon on Right"}),t.jsx(n,{icon:{name:"search",size:24}})]})},l={render:()=>t.jsxs(t.Fragment,{children:[t.jsxs(c,{children:[t.jsx(n,{children:"Button 1"}),t.jsx(n,{children:"Button 2"}),t.jsx(n,{children:"Button 3"})]}),t.jsx("br",{}),t.jsxs(c,{variant:"outline",children:[t.jsx(n,{variant:"outline",children:"Outline 1"}),t.jsx(n,{variant:"outline",children:"Outline 2"}),t.jsx(n,{variant:"outline",children:"Outline 3"})]}),t.jsx("br",{}),t.jsxs(c,{size:"lg",isAttached:!0,children:[t.jsx(n,{size:"lg",children:"Large 1"}),t.jsx(n,{size:"lg",children:"Large 2"}),t.jsx(n,{size:"lg",children:"Large 3"})]})]})};var u,d,B;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    size: 'md',
    variant: 'solid'
  }
}`,...(B=(d=o.parameters)==null?void 0:d.docs)==null?void 0:B.source}}};var h,m,p;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
      <Button variant="solid">Solid Button</Button>\r
      <Button variant="outline">Outline Button</Button>\r
      <Button variant="ghost">Ghost Button</Button>\r
    </div>
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,x,j;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
      <Button size="xs">XSmall Button</Button>\r
      <Button size="sm">Small Button</Button>\r
      <Button size="md">Medium Button</Button>\r
      <Button size="lg">Large Button</Button>\r
    </div>
}`,...(j=(x=r.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var f,v,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
      <Button color="tomato">Named Color (tomato)</Button>\r
      <Button color="#ff6347">Hexadecimal Color (#ff6347)</Button>\r
      <Button color="rgb(255, 99, 71)">RGB Color (rgb(255, 99, 71))</Button>\r
      <Button color="rgba(255, 99, 71, 0.5)">\r
        RGBA Color (hsl(9, 100%, 64%))\r
      </Button>\r
      <Button color="hsl(9, 100%, 64%)">HSL Color (hsl(9, 100%, 64%))</Button>\r
      <Button color="hsla(9, 100%, 64%, 0.5)">\r
        HSLA Color (hsla(9, 100%, 64%, 0.5))\r
      </Button>\r
    </div>
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var z,y,S;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
      <Button isLoading>Loading Button</Button>\r
      <Button isDisabled>Disabled Button</Button>\r
      <Button isFullWidth>Full Width Button</Button>\r
    </div>
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var L,I,G;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
      <Button icon={{
      name: 'search',
      size: 24
    }}>Button with Icon</Button>\r
      <Button icon={{
      name: 'search',
      size: 24
    }} iconPosition="left">\r
        Icon on Left\r
      </Button>\r
      <Button icon={{
      name: 'search',
      size: 24
    }} iconPosition="right">\r
        Icon on Right\r
      </Button>\r
      <Button icon={{
      name: 'search',
      size: 24
    }} />\r
    </div>
}`,...(G=(I=a.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var C,W,O;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <>\r
      <ButtonGroup>\r
        <Button>Button 1</Button>\r
        <Button>Button 2</Button>\r
        <Button>Button 3</Button>\r
      </ButtonGroup>\r
      <br />\r
      <ButtonGroup variant="outline">\r
        <Button variant="outline">Outline 1</Button>\r
        <Button variant="outline">Outline 2</Button>\r
        <Button variant="outline">Outline 3</Button>\r
      </ButtonGroup>\r
      <br />\r
      <ButtonGroup size="lg" isAttached>\r
        <Button size="lg">Large 1</Button>\r
        <Button size="lg">Large 2</Button>\r
        <Button size="lg">Large 3</Button>\r
      </ButtonGroup>\r
    </>
}`,...(O=(W=l.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const P=["Default","Variants","Sizes","Colors","States","WithIcon","ButtonGroups"];export{l as ButtonGroups,s as Colors,o as Default,r as Sizes,i as States,e as Variants,a as WithIcon,P as __namedExportsOrder,H as default};
