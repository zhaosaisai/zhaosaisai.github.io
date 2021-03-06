#!/usr/bin/env sh

set -e

NODE=`which node`

$NODE ./linux.js
$NODE ./sync.js

test $1 && [ 1 = $1 ] && cd articles && vuepress build && cd -

git status

git add -A

git commit -m "deploy in `date +"%Y-%m-%d %H:%m:%S"`"

git push origin master
