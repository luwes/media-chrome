import M from"./media-chrome-button.js";import{defineCustomElement as r}from"./utils/defineCustomElement.js";import{Window as d,Document as h}from"./utils/server-safe-globals.js";import{MediaUIEvents as l,MediaUIAttributes as t}from"./constants.js";import{verbs as n}from"./labels/labels.js";const u='<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><title>Mux Player SVG Icons_v3</title><path d="M13.5,9A4.5,4.5,0,0,0,11,5V7.18l2.45,2.45A4.23,4.23,0,0,0,13.5,9ZM16,9a6.84,6.84,0,0,1-.54,2.64L17,13.15A8.8,8.8,0,0,0,18,9,9,9,0,0,0,11,.23V2.29A7,7,0,0,1,16,9ZM1.27,0,0,1.27,4.73,6H0v6H4l5,5V10.27l4.25,4.25A6.92,6.92,0,0,1,11,15.7v2.06A9,9,0,0,0,14.69,16l2,2.05L18,16.73l-9-9ZM9,1,6.91,3.09,9,5.18Z"/></svg>',a='<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><title>Mux Player SVG Icons_v3</title><path d="M0,6v6H4l5,5V1L4,6ZM13.5,9A4.5,4.5,0,0,0,11,5V13A4.47,4.47,0,0,0,13.5,9Z"/></svg>',V='<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><title>Mux Player SVG Icons_v3</title><path d="M0,6v6H4l5,5V1L4,6ZM13.5,9A4.5,4.5,0,0,0,11,5V13A4.47,4.47,0,0,0,13.5,9ZM11,.23V2.29a7,7,0,0,1,0,13.42v2.06A9,9,0,0,0,11,.23Z"/></svg>',E=h.createElement("template");E.innerHTML=`
  <style>
  /* Default to High slot/icon. */
  :host(:not([${t.MEDIA_VOLUME_LEVEL}])) slot:not([name=high]) > *, 
  :host(:not([${t.MEDIA_VOLUME_LEVEL}])) ::slotted(:not([slot=high])),
  :host([${t.MEDIA_VOLUME_LEVEL}=high]) slot:not([name=high]) > *, 
  :host([${t.MEDIA_VOLUME_LEVEL}=high]) ::slotted(:not([slot=high])) {
    display: none;
  }

  :host([${t.MEDIA_VOLUME_LEVEL}=off]) slot:not([name=off]) > *, 
  :host([${t.MEDIA_VOLUME_LEVEL}=off]) ::slotted(:not([slot=off])) {
    display: none;
  }

  :host([${t.MEDIA_VOLUME_LEVEL}=low]) slot:not([name=low]) > *, 
  :host([${t.MEDIA_VOLUME_LEVEL}=low]) ::slotted(:not([slot=low])) {
    display: none;
  }

  :host([${t.MEDIA_VOLUME_LEVEL}=medium]) slot:not([name=medium]) > *, 
  :host([${t.MEDIA_VOLUME_LEVEL}=medium]) ::slotted(:not([slot=medium])) {
    display: none;
  }
  </style>

  <slot name="off">${u}</slot>
  <slot name="low">${a}</slot>
  <slot name="medium">${a}</slot>
  <slot name="high">${V}</slot>
`;const i=s=>{const o=s.getAttribute(t.MEDIA_VOLUME_LEVEL)==="off"?n.UNMUTE():n.MUTE();s.setAttribute("aria-label",o)};class L extends M{static get observedAttributes(){return[...super.observedAttributes,t.MEDIA_VOLUME_LEVEL]}constructor(e={}){super({slotTemplate:E,...e})}connectedCallback(){i(this),super.connectedCallback()}attributeChangedCallback(e,o,m){e===t.MEDIA_VOLUME_LEVEL&&i(this),super.attributeChangedCallback(e,o,m)}handleClick(e){const o=this.getAttribute(t.MEDIA_VOLUME_LEVEL)==="off"?l.MEDIA_UNMUTE_REQUEST:l.MEDIA_MUTE_REQUEST;this.dispatchEvent(new d.CustomEvent(o,{composed:!0,bubbles:!0}))}}r("media-mute-button",L);export default L;
