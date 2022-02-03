import{defineCustomElement as v}from"./utils/defineCustomElement.js";import{Window as n,Document as f}from"./utils/server-safe-globals.js";import{MediaUIEvents as h,MediaUIAttributes as c}from"./constants.js";import{nouns as m}from"./labels/labels.js";const p=f.createElement("template");p.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      background-color: #000;
    }

    :host(:not([audio])) *[part~=layer] {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    :host(:not([audio])) :is([part~=gestures-layer],[part~=media-layer]) {
      pointer-events: auto;
    }
    
    :host(:not([audio])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    .spacer {
      pointer-events: none;
      background: none;
    }

    /* Position the media element to fill the container */
    ::slotted([slot=media]) {
      width: 100%;
      height: 100%;
    }

    /* Video specific styles */
    :host(:not([audio])) {
      aspect-ratio: var(--media-aspect-ratio, auto 3 / 2);
      width: 720px;
    }

    :host(:not([audio])) .spacer {
      flex-grow: 1;
    }

    @supports not (aspect-ratio: 1 / 1) {
      :host(:not([audio])) {
        height: 480px;
      }
    }

    /* Safari needs this to actually make the element fill the window */
    :host(:-webkit-full-screen) {
      /* Needs to use !important otherwise easy to break */
      width: 100% !important;
      height: 100% !important;
    }

    /* Hide controls when inactive and not paused and not audio */
    ::slotted(:not([slot=media])) {
      opacity: 1;
      transition: opacity 0.25s;
      visibility: visible;
      pointer-events: auto;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    :host([user-inactive]:not([${c.MEDIA_PAUSED}]):not([audio])) ::slotted(:not([slot=media]):not([no-auto-hide])) {
      opacity: 0;
      transition: opacity 1s;
    }
  </style>

  <span part="layer media-layer">
    <slot name="media"></slot>
  </span>
  <span part="layer gesture-layer">
    <slot name="gestures-chrome"></slot>
  </span>
  <span part="layer vertical-layer">
    <slot name="top-chrome"></slot>
    <span class="spacer"><slot name="middle-chrome"></slot></span>
    <!-- default, effectively "bottom-chrome" -->
    <slot></slot>
  </span>
  <span part="layer centered-layer">
    <slot name="centered-chrome"></slot>
  </span>
`;const y=Object.values(c);class b extends n.HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});this.shadowRoot.appendChild(p.content.cloneNode(!0));const o=(t,r)=>{const d=this.media;for(let a of t)a.type==="childList"&&(a.removedNodes.forEach(l=>{if(l.slot=="media"&&a.target==this){let s=a.previousSibling&&a.previousSibling.previousElementSibling;if(!s||!d)this.mediaUnsetCallback(l);else{let u=s.slot!=="media";for(;(s=s.previousSibling)!==null;)s.slot=="media"&&(u=!1);u&&this.mediaUnsetCallback(l)}}}),d&&a.addedNodes.forEach(l=>{l==d&&this.handleMediaUpdated(d).then(s=>this.mediaSetCallback(s))}))};new MutationObserver(o).observe(this,{childList:!0,subtree:!0})}static get observedAttributes(){return["autohide"].concat(y)}attributeChangedCallback(e,o,i){e.toLowerCase()=="autohide"&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(e==null?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}mediaSetCallback(e){this._mediaClickPlayToggle=o=>{const i=e.paused?h.MEDIA_PLAY_REQUEST:h.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new n.CustomEvent(i,{composed:!0,bubbles:!0}))}}handleMediaUpdated(e){const o=r=>Promise.resolve(r),i=r=>(console.error('<media-chrome>: Media element set with slot="media" does not appear to be compatible.',r),Promise.reject(r));if(!e)return i(e);const t=e.nodeName.toLowerCase();return t.includes("-")?n.customElements.whenDefined(t).then(()=>o(e)):o(e)}mediaUnsetCallback(e){}connectedCallback(){const o=this.getAttribute("audio")!=null?m.AUDIO_PLAYER():m.VIDEO_PLAYER();this.setAttribute("role","region"),this.setAttribute("aria-label",o),this.media&&this.handleMediaUpdated(this.media).then(t=>this.mediaSetCallback(t));const i=()=>{this.removeAttribute("user-inactive"),n.clearTimeout(this.inactiveTimeout),!(this.autohide<0)&&(this.inactiveTimeout=n.setTimeout(()=>{this.setAttribute("user-inactive","user-inactive")},this.autohide*1e3))};this.addEventListener("keyup",t=>{i()}),this.addEventListener("keyup",t=>{this.setAttribute("media-keyboard-control","media-keyboard-control")}),this.addEventListener("mouseup",t=>{this.removeAttribute("media-keyboard-control")}),this.addEventListener("mousemove",t=>{t.target!==this&&(this.removeAttribute("user-inactive"),n.clearTimeout(this.inactiveTimeout),t.target===this.media&&i())}),this.addEventListener("mouseout",t=>{this.autohide>-1&&this.setAttribute("user-inactive","user-inactive")})}set autohide(e){e=Number(e),this._autohide=isNaN(e)?0:e}get autohide(){return this._autohide===void 0?2:this._autohide}}v("media-container-temp",b);export default b;
