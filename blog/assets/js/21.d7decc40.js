(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{194:function(t,s,n){"use strict";n.r(s);var a=n(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",[t._v("Vue源码之错误处理")]),t._v(" "),t._m(0),t._v(" "),n("p",[n("code",[t._v("errorCaptured")]),t._v("是"),n("code",[t._v("Vue@2.5.0")]),t._v("新增的一个钩子函数。我们可以利用这个钩子函数进行"),n("code",[t._v("Vue")]),t._v("组件内的错误捕获。具体的使用可以参考"),n("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#errorCaptured",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cn.vuejs.org/v2/api/#errorCaptured"),n("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),n("p",[t._v("这个就是组件内的错误处理程序。但是，"),n("code",[t._v("errorCaptured")]),t._v("钩子函数是用来捕获"),n("strong",[t._v("来自子孙组件的错误，而无法捕获自身的错误")]),t._v("。我不是很能理解为什么要这样设计，给"),n("code",[t._v("Vue")]),t._v("提了一个"),n("a",{attrs:{href:"https://github.com/vuejs/vue/issues/8258",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),n("OutboundLink")],1),t._v("。希望能够被解答，知道的大大们也欢迎指出为什么这样设计。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("Vue")]),this._v("给我们提供了两种方式进行运行时的错误捕获："),s("code",[this._v("全局型错误捕获")]),this._v("和"),s("code",[this._v("组件内错误捕获")]),this._v("。示例图如下：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("不管是"),s("code",[this._v("全局型错误捕获")]),this._v("还是"),s("code",[this._v("组件内错误捕获")]),this._v("，"),s("code",[this._v("error handler")]),this._v("接收的参数都是一样的。分别是：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("error：错误对象\nvm：发生错误的Vue组件实例\ninfo：是 Vue 特定的错误信息，比如错误所在的生命周期钩子\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("下面是"),n("code",[t._v("Vue")]),t._v("中对全局型错误捕获的实现方式。全局型的错误捕获处理函数我们需要通过"),n("code",[t._v("config.errorHandler")]),t._v("进行指定，如果我们没有指定这个选项，则使用默认的"),n("code",[t._v("logError")]),t._v("把错误输出。而"),n("code",[t._v("logError")]),t._v("是对"),n("code",[t._v("console.error")]),t._v("的一个简单的封装。具体代码如下：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// Vue中默认的错误处理函数")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("logError")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'production'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("warn")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`Error in ")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("info"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v(': "')]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("toString")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v('"`')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inBrowser "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" inWeex"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" console "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" 'undefined"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("error")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" err\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// Vue中全局错误处理函数")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("globalHandleError")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 如果我们在创建Vue实例的时候指定了errorHandler,则使用其进行错误处理")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("errorHandler"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("errorHandler"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("call")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("null")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token class-name"}},[t._v("e")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token function"}},[t._v("logError")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("null")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'config.errorHandler'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("logError")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们可以利用这个接口，接入"),s("code",[this._v("sentry")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("而组件内的错误捕获则需要我们在声明组件的时候，指定"),s("code",[this._v("errorCaptured")]),this._v("钩子函数。如果没有指定这个钩子，则会沿着组件树向上寻找"),s("code",[this._v("$parent")]),this._v("组件，直至根组件。具体的代码的实现也是十分简单的。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("handleError")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cur "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 从该组件的父组件开始查找errorCaptured钩子函数")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$parent"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("// 如果存在errorCaptured钩子函数")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hooks "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("errorCaptured\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hooks"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{attrs:{class:"token comment"}},[t._v("// 因为选项合并的策略，钩子函数会被保存在一个数组中")]),t._v("\n                "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" hooks"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{attrs:{class:"token operator"}},[t._v("++")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),n("span",{attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),n("span",{attrs:{class:"token comment"}},[t._v("// 调用对应的钩子函数，处理错误")]),t._v("\n                        "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" capture "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" hooks"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("call")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n                        "),n("span",{attrs:{class:"token comment"}},[t._v("// 如果某个errorCaptured钩子的返回值是false，则会阻止错误继续向上传播")]),t._v("\n                        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("capture"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token class-name"}},[t._v("e")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),n("span",{attrs:{class:"token comment"}},[t._v("// 如果调用errorCaptured函数发生错误的时候，直接将错误发送到全局的错误处理函数")]),t._v("\n                        "),n("span",{attrs:{class:"token function"}},[t._v("globalHandleError")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cur"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'errorCaptured hook'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 除非明确指定错误禁止向上传播，否则都会调用全局的错误处理函数的")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("globalHandleError")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br")])])}],!1,null,null,null);r.options.__file="Vue源码之错误处理.md";s.default=r.exports}}]);