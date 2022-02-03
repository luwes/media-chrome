import o from"./media-chrome-button.js";import{defineCustomElement as r}from"./utils/defineCustomElement.js";import{Window as l,Document as n}from"./utils/server-safe-globals.js";import{MediaUIEvents as i}from"./constants.js";import{verbs as m}from"./labels/labels.js";const u='<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18"><title>Mux Player SVG Icons_v3</title><path d="M19.13,0H.87A.87.87,0,0,0,0,.87V14.13A.87.87,0,0,0,.87,15h3.4L6,13H2V2H18V13H14l1.72,2h3.4a.87.87,0,0,0,.87-.87V.87A.87.87,0,0,0,19.13,0ZM10.38,11.44a.5.5,0,0,0-.76,0L4.71,17.17a.5.5,0,0,0,.38.83h9.82a.5.5,0,0,0,.38-.83Z"/></svg>',e=n.createElement("template");e.innerHTML=`
  <style>
  </style>

  <slot name="airplay">${u}</slot>
`;class s extends o{static get observedAttributes(){return[...super.observedAttributes]}constructor(t={}){super({slotTemplate:e,...t})}connectedCallback(){this.setAttribute("aria-label",m.AIRPLAY()),super.connectedCallback()}handleClick(t){const a=new l.CustomEvent(i.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(a)}}r("media-airplay-button",s);export default s;
