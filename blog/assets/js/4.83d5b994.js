(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{243:function(s,t,e){"use strict";e.r(t);var a=e(0),i=Object(a.a)({},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content"},[e("h1",[s._v("Centos6.8使用rpm安装mysql5.7")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),e("p",[s._v("首先到"),e("a",{attrs:{href:"https://dev.mysql.com/downloads/repo/yum/",target:"_blank",rel:"noopener noreferrer"}},[s._v("mysql"),e("OutboundLink")],1),s._v("官网下载页面，根据你自己的需求，选择适合自己的版本下载。这里我下载的是"),e("code",[s._v("64位的mysql@5.7")]),s._v("。")]),s._v(" "),s._m(2),s._m(3),s._v(" "),e("p",[s._v("在上述压缩包所在目录执行：")]),s._v(" "),s._m(4),s._m(5),s._v(" "),e("p",[s._v("直接使用下面的命令进行安装。")]),s._v(" "),s._m(6),s._m(7),s._v(" "),s._m(8),s._v(" "),s._m(9),s._v(" "),s._m(10),s._m(11),s._v(" "),s._m(12),s._m(13),s._v(" "),s._m(14),s._v(" "),s._m(15),s._v(" "),s._m(16),s._v(" "),s._m(17),s._v(" "),s._m(18),e("p",[s._v("呃呃呃呃呃呃呃，什么鬼，报错了：")]),s._v(" "),s._m(19),s._v(" "),s._m(20),s._v(" "),s._m(21),s._v(" "),s._m(22),e("p",[s._v("在第26行的位置，有如下配置。")]),s._v(" "),s._m(23),s._m(24),s._v(" "),s._m(25),e("p",[s._v("找到这么一句话:")]),s._v(" "),s._m(26),s._m(27),s._v(" "),s._m(28),e("p",[s._v("铛铛铛铛铛，登录成功，bingo。\n既然登录成功了，来，简单的操作一下。")]),s._v(" "),s._m(29),e("p",[s._v("什么鬼，怎么又错了。")]),s._v(" "),s._m(30),s._m(31),s._v(" "),s._m(32),s._m(33),s._v(" "),s._m(34),s._m(35)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("使用"),t("code",[this._v("mysql")]),this._v("也有一段时间了，最近想深入的学习一下。所以嘞，打算从头到尾把知识点好好的梳理一下。不管怎么学，先把环境搞好再说。图个方便，在虚拟机上直接使用"),t("code",[this._v("rpm")]),this._v("安装了"),t("code",[this._v("mysql5.7")]),this._v("。不难，还是有坑的，简单的记录一下吧。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"下载rpm包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载rpm包","aria-hidden":"true"}},[this._v("#")]),this._v(" 下载"),t("code",[this._v("rpm")]),this._v("包")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("wget")]),this._v(" https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-5.7.19-1.el6.x86_64.rpm-bundle.tar\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"解压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压","aria-hidden":"true"}},[this._v("#")]),this._v(" 解压")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("tar")]),this._v(" -xvf mysql-5.7.19-1.el6.x86_64.rpm-bundle.tar\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"mysql-server安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-server安装","aria-hidden":"true"}},[this._v("#")]),this._v(" mysql-server安装")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("rpm -ivh mysql-community-server-5.7.19-1.el6.x86_64.rpm\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("所以，你可能会遇到下面的"),t("code",[this._v("error")]),this._v("：")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("img",{attrs:{src:"/blog/mysql1.png",alt:"img"}})])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("先看一下最后一条错误提示，很明显，就是说我们没有安装"),t("code",[this._v("mysql-client")]),this._v("。所以，先把这个小东西给安装了。同样执行上述的命令。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("rpm -ivh mysql-community-client-5.7.19-1.el6.x86_64.rpm\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("对于上面的三条错误，是因为系统中缺少"),t("code",[this._v("numactl")]),this._v("。所以，先使用"),t("code",[this._v("yum")]),this._v("进行安装。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("yum "),t("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" -y numactl\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("安装成功之后，再执行上述的"),t("code",[this._v("mysql-server")]),this._v("安装命令。bingo：")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("img",{attrs:{src:"/blog/mysql2.png",alt:"img"}})])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("当你看到这些输出，说明你已经成功的安装了"),t("code",[this._v("mysql-server")]),this._v("和"),t("code",[this._v("mysql-client")]),this._v("在你的系统中。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#登录","aria-hidden":"true"}},[this._v("#")]),this._v(" 登录")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("执行以下命令登录"),t("code",[this._v("mysql")]),this._v("：")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("mysql -uroot -p\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("img",{attrs:{src:"/blog/mysql3.png",alt:"img"}})])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("提示告诉我们说，访问被拒绝了。什么，以前不都是这样登录的吗，为啥会被拒绝。哈哈哈😄，其实啊，不同的"),t("code",[this._v("mysql")]),this._v("版本，对待首次登录的操作是不一样的。对于"),t("code",[this._v("mysql@5.7")]),this._v("来说，可以通过下面的方式看看有什么玄机。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("strong",[this._v("打开mysql的配置文件")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("vim /etc/my.conf\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("26 log-error"),t("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("/var/log/mysqld.log\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("这行配置指定了"),t("code",[this._v("mysql")]),this._v("的标准错误输出日志文件，打开这个文件(内容可能有点多，使用如下命令打开)。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("head")]),this._v(" -100 /var/log/mysqld.log\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("A temporary password is generated "),t("span",{attrs:{class:"token keyword"}},[this._v("for")]),this._v(" root@localhost: oggcq"),t("span",{attrs:{class:"token operator"}},[this._v("!")]),this._v("hnq6Ek\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("这句话就是说，我们在安装"),t("code",[this._v("mysql-server")]),this._v("的时候，"),t("code",[this._v("mysql")]),this._v("给我们生成了一个临时的密码，这个密码就是我们首次登录的时候需要输入的密码（你的可能和这个不一样）。所以，带上这个密码登录。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("mysql -uroot -p"),t("span",{attrs:{class:"token string"}},[this._v("'oggcq!hnq6Ek'")]),this._v("\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("show databases"),t("span",{attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("ERROR 1820 "),t("span",{attrs:{class:"token punctuation"}},[this._v("(")]),this._v("HY000"),t("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v(": You must reset your password using ALTER USER statement before executing this statement.\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("但是这个错误很好理解，就是说，我们首次登录成功之后，"),t("code",[this._v("mysql")]),this._v("会强制我们修改登录密码的。好吧，那就修改吧。")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("alter user "),e("span",{attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),e("span",{attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" identified by "),e("span",{attrs:{class:"token string"}},[s._v("'123456'")]),e("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("修改成功之后，退出客户端，用新密码重新登录"),t("code",[this._v("mysql")]),this._v("。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("mysql -uroot -p123456\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("至此，"),t("code",[this._v("mysql")]),this._v("算是成功安装到你的系统中了。好了，我还能学，继续深入"),t("code",[this._v("mysql")]),this._v("了。")])}],!1,null,null,null);i.options.__file="Centos6.8使用rpm安装mysql5.7.md";t.default=i.exports}}]);