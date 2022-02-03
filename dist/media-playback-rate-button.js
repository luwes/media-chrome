import u from"./media-chrome-button.js";import{defineCustomElement as A}from"./utils/defineCustomElement.js";import{Window as h,Document as d}from"./utils/server-safe-globals.js";import{MediaUIEvents as p,MediaUIAttributes as a}from"./constants.js";import{nouns as E}from"./labels/labels.js";const c=[1,1.25,1.5,1.75,2],n=1,l=d.createElement("template");l.innerHTML=`
  <style>
  :host {
    font-size: 14px;
    line-height: 18px;
    font-weight: bold;
  }

  #container {
    height: var(--media-text-content-height, 18px);
  }
  </style>

  <span id="container"></span>
`;class m extends u{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_PLAYBACK_RATE,"rates"]}constructor(i={}){super({slotTemplate:l,...i});this._rates=c,this.container=this.shadowRoot.querySelector("#container"),this.container.innerHTML=`${n}x`}attributeChangedCallback(i,o,e){if(i==="rates"){const s=(e!=null?e:"").trim().split(/\s*,?\s+/).map(t=>Number(t)).filter(t=>!Number.isNaN(t)).sort((t,r)=>t-r);this._rates=s.length?s:c;return}if(i===a.MEDIA_PLAYBACK_RATE){const s=e?+e:Number.NaN,t=Number.isNaN(s)?n:s;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",E.PLAYBACK_RATE({playbackRate:t}));return}super.attributeChangedCallback(i,o,e)}handleClick(i){var t,r;const o=+this.getAttribute(a.MEDIA_PLAYBACK_RATE)||n,e=(r=(t=this._rates.find(b=>b>o))!=null?t:this._rates[0])!=null?r:n,s=new h.CustomEvent(p.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(s)}}A("media-playback-rate-button",m);export default m;
