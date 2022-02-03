import u from"./media-chrome-button.js";import{defineCustomElement as c}from"./utils/defineCustomElement.js";import{Window as d,Document as m}from"./utils/server-safe-globals.js";import{MediaUIEvents as o,MediaUIAttributes as t}from"./constants.js";import{verbs as l}from"./labels/labels.js";const L='<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><title>Mux Player SVG Icons_v3</title><path d="M12,0V2.5h3.5V6H18V0ZM0,6H2.5V2.5H6V0H0Zm15.5,9.5H12V18h6V12H15.5ZM2.5,12H0v6H6V15.5H2.5Z"/></svg>',b='<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><title>Mux Player SVG Icons_v3</title><path d="M14.5,3.5V0H12V6h6V3.5ZM12,18h2.5V14.5H18V12H12ZM0,14.5H3.5V18H6V12H0Zm3.5-11H0V6H6V0H3.5Z"/></svg>',a=m.createElement("template");a.innerHTML=`
  <style>
  :host([${t.MEDIA_IS_FULLSCREEN}]) slot:not([name=exit]) > *, 
  :host([${t.MEDIA_IS_FULLSCREEN}]) ::slotted(:not([slot=exit])) {
    display: none;
  }

  /* Double negative, but safer if display doesn't equal 'block' */
  :host(:not([${t.MEDIA_IS_FULLSCREEN}])) slot:not([name=enter]) > *, 
  :host(:not([${t.MEDIA_IS_FULLSCREEN}])) ::slotted(:not([slot=enter])) {
    display: none;
  }
  </style>

  <slot name="enter">${L}</slot>
  <slot name="exit">${b}</slot>
`;const r=n=>{const s=n.getAttribute(t.MEDIA_IS_FULLSCREEN)!=null?l.EXIT_FULLSCREEN():l.ENTER_FULLSCREEN();n.setAttribute("aria-label",s)};class i extends u{static get observedAttributes(){return[...super.observedAttributes,t.MEDIA_IS_FULLSCREEN]}constructor(e={}){super({slotTemplate:a,...e})}connectedCallback(){r(this),super.connectedCallback()}attributeChangedCallback(e,s,E){e===t.MEDIA_IS_FULLSCREEN&&r(this),super.attributeChangedCallback(e,s,E)}handleClick(e){const s=this.getAttribute(t.MEDIA_IS_FULLSCREEN)!=null?o.MEDIA_EXIT_FULLSCREEN_REQUEST:o.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new d.CustomEvent(s,{composed:!0,bubbles:!0}))}}c("media-fullscreen-button",i);export default i;
