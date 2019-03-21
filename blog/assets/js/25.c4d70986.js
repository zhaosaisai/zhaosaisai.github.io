(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{207:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",[s._v("web安全之点击劫持")]),s._v(" "),a("p",[a("code",[s._v("点击劫持")]),s._v("也是比较常见的客户端攻击之一。"),a("code",[s._v("点击劫持")]),s._v("是一种视觉上的欺骗，常见的手段就是使用一个透明的，不可见的iframe，覆盖一个网页上。然后诱使用户在网页上进行操作，此时用户在不知情的情况下在iframe上操作。我们可以通过调整iframe的位置，诱使用户对iframe上具有功能性的按钮进行点击。")]),s._v(" "),a("p",[s._v("如果我们想防御点击劫持，我们也应该从这这个角度出发考虑解决之道。如果我们的目标网站不能被其它网站内嵌，点击劫持就能够防御住。")]),s._v(" "),a("p",[s._v("一般主要有如下三种方式：")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("通过javascript来控制我们的网页不能被内嵌到iframe中")])])]),s._v(" "),a("p",[s._v("当我们的网站是直接访问的时候，"),a("code",[s._v("window.top")]),s._v("对象就是我们的"),a("code",[s._v("window")]),s._v("对象。但是，当我们的网站通过iframe进行内嵌的时候，我们的网站的"),a("code",[s._v("top")]),s._v("对象就不是当前的"),a("code",[s._v("window")]),s._v("对象了。也就是说，我们可以通过"),a("code",[s._v("window.top")]),s._v("和"),a("code",[s._v("window")]),s._v("对象是否相同来判断我们的网站是运行在iframe中还是直接运行的。")]),s._v(" "),a("p",[s._v("一般我们会有可以通过如下的判断：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("top"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("location "),a("span",{attrs:{class:"token operator"}},[s._v("!==")]),s._v(" window"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("location"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    top"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("location "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" window"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("location\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("但是，如果攻击者的网站禁止了我们网站的脚本，上述就不起任何作用了。比如通过iframe的"),a("code",[s._v("snadbox")]),s._v("属性限制。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("// 我们可以通过明确指定iframe的snadbox属性来限制iframe的行为")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("iframe snadbox"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v('"allow-forms"')]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token operator"}},[s._v("<")]),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v("iframe"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("X-FRAME-OPTIONS")])])]),s._v(" "),a("p",[s._v("我们也可以通过"),a("code",[s._v("X-FRAME-OPTIONS")]),s._v("禁止我们的网页内嵌在iframe中。这个是一个http响应头。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token constant"}},[s._v("X")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token constant"}},[s._v("FRAME")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token constant"}},[s._v("OPTIONS")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token constant"}},[s._v("DENY")]),a("span",{attrs:{class:"token operator"}},[s._v("/")]),a("span",{attrs:{class:"token constant"}},[s._v("SAMEORIGIN")]),a("span",{attrs:{class:"token operator"}},[s._v("/")]),a("span",{attrs:{class:"token constant"}},[s._v("ALLOW")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token constant"}},[s._v("FROM")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("DENY")]),s._v("：表示禁止"),a("code",[s._v("iframe")]),s._v("内嵌我们的网页")]),s._v(" "),a("li",[a("strong",[s._v("SAMEORIGIN")]),s._v("：只有在同源的网站中内嵌我们的网页")]),s._v(" "),a("li",[a("strong",[s._v("ALLOW-FROM")]),s._v("：明确指定我们的网页可以被哪些域名下的页面内嵌")])])])}],!1,null,null,null);e.options.__file="web安全之点击劫持.md";t.default=e.exports}}]);