webpackJsonp([35783957827783],{919:function(e,t){e.exports=function(){for(var e=arguments.length,t=[],n=0;n<e;n++)t[n]=arguments[n];if(t=t.filter(function(e){return null!=e}),0!==t.length)return 1===t.length?t[0]:t.reduce(function(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}})}},47:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){return"undefined"==typeof E&&"undefined"!=typeof window&&window.IntersectionObserver&&(E=new window.IntersectionObserver(function(e){e.forEach(function(e){_.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),E}t.__esModule=!0;var i=n(30),a=r(i),l=n(36),s=r(l),u=n(35),p=r(u),d=n(77),c=r(d),f=n(76),h=r(f),m=n(1),y=r(m),g=n(3),v=r(g),b=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},T=function(e){var t=b(e),n=t.sizes?t.sizes.src:t.resolutions.src;return!!w[n]||(w[n]=!0,!1)},E=void 0,_=[],O=function(e,t){o().observe(e),_.push([e,t])},x=null,L=function(){if(null!==x)return x;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return x=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},S=function(e){var t=e.src?'src="'+e.src+'" ':'src=""',n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.sizes?'sizes="'+e.sizes+'" ':"",o=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt=""',a=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.opacity?e.opacity:"1",u=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+a+l+t+n+i+o+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+u+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},C=function(e){var t=e.style,n=e.onLoad,r=(0,c.default)(e,["style","onLoad"]);return y.default.createElement("img",(0,h.default)({},r,{onLoad:n,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};C.propTypes={style:v.default.object,onLoad:v.default.func};var j=function(e){function t(n){(0,a.default)(this,t);var r=(0,s.default)(this,e.call(this,n)),o=!0,i=!0,l=!1,u=T(n);return!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,i=!1,l=!0),"undefined"==typeof window&&(o=!1,i=!1),r.state={isVisible:o,imgLoaded:i,IOSupported:l},r.handleRef=r.handleRef.bind(r),r}return(0,p.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&O(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=b(this.props),n=t.title,r=t.alt,o=t.className,i=t.outerWrapperClassName,a=t.style,l=void 0===a?{}:a,s=t.imgStyle,u=void 0===s?{}:s,p=t.sizes,d=t.resolutions,c=t.backgroundColor,f=t.Tag,m=void 0;m="boolean"==typeof c?"lightgray":c;var g=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},u),v=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},u);if(p){var w=p;return w.srcWebp&&w.srcSetWebp&&L()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),y.default.createElement(f,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},y.default.createElement(f,{className:(o?o:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden"},l),ref:this.handleRef},y.default.createElement(f,{style:{width:"100%",paddingBottom:100/w.aspectRatio+"%"}}),w.base64&&y.default.createElement(C,{alt:r,title:n,src:w.base64,style:g}),w.tracedSVG&&y.default.createElement(C,{alt:r,title:n,src:w.tracedSVG,style:g}),m&&y.default.createElement(f,{title:n,style:{backgroundColor:m,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&y.default.createElement(C,{alt:r,title:n,srcSet:w.srcSet,src:w.src,sizes:w.sizes,style:v,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,h.default)({alt:r,title:n},w))}})))}if(d){var T=d,E=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},l);return"inherit"===l.display&&delete E.display,T.srcWebp&&T.srcSetWebp&&L()&&(T.src=T.srcWebp,T.srcSet=T.srcSetWebp),y.default.createElement(f,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},y.default.createElement(f,{className:(o?o:"")+" gatsby-image-wrapper",style:E,ref:this.handleRef},T.base64&&y.default.createElement(C,{alt:r,title:n,src:T.base64,style:g}),T.tracedSVG&&y.default.createElement(C,{alt:r,title:n,src:T.tracedSVG,style:g}),m&&y.default.createElement(f,{title:n,style:{backgroundColor:m,width:T.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:T.height}}),this.state.isVisible&&y.default.createElement(C,{alt:r,title:n,width:T.width,height:T.height,srcSet:T.srcSet,src:T.src,style:v,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,h.default)({alt:r,title:n,width:T.width,height:T.height},T))}})))}return null},t}(y.default.Component);j.defaultProps={fadeIn:!0,alt:"",Tag:"div"},j.propTypes={responsiveResolution:v.default.object,responsiveSizes:v.default.object,resolutions:v.default.object,sizes:v.default.object,fadeIn:v.default.bool,title:v.default.string,alt:v.default.string,className:v.default.oneOfType([v.default.string,v.default.object]),outerWrapperClassName:v.default.oneOfType([v.default.string,v.default.object]),style:v.default.object,imgStyle:v.default.object,position:v.default.string,backgroundColor:v.default.oneOfType([v.default.string,v.default.bool]),onLoad:v.default.func,Tag:v.default.string},t.default=j},97:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(p===setTimeout)return setTimeout(e,0);if((p===n||!p)&&setTimeout)return p=setTimeout,setTimeout(e,0);try{return p(e,0)}catch(t){try{return p.call(null,e,0)}catch(t){return p.call(this,e,0)}}}function i(e){if(d===clearTimeout)return clearTimeout(e);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function a(){m&&f&&(m=!1,f.length?h=f.concat(h):y=-1,h.length&&l())}function l(){if(!m){var e=o(a);m=!0;for(var t=h.length;t;){for(f=h,h=[];++y<t;)f&&f[y].run();y=-1,t=h.length}f=null,m=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function u(){}var p,d,c=e.exports={};!function(){try{p="function"==typeof setTimeout?setTimeout:n}catch(e){p=n}try{d="function"==typeof clearTimeout?clearTimeout:r}catch(e){d=r}}();var f,h=[],m=!1,y=-1;c.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||m||o(l)},s.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=u,c.addListener=u,c.once=u,c.off=u,c.removeListener=u,c.removeAllListeners=u,c.emit=u,c.prependListener=u,c.prependOnceListener=u,c.listeners=function(e){return[]},c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},1300:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(1),u=r(s),p=n(3),d=r(p),c=n(1302),f=r(c),h=n(1301),m=r(h),y=n(885),g=({transitionName:y.nameShape.isRequired,transitionAppear:d.default.bool,transitionEnter:d.default.bool,transitionLeave:d.default.bool,transitionAppearTimeout:(0,y.transitionTimeout)("Appear"),transitionEnterTimeout:(0,y.transitionTimeout)("Enter"),transitionLeaveTimeout:(0,y.transitionTimeout)("Leave")},{transitionAppear:!1,transitionEnter:!0,transitionLeave:!0}),v=function(e){function t(){var n,r,a;o(this,t);for(var l=arguments.length,s=Array(l),p=0;p<l;p++)s[p]=arguments[p];return n=r=i(this,e.call.apply(e,[this].concat(s))),r._wrapChild=function(e){return u.default.createElement(m.default,{name:r.props.transitionName,appear:r.props.transitionAppear,enter:r.props.transitionEnter,leave:r.props.transitionLeave,appearTimeout:r.props.transitionAppearTimeout,enterTimeout:r.props.transitionEnterTimeout,leaveTimeout:r.props.transitionLeaveTimeout},e)},a=n,i(r,a)}return a(t,e),t.prototype.render=function(){return u.default.createElement(f.default,l({},this.props,{childFactory:this._wrapChild}))},t}(u.default.Component);v.displayName="CSSTransitionGroup",v.propTypes={},v.defaultProps=g,t.default=v,e.exports=t.default},1301:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){return E.length?E.forEach(function(n){return e.addEventListener(n,t,!1)}):setTimeout(t,0),function(){E.length&&E.forEach(function(n){return e.removeEventListener(n,t,!1)})}}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(996),p=r(u),d=n(998),c=r(d),f=n(826),h=r(f),m=n(1003),y=n(1),g=r(y),v=n(3),b=r(v),w=n(148),T=n(885),E=[];m.transitionEnd&&E.push(m.transitionEnd),m.animationEnd&&E.push(m.animationEnd);var _=({children:b.default.node,name:T.nameShape.isRequired,appear:b.default.bool,enter:b.default.bool,leave:b.default.bool,appearTimeout:b.default.number,enterTimeout:b.default.number,leaveTimeout:b.default.number},function(e){function t(){var n,r,a;o(this,t);for(var l=arguments.length,s=Array(l),u=0;u<l;u++)s[u]=arguments[u];return n=r=i(this,e.call.apply(e,[this].concat(s))),r.componentWillAppear=function(e){r.props.appear?r.transition("appear",e,r.props.appearTimeout):e()},r.componentWillEnter=function(e){r.props.enter?r.transition("enter",e,r.props.enterTimeout):e()},r.componentWillLeave=function(e){r.props.leave?r.transition("leave",e,r.props.leaveTimeout):e()},a=n,i(r,a)}return a(t,e),t.prototype.componentWillMount=function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach(function(e){clearTimeout(e)}),this.classNameAndNodeQueue.length=0},t.prototype.transition=function(e,t,n){var r=(0,w.findDOMNode)(this);if(!r)return void(t&&t());var o=this.props.name[e]||this.props.name+"-"+e,i=this.props.name[e+"Active"]||o+"-active",a=null,s=void 0;(0,p.default)(r,o),this.queueClassAndNode(i,r);var u=function(e){e&&e.target!==r||(clearTimeout(a),s&&s(),(0,c.default)(r,o),(0,c.default)(r,i),s&&s(),t&&t())};n?(a=setTimeout(u,n),this.transitionTimeouts.push(a)):m.transitionEnd&&(s=l(r,u))},t.prototype.queueClassAndNode=function(e,t){var n=this;this.classNameAndNodeQueue.push({className:e,node:t}),this.rafHandle||(this.rafHandle=(0,h.default)(function(){return n.flushClassNameAndNodeQueue()}))},t.prototype.flushClassNameAndNodeQueue=function(){this.unmounted||this.classNameAndNodeQueue.forEach(function(e){e.node.scrollTop,(0,p.default)(e.node,e.className)}),this.classNameAndNodeQueue.length=0,this.rafHandle=null},t.prototype.render=function(){var e=s({},this.props);return delete e.name,delete e.appear,delete e.enter,delete e.leave,delete e.appearTimeout,delete e.enterTimeout,delete e.leaveTimeout,delete e.children,g.default.cloneElement(g.default.Children.only(this.props.children),e)},t}(g.default.Component));_.displayName="CSSTransitionGroupChild",_.propTypes={},t.default=_,e.exports=t.default},1302:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(919),u=r(s),p=n(1),d=r(p),c=n(3),f=r(c),h=n(12),m=(r(h),n(1303)),y=({component:f.default.any,childFactory:f.default.func,children:f.default.node},{component:"span",childFactory:function(e){return e}}),g=function(e){function t(n,r){o(this,t);var a=i(this,e.call(this,n,r));return a.performAppear=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillAppear?t.componentWillAppear(a._handleDoneAppearing.bind(a,e,t)):a._handleDoneAppearing(e,t)},a._handleDoneAppearing=function(e,t){t.componentDidAppear&&t.componentDidAppear(),delete a.currentlyTransitioningKeys[e];var n=(0,m.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)||a.performLeave(e,t)},a.performEnter=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillEnter?t.componentWillEnter(a._handleDoneEntering.bind(a,e,t)):a._handleDoneEntering(e,t)},a._handleDoneEntering=function(e,t){t.componentDidEnter&&t.componentDidEnter(),delete a.currentlyTransitioningKeys[e];var n=(0,m.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)||a.performLeave(e,t)},a.performLeave=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillLeave?t.componentWillLeave(a._handleDoneLeaving.bind(a,e,t)):a._handleDoneLeaving(e,t)},a._handleDoneLeaving=function(e,t){t.componentDidLeave&&t.componentDidLeave(),delete a.currentlyTransitioningKeys[e];var n=(0,m.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)?a.keysToEnter.push(e):a.setState(function(t){var n=l({},t.children);return delete n[e],{children:n}})},a.childRefs=Object.create(null),a.state={children:(0,m.getChildMapping)(n.children)},a}return a(t,e),t.prototype.componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},t.prototype.componentDidMount=function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t,this.childRefs[t])},t.prototype.componentWillReceiveProps=function(e){var t=(0,m.getChildMapping)(e.children),n=this.state.children;this.setState({children:(0,m.mergeChildMappings)(n,t)});for(var r in t){var o=n&&n.hasOwnProperty(r);!t[r]||o||this.currentlyTransitioningKeys[r]||this.keysToEnter.push(r)}for(var i in n){var a=t&&t.hasOwnProperty(i);!n[i]||a||this.currentlyTransitioningKeys[i]||this.keysToLeave.push(i)}},t.prototype.componentDidUpdate=function(){var e=this,t=this.keysToEnter;this.keysToEnter=[],t.forEach(function(t){return e.performEnter(t,e.childRefs[t])});var n=this.keysToLeave;this.keysToLeave=[],n.forEach(function(t){return e.performLeave(t,e.childRefs[t])})},t.prototype.render=function(){var e=this,t=[],n=function(n){var r=e.state.children[n];if(r){var o="string"!=typeof r.ref,i=e.props.childFactory(r),a=function(t){e.childRefs[n]=t};i===r&&o&&(a=(0,u.default)(r.ref,a)),t.push(d.default.cloneElement(i,{key:n,ref:a}))}};for(var r in this.state.children)n(r);var o=l({},this.props);return delete o.transitionLeave,delete o.transitionName,delete o.transitionAppear,delete o.transitionEnter,delete o.childFactory,delete o.transitionLeaveTimeout,delete o.transitionEnterTimeout,delete o.transitionAppearTimeout,delete o.component,d.default.createElement(this.props.component,o,t)},t}(d.default.Component);g.displayName="TransitionGroup",g.propTypes={},g.defaultProps=y,t.default=g,e.exports=t.default},1303:function(e,t,n){"use strict";function r(e){if(!e)return e;var t={};return i.Children.map(e,function(e){return e}).forEach(function(e){t[e.key]=e}),t}function o(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var r={},o=[];for(var i in e)t.hasOwnProperty(i)?o.length&&(r[i]=o,o=[]):o.push(i);var a=void 0,l={};for(var s in t){if(r.hasOwnProperty(s))for(a=0;a<r[s].length;a++){var u=r[s][a];l[r[s][a]]=n(u)}l[s]=n(s)}for(a=0;a<o.length;a++)l[o[a]]=n(o[a]);return l}t.__esModule=!0,t.getChildMapping=r,t.mergeChildMappings=o;var i=n(1)},885:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t="transition"+e+"Timeout",n="transition"+e;return function(e){if(e[n]){if(null==e[t])return new Error(t+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!=typeof e[t])return new Error(t+" must be a number (in milliseconds)")}return null}}t.__esModule=!0,t.nameShape=void 0,t.transitionTimeout=o;var i=n(1),a=(r(i),n(3)),l=r(a);t.nameShape=l.default.oneOfType([l.default.string,l.default.shape({enter:l.default.string,leave:l.default.string,active:l.default.string}),l.default.shape({enter:l.default.string,enterActive:l.default.string,leave:l.default.string,leaveActive:l.default.string,appear:l.default.string,appearActive:l.default.string})])},54:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return e.raw=t,e}t.__esModule=!0;var i=o(["\n  display: block;\n  @media all and (min-width: 640px) {\n    width: 60%;\n  }\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 2rem;\n  border: 2px solid #07e;\n"],["\n  display: block;\n  @media all and (min-width: 640px) {\n    width: 60%;\n  }\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 2rem;\n  border: 2px solid #07e;\n"]),a=n(1),l=(r(a),n(17)),s=r(l),u=n(47),p=r(u),d=(0,s.default)(p.default)(i);t.default=d,e.exports=t.default},903:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),s=r(l),u=n(3),p=r(u),d=n(904),c=r(d),f=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){return"all"===this.props.postType?s.default.createElement("div",null,this.props.data.allNodePost.edges.map(function(e){var t=e.node;return s.default.createElement(c.default,{node:t})})):"posts"===this.props.postType?s.default.createElement("div",null,this.props.data.posts.edges.map(function(e){var t=e.node;return s.default.createElement(c.default,{node:t})})):"links"===this.props.postType?s.default.createElement("div",null,this.props.data.links.edges.map(function(e){var t=e.node;return s.default.createElement(c.default,{node:t})})):"notes"===this.props.postType?s.default.createElement("div",null,this.props.data.notes.edges.map(function(e){var t=e.node;return s.default.createElement(c.default,{node:t})})):void 0},t}(s.default.Component);f.propTypes={data:p.default.object.isRequired,postType:p.default.string.isRequired},t.default=f,e.exports=t.default},904:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){return e.raw=t,e}t.__esModule=!0;var s=l(["\n  clear: both;\n  padding: 1rem;\n  margin-bottom: 2rem;\n  background-color: rgba(255, 255, 255, .4);\n  box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.3);\n  h1 {\n    margin-top: .5rem;\n  }\n  h3 {\n    margin-top: 0;\n  }\n  h4 {\n    margin-top: 1rem;\n  }\n"],["\n  clear: both;\n  padding: 1rem;\n  margin-bottom: 2rem;\n  background-color: rgba(255, 255, 255, .4);\n  box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.3);\n  h1 {\n    margin-top: .5rem;\n  }\n  h3 {\n    margin-top: 0;\n  }\n  h4 {\n    margin-top: 1rem;\n  }\n"]),u=n(1),p=r(u),d=n(3),c=r(d),f=n(17),h=r(f),m=n(831),y=r(m),g=n(75),v=n(54),b=r(v),w=h.default.div(s),T=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){var e=this.props.node,t=(0,g.formatDate)(e.created);return"link"===e.post_type?p.default.createElement(w,{key:e.id},p.default.createElement("h1",null,p.default.createElement("a",{href:e.link},e.title)),p.default.createElement("h4",null,"— ",t),p.default.createElement("div",{dangerouslySetInnerHTML:{__html:e.body.value}}),p.default.createElement(y.default,{to:e.fields.slug},"Permalink")):"note"===this.props.node.post_type?p.default.createElement(w,{key:e.id},p.default.createElement("h4",null,"— ",t),e.relationships.image?p.default.createElement(b.default,{sizes:e.relationships.image.localFile.childImageSharp.sizes}):null,p.default.createElement("div",{dangerouslySetInnerHTML:{__html:e.body.value}}),p.default.createElement(y.default,{to:e.fields.slug},"Permalink")):p.default.createElement(w,null,p.default.createElement("h1",null,p.default.createElement(y.default,{to:e.fields.slug},e.title)),p.default.createElement("h3",null,"— ",t),e.relationships.image?p.default.createElement(b.default,{sizes:e.relationships.image.localFile.childImageSharp.sizes}):null,p.default.createElement("div",{dangerouslySetInnerHTML:{__html:e.body.value}}))},t}(p.default.Component);T.propTypes={node:c.default.object.isRequired},t.default=T,e.exports=t.default},907:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){return e.raw=t,e}t.__esModule=!0,t.query=void 0;var s=l(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n"],["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n"]),u=l(["\n  padding: 0 1rem;\n  @media all and (max-width: 1024px) {\n   grid-column: 1 / span 4;\n  }\n  @media all and (min-width: 1025px) {\n    grid-column: 1 / span 3;\n  }\n  .post-list-enter {\n    opacity: 0.01;\n    &.post-list-enter-active {\n      opacity: 1;\n      transition: opacity 500ms ease-in;\n    }\n  }\n"],["\n  padding: 0 1rem;\n  @media all and (max-width: 1024px) {\n   grid-column: 1 / span 4;\n  }\n  @media all and (min-width: 1025px) {\n    grid-column: 1 / span 3;\n  }\n  .post-list-enter {\n    opacity: 0.01;\n    &.post-list-enter-active {\n      opacity: 1;\n      transition: opacity 500ms ease-in;\n    }\n  }\n"]),p=l(["\n  padding: 0 1rem .5rem 0;\n  @media all and (max-width: 1024px) {\n    grid-column: 1 / span 4;\n    order: -1;\n    padding-left: 1rem;\n  }\n  @media all and (min-width: 1025px) {\n    grid-column: span 1;\n    > div {\n      position: fixed;\n      width: calc(100%/5.4);\n      height: 100vh;\n    }\n  }\n"],["\n  padding: 0 1rem .5rem 0;\n  @media all and (max-width: 1024px) {\n    grid-column: 1 / span 4;\n    order: -1;\n    padding-left: 1rem;\n  }\n  @media all and (min-width: 1025px) {\n    grid-column: span 1;\n    > div {\n      position: fixed;\n      width: calc(100%/5.4);\n      height: 100vh;\n    }\n  }\n"]),d=l(["\n  li {\n    padding: .5rem;\n    background-color: rgba(255, 255, 255, .4);\n    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.3);\n    list-style-type: none;\n    font-family: 'Montserrat',sans-serif;\n    color: hsla(0,0%,0%,0.5);\n    cursor: pointer;\n  }\n"],["\n  li {\n    padding: .5rem;\n    background-color: rgba(255, 255, 255, .4);\n    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.3);\n    list-style-type: none;\n    font-family: 'Montserrat',sans-serif;\n    color: hsla(0,0%,0%,0.5);\n    cursor: pointer;\n  }\n"]),c=n(1),f=r(c),h=n(1300),m=r(h),y=n(17),g=r(y),v=n(903),b=r(v),w=g.default.div(s),T=g.default.div(u),E=g.default.div(p),_=g.default.div(d),O=function(e){function t(){o(this,t);var n=i(this,e.call(this));n.selectPostType=function(e){n.setState({selectedPostType:e})};var r="all";return n.state={selectedPostType:r},n}return a(t,e),t.prototype.componentDidMount=function(){setTimeout(function(){"undefined"!=typeof twttr&&window.twttr.widgets&&"function"==typeof window.twttr.widgets.load&&window.twttr.widgets.load()},0)},t.prototype.componentDidUpdate=function(){setTimeout(function(){"undefined"!=typeof twttr&&window.twttr.widgets&&"function"==typeof window.twttr.widgets.load&&window.twttr.widgets.load()},0)},t.prototype.render=function(){var e=this;return f.default.createElement(w,null,f.default.createElement(T,null,f.default.createElement(m.default,{component:"div",transitionName:"post-list",transitionEnterTimeout:500,transitionLeave:!1},f.default.createElement(b.default,{className:"post-list",key:this.state.selectedPostType,data:this.props.data,postType:this.state.selectedPostType}))),f.default.createElement(E,null,f.default.createElement(_,null,f.default.createElement("li",{onClick:function(){return e.selectPostType("all")}},"All (",this.props.data.allNodePost.totalCount,")"),f.default.createElement("li",{onClick:function(){return e.selectPostType("posts")}},"Posts (",this.props.data.posts.totalCount,")"),f.default.createElement("li",{onClick:function(){return e.selectPostType("links")}},"Links (",this.props.data.links.totalCount,")"),f.default.createElement("li",{onClick:function(){return e.selectPostType("notes")}},"Notes (",this.props.data.notes.totalCount,")"))))},t}(f.default.Component);t.default=O;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-95d459c3d2dcb142cbb3.js.map