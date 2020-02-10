(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{179:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",[s._v("case分支")]),s._v(" "),a("p",[a("code",[s._v("case")]),s._v("语句和"),a("code",[s._v("select")]),s._v("语句可以构成分支。基本格式如下")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"$变量"')]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n    "),a("span",{attrs:{class:"token string"}},[s._v('"情况1"')]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        命令"),a("span",{attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{attrs:{class:"token string"}},[s._v('"情况2"')]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        命令"),a("span",{attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    * "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        命令"),a("span",{attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nesac\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# case demo")]),s._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"'),a("span",{attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n\t"),a("span",{attrs:{class:"token string"}},[s._v('"start"')]),a("span",{attrs:{class:"token operator"}},[s._v("|")]),a("span",{attrs:{class:"token string"}},[s._v('"START"')]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$0")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"start"')]),s._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),a("span",{attrs:{class:"token string"}},[s._v('"stop"')]),a("span",{attrs:{class:"token operator"}},[s._v("|")]),a("span",{attrs:{class:"token string"}},[s._v('"STOP"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$0")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"stop"')]),s._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),a("span",{attrs:{class:"token string"}},[s._v('"restart"')]),a("span",{attrs:{class:"token operator"}},[s._v("|")]),a("span",{attrs:{class:"token string"}},[s._v('"RESTART"')]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$0")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"restart"')]),s._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t* "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"help"')]),s._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nesac\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila jikeshijian-linux"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token comment"}},[s._v("# ./12.sh start")]),s._v("\n./12.sh start\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila jikeshijian-linux"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token comment"}},[s._v("# ./12.sh stop")]),s._v("\n./12.sh stop\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila jikeshijian-linux"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token comment"}},[s._v("# ./12.sh restart")]),s._v("\n./12.sh restart\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila jikeshijian-linux"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token comment"}},[s._v("# ./12.sh reload")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("help")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])}],!1,null,null,null);e.options.__file="29-case分支.md";t.default=e.exports}}]);