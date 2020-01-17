(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{172:function(s,e,a){"use strict";a.r(e);var t=a(0),n=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"content"},[a("h1",[s._v("网络管理和配置文件")]),s._v(" "),a("p",[s._v("网络服务管理程序分为两种，分别是"),a("code",[s._v("SySv")]),s._v("和"),a("code",[s._v("systemd")]),s._v("。")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("systemd")]),s._v("是"),a("code",[s._v("centos7")]),s._v("开始提供的")])]),s._v(" "),a("p",[a("code",[s._v("SySv")]),s._v("管理程序一般通过"),a("code",[s._v("service")]),s._v("命令操作。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("service")]),s._v(" network start"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("stop"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("restart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"网络配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络配置文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 网络配置文件")]),s._v(" "),a("p",[s._v("网卡的配置文件使用的是"),a("code",[s._v("ifcfg-eth0")]),s._v("，其中"),a("code",[s._v("-eth0")]),s._v("后缀可能会随着你网卡的改变而变化。和主机名相关的配置文件是"),a("code",[s._v("/etc/hosts")]),s._v("。")]),s._v(" "),a("blockquote",[a("p",[s._v("网卡的配置文件在"),a("code",[s._v("/etc/sysconfig/network-scripts/")])])]),s._v(" "),a("h3",{attrs:{id:"查看网络状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看网络状态","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看网络状态")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("service")]),s._v(" network status\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"/blog/lsz/service1.png",alt:""}})]),s._v(" "),a("p",[s._v("将配置还原成默认状态")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("service")]),s._v(" network restart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("也可以使用"),a("code",[s._v("systemd")]),s._v("来管理网络")]),s._v(" "),a("p",[a("img",{attrs:{src:"/blog/lsz/service2.png",alt:""}})]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("service")]),s._v("和"),a("code",[s._v("systemd")]),s._v("管理网络的方式推荐使用其一。使用一个，把另一个给禁用掉。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/blog/lsz/service3.png",alt:""}})]),s._v(" "),a("p",[s._v("关闭"),a("code",[s._v("network")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/blog/lsz/service4.png",alt:""}})]),s._v(" "),a("blockquote",[a("p",[s._v("启用的命令是："),a("code",[s._v("chkconfig --level 2345 network on")])])]),s._v(" "),a("p",[s._v("关闭"),a("code",[s._v("systemd")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/blog/lsz/service5.png",alt:""}})]),s._v(" "),a("blockquote",[a("p",[s._v("启用的命令是："),a("code",[s._v("systemdel enable NetworkManager")])])]),s._v(" "),a("p",[s._v("查看主机名的命令"),a("code",[s._v("hostname")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("hostname")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("设置一个新的主机名")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("hostname")]),s._v(" zhao.saisai\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("设置一个永久生效的主机名称")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("hostnamectl set-hostname zhao.saisai\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("设置完成后，需要在"),a("code",[s._v("/etc/hosts")]),s._v("文件中写上主机名和"),a("code",[s._v("ip")]),s._v("地址的对应关系")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("127.0.0.1 zhao.saisai\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}],!1,null,null,null);n.options.__file="17-网络管理和配置文件.md";e.default=n.exports}}]);