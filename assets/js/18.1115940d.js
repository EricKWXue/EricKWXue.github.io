(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{342:function(s,e,a){"use strict";a.r(e);var t=a(0),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git-cherry-pick与rebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-cherry-pick与rebase"}},[s._v("#")]),s._v(" Git cherry-pick与rebase")]),s._v(" "),a("p",[s._v("cherry-pick、rebase")]),s._v(" "),a("h2",{attrs:{id:"cherry-pick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cherry-pick"}},[s._v("#")]),s._v(" cherry-pick")]),s._v(" "),a("p",[s._v("作用：将某一个分支上的提交应用到另一个分支上")]),s._v(" "),a("p",[s._v("应用场景：开发者在develop1分支上开发完新功能后，发现错了，这个功能应该在develop2上进行开发，这时候就可以使用cherry-pick将develop1上的提交应用上develop2上")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将develop1上的提交应用上develop2上")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout develop2\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick 5a0d3d2f\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#5a0d3d2f是develop1上提交的新功能commit_id")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#回退develop1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout develop1\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard HEAD^\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("若是develop1上提交了多次，即：多个commit_id需要cherry-pick到develop2，那需要一个个逐一cherry-pick，否则会产生冲突。")]),s._v(" "),a("h2",{attrs:{id:"rebase原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebase原理"}},[s._v("#")]),s._v(" rebase原理")]),s._v(" "),a("p",[s._v("变基（改变分支的根基）、衍合")]),s._v(" "),a("p",[s._v("rebase的功能类似于merge")]),s._v(" "),a("p",[s._v("1、merge的原理如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/views-img/merge%E5%8E%9F%E7%90%86.png",alt:"merge原理"}})]),s._v(" "),a("p",[s._v("mywork分支所有的提交为C6，它在merge origin分支时，会找到C4和C6的共同祖先C2，将C2、C4、C6进行三方合并，产生一个新的提交点C7。此时C7的父亲节点有两个，为C4和C6")]),s._v(" "),a("p",[s._v("2、rebase的原理如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/views-img/rebase%E5%8E%9F%E7%90%861.png",alt:"rebase原理1"}})]),s._v(" "),a("p",[s._v("mywork分支所有的提交为C6，它在rebase origin分支时，会将C5和C4进行合并形成C5‘，再C6和C5‘进行合并形成C6’。此时，mywork原来所处分支的C5、C6就被废弃掉了，整个提交历史就变成一条直线，如下图所示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/views-img/rebase%E5%8E%9F%E7%90%862.png",alt:"rebase原理2"}})]),s._v(" "),a("p",[s._v("值得注意的是：rebase这样的合并，会改变提交历史。")]),s._v(" "),a("h2",{attrs:{id:"rebase的注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebase的注意事项"}},[s._v("#")]),s._v(" rebase的注意事项")]),s._v(" "),a("p",[s._v("1.rebase过程中会产生冲突，解决中途后，使用git add添加，然后执行git rebase --continue，接下来git会继续应用余下的补丁。")]),s._v(" "),a("p",[s._v("2.任何时候都可以通过git rebase --abort命令终止rebase，分支会恢复到rebase开始前的状态")]),s._v(" "),a("p",[s._v("3.千万不要对master分支执行rebase，否则会引起很多问题。一般来说，执行rebase的分支都是自己的本地分支，没有推送到远程版本库。因为rebase会改变提交历史，在与别人协作开发共享分支的时候，会出现问题。")]),s._v(" "),a("h2",{attrs:{id:"rebase实战"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebase实战"}},[s._v("#")]),s._v(" rebase实战")]),s._v(" "),a("p",[s._v("1.以上图为例，目前origin指向C4，mywork指向C6，共同祖先为C2")]),s._v(" "),a("p",[s._v("2.当前所处mywork分支，对mywork分支进行变基，根基由C2变为C4（即：origin）")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase origin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3.首先C4和C5进行合并，若是冲突，则需要处理，生成C5’")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#若不需要C5的修改，只保留C4原样就行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase --skip\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#若是需要C5的修改，则需要先手动合并")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase --continue\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("4.其次C6和C5'进行合并，若是冲突，则需要处理，生成C6’")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#若不需要C6的修改，只保留C5'原样就行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase --skip\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#若是需要C6的修改，则需要先手动合并")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase --continue\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("5.之后，原有的C5、C6就会被git gc当做垃圾回收掉。整个提交历史变成一条直线。")])])}),[],!1,null,null,null);e.default=r.exports}}]);