import d from"./media-chrome-button.js";import{defineCustomElement as m}from"./utils/defineCustomElement.js";import{Window as b,Document as c}from"./utils/server-safe-globals.js";import{MediaUIEvents as n,MediaUIAttributes as t}from"./constants.js";import{verbs as a}from"./labels/labels.js";const l='<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 18"><title>Mux Player SVG Icons_v3</title><path d="M21,0H1A1,1,0,0,0,0,1V17a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V1A1,1,0,0,0,21,0ZM20,16H2V2H20ZM17,8H10v5h7Z"/></svg>',i=c.createElement("template");i.innerHTML=`
  <style>
  :host([${t.MEDIA_IS_PIP}]) slot:not([name=exit]) > *, 
  :host([${t.MEDIA_IS_PIP}]) ::slotted(:not([slot=exit])) {
    display: none;
  }

  /* Double negative, but safer if display doesn't equal 'block' */
  :host(:not([${t.MEDIA_IS_PIP}])) slot:not([name=enter]) > *, 
  :host(:not([${t.MEDIA_IS_PIP}])) ::slotted(:not([slot=enter])) {
    display: none;
  }
  </style>

  <slot name="enter">${l}</slot>
  <slot name="exit">${l}</slot>
`;const r=o=>{const s=o.getAttribute(t.MEDIA_IS_PIP)!=null?a.EXIT_PIP():a.ENTER_PIP();o.setAttribute("aria-label",s)};class u extends d{static get observedAttributes(){return[...super.observedAttributes,t.MEDIA_IS_PIP]}constructor(e={}){super({slotTemplate:i,...e})}connectedCallback(){r(this),super.connectedCallback()}attributeChangedCallback(e,s,I){e===t.MEDIA_IS_PIP&&r(this),super.attributeChangedCallback(e,s,I)}handleClick(e){const s=this.getAttribute(t.MEDIA_IS_PIP)!=null?n.MEDIA_EXIT_PIP_REQUEST:n.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new b.CustomEvent(s,{composed:!0,bubbles:!0}))}}m("media-pip-button",u);export default u;
