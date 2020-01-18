(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{169:function(s,n,a){"use strict";a.r(n);var t=a(0),e=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"content"},[a("h1",[s._v("测试和判断")]),s._v(" "),a("h2",{attrs:{id:"退出和退出状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#退出和退出状态","aria-hidden":"true"}},[s._v("#")]),s._v(" 退出和退出状态")]),s._v(" "),a("h3",{attrs:{id:"退出程序命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#退出程序命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 退出程序命令")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("exit")]),s._v("——退出"),a("code",[s._v("shell")]),s._v("脚本")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("exit 10")]),s._v("返回10给"),a("code",[s._v("shell")]),s._v("，返回值非0，表示不正常退出")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("$?")]),s._v("判断当前"),a("code",[s._v("shell")]),s._v("前一个进程是否正常退出")])])]),s._v(" "),a("h2",{attrs:{id:"测试命令test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试命令test","aria-hidden":"true"}},[s._v("#")]),s._v(" 测试命令test")]),s._v(" "),a("p",[a("code",[s._v("test")]),s._v("命令用于检查文件或者比较值。"),a("code",[s._v("test")]),s._v("可以做以下测试：")]),s._v(" "),a("ul",[a("li",[s._v("文件测试")]),s._v(" "),a("li",[s._v("整数比较测试")]),s._v(" "),a("li",[s._v("字符串测试")])]),s._v(" "),a("p",[a("code",[s._v("test")]),s._v("测试语句可以简化成"),a("code",[s._v("[]")]),s._v("符号。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("test")]),s._v(" EXPRESSION\n\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" EXPRESSION "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" EXPRESSION "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        EXPRESSION is "),a("span",{attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),a("span",{attrs:{class:"token operator"}},[s._v("!")]),s._v(" EXPRESSION\n        EXPRESSION is "),a("span",{attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\nEXPRESSION1 -a EXPRESSION2\n        both EXPRESSION1 and EXPRESSION2 are "),a("span",{attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\nEXPRESSION1 -o EXPRESSION2\n        either EXPRESSION1 or EXPRESSION2 is "),a("span",{attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n-n STRING\n        the length of STRING is nonzero\n\nSTRING equivalent to -n STRING\n\n-z STRING\n        the length of STRING is zero\n\nSTRING1 "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" STRING2\n        the strings are equal\n\nSTRING1 "),a("span",{attrs:{class:"token operator"}},[s._v("!=")]),s._v(" STRING2\n        the strings are not equal\n\nINTEGER1 -eq INTEGER2\n        INTEGER1 is equal to INTEGER2\n\nINTEGER1 -ge INTEGER2\n        INTEGER1 is greater than or equal to INTEGER2\n\nINTEGER1 -gt INTEGER2\n        INTEGER1 is greater than INTEGER2\n\nINTEGER1 -le INTEGER2\n        INTEGER1 is "),a("span",{attrs:{class:"token function"}},[s._v("less")]),s._v(" than or equal to INTEGER2\n\nINTEGER1 -lt INTEGER2\n        INTEGER1 is "),a("span",{attrs:{class:"token function"}},[s._v("less")]),s._v(" than INTEGER2\n\nINTEGER1 -ne INTEGER2\n        INTEGER1 is not equal to INTEGER2\n\nFILE1 -ef FILE2\n        FILE1 and FILE2 have the same device and inode numbers\n\nFILE1 -nt FILE2\n        FILE1 is newer "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("modification date"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" than FILE2\n\nFILE1 -ot FILE2\n        FILE1 is older than FILE2\n\n-b FILE\n        FILE exists and is block special\n\n-c FILE\n        FILE exists and is character special\n\n-d FILE\n        FILE exists and is a directory\n\n-e FILE\n        FILE exists\n\n-f FILE\n        FILE exists and is a regular "),a("span",{attrs:{class:"token function"}},[s._v("file")]),s._v("\n\n-g FILE\n        FILE exists and is set-group-ID\n\n-G FILE\n        FILE exists and is owned by the effective group ID\n\n-h FILE\n        FILE exists and is a symbolic "),a("span",{attrs:{class:"token function"}},[s._v("link")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("same as -L"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n-k FILE\n        FILE exists and has its sticky bit "),a("span",{attrs:{class:"token keyword"}},[s._v("set")]),s._v("\n\n-L FILE\n        FILE exists and is a symbolic "),a("span",{attrs:{class:"token function"}},[s._v("link")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("same as -h"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n-O FILE\n        FILE exists and is owned by the effective user ID\n\n-p FILE\n        FILE exists and is a named pipe\n\n-r FILE\n        FILE exists and "),a("span",{attrs:{class:"token function"}},[s._v("read")]),s._v(" permission is granted\n\n-s FILE\n        FILE exists and has a size greater than zero\n\n-S FILE\n        FILE exists and is a socket\n\n-t FD  "),a("span",{attrs:{class:"token function"}},[s._v("file")]),s._v(" descriptor FD is opened on a terminal\n\n-u FILE\n        FILE exists and its set-user-ID bit is "),a("span",{attrs:{class:"token keyword"}},[s._v("set")]),s._v("\n\n-w FILE\n        FILE exists and "),a("span",{attrs:{class:"token function"}},[s._v("write")]),s._v(" permission is granted\n\n-x FILE\n        FILE exists and execute "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("or search"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" permission is granted\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("root@instance-6w9riila jikeshijian-linux"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token comment"}},[s._v("# test -f ls.txt")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila jikeshijian-linux"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token comment"}},[s._v("# echo $?")]),s._v("\n0\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila jikeshijian-linux"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token comment"}},[s._v("# test -f ll.txt")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila jikeshijian-linux"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token comment"}},[s._v("# echo $?")]),s._v("\n1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila jikeshijian-linux"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token comment"}},[s._v("# [ -e /etc ]")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila jikeshijian-linux"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token comment"}},[s._v("# echo $?")]),s._v("\n0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila jikeshijian-linux"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token comment"}},[s._v("# [[ 5 > 4 ]]")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila jikeshijian-linux"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token comment"}},[s._v("# echo $?")]),s._v("\n0\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila jikeshijian-linux"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token comment"}},[s._v("# [[ 5 < 4 ]]")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila jikeshijian-linux"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token comment"}},[s._v("# echo $?")]),s._v("\n1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila jikeshijian-linux"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token comment"}},[s._v("# [ abc = abc ]")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila jikeshijian-linux"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token comment"}},[s._v("# echo $?")]),s._v("\n0\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila jikeshijian-linux"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token comment"}},[s._v("# [ abc = ab ]")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila jikeshijian-linux"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token comment"}},[s._v("# echo $?")]),s._v("\n1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("code",[s._v("[]")]),s._v("可以扩充成"),a("code",[s._v("[[]]")]),s._v("来支持"),a("code",[s._v("&& || < >")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"使用if-then语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用if-then语句","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用if-then语句")]),s._v(" "),a("p",[a("code",[s._v("if-then")]),s._v("语句的基本用法")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" 测试条件成立 "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 或 命令返回值是否为0\n"),a("span",{attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    执行相应命令\n"),a("span",{attrs:{class:"token keyword"}},[s._v("fi")]),s._v(" 结束\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$UID")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" 0 "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("then")]),s._v(" \n    "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'root'")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("pwd")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'pwd running'")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# abc命令不存在，这个if语句为false")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" abc\n"),a("span",{attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'abc running'")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"使用if-then-else语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用if-then-else语句","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用if-then-else语句")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" 测试条件成立 "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 或 命令返回值是否为0\n"),a("span",{attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    执行相应命令\n"),a("span",{attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    执行其它命令\n"),a("span",{attrs:{class:"token keyword"}},[s._v("fi")]),s._v(" 结束\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$UID")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("!=")]),s._v(" 0 "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'not root user'")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'root user'")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("blockquote",[a("p",[s._v("也可以将"),a("code",[s._v("if")]),s._v("和"),a("code",[s._v("then")]),s._v("写在一行"),a("code",[s._v("if ...; then")])])]),s._v(" "),a("p",[a("code",[s._v("if-else")]),s._v("中也可以添加"),a("code",[s._v("elif")]),s._v("对多个条件进行判断")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" 测试条件成立 "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 或 命令返回值是否为0\n"),a("span",{attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    执行相应命令\n"),a("span",{attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" 测试条件成立 "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    执行相应命令\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    执行其它命令\n"),a("span",{attrs:{class:"token keyword"}},[s._v("fi")]),s._v(" 结束\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$1")]),s._v(" -gt 10 "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'gt 10'")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$1")]),s._v(" -gt 5 "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("' gt 5 '")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'lt 5'")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"嵌套if的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌套if的使用","aria-hidden":"true"}},[s._v("#")]),s._v(" 嵌套if的使用")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" 条件 "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 或 命令\n"),a("span",{attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" 条件 "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 或 命令\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        命令\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}],!1,null,null,null);e.options.__file="28-测试和判断.md";n.default=e.exports}}]);