import{MediaUIAttributes as s}from"./constants.js";import{nouns as m}from"./labels/labels.js";import{defineCustomElement as D}from"./utils/defineCustomElement.js";import{Window as f,Document as a}from"./utils/server-safe-globals.js";const g=a.createElement("template"),A=`
<svg viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;g.innerHTML=`
<style>
:host {
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=loading] > *,
:host ::slotted([slot=loading]) {
  opacity: 1;
  transition: opacity 0.15s;
}

:host(:not([is-loading])) slot[name=loading] > *, 
:host(:not([is-loading])) ::slotted([slot=loading]) {
  opacity: 0;
}

:host(:not([is-loading])) #status {
  display: none;
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-icon-width, 44px);
  height: var(--media-loading-icon-height);
  fill: var(--media-icon-color, #fff);
  vertical-align: middle;
}
</style>

<slot name="loading">${A}</slot>
<div id="status" role="status" aria-live="polite">${m.MEDIA_LOADING()}</div>
`;const I=500;class r extends f.HTMLElement{static get observedAttributes(){return[s.MEDIA_CONTROLLER,s.MEDIA_PAUSED,s.MEDIA_LOADING,"loading-delay"]}constructor(){super();const n=this.attachShadow({mode:"open"}),i=g.content.cloneNode(!0);n.appendChild(i)}attributeChangedCallback(n,i,t){var o,d,l;if(n===s.MEDIA_LOADING||n===s.MEDIA_PAUSED){const e=this.getAttribute(s.MEDIA_PAUSED)!=null,h=this.getAttribute(s.MEDIA_LOADING)!=null,c=!e&&h;if(!c)this.loadingDelayHandle&&(clearTimeout(this.loadingDelayHandle),this.loadingDelayHandle=void 0),this.removeAttribute("is-loading");else if(!this.loadingDelayHandle&&c){const u=+((o=this.getAttribute("loading-delay"))!=null?o:I);this.loadingDelayHandle=setTimeout(()=>{this.setAttribute("is-loading",""),this.loadingDelayHandle=void 0},u)}}else if(n===s.MEDIA_CONTROLLER){if(i){const e=a.getElementById(i);(d=e==null?void 0:e.unassociateElement)==null||d.call(e,this)}if(t){const e=a.getElementById(t);(l=e==null?void 0:e.associateElement)==null||l.call(e,this)}}}connectedCallback(){var i;const n=this.getAttribute(s.MEDIA_CONTROLLER);if(n){const t=a.getElementById(n);(i=t==null?void 0:t.associateElement)==null||i.call(t,this)}}disconnectedCallback(){var i;if(this.loadingDelayHandle&&(clearTimeout(this.loadingDelayHandle),this.loadingDelayHandle=void 0),this.getAttribute(s.MEDIA_CONTROLLER)){const t=a.getElementById(mediaControllerId);(i=t==null?void 0:t.unassociateElement)==null||i.call(t,this)}}}D("media-loading-indicator",r);export default r;
