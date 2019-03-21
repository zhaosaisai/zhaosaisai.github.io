(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{173:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",[t._v("探探Koa")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("的确，"),a("code",[t._v("Koa")]),t._v("不像"),a("code",[t._v("Express")]),t._v("那样庞大，"),a("code",[t._v("Koa")]),t._v("只是实现了中间件机制，但并没有为我们引入任何功能性的中间件。相比于"),a("code",[t._v("Express")]),t._v("，"),a("code",[t._v("Koa")]),t._v("更小，更轻量。这给予了开发者更多可拓展的机会。比如，国内著名的"),a("code",[t._v("MVC")]),t._v("框架"),a("a",{attrs:{href:"https://eggjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("egg"),a("OutboundLink")],1),t._v("就是基于"),a("code",[t._v("Koa")]),t._v("的二次开发，在其提供底层能力的基础上拓展了很多方便且实用的功能。")]),t._v(" "),a("p",[t._v("本文并不会对"),a("code",[t._v("Koa")]),t._v("的使用作过多的介绍，如果你想了解具体用法，请参考"),a("a",{attrs:{href:"https://koajs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Koa"),a("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),a("p",[t._v("为了更好的梳理他们之间的关系，画了一个简单的图来帮助大家理解。")]),t._v(" "),a("p",[t._v("其实，上面六个核心对象之间的引用关系可以用如下共识公式来大致说明。")]),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("熟悉"),s("code",[this._v("Nodejs")]),this._v("web开发的同学对"),s("code",[this._v("Koa")]),this._v("一定不会陌生。引一段"),s("code",[this._v("Koa")]),this._v("官方介绍")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("Koa是一个全新的"),s("code",[this._v("web")]),this._v("开发框架。通过利用"),s("code",[this._v("async")]),this._v("函数，提供了一套优雅的方法，帮助您快速和高效的开发"),s("code",[this._v("web")]),this._v("应用程序。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("下面代码使用"),s("code",[this._v("Koa")]),this._v("创建了一个"),s("code",[this._v("web")]),this._v("服务")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Koa "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'koa'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Koa")]),t._v("\n\napp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" ctx "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("200")]),t._v("\n  ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("header\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("listen")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("8080")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`Your application serve on 8080`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("上面的代码基本使用了"),s("code",[this._v("Koa")]),this._v("的大部分功能。为了能从本质上去理解"),s("code",[this._v("Koa")]),this._v("是怎么运行的，这里带大家先来熟悉下"),s("code",[this._v("Koa")]),this._v("的基本架构以及每个核心到底具有哪些功能。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"关系图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关系图","aria-hidden":"true"}},[this._v("#")]),this._v(" 关系图")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("Koa")]),this._v("在应用的整个生命周期中主要有如下几个核心：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("strong",[t._v("application")]),t._v("："),a("code",[t._v("Koa")]),t._v("实例，也就是上面代码中所创建的"),a("code",[t._v("app")])]),t._v(" "),a("li",[a("strong",[t._v("context")]),t._v("："),a("code",[t._v("Koa")]),t._v("上下文对象。一般我们都是通过上下文对象来操作"),a("code",[t._v("请求")]),t._v("和"),a("code",[t._v("响应")]),t._v("的")]),t._v(" "),a("li",[a("strong",[t._v("request")]),t._v("："),a("code",[t._v("Koa")]),t._v("对原生"),a("code",[t._v("http")]),t._v("请求对象的封装。提供了一系列便捷的方法来操作请求对象。")]),t._v(" "),a("li",[a("strong",[t._v("response")]),t._v("："),a("code",[t._v("Koa")]),t._v("对原生"),a("code",[t._v("http")]),t._v("响应对象的封装。同样提供了一系列便捷的方法来操作响应对象。")]),t._v(" "),a("li",[a("strong",[t._v("req")]),t._v("：原生"),a("code",[t._v("http")]),t._v("请求对象")]),t._v(" "),a("li",[a("strong",[t._v("res")]),t._v("：原生"),a("code",[t._v("http")]),t._v("响应对象")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("理解了上面六个核心，你就理解了"),s("code",[this._v("Koa")]),this._v("90%的功能，剩下的10%就是我们所熟知的中间件设计。这六个核心对象理解起来很容易，想彻底的记住的话还真得花一点时间。这六个核心对象有着千丝万缕的联系，下面，我们来好好的捋一捋。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("blockquote",[a("p",[t._v("为了方便表达，后续"),a("code",[t._v("application")]),t._v("对象使用"),a("code",[t._v("app")]),t._v("标识来表示。"),a("code",[t._v("context")]),t._v("对象使用"),a("code",[t._v("ctx")]),t._v("标识来表示。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[a("code",[t._v("app")]),t._v("和"),a("code",[t._v("ctx")]),t._v("，"),a("code",[t._v("request")]),t._v("，"),a("code",[t._v("response")]),t._v("的关系")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("app"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" context\napp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" request\napp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" response\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",{attrs:{start:"2"}},[a("li",[a("code",[t._v("ctx")]),t._v("和"),a("code",[t._v("app")]),t._v("，"),a("code",[t._v("request")]),t._v("，"),a("code",[t._v("response")]),t._v("，"),a("code",[t._v("req")]),t._v("，"),a("code",[t._v("res")]),t._v("的关系")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" app"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" request\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" response\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" app\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("req "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" req\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("res "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" res\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",{attrs:{start:"3"}},[a("li",[a("code",[t._v("request")]),t._v("和"),a("code",[t._v("app")]),t._v("，"),a("code",[t._v("ctx")]),t._v("，"),a("code",[t._v("response")]),t._v("，"),a("code",[t._v("req")]),t._v("，"),a("code",[t._v("res")]),t._v("的关系")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("request"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" app\nrequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" ctx\nrequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("req "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" req\nrequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("res "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" res\nrequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" response\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",{attrs:{start:"4"}},[a("li",[a("code",[t._v("response")]),t._v("和"),a("code",[t._v("app")]),t._v("，"),a("code",[t._v("ctx")]),t._v("，"),a("code",[t._v("request")]),t._v("，"),a("code",[t._v("req")]),t._v("，"),a("code",[t._v("res")]),t._v("的关系")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("response"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" app\nresponse"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" ctx\nresponse"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("req "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" req\nresponse"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("res "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" res\nresponse"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" request\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("核心对象"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("不包含req, res"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".属性名称 "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" 同属性名对象 "),a("span",{attrs:{class:"token comment"}},[t._v("# response.app === app")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("理解了上面六个核心对象之间的关系后，下面我们就来看一下这些对象到底实现了哪些功能来帮助我们快速和高效的开发"),s("code",[this._v("web")]),this._v("应用程序。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("下面只是梳理，具体的用法请移步官网查阅。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application","aria-hidden":"true"}},[this._v("#")]),this._v(" application")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("下面是"),s("code",[this._v("application")]),this._v("对象上所实现的一些属性和方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/blog/app1.png",alt:"node"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#context","aria-hidden":"true"}},[this._v("#")]),this._v(" context")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/blog/app2.png",alt:"node"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("图片中的属性和方法是直接挂载到"),a("code",[t._v("context")]),t._v("上下文对象上的。除此之外，"),a("code",[t._v("Koa")]),t._v("还直接代理了"),a("code",[t._v("request")]),t._v("和"),a("code",[t._v("response")]),t._v("对象上很多的属性和方法。后面我们会详细讨论和分析这些方法是怎么通过"),a("code",[t._v("context")]),t._v("对象进行分发的。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request","aria-hidden":"true"}},[this._v("#")]),this._v(" request")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("request")]),t._v("和"),a("code",[t._v("response")]),t._v("上很多属性都是可读可写的。读--其实就是对属性的"),a("code",[t._v("get")]),t._v("，写--其实就是对属性的"),a("code",[t._v("set")]),t._v("。所以，"),a("code",[t._v("Koa")]),t._v("中对这些可读写的属性都是通过"),a("code",[t._v("getter")]),t._v("和"),a("code",[t._v("setter")]),t._v("的方式处理的。比如：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("header")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("req"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("header")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("req"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" val\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("当我们获取"),a("code",[t._v("request.header")]),t._v("的时候，返回的其实是"),a("code",[t._v("request.req.headers")]),t._v("。同样，当我们设置"),a("code",[t._v("request.header")]),t._v("的时候，其实设置的是"),a("code",[t._v("request.req.headers")]),t._v("，也就是原生"),a("code",[t._v("http")]),t._v("请求的请求头。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("下面就是"),s("code",[this._v("Koa")]),this._v("给我们提供的操作"),s("code",[this._v("http")]),this._v("请求头的一些方法。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/blog/request.svg",alt:"node"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response","aria-hidden":"true"}},[this._v("#")]),this._v(" response")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("response")]),this._v("中的很多属性也是通过"),s("code",[this._v("getter")]),this._v("和"),s("code",[this._v("setter")]),this._v("的方式实现的。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/blog/response.svg",alt:"node"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("上面就是对"),s("code",[this._v("Koa")]),this._v("中所涉及到的一些内容的梳理，后续我们会针对每一块的内容看一下具体实现。")])}],!1,null,null,null);n.options.__file="探探Koa.md";s.default=n.exports}}]);