webpackJsonp([34879551326373],{891:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){return t.raw=e,t}e.__esModule=!0,e.query=void 0;var c=u(["\n  background-color: rgba(255, 255, 255, .4);\n  padding: 1rem;\n  margin-bottom: 2rem;\n  h1 {\n    margin-top: .5rem;\n  }\n  h4 {\n    margin-top: 1rem;\n  }\n"],["\n  background-color: rgba(255, 255, 255, .4);\n  padding: 1rem;\n  margin-bottom: 2rem;\n  h1 {\n    margin-top: .5rem;\n  }\n  h4 {\n    margin-top: 1rem;\n  }\n"]),f=n(1),l=r(f),d=n(47),p=r(d),s=n(48),m=p.default.div(c),w=function(t){function e(){return o(this,e),a(this,t.apply(this,arguments))}return i(e,t),e.prototype.componentDidMount=function(){setTimeout(function(){"undefined"!=typeof twttr&&window.twttr.widgets&&"function"==typeof window.twttr.widgets.load&&window.twttr.widgets.load()},0)},e.prototype.render=function(){var t=this.props.data.nodePost,e=(0,s.formatDate)(t.created);return l.default.createElement(m,null,l.default.createElement("h4",null,"— ",e),l.default.createElement("div",{dangerouslySetInnerHTML:{__html:t.body.value}}))},e}(l.default.Component);e.default=w;e.query="** extracted graphql fragment **"},48:function(t,e){"use strict";function n(t){var e=new Date(0);e.setUTCSeconds(t);var n={month:"long",day:"numeric",year:"numeric"};return e.toLocaleString("en-US",n)}e.__esModule=!0,e.formatDate=n}});
//# sourceMappingURL=component---src-templates-note-js-8d23f2cde4b450f9c41f.js.map