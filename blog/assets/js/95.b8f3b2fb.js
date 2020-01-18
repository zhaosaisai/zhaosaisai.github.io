(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{195:function(s,n,r){"use strict";r.r(n);var t=r(0),a=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,n=s.$createElement,r=s._self._c||n;return r("div",{staticClass:"content"},[r("h1",[s._v("pwd和ls命令")]),s._v(" "),r("blockquote",[r("p",[r("code",[s._v("linux")]),s._v("中一切皆文件，文件的操作都是通过命令进行")])]),s._v(" "),r("h2",{attrs:{id:"pwd"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pwd","aria-hidden":"true"}},[s._v("#")]),s._v(" pwd")]),s._v(" "),r("p",[r("code",[s._v("pwd")]),s._v("用于显示当前的操作目录")]),s._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila ~"),r("span",{attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{attrs:{class:"token comment"}},[s._v("# pwd")]),s._v("\n/root\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br")])]),r("h2",{attrs:{id:"ls"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ls","aria-hidden":"true"}},[s._v("#")]),s._v(" ls")]),s._v(" "),r("p",[r("code",[s._v("ls")]),s._v("用于显示目录的内容")]),s._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),r("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),r("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),r("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("args"),r("span",{attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),r("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila ~"),r("span",{attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{attrs:{class:"token comment"}},[s._v("# ls /")]),s._v("\nbin  boot  cgroup  dev  etc  flag_ok  home  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  selinux  srv  sys  tmp  usr  var\n"),r("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila ~"),r("span",{attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{attrs:{class:"token comment"}},[s._v("# ls /root")]),s._v("\nappendonly.aof  installed     mydocker         nodes-6381.conf  nodes-6383.conf  nodes-6385.conf  study\ndump.rdb        myDataVolume  nodes-6380.conf  nodes-6382.conf  nodes-6384.conf  packages         test-changelog\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br")])]),r("p",[r("code",[s._v("ls")]),s._v("可以同时显示多个目录的内容")]),s._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila ~"),r("span",{attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{attrs:{class:"token comment"}},[s._v("# ls / /root")]),s._v("\n/:\nbin  boot  cgroup  dev  etc  flag_ok  home  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  selinux  srv  sys  tmp  usr  var\n\n/root:\nappendonly.aof  installed     mydocker         nodes-6381.conf  nodes-6383.conf  nodes-6385.conf  study\ndump.rdb        myDataVolume  nodes-6380.conf  nodes-6382.conf  nodes-6384.conf  packages         test-changelog\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br")])]),r("h3",{attrs:{id:"选项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#选项","aria-hidden":"true"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),r("blockquote",[r("p",[r("code",[s._v("ls")]),s._v("的选项非常多，这里只是常用的一些")])]),s._v(" "),r("h4",{attrs:{id:"l：以行为单位显示目录或文件的详细信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#l：以行为单位显示目录或文件的详细信息","aria-hidden":"true"}},[s._v("#")]),s._v(" "),r("code",[s._v("-l")]),s._v("：以行为单位显示目录或文件的详细信息")]),s._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila ~"),r("span",{attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{attrs:{class:"token comment"}},[s._v("# ls -l")]),s._v("\ntotal 56\n-rw-r--r-- 1 root root   92 Apr 27  2019 appendonly.aof\n-rw-r--r-- 1 root root  176 Apr 27  2019 dump.rdb\ndrwxr-xr-x 3 root root 4096 Apr 27  2019 installed\ndrwxr-xr-x 2 root root 4096 Nov 18 22:37 myDataVolume\ndrwxr-xr-x 2 root root 4096 Nov 19 22:31 mydocker\n-rw-r--r-- 1 root root  781 Apr 27  2019 nodes-6380.conf\n-rw-r--r-- 1 root root  781 Apr 27  2019 nodes-6381.conf\n-rw-r--r-- 1 root root  781 Apr 27  2019 nodes-6382.conf\n-rw-r--r-- 1 root root  781 Apr 27  2019 nodes-6383.conf\n-rw-r--r-- 1 root root  781 Apr 27  2019 nodes-6384.conf\n-rw-r--r-- 1 root root  781 Apr 27  2019 nodes-6385.conf\ndrwxr-xr-x 3 root root 4096 Oct 12 23:42 packages\ndrwxr-xr-x 3 root root 4096 Apr 21  2019 study\ndrwxr-xr-x 5 root root 4096 Oct 13 00:04 test-changelog\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br"),r("span",{staticClass:"line-number"},[s._v("12")]),r("br"),r("span",{staticClass:"line-number"},[s._v("13")]),r("br"),r("span",{staticClass:"line-number"},[s._v("14")]),r("br"),r("span",{staticClass:"line-number"},[s._v("15")]),r("br"),r("span",{staticClass:"line-number"},[s._v("16")]),r("br")])]),r("p",[s._v("第一个字符具有特定的含义")]),s._v(" "),r("ul",[r("li",[r("code",[s._v("-")]),s._v("：表示该文件是一个普通文件")]),s._v(" "),r("li",[r("code",[s._v("d")]),s._v("：表示该文件是一个目录文件")])]),s._v(" "),r("h4",{attrs:{id:"a：显示目录下的所有文件，包括隐藏文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a：显示目录下的所有文件，包括隐藏文件","aria-hidden":"true"}},[s._v("#")]),s._v(" "),r("code",[s._v("-a")]),s._v("：显示目录下的所有文件，包括隐藏文件")]),s._v(" "),r("blockquote",[r("p",[r("code",[s._v("linux")]),s._v("系统中的隐藏文件以"),r("code",[s._v(".")]),s._v("开头")])]),s._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila ~"),r("span",{attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{attrs:{class:"token comment"}},[s._v("# ls -a")]),s._v("\n"),r("span",{attrs:{class:"token keyword"}},[s._v(".")]),s._v("               .bash_history  .bashrc  .dockerinit  .gemrc      installed     .node_repl_history  nodes-6382.conf  nodes-6385.conf  packages           .ssh     test-changelog\n"),r("span",{attrs:{class:"token punctuation"}},[s._v("..")]),s._v("              .bash_logout   .config  dump.rdb     .gitconfig  myDataVolume  nodes-6380.conf     nodes-6383.conf  .npm             .pki               study    .viminfo\nappendonly.aof  .bash_profile  .cshrc   .gem         .gnupg      mydocker      nodes-6381.conf     nodes-6384.conf  .npmrc           .rediscli_history  .tcshrc  .vscode-server\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br")])]),r("h4",{attrs:{id:"r：逆向排序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#r：逆向排序","aria-hidden":"true"}},[s._v("#")]),s._v(" "),r("code",[s._v("-r")]),s._v("：逆向排序")]),s._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila ~"),r("span",{attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{attrs:{class:"token comment"}},[s._v("# ls -lr")]),s._v("\ntotal 56\ndrwxr-xr-x 5 root root 4096 Oct 13 00:04 test-changelog\ndrwxr-xr-x 3 root root 4096 Apr 21  2019 study\ndrwxr-xr-x 3 root root 4096 Oct 12 23:42 packages\n-rw-r--r-- 1 root root  781 Apr 27  2019 nodes-6385.conf\n-rw-r--r-- 1 root root  781 Apr 27  2019 nodes-6384.conf\n-rw-r--r-- 1 root root  781 Apr 27  2019 nodes-6383.conf\n-rw-r--r-- 1 root root  781 Apr 27  2019 nodes-6382.conf\n-rw-r--r-- 1 root root  781 Apr 27  2019 nodes-6381.conf\n-rw-r--r-- 1 root root  781 Apr 27  2019 nodes-6380.conf\ndrwxr-xr-x 2 root root 4096 Nov 19 22:31 mydocker\ndrwxr-xr-x 2 root root 4096 Nov 18 22:37 myDataVolume\ndrwxr-xr-x 3 root root 4096 Apr 27  2019 installed\n-rw-r--r-- 1 root root  176 Apr 27  2019 dump.rdb\n-rw-r--r-- 1 root root   92 Apr 27  2019 appendonly.aof\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br"),r("span",{staticClass:"line-number"},[s._v("12")]),r("br"),r("span",{staticClass:"line-number"},[s._v("13")]),r("br"),r("span",{staticClass:"line-number"},[s._v("14")]),r("br"),r("span",{staticClass:"line-number"},[s._v("15")]),r("br"),r("span",{staticClass:"line-number"},[s._v("16")]),r("br")])]),r("blockquote",[r("p",[r("code",[s._v("-r")]),s._v("默认是以文件名进行排序的，如果你想以时间的方式进行排序，可以指定"),r("code",[s._v("-t")]),s._v("参数。"),r("code",[s._v("-t")]),s._v("就是以时间顺序显示目录信息")])]),s._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila ~"),r("span",{attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{attrs:{class:"token comment"}},[s._v("# ls -lrt")]),s._v("\ntotal 56\ndrwxr-xr-x 3 root root 4096 Apr 21  2019 study\ndrwxr-xr-x 3 root root 4096 Apr 27  2019 installed\n-rw-r--r-- 1 root root  781 Apr 27  2019 nodes-6385.conf\n-rw-r--r-- 1 root root  781 Apr 27  2019 nodes-6380.conf\n-rw-r--r-- 1 root root  781 Apr 27  2019 nodes-6384.conf\n-rw-r--r-- 1 root root  781 Apr 27  2019 nodes-6383.conf\n-rw-r--r-- 1 root root  781 Apr 27  2019 nodes-6381.conf\n-rw-r--r-- 1 root root  781 Apr 27  2019 nodes-6382.conf\n-rw-r--r-- 1 root root  176 Apr 27  2019 dump.rdb\n-rw-r--r-- 1 root root   92 Apr 27  2019 appendonly.aof\ndrwxr-xr-x 3 root root 4096 Oct 12 23:42 packages\ndrwxr-xr-x 5 root root 4096 Oct 13 00:04 test-changelog\ndrwxr-xr-x 2 root root 4096 Nov 18 22:37 myDataVolume\ndrwxr-xr-x 2 root root 4096 Nov 19 22:31 mydocker\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br"),r("span",{staticClass:"line-number"},[s._v("12")]),r("br"),r("span",{staticClass:"line-number"},[s._v("13")]),r("br"),r("span",{staticClass:"line-number"},[s._v("14")]),r("br"),r("span",{staticClass:"line-number"},[s._v("15")]),r("br"),r("span",{staticClass:"line-number"},[s._v("16")]),r("br")])]),r("h4",{attrs:{id:"r：递归显示目录下面的所有文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#r：递归显示目录下面的所有文件","aria-hidden":"true"}},[s._v("#")]),s._v(" "),r("code",[s._v("-R")]),s._v("：递归显示目录下面的所有文件")]),s._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila yorkie"),r("span",{attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{attrs:{class:"token comment"}},[s._v("# ls -R")]),s._v("\n.:\nappveyor.yml  bin  CHANGELOG.md  HOOKS.md  LICENSE  package.json  README.md  src  __tests__\n\n./bin:\ninstall.js  uninstall.js\n\n./src:\nhooks.json  install.js  runner.js  uninstall.js  utils\n\n./src/utils:\nfind-hooks-dir.js  find-parent.js  get-hook-script.js  is.js\n\n./__tests__:\nindex.js\n"),r("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila yorkie"),r("span",{attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{attrs:{class:"token comment"}},[s._v("# ls -lR")]),s._v("\n.:\ntotal 36\n-rw-r--r-- 1 root root  468 Oct 26  1985 appveyor.yml\ndrwxr-xr-x 2 root root 4096 Oct 12 23:56 bin\n-rw-r--r-- 1 root root 2193 Oct 26  1985 CHANGELOG.md\n-rw-r--r-- 1 root root  785 Oct 26  1985 HOOKS.md\n-rw-r--r-- 1 root root 1066 Oct 26  1985 LICENSE\n-rw-r--r-- 1 root root 1889 Oct 12 23:56 package.json\n-rw-r--r-- 1 root root  626 Oct 26  1985 README.md\ndrwxr-xr-x 3 root root 4096 Oct 13 00:03 src\ndrwxr-xr-x 2 root root 4096 Oct 12 23:56 __tests__\n\n./bin:\ntotal 8\n-rwxr-xr-x 1 root root 647 Oct 26  1985 install.js\n-rwxr-xr-x 1 root root 253 Oct 26  1985 uninstall.js\n\n./src:\ntotal 20\n-rw-r--r-- 1 root root  347 Oct 26  1985 hooks.json\n-rw-r--r-- 1 root root 3386 Oct 13 00:03 install.js\n-rw-r--r-- 1 root root  480 Oct 26  1985 runner.js\n-rw-r--r-- 1 root root  684 Oct 26  1985 uninstall.js\ndrwxr-xr-x 2 root root 4096 Oct 12 23:56 utils\n\n./src/utils:\ntotal 16\n-rw-r--r-- 1 root root  700 Oct 26  1985 find-hooks-dir.js\n-rw-r--r-- 1 root root  319 Oct 26  1985 find-parent.js\n-rw-r--r-- 1 root root 2543 Oct 26  1985 get-hook-script.js\n-rw-r--r-- 1 root root  597 Oct 26  1985 is.js\n\n./__tests__:\ntotal 8\n-rw-r--r-- 1 root root 5331 Oct 26  1985 index.js\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br"),r("span",{staticClass:"line-number"},[s._v("12")]),r("br"),r("span",{staticClass:"line-number"},[s._v("13")]),r("br"),r("span",{staticClass:"line-number"},[s._v("14")]),r("br"),r("span",{staticClass:"line-number"},[s._v("15")]),r("br"),r("span",{staticClass:"line-number"},[s._v("16")]),r("br"),r("span",{staticClass:"line-number"},[s._v("17")]),r("br"),r("span",{staticClass:"line-number"},[s._v("18")]),r("br"),r("span",{staticClass:"line-number"},[s._v("19")]),r("br"),r("span",{staticClass:"line-number"},[s._v("20")]),r("br"),r("span",{staticClass:"line-number"},[s._v("21")]),r("br"),r("span",{staticClass:"line-number"},[s._v("22")]),r("br"),r("span",{staticClass:"line-number"},[s._v("23")]),r("br"),r("span",{staticClass:"line-number"},[s._v("24")]),r("br"),r("span",{staticClass:"line-number"},[s._v("25")]),r("br"),r("span",{staticClass:"line-number"},[s._v("26")]),r("br"),r("span",{staticClass:"line-number"},[s._v("27")]),r("br"),r("span",{staticClass:"line-number"},[s._v("28")]),r("br"),r("span",{staticClass:"line-number"},[s._v("29")]),r("br"),r("span",{staticClass:"line-number"},[s._v("30")]),r("br"),r("span",{staticClass:"line-number"},[s._v("31")]),r("br"),r("span",{staticClass:"line-number"},[s._v("32")]),r("br"),r("span",{staticClass:"line-number"},[s._v("33")]),r("br"),r("span",{staticClass:"line-number"},[s._v("34")]),r("br"),r("span",{staticClass:"line-number"},[s._v("35")]),r("br"),r("span",{staticClass:"line-number"},[s._v("36")]),r("br"),r("span",{staticClass:"line-number"},[s._v("37")]),r("br"),r("span",{staticClass:"line-number"},[s._v("38")]),r("br"),r("span",{staticClass:"line-number"},[s._v("39")]),r("br"),r("span",{staticClass:"line-number"},[s._v("40")]),r("br"),r("span",{staticClass:"line-number"},[s._v("41")]),r("br"),r("span",{staticClass:"line-number"},[s._v("42")]),r("br"),r("span",{staticClass:"line-number"},[s._v("43")]),r("br"),r("span",{staticClass:"line-number"},[s._v("44")]),r("br"),r("span",{staticClass:"line-number"},[s._v("45")]),r("br"),r("span",{staticClass:"line-number"},[s._v("46")]),r("br"),r("span",{staticClass:"line-number"},[s._v("47")]),r("br"),r("span",{staticClass:"line-number"},[s._v("48")]),r("br"),r("span",{staticClass:"line-number"},[s._v("49")]),r("br"),r("span",{staticClass:"line-number"},[s._v("50")]),r("br"),r("span",{staticClass:"line-number"},[s._v("51")]),r("br")])]),r("h4",{attrs:{id:"h：以可读的方式显示文件的大小"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#h：以可读的方式显示文件的大小","aria-hidden":"true"}},[s._v("#")]),s._v(" "),r("code",[s._v("-h")]),s._v("：以可读的方式显示文件的大小")]),s._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance-6w9riila linux"),r("span",{attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{attrs:{class:"token comment"}},[s._v("# ls -lh .")]),s._v("\ntotal 20K\n-rw-r--r-- 1 root root   15 Dec 22 17:34 "),r("span",{attrs:{class:"token function"}},[s._v("file")]),s._v("\ndrwxr-xr-x 2 root root 4.0K Dec 22 17:30 tmp\n-rw-r--r-- 1 root root  10K Dec 22 18:22 tmp.tar\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br")])])])}],!1,null,null,null);a.options.__file="03-pwd和ls命令.md";n.default=a.exports}}]);