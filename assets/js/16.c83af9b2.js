(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{340:function(s,a,e){"use strict";e.r(a);var t=e(0),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"git-远程操作进阶"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-远程操作进阶"}},[s._v("#")]),s._v(" Git 远程操作进阶")]),s._v(" "),e("p",[s._v("别名、git refspec、注意事项、远程标签、git gc")]),s._v(" "),e("h2",{attrs:{id:"git别名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git别名"}},[s._v("#")]),s._v(" git别名")]),s._v(" "),e("p",[s._v("给branch命令起个别名叫br")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global alias.br branch\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#以后可以用git br 代替 git branch")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("可以根据自己的喜好，将一些难记的命令定义成自己容易记住的命令，比如：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global alias.st status\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global alias.co checkout\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global alias.unstage "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'reset HEAD'")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global alias.ui "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'!gitk'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#前面加!表示执行外部命令，即git ui == gitk")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"git-refspec"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-refspec"}},[s._v("#")]),s._v(" git refspec")]),s._v(" "),e("p",[s._v("1.本地develop分支推送到远程，但是远程没有对应的分支")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --set-upstream origin develop\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#远程会创建一个develop分支，与本地的做关联")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#或者使用git push -u origin develop，新版本git推荐使用上一种方式")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("注意完整写法：\ngit push --set-upstream origin src本地分支:dest远程分支\n若是“:dest远程分支”省略，则会在远程创建一个与本地分支同名的远程分支，如上所示。")]),s._v(" "),e("p",[s._v("2.远程有dev分支，但是本地没有与之对应的分支。本地要基于远程dev分支创建一个与之关联的分支")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b dev origin/dev\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#或者新版本git使用命令git checkout --track origin/dev")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("3.删除远程分支develop")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#第一种方式（老版本）")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin :develop\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#原理：将本地的一个空分支推送到远程develop分支")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#第二种方法（新版本）")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --delete develop\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("4.远程分支develop重命名为dev分支")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#原理：先删后加")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --delete develop\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --set-upstream origin develop:dev\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#此处的develop表示的是当前本地有一个分支叫develop，将其与远程的dev分支做关联。若远程没有dev分支，则会创建一个dev分支")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("5.在远程手动删除develop分支后，需要本地更新远程分支的映射")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote prune origin\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#远程已经删除的分支，本地将其映射裁剪掉")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("6.在缺省情况下，refspec会被git remote add命令自动生成，git会获取远端上refs/heads下所有引用，并将它们写到本地的refs/remotes/origin目录下。所以，如果远端有一个master分支，你在本地就可以通过下面几种方式来访问它们的历史记录")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git log origin/master\ngit log remotes/origin/master\ngit log refs/remotes/origin/master\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),e("p",[s._v("1、若本地分支dev与之关联的远程分支develop不同名，则推送的时候需要把命令写全")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin dev:develop\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#简写git push会报错")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("2、push和pull的完整写法：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin src本地分支:dest远程分支\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin src远程分支:dest本地分支\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"远程标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程标签"}},[s._v("#")]),s._v(" 远程标签")]),s._v(" "),e("p",[s._v("1.创建本地标签")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag v1.0\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#不带注释的标签")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a v2.0 -m "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'v2.0发布'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#带注释的标签")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a v3.0 -m "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'v3.0发布'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("2.将标签v1.0推送到远程（push默认不推送标签）")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin v1.0\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#github上面会把v1.0显示出来，并且打包v1.0对应commit_id的仓库，提供下载")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("注意完整写法\ngit push origin refs/tags/v1.0:refs/tags/v1.0")]),s._v(" "),e("p",[s._v("3.将标签批量推送到远程")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin v1.0 v2.0 v3.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("4.将本地尚未推送到远程的所有标签都推送过去")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --tags\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("5.删除远程标签v3.0")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#第一种方式（老版本）")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin :refs/tags/v3.0\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#原理：将本地一个空标签推送到远程")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#第二种方法（新版本）")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --delete tag v3.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("6.拉取远程的标签到本地")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#若只想拉取某个特地的标签")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch origin tag v3.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"git-gc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-gc"}},[s._v("#")]),s._v(" git gc")]),s._v(" "),e("p",[s._v("git gc 主要用于打包，使用该命令，用户是感知不到其变化的。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" gc\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("它会进行一系列打包优化，诸如：")]),s._v(" "),e("p",[s._v("把.git/refs/存储的一些本地分支、远程分支、标签的信息打包到.git/packed-refs这个文件里")]),s._v(" "),e("p",[s._v("有兴趣的话，可以打开这个文件看一下")])])}),[],!1,null,null,null);a.default=n.exports}}]);