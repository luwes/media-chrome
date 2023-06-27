var MediaChrome=(()=>{var et=Object.defineProperty;var Gr=Object.getOwnPropertyDescriptor;var Wr=Object.getOwnPropertyNames;var Qr=Object.prototype.hasOwnProperty;var Yr=(i,t,e)=>t in i?et(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Kt=(i,t)=>{for(var e in t)et(i,e,{get:t[e],enumerable:!0})},qr=(i,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Wr(t))!Qr.call(i,s)&&s!==e&&et(i,s,{get:()=>t[s],enumerable:!(r=Gr(t,s))||r.enumerable});return i};var Zr=i=>qr(et({},"__esModule",{value:!0}),i);var tt=(i,t,e)=>(Yr(i,typeof t!="symbol"?t+"":t,e),e),Gt=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var l=(i,t,e)=>(Gt(i,t,"read from private field"),e?e.call(i):t.get(i)),b=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},h=(i,t,e,r)=>(Gt(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e);var N=(i,t,e)=>(Gt(i,t,"access private method"),e);var zs={};Kt(zs,{MediaAirplayButton:()=>Ti,MediaCaptionsButton:()=>ar,MediaCastButton:()=>Li,MediaChromeButton:()=>vi,MediaChromeRange:()=>Qi,MediaControlBar:()=>qi,MediaController:()=>Ki,MediaDurationDisplay:()=>ji,MediaFullscreenButton:()=>cr,MediaGestureReceiver:()=>Ri,MediaLiveButton:()=>Er,MediaLoadingIndicator:()=>Hr,MediaMuteButton:()=>Ar,MediaPipButton:()=>vr,MediaPlayButton:()=>Mr,MediaPlaybackRateButton:()=>Lr,MediaPosterImage:()=>Rr,MediaPreviewThumbnail:()=>wr,MediaPreviewTimeDisplay:()=>xr,MediaSeekBackwardButton:()=>Ur,MediaSeekForwardButton:()=>lr,MediaTimeDisplay:()=>er,MediaTimeRange:()=>Br,MediaVolumeRange:()=>Kr,constants:()=>rt,labels:()=>ci,timeUtils:()=>nt});var rt={};Kt(rt,{AttributeToStateChangeEventMap:()=>Wt,AvailabilityStates:()=>Z,MediaStateChangeEvents:()=>ae,MediaStateReceiverAttributes:()=>g,MediaUIAttributes:()=>a,MediaUIEvents:()=>p,MediaUIProps:()=>ee,PointerTypes:()=>it,ReadyStates:()=>zr,StateChangeEventToAttributeMap:()=>jr,StreamTypes:()=>B,TextTrackKinds:()=>ne,TextTrackModes:()=>De});var p={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},g={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},ee={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_PAUSED:"mediaPaused",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_ENDED:"mediaEnded",MEDIA_MUTED:"mediaMuted",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_IS_PIP:"mediaIsPip",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_LOADING:"mediaLoading",MEDIA_BUFFERED:"mediaBuffered",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive"},ui=Object.entries(ee),a=ui.reduce((i,[t,e])=>(i[t]=`${e.toLowerCase()}`,i),{}),ae=ui.reduce((i,[t,e])=>(i[t]=`${e.toLowerCase()}`,i),{USER_INACTIVE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange"}),jr=Object.entries(ae).reduce((i,[t,e])=>{let r=a[t];return r&&(i[e]=r),i},{userinactivechange:"userinactive"}),Wt=Object.entries(a).reduce((i,[t,e])=>{let r=ae[t];return r&&(i[e]=r),i},{userinactive:"userinactivechange"}),ne={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},De={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},zr={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},it={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},Z={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},B={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"};var x={AUDIO_PLAYER:()=>"audio player",VIDEO_PLAYER:()=>"video player",VOLUME:()=>"volume",SEEK:()=>"seek",CLOSED_CAPTIONS:()=>"closed captions",PLAYBACK_RATE:({playbackRate:i=1}={})=>`current playback rate ${i}`,PLAYBACK_TIME:()=>"playback time",MEDIA_LOADING:()=>"media loading"},S={PLAY:()=>"play",PAUSE:()=>"pause",MUTE:()=>"mute",UNMUTE:()=>"unmute",AIRPLAY:()=>"air play",ENTER_CAST:()=>"start casting",EXIT_CAST:()=>"stop casting",ENTER_FULLSCREEN:()=>"enter fullscreen mode",EXIT_FULLSCREEN:()=>"exit fullscreen mode",ENTER_PIP:()=>"enter picture in picture mode",EXIT_PIP:()=>"exit picture in picture mode",SEEK_FORWARD_N_SECS:({seekOffset:i=30}={})=>`seek forward ${i} seconds`,SEEK_BACK_N_SECS:({seekOffset:i=30}={})=>`seek back ${i} seconds`,SEEK_LIVE:()=>"seek to live",PLAYING_LIVE:()=>"playing live"},ci={...x,...S};var nt={};Kt(nt,{emptyTimeRanges:()=>hi,formatAsTimePhrase:()=>te,formatTime:()=>V,serializeTimeRanges:()=>Jr});function st(i,t=!1){return i.split("_").map(function(e,r){return(r||t?e[0].toUpperCase():e[0].toLowerCase())+e.slice(1).toLowerCase()}).join("")}function mi(i){return typeof i=="number"&&!Number.isNaN(i)&&Number.isFinite(i)}var at=i=>new Promise(t=>setTimeout(t,i));var Ei=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],Xr=(i,t)=>{let e=i===1?Ei[t].singular:Ei[t].plural;return`${i} ${e}`},te=i=>{if(!mi(i))return"";let t=Math.abs(i),e=t!==i,r=new Date(0,0,0,0,0,t,0);return`${[r.getHours(),r.getMinutes(),r.getSeconds()].map((u,c)=>u&&Xr(u,c)).filter(u=>u).join(", ")}${e?" remaining":""}`};function V(i,t){let e=!1;i<0&&(e=!0,i=0-i),i=i<0?0:i;let r=Math.floor(i%60),s=Math.floor(i/60%60),n=Math.floor(i/3600),d=Math.floor(t/60%60),u=Math.floor(t/3600);return(isNaN(i)||i===1/0)&&(n=s=r="-"),n=n>0||u>0?n+":":"",s=((n||d>=10)&&s<10?"0"+s:s)+":",r=r<10?"0"+r:r,(e?"-":"")+n+s+r}var hi=Object.freeze({length:0,start(i){let t=i>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(i){let t=i>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});function Jr(i=hi){return Array.from(i).map((t,e)=>[Number(i.start(e).toFixed(3)),Number(i.end(e).toFixed(3))].join(":")).join(" ")}var pi=(i,t,e=".value")=>{let r=i.querySelector(e);!r||(r.textContent=t)},es=(i,t)=>{let e=`slot[name="${t}"]`,r=i.shadowRoot.querySelector(e);return r?r.children:[]},bi=(i,t)=>es(i,t)[0],Re=(i,t)=>!i||!t?!1:i.contains(t)?!0:Re(i,t.getRootNode().host),Ce=(i,t)=>{if(!i)return null;let e=i.closest(t);return e||Ce(i.getRootNode().host,t)};function D(i,t){var r;let e;for(e of i.querySelectorAll("style")){let s;try{s=(r=e.sheet)==null?void 0:r.cssRules}catch{continue}for(let n of s!=null?s:[])if(n.selectorText===t)return n}return e!=null&&e.sheet?(e.sheet.insertRule(`${t}{}`,e.sheet.cssRules.length),e.sheet.cssRules[e.sheet.cssRules.length-1]):{style:{setProperty:()=>{},removeProperty:()=>{}}}}function R(i,t,e=Number.NaN){let r=i.getAttribute(t);return r!=null?+r:e}function L(i,t,e){let r=+e;if(e==null||Number.isNaN(r)){i.hasAttribute(t)&&i.removeAttribute(t);return}R(i,t,void 0)!==r&&i.setAttribute(t,`${r}`)}function T(i,t){return i.hasAttribute(t)}function v(i,t,e){if(e==null){i.hasAttribute(t)&&i.removeAttribute(t);return}T(i,t)!=e&&i.toggleAttribute(t,e)}function U(i,t,e=null){var r;return(r=i.getAttribute(t))!=null?r:e}function y(i,t,e){if(e==null){i.hasAttribute(t)&&i.removeAttribute(t);return}let r=`${e}`;U(i,t,void 0)!==r&&i.setAttribute(t,r)}var ot=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}},Qt=class{observe(){}},Ai={createElement:function(){return new Yt.HTMLElement},addEventListener(){},removeEventListener(){}},Yt={ResizeObserver:Qt,document:Ai,HTMLElement:class extends ot{},DocumentFragment:class extends ot{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},CustomEvent:function(){},getComputedStyle:function(){},requestAnimationFrame:function(i){return 1},queueMicrotask:function(i){}},gi=typeof window=="undefined"||typeof window.customElements=="undefined",fi=Object.keys(Yt).every(i=>i in globalThis),o=gi&&!fi?Yt:globalThis,E=gi&&!fi?Ai:globalThis.document;var Ii=E.createElement("template");Ii.innerHTML=`
<style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-control-padding, 10px);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: pointer;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }
</style>
`;var F,ye,oe,Ue,M=class extends o.HTMLElement{constructor(e={}){super();b(this,F,void 0);tt(this,"preventClick",!1);b(this,ye,e=>{this.preventClick||this.handleClick(e)});b(this,oe,e=>{let{key:r}=e;if(!this.keysUsed.includes(r)){this.removeEventListener("keyup",l(this,oe));return}this.preventClick||this.handleClick(e)});b(this,Ue,e=>{let{metaKey:r,altKey:s,key:n}=e;if(r||s||!this.keysUsed.includes(n)){this.removeEventListener("keyup",l(this,oe));return}this.addEventListener("keyup",l(this,oe),{once:!0})});if(!this.shadowRoot){this.attachShadow({mode:"open"});let s=Ii.content.cloneNode(!0);this.nativeEl=s;let n=e.slotTemplate;n||(n=E.createElement("template"),n.innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(n.content.cloneNode(!0)),this.shadowRoot.appendChild(s)}let{style:r}=D(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`)}static get observedAttributes(){return["disabled",g.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",l(this,ye)),this.addEventListener("keydown",l(this,Ue)),this.tabIndex=0}disable(){this.removeEventListener("click",l(this,ye)),this.removeEventListener("keydown",l(this,Ue)),this.removeEventListener("keyup",l(this,oe)),this.tabIndex=-1}attributeChangedCallback(e,r,s){var n,d,u,c,m;e===g.MEDIA_CONTROLLER?(r&&((d=(n=l(this,F))==null?void 0:n.unassociateElement)==null||d.call(n,this),h(this,F,null)),s&&(h(this,F,(u=this.getRootNode())==null?void 0:u.getElementById(s)),(m=(c=l(this,F))==null?void 0:c.associateElement)==null||m.call(c,this))):e==="disabled"&&s!==r&&(s==null?this.enable():this.disable())}connectedCallback(){var r,s,n;this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","button");let e=this.getAttribute(g.MEDIA_CONTROLLER);e&&(h(this,F,(r=this.getRootNode())==null?void 0:r.getElementById(e)),(n=(s=l(this,F))==null?void 0:s.associateElement)==null||n.call(s,this))}disconnectedCallback(){var e,r;this.disable(),(r=(e=l(this,F))==null?void 0:e.unassociateElement)==null||r.call(e,this),h(this,F,null)}get keysUsed(){return["Enter"," "]}handleClick(e){}};F=new WeakMap,ye=new WeakMap,oe=new WeakMap,Ue=new WeakMap;o.customElements.get("media-chrome-button")||o.customElements.define("media-chrome-button",M);var vi=M;var ts=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,_i=E.createElement("template");_i.innerHTML=`
  <slot name="icon">${ts}</slot>
`;var lt=class extends M{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_AIRPLAY_UNAVAILABLE]}constructor(t={}){super({slotTemplate:_i,...t})}connectedCallback(){this.setAttribute("aria-label",S.AIRPLAY()),super.connectedCallback()}get mediaAirplayUnavailable(){return U(this,a.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(t){y(this,a.MEDIA_AIRPLAY_UNAVAILABLE,t)}handleClick(){let t=new o.CustomEvent(p.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(t)}};o.customElements.get("media-airplay-button")||o.customElements.define("media-airplay-button",lt);var Ti=lt;var is='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',rs='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>',Si=E.createElement("template");Si.innerHTML=`
  <style>
  :host([${a.MEDIA_IS_CASTING}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${a.MEDIA_IS_CASTING}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${is}</slot>
    <slot name="exit">${rs}</slot>
  </slot>
`;var Mi=i=>{let e=i.getAttribute(a.MEDIA_IS_CASTING)!=null?S.EXIT_CAST():S.ENTER_CAST();i.setAttribute("aria-label",e)},dt=class extends M{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_IS_CASTING,a.MEDIA_CAST_UNAVAILABLE]}constructor(t={}){super({slotTemplate:Si,...t})}connectedCallback(){Mi(this),super.connectedCallback()}attributeChangedCallback(t,e,r){t===a.MEDIA_IS_CASTING&&Mi(this),super.attributeChangedCallback(t,e,r)}get mediaIsCasting(){return T(this,a.MEDIA_IS_CASTING)}set mediaIsCasting(t){v(this,a.MEDIA_IS_CASTING,t)}get mediaCastUnavailable(){return U(this,a.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(t){y(this,a.MEDIA_CAST_UNAVAILABLE,t)}handleClick(){let t=this.mediaIsCasting?p.MEDIA_EXIT_CAST_REQUEST:p.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new o.CustomEvent(t,{composed:!0,bubbles:!0}))}};o.customElements.get("media-cast-button")||o.customElements.define("media-cast-button",dt);var Li=dt;var Di=E.createElement("template");Di.innerHTML=`
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;var k,ut=class extends o.HTMLElement{constructor(e={}){super();b(this,k,void 0);if(!this.shadowRoot){let r=this.attachShadow({mode:"open"}),s=Di.content.cloneNode(!0);this.nativeEl=s;let n=e.slotTemplate;n||(n=E.createElement("template"),n.innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(n.content.cloneNode(!0)),r.appendChild(s)}}static get observedAttributes(){return[g.MEDIA_CONTROLLER,a.MEDIA_PAUSED]}attributeChangedCallback(e,r,s){var n,d,u,c,m;e===g.MEDIA_CONTROLLER&&(r&&((d=(n=l(this,k))==null?void 0:n.unassociateElement)==null||d.call(n,this),h(this,k,null)),s&&(h(this,k,(u=this.getRootNode())==null?void 0:u.getElementById(s)),(m=(c=l(this,k))==null?void 0:c.associateElement)==null||m.call(c,this)))}connectedCallback(){var e,r,s,n;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),h(this,k,ss(this)),this.getAttribute(g.MEDIA_CONTROLLER)&&((r=(e=l(this,k))==null?void 0:e.associateElement)==null||r.call(e,this)),(s=l(this,k))==null||s.addEventListener("pointerdown",this),(n=l(this,k))==null||n.addEventListener("click",this)}disconnectedCallback(){var e,r,s,n;this.getAttribute(g.MEDIA_CONTROLLER)&&((r=(e=l(this,k))==null?void 0:e.unassociateElement)==null||r.call(e,this)),(s=l(this,k))==null||s.removeEventListener("pointerdown",this),(n=l(this,k))==null||n.removeEventListener("click",this),h(this,k,null)}handleEvent(e){var n;let r=(n=e.composedPath())==null?void 0:n[0];if(!!["video","media-controller"].includes(r==null?void 0:r.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){let{clientX:d,clientY:u}=e,{left:c,top:m,width:A,height:f}=this.getBoundingClientRect(),I=d-c,O=u-m;if(I<0||O<0||I>A||O>f||A===0&&f===0)return;let{pointerType:$=this._pointerType}=e;if(this._pointerType=void 0,$===it.TOUCH){this.handleTap(e);return}else if($===it.MOUSE){this.handleMouseClick(e);return}}}}get mediaPaused(){return T(this,a.MEDIA_PAUSED)}set mediaPaused(e){v(this,a.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let r=this.mediaPaused?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new o.CustomEvent(r,{composed:!0,bubbles:!0}))}};k=new WeakMap;function ss(i){var e;let t=i.getAttribute(g.MEDIA_CONTROLLER);return t?(e=i.getRootNode())==null?void 0:e.getElementById(t):Ce(i,"media-controller")}o.customElements.get("media-gesture-receiver")||o.customElements.define("media-gesture-receiver",ut);var Ri=ut;var _={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive"},Ci=E.createElement("template");Ci.innerHTML=`
  <style>
    
    :host([${a.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([${_.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
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

    slot[name=media] {
      display: var(--media-slot-display, contents);
    }

    
    :host([${_.AUDIO}]) slot[name=media] {
      display: var(--media-slot-display, none);
    }

    
    :host([${_.AUDIO}]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([${_.AUDIO}])[${_.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
    :host(:not([${_.AUDIO}])[${_.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator)) {
      pointer-events: auto;
    }

    :host(:not([${_.AUDIO}])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([${_.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([${_.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([${_.AUDIO}])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([${_.NO_AUTOHIDE}])) {
      opacity: 1;
      transition: opacity 0.25s;
    }

    
    :host([${_.USER_INACTIVE}]:not([${a.MEDIA_PAUSED}]):not([${a.MEDIA_IS_CASTING}]):not([${_.AUDIO}])) ::slotted(:not([slot=media]):not([${_.NO_AUTOHIDE}])) {
      opacity: 0;
      transition: opacity 1s;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    :host([${a.MEDIA_HAS_PLAYED}]) ::slotted([slot=poster]) {
      display: none;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
`;var as=Object.values(a),ns="sm:384 md:576 lg:768 xl:960",os=i=>{var t;for(let e of i){let r=e.target;if(!r.isConnected)continue;let s=(t=r.getAttribute(_.BREAKPOINTS))!=null?t:ns,n=ls(s),d=ds(n,e.contentRect),u=!1;if(Object.keys(n).forEach(c=>{if(d.includes(c)){r.hasAttribute(`breakpoint${c}`)||(r.setAttribute(`breakpoint${c}`,""),u=!0);return}r.hasAttribute(`breakpoint${c}`)&&(r.removeAttribute(`breakpoint${c}`),u=!0)}),u){let c=new CustomEvent(ae.BREAKPOINTS_CHANGE,{detail:d});r.dispatchEvent(c)}}};function ls(i){let t=i.split(/\s+/);return Object.fromEntries(t.map(e=>e.split(":")))}function ds(i,t){return Object.keys(i).filter(e=>t.width>=i[e])}var ct=class extends o.HTMLElement{constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Ci.content.cloneNode(!0)));let t=c=>{let m=this.media;for(let A of c)A.type==="childList"&&(A.removedNodes.forEach(f=>{if(f.slot=="media"&&A.target==this){let I=A.previousSibling&&A.previousSibling.previousElementSibling;if(!I||!m)this.mediaUnsetCallback(f);else{let O=I.slot!=="media";for(;(I=I.previousSibling)!==null;)I.slot=="media"&&(O=!1);O&&this.mediaUnsetCallback(f)}}}),m&&A.addedNodes.forEach(f=>{f==m&&this.handleMediaUpdated(m).then(I=>this.mediaSetCallback(I))}))};new MutationObserver(t).observe(this,{childList:!0,subtree:!0});let r=!1,s=c=>{r||(o.queueMicrotask(()=>{os(c),r=!1}),r=!0)},n=new ResizeObserver(s);this.resizeObserver=n,n.observe(this);let d=this.media,u=this.querySelector(":scope > slot[slot=media]");u&&u.addEventListener("slotchange",()=>{if(!u.assignedElements({flatten:!0}).length){this.mediaUnsetCallback(d);return}this.media&&(d=this.media,this.handleMediaUpdated(this.media).then(m=>this.mediaSetCallback(m)))})}static get observedAttributes(){return[_.AUTOHIDE,_.GESTURES_DISABLED].concat(as)}attributeChangedCallback(t,e,r){t.toLowerCase()==_.AUTOHIDE&&(this.autohide=r)}get media(){let t=this.querySelector(":scope > [slot=media]");return(t==null?void 0:t.nodeName)=="SLOT"&&(t=t.assignedElements({flatten:!0})[0]),t}mediaSetCallback(t){this._mediaClickPlayToggle=()=>{let e=t.paused?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new o.CustomEvent(e,{composed:!0,bubbles:!0}))}}handleMediaUpdated(t){let e=n=>Promise.resolve(n),r=n=>(console.error('<media-chrome>: Media element set with slot="media" does not appear to be compatible.',n),Promise.reject(n));if(!t)return r(t);let s=t.nodeName.toLowerCase();return s.includes("-")?o.customElements.whenDefined(s).then(()=>e(t)):e(t)}mediaUnsetCallback(t){}connectedCallback(){var d;let e=this.getAttribute(_.AUDIO)!=null?x.AUDIO_PLAYER():x.VIDEO_PLAYER();this.setAttribute("role","region"),this.setAttribute("aria-label",e),this.media&&this.handleMediaUpdated(this.media).then(u=>this.mediaSetCallback(u)),this.setAttribute(_.USER_INACTIVE,"");let r=()=>{if(this.autohide<0||this.hasAttribute(_.USER_INACTIVE))return;this.setAttribute(_.USER_INACTIVE,"");let u=new o.CustomEvent(ae.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(u)},s=()=>{if(!this.hasAttribute(_.USER_INACTIVE))return;this.removeAttribute(_.USER_INACTIVE);let u=new o.CustomEvent(ae.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(u)},n=()=>{s(),o.clearTimeout(this._inactiveTimeout),!(this.autohide<0)&&(this._inactiveTimeout=o.setTimeout(()=>{r()},this.autohide*1e3))};this.addEventListener("keyup",()=>{n()}),this.addEventListener("pointerup",u=>{u.pointerType==="touch"?[this,this.media].includes(u.target)&&!this.hasAttribute(_.USER_INACTIVE)?r():n():u.composedPath().some(c=>{var m;return["media-play-button","media-fullscreen-button"].includes((m=c==null?void 0:c.nodeName)==null?void 0:m.toLowerCase())})&&n()}),this.addEventListener("pointermove",u=>{u.pointerType==="mouse"&&(s(),o.clearTimeout(this._inactiveTimeout),[this,this.media].includes(u.target)&&n())}),this.addEventListener("mouseleave",()=>{r()}),this.addEventListener("keyup",()=>{this.setAttribute(_.KEYBOARD_CONTROL,"")}),(d=o.window)==null||d.addEventListener("mouseup",()=>{this.removeAttribute(_.KEYBOARD_CONTROL)})}set autohide(t){t=Number(t),this._autohide=isNaN(t)?0:t}get autohide(){return this._autohide===void 0?2:this._autohide}};var le,de,xe,re,j,ie,Ae=class{constructor(t,e,{defaultValue:r}={defaultValue:void 0}){b(this,j);b(this,le,void 0);b(this,de,void 0);b(this,xe,void 0);b(this,re,new Set);h(this,le,t),h(this,de,e),h(this,xe,new Set(r))}[Symbol.iterator](){return l(this,j,ie).values()}get length(){return l(this,j,ie).size}get value(){var t;return(t=[...l(this,j,ie)].join(" "))!=null?t:""}set value(t){var e;t!==this.value&&(h(this,re,new Set),this.add(...(e=t==null?void 0:t.split(" "))!=null?e:[]))}toString(){return this.value}item(t){return[...l(this,j,ie)][t]}values(){return l(this,j,ie).values()}forEach(t){l(this,j,ie).forEach(t)}add(...t){var e,r;t.forEach(s=>l(this,re).add(s)),!(this.value===""&&!((e=l(this,le))!=null&&e.hasAttribute(`${l(this,de)}`)))&&((r=l(this,le))==null||r.setAttribute(`${l(this,de)}`,`${this.value}`))}remove(...t){var e;t.forEach(r=>l(this,re).delete(r)),(e=l(this,le))==null||e.setAttribute(`${l(this,de)}`,`${this.value}`)}contains(t){return l(this,j,ie).has(t)}toggle(t,e){return typeof e!="undefined"?e?(this.add(t),!0):(this.remove(t),!1):this.contains(t)?(this.remove(t),!1):(this.add(t),!0)}replace(t,e){return this.remove(t),this.add(e),t===e}};le=new WeakMap,de=new WeakMap,xe=new WeakMap,re=new WeakMap,j=new WeakSet,ie=function(){return l(this,re).size?l(this,re):l(this,xe)};var yi=(i="")=>i.split(/\s+/),Ui=(i="")=>{let[t,e,r]=i.split(":"),s=r?decodeURIComponent(r):void 0;return t=t==="cc"?"captions":"subtitles",{kind:t,language:e,label:s}},qt=(i="",t={})=>yi(i).map(e=>{let r=Ui(e);return{...t,...r}}),us=i=>Array.isArray(i)?i.map(t=>typeof t=="string"?Ui(t):t):typeof i=="string"?qt(i):[i],cs=({kind:i,label:t,language:e}={kind:"subtitles"})=>t?`${i==="captions"?"cc":"sb"}:${e}:${encodeURIComponent(t)}`:e,ke=(i=[])=>Array.prototype.map.call(i,cs).join(" "),ms=(i,t)=>e=>e[i]===t,xi=i=>{let t=Object.entries(i).map(([e,r])=>ms(e,r));return e=>t.every(r=>r(e))},Zt=(i,t=[],e=[])=>{let r=us(e).map(xi),s=n=>r.some(d=>d(n));Array.from(t).filter(s).forEach(n=>{n.mode=i})},mt=(i,t=()=>!0)=>{if(!(i!=null&&i.textTracks))return[];let e=typeof t=="function"?t:xi(t);return Array.from(i.textTracks).filter(e)},jt=i=>!!i.getAttribute(a.MEDIA_SUBTITLES_SHOWING),ue=(i,t)=>{var r,s;let e=jt(i);if(e||t===!1){let n=i.getAttribute(a.MEDIA_SUBTITLES_SHOWING);if(n){let d=new o.CustomEvent(p.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:n});i.dispatchEvent(d)}}else if(!e||t===!0){let[n]=(s=yi((r=i.getAttribute(a.MEDIA_SUBTITLES_LIST))!=null?r:""))!=null?s:[];if(n){let d=new o.CustomEvent(p.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:n});i.dispatchEvent(d)}}else console.error("Attempting to enable captions or subtitles but none are available! Please verify your media content if this is unexpected.")};var C={enter:"requestFullscreen",exit:"exitFullscreen",rootEvents:["fullscreenchange"],mediaEvents:[],element:"fullscreenElement",error:"fullscreenerror",enabled:"fullscreenEnabled"};E.fullscreenElement===void 0&&(C.enter="webkitRequestFullScreen",C.exit=E.webkitExitFullscreen!=null?"webkitExitFullscreen":"webkitCancelFullScreen",C.rootEvents=["webkitfullscreenchange"],C.mediaEvents=["webkitbeginfullscreen","webkitendfullscreen"],C.element="webkitFullscreenElement",C.error="webkitfullscreenerror",C.enabled="webkitFullscreenEnabled");var Et,zt=()=>{var i,t;return Et||(Et=(t=(i=E)==null?void 0:i.createElement)==null?void 0:t.call(i,"video"),Et)},ki=async(i=zt())=>{if(!i)return!1;let t=i.volume;return i.volume=t/2+.1,await at(0),i.volume!==t},Es=(i=zt())=>typeof(i==null?void 0:i.requestPictureInPicture)=="function",hs=(i=zt())=>{let t=E[C.enabled];return!t&&i&&(t="webkitSupportsFullscreen"in i),t},Xt=hs(),wi=Es(),Pi=!!o.WebKitPlaybackTargetAvailabilityEvent,Ni=!!o.chrome;var ht,Oi=ki().then(i=>(ht=i,ht)),ps=Object.values(B),Jt=i=>mt(i.media,t=>[ne.SUBTITLES,ne.CAPTIONS].includes(t.kind)).sort((t,e)=>t.kind>=e.kind?1:-1),bs=i=>mt(i.media,t=>t.mode===De.SHOWING&&[ne.SUBTITLES,ne.CAPTIONS].includes(t.kind)),w={MEDIA_PAUSED:{get:function(i){let{media:t}=i;return t?t.paused:!0},mediaEvents:["play","playing","pause","emptied"]},MEDIA_HAS_PLAYED:{get:function(i){let{media:t}=i;return t?!t.paused:!1},mediaEvents:["playing","emptied"]},MEDIA_ENDED:{get:function(i){let{media:t}=i;return t?t.ended:!1},mediaEvents:["seeked","ended","emptied"]},MEDIA_PLAYBACK_RATE:{get:function(i){let{media:t}=i;return!t||typeof t.playbackRate=="undefined"?1:t.playbackRate},mediaEvents:["ratechange","loadstart"]},MEDIA_MUTED:{get:function(i){let{media:t}=i;return!t||typeof t.muted=="undefined"?!1:t.muted},mediaEvents:["volumechange"]},MEDIA_VOLUME:{get:function(i){let{media:t}=i;return!t||typeof t.volume=="undefined"?1:Number(t.volume)},mediaEvents:["volumechange"]},MEDIA_VOLUME_LEVEL:{get:function(i){let{media:t}=i,e="high";if(!t||typeof t.volume=="undefined")return e;let{muted:r,volume:s}=t;return s===0||r?e="off":s<.5?e="low":s<.75&&(e="medium"),e},mediaEvents:["volumechange"]},MEDIA_CURRENT_TIME:{get:function(i){let{media:t}=i;return!t||typeof t.currentTime=="undefined"?0:t.currentTime},mediaEvents:["timeupdate","loadedmetadata"]},MEDIA_DURATION:{get:function(i){let{media:t}=i;return!t||!Number.isFinite(t.duration)?NaN:t.duration},mediaEvents:["durationchange","loadedmetadata","emptied"]},MEDIA_SEEKABLE:{get:function(i){var s;let{media:t}=i;if(!((s=t==null?void 0:t.seekable)!=null&&s.length))return;let e=t.seekable.start(0),r=t.seekable.end(t.seekable.length-1);if(!(!e&&!r))return[Number(e.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress"]},MEDIA_LOADING:{get:function(i){var t;return((t=i.media)==null?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},MEDIA_BUFFERED:{get:function(i){var e,r,s;let t=(e=i.media)==null?void 0:e.buffered;return Array.from((s=(r=i.media)==null?void 0:r.buffered)!=null?s:[]).map((n,d)=>[Number(t.start(d)).toFixed(3),Number(t.end(d)).toFixed(3)])},mediaEvents:["progress","emptied"]},MEDIA_STREAM_TYPE:{get:function(i){let{media:t}=i;if(!t)return;let{streamType:e}=t;if(ps.includes(e)){if(e===B.UNKNOWN){let s=i.getAttribute("defaultstreamtype");return[B.LIVE,B.ON_DEMAND].includes(s)?s:void 0}return e}let r=t.duration;if(r===1/0)return B.LIVE;if(Number.isFinite(r))return B.ON_DEMAND;{let s=i.getAttribute("defaultstreamtype");if([B.LIVE,B.ON_DEMAND].includes(s))return s}},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},MEDIA_TARGET_LIVE_WINDOW:{get:function(i){let{media:t}=i;if(!t)return Number.NaN;let{targetLiveWindow:e}=t,r=w.MEDIA_STREAM_TYPE.get(i);return(e==null||Number.isNaN(e))&&r===B.LIVE?0:e},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},MEDIA_TIME_IS_LIVE:{get:function(i){let{media:t}=i;if(!t)return!1;if(typeof t.liveEdgeStart=="number")return Number.isNaN(t.liveEdgeStart)?!1:t.currentTime>=t.liveEdgeStart;if(!(w.MEDIA_STREAM_TYPE.get(i)==="live"))return!1;let r=t.seekable;if(!r)return!0;if(!r.length)return!1;let s=i.hasAttribute("liveedgeoffset")?Number(i.getAttribute("liveedgeoffset")):10,n=r.end(r.length-1)-s;return t.currentTime>=n},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},MEDIA_IS_FULLSCREEN:{get:function(i,t){var s;let e=i.media;if(e&&E[C.element]===void 0&&"webkitDisplayingFullscreen"in e)return e.webkitDisplayingFullscreen&&e.webkitPresentationMode==="fullscreen";let r;return t?r=E[C.element]?t.target:null:r=(s=i.getRootNode().fullscreenElement)!=null?s:E[C.element],Re(i.fullscreenElement,r)},rootEvents:C.rootEvents,mediaEvents:C.mediaEvents},MEDIA_IS_PIP:{get:function(i,t){var r;let e=i.media;if(!e)return!1;if(t)return t.type=="enterpictureinpicture";{let s=(r=i.getRootNode().pictureInPictureElement)!=null?r:E.pictureInPictureElement;return Re(e,s)}},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},MEDIA_IS_CASTING:{get:function(i,t){var n;let{media:e}=i;if(!e)return!1;let r=(n=o.CastableVideoElement)==null?void 0:n.castElement,s=Re(e,r);return(t==null?void 0:t.type)==="castchange"&&(t==null?void 0:t.detail)==="CONNECTING"&&(s="connecting"),s},mediaEvents:["entercast","leavecast","castchange"]},MEDIA_AIRPLAY_UNAVAILABLE:{get:function(i,t){if(!Pi)return Z.UNSUPPORTED;if(!!t&&t.availability!=="available"&&t.availability==="not-available")return Z.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"]},MEDIA_CAST_UNAVAILABLE:{get:function(){var t;let i=(t=o.CastableVideoElement)==null?void 0:t.castState;if(!Ni||!i)return Z.UNSUPPORTED;if(!i.includes("CONNECT"))return Z.UNAVAILABLE},mediaEvents:["castchange"]},MEDIA_FULLSCREEN_UNAVAILABLE:{get:function(){return Xt?void 0:Z.UNAVAILABLE}},MEDIA_PIP_UNAVAILABLE:{get:function(){return wi?void 0:Z.UNSUPPORTED}},MEDIA_VOLUME_UNAVAILABLE:{get:function(i){if(ht!==void 0&&!ht)return Z.UNSUPPORTED;let{media:t}=i;if(t&&typeof t.volume=="undefined")return Z.UNAVAILABLE},mediaEvents:["loadstart"]},MEDIA_SUBTITLES_LIST:{get:function(i){return Jt(i).map(({kind:t,label:e,language:r})=>({kind:t,label:e,language:r}))},mediaEvents:["loadstart"],trackListEvents:["addtrack","removetrack"]},MEDIA_SUBTITLES_SHOWING:{get:function(i){return i.hasAttribute("defaultsubtitles")&&!i.hasAttribute(a.MEDIA_HAS_PLAYED)&&!i.hasAttribute(a.MEDIA_SUBTITLES_SHOWING)&&ue(i,!0),bs(i).map(({kind:t,label:e,language:r})=>({kind:t,label:e,language:r}))},mediaEvents:["loadstart"],trackListEvents:["addtrack","removetrack","change"]}},pt={MEDIA_PLAY_REQUEST:(i,t,e)=>{var n;let r=w.MEDIA_STREAM_TYPE.get(e),s=e.getAttribute("noautoseektolive")===null;r==B.LIVE&&s&&pt.MEDIA_SEEK_TO_LIVE_REQUEST(i),(n=i.play())==null||n.catch(()=>{})},MEDIA_PAUSE_REQUEST:i=>i.pause(),MEDIA_MUTE_REQUEST:i=>i.muted=!0,MEDIA_UNMUTE_REQUEST:i=>{i.muted=!1,i.volume===0&&(i.volume=.25)},MEDIA_VOLUME_REQUEST:(i,t,e)=>{let r=t.detail;if(i.volume=r,r>0&&i.muted&&(i.muted=!1),!e.hasAttribute("novolumepref"))try{o.localStorage.setItem("media-chrome-pref-volume",r.toString())}catch{}},MEDIA_ENTER_FULLSCREEN_REQUEST:(i,t,e)=>{if(!Xt){console.warn("Fullscreen support is unavailable; not entering fullscreen");return}E.pictureInPictureElement&&E.exitPictureInPicture(),e[C.enter]?e.fullscreenElement[C.enter]():i.webkitEnterFullscreen?i.webkitEnterFullscreen():i.requestFullscreen?i.requestFullscreen():console.warn("MediaChrome: Fullscreen not supported")},MEDIA_EXIT_FULLSCREEN_REQUEST:()=>{E[C.exit]()},MEDIA_ENTER_PIP_REQUEST:i=>{if(!E.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}E[C.element]&&E[C.exit]();let t=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(e=>{if(e.code===11)if(i.readyState===0&&i.preload==="none"){let r=()=>{i.removeEventListener("loadedmetadata",s),i.preload="none"},s=()=>{i.requestPictureInPicture().catch(t),r()};i.addEventListener("loadedmetadata",s),i.preload="metadata",setTimeout(()=>{i.readyState===0&&t(),r()},1e3)}else throw e;else throw e})},MEDIA_EXIT_PIP_REQUEST:()=>{E.pictureInPictureElement&&E.exitPictureInPicture()},MEDIA_ENTER_CAST_REQUEST:i=>{var t;!((t=o.CastableVideoElement)!=null&&t.castEnabled)||(E[C.element]&&E[C.exit](),i.requestCast())},MEDIA_EXIT_CAST_REQUEST:async()=>{var i;(i=o.CastableVideoElement)!=null&&i.castElement&&o.CastableVideoElement.exitCast()},MEDIA_SEEK_REQUEST:(i,t)=>{let e=t.detail;(i.readyState>0||i.readyState===void 0)&&(i.currentTime=e)},MEDIA_PLAYBACK_RATE_REQUEST:(i,t)=>{i.playbackRate=t.detail},MEDIA_PREVIEW_REQUEST:(i,t,e)=>{var m;if(!i)return;let r=t.detail;r===null&&e.propagateMediaState(a.MEDIA_PREVIEW_TIME,void 0),e.propagateMediaState(a.MEDIA_PREVIEW_TIME,r);let[s]=mt(i,{kind:ne.METADATA,label:"thumbnails"});if(!(s&&s.cues))return;if(r===null){e.propagateMediaState(a.MEDIA_PREVIEW_IMAGE,void 0),e.propagateMediaState(a.MEDIA_PREVIEW_COORDS,void 0);return}let n=Array.prototype.find.call(s.cues,A=>A.startTime>=r);if(!n)return;let d=/'^(?:[a-z]+:)?\/\//i.test(n.text)||(m=i.querySelector('track[label="thumbnails"]'))==null?void 0:m.src,u=new URL(n.text,d),c=new URLSearchParams(u.hash).get("#xywh");e.propagateMediaState(a.MEDIA_PREVIEW_IMAGE,u.href),e.propagateMediaState(a.MEDIA_PREVIEW_COORDS,c.split(","))},MEDIA_SHOW_SUBTITLES_REQUEST:(i,t,e)=>{let r=Jt(e),{detail:s=[]}=t;Zt(De.SHOWING,r,s)},MEDIA_DISABLE_SUBTITLES_REQUEST:(i,t,e)=>{let r=Jt(e),{detail:s=[]}=t;Zt(De.DISABLED,r,s)},MEDIA_AIRPLAY_REQUEST:i=>{if(!!i){if(!(i.webkitShowPlaybackTargetPicker&&o.WebKitPlaybackTargetAvailabilityEvent)){console.warn("received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},MEDIA_SEEK_TO_LIVE_REQUEST:i=>{let t=i.seekable;if(!t){console.warn("MediaController: Media element does not support seeking to live.");return}if(!t.length){console.warn("MediaController: Media is unable to seek to live.");return}i.currentTime=t.end(t.length-1)}};var Bi=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],As=10,$i=0,P={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_HOTKEYS:"nohotkeys"},X,ge,me,we,Pe,ti,bt=class extends ct{constructor(){super();b(this,me);b(this,Pe);b(this,X,new Ae(this,P.HOTKEYS));b(this,ge,void 0);w.MEDIA_VOLUME_UNAVAILABLE.get(this)===void 0&&Oi.then(()=>{this.propagateMediaState(a.MEDIA_VOLUME_UNAVAILABLE,w.MEDIA_VOLUME_UNAVAILABLE.get(this))}),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,this.associateElement(this),Object.keys(pt).forEach(e=>{let r=`_handle${st(e,!0)}`;this[r]=s=>{if(s.stopPropagation(),!this.media){console.warn("MediaController: No media available.");return}pt[e](this.media,s,this)},this.addEventListener(p[e],this[r])}),this._mediaStatePropagators={},Object.keys(w).forEach(e=>{this._mediaStatePropagators[e]=r=>{this.propagateMediaState(ee[e],w[e].get(this,r))}}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(P.NO_HOTKEYS,P.HOTKEYS,P.DEFAULT_STREAM_TYPE,P.DEFAULT_SUBTITLES)}get fullscreenElement(){var e;return(e=l(this,ge))!=null?e:this}set fullscreenElement(e){this.hasAttribute(P.FULLSCREEN_ELEMENT)&&this.removeAttribute(P.FULLSCREEN_ELEMENT),h(this,ge,e)}attributeChangedCallback(e,r,s){var n;if(e===P.NO_HOTKEYS)s!==r&&s===""?(this.hasAttribute(P.HOTKEYS)&&console.warn("Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):s!==r&&s===null&&this.enableHotkeys();else if(e===P.HOTKEYS)l(this,X).value=s;else if(e===P.DEFAULT_SUBTITLES&&s!==r&&s==="")ue(this,!0);else if(e===P.DEFAULT_STREAM_TYPE)this.propagateMediaState(ee.MEDIA_STREAM_TYPE);else if(e===P.FULLSCREEN_ELEMENT){let d=s?(n=this.getRootNode())==null?void 0:n.getElementById(s):void 0;h(this,ge,d)}super.attributeChangedCallback(e,r,s)}mediaSetCallback(e){if(super.mediaSetCallback(e),e.hasAttribute("tabindex")||(e.tabIndex=-1),Object.keys(w).forEach(r=>{let{mediaEvents:s,rootEvents:n,trackListEvents:d}=w[r],u=this._mediaStatePropagators[r];s==null||s.forEach(c=>{e.addEventListener(c,u),u()}),n==null||n.forEach(c=>{this.getRootNode().addEventListener(c,u),u()}),d==null||d.forEach(c=>{var m;(m=e.textTracks)==null||m.addEventListener(c,u),u()})}),!this.hasAttribute("novolumepref"))try{let r=o.localStorage.getItem("media-chrome-pref-volume");r!==null&&(e.volume=r)}catch(r){console.debug("Error getting volume pref",r)}}mediaUnsetCallback(e){super.mediaUnsetCallback(e),Object.keys(w).forEach(r=>{let{mediaEvents:s,rootEvents:n,trackListEvents:d}=w[r],u=this._mediaStatePropagators[r];s==null||s.forEach(c=>{e.removeEventListener(c,u)}),n==null||n.forEach(c=>{this.getRootNode().removeEventListener(c,u)}),d==null||d.forEach(c=>{var m;(m=e.textTracks)==null||m.removeEventListener(c,u)})}),this.propagateMediaState(ee.MEDIA_PAUSED,!0)}propagateMediaState(e,r){let s=e.toLowerCase(),n=this.getAttribute(s);if(Fi(this.mediaStateReceivers,e,r),n===this.getAttribute(s))return;let d=new o.CustomEvent(Wt[s],{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(d)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:r}=this;if(r.has(e))return;let s=this.registerMediaStateReceiver.bind(this),n=this.unregisterMediaStateReceiver.bind(this),d=Ts(e,s,n);Object.keys(p).forEach(u=>{e.addEventListener(p[u],this[`_handle${st(u,!0)}`])}),r.set(e,d)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:r}=this;if(!r.has(e))return;r.get(e)(),r.delete(e),Object.keys(p).forEach(n=>{e.removeEventListener(p[n],this[`_handle${st(n,!0)}`])})}registerMediaStateReceiver(e){if(!e)return;let r=this.mediaStateReceivers;r.indexOf(e)>-1||(r.push(e),Object.keys(w).forEach(n=>{let d=w[n];Fi([e],ee[n],d.get(this))}))}unregisterMediaStateReceiver(e){let r=this.mediaStateReceivers,s=r.indexOf(e);s<0||r.splice(s,1)}enableHotkeys(){this.addEventListener("keydown",N(this,Pe,ti))}disableHotkeys(){this.removeEventListener("keydown",N(this,Pe,ti)),this.removeEventListener("keyup",N(this,me,we))}get hotkeys(){return l(this,X)}keyboardShortcutHandler(e){var A,f,I,O;if(((O=(I=(A=e.target.getAttribute(P.KEYS_USED))==null?void 0:A.split(" "))!=null?I:(f=e.target)==null?void 0:f.keysUsed)!=null?O:[]).map($=>$==="Space"?" ":$).filter(Boolean).includes(e.key))return;let s,n,d,u,c,m=As;if(!l(this,X).contains(`no${e.key.toLowerCase()}`)&&!(e.key===" "&&l(this,X).contains("nospace")))switch(e.key){case" ":case"k":s=this.getAttribute(a.MEDIA_PAUSED)!=null?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new o.CustomEvent(s,{composed:!0,bubbles:!0}));break;case"m":s=this.getAttribute(a.MEDIA_VOLUME_LEVEL)==="off"?p.MEDIA_UNMUTE_REQUEST:p.MEDIA_MUTE_REQUEST,this.dispatchEvent(new o.CustomEvent(s,{composed:!0,bubbles:!0}));break;case"f":s=this.getAttribute(a.MEDIA_IS_FULLSCREEN)!=null?p.MEDIA_EXIT_FULLSCREEN_REQUEST:p.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new o.CustomEvent(s,{composed:!0,bubbles:!0}));break;case"c":ue(this);break;case"ArrowLeft":n=this.getAttribute(a.MEDIA_CURRENT_TIME),d=n&&!Number.isNaN(+n)?+n:$i,u=Math.max(d-m,0),c=new o.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:u}),this.dispatchEvent(c);break;case"ArrowRight":n=this.getAttribute(a.MEDIA_CURRENT_TIME),d=n&&!Number.isNaN(+n)?+n:$i,u=Math.max(d+m,0),c=new o.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:u}),this.dispatchEvent(c);break;default:break}}};X=new WeakMap,ge=new WeakMap,me=new WeakSet,we=function(e){let{key:r}=e;if(!Bi.includes(r)){this.removeEventListener("keyup",N(this,me,we));return}this.keyboardShortcutHandler(e)},Pe=new WeakSet,ti=function(e){let{metaKey:r,altKey:s,key:n}=e;if(r||s||!Bi.includes(n)){this.removeEventListener("keyup",N(this,me,we));return}[" ","ArrowLeft","ArrowRight"].includes(n)&&!(l(this,X).contains(`no${n.toLowerCase()}`)||n===" "&&l(this,X).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",N(this,me,we),{once:!0})};var gs=Object.values(a),fs=Object.values(ee),Hi=i=>{var r,s,n,d;let{observedAttributes:t}=i.constructor;!t&&((r=i.nodeName)==null?void 0:r.includes("-"))&&(o.customElements.upgrade(i),{observedAttributes:t}=i.constructor);let e=(d=(n=(s=i==null?void 0:i.getAttribute)==null?void 0:s.call(i,g.MEDIA_CHROME_ATTRIBUTES))==null?void 0:n.split)==null?void 0:d.call(n,/\s+/);return Array.isArray(t||e)?(t||e).filter(u=>gs.includes(u)):[]},Is=i=>{var t,e;return((t=i.nodeName)==null?void 0:t.includes("-"))&&!!o.customElements.get((e=i.nodeName)==null?void 0:e.toLowerCase())&&!(i instanceof o.customElements.get(i.nodeName.toLowerCase()))&&o.customElements.upgrade(i),fs.some(r=>r in i)},ii=i=>Is(i)||!!Hi(i).length,Vi=i=>{var t;return(t=i==null?void 0:i.join)==null?void 0:t.call(i,":")},ei={[a.MEDIA_SUBTITLES_LIST]:ke,[a.MEDIA_SUBTITLES_SHOWING]:ke,[a.MEDIA_SEEKABLE]:Vi,[a.MEDIA_BUFFERED]:i=>i==null?void 0:i.map(Vi).join(" "),[a.MEDIA_PREVIEW_COORDS]:i=>i==null?void 0:i.join(" ")},vs=async(i,t,e)=>{var s,n;if(i.isConnected||await at(0),typeof e=="boolean"||e==null)return v(i,t,e);if(typeof e=="number")return L(i,t,e);if(typeof e=="string")return y(i,t,e);if(Array.isArray(e)&&!e.length)return i.removeAttribute(t);let r=(n=(s=ei[t])==null?void 0:s.call(ei,e))!=null?n:e;return i.setAttribute(t,r)},_s=i=>{var t;return!!((t=i.closest)!=null&&t.call(i,'*[slot="media"]'))},ce=(i,t)=>{if(_s(i))return;let e=(s,n)=>{var m,A;ii(s)&&n(s);let{children:d=[]}=s!=null?s:{},u=(A=(m=s==null?void 0:s.shadowRoot)==null?void 0:m.children)!=null?A:[];[...d,...u].forEach(f=>ce(f,n))},r=i==null?void 0:i.nodeName.toLowerCase();if(r.includes("-")&&!ii(i)){o.customElements.whenDefined(r).then(()=>{e(i,t)});return}e(i,t)},Fi=(i,t,e)=>{i.forEach(r=>{if(t in r){r[t]=e;return}let s=Hi(r),n=t.toLowerCase();!s.includes(n)||vs(r,n,e)})},Ts=(i,t,e)=>{ce(i,t);let r=A=>{var I;let f=(I=A==null?void 0:A.composedPath()[0])!=null?I:A.target;t(f)},s=A=>{var I;let f=(I=A==null?void 0:A.composedPath()[0])!=null?I:A.target;e(f)};i.addEventListener(p.REGISTER_MEDIA_STATE_RECEIVER,r),i.addEventListener(p.UNREGISTER_MEDIA_STATE_RECEIVER,s);let n=A=>{A.forEach(f=>{let{addedNodes:I=[],removedNodes:O=[],type:$,target:be,attributeName:ze}=f;$==="childList"?(Array.prototype.forEach.call(I,q=>ce(q,t)),Array.prototype.forEach.call(O,q=>ce(q,e))):$==="attributes"&&ze===g.MEDIA_CHROME_ATTRIBUTES&&(ii(be)?t(be):e(be))})},d=[],u=A=>{let f=A.target;f.name!=="media"&&(d.forEach(I=>ce(I,e)),d=[...f.assignedElements({flatten:!0})],d.forEach(I=>ce(I,t)))};i.addEventListener("slotchange",u);let c=new MutationObserver(n);return c.observe(i,{childList:!0,attributes:!0,subtree:!0}),()=>{ce(i,e),i.removeEventListener("slotchange",u),c.disconnect(),i.removeEventListener(p.REGISTER_MEDIA_STATE_RECEIVER,r),i.removeEventListener(p.UNREGISTER_MEDIA_STATE_RECEIVER,s)}};o.customElements.get("media-controller")||o.customElements.define("media-controller",bt);var Ki=bt;var Wi=E.createElement("template"),Gi=`
  height: var(--thumb-height);
  width: var(--media-range-thumb-width, 10px);
  border: var(--media-range-thumb-border, none);
  border-radius: var(--media-range-thumb-border-radius, 10px);
  background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
  box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
  cursor: pointer;
  transition: var(--media-range-thumb-transition, none);
  transform: var(--media-range-thumb-transform, none);
  opacity: var(--media-range-thumb-opacity, 1);
`,ri=`
  min-width: 40px;
  height: var(--track-height);
  border: var(--media-range-track-border, none);
  outline: var(--media-range-track-outline);
  outline-offset: var(--media-range-track-outline-offset);
  border-radius: var(--media-range-track-border-radius, 1px);
  background: var(--media-range-track-progress-internal, var(--media-range-track-background, rgb(255 255 255 / .2)));
  backdrop-filter: var(--media-range-track-backdrop-filter);
  box-shadow: var(--media-range-track-box-shadow, none);
  transition: var(--media-range-track-transition, none);
  transform: translate(var(--media-range-track-translate-x, 0), var(--media-range-track-translate-y, 0));
  cursor: pointer;
`;Wi.innerHTML=`
  <style>
    :host {
      --thumb-height: var(--media-range-thumb-height, 10px);
      --track-height: var(--media-range-track-height, 4px);
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      vertical-align: middle;
      box-sizing: border-box;
      display: inline-block;
      position: relative;
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      transition: background .15s linear;
      width: 100px;
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      pointer-events: auto;
      
      font-size: 0;
      box-shadow: var(--_focus-visible-box-shadow, none);
    }

    
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #container {
      position: relative;
      height: 100%;
    }

    input[type=range] {
      
      -webkit-appearance: none; 
      background: transparent; 

      
      min-height: 100%;
      width: var(--media-range-track-width, 100%); 

      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      ${Gi}
      
      margin-top: calc(calc(0px - var(--thumb-height) + var(--track-height)) / 2);
    }

    
    input[type=range]::-moz-range-thumb {
      ${Gi}
      translate: var(--media-range-track-translate-x, 0) var(--media-range-track-translate-y, 0);
    }

    input[type=range]::-webkit-slider-runnable-track { ${ri} }
    input[type=range]::-moz-range-track { ${ri} }
    input[type=range]::-ms-track {
      
      width: 100%;
      cursor: pointer;
      
      background: transparent;
      border-color: transparent;
      color: transparent;

      ${ri}
    }

    #background,
    #pointer {
      width: var(--media-range-track-width, 100%);
      height: var(--track-height);
      border-radius: var(--media-range-track-border-radius, 1px);
      position: absolute;
      top: 50%;
      transform: translate(var(--media-range-track-translate-x, 0px), calc(var(--media-range-track-translate-y, 0px) - 50%));
    }

    #background {
      min-width: 40px;
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
      backdrop-filter: var(--media-range-track-background-backdrop-filter);
    }

    #pointer {
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    :host(:hover) #pointer {
      transition: visibility .5s, opacity .5s;
      visibility: visible;
      opacity: 1;
    }

    #hoverzone {
      
      z-index: 1;
      display: var(--media-time-range-hover-display, none);
      position: absolute;
      width: 100%;
      bottom: var(--media-time-range-hover-bottom, -5px);
      height: var(--media-time-range-hover-height, max(calc(100% + 5px), 20px));
    }

    #range {
      z-index: 2;
      position: relative;
      height: var(--media-range-track-height, 4px);
    }

    input[type=range]:disabled::-webkit-slider-thumb {
      background-color: #777;
    }

    input[type=range]:disabled::-webkit-slider-runnable-track {
      background-color: #777;
    }
  </style>
  <div id="container">
    <div id="background"></div>
    <div id="pointer"></div>
    <div id="hoverzone"></div>
    <input id="range" type="range" min="0" max="1000" step="any" value="0">
  </div>
`;var H,Ne,Oe,se=class extends o.HTMLElement{constructor(){super();tt(this,"thumbWidth");b(this,H,void 0);b(this,Ne,()=>{if(this.range.matches(":focus-visible")){let{style:e}=D(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}});b(this,Oe,()=>{let{style:e}=D(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")});this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Wi.content.cloneNode(!0)));let{style:e}=D(this.shadowRoot,":host");e.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-block))`),this.container=this.shadowRoot.querySelector("#container"),this.range=this.shadowRoot.querySelector("#range"),this.range.addEventListener("input",this.updateBar.bind(this)),this.thumbWidth=parseInt(getComputedStyle(this).getPropertyValue("--media-range-thumb-width")||"10",10)}static get observedAttributes(){return["disabled","aria-disabled",g.MEDIA_CONTROLLER]}attributeChangedCallback(e,r,s){var n,d,u,c,m;e===g.MEDIA_CONTROLLER?(r&&((d=(n=l(this,H))==null?void 0:n.unassociateElement)==null||d.call(n,this),h(this,H,null)),s&&(h(this,H,(u=this.getRootNode())==null?void 0:u.getElementById(s)),(m=(c=l(this,H))==null?void 0:c.associateElement)==null||m.call(c,this))):(e==="disabled"||e==="aria-disabled"&&r!==s)&&(s==null?this.range.removeAttribute(e):this.range.setAttribute(e,s))}connectedCallback(){var r,s,n;let e=this.getAttribute(g.MEDIA_CONTROLLER);e&&(h(this,H,(r=this.getRootNode())==null?void 0:r.getElementById(e)),(n=(s=l(this,H))==null?void 0:s.associateElement)==null||n.call(s,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",l(this,Ne)),this.shadowRoot.addEventListener("focusout",l(this,Oe))}disconnectedCallback(){var e,r;(r=(e=l(this,H))==null?void 0:e.unassociateElement)==null||r.call(e,this),h(this,H,null),this.shadowRoot.removeEventListener("focusin",l(this,Ne)),this.shadowRoot.removeEventListener("focusout",l(this,Oe))}updatePointerBar(e){let r=this.range.getBoundingClientRect(),s=(e.clientX-r.left)/r.width;s=Math.max(0,Math.min(1,s));let{style:n}=D(this.shadowRoot,"#pointer");n.setProperty("width",`${s*r.width}px`)}updateBar(){let e=this.getBarColors(),r="linear-gradient(to right, ",s=0;e.forEach(d=>{d[1]<s||(r=r+`${d[0]} ${s}%, ${d[0]} ${d[1]}%,`,s=d[1])}),r=r.slice(0,r.length-1)+")";let{style:n}=D(this.shadowRoot,"#range");n.setProperty("--media-range-track-progress-internal",r)}getRelativeValues(){let{range:e}=this;return{relativeValue:e.value-e.min,relativeMax:e.max-e.min}}getBarColors(){let e=this.range,{relativeValue:r,relativeMax:s}=this.getRelativeValues(),n=r/s*100,d=0;return!!r&&r<s&&(d=this.thumbWidth*(.5-n/100)/e.offsetWidth*100),[["var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)))",n+d],["var(--media-range-track-color, transparent)",100]]}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}};H=new WeakMap,Ne=new WeakMap,Oe=new WeakMap;o.customElements.get("media-chrome-range")||o.customElements.define("media-chrome-range",se);var Qi=se;var Yi=E.createElement("template");Yi.innerHTML=`
  <style>
    :host {
      
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --media-loading-indicator-icon-height: 44px;
    }

    media-time-range,
    ::slotted(media-time-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }

    media-time-range,
    ::slotted(media-time-range),
    ::slotted(media-clip-selector),
    media-volume-range,
    ::slotted(media-volume-range) {
      height: var(--_range-auto-size, calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding)));
    }
  </style>

  <slot></slot>
`;var K,At=class extends o.HTMLElement{constructor(){super();b(this,K,void 0);this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Yi.content.cloneNode(!0))),this.shadowRoot.querySelector("slot").addEventListener("slotchange",({target:e})=>{let r=e.assignedElements({flatten:!0}).every(d=>["media-time-range","media-volume-range"].includes(d.nodeName.toLowerCase())),{style:s}=D(this.shadowRoot,":host"),n=r?"unset":"initial";s.setProperty("--_range-auto-size",n)})}static get observedAttributes(){return[g.MEDIA_CONTROLLER]}attributeChangedCallback(e,r,s){var n,d,u,c,m;e===g.MEDIA_CONTROLLER&&(r&&((d=(n=l(this,K))==null?void 0:n.unassociateElement)==null||d.call(n,this),h(this,K,null)),s&&(h(this,K,(u=this.getRootNode())==null?void 0:u.getElementById(s)),(m=(c=l(this,K))==null?void 0:c.associateElement)==null||m.call(c,this)))}connectedCallback(){var r,s,n;let e=this.getAttribute(g.MEDIA_CONTROLLER);e&&(h(this,K,(r=this.getRootNode())==null?void 0:r.getElementById(e)),(n=(s=l(this,K))==null?void 0:s.associateElement)==null||n.call(s,this))}disconnectedCallback(){var e,r;(r=(e=l(this,K))==null?void 0:e.unassociateElement)==null||r.call(e,this),h(this,K,null)}};K=new WeakMap;o.customElements.get("media-control-bar")||o.customElements.define("media-control-bar",At);var qi=At;var Zi=E.createElement("template");Zi.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;var G,J=class extends o.HTMLElement{constructor(){super();b(this,G,void 0);this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Zi.content.cloneNode(!0)));let{style:e}=D(this.shadowRoot,":host");e.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`)}static get observedAttributes(){return[g.MEDIA_CONTROLLER]}attributeChangedCallback(e,r,s){var n,d,u,c,m;e===g.MEDIA_CONTROLLER&&(r&&((d=(n=l(this,G))==null?void 0:n.unassociateElement)==null||d.call(n,this),h(this,G,null)),s&&(h(this,G,(u=this.getRootNode())==null?void 0:u.getElementById(s)),(m=(c=l(this,G))==null?void 0:c.associateElement)==null||m.call(c,this)))}connectedCallback(){var r,s,n;let e=this.getAttribute(g.MEDIA_CONTROLLER);e&&(h(this,G,(r=this.getRootNode())==null?void 0:r.getElementById(e)),(n=(s=l(this,G))==null?void 0:s.associateElement)==null||n.call(s,this))}disconnectedCallback(){var e,r;(r=(e=l(this,G))==null?void 0:e.unassociateElement)==null||r.call(e,this),h(this,G,null)}};G=new WeakMap;o.customElements.get("media-text-display")||o.customElements.define("media-text-display",J);var fe,gt=class extends J{constructor(){super();b(this,fe,void 0);h(this,fe,this.shadowRoot.querySelector("slot")),l(this,fe).textContent=V(0)}static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_DURATION]}attributeChangedCallback(e,r,s){e===a.MEDIA_DURATION&&(l(this,fe).textContent=V(s)),super.attributeChangedCallback(e,r,s)}get mediaDuration(){return R(this,a.MEDIA_DURATION)}set mediaDuration(e){L(this,a.MEDIA_DURATION,e)}};fe=new WeakMap;o.customElements.get("media-duration-display")||o.customElements.define("media-duration-display",gt);var ji=gt;var W={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},zi=[...Object.values(W),a.MEDIA_CURRENT_TIME,a.MEDIA_DURATION,a.MEDIA_SEEKABLE],Xi=["Enter"," "],Ms="&nbsp;/&nbsp;",Ji=(i,{timesSep:t=Ms}={})=>{var c,m,A,f;let e=i.hasAttribute(W.REMAINING),r=i.hasAttribute(W.SHOW_DURATION),s=(c=i.mediaCurrentTime)!=null?c:0,[,n]=(m=i.mediaSeekable)!=null?m:[],d=(f=(A=i.mediaDuration)!=null?A:n)!=null?f:0,u=e?V(0-(d-s)):V(s);return r?`${u}${t}${V(d)}`:u},Ss="video not loaded, unknown time.",Ls=i=>{var m;let t=i.mediaCurrentTime,[,e]=(m=i.mediaSeekable)!=null?m:[],r=i.mediaDuration||e;if(t==null||r==null){i.setAttribute("aria-valuetext",Ss);return}let s=i.hasAttribute(W.REMAINING),n=i.hasAttribute(W.SHOW_DURATION),d=s?te(0-(r-t)):te(t);if(!n){i.setAttribute("aria-valuetext",d);return}let u=te(r),c=`${d} of ${u}`;i.setAttribute("aria-valuetext",c)},Ee,ft=class extends J{constructor(){super();b(this,Ee,void 0);h(this,Ee,this.shadowRoot.querySelector("slot")),l(this,Ee).innerHTML=`${Ji(this)}`;let{style:e}=D(this.shadowRoot,":host:not([notoggle])");e.setProperty("cursor","pointer");let{style:r}=D(this.shadowRoot,":host(:hover:not([notoggle]))");r.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))")}static get observedAttributes(){return[...super.observedAttributes,...zi,"disabled"]}connectedCallback(){this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",x.PLAYBACK_TIME());let e=r=>{let{key:s}=r;if(!Xi.includes(s)){this.removeEventListener("keyup",e);return}this.toggleTimeDisplay()};this.addEventListener("keydown",r=>{let{metaKey:s,altKey:n,key:d}=r;if(s||n||!Xi.includes(d)){this.removeEventListener("keyup",e);return}this.addEventListener("keyup",e)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,r,s){zi.includes(e)?this.update():e==="disabled"&&s!==r&&(s==null?this.enable():this.disable()),super.attributeChangedCallback(e,r,s)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return T(this,W.REMAINING)}set remaining(e){v(this,W.REMAINING,e)}get showDuration(){return T(this,W.SHOW_DURATION)}set showDuration(e){v(this,W.SHOW_DURATION,e)}get noToggle(){return T(this,W.NO_TOGGLE)}set noToggle(e){v(this,W.NO_TOGGLE,e)}get mediaDuration(){return R(this,a.MEDIA_DURATION)}set mediaDuration(e){L(this,a.MEDIA_DURATION,e)}get mediaCurrentTime(){return R(this,a.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){L(this,a.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(a.MEDIA_SEEKABLE);if(!!e)return e.split(":").map(r=>+r)}set mediaSeekable(e){if(e==null){this.removeAttribute(a.MEDIA_SEEKABLE);return}this.setAttribute(a.MEDIA_SEEKABLE,e.join(":"))}update(){let e=Ji(this);Ls(this),e!==l(this,Ee).innerHTML&&(l(this,Ee).innerHTML=e)}};Ee=new WeakMap;o.customElements.get("media-time-display")||o.customElements.define("media-time-display",ft);var er=ft;var Ds=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,Rs=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,sr=E.createElement("template");sr.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }
  </style>

  <slot name="icon">
    <slot name="on">${Ds}</slot>
    <slot name="off">${Rs}</slot>
  </slot>
`;var tr=i=>{i.setAttribute("aria-checked",jt(i))},ir=(i,t)=>{let e=i.getAttribute(t);return e?qt(e):[]},rr=(i,t,e)=>{if(!(e!=null&&e.length)){i.removeAttribute(t);return}let r=ke(e);i.getAttribute(t)!==r&&i.setAttribute(t,r)},It=class extends M{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_SUBTITLES_LIST,a.MEDIA_SUBTITLES_SHOWING]}constructor(t={}){super({slotTemplate:sr,...t}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",x.CLOSED_CAPTIONS()),tr(this)}attributeChangedCallback(t,e,r){t===a.MEDIA_SUBTITLES_SHOWING&&tr(this),super.attributeChangedCallback(t,e,r)}get mediaSubtitlesList(){return ir(this,a.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(t){rr(this,a.MEDIA_SUBTITLES_LIST,t)}get mediaSubtitlesShowing(){return ir(this,a.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(t){rr(this,a.MEDIA_SUBTITLES_SHOWING,t)}handleClick(){ue(this)}};o.customElements.get("media-captions-button")||o.customElements.define("media-captions-button",It);var ar=It;function Ie(i){let t=Math.abs(i.seekOffset),e=S.SEEK_BACK_N_SECS({seekOffset:t});i.setAttribute("aria-label",e)}function ve(i){let t=bi(i,"icon"),e=i.seekOffset;pi(t,e)}var vt={SEEK_OFFSET:"seekoffset"},nr=30,Cs=`<svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">${nr}</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg>`,or=E.createElement("template");or.innerHTML=`
  <slot name="icon">${Cs}</slot>
`;var ys=0,_t=class extends M{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_CURRENT_TIME,vt.SEEK_OFFSET]}constructor(t={}){super({slotTemplate:or,...t})}connectedCallback(){Ie(this),ve(this),super.connectedCallback()}attributeChangedCallback(t,e,r){t===vt.SEEK_OFFSET&&(ve(this),Ie(this)),super.attributeChangedCallback(t,e,r)}get seekOffset(){return R(this,vt.SEEK_OFFSET,nr)}set seekOffset(t){L(this,vt.SEEK_OFFSET,t)}get mediaCurrentTime(){return R(this,a.MEDIA_CURRENT_TIME,ys)}set mediaCurrentTime(t){L(this,a.MEDIA_CURRENT_TIME,t)}handleClick(){let t=this.mediaCurrentTime+this.seekOffset,e=new o.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(e)}};o.customElements.get("media-seek-forward-button")||o.customElements.define("media-seek-forward-button",_t);var lr=_t;var Us=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,xs=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,ur=E.createElement("template");ur.innerHTML=`
  <style>
  :host([${a.MEDIA_IS_FULLSCREEN}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${a.MEDIA_IS_FULLSCREEN}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${Us}</slot>
    <slot name="exit">${xs}</slot>
  </slot>
`;var dr=i=>{let t=i.mediaIsFullscreen?S.EXIT_FULLSCREEN():S.ENTER_FULLSCREEN();i.setAttribute("aria-label",t)},Tt=class extends M{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_IS_FULLSCREEN,a.MEDIA_FULLSCREEN_UNAVAILABLE]}constructor(t={}){super({slotTemplate:ur,...t})}connectedCallback(){dr(this),super.connectedCallback()}attributeChangedCallback(t,e,r){t===a.MEDIA_IS_FULLSCREEN&&dr(this),super.attributeChangedCallback(t,e,r)}get mediaFullscreenUnavailable(){return U(this,a.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(t){y(this,a.MEDIA_FULLSCREEN_UNAVAILABLE,t)}get mediaIsFullscreen(){return T(this,a.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(t){v(this,a.MEDIA_IS_FULLSCREEN,t)}handleClick(){let t=this.mediaIsFullscreen?p.MEDIA_EXIT_FULLSCREEN_REQUEST:p.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new o.CustomEvent(t,{composed:!0,bubbles:!0}))}};o.customElements.get("media-fullscreen-button")||o.customElements.define("media-fullscreen-button",Tt);var cr=Tt;var{MEDIA_TIME_IS_LIVE:Mt,MEDIA_PAUSED:Be}=a,{MEDIA_SEEK_TO_LIVE_REQUEST:ks,MEDIA_PLAY_REQUEST:ws}=p,Ps='<svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg>',mr=E.createElement("template");mr.innerHTML=`
  <style>

  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${Mt}]:not([${Be}])) slot[name=indicator] > *,
  :host([${Mt}]:not([${Be}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
  }

  :host([${Mt}]:not([${Be}])) {
    cursor: not-allowed;
  }

  </style>

  <slot name="indicator">${Ps}</slot>
  
  <slot name="spacer">&nbsp;</slot><slot name="text">LIVE</slot>
`;var St=class extends M{static get observedAttributes(){return[...super.observedAttributes,Be,Mt]}constructor(t={}){super({slotTemplate:mr,...t}),this.setAttribute("aria-label",S.SEEK_LIVE())}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),this.mediaPaused||!this.mediaTimeIsLive?(this.setAttribute("aria-label",S.SEEK_LIVE()),this.removeAttribute("aria-disabled")):(this.setAttribute("aria-label",S.PLAYING_LIVE()),this.setAttribute("aria-disabled","true"))}get mediaPaused(){return T(this,a.MEDIA_PAUSED)}set mediaPaused(t){v(this,a.MEDIA_PAUSED,t)}get mediaTimeIsLive(){return T(this,a.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(t){v(this,a.MEDIA_TIME_IS_LIVE,t)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new o.CustomEvent(ks,{composed:!0,bubbles:!0})),this.hasAttribute(Be)&&this.dispatchEvent(new o.CustomEvent(ws,{composed:!0,bubbles:!0})))}};o.customElements.get("media-live-button")||o.customElements.define("media-live-button",St);var Er=St;var{MEDIA_VOLUME_LEVEL:$e}=a,Ns=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,hr=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,Os=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,br=E.createElement("template");br.innerHTML=`
  <style>
  
  :host(:not([${$e}])) slot:not([name=high]):not([name=icon]), 
  :host([${$e}=high]) slot:not([name=high]):not([name=icon]) {
    display: none !important;
  }

  :host([${$e}=off]) slot:not([name=off]):not([name=icon]) {
    display: none !important;
  }

  :host([${$e}=low]) slot:not([name=low]):not([name=icon]) {
    display: none !important;
  }

  :host([${$e}=medium]) slot:not([name=medium]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="off">${Ns}</slot>
    <slot name="low">${hr}</slot>
    <slot name="medium">${hr}</slot>
    <slot name="high">${Os}</slot>
  </slot>
`;var pr=i=>{let e=i.mediaVolumeLevel==="off"?S.UNMUTE():S.MUTE();i.setAttribute("aria-label",e)},Lt=class extends M{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_VOLUME_LEVEL]}constructor(t={}){super({slotTemplate:br,...t})}connectedCallback(){pr(this),super.connectedCallback()}attributeChangedCallback(t,e,r){t===a.MEDIA_VOLUME_LEVEL&&pr(this),super.attributeChangedCallback(t,e,r)}get mediaVolumeLevel(){return U(this,a.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(t){y(this,a.MEDIA_VOLUME_LEVEL,t)}handleClick(){let t=this.mediaVolumeLevel==="off"?p.MEDIA_UNMUTE_REQUEST:p.MEDIA_MUTE_REQUEST;this.dispatchEvent(new o.CustomEvent(t,{composed:!0,bubbles:!0}))}};o.customElements.get("media-mute-button")||o.customElements.define("media-mute-button",Lt);var Ar=Lt;var gr=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,Ir=E.createElement("template");Ir.innerHTML=`
  <style>
  :host([${a.MEDIA_IS_PIP}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${a.MEDIA_IS_PIP}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${gr}</slot>
    <slot name="exit">${gr}</slot>
  </slot>
`;var fr=i=>{let t=i.mediaIsPip?S.EXIT_PIP():S.ENTER_PIP();i.setAttribute("aria-label",t)},Dt=class extends M{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_IS_PIP,a.MEDIA_PIP_UNAVAILABLE]}constructor(t={}){super({slotTemplate:Ir,...t})}connectedCallback(){fr(this),super.connectedCallback()}attributeChangedCallback(t,e,r){t===a.MEDIA_IS_PIP&&fr(this),super.attributeChangedCallback(t,e,r)}get mediaPipUnavailable(){return U(this,a.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(t){y(this,a.MEDIA_PIP_UNAVAILABLE,t)}get mediaIsPip(){return T(this,a.MEDIA_IS_PIP)}set mediaIsPip(t){v(this,a.MEDIA_IS_PIP,t)}handleClick(){let t=this.mediaIsPip?p.MEDIA_EXIT_PIP_REQUEST:p.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new o.CustomEvent(t,{composed:!0,bubbles:!0}))}};o.customElements.get("media-pip-button")||o.customElements.define("media-pip-button",Dt);var vr=Dt;var Bs=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,$s=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,Tr=E.createElement("template");Tr.innerHTML=`
  <style>
  :host([${a.MEDIA_PAUSED}]) slot[name=pause] {
    display: none !important;
  }

  :host(:not([${a.MEDIA_PAUSED}])) slot[name=play] {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="play">${Bs}</slot>
    <slot name="pause">${$s}</slot>
  </slot>
`;var _r=i=>{let t=i.mediaPaused?S.PLAY():S.PAUSE();i.setAttribute("aria-label",t)},Rt=class extends M{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_PAUSED,a.MEDIA_ENDED]}constructor(t={}){super({slotTemplate:Tr,...t})}connectedCallback(){_r(this),super.connectedCallback()}attributeChangedCallback(t,e,r){t===a.MEDIA_PAUSED&&_r(this),super.attributeChangedCallback(t,e,r)}get mediaPaused(){return T(this,a.MEDIA_PAUSED)}set mediaPaused(t){v(this,a.MEDIA_PAUSED,t)}handleClick(){let t=this.mediaPaused?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new o.CustomEvent(t,{composed:!0,bubbles:!0}))}};o.customElements.get("media-play-button")||o.customElements.define("media-play-button",Rt);var Mr=Rt;var si={RATES:"rates"},Vs=[1,1.25,1.5,1.75,2],Ct=1,Sr=E.createElement("template");Sr.innerHTML=`
  <span id="container"></span>
`;var he,yt=class extends M{constructor(e={}){super({slotTemplate:Sr,...e});b(this,he,new Ae(this,si.RATES,{defaultValue:Vs}));this.container=this.shadowRoot.querySelector("#container"),this.container.innerHTML=`${Ct}x`}static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_PLAYBACK_RATE,si.RATES]}attributeChangedCallback(e,r,s){if(e===si.RATES&&(l(this,he).value=s),e===a.MEDIA_PLAYBACK_RATE){let n=s?+s:Number.NaN,d=Number.isNaN(n)?Ct:n;this.container.innerHTML=`${d}x`,this.setAttribute("aria-label",x.PLAYBACK_RATE({playbackRate:d}));return}super.attributeChangedCallback(e,r,s)}get rates(){return l(this,he)}set rates(e){e?Array.isArray(e)&&(l(this,he).value=e.join(" ")):l(this,he).value=""}get mediaPlaybackRate(){return R(this,a.MEDIA_PLAYBACK_RATE,Ct)}set mediaPlaybackRate(e){L(this,a.MEDIA_PLAYBACK_RATE,e)}handleClick(){var n,d;let e=Array.from(this.rates.values(),u=>+u).sort(),r=(d=(n=e.find(u=>u>this.mediaPlaybackRate))!=null?n:e[0])!=null?d:Ct,s=new o.CustomEvent(p.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(s)}};he=new WeakMap;o.customElements.get("media-playback-rate-button")||o.customElements.define("media-playback-rate-button",yt);var Lr=yt;var z={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"},Dr=E.createElement("template");Dr.innerHTML=`
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
      background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img aria-hidden="true" id="image"/>
`;var Fs=i=>{i.style.removeProperty("background-image")},Hs=(i,t)=>{i.style["background-image"]=`url('${t}')`},Ut=class extends o.HTMLElement{static get observedAttributes(){return[z.PLACEHOLDER_SRC,z.SRC]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Dr.content.cloneNode(!0))),this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(t,e,r){t===z.SRC&&(r==null?this.image.removeAttribute(z.SRC):this.image.setAttribute(z.SRC,r)),t===z.PLACEHOLDER_SRC&&(r==null?Fs(this.image):Hs(this.image,r))}get placeholderSrc(){return U(this,z.PLACEHOLDER_SRC)}set placeholderSrc(t){y(this,z.SRC,t)}get src(){return U(this,z.SRC)}set src(t){y(this,z.SRC,t)}};o.customElements.get("media-poster-image")||o.customElements.define("media-poster-image",Ut);var Rr=Ut;var xt={SEEK_OFFSET:"seekoffset"},Cr=30,Ks=`<svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">${Cr}</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg>`,yr=E.createElement("template");yr.innerHTML=`
  <slot name="icon">${Ks}</slot>
`;var Gs=0,kt=class extends M{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_CURRENT_TIME,xt.SEEK_OFFSET]}constructor(t={}){super({slotTemplate:yr,...t})}connectedCallback(){Ie(this),ve(this),super.connectedCallback()}attributeChangedCallback(t,e,r){t===xt.SEEK_OFFSET&&(ve(this),Ie(this)),super.attributeChangedCallback(t,e,r)}get seekOffset(){return R(this,xt.SEEK_OFFSET,Cr)}set seekOffset(t){L(this,xt.SEEK_OFFSET,t)}get mediaCurrentTime(){return R(this,a.MEDIA_CURRENT_TIME,Gs)}set mediaCurrentTime(t){L(this,a.MEDIA_CURRENT_TIME,t)}handleClick(){let t=Math.max(this.mediaCurrentTime-this.seekOffset,0),e=new o.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(e)}};o.customElements.get("media-seek-backward-button")||o.customElements.define("media-seek-backward-button",kt);var Ur=kt;var _e,wt=class extends J{constructor(){super();b(this,_e,void 0);h(this,_e,this.shadowRoot.querySelector("slot")),l(this,_e).textContent=V(0)}static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,r,s){e===a.MEDIA_PREVIEW_TIME&&s!=null&&(l(this,_e).textContent=V(s)),super.attributeChangedCallback(e,r,s)}get mediaPreviewTime(){return R(this,a.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){L(this,a.MEDIA_PREVIEW_TIME,e)}};_e=new WeakMap;o.customElements.get("media-preview-time-display")||o.customElements.define("media-preview-time-display",wt);var xr=wt;var kr=E.createElement("template");kr.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async">
`;var Q,Pt=class extends o.HTMLElement{constructor(){super();b(this,Q,void 0);this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(kr.content.cloneNode(!0)))}static get observedAttributes(){return[g.MEDIA_CONTROLLER,a.MEDIA_PREVIEW_IMAGE,a.MEDIA_PREVIEW_COORDS]}connectedCallback(){var r,s,n;let e=this.getAttribute(g.MEDIA_CONTROLLER);e&&(h(this,Q,(r=this.getRootNode())==null?void 0:r.getElementById(e)),(n=(s=l(this,Q))==null?void 0:s.associateElement)==null||n.call(s,this))}disconnectedCallback(){var e,r;(r=(e=l(this,Q))==null?void 0:e.unassociateElement)==null||r.call(e,this),h(this,Q,null)}attributeChangedCallback(e,r,s){var n,d,u,c,m;[a.MEDIA_PREVIEW_IMAGE,a.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===g.MEDIA_CONTROLLER&&(r&&((d=(n=l(this,Q))==null?void 0:n.unassociateElement)==null||d.call(n,this),h(this,Q,null)),s&&(h(this,Q,(u=this.getRootNode())==null?void 0:u.getElementById(s)),(m=(c=l(this,Q))==null?void 0:c.associateElement)==null||m.call(c,this)))}get mediaPreviewImage(){return U(this,a.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){y(this,a.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(a.MEDIA_PREVIEW_COORDS);if(!!e)return e.split(/\s+/).map(r=>+r)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(a.MEDIA_PREVIEW_COORDS);return}this.setAttribute(a.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e=this.mediaPreviewCoords,r=this.mediaPreviewImage;if(!(e&&r))return;let[s,n,d,u]=e,c=r.split("#")[0],m=getComputedStyle(this),{maxWidth:A,maxHeight:f,minWidth:I,minHeight:O}=m,$=Math.min(parseInt(A)/d,parseInt(f)/u),be=Math.max(parseInt(I)/d,parseInt(O)/u),ze=$<1,q=ze?$:be>1?be:1,{style:Xe}=D(this.shadowRoot,":host"),Je=D(this.shadowRoot,"img").style,Le=this.shadowRoot.querySelector("img"),di=ze?"min":"max";Xe.setProperty(`${di}-width`,"initial","important"),Xe.setProperty(`${di}-height`,"initial","important"),Xe.width=`${d*q}px`,Xe.height=`${u*q}px`;let Ht=()=>{Je.width=`${this.imgWidth*q}px`,Je.height=`${this.imgHeight*q}px`,Je.display="block"};Le.src!==c&&(Le.onload=()=>{this.imgWidth=Le.naturalWidth,this.imgHeight=Le.naturalHeight,Ht()},Le.src=c,Ht()),Ht(),Je.transform=`translate(-${s*q}px, -${n*q}px)`}};Q=new WeakMap;o.customElements.get("media-preview-thumbnail")||o.customElements.define("media-preview-thumbnail",Pt);var wr=Pt;var Ws="video not loaded, unknown time.",ai=i=>{let t=i.range,e=te(+t.value),r=te(+t.max),s=e&&r?`${e} of ${r}`:Ws;t.setAttribute("aria-valuetext",s)},Pr=E.createElement("template");Pr.innerHTML=`
  <style>
    :host {
      --media-preview-border-radius: 3px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
    }

    #preview-rail,
    #current-rail {
      
      width: 1%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
    }

    [part~="box"] {
      
      position: absolute;
      bottom: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="preview-box"] {
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host([${a.MEDIA_PREVIEW_IMAGE}]:hover) [part~="preview-box"],
    :host([${a.MEDIA_PREVIEW_TIME}]:hover) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-thumbnail-background, var(--media-preview-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)))));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${a.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
    :host([${a.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display) {
      min-width: 0;
      
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--media-preview-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)))));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 1px 10px 0);
      margin: var(--media-preview-time-margin, 0 0 10px);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${a.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${a.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      min-width: 100%;
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
    }

    :host([${a.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-time-display></media-preview-time-display>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`;var Te,Ve,Me,Fe,He,Ke,ni,Ot,Nr,Ge,oi,We,pe,Se,Bt,Qe,Ye,qe,li,$t,Or,Nt=class extends se{constructor(){super();b(this,Ke);b(this,Ot);b(this,Ge);b(this,qe);b(this,$t);b(this,Te,void 0);b(this,Ve,void 0);b(this,Me,void 0);b(this,Fe,void 0);b(this,He,void 0);b(this,We,e=>{if([...l(this,Te)].some(A=>e.composedPath().includes(A)))return;this.updatePointerBar(e);let r=this.mediaDuration;if(!r)return;let s=this.range.getBoundingClientRect(),n=(e.clientX-s.left-this.thumbWidth/2)/(s.width-this.thumbWidth);n=Math.max(0,Math.min(1,n));let d=N(this,Ge,oi).call(this,l(this,Ve),n),{style:u}=D(this.shadowRoot,"#preview-rail");u.transform=`translateX(${d})`;let c=n*r,m=new o.CustomEvent(p.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:c});this.dispatchEvent(m)});b(this,pe,!1);b(this,Se,e=>{var r;(!e.composedPath().includes(this)||[...l(this,Te)].some(s=>e.composedPath().includes(s)))&&((r=o.window)==null||r.removeEventListener("pointermove",l(this,Se)),h(this,pe,!1),l(this,Qe).call(this))});b(this,Bt,()=>{var e;(e=o.window)==null||e.addEventListener("pointermove",l(this,We),!1)});b(this,Qe,()=>{var r;(r=o.window)==null||r.removeEventListener("pointermove",l(this,We));let e=new o.CustomEvent(p.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:null});this.dispatchEvent(e)});b(this,Ye,()=>{var r;let e=this.getAttribute(a.MEDIA_DURATION);!l(this,pe)&&e&&(h(this,pe,!0),l(this,Bt).call(this),(r=o.window)==null||r.addEventListener("pointermove",l(this,Se),!1))});this.container.appendChild(Pr.content.cloneNode(!0)),this.range.addEventListener("input",()=>{cancelAnimationFrame(this._refreshId);let s=this.range.value,n=new o.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:s});this.dispatchEvent(n)}),this._refreshBar=()=>{let r=(performance.now()-this._updateTimestamp)/1e3;this.range.value=this.mediaCurrentTime+r*this.mediaPlaybackRate,this.updateBar(),this.updateCurrentBox(),this._refreshId=requestAnimationFrame(this._refreshBar)},h(this,Te,this.shadowRoot.querySelectorAll('[part~="box"]')),h(this,Ve,this.shadowRoot.querySelector('[part~="preview-box"]')),h(this,Me,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);h(this,Fe,parseInt(e.getPropertyValue("--media-box-padding-left"))),h(this,He,parseInt(e.getPropertyValue("--media-box-padding-right"))),N(this,qe,li).call(this)}static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_PAUSED,a.MEDIA_DURATION,a.MEDIA_SEEKABLE,a.MEDIA_CURRENT_TIME,a.MEDIA_PREVIEW_IMAGE,a.MEDIA_PREVIEW_TIME,a.MEDIA_BUFFERED,a.MEDIA_PLAYBACK_RATE,a.MEDIA_LOADING,a.MEDIA_ENDED]}connectedCallback(){this.range.setAttribute("aria-label",x.SEEK()),super.connectedCallback()}disconnectedCallback(){cancelAnimationFrame(this._refreshId),super.disconnectedCallback()}attributeChangedCallback(e,r,s){var n,d,u,c,m;(e===a.MEDIA_CURRENT_TIME||e===a.MEDIA_PAUSED||e===a.MEDIA_ENDED||e===a.MEDIA_LOADING)&&(this._updateTimestamp=performance.now(),this.range.value=this.mediaCurrentTime,ai(this),this.updateBar(),this.updateCurrentBox(),cancelAnimationFrame(this._refreshId),!this.mediaPaused&&!this.mediaLoading&&(this._refreshId=requestAnimationFrame(this._refreshBar))),e===a.MEDIA_DURATION&&(this.range.max=(d=(n=l(this,Ke,ni))!=null?n:this.mediaDuration)!=null?d:1e3,ai(this),this.updateBar(),this.updateCurrentBox()),e===a.MEDIA_SEEKABLE&&(this.range.min=(u=l(this,Ot,Nr))!=null?u:0,this.range.max=(m=(c=l(this,Ke,ni))!=null?c:this.mediaDuration)!=null?m:1e3,ai(this),this.updateBar()),e===a.MEDIA_BUFFERED&&this.updateBar(),e==="disabled"&&(s==null?N(this,qe,li).call(this):N(this,$t,Or).call(this)),super.attributeChangedCallback(e,r,s)}get mediaPaused(){return T(this,a.MEDIA_PAUSED)}set mediaPaused(e){v(this,a.MEDIA_PAUSED,e)}get mediaLoading(){return T(this,a.MEDIA_LOADING)}set mediaLoading(e){v(this,a.MEDIA_LOADING,e)}get mediaDuration(){return R(this,a.MEDIA_DURATION)}set mediaDuration(e){L(this,a.MEDIA_DURATION,e)}get mediaCurrentTime(){return R(this,a.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){L(this,a.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return R(this,a.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){L(this,a.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(a.MEDIA_BUFFERED);return e?e.split(" ").map(r=>r.split(":").map(s=>+s)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(a.MEDIA_BUFFERED);return}let r=e.map((s,n)=>`${s}:${n}`).join(" ");this.setAttribute(a.MEDIA_BUFFERED,r)}get mediaSeekable(){let e=this.getAttribute(a.MEDIA_SEEKABLE);if(!!e)return e.split(":").map(r=>+r)}set mediaSeekable(e){if(e==null){this.removeAttribute(a.MEDIA_SEEKABLE);return}this.setAttribute(a.MEDIA_SEEKABLE,e.join(":"))}get mediaPreviewImage(){return U(this,a.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){y(this,a.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return R(this,a.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){L(this,a.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return T(this,a.MEDIA_ENDED)}set mediaEnded(e){v(this,a.MEDIA_ENDED,e)}getRelativeValues(){let e=super.getRelativeValues();return this.mediaEnded?{...e,relativeValue:e.relativeMax}:e}getBarColors(){var c;let e=super.getBarColors(),{range:r}=this,s=r.max-r.min,n=this.mediaBuffered;if(!n.length||!Number.isFinite(s)||s<=0)return e;let d;if(this.mediaEnded)d=s;else{let m=this.mediaCurrentTime,[,A=r.min]=(c=n.find(([f,I])=>f<=m&&m<=I))!=null?c:[];d=A-r.min}let u=d/s*100;return e.splice(1,0,["var(--media-time-range-buffered-color, rgb(255 255 255 / .4))",u]),e}updateCurrentBox(){if(!l(this,Me).assignedElements().length)return;let e=this.range.value/(this.range.max-this.range.min),r=N(this,Ge,oi).call(this,l(this,Me),e),{style:s}=D(this.shadowRoot,"#current-rail");s.transform=`translateX(${r})`}};Te=new WeakMap,Ve=new WeakMap,Me=new WeakMap,Fe=new WeakMap,He=new WeakMap,Ke=new WeakSet,ni=function(){var r;let[,e]=(r=this.mediaSeekable)!=null?r:[];return e},Ot=new WeakSet,Nr=function(){var r;let[e]=(r=this.mediaSeekable)!=null?r:[];return e},Ge=new WeakSet,oi=function(e,r){var f;let s=`${r*100*100}%`,n=e.offsetWidth;if(!n)return s;let d=(f=this.getAttribute("bounds")?Ce(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?f:this,u=this.range.getBoundingClientRect(),c=d.getBoundingClientRect(),m=(l(this,Fe)-(u.left-c.left-n/2))/u.width*100,A=(c.right-u.left-n/2-l(this,He))/u.width*100;return Number.isNaN(m)||(s=`max(${m*100}%, ${s})`),Number.isNaN(A)||(s=`min(${s}, ${A*100}%)`),s},We=new WeakMap,pe=new WeakMap,Se=new WeakMap,Bt=new WeakMap,Qe=new WeakMap,Ye=new WeakMap,qe=new WeakSet,li=function(){this.addEventListener("pointermove",l(this,Ye),!1)},$t=new WeakSet,Or=function(){var e;(e=o.window)==null||e.removeEventListener("pointermove",l(this,Se)),this.removeEventListener("pointermove",l(this,Ye)),h(this,pe,!1),l(this,Qe).call(this)};o.customElements.get("media-time-range")||o.customElements.define("media-time-range",Nt);var Br=Nt;var $r={LOADING_DELAY:"loadingdelay"},Vr=500,Fr=E.createElement("template"),Qs=`
<svg aria-hidden="true" viewBox="0 0 100 100">
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
`;Fr.innerHTML=`
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
  --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${Vr}ms);
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=icon] > *,
:host ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 0);
  transition: opacity 0.15s;
}

:host([${a.MEDIA_LOADING}]:not([${a.MEDIA_PAUSED}])) slot[name=icon] > *,
:host([${a.MEDIA_LOADING}]:not([${a.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 1);
  transition: opacity 0.15s var(--_loading-indicator-delay);
}

:host #status {
  visibility: var(--media-loading-indicator-opacity, hidden);
  transition: visibility 0.15s;
}

:host([${a.MEDIA_LOADING}]:not([${a.MEDIA_PAUSED}])) #status {
  visibility: var(--media-loading-indicator-opacity, visible);
  transition: visibility 0.15s var(--_loading-indicator-delay);
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-indicator-icon-width);
  height: var(--media-loading-indicator-icon-height, 100px);
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  vertical-align: middle;
}
</style>

<slot name="icon">${Qs}</slot>
<div id="status" role="status" aria-live="polite">${x.MEDIA_LOADING()}</div>
`;var Y,Ze,je,Vt=class extends o.HTMLElement{constructor(){super();b(this,Y,void 0);b(this,Ze,Vr);b(this,je,void 0);if(!this.shadowRoot){let r=this.attachShadow({mode:"open"}),s=Fr.content.cloneNode(!0);r.appendChild(s)}let{style:e}=D(this.shadowRoot,":host");h(this,je,e)}static get observedAttributes(){return[g.MEDIA_CONTROLLER,a.MEDIA_PAUSED,a.MEDIA_LOADING,$r.LOADING_DELAY]}attributeChangedCallback(e,r,s){var n,d,u,c,m;e===$r.LOADING_DELAY&&r!==s?this.loadingDelay=Number(s):e===g.MEDIA_CONTROLLER&&(r&&((d=(n=l(this,Y))==null?void 0:n.unassociateElement)==null||d.call(n,this),h(this,Y,null)),s&&(h(this,Y,(u=this.getRootNode())==null?void 0:u.getElementById(s)),(m=(c=l(this,Y))==null?void 0:c.associateElement)==null||m.call(c,this)))}connectedCallback(){var r,s,n;let e=this.getAttribute(g.MEDIA_CONTROLLER);e&&(h(this,Y,(r=this.getRootNode())==null?void 0:r.getElementById(e)),(n=(s=l(this,Y))==null?void 0:s.associateElement)==null||n.call(s,this))}disconnectedCallback(){var e,r;(r=(e=l(this,Y))==null?void 0:e.unassociateElement)==null||r.call(e,this),h(this,Y,null)}get loadingDelay(){return l(this,Ze)}set loadingDelay(e){h(this,Ze,e),l(this,je).setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return T(this,a.MEDIA_PAUSED)}set mediaPaused(e){v(this,a.MEDIA_PAUSED,e)}get mediaLoading(){return T(this,a.MEDIA_LOADING)}set mediaLoading(e){v(this,a.MEDIA_LOADING,e)}};Y=new WeakMap,Ze=new WeakMap,je=new WeakMap;o.customElements.get("media-loading-indicator")||o.customElements.define("media-loading-indicator",Vt);var Hr=Vt;var Ys=100,qs=1,Zs=i=>i.mediaMuted?0:Math.round(i.mediaVolume*i.range.max),js=({value:i,max:t})=>`${Math.round(i/t*100)}%`,Ft=class extends se{static get observedAttributes(){return[...super.observedAttributes,a.MEDIA_VOLUME,a.MEDIA_MUTED,a.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.max=Ys,this.range.addEventListener("input",()=>{let e=this.range.value/this.range.max,r=new o.CustomEvent(p.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(r)})}connectedCallback(){this.range.setAttribute("aria-label",x.VOLUME()),super.connectedCallback()}attributeChangedCallback(t,e,r){if(t===a.MEDIA_VOLUME||t===a.MEDIA_MUTED){let s=Zs(this);this.range.value=s,this.range.setAttribute("aria-valuetext",js(this.range)),this.updateBar()}super.attributeChangedCallback(t,e,r)}get mediaVolume(){return R(this,a.MEDIA_VOLUME,qs)}set mediaVolume(t){L(this,a.MEDIA_VOLUME,t)}get mediaMuted(){return T(this,a.MEDIA_MUTED)}set mediaMuted(t){v(this,a.MEDIA_MUTED,t)}get mediaVolumeUnavailable(){return U(this,a.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(t){y(this,a.MEDIA_VOLUME_UNAVAILABLE,t)}};o.customElements.get("media-volume-range")||o.customElements.define("media-volume-range",Ft);var Kr=Ft;return Zr(zs);})();
//# sourceMappingURL=index.js.map
