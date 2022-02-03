import d from"./media-chrome-button.js";import{Window as p,Document as m}from"./utils/server-safe-globals.js";import{defineCustomElement as E}from"./utils/defineCustomElement.js";import{MediaUIEvents as l,MediaUIAttributes as t}from"./constants.js";import{verbs as a}from"./labels/labels.js";const c=`<svg width="18" height="18" viewBox="0 0 18 18" fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path d="M3 18L18 9L3 0V18Z"/>
</svg>`,A=`<svg width="18" height="18" viewBox="0 0 18 18" fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path d="M3 17H7V1H3V17ZM11 1V17H15V1H11Z"/>
</svg>`,n=m.createElement("template");n.innerHTML=`
  <style>
  :host([${t.MEDIA_PAUSED}]) slot[name=pause] > *, 
  :host([${t.MEDIA_PAUSED}]) ::slotted([slot=pause]) {
    display: none;
  }

  :host(:not([${t.MEDIA_PAUSED}])) slot[name=play] > *, 
  :host(:not([${t.MEDIA_PAUSED}])) ::slotted([slot=play]) {
    display: none;
  }
  </style>

  <slot name="play">${c}</slot>
  <slot name="pause">${A}</slot>
`;const i=o=>{const s=o.getAttribute(t.MEDIA_PAUSED)!=null?a.PLAY():a.PAUSE();o.setAttribute("aria-label",s)};class r extends d{static get observedAttributes(){return[...super.observedAttributes,t.MEDIA_PAUSED]}constructor(e={}){super({slotTemplate:n,...e})}connectedCallback(){i(this),super.connectedCallback()}attributeChangedCallback(e,s,u){e===t.MEDIA_PAUSED&&i(this),super.attributeChangedCallback(e,s,u)}handleClick(e){const s=this.getAttribute(t.MEDIA_PAUSED)!=null?l.MEDIA_PLAY_REQUEST:l.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new p.CustomEvent(s,{composed:!0,bubbles:!0}))}}E("media-play-button",r);export default r;
