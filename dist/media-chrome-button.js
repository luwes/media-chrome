import{MediaUIAttributes as r}from"./constants.js";import{defineCustomElement as b}from"./utils/defineCustomElement.js";import{Window as f,Document as a}from"./utils/server-safe-globals.js";const d=a.createElement("template");d.innerHTML=`
<style>
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: auto;
    box-sizing: border-box;
    background: var(--media-control-background, rgba(20,20,30, 0.7));

    padding: 10px;

    /* Vertically center any text */
    font-size: 14px;
    font-weight: bold;
    color: #fff;

    transition: background 0.15s linear;

    pointer-events: auto;
    cursor: pointer;
    font-family: Arial, sans-serif;
  }

  /*
    Only show outline when keyboard focusing.
    https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo
  */
  :host-context([media-keyboard-control]):host(:focus),
  :host-context([media-keyboard-control]):host(:focus-within) {
    box-shadow: inset 0 0 0 2px rgba(27, 127, 204, 0.9);
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50,50,70, 0.7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, 18px);
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, #eee);
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }

  ::slotted(div), ::slotted(span) {
    height: 18px;
  }
</style>
`;const h=["Enter"," "];class l extends f.HTMLElement{static get observedAttributes(){return[r.MEDIA_CONTROLLER]}constructor(s={}){super();const n=this.attachShadow({mode:"open"}),e=d.content.cloneNode(!0);this.nativeEl=e;let i=s.slotTemplate;i||(i=a.createElement("template"),i.innerHTML=`<slot>${s.defaultContent||""}</slot>`),this.nativeEl.appendChild(i.content.cloneNode(!0)),n.appendChild(e),this.addEventListener("click",t=>{this.handleClick(t)});const o=t=>{const{key:c}=t;if(!h.includes(c)){this.removeEventListener("keyup",o);return}this.handleClick(t)};this.addEventListener("keydown",t=>{const{metaKey:c,altKey:u,key:m}=t;if(c||u||!h.includes(m)){this.removeEventListener("keyup",o);return}this.addEventListener("keyup",o)})}attributeChangedCallback(s,n,e){var i,o;if(s===r.MEDIA_CONTROLLER){if(n){const t=a.getElementById(n);(i=t==null?void 0:t.unassociateElement)==null||i.call(t,this)}if(e){const t=a.getElementById(e);(o=t==null?void 0:t.associateElement)==null||o.call(t,this)}}}connectedCallback(){var n;this.setAttribute("role","button"),this.setAttribute("tabindex",0);const s=this.getAttribute(r.MEDIA_CONTROLLER);if(s){const e=a.getElementById(s);(n=e==null?void 0:e.associateElement)==null||n.call(e,this)}}disconnectedCallback(){var n;if(this.getAttribute(r.MEDIA_CONTROLLER)){const e=a.getElementById(mediaControllerId);(n=e==null?void 0:e.unassociateElement)==null||n.call(e,this)}}handleClick(){}}b("media-chrome-button",l);export default l;
