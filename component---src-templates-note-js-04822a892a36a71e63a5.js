webpackJsonp([34879551326373],{909:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){return e.raw=t,e}t.__esModule=!0,t.query=void 0;var u=i(["\n  background-color: rgba(255, 255, 255, .4);\n  box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.3);\n  padding: 1rem;\n  margin-bottom: 2rem;\n  h1 {\n    margin-top: .5rem;\n  }\n  h4 {\n    margin-top: 1rem;\n  }\n"],["\n  background-color: rgba(255, 255, 255, .4);\n  box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.3);\n  padding: 1rem;\n  margin-bottom: 2rem;\n  h1 {\n    margin-top: .5rem;\n  }\n  h4 {\n    margin-top: 1rem;\n  }\n"]),d=n(1),c=r(d),f=n(18),p=r(f),s=n(49),m=n(829),g=(r(m),n(73)),h=n(52),w=r(h),b=n(53),y=r(b),x=n(72),E=r(x),_=p.default.div(u),v=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return l(t,e),t.prototype.componentDidMount=function(){setTimeout(function(){"undefined"!=typeof twttr&&window.twttr.widgets&&"function"==typeof window.twttr.widgets.load&&window.twttr.widgets.load()},0)},t.prototype.render=function(){var e=this.props.data.nodePost,t=(0,g.formatDate)(e.created);return c.default.createElement(w.default,null,c.default.createElement(y.default,null,c.default.createElement(_,null,c.default.createElement(s.Helmet,null,c.default.createElement("title",null,e.title," | Brian Perry")),c.default.createElement("h4",null,"— ",t),e.relationships.image?c.default.createElement(E.default,{sizes:e.relationships.image.localFile.childImageSharp.sizes}):null,c.default.createElement("div",{dangerouslySetInnerHTML:{__html:e.body.value}}))))},t}(c.default.Component);t.default=v;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-note-js-04822a892a36a71e63a5.js.map