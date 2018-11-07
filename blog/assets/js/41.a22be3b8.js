(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{195:function(s,n,a){"use strict";a.r(n);var t=a(0),e=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"content"},[a("h1",[s._v("每天一点linux（九）")]),s._v(" "),a("p",[a("code",[s._v("函数")]),s._v("一系列语句的集合。"),a("code",[s._v("shell")]),s._v("中也存在函数的概念，"),a("code",[s._v("shell")]),s._v("中的函数可以看作是"),a("code",[s._v("命令")]),s._v("的集合。"),a("code",[s._v("shell")]),s._v("中函数定义的格式如下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 函数名称 "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  函数体\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("return 语句"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("函数的定义有两点需要说明：")]),s._v(" "),a("ul",[a("li",[s._v("定义函数的时候可以带"),a("code",[s._v("function")]),s._v("关键字，也可以不带"),a("code",[s._v("function")]),s._v("关键字。总体来说")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" func"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("等价于")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("func"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"/blog/linux-imgs/func1.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("函数可以有返回值，通过"),a("code",[s._v("return")]),s._v("语句直接返回。也可以没有return语句，这个时候会以函数最后一条命令运行的结果作为返回值。")])]),s._v(" "),a("blockquote",[a("p",[s._v("如果显示指定了return语句，那么合格语句需要返回一个(0-255)的整数")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" test"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token function"}},[s._v("ls")]),s._v(" -al "),a("span",{attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" 2\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nr"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token variable"}},[a("span",{attrs:{class:"token variable"}},[s._v("`")]),a("span",{attrs:{class:"token function"}},[s._v("test")]),a("span",{attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$?")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("img",{attrs:{src:"/blog/linux-imgs/func2.png",alt:""}})]),s._v(" "),a("p",[s._v("::: tips")]),s._v(" "),a("ul",[a("li",[s._v("函数的返回值需要在调用这个函数之后通过 "),a("code",[s._v("$?")]),s._v(" 来获取")]),s._v(" "),a("li",[s._v("**所有的函数必须在调用之前定义，否则会报错。**调用函数的时候直接使用函数名称(这时可以把函数名看作是一个命令)，"),a("strong",[s._v("不需要加()")]),s._v("。\n:::")])]),s._v(" "),a("p",[a("code",[s._v("shell")]),s._v("中的函数和普通编程语言中的函数在定义时还是有一些区别的。比如，我们在js中定义一个函数")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("函数名")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("形参列表"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  函数体\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("// 调用")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("函数名")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("实参列表"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("在"),a("code",[s._v("shell")]),s._v("中，函数是没有"),a("code",[s._v("形参")]),s._v("的。获取实参需要通过"),a("code",[s._v("预设变量")]),s._v("来获取。比如，通过"),a("code",[s._v("$1")]),s._v("获取第一个参数,"),a("code",[s._v("$2")]),s._v("获取第二个参数，但是，如果我们需要获取第十个及以上的参数，需要通过"),a("code",[s._v("${参数索引}")]),s._v("的形式来获取。比如")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" param"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"第一个参数是'),a("span",{attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"第二个参数是'),a("span",{attrs:{class:"token variable"}},[s._v("$2")]),s._v('"')]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"第十个参数是'),a("span",{attrs:{class:"token variable"}},[s._v("$10")]),s._v('"')]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"第十个参数是'),a("span",{attrs:{class:"token variable"}},[s._v("${10}")]),s._v('"')]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 传递参数")]),s._v("\nparam 1 2 3 4 5 6 7 8 9 10\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("img",{attrs:{src:"/blog/linux-imgs/func3.png",alt:""}})]),s._v(" "),a("p",[a("code",[s._v("shell")]),s._v("中其实提供了很多的预设变量在函数中调用。")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("$#")]),s._v("：获取传递给函数的参数的个数")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/blog/linux-imgs/func4.png",alt:""}})]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("$*")]),s._v("：用字符串的方式获取传递给函数的所有参数")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/blog/linux-imgs/func5.png",alt:""}})]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("$$")]),s._v("：获取脚本运行的进程id")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/blog/linux-imgs/func6.png",alt:""}})]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("$?")]),s._v("：获取函数的返回值，也是获取最后命令的退出状态。0表示没有错误，其他任何值表明有错误。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/blog/linux-imgs/func2.png",alt:""}})])])}],!1,null,null,null);e.options.__file="每天一点linux（九）.md";n.default=e.exports}}]);